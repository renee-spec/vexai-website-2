export type Lang = 'nl' | 'en'

const nl = {
  nav: {
    services: 'aanbod',
    about: 'over ons',
    insights: 'insights',
    cta: 'plan een afspraak',
    top: 'Vexai, naar boven',
    menu: 'Hoofdmenu',
    menuOpen: 'Menu openen',
    menuClose: 'Menu sluiten',
    langLabel: 'Taal kiezen',
  },
  hero: {
    h1: 'Wat als AI niet ingewikkeld hoeft te zijn?',
    lead: 'Ontdek hoe we de techniek achterwege laten en focussen op wat je écht hebt aan AI. Begrijpelijk, menselijk en direct toepasbaar voor iedereen.',
    cta: 'Plan een afspraak',
  },
  statement: {
    big: 'AI wordt pas handig als je er minder werk door hebt.',
    subPre:
      'Daarom beginnen we bij jou: waar gaat je tijd naartoe en wat zou je graag uit handen geven? Daar maken we slimme werkwijzen voor die je meteen kunt gebruiken. Of je nu voor jezelf werkt of met een team: ',
    subStrong: 'AI neemt de saaie klussen over, jij houdt de regie.',
  },
  problems: {
    h2: 'Dit is waar het altijd misgaat.',
    sub: 'Niet omdat jij iets verkeerd doet. Maar omdat er vier dingen ontbreken die niemand er ooit bij vertelt.',
    items: [
      {
        n: '1',
        title: 'Het kent je niet',
        body: 'Ieder gesprek begint weer bij nul. Je legt je context telkens opnieuw uit.',
      },
      {
        n: '2',
        title: 'Het komt nergens bij',
        body: 'Je bestanden, je mail, je systemen: jij bent zelf de kopieer-en-plak-laag ertussen.',
      },
      {
        n: '3',
        title: 'Het werkt elke keer anders',
        body: 'Jouw werkwijze zit er niet in, dus je herschrijft het antwoord alsnog.',
      },
      {
        n: '4',
        title: 'Het gebeurt niet vanzelf',
        body: 'Het draait alleen op de momenten dat jij er zelf aan denkt om het te openen.',
      },
    ],
  },
  founder: {
    h2: 'Ik zou het weten. Ik heb het zelf meegemaakt.',
    p1: 'Vier jaar geleden wilde ik een nieuwe skill leren en mijn leven met ADHD makkelijker maken. Mijn hoofd zat vol ideeën, maar administratie, mailtjes en planning kostten me veel energie. Ik wilde meer ruimte om iets met die ideeën te doen.',
    p2: "Dus dook ik in AI. Zonder technische achtergrond, met veel proberen, vastlopen en opnieuw beginnen. Inmiddels nemen de vier systemen hierboven zo'n 80% van mijn saaie werk over. Wat voor mezelf begon, werd Vexai toen ik merkte hoeveel anderen hetzelfde nodig hadden. Sindsdien bouwde ik AI Agents, automatiseringen en AI-workflows voor mezelf en allerlei bedrijven.",
    p3: 'Wat ik met veel vallen en opstaan heb geleerd, leg ik nu uit zoals ik het zelf had willen leren: in gewone taal, met voorbeelden waar je iets aan hebt.',
    caption: 'Renee de Ruijter, Rotterdam',
    alt: 'Renee de Ruijter in een lichte studio in Rotterdam',
  },
  pillars: {
    h2: 'AI werkt niet zonder deze vier.',
    sub: 'Context, tools, skills en schedules. Dat is wat we je leren bouwen, in welke vorm je het ook doet.',
    items: [
      {
        title: 'Context',
        body: 'Alles wat het over jou, je werk en je bedrijf weet, zonder dat je het elke keer opnieuw vertelt.',
      },
      {
        title: 'Tools',
        body: 'Waar het bij mag: je bestanden, je mail, je agenda en de systemen die je al gebruikt.',
      },
      {
        title: 'Skills',
        body: 'Jouw manier van werken, vastgelegd, zodat het antwoord de eerste keer al klopt.',
      },
      {
        title: 'Schedules',
        body: 'Wanneer het uit zichzelf draait, ook op de dagen dat jij er niet aan denkt.',
      },
    ],
  },
  objections: {
    h2: 'Wat je nog tegenhoudt.',
    items: [
      {
        q: 'Ik ben niet technisch',
        a: 'Dat hoeft niet, en dat word je van ons ook niet. We beginnen in de tools die je nu al open hebt staan.',
      },
      {
        q: 'Ik heb er geen tijd voor',
        a: 'Daarom starten we bij werk dat je nu al tijd kost, niet bij iets dat er los bovenop komt. Eén middag samen kan je hele werkwijze al veranderen.',
      },
      {
        q: 'Ik heb het al geprobeerd',
        a: 'Dan ontbrak waarschijnlijk één van de vier dingen hierboven. Dat lag niet aan jou, en het is precies waar we beginnen.',
      },
    ],
  },
  offers: {
    h2: 'AI-training en coaching van Vexai.',
    sub: 'Van helemaal zelfstandig, in je eigen tempo, tot naast elkaar zitten tot je het zelf kunt.',
    big: {
      h3: '1:1 coaching',
      body: 'We kijken samen waar je staat en wat je wilt leren. Van daaruit gaan we stap voor stap aan de slag met AI, op jouw tempo en met jouw werk als uitgangspunt.',
      li: [
        'In jouw tools en op jouw agenda',
        'We werken in jouw systemen, niet in een losse demo-omgeving',
        'Je gaat weg met werkwijzen die draaien én het inzicht om ze zelf uit te bouwen',
      ],
    },
    kick: {
      h3: 'AI Kickstart',
      tag: 'trainingen',
      body: 'Of het nou een training is om AI beter te begrijpen, voor jou of een team. Ik vertel in een simpele training de basics van AI zodat je weggaat met het gevoel dat je in de chaos een beter begrip hebt van wat AI voor jou kan doen.',
    },
    team: {
      h3: 'Team workshops',
      tag: 'enterprise',
      body: 'Een sessie met de mensen die het werk doen, op jullie eigen cases en materiaal. Geen demo over AI, maar werken met jullie eigen werk.',
    },
  },
  contact: {
    h2: 'Wat kan AI jou uit handen nemen?',
    sub: 'Loop je ergens op vast of ben je benieuwd hoe AI jouw werk makkelijker kan maken? Boek hieronder gratis een halfuur met mij. We kijken samen waar je tijd verliest en wat slimmer kan. Je hoeft niets voor te bereiden, nieuwsgierig zijn is genoeg.',
    note: 'Liever direct?',
  },
  faq: {
    h2: 'Of check de vragen die we vaker krijgen.',
    items: [
      {
        q: 'Moet ik kunnen programmeren?',
        a: 'Nee, we werken in de tools die je al gebruikt en leggen alles uit in gewone taal. Wil je later dieper gaan, dan kan dat, maar het hoeft niet.',
      },
      {
        q: 'Wat kost het?',
        a: 'De kennismaking is gratis. Voor 1:1 coaching en team workshops kijken we eerst wat er past.',
      },
      {
        q: 'Bouwen jullie het voor me, of leer ik het zelf?',
        a: 'Het is een samenwerking. We bouwen de systemen voor jouw werk, terwijl ik je uitleg wat we doen en waarom. Zo leer je het begrijpen zonder dat je het zelf hoeft te bouwen. Maar geen zorgen: de ingewikkelde, technische kant pak ik altijd op. Jij bepaalt zelf hoe diep je in de techniek wilt duiken.',
      },
      {
        q: 'Zit ik daarna vast aan één tool?',
        a: 'Nee. We werken in wat je al hebt en je kiest zelf wat eronder hangt. Het gaat om de manier van werken, niet om één product.',
      },
      {
        q: 'Vervangt dit mijn mensen?',
        a: 'Nee. We vervangen je mensen niet, we versterken ze. Het gaat om de saaie tachtig procent van de week, niet om het werk dat jouw team uniek maakt.',
      },
      {
        q: 'Ik ben geen founder. Is dit dan iets voor mij?',
        a: 'Ja, als je zelf over je eigen werk gaat. We werken met founders, solopreneurs, marketeers, builders en business leaders.',
      },
      {
        q: 'Hoe begint het?',
        a: 'Heel simpel: we plannen een gratis kennismaking van 30 minuten in. Daarin bespreken we waar je tegenaan loopt, wat we samen kunnen doen en of het een goede match is.',
      },
    ],
  },
  final: {
    text: 'Het beste moment om te beginnen was gisteren. Het volgende beste moment is vandaag.',
    cta: 'Plan een afspraak',
  },
  footer: {
    built: 'vexai.nl, gebouwd in Rotterdam',
    terms: 'Voorwaarden',
    contact: 'Contact',
    privacy: 'Privacy',
    cookies: 'Cookievoorkeuren',
    aria: 'Footer',
  },
  pill: {
    plan: 'Plan Kennismaking',
    aria: 'Direct contact',
  },
  cookie: {
    text: 'vexai.nl gebruikt geen tracking- of advertentiecookies en er zijn geen analysetools actief op deze site.',
    min: 'Alleen noodzakelijk',
    all: 'Accepteren',
    aria: 'Cookievoorkeuren',
  },
  legal: {
    back: 'terug naar home',
  },
}

