import type { FaqCategory } from './faq'

// Genuinely Czech-authored content — not a mechanical translation of faq.ts.
// Category slugs/order stay identical to the English file (stable jump-nav
// anchors); only title/description/items are localized.
export const faqCategories: FaqCategory[] = [
  {
    slug: 'family-and-group-safaris',
    title: 'Rodinná a skupinová safari',
    description: 'Safari s dětmi, mezigenerační výlety a cestování v malých skupinách.',
    icon: 'Users',
    items: [
      {
        q: 'Je Tanzanie bezpečná pro rodinné safari s dětmi?',
        a: 'Ano — Tanzanie patří k nejzavedenějším destinacím pro rodinná safari v Africe. Hlavním rizikem, které je třeba mít pod kontrolou, je malárie, a proto většina rodin cestuje s profylaxí a pokud možno volí tábory ve výše položených oblastech s nižším rizikem. Renomovaní pořadatelé používají soukromá vozidla (nikoli sdílené game drive), zkracují denní dobu jízdy pro mladší děti a vybírají rodinné lodge s propojenými pokoji nebo rodinnými stany namísto standardních dvoulůžkových pokojů. Mnoho táborů stanovuje minimální věk (obvykle 6–8 let) pro pěší safari nebo některé aktivity, ale samotné game drive jsou přístupné všem věkovým kategoriím.',
        relatedLinks: [{ label: '10denní luxusní rodinné safari', href: '/safaris/10-days-luxury-family' }],
      },
      {
        q: 'Jaký je nejlepší plán cesty na safari pro rodinu s malými dětmi?',
        a: 'Nejlepší plány cesty pro rodinná safari zůstávají v rámci tanzanského severního okruhu (Serengeti, Ngorongoro, Tarangire, Lake Manyara), aby se minimalizovaly dlouhé přejezdové dny, využívají soukromá vozidla 4x4 namísto sdílených náklaďáků a v každém táboře zařazují čas na odpočinek — čas u bazénu, přírodní vycházky zaměřené na děti, programy pro juniorní rangery — místo game drive na game drive. Soukromý průvodce, který dokáže přizpůsobit tempo dne pozornosti dítěte, znamená větší rozdíl než konkrétní výběr parků.',
        relatedLinks: [{ label: 'Destinace podle okruhu', href: '/destinations/tanzania' }],
      },
      {
        q: 'Kolik dní by mělo rodinné safari trvat?',
        a: 'Většina rodinných safari trvá 5–7 dní — dostatečně dlouho na to, aby bez spěchu pokryla 2–3 parky, a zároveň dost krátce na to, aby udržela pozornost mladších dětí a zvládla časový posun. Rodiny, které safari kombinují s pobytem na pláži na Zanzibaru, si často přidávají dalších 3–4 dny na pobřeží, protože malé děti obvykle lépe zvládají pobyt na pláži než game drive na game drive.',
      },
      {
        q: 'Mohou na safari cestovat společně prarodiče nebo mezigenerační skupina?',
        a: 'Ano — mezigenerační safari a safari v malých skupinách jsou běžná a tábory obvykle v rámci stejného plánu cesty zvládnou širokou škálu věkových kategorií. Hlavním plánovacím hlediskem je tempo: cesta postavená kolem 70letého prarodiče a 6letého vnoučete funguje nejlépe s kratšími dny strávenými v autě, tábory s bezbariérovým přístupem k pokojům (méně schodů, přízemní stany) a zařazenými dny na odpočinek namísto nabitého programu určeného pro fyzicky zdatnější jednotlivé cestovatele.',
        relatedLinks: [{ label: 'Safari pro seniory, výročí a skupiny', href: '/safaris/12-day-seniors-anniversary-groups-safari' }],
      },
      {
        q: 'Co je zahrnuto v ceně balíčku rodinného safari?',
        a: 'Dobře sestavený balíček rodinného safari obvykle zahrnuje soukromé vozidlo a průvodce po celou dobu cesty, veškeré vstupní a ochranářské poplatky, ubytování, většinu nebo všechna jídla a vnitrostátní přesuny. Co obvykle zahrnuto není: mezinárodní lety, víza, spropitné a volitelné doplňky, jako jsou lety balónem. Vždy se konkrétně zeptejte, zda je uvedená cena za osobu, nebo za celou rodinu, protože cenové struktury rodinných pokojů a propojených stanů se mezi jednotlivými tábory hodně liší.',
      },
    ],
  },
  {
    slug: 'best-time-and-great-migration',
    title: 'Nejlepší doba k návštěvě a velká migrace',
    description: 'Roční období, počasí a kdy vidět migraci pakoňů.',
    icon: 'Calendar',
    items: [
      {
        q: 'Kdy je nejlepší doba vidět přechody řek při migraci pakoňů?',
        a: 'Záleží na tom, kterou část migrace chcete vidět. Dramatické přechody řeky Mara probíhají zhruba od července do října v severní části Serengeti, kdy se přes milion pakoňů tlačí na sever směrem ke Keni. Období vrhu mláďat — pravděpodobně úsek s nejvíce akcí predátorů — probíhá od ledna do března v jižní části Serengeti (oblast Ndutu). Neexistuje jediný „nejlepší měsíc" pro celou migraci, protože jde o celoroční, neustále se pohybující událost, nikoli o pevné datum.',
        relatedLinks: [{ label: 'Národní park Serengeti', href: '/destinations/serengeti' }],
      },
      {
        q: 'Kdy probíhá velká migrace v Tanzanii?',
        a: 'Velká migrace probíhá někde v ekosystému Serengeti každý měsíc v roce — jde o nepřetržitý koloběh, nikoli o jedinou událost s pevným začátkem a koncem. Zhruba řečeno: vrh mláďat na jihu probíhá od ledna do března, pohyb na sever přes centrální Serengeti od dubna do června, přechody řek na severu od července do října a návrat na jih začíná zhruba v listopadu. Přesná poloha stád v daném týdnu se mění podle srážek, takže se přesné načasování rok od roku liší.',
      },
      {
        q: 'Který měsíc je nejlepší na návštěvu Serengeti?',
        a: 'Neexistuje jeden univerzálně „nejlepší" měsíc — záleží na tom, co chcete vidět. Pro přechody řek zamiřte na srpen nebo září. Pro období vrhu mláďat a nejvyšší koncentraci predátorů zvolte leden až březen. Pro menší davy turistů a svěže zelenou krajinu jsou podceňované krátké deště v listopadu. Červen a červenec nabízejí silný kompromis: dobré počasí, migrující stáda procházející centrální a západní Serengeti a méně turistů než na vrcholu sezóny v srpnu.',
      },
      {
        q: 'Je Tanzanie celoroční destinací pro safari?',
        a: 'Ano. Tanzanie nemá pro pozorování divoké zvěře žádnou skutečnou mimosezónu — období sucha (červen–říjen a leden–únor) soustřeďuje zvířata kolem vodních zdrojů, což usnadňuje pozorování, zatímco období dešťů (březen–květen, listopad) přináší svěží zelenou krajinu, nově narozená mláďata a výrazně nižší ceny a menší davy turistů. Dlouhé deště (březen–duben) jsou nejklidnějším obdobím a jediným, kdy některé odlehlé tábory zavírají, hlavní okruhy ale zůstávají otevřené.',
      },
      {
        q: 'Kdy probíhá v Serengeti období vrhu mláďat a proč je důležité?',
        a: 'Období vrhu mláďat probíhá zhruba od ledna do března na pláních s krátkou trávou v jižní části Serengeti a v oblasti Ndutu, kdy se za jediný den může narodit až 8 000 mláďat pakoňů. Přitahuje to nejvyšší koncentraci predátorů z celé migrace — lvy, gepardy a hyeny — takže jde o jedno z nejlepších období pro pozorování dravců, i když v tuto roční dobu neprobíhají žádné přechody řek.',
      },
    ],
  },
  {
    slug: 'planning-costs-and-comparisons',
    title: 'Plánování, náklady a Keňa vs. Tanzanie',
    description: 'Kolik safari stojí, co je v ceně zahrnuto a jak se rozhodnout mezi jednotlivými zeměmi.',
    icon: 'DollarSign',
    items: [
      {
        q: 'Kolik stojí safari v Tanzanii?',
        a: 'Cena safari v Tanzanii se výrazně liší podle sezóny, velikosti skupiny a stylu tábora. Orientačně: dobře vedené safari ve střední cenové kategorii vyjde zhruba na $400–$600 na osobu a den, luxusní safari může stát $700–$1 200+ na osobu a den a rozpočtová stanová safari lze pořídit i pod $300 na den. Ceny na osobu výrazně klesají u větších skupin, protože se soukromé vozidlo, průvodce a vstupní poplatky sdílejí. Přesná cena silně závisí na tom, ve které sezóně cestujete — hlavní sezóna (červen–říjen, leden–únor) je zpoplatněna prémiovými sazbami.',
        relatedLinks: [{ label: 'Prohlédnout balíčky safari', href: '/safaris' }],
      },
      {
        q: 'Keňa, nebo Tanzanie — co je pro safari lepší?',
        a: 'Ani jedna z nich není objektivně „lepší" — vyhovují jiným prioritám. Tanzanie má více celkové rozlohy parků, kráter Ngorongoro, Zanzibar jako doplňkovou možnost pobytu u moře a je hostitelem migrace po většinu roku. Keňa má Masai Mara (součást téhož migračního ekosystému, nejlepší pro přechody řek od července do října), obecně kratší dobu letu z Evropy a v některých oblastech o něco rozvinutější infrastrukturu pro safari. Mnoho cestovatelů kombinuje obě země v rámci jedné cesty, místo aby si museli vybrat jednu z nich.',
        relatedLinks: [{ label: 'Destinace v Tanzanii', href: '/destinations/tanzania' }, { label: 'Safari v Keni', href: '/kenya' }],
      },
      {
        q: 'Kolik dní potřebuji na safari v Tanzanii?',
        a: '7 dní je optimální doba na to, abyste pořádně a bez spěchu pokryli severní okruh (Serengeti, Ngorongoro, Tarangire). 4–5 dní stačí na zaměřenou cestu do 2 parků. 10–14 dní umožňuje kombinovat sever s jižním nebo západním okruhem, případně přidat Zanzibar nebo výstup na Kilimandžáro. Safari kratší než 4 dny obvykle působí dojmem, že strávíte příliš mnoho času v autě a příliš málo přímo v parcích.',
      },
      {
        q: 'Co je zahrnuto v ceně safari a co ne?',
        a: 'Většina tanzanských balíčků safari zahrnuje: soukromé vozidlo a řidiče-průvodce, veškeré vstupní a ochranářské poplatky, ubytování a většinu jídel. Obvykle NENÍ zahrnuto: mezinárodní lety, poplatky za tanzanské vízum, cestovní pojištění, spropitné pro průvodce a personál táborů, alkoholické nápoje a volitelné doplňky, jako jsou lety balónem nebo pobytová prodloužení na Zanzibaru. Před porovnáváním cenových nabídek si vždy ověřte, co přesně je v ceně zahrnuto, protože pojem „cena safari" znamená u různých pořadatelů něco jiného.',
      },
      {
        q: 'Je levnější rezervovat safari přímo u místního pořadatele?',
        a: 'Obecně ano — rezervace přímo u místního licencovaného pořadatele v Tanzanii vylučuje přirážku, kterou si účtují mezinárodní rezervační platformy a agentury, často ve výši 15–30 %. Nevýhodou je, že si musíte sami udělat víc vlastního průzkumu, abyste ověřili licenci pořadatele, recenze a kvalitu vozidel a průvodců, protože přicházíte o kontrolní vrstvu, kterou jinak zajišťuje platforma. Místně vlastněný pořadatel se sídlem v Arushe navíc obvykle lépe zná aktuální stav v parcích, uzavírky silnic a to, kde se právě nachází migrace.',
      },
    ],
  },
  {
    slug: 'tanzania-circuits-and-wildlife',
    title: 'Tanzanské okruhy a divoká zvěř',
    description: 'Big Five, tanzanské okruhy safari a co očekávat v jednotlivých parcích.',
    icon: 'Binoculars',
    items: [
      {
        q: 'Co je Big Five a kde je v Tanzanii uvidím?',
        a: 'Big Five — lev, levhart, slon, buvol a nosorožec — lze v Tanzanii spatřit všechny, i když pozorování nosorožce je nejvzácnější, protože počty nosorožce černého jsou nízké a soustředěné téměř výhradně do kráteru Ngorongoro. Lev, slon a buvol jsou spolehlivě k vidění v Serengeti, Ngorongoro i Tarangire. Levhart je z celé pětice nejobtížnější k zahlédnutí kdekoli — nejspolehlivěji v oblasti Seronera v centrální Serengeti, kde vyhledává stromy podél řek.',
        relatedLinks: [{ label: 'Národní park Serengeti', href: '/destinations/serengeti' }, { label: 'Kráter Ngorongoro', href: '/destinations/ngorongoro' }],
      },
      {
        q: 'Jaký je rozdíl mezi kráterem Ngorongoro a Serengeti?',
        a: 'Ngorongoro je jediný, kompaktní a uzavřený ekosystém — zhroucená sopečná kaldera s plochou dna kráteru zhruba 260 km² — kde je divoká zvěř neobvykle koncentrovaná a obvykle ji lze spatřit během jediného, velmi vydatného dne. Serengeti je naopak rozlehlá (téměř 15 000 km²), otevřená pláň, po níž se pohybuje migrace a kde jsou pozorování rozprostřena na mnohem větší ploše během několika dní. Většina plánů cesty zahrnuje obojí: Ngorongoro pro hutný a spolehlivý den plný pozorování Big Five a poté Serengeti pro zážitek z migrace na otevřených pláních.',
        relatedLinks: [{ label: 'Kráter Ngorongoro', href: '/destinations/ngorongoro' }],
      },
      {
        q: 'Jaký je rozdíl mezi severním, jižním a západním okruhem safari v Tanzanii?',
        a: 'Severní okruh (Serengeti, Ngorongoro, Tarangire, Lake Manyara) je klasická, nejnavštěvovanější tanzanská trasa — nejlepší infrastruktura, migrace, spolehlivé pozorování Big Five. Jižní okruh (Ruaha, Nyerere/Selous) je odlehlý, méně navštěvovaný a divočejší — rozlehlejší, více rozptýlené parky s mnohem menším počtem vozidel. Západní okruh (Mahale, Katavi, Gombe) je územím trekkingu za šimpanzi, dostupným většinou malým letadlem, a ze všech tří je nejvíce stranou od vyšlapaných cest.',
      },
      {
        q: 'Vyplatí se navštívit jižní okruh (Ruaha, Nyerere/Selous)?',
        a: 'Ano, zejména pro opakované návštěvníky nebo pro každého, kdo chce klidnější safari s pocitem větší exkluzivity — Ruaha je největší tanzanský národní park a jeden z nejlepších na pozorování lvů a psů hyenových a Nyerere (dříve Selous) je největší chráněné území v Africe, proslulé safari na loďkách vedle klasických game drive. Do obou parků zavítá jen zlomek návštěvníků severního okruhu. Nevýhodou je dostupnost — většina cest po jižním okruhu probíhá letecky, nikoli po silnici, což zvyšuje náklady.',
        relatedLinks: [{ label: 'Národní park Ruaha', href: '/destinations/ruaha' }, { label: 'Národní park Nyerere (Selous)', href: '/destinations/nyerere' }],
      },
      {
        q: 'Jakou divokou zvěř uvidím v národním parku Tarangire?',
        a: 'Tarangire je nejznámější svými stády slonů — jedněmi z největších koncentrací v Tanzanii, zejména v období sucha (červen–říjen), kdy se shromažďují podél řeky Tarangire — a také svými nápadnými prastarými baobaby. Park je silný také na pozorování lvů a patří mezi lepší parky severního okruhu na zahlédnutí menších, méně běžně viditelných druhů antilop. Obvykle se navštěvuje jako 1–2denní doplněk vedle Serengeti a Ngorongoro.',
        relatedLinks: [{ label: 'Národní park Tarangire', href: '/destinations/tarangire' }],
      },
    ],
  },
  {
    slug: 'kenya-and-rwanda',
    title: 'Safari v Keni a Rwandě',
    description: 'Kombinace zemí, Masai Mara a trekking za gorilami.',
    icon: 'Compass',
    items: [
      {
        q: 'Mohu v rámci jedné cesty zkombinovat safari v Keni a Tanzanii?',
        a: 'Ano, a je to běžný způsob, jak vidět Serengeti i Masai Mara — technicky jde o jeden souvislý ekosystém rozdělený mezinárodní hranicí. Samotné překročení hranice vyžaduje buď pravidelný let malým letadlem, nebo dlouhou pozemní jízdu, plus samostatné vstupní poplatky do parků na obou stranách, takže většina kombinovaných plánů cesty počítá celkem s alespoň 10–12 dny, aby cesta nepůsobila uspěchaně.',
        relatedLinks: [{ label: '10denní safari v Keni a Tanzanii', href: '/safaris/10-day-kenya-tanzania-safari' }],
      },
      {
        q: 'Kolik stojí trekking za gorilami ve Rwandě a potřebuji povolení?',
        a: 'Ano, povolení je povinné a jeho počet je omezený — rwandský národní park Volcanoes vydává pevně stanovený počet povolení k trekkingu za gorilami na den, v současnosti za cenu $1 500 na osobu, což zahrnuje jednu hodinu s habituovanou rodinou goril, vstupní poplatky do parku a průvodce. Povolení je třeba rezervovat s dostatečným předstihem, zejména na období červenec–září a prosinec–únor, kdy je nejsušší počasí a trekking je nejoblíbenější.',
        relatedLinks: [{ label: '4denní trekking za gorilami ve Rwandě', href: '/safaris/4-day-rwanda-gorilla-trekking' }, { label: 'Národní park Volcanoes', href: '/destinations/volcanoes' }],
      },
      {
        q: 'Jaká je nejlepší doba na pozorování goril ve Rwandě?',
        a: 'Trekking za gorilami je možný celoročně, protože povolení nejsou vázaná na sezónu, ale období sucha — červen–září a prosinec–únor — usnadňují a méně blátí přechod strmým terénem národního parku Volcanoes. Vlhčí měsíce (březen–květen, říjen–listopad) znamenají náročnější trasy, ale výrazně méně turistů a v okolí někdy i levnější ubytování.',
      },
      {
        q: 'Je Masai Mara totéž co Serengeti?',
        a: 'Jsou součástí téhož souvislého ekosystému — Masai Mara je v podstatě keňským, severním prodloužením Serengeti — oddělené pouze mezinárodní hranicí, kterou samotná divoká zvěř ignoruje. Mara je menší a migrující stáda hostí během období přechodů řek (zhruba červenec–říjen); Serengeti je mnohem rozlehlejší a je hostitelem migrace po zbytek roku, včetně období vrhu mláďat.',
      },
      {
        q: 'Jak fyzicky náročný je trekking za gorilami?',
        a: 'Velmi se to liší trek od treku — rodiny goril se vystopovávají a nemají pevné místo pobytu, takže pěší túra může trvat od necelé hodiny až po 4–5 hodin jedním směrem strmým, místy blátivým sopečným lesem ve vyšší nadmořské výšce (národní park Volcanoes leží v nadmořské výšce 2 400–4 500 m). Přiměřená fyzická kondice se opravdu hodí; k dispozici jsou nosiči, kteří ponesou zavazadla a na strmějších úsecích nabídnou pomocnou ruku každému, kdo má obavy z terénu.',
      },
    ],
  },
  {
    slug: 'kilimanjaro-and-trekking',
    title: 'Kilimandžáro a trekking',
    description: 'Trasy, cena, náročnost a úspěšnost výstupu na Kilimandžáro.',
    icon: 'Mountain',
    items: [
      {
        q: 'Jaká je nejsnazší trasa na výstup na Kilimandžáro?',
        a: 'Machame je nejoblíbenější trasa a nabízí silnou rovnováhu mezi scenérií a aklimatizací, ale trasa Lemosho je obecně považována za nejsnazší z hlediska úspěšnosti výstupu na vrchol, hlavně proto, že její delší plán cesty (7–8 dní) dává tělu více času na aklimatizaci. Marangu je jediná trasa s ubytováním v chatách místo stanů a má mírnější denní převýšení, ale její kratší standardní plán cesty znamená méně času na aklimatizaci, což může vyrovnat výhodu snazší chůze.',
        relatedLinks: [{ label: 'Trasa Machame na Kilimandžáro', href: '/trekking/machame' }, { label: 'Všechny trasy na Kilimandžáro', href: '/trekking' }],
      },
      {
        q: 'Kolik stojí výstup na Kilimandžáro?',
        a: 'Náklady na výstup na Kilimandžáro se obvykle pohybují od $2 000–$2 500 na osobu za skupinový výstup v rozpočtové až střední kategorii, až po $3 500–$5 000+ za soukromou, delší a lépe zajištěnou trasu s vyšším poměrem průvodců na horolezce. Samotné vstupní poplatky do parku (stanovené tanzanským úřadem pro národní parky) tvoří velkou pevnou část každé cenové nabídky, takže velmi levné výstupy obvykle znamenají šetření na mzdách posádky, vybavení nebo dnech na aklimatizaci — to vše ovlivňuje jak bezpečnost, tak úspěšnost dosažení vrcholu.',
        relatedLinks: [{ label: 'Trasa Machame na Kilimandžáro', href: '/trekking/machame' }],
      },
      {
        q: 'Jaká je úspěšnost dosažení vrcholu Kilimandžára?',
        a: 'Úspěšnost dosažení vrcholu se podle délky trasy značně liší: u kratších 5denních tras se pohybuje jen kolem 40–50 % kvůli nedostatečnému času na aklimatizaci, zatímco dobře rozvržené 7–8denní trasy jako Lemosho vykazují úspěšnost 85–90 %+. Jediným nejdůležitějším faktorem pro dosažení vrcholu není fyzická kondice — je to poskytnutí tělu dostatku dní na aklimatizaci na nadmořskou výšku, a proto delší trasy trvale dosahují lepších výsledků než ty kratší.',
      },
      {
        q: 'Kolik dní trvá výstup na Kilimandžáro?',
        a: 'Většina tras trvá tam a zpět 6–8 dní, i když Marangu lze zvládnout za 5 dní a delší varianty, jako je kompletní trasa Lemosho nebo Northern Circuit, mohou trvat 8–9 dní. Přidání byť jen jednoho dalšího dne na aklimatizaci výrazně zlepšuje jak pohodlí, tak úspěšnost dosažení vrcholu, a proto většina zkušených pořadatelů nedoporučuje nejkratší dostupný plán cesty na dané trase.',
      },
      {
        q: 'Musím být zkušený turista, abych mohl vystoupit na Kilimandžáro?',
        a: 'Na žádné ze standardních trekkingových tras nejsou potřeba technické horolezecké zkušenosti ani vybavení — jde o dlouhou chůzi ve vysoké nadmořské výšce, nikoli o technický výstup. To ale neznamená, že na tom nezáleží: přiměřená základní fyzická kondice (schopnost pohodlně jít 5–7 hodin denně) opravdu ovlivňuje, jak moc si výstup užijete, a nadmořská výška ovlivňuje fyzickou výkonnost nepředvídatelně, takže i zdatní turisté by měli brát aklimatizaci vážně.',
      },
    ],
  },
  {
    slug: 'honeymoon-zanzibar-and-experiences',
    title: 'Líbánky, Zanzibar a speciální zážitky',
    description: 'Svatební cesty na safari, pobyty u moře, lety balónem a fotografické výpravy.',
    icon: 'Heart',
    items: [
      {
        q: 'Jaký je nejlepší plán cesty na líbánkové safari kombinující safari a pobyt u moře?',
        a: 'Klasickou kombinací je 4–5 nocí na safari v severním okruhu (Serengeti a Ngorongoro efektivně pokrývají to nejdůležitější) následovaných 4–5 nocemi na Zanzibaru pro pobytovou část u moře — celkem zhruba 9–10 dní. Tábory zaměřené na líbánky obvykle nabízejí soukromé stolování, prostředí zaměřené na dospělé a prémiové stanové suity namísto pokojů uspořádaných pro rodiny, takže se vyplatí ověřit si, že je ubytování vhodné pro líbánky, a ne jen obecně vhodné pro rodiny.',
        relatedLinks: [{ label: '9denní líbánkové safari a Zanzibar', href: '/safaris/9-day-honeymoon-safari-zanzibar' }, { label: 'Zanzibar', href: '/destinations/zanzibar' }],
      },
      {
        q: 'Kolik stojí let balónem nad Serengeti?',
        a: 'Let balónem nad Serengeti obvykle stojí $550–$700 na osobu za zhruba hodinu ve vzduchu při východu slunce, obvykle následovanou snídaní v buši se šampaňským. Jde o volitelný doplněk ke standardnímu plánu cesty na safari, nikoli o standardně zahrnutou položku, a je třeba jej rezervovat předem, protože každá balónová společnost vyveze každé ráno jen omezený počet lidí.',
      },
      {
        q: 'Mohu zkombinovat safari v Tanzanii s pobytem u moře na Zanzibaru?',
        a: 'Ano — jde o jedno z nejoblíbenějších prodloužení safari a logisticky je to jednoduché: Zanzibar je krátký let od Arushe nebo hlavních okruhů safari, takže jej většina pořadatelů zařazuje jako plynulý závěrečný úsek cesty. Běžné rozdělení je 5–7 dní na safari následovaných 3–5 dny na pláži, i když poměr je zcela flexibilní podle toho, kolik času chcete strávit na pláži a kolik pozorováním divoké zvěře.',
        relatedLinks: [{ label: '10denní safari a Zanzibar', href: '/safaris/10-day-safari-zanzibar' }],
      },
      {
        q: 'Liší se fotografické safari od běžného safari?',
        a: "Ano — specializované fotografické safari používá vozidla upravená pro fotografy (opěrky s fazolovými pytli, více prostoru u oken, někdy střešní poklop v optimální výšce pro fotografa), udržuje menší skupiny a přizpůsobuje tempo dne světlu — vyjíždí z tábora před východem slunce a zůstává venku přes celou zlatou hodinu, místo aby se řídilo pevným harmonogramem jízdy. Průvodci na fotograficky zaměřených cestách jsou také obvykle instruováni, aby upřednostnili vhodnou pozici pro záběr před pouhým odškrtáváním spatřených druhů.",
        relatedLinks: [{ label: '7denní fotografické dobrodružné safari', href: '/safaris/7-day-photography-adventure-safari' }],
      },
      {
        q: 'Co je fly-in safari a vyplatí se připlatit si za něj?',
        a: 'Fly-in safari využívá k přesunům mezi parky malá letadla místo dlouhých přejezdů vozidlem — jízda, která by trvala 6–8 hodin, se změní na let trvající 45–60 minut. Příplatek se vyplatí především u cest po jižním nebo západním okruhu (Ruaha, Nyerere, Mahale), kde jsou pozemní přejezdy opravdu dlouhé a náročné; u parků severního okruhu, které leží těsně u sebe, je jízda mezi nimi často součástí zážitku, nikoli nevýhodou.',
      },
    ],
  },
  {
    slug: 'culture-health-and-logistics',
    title: 'Kultura, zdraví a praktická logistika',
    description: 'Masajové, očkování, víza a co si zabalit.',
    icon: 'ShieldCheck',
    items: [
      {
        q: 'Kdo jsou Masajové?',
        a: 'Masajové jsou polokočovný pastevecký národ původem ze severní Tanzanie a jižní Keni, historicky soustředěný kolem chovu dobytka v oblasti Serengeti a Rift Valley — na stejném území, kterým dnes prochází mnoho okruhů safari. Mnoho masajských komunit poblíž severního okruhu vítá návštěvníky na kulturních návštěvách vesnic, které nabízejí opravdový, průvodcem zprostředkovaný způsob, jak poznat jejich tradice, osobitý oděv a způsob života, místo aby byli vnímáni jen jako kulisa pro divokou zvěř.',
      },
      {
        q: 'Kdo jsou Hadzabové a mohu jejich komunitu navštívit v rámci safari?',
        a: 'Hadzabové jsou jednou z posledních skutečných komunit lovců a sběračů na Zemi, žijí kolem Lake Eyasi v severní Tanzanii a dodnes mluví osobitým jazykem s mlaskavými hláskami. Ano — uctivá návštěva pod vedením průvodce je možná a mezi cestovateli, kteří chtějí ke sledování divoké zvěře přidat i kulturu, o ni skutečně roste zájem: typická návštěva zahrnuje účast na ranním lovu nebo sběru s Hadzaby, po níž následuje zastávka u sousedních Datogů, proslulých svým tradičním kovářstvím. Tyto návštěvy fungují nejlépe jako výpravy vedené komunitou s etickým protokolem, nikoli jako neformální zastávky.',
        relatedLinks: [{ label: 'Zážitek Tarangire, Ngorongoro a Hadzabové', href: '/experiences/cultural-experience' }],
      },
      {
        q: 'Potřebuji na safari v Tanzanii očkování nebo léky proti malárii?',
        a: 'Certifikát o očkování proti žluté zimnici je vyžadován, pokud přijíždíte ze země s rizikem přenosu žluté zimnice (nebo jste jí projížděli) — aktuální požadavky si ověřte podle vaší konkrétní trasy. Profylaxe proti malárii je důrazně doporučena pro oblasti safari (většina pevninské Tanzanie), i když Zanzibar a výše položené oblasti jako Arusha a okraj kráteru Ngorongoro nesou nižší riziko. Rutinní očkování (tetanus, hepatitida A/B, tyfus) běžně doporučují cestovní kliniky, nejsou to ale vstupní požadavky Tanzanie. Před odjezdem si vždy ověřte aktuální doporučení u odborníka na cestovní medicínu.',
      },
      {
        q: 'Jaké vízum potřebuji na návštěvu Tanzanie?',
        a: 'Většina státních příslušníků potřebuje pro vstup do Tanzanie vízum, které lze získat buď jako e-vízum vyřízené online předem, nebo pro mnoho státních příslušníků po příletu na hlavních letištích. Vyřízení e-víza předem je obecně rychlejší a méně stresující než příjezd bez něj. Požadavky a okruh státních příslušníků, na které se vztahují, se čas od času mění, proto si aktuální pravidla ověřte přímo u tanzanského imigračního úřadu nebo na svém velvyslanectví, a to co nejblíže datu cesty, místo abyste se spoléhali na starší informace.',
      },
      {
        q: 'Co si mám na safari zabalit?',
        a: 'Oblečení v neutrálních barvách (khaki, olivová, hnědá — vyhněte se výrazným barvám a čistě bílé nebo černé, které mohou přitahovat hmyz nebo upoutat pozornost divoké zvěře), vrstvy oblečení na chladné ranní game drive, které se rychle oteplí, klobouk se širokou krempou, opalovací krém, dalekohled a voděodolný nebo vyztužený obal na fotografickou techniku vzhledem k prašným cestám. Většina táborů nabízí prádelenské služby, takže obvykle stačí zabalit si na 4–5 dní místo na celou délku cesty, a to i u delších safari.',
      },
      {
        q: 'Je Tanzanie bezpečná pro turisty?',
        a: 'Tanzanské oblasti safari jsou dobře zavedené oblasti závislé na cestovním ruchu s dobrou bezpečnostní historií — praktická rizika na safari s průvodcem se týkají spíše slunečního záření, stavu silnic a zdravého rozumu při blízkosti divoké zvěře (zůstávat ve vozidle, řídit se pokyny průvodce) než kriminality. Stejně jako u jakéhokoli mezinárodního cestování platí ve městech a na přestupních místech standardní opatrnost. Renomovaní pořadatelé na začátku cesty seznámí každého hosta s bezpečnostními pravidly.',
      },
    ],
  },
  {
    slug: 'about-ewa',
    title: 'O společnosti EWA Safari Outfitters',
    description: 'Kdo jsme, naše osvědčení a čím je safari s EWA jiné.',
    icon: 'Award',
    items: [
      {
        q: 'Co je EWA Safari Outfitters?',
        a: 'EWA Safari Outfitters je místně vlastněný pořadatel safari se sídlem v Arushe, který od roku 2022 organizuje safari na míru v Tanzanii, Keni a Rwandě — stejný tým, který stojí za extrémními dobrodružnými cestami do divočiny napříč Serengeti, Ngorongoro a dalšími destinacemi. „EWA" znamená Extreme Wilderness Adventure, původní název společnosti, a každá cesta je stále postavena na stejné filozofii: skutečná, soukromá safari vedená průvodcem namísto balíčkových skupinových zájezdů.',
        relatedLinks: [{ label: 'O společnosti EWA Safari Outfitters', href: '/about' }],
      },
      {
        q: 'Byla společnost EWA Safari Outfitters dříve známá jako Extreme Wilderness Adventure?',
        a: 'Ano — EWA Safari Outfitters byla původně založena a fungovala pod názvem Extreme Wilderness Adventure, a proto doména webu (theextremewilderness.com) a účet na Instagramu (@extremewildernessadventure) stále nesou toto jméno. Změna značky na „EWA Safari Outfitters" odráží stejný místně vlastněný tým, průvodce a provoz v Arushe — jde o obnovu jména, nikoli o změnu vlastnictví nebo jinou společnost.',
        relatedLinks: [{ label: 'O společnosti EWA Safari Outfitters', href: '/about' }],
      },
      {
        q: 'Je EWA Safari Outfitters certifikována organizací TATO a licencovaným tanzanským cestovním pořadatelem?',
        a: "Ano — EWA Safari Outfitters je certifikována organizací TATO (je členem Tanzania Association of Tour Operators), oborového sdružení, které prověřuje legitimní, licencované pořadatele v Tanzanii. Rezervace u pořadatele certifikovaného organizací TATO je jedním z nejjednodušších způsobů, jak si ověřit, že je tanzanská safari společnost řádně licencovaná, a ne neregistrovaný zprostředkovatel přeprodávající cesty jiných pořadatelů.",
      },
      {
        q: 'Co členství v TATO ve skutečnosti znamená pro mou rezervaci?',
        a: 'TATO zastupuje a prověřuje tanzanské cestovní pořadatele od roku 1983, takže členství znamená, že EWA Safari Outfitters je uznávána stejným oborovým sdružením, se kterým spolupracuje jak vláda, tak mezinárodní cestovní trh — nejde jen o společnost, která se sama označuje za licencovanou. V praxi to znamená, že za rezervací stojí skutečné oborové sdružení pro případ, že by bylo potřeba něco vyřešit nad rámec naší vlastní zákaznické podpory, a proto je členství v TATO jednou ze standardních kontrol, které bezpečnostně uvažující cestovatelé provádějí ještě před rezervací jakéhokoli safari v Tanzanii. EWA je konkrétně vedena v šesti kategoriích TATO — Tour Operators, Mainland Tour Operators, DMC/Tour Operators, Mountain Trekking Operators, Zanzibar & Beach Holiday Operators a Cultural Experience Operators — které pokrývají jak naše plány safari, tak výstupy na Kilimandžáro, prodloužení na Zanzibaru i kulturní výpravy.',
      },
      {
        q: 'Jak si mohu sám ověřit členství EWA Safari Outfitters v TATO?',
        a: 'Přímo na oficiálních webových stránkách TATO — náš záznam je veřejný, nemáme nad ním kontrolu a nemohli bychom jej nijak zkreslit. Je to rychlý a nezávislý způsob, jak si před rezervací ověřit, že jsme skutečný, licencovaný pořadatel, místo abyste museli věřit slovům kteréhokoli pořadatele.',
        relatedLinks: [{ label: 'Zobrazit náš záznam člena TATO', href: 'https://tatotz.org/portfolio/ewa-safari-outfitters/' }],
      },
      {
        q: 'Jak dlouho EWA Safari Outfitters organizuje safari?',
        a: 'EWA Safari Outfitters organizuje safari od roku 2022 (déle než 5 let fungování pod jménem Extreme Wilderness Adventure před změnou značky i během ní), s více než 200 provedenými cestovateli napříč Tanzanií, Keňou a Rwandou, hodnocením 4,9 na TripAdvisoru a hosty z více než 40 zemí — dostatečně zavedená na to, aby tyto trasy dobře znala, a přitom stále dost malá na to, aby byla každá cesta plánována individuálně, a ne zařazena do pevného skupinového plánu cesty.',
      },
      {
        q: 'Čím se EWA Safari Outfitters liší od jiných tanzanských společností nabízejících safari?',
        a: 'Každé safari s EWA probíhá v soukromém vozidle s vlastním průvodcem — nikdy ve sdíleném náklaďáku s dalšími cestovateli, které jste si k cestě sami nevybrali — a společnost je ze 100 % místně vlastněná se sídlem v Arushe, nikoli zahraniční agentura přeprodávající cesty jiných pořadatelů. Hosté hlásí 100% úspěšnost při pozorování Big Five a místní znalosti pozemního týmu (které silnice jsou otevřené, přesně kde se tento týden nachází migrace) pramení z toho, že tým skutečně sídlí tam, kde safari probíhají, a ne z call centra v zahraničí.',
        relatedLinks: [{ label: 'Čím jsme jiní', href: '/about#why-us' }],
      },
      {
        q: 'Kdo bude mým průvodcem na safari s EWA Safari Outfitters?',
        a: 'Tým průvodců EWA zahrnuje zkušené průvodce se sídlem v Tanzanii — mimo jiné Mike Mawolle, Nixon Massawe a Josh Meela — z nichž každý má za sebou roky jízdy po stejných trasách severního a jižního okruhu, což je přesně ten druh místní, silnici po silnici znalosti, který dělá rozdíl mezi dobrým a skvělým game drive. Průvodci jsou přiděleni na konkrétní cestu, nejsou sdíleni mezi více vozidly najednou.',
        relatedLinks: [{ label: 'Poznejte náš tým', href: '/about#guides' }],
      },
      {
        q: 'Je EWA Safari Outfitters místně vlastněná, nebo je to zahraniční agentura přeprodávající zájezdy?',
        a: "EWA Safari Outfitters je ze 100 % místně vlastněná společnost se sídlem v Arushe v Tanzanii — nikoli zahraničně vlastněná agentura nebo rezervační platforma, která s přirážkou přeprodává cesty jiných pořadatelů. Rezervace přímo u místně vlastněného pořadatele bývá také výhodnější z hlediska ceny, protože odpadá dodatečná vrstva marže mezinárodní agentury.",
      },
      {
        q: 'Kde sídlí EWA Safari Outfitters a mohu navštívit kancelář?',
        a: 'EWA Safari Outfitters sídlí na adrese 20 Ingira Street, Arusha, Tanzanie — ve stejném městě, ze kterého vyráží většina safari po severním okruhu a výstupů na Kilimandžáro. Návštěvníci jsou v kanceláři vítáni před cestou i po ní; pro domluvení návštěvy nás kontaktujte předem na info@theextremewilderness.com nebo na čísle +255 (0) 747 999 070.',
        relatedLinks: [{ label: 'Navštivte naši kancelář', href: '/about' }, { label: 'Kontaktujte nás', href: '/contact' }],
      },
      {
        q: 'Jak rychle EWA Safari Outfitters reaguje na poptávky?',
        a: 'EWA Safari Outfitters obvykle reaguje na poptávky ohledně safari během několika hodin v rámci pracovní doby východní Afriky, mimo ni obvykle ještě tentýž den. Nejrychlejším způsobem, jak získat skutečnou cenovou nabídku na míru (nikoli obecný ceník), je poptávkový formulář na kterékoli stránce safari, destinace nebo FAQ na tomto webu, který jde přímo k týmu v Arushe.',
        relatedLinks: [{ label: 'Kontaktujte nás', href: '/contact' }],
      },
      {
        q: 'Působí EWA Safari Outfitters pouze v Tanzanii, nebo i v Keni a Rwandě?',
        a: 'EWA Safari Outfitters sídlí v Tanzanii a je v ní hluboce zakotvená, ale zároveň působí a kombinuje cesty i po Keni (Masai Mara a další oblasti) a Rwandě (trekking za gorilami v národním parku Volcanoes) — mnoho hostů kombinuje dvě nebo tři země v rámci jednoho plánu cesty na míru, místo aby je rezervovali zvlášť.',
        relatedLinks: [{ label: 'Safari v Keni', href: '/kenya' }, { label: 'Safari ve Rwandě', href: '/rwanda' }],
      },
    ],
  },
]

export const FAQ_CATEGORY_SLUGS = faqCategories.map((c) => c.slug)
