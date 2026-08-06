import type { FaqCategory } from './faq'

// Genuinely Spanish-authored content — not a translation of faq.ts. Category
// slugs/order stay identical to the English file (stable jump-nav anchors);
// questions follow real Spanish safari-search patterns (from the Search
// Console export: "safari en familia", "costo safari en tanzania",
// "¿dónde es mejor hacer un safari: kenia o tanzania?", "safari con niños").
export const faqCategories: FaqCategory[] = [
  {
    slug: 'family-and-group-safaris',
    title: 'Safaris en Familia y en Grupo',
    description: 'Safaris con niños, viajes multigeneracionales y grupos pequeños.',
    icon: 'Users',
    items: [
      {
        q: '¿Es Tanzania segura para un safari en familia con niños?',
        a: 'Sí — Tanzania es uno de los destinos de safari familiar más consolidados de África. El principal riesgo a gestionar es la malaria, así que la mayoría de las familias viajan con profilaxis y eligen, cuando es posible, campamentos en zonas de altitud con menor riesgo. Los operadores serios usan vehículos privados (no safaris compartidos), acortan los tiempos de trayecto para los más pequeños, y eligen lodges familiares con habitaciones comunicadas en vez de dobles estándar. Muchos campamentos fijan una edad mínima (normalmente 6-8 años) para caminatas guiadas, pero los game drives en vehículo suelen estar abiertos a cualquier edad.',
        relatedLinks: [{ label: 'Safari de Lujo en Familia (10 Días)', href: '/safaris/10-days-luxury-family' }],
      },
      {
        q: '¿Cuál es el mejor itinerario de safari para una familia con niños pequeños?',
        a: 'El mejor itinerario de safari familiar se mantiene dentro del Circuito Norte de Tanzania (Serengeti, Ngorongoro, Tarangire, Lago Manyara) para minimizar los traslados largos, usa vehículos 4x4 privados en lugar de camiones compartidos, e incluye tiempo de descanso en cada campamento — piscina, caminatas de naturaleza para niños, programas de guardaparques junior — en vez de game drives consecutivos. Un guía privado capaz de ajustar el ritmo del día a la capacidad de atención de un niño marca más diferencia que los parques concretos elegidos.',
        relatedLinks: [{ label: 'Destinos por Circuito', href: '/destinations/tanzania' }],
      },
      {
        q: '¿Cuántos días debe durar un safari en familia?',
        a: 'La mayoría de los safaris familiares duran entre 5 y 7 días — suficiente para cubrir 2-3 parques sin prisas, y lo bastante corto para mantener la atención de los más pequeños y gestionar el jet lag. Las familias que combinan el safari con una extensión de playa en Zanzíbar suelen añadir 3-4 días más en la costa, ya que los niños pequeños normalmente llevan mejor una estancia de playa que game drives consecutivos.',
      },
      {
        q: '¿Pueden viajar juntos los abuelos o un grupo multigeneracional en el mismo safari?',
        a: 'Sí — los safaris multigeneracionales y en grupo pequeño son comunes, y los campamentos suelen acomodar un rango de edad amplio dentro del mismo itinerario. La principal consideración es el ritmo: un viaje pensado para un abuelo de 70 años y un nieto de 6 funciona mejor con trayectos más cortos, campamentos de fácil acceso (menos escalones, tiendas en planta baja) y días de descanso integrados, en vez de un programa pensado para viajeros solos en plena forma.',
        relatedLinks: [{ label: 'Safaris para Mayores, Aniversarios y Grupos', href: '/safaris/12-day-seniors-anniversary-groups-safari' }],
      },
      {
        q: '¿Qué incluye el precio de un paquete de safari en familia?',
        a: 'Un buen paquete de safari familiar suele incluir un vehículo privado y guía para todo el viaje, todas las tasas de parque y conservación, alojamiento, la mayoría o todas las comidas, y traslados internos. Lo que normalmente NO incluye: vuelos internacionales, visados, propinas, y extras opcionales como un vuelo en globo. Pregunta siempre si el precio es por persona o por familia, ya que la tarificación de habitaciones familiares varía mucho entre campamentos.',
      },
    ],
  },
  {
    slug: 'best-time-and-great-migration',
    title: 'Mejor Época y la Gran Migración',
    description: 'Estaciones, clima, y cuándo ver la migración de los ñus.',
    icon: 'Calendar',
    items: [
      {
        q: '¿Cuándo es la mejor época para ver los cruces de río de la migración de ñus?',
        a: 'Depende de qué parte de la migración quieras ver. Los espectaculares cruces del río Mara ocurren aproximadamente entre julio y octubre en el norte del Serengeti, cuando más de un millón de ñus avanzan hacia Kenia. La temporada de partos — posiblemente la etapa con más actividad de depredadores — ocurre entre enero y marzo en el sur del Serengeti (la zona de Ndutu). No hay un único "mejor mes" para toda la migración, ya que es un evento continuo que se mueve durante todo el año.',
        relatedLinks: [{ label: 'Parque Nacional del Serengeti', href: '/destinations/serengeti' }],
      },
      {
        q: '¿Cuándo ocurre la Gran Migración en Tanzania?',
        a: 'La Gran Migración está ocurriendo en algún punto del ecosistema del Serengeti durante todo el año — es un ciclo continuo, no un evento con fecha de inicio y fin. En resumen: partos en el sur de enero a marzo, movimiento hacia el norte por el Serengeti central de abril a junio, cruces de río en el norte de julio a octubre, y retorno hacia el sur a partir de noviembre. La posición exacta de las manadas varía cada semana según las lluvias, así que el calendario preciso cambia año a año.',
      },
      {
        q: '¿Cuál es el mejor mes para visitar el Serengeti?',
        a: 'No hay un mes universalmente "mejor" — depende de qué quieras ver. Para los cruces de río, apunta a agosto o septiembre. Para la temporada de partos y la mayor densidad de depredadores, enero a marzo. Para menos aglomeraciones y paisajes verdes, las lluvias cortas de noviembre están infravaloradas. Junio y julio ofrecen un buen equilibrio: buen clima, manadas de la migración moviéndose por el Serengeti central y occidental, y menos gente que en el pico de agosto.',
      },
      {
        q: '¿Es Tanzania un destino de safari durante todo el año?',
        a: 'Sí. Tanzania no tiene una verdadera temporada baja para la observación de fauna — las estaciones secas (junio-octubre y enero-febrero) concentran a los animales cerca de fuentes de agua, facilitando las observaciones, mientras que las estaciones lluviosas (marzo-mayo, noviembre) traen paisajes exuberantes, crías recién nacidas, y precios y aglomeraciones notablemente más bajos. Las lluvias largas (marzo-abril) son el período más tranquilo, el único en que algunos campamentos remotos cierran, pero los circuitos principales permanecen abiertos.',
      },
      {
        q: '¿Cuándo es la temporada de partos en el Serengeti y por qué importa?',
        a: 'La temporada de partos ocurre aproximadamente entre enero y marzo en las llanuras herbosas del sur del Serengeti y la zona de Ndutu, cuando pueden nacer hasta 8.000 crías de ñu en un solo día. Es el momento de mayor concentración de depredadores de toda la migración — leones, guepardos, hienas — por lo que es una de las mejores ventanas para la acción de depredadores, aunque no haya cruces de río en esta época.',
      },
    ],
  },
  {
    slug: 'planning-costs-and-comparisons',
    title: 'Planificación, Costos y Kenia vs. Tanzania',
    description: 'Cuánto cuesta un safari, qué incluye, y cómo elegir entre los dos países.',
    icon: 'DollarSign',
    items: [
      {
        q: '¿Cuánto cuesta un safari en Tanzania?',
        a: 'El costo de un safari en Tanzania varía mucho según la temporada, el tamaño del grupo y el estilo de campamento. Como guía aproximada, un safari de gama media bien organizado cuesta unos 400-600 $ por persona y día, un safari de lujo puede llegar a 700-1.200 $+ por persona y día, y un safari de camping económico puede bajar de 300 $ por día. El precio por persona baja considerablemente con grupos más grandes, ya que el vehículo privado, el guía y las tasas de parque se comparten. El precio exacto depende mucho de la temporada elegida — la temporada alta (junio-octubre, enero-febrero) tiene tarifas más altas.',
        relatedLinks: [{ label: 'Ver Paquetes de Safari', href: '/safaris' }],
      },
      {
        q: '¿Dónde es mejor hacer un safari: Kenia o Tanzania?',
        a: 'Ninguno de los dos es objetivamente "mejor" — se adaptan a prioridades distintas. Tanzania tiene más superficie total de parques, el cráter del Ngorongoro, Zanzíbar como extensión de playa, y acoge la migración la mayor parte del año. Kenia tiene el Masai Mara (parte del mismo ecosistema migratorio, ideal para los cruces de río de julio a octubre), vuelos generalmente más cortos desde Europa, y una infraestructura de safari algo más desarrollada en algunas zonas. Muchos viajeros combinan ambos países en un mismo viaje en lugar de elegir uno.',
        relatedLinks: [{ label: 'Destinos en Tanzania', href: '/destinations/tanzania' }, { label: 'Safaris en Kenia', href: '/kenya' }],
      },
      {
        q: '¿Cuántos días necesito para un safari en Tanzania?',
        a: '7 días es la duración ideal para cubrir bien el Circuito Norte (Serengeti, Ngorongoro, Tarangire) sin prisas. 4-5 días funcionan para un viaje centrado en 2 parques. 10-14 días permiten combinar el norte con el circuito sur u oeste, o añadir Zanzíbar o una ascensión al Kilimanjaro. Menos de 4 días de safari suele sentirse como mucho tiempo conduciendo para muy poco tiempo dentro de los propios parques.',
      },
      {
        q: '¿Qué incluye el precio de un safari, y qué no?',
        a: 'La mayoría de los paquetes de safari en Tanzania incluyen: un vehículo privado con conductor-guía, todas las tasas de parque y conservación, alojamiento, y la mayoría de las comidas. Normalmente NO incluyen: vuelos internacionales, el visado de Tanzania, seguro de viaje, propinas para guías y personal de campamento, bebidas alcohólicas, y extras opcionales como un vuelo en globo o una extensión de playa en Zanzíbar. Confirma siempre exactamente qué está incluido antes de comparar presupuestos, ya que "precio de safari" significa cosas distintas según el operador.',
      },
      {
        q: '¿Es más barato reservar directamente con un operador local?',
        a: 'En general sí — reservar directamente con un operador local con licencia, con base en Tanzania, evita el margen que añaden las plataformas de reserva y agencias internacionales, a menudo entre un 15 y un 30 %. La contrapartida es investigar más por tu cuenta para verificar la licencia, las reseñas y la calidad de vehículos y guías, ya que pierdes el filtro de la plataforma. Un operador local con base en Arusha también suele tener mejor información en tiempo real sobre las condiciones de los parques y dónde está la migración en cada momento.',
      },
    ],
  },
  {
    slug: 'tanzania-circuits-and-wildlife',
    title: 'Circuitos y Fauna de Tanzania',
    description: 'Los Cinco Grandes, los circuitos de safari de Tanzania, y qué esperar en cada parque.',
    icon: 'Binoculars',
    items: [
      {
        q: '¿Cuáles son los Cinco Grandes de África y dónde verlos en Tanzania?',
        a: 'Los Cinco Grandes — león, leopardo, elefante, búfalo y rinoceronte — se pueden encontrar todos en Tanzania, aunque el rinoceronte es el más raro de ver, ya que la población de rinoceronte negro es baja y está concentrada casi por completo en el cráter del Ngorongoro. León, elefante y búfalo son avistamientos fiables en el Serengeti, Ngorongoro y Tarangire. El leopardo es el más difícil de ver en cualquier parque — la zona de Seronera, en el centro del Serengeti, sigue siendo la más fiable, gracias a su vegetación de ribera.',
        relatedLinks: [{ label: 'Parque Nacional del Serengeti', href: '/destinations/serengeti' }, { label: 'Cráter del Ngorongoro', href: '/destinations/ngorongoro' }],
      },
      {
        q: '¿Cuál es la diferencia entre el cráter del Ngorongoro y el Serengeti?',
        a: 'El Ngorongoro es un ecosistema compacto y autocontenido — una caldera volcánica colapsada de unos 260 km² en el fondo del cráter — donde la fauna está inusualmente concentrada y suele verse en un solo día muy productivo. El Serengeti es inmenso (casi 15.000 km²), llanuras abiertas donde la migración se mueve y los avistamientos se reparten en un área mucho mayor a lo largo de varios días. La mayoría de los itinerarios combinan ambos: el Ngorongoro para un día denso y fiable de los Cinco Grandes, y luego el Serengeti para la experiencia de las llanuras abiertas y la migración.',
        relatedLinks: [{ label: 'Cráter del Ngorongoro', href: '/destinations/ngorongoro' }],
      },
      {
        q: '¿Cuál es la diferencia entre los circuitos Norte, Sur y Oeste de Tanzania?',
        a: 'El Circuito Norte (Serengeti, Ngorongoro, Tarangire, Lago Manyara) es la ruta clásica y más visitada de Tanzania — mejor infraestructura, la migración, Cinco Grandes fiables. El Circuito Sur (Ruaha, Nyerere/Selous) es remoto, poco concurrido y más salvaje — parques más grandes y dispersos, con muchos menos vehículos. El Circuito Oeste (Mahale, Katavi, Gombe) es el territorio del trekking de chimpancés, al que se llega sobre todo en avioneta, y el más alejado de lo convencional de los tres.',
      },
      {
        q: '¿Vale la pena visitar el circuito sur (Ruaha, Nyerere/Selous)?',
        a: 'Sí, especialmente para viajeros que repiten o buscan un safari más tranquilo y exclusivo — Ruaha es el parque nacional más grande de Tanzania y uno de los mejores para ver leones y perros salvajes africanos, y Nyerere (antes Selous) es la mayor área protegida de África, conocida por sus safaris en barco además de los game drives. Ambos reciben una fracción de los visitantes del Circuito Norte. La contrapartida: el acceso es sobre todo en avioneta en lugar de por carretera, lo que aumenta el costo.',
        relatedLinks: [{ label: 'Parque Nacional de Ruaha', href: '/destinations/ruaha' }, { label: 'Parque Nacional de Nyerere (Selous)', href: '/destinations/nyerere' }],
      },
      {
        q: '¿Qué fauna se puede ver en el Parque Nacional Tarangire?',
        a: 'Tarangire es conocido sobre todo por sus manadas de elefantes — algunas de las mayores concentraciones de Tanzania, especialmente en temporada seca (junio-octubre) cuando se reúnen a lo largo del río Tarangire — además de sus característicos baobabs antiguos. También es fuerte en avistamientos de leones, y uno de los mejores parques del Circuito Norte para ver antílopes más pequeños y menos comunes. Suele visitarse como complemento de 1-2 días junto al Serengeti y el Ngorongoro.',
        relatedLinks: [{ label: 'Parque Nacional Tarangire', href: '/destinations/tarangire' }],
      },
    ],
  },
  {
    slug: 'kenya-and-rwanda',
    title: 'Safaris en Kenia y Ruanda',
    description: 'Combinar países, el Masai Mara, y el trekking de gorilas.',
    icon: 'Compass',
    items: [
      {
        q: '¿Se puede combinar un safari en Kenia y Tanzania en un mismo viaje?',
        a: 'Sí, y es una forma habitual de ver tanto el Serengeti como el Masai Mara — técnicamente un único ecosistema continuo dividido por una frontera internacional. Cruzar la frontera requiere un vuelo programado en avioneta o un trayecto largo por carretera, con tasas de entrada de parque separadas en cada lado, así que la mayoría de los itinerarios combinados prevén al menos 10-12 días en total para no sentirse apresurados.',
        relatedLinks: [{ label: 'Safari Kenia y Tanzania (10 Días)', href: '/safaris/10-day-kenya-tanzania-safari' }],
      },
      {
        q: '¿Cuánto cuesta el trekking de gorilas en Ruanda, y hace falta un permiso?',
        a: 'Sí, un permiso es obligatorio y de disponibilidad limitada — el Parque Nacional de los Volcanes, en Ruanda, emite un número fijo de permisos de trekking de gorilas por día, actualmente a 1.500 $ por persona, que incluye una hora con una familia de gorilas habituada, las tasas de parque y un guía. Conviene reservar con bastante antelación, sobre todo para julio-septiembre y diciembre-febrero, las épocas más secas y con más demanda.',
        relatedLinks: [{ label: 'Trekking de Gorilas en Ruanda (4 Días)', href: '/safaris/4-day-rwanda-gorilla-trekking' }, { label: 'Parque Nacional de los Volcanes', href: '/destinations/volcanoes' }],
      },
      {
        q: '¿Cuál es la mejor época para ver gorilas en Ruanda?',
        a: 'El trekking de gorilas es posible todo el año, ya que los permisos no son estacionales, pero las estaciones secas — junio-septiembre y diciembre-febrero — facilitan la caminata por el terreno empinado del Parque Nacional de los Volcanes, con menos barro. Los meses más húmedos (marzo-mayo, octubre-noviembre) implican senderos más difíciles pero notablemente menos turistas, y a veces alojamiento más económico cerca.',
      },
      {
        q: '¿El Masai Mara es lo mismo que el Serengeti?',
        a: 'Forman parte del mismo ecosistema continuo — el Masai Mara es esencialmente la extensión keniana, al norte, del Serengeti — separados solo por una frontera internacional que la fauna ignora por completo. El Mara es más pequeño y recibe las manadas de la migración durante la temporada de cruces de río (aproximadamente julio-octubre); el Serengeti es mucho más grande y acoge la migración el resto del año, incluida la temporada de partos.',
      },
      {
        q: '¿Es físicamente exigente el trekking de gorilas?',
        a: 'Varía mucho de un día a otro — las familias de gorilas se rastrean, no están fijas en un lugar, así que la caminata puede durar desde menos de una hora hasta 4-5 horas en cada dirección, por terreno volcánico empinado y a veces embarrado, en altitud (el Parque Nacional de los Volcanes está entre 2.400 y 4.500 m). Un nivel de forma física razonable es realmente útil; hay porteadores disponibles para llevar las mochilas y dar apoyo en los tramos más empinados.',
      },
    ],
  },
  {
    slug: 'kilimanjaro-and-trekking',
    title: 'Kilimanjaro y Trekking',
    description: 'Rutas, costo, dificultad, y tasas de éxito para subir al Kilimanjaro.',
    icon: 'Mountain',
    items: [
      {
        q: '¿Cuál es la ruta más fácil para subir al Kilimanjaro?',
        a: 'Machame es la ruta más popular y ofrece un buen equilibrio entre paisaje y aclimatación, pero la ruta Lemosho se considera generalmente la más fácil en cuanto a tasa de éxito de cumbre, sobre todo porque su itinerario más largo (7-8 días) da al cuerpo más tiempo para aclimatarse. Marangu es la única ruta con alojamiento en refugios en vez de tiendas y tiene una pendiente diaria más suave, pero su itinerario estándar más corto implica menos tiempo de aclimatación, lo que puede compensar la caminata más fácil.',
        relatedLinks: [{ label: 'Kilimanjaro Ruta Machame', href: '/trekking/machame' }, { label: 'Todas las Rutas del Kilimanjaro', href: '/trekking' }],
      },
      {
        q: '¿Cuánto cuesta subir al Kilimanjaro?',
        a: 'El costo de subir al Kilimanjaro suele oscilar entre 2.000-2.500 $ por persona para una ascensión en grupo económica o de gama media, hasta 3.500-5.000 $+ para una ruta privada, más larga y mejor asistida, con mayor proporción de guías por escalador. Solo las tasas de parque (fijadas por la autoridad de parques nacionales de Tanzania) representan una parte fija considerable de cualquier presupuesto, así que las ascensiones muy baratas suelen implicar recortes en los salarios del equipo, el equipo técnico o los días de aclimatación — todo lo cual afecta tanto a la seguridad como al éxito de cumbre.',
        relatedLinks: [{ label: 'Kilimanjaro Ruta Machame', href: '/trekking/machame' }],
      },
      {
        q: '¿Cuál es la tasa de éxito para llegar a la cumbre del Kilimanjaro?',
        a: 'Las tasas de éxito varían enormemente según la duración de la ruta: las rutas cortas de 5 días tienen tasas de éxito tan bajas como 40-50 % por falta de aclimatación suficiente, mientras que las rutas bien ritmadas de 7-8 días como Lemosho registran tasas de éxito del 85-90 %+. El factor más determinante para llegar a la cumbre no es la forma física — es dar al cuerpo suficientes días para aclimatarse a la altitud, por lo que las rutas más largas rinden sistemáticamente mejor.',
      },
      {
        q: '¿Cuántos días se tarda en subir al Kilimanjaro?',
        a: 'La mayoría de las rutas toman entre 6 y 8 días ida y vuelta, aunque Marangu puede hacerse en 5 y opciones más largas como un Lemosho completo o la ruta del Circuito Norte pueden llegar a 8-9 días. Añadir aunque sea un día extra de aclimatación mejora notablemente tanto la comodidad como el éxito de cumbre, por lo que la mayoría de los operadores experimentados desaconsejan el itinerario más corto disponible en cualquier ruta.',
      },
      {
        q: '¿Hace falta ser un excursionista experimentado para subir al Kilimanjaro?',
        a: 'No se requiere experiencia de escalada técnica ni equipo especializado en ninguna de las rutas de trekking estándar — es una larga caminata en altitud, no una ascensión técnica. Dicho esto, un nivel razonable de forma física básica (poder caminar cómodamente 5-7 horas al día) marca una diferencia real en cuánto disfrutas la experiencia, y la altitud afecta la condición física de forma impredecible, así que incluso los excursionistas experimentados deben tomarse en serio la aclimatación.',
      },
    ],
  },
  {
    slug: 'honeymoon-zanzibar-and-experiences',
    title: 'Luna de Miel, Zanzíbar y Experiencias Especiales',
    description: 'Safaris de luna de miel, extensiones de playa, globo aerostático, y viajes de fotografía.',
    icon: 'Heart',
    items: [
      {
        q: '¿Cuál es el mejor itinerario de luna de miel combinando safari y playa?',
        a: 'La combinación clásica es 4-5 noches de safari en el Circuito Norte (Serengeti y Ngorongoro cubren lo esencial de forma eficiente) seguidas de 4-5 noches en Zanzíbar para la parte de playa — unos 9-10 días en total. Los campamentos especializados en lunas de miel suelen ofrecer cenas privadas, un ambiente orientado a adultos, y suites de tienda de gama alta en lugar de habitaciones con configuración familiar, así que conviene confirmar que un alojamiento es apto para luna de miel y no solo familiar.',
        relatedLinks: [{ label: 'Luna de Miel Safari y Zanzíbar (9 Días)', href: '/safaris/9-day-honeymoon-safari-zanzibar' }, { label: 'Zanzíbar', href: '/destinations/zanzibar' }],
      },
      {
        q: '¿Cuánto cuesta un vuelo en globo aerostático sobre el Serengeti?',
        a: 'Un vuelo en globo aerostático sobre el Serengeti suele costar entre 550-700 $ por persona por aproximadamente una hora en el aire al amanecer, normalmente seguido de un desayuno de campo con champán. Se cotiza como un extra opcional sobre un itinerario de safari estándar, y hay que reservarlo con antelación, ya que cada compañía de globos solo puede llevar a un número limitado de personas cada mañana.',
      },
      {
        q: '¿Se puede combinar un safari en Tanzania con unas vacaciones de playa en Zanzíbar?',
        a: 'Sí — es una de las extensiones más populares, y logísticamente sencilla: Zanzíbar está a un corto vuelo de Arusha o de los principales circuitos de safari, así que la mayoría de los operadores la incorporan como un tramo final natural. Una división habitual es 5-7 días de safari seguidos de 3-5 días de playa, aunque la proporción es totalmente flexible según cuánto tiempo de playa frente a fauna se quiera.',
        relatedLinks: [{ label: 'Safari y Zanzíbar (10 Días)', href: '/safaris/10-day-safari-zanzibar' }],
      },
      {
        q: '¿Un safari fotográfico es distinto de un safari normal?',
        a: 'Sí — un safari fotográfico dedicado usa vehículos adaptados para fotógrafos (soportes tipo beanbag, más espacio en ventanas, a veces una trampilla de techo a altura de fotógrafo), mantiene grupos más reducidos, y organiza el día en torno a la luz — saliendo del campamento antes del amanecer y permaneciendo fuera hasta la hora dorada, en lugar de un horario fijo de game drive. Los guías en estos safaris también suelen estar formados para priorizar el buen posicionamiento para la foto por encima de simplemente contabilizar especies.',
        relatedLinks: [{ label: 'Safari de Fotografía (7 Días)', href: '/safaris/7-day-photography-adventure-safari' }],
      },
      {
        q: '¿Qué es un safari fly-in y vale la pena el costo adicional?',
        a: 'Un safari fly-in usa avionetas para moverse entre parques en lugar de largos traslados por carretera — un trayecto que podría tomar 6-8 horas en coche se convierte en un vuelo de 45-60 minutos. Vale la pena sobre todo en viajes que cubren el circuito sur u oeste (Ruaha, Nyerere, Mahale), donde los traslados por carretera son realmente largos y duros; para los parques del Circuito Norte, más próximos entre sí, conducir entre ellos suele formar parte de la experiencia en vez de ser un inconveniente.',
      },
    ],
  },
  {
    slug: 'culture-health-and-logistics',
    title: 'Cultura, Salud y Logística Práctica',
    description: 'Los masáis, las vacunas, los visados, y qué llevar en la maleta.',
    icon: 'ShieldCheck',
    items: [
      {
        q: '¿Quiénes son los masáis?',
        a: 'Los masáis son un pueblo pastoril seminómada originario del norte de Tanzania y el sur de Kenia, centrado históricamente en la ganadería a través de la región del Serengeti y el Valle del Rift — las mismas tierras que hoy atraviesan muchos circuitos de safari. Muchas comunidades masáis cercanas al Circuito Norte reciben visitantes para visitas culturales a sus aldeas, una forma auténtica y organizada por un guía de conocer sus tradiciones, su vestimenta distintiva y su forma de vida, en lugar de verlos solo como un telón de fondo de la fauna.',
      },
      {
        q: '¿Quiénes son los hadzabe, y se puede visitar su comunidad en un safari?',
        a: 'Los hadzabe son una de las últimas comunidades verdaderamente cazadoras-recolectoras del mundo, viven alrededor del lago Eyasi, en el norte de Tanzania, y todavía hablan una lengua de clics muy distintiva. Sí — es posible una visita respetuosa y guiada, y es un interés genuinamente creciente entre los viajeros que buscan combinar cultura y fauna: una visita típica incluye unirse a una cacería o recolección matutina con los hadzabe, seguida de una parada con los datoga vecinos, conocidos por su herrería tradicional. Estas visitas funcionan mejor en viajes con protocolos éticos y liderados por la comunidad, no como paradas improvisadas.',
        relatedLinks: [{ label: 'Experiencia Tarangire, Ngorongoro y Hadzabe', href: '/experiences/cultural-experience' }],
      },
      {
        q: '¿Necesito vacunas o medicación antipalúdica para un safari en Tanzania?',
        a: 'Se requiere un certificado de vacunación contra la fiebre amarilla si llegas desde (o has transitado por) un país con riesgo de transmisión de fiebre amarilla — verifica los requisitos actuales según tu itinerario concreto. Se recomienda encarecidamente la profilaxis antipalúdica para las regiones de safari (la mayor parte de la Tanzania continental), aunque Zanzíbar y las zonas de mayor altitud como Arusha o el borde del cráter del Ngorongoro presentan menor riesgo. Las vacunas de rutina (tétanos, hepatitis A/B, tifoidea) suelen recomendarse en los centros de vacunación internacional, pero no son requisitos de entrada a Tanzania. Confirma siempre las recomendaciones actuales con un profesional de medicina del viajero antes de partir.',
      },
      {
        q: '¿Qué visado necesito para visitar Tanzania?',
        a: 'La mayoría de las nacionalidades necesitan visado para entrar en Tanzania, disponible como e-visa solicitado en línea con antelación, o a la llegada en los principales aeropuertos para muchas nacionalidades. Tramitar el e-visa antes de viajar suele ser más rápido y menos estresante que llegar sin él. Los requisitos y las nacionalidades elegibles cambian periódicamente, así que confirma siempre las normas actuales directamente con inmigración de Tanzania o tu embajada, cerca de tus fechas de viaje, en lugar de fiarte de información antigua.',
      },
      {
        q: '¿Qué debo llevar para un safari?',
        a: 'Ropa de colores neutros (caqui, oliva, marrón — evita colores vivos y el blanco o negro puros, que pueden atraer insectos o llamar la atención de la fauna), capas para los game drives fríos de primera hora que se calientan rápido, un sombrero de ala ancha, protector solar, prismáticos, y una funda impermeable o acolchada para el equipo fotográfico por las pistas polvorientas. La mayoría de los campamentos ofrecen servicio de lavandería, así que suele bastar con hacer la maleta para 4-5 días aunque el safari sea más largo.',
      },
      {
        q: '¿Es Tanzania segura para los turistas?',
        a: 'Las regiones de safari de Tanzania son zonas bien establecidas y dependientes del turismo, con un buen historial de seguridad — los riesgos prácticos en un safari guiado tienen más que ver con la exposición al sol, el estado de las carreteras y el sentido común cerca de la fauna (permanecer en el vehículo, seguir las indicaciones del guía) que con la delincuencia. Como en cualquier viaje internacional, se aplican las precauciones habituales en ciudades y puntos de tránsito. Los operadores serios informan a cada cliente sobre las pautas de seguridad al inicio del viaje.',
      },
    ],
  },
  {
    slug: 'about-ewa',
    title: 'Sobre EWA Safari Outfitters',
    description: 'Quiénes somos, nuestras credenciales, y qué hace diferente a un safari con EWA.',
    icon: 'Award',
    items: [
      {
        q: '¿Qué es EWA Safari Outfitters?',
        a: 'EWA Safari Outfitters es un operador de safaris local, con base en Arusha, que organiza safaris a medida en Tanzania, Kenia y Ruanda desde 2022 — el mismo equipo detrás de la aventura extrema en la naturaleza (extreme wilderness adventure) por el Serengeti, el Ngorongoro y más allá. "EWA" son las siglas de Extreme Wilderness Adventure, el nombre original de la empresa, y cada viaje sigue construyéndose sobre esa misma filosofía: safaris privados y guiados de verdad, no circuitos de grupo empaquetados.',
        relatedLinks: [{ label: 'Sobre EWA Safari Outfitters', href: '/about' }],
      },
      {
        q: '¿EWA Safari Outfitters se llamaba antes Extreme Wilderness Adventure?',
        a: 'Sí — EWA Safari Outfitters se fundó y operó originalmente como Extreme Wilderness Adventure, por eso el dominio del sitio web (theextremewilderness.com) y la cuenta de Instagram (@extremewildernessadventure) siguen llevando ese nombre. El cambio de nombre a "EWA Safari Outfitters" refleja al mismo equipo local con base en Arusha, los mismos guías y las mismas operaciones — es una renovación de marca, no un cambio de propietario ni una empresa distinta.',
        relatedLinks: [{ label: 'Sobre EWA Safari Outfitters', href: '/about' }],
      },
      {
        q: '¿EWA Safari Outfitters está certificada por TATO y es un operador turístico autorizado en Tanzania?',
        a: 'Sí — EWA Safari Outfitters está certificada por TATO (miembro de la Tanzania Association of Tour Operators), el organismo del sector que verifica a los operadores legítimos y autorizados en Tanzania. Reservar con un operador certificado por TATO es una de las formas más sencillas de confirmar que una empresa de safaris en Tanzania está debidamente autorizada y no es un agente no registrado que revende viajes de otros operadores.',
      },
      {
        q: '¿Desde cuándo organiza safaris EWA Safari Outfitters?',
        a: 'EWA Safari Outfitters organiza safaris desde 2022 (más de 5 años operando bajo el nombre Extreme Wilderness Adventure antes y durante el cambio de marca), con más de 200 viajeros guiados por Tanzania, Kenia y Ruanda, una valoración de 4,9 en TripAdvisor, y clientes de más de 40 países — lo suficientemente consolidada como para conocer bien estas rutas, y aún lo bastante pequeña como para planificar cada viaje de forma individual en lugar de encajarlo en un itinerario de grupo fijo.',
      },
      {
        q: '¿Qué hace diferente a EWA Safari Outfitters de otras empresas de safari en Tanzania?',
        a: 'Cada safari de EWA utiliza un vehículo y un guía privados — nunca un camión compartido con otros viajeros que no elegiste —, y la empresa es 100% de propiedad local, con base en Arusha, en lugar de una agencia extranjera que revende viajes de otros operadores. Los clientes reportan un 100% de avistamientos de los Cinco Grandes, y el conocimiento local del equipo sobre el terreno (qué carreteras están abiertas, dónde está exactamente la migración esta semana) viene de estar realmente basados donde ocurren los safaris, no de un centro de llamadas en el extranjero.',
        relatedLinks: [{ label: 'Qué Nos Hace Diferentes', href: '/about#why-us' }],
      },
      {
        q: '¿Quién será mi guía de safari con EWA Safari Outfitters?',
        a: 'El equipo de guías de EWA incluye guías de safari experimentados con base en Tanzania — entre ellos Mike Mawolle, Johnson Rafael y Josh Meela —, cada uno con años recorriendo las mismas rutas del Circuito Norte y Sur, exactamente el tipo de conocimiento local, carretera a carretera, que marca la diferencia entre un buen game drive y uno excelente. Se asigna un guía por viaje, nunca compartido entre varios vehículos a la vez.',
        relatedLinks: [{ label: 'Conoce al Equipo', href: '/about#guides' }],
      },
      {
        q: '¿EWA Safari Outfitters es de propiedad local, o una agencia extranjera que revende viajes?',
        a: 'EWA Safari Outfitters es 100% de propiedad local y tiene su base en Arusha, Tanzania — no es una agencia de propiedad extranjera ni una plataforma de reservas que revende viajes de otros operadores con un recargo. Reservar directamente con un operador local también suele salir más económico, ya que elimina la capa adicional de margen de una agencia internacional.',
      },
      {
        q: '¿Dónde tiene su base EWA Safari Outfitters, y se puede visitar la oficina?',
        a: 'EWA Safari Outfitters tiene su base en Kaloleni, Arusha, Tanzania — cerca de la escuela primaria de Kaloleni —, la misma ciudad desde la que parten la mayoría de los safaris del Circuito Norte y las ascensiones al Kilimanjaro. Los visitantes son bienvenidos a pasar por la oficina antes o después de un viaje; contacta con antelación en info@theextremewilderness.com o al +255 (0) 747 999 070 para organizar una visita.',
        relatedLinks: [{ label: 'Visita Nuestra Oficina', href: '/about' }, { label: 'Contáctanos', href: '/contact' }],
      },
      {
        q: '¿Con qué rapidez responde EWA Safari Outfitters a las consultas?',
        a: 'EWA Safari Outfitters suele responder a las consultas de safari en un par de horas durante el horario laboral de África Oriental, y normalmente el mismo día fuera de ese horario. La forma más rápida de conseguir un presupuesto real y personalizado (no una lista de precios genérica) es el formulario de consulta presente en cualquier página de safari, destino o FAQ de este sitio, que llega directamente al equipo en Arusha.',
        relatedLinks: [{ label: 'Contáctanos', href: '/contact' }],
      },
      {
        q: '¿EWA Safari Outfitters opera solo en Tanzania, o también en Kenia y Ruanda?',
        a: 'EWA Safari Outfitters tiene su base y sus raíces en Tanzania, pero también opera y combina viajes por Kenia (Masai Mara y más allá) y Ruanda (trekking de gorilas en el Parque Nacional de los Volcanes) — muchos clientes combinan dos o tres países en un único itinerario a medida en lugar de reservar cada uno por separado.',
        relatedLinks: [{ label: 'Safaris en Kenia', href: '/kenya' }, { label: 'Safaris en Ruanda', href: '/rwanda' }],
      },
    ],
  },
]

export const FAQ_CATEGORY_SLUGS = faqCategories.map((c) => c.slug)
