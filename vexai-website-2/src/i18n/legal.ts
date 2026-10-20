import type { Lang } from './translations'

export type LegalBlock = string | string[]

export interface LegalArticle {
  h: string
  body: LegalBlock[]
}

export interface TermsDoc {
  title: string
  note: string
  updated: string
  articles: LegalArticle[]
  signature: string[]
}

export interface PrivacyDoc {
  title: string
  note: string
  sections: LegalArticle[]
}

export const terms: Record<Lang, TermsDoc> = {
  nl: {
    title: 'Algemene voorwaarden',
    note: 'De Nederlandse tekst is bindend. In het Engels is deze pagina een vertaling ter informatie.',
    updated: 'Laatst bijgewerkt op 20 oktober 2026, versie 1.4',
    articles: [
      {
        h: 'Artikel 1. Definities',
        body: [
          'In deze algemene voorwaarden wordt verstaan onder:',
          '**1.1 Vexai / Opdrachtnemer**: Vexai, eenmanszaak van Renee de Ruijter, ingeschreven bij de Kamer van Koophandel onder nummer 99776952 (hoofdvestiging, vestigingsnummer 000064825647), gevestigd te Scheldedal 106, 2904HG Capelle aan den IJssel.',
          '**1.2 Opdrachtgever**: de natuurlijke of rechtspersoon die met Vexai een overeenkomst aangaat of aan wie Vexai een offerte uitbrengt.',
          '**1.3 Partijen**: Vexai en Opdrachtgever gezamenlijk.',
          '**1.4 Overeenkomst**: iedere overeenkomst tussen Partijen strekkend tot levering van Diensten door Vexai.',
          '**1.5 Diensten**: de door Vexai te leveren prestaties, waaronder maar niet beperkt tot: (a) advies en consultancy inzake kunstmatige intelligentie, (b) het opstellen van een plan op maat voor de inzet van AI, (c) ontwerp en bouw van AI-agents, automatiseringen en AI-workflows, (d) AI-coaching en trainingen, (e) onderhoud en ondersteuning.',
          "**1.6 AI-systeem**: een door Vexai ontwikkeld, geconfigureerd of ingezet systeem dat gebruikmaakt van kunstmatige intelligentie, waaronder large language models (LLM's).",
          '**1.7 Output**: alle resultaten, teksten, analyses, beslissingen of aanbevelingen die door een AI-systeem worden gegenereerd in het kader van de Overeenkomst.',
          '**1.8 Sub-verwerker**: een door Vexai ingeschakelde derde partij die persoonsgegevens verwerkt ten behoeve van de Diensten, zoals aanbieders van AI-modellen en hostingproviders. [TO CONFIRM: welke leveranciers Vexai precies inschakelt]',
          '**1.9 Background IP**: intellectuele eigendomsrechten en methodologie van Vexai die vóór aanvang van de Overeenkomst bestonden of onafhankelijk van de Overeenkomst door Vexai zijn ontwikkeld.',
          '**1.10 Foreground IP**: intellectuele eigendomsrechten op werken die Vexai in het kader van de Overeenkomst tot stand brengt, waaronder custom agent-configuraties, prompts, workflows en eventuele code.',
          '**1.11 Klantdata**: alle gegevens die door Opdrachtgever worden aangeleverd of tijdens het gebruik van Diensten door of namens Opdrachtgever worden gegenereerd.',
          '**1.12 Schriftelijk**: per brief of e-mail.',
        ],
      },
      {
        h: 'Artikel 2. Toepasselijkheid',
        body: [
          '2.1 Deze algemene voorwaarden zijn van toepassing op alle offertes, aanbiedingen, overeenkomsten en leveringen van Vexai, voor zover partijen niet uitdrukkelijk en schriftelijk anders zijn overeengekomen.',
          '2.2 Algemene voorwaarden van Opdrachtgever worden uitdrukkelijk van de hand gewezen en zijn niet van toepassing, ook niet als deze in offertes, bestellingen of andere documenten van Opdrachtgever worden vermeld.',
          '2.3 Als een bepaling uit deze voorwaarden nietig, ongeldig of niet-afdwingbaar blijkt, blijven de overige bepalingen onverminderd van kracht. Partijen zullen in dat geval in overleg een vervangende bepaling afspreken die zoveel mogelijk beantwoordt aan doel en strekking van de oorspronkelijke bepaling.',
          '2.4 Vexai is gerechtigd deze voorwaarden eenzijdig te wijzigen. Wijzigingen gelden voor lopende overeenkomsten slechts voor zover deze niet materieel bezwarend zijn voor Opdrachtgever. Opdrachtgever wordt ten minste 30 dagen voor inwerkingtreding schriftelijk geïnformeerd.',
          '2.5 In geval van strijdigheid tussen documenten geldt de volgende rangorde: (1) de overeengekomen opdracht (opdrachtbevestiging of Statement of Work); (2) de offerte; (3) deze algemene voorwaarden.',
        ],
      },
      {
        h: 'Artikel 3. Offerte en totstandkoming overeenkomst',
        body: [
          '3.1 Offertes van Vexai zijn vrijblijvend en 30 dagen geldig na dagtekening, tenzij anders vermeld.',
          '3.2 Een Overeenkomst komt tot stand zodra Opdrachtgever een offerte schriftelijk aanvaardt, of Vexai feitelijk begint met de uitvoering nadat Opdrachtgever daarvoor schriftelijk opdracht heeft gegeven.',
          '3.3 Kennelijke verschrijvingen of rekenfouten in een offerte binden Vexai niet.',
          '3.4 Als Opdrachtgever de Overeenkomst aangaat namens een rechtspersoon, staat de ondertekenaar in voor zijn bevoegdheid.',
        ],
      },
      {
        h: 'Artikel 4. Uitvoering van de Diensten',
        body: [
          '4.1 Vexai verbindt zich tot een **inspanningsverplichting** en niet tot een resultaatsverplichting, tenzij uitdrukkelijk schriftelijk anders overeengekomen. Specifiek geldt voor AI-gegenereerde Output dat Vexai geen garanties geeft op juistheid, volledigheid of geschiktheid voor een specifiek doel.',
          '4.2 Vexai voert de Diensten naar beste kunnen uit, met de zorgvuldigheid die van een redelijk handelend en redelijk bekwaam AI-consultant mag worden verwacht.',
          '4.3 Levertijden en planningen stemt Vexai per opdracht af op wat Opdrachtgever nodig heeft; elke opdracht is maatwerk. Vexai hanteert geen vaste levertijden. Overeengekomen planningen zijn indicatief, tenzij schriftelijk anders overeengekomen.',
          '4.4 Vexai is gerechtigd (onder)aannemers en/of Sub-verwerkers in te schakelen bij de uitvoering van de Diensten. Vexai blijft verantwoordelijk voor het handelen van door haar ingeschakelde partijen.',
          '4.5 Partijen kunnen de Diensten tijdens de uitvoering wijzigen via een schriftelijke wijziging. Vexai kan aanvullende vergoedingen in rekening brengen voor meerwerk tegen het gebruikelijke uurtarief.',
        ],
      },
      {
        h: 'Artikel 5. Medewerking Opdrachtgever',
        body: [
          '5.1 Opdrachtgever verstrekt tijdig, volledig en juist alle informatie, toegangen en faciliteiten die Vexai redelijkerwijs nodig heeft voor de uitvoering, waaronder:',
          [
            '(a) toegang tot de systemen, accounts en omgevingen die nodig zijn voor de opdracht;',
            '(b) aanwijzing van een contactpersoon die beslissingen kan nemen;',
            '(c) tijdige beantwoording van vragen (binnen 5 werkdagen, tenzij anders overeengekomen);',
            '(d) feedback op tussentijdse deliverables.',
          ],
          '5.2 Opdrachtgever staat in voor de rechtmatigheid van de door haar aangeleverde data, waaronder dat zij beschikt over alle benodigde rechten, toestemmingen en grondslagen onder de AVG.',
          '5.3 Vertragingen of kosten die ontstaan door onvoldoende medewerking zijn voor rekening van Opdrachtgever.',
        ],
      },
      {
        h: 'Artikel 6. Prijzen en tarieven',
        body: [
          "6.1 Alle prijzen en tarieven zijn in euro's en exclusief BTW, tenzij anders vermeld.",
          '6.2 Vexai hanteert een set-up fee voor de bouw en een maandelijkse vergoeding. De hoogte van beide hangt af van de opbouw van de opdracht en wordt vastgelegd in de offerte.',
          '6.3 Reis- en verblijfskosten worden afzonderlijk in rekening gebracht tegen kostprijs, tenzij anders overeengekomen.',
          '6.4 Vexai is gerechtigd tarieven jaarlijks per 1 januari te indexeren conform de CBS-index voor zakelijke dienstverlening, zonder voorafgaande aankondiging.',
          '6.5 De maandelijkse vergoeding kan Vexai eenmaal per 12 maanden aanpassen met inachtneming van 60 dagen opzegtermijn.',
        ],
      },
      {
        h: 'Artikel 7. Facturering en betaling',
        body: [
          '7.1 De set-up fee wordt gefactureerd zodra de Overeenkomst tot stand komt en moet onmiddellijk zijn voldaan. Vexai start pas met de bouw nadat de set-up fee is betaald.',
          '7.2 De maandelijkse vergoeding wordt maandelijks gefactureerd. Betaling vindt plaats binnen [TO CONFIRM: betaaltermijn maandfactuur, bijvoorbeeld 14 dagen] na factuurdatum, tenzij anders overeengekomen.',
          '7.3 Bezwaren tegen een factuur schorten de betalingsverplichting niet op.',
          '7.4 Bij niet-tijdige betaling is Opdrachtgever zonder nadere ingebrekestelling de wettelijke handelsrente (art. 6:119a BW) verschuldigd vanaf de vervaldatum.',
          '7.5 Bij uitblijven van tijdige betaling stuurt Vexai een betalingsherinnering. Wordt de factuur niet binnen 30 dagen na die herinnering voldaan, dan is Vexai gerechtigd administratie- en aanmaningskosten in rekening te brengen. [TO CONFIRM: bedrag, bijvoorbeeld €50 per maand] Alle verdere kosten van invordering, waaronder de inschakeling van een incassobureau en gerechtelijke kosten, komen voor rekening van Opdrachtgever, met als minimum de buitengerechtelijke incassokosten conform de Wet Incassokosten (WIK).',
          '7.6 Vexai is gerechtigd haar werkzaamheden op te schorten zolang Opdrachtgever niet aan zijn betalingsverplichtingen heeft voldaan, onverminderd het recht op schadevergoeding.',
          '7.7 Vexai kan van Opdrachtgever vooruitbetaling of zekerheid verlangen, waarvan de omvang en termijn in redelijke verhouding staan tot het uitstaande bedrag.',
        ],
      },
      {
        h: 'Artikel 8. Intellectuele eigendom en licentie',
        body: [
          '8.1 **Background IP** blijft volledig eigendom van Vexai. Opdrachtgever verkrijgt hierop geen rechten, behoudens de licentie in artikel 8.3.',
          '8.2 **Foreground IP**, waaronder custom agent-configuraties, prompts, workflows, documentatie en eventuele code die Vexai in het kader van de Overeenkomst tot stand brengt, blijft eigendom van Vexai, tenzij Partijen schriftelijk een overdracht (uitkoop) overeenkomen.',
          '8.3 De rechten die Opdrachtgever op de opgeleverde Diensten en deliverables verkrijgt, worden per opdracht vastgelegd in de offerte. Tenzij schriftelijk anders overeengekomen, verkrijgt Opdrachtgever bij volledige betaling een niet-exclusief, niet-overdraagbaar gebruiksrecht voor de interne bedrijfsvoering van Opdrachtgever en aan haar gelieerde ondernemingen. Een verdergaande overdracht (uitkoop) van intellectuele eigendomsrechten is uitsluitend geldig indien schriftelijk en uitdrukkelijk overeengekomen.',
          '8.4 Voor zover Opdrachtgever een gebruiksrecht verkrijgt, omvat dit niet het recht om de deliverables te (sub)licentiëren aan derden, te verkopen, te distribueren of commercieel te exploiteren buiten de interne bedrijfsvoering.',
          '8.5 **Klantdata blijft eigendom van Opdrachtgever.** Vexai verwerkt Klantdata uitsluitend om de Diensten te leveren en zal Klantdata nooit inzetten voor training van (AI-)modellen, commerciële analyse of andere doeleinden buiten de Overeenkomst.',
          '8.6 Vexai behoudt het recht om geanonimiseerde en/of geaggregeerde inzichten, methodologie en niet-klant-specifieke leerresultaten te hergebruiken in andere opdrachten. Letterlijke herbruik van klant-specifieke prompts, configuraties of data is uitgesloten.',
          '8.7 Indien Opdrachtgever in het Foreground IP wijzigingen aanbrengt, blijven die wijzigingen onder de licentie van dit artikel 8.',
          '8.8 Bij ontbinding van de Overeenkomst wegens toerekenbare tekortkoming door Opdrachtgever (waaronder wanbetaling) vervalt de licentie; bij overige beëindigingsgronden blijft de licentie in stand.',
        ],
      },
      {
        h: 'Artikel 9. Gebruik van AI en modelleveranciers',
        body: [
          '9.1 Vexai maakt voor de Diensten gebruik van AI-systemen, waaronder large language models van derden. Welke leveranciers worden ingeschakeld, wordt per opdracht vastgelegd. [TO CONFIRM: welke AI-providers Vexai standaard gebruikt]',
          '**9.2 Hallucinatiewaarschuwing**: Opdrachtgever is zich ervan bewust dat AI-systemen probabilistische output genereren die onjuist, onvolledig, misleidend of verzonnen kan zijn. De AI-Diensten van Vexai zijn ontworpen als hulpmiddel; Opdrachtgever moet vóór gebruik van Output voor materiële beslissingen, externe communicatie of publicatie **menselijke verificatie** toepassen.',
          '**9.3 Toezicht op hoog-impact gebruik**: voor gebruik waarbij Output direct leidt tot juridische, financiële, medische of personele beslissingen, of waar externe publicatie plaatsvindt, draagt Opdrachtgever zorg voor menselijk toezicht met een gedocumenteerde verificatieprocedure.',
          '**9.4 Transparantie**: indien Opdrachtgever AI-gegenereerde content extern publiceert (bijvoorbeeld op haar website, in klantcommunicatie of publieke uitingen), is Opdrachtgever verantwoordelijk voor transparantieverplichtingen onder artikel 50 EU AI Act (Verordening 2024/1689), waaronder kenmerking van AI-gegenereerde content.',
          '**9.5 Dataverwerking**: via welke AI-providers Klantdata worden verwerkt en onder welke voorwaarden (waaronder data-retentie), wordt per opdracht met Opdrachtgever afgestemd. [TO CONFIRM: standaardafspraken over retentie en locatie van verwerking]',
          '**9.6 Modelversies en updates**: Vexai mag onderliggende modelversies bijwerken mits functioneel gelijkwaardig. Bij een materiële gedragswijziging informeert Vexai Opdrachtgever ten minste 30 dagen van tevoren.',
          '**9.7 Misbruik**: Opdrachtgever zal geen kwaadwillige inputs, prompt injection pogingen of andere aanvalstechnieken op de AI-systemen uitvoeren. Schade door dergelijk misbruik komt voor rekening van Opdrachtgever.',
        ],
      },
      {
        h: 'Artikel 10. Geheimhouding',
        body: [
          '10.1 Partijen verbinden zich tot wederzijdse geheimhouding van alle vertrouwelijke informatie die zij in het kader van de Overeenkomst van elkaar verkrijgen, voor een duur van **5 jaar na einde van de Overeenkomst**.',
          '10.2 Onder vertrouwelijke informatie wordt verstaan alle informatie die redelijkerwijs als vertrouwelijk moet worden beschouwd, waaronder in elk geval: Klantdata, prijzen, bedrijfsstrategie, interne processen, de methodologie en technische documentatie van Vexai en persoonsgegevens van medewerkers.',
          '10.3 Uitgesloten van de geheimhoudingsplicht is informatie die:',
          [
            '(a) reeds publiek bekend was of wordt buiten toedoen van de ontvangende partij;',
            '(b) rechtmatig van derden is verkregen zonder geheimhoudingsplicht;',
            '(c) onafhankelijk is ontwikkeld zonder gebruik van vertrouwelijke informatie van de andere partij;',
            '(d) op grond van wet, rechterlijk bevel of toezichthouder openbaar moet worden gemaakt, waarbij de openbaar makende partij de andere partij indien toegestaan vooraf informeert.',
          ],
          '10.4 Partijen leggen de geheimhoudingsplicht door aan hun medewerkers, adviseurs en onderaannemers.',
          '10.5 Op verzoek, en uiterlijk binnen 30 dagen na einde van de Overeenkomst, retourneert of vernietigt Vexai de vertrouwelijke informatie van Opdrachtgever, behoudens wat Vexai op grond van wettelijke bewaarplicht moet bewaren.',
          '10.6 Bij een vermoeden van lekkage van vertrouwelijke informatie informeert de ontvangende partij de andere partij binnen 24 uur na ontdekking.',
        ],
      },
      {
        h: 'Artikel 11. Verwerking van persoonsgegevens',
        body: [
          '11.1 Voor zover Vexai in het kader van de Diensten persoonsgegevens verwerkt, handelt Vexai als **verwerker** in de zin van de Algemene Verordening Gegevensbescherming (AVG) en Opdrachtgever als **verwerkingsverantwoordelijke**.',
          '11.2 Indien de verwerking daartoe aanleiding geeft, sluiten Partijen een verwerkersovereenkomst die voldoet aan artikel 28 AVG.',
          '11.3 Vexai houdt zich aan haar verplichtingen onder de AVG en UAVG en ondersteunt Opdrachtgever bij het nakomen van haar eigen verplichtingen.',
          '11.4 Vexai neemt passende technische en organisatorische maatregelen om persoonsgegevens te beveiligen.',
        ],
      },
      {
        h: 'Artikel 12. Aansprakelijkheid',
        body: [
          '12.1 Vexai is uitsluitend aansprakelijk voor directe schade die het rechtstreeks en uitsluitend gevolg is van een toerekenbare tekortkoming van Vexai.',
          '12.2 De totale aansprakelijkheid van Vexai per gebeurtenis of samenhangende reeks gebeurtenissen is beperkt tot het bedrag van de door Opdrachtgever aan Vexai betaalde vergoedingen, met een maximum van [TO CONFIRM: maximumbedrag, bijvoorbeeld €25.000].',
          '**12.3 Uitgesloten is aansprakelijkheid** voor:',
          [
            '(a) indirecte schade, waaronder begrepen gevolgschade, gederfde winst, gemiste besparingen, schade door bedrijfsstagnatie of reputatieschade;',
            '(b) verlies, corruptie of onbereikbaarheid van data, behoudens indien dit rechtstreeks voortvloeit uit een toerekenbare tekortkoming van Vexai in haar back-up of beveiligingsverplichtingen;',
            '(c) schade door onjuiste, onvolledige of misleidende AI-Output voor zover Opdrachtgever heeft nagelaten de in artikel 9 bedoelde menselijke verificatie toe te passen;',
            '(d) schade door handelen of nalaten van Opdrachtgever of door haar ingeschakelde derden;',
            '(e) schade door overmacht als bedoeld in artikel 13;',
            '(f) schade door uitval, wijziging of discontinuïteit van externe AI-providers, voor zover Vexai redelijke maatregelen ter voorkoming heeft getroffen.',
          ],
          '12.4 De beperkingen in dit artikel gelden niet bij opzet of bewuste roekeloosheid van Vexai zelf.',
          '12.5 Elke vordering tot schadevergoeding vervalt 12 maanden na het moment waarop Opdrachtgever bekend was of redelijkerwijs had kunnen zijn met de schade en met Vexai als aansprakelijke partij, maar uiterlijk 24 maanden na beëindiging van de Overeenkomst.',
          '12.6 Opdrachtgever vrijwaart Vexai voor aanspraken van derden die voortvloeien uit het gebruik van de Diensten door of namens Opdrachtgever, inclusief aanspraken inzake onjuiste AI-Output die door Opdrachtgever extern is gebruikt zonder verificatie.',
        ],
      },
      {
        h: 'Artikel 13. Overmacht',
        body: [
          '13.1 Geen van Partijen is gehouden tot nakoming van enige verplichting indien zij daartoe verhinderd is door overmacht.',
          '13.2 Onder overmacht wordt in elk geval verstaan: (a) storingen of uitval bij externe AI-providers die redelijkerwijs niet door Vexai waren te voorkomen; (b) internet- of netwerkstoringen; (c) stroomuitval; (d) overheidsmaatregelen, waaronder regulatoire actie inzake AI of dataverwerking; (e) pandemieën; (f) oorlog, terrorisme, staking; (g) brand, natuurramp.',
          '13.3 Tijdens overmacht worden de verplichtingen van Partijen opgeschort. Duurt de overmacht langer dan 60 dagen, dan zijn Partijen bevoegd de Overeenkomst te ontbinden zonder verplichting tot schadevergoeding.',
          '13.4 Vexai neemt redelijke maatregelen ter beperking van de gevolgen van overmacht.',
        ],
      },
      {
        h: 'Artikel 14. Duur en beëindiging',
        body: [
          '14.1 De Overeenkomst wordt aangegaan voor de duur zoals vermeld in de opdrachtbevestiging of de offerte.',
          '14.2 Duurovereenkomsten (bijvoorbeeld onderhoud of support) lopen voor onbepaalde tijd tenzij anders overeengekomen, met een wederzijdse opzegtermijn van **30 dagen** tegen het einde van een kalendermaand.',
          '14.3 Elke partij is gerechtigd de Overeenkomst met onmiddellijke ingang schriftelijk te beëindigen indien:',
          [
            '(a) de andere partij in staat van faillissement verkeert, surseance van betaling heeft aangevraagd of haar onderneming heeft gestaakt;',
            '(b) de andere partij toerekenbaar tekortschiet in een wezenlijke verplichting en dit verzuim niet binnen 30 dagen na schriftelijke ingebrekestelling herstelt;',
            '(c) zich een situatie voordoet die voortzetting redelijkerwijs niet van haar kan worden gevergd.',
          ],
          '14.4 Bij einde van de Overeenkomst:',
          [
            '(a) retourneert of vernietigt Vexai de Klantdata, voor zover wettelijk toegestaan;',
            '(b) levert Vexai een overzicht van de geleverde deliverables;',
            '(c) blijven verplichtingen die naar hun aard doorlopen van kracht, waaronder artikelen 8, 10, 11 en 12.',
          ],
          '14.5 Bij beëindiging door Opdrachtgever zonder toerekenbare tekortkoming van Vexai is Opdrachtgever de vergoeding verschuldigd voor reeds verrichte werkzaamheden en gemaakte kosten, alsmede een redelijke annuleringsvergoeding voor de resterende looptijd van vast overeengekomen fasen.',
        ],
      },
      {
        h: 'Artikel 15. Wijzigingen',
        body: [
          '15.1 Wijzigingen van de Overeenkomst zijn slechts geldig indien deze schriftelijk tussen Partijen zijn overeengekomen.',
          '15.2 Meerwerk buiten de overeengekomen scope wordt afzonderlijk gefactureerd tegen het gebruikelijke uurtarief, tenzij anders overeengekomen.',
        ],
      },
      {
        h: 'Artikel 16. Overdracht en onderaanneming',
        body: [
          '16.1 Partijen mogen rechten en verplichtingen uit de Overeenkomst niet zonder schriftelijke toestemming van de andere partij aan derden overdragen, behoudens in geval van fusie of overname van de gehele onderneming.',
          '16.2 Vexai mag onderaannemers inschakelen; zij informeert Opdrachtgever hierover vooraf.',
        ],
      },
      {
        h: 'Artikel 17. Toepasselijk recht en forum',
        body: [
          '17.1 Op alle overeenkomsten tussen Partijen is uitsluitend **Nederlands recht** van toepassing.',
          '17.2 Geschillen worden bij uitsluiting voorgelegd aan de bevoegde rechter te **Rotterdam**, tenzij Partijen uitdrukkelijk kiezen voor arbitrage of mediation. [TO CONFIRM: gewenste forumkeuze]',
          '17.3 Alvorens een geschil aan de rechter voor te leggen, zullen Partijen trachten het geschil in der minne op te lossen. Een daartoe strekkend schriftelijk verzoek tot overleg moet binnen 30 dagen worden beantwoord.',
          '17.4 Deze algemene voorwaarden zijn beschikbaar in een Nederlandse en een Engelse taalversie. Bij tegenstrijdigheid of verschil in uitleg tussen beide versies prevaleert de Nederlandse tekst.',
        ],
      },
      {
        h: 'Artikel 18. Privacy bij contact via vexai.nl',
        body: [
          '18.1 Hoe Vexai omgaat met persoonsgegevens die via vexai.nl worden verstrekt (bijvoorbeeld via de boekingstool of per e-mail), staat beschreven in de privacyverklaring op vexai.nl/privacy.',
          '18.2 vexai.nl gebruikt geen tracking- of advertentiecookies en er zijn geen analysetools actief.',
        ],
      },
    ],
    signature: [
      'Vexai',
      'Renee de Ruijter',
      'Scheldedal 106, 2904HG Capelle aan den IJssel',
      'renee@vexai.nl',
      'KvK: 99776952 · Vestigingsnummer: 000064825647',
    ],
  },
  en: {
    title: 'Terms and conditions',
    note: 'This is a courtesy translation. The legally binding version is the Dutch text.',
    updated: 'Last updated on 20 October 2026, version 1.4',
    articles: [
      {
        h: 'Article 1. Definitions',
        body: [
          'In these general terms and conditions, the following terms have the following meanings:',
          '**1.1 Vexai / Contractor**: Vexai, a sole proprietorship (eenmanszaak) of Renee de Ruijter, registered with the Dutch Chamber of Commerce (Kamer van Koophandel) under number 99776952 (principal establishment, establishment number 000064825647), established at Scheldedal 106, 2904HG Capelle aan den IJssel, the Netherlands.',
          '**1.2 Client**: the natural person or legal entity that enters into an agreement with Vexai or to whom Vexai issues a quotation.',
          '**1.3 Parties**: Vexai and Client jointly.',
          '**1.4 Agreement**: any agreement between the Parties for the provision of Services by Vexai.',
          '**1.5 Services**: the performances to be delivered by Vexai, including but not limited to: (a) advice and consultancy regarding artificial intelligence, (b) drawing up a tailored plan for the use of AI, (c) design and build of AI agents, automations and AI workflows, (d) AI coaching and training, (e) maintenance and support.',
          '**1.6 AI system**: a system developed, configured or deployed by Vexai that makes use of artificial intelligence, including large language models (LLMs).',
          '**1.7 Output**: all results, texts, analyses, decisions or recommendations generated by an AI system in the context of the Agreement.',
          '**1.8 Sub-processor**: a third party engaged by Vexai that processes personal data for the purposes of the Services, such as providers of AI models and hosting providers. [TO CONFIRM: which suppliers Vexai engages exactly]',
          '**1.9 Background IP**: intellectual property rights and methodology of Vexai that existed prior to the commencement of the Agreement or that were developed by Vexai independently of the Agreement.',
          '**1.10 Foreground IP**: intellectual property rights in works that Vexai creates in the context of the Agreement, including custom agent configurations, prompts, workflows and any code.',
          '**1.11 Client Data**: all data supplied by the Client or generated by or on behalf of the Client during the use of the Services.',
          '**1.12 In writing**: by letter or email.',
        ],
      },
      {
        h: 'Article 2. Applicability',
        body: [
          '2.1 These general terms and conditions apply to all quotations, offers, agreements and deliveries of Vexai, insofar as the Parties have not expressly agreed otherwise in writing.',
          '2.2 Any general terms and conditions of the Client are expressly rejected and do not apply, even if they are referred to in quotations, orders or other documents of the Client.',
          '2.3 If any provision of these terms and conditions proves to be null, void or unenforceable, the remaining provisions shall remain in full force. In that case, the Parties shall agree on a replacement provision that reflects the purpose and intent of the original provision as closely as possible.',
          '2.4 Vexai is entitled to amend these terms and conditions unilaterally. For ongoing agreements, amendments apply only insofar as they are not materially onerous for the Client. The Client shall be informed in writing at least 30 days before the amendments take effect.',
          '2.5 In the event of a conflict between documents, the following order of precedence applies: (1) the agreed assignment (assignment confirmation or Statement of Work); (2) the quotation; (3) these general terms and conditions.',
        ],
      },
      {
        h: 'Article 3. Quotation and formation of the agreement',
        body: [
          '3.1 Quotations from Vexai are without obligation and valid for 30 days after their date, unless stated otherwise.',
          '3.2 An Agreement is formed as soon as the Client accepts a quotation in writing, or Vexai actually commences performance after the Client has instructed it to do so in writing.',
          '3.3 Obvious clerical or calculation errors in a quotation are not binding on Vexai.',
          '3.4 If the Client enters into the Agreement on behalf of a legal entity, the signatory warrants that they are authorised to do so.',
        ],
      },
      {
        h: 'Article 4. Performance of the Services',
        body: [
          '4.1 Vexai undertakes a **best-efforts obligation** and not an obligation to achieve a specific result, unless expressly agreed otherwise in writing. Specifically, with respect to AI-generated Output, Vexai gives no warranties as to accuracy, completeness or fitness for a particular purpose.',
          '4.2 Vexai performs the Services to the best of its ability, with the care that may be expected of a reasonably acting and reasonably competent AI consultant.',
          '4.3 Vexai agrees delivery times and schedules per assignment, based on what the Client needs; every assignment is custom work. Vexai does not work with fixed delivery times. Agreed schedules are indicative, unless agreed otherwise in writing.',
          '4.4 Vexai is entitled to engage (sub)contractors and/or Sub-processors in the performance of the Services. Vexai remains responsible for the conduct of the parties it engages.',
          '4.5 The Parties may modify the Services during performance by means of a written change. Vexai may charge additional fees for additional work at its customary hourly rate.',
        ],
      },
      {
        h: 'Article 5. Cooperation by the Client',
        body: [
          '5.1 The Client shall provide, in a timely, complete and correct manner, all information, access and facilities that Vexai reasonably requires for performance, including:',
          [
            '(a) access to the systems, accounts and environments needed for the assignment;',
            '(b) the designation of a contact person authorised to make decisions;',
            '(c) timely responses to questions (within 5 business days, unless agreed otherwise);',
            '(d) feedback on interim deliverables.',
          ],
          '5.2 The Client warrants the lawfulness of the data it supplies, including that it holds all necessary rights, consents and legal bases under the GDPR.',
          '5.3 Delays or costs arising from insufficient cooperation are for the account of the Client.',
        ],
      },
      {
        h: 'Article 6. Prices and rates',
        body: [
          '6.1 All prices and rates are in euros and exclusive of VAT, unless stated otherwise.',
          '6.2 Vexai works with a set-up fee for the build and a monthly fee. The amount of both depends on the build and is recorded in the quotation.',
          '6.3 Travel and accommodation costs are charged separately at cost price, unless agreed otherwise.',
          '6.4 Vexai is entitled to index its rates annually as of 1 January in accordance with the CBS index for business services, without prior notice.',
          '6.5 Vexai may adjust the monthly fee once every 12 months, subject to 60 days\u2019 notice.',
        ],
      },
      {
        h: 'Article 7. Invoicing and payment',
        body: [
          '7.1 The set-up fee is invoiced as soon as the Agreement is formed and is due immediately. Vexai only starts the build once the set-up fee has been paid.',
          '7.2 The monthly fee is invoiced monthly. Payment is due within [TO CONFIRM: payment term for the monthly invoice, for example 14 days] of the invoice date, unless agreed otherwise.',
          '7.3 Objections to an invoice do not suspend the payment obligation.',
          '7.4 In the event of late payment, the Client owes the statutory commercial interest (Article 6:119a of the Dutch Civil Code) from the due date, without any further notice of default.',
          '7.5 If timely payment is not made, Vexai sends a payment reminder. If the invoice is not paid within 30 days of that reminder, Vexai is entitled to charge administrative and reminder costs. [TO CONFIRM: amount, for example EUR 50 per month] All further collection costs, including the engagement of a collection agency and legal costs, are for the account of the Client, with the statutory extrajudicial collection costs (Wet Incassokosten, WIK) as a minimum.',
          '7.6 Vexai is entitled to suspend its work for as long as the Client has not fulfilled its payment obligations, without prejudice to its right to compensation for damages.',
          '7.7 Vexai may require advance payment or security from the Client, the scope and term of which shall be in reasonable proportion to the outstanding amount.',
        ],
      },
      {
        h: 'Article 8. Intellectual property and licence',
        body: [
          '8.1 **Background IP** remains the full property of Vexai. The Client acquires no rights therein, except for the licence set out in Article 8.3.',
          '8.2 **Foreground IP**, including custom agent configurations, prompts, workflows, documentation and any code that Vexai creates in the context of the Agreement, remains the property of Vexai, unless the Parties agree in writing on a transfer (buy-out).',
          '8.3 The rights that the Client acquires in the delivered Services and deliverables are determined per assignment in the quotation. Unless agreed otherwise in writing, upon full payment the Client acquires a non-exclusive, non-transferable right to use them for the internal business operations of the Client and its affiliated companies. Any further transfer (buy-out) of intellectual property rights is valid only if expressly agreed in writing.',
          '8.4 Insofar as the Client acquires a right of use, this does not include the right to (sub)license the deliverables to third parties, or to sell, distribute or commercially exploit them outside internal business operations.',
          '8.5 **Client Data remains the property of the Client.** Vexai processes Client Data solely to deliver the Services and shall never use Client Data for training (AI) models, commercial analysis or any purpose other than the Agreement.',
          '8.6 Vexai retains the right to reuse anonymised and/or aggregated insights, methodology and non-client-specific learnings in other engagements. Verbatim reuse of client-specific prompts, configurations or data is excluded.',
          '8.7 If the Client makes modifications to the Foreground IP, those modifications remain subject to the licence set out in this Article 8.',
          '8.8 In the event of rescission of the Agreement due to an attributable failure by the Client (including non-payment), the licence lapses; in the case of other grounds for termination, the licence remains in effect.',
        ],
      },
      {
        h: 'Article 9. Use of AI and model providers',
        body: [
          '9.1 For the Services, Vexai makes use of AI systems, including third-party large language models. Which providers are engaged is recorded per assignment. [TO CONFIRM: which AI providers Vexai uses by default]',
          '**9.2 Hallucination warning**: the Client is aware that AI systems generate probabilistic output that may be incorrect, incomplete, misleading or fabricated. Vexai\u2019s AI Services are designed as advisory tools; before using Output for material decisions, external communication or publication, the Client must apply **human verification**.',
          '**9.3 Oversight of high-impact use**: for use where Output directly leads to legal, financial, medical or personnel decisions, or where external publication takes place, the Client shall ensure human oversight with a documented verification procedure.',
          '**9.4 Transparency**: if the Client publishes AI-generated content externally (for example on its website, in client communications or public statements), the Client is responsible for the transparency obligations under Article 50 of the EU AI Act (Regulation 2024/1689), including the marking of AI-generated content.',
          '**9.5 Data processing**: through which AI providers Client Data is processed and under which conditions (including data retention) is agreed with the Client per assignment. [TO CONFIRM: standard arrangements on retention and processing location]',
          '**9.6 Model versions and updates**: Vexai may update the underlying model versions provided they are functionally equivalent. In the event of a material change in behaviour, Vexai informs the Client at least 30 days in advance.',
          '**9.7 Misuse**: the Client shall not carry out any malicious inputs, prompt injection attempts or other attack techniques against the AI systems. Damage resulting from such misuse is for the account of the Client.',
        ],
      },
      {
        h: 'Article 10. Confidentiality',
        body: [
          '10.1 The Parties undertake to keep confidential all confidential information they obtain from each other in the context of the Agreement, for a period of **5 years after the end of the Agreement**.',
          '10.2 Confidential information means all information that must reasonably be regarded as confidential, including in any event: Client Data, prices, business strategy, internal processes, Vexai\u2019s methodology and technical documentation, and personal data of employees.',
          '10.3 Excluded from the confidentiality obligation is information that:',
          [
            '(a) was or becomes publicly known without any act of the receiving party;',
            '(b) was lawfully obtained from third parties without an obligation of confidentiality;',
            '(c) was independently developed without use of the confidential information of the other party;',
            '(d) must be disclosed pursuant to law, court order or a supervisory authority, in which case the disclosing party informs the other party in advance where permitted.',
          ],
          '10.4 The Parties impose the confidentiality obligation on their employees, advisers and subcontractors.',
          '10.5 On request, and no later than within 30 days after the end of the Agreement, Vexai returns or destroys the confidential information of the Client, except for what Vexai must retain pursuant to a statutory retention obligation.',
          '10.6 In the event of a suspected leak of confidential information, the receiving party informs the other party within 24 hours of discovery.',
        ],
      },
      {
        h: 'Article 11. Processing of personal data',
        body: [
          '11.1 Insofar as Vexai processes personal data in the context of the Services, Vexai acts as **processor** within the meaning of the General Data Protection Regulation (GDPR) and the Client acts as **controller**.',
          '11.2 Where the processing gives cause to do so, the Parties conclude a data processing agreement that complies with Article 28 of the GDPR.',
          '11.3 Vexai complies with its obligations under the GDPR and the Dutch GDPR Implementation Act (UAVG) and supports the Client in fulfilling its own obligations.',
          '11.4 Vexai implements appropriate technical and organisational measures to protect personal data.',
        ],
      },
      {
        h: 'Article 12. Liability',
        body: [
          '12.1 Vexai is liable only for direct damage that is the direct and exclusive result of an attributable failure by Vexai.',
          '12.2 Vexai\u2019s total liability per event or connected series of events is limited to the amount of the fees paid by the Client to Vexai, with a maximum of [TO CONFIRM: maximum amount, for example EUR 25,000].',
          '**12.3 Liability is excluded** for:',
          [
            '(a) indirect damage, including consequential damage, lost profit, missed savings, damage due to business interruption or reputational damage;',
            '(b) loss, corruption or unavailability of data, except where this results directly from an attributable failure by Vexai in its back-up or security obligations;',
            '(c) damage due to incorrect, incomplete or misleading AI Output insofar as the Client has failed to apply the human verification referred to in Article 9;',
            '(d) damage due to acts or omissions of the Client or of third parties engaged by it;',
            '(e) damage due to force majeure as referred to in Article 13;',
            '(f) damage due to failure, modification or discontinuation of third-party AI providers, insofar as Vexai has taken reasonable measures to prevent it.',
          ],
          '12.4 The limitations in this article do not apply in the event of intent or wilful recklessness on the part of Vexai itself.',
          '12.5 Any claim for damages lapses 12 months after the moment the Client became aware, or could reasonably have become aware, of the damage and of Vexai as the liable party, but no later than 24 months after termination of the Agreement.',
          '12.6 The Client indemnifies Vexai against claims by third parties arising from the use of the Services by or on behalf of the Client, including claims regarding incorrect AI Output used externally by the Client without verification.',
        ],
      },
      {
        h: 'Article 13. Force majeure',
        body: [
          '13.1 Neither Party is obliged to perform any obligation if it is prevented from doing so by force majeure.',
          '13.2 Force majeure includes in any event: (a) disruptions or failures at third-party AI providers that Vexai could not reasonably have prevented; (b) internet or network disruptions; (c) power failures; (d) government measures, including regulatory action regarding AI or data processing; (e) pandemics; (f) war, terrorism, strikes; (g) fire, natural disaster.',
          '13.3 During force majeure, the obligations of the Parties are suspended. If the force majeure lasts longer than 60 days, the Parties are entitled to rescind the Agreement without any obligation to pay damages.',
          '13.4 Vexai takes reasonable measures to limit the impact of force majeure.',
        ],
      },
      {
        h: 'Article 14. Term and termination',
        body: [
          '14.1 The Agreement is entered into for the term stated in the assignment confirmation or the quotation.',
          '14.2 Continuing agreements (for example maintenance or support) run for an indefinite period unless agreed otherwise, with a mutual notice period of **30 days** as of the end of a calendar month.',
          '14.3 Each Party is entitled to terminate the Agreement with immediate effect in writing if:',
          [
            '(a) the other Party is declared bankrupt, has applied for suspension of payments or has ceased its business;',
            '(b) the other Party attributably fails to perform a material obligation and does not remedy this failure within 30 days of a written notice of default;',
            '(c) a situation arises in which continuation cannot reasonably be required of it.',
          ],
          '14.4 Upon the end of the Agreement:',
          [
            '(a) Vexai returns or destroys the Client Data, insofar as legally permitted;',
            '(b) Vexai provides an overview of the delivered deliverables;',
            '(c) obligations that by their nature continue to apply remain in effect, including Articles 8, 10, 11 and 12.',
          ],
          '14.5 In the event of termination by the Client without an attributable failure by Vexai, the Client owes the fee for work already performed and costs already incurred, as well as a reasonable cancellation fee for the remaining term of firmly agreed phases.',
        ],
      },
      {
        h: 'Article 15. Amendments',
        body: [
          '15.1 Amendments to the Agreement are valid only if agreed in writing between the Parties.',
          '15.2 Additional work outside the agreed scope is invoiced separately at the customary hourly rate, unless agreed otherwise.',
        ],
      },
      {
        h: 'Article 16. Assignment and subcontracting',
        body: [
          '16.1 The Parties may not transfer rights and obligations under the Agreement to third parties without the written consent of the other Party, except in the case of a merger or acquisition of the entire business.',
          '16.2 Vexai may engage subcontractors; it informs the Client about this in advance.',
        ],
      },
      {
        h: 'Article 17. Governing law and forum',
        body: [
          '17.1 All agreements between the Parties are governed exclusively by **Dutch law**.',
          '17.2 Disputes are submitted exclusively to the competent court in **Rotterdam**, unless the Parties expressly opt for arbitration or mediation. [TO CONFIRM: preferred choice of forum]',
          '17.3 Before submitting a dispute to the court, the Parties shall attempt to resolve the dispute amicably. A written request to that effect must be answered within 30 days.',
          '17.4 These general terms and conditions are available in a Dutch and an English language version. In case of any discrepancy between the Dutch and English versions, the Dutch text prevails.',
        ],
      },
      {
        h: 'Article 18. Privacy for contact via vexai.nl',
        body: [
          '18.1 How Vexai handles personal data submitted via vexai.nl (for example via the booking tool or by email) is described in the privacy statement at vexai.nl/en/privacy.',
          '18.2 vexai.nl does not use tracking or advertising cookies and no analytics tools are active.',
        ],
      },
    ],
    signature: [
      'Vexai',
      'Renee de Ruijter',
      'Scheldedal 106, 2904HG Capelle aan den IJssel',
      'renee@vexai.nl',
      'Chamber of Commerce (KvK): 99776952 · Establishment number: 000064825647',
    ],
  },
}

