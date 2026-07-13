// Vexai chat widget — conversatie-flow
// Vrij typen, 1 vraag per beurt, geen keuzemenu, geen formulier
// Gegevens pas aan het einde (alleen als er afspraak komt)
(function() {
  'use strict';

  const CONFIG = {
    webhookLead: 'https://n8n.srv1231818.hstgr.cloud/webhook/vexai-website-lead',
    webhookBooking: 'https://n8n.srv1231818.hstgr.cloud/webhook/vexai-kennismaking',
    contactFallback: 'WhatsApp +31 6 1326 4124 of mail julian@teamvexai.nl'
  };

  // Sessie: verzamel losse berichten + optioneel aan het eind gegevens
  let messages = [];
  let collected = {
    name: null,
    email: null,
    phone: null
  };
  let mode = 'chat'; // 'chat' | 'collectName' | 'collectEmail' | 'collectPhone' | 'collectSlot' | 'done'
  let isTyping = false;

  // --- stylesheet laden ---
  if (!document.getElementById('vexai-css')) {
    const link = document.createElement('link');
    link.id = 'vexai-css';
    link.rel = 'stylesheet';
    const ownScript = document.querySelector('script[data-vexai-css]');
    if (ownScript && ownScript.getAttribute('data-vexai-css')) {
      link.href = ownScript.getAttribute('data-vexai-css');
    } else {
      const cs = document.currentScript;
      if (cs && cs.src) {
        link.href = cs.src.replace(/vexai-widget\.js.*/, 'vexai-widget.css');
      } else {
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
  // Direct zichtbaar (was: hidden tot 5s, dat gaf "verschijnt niet meteen" gevoel)

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
    <form class="vexai-footer-input" id="vexai-form">
      <input class="vexai-input" id="vexai-text" type="text" placeholder="Typ je bericht..." autocomplete="off" maxlength="500">
      <button class="vexai-send" type="submit" aria-label="Versturen">➤</button>
    </form>
  `;

  document.body.appendChild(launcher);
  document.body.appendChild(panel);

  const body = panel.querySelector('#vexai-body');
  const close = panel.querySelector('.vexai-close');
  const form = panel.querySelector('#vexai-form');
  const text = panel.querySelector('#vexai-text');

  // --- helpers ---
  function openPanel() {
    panel.classList.add('open');
    launcher.classList.add('hidden');
    if (messages.length === 0) {
      greet();
    }
    setTimeout(() => text.focus(), 100);
  }
  function closePanel() {
    panel.classList.remove('open');
    launcher.classList.remove('hidden');
  }
  function scrollBottom() { body.scrollTop = body.scrollHeight; }

  async function addMessage(text, who = 'bot', delay = 0) {
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

  async function botSay(text, delay = 700) {
    const t = showTyping();
    await addMessage(text, 'bot', delay);
    t.remove();
  }

  // Simpele keyword-detectie voor "ik wil een afspraak" intent
  function detectBookingIntent(msg) {
    const m = msg.toLowerCase();
    return /\b(afspraak|gesprek|plannen|plannen|belmoment|bellen|kennismaken|demo|meet|inplannen|reserv|afspraakje|belletje|kennismaking)\b/.test(m);
  }

  function isLikelyName(text) {
    // Heel simpel: 1-3 woorden, begint met hoofdletter, geen @ of cijfers
    const t = text.trim();
    if (t.length < 2 || t.length > 50) return false;
    if (/[@\d]/.test(t)) return false;
    return /^[A-ZÀ-Ý][a-zà-ÿ'-]+(?:\s+[A-ZÀ-Ý][a-zà-ÿ'-]+){0,2}$/.test(t);
  }

  function isLikelyEmail(text) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text.trim());
  }

  function isLikelyPhone(text) {
    // NL: 06..., +316..., of met streepjes
    return /^(\+?31|0)[\s-]?6[\s-]?\d{8}$|^\+?31[\s-]?\d{9}$/.test(text.replace(/\s/g, ''));
  }

  // --- hoofdlogica: verwerk user-input ---
  async function handleUserInput(raw) {
    const userText = raw.trim();
    if (!userText) return;

    // Voeg user-bericht toe aan scherm + history
    await addMessage(userText, 'user', 50);
    messages.push({ who: 'user', text: userText, at: new Date().toISOString() });

    if (mode === 'done') return; // niks meer doen na afsluiting

    // --- state machine ---
    if (mode === 'chat') {
      // Check: wil persoon een afspraak?
      if (detectBookingIntent(userText)) {
        // Eerst kort inhoudelijk reageren, dan pas gegevens vragen
        await botSay('Lekker, plan staat. Kort even je gegevens, dan stuur ik je een paar tijdsloten.');
        mode = 'collectName';
        await botSay('Hoe heet je?');
        return;
      }

      // Vrij antwoorden op chat — simpele reflexieve replies
      const reply = smallTalkReply(userText);
      await botSay(reply);
      return;
    }

    if (mode === 'collectName') {
      if (!isLikelyName(userText)) {
        await botSay('Geen stress, gewoon je voornaam is prima.');
        return;
      }
      collected.name = userText;
      mode = 'collectEmail';
      await botSay(`Top ${collected.name.split(' ')[0]}. Op welk mailadres kan ik je bereiken?`);
      return;
    }

    if (mode === 'collectEmail') {
      if (!isLikelyEmail(userText)) {
        await botSay('Hmm, dat adres klopt niet helemaal. Probeer nog eens?');
        return;
      }
      collected.email = userText;
      mode = 'collectPhone';
      await botSay('En je WhatsApp-nummer? Dan stuur ik je daar de tijdsloten.');
      return;
    }

    if (mode === 'collectPhone') {
      if (!isLikelyPhone(userText)) {
        await botSay('Klopt ' + (collected.name ? collected.name.split(' ')[0] : 'ie') + ' niet helemaal — 06... graag, of met landcode.');
        return;
      }
      collected.phone = userText;
      mode = 'collectSlot';
      await botSay('Wanneer past jou het best? Doordeweeks overdag, of liever avond?');
      return;
    }

    if (mode === 'collectSlot') {
      // Hier slaan we het slot-voorkeur op en sturen de booking
      const slot = userText;
      await sendBooking(slot);
      return;
    }
  }

  function smallTalkReply(msg) {
    const m = msg.toLowerCase();

    // Prijzen
    if (/\b(prijs|kosten|tarief|hoeveel|€|euro)\b/.test(m)) {
      return 'Chat AI: €79/maand + €1200 eenmalige setup. Telefoon-AI: iets duurder, kan Renee je precies vertellen. Wil je een afspraak, of eerst meer weten?';
    }
    // Wat doet Vexai
    if (/\b(wat|doe|doen|vexai|ai|agent|assistent)\b/.test(m)) {
      return 'Wij bouwen AI-assistenten die je klantcontact opvangen — via chat, WhatsApp en telefoon. 24/7, zonder gedoe. Past dat bij wat jij zoekt?';
    }
    // Hoe werkt het
    if (/\b(hoe|werkt|start|begin|aan de slag|proces)\b/.test(m)) {
      return 'Kort: we bespreken wat je wil (15 min), bouwen je AI in een paar dagen, en testen samen. Geen verplichtingen vooraf. Plan je een kennismaking?';
    }
    // Trouwen / wedding
    if (/\b(trouw|huwelijk|bruiloft|wedding)\b/.test(m)) {
      return 'Voor trouwleveranciers is dat precies waar we veel doen. WhatsApp + telefoon + gastenlijst-vragen, allemaal automatisch. Plan je een gesprek?';
    }
    // Bedankt
    if (/\b(bedankt|dank|thanks|top|chill|cool)\b/.test(m)) {
      return 'Graag gedaan. Plan je een gesprek of eerst nog meer vragen?';
    }
    // Twijfel / niet zeker
    if (/\b(weet niet|twijfel|misschien|later)\b/.test(m)) {
      return 'Helemaal ok. Loopt nergens heen. Als je later wil, app of plan dan. Succes vandaag!';
    }
    // Default: open uitnodiging
    return 'Interessant. Wil je een korte kennismaking plannen, of zit je nog in oriëntatie-fase?';
  }

  // --- greetings ---
  async function greet() {
    mode = 'chat';
    await botSay('Hé, welkom bij Vexai. Vertel, wat speelt er bij jou?', 500);
    await botSay('Bijv: "ik wil een afspraak plannen" of stel je vraag over wat we doen.', 400);
  }

  // --- booking submit ---
  async function sendBooking(slot) {
    const data = {
      firstName: collected.name,
      email: collected.email,
      phone: collected.phone,
      message: `Gewenste slot: ${slot}`,
      slot: slot,
      intent: 'demo',
      source: 'vexai-widget-conversational',
      submittedAt: new Date().toISOString(),
      conversation: messages
    };
    try {
      const r = await fetch(CONFIG.webhookBooking, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!r.ok) throw new Error('HTTP ' + r.status);
      await botSay('Geboekt. Je krijgt zo de tijdsloten op ' + collected.email + '. Tot dan!');
      mode = 'done';
    } catch (err) {
      await botSay('Bijna — er ging iets mis met de verzending. Probeer WhatsApp +31 6 1326 4124 of mail julian@teamvexai.nl, dan fixen we het handmatig.');
    }
  }

  // --- events ---
  launcher.addEventListener('click', openPanel);
  close.addEventListener('click', closePanel);
  form.addEventListener('submit', e => {
    e.preventDefault();
    const val = text.value;
    text.value = '';
    handleUserInput(val);
  });
  // Enter om te versturen (Shift+Enter voor nieuwe regel zou ook kunnen, niet nodig in chat)

  // Pulse om aandacht te trekken (visueel), maar launcher is al zichtbaar
  setTimeout(() => {
    if (!panel.classList.contains('open')) {
      launcher.classList.add('vexai-pulse');
    }
  }, 3000);

  // --- pop-up hint: eenmalig, kort, verdwijnt vanzelf ---
  if (!sessionStorage.getItem('vexai-hint-shown')) {
    setTimeout(() => {
      if (panel.classList.contains('open')) return; // al open? niet tonen
      const hint = document.createElement('div');
      hint.className = 'vexai-hint';
      hint.setAttribute('role', 'status');
      hint.innerHTML = '<div class="vexai-hint-text">Hé, stel je vraag. We lezen alles.</div><div class="vexai-hint-arrow"></div>';
      document.body.appendChild(hint);

      // Positioneer relatief aan launcher
      const r = launcher.getBoundingClientRect();
      hint.style.right = (window.innerWidth - r.right) + 'px';
      hint.style.bottom = (window.innerHeight - r.top + 12) + 'px';

      // Klik op hint = open chat
      hint.addEventListener('click', () => {
        openPanel();
        hint.classList.remove('vexai-hint-show');
        setTimeout(() => hint.remove(), 300);
      });

      // Animatie in
      requestAnimationFrame(() => hint.classList.add('vexai-hint-show'));

      // Verdwijn automatisch na 8 sec
      setTimeout(() => {
        hint.classList.remove('vexai-hint-show');
        setTimeout(() => hint.remove(), 300);
      }, 8000);

      sessionStorage.setItem('vexai-hint-shown', '1');
    }, 5000);
  }

  // Expose voor testen
  window.vexaiWidget = { open: openPanel, close: closePanel, config: CONFIG };
})();
