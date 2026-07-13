// Vexai chat widget — drop-in, geen dependencies
(function() {
  'use strict';

  const CONFIG = {
    webhookLead: 'https://n8n.srv1231818.hstgr.cloud/webhook/vexai-website-lead',
    webhookBooking: 'https://n8n.srv1231818.hstgr.cloud/webhook/vexai-kennismaking',
    autoOpenSeconds: 5,
    position: 'bottom-right'
  };

  let state = {
    step: 'greet',
    leadChannel: null,
    leadData: {},
    bookingData: {}
  };

  // --- stylesheet: try multiple discovery strategies, fallback to root ---
  if (!document.getElementById('vexai-css')) {
    const link = document.createElement('link');
    link.id = 'vexai-css';
    link.rel = 'stylesheet';
    // Strategy 1: data-css attribute on the script tag
    const ownScript = document.querySelector('script[data-vexai-css]');
    if (ownScript && ownScript.getAttribute('data-vexai-css')) {
      link.href = ownScript.getAttribute('data-vexai-css');
    } else {
      // Strategy 2: currentScript.src
      const cs = document.currentScript;
      if (cs && cs.src) {
        link.href = cs.src.replace(/vexai-widget\.js.*/, 'vexai-widget.css');
      } else {
        // Strategy 3: same directory as page
        const pageUrl = new URL(window.location.href);
        link.href = new URL('./vexai-widget.css', pageUrl).href;
      }
    }
    document.head.appendChild(link);
  }

  // --- HTML root ---
  const launcher = document.createElement('button');
  launcher.className = 'vexai-launcher';
  launcher.setAttribute('aria-label', 'Open chat met Vexai');
  launcher.innerHTML = '💬';
  launcher.classList.add('hidden');

  const panel = document.createElement('div');
  panel.className = 'vexai-panel';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-label', 'Vexai chat');
  panel.innerHTML = `
    <div class="vexai-header">
      <div>
        <div class="vexai-header-title">Vexai</div>
        <div class="vexai-header-sub">Altijd bereikbaar, zonder gedoe</div>
      </div>
      <button class="vexai-close" aria-label="Sluiten">×</button>
    </div>
    <div class="vexai-body" id="vexai-body"></div>
    <div class="vexai-footer">Antwoord meestal binnen 1 minuut</div>
  `;

  document.body.appendChild(launcher);
  document.body.appendChild(panel);

  const body = panel.querySelector('#vexai-body');
  const close = panel.querySelector('.vexai-close');

  function openPanel() {
    panel.classList.add('open');
    launcher.classList.add('hidden');
    if (state.step === 'greet' && body.children.length === 0) {
      showGreeting();
    }
  }
  function closePanel() {
    panel.classList.remove('open');
    launcher.classList.remove('hidden');
  }
  function scrollBottom() { body.scrollTop = body.scrollHeight; }

  function addMessage(text, who = 'bot', delay = 0) {
    return new Promise(resolve => {
      setTimeout(() => {
        const m = document.createElement('div');
        m.className = 'vexai-msg ' + who;
        m.textContent = text;
        body.appendChild(m);
        scrollBottom();
        resolve();
      }, delay);
    });
  }

  function showTyping() {
    const t = document.createElement('div');
    t.className = 'vexai-typing';
    t.innerHTML = '<span></span><span></span><span></span>';
    body.appendChild(t);
    scrollBottom();
    return t;
  }

  function choices(items) {
    const wrap = document.createElement('div');
    wrap.className = 'vexai-choices';
    items.forEach(it => {
      const b = document.createElement('button');
      b.className = 'vexai-choice';
      b.textContent = it.label;
      b.addEventListener('click', () => {
        wrap.remove();
        addMessage(it.label, 'user', 100).then(() => it.onClick());
      });
      wrap.appendChild(b);
    });
    body.appendChild(wrap);
    scrollBottom();
  }

  function formLead() {
    const f = document.createElement('form');
    f.className = 'vexai-form';
    f.innerHTML = `
      <input class="vexai-input" name="firstName" placeholder="Voornaam" required>
      <input class="vexai-input" name="email" type="email" placeholder="Email" required>
      <input class="vexai-input" name="phone" type="tel" placeholder="WhatsApp-nummer (incl. 06)">
      <textarea class="vexai-input" name="message" placeholder="Waar wil je hulp mee? (kort)" required></textarea>
      <button class="vexai-submit" type="submit">Verstuur</button>
    `;
    f.addEventListener('submit', e => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(f).entries());
      f.querySelector('button').disabled = true;
      f.querySelector('button').textContent = 'Versturen...';
      submitLead(data);
    });
    body.appendChild(f);
    scrollBottom();
  }

  function formBooking(channelLabel) {
    const f = document.createElement('form');
    f.className = 'vexai-form';
    f.innerHTML = `
      <input class="vexai-input" name="firstName" placeholder="Voornaam" required>
      <input class="vexai-input" name="email" type="email" placeholder="Email" required>
      <input class="vexai-input" name="phone" type="tel" placeholder="WhatsApp-nummer (incl. 06)" required>
      <input class="vexai-input" name="company" placeholder="Bedrijfsnaam">
      <textarea class="vexai-input" name="message" placeholder="Kort: waar wil je het over hebben?" required></textarea>
      <button class="vexai-submit" type="submit">Plan mijn gesprek</button>
    `;
    f.addEventListener('submit', e => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(f).entries());
      data.intent = 'demo';
      data.channel = channelLabel;
      f.querySelector('button').disabled = true;
      f.querySelector('button').textContent = 'Plannen...';
      submitBooking(data);
    });
    body.appendChild(f);
    scrollBottom();
  }

  async function submitLead(data) {
    try {
      const r = await fetch(CONFIG.webhookLead, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.assign({}, data, { source: 'vexai-widget', submittedAt: new Date().toISOString() }))
      });
      if (!r.ok) throw new Error('HTTP ' + r.status);
      const ok = document.createElement('div');
      ok.className = 'vexai-success';
      ok.innerHTML = '✅ Gelukt. We mailen je binnen 1 minuut, en je krijgt een seintje op WhatsApp.';
      body.appendChild(ok);
      scrollBottom();
    } catch (err) {
      addMessage('Hmm, dat lukte niet. Probeer WhatsApp: +31 6 1326 4124 of mail julian@teamvexai.nl', 'bot', 0);
    }
  }

  async function submitBooking(data) {
    try {
      const r = await fetch(CONFIG.webhookBooking, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.assign({}, data, { source: 'vexai-widget-booking', submittedAt: new Date().toISOString() }))
      });
      if (!r.ok) throw new Error('HTTP ' + r.status);
      const ok = document.createElement('div');
      ok.className = 'vexai-success';
      ok.innerHTML = '✅ Demo geboekt. Je krijgt direct een bevestiging in je inbox.';
      body.appendChild(ok);
      scrollBottom();
    } catch (err) {
      addMessage('Plan lukte niet. Mail julian@teamvexai.nl, dan fixen we het handmatig.', 'bot', 0);
    }
  }

  async function showGreeting() {
    state.step = 'greet';
    const t = showTyping();
    await addMessage('Hé, welkom bij Vexai. Wat is jouw ding?', 'bot', 600);
    t.remove();
    choices([
      { label: 'Ik wil een demo plannen', onClick: () => showChannel() },
      { label: 'Ik heb een vraag', onClick: () => showQuestion() },
      { label: 'Even rondkijken', onClick: () => showExplore() }
    ]);
  }

  async function showChannel() {
    state.step = 'channel';
    state.leadChannel = 'demo';
    const t = showTyping();
    await addMessage('Top, plan staat. Waar krijg je liever de uitnodiging?', 'bot', 500);
    t.remove();
    choices([
      { label: 'E-mail', onClick: () => startBooking('E-mail') },
      { label: 'WhatsApp', onClick: () => startBooking('WhatsApp') }
    ]);
  }

  async function startBooking(channelLabel) {
    state.leadChannel = channelLabel;
    addMessage(channelLabel, 'user', 200);
    const t = showTyping();
    await addMessage('Laat je gegevens achter, dan stuur ik je een paar tijdsloten.', 'bot', 500);
    t.remove();
    formBooking(channelLabel);
  }

  async function showQuestion() {
    state.step = 'question';
    const t = showTyping();
    await addMessage('Tuurlijk, stel je vraag. Ik lees alles.', 'bot', 500);
    t.remove();
    formLead();
  }

  async function showExplore() {
    state.step = 'explore';
    const t = showTyping();
    await addMessage('Prima, geen druk. Kijk rustig rond. Als je iets wil weten, stuur een DM of plan direct een kort gesprek.', 'bot', 500);
    t.remove();
    choices([
      { label: 'Plan toch een gesprek', onClick: () => showChannel() }
    ]);
  }

  // --- events ---
  launcher.addEventListener('click', openPanel);
  close.addEventListener('click', closePanel);

  // --- auto-open after delay ---
  setTimeout(() => {
    if (!panel.classList.contains('open')) {
      launcher.classList.remove('hidden');
      launcher.classList.add('vexai-pulse');
    }
  }, CONFIG.autoOpenSeconds * 1000);

  // --- expose for testing ---
  window.vexaiWidget = { open: openPanel, close: closePanel, config: CONFIG };
})();
