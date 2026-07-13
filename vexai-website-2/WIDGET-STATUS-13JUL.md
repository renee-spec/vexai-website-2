# Vexai chat widget — 13-jul, afsluit stand

## Wat je nu in de repo hebt staan (klaar voor push)

3 bestanden, allemaal in `~/Documents/GitHub/vexai-website-2/vexai-website-2/`:

| Bestand | Wat erin zit |
|---|---|
| `public/widget/vexai-widget.js` | Conversatie-flow + agenda + pop-up hint |
| `public/widget/vexai-widget.css` | Stijl + pulse + pop-up-ballo...

---

## v2 (13 jul)

Wat er is veranderd:

- **Taal-detectie**: leest `<html lang>`, default NL. EN mirror voor EN pagina's.
- **Nieuwe conversationele copy** met intents: prijs, wat_doet_vexai, hoe_werkt_het, trouw_leverancier, bedankt, twijfel, telefoon_ai_vraag, chat_ai_vraag.
- **Pricing**: geen hardcoded prijzen meer. Doorverwijzing naar kennismaking. Source of truth = `public/widget/PRICING-SOURCE.md`.
- **Lead-path**: nieuwe flow `webhookLead` (n8n `VjME2HH1`) vuurt als bezoeker naam+email geeft zonder slot te kiezen.
- **Booking-path**: bestaand, vuurt nog steeds `webhookBooking` (n8n `lFxtguhv`) met het gekozen slot.
- **Agenda-slots**: echte GHL-slots via `GET /webhook/vexai-availability?days=14`. Max 6 chips. Fallback = "doorgeweeks overdag of avond".
- **WhatsApp-fallback**: bij errors → `wa.me/31613264124` met voornaam + laatste bericht als prefilled text. Julian's mail/telefoon weg uit de widget.
- **Conversation memory**: array van `{who, text, ts}` meegestuurd in beide webhooks.

Commit: TBD — Renee via GitHub Desktop.
Test: doe na deploy een end-to-end run in de browser; verwacht een GHL-contact + Telegram-ping.[truncated]