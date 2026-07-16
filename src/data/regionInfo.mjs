// Shared by src/components/map/EastAfricaRegionExplorer.jsx (via the "@/data/regionInfo.mjs"
// alias) and scripts/fetch-region-photos.mjs (via a relative import, since that's a plain
// Node script and can't resolve the "@/" alias). Kept as plain ESM (not .ts) so both can
// import it without a build step.
//
// Keyed by region name as it appears in the geoBoundaries `shapeName` property. Every
// region across all three countries has an entry; `signature: true` marks the ~10-12
// flagship destinations per country that get the brand-green map fill instead of gold.
// `hasPark: true` marks regions that actually contain or gateway a national park / game
// reserve — used by scripts/fetch-region-photos.mjs to decide whether wildlife photos are
// appropriate for that region (regions without one shouldn't get random safari-animal stock
// photos just because the search query is generic).
//
// "Songwe" (Tanzania) is intentionally kept even though this geoBoundaries release
// doesn't include it as a separate ADM1 feature (it's folded into Mbeya in this dataset)
// — it simply won't render on the map until/unless the source data adds it.
export const REGION_INFO = {
  // ===== TANZANIA =====
  "Arusha": { country: "Tanzania", signature: true, hasPark: true, text: "Gateway to the northern safari circuit — Serengeti, Ngorongoro and Kilimanjaro all launch from here, alongside the Maasai communities of the surrounding plains." },
  "Kilimanjaro": { country: "Tanzania", signature: true, hasPark: true, text: "Home to Africa's highest peak. Chagga coffee villages, waterfalls and forest trails ring the mountain beyond the summit routes." },
  "Mara": { country: "Tanzania", signature: true, hasPark: true, text: "Tanzania's share of the Serengeti-Mara ecosystem — the western corridor catches the wildebeest migration's river crossings." },
  "Manyara": { country: "Tanzania", signature: true, hasPark: true, text: "Lake Manyara's tree-climbing lions and flamingo shallows, plus the volcanic highlands around Karatu and the Ngorongoro rim." },
  "Kagera": { country: "Tanzania", hasPark: true, text: "Lake Victoria's western shore — Rubondo Island's chimpanzee sanctuary and the rolling banana-and-coffee hills of the Haya kingdom." },
  "Mbeya": { country: "Tanzania", text: "Cool southern highlands — tea estates, volcanic peaks like Mount Rungwe, and Lake Nyasa's fjord-like southern shoreline." },
  "Singida": { country: "Tanzania", text: "Central Tanzania's soda lakes and baobab country — a quieter route through Nyaturu and Nyiramba heartland." },
  "Mtwara": { country: "Tanzania", text: "Indian Ocean dhow harbors, the Makonde plateau's woodcarving tradition, and the ruins at nearby Mikindani." },
  "Iringa": { country: "Tanzania", signature: true, hasPark: true, text: "Gateway to Ruaha National Park, one of East Africa's least-visited, most rewarding reserves, plus the hilltop Hehe capital." },
  "Lindi": { country: "Tanzania", text: "Untouched coastline and the Rondo forest plateau — one of Tanzania's most remote tourism frontiers." },
  "Tabora": { country: "Tanzania", text: "Historic caravan-route town where Livingstone and Stanley once passed through, ringed by miombo woodland." },
  "Pwani": { country: "Tanzania", hasPark: true, text: "The mainland coast opposite Zanzibar — Saadani, Tanzania's only park with both wildlife and ocean, plus the ruins at Bagamoyo." },
  "Ruvuma": { country: "Tanzania", hasPark: true, text: "Southern highlands bordering Mozambique — Nyerere National Park's southern reaches and Makonde and Yao cultural heartland." },
  "Morogoro": { country: "Tanzania", hasPark: true, text: "The Uluguru Mountains' terraced farms and waterfalls, plus the edge of Nyerere National Park and its boat safaris." },
  "Rukwa": { country: "Tanzania", text: "Remote western frontier along Lake Rukwa — Katavi's overflow country, thick with buffalo and hippo." },
  "Kigoma": { country: "Tanzania", signature: true, hasPark: true, text: "Lake Tanganyika's shore — Gombe Stream's chimpanzees (of Jane Goodall fame) and Mahale Mountains' wild chimps, reachable only by boat." },
  "Tanga": { country: "Tanzania", text: "Old Swahili coast town — sisal plantation history, the Amboni limestone caves, and the Usambara Mountains rising just inland." },
  "Dodoma": { country: "Tanzania", text: "The administrative capital and Tanzania's emerging wine country — vineyards on the central plateau and Gogo cultural heritage." },
  "Zanzibar North": { country: "Tanzania", signature: true, text: "The island's main beach resort strip — Nungwi and Kendwa's white sand and sunset dhow cruises." },
  "North Pemba": { country: "Tanzania", text: "Pemba's greener, quieter half — clove plantations and some of the best untouched diving in the archipelago." },
  "Zanzibar Urban/West": { country: "Tanzania", signature: true, text: "Stone Town's UNESCO old quarter, spice markets, and the capital district — the island's cultural and historic core." },
  "Zanzibar South & Central": { country: "Tanzania", signature: true, hasPark: true, text: "Kizimkazi's dolphin tours, Jozani Forest's red colobus monkeys, and quieter beaches along the southeast coast." },
  "South Pemba": { country: "Tanzania", text: "Pemba's southern half — Misali Island's reef and traditional dhow-building villages." },
  "Katavi": { country: "Tanzania", hasPark: true, text: "One of Africa's wildest, least-visited parks — dry-season river pools packed with hippo and crocodile." },
  "Njombe": { country: "Tanzania", hasPark: true, text: "High-altitude pine forests and tea country — Tanzania's coolest region and the Kitulo 'Garden of God' wildflower plateau." },
  "Geita": { country: "Tanzania", text: "Lake Victoria goldfields region — mining heritage alongside lakeside fishing communities." },
  "Simiyu": { country: "Tanzania", hasPark: true, text: "The Serengeti's eastern gateway — Maasai and Sukuma communities living alongside the migration route." },
  "Mwanza": { country: "Tanzania", signature: true, text: "Lake Victoria's shoreline city, built among giant granite boulders — the quiet western entry point to the Serengeti." },
  "Shinyanga": { country: "Tanzania", text: "Sukuma heartland — Tanzania's largest ethnic group, known for cotton farming and traditional dance." },
  "Dar es Salaam": { country: "Tanzania", signature: true, text: "The commercial capital and coastal hub — launch point for Zanzibar, with a lively harborfront and fish market." },
  "Songwe": { country: "Tanzania", text: "Border country with Zambia and Malawi — hot springs, volcanic scenery, and the Kiwira river valley." },

  // ===== KENYA =====
  "Nairobi": { country: "Kenya", signature: true, hasPark: true, text: "The capital, with its own national park at the city's edge where lions roam against the skyline." },
  "Narok": { country: "Kenya", signature: true, hasPark: true, text: "Home to the Maasai Mara — the Great Migration's most famous stage, river crossings July–October." },
  "Kajiado": { country: "Kenya", signature: true, hasPark: true, text: "Amboseli country — elephant herds framed against Kilimanjaro's snowcap, deep Maasai cultural tradition." },
  "Nakuru": { country: "Kenya", signature: true, hasPark: true, text: "Rift Valley lake country — flamingo colonies, a rhino sanctuary, and Hell's Gate's cycling trails nearby." },
  "Kisumu": { country: "Kenya", text: "Lake Victoria's Kenyan port city — Luo culture, lakeside markets, and a low-key base for western circuit travel." },
  "Mombasa": { country: "Kenya", signature: true, text: "Coastal old town and reef beaches — Fort Jesus, Swahili architecture, and Kenya's main Indian Ocean gateway." },
  "Laikipia": { country: "Kenya", signature: true, hasPark: true, text: "Private conservancies north of Mt Kenya — strong for rhino and wild dog sightings, fewer crowds." },
  "Samburu": { country: "Kenya", signature: true, hasPark: true, text: "Arid-country wildlife found nowhere else in Kenya's south — Grevy's zebra, reticulated giraffe, Samburu culture." },
  "Baringo": { country: "Kenya", text: "Rift Valley lake with hippos and crocodiles, hot springs, and the Njemps fishing community's traditional rafts." },
  "Bomet": { country: "Kenya", text: "Kipsigis highlands and tea country — the Chepalungu forest and rolling green hills of the western Rift wall." },
  "Bungoma": { country: "Kenya", text: "Mount Elgon's lower slopes — caves used by elephants for salt, and Bukusu cultural heritage." },
  "Busia": { country: "Kenya", text: "Border trade town on Lake Victoria's edge — a quiet crossing point between Kenya and Uganda." },
  "Elgeyo-Marakwet": { country: "Kenya", text: "The dramatic Kerio Valley escarpment — cliffside villages and paragliding over the Rift wall." },
  "Embu": { country: "Kenya", text: "Mount Kenya's eastern slopes — coffee farms and access to the less-visited side of the mountain." },
  "Garissa": { country: "Kenya", text: "Northeastern frontier along the Tana River — Somali culture and a gateway to Kenya's remote northeast." },
  "Homa Bay": { country: "Kenya", hasPark: true, text: "Lake Victoria's southern shore — Luo fishing villages and Ruma National Park's roan antelope." },
  "Isiolo": { country: "Kenya", hasPark: true, text: "Gateway to Kenya's northern frontier — Buffalo Springs and Shaba reserves, a crossroads of Samburu, Borana and Somali communities." },
  "Kakamega": { country: "Kenya", hasPark: true, text: "Kenya's last remnant of tropical rainforest — primates and birdlife found nowhere else in the country." },
  "Kericho": { country: "Kenya", text: "Kenya's tea capital — endless emerald tea estates across rolling highland hills." },
  "Kiambu": { country: "Kenya", text: "Nairobi's commuter belt and coffee country — colonial-era coffee estates just outside the capital." },
  "Kilifi": { country: "Kenya", signature: true, hasPark: true, text: "Coastal getaway north of Mombasa — Watamu's marine park, Arabuko-Sokoke forest, and Swahili ruins at Gede." },
  "Kirinyaga": { country: "Kenya", text: "Mount Kenya's southern slopes — rice paddies and coffee farms in the mountain's shadow." },
  "Kisii": { country: "Kenya", text: "Soapstone carving country — the Gusii highlands known for banana farms and traditional stone crafts." },
  "Kitui": { country: "Kenya", text: "Semi-arid Ukambani country — woodcarving tradition and Tsavo East's northern approach." },
  "Kwale": { country: "Kenya", signature: true, hasPark: true, text: "Diani Beach and the southern coast — one of Africa's most awarded beaches, plus Shimba Hills' rare sable antelope." },
  "Lamu": { country: "Kenya", signature: true, text: "A UNESCO old Swahili town — car-free streets, dhow sailing, and centuries of Swahili-Arab trading history." },
  "Machakos": { country: "Kenya", text: "Rolling Kamba hill country just outside Nairobi — hiking and rock climbing at Iveti Hills." },
  "Makueni": { country: "Kenya", hasPark: true, text: "Ukambani's dry plains — Chyulu Hills' green volcanic cones and access to Tsavo's underground caves." },
  "Mandera": { country: "Kenya", text: "Kenya's remote northeastern tip — a Somali-culture frontier rarely visited by tourists." },
  "Marsabit": { country: "Kenya", hasPark: true, text: "Volcanic crater lakes and elephant herds in a remote northern desert oasis." },
  "Meru": { country: "Kenya", hasPark: true, text: "Mount Kenya's northeastern slopes and Meru National Park — rugged bush immortalized by Elsa the lioness of Born Free." },
  "Migori": { country: "Kenya", text: "Lake Victoria's southwestern shore — gold-mining history and Luo-Kuria cultural crossroads." },
  "Murang'a": { country: "Kenya", text: "Kikuyu heartland on Mount Kenya's southwestern slopes — coffee farms and the Chania and Maragua waterfalls." },
  "Nandi": { country: "Kenya", text: "Tea and forest highlands — home to some of Kenya's most celebrated long-distance runners." },
  "Nyamira": { country: "Kenya", text: "Gusii highland farmland — quiet, terraced hills south of Kisii." },
  "Nyandarua": { country: "Kenya", hasPark: true, text: "The Aberdare Range's forested slopes — waterfalls, moorland trekking, and tree-hotel game viewing." },
  "Nyeri": { country: "Kenya", signature: true, hasPark: true, text: "Mount Kenya's western gateway — Aberdare National Park and colonial coffee history." },
  "Siaya": { country: "Kenya", text: "Lake Victoria's Luo homeland — fishing villages and rich cultural heritage." },
  "Taita Taveta": { country: "Kenya", signature: true, hasPark: true, text: "Tsavo's home turf — Kenya's largest park split into East and West, plus the cooler Taita Hills." },
  "Tana River": { country: "Kenya", hasPark: true, text: "The delta where Kenya's longest river meets the ocean — Tana River Primate Reserve's rare monkeys." },
  "Tharaka": { country: "Kenya", text: "Mount Kenya's drier eastern flank — Meru and Tharaka communities in semi-arid bushland." },
  "Trans Nzoia": { country: "Kenya", hasPark: true, text: "Mount Elgon's fertile northern base — Kenya's breadbasket, with the mountain's caves and waterfalls close by." },
  "Turkana": { country: "Kenya", signature: true, text: "Kenya's remote desert north — Lake Turkana's 'Jade Sea' and some of the richest early-human fossil sites on Earth." },
  "Uasin Gishu": { country: "Kenya", text: "Eldoret's highland plateau — another running-culture hub and gateway to the western circuit." },
  "Vihiga": { country: "Kenya", text: "Kenya's most densely populated county — Luhya heartland with terraced smallholder farms." },
  "Wajir": { country: "Kenya", text: "Deep northeastern Kenya — Somali pastoralist culture in one of the country's most arid corners." },
  "West Pokot": { country: "Kenya", text: "Rugged Rift Valley escarpment country — Pokot pastoralist traditions and dramatic highland scenery." },

  // ===== RWANDA =====
  "City of Kigali": { country: "Rwanda", signature: true, text: "Rwanda's capital — clean, orderly streets, the Genocide Memorial, and the country's main international gateway." },
  "Northern Province": { country: "Rwanda", signature: true, hasPark: true, text: "Musanze and Volcanoes National Park — the base for mountain gorilla trekking and Dian Fossey's former research site." },
  "Southern Province": { country: "Rwanda", text: "Nyanza's royal palace history, Huye's national museum, and the university town of Butare." },
  "Eastern Province": { country: "Rwanda", signature: true, hasPark: true, text: "Akagera's savanna and wetland along the Tanzanian border — Rwanda's only Big Five park." },
  "Western Province": { country: "Rwanda", signature: true, hasPark: true, text: "Lake Kivu's shoreline and Nyungwe's ancient rainforest — chimpanzee tracking and some of the country's best coffee." },
};
