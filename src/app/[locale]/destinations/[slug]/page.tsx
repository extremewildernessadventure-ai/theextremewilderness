import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Calendar, MapPin, Ruler, ArrowRight, Check, Plane, Clock } from 'lucide-react'
import { destinations } from '@/data/destinations'
import { getDestination, getDestinations } from '@/data/destinations.i18n'
import { getPackages } from '@/data/packages.i18n'
import { getBlogPostMeta } from '@/data/blog/index.i18n'
import BookNowButton from '@/components/booking/BookNowButton'
import MobileEnquireBanner from '@/components/booking/MobileEnquireBanner'
import BlogSuggestionCard from '@/components/trekking/BlogSuggestionCard'
import FaqAccordion from '@/components/itineraries/FaqAccordion'
import { routing } from '@/i18n/routing'
import { SITE_URL, localeUrl, buildAlternates, buildBreadcrumbSchema, buildPageTitle } from '@/lib/site'
import { CORE_KEYWORDS_BY_LOCALE } from '@/data/coreKeywords'
import Breadcrumb from '@/components/ui/Breadcrumb'
import Reveal from '@/components/motion/Reveal'
import { RevealGroup, RevealItem } from '@/components/motion/RevealGroup'


const DEST_KEYWORDS: Record<string, string[]> = {
  'serengeti': [
    'Serengeti National Park safari',
    'Serengeti Great Migration',
    'Serengeti Tanzania',
    'visit Serengeti',
    'Serengeti wildlife safari',
    'Serengeti game reserve',
    'Serengeti Tanzania 2026',
    'Serengeti lions',
    'Serengeti tour',
    'Serengeti big five',
  ],
  'ngorongoro': [
    'Ngorongoro Crater safari',
    'Ngorongoro Conservation Area',
    'Ngorongoro big five',
    'Ngorongoro Tanzania',
    'visit Ngorongoro Crater',
    'Ngorongoro black rhino',
    'Ngorongoro safari tour',
    'Ngorongoro caldera',
    'Ngorongoro 2026',
    'world largest caldera safari',
  ],
  'tarangire': [
    'Tarangire National Park safari',
    'Tarangire elephants',
    'Tarangire baobab trees',
    'Tanzania elephant safari',
    'Tarangire safari tour',
    'Tarangire migration',
    'Tarangire dry season',
    'Tarangire 2026',
    'Tanzania baobab safari',
    'Tarangire birdwatching',
  ],
  'zanzibar': [
    'Zanzibar island holiday',
    'Zanzibar beaches',
    'Stone Town Zanzibar',
    'Zanzibar snorkeling',
    'Zanzibar safari beach combo',
    'Zanzibar 2026',
    'Zanzibar travel guide',
    'best beaches Zanzibar',
    'Zanzibar spice island',
    'Tanzania beach holiday',
  ],
  'masai-mara': [
    'Masai Mara safari',
    'Masai Mara Great Migration',
    'Kenya Masai Mara',
    'Mara River crossing',
    'Masai Mara 2026',
    'best time Masai Mara',
    'Masai Mara big five',
    'Kenya wildlife safari',
    'Masai Mara holiday',
    'Masai Mara tour',
  ],
  'ruaha': [
    'Ruaha National Park safari',
    'southern Tanzania safari',
    'Tanzania remote safari',
    'Ruaha big five',
    'Ruaha elephants lions',
    'Ruaha safari guide',
    'Tanzania off beaten path',
    'Ruaha National Park 2026',
    'Tanzania southern wildlife',
    'Ruaha luxury camp',
  ],
  'nyerere': [
    'Nyerere National Park',
    'Selous Game Reserve Tanzania',
    'boat safari Tanzania',
    'Tanzania walking safari',
    'Nyerere wildlife',
    'Selous safari 2026',
    'Tanzania water safari',
    'Nyerere boat game drive',
    'Tanzania Selous',
    'southern Tanzania safari',
  ],
  'volcanoes': [
    'Volcanoes National Park Rwanda',
    'gorilla trekking Rwanda',
    'mountain gorilla safari',
    'Rwanda gorilla permit 2026',
    'Volcanoes National Park safari',
    'Rwanda gorilla tracking',
    'golden monkey Rwanda',
    'Dian Fossey gorillas',
    'Africa gorilla safari',
    'Rwanda primate trekking',
  ],
  'kilimanjaro': [
    'Mount Kilimanjaro climb',
    'Kilimanjaro safari',
    'Kilimanjaro Tanzania',
    'Africa highest peak',
    'Kilimanjaro trek 2026',
    'Kilimanjaro Uhuru Peak',
    'Tanzania mountain climb',
    'Kilimanjaro guided trek',
    'Kilimanjaro tour operator',
    'climb Africa highest mountain',
  ],
}
const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// Per-destination, per-locale research (Phase 3/4 of the SEO plan) lands
// here as it's completed — see the matching comment on SAFARI_KEYWORDS_BY_LOCALE
// in safaris/[slug]/page.tsx for the same pattern.
const DEST_KEYWORDS_BY_LOCALE: Partial<Record<string, Partial<Record<string, string[]>>>> = {
  fr: {
    "serengeti": [
      "safari Serengeti Tanzanie", "parc national du Serengeti", "grande migration Serengeti", "safari Serengeti 2026", "visiter le Serengeti", "safari dans le Serengeti prix", "lions du Serengeti", "circuit safari Serengeti Tanzanie", "meilleure période safari Serengeti", "safari Serengeti big five",
    ],
    "ngorongoro": [
      "cratère du Ngorongoro", "safari Ngorongoro Tanzanie", "visiter le cratère du Ngorongoro", "safari cratère Ngorongoro 2026", "Ngorongoro Conservation Area", "circuit Serengeti Ngorongoro", "safari Ngorongoro prix", "descente dans le cratère du Ngorongoro", "faune du cratère du Ngorongoro", "meilleure période pour visiter Ngorongoro",
    ],
    "tarangire": [
      "parc national de Tarangire", "safari Tarangire éléphants", "safari Tarangire Tanzanie", "baobabs Tarangire", "circuit Tarangire Serengeti Ngorongoro", "safari Tarangire 2026", "visiter Tarangire", "safari Tarangire prix", "faune Tarangire Tanzanie", "meilleure saison safari Tarangire",
    ],
    "manyara": [
      "lac Manyara Tanzanie", "lions grimpeurs aux arbres Manyara", "parc national du lac Manyara", "safari lac Manyara", "safari Manyara 2026", "observation des oiseaux lac Manyara", "vallée du Rift Tanzanie safari", "visiter le lac Manyara", "circuit safari lac Manyara Tanzanie", "faune lac Manyara",
    ],
    "zanzibar": [
      "vacances à Zanzibar", "plages de Zanzibar", "Zanzibar île aux épices", "combiné safari Zanzibar", "Stone Town Zanzibar", "voyage Zanzibar 2026", "plongée sous-marine Zanzibar", "séjour Zanzibar tout compris", "meilleures plages de Zanzibar", "Zanzibar Tanzanie que faire",
    ],
    "arusha": [
      "Arusha Tanzanie", "circuit nord Tanzanie safari", "vol pour Arusha", "que faire à Arusha", "trek Kilimandjaro depuis Arusha", "Arusha point de départ safari", "hôtel Arusha Tanzanie", "safari circuit nord Tanzanie 2026", "ascension du Kilimandjaro", "Arusha Moshi safari",
    ],
    "ruaha": [
      "parc national de Ruaha", "safari Ruaha Tanzanie", "Ruaha Tanzanie safari authentique", "safari hors des sentiers battus Tanzanie", "lions de Ruaha", "safari Ruaha 2026", "visiter le parc de Ruaha", "Ruaha faune sauvage", "circuit safari sud Tanzanie", "meilleure période safari Ruaha",
    ],
    "nyerere": [
      "parc national de Nyerere", "ancienne réserve du Selous", "safari Selous Nyerere Tanzanie", "safari bateau Rufiji Nyerere", "safari Nyerere 2026", "visiter la réserve du Selous", "lions et lycaons Selous", "safari sud Tanzanie Selous", "circuit safari Nyerere prix", "faune Selous Nyerere Tanzanie",
    ],
    "mahale": [
      "trek chimpanzés Mahale", "parc national des monts Mahale", "safari chimpanzés Tanzanie", "observation des chimpanzés lac Tanganyika", "safari monts Mahale 2026", "visiter Mahale Tanzanie", "trekking chimpanzés Afrique de l'Est", "lac Tanganyika Mahale", "safari primates Tanzanie", "accès parc Mahale",
    ],
    "katavi": [
      "parc national de Katavi", "safari Katavi Tanzanie", "Katavi safari sauvage authentique", "hippopotames rivière Katuma Katavi", "safari Katavi 2026", "Tanzanie safari hors des sentiers battus", "visiter le parc de Katavi", "safari isolé Tanzanie", "faune sauvage Katavi", "meilleure saison safari Katavi",
    ],
    "gombe": [
      "parc national de Gombe Stream", "trek chimpanzés Jane Goodall", "safari Gombe Tanzanie", "observation chimpanzés lac Tanganyika Gombe", "visiter Gombe Stream 2026", "réserve de Jane Goodall Tanzanie", "trekking primates Gombe", "safari chimpanzés Kigoma", "accès parc national Gombe", "faune Gombe Tanzanie",
    ],
    "lake-victoria": [
      "lac Victoria Tanzanie", "croisière lac Victoria", "visiter le lac Victoria", "lac Victoria Afrique de l'Est", "séjour lac Victoria 2026", "pêche lac Victoria Tanzanie", "îles du lac Victoria", "circuit lac Victoria Serengeti", "source du Nil lac Victoria", "que voir autour du lac Victoria",
    ],
    "masai-mara": [
      "safari Masai Mara Kenya", "grande migration Masai Mara", "réserve du Masai Mara", "safari Masai Mara 2026", "traversée de la rivière Mara", "meilleure période safari Masai Mara", "circuit safari Kenya Masai Mara", "safari Mara prix", "lions guépards Masai Mara", "visiter le Masai Mara",
    ],
    "volcanoes": [
      "trekking gorilles Rwanda", "parc national des volcans Rwanda", "safari gorilles de montagne", "permis gorilles Rwanda 2026", "trekking gorilles Volcanoes National Park", "observation des gorilles au Rwanda", "singes dorés Rwanda", "Dian Fossey gorilles Rwanda", "safari primates Afrique", "prix permis trekking gorilles Rwanda",
    ],
    "amboseli": [
      "parc national d'Amboseli", "éléphants Amboseli Kilimandjaro", "safari Amboseli Kenya", "safari Amboseli 2026", "vue Kilimandjaro depuis Amboseli", "circuit safari Kenya Amboseli", "meilleure période safari Amboseli", "photographie éléphants Amboseli", "visiter Amboseli", "safari Amboseli prix",
    ],
    "kenyan-coast": [
      "côte kényane vacances", "plages de Diani Kenya", "Mombasa vacances plage", "combiné safari plage Kenya", "côte swahilie Kenya", "séjour Lamu Kenya", "vacances Kenya 2026 plage", "Watamu plongée Kenya", "culture swahilie côte kényane", "meilleures plages du Kenya",
    ],
    "lake-nakuru": [
      "parc national du lac Nakuru", "flamants roses lac Nakuru", "safari rhinocéros lac Nakuru", "lac Nakuru Kenya safari", "visiter le lac Nakuru", "safari lac Nakuru 2026", "sanctuaire de rhinocéros Kenya", "observation oiseaux lac Nakuru", "circuit safari Kenya lac Nakuru", "faune lac Nakuru",
    ],
    "ol-pejeta": [
      "conservatoire Ol Pejeta", "derniers rhinocéros blancs du nord", "safari Ol Pejeta Kenya", "sanctuaire rhinocéros Ol Pejeta", "safari Ol Pejeta 2026", "visiter Ol Pejeta Conservancy", "safari chimpanzés Ol Pejeta", "réserve Laikipia Kenya", "rhinocéros blancs du nord Kenya", "circuit safari Ol Pejeta prix",
    ],
    "samburu": [
      "réserve nationale de Samburu", "safari Samburu Kenya", "espèces rares Samburu Kenya", "girafe réticulée Samburu", "safari Samburu 2026", "visiter la réserve de Samburu", "culture Samburu Kenya safari", "oryx beisa zèbre de Grévy", "circuit safari nord Kenya", "faune sauvage Samburu",
    ],
    "tsavo": [
      "parc national de Tsavo", "éléphants rouges Tsavo", "safari Tsavo Est Ouest", "safari Tsavo Kenya 2026", "visiter Tsavo Kenya", "circuit safari Tsavo prix", "plus grand parc du Kenya", "faune sauvage Tsavo", "lions mangeurs d'hommes Tsavo", "meilleure période safari Tsavo",
    ],
    "akagera": [
      "parc national de l'Akagera", "safari Akagera Rwanda", "big five Rwanda Akagera", "safari savane Rwanda", "safari Akagera 2026", "visiter le parc Akagera", "lions rhinocéros Akagera", "circuit safari Rwanda Akagera", "lacs Akagera Rwanda", "meilleure période safari Akagera",
    ],
    "kigali": [
      "que faire à Kigali", "visiter Kigali Rwanda", "mémorial du génocide de Kigali", "Kigali capitale Rwanda voyage", "séjour Kigali 2026", "guide de voyage Kigali", "Kigali point de départ safari", "hôtel Kigali Rwanda", "circuit Rwanda Kigali gorilles", "Kigali ville la plus propre d'Afrique",
    ],
    "lake-kivu": [
      "lac Kivu Rwanda", "vacances lac Kivu", "que faire au lac Kivu", "plage lac Kivu Rwanda", "séjour lac Kivu 2026", "île Napoléon lac Kivu", "circuit Rwanda lac Kivu gorilles", "Gisenyi lac Kivu", "croisière lac Kivu", "visiter le lac Kivu Rwanda",
    ],
    "nyungwe": [
      "forêt de Nyungwe Rwanda", "trekking chimpanzés Nyungwe", "parc national de Nyungwe", "canopy walk Nyungwe", "safari primates Nyungwe 2026", "visiter la forêt de Nyungwe", "singes colobes Nyungwe", "randonnée forêt tropicale Rwanda", "circuit Rwanda Nyungwe gorilles", "meilleure période visite Nyungwe",
    ],
  },
  es: {
    "serengeti": [
      "safari por el Serengeti", "Parque Nacional Serengeti Tanzania", "gran migración del Serengeti", "safari en el Serengeti 2026", "cuándo ver la migración del Serengeti", "safari de leones en el Serengeti", "mejor época para ir al Serengeti", "tour safari Serengeti Tanzania", "safari por Tanzania precio", "visitar el Serengeti",
    ],
    "ngorongoro": [
      "cráter del Ngorongoro", "safari al cráter de Ngorongoro", "Área de Conservación de Ngorongoro", "safari Ngorongoro Tanzania 2026", "excursión de un día al Ngorongoro", "rinocerontes negros en Ngorongoro", "cráter volcánico más grande del mundo", "safari combinado Serengeti y Ngorongoro", "mirador del cráter Ngorongoro", "tour al cráter de Ngorongoro precio",
    ],
    "tarangire": [
      "Parque Nacional Tarangire", "safari en Tarangire Tanzania", "elefantes de Tarangire", "baobabs de Tarangire", "circuito norte de Tanzania Tarangire", "safari Tarangire 2026", "mejor época para visitar Tarangire", "safari de un día en Tarangire", "manadas de elefantes en Tanzania", "excursión a Tarangire desde Arusha",
    ],
    "manyara": [
      "Lago Manyara Tanzania", "Parque Nacional Lago Manyara", "leones trepadores de árboles Tanzania", "safari Lago Manyara 2026", "flamencos en el Lago Manyara", "excursión al Lago Manyara desde Arusha", "safari de un día Lago Manyara", "safari Valle del Rift Tanzania", "observación de aves Lago Manyara",
    ],
    "zanzibar": [
      "vacaciones en Zanzíbar", "playas de Zanzíbar", "Zanzíbar Tanzania todo incluido", "qué hacer en Zanzíbar", "combinado safari y playa Zanzíbar", "Stone Town Zanzíbar", "Zanzíbar 2026 vuelos y hotel", "mejores playas de Zanzíbar", "buceo y snorkel en Zanzíbar", "isla de las especias Zanzíbar",
    ],
    "arusha": [
      "Arusha Tanzania", "safari desde Arusha", "subir el Kilimanjaro", "trekking al Kilimanjaro 2026", "Arusha puerta de entrada a los safaris", "cómo llegar a Arusha", "tour circuito norte de Tanzania", "excursiones desde Arusha", "safari Kilimanjaro y Arusha", "aeropuerto de Kilimanjaro Arusha",
    ],
    "ruaha": [
      "Parque Nacional Ruaha", "safari en Ruaha Tanzania", "el parque más grande de Tanzania", "safari en Ruaha 2026", "Ruaha safari poco turístico", "leones de Ruaha", "safari remoto en Tanzania", "cómo llegar al Parque Ruaha", "safari en Ruaha precio", "Tanzania safari fuera de lo común",
    ],
    "nyerere": [
      "Parque Nacional Nyerere", "reserva Selous Tanzania", "safari en barco por el río Rufiji", "Nyerere Selous safari 2026", "mayor reserva de caza de África", "safari en el sur de Tanzania", "safari en canoa en el Selous", "perros salvajes africanos Nyerere", "safari Selous precio",
    ],
    "mahale": [
      "Montañas Mahale Tanzania", "trekking de chimpancés en Mahale", "safari de chimpancés Tanzania", "Parque Nacional Mahale", "safari Mahale 2026", "avistamiento de chimpancés lago Tanganica", "chimpancés salvajes Mahale Mountains", "cómo llegar a Mahale", "safari de primates en Tanzania", "lago Tanganica Mahale",
    ],
    "katavi": [
      "Parque Nacional Katavi", "safari en Katavi Tanzania", "la última naturaleza virgen de Tanzania", "safari remoto Katavi 2026", "hipopótamos de Katavi", "Katavi safari sin multitudes", "el parque menos visitado de Tanzania", "safari auténtico en Tanzania", "cómo llegar a Katavi",
    ],
    "gombe": [
      "Parque Nacional Gombe", "chimpancés de Jane Goodall", "trekking de chimpancés en Gombe", "Gombe Stream Tanzania", "safari de chimpancés lago Tanganica", "excursión a Gombe 2026", "el reino de los chimpancés Gombe", "cómo visitar Gombe Stream", "investigación de chimpancés en Tanzania",
    ],
    "lake-victoria": [
      "Lago Victoria Tanzania", "el lago más grande de África", "excursión al Lago Victoria", "Lago Victoria Mwanza", "pesca en el Lago Victoria", "islas del Lago Victoria", "tour Lago Victoria 2026", "cómo llegar al Lago Victoria", "cruceros por el Lago Victoria",
    ],
    "masai-mara": [
      "safari en el Masái Mara", "Masái Mara Kenia", "gran migración del Masái Mara", "cruce del río Mara", "safari Masái Mara 2026", "mejor época para ver la migración en el Masái Mara", "tribu masái Kenia safari", "safari de leones Masái Mara", "reserva nacional Masái Mara precio", "tour safari Kenia Masái Mara",
    ],
    "volcanoes": [
      "Parque Nacional de los Volcanes Ruanda", "trekking de gorilas en Ruanda", "safari de gorilas de montaña", "permiso para ver gorilas Ruanda 2026", "gorilas de montaña en Ruanda", "monos dorados Ruanda", "Dian Fossey gorilas Ruanda", "safari de gorilas en África", "trekking de primates en Ruanda", "cuánto cuesta el permiso de gorilas",
    ],
    "amboseli": [
      "Parque Nacional Amboseli", "elefantes con el Kilimanjaro de fondo", "safari en Amboseli Kenia", "safari Amboseli 2026", "foto de elefantes y el Kilimanjaro", "safari de elefantes en Amboseli", "cómo llegar a Amboseli desde Nairobi", "vistas del Kilimanjaro desde Kenia", "reserva Amboseli precio",
    ],
    "kenyan-coast": [
      "costa de Kenia", "playas de Mombasa", "vacaciones en la costa keniana", "Diani Beach Kenia", "combinado safari y playa Kenia", "cultura suajili en la costa de Kenia", "costa de Kenia 2026 vacaciones", "arena blanca coralina Kenia", "isla de Lamu Kenia", "qué hacer en la costa de Kenia",
    ],
    "lake-nakuru": [
      "Lago Nakuru Kenia", "flamencos del Lago Nakuru", "Parque Nacional Lago Nakuru", "santuario de rinocerontes Nakuru", "safari Lago Nakuru 2026", "avistamiento de flamencos en Kenia", "excursión de un día al Lago Nakuru", "rinocerontes blancos y negros Nakuru", "safari de aves Lago Nakuru",
    ],
    "ol-pejeta": [
      "Ol Pejeta Conservancy Kenia", "últimos rinocerontes blancos del norte", "santuario de rinocerontes Ol Pejeta", "safari en Ol Pejeta 2026", "conservación de rinocerontes en Kenia", "santuario de chimpancés Ol Pejeta", "Sudán el último rinoceronte blanco macho", "safari de conservación en Kenia", "cómo visitar Ol Pejeta",
    ],
    "samburu": [
      "Reserva Nacional Samburu", "safari en Samburu Kenia", "especies raras del norte de Kenia", "safari Samburu 2026", "jirafa reticulada Samburu", "cebra de Grevy Samburu", "safari en el norte árido de Kenia", "cultura samburu Kenia", "safari río Ewaso Nyiro",
    ],
    "tsavo": [
      "Parque Nacional Tsavo", "Tsavo Este y Oeste Kenia", "elefantes rojos de Tsavo", "safari en Tsavo 2026", "la mayor reserva salvaje de Kenia", "leones devoradores de hombres de Tsavo", "safari Tsavo precio", "cómo llegar a Tsavo desde Mombasa", "safari combinado Tsavo y costa",
    ],
    "akagera": [
      "Parque Nacional Akagera", "safari de sabana en Ruanda", "safari en Akagera 2026", "los cinco grandes en Ruanda", "el único parque de sabana de Ruanda", "leones reintroducidos en Akagera", "safari en barco lago Ihema", "safari corto en Ruanda", "cómo llegar a Akagera desde Kigali",
    ],
    "kigali": [
      "Kigali capital de Ruanda", "qué ver en Kigali", "Memorial del Genocidio de Kigali", "viaje a Kigali 2026", "la ciudad más limpia de África", "qué hacer en Kigali", "Kigali antes del safari de gorilas", "hoteles en Kigali", "turismo en Kigali Ruanda",
    ],
    "lake-kivu": [
      "Lago Kivu Ruanda", "el lago esmeralda de Ruanda", "vacaciones en el Lago Kivu", "Lago Kivu 2026", "playas de agua dulce en Ruanda", "Gisenyi Lago Kivu", "cruceros por el Lago Kivu", "relax después del trekking de gorilas", "frontera con el Congo Lago Kivu",
    ],
    "nyungwe": [
      "Bosque de Nyungwe Ruanda", "trekking de chimpancés en Nyungwe", "puente colgante entre las copas de los árboles Nyungwe", "Parque Nacional Nyungwe 2026", "selva tropical antigua en Ruanda", "13 especies de primates en Nyungwe", "safari de primates en Ruanda", "canopy walk Nyungwe", "senderismo en la selva de Ruanda",
    ],
  },
  de: {
    "serengeti": [
      "Serengeti Safari Tansania", "Serengeti Nationalpark", "große Tierwanderung Serengeti", "Serengeti Migration erleben", "Safari Serengeti 2026", "Serengeti Safari buchen", "Serengeti Löwen beobachten", "Serengeti Rundreise", "beste Reisezeit Serengeti", "Serengeti Nationalpark Safari Preise",
    ],
    "ngorongoro": [
      "Ngorongoro Krater Safari", "Ngorongoro Krater Tansania", "Ngorongoro Nationalpark", "Ngorongoro Krater Safari 2026", "größter Vulkankrater Afrikas", "Ngorongoro Krater Tagesausflug", "Ngorongoro Krater Eintrittspreise", "Big Five Ngorongoro Krater", "Ngorongoro Krater Rundreise", "Ngorongoro Krater Safari buchen",
    ],
    "tarangire": [
      "Tarangire Nationalpark Safari", "Tarangire Elefanten Safari", "Tarangire Baobab Bäume", "Tarangire Safari Tansania", "Tarangire Nationalpark 2026", "Tarangire Safari buchen", "Safari Tarangire Rundreise", "Tarangire Wildtiere Nationalpark", "beste Reisezeit Tarangire", "Tarangire Nationalpark Eintritt",
    ],
    "manyara": [
      "Lake Manyara Safari", "Manyara Nationalpark Tansania", "kletternde Löwen Lake Manyara", "Lake Manyara Nationalpark 2026", "Manyara Flamingos Safari", "Safari Lake Manyara buchen", "Lake Manyara Rundreise", "Lake Manyara Nationalpark Eintrittspreise", "Great Rift Valley Safari Tansania", "Lake Manyara Vogelbeobachtung",
    ],
    "zanzibar": [
      "Sansibar Urlaub", "Sansibar Strandferien", "Sansibar Rundreise", "Stone Town Sansibar", "Sansibar Safari Strandkombination", "Sansibar Reise 2026", "Sansibar Gewürzinsel", "schönste Strände Sansibar", "Sansibar Schnorcheln", "Tansania Strandurlaub",
    ],
    "arusha": [
      "Arusha Tansania Safari", "Kilimandscharo besteigen", "Arusha Nationalpark", "Kilimandscharo Trekking 2026", "Arusha Safari Ausgangspunkt", "Kilimandscharo Besteigung Kosten", "Arusha Flughafen Safari", "Northern Circuit Tansania Safari", "Kilimandscharo Nationalpark Wanderung", "Arusha Tansania Reise buchen",
    ],
    "ruaha": [
      "Ruaha Nationalpark Safari", "Ruaha Tansania Reise", "größter Nationalpark Tansanias", "Ruaha Safari 2026", "Ruaha Elefanten und Löwen", "abgelegene Safari Tansania", "Ruaha Nationalpark Rundreise", "Ruaha Safari buchen", "Wildnis Safari Südtansania", "Ruaha Nationalpark beste Reisezeit",
    ],
    "nyerere": [
      "Nyerere Nationalpark Safari", "Selous Wildreservat Tansania", "größtes Wildreservat Afrikas", "Nyerere Nationalpark 2026", "Selous Safari Bootstour", "Nyerere Nationalpark buchen", "Selous Wildreservat Safari", "Nyerere Nationalpark Wildtiere", "Safari Südtansania Rundreise", "Selous Nyerere Safari Preise",
    ],
    "mahale": [
      "Mahale Berge Schimpansen", "Schimpansen Trekking Tansania", "Mahale Mountains Nationalpark", "Mahale Nationalpark Safari 2026", "Schimpansen Safari Tansania buchen", "Mahale Tansania Reise", "abgelegene Schimpansen Safari", "Tanganjikasee Mahale Berge", "Mahale Trekking Kosten", "Mahale Nationalpark Reisezeit",
    ],
    "katavi": [
      "Katavi Nationalpark Safari", "Katavi Tansania unberührte Wildnis", "Katavi Nationalpark 2026", "abgeschiedene Safari Tansania", "Katavi Flusspferde Safari", "Katavi Nationalpark buchen", "Safari abseits der Touristenpfade Tansania", "Katavi Nationalpark Reise", "Katavi Wildtiere Safari", "letzte Wildnis Tansanias",
    ],
    "gombe": [
      "Gombe Stream Nationalpark", "Schimpansen Jane Goodall Tansania", "Gombe Nationalpark Schimpansen Trekking", "Gombe Stream Safari 2026", "Gombe Tansania Reise", "Schimpansen Trekking Tanganjikasee", "Gombe Nationalpark buchen", "Jane Goodall Schimpansenpark", "Gombe Stream Wanderung", "kleinster Nationalpark Tansanias",
    ],
    "lake-victoria": [
      "Viktoriasee Tansania", "größter See Afrikas", "Viktoriasee Rundreise", "Viktoriasee Reise 2026", "Viktoriasee Inseln Tansania", "Viktoriasee Fischerdörfer", "Viktoriasee Sehenswürdigkeiten", "Viktoriasee Bootstour", "Viktoriasee Reise buchen", "Viktoriasee Vogelbeobachtung",
    ],
    "masai-mara": [
      "Masai Mara Safari", "Masai Mara Kenia Reise", "große Tierwanderung Masai Mara", "Masai Mara Flussüberquerung", "Masai Mara Safari 2026", "Masai Mara Nationalreservat", "Masai Mara Safari buchen", "beste Reisezeit Masai Mara", "Masai Mara Big Five", "Kenia Safari Masai Mara Preise",
    ],
    "volcanoes": [
      "Gorilla Trekking Ruanda", "Volcanoes Nationalpark Ruanda", "Berggorillas Ruanda Safari", "Gorilla Permit Ruanda 2026", "Gorillatrekking Kosten Ruanda", "Ruanda Gorilla Safari buchen", "Goldaffen Ruanda Trekking", "Dian Fossey Gorillas Ruanda", "Gorilla Safari Afrika", "Ruanda Primaten Trekking",
    ],
    "amboseli": [
      "Amboseli Nationalpark Kenia", "Elefanten Kilimandscharo Amboseli", "Amboseli Safari 2026", "Amboseli Nationalpark Safari buchen", "Amboseli Elefanten Safari", "Kenia Safari Kilimandscharo Blick", "Amboseli Nationalpark Eintritt", "beste Reisezeit Amboseli", "Amboseli Nationalreservat Safari", "Amboseli Fotosafari",
    ],
    "kenyan-coast": [
      "Kenia Küste Urlaub", "Diani Beach Kenia", "Kenia Strandurlaub Safari Kombination", "Kenia Küste Reise 2026", "Swahili Kultur Kenia", "schönste Strände Kenia", "Kenia Strand und Safari Rundreise", "Mombasa Urlaub buchen", "Kenia Küste Schnorcheln", "Lamu Insel Kenia",
    ],
    "lake-nakuru": [
      "Lake Nakuru Nationalpark", "Flamingosee Kenia", "Nakuru Nationalpark Nashörner", "Lake Nakuru Safari 2026", "Lake Nakuru Nationalpark buchen", "Flamingos Kenia Safari", "Nashorn Safari Kenia", "Lake Nakuru Tagesausflug", "Kenia Safari Lake Nakuru Preise", "Lake Nakuru Vogelparadies",
    ],
    "ol-pejeta": [
      "Ol Pejeta Conservancy Safari", "letzte nördliche Breitmaulnashörner", "Ol Pejeta Nashorn Sanctuary", "Ol Pejeta Safari 2026", "Ol Pejeta Schimpansen Auffangstation", "Ol Pejeta Conservancy Kenia buchen", "Nashorn Safari Kenia Ol Pejeta", "Ol Pejeta Naturschutzgebiet", "Kenia Safari Nashörner", "Ol Pejeta Big Five Safari",
    ],
    "samburu": [
      "Samburu Nationalreservat Kenia", "Samburu Safari seltene Tierarten", "Samburu Nationalreservat 2026", "Samburu Safari buchen", "Grevy Zebra Samburu", "Samburu Kultur Safari", "Nordkenia Safari Samburu", "Samburu Nationalreservat Reise", "Samburu Wildtiere Safari", "Samburu Trockengebiet Safari",
    ],
    "tsavo": [
      "Tsavo Nationalpark Kenia", "Tsavo Ost West Safari", "größtes Wildschutzgebiet Kenias", "Tsavo Safari 2026", "Tsavo Elefanten rote Erde", "Tsavo Nationalpark buchen", "Tsavo Safari Rundreise", "Tsavo West Nationalpark Reise", "Kenia Safari Tsavo Preise", "Tsavo Nationalpark Wildtiere",
    ],
    "akagera": [
      "Akagera Nationalpark Ruanda", "einziger Savannenpark Ruandas", "Akagera Safari 2026", "Akagera Nationalpark Safari buchen", "Big Five Ruanda Akagera", "Ruanda Safari Akagera Rundreise", "Akagera Nationalpark Wildtiere", "Akagera Bootstour Nashörner", "Ruanda Wildlife Safari", "Akagera Nationalpark Reise",
    ],
    "kigali": [
      "Kigali Ruanda Reise", "sauberste Hauptstadt Afrikas", "Kigali Stadtrundgang", "Kigali Reise 2026", "Kigali Genozid Gedenkstätte", "Kigali Ruanda Sehenswürdigkeiten", "Kigali Städtereise Afrika", "Ruanda Hauptstadt besuchen", "Kigali Kulturreise", "Kigali Ruanda Reisetipps",
    ],
    "lake-kivu": [
      "Kivusee Ruanda", "Kivusee Urlaub Kongo Grenze", "Kivusee Reise 2026", "Kivusee Ruanda Erholung", "Kivusee Bootstour", "Kivusee Ruanda Strand", "Kivusee Reisetipps", "Ruanda Seenlandschaft Reise", "Kivusee Kajak fahren", "Kivusee Ruanda Rundreise",
    ],
    "nyungwe": [
      "Nyungwe Regenwald Ruanda", "Nyungwe Forest Nationalpark", "Schimpansen Trekking Nyungwe", "Nyungwe Nationalpark Safari 2026", "Canopy Walk Nyungwe", "Nyungwe Primaten Safari", "Nyungwe Regenwald Wanderung", "Ruanda Regenwald Safari buchen", "Nyungwe Nationalpark Reise", "13 Primatenarten Nyungwe",
    ],
  },
  ru: {
    "serengeti": [
      "сафари в Серенгети", "национальный парк Серенгети Танзания", "Серенгети великая миграция", "тур в Серенгети 2026", "сафари в Танзании Серенгети цена", "когда лучше ехать в Серенгети", "сафари Серенгети отзывы", "дикие животные Серенгети сафари", "сафари Серенгети из Москвы", "отдых в Серенгети 2027",
    ],
    "ngorongoro": [
      "кратер Нгоронгоро сафари", "сафари в кратере Нгоронгоро", "Нгоронгоро Танзания тур", "сафари Нгоронгоро цена 2026", "кратер Нгоронгоро отзывы туристов", "Нгоронгоро большая пятерка", "сафари в кратере вулкана Танзания", "заповедник Нгоронгоро экскурсия", "тур в Нгоронгоро из России", "сафари в кратере Нгоронгоро 2027",
    ],
    "tarangire": [
      "национальный парк Тарангире сафари", "сафари в Тарангире Танзания", "Тарангире слоны сафари", "парк Тарангире баобабы", "тур в Тарангире 2026", "сафари Тарангире цена", "Тарангире Танзания отзывы", "однодневное сафари Тарангире", "дикая природа парка Тарангире", "сафари Серенгети и Тарангире тур 2027",
    ],
    "manyara": [
      "озеро Маньяра сафари", "национальный парк Маньяра Танзания", "сафари львы на деревьях Маньяра", "тур в Маньяра 2026", "парк Маньяра фламинго птицы", "сафари Маньяра цена", "озеро Маньяра отзывы туристов", "сафари в долине Рифт Маньяра", "однодневный тур озеро Маньяра", "лучшее сафари озеро Маньяра 2027",
    ],
    "zanzibar": [
      "отдых на Занзибаре", "Занзибар пляжный отдых 2026", "тур на Занзибар из Москвы", "Занзибар отзывы туристов", "лучшие пляжи Занзибара", "Занзибар Танзания цены", "сафари и Занзибар комбинированный тур", "остров специй Занзибар экскурсии", "Стоун Таун Занзибар достопримечательности", "отдых на Занзибаре 2027 цены",
    ],
    "arusha": [
      "Аруша Танзания тур", "сафари из Аруши", "Килиманджаро и Аруша тур 2026", "город Аруша достопримечательности", "восхождение на Килиманджаро из Аруши", "Аруша отправная точка сафари", "тур Аруша Килиманджаро цена", "северное сафари Танзания из Аруши", "отели Аруша перед сафари", "сафари северный маршрут Танзания 2027",
    ],
    "ruaha": [
      "национальный парк Руаха сафари", "сафари в Руаха Танзания", "Руаха дикая природа тур", "нетронутое сафари Руаха", "тур в Руаха 2026", "Руаха слоны и львы сафари", "сафари вдали от туристов Танзания", "Руаха отзывы путешественников", "эксклюзивное сафари Руаха цена", "дикий парк Руаха 2027",
    ],
    "nyerere": [
      "заповедник Ньерере сафари", "Селус сафари Танзания", "сафари на лодке в Ньерере", "Ньерере Танзания тур 2026", "крупнейший заповедник Африки сафари", "сафари Ньерере цена", "дикая природа Селус Ньерере отзывы", "пеший сафари в Ньерере", "сафари на реке Руфиджи", "тур в заповедник Ньерере 2027",
    ],
    "mahale": [
      "горы Махале трекинг к шимпанзе", "сафари Махале Танзания", "трекинг к диким шимпанзе Танзания", "национальный парк Махале тур", "шимпанзе озеро Танганьика Махале", "тур в Махале 2026", "Махале отзывы туристов", "дикие шимпанзе Танзания трекинг", "сафари горы Махале цена", "путешествие в Махале 2027",
    ],
    "katavi": [
      "национальный парк Катави сафари", "сафари Катави Танзания", "самый дикий парк Танзании", "сафари Катави без туристов", "тур в Катави 2026", "Катави бегемоты и крокодилы сафари", "нетронутая природа Катави отзывы", "эксклюзивное сафари Катави цена", "удаленный парк Катави путешествие", "сафари Катави 2027",
    ],
    "gombe": [
      "национальный парк Гомбе Танзания", "трекинг шимпанзе в Гомбе", "парк шимпанзе Джейн Гудолл", "сафари Гомбе озеро Танганьика", "тур в Гомбе 2026", "Гомбе Стрим тур к шимпанзе", "трекинг шимпанзе Гомбе цена", "Гомбе Танзания отзывы туристов", "путешествие к шимпанзе в Гомбе", "сафари Гомбе 2027",
    ],
    "lake-victoria": [
      "озеро Виктория Танзания тур", "крупнейшее озеро Африки путешествие", "отдых на озере Виктория", "рыбалка на озере Виктория тур", "экскурсии на озере Виктория 2026", "круиз по озеру Виктория", "озеро Виктория отзывы туристов", "путешествие на озеро Виктория Танзания", "острова озера Виктория тур", "сафари и озеро Виктория 2027",
    ],
    "masai-mara": [
      "сафари в Масаи Мара", "Масаи Мара Кения тур", "великая миграция Масаи Мара 2026", "переправа через реку Мара", "сафари Масаи Мара цена", "Масаи Мара отзывы туристов", "когда ехать в Масаи Мара на миграцию", "сафари Кения Масаи Мара тур", "Масаи Мара большая пятерка сафари", "тур в Масаи Мара 2027",
    ],
    "volcanoes": [
      "национальный парк Вулканов Руанда", "трекинг к гориллам Руанда", "сафари к горным гориллам", "разрешение на трекинг горилл 2026", "парк Вулканов сафари Руанда", "трекинг горилл Руанда цена", "золотые мартышки Руанда сафари", "парк Дайан Фосси гориллы", "сафари к гориллам Африка", "трекинг приматов Руанда 2027",
    ],
    "amboseli": [
      "национальный парк Амбосели сафари", "слоны на фоне Килиманджаро Амбосели", "сафари Амбосели Кения тур", "Амбосели отзывы туристов", "тур в Амбосели 2026", "сафари слоны и Килиманджаро цена", "лучшее время для посещения Амбосели", "сафари Кения Амбосели тур", "дикая природа Амбосели путешествие", "сафари Амбосели 2027",
    ],
    "kenyan-coast": [
      "побережье Кении отдых", "пляжи Момбасы Кения тур", "отдых на побережье Кении 2026", "Момбаса Кения пляжный отдых", "сафари и пляж Кения комбинированный тур", "побережье Кении отзывы туристов", "остров Ламу Кения путешествие", "культура суахили Кения экскурсии", "лучшие пляжи Кении цены", "отдых на побережье Индийского океана Кения 2027",
    ],
    "lake-nakuru": [
      "озеро Накуру фламинго сафари", "национальный парк Накуру Кения", "сафари носороги озеро Накуру", "тур в Накуру 2026", "озеро Накуру отзывы туристов", "сафари Кения озеро Накуру цена", "розовые фламинго на озере в Кении", "заповедник носорогов Накуру", "однодневное сафари Накуру из Найроби", "сафари озеро Накуру 2027",
    ],
    "ol-pejeta": [
      "заповедник Ол Педжета сафари", "последние белые носороги Кения", "Ол Педжета Кения тур", "сафари носороги Ол Педжета цена", "северный белый носорог заповедник Кения", "тур в Ол Педжета 2026", "Ол Педжета отзывы туристов", "приют шимпанзе в заповеднике Ол Педжета", "частный заповедник Ол Педжета сафари", "сафари Ол Педжета 2027",
    ],
    "samburu": [
      "национальный заповедник Самбуру сафари", "сафари Самбуру Кения редкие животные", "сетчатый жираф Самбуру сафари", "тур в Самбуру 2026", "Самбуру отзывы туристов", "сафари северная Кения Самбуру цена", "редкие виды животных Самбуру", "сомалийский страус Самбуру сафари", "дикая природа Самбуру путешествие", "сафари Самбуру 2027",
    ],
    "tsavo": [
      "национальный парк Цаво сафари", "Цаво Восточный и Западный сафари", "красные слоны Цаво сафари", "тур в Цаво 2026", "крупнейший парк Кении Цаво", "сафари Цаво цена", "Цаво отзывы туристов", "сафари Кения Цаво Восток Запад тур", "дикая природа Цаво путешествие", "сафари Цаво 2027",
    ],
    "akagera": [
      "национальный парк Акагера сафари", "сафари Акагера Руанда", "саванна Руанда сафари Акагера", "тур в Акагеру 2026", "Акагера большая пятерка сафари", "сафари Руанда Акагера цена", "Акагера отзывы туристов", "дикая природа Акагера путешествие", "озера Акагера сафари на лодке", "сафари Акагера 2027",
    ],
    "kigali": [
      "Кигали Руанда путешествие", "город Кигали достопримечательности", "тур в Кигали 2026", "мемориал геноцида в Кигали экскурсия", "Кигали отзывы туристов", "отдых в Кигали Руанда", "Кигали столица Африки путешествие", "экскурсии по Кигали", "отели Кигали цены", "сафари из Кигали Руанда 2027",
    ],
    "lake-kivu": [
      "озеро Киву Руанда отдых", "изумрудное озеро Киву тур", "отдых на озере Киву 2026", "озеро Киву отзывы туристов", "пляжи озера Киву Руанда", "круиз по озеру Киву", "экскурсии на озере Киву Руанда", "отдых на озере Киву после трекинга горилл", "путешествие на озеро Киву цены", "озеро Киву Руанда 2027",
    ],
    "nyungwe": [
      "национальный парк Ньюнгве сафари", "тропический лес Ньюнгве Руанда", "трекинг шимпанзе в Ньюнгве", "навесной мост Ньюнгве экскурсия", "тур в Ньюнгве 2026", "приматы Ньюнгве сафари", "Ньюнгве отзывы туристов", "дождевой лес Руанда путешествие", "сафари в лесу Ньюнгве цена", "лес Ньюнгве 2027",
    ],
  },
  zh: {
    "serengeti": [
      "塞伦盖蒂国家公园旅游", "塞伦盖蒂大迁徙", "塞伦盖蒂野生动物园", "塞伦盖蒂自由行攻略", "坦桑尼亚塞伦盖蒂旅游", "塞伦盖蒂动物大迁徙2026", "塞伦盖蒂豪华帐篷营地", "塞伦盖蒂看动物最佳时间", "塞伦盖蒂跟团游", "塞伦盖蒂私人定制游2027",
    ],
    "ngorongoro": [
      "恩戈罗恩戈罗火山口", "恩戈罗恩戈罗野生动物园", "恩戈罗恩戈罗一日游", "坦桑尼亚火山口旅游", "恩戈罗恩戈罗自然保护区", "恩戈罗恩戈罗豪华酒店", "恩戈罗恩戈罗动物观赏", "恩戈罗恩戈罗2026旅游攻略", "世界最大破火山口旅游", "恩戈罗恩戈罗跟团游",
    ],
    "tarangire": [
      "塔兰吉雷国家公园", "塔兰吉雷大象", "塔兰吉雷猴面包树", "塔兰吉雷野生动物园旅游", "坦桑尼亚塔兰吉雷攻略", "塔兰吉雷一日游", "塔兰吉雷豪华营地", "塔兰吉雷2026旅游", "塔兰吉雷观象最佳地点", "塔兰吉雷自驾游",
    ],
    "manyara": [
      "马尼亚拉湖国家公园", "马尼亚拉湖爬树狮子", "马尼亚拉湖旅游攻略", "坦桑尼亚马尼亚拉湖", "马尼亚拉湖火烈鸟", "马尼亚拉湖一日游", "马尼亚拉湖野生动物园", "马尼亚拉湖2026旅游", "东非大裂谷马尼亚拉湖", "马尼亚拉湖跟团游",
    ],
    "zanzibar": [
      "桑给巴尔岛旅游", "桑给巴尔蜜月游", "桑给巴尔海滩度假", "石头城桑给巴尔", "桑给巴尔潜水浮潜", "桑给巴尔野奢海岛游", "桑给巴尔香料岛旅游", "桑给巴尔2026旅游攻略", "坦桑尼亚海岛游", "桑给巴尔自由行",
    ],
    "arusha": [
      "阿鲁沙旅游攻略", "阿鲁沙乞力马扎罗", "阿鲁沙野生动物园中转", "坦桑尼亚北线旅游", "阿鲁沙国家公园", "阿鲁沙住宿推荐", "乞力马扎罗登山", "阿鲁沙2026自由行", "阿鲁沙咖啡庄园", "阿鲁沙跟团游出发",
    ],
    "ruaha": [
      "鲁阿哈国家公园", "鲁阿哈野生动物园旅游", "坦桑尼亚鲁阿哈攻略", "鲁阿哈狮子观赏", "鲁阿哈小众野生动物园", "鲁阿哈豪华营地", "鲁阿哈自然保护区", "鲁阿哈2026旅游", "鲁阿哈私人定制野奢游", "坦桑尼亚最大国家公园",
    ],
    "nyerere": [
      "尼耶雷雷国家公园", "塞卢斯禁猎区", "尼耶雷雷野生动物园旅游", "坦桑尼亚塞卢斯攻略", "尼耶雷雷豪华营地", "尼耶雷雷船游狩猎", "非洲最大野生动物保护区", "尼耶雷雷2026旅游", "尼耶雷雷徒步狩猎", "坦桑尼亚南线野生动物园",
    ],
    "mahale": [
      "马哈勒山脉国家公园", "马哈勒黑猩猩徒步", "坦桑尼亚黑猩猩旅游", "马哈勒野生动物园攻略", "马哈勒湖畔营地", "坦噶尼喀湖马哈勒", "马哈勒2026旅游", "马哈勒原始丛林探险", "马哈勒野奢度假村", "非洲黑猩猩追踪之旅",
    ],
    "katavi": [
      "卡塔维国家公园", "卡塔维野生动物园", "坦桑尼亚卡塔维攻略", "卡塔维原始荒野", "卡塔维河马观赏", "卡塔维小众旅游", "卡塔维2026旅游", "坦桑尼亚最后的荒野", "卡塔维豪华帐篷营地", "卡塔维自然保护区旅游",
    ],
    "gombe": [
      "贡贝溪国家公园", "贡贝黑猩猩", "简古道尔贡贝", "贡贝野生动物园攻略", "坦噶尼喀湖贡贝", "贡贝黑猩猩徒步旅游", "贡贝2026旅游", "坦桑尼亚黑猩猩保护区", "贡贝生态旅游", "贡贝丛林探险",
    ],
    "lake-victoria": [
      "维多利亚湖旅游", "非洲最大湖泊", "维多利亚湖坦桑尼亚", "维多利亚湖攻略", "维多利亚湖岛屿度假", "维多利亚湖2026旅游", "维多利亚湖钓鱼", "维多利亚湖生态游", "姆万扎维多利亚湖", "维多利亚湖野生动物",
    ],
    "masai-mara": [
      "马赛马拉国家保护区", "马赛马拉大迁徙", "肯尼亚马赛马拉旅游", "马赛马拉动物大迁徙2026", "马赛马拉自由行攻略", "马赛马拉豪华帐篷营地", "马赛马拉热气球", "马赛马拉跟团游", "马赛马拉马拉河渡河", "马赛马拉私人定制游2027",
    ],
    "volcanoes": [
      "卢旺达火山国家公园", "卢旺达大猩猩徒步", "山地大猩猩旅游", "卢旺达大猩猩许可证2026", "火山国家公园旅游攻略", "卢旺达追踪大猩猩", "金丝猴卢旺达", "戴安福西大猩猩", "非洲大猩猩之旅", "卢旺达灵长类动物旅游",
    ],
    "amboseli": [
      "安博塞利国家公园", "安博塞利大象乞力马扎罗", "肯尼亚安博塞利旅游", "安博塞利野生动物园攻略", "安博塞利拍摄乞力马扎罗", "安博塞利2026旅游", "安博塞利豪华营地", "安博塞利跟团游", "安博塞利大象保护区", "安博塞利自驾游",
    ],
    "kenyan-coast": [
      "肯尼亚海岸旅游", "蒙巴萨海滩度假", "肯尼亚海岛游", "拉穆岛斯瓦希里文化", "肯尼亚海岸2026旅游", "肯尼亚海滩野生动物园组合", "肯尼亚潜水浮潜", "肯尼亚蜜月海岛", "白珊瑚沙滩肯尼亚", "肯尼亚海岸自由行",
    ],
    "lake-nakuru": [
      "纳库鲁湖国家公园", "纳库鲁湖火烈鸟", "肯尼亚纳库鲁湖旅游", "纳库鲁湖犀牛保护区", "纳库鲁湖攻略", "纳库鲁湖一日游", "纳库鲁湖2026旅游", "纳库鲁湖野生动物观赏", "纳库鲁湖跟团游", "东非大裂谷纳库鲁湖",
    ],
    "ol-pejeta": [
      "奥尔佩杰塔保护区", "奥尔佩杰塔白犀牛", "最后的北方白犀牛", "肯尼亚奥尔佩杰塔旅游", "奥尔佩杰塔野生动物园攻略", "奥尔佩杰塔黑猩猩保护区", "奥尔佩杰塔2026旅游", "奥尔佩杰塔犀牛保护", "奥尔佩杰塔豪华营地", "奥尔佩杰塔私人定制游",
    ],
    "samburu": [
      "桑布鲁国家保护区", "桑布鲁特有物种", "肯尼亚桑布鲁旅游", "桑布鲁网纹长颈鹿", "桑布鲁野生动物园攻略", "桑布鲁豪华帐篷营地", "桑布鲁2026旅游", "桑布鲁干旱荒野", "桑布鲁部落文化", "桑布鲁自由行",
    ],
    "tsavo": [
      "察沃国家公园", "察沃东西国家公园", "肯尼亚察沃旅游", "察沃红土大象", "察沃野生动物园攻略", "肯尼亚最大野生动物园", "察沃2026旅游", "察沃自驾游", "察沃豪华营地", "察沃跟团游",
    ],
    "akagera": [
      "阿卡盖拉国家公园", "卢旺达阿卡盖拉旅游", "阿卡盖拉野生动物园攻略", "卢旺达唯一稀树草原公园", "阿卡盖拉狮子重引入", "阿卡盖拉2026旅游", "阿卡盖拉自驾游", "阿卡盖拉豪华营地", "阿卡盖拉船游狩猎", "卢旺达野生动物园",
    ],
    "kigali": [
      "基加利旅游攻略", "卢旺达基加利", "基加利大屠杀纪念馆", "非洲最干净首都", "基加利2026旅游", "基加利大猩猩中转", "基加利自由行", "基加利美食文化", "基加利跟团游出发", "卢旺达首都旅游",
    ],
    "lake-kivu": [
      "基伍湖旅游", "卢旺达基伍湖", "基伍湖度假", "刚果边境基伍湖", "基伍湖攻略", "基伍湖2026旅游", "基伍湖游船", "基伍湖咖啡庄园", "基伍湖豪华度假村", "基伍湖徒步",
    ],
    "nyungwe": [
      "纽恩威森林国家公园", "纽恩威黑猩猩徒步", "卢旺达纽恩威攻略", "纽恩威树冠吊桥", "纽恩威灵长类动物", "纽恩威原始雨林", "纽恩威2026旅游", "纽恩威13种灵长类", "纽恩威徒步探险", "卢旺达雨林旅游",
    ],
  },
  "zh-TW": {
    "serengeti": [
      "塞倫蓋提國家公園", "塞倫蓋提動物大遷徙", "坦尚尼亞塞倫蓋提旅遊", "塞倫蓋提薩法里之旅", "塞倫蓋提野生動物園", "塞倫蓋提獅子", "塞倫蓋提2026旅遊團", "塞倫蓋提五大獸", "非洲動物大遷徙旅遊", "塞倫蓋提豪華薩法里",
    ],
    "ngorongoro": [
      "恩戈羅恩戈羅火山口", "恩戈羅恩戈羅保護區", "坦尚尼亞火山口野生動物", "恩戈羅恩戈羅薩法里", "恩戈羅恩戈羅一日遊", "世界最大完整火山口", "恩戈羅恩戈羅犀牛", "恩戈羅恩戈羅2026行程", "坦尚尼亞火山口保護區旅遊", "恩戈羅恩戈羅住宿推薦",
    ],
    "tarangire": [
      "塔蘭吉雷國家公園", "塔蘭吉雷猴麵包樹", "塔蘭吉雷大象", "坦尚尼亞塔蘭吉雷薩法里", "塔蘭吉雷野生動物園", "塔蘭吉雷國家公園旅遊", "塔蘭吉雷2026行程", "北方線塔蘭吉雷", "塔蘭吉雷象群", "塔蘭吉雷住宿",
    ],
    "manyara": [
      "曼雅拉湖國家公園", "曼雅拉湖爬樹獅子", "坦尚尼亞曼雅拉湖旅遊", "曼雅拉湖薩法里", "曼雅拉湖賞鳥", "東非大裂谷曼雅拉湖", "曼雅拉湖野生動物園", "曼雅拉湖火烈鳥", "曼雅拉湖2026行程", "曼雅拉湖一日遊",
    ],
    "zanzibar": [
      "尚吉巴島旅遊", "尚吉巴石頭城", "尚吉巴海灘度假", "尚吉巴浮潛", "坦尚尼亞海島度假", "尚吉巴蜜月旅行", "尚吉巴薩法里海島套裝行程", "尚吉巴2026自由行", "尚吉巴香料島", "尚吉巴豪華度假村",
    ],
    "arusha": [
      "阿魯沙旅遊", "阿魯沙吉力馬札羅山", "坦尚尼亞北方線門戶", "阿魯沙國家公園", "阿魯沙薩法里出發點", "吉力馬札羅山健行", "阿魯沙住宿推薦", "阿魯沙機場自由行", "阿魯沙2026行程", "坦尚尼亞阿魯沙旅遊團",
    ],
    "ruaha": [
      "魯阿哈國家公園", "坦尚尼亞最大國家公園", "魯阿哈薩法里", "魯阿哈野生動物園", "魯阿哈獅子象群", "魯阿哈秘境旅遊", "坦尚尼亞南方線魯阿哈", "魯阿哈國家公園2026", "魯阿哈原始荒野旅遊", "魯阿哈住宿推薦",
    ],
    "nyerere": [
      "尼雷雷國家公園", "塞盧斯野生動物保護區", "非洲最大野生動物保護區", "尼雷雷國家公園薩法里", "尼雷雷魯菲吉河", "坦尚尼亞南方線尼雷雷", "尼雷雷野生動物園之旅", "尼雷雷2026行程", "尼雷雷划船狩獵", "尼雷雷住宿推薦",
    ],
    "mahale": [
      "馬哈利山國家公園", "馬哈利黑猩猩追蹤", "坦尚尼亞黑猩猩旅遊", "馬哈利山原始雨林", "馬哈利國家公園薩法里", "坦干依喀湖馬哈利", "馬哈利山健行", "馬哈利2026行程", "馬哈利住宿推薦", "非洲黑猩猩追蹤之旅",
    ],
    "katavi": [
      "卡塔維國家公園", "坦尚尼亞最後秘境", "卡塔維薩法里", "卡塔維野生動物園", "卡塔維河馬", "坦尚尼亞西部秘境旅遊", "卡塔維國家公園2026", "卡塔維原始荒野", "卡塔維住宿推薦", "卡塔維野生動物之旅",
    ],
    "gombe": [
      "貢貝溪國家公園", "珍古德黑猩猩", "貢貝國家公園黑猩猩追蹤", "坦干依喀湖貢貝", "貢貝溪野生動物之旅", "貢貝黑猩猩保護區", "坦尚尼亞黑猩猩王國", "貢貝2026行程", "貢貝國家公園薩法里", "貢貝住宿推薦",
    ],
    "lake-victoria": [
      "維多利亞湖旅遊", "非洲最大湖泊", "維多利亞湖坦尚尼亞", "維多利亞湖釣魚", "維多利亞湖島嶼旅遊", "維多利亞湖行程", "維多利亞湖2026旅遊", "維多利亞湖生態旅遊", "維多利亞湖住宿推薦", "維多利亞湖薩法里延伸行程",
    ],
    "masai-mara": [
      "馬賽馬拉國家保護區", "馬賽馬拉動物大遷徙", "肯亞馬賽馬拉旅遊", "馬賽馬拉薩法里", "馬賽馬拉過河奇觀", "馬賽馬拉野生動物園", "馬賽馬拉2026旅遊團", "馬賽馬拉獅子", "馬賽馬拉豪華薩法里營地", "馬賽馬拉住宿推薦",
    ],
    "volcanoes": [
      "火山國家公園盧安達", "盧安達大猩猩健行", "山地大猩猩追蹤", "盧安達大猩猩許可證2026", "火山國家公園薩法里", "盧安達追蹤大猩猩", "金絲猴盧安達", "戴安佛西大猩猩", "非洲大猩猩旅遊", "盧安達靈長類健行",
    ],
    "amboseli": [
      "安波塞利國家公園", "吉力馬札羅山下的大象", "肯亞安波塞利旅遊", "安波塞利薩法里", "安波塞利大象群", "安波塞利國家公園2026", "安波塞利野生動物園", "安波塞利住宿推薦", "安波塞利攝影之旅", "肯亞安波塞利國家公園旅遊團",
    ],
    "kenyan-coast": [
      "肯亞海岸旅遊", "蒙巴薩海灘度假", "肯亞白沙灘", "斯瓦希里文化旅遊", "肯亞海岸薩法里海島套裝行程", "拉穆島旅遊", "肯亞海岸蜜月旅行", "肯亞海岸2026自由行", "肯亞海岸豪華度假村", "肯亞海岸浮潛",
    ],
    "lake-nakuru": [
      "納庫魯湖國家公園", "火烈鳥湖肯亞", "納庫魯湖犀牛保護區", "納庫魯湖薩法里", "納庫魯湖野生動物園", "肯亞納庫魯湖旅遊", "納庫魯湖2026行程", "納庫魯湖賞鳥", "納庫魯湖住宿推薦", "納庫魯湖一日遊",
    ],
    "ol-pejeta": [
      "奧佩傑塔保護區", "最後的北方白犀牛", "奧佩傑塔野生動物保護區", "肯亞奧佩傑塔薩法里", "奧佩傑塔黑猩猩保護區", "奧佩傑塔2026行程", "奧佩傑塔犀牛保育", "奧佩傑塔野生動物園", "奧佩傑塔住宿推薦", "肯亞犀牛保護區旅遊",
    ],
    "samburu": [
      "桑布魯國家保護區", "桑布魯稀有野生動物", "肯亞桑布魯薩法里", "桑布魯乾旱荒野旅遊", "桑布魯國家保護區2026", "桑布魯野生動物園", "桑布魯網紋長頸鹿", "桑布魯部落文化", "桑布魯住宿推薦", "肯亞北部桑布魯旅遊",
    ],
    "tsavo": [
      "察沃國家公園", "肯亞最大野生動物保護區", "察沃東西國家公園", "察沃薩法里", "察沃紅土大象", "察沃國家公園2026", "察沃野生動物園", "肯亞察沃旅遊", "察沃住宿推薦", "察沃國家公園旅遊團",
    ],
    "akagera": [
      "阿卡蓋拉國家公園", "盧安達唯一莽原公園", "阿卡蓋拉薩法里", "阿卡蓋拉野生動物園", "盧安達阿卡蓋拉旅遊", "阿卡蓋拉2026行程", "阿卡蓋拉獅子重返計畫", "阿卡蓋拉划船狩獵", "阿卡蓋拉住宿推薦", "盧安達草原野生動物之旅",
    ],
    "kigali": [
      "吉佳利旅遊", "盧安達首都吉佳利", "吉佳利大屠殺紀念館", "非洲最乾淨城市吉佳利", "吉佳利自由行", "吉佳利2026行程", "吉佳利住宿推薦", "吉佳利美食旅遊", "盧安達吉佳利機場自由行", "吉佳利城市旅遊",
    ],
    "lake-kivu": [
      "基伍湖旅遊", "剛果邊界翡翠湖", "盧安達基伍湖度假", "基伍湖住宿推薦", "基伍湖2026行程", "基伍湖划船", "基伍湖度假村", "基伍湖蜜月旅行", "盧安達基伍湖景點", "基伍湖咖啡莊園旅遊",
    ],
    "nyungwe": [
      "紐恩威森林國家公園", "盧安達原始雨林", "紐恩威黑猩猩追蹤", "紐恩威13種靈長類", "紐恩威樹冠吊橋", "紐恩威國家公園薩法里", "紐恩威2026行程", "紐恩威賞鳥旅遊", "紐恩威住宿推薦", "盧安達雨林生態旅遊",
    ],
  },
  it: {
    "serengeti": [
      "safari nel Serengeti", "parco nazionale del Serengeti", "grande migrazione Serengeti", "migrazione degli gnu Serengeti", "safari Serengeti Tanzania", "quando andare al Serengeti", "safari Serengeti 2026", "leoni del Serengeti", "big five Serengeti", "viaggio safari Serengeti prezzi",
    ],
    "ngorongoro": [
      "cratere di Ngorongoro", "safari cratere Ngorongoro", "area di conservazione Ngorongoro", "Ngorongoro Tanzania", "safari Ngorongoro e Serengeti", "cratere vulcanico Tanzania", "escursione al cratere di Ngorongoro", "Ngorongoro safari 2026", "big five cratere Ngorongoro", "quanto costa un safari a Ngorongoro",
    ],
    "tarangire": [
      "parco nazionale del Tarangire", "safari Tarangire", "elefanti Tarangire", "baobab Tarangire", "Tarangire Tanzania", "safari circuito del nord Tanzania", "Tarangire safari 2026", "parco Tarangire cosa vedere", "safari Tarangire e Ngorongoro",
    ],
    "manyara": [
      "lago Manyara parco nazionale", "leoni sugli alberi Manyara", "safari lago Manyara", "Lake Manyara Tanzania", "parco del lago Manyara", "fenicotteri lago Manyara", "safari Manyara 2026", "escursione lago Manyara", "safari nord Tanzania Manyara",
    ],
    "zanzibar": [
      "isola di Zanzibar vacanza", "spiagge di Zanzibar", "Stone Town Zanzibar", "Zanzibar viaggio 2026", "safari e mare Zanzibar", "vacanza a Zanzibar", "Zanzibar snorkeling", "quando andare a Zanzibar", "Zanzibar isola delle spezie", "voli per Zanzibar offerte",
    ],
    "arusha": [
      "Arusha Tanzania", "Kilimangiaro trekking", "safari da Arusha", "Arusha punto di partenza safari", "scalata Kilimangiaro 2026", "Arusha aeroporto safari", "circuito del nord Tanzania", "Arusha cosa vedere", "trekking Kilimangiaro prezzi",
    ],
    "ruaha": [
      "parco nazionale di Ruaha", "safari Ruaha Tanzania", "Ruaha safari selvaggio", "Tanzania del sud safari", "Ruaha leoni ed elefanti", "safari Ruaha 2026", "parco Ruaha poco turistico", "safari fuori dai sentieri battuti Tanzania", "Ruaha national park viaggio",
    ],
    "nyerere": [
      "riserva Nyerere Tanzania", "ex riserva Selous", "safari Nyerere Selous", "safari in barca fiume Rufiji", "riserva faunistica più grande d'Africa", "safari Nyerere 2026", "Nyerere national park Tanzania", "safari selvaggio sud Tanzania", "licaoni Selous safari",
    ],
    "mahale": [
      "monti Mahale scimpanzé", "trekking scimpanzé Mahale", "Mahale Mountains Tanzania", "safari scimpanzé Tanzania", "parco nazionale Mahale", "trekking scimpanzé lago Tanganica", "Mahale safari 2026", "safari primati Tanzania", "vacanza scimpanzé selvaggi",
    ],
    "katavi": [
      "parco nazionale Katavi", "Katavi Tanzania safari", "Katavi ultima natura selvaggia", "safari remoto Tanzania", "Katavi ippopotami", "safari Katavi 2026", "parco poco visitato Tanzania", "Katavi wilderness viaggio", "safari avventura Tanzania Katavi",
    ],
    "gombe": [
      "Gombe Stream parco nazionale", "scimpanzé Jane Goodall", "trekking scimpanzé Gombe", "Gombe Tanzania", "parco Gombe lago Tanganica", "safari scimpanzé Gombe 2026", "Jane Goodall scimpanzé Tanzania", "visita Gombe Stream", "trekking primati Tanzania",
    ],
    "lake-victoria": [
      "lago Vittoria Tanzania", "lago Vittoria Africa", "crociera lago Vittoria", "lago Vittoria il più grande lago africano", "Mwanza lago Vittoria", "safari lago Vittoria 2026", "isole lago Vittoria", "pesca lago Vittoria", "viaggio lago Vittoria Tanzania",
    ],
    "masai-mara": [
      "Masai Mara Kenya safari", "grande migrazione Masai Mara", "attraversamento fiume Mara", "safari Masai Mara 2026", "riserva Masai Mara", "safari Kenya Masai Mara prezzi", "leoni Masai Mara", "quando vedere la migrazione nel Masai Mara", "safari fotografico Masai Mara", "villaggio Masai Kenya",
    ],
    "volcanoes": [
      "trekking gorilla Ruanda", "parco vulcani Ruanda", "gorilla di montagna Ruanda", "permesso trekking gorilla 2026", "Volcanoes National Park Ruanda", "safari gorilla Ruanda prezzi", "scimmie dorate Ruanda", "gorilla Dian Fossey", "trekking primati Ruanda", "safari gorilla Africa",
    ],
    "amboseli": [
      "Amboseli Kenya elefanti", "parco Amboseli Kilimangiaro", "safari Amboseli 2026", "elefanti sotto il Kilimangiaro", "riserva Amboseli", "safari Kenya Amboseli", "foto elefanti Amboseli", "parco nazionale Amboseli Kenya", "safari Amboseli prezzi",
    ],
    "kenyan-coast": [
      "costa del Kenya vacanza", "spiagge Kenya Diani", "Mombasa vacanza mare", "safari e mare Kenya", "costa keniota 2026", "Lamu isola Kenya", "spiagge Diani Beach", "vacanza costa swahili Kenya", "Watamu Kenya spiagge",
    ],
    "lake-nakuru": [
      "lago Nakuru fenicotteri", "parco nazionale lago Nakuru", "rinoceronti lago Nakuru", "safari lago Nakuru Kenya", "lago Nakuru safari 2026", "santuario rinoceronti Kenya", "lago dei fenicotteri Kenya", "safari lago Nakuru prezzi", "birdwatching lago Nakuru",
    ],
    "ol-pejeta": [
      "Ol Pejeta Conservancy Kenya", "ultimi rinoceronti bianchi del nord", "rinoceronte bianco settentrionale", "safari Ol Pejeta 2026", "santuario scimpanzé Ol Pejeta", "riserva Ol Pejeta Kenya", "safari rinoceronti Kenya", "Ol Pejeta conservazione fauna", "safari conservazione Kenya",
    ],
    "samburu": [
      "riserva Samburu Kenya", "safari Samburu specie rare", "Samburu National Reserve", "giraffa reticolata Samburu", "safari Samburu 2026", "Kenya del nord safari", "safari deserto Samburu", "tribù Samburu Kenya", "safari specie rare Kenya",
    ],
    "tsavo": [
      "parco Tsavo Kenya", "Tsavo Est e Ovest safari", "elefanti rossi Tsavo", "safari Tsavo 2026", "parco nazionale più grande del Kenya", "safari Tsavo prezzi", "Tsavo wilderness Kenya", "leoni mangiatori di uomini Tsavo", "safari Kenya Tsavo selvaggio",
    ],
    "akagera": [
      "parco nazionale Akagera Ruanda", "safari Akagera", "unico parco savana del Ruanda", "safari Akagera 2026", "big five Ruanda Akagera", "leoni Akagera", "safari Ruanda Akagera prezzi", "parco Akagera fauna selvatica", "safari savana Ruanda",
    ],
    "kigali": [
      "Kigali Ruanda cosa vedere", "Kigali capitale del Ruanda", "viaggio Kigali 2026", "memoriale del genocidio Kigali", "Kigali la città più pulita d'Africa", "cosa fare a Kigali", "safari da Kigali", "Kigali Ruanda viaggio", "tour della città di Kigali",
    ],
    "lake-kivu": [
      "lago Kivu Ruanda", "lago Kivu vacanza", "lago smeraldo Ruanda", "Lake Kivu 2026", "spiagge lago Kivu", "Gisenyi lago Kivu", "lago Kivu confine Congo", "relax sul lago Kivu Ruanda", "crociera lago Kivu",
    ],
    "nyungwe": [
      "foresta di Nyungwe Ruanda", "trekking scimpanzé Nyungwe", "ponte sospeso tra le chiome Nyungwe", "parco nazionale di Nyungwe", "safari primati Nyungwe 2026", "foresta pluviale Ruanda", "canopy walk Nyungwe", "13 specie di primati Nyungwe", "trekking nella foresta del Ruanda",
    ],
  },
  nl: {
    "serengeti": [
      "Serengeti safari boeken", "Serengeti Nationaal Park Tanzania", "Great Migration Serengeti", "Serengeti safari Tanzania 2026", "wildebeest trek Serengeti", "Serengeti big five safari", "beste tijd Serengeti safari", "Serengeti rondreis", "safari Serengeti prijzen", "Serengeti leeuwen safari",
    ],
    "ngorongoro": [
      "Ngorongoro krater safari", "Ngorongoro Conservation Area", "Ngorongoro krater Tanzania", "daguitstap Ngorongoro krater", "Ngorongoro safari 2026", "grootste vulkaankrater ter wereld", "Ngorongoro krater neushoorn", "Ngorongoro safari boeken", "Big Five Ngorongoro krater", "Ngorongoro krater rondreis",
    ],
    "tarangire": [
      "Tarangire Nationaal Park", "Tarangire safari Tanzania", "olifanten Tarangire", "baobab bomen Tanzania safari", "Tarangire safari 2026", "Tarangire Nationaal Park boeken", "Noord Tanzania safari Tarangire", "Tarangire rondreis", "Tarangire wildlife safari", "beste safaripark Tanzania olifanten",
    ],
    "manyara": [
      "Lake Manyara Nationaal Park", "boomklimmende leeuwen Tanzania", "Lake Manyara safari", "Manyara Tanzania flamingo's", "Lake Manyara Nationaal Park boeken", "Lake Manyara safari 2026", "Rift Valley meer Tanzania safari", "Lake Manyara vogels spotten", "Manyara safari daguitstap", "Lake Manyara rondreis Tanzania",
    ],
    "zanzibar": [
      "Zanzibar vakantie", "Zanzibar strand vakantie", "Stone Town Zanzibar", "Zanzibar snorkelen", "Zanzibar safari strandcombinatie", "Zanzibar vakantie 2026", "mooiste stranden Zanzibar", "Zanzibar specerijeneiland", "Tanzania strandvakantie", "Zanzibar rondreis boeken",
    ],
    "arusha": [
      "Arusha Tanzania", "Kilimanjaro beklimmen", "Arusha safari startpunt", "Kilimanjaro trekking 2026", "Arusha Nationaal Park", "vulkaan beklimmen Tanzania", "Arusha Kilimanjaro rondreis", "noordelijke circuit Tanzania safari", "Kilimanjaro beklimming prijzen", "Arusha safari vertrekpunt",
    ],
    "ruaha": [
      "Ruaha Nationaal Park", "Ruaha safari Tanzania", "grootste nationaal park Tanzania", "Ruaha wildlife safari", "Ruaha safari 2026", "olifanten Ruaha Nationaal Park", "afgelegen safari Tanzania Ruaha", "Ruaha safari boeken", "Zuid Tanzania safari", "Ruaha leeuwen safari",
    ],
    "nyerere": [
      "Nyerere Nationaal Park", "Selous wildreservaat Tanzania", "Nyerere safari boottocht", "grootste wildreservaat Afrika", "Nyerere safari 2026", "Rufiji rivier safari", "Nyerere Nationaal Park boeken", "Zuid Tanzania safari Selous", "wilde honden Nyerere Nationaal Park", "Nyerere safari rondreis",
    ],
    "mahale": [
      "Mahale Mountains chimpansees", "chimpansee trekking Tanzania", "Mahale Mountains Nationaal Park", "chimpansees spotten Tanzania", "Mahale safari 2026", "Tanganyikameer chimpansees", "Mahale Mountains boeken", "afgelegen chimpansee safari Tanzania", "Mahale trekking rondreis", "chimpansee safari Tanzania prijzen",
    ],
    "katavi": [
      "Katavi Nationaal Park", "laatste ongerepte wildernis Tanzania", "Katavi safari Tanzania", "Katavi Nationaal Park boeken", "Katavi safari 2026", "afgelegen safaripark Tanzania Katavi", "nijlpaarden Katavi Nationaal Park", "Katavi safari rondreis", "authentieke safari Tanzania Katavi", "Katavi wildlife safari",
    ],
    "gombe": [
      "Gombe Stream Nationaal Park", "Jane Goodall chimpansees", "chimpansee trekking Gombe", "Gombe Nationaal Park boeken", "Gombe safari 2026", "Tanganyikameer Gombe chimpansees", "chimpansees Tanzania Gombe Stream", "Gombe trekking rondreis", "kleinste nationaal park Tanzania", "Gombe chimpansee safari prijzen",
    ],
    "lake-victoria": [
      "Lake Victoria Tanzania", "Victoriameer rondreis", "grootste meer Afrika", "Victoriameer vissersdorpen", "Lake Victoria safari 2026", "Victoriameer eilanden Tanzania", "Victoriameer boottocht", "Lake Victoria Tanzania vakantie", "Victoriameer Mwanza", "Lake Victoria rondreis Tanzania",
    ],
    "masai-mara": [
      "Masai Mara safari", "Masai Mara Kenia", "Great Migration Masai Mara", "Masai Mara safari 2026", "rivieroversteek wildebeest Mara", "Masai Mara Nationaal Reservaat", "Masai Mara safari boeken", "beste tijd Masai Mara migratie", "Masai Mara big five safari", "Masai Mara rondreis Kenia",
    ],
    "volcanoes": [
      "Volcanoes National Park Rwanda", "gorilla trekking Rwanda", "berggorilla's bezoeken", "gorilla permit Rwanda 2026", "Volcanoes National Park safari", "gorilla trekking Rwanda boeken", "gouden apen Rwanda", "Dian Fossey gorilla's", "gorillasafari Afrika", "Rwanda gorilla trekking prijzen",
    ],
    "amboseli": [
      "Amboseli Nationaal Park", "olifanten Kilimanjaro Amboseli", "Amboseli safari Kenia", "Amboseli safari 2026", "Amboseli olifanten safari", "Amboseli Nationaal Park boeken", "mooiste uitzicht Kilimanjaro safari", "Amboseli rondreis Kenia", "Amboseli safari prijzen", "Kilimanjaro olifanten fotograferen",
    ],
    "kenyan-coast": [
      "Kenia kust vakantie", "Diani Beach Kenia", "Kenia strandvakantie", "Swahili cultuur Kenia kust", "Kenia kust safari combinatie", "Kenia kust vakantie 2026", "mooiste stranden Kenia", "Lamu eiland Kenia", "Mombasa strandvakantie", "Kenia rondreis strand",
    ],
    "lake-nakuru": [
      "Lake Nakuru Nationaal Park", "flamingo's Kenia meer", "neushoorn safari Kenia", "Lake Nakuru safari 2026", "Lake Nakuru Nationaal Park boeken", "flamingomeer Kenia", "Lake Nakuru neushoorn sanctuary", "Lake Nakuru rondreis Kenia", "Lake Nakuru safari daguitstap", "Rift Valley meer Kenia safari",
    ],
    "ol-pejeta": [
      "Ol Pejeta Conservancy", "laatste witte neushoorns", "Ol Pejeta safari Kenia", "Ol Pejeta Conservancy boeken", "Ol Pejeta safari 2026", "neushoorn sanctuary Kenia", "Ol Pejeta chimpansee sanctuary", "Ol Pejeta rondreis Kenia", "noordelijke witte neushoorn Kenia", "Ol Pejeta safari prijzen",
    ],
    "samburu": [
      "Samburu National Reserve", "Samburu safari Kenia", "zeldzame diersoorten Samburu", "Samburu safari 2026", "Samburu National Reserve boeken", "Noord Kenia safari Samburu", "Grevy zebra Samburu", "Samburu rondreis Kenia", "Samburu wildlife safari", "Samburu safari prijzen",
    ],
    "tsavo": [
      "Tsavo Nationaal Park", "Tsavo Oost West safari", "Tsavo safari Kenia", "grootste wildernis Kenia", "Tsavo safari 2026", "rode olifanten Tsavo", "Tsavo Nationaal Park boeken", "Tsavo rondreis Kenia", "Tsavo safari prijzen", "Tsavo wildlife safari",
    ],
    "akagera": [
      "Akagera Nationaal Park", "Akagera safari Rwanda", "enige savanne park Rwanda", "Akagera Nationaal Park boeken", "Akagera safari 2026", "Big Five Rwanda safari", "Akagera rondreis Rwanda", "Akagera wildlife safari", "Akagera safari prijzen", "Rwanda savanne safari",
    ],
    "kigali": [
      "Kigali Rwanda", "Kigali stadstour", "schoonste hoofdstad Afrika", "Kigali genocide memorial", "Kigali stedentrip 2026", "Kigali Rwanda vakantie", "Kigali stadswandeling", "Kigali rondreis Rwanda", "Kigali gorillasafari combinatie", "Kigali stedentrip Afrika",
    ],
    "lake-kivu": [
      "Lake Kivu Rwanda", "Kivumeer vakantie", "Kivumeer Congo grens", "Lake Kivu safari 2026", "Kivumeer eilanden Rwanda", "Kivumeer boottocht", "Lake Kivu rondreis Rwanda", "Kivumeer strand Rwanda", "Lake Kivu gorillasafari combinatie", "Kivumeer Gisenyi",
    ],
    "nyungwe": [
      "Nyungwe Forest Nationaal Park", "regenwoud Rwanda safari", "chimpansee trekking Nyungwe", "Nyungwe safari 2026", "canopy walk Nyungwe", "Nyungwe Forest boeken", "primaten Rwanda Nyungwe", "Nyungwe rondreis Rwanda", "Nyungwe National Park chimpansees", "oerwoud Rwanda trekking",
    ],
  },
  pt: {
    "serengeti": [
      "safári no Serengeti", "Parque Nacional do Serengeti", "grande migração do Serengeti", "Serengeti Tanzânia", "visitar o Serengeti", "safári de vida selvagem Serengeti", "reserva de caça Serengeti", "Serengeti Tanzânia 2026", "leões do Serengeti", "big five Serengeti",
    ],
    "ngorongoro": [
      "cratera do Ngorongoro", "safári na cratera de Ngorongoro", "Ngorongoro Tanzânia", "caldeira vulcânica Ngorongoro", "visitar a cratera de Ngorongoro", "área de conservação de Ngorongoro", "safári Ngorongoro 2026", "rinocerontes negros Ngorongoro", "tour cratera Ngorongoro", "Ngorongoro vida selvagem",
    ],
    "tarangire": [
      "Parque Nacional de Tarangire", "safári em Tarangire", "elefantes de Tarangire", "baobás de Tarangire", "Tarangire Tanzânia", "visitar Tarangire", "safári de elefantes Tanzânia", "Tarangire 2026", "tour Tarangire", "vida selvagem Tarangire",
    ],
    "manyara": [
      "Lago Manyara", "Parque Nacional do Lago Manyara", "leões nas árvores Lago Manyara", "safári Lago Manyara", "leões que sobem em árvores Tanzânia", "vale do Rift Tanzânia safári", "visitar Lago Manyara", "Lago Manyara Tanzânia 2026", "flamingos Lago Manyara", "tour Lago Manyara",
    ],
    "zanzibar": [
      "férias em Zanzibar", "praias de Zanzibar", "Stone Town Zanzibar", "mergulho em Zanzibar", "safári e praia Zanzibar", "Zanzibar 2026", "guia de viagem Zanzibar", "melhores praias de Zanzibar", "ilha das especiarias Zanzibar", "férias na praia Tanzânia",
    ],
    "arusha": [
      "Arusha Tanzânia", "Monte Kilimanjaro", "escalar o Kilimanjaro", "circuito norte Tanzânia safári", "Arusha porta de entrada safári", "trilha do Kilimanjaro 2026", "tour Arusha", "safári saindo de Arusha", "Kilimanjaro trekking", "visitar Arusha",
    ],
    "ruaha": [
      "Parque Nacional de Ruaha", "safári em Ruaha", "Ruaha Tanzânia", "maior parque da Tanzânia", "safári remoto Tanzânia", "visitar Ruaha", "leões de Ruaha", "Ruaha 2026", "safári selvagem Tanzânia", "tour Ruaha",
    ],
    "nyerere": [
      "Parque Nacional de Nyerere", "reserva de Selous", "safári de barco Selous", "maior reserva de caça da África", "Nyerere Tanzânia", "safári Nyerere 2026", "cães selvagens africanos Nyerere", "visitar Nyerere Selous", "safári fluvial Tanzânia", "tour Selous Nyerere",
    ],
    "mahale": [
      "Montanhas Mahale", "trekking de chimpanzés Mahale", "chimpanzés na Tanzânia", "Mahale Tanzânia", "safári de chimpanzés", "Parque Nacional das Montanhas Mahale", "visitar Mahale", "Mahale 2026", "lago Tanganica chimpanzés", "tour chimpanzés Tanzânia",
    ],
    "katavi": [
      "Parque Nacional de Katavi", "Katavi Tanzânia", "última selva intocada da Tanzânia", "safári remoto Katavi", "visitar Katavi", "hipopótamos Katavi", "Katavi 2026", "safári selvagem e isolado Tanzânia", "tour Katavi", "vida selvagem Katavi",
    ],
    "gombe": [
      "Parque Nacional de Gombe", "chimpanzés de Jane Goodall", "trekking de chimpanzés Gombe", "Gombe Stream Tanzânia", "visitar Gombe", "lago Tanganica Gombe", "Gombe 2026", "safári de chimpanzés Gombe", "tour Gombe Stream", "reserva de chimpanzés Tanzânia",
    ],
    "lake-victoria": [
      "Lago Vitória", "maior lago da África", "Lago Vitória Tanzânia", "visitar o Lago Vitória", "ilhas do Lago Vitória", "pesca no Lago Vitória", "cruzeiro Lago Vitória", "Lago Vitória 2026", "tour Lago Vitória", "safári e Lago Vitória",
    ],
    "masai-mara": [
      "Masai Mara safári", "grande migração Masai Mara", "Masai Mara Quênia", "travessia do rio Mara", "visitar Masai Mara", "safári no Quênia Masai Mara", "reserva Masai Mara", "Masai Mara 2026", "leões Masai Mara", "tour Masai Mara",
    ],
    "volcanoes": [
      "Parque Nacional dos Vulcões Ruanda", "trekking de gorilas em Ruanda", "safári de gorilas da montanha", "permissão para gorilas Ruanda 2026", "rastreamento de gorilas Ruanda", "macacos dourados Ruanda", "Dian Fossey gorilas", "safári de gorilas África", "trekking de primatas Ruanda", "Parque dos Vulcões safári",
    ],
    "amboseli": [
      "Parque Nacional Amboseli", "elefantes do Amboseli", "Amboseli e Kilimanjaro", "safári Amboseli Quênia", "visitar Amboseli", "Amboseli 2026", "elefantes com Kilimanjaro ao fundo", "tour Amboseli", "safári de elefantes Quênia", "reserva Amboseli",
    ],
    "kenyan-coast": [
      "costa do Quênia", "praias de Mombaça", "férias na costa do Quênia", "Diani Beach Quênia", "praias do Quênia 2026", "cultura suaíli costa do Quênia", "mergulho costa do Quênia", "safári e praia Quênia", "visitar Mombaça", "praias de areia branca Quênia",
    ],
    "lake-nakuru": [
      "Lago Nakuru", "Parque Nacional do Lago Nakuru", "flamingos Lago Nakuru", "rinocerontes Lago Nakuru", "visitar Lago Nakuru", "santuário de rinocerontes Quênia", "safári Lago Nakuru 2026", "tour Lago Nakuru", "aves do Lago Nakuru", "safári de flamingos Quênia",
    ],
    "ol-pejeta": [
      "Conservância Ol Pejeta", "últimos rinocerontes brancos do norte", "Ol Pejeta Quênia", "santuário de rinocerontes Ol Pejeta", "visitar Ol Pejeta", "safári Ol Pejeta 2026", "chimpanzés Ol Pejeta", "tour conservância Quênia", "rinoceronte branco do norte Quênia", "safári de conservação Quênia",
    ],
    "samburu": [
      "Reserva Nacional de Samburu", "Samburu Quênia", "espécies raras Samburu", "safári em Samburu", "visitar Samburu", "Samburu 2026", "girafa reticulada Samburu", "tour Samburu Quênia", "safári deserto Quênia", "vida selvagem árida Samburu",
    ],
    "tsavo": [
      "Parque Nacional de Tsavo", "Tsavo Leste e Oeste", "maior reserva selvagem do Quênia", "safári em Tsavo", "elefantes vermelhos de Tsavo", "visitar Tsavo", "Tsavo 2026", "tour Tsavo Quênia", "leões de Tsavo", "safári Tsavo Quênia",
    ],
    "akagera": [
      "Parque Nacional de Akagera", "safári em Ruanda Akagera", "único parque de savana de Ruanda", "visitar Akagera", "big five Ruanda Akagera", "Akagera 2026", "tour Akagera Ruanda", "safári de savana Ruanda", "leões de Akagera", "reserva Akagera",
    ],
    "kigali": [
      "Kigali Ruanda", "visitar Kigali", "capital mais limpa da África", "memorial do genocídio Kigali", "tour Kigali", "Kigali 2026", "o que fazer em Kigali", "viagem a Kigali Ruanda", "cidade de Kigali", "Kigali guia de viagem",
    ],
    "lake-kivu": [
      "Lago Kivu", "Lago Kivu Ruanda", "praias do Lago Kivu", "visitar o Lago Kivu", "lago esmeralda Ruanda", "Lago Kivu 2026", "cruzeiro Lago Kivu", "tour Lago Kivu", "férias no Lago Kivu", "fronteira Congo Lago Kivu",
    ],
    "nyungwe": [
      "Floresta de Nyungwe", "Parque Nacional da Floresta de Nyungwe", "trekking de chimpanzés Nyungwe", "macacos de Nyungwe", "visitar Nyungwe", "Nyungwe 2026", "floresta tropical Ruanda", "passarela das copas das árvores Nyungwe", "tour Nyungwe Ruanda", "primatas de Nyungwe",
    ],
  },
  ja: {
    "serengeti": [
      "セレンゲティ国立公園 ツアー", "セレンゲティ サファリ 個人旅行", "セレンゲティ 大移動 時期", "セレンゲティ ライオン 目撃", "タンザニア サファリ おすすめ", "セレンゲティ国立公園 世界遺産", "セレンゲティ サファリ 2026年", "セレンゲティ 気球サファリ 料金", "セレンゲティ ベストシーズン いつ", "セレンゲティ ビッグファイブ",
    ],
    "ngorongoro": [
      "ンゴロンゴロ クレーター ツアー", "ンゴロンゴロ保全地域 世界遺産", "ンゴロンゴロ クレーター 日帰り サファリ", "ンゴロンゴロ クレーター 野生動物", "タンザニア ンゴロンゴロ 行き方", "ンゴロンゴロ サファリ 2026年", "ンゴロンゴロ クレーター 絶景", "ンゴロンゴロ ビッグファイブ", "ンゴロンゴロ ロッジ おすすめ", "ンゴロンゴロ 標高 気温",
    ],
    "tarangire": [
      "タランギーレ国立公園 サファリ", "タランギーレ 象の群れ", "タランギーレ バオバブの木", "タランギーレ国立公園 ツアー", "タランギーレ サファリ おすすめ", "タンザニア タランギーレ 行き方", "タランギーレ バードウォッチング", "タランギーレ サファリ 2027年", "タランギーレ ンゴロンゴロ 組み合わせ", "タランギーレ ベストシーズン",
    ],
    "manyara": [
      "マニヤラ湖国立公園 サファリ", "マニヤラ湖 木登りライオン", "マニヤラ湖 フラミンゴ", "タンザニア マニヤラ湖 ツアー", "マニヤラ湖国立公園 野生動物", "マニヤラ湖 バードウォッチング", "マニヤラ湖 サファリ 日帰り", "マニヤラ湖 リフトバレー 絶景", "マニヤラ湖 サファリ 2026年", "マニヤラ湖 アルーシャから",
    ],
    "zanzibar": [
      "ザンジバル島 旅行", "ザンジバル ビーチ リゾート", "ストーンタウン ザンジバル 観光", "ザンジバル ハネムーン", "ザンジバル サファリ ビーチ 組み合わせ", "ザンジバル シュノーケリング", "ザンジバル島 行き方", "ザンジバル 旅行 2026年", "ザンジバル スパイスツアー", "タンザニア ビーチ 旅行 おすすめ",
    ],
    "arusha": [
      "アルーシャ キリマンジャロ 観光", "アルーシャ サファリ 拠点", "タンザニア アルーシャ 空港", "アルーシャ ホテル おすすめ", "キリマンジャロ 登山 ツアー", "アルーシャから セレンゲティ", "アルーシャ 市内観光", "タンザニア 北部サーキット サファリ", "アルーシャ サファリ 出発 2026年", "アルーシャ 治安",
    ],
    "ruaha": [
      "ルアハ国立公園 サファリ", "ルアハ国立公園 ライオン", "タンザニア 穴場 サファリ", "ルアハ国立公園 アクセス", "ルアハ サファリ 秘境", "ルアハ国立公園 バオバブ", "タンザニア南部 サファリ ツアー", "ルアハ サファリ 2027年", "ルアハ国立公園 象", "ルアハ ベストシーズン",
    ],
    "nyerere": [
      "ニエレレ国立公園 サファリ", "セルース動物保護区 サファリ", "ニエレレ国立公園 ボートサファリ", "タンザニア南部 サファリ おすすめ", "ニエレレ国立公園 野生動物", "セルース ニエレレ 国立公園 違い", "ニエレレ国立公園 ウォーキングサファリ", "ニエレレ国立公園 アクセス", "ニエレレ サファリ 2026年", "ニエレレ国立公園 ルフィジ川",
    ],
    "mahale": [
      "マハレ山塊国立公園 チンパンジー", "マハレ チンパンジートレッキング", "タンガニーカ湖 マハレ", "マハレ国立公園 アクセス方法", "マハレ 秘境 サファリ", "マハレ山塊 ツアー", "マハレ チンパンジー 生息地", "マハレ 国立公園 2027年", "マハレ ビーチ 湖畔", "マハレ 野生チンパンジー 観察",
    ],
    "katavi": [
      "カタヴィ国立公園 サファリ", "カタヴィ国立公園 秘境", "タンザニア 最後の秘境 サファリ", "カタヴィ国立公園 カバ", "カタヴィ国立公園 アクセス", "カタヴィ 手つかずの自然", "カタヴィ サファリ ツアー", "カタヴィ 国立公園 2026年", "カタヴィ国立公園 野生動物", "カタヴィ ベストシーズン",
    ],
    "gombe": [
      "ゴンベ国立公園 チンパンジー", "ジェーン・グドール ゴンベ", "ゴンベストリーム国立公園 トレッキング", "タンガニーカ湖 ゴンベ", "ゴンベ国立公園 アクセス", "ゴンベ チンパンジー研究", "ゴンベ国立公園 ツアー", "ゴンベ サファリ 2027年", "ゴンベ国立公園 野生動物", "キゴマ ゴンベ 行き方",
    ],
    "lake-victoria": [
      "ビクトリア湖 観光", "ビクトリア湖 タンザニア", "アフリカ最大の湖 ビクトリア湖", "ビクトリア湖 クルーズ", "ビクトリア湖 ムワンザ", "ビクトリア湖 フェリー", "ビクトリア湖 バードウォッチング", "ビクトリア湖 旅行 2026年", "ビクトリア湖 サファリ 組み合わせ", "ビクトリア湖 島 観光",
    ],
    "masai-mara": [
      "マサイマラ サファリ ツアー", "マサイマラ 大移動 川渡り", "マサイマラ国立保護区 ベストシーズン", "ケニア サファリ おすすめ", "マサイマラ ライオン 目撃", "マサイマラ 気球サファリ", "マサイマラ サファリ 2026年", "マサイマラ マサイ族 訪問", "マサイマラ ロッジ おすすめ", "マサイマラ 行き方 ナイロビから",
    ],
    "volcanoes": [
      "ボルケーノズ国立公園 ゴリラトレッキング", "ルワンダ マウンテンゴリラ ツアー", "ルワンダ ゴリラ パーミット 料金", "ゴリラトレッキング ルワンダ 2026年", "ダイアン・フォッシー ゴリラ", "ルワンダ ゴリラ許可証 2027年", "ゴールデンモンキー ルワンダ", "マウンテンゴリラ 生息地 ルワンダ", "ボルケーノズ国立公園 アクセス", "ゴリラトレッキング 服装 持ち物",
    ],
    "amboseli": [
      "アンボセリ国立公園 サファリ", "アンボセリ キリマンジャロ 象", "ケニア アンボセリ ツアー", "アンボセリ国立公園 ベストシーズン", "アンボセリ サファリ 2026年", "アンボセリ 野生の象 群れ", "アンボセリ国立公園 アクセス ナイロビから", "アンボセリ サファリ おすすめ", "アンボセリ ロッジ 絶景", "アンボセリ マサイ族 文化",
    ],
    "kenyan-coast": [
      "ケニア 海岸 リゾート", "モンバサ ビーチ 旅行", "ケニア海岸 サファリ ビーチ 組み合わせ", "ラム島 スワヒリ文化", "ケニア ビーチ 旅行 おすすめ", "モンバサ 観光 2026年", "ケニア海岸 シュノーケリング", "ディアニビーチ ケニア", "ケニア 海岸 ハネムーン", "ケニア サファリ ビーチ 2027年",
    ],
    "lake-nakuru": [
      "ナクル湖国立公園 フラミンゴ", "ナクル湖 サイ 保護区", "ケニア ナクル湖 ツアー", "ナクル湖国立公園 バードウォッチング", "ナクル湖 サファリ 日帰り", "ナクル湖 クロサイ 目撃", "ナクル湖国立公園 アクセス", "ナクル湖 サファリ 2026年", "ナクル湖 ベストシーズン", "ナクル湖 野生動物 観察",
    ],
    "ol-pejeta": [
      "オルペジェタ動物保護区 サファリ", "オルペジェタ キタシロサイ", "ケニア オルペジェタ ツアー", "オルペジェタ保護区 チンパンジー", "オルペジェタ 世界最後のサイ", "オルペジェタ サファリ 2027年", "オルペジェタ アクセス ナイロビから", "オルペジェタ保護区 ナイトゲームドライブ", "オルペジェタ保護区 野生動物保護", "オルペジェタ サファリ おすすめ",
    ],
    "samburu": [
      "サンブル国立保護区 サファリ", "サンブル 珍しい野生動物", "ケニア サンブル ツアー", "サンブル国立保護区 グレービーシマウマ", "サンブル 北部ケニア サファリ", "サンブル保護区 アクセス", "サンブル サファリ 2026年", "サンブル国立保護区 象", "サンブル マサイ族 文化", "サンブル ベストシーズン",
    ],
    "tsavo": [
      "ツァボ国立公園 サファリ", "ツァボ東 ツァボ西 違い", "ケニア ツァボ ツアー", "ツァボ国立公園 赤い象", "ツァボ サファリ 2027年", "ツァボ国立公園 アクセス モンバサから", "ツァボ国立公園 ライオン", "ツァボ ケニア最大の国立公園", "ツァボ サファリ おすすめ", "ツァボ国立公園 野生動物",
    ],
    "akagera": [
      "アカゲラ国立公園 サファリ", "ルワンダ サバンナ サファリ", "アカゲラ国立公園 ライオン再導入", "ルワンダ アカゲラ ツアー", "アカゲラ国立公園 アクセス", "アカゲラ国立公園 ボートサファリ", "アカゲラ サファリ 2026年", "アカゲラ国立公園 野生動物", "ルワンダ サファリ おすすめ", "アカゲラ ベストシーズン",
    ],
    "kigali": [
      "キガリ 観光", "ルワンダ キガリ 旅行", "キガリ ジェノサイド記念館", "キガリ 世界一清潔な首都", "キガリ 市内観光 おすすめ", "キガリ ホテル おすすめ", "キガリ ゴリラトレッキング 拠点", "キガリ 旅行 2026年", "キガリ空港 アクセス", "キガリ グルメ カフェ",
    ],
    "lake-kivu": [
      "キブ湖 観光", "ルワンダ キブ湖 リゾート", "キブ湖 コンゴ国境", "キブ湖 ボートツアー", "キブ湖 ビーチ 旅行", "キブ湖 ギセニ 観光", "キブ湖 旅行 2027年", "キブ湖 ゴリラトレッキング 組み合わせ", "キブ湖 絶景 リゾート", "キブ湖 コーヒー農園 見学",
    ],
    "nyungwe": [
      "ニュングウェ森林国立公園 チンパンジー", "ニュングウェの森 キャノピーウォーク", "ルワンダ ニュングウェ ツアー", "ニュングウェ国立公園 霊長類", "ニュングウェの森 トレッキング", "ニュングウェ国立公園 アクセス", "ニュングウェ サファリ 2026年", "ニュングウェ 原生林 観光", "ニュングウェ国立公園 バードウォッチング", "ニュングウェの森 ベストシーズン",
    ],
  },
  ko: {
    "serengeti": [
      "세렝게티 사파리 투어", "세렝게티 국립공원 여행", "세렝게티 대이동 사파리", "탄자니아 세렝게티 패키지", "세렝게티 사파리 가격", "세렝게티 빅5 사파리", "세렝게티 사파리 2026", "세렝게티 캠핑 사파리", "세렝게티 사자 관찰", "아프리카 세렝게티 여행 추천",
    ],
    "ngorongoro": [
      "응고롱고로 분화구 사파리", "응고롱고로 크레이터 투어", "탄자니아 응고롱고로 여행", "응고롱고로 사파리 코스", "응고롱고로 분화구 당일투어", "응고롱고로 검은코뿔소 관찰", "응고롱고로 사파리 가격", "응고롱고로 세렝게티 연계 패키지", "응고롱고로 사파리 2026", "세계 최대 분화구 사파리 투어",
    ],
    "tarangire": [
      "타랑기레 국립공원 사파리", "타랑기레 바오밥나무 투어", "타랑기레 코끼리 사파리", "탄자니아 타랑기레 여행", "타랑기레 사파리 코스", "타랑기레 사파리 가격", "타랑기레 세렝게티 연계 사파리", "타랑기레 야생동물 관찰 투어", "타랑기레 사파리 2026", "탄자니아 코끼리 서식지 사파리",
    ],
    "manyara": [
      "마냐라 호수 국립공원 사파리", "마냐라 나무 오르는 사자", "탄자니아 마냐라 호수 투어", "마냐라 호수 사파리 코스", "마냐라 홍학 관찰 투어", "마냐라 사파리 당일치기", "마냐라 국립공원 여행", "마냐라 사파리 가격", "리프트밸리 마냐라 사파리", "마냐라 사파리 2026",
    ],
    "zanzibar": [
      "잔지바르 여행 코스", "잔지바르 신혼여행 패키지", "잔지바르 스톤타운 투어", "잔지바르 해변 휴양", "잔지바르 스노클링 투어", "탄자니아 잔지바르 자유여행", "잔지바르 사파리 연계 여행", "잔지바르 향신료 농장 투어", "잔지바르 여행 2026", "잔지바르 리조트 추천",
    ],
    "arusha": [
      "아루샤 여행 가이드", "아루샤 킬리만자로 등반", "아루샤 사파리 출발지", "탄자니아 아루샤 숙소 추천", "아루샤 공항 사파리 패키지", "킬리만자로 트레킹 코스", "아루샤 사파리 투어 예약", "아루샤 시내 관광", "북부 서킷 사파리 아루샤", "아루샤 여행 2026",
    ],
    "ruaha": [
      "루아하 국립공원 사파리", "탄자니아 루아하 여행", "루아하 사파리 오지 여행", "루아하 사자 무리 관찰", "루아하 국립공원 투어", "루아하 사파리 가격", "남부 탄자니아 사파리 루아하", "루아하 캠핑 사파리", "루아하 소수정예 사파리", "루아하 사파리 2027",
    ],
    "nyerere": [
      "니에레레 국립공원 사파리", "셀루스 게임리저브 투어", "탄자니아 니에레레 사파리", "니에레레 보트 사파리", "셀루스 야생동물 보호구역 여행", "니에레레 사파리 가격", "남부 탄자니아 셀루스 여행", "니에레레 국립공원 캠핑", "아프리카 최대 야생보호구역 사파리", "니에레레 사파리 2026",
    ],
    "mahale": [
      "마할레 산맥 침팬지 트레킹", "마할레 국립공원 여행", "탄자니아 침팬지 트레킹 투어", "마할레 침팬지 관찰", "마할레 탕가니카 호수 여행", "마할레 트레킹 가격", "마할레 오지 사파리", "마할레 국립공원 가는 법", "마할레 침팬지 여행 2026", "아프리카 침팬지 트레킹 추천",
    ],
    "katavi": [
      "카타비 국립공원 사파리", "탄자니아 카타비 여행", "카타비 사파리 오지 여행", "카타비 하마 관찰 투어", "카타비 국립공원 캠핑 사파리", "카타비 사파리 가격", "미개척 탄자니아 사파리 카타비", "카타비 소수정예 사파리 투어", "카타비 사파리 2027", "탄자니아 마지막 야생 사파리",
    ],
    "gombe": [
      "곰베 스트림 국립공원 침팬지", "곰베 침팬지 트레킹 투어", "탄자니아 곰베 여행", "제인 구달 곰베 침팬지 투어", "곰베 국립공원 방문 방법", "곰베 침팬지 트레킹 가격", "탕가니카 호수 곰베 사파리", "곰베 침팬지 투어 2026", "곰베 국립공원 소수정예 트레킹", "아프리카 침팬지 서식지 여행",
    ],
    "lake-victoria": [
      "빅토리아 호수 여행", "탄자니아 빅토리아 호수 투어", "아프리카 최대 호수 여행", "빅토리아 호수 크루즈", "빅토리아 호수 낚시 투어", "빅토리아 호수 섬 여행", "빅토리아 호수 사파리 연계 여행", "빅토리아 호수 여행 코스", "빅토리아 호수 여행 2026", "무완자 빅토리아 호수 여행",
    ],
    "masai-mara": [
      "마사이마라 사파리 투어", "마사이마라 대이동 관찰", "케냐 마사이마라 여행", "마사이마라 사파리 가격", "마사이마라 열기구 사파리", "마사이마라 강 건너기 대이동", "마사이마라 사파리 패키지", "마사이마라 사파리 2026", "케냐 사파리 추천", "마사이마라 롯지 예약",
    ],
    "volcanoes": [
      "르완다 고릴라 트레킹", "화산 국립공원 고릴라 투어", "르완다 고릴라 트레킹 허가증", "마운틴고릴라 트레킹 가격", "르완다 골든몽키 트레킹", "다이앤 포시 고릴라 투어", "르완다 고릴라 사파리 2026", "화산 국립공원 트레킹 코스", "아프리카 고릴라 트레킹 투어", "르완다 고릴라 트레킹 예약",
    ],
    "amboseli": [
      "암보셀리 국립공원 사파리", "킬리만자로 배경 코끼리 사파리", "케냐 암보셀리 여행", "암보셀리 사파리 가격", "암보셀리 코끼리 관찰 투어", "암보셀리 사파리 패키지", "암보셀리 국립공원 투어 2026", "케냐 코끼리 서식지 여행", "암보셀리 마사이 마을 투어", "암보셀리 사진 사파리",
    ],
    "kenyan-coast": [
      "케냐 해안 여행", "몸바사 해변 휴양", "케냐 해변 사파리 연계 여행", "라무 섬 스와힐리 문화 투어", "케냐 다이아니 비치 여행", "케냐 해안 리조트 추천", "케냐 해변 신혼여행", "케냐 해안 여행 2026", "스와힐리 문화 체험 케냐", "케냐 사파리 해변 패키지",
    ],
    "lake-nakuru": [
      "나쿠루 호수 국립공원 사파리", "나쿠루 홍학 관찰 투어", "케냐 나쿠루 호수 여행", "나쿠루 코뿔소 보호구역", "나쿠루 호수 사파리 당일투어", "나쿠루 호수 사파리 가격", "나쿠루 국립공원 사파리 2026", "나쿠루 조류 관찰 여행", "케냐 코뿔소 사파리", "나쿠루 사파리 코스",
    ],
    "ol-pejeta": [
      "올페제타 보호구역 사파리", "마지막 북부흰코뿔소 투어", "케냐 올페제타 코뿔소 여행", "올페제타 사파리 가격", "올페제타 침팬지 보호구역", "올페제타 야간 사파리", "올페제타 보호구역 투어 2026", "케냐 코뿔소 보호구역 여행", "올페제타 사파리 코스", "올페제타 자전거 사파리",
    ],
    "samburu": [
      "삼부루 국립보호구역 사파리", "삼부루 희귀동물 사파리", "케냐 삼부루 여행", "삼부루 그레비얼룩말 관찰", "삼부루 사파리 가격", "삼부루 국립보호구역 투어 2026", "삼부루 부족 문화 체험", "케냐 북부 사파리 삼부루", "삼부루 사파리 코스", "삼부루 야생동물 투어",
    ],
    "tsavo": [
      "차보 국립공원 사파리", "차보 이스트 웨스트 투어", "케냐 차보 여행", "차보 붉은코끼리 관찰", "차보 사파리 가격", "차보 국립공원 사파리 2026", "케냐 최대 사파리 차보", "차보 사파리 코스", "차보 야생동물 보호구역 투어", "차보 사파리 패키지",
    ],
    "akagera": [
      "아카게라 국립공원 사파리", "르완다 아카게라 여행", "아카게라 사바나 사파리", "아카게라 사파리 가격", "르완다 유일 사바나 국립공원", "아카게라 보트 사파리", "아카게라 국립공원 투어 2026", "르완다 사파리 추천", "아카게라 야생동물 관찰", "아카게라 사파리 코스",
    ],
    "kigali": [
      "키갈리 여행 가이드", "르완다 키갈리 시내 투어", "키갈리 대학살 기념관 방문", "키갈리 여행 코스", "르완다 키갈리 숙소 추천", "키갈리 경유 고릴라 트레킹", "키갈리 여행 2026", "아프리카에서 가장 깨끗한 도시 키갈리", "키갈리 시티투어", "키갈리 공항 사파리 연계",
    ],
    "lake-kivu": [
      "키부 호수 여행", "르완다 키부 호수 리조트", "키부 호수 고릴라 트레킹 연계", "키부 호수 크루즈 투어", "키부 호수 휴양 여행", "콩고 국경 키부 호수 여행", "키부 호수 여행 2026", "르완다 호수 여행 추천", "키부 호수 커피농장 투어", "키부 호수 사파리 연계 여행",
    ],
    "nyungwe": [
      "니융웨 숲 국립공원 트레킹", "르완다 침팬지 트레킹 니융웨", "니융웨 캐노피워크 투어", "니융웨 숲 사파리 가격", "니융웨 원시림 트레킹", "니융웨 국립공원 투어 2026", "르완다 영장류 트레킹 니융웨", "니융웨 숲 고릴라 트레킹 연계", "니융웨 열대우림 여행", "니융웨 트레킹 코스",
    ],
  },
  ar: {
    "serengeti": [
      "سفاري السيرينجيتي تنزانيا", "حجز رحلة سفاري السيرينجيتي 2026", "هجرة الحيوانات في السيرينجيتي", "أفضل وقت لزيارة السيرينجيتي", "جولة سفاري في حديقة السيرينجيتي الوطنية", "مشاهدة الأسود في السيرينجيتي", "برنامج سفاري السيرينجيتي 7 أيام", "رحلة السيرينجيتي وسط تنزانيا", "تكلفة سفاري السيرينجيتي", "سفاري السيرينجيتي 2027",
    ],
    "ngorongoro": [
      "فوهة نجورونجورو تنزانيا", "سفاري فوهة نجورونجورو", "حجز رحلة إلى فوهة البركان نجورونجورو", "أفضل وقت لزيارة نجورونجورو", "جولة سفاري نجورونجورو ليوم كامل", "مشاهدة وحيد القرن في نجورونجورو", "سفاري نجورونجورو والسيرينجيتي معا", "محمية نجورونجورو للمحافظة على الحياة البرية", "سفاري نجورونجورو 2026", "برنامج سياحي فوهة نجورونجورو تنزانيا",
    ],
    "tarangire": [
      "حديقة تارانجيري الوطنية تنزانيا", "سفاري الفيلة في تارانجيري", "أشجار الباوباب في تارانجيري", "جولة سفاري تارانجيري تنزانيا", "حجز رحلة سفاري تارانجيري 2026", "أفضل وقت لزيارة تارانجيري", "مشاهدة قطعان الفيلة في تارانجيري", "سفاري الدائرة الشمالية تنزانيا", "سفاري تارانجيري ونجورونجورو", "رحلة سفاري تارانجيري 2027",
    ],
    "manyara": [
      "بحيرة مانيارا الوطنية تنزانيا", "الأسود المتسلقة للأشجار في مانيارا", "سفاري بحيرة مانيارا", "جولة يوم واحد في مانيارا", "حجز سفاري بحيرة مانيارا 2026", "مشاهدة الطيور في بحيرة مانيارا", "سفاري وادي الصدع العظيم تنزانيا", "أفضل وقت لزيارة بحيرة مانيارا", "سفاري مانيارا وتارانجيري ونجورونجورو", "رحلة سفاري مانيارا 2027",
    ],
    "zanzibar": [
      "جزيرة زنجبار تنزانيا", "شواطئ زنجبار", "حجز فندق في زنجبار 2026", "برنامج سياحي زنجبار وسفاري تنزانيا", "مدينة ستون تاون زنجبار", "سفاري وشاطئ زنجبار", "أفضل شواطئ زنجبار للعائلات", "رحلة شهر العسل زنجبار", "الغطس في زنجبار", "عروض زنجبار 2027",
    ],
    "arusha": [
      "مدينة أروشا تنزانيا", "بوابة الدائرة الشمالية للسفاري تنزانيا", "تسلق جبل كليمنجارو من أروشا", "فنادق أروشا قبل السفاري", "مطار كليمنجارو الدولي أروشا", "برنامج سفاري يبدأ من أروشا 2026", "جولة سياحية في أروشا تنزانيا", "سفاري أروشا وكليمنجارو", "أفضل شركات سفاري في أروشا", "رحلة أروشا 2027",
    ],
    "ruaha": [
      "حديقة رواها الوطنية تنزانيا", "سفاري رواها جنوب تنزانيا", "أكبر حديقة وطنية في تنزانيا رواها", "سفاري بعيد عن الزحام السياحي رواها", "مشاهدة الأسود في رواها", "حجز سفاري رواها 2026", "سفاري تنزانيا الجنوبية رواها", "جولة سفاري خاصة في رواها", "أفضل وقت لزيارة رواها", "رحلة سفاري رواها 2027",
    ],
    "nyerere": [
      "محمية نيريري سيلوس تنزانيا", "أكبر محمية للحياة البرية في أفريقيا نيريري", "سفاري بالقارب في نهر روفيجي", "حجز سفاري نيريري سيلوس 2026", "سفاري تنزانيا الجنوبية نيريري", "مشاهدة الكلاب البرية في نيريري", "جولة سفاري نيريري بعيدة عن الزحام", "رحلة سفاري نيريري سيلوس 2027", "سفاري نهر روفيجي تنزانيا", "أفضل وقت لزيارة محمية نيريري",
    ],
    "mahale": [
      "جبال ماهالي تنزانيا", "تتبع الشمبانزي في ماهالي", "سفاري القردة العليا تنزانيا ماهالي", "حجز رحلة تتبع الشمبانزي 2026", "بحيرة تنجانيقا وجبال ماهالي", "سفاري بري نائي في ماهالي", "أفضل وقت لتتبع الشمبانزي في ماهالي", "رحلة مشاهدة الشمبانزي 2027", "جولة سفاري ماهالي الحصرية", "سفاري ماهالي وبحيرة تنجانيقا",
    ],
    "katavi": [
      "حديقة كاتافي الوطنية تنزانيا", "سفاري البرية الحقيقية الأخيرة كاتافي", "مشاهدة أفراس النهر في كاتافي", "سفاري تنزانيا النائية كاتافي", "حجز رحلة سفاري كاتافي 2026", "جولة سفاري خاصة في كاتافي", "أقل الحدائق ازدحاما في تنزانيا", "أفضل وقت لزيارة حديقة كاتافي", "رحلة سفاري كاتافي 2027", "سفاري المياه الموسمية كاتافي",
    ],
    "gombe": [
      "حديقة جومبي ستريم تنزانيا", "تتبع شمبانزي جين غودال في جومبي", "سفاري بحيرة تنجانيقا وجومبي", "حجز رحلة تتبع الشمبانزي في جومبي 2026", "أصغر حديقة وطنية في تنزانيا جومبي", "جولة قصيرة لمشاهدة الشمبانزي", "أفضل وقت لزيارة جومبي ستريم", "رحلة سفاري جومبي 2027", "سفاري القردة العليا غرب تنزانيا", "مشاهدة الشمبانزي البرية في جومبي",
    ],
    "lake-victoria": [
      "بحيرة فيكتوريا أفريقيا", "أكبر بحيرة في أفريقيا فيكتوريا", "سفاري وجولة بحيرة فيكتوريا تنزانيا", "رحلة قوارب في بحيرة فيكتوريا", "حجز جولة بحيرة فيكتوريا 2026", "مدينة موانزا بحيرة فيكتوريا", "سياحة صيد الأسماك في بحيرة فيكتوريا", "أفضل وقت لزيارة بحيرة فيكتوريا", "جزر بحيرة فيكتوريا تنزانيا", "رحلة بحيرة فيكتوريا 2027",
    ],
    "masai-mara": [
      "محمية ماساي مارا كينيا", "عبور نهر مارا في هجرة الحيوانات", "سفاري ماساي مارا كينيا", "حجز رحلة سفاري ماساي مارا 2026", "أفضل وقت لمشاهدة الهجرة الكبرى في مارا", "جولة سفاري بالمنطاد في ماساي مارا", "قرية الماساي التقليدية كينيا", "سفاري ماساي مارا وحديقة أمبوسيلي", "رحلة سفاري ماساي مارا 2027", "مشاهدة الأسود في ماساي مارا",
    ],
    "volcanoes": [
      "تتبع الغوريلا في رواندا", "حديقة البراكين الوطنية رواندا", "تصريح تتبع الغوريلا رواندا 2026", "سفاري تتبع غوريلا الجبل رواندا", "حجز رحلة تتبع الغوريلا 2027", "قرود ديان فوسي رواندا", "القرود الذهبية في حديقة البراكين", "أفضل وقت لتتبع الغوريلا في رواندا", "سعر تصريح الغوريلا في رواندا", "سفاري غوريلا فاخر رواندا",
    ],
    "amboseli": [
      "حديقة أمبوسيلي الوطنية كينيا", "الفيلة تحت جبل كليمنجارو أمبوسيلي", "سفاري أمبوسيلي كينيا", "حجز رحلة سفاري أمبوسيلي 2026", "أفضل مكان لتصوير الفيلة وكليمنجارو", "جولة سفاري أمبوسيلي وماساي مارا", "مشاهدة الفيلة في أمبوسيلي كينيا", "أفضل وقت لزيارة أمبوسيلي", "رحلة سفاري أمبوسيلي 2027", "تصوير جبل كليمنجارو من أمبوسيلي",
    ],
    "kenyan-coast": [
      "الساحل الكيني شواطئ", "شاطئ دياني بيتش مومباسا كينيا", "برنامج سفاري وشاطئ كينيا", "حجز فندق على الساحل الكيني 2026", "مدينة مومباسا التاريخية كينيا", "الثقافة السواحيلية على الساحل الكيني", "أفضل شواطئ كينيا للعطلات العائلية", "رحلة شهر العسل الساحل الكيني", "سفاري وشاطئ كينيا 2027", "الغطس في الساحل الكيني",
    ],
    "lake-nakuru": [
      "حديقة بحيرة ناكورو الوطنية كينيا", "طيور الفلامنجو في بحيرة ناكورو", "محمية وحيد القرن بحيرة ناكورو", "سفاري بحيرة ناكورو كينيا", "حجز جولة سفاري بحيرة ناكورو 2026", "أفضل وقت لمشاهدة الفلامنجو في ناكورو", "سفاري ناكورو وماساي مارا", "مشاهدة وحيد القرن الأبيض في ناكورو", "رحلة سفاري بحيرة ناكورو 2027", "جولة يوم واحد لبحيرة ناكورو من نيروبي",
    ],
    "ol-pejeta": [
      "محمية أول بيجيتا كينيا", "آخر وحيد قرن أبيض شمالي في العالم", "سفاري أول بيجيتا للمحافظة على الحياة البرية", "حجز رحلة سفاري أول بيجيتا 2026", "مشاهدة الشمبانزي في ملاذ أول بيجيتا", "سفاري أول بيجيتا وجبل كينيا", "محمية خاصة للحيوانات المهددة بالانقراض كينيا", "أفضل وقت لزيارة أول بيجيتا", "رحلة سفاري أول بيجيتا 2027", "سياحة المحافظة على البيئة في كينيا",
    ],
    "samburu": [
      "محمية سامبورو الوطنية كينيا", "الأنواع النادرة في محمية سامبورو", "سفاري سامبورو البرية القاحلة", "حجز رحلة سفاري سامبورو 2026", "زرافة الشبكية في محمية سامبورو", "قبيلة السامبورو التقليدية كينيا", "سفاري سامبورو الأصيل بعيدا عن الزحام", "أفضل وقت لزيارة محمية سامبورو", "رحلة سفاري سامبورو 2027", "مشاهدة النمور في سامبورو كينيا",
    ],
    "tsavo": [
      "حديقة تسافو الشرقية والغربية كينيا", "أكبر محمية برية في كينيا تسافو", "سفاري تسافو الفيلة الحمراء", "حجز رحلة سفاري تسافو 2026", "أفضل وقت لزيارة حديقة تسافو", "سفاري تسافو من مومباسا", "مشاهدة الفيلة والأسود في تسافو", "سفاري تسافو والساحل الكيني", "رحلة سفاري تسافو 2027", "ينابيع مزيما تسافو كينيا",
    ],
    "akagera": [
      "حديقة أكاجيرا الوطنية رواندا", "السفاري الوحيد للحياة البرية في رواندا", "سفاري السافانا في رواندا أكاجيرا", "حجز رحلة سفاري أكاجيرا 2026", "عودة الأسود ووحيد القرن إلى أكاجيرا", "سفاري أكاجيرا وتتبع الغوريلا رواندا", "مشاهدة الحياة البرية في حديقة أكاجيرا", "أفضل وقت لزيارة حديقة أكاجيرا", "رحلة سفاري أكاجيرا 2027", "جولة يوم واحد لحديقة أكاجيرا من كيغالي",
    ],
    "kigali": [
      "مدينة كيغالي عاصمة رواندا", "أنظف عاصمة في أفريقيا كيغالي", "جولة سياحية في كيغالي", "فنادق كيغالي قبل رحلة السفاري", "متحف الإبادة الجماعية في كيغالي", "حجز رحلة إلى كيغالي رواندا 2026", "برنامج سفاري يبدأ من كيغالي", "أفضل المطاعم في كيغالي رواندا", "رحلة كيغالي وتتبع الغوريلا 2027", "السياحة في كيغالي رواندا",
    ],
    "lake-kivu": [
      "بحيرة كيفو رواندا", "البحيرة الزمردية على حدود الكونغو", "استراحة استجمام في بحيرة كيفو بعد سفاري الغوريلا", "حجز فندق بحيرة كيفو 2026", "شواطئ بحيرة كيفو رواندا", "رحلة استرخاء بحيرة كيفو بعد تتبع الغوريلا", "أفضل وقت لزيارة بحيرة كيفو", "جولة قوارب في بحيرة كيفو رواندا", "رحلة بحيرة كيفو 2027", "مدينة جيسيني على بحيرة كيفو رواندا",
    ],
    "nyungwe": [
      "غابة نيونغوي الوطنية رواندا", "جسر المظلات في غابة نيونغوي", "تتبع الشمبانزي في نيونغوي رواندا", "13 نوعا من القرود في غابة نيونغوي", "حجز رحلة سفاري نيونغوي 2026", "الغابة المطيرة القديمة في رواندا", "سفاري نيونغوي وتتبع الغوريلا رواندا", "أفضل وقت لزيارة غابة نيونغوي", "رحلة سفاري نيونغوي 2027", "مشاهدة القرود الذهبية في نيونغوي",
    ],
  },
  he: {
    "serengeti": [
      "ספארי בסרנגטי טנזניה", "הגירת הגנו בסרנגטי", "פארק לאומי סרנגטי", "טיול ספארי לסרנגטי 2026", "סרנגטי אריות ספארי", "ספארי הגירה גדולה טנזניה", "מתי לנסוע לסרנגטי הגירה", "חבילת ספארי סרנגטי 2027", "סרנגטי החמישייה הגדולה", "טיסות לסרנגטי טנזניה",
    ],
    "ngorongoro": [
      "מכתש נגורונגורו טיול", "ספארי במכתש נגורונגורו", "נגורונגורו קרייטר טנזניה", "טיול לנגורונגורו מחירים", "ספארי יום במכתש נגורונגורו", "נגורונגורו החמישייה הגדולה", "מכתש הגעש הגדול בעולם נגורונגורו", "ספארי נגורונגורו 2026", "טיול ספארי נגורונגורו וסרנגטי", "נגורונגורו קונסרבנסי טיול מאורגן",
    ],
    "tarangire": [
      "פארק טרנגירה ספארי", "טרנגירה פילים ענקיים", "עצי באובב טרנגירה", "ספארי טרנגירה טנזניה", "פארק לאומי טרנגירה טיול", "ספארי משולב טרנגירה נגורונגורו", "טרנגירה עדרי פילים", "טיול ספארי טרנגירה 2026", "טרנגירה ספארי חד יומי", "פארק טרנגירה מחירים",
    ],
    "manyara": [
      "אגם מניארה ספארי", "אריות מטפסי עצים מניארה", "פארק לאומי אגם מניארה", "ספארי אגם מניארה טנזניה", "מניארה בקע השבר", "ספארי משולב מניארה נגורונגורו", "טיול לאגם מניארה 2026", "מניארה פלמינגו וציפורים", "ספארי יום אגם מניארה", "אגם מניארה טנזניה מומלץ",
    ],
    "zanzibar": [
      "חופשה בזנזיבר", "טיסות לזנזיבר מישראל", "זנזיבר ספארי וים משולב", "חוף זנזיבר מלונות", "סטון טאון זנזיבר טיול", "ירח דבש בזנזיבר", "זנזיבר צלילה ושנורקלינג", "חופשת ספארי וזנזיבר 2026", "אי התבלינים זנזיבר", "חבילת נופש זנזיבר 2027",
    ],
    "arusha": [
      "ארושה טנזניה שער לספארי", "טיסה לארושה קילימנג'רו", "מלונות בארושה טנזניה", "ארושה נקודת יציאה לספארי", "טיפוס קילימנג'רו מארושה", "ארושה שוק ותרבות מקומית", "ספארי מארושה מסלול צפוני", "טיול לארושה 2026", "שדה תעופה קילימנג'רו ארושה", "ארושה טנזניה מדריך טיול",
    ],
    "ruaha": [
      "פארק רואהה טנזניה", "ספארי רואהה מחוץ למסלול התיירים", "רואהה הפארק הגדול בטנזניה", "ספארי רואהה פראי ואותנטי", "רואהה אריות ופילים", "טיול ספארי רואהה 2026", "ספארי לא מתויר טנזניה רואהה", "פארק לאומי רואהה מדריך", "ספארי רואהה יוקרה פרטי", "ספארי דרום טנזניה רואהה",
    ],
    "nyerere": [
      "פארק ניירירה סלוס טנזניה", "שמורת הציד הגדולה באפריקה סלוס", "ספארי סירה בניירירה", "ספארי בניירירה סלוס", "פארק לאומי ניירירה מדריך", "ספארי דרום טנזניה סלוס", "ניירירה כלבי בר אפריקאים", "טיול ספארי ניירירה 2026", "סלוס ניירירה שמורת טבע ענקית", "ספארי פרטי ניירירה סלוס",
    ],
    "mahale": [
      "טרק שימפנזים מהאלה", "הרי מהאלה טנזניה", "שימפנזים באגם טנגניקה", "ספארי שימפנזים טנזניה מהאלה", "פארק לאומי הרי מהאלה", "טיול לראות שימפנזים באפריקה", "מהאלה ספארי פראי ומרוחק", "אגם טנגניקה מהאלה טיול", "ספארי שימפנזים 2026", "מהאלה חוף אגם וספארי",
    ],
    "katavi": [
      "פארק קטאווי טנזניה", "קטאווי הפראי האמיתי האחרון", "ספארי קטאווי מרוחק ולא מתויר", "פארק לאומי קטאווי מדריך", "קטאווי היפופוטמים ואריות", "ספארי דרום מערב טנזניה קטאווי", "טיול ספארי קטאווי 2026", "קטאווי ספארי בתולי", "קטאווי טנזניה חוויה אותנטית", "ספארי פרטי קטאווי",
    ],
    "gombe": [
      "שימפנזים גומבה ג'יין גודול", "פארק לאומי גומבה סטרים", "טרק שימפנזים בגומבה טנזניה", "ג'יין גודול שימפנזים טיול", "ספארי גומבה אגם טנגניקה", "גומבה ממלכת השימפנזים", "טיול לגומבה 2026", "ספארי שימפנזים ופרימטים טנזניה", "גומבה סטרים פארק מדריך", "ספארי משולב מהאלה וגומבה",
    ],
    "lake-victoria": [
      "אגם ויקטוריה טנזניה", "האגם הגדול באפריקה ויקטוריה", "טיול לאגם ויקטוריה", "אגם ויקטוריה דיג וטבע", "ספארי אגם ויקטוריה טנזניה", "אגם ויקטוריה איים וכפרי דייגים", "טיול לאגם ויקטוריה 2026", "אגם ויקטוריה מקור הנילוס", "אגם ויקטוריה מדריך טיול", "אגם ויקטוריה חוויה אותנטית",
    ],
    "masai-mara": [
      "ספארי במסאי מארה קניה", "הגירת הגנו במסאי מארה", "מסאי מארה מעבר הנהר", "ספארי מסאי מארה 2026", "טיול ספארי מסאי מארה קניה", "מסאי מארה החמישייה הגדולה", "מתי לנסוע למסאי מארה בזמן ההגירה", "ספארי מסאי מארה יוקרה", "מסאי מארה שבט המסאי תרבות", "חבילת ספארי מסאי מארה 2027",
    ],
    "volcanoes": [
      "טרק גורילות רואנדה", "ספארי גורילות הרים רואנדה", "פארק הרי הגעש רואנדה", "היתר לצפייה בגורילות מחיר", "טרק גורילות 2026 רואנדה", "גורילת הרים ספארי אפריקה", "קופי זהב רואנדה טיול", "דיאן פוסי גורילות רואנדה", "ספארי פרימטים רואנדה", "טיול גורילות רואנדה 2027",
    ],
    "amboseli": [
      "פארק אמבוסלי קניה", "פילים מול קילימנג'רו אמבוסלי", "ספארי אמבוסלי קניה", "אמבוסלי עדרי פילים ענקיים", "טיול ספארי אמבוסלי 2026", "אמבוסלי נוף קילימנג'רו", "ספארי אמבוסלי משולב מסאי מארה", "פארק לאומי אמבוסלי מדריך", "אמבוסלי צילום פילים", "ספארי קניה אמבוסלי 2027",
    ],
    "kenyan-coast": [
      "חוף קניה חופשת ים", "ממבסה חוף קניה טיול", "חוף קניה ספארי משולב", "לאמו איילנד קניה טיול", "חוף קניה תרבות סוואהילי", "חול לבן וחלת אלמוגים קניה", "חופשת ספארי וחוף קניה 2026", "דיאני ביץ' קניה", "טיסות לממבסה קניה", "חבילת נופש חוף קניה 2027",
    ],
    "lake-nakuru": [
      "אגם נקורו פלמינגו", "פארק אגם נקורו קרנפים", "ספארי אגם נקורו קניה", "אגם נקורו ציפורי פלמינגו ורודות", "טיול ספארי אגם נקורו 2026", "אגם נקורו שמורת קרנפים", "ספארי משולב מסאי מארה ונקורו", "פארק לאומי אגם נקורו מדריך", "אגם נקורו קניה חובבי ציפורים", "ספארי אגם נקורו יום אחד",
    ],
    "ol-pejeta": [
      "אול פג'טה קרנפים לבנים", "שמורת אול פג'טה קניה", "קרנפי הצפון האחרונים אול פג'טה", "ספארי אול פג'טה שימפנזים", "ספארי שימור קרנפים קניה", "אול פג'טה קונסרבנסי טיול", "ספארי אול פג'טה 2026", "אול פג'טה חיות בסכנת הכחדה", "טיול לשמורת אול פג'טה קניה", "ספארי צילום אול פג'טה",
    ],
    "samburu": [
      "שמורת סמבורו קניה", "סמבורו מינים נדירים ספארי", "ספארי סמבורו צפון קניה", "סמבורו זברת גרווי ספארי", "טיול ספארי סמבורו 2026", "סמבורו שבט הסמבורו תרבות", "ספארי סמבורו מדבר צחיח", "פארק לאומי סמבורו מדריך", "סמבורו קניה ספארי פרטי", "ספארי צפון קניה סמבורו",
    ],
    "tsavo": [
      "פארק צאבו מזרח ומערב קניה", "ספארי צאבו הפארק הגדול בקניה", "צאבו פילים אדומים", "טיול ספארי צאבו 2026", "ספארי צאבו מזרחי ומערבי", "צאבו קניה שמורת טבע ענקית", "ספארי משולב צאבו וחוף קניה", "פארק לאומי צאבו מדריך", "צאבו ספארי לא מתויר", "ספארי צאבו יוקרה פרטי",
    ],
    "akagera": [
      "פארק אקגרה רואנדה ספארי", "אקגרה שמורת הסוואנה היחידה ברואנדה", "ספארי אקגרה אריות וקרנפים", "טיול ספארי אקגרה 2026", "ספארי משולב אקגרה וטרק גורילות", "פארק לאומי אקגרה מדריך", "ספארי רואנדה אקגרה החמישייה הגדולה", "ספארי סירה באגם איהמה אקגרה", "ספארי פרטי אקגרה", "ספארי אקגרה רואנדה 2027",
    ],
    "kigali": [
      "קיגלי בירת רואנדה טיול", "קיגלי העיר הכי נקייה באפריקה", "טיול לקיגלי רואנדה", "קיגלי מוזיאון רצח העם", "מלונות בקיגלי רואנדה", "קיגלי שער לטרק גורילות", "טיול לרואנדה דרך קיגלי 2026", "קיגלי בירה מודרנית באפריקה", "קיגלי תדרוך לפני ספארי", "טיסות לקיגלי רואנדה",
    ],
    "lake-kivu": [
      "אגם קיווו רואנדה", "אגם הזמרלד קיווו רואנדה", "חופשת אגם קיווו קונגו", "אגם קיווו נופש והרפיה", "טיול לאגם קיווו 2026", "אגם קיווו משולב עם טרק גורילות", "אגם קיווו איים וחופים", "חוף אגם קיווו מלונות", "אגם קיווו רואנדה חוויה שקטה", "ספארי ונופש באגם קיווו רואנדה",
    ],
    "nyungwe": [
      "יער ניונגווה רואנדה", "ניונגווה שימפנזים וקופים", "טרק שימפנזים בניונגווה", "יער גשם עתיק רואנדה ניונגווה", "ניונגווה גשר חבלים בין צמרות", "13 מיני פרימטים ניונגווה", "טיול ליער ניונגווה 2026", "ניונגווה פארק לאומי מדריך", "ספארי ניונגווה משולב גורילות", "טרק פרימטים רואנדה ניונגווה",
    ],
  },
  hi: {
    "serengeti": [
      "सेरेंगेटी नेशनल पार्क सफारी", "सेरेंगेटी वाइल्डलाइफ सफारी टूर", "सेरेंगेटी ग्रेट माइग्रेशन कब देखें", "तंजानिया सेरेंगेटी सफारी पैकेज", "सेरेंगेटी सफारी बुकिंग 2026", "सेरेंगेटी सफारी कीमत भारत से", "सेरेंगेटी में शेर देखने का सबसे अच्छा समय", "सेरेंगेटी हनीमून सफारी पैकेज", "सेरेंगेटी सफारी टूर 2027", "अफ्रीका सफारी सेरेंगेटी नेशनल पार्क",
    ],
    "ngorongoro": [
      "न्गोरोंगोरो क्रेटर सफारी टूर", "न्गोरोंगोरो क्रेटर तंजानिया सफारी पैकेज", "न्गोरोंगोरो क्रेटर में एक दिन सफारी", "न्गोरोंगोरो सफारी बुकिंग 2026", "न्गोरोंगोरो क्रेटर घूमने का सबसे अच्छा समय", "न्गोरोंगोरो क्रेटर सफारी कीमत", "सेरेंगेटी न्गोरोंगोरो सफारी पैकेज", "न्गोरोंगोरो क्रेटर वाइल्डलाइफ फोटोग्राफी", "न्गोरोंगोरो क्रेटर सफारी टूर 2027", "न्गोरोंगोरो क्रेटर हनीमून पैकेज",
    ],
    "tarangire": [
      "तारंगीरे नेशनल पार्क सफारी", "तारंगीरे सफारी तंजानिया पैकेज", "तारंगीरे नेशनल पार्क हाथी सफारी", "तारंगीरे सफारी बुकिंग 2026", "तारंगीरे टूर पैकेज भारत से", "तारंगीरे नेशनल पार्क घूमने का समय", "तारंगीरे सेरेंगेटी सफारी कॉम्बो", "तारंगीरे नेशनल पार्क सफारी कीमत", "तारंगीरे बाओबाब ट्री सफारी", "तारंगीरे सफारी टूर 2027",
    ],
    "manyara": [
      "लेक मान्यारा नेशनल पार्क सफारी", "मान्यारा ट्री क्लाइम्बिंग लायंस सफारी", "लेक मान्यारा सफारी टूर पैकेज", "मान्यारा नेशनल पार्क तंजानिया घूमने का समय", "लेक मान्यारा सफारी बुकिंग 2026", "रिफ्ट वैली मान्यारा सफारी टूर", "मान्यारा नेशनल पार्क में पेड़ पर शेर", "मान्यारा सफारी कीमत भारत से", "लेक मान्यारा बर्ड वॉचिंग सफारी", "मान्यारा सफारी टूर 2027",
    ],
    "zanzibar": [
      "ज़ांज़ीबार आइलैंड टूर पैकेज", "ज़ांज़ीबार हनीमून पैकेज भारत से", "ज़ांज़ीबार बीच होलीडे पैकेज", "ज़ांज़ीबार स्टोन टाउन घूमने की जगह", "ज़ांज़ीबार टूर पैकेज कीमत 2026", "सफारी के साथ ज़ांज़ीबार बीच पैकेज", "ज़ांज़ीबार स्पाइस आइलैंड टूर", "ज़ांज़ीबार स्नॉर्कलिंग टूर पैकेज", "तंजानिया ज़ांज़ीबार बीच हॉलिडे", "ज़ांज़ीबार टूर पैकेज 2027",
    ],
    "arusha": [
      "अरुशा तंजानिया सफारी टूर", "अरुशा किलिमंजारो टूर पैकेज", "अरुशा से सफारी बुकिंग", "अरुशा उत्तरी सर्किट सफारी पैकेज", "किलिमंजारो ट्रेकिंग टूर पैकेज भारत से", "अरुशा सफारी टूर कीमत 2026", "अरुशा नेशनल पार्क घूमने की जगह", "तंजानिया अरुशा सफारी स्टार्टिंग पॉइंट", "अरुशा किलिमंजारो सफारी पैकेज 2027", "अरुशा एयरपोर्ट से सफारी टूर",
    ],
    "ruaha": [
      "रुआहा नेशनल पार्क सफारी टूर", "रुआहा नेशनल पार्क तंजानिया सफारी पैकेज", "रुआहा सफारी ऑफबीट वाइल्डलाइफ टूर", "रुआहा नेशनल पार्क घूमने का समय", "रुआहा सफारी बुकिंग 2026", "रुआहा नेशनल पार्क शेर सफारी", "कम भीड़ वाला तंजानिया सफारी रुआहा", "रुआहा वाइल्डरनेस सफारी टूर", "रुआहा नेशनल पार्क सफारी कीमत", "रुआहा सफारी टूर 2027",
    ],
    "nyerere": [
      "न्येरेरे नेशनल पार्क सफारी टूर", "सेलूस गेम रिजर्व सफारी तंजानिया", "न्येरेरे नेशनल पार्क बोट सफारी", "न्येरेरे सफारी पैकेज बुकिंग 2026", "अफ्रीका का सबसे बड़ा गेम रिजर्व सफारी", "न्येरेरे नेशनल पार्क घूमने का समय", "न्येरेरे वॉकिंग सफारी टूर", "न्येरेरे नेशनल पार्क सफारी कीमत", "सेलूस न्येरेरे सफारी टूर 2027", "न्येरेरे नेशनल पार्क वाइल्ड डॉग सफारी",
    ],
    "mahale": [
      "महाले पर्वत चिंपांज़ी ट्रैकिंग टूर", "महाले माउंटेन नेशनल पार्क सफारी", "महाले चिंपांज़ी ट्रेकिंग तंजानिया पैकेज", "महाले नेशनल पार्क घूमने का समय", "महाले सफारी बुकिंग 2026", "तंजानिया चिंपांज़ी ट्रैकिंग टूर पैकेज", "महाले पर्वत झील तांगानिका सफारी", "महाले नेशनल पार्क सफारी कीमत", "महाले चिंपांज़ी ट्रेकिंग परमिट टूर", "महाले सफारी टूर 2027",
    ],
    "katavi": [
      "कटावी नेशनल पार्क सफारी टूर", "कटावी नेशनल पार्क तंजानिया वाइल्डरनेस सफारी", "कटावी सफारी बुकिंग 2026", "कटावी नेशनल पार्क घूमने का समय", "रिमोट तंजानिया सफारी कटावी नेशनल पार्क", "कटावी नेशनल पार्क सफारी कीमत", "कटावी वाइल्डलाइफ फोटोग्राफी सफारी", "कटावी नेशनल पार्क हिप्पो सफारी", "कटावी सफारी टूर पैकेज 2027", "ऑफबीट तंजानिया सफारी कटावी",
    ],
    "gombe": [
      "गोम्बे स्ट्रीम नेशनल पार्क सफारी", "गोम्बे नेशनल पार्क चिंपांज़ी ट्रेकिंग टूर", "जेन गुडॉल चिंपांज़ी पार्क टूर", "गोम्बे सफारी बुकिंग 2026", "गोम्बे नेशनल पार्क घूमने का समय", "तंजानिया गोम्बे चिंपांज़ी सफारी पैकेज", "गोम्बे स्ट्रीम सफारी कीमत", "झील तांगानिका गोम्बे सफारी टूर", "गोम्बे नेशनल पार्क सफारी टूर 2027", "गोम्बे चिंपांज़ी ट्रेकिंग परमिट",
    ],
    "lake-victoria": [
      "विक्टोरिया झील टूर पैकेज", "लेक विक्टोरिया तंजानिया घूमने की जगह", "विक्टोरिया झील बोट सफारी टूर", "लेक विक्टोरिया सफारी टूर 2026", "अफ्रीका की सबसे बड़ी झील टूर पैकेज", "विक्टोरिया झील मछली पकड़ने का टूर", "लेक विक्टोरिया घूमने का समय", "विक्टोरिया झील टापू टूर पैकेज", "लेक विक्टोरिया तंजानिया सफारी कॉम्बो", "विक्टोरिया झील टूर पैकेज 2027",
    ],
    "masai-mara": [
      "मसाई मारा सफारी टूर पैकेज", "मसाई मारा केन्या सफारी बुकिंग", "मसाई मारा ग्रेट माइग्रेशन कब देखें", "मसाई मारा सफारी पैकेज कीमत भारत से", "मसाई मारा नदी पार करना माइग्रेशन सफारी", "मसाई मारा हॉट एयर बैलून सफारी", "मसाई मारा सफारी टूर 2026", "मसाई मारा नेशनल रिजर्व घूमने का समय", "मसाई मारा हनीमून सफारी पैकेज", "मसाई मारा सफारी टूर 2027",
    ],
    "volcanoes": [
      "वोल्केनोज़ नेशनल पार्क रवांडा सफारी", "रवांडा गोरिल्ला ट्रेकिंग टूर पैकेज", "गोरिल्ला सफारी परमिट रवांडा 2026", "माउंटेन गोरिल्ला ट्रेकिंग टूर भारत से", "रवांडा गोरिल्ला ट्रेकिंग परमिट कीमत", "वोल्केनोज़ नेशनल पार्क गोल्डन मंकी टूर", "डायन फॉसी गोरिल्ला ट्रेकिंग टूर", "अफ्रीका गोरिल्ला सफारी पैकेज", "रवांडा गोरिल्ला ट्रेकिंग परमिट बुकिंग 2027", "रवांडा प्राइमेट ट्रेकिंग टूर पैकेज",
    ],
    "amboseli": [
      "अम्बोसेली नेशनल पार्क सफारी टूर", "अम्बोसेली केन्या हाथी सफारी पैकेज", "अम्बोसेली किलिमंजारो व्यू सफारी", "अम्बोसेली सफारी बुकिंग 2026", "अम्बोसेली नेशनल पार्क घूमने का समय", "अम्बोसेली सफारी कीमत भारत से", "अम्बोसेली नेशनल पार्क फोटोग्राफी टूर", "मसाई मारा अम्बोसेली सफारी कॉम्बो", "अम्बोसेली सफारी टूर 2027", "अम्बोसेली नेशनल पार्क हाथी झुंड सफारी",
    ],
    "kenyan-coast": [
      "केन्या कोस्ट बीच होलीडे पैकेज", "मोम्बासा बीच टूर पैकेज भारत से", "केन्या तट सफारी बीच कॉम्बो पैकेज", "केन्या कोस्ट हनीमून पैकेज", "मोम्बासा डियानी बीच टूर 2026", "केन्या कोस्ट स्वाहिली कल्चर टूर", "केन्या बीच होलीडे सफारी के साथ", "मोम्बासा बीच रिज़ॉर्ट पैकेज कीमत", "केन्या कोस्ट टूर पैकेज 2027", "लामू आइलैंड केन्या टूर पैकेज",
    ],
    "lake-nakuru": [
      "लेक नाकुरू नेशनल पार्क सफारी टूर", "नाकुरू झील फ्लेमिंगो सफारी पैकेज", "लेक नाकुरू राइनो सैंक्चुअरी टूर", "नाकुरू नेशनल पार्क सफारी बुकिंग 2026", "लेक नाकुरू घूमने का सबसे अच्छा समय", "मसाई मारा नाकुरू सफारी कॉम्बो", "लेक नाकुरू सफारी कीमत भारत से", "नाकुरू नेशनल पार्क बर्ड वॉचिंग टूर", "लेक नाकुरू सफारी टूर 2027", "नाकुरू नेशनल पार्क फ्लेमिंगो देखने का समय",
    ],
    "ol-pejeta": [
      "ओल पेजेटा कंज़र्वेंसी सफारी टूर", "ओल पेजेटा राइनो सैंक्चुअरी केन्या", "आखिरी नॉर्दर्न व्हाइट राइनो सफारी टूर", "ओल पेजेटा सफारी बुकिंग 2026", "ओल पेजेटा कंज़र्वेंसी घूमने का समय", "ओल पेजेटा शिंपैंज़ी सैंक्चुअरी टूर", "ओल पेजेटा सफारी कीमत भारत से", "ओल पेजेटा नाइट गेम ड्राइव सफारी", "ओल पेजेटा कंज़र्वेंसी सफारी टूर 2027", "ओल पेजेटा राइनो ट्रैकिंग वॉकिंग सफारी",
    ],
    "samburu": [
      "सांबुरु नेशनल रिजर्व सफारी टूर", "सांबुरु केन्या वाइल्डलाइफ सफारी पैकेज", "सांबुरु नेशनल रिजर्व दुर्लभ जानवर सफारी", "सांबुरु सफारी बुकिंग 2026", "सांबुरु नेशनल रिजर्व घूमने का समय", "सांबुरु ग्रेवी ज़ेब्रा सफारी टूर", "सांबुरु सफारी कीमत भारत से", "सांबुरु नेशनल रिजर्व फोटोग्राफी सफारी", "सांबुरु सफारी टूर पैकेज 2027", "सांबुरु समुदाय संस्कृति सफारी टूर",
    ],
    "tsavo": [
      "त्सावो नेशनल पार्क सफारी टूर", "त्सावो ईस्ट वेस्ट सफारी पैकेज केन्या", "त्सावो नेशनल पार्क लाल हाथी सफारी", "त्सावो सफारी बुकिंग 2026", "त्सावो नेशनल पार्क घूमने का समय", "त्सावो सफारी कीमत भारत से", "त्सावो नेशनल पार्क वाइल्डरनेस सफारी टूर", "मोम्बासा त्सावो सफारी बीच कॉम्बो", "त्सावो सफारी टूर 2027", "त्सावो नेशनल पार्क शेर सफारी",
    ],
    "akagera": [
      "अकागेरा नेशनल पार्क रवांडा सफारी", "अकागेरा नेशनल पार्क सफारी टूर पैकेज", "रवांडा अकागेरा बिग फाइव सफारी", "अकागेरा सफारी बुकिंग 2026", "अकागेरा नेशनल पार्क घूमने का समय", "अकागेरा नेशनल पार्क बोट सफारी टूर", "अकागेरा सफारी कीमत भारत से", "गोरिल्ला ट्रेकिंग अकागेरा सफारी कॉम्बो", "अकागेरा नेशनल पार्क सफारी टूर 2027", "अकागेरा सवाना सफारी रवांडा",
    ],
    "kigali": [
      "किगाली रवांडा सिटी टूर पैकेज", "किगाली टूर पैकेज भारत से", "किगाली जेनोसाइड मेमोरियल टूर", "किगाली शहर घूमने की जगह", "किगाली से गोरिल्ला ट्रेकिंग टूर", "किगाली सिटी टूर बुकिंग 2026", "रवांडा किगाली एयरपोर्ट टूर पैकेज", "किगाली कल्चरल टूर पैकेज", "किगाली सिटी टूर 2027", "किगाली रवांडा घूमने का सबसे अच्छा समय",
    ],
    "lake-kivu": [
      "लेक किवू रवांडा टूर पैकेज", "किवू झील बोट टूर रवांडा", "लेक किवू घूमने की जगह छुट्टी", "किवू झील टूर बुकिंग 2026", "गोरिल्ला ट्रेकिंग किवू झील कॉम्बो टूर", "लेक किवू रिज़ॉर्ट होलीडे पैकेज", "किवू झील रवांडा घूमने का समय", "लेक किवू टूर पैकेज कीमत", "किवू झील टूर पैकेज 2027", "लेक किवू आइलैंड टूर रवांडा",
    ],
    "nyungwe": [
      "न्युंग्वे फॉरेस्ट नेशनल पार्क सफारी", "न्युंग्वे फॉरेस्ट कैनोपी वॉक टूर", "न्युंग्वे नेशनल पार्क चिंपांज़ी ट्रेकिंग", "न्युंग्वे फॉरेस्ट सफारी बुकिंग 2026", "न्युंग्वे नेशनल पार्क घूमने का समय", "रवांडा न्युंग्वे रेनफॉरेस्ट टूर पैकेज", "न्युंग्वे फॉरेस्ट प्राइमेट ट्रेकिंग टूर", "न्युंग्वे सफारी कीमत भारत से", "न्युंग्वे फॉरेस्ट सफारी टूर 2027", "गोरिल्ला ट्रेकिंग न्युंग्वे फॉरेस्ट कॉम्बो",
    ],
  },
  th: {
    "serengeti": [
      "ทัวร์เซเรนเกติ แทนซาเนีย", "ซาฟารีเซเรนเกติ ราคา", "อุทยานแห่งชาติเซเรนเกติ", "การอพยพสัตว์เซเรนเกติ", "ทัวร์ซาฟารีเซเรนเกติ 2026", "เที่ยวเซเรนเกติ ต้องเตรียมตัวยังไง", "สิงโตเซเรนเกติ", "ทัวร์บิ๊กไฟว์แอฟริกา เซเรนเกติ", "แพ็คเกจทัวร์เซเรนเกติ 2027", "จองทัวร์เซเรนเกติ ราคาเท่าไหร่",
    ],
    "ngorongoro": [
      "ทัวร์ปล่องภูเขาไฟงโกรงโกโร", "ซาฟารีปล่องภูเขาไฟ Ngorongoro", "เที่ยวปล่องภูเขาไฟที่ใหญ่ที่สุดในโลก", "ทัวร์งโกรงโกโร แทนซาเนีย ราคา", "ซาฟารีเข้าปากปล่องภูเขาไฟ", "แรดดำ ปล่องภูเขาไฟงโกรงโกโร", "ทัวร์ซาฟารี Ngorongoro 2026", "อุทยานงโกรงโกโร คอนเซอร์เวชั่น", "จองทัวร์งโกรงโกโรเครเตอร์ 2027", "ซาฟารีวันเดียวปล่องภูเขาไฟ",
    ],
    "tarangire": [
      "ทัวร์ทารังไกร์ แทนซาเนีย", "ซาฟารีต้นเบาบับ ทารังไกร์", "อุทยานแห่งชาติทารังไกร์ ช้างป่า", "เที่ยวทารังไกร์ ราคาทัวร์", "ทัวร์ซาฟารีทารังไกร์ 2026", "ฝูงช้างทารังไกร์", "ซาฟารีต้นไม้เบาบับยักษ์แอฟริกา", "แพ็คเกจทัวร์ทารังไกร์ เซเรนเกติ", "จองทัวร์ทารังไกร์ 2027", "ทารังไกร์ อุทยานช้างเยอะที่สุด",
    ],
    "manyara": [
      "ทัวร์ทะเลสาบมันยารา", "สิงโตปีนต้นไม้ มันยารา", "อุทยานแห่งชาติทะเลสาบมันยารา ราคาทัวร์", "ซาฟารีหุบเขาริฟต์แทนซาเนีย", "เที่ยวทะเลสาบมันยารา นกฟลามิงโก", "ทัวร์ซาฟารีมันยารา 2026", "ดูสิงโตปีนต้นไม้แอฟริกา", "แพ็คเกจทัวร์มันยารา ทารังไกร์", "จองทัวร์ทะเลสาบมันยารา 2027", "ซาฟารีมันยารา หนึ่งวัน",
    ],
    "zanzibar": [
      "ทัวร์แซนซิบาร์ แทนซาเนีย", "เที่ยวแซนซิบาร์ หาดทราย", "แซนซิบาร์ ซาฟารีบีชคอมโบ", "ทัวร์เกาะเครื่องเทศแซนซิบาร์", "สโตนทาวน์ แซนซิบาร์ ทัวร์", "ทัวร์แซนซิบาร์ 2026 ราคา", "ดำน้ำดูปะการังแซนซิบาร์", "แพ็คเกจทัวร์แทนซาเนีย แซนซิบาร์", "จองทัวร์แซนซิบาร์ 2027", "ฮันนีมูนแซนซิบาร์ แอฟริกา",
    ],
    "arusha": [
      "ทัวร์อารูชา แทนซาเนีย", "ปีนเขาคิลิมันจาโร อารูชา", "ซาฟารีเหนือแทนซาเนีย จากอารูชา", "เที่ยวอารูชา ก่อนไปซาฟารี", "ทัวร์คิลิมันจาโรและซาฟารี 2026", "อารูชา ประตูสู่นอร์เทิร์นเซอร์กิต", "แพ็คเกจทัวร์อารูชา เซเรนเกติ งโกรงโกโร", "จองทัวร์ปีนคิลิมันจาโร 2027", "ตลาดมาไซ อารูชา ทัวร์", "ซาฟารีเริ่มต้นที่อารูชา",
    ],
    "ruaha": [
      "ทัวร์รูอาฮา แทนซาเนีย", "อุทยานแห่งชาติรูอาฮา ซาฟารี", "ซาฟารีรูอาฮา สิงโตฝูงใหญ่", "เที่ยวรูอาฮา ทัวร์ซาฟารีห่างไกลผู้คน", "ทัวร์ซาฟารีรูอาฮา 2026", "อุทยานรูอาฮา ใหญ่ที่สุดในแทนซาเนีย", "ซาฟารีรูอาฮาแบบไม่มีนักท่องเที่ยว", "แพ็คเกจทัวร์รูอาฮา ราคา", "จองทัวร์รูอาฮา 2027", "รูอาฮา ซาฟารีสายผจญภัย",
    ],
    "nyerere": [
      "ทัวร์ไนเยเรเร แทนซาเนีย", "อุทยานไนเยเรเร เซลูส ซาฟารี", "ซาฟารีล่องเรือแม่น้ำรูฟิจิ", "เที่ยวไนเยเรเร เขตอนุรักษ์ใหญ่ที่สุดในแอฟริกา", "ทัวร์ซาฟารีเซลูส 2026", "ซาฟารีเดินป่าไนเยเรเร", "แพ็คเกจทัวร์ไนเยเรเรเซลูส ราคา", "จองทัวร์ไนเยเรเร 2027", "ซาฟารีเรือแม่น้ำ แทนซาเนียใต้", "ไนเยเรเร สุนัขป่าแอฟริกา",
    ],
    "mahale": [
      "ทัวร์เทือกเขามาฮาเล", "เดินป่าดูชิมแปนซี มาฮาเล", "ซาฟารีมาฮาเลเมาน์เทน แทนซาเนีย", "เที่ยวมาฮาเล ทะเลสาบแทนกันยิกา", "ทัวร์ดูชิมแปนซีแอฟริกา 2026", "แพ็คเกจทัวร์มาฮาเล ราคา", "ป่าดิบมาฮาเล ถิ่นชิมแปนซี", "จองทัวร์เทรคกิ้งชิมแปนซี 2027", "มาฮาเล ป่าดงดิบบริสุทธิ์", "ทัวร์ชิมแปนซีทะเลสาบแทนกันยิกา",
    ],
    "katavi": [
      "ทัวร์คาทาวี แทนซาเนีย", "อุทยานแห่งชาติคาทาวี ซาฟารี", "ซาฟารีป่าดิบสุดท้ายแทนซาเนีย", "เที่ยวคาทาวี ฮิปโปแม่น้ำ", "ทัวร์ซาฟารีคาทาวี 2026", "คาทาวี ซาฟารีคนไม่พลุกพล่าน", "แพ็คเกจทัวร์คาทาวี ราคา", "จองทัวร์คาทาวี 2027", "ซาฟารีทุ่งหญ้าคาทาวี ควายป่า", "คาทาวี ดินแดนป่าดิบตะวันตกแทนซาเนีย",
    ],
    "gombe": [
      "ทัวร์กอมเบสตรีม แทนซาเนีย", "เดินป่าดูชิมแปนซี กอมเบ", "อุทยานแห่งชาติกอมเบ เจนกูดดอลล์", "เที่ยวกอมเบ ทะเลสาบแทนกันยิกา", "ทัวร์ชิมแปนซีกอมเบ 2026", "แพ็คเกจทัวร์กอมเบสตรีม ราคา", "จองทัวร์เทรคกิ้งชิมแปนซีกอมเบ 2027", "กอมเบ ถิ่นวิจัยชิมแปนซีเจนกูดดอลล์", "ทัวร์ดูชิมแปนซีป่าเล็กสุดในแทนซาเนีย", "กอมเบสตรีม ซาฟารีเดินป่า",
    ],
    "lake-victoria": [
      "ทัวร์ทะเลสาบวิกตอเรีย แทนซาเนีย", "เที่ยวทะเลสาบวิกตอเรีย ใหญ่ที่สุดในแอฟริกา", "ล่องเรือทะเลสาบวิกตอเรีย", "ทัวร์ตกปลาทะเลสาบวิกตอเรีย", "ทะเลสาบวิกตอเรีย มวันซา ทัวร์", "ทัวร์ซาฟารีทะเลสาบวิกตอเรีย 2026", "แพ็คเกจทัวร์ทะเลสาบวิกตอเรีย ราคา", "จองทัวร์ทะเลสาบวิกตอเรีย 2027", "เกาะรูบอนโด ทะเลสาบวิกตอเรีย", "ทะเลสาบวิกตอเรีย ต้นกำเนิดแม่น้ำไนล์",
    ],
    "masai-mara": [
      "ทัวร์มาไซมารา เคนย่า", "ซาฟารีมาไซมารา การอพยพครั้งใหญ่", "เที่ยวมาไซมารา ข้ามแม่น้ำมาราวิลเดอบีสต์", "ทัวร์ซาฟารีมาไซมารา 2026", "มาไซมารา สิงโตฝูงใหญ่ เสือดาว", "แพ็คเกจทัวร์เคนย่า มาไซมารา ราคา", "จองทัวร์มาไซมารา 2027", "ทัวร์บิ๊กไฟว์เคนย่า มาไซมารา", "ซาฟารีบอลลูนมาไซมารา", "เที่ยวหมู่บ้านมาไซ มาไซมารา",
    ],
    "volcanoes": [
      "ทัวร์กอริลล่าภูเขา รวันดา", "อุทยานแห่งชาติภูเขาไฟ รวันดา ทัวร์", "เทรคกิ้งกอริลล่า รวันดา ราคา", "ใบอนุญาตดูกอริลล่ารวันดา 2026", "ซาฟารีดูลิงทองคำ รวันดา", "ทัวร์กอริลล่าภูเขาแอฟริกา 2027", "เดินป่าดูกอริลล่าภูเขาไฟวีรุงกา", "แพ็คเกจทัวร์กอริลล่ารวันดา ราคาเท่าไหร่", "จองทัวร์เทรคกิ้งกอริลล่า 2027", "ทัวร์อนุสรณ์ไดแอนฟอสซีย์ รวันดา",
    ],
    "amboseli": [
      "ทัวร์อัมโบเซลี เคนย่า", "ซาฟารีช้างอัมโบเซลี วิวคิลิมันจาโร", "อุทยานแห่งชาติอัมโบเซลี ราคาทัวร์", "เที่ยวอัมโบเซลี ถ่ายรูปช้างคิลิมันจาโร", "ทัวร์ซาฟารีอัมโบเซลี 2026", "ฝูงช้างงายาวอัมโบเซลี", "แพ็คเกจทัวร์เคนย่า อัมโบเซลี มาไซมารา", "จองทัวร์อัมโบเซลี 2027", "ซาฟารีชมช้างใต้เขาคิลิมันจาโร", "อัมโบเซลี ทัวร์ถ่ายภาพสัตว์ป่า",
    ],
    "kenyan-coast": [
      "ทัวร์ชายฝั่งเคนย่า", "เที่ยวมอมบาซา ชายหาดเคนย่า", "ซาฟารีบีชคอมโบ เคนย่า", "ชายหาดลามู วัฒนธรรมสวาฮีลี", "ทัวร์ชายฝั่งเคนย่า 2026", "ดำน้ำดูปะการังมอมบาซา", "แพ็คเกจทัวร์เคนย่า ซาฟารีต่อทะเล", "จองทัวร์ชายฝั่งเคนย่า 2027", "เที่ยวเกาะลามู เคนย่า", "ฮันนีมูนชายหาดเคนย่า",
    ],
    "lake-nakuru": [
      "ทัวร์ทะเลสาบนากูรู เคนย่า", "นกฟลามิงโก ทะเลสาบนากูรู", "อุทยานแห่งชาติทะเลสาบนากูรู แรด", "เที่ยวทะเลสาบนากูรู ราคาทัวร์", "ทัวร์ซาฟารีนากูรู 2026", "เขตอนุรักษ์แรดนากูรู", "แพ็คเกจทัวร์นากูรู มาไซมารา", "จองทัวร์ทะเลสาบนากูรู 2027", "ดูนกฟลามิงโกสีชมพูเคนย่า", "ซาฟารีทะเลสาบนากูรูวันเดียว",
    ],
    "ol-pejeta": [
      "ทัวร์โอลเปเจตา เคนย่า", "แรดขาวเหนือตัวสุดท้าย โอลเปเจตา", "เขตอนุรักษ์โอลเปเจตา ซาฟารี", "เที่ยวโอลเปเจตา ดูแรดใกล้ชิด", "ทัวร์ซาฟารีโอลเปเจตา 2026", "ศูนย์อนุรักษ์ชิมแปนซีโอลเปเจตา", "แพ็คเกจทัวร์โอลเปเจตา ราคา", "จองทัวร์โอลเปเจตา 2027", "ซาฟารีเดินเท้าโอลเปเจตา", "ดูแรดขาวสายพันธุ์เหนือ เคนย่า",
    ],
    "samburu": [
      "ทัวร์แซมบูรู เคนย่า", "เขตอนุรักษ์แซมบูรู สัตว์หายาก", "ซาฟารีแซมบูรู ยีราฟตาข่าย", "เที่ยวแซมบูรู ทะเลทรายเหนือเคนย่า", "ทัวร์ซาฟารีแซมบูรู 2026", "ม้าลายลายกริ๊ด แซมบูรู", "แพ็คเกจทัวร์แซมบูรู ราคา", "จองทัวร์แซมบูรู 2027", "ซาฟารีสัตว์หายากแซมบูรู สเปเชียลไฟว์", "แซมบูรู ซาฟารีทะเลทรายเหนือ",
    ],
    "tsavo": [
      "ทัวร์ซาโว เคนย่า", "อุทยานแห่งชาติซาโวตะวันออก ตะวันตก", "ซาฟารีช้างแดงซาโว", "เที่ยวซาโว ป่าใหญ่ที่สุดเคนย่า", "ทัวร์ซาฟารีซาโว 2026", "สิงโตกินคนซาโว ประวัติศาสตร์", "แพ็คเกจทัวร์ซาโว ชายฝั่งเคนย่า", "จองทัวร์ซาโว 2027", "น้ำตกมซิมา ซาโว", "ซาฟารีซาโวราคาประหยัด",
    ],
    "akagera": [
      "ทัวร์อาคาเกรา รวันดา", "อุทยานแห่งชาติอาคาเกรา ซาฟารี", "ซาฟารีทุ่งหญ้าสะวันนารวันดา", "เที่ยวอาคาเกรา สิงโตแรด", "ทัวร์ซาฟารีอาคาเกรา 2026", "บิ๊กไฟว์รวันดา อาคาเกรา", "แพ็คเกจทัวร์รวันดา อาคาเกรา กอริลล่า", "จองทัวร์อาคาเกรา 2027", "ล่องเรือทะเลสาบอิเฮมา อาคาเกรา", "อาคาเกรา อุทยานสะวันนาแห่งเดียวในรวันดา",
    ],
    "kigali": [
      "ทัวร์คิกาลี รวันดา", "เที่ยวคิกาลี เมืองหลวงสะอาดที่สุดในแอฟริกา", "พิพิธภัณฑ์ฆ่าล้างเผ่าพันธุ์คิกาลี", "ทัวร์คิกาลี ก่อนไปดูกอริลล่า", "ทัวร์ซาฟารีรวันดา คิกาลี 2026", "แพ็คเกจทัวร์คิกาลี กอริลล่า ทะเลสาบคิวู", "จองทัวร์คิกาลี 2027", "คิกาลี เมืองหลวงปลอดถุงพลาสติก", "ตลาดท้องถิ่นคิกาลี ทัวร์เดินเมือง", "เที่ยวรวันดา เริ่มต้นที่คิกาลี",
    ],
    "lake-kivu": [
      "ทัวร์ทะเลสาบคิวู รวันดา", "เที่ยวทะเลสาบคิวู ชายแดนคองโก", "พักผ่อนทะเลสาบคิวู หลังดูกอริลล่า", "ทะเลสาบคิวู กีเซนยี ทัวร์", "ทัวร์ซาฟารีรวันดา ทะเลสาบคิวู 2026", "ล่องเรือชมทะเลสาบมรกตคิวู", "แพ็คเกจทัวร์กอริลล่า ทะเลสาบคิวู ราคา", "จองทัวร์ทะเลสาบคิวู 2027", "ทะเลสาบคิวู จุดพักผ่อนหลังเทรคกิ้ง", "ทะเลสาบคิวูสวยที่สุดในแอฟริกา",
    ],
    "nyungwe": [
      "ทัวร์ป่านยองเว รวันดา", "อุทยานป่าฝนนยองเว ลิงชิมแปนซี", "เดินสะพานลอยฟ้าป่านยองเว", "เที่ยวนยองเว ป่าดึกดำบรรพ์แอฟริกา", "ทัวร์ซาฟารีนยองเว 2026", "ดูลิงโคโลบัสนยองเวฟอเรสต์", "แพ็คเกจทัวร์รวันดา นยองเว กอริลล่า", "จองทัวร์ป่านยองเว 2027", "ป่านยองเว 13 ชนิดไพรเมท", "แคโนปีวอล์คเวย์ นยองเว รวันดา",
    ],
  },
}

