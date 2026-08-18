import type { FaqCategory } from './faq'

// Genuinely German-authored content — not a translation of faq.ts. Category
// slugs/order stay identical to the English file (stable jump-nav anchors);
// questions follow real German safari-search patterns (from the Search
// Console export: "familiesafari", "safari tansania kosten", "beste
// Reisezeit Serengeti", "kilimandscharo besteigen", compound-noun phrasing).
export const faqCategories: FaqCategory[] = [
  {
    slug: 'family-and-group-safaris',
    title: 'Familien- & Gruppensafaris',
    description: 'Safaris mit Kindern, Mehrgenerationenreisen und kleine Gruppen.',
    icon: 'Users',
    items: [
      {
        q: 'Ist Tansania sicher für eine Familiensafari mit Kindern?',
        a: 'Ja — Tansania ist eines der am besten etablierten Familiensafari-Ziele Afrikas. Das Hauptrisiko, das es zu managen gilt, ist Malaria, weshalb die meisten Familien mit Prophylaxe reisen und wenn möglich Camps in höher gelegenen Gebieten mit geringerem Risiko wählen. Seriöse Anbieter setzen private Fahrzeuge ein (keine geteilten Game Drives), verkürzen die täglichen Fahrzeiten für jüngere Kinder und wählen familienfreundliche Lodges mit verbundenen Zimmern statt Standard-Doppelzimmern. Viele Camps setzen ein Mindestalter (meist 6-8 Jahre) für geführte Wanderungen fest, Game Drives selbst stehen aber meist jedem Alter offen.',
        relatedLinks: [{ label: '10-tägige Luxus-Familiensafari', href: '/safaris/10-days-luxury-family' }],
      },
      {
        q: 'Was ist die beste Reiseroute für eine Familiensafari mit kleinen Kindern?',
        a: 'Die beste Familiensafari-Route bleibt innerhalb von Tansanias Nördlichem Circuit (Serengeti, Ngorongoro, Tarangire, Lake Manyara), um lange Transferzeiten zu vermeiden, nutzt private 4x4-Fahrzeuge statt geteilter Trucks und baut in jedem Camp Ruhephasen ein — Pool-Zeit, kindgerechte Naturwanderungen, Junior-Ranger-Programme — statt Game Drive an Game Drive zu reihen. Ein privater Guide, der das Tagestempo an die Aufmerksamkeitsspanne eines Kindes anpassen kann, macht mehr Unterschied als die konkrete Parkauswahl.',
        relatedLinks: [{ label: 'Reiseziele nach Circuit', href: '/destinations/tanzania' }],
      },
      {
        q: 'Wie viele Tage sollte eine Familiensafari dauern?',
        a: 'Die meisten Familiensafaris dauern 5-7 Tage — lang genug, um 2-3 Parks ohne Hetze abzudecken, kurz genug, um die Aufmerksamkeit jüngerer Kinder zu halten und den Jetlag zu bewältigen. Familien, die die Safari mit einer Strandverlängerung auf Sansibar kombinieren, hängen oft noch 3-4 Tage an der Küste an, da kleine Kinder einen Strandaufenthalt meist besser vertragen als Game Drive an Game Drive.',
      },
      {
        q: 'Können Großeltern oder eine Mehrgenerationengruppe gemeinsam auf Safari gehen?',
        a: 'Ja — Mehrgenerationen- und Kleingruppensafaris sind üblich, und Camps kommen in der Regel mit einer breiten Altersspanne innerhalb derselben Reiseroute zurecht. Die wichtigste Planungsüberlegung ist das Tempo: Eine Reise, die für einen 70-jährigen Großelternteil und ein 6-jähriges Enkelkind konzipiert ist, funktioniert am besten mit kürzeren Fahrtagen, barrierearmen Zimmern (weniger Stufen, ebenerdige Zelte) und eingeplanten Ruhetagen statt eines auf fittere Alleinreisende zugeschnittenen, dichten Programms.',
        relatedLinks: [{ label: 'Senioren-, Jubiläums- & Gruppensafaris', href: '/safaris/12-day-seniors-anniversary-groups-safari' }],
      },
      {
        q: 'Was ist im Preis eines Familiensafari-Pakets enthalten?',
        a: 'Ein gut zusammengestelltes Familiensafari-Paket beinhaltet in der Regel ein privates Fahrzeug und einen Guide für die gesamte Reise, alle Park- und Naturschutzgebühren, Unterkunft, die meisten oder alle Mahlzeiten sowie interne Transfers. Was üblicherweise NICHT enthalten ist: internationale Flüge, Visa, Trinkgelder und optionale Extras wie eine Ballonfahrt. Fragen Sie immer nach, ob der genannte Preis pro Person oder pro Familie gilt, da sich die Preisgestaltung für Familienzimmer zwischen Camps stark unterscheidet.',
      },
    ],
  },
  {
    slug: 'best-time-and-great-migration',
    title: 'Beste Reisezeit & die Große Migration',
    description: 'Jahreszeiten, Wetter, und wann man die Gnu-Migration sieht.',
    icon: 'Calendar',
    items: [
      {
        q: 'Wann ist die beste Reisezeit für die Flussüberquerungen der Großen Migration?',
        a: 'Das hängt davon ab, welchen Teil der Migration Sie sehen möchten. Die dramatischen Überquerungen des Mara-Flusses finden etwa von Juli bis Oktober in der nördlichen Serengeti statt, wenn über eine Million Gnus Richtung Kenia ziehen. Die Kalbungszeit — womöglich die actionreichste Phase mit Raubtieren — findet von Januar bis März in der südlichen Serengeti (Ndutu-Gebiet) statt. Es gibt keinen einzelnen „besten Monat" für die gesamte Migration, da es sich um ein ganzjähriges, sich ständig bewegendes Ereignis handelt.',
        relatedLinks: [{ label: 'Serengeti-Nationalpark', href: '/destinations/serengeti' }],
      },
      {
        q: 'Wann findet die Große Migration in Tansania statt?',
        a: 'Die Große Migration findet das ganze Jahr über irgendwo im Serengeti-Ökosystem statt — es ist ein durchgehender Kreislauf, kein einzelnes Ereignis mit festem Anfang und Ende. Grob gesagt: Kalbung im Süden Januar-März, Zug nach Norden durch die zentrale Serengeti April-Juni, Flussüberquerungen im Norden Juli-Oktober, und Rückkehr nach Süden ab etwa November. Wo genau sich die Herden in einer bestimmten Woche befinden, hängt vom Regen ab, weshalb der genaue Zeitpunkt von Jahr zu Jahr variiert.',
      },
      {
        q: 'Was ist der beste Monat für einen Besuch der Serengeti?',
        a: 'Es gibt keinen universell „besten" Monat — es hängt davon ab, was Sie sehen möchten. Für Flussüberquerungen zielen Sie auf August oder September. Für die Kalbungszeit und die höchste Raubtierdichte: Januar bis März. Für weniger Andrang und satte grüne Landschaft ist die kurze Regenzeit im November unterschätzt. Juni und Juli bieten einen guten Mittelweg: gutes Wetter, Migrationsherden, die sich durch die zentrale und westliche Serengeti bewegen, und weniger Andrang als im August-Hoch.',
      },
      {
        q: 'Ist Tansania ein Ganzjahres-Safariziel?',
        a: 'Ja. Tansania hat für die Tierbeobachtung keine echte Nebensaison — die Trockenzeiten (Juni-Oktober und Januar-Februar) konzentrieren die Tiere um Wasserstellen und erleichtern so Sichtungen, während die Regenzeiten (März-Mai, November) üppige Landschaften, Jungtiere und deutlich niedrigere Preise und weniger Andrang mit sich bringen. Die lange Regenzeit (März-April) ist die ruhigste Phase, die einzige, in der manche abgelegenen Camps schließen, aber die Hauptcircuits bleiben geöffnet.',
      },
      {
        q: 'Wann ist die Kalbungszeit in der Serengeti, und warum ist sie wichtig?',
        a: 'Die Kalbungszeit findet etwa von Januar bis März in den kurzgrasigen Ebenen der südlichen Serengeti und dem Ndutu-Gebiet statt, wenn an einem einzigen Tag bis zu 8.000 Gnu-Kälber geboren werden können. Sie zieht die höchste Raubtierkonzentration der gesamten Migration an — Löwen, Geparden, Hyänen — und ist damit eines der besten Zeitfenster für Raubtier-Action, auch wenn zu dieser Zeit keine Flussüberquerungen stattfinden.',
      },
    ],
  },
  {
    slug: 'planning-costs-and-comparisons',
    title: 'Planung, Kosten & Kenia vs. Tansania',
    description: 'Was eine Safari kostet, was enthalten ist, und wie man sich zwischen den Ländern entscheidet.',
    icon: 'DollarSign',
    items: [
      {
        q: 'Was kostet eine Safari in Tansania?',
        a: 'Die Kosten einer Tansania-Safari variieren stark je nach Saison, Gruppengröße und Camp-Stil. Als grobe Richtlinie: Eine gut organisierte Safari im mittleren Preissegment kostet etwa 400-600 $ pro Person und Tag, eine Luxussafari kann 700-1.200 $+ pro Person und Tag erreichen, und Budget-Camping-Safaris können unter 300 $ pro Tag liegen. Der Preis pro Person sinkt bei größeren Gruppen deutlich, da sich private Fahrzeuge, Guide und Parkgebühren aufteilen. Der genaue Preis hängt stark von der gewählten Saison ab — die Hochsaison (Juni-Oktober, Januar-Februar) verlangt Premium-Preise.',
        relatedLinks: [{ label: 'Safari-Pakete ansehen', href: '/safaris' }],
      },
      {
        q: 'Kenia oder Tansania — was eignet sich besser für eine Safari?',
        a: 'Keines ist objektiv „besser" — sie passen zu unterschiedlichen Prioritäten. Tansania hat insgesamt mehr Parkfläche, den Ngorongoro-Krater, Sansibar als Strandverlängerung, und beherbergt die Migration einen Großteil des Jahres. Kenia hat die Masai Mara (Teil desselben Migrationsökosystems, ideal für Flussüberquerungen Juli-Oktober), meist kürzere Flugzeiten aus Europa und in manchen Gebieten eine etwas entwickeltere Safari-Infrastruktur. Viele Reisende kombinieren beide Länder in einer Reise, statt sich für eines zu entscheiden.',
        relatedLinks: [{ label: 'Reiseziele in Tansania', href: '/destinations/tanzania' }, { label: 'Safaris in Kenia', href: '/kenya' }],
      },
      {
        q: 'Wie viele Tage brauche ich für eine Tansania-Safari?',
        a: '7 Tage sind der Sweet Spot, um den Nördlichen Circuit (Serengeti, Ngorongoro, Tarangire) gründlich abzudecken, ohne sich gehetzt zu fühlen. 4-5 Tage funktionieren für eine fokussierte Reise zu 2 Parks. 10-14 Tage erlauben es, den Norden mit dem südlichen oder westlichen Circuit zu kombinieren oder Sansibar bzw. eine Kilimandscharo-Besteigung hinzuzufügen. Weniger als 4 Tage Safari fühlen sich oft wie viel Fahrzeit für zu wenig Zeit in den Parks selbst an.',
      },
      {
        q: 'Was ist im Safaripreis enthalten, und was nicht?',
        a: 'Die meisten Tansania-Safaripakete beinhalten: ein privates Fahrzeug mit Fahrer-Guide, alle Park- und Naturschutzgebühren, Unterkunft und die meisten Mahlzeiten. Typischerweise NICHT enthalten: internationale Flüge, die tansanische Visumgebühr, Reiseversicherung, Trinkgelder für Guides und Camp-Personal, alkoholische Getränke und optionale Extras wie eine Ballonfahrt oder eine Sansibar-Strandverlängerung. Klären Sie immer genau, was im Angebot enthalten ist, bevor Sie Angebote vergleichen, da „Safaripreis" bei verschiedenen Anbietern unterschiedliche Dinge bedeutet.',
      },
      {
        q: 'Ist es günstiger, direkt bei einem lokalen Veranstalter zu buchen?',
        a: 'In der Regel ja — eine Direktbuchung bei einem lizenzierten, lokal ansässigen Veranstalter in Tansania spart den Aufschlag, den internationale Buchungsplattformen und Agenturen erheben, oft 15-30 %. Der Nachteil: Man muss selbst mehr recherchieren, um Lizenzierung, Bewertungen und die Qualität von Fahrzeugen und Guides zu prüfen, da die Prüfschicht der Plattform wegfällt. Ein lokal in Arusha ansässiger Veranstalter hat zudem in der Regel bessere Echtzeit-Kenntnisse über Parkbedingungen und den aktuellen Standort der Migration.',
      },
    ],
  },
  {
    slug: 'tanzania-circuits-and-wildlife',
    title: 'Tansanias Circuits & Tierwelt',
    description: 'Die Big Five, Tansanias Safari-Circuits, und was Sie in jedem Park erwartet.',
    icon: 'Binoculars',
    items: [
      {
        q: 'Was sind die Big Five, und wo sieht man sie in Tansania?',
        a: 'Die Big Five — Löwe, Leopard, Elefant, Büffel und Nashorn — sind alle in Tansania zu finden, wobei Nashorn-Sichtungen am seltensten sind, da die Spitzmaulnashorn-Population gering und fast ausschließlich im Ngorongoro-Krater konzentriert ist. Löwe, Elefant und Büffel sind in der Serengeti, im Ngorongoro und in Tarangire verlässlich zu sehen. Der Leopard ist von allen fünf am schwersten aufzuspüren — am zuverlässigsten im Seronera-Gebiet der zentralen Serengeti, wo er Flussuferwälder bevorzugt.',
        relatedLinks: [{ label: 'Serengeti-Nationalpark', href: '/destinations/serengeti' }, { label: 'Ngorongoro-Krater', href: '/destinations/ngorongoro' }],
      },
      {
        q: 'Was ist der Unterschied zwischen dem Ngorongoro-Krater und der Serengeti?',
        a: 'Der Ngorongoro ist ein einziges, kompaktes, in sich geschlossenes Ökosystem — eine eingestürzte Vulkancaldera von etwa 260 km² am Kraterboden — wo die Tierwelt ungewöhnlich konzentriert und meist an einem einzigen, sehr ergiebigen Tag zu sehen ist. Die Serengeti ist riesig (fast 15.000 km²), offene Ebenen, auf denen sich die Migration bewegt und Sichtungen sich über ein viel größeres Gebiet und mehrere Tage verteilen. Die meisten Reiserouten kombinieren beides: Ngorongoro für einen dichten, verlässlichen Big-Five-Tag, dann die Serengeti für das Erlebnis der offenen Ebenen und der Migration.',
        relatedLinks: [{ label: 'Ngorongoro-Krater', href: '/destinations/ngorongoro' }],
      },
      {
        q: 'Was ist der Unterschied zwischen Tansanias Nördlichem, Südlichem und Westlichem Circuit?',
        a: 'Der Nördliche Circuit (Serengeti, Ngorongoro, Tarangire, Lake Manyara) ist Tansanias klassische, meistbesuchte Route — beste Infrastruktur, die Migration, verlässliche Big Five. Der Südliche Circuit (Ruaha, Nyerere/Selous) ist abgelegen, wenig besucht und wilder — größere, weiter verstreute Parks mit deutlich weniger Fahrzeugen. Der Westliche Circuit (Mahale, Katavi, Gombe) ist Schimpansen-Trekking-Gebiet, meist nur per Kleinflugzeug erreichbar, und der abgelegenste der drei.',
      },
      {
        q: 'Lohnt sich der Südliche Circuit (Ruaha, Nyerere/Selous)?',
        a: 'Ja, besonders für Wiederholungsbesucher oder alle, die eine ruhigere, exklusivere Safari suchen — Ruaha ist Tansanias größter Nationalpark und einer der besten für Löwe und Afrikanischen Wildhund, und Nyerere (früher Selous) ist Afrikas größtes Schutzgebiet, bekannt für Bootssafaris zusätzlich zu Game Drives. Beide sehen nur einen Bruchteil der Besucherzahlen des Nördlichen Circuits. Der Nachteil: Die Anreise erfolgt meist per Flugzeug statt per Fahrzeug, was die Kosten erhöht.',
        relatedLinks: [{ label: 'Ruaha-Nationalpark', href: '/destinations/ruaha' }, { label: 'Nyerere-Nationalpark (Selous)', href: '/destinations/nyerere' }],
      },
      {
        q: 'Welche Tierwelt sieht man im Tarangire-Nationalpark?',
        a: 'Tarangire ist vor allem für seine Elefantenherden bekannt — einige der größten Konzentrationen Tansanias, besonders in der Trockenzeit (Juni-Oktober), wenn sie sich entlang des Tarangire-Flusses versammeln — sowie für seine markanten uralten Affenbrotbäume. Der Park ist auch stark bei Löwensichtungen und einer der besseren Parks im Nördlichen Circuit, um kleinere, seltener gesichtete Antilopenarten zu entdecken. Er wird meist als 1-2-tägige Ergänzung zu Serengeti und Ngorongoro besucht.',
        relatedLinks: [{ label: 'Tarangire-Nationalpark', href: '/destinations/tarangire' }],
      },
    ],
  },
  {
    slug: 'kenya-and-rwanda',
    title: 'Safaris in Kenia & Ruanda',
    description: 'Länder kombinieren, die Masai Mara, und Gorilla-Trekking.',
    icon: 'Compass',
    items: [
      {
        q: 'Kann ich eine Kenia- und eine Tansania-Safari in einer Reise kombinieren?',
        a: 'Ja, und das ist eine gängige Art, sowohl die Serengeti als auch die Masai Mara zu sehen — technisch ein einziges, durchgehendes Ökosystem, das durch eine internationale Grenze geteilt wird. Der Grenzübertritt selbst erfordert entweder einen planmäßigen Kleinflugzeugflug oder eine lange Überlandfahrt plus separate Parkeintrittsgebühren auf jeder Seite, weshalb die meisten kombinierten Reiserouten mindestens 10-12 Tage insgesamt einplanen, um sich nicht gehetzt zu fühlen.',
        relatedLinks: [{ label: '10-tägige Kenia- & Tansania-Safari', href: '/safaris/10-day-kenya-tanzania-safari' }],
      },
      {
        q: 'Was kostet Gorilla-Trekking in Ruanda, und braucht man eine Genehmigung?',
        a: 'Ja, eine Genehmigung ist Pflicht und nur begrenzt verfügbar — der Volcanoes-Nationalpark in Ruanda vergibt eine feste Anzahl an Gorilla-Trekking-Genehmigungen pro Tag, derzeit zum Preis von 1.500 $ pro Person, was eine Stunde bei einer habituierten Gorillafamilie sowie Parkgebühren und einen Guide beinhaltet. Genehmigungen sollten weit im Voraus gebucht werden, besonders für Juli-September und Dezember-Februar, die trockensten und beliebtesten Trekking-Zeiträume.',
        relatedLinks: [{ label: '4-tägiges Gorilla-Trekking in Ruanda', href: '/safaris/4-day-rwanda-gorilla-trekking' }, { label: 'Volcanoes-Nationalpark', href: '/destinations/volcanoes' }],
      },
      {
        q: 'Was ist die beste Reisezeit, um Gorillas in Ruanda zu sehen?',
        a: 'Gorilla-Trekking ist ganzjährig möglich, da Genehmigungen nicht saisonabhängig sind, aber die Trockenzeiten — Juni-September und Dezember-Februar — machen das Wandern im steilen Gelände des Volcanoes-Nationalparks leichter und weniger schlammig. Die feuchteren Monate (März-Mai, Oktober-November) bedeuten anspruchsvollere Pfade, aber deutlich weniger Touristen und mitunter günstigere Unterkünfte in der Nähe.',
      },
      {
        q: 'Ist die Masai Mara dasselbe wie die Serengeti?',
        a: 'Sie sind Teil desselben durchgehenden Ökosystems — die Masai Mara ist im Grunde die kenianische, nördliche Fortsetzung der Serengeti — nur getrennt durch eine internationale Grenze, die die Tierwelt selbst ignoriert. Die Mara ist kleiner und empfängt die Migrationsherden während der Flussüberquerungssaison (etwa Juli-Oktober); die Serengeti ist deutlich größer und beherbergt die Migration den Rest des Jahres, einschließlich der Kalbungszeit.',
      },
      {
        q: 'Wie körperlich anstrengend ist Gorilla-Trekking?',
        a: 'Das variiert von Tour zu Tour stark — Gorillafamilien werden aufgespürt, nicht an einem festen Ort gehalten, daher kann eine Wanderung von unter einer Stunde bis zu 4-5 Stunden pro Strecke dauern, durch steilen, manchmal schlammigen Vulkanwald in großer Höhe (der Volcanoes-Nationalpark liegt auf 2.400-4.500 m). Ein angemessenes Fitnesslevel ist wirklich hilfreich; Träger sind verfügbar, um Gepäck zu tragen und an steileren Abschnitten unterstützend zur Seite zu stehen.',
      },
    ],
  },
  {
    slug: 'kilimanjaro-and-trekking',
    title: 'Kilimandscharo & Trekking',
    description: 'Routen, Kosten, Schwierigkeit und Erfolgsquoten für die Kilimandscharo-Besteigung.',
    icon: 'Mountain',
    items: [
      {
        q: 'Was ist die einfachste Route für die Kilimandscharo-Besteigung?',
        a: 'Machame ist die beliebteste Route und bietet eine gute Balance aus Landschaft und Akklimatisierung, aber die Lemosho-Route gilt hinsichtlich der Gipfelerfolgsquote allgemein als die leichteste, vor allem weil ihre längere Reiseroute (7-8 Tage) dem Körper mehr Zeit zur Akklimatisierung gibt. Marangu ist die einzige Route mit Hüttenunterkunft statt Zelten und hat eine sanftere tägliche Steigung, aber ihre kürzere Standard-Reiseroute bedeutet weniger Akklimatisierungszeit, was die leichtere Wanderung wieder ausgleichen kann.',
        relatedLinks: [{ label: 'Kilimandscharo Machame-Route', href: '/trekking/machame' }, { label: 'Alle Kilimandscharo-Routen', href: '/trekking' }],
      },
      {
        q: 'Was kostet die Besteigung des Kilimandscharo?',
        a: 'Die Kosten für eine Kilimandscharo-Besteigung liegen typischerweise bei 2.000-2.500 $ pro Person für eine Budget- bis Mittelklasse-Gruppenbesteigung, bis zu 3.500-5.000 $+ für eine private, längere, besser betreute Route mit höherem Guide-zu-Kletterer-Verhältnis. Allein die Parkgebühren (festgelegt von Tansanias Nationalparkbehörde) machen einen großen festen Anteil jedes Angebots aus, weshalb sehr billige Besteigungen meist bei Crew-Löhnen, Ausrüstung oder Akklimatisierungstagen sparen — was sowohl Sicherheit als auch Gipfelerfolg beeinträchtigt.',
        relatedLinks: [{ label: 'Kilimandscharo Machame-Route', href: '/trekking/machame' }],
      },
      {
        q: 'Wie hoch ist die Erfolgsquote, den Kilimandscharo-Gipfel zu erreichen?',
        a: 'Die Erfolgsquoten variieren enorm je nach Routenlänge: kürzere 5-Tages-Routen verzeichnen Erfolgsquoten von nur 40-50 % wegen unzureichender Akklimatisierungszeit, während gut getaktete 7-8-Tages-Routen wie Lemosho Erfolgsquoten von 85-90 %+ melden. Der wichtigste Faktor, um den Gipfel zu erreichen, ist nicht die Fitness — es ist, dem Körper genug Tage zu geben, sich an die Höhe zu gewöhnen, weshalb längere Routen durchweg besser abschneiden.',
      },
      {
        q: 'Wie viele Tage dauert die Besteigung des Kilimandscharo?',
        a: 'Die meisten Routen dauern 6-8 Tage hin und zurück, wobei Marangu in 5 Tagen machbar ist und längere Optionen wie eine vollständige Lemosho- oder Northern-Circuit-Route 8-9 Tage dauern können. Schon ein zusätzlicher Akklimatisierungstag verbessert Komfort und Gipfelerfolg spürbar, weshalb die meisten erfahrenen Veranstalter von der kürzesten verfügbaren Reiseroute auf jeder Route abraten.',
      },
      {
        q: 'Muss ich ein erfahrener Wanderer sein, um den Kilimandscharo zu besteigen?',
        a: 'Auf keiner der Standard-Trekkingrouten sind technische Kletter­erfahrung oder Spezialausrüstung erforderlich — es ist eine lange Wanderung in großer Höhe, keine technische Besteigung. Allerdings macht ein angemessenes Grundfitnesslevel (bequem 5-7 Stunden am Tag laufen können) einen echten Unterschied dabei, wie sehr man es genießt, und die Höhe beeinträchtigt die Fitness unvorhersehbar, weshalb auch erfahrene Wanderer die Akklimatisierung ernst nehmen sollten.',
      },
    ],
  },
  {
    slug: 'honeymoon-zanzibar-and-experiences',
    title: 'Flitterwochen, Sansibar & besondere Erlebnisse',
    description: 'Flitterwochen-Safaris, Strandverlängerungen, Ballonfahrten, und Fotoreisen.',
    icon: 'Heart',
    items: [
      {
        q: 'Was ist die beste Flitterwochen-Route, die Safari und Strand kombiniert?',
        a: 'Die klassische Kombination sind 4-5 Nächte Safari im Nördlichen Circuit (Serengeti und Ngorongoro decken die Highlights effizient ab), gefolgt von 4-5 Nächten auf Sansibar für den Strandteil der Reise — insgesamt etwa 9-10 Tage. Auf Flitterwochen spezialisierte Camps bieten oft private Dinner, eine auf Erwachsene ausgerichtete Atmosphäre und hochwertige Zeltsuiten statt familientauglicher Zimmer — es lohnt sich also zu prüfen, ob eine Unterkunft flitterwochentauglich statt nur familienfreundlich ist.',
        relatedLinks: [{ label: 'Flitterwochen-Safari & Sansibar (9 Tage)', href: '/safaris/9-day-honeymoon-safari-zanzibar' }, { label: 'Sansibar', href: '/destinations/zanzibar' }],
      },
      {
        q: 'Was kostet eine Ballonfahrt über die Serengeti?',
        a: 'Eine Ballonfahrt über die Serengeti kostet typischerweise 550-700 $ pro Person für etwa eine Stunde in der Luft bei Sonnenaufgang, meist gefolgt von einem Champagner-Buschfrühstück. Sie wird als optionales Extra zu einer Standard-Safariroute berechnet und sollte im Voraus gebucht werden, da jede Ballonfahrt-Gesellschaft nur eine begrenzte Anzahl Personen pro Morgen fliegen kann.',
      },
      {
        q: 'Kann ich eine Tansania-Safari mit einem Strandurlaub auf Sansibar kombinieren?',
        a: 'Ja — es ist eine der beliebtesten Safari-Verlängerungen und logistisch einfach: Sansibar ist nur einen kurzen Flug von Arusha oder den wichtigsten Safari-Circuits entfernt, weshalb die meisten Veranstalter sie als nahtlose letzte Etappe einbauen. Eine übliche Aufteilung ist 5-7 Tage Safari gefolgt von 3-5 Tagen Strand, wobei das Verhältnis völlig flexibel ist, je nachdem wie viel Strand- gegenüber Safarizeit gewünscht ist.',
        relatedLinks: [{ label: 'Safari & Sansibar (10 Tage)', href: '/safaris/10-day-safari-zanzibar' }],
      },
      {
        q: 'Unterscheidet sich eine Fotosafari von einer normalen Safari?',
        a: 'Ja — eine dedizierte Fotosafari nutzt für Fotografen umgebaute Fahrzeuge (Bohnensack-Stützen, mehr Platz am Fenster, manchmal eine Dachluke in Fotografenhöhe), hält Gruppen kleiner und richtet den Tag am Licht aus — Aufbruch vor Sonnenaufgang und Bleiben bis zur goldenen Stunde statt eines festen Game-Drive-Zeitplans. Guides auf fotofokussierten Reisen sind zudem meist darauf trainiert, gute Positionierung für Aufnahmen zu priorisieren, statt einfach nur Arten abzuhaken.',
        relatedLinks: [{ label: 'Foto-Abenteuersafari (7 Tage)', href: '/safaris/7-day-photography-adventure-safari' }],
      },
      {
        q: 'Was ist eine Fly-in-Safari, und lohnt sich der Aufpreis?',
        a: 'Eine Fly-in-Safari nutzt Kleinflugzeuge, um sich zwischen Parks zu bewegen, statt langer Fahrten mit dem Geländewagen — eine Fahrt, die 6-8 Stunden dauern könnte, wird zu einem 45-60-minütigen Flug. Der Aufpreis lohnt sich vor allem bei Reisen in den südlichen oder westlichen Circuit (Ruaha, Nyerere, Mahale), wo Straßentransfers wirklich lang und beschwerlich sind; für die eng beieinanderliegenden Parks des Nördlichen Circuits ist das Fahren zwischen ihnen oft Teil des Erlebnisses statt ein Nachteil.',
      },
    ],
  },
  {
    slug: 'culture-health-and-logistics',
    title: 'Kultur, Gesundheit & praktische Logistik',
    description: 'Die Massai, Impfungen, Visa, und was man einpacken sollte.',
    icon: 'ShieldCheck',
    items: [
      {
        q: 'Wer sind die Massai?',
        a: 'Die Massai sind ein halbnomadisches Hirtenvolk, das im Norden Tansanias und im Süden Kenias beheimatet ist und historisch auf Viehzucht in der Region der Serengeti und des Rift Valley zentriert war — demselben Land, das heute viele Safari-Circuits durchqueren. Viele Massai-Gemeinschaften nahe dem Nördlichen Circuit heißen Besucher zu kulturellen Dorfbesuchen willkommen und bieten eine authentische, vom Guide organisierte Möglichkeit, ihre Traditionen, ihre unverwechselbare Kleidung und ihre Lebensweise kennenzulernen, statt sie nur als Kulisse zur Tierwelt zu betrachten.',
      },
      {
        q: 'Wer sind die Hadzabe, und kann ich ihre Gemeinschaft auf Safari besuchen?',
        a: 'Die Hadzabe sind eine der letzten echten Jäger-und-Sammler-Gemeinschaften der Erde, leben rund um den Lake Eyasi im Norden Tansanias und sprechen noch immer eine unverwechselbare Klicksprache. Ja — ein respektvoller, guidegeführter Besuch ist möglich und ein für Reisende, die Kultur mit Tierwelt verbinden möchten, wirklich wachsendes Interesse: Ein typischer Besuch beinhaltet die Teilnahme an einer morgendlichen Jagd oder Sammeltour mit den Hadzabe, gefolgt von einem Halt bei den benachbarten Datoga, bekannt für ihre traditionelle Schmiedekunst. Solche Besuche funktionieren am besten bei gemeinschaftsgeführten Reisen mit ethischem Protokoll statt informellen Zwischenstopps.',
        relatedLinks: [{ label: 'Tarangire-, Ngorongoro- & Hadzabe-Erlebnis', href: '/experiences/cultural-experience' }],
      },
      {
        q: 'Brauche ich Impfungen oder Malaria-Medikamente für eine Tansania-Safari?',
        a: 'Ein Gelbfieber-Impfzertifikat ist erforderlich, wenn Sie aus einem Land mit Gelbfieber-Übertragungsrisiko einreisen (oder ein solches durchreist haben) — prüfen Sie die aktuellen Anforderungen für Ihre konkrete Reiseroute. Eine Malaria-Prophylaxe wird für die Safari-Gebiete (den Großteil des tansanischen Festlands) dringend empfohlen, auch wenn Sansibar und höher gelegene Gebiete wie Arusha oder der Ngorongoro-Kraterrand ein geringeres Risiko aufweisen. Routineimpfungen (Tetanus, Hepatitis A/B, Typhus) werden von Reisekliniken häufig empfohlen, sind aber keine Einreisevoraussetzung für Tansania. Bestätigen Sie aktuelle Empfehlungen vor der Abreise immer bei einer reisemedizinischen Fachkraft.',
      },
      {
        q: 'Welches Visum brauche ich für Tansania?',
        a: 'Die meisten Nationalitäten benötigen ein Visum für die Einreise nach Tansania, erhältlich entweder als E-Visum, das vorab online beantragt wird, oder für viele Nationalitäten bei Ankunft an den großen Flughäfen. Das E-Visum vor der Reise zu bearbeiten ist in der Regel schneller und weniger stressig als ohne anzureisen. Anforderungen und berechtigte Nationalitäten ändern sich regelmäßig — bestätigen Sie aktuelle Regeln daher immer direkt bei der tansanischen Einwanderungsbehörde oder Ihrer Botschaft, nahe an Ihrem Reisedatum statt sich auf ältere Informationen zu verlassen.',
      },
      {
        q: 'Was sollte ich für eine Safari einpacken?',
        a: 'Kleidung in neutralen Farben (Khaki, Oliv, Braun — grelle Farben sowie reines Weiß oder Schwarz vermeiden, da diese Insekten anziehen oder bei der Tierwelt auffallen können), Schichten für die frühmorgendlichen kalten Game Drives, die schnell wärmer werden, einen breitkrempigen Hut, Sonnencreme, ein Fernglas und eine trockene oder gepolsterte Tasche für die Kameraausrüstung wegen der staubigen Straßen. Die meisten Camps bieten einen Wäscheservice an, daher reicht es meist, für 4-5 Tage zu packen, selbst bei längeren Safaris.',
      },
      {
        q: 'Ist Tansania sicher für Touristen?',
        a: 'Tansanias Safari-Regionen sind gut etablierte, vom Tourismus abhängige Gebiete mit einer starken Sicherheitsbilanz — die praktischen Risiken bei einer geführten Safari betreffen eher Sonnenexposition, Straßenzustand und den gesunden Menschenverstand in Tiernähe (im Fahrzeug bleiben, Guide-Anweisungen folgen) als Kriminalität. Wie bei jeder internationalen Reise gelten Standardvorsichtsmaßnahmen in Städten und an Transitpunkten. Seriöse Veranstalter briefen jeden Gast zu Beginn der Reise über Sicherheitserwartungen.',
      },
    ],
  },
  {
    slug: 'about-ewa',
    title: 'Über EWA Safari Outfitters',
    description: 'Wer wir sind, unsere Referenzen, und was eine EWA-Safari besonders macht.',
    icon: 'Award',
    items: [
      {
        q: 'Was ist EWA Safari Outfitters?',
        a: 'EWA Safari Outfitters ist ein lokal geführter, in Arusha ansässiger Safari-Veranstalter, der seit 2022 individuelle Safaris in Tansania, Kenia und Ruanda organisiert — dasselbe Team hinter dem „Extreme Wilderness Adventure" durch Serengeti, Ngorongoro und darüber hinaus. „EWA" steht für Extreme Wilderness Adventure, den ursprünglichen Namen des Unternehmens, und jede Reise ist noch immer nach derselben Philosophie aufgebaut: echte, private, geführte Safaris statt vorgefertigter Gruppenreisen.',
        relatedLinks: [{ label: 'Über EWA Safari Outfitters', href: '/about' }],
      },
      {
        q: 'Hieß EWA Safari Outfitters früher Extreme Wilderness Adventure?',
        a: 'Ja — EWA Safari Outfitters wurde ursprünglich als Extreme Wilderness Adventure gegründet und betrieben, weshalb die Website-Domain (theextremewilderness.com) und der Instagram-Account (@extremewildernessadventure) diesen Namen noch immer tragen. Die Umbenennung in „EWA Safari Outfitters" spiegelt dasselbe lokal ansässige Team in Arusha, dieselben Guides und denselben Betrieb wider — eine Namensauffrischung, kein Eigentümerwechsel und kein anderes Unternehmen.',
        relatedLinks: [{ label: 'Über EWA Safari Outfitters', href: '/about' }],
      },
      {
        q: 'Ist EWA Safari Outfitters TATO-zertifiziert und ein lizenzierter Reiseveranstalter in Tansania?',
        a: 'Ja — EWA Safari Outfitters ist TATO-zertifiziert (Mitglied der Tanzania Association of Tour Operators), des Branchenverbands, der legitime, lizenzierte Veranstalter in Tansania prüft. Eine Buchung bei einem TATO-zertifizierten Veranstalter ist eine der einfachsten Möglichkeiten, sicherzustellen, dass ein Tansania-Safariunternehmen ordnungsgemäß lizenziert ist und nicht ein nicht registrierter Vermittler, der Reisen anderer Veranstalter weiterverkauft.',
      },
      {
        q: 'Was bedeutet die TATO-Mitgliedschaft konkret für meine Buchung?',
        a: 'TATO vertritt und prüft die Reiseveranstalter Tansanias bereits seit 1983 — die Mitgliedschaft bedeutet also, dass EWA Safari Outfitters von genau dem Branchenverband anerkannt wird, mit dem auch die Regierung und der internationale Reisehandel zusammenarbeiten, und nicht einfach nur ein Unternehmen ist, das sich selbst als lizenziert bezeichnet. Praktisch heißt das: Sollte jemals mehr nötig sein als unser eigener Kundenservice, steht ein echter Branchenverband hinter der Buchung — und genau deshalb gehört die TATO-Mitgliedschaft zu den Standardprüfungen sicherheitsbewusster Reisender, bevor sie überhaupt eine Tansania-Safari buchen. EWA ist konkret unter sechs TATO-Kategorien gelistet — Tour Operators, Mainland Tour Operators, DMC/Tour Operators, Mountain Trekking Operators, Zanzibar & Beach Holiday Operators und Cultural Experience Operators — und deckt damit unsere Safari-Reiserouten, Kilimandscharo-Besteigungen, Sansibar-Verlängerungen und kulturellen Ausflüge gleichermaßen ab.',
      },
      {
        q: 'Wie kann ich die TATO-Mitgliedschaft von EWA Safari Outfitters selbst überprüfen?',
        a: 'Direkt auf der Website von TATO — unser Eintrag ist öffentlich einsehbar und liegt nicht in unserer Kontrolle, wir könnten ihn also gar nicht verfälschen. So lässt sich vor der Buchung schnell und unabhängig bestätigen, dass wir ein echter, lizenzierter Veranstalter sind, statt einfach dem Wort irgendeines Anbieters zu vertrauen.',
        relatedLinks: [{ label: 'Unseren TATO-Mitgliedseintrag ansehen', href: 'https://tatotz.org/portfolio/ewa-safari-outfitters/' }],
      },
      {
        q: 'Wie lange organisiert EWA Safari Outfitters schon Safaris?',
        a: 'EWA Safari Outfitters organisiert seit 2022 Safaris (über 5 Jahre unter dem Namen Extreme Wilderness Adventure vor und während der Umbenennung), mit über 200 geführten Reisenden durch Tansania, Kenia und Ruanda, einer 4,9-Bewertung auf TripAdvisor und Gästen aus über 40 Ländern — etabliert genug, um diese Routen wirklich zu kennen, aber noch klein genug, dass jede Reise individuell geplant wird, statt in eine feste Gruppenreiseroute gepresst zu werden.',
      },
      {
        q: 'Was unterscheidet EWA Safari Outfitters von anderen Tansania-Safariunternehmen?',
        a: 'Jede EWA-Safari nutzt ein privates Fahrzeug und einen privaten Guide — nie einen geteilten Truck mit anderen Reisenden, die Sie sich nicht ausgesucht haben — und das Unternehmen ist zu 100 % lokal im Besitz und in Arusha ansässig, statt eine ausländische Agentur, die Reisen anderer Veranstalter weiterverkauft. Gäste berichten von einer 100-prozentigen Big-Five-Sichtungsrate, und das lokale Wissen des Teams vor Ort (welche Straßen offen sind, wo genau die Migration diese Woche steht) kommt daher, tatsächlich dort ansässig zu sein, wo die Safaris stattfinden — nicht aus einem Callcenter im Ausland.',
        relatedLinks: [{ label: 'Was uns unterscheidet', href: '/about#why-us' }],
      },
      {
        q: 'Wer wird mein Safari-Guide bei EWA Safari Outfitters sein?',
        a: 'Das Guide-Team von EWA umfasst erfahrene, in Tansania ansässige Safari-Guides — darunter Mike Mawolle, Nixon Massawe und Josh Meela — jeder mit jahrelanger Erfahrung auf denselben Routen des Nördlichen und Südlichen Circuits, genau die Art von lokalem, straßengenauem Wissen, die den Unterschied zwischen einem guten und einem großartigen Game Drive ausmacht. Guides werden pro Reise zugeteilt, nie gleichzeitig auf mehrere Fahrzeuge verteilt.',
        relatedLinks: [{ label: 'Das Team kennenlernen', href: '/about#guides' }],
      },
      {
        q: 'Ist EWA Safari Outfitters lokal im Besitz, oder eine ausländische Agentur, die Reisen weiterverkauft?',
        a: 'EWA Safari Outfitters ist zu 100 % lokal im Besitz und in Arusha, Tansania, ansässig — keine ausländisch geführte Agentur oder Buchungsplattform, die Reisen anderer Veranstalter mit Aufschlag weiterverkauft. Eine Direktbuchung bei einem lokal geführten Veranstalter ist zudem meist kostengünstiger, da die zusätzliche Marge einer internationalen Agentur entfällt.',
      },
      {
        q: 'Wo ist EWA Safari Outfitters ansässig, und kann man das Büro besuchen?',
        a: 'EWA Safari Outfitters hat seinen Sitz in der Ingira Street 20 in Arusha, Tansania, derselben Stadt, von der aus die meisten Safaris des Nördlichen Circuits und Kilimandscharo-Besteigungen starten. Besucher sind vor oder nach einer Reise im Büro willkommen; melden Sie sich vorab unter info@theextremewilderness.com oder +255 (0) 747 999 070, um einen Besuch zu vereinbaren.',
        relatedLinks: [{ label: 'Unser Büro besuchen', href: '/about' }, { label: 'Kontaktieren Sie uns', href: '/contact' }],
      },
      {
        q: 'Wie schnell antwortet EWA Safari Outfitters auf Anfragen?',
        a: 'EWA Safari Outfitters beantwortet Safari-Anfragen in der Regel innerhalb weniger Stunden während der ostafrikanischen Geschäftszeiten, meist noch am selben Tag außerhalb davon. Der schnellste Weg zu einem echten, individuellen Angebot (keiner generischen Preisliste) ist das Anfrageformular auf jeder Safari-, Reiseziel- oder FAQ-Seite dieser Website, das direkt beim Team in Arusha ankommt.',
        relatedLinks: [{ label: 'Kontaktieren Sie uns', href: '/contact' }],
      },
      {
        q: 'Ist EWA Safari Outfitters nur in Tansania tätig, oder auch in Kenia und Ruanda?',
        a: 'EWA Safari Outfitters ist in Tansania ansässig und tief verwurzelt, betreibt und kombiniert aber auch Reisen durch Kenia (Masai Mara und darüber hinaus) und Ruanda (Gorilla-Trekking im Volcanoes-Nationalpark) — viele Gäste kombinieren zwei oder drei Länder in einer individuellen Reiseroute, statt jedes separat zu buchen.',
        relatedLinks: [{ label: 'Safaris in Kenia', href: '/kenya' }, { label: 'Safaris in Ruanda', href: '/rwanda' }],
      },
    ],
  },
]

export const FAQ_CATEGORY_SLUGS = faqCategories.map((c) => c.slug)