export const privacy: Record<Lang, PrivacyDoc> = {
  nl: {
    title: 'Privacyverklaring',
    note: 'De Nederlandse tekst is bindend. In het Engels is deze pagina een vertaling ter informatie.',
    sections: [
      {
        h: 'Wie is verantwoordelijk',
        body: [
          'Vexai, eenmanszaak van Renee de Ruijter, Scheldedal 106, 2904HG Capelle aan den IJssel. KvK 99776952 (hoofdvestiging, vestigingsnummer 000064825647). Vragen over privacy: renee@vexai.nl.',
        ],
      },
      {
        h: 'Welke gegevens we verwerken',
        body: [
          'Vexai verwerkt alleen de gegevens die je zelf aan ons geeft:',
          [
            '**Boeking via de boekingstool (Cal.com)**: je naam, e-mailadres, de door jou gekozen datum en tijd, en wat je zelf verder invult.',
            '**Contact per e-mail of WhatsApp**: je bericht en je contactgegevens (e-mailadres of telefoonnummer).',
          ],
        ],
      },
      {
        h: 'Cookies en tracking',
        body: [
          'vexai.nl gebruikt **geen tracking- of advertentiecookies**, geen Google Analytics en geen Meta-pixel. Er zijn geen analysetools actief en er wordt niets gedeeld met advertentieplatforms. De site slaat ook geen gegevens op in je browser.',
        ],
      },
      {
        h: 'Waarvoor en op welke grondslag',
        body: [
          [
            '**Je bericht of aanvraag beantwoorden en een mogelijke samenwerking opvolgen.** Grondslag: stappen op jouw verzoek voorafgaand aan een overeenkomst (art. 6 lid 1 sub b AVG). Gaat het om zakelijk contact namens een bedrijf, dan is de grondslag ons gerechtvaardigd belang (sub f).',
            '**Je boeking plannen en bevestigen** via Cal.com. Grondslag: uitvoering van jouw verzoek (sub b).',
          ],
          'We nemen geen besluiten over jou die alleen op automatische verwerking berusten.',
        ],
      },
      {
        h: 'Wie je gegevens ontvangt',
        body: [
          'We verkopen je gegevens niet. We schakelen deze partijen in:',
          [
            '**Cal.com**: verwerking van boekingen voor gesprekken.',
            '**WhatsApp (Meta)**: alleen als je zelf kiest voor WhatsApp als contactkanaal.',
            '**Google**: onze e-mailprovider.',
            '**Websitehosting**: voor het bereikbaar houden van de site. [TO CONFIRM: welke hostingpartij]',
          ],
        ],
      },
      {
        h: 'Doorgifte buiten de EER',
        body: [
          'Cal.com en WhatsApp (Meta) kunnen gegevens buiten de Europese Economische Ruimte verwerken, waaronder in de Verenigde Staten. Dat gebeurt op basis van het EU-VS Data Privacy Framework of de standaardcontractbepalingen van de Europese Commissie.',
        ],
      },
      {
        h: 'Hoe lang we gegevens bewaren',
        body: [
          'We bewaren je gegevens niet langer dan nodig voor het doel waarvoor je ze gaf. Correspondentie en aanvragen bewaren we tot [TO CONFIRM: bewaartermijn, bijvoorbeeld 2 jaar] na het laatste contact. Facturen en de administratie bewaren we 7 jaar, omdat de wet dat verplicht.',
        ],
      },
      {
        h: 'Je rechten',
        body: [
          'Je mag je gegevens inzien, laten verbeteren of laten verwijderen. Je kunt de verwerking laten beperken, je gegevens opvragen in een overdraagbaar formaat en bezwaar maken tegen verwerking op grond van gerechtvaardigd belang. Gegeven toestemming kun je altijd intrekken. Mail naar renee@vexai.nl, dan reageren we binnen een maand.',
        ],
      },
      {
        h: 'Klacht',
        body: [
          'Ben je niet tevreden over hoe we met je gegevens omgaan, laat het ons dan eerst weten. Je kunt ook een klacht indienen bij de Autoriteit Persoonsgegevens.',
        ],
      },
    ],
  },
  en: {
    title: 'Privacy statement',
    note: 'This is a courtesy translation. The legally binding version is the Dutch text.',
    sections: [
      {
        h: 'Who is responsible',
        body: [
          'Vexai, a sole proprietorship (eenmanszaak) of Renee de Ruijter, Scheldedal 106, 2904HG Capelle aan den IJssel, the Netherlands. Chamber of Commerce (KvK) 99776952 (principal establishment, establishment number 000064825647). Questions about privacy: renee@vexai.nl.',
        ],
      },
      {
        h: 'Which data we process',
        body: [
          'Vexai only processes the data you give us yourself:',
          [
            '**Booking via the booking tool (Cal.com)**: your name, email address, the date and time you choose, and anything you add yourself.',
            '**Contact by email or WhatsApp**: your message and your contact details (email address or phone number).',
          ],
        ],
      },
      {
        h: 'Cookies and tracking',
        body: [
          'vexai.nl uses **no tracking or advertising cookies**, no Google Analytics and no Meta pixel. No analytics tools are active and nothing is shared with advertising platforms. The site does not store any data in your browser either.',
        ],
      },
      {
        h: 'For what purpose and on which legal basis',
        body: [
          [
            '**Answering your message or request and following up on a possible collaboration.** Legal basis: steps at your request prior to an agreement (art. 6(1)(b) GDPR). If it concerns business contact on behalf of a company, the basis is our legitimate interest (f).',
            '**Scheduling and confirming your booking** via Cal.com. Legal basis: performance of your request (b).',
          ],
          'We do not make decisions about you based solely on automated processing.',
        ],
      },
      {
        h: 'Who receives your data',
        body: [
          'We do not sell your data. We engage these parties:',
          [
            '**Cal.com**: processing bookings for calls.',
            '**WhatsApp (Meta)**: only if you choose WhatsApp as the contact channel yourself.',
            '**Google**: our email provider.',
            '**Website hosting**: to keep the site available. [TO CONFIRM: which hosting party]',
          ],
        ],
      },
      {
        h: 'Transfer outside the EEA',
        body: [
          'Cal.com and WhatsApp (Meta) may process data outside the European Economic Area, including in the United States. This takes place on the basis of the EU-US Data Privacy Framework or the standard contractual clauses of the European Commission.',
        ],
      },
      {
        h: 'How long we keep data',
        body: [
          'We do not keep your data longer than necessary for the purpose for which you gave it. We keep correspondence and requests until [TO CONFIRM: retention period, for example 2 years] after the last contact. We keep invoices and the administration for 7 years, because the law requires it.',
        ],
      },
      {
        h: 'Your rights',
        body: [
          'You may access your data, have it corrected or deleted. You can have the processing restricted, request your data in a portable format and object to processing on the basis of legitimate interest. Consent given can always be withdrawn. Email renee@vexai.nl and we will respond within a month.',
        ],
      },
      {
        h: 'Complaint',
        body: [
          'Not satisfied with how we handle your data? Let us know first. You can also file a complaint with the Autoriteit Persoonsgegevens (the Dutch Data Protection Authority).',
        ],
      },
    ],
  },
}