interface Props {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    destinations.map((d) => ({ locale, slug: d.slug }))
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params
  const dest = await getDestination(slug, locale)
  if (!dest) return {}
  const t = await getTranslations({ locale, namespace: 'destination' })
  const title = t('metaTitle', { name: dest.name })
  const description = t('metaDescription', { name: dest.name, tagline: dest.tagline })
  return {
    alternates: buildAlternates(locale, `/destinations/${slug}`),
    title: buildPageTitle(title),
    description,
    keywords:
      DEST_KEYWORDS_BY_LOCALE[locale]?.[slug]
      ?? (locale === 'en'
        ? (DEST_KEYWORDS[slug] ?? [
            `${dest.name} safari`, `${dest.name} tour`, `${dest.name} Tanzania`,
            `visit ${dest.name}`, `${dest.name} wildlife`, `${dest.name} 2026`,
            'Tanzania safari', 'East Africa safari', 'Tanzania tour operator', 'Africa safari holiday',
          ])
        : CORE_KEYWORDS_BY_LOCALE[locale as keyof typeof CORE_KEYWORDS_BY_LOCALE]),
    openGraph: {
      title,
      description,
      images: [{ url: dest.heroImage, width: 1200, height: 630, alt: dest.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      images: [dest.heroImage],
    },
  }
}

export default async function DestinationPage({ params }: Props) {
  const { slug, locale } = await params
  setRequestLocale(locale)
  const dest = await getDestination(slug, locale)
  if (!dest) notFound()

  const t = await getTranslations('destination')
  const tc = await getTranslations('common')

  const allPackages = await getPackages(locale)
  const allDestinations = await getDestinations(locale)
  const destPackages = allPackages.filter((p) => p.destinations.includes(dest.slug))
  const nearby = allDestinations
    .filter((d) => d.country === dest.country && d.slug !== dest.slug)
    .slice(0, 3)

  const attractionSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: dest.name,
    description: dest.tagline,
    image: `${SITE_URL}${dest.heroImage}`,
    url: localeUrl(locale, `/destinations/${dest.slug}`),
    touristType: ['Wildlife Enthusiasts', 'Nature Lovers', 'Adventure Travelers'],
    isAccessibleForFree: false,
    address: {
      '@type': 'PostalAddress',
      addressCountry: dest.country === 'tanzania' ? 'TZ' : dest.country === 'kenya' ? 'KE' : 'RW',
    },
  }

  const faqSchema = dest.faq && dest.faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: dest.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  } : null