export type Translations = typeof nl

const en: Translations = {
  nav: {
    services: 'services',
    about: 'about us',
    insights: 'insights',
    cta: 'book a call',
    top: 'Vexai, back to top',
    menu: 'Main menu',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    langLabel: 'Choose language',
  },
  hero: {
    h1: "What if AI didn't have to be complicated?",
    lead: 'Discover how we skip the tech talk and focus on what AI can actually do for you. Understandable, human and directly usable for everyone.',
    cta: 'Book a call',
  },
  statement: {
    big: 'AI only becomes useful when it means less work for you.',
    subPre:
      "That's why we start with you: where does your time go and what would you gladly hand off? We build smart workflows around that, ready to use right away. Whether you work for yourself or with a team: ",
    subStrong: 'AI takes over the boring tasks, you stay in charge.',
  },
  problems: {
    h2: 'This is where it always goes wrong.',
    sub: "Not because you're doing anything wrong. But because four things are missing that nobody ever mentions.",
    items: [
      {
        n: '1',
        title: "It doesn't know you",
        body: 'Every conversation starts from zero. You explain your context all over again.',
      },
      {
        n: '2',
        title: "It can't reach anything",
        body: "Your files, your email, your systems: you're the copy-paste layer in between.",
      },
      {
        n: '3',
        title: 'It works differently every time',
        body: "Your way of working isn't in it, so you rewrite the answer anyway.",
      },
      {
        n: '4',
        title: "It doesn't happen by itself",
        body: 'It only runs when you remember to open it yourself.',
      },
    ],
  },
  founder: {
    h2: "Believe me. I've been there myself.",
    p1: 'Four years ago I wanted to learn a new skill and make my life with ADHD easier. My head was full of ideas, but admin, emails and planning drained my energy. I wanted more room to actually do something with those ideas.',
    p2: 'So I dove into AI. No technical background, lots of trying, getting stuck and starting over. Today, the four systems above take care of about 80% of my tedious work. What started for myself became Vexai when I noticed how many others needed the same thing. Since then I have built AI agents, automations and AI workflows for myself and all kinds of businesses.',
    p3: 'What I learned through plenty of trial and error, I now explain the way I would have wanted to learn it: in plain language, with examples you can actually use.',
    caption: 'Renee de Ruijter, Rotterdam',
    alt: 'Renee de Ruijter in a bright studio in Rotterdam',
  },
  pillars: {
    h2: "AI doesn't work without these four.",
    sub: "Context, tools, skills and schedules. That's what we teach you to build, in whatever format suits you.",
    items: [
      {
        title: 'Context',
        body: 'Everything it knows about you, your work and your business, without you having to repeat it every time.',
      },
      {
        title: 'Tools',
        body: "What it's allowed to access: your files, your email, your calendar and the systems you already use.",
      },
      {
        title: 'Skills',
        body: 'Your way of working, captured, so the answer is right the first time.',
      },
      {
        title: 'Schedules',
        body: "So it runs by itself, even on the days you don't think about it.",
      },
    ],
  },
  objections: {
    h2: 'What might still be holding you back.',
    items: [
      {
        q: "I'm not technical",
        a: "You don't need to be, and we won't turn you into one either. We start in the tools you already have open.",
      },
      {
        q: "I don't have time for this",
        a: "That's exactly why we start with work that's already costing you time, not with something extra on top. One afternoon together can already change the way you work.",
      },
      {
        q: "I've already tried it",
        a: "Then one of the four things above was probably missing. That wasn't your fault, and it's exactly where we start.",
      },
    ],
  },
  offers: {
    h2: 'AI training and coaching by Vexai.',
    sub: 'From fully independent, at your own pace, to sitting side by side until you can do it yourself.',
    big: {
      h3: '1:1 coaching',
      body: 'Together we look at where you are and what you want to learn. From there we work with AI step by step, at your pace and with your own work as the starting point.',
      li: [
        'In your tools and on your schedule',
        'We work in your systems, not in a separate demo environment',
        'You leave with workflows that run and the insight to expand them yourself',
      ],
    },
    kick: {
      h3: 'AI Kickstart',
      tag: 'training',
      body: 'Whether it is a training to understand AI better, for you or for a team. In one simple training I cover the basics of AI, so you leave feeling that amid the chaos you have a better grip on what AI can do for you.',
    },
    team: {
      h3: 'Team workshops',
      tag: 'enterprise',
      body: 'A session with the people who do the work, using your own cases and materials. Not a demo about AI, but working on your actual work.',
    },
  },
  contact: {
    h2: 'What could AI take off your hands?',
    sub: "Stuck on something, or curious how AI could make your work easier? Book a free half hour with me below. Together we'll look at where you're losing time and what could be smarter. You don't need to prepare anything, being curious is enough.",
    note: 'Prefer to reach out directly?',
  },
  faq: {
    h2: 'Or check the questions we get more often.',
    items: [
      {
        q: 'Do I need to know how to code?',
        a: "No. We work in the tools you already use and explain everything in plain language. If you want to go deeper later, you can, but you don't have to.",
      },
      {
        q: 'What does it cost?',
        a: 'The intro call is free. For 1:1 coaching and team workshops we first look at what fits.',
      },
      {
        q: 'Do you build it for me, or do I learn it myself?',
        a: "It's a collaboration. We build the systems for your work, while I explain what we're doing and why. That way you learn to understand it without having to build it yourself. But don't worry: I always take care of the complicated, technical side. You decide how deep you want to dive into the technology.",
      },
      {
        q: 'Am I locked into one tool afterwards?',
        a: "No. We work with what you already have and you choose what sits underneath. It's about the way of working, not about one product.",
      },
      {
        q: 'Will this replace my people?',
        a: "No. We don't replace your people, we strengthen them. It's about the boring eighty percent of the week, not the work that makes your team unique.",
      },
      {
        q: "I'm not a founder. Is this still for me?",
        a: "Yes, if you're in charge of your own work. We work with founders, solopreneurs, marketers, builders and business leaders.",
      },
      {
        q: 'How does it start?',
        a: "Very simple: we schedule a free 30-minute intro call. In it we discuss what you're stuck on, what we can do together and whether it's a good match.",
      },
    ],
  },
  final: {
    text: 'The best time to start was yesterday. The next best time is today.',
    cta: 'Book a call',
  },
  footer: {
    built: 'vexai.nl, built in Rotterdam',
    terms: 'Terms',
    contact: 'Contact',
    privacy: 'Privacy',
    cookies: 'Cookie preferences',
    aria: 'Footer',
  },
  pill: {
    plan: 'Book Introduction',
    aria: 'Direct contact',
  },
  cookie: {
    text: 'vexai.nl does not use tracking or advertising cookies and no analytics tools are active on this site.',
    min: 'Only necessary',
    all: 'Accept',
    aria: 'Cookie preferences',
  },
  legal: {
    back: 'back to home',
  },
}

export const translations: Record<Lang, Translations> = { nl, en }
