# Vexai chat widget — status 13-jul (eind van de dag)

## Live (bestanden klaargezet, push via GitHub Desktop)

Custom chat-widget op vexai.nl. Geen WhatsApp-link, geen keuzemenu, geen
formulier — gewoon typen als een gesprek.

Bestanden in repo (`renee-spec/vexai-website-2`):
- `public/widget/vexai-widget.js` (conversational flow, ~340 regels)
- `public/widget/vexai-widget.css` (~280 regels, inclusief hint-popup)
- `src/layouts/Layout.astro` (embed vlak voor `</body>`)

Kleur oranje #ff5518 (Vexai-merk). Bot praat als Vexai, niet als Renee.
Renee komt pas in beeld bij afspraak-bevestiging.

## Flow (conversatie-stijl, geen formulier)

1. Launcher (oranje bol) is **meteen zichtbaar** (was 5s verborgen, dat was
   issue 1 — gaf "verschijnt niet altijd"-gevoel)
2. Na 5 sec verschijnt **pop-up** naast bol: "Hé, stel je vraag. We lezen
   alles." Eenmalig (sessionStorage), klik = chat opent, of verdwijnt na 8s
3. Klik op bol → chat opent
4. Bot: "Hé, welkom bij Vexai. Vertel, wat speelt er bij jou?"
5. Jij tikt vrij — geen knoppen
6. Bot reageert inhoudelijk: prijzen, wat-we-doen, hoe-het-werkt,
   trouw, twijfel, bedankje, default-uitnodiging
7. Als jij "afspraak / gesprek / plannen / demo" tikt →
   "Kort even je gegevens" → 1 vraag per beurt:
   voornaam → mail → WhatsApp-nr → wanneer past
8. Klaar

## Webhook status (test 13-jul)

| Endpoint | HTTP | Status | Gebruikt voor |
|---|---|---|---|
| vexai-website-lead | **500** | Kapot | Oud formulier (issue) |
| vexai-kennismaking | 200 | Werkt | Demo-boeking (nieuwe flow) |

**Conclusie Renee:** de vragenlijst die je al een paar keer had ingevuld,
kwam niet door vanwege de 500-error. Niet de site, niet Netlify, niet
de widget — de n8n-workflow is stuk. Julian moet fixen.

Mail aan Julian klaargezet: `/Users/reneederuijterr/Documents/Vexai/mail-julian-lead-webhook.md`

## Volgende stappen

### Voor Renee (vandaag)
- [ ] In GitHub Desktop: 3 bestanden committen + pushen
- [ ] Wacht 1-2 min (Netlify)
- [ ] Test incognito op vexai.nl
- [ ] Stuur mailtje aan Julian (klaargezet, alleen doorsturen)

### Voor Renee (morgen / later)
- [ ] Test eind-tot-eind: vul "ik wil een afspraak" in, check Telegram
- [ ] Test "ik heb een vraag" (moet via booking-flow lopen nu, lead-flow is bypassed)
- [ ] Als Julian webhook fix heeft: oud formulier opnieuw testen
- [ ] Aparte n8n-workflow voor losse chat-berichten? (later)

## Open issues / bugs

| Issue | Status | Prioriteit |
|---|---|---|
| Widget verscheen niet meteen (oude code) | **Opgelost** | — |
| Huidige flow met keuzemenu+formulier was "vreselijk" | **Opgelost** | — |
| Lead-webhook geeft 500 | Open, Julian | Hoog |
| Pulse-animatie + hint-popup tegelijk zichtbaar? | Testen | Laag |
| Geen aparte webhook voor vrije chat (niet-booking) | Later | Medium |
| Mobiel-popup positie op kleine schermen | Testen | Laag |

## Vexai-stem regels (bewaard in widget-code)

- Bot praat als Vexai (merk), niet als Renee
- "Renee" komt pas in beeld bij afspraak-bevestiging
- Geen "Hoe kan ik u helpen?", geen m-dashes, geen sales-praat
- Open vragen, geen multiple choice / keuzemenu
- NL primair
- Doel = kennismaking inplannen, geen directe verkoop