  const descriptionParagraphs = dest.description.split('\n\n')
  const guidePost = dest.guideSlug ? await getBlogPostMeta(dest.guideSlug, locale) : undefined

  const { lat, lng } = dest.coordinates
  const mapBbox = `${lng - 0.2},${lat - 0.15},${lng + 0.2},${lat + 0.15}`
  const mapEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${mapBbox}&marker=${lat},${lng}`

  const countryHref: Record<typeof dest.country, string> = {
    tanzania: '/destinations/tanzania',
    kenya: '/kenya',
    rwanda: '/rwanda',
  }
  const breadcrumbItems = [
    { label: 'EWA Safari Outfitters', href: `/${locale}` },
    { label: t('breadcrumbLabel'), href: `/${locale}${countryHref[dest.country]}` },
    { label: dest.name },
  ]
  const breadcrumbSchema = buildBreadcrumbSchema(locale, breadcrumbItems, `/destinations/${slug}`)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(attractionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {/* Hero */}
      <section className="relative h-[60vh] min-h-80 bg-brand flex items-end">
        <Image
          src={dest.heroImage}
          alt={dest.heroImageAlt ?? dest.name}
          fill
          className={`object-cover ${dest.heroImagePosition === 'top' ? 'object-top' : 'object-center'}`}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-brand/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <Breadcrumb items={breadcrumbItems} />
          <h1 className="text-4xl lg:text-5xl font-semibold text-white mb-2">{dest.name}</h1>
          <p className="text-gold text-lg font-medium">{dest.tagline}</p>
        </div>
      </section>

      <MobileEnquireBanner
        eyebrow={dest.tagline}
        title={dest.name}
        label={t('getFreeQuote')}
        packageName={dest.name}
        packageType={tc('packageTypes.wildlifeSafari')}
      />

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <Reveal className="lg:col-span-2">
              <h2 className="text-2xl font-semibold text-brand mb-4">{t('about', { name: dest.name })}</h2>
              <div className="space-y-4 mb-6">
                {descriptionParagraphs.map((para, i) => (
                  <p key={i} className="text-text-muted leading-relaxed">{para}</p>
                ))}
              </div>
              <h3 className="font-semibold text-brand mb-3">{t('highlights')}</h3>
              <ul className="space-y-2 mb-8">
                {dest.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-base text-text-muted">
                    <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
              <h3 className="font-semibold text-brand mb-3">{t('wildlifeYouMaySee')}</h3>
              <div className="flex flex-wrap gap-2">
                {dest.wildlife.map((w) => (
                  <span key={w} className="px-3 py-1 bg-light-green text-brand text-xs rounded-full font-medium">{w}</span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="bg-light-green rounded-2xl p-6 space-y-5">
                <h3 className="font-semibold text-brand mb-4">{t('keyFacts')}</h3>
                {dest.parkSize && (
                  <div className="flex items-center gap-3 text-base">
                    <Ruler className="w-4 h-4 text-gold" />
                    <div>
                      <div className="font-medium text-brand">{t('parkSize')}</div>
                      <div className="text-text-muted">{dest.parkSize}</div>
                    </div>
                  </div>
                )}
                {dest.distanceFromArusha && (
                  <div className="flex items-center gap-3 text-base">
                    <MapPin className="w-4 h-4 text-gold" />
                    <div>
                      <div className="font-medium text-brand">{t('fromArusha')}</div>
                      <div className="text-text-muted">{dest.distanceFromArusha}</div>
                    </div>
                  </div>
                )}
                <div className="text-base">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="w-4 h-4 text-gold" />
                    <div className="font-medium text-brand">{t('bestMonths')}</div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {MONTH_NAMES.map((m, i) => (
                      <span
                        key={m}
                        className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${
                          dest.bestMonths.includes(i + 1)
                            ? 'bg-brand text-white'
                            : 'bg-gray-100 text-gray-400'
                        }`}
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {dest.gettingThere && (
                <div className="mt-5 bg-light-green rounded-2xl p-6 space-y-4">
                  <h3 className="font-semibold text-brand mb-1">{t('gettingThereHeading')}</h3>
                  <div className="flex items-center gap-3 text-base">
                    <Plane className="w-4 h-4 text-gold flex-shrink-0" />
                    <div>
                      <div className="font-medium text-brand">{t('nearestAirport')}</div>
                      <div className="text-text-muted">{dest.gettingThere.airport}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-base">
                    <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                    <div>
                      <div className="font-medium text-brand">{t('transferLabel')}</div>
                      <div className="text-text-muted">{dest.gettingThere.transferTime}</div>
                    </div>
                  </div>
                  <p className="text-text-muted text-base leading-relaxed pt-1 border-t border-brand/10">
                    {dest.gettingThere.transferNotes}
                  </p>
                </div>
              )}

              <div className="mt-5 rounded-2xl overflow-hidden border border-gray-100">
                <div className="px-6 pt-5 pb-3">
                  <h3 className="font-semibold text-brand flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gold" /> {t('mapHeading')}
                  </h3>
                </div>
                <iframe
                  src={mapEmbedUrl}
                  className="w-full h-56 border-0"
                  loading="lazy"
                  title={`${dest.name} map`}
                />
              </div>

              <div className="mt-5">
                <p className="text-xs font-bold text-text-muted uppercase tracking-widest mb-3">{t('featuredGuideHeading')}</p>
                {guidePost ? (
                  <BlogSuggestionCard
                    slug={guidePost.slug}
                    title={guidePost.title}
                    excerpt={guidePost.excerpt}
                    category={guidePost.category}
                    image={guidePost.heroImage}
                    readTime={guidePost.readTime}
                    readLabel={tc('readMore')}
                  />
                ) : (
                  <div className="bg-light-green rounded-2xl p-6 text-center">
                    <h3 className="font-semibold text-brand mb-2">{t('genericGuideHeading')}</h3>
                    <p className="text-text-muted text-base leading-relaxed mb-4">{t('genericGuideBody')}</p>
                    <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-brand font-semibold hover:text-gold transition-colors">
                      {t('exploreGuides')} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </div>

              <div className="mt-5 p-5 bg-brand rounded-2xl text-white text-center">
                <p className="font-semibold mb-3">{t('readyToVisit', { name: dest.name.split(' ')[0] })}</p>
                <BookNowButton
                  label={t('getFreeQuote')}
                  arrow={false}
                  packageName={dest.name}
                  packageType={tc('packageTypes.wildlifeSafari')}
                  className="block w-full py-2.5 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl text-sm transition-colors"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Available Packages */}
      {destPackages.length > 0 && (
        <section className="py-16 bg-light-green">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="mb-8">
              <h2 className="text-2xl font-semibold text-brand">
                {t('safariPackagesIncluding', { name: dest.name.split(' ')[0] })}
              </h2>
            </Reveal>
            <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {destPackages.map((pkg) => (
                <RevealItem key={pkg.slug}>
                  <Link href={`/safaris/${pkg.slug}`} className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all group block">
                    <div className="relative h-44">
                      <Image src={pkg.heroImage} alt={pkg.heroImageAlt ?? pkg.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-brand mb-1 text-sm">{pkg.name}</h3>
                      <p className="text-text-muted text-xs mb-3">{pkg.duration} {tc('nights')} · {t('nightsFrom')} ${pkg.priceFrom.toLocaleString('en-US')}/{tc('perPerson')}</p>
                      <span className="flex items-center gap-1 text-xs text-brand font-semibold">
                        {tc('viewPackage')} <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      {/* FAQ */}
      {dest.faq && dest.faq.length > 0 && (
        <section className="py-16 bg-light-green">
          <Reveal className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-brand mb-8 text-center">{t('faqHeading')}</h2>
            <FaqAccordion faqs={dest.faq} />
          </Reveal>
        </section>
      )}

      {/* Nearby destinations */}
      {nearby.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="mb-8">
              <h2 className="text-2xl font-semibold text-brand">{t('alsoConsider')}</h2>
            </Reveal>
            <RevealGroup className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {nearby.map((d) => (
                <RevealItem key={d.slug}>
                  <Link
                    href={`/destinations/${d.slug}`}
                    className="group relative flex items-end rounded-2xl overflow-hidden min-h-[240px] block"
                  >
                    <Image
                      src={d.heroImage}
                      alt={d.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand/95 via-brand/50 to-transparent" />
                    <div className="relative z-10 p-6 w-full">
                      <h3 className="font-bold text-white text-lg leading-snug mb-1">{d.name}</h3>
                      <p className="text-white/70 text-xs leading-relaxed mb-3">{d.tagline}</p>
                      <span className="flex items-center gap-1.5 text-white text-xs font-semibold group-hover:text-gold transition-colors">
                        {tc('details')} <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative py-16 overflow-hidden" id="inquiry">
        <Image
          src={dest.heroImage}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand/80" />
        <Reveal className="relative z-10 max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold text-white mb-2">{t('planSafari', { name: dest.name.split(' ')[0] })}</h2>
          <p className="text-white/70 text-base mb-8">{t('planDesc')}</p>
          <BookNowButton
            label={t('requestQuote')}
            packageName={dest.name}
            packageType={tc('packageTypes.wildlifeSafari')}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold hover:bg-gold-dark text-brand font-bold rounded-xl transition-colors text-sm"
          />
          <p className="text-white/70 text-xs mt-4">{t('noPaymentNote')}</p>
        </Reveal>
      </section>
    </>
  )
}
