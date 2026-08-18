import type { FaqCategory } from './faq'

// Genuinely European Portuguese-authored content — not a machine translation
// of faq.ts. Category slugs/order stay identical to the English file (used
// as stable jump-nav anchors); wording follows Portugal (not Brazil)
// vocabulary, spelling, and grammar conventions throughout.
export const faqCategories: FaqCategory[] = [
  {
    slug: 'family-and-group-safaris',
    title: 'Safaris em Família e em Grupo',
    description: 'Safaris com crianças, viagens multigeracionais e viagens em pequenos grupos.',
    icon: 'Users',
    items: [
      {
        q: 'A Tanzânia é segura para um safari em família com crianças?',
        a: 'Sim — a Tanzânia é um dos destinos de safari em família mais consolidados de África. O principal risco a gerir é a malária, pelo que a maioria das famílias viaja com profilaxia e opta, sempre que possível, por campos em zonas de altitude com menor risco. Os operadores de confiança utilizam veículos privados (não safaris partilhados), reduzem o tempo de condução diário para as crianças mais novas, e escolhem lodges vocacionados para famílias, com quartos comunicantes ou tendas familiares em vez de duplos standard. Muitos campos definem uma idade mínima (normalmente 6-8 anos) para safaris a pé ou determinadas atividades, mas os game drives em si estão abertos a todas as idades.',
        relatedLinks: [{ label: 'Safari de Luxo em Família de 10 Dias', href: '/safaris/10-days-luxury-family' }],
      },
      {
        q: 'Qual é o melhor itinerário de safari para uma família com crianças pequenas?',
        a: 'Os melhores itinerários de safari em família mantêm-se dentro do Circuito Norte da Tanzânia (Serengeti, Ngorongoro, Tarangire, Lago Manyara) para minimizar longos dias de transferência, utilizam veículos 4x4 privados em vez de camiões partilhados, e incluem tempo de pausa em cada campo — piscina, passeios de natureza vocacionados para crianças, programas de junior ranger — em vez de game drives consecutivos. Um guia privado capaz de ajustar o ritmo do dia à capacidade de atenção de uma criança faz mais diferença do que os parques escolhidos em concreto.',
        relatedLinks: [{ label: 'Destinos por Circuito', href: '/destinations/tanzania' }],
      },
      {
        q: 'Quantos dias deve durar um safari em família?',
        a: 'A maioria dos safaris em família dura entre 5 e 7 dias — tempo suficiente para percorrer 2-3 parques sem pressa, e suficientemente curto para manter a atenção das crianças mais novas e gerir o jet lag. As famílias que combinam o safari com uma extensão de praia em Zanzibar acrescentam frequentemente mais 3-4 dias na costa, uma vez que as crianças pequenas costumam adaptar-se melhor a uma estadia de praia do que a game drives consecutivos.',
      },
      {
        q: 'Os avós ou um grupo multigeracional podem viajar juntos num safari?',
        a: 'Sim — os safaris multigeracionais e em pequeno grupo são comuns, e os campos costumam acomodar uma ampla faixa etária dentro do mesmo itinerário. A principal consideração no planeamento é o ritmo: uma viagem pensada para um avô de 70 anos e um neto de 6 anos funciona melhor com dias de condução mais curtos, campos com quartos de fácil acesso (menos degraus, tendas ao nível do solo) e dias de descanso incluídos, em vez de um horário intenso pensado para viajantes solo em melhor forma física.',
        relatedLinks: [{ label: 'Safaris para Seniores, Aniversários e Grupos', href: '/safaris/12-day-seniors-anniversary-groups-safari' }],
      },
      {
        q: 'O que está incluído no preço de um pacote de safari em família?',
        a: 'Um pacote de safari em família bem estruturado inclui normalmente um veículo privado e guia para toda a viagem, todas as taxas de parque e de conservação, alojamento, a maioria ou a totalidade das refeições, e transferências internas. O que normalmente não está incluído: voos internacionais, vistos, gorjetas e extras opcionais como passeios de balão de ar quente. Pergunte especificamente se o preço apresentado é por pessoa ou por família, uma vez que as estruturas de preços de quartos familiares e tendas comunicantes variam bastante entre campos.',
      },
    ],
  },
  {
    slug: 'best-time-and-great-migration',
    title: 'Melhor Época para Visitar e a Grande Migração',
    description: 'Estações, clima e quando ver a migração dos gnus.',
    icon: 'Calendar',
    items: [
      {
        q: 'Qual é a melhor altura para ver as travessias de rio da migração dos gnus?',
        a: 'Depende de que parte da migração se pretende ver. As espetaculares travessias do rio Mara acontecem, grosso modo, entre julho e outubro, no norte do Serengeti, quando mais de um milhão de gnus avançam para norte, em direção ao Quénia. A época de nascimentos — porventura o período com mais ação de predadores — decorre entre janeiro e março, no sul do Serengeti (a região de Ndutu). Não existe um único "melhor mês" para toda a migração, já que se trata de um evento contínuo e em constante movimento ao longo do ano, e não de uma data fixa.',
        relatedLinks: [{ label: 'Parque Nacional do Serengeti', href: '/destinations/serengeti' }],
      },
      {
        q: 'Quando acontece a Grande Migração na Tanzânia?',
        a: 'A Grande Migração está a acontecer nalguma parte do ecossistema do Serengeti em todos os meses do ano — é um circuito contínuo, não um evento único com data de início e fim. De forma geral: nascimentos a sul entre janeiro e março, deslocação para norte através do Serengeti central entre abril e junho, travessias de rio a norte entre julho e outubro, e regresso a sul a partir de novembro, aproximadamente. A localização exata das manadas em cada semana varia consoante a pluviosidade, pelo que o calendário exato muda de ano para ano.',
      },
      {
        q: 'Qual é o melhor mês para visitar o Serengeti?',
        a: 'Não existe um mês universalmente "melhor" — depende do que se pretende ver. Para as travessias de rio, o ideal é agosto ou setembro. Para a época de nascimentos e a maior densidade de predadores, janeiro a março. Para menos multidões e paisagens verdejantes, as chuvas curtas de novembro são uma opção subvalorizada. Junho e julho oferecem um bom equilíbrio: bom tempo, manadas da migração a passar pelo Serengeti central e ocidental, e menos multidões do que no pico de agosto.',
      },
      {
        q: 'A Tanzânia é um destino de safari durante todo o ano?',
        a: 'Sim. A Tanzânia não tem verdadeiramente uma época baixa para a observação de vida selvagem — as estações secas (junho-outubro e janeiro-fevereiro) concentram os animais junto às fontes de água, facilitando os avistamentos, enquanto as estações das chuvas (março-maio, novembro) trazem paisagens exuberantes, animais recém-nascidos e preços e afluência bastante mais baixos. As grandes chuvas (março-abril) são o período mais calmo e o único em que alguns campos remotos fecham, mas os principais circuitos mantêm-se abertos.',
      },
      {
        q: 'Quando é a época de nascimentos no Serengeti e porque é que é importante?',
        a: 'A época de nascimentos decorre, de um modo geral, entre janeiro e março, nas planícies de erva curta do sul do Serengeti e na região de Ndutu, período em que podem nascer até 8.000 crias de gnu num único dia. É a altura em que a migração regista a maior concentração de predadores — leões, chitas e hienas — tornando-a uma das melhores janelas para observar ação de predadores, mesmo não havendo travessias de rio nesta época do ano.',
      },
    ],
  },
  {
    slug: 'planning-costs-and-comparisons',
    title: 'Planeamento, Custos e Quénia vs. Tanzânia',
    description: 'Quanto custa um safari, o que está incluído, e como escolher entre os dois países.',
    icon: 'DollarSign',
    items: [
      {
        q: 'Quanto custa um safari na Tanzânia?',
        a: 'O custo de um safari na Tanzânia varia bastante consoante a época, o tamanho do grupo e o tipo de campo. Como referência geral, um safari de gama média bem organizado custa aproximadamente 400-600 $ por pessoa e por dia, um safari de luxo pode chegar aos 700-1.200 $+ por pessoa e por dia, e um safari de campismo económico pode ficar abaixo dos 300 $ por dia. O preço por pessoa desce significativamente com grupos maiores, uma vez que o veículo privado, o guia e as taxas de parque são partilhados. O preço exato depende muito da época em que se viaja — a época alta (junho-outubro, janeiro-fevereiro) tem tarifas mais elevadas.',
        relatedLinks: [{ label: 'Ver Pacotes de Safari', href: '/safaris' }],
      },
      {
        q: 'Quénia ou Tanzânia — qual é melhor para um safari?',
        a: 'Nenhum dos dois é objetivamente "melhor" — servem prioridades diferentes. A Tanzânia tem mais área total de parques, a Cratera do Ngorongoro, Zanzibar como extensão de praia, e acolhe a migração durante a maior parte do ano. O Quénia tem a Masai Mara (parte do mesmo ecossistema da migração, ideal para as travessias de rio entre julho e outubro), voos geralmente mais curtos a partir da Europa, e uma infraestrutura de safari ligeiramente mais desenvolvida em algumas zonas. Muitos viajantes combinam os dois países numa única viagem, em vez de escolher apenas um.',
        relatedLinks: [{ label: 'Destinos na Tanzânia', href: '/destinations/tanzania' }, { label: 'Safaris no Quénia', href: '/kenya' }],
      },
      {
        q: 'Quantos dias preciso para um safari na Tanzânia?',
        a: '7 dias é o período ideal para percorrer bem o Circuito Norte (Serengeti, Ngorongoro, Tarangire) sem pressa. 4-5 dias funcionam para uma viagem mais concentrada em 2 parques. 10-14 dias permitem combinar o norte com o circuito sul ou oeste, ou acrescentar Zanzibar ou uma ascensão ao Kilimanjaro. Menos de 4 dias de safari tende a resultar em muitas horas de condução para pouco tempo efetivo dentro dos parques.',
      },
      {
        q: 'O que está incluído no preço de um safari, e o que não está?',
        a: 'A maioria dos pacotes de safari na Tanzânia inclui: um veículo privado e guia-condutor, todas as taxas de parque e de conservação, alojamento e a maioria das refeições. Normalmente NÃO inclui: voos internacionais, taxas de visto para a Tanzânia, seguro de viagem, gorjetas para guias e equipa dos campos, bebidas alcoólicas, e extras opcionais como passeios de balão de ar quente ou uma extensão de praia em Zanzibar. Confirme sempre exatamente o que está incluído antes de comparar orçamentos, uma vez que "preço do safari" pode significar coisas diferentes consoante o operador.',
      },
      {
        q: 'É mais barato reservar um safari diretamente com um operador local?',
        a: 'Regra geral, sim — reservar diretamente com um operador local licenciado, sediado na Tanzânia, elimina a margem que as plataformas de reserva e agências internacionais acrescentam, muitas vezes entre 15% e 30%. A contrapartida é ter de investigar mais por conta própria para verificar a licença, as avaliações e a qualidade dos veículos e guias do operador, uma vez que se perde a camada de verificação da plataforma. Um operador de propriedade local sediado em Arusha costuma também ter melhor conhecimento em tempo real das condições dos parques, cortes de estradas e da localização atual da migração.',
      },
    ],
  },
  {
    slug: 'tanzania-circuits-and-wildlife',
    title: 'Circuitos e Vida Selvagem da Tanzânia',
    description: 'Os Big Five, os circuitos de safari da Tanzânia, e o que esperar em cada parque.',
    icon: 'Binoculars',
    items: [
      {
        q: 'Quais são os Big Five e onde posso vê-los na Tanzânia?',
        a: 'Os Big Five — leão, leopardo, elefante, búfalo e rinoceronte — encontram-se todos na Tanzânia, embora os avistamentos de rinoceronte sejam os mais raros, já que a população de rinoceronte-negro é reduzida e está concentrada quase inteiramente na Cratera do Ngorongoro. Leão, elefante e búfalo são avistamentos fiáveis em todo o Serengeti, Ngorongoro e Tarangire. O leopardo é o mais difícil de avistar dos cinco, seja onde for — a zona de Seronera, no Serengeti central, é a mais fiável, dada a sua preferência pela vegetação ribeirinha.',
        relatedLinks: [{ label: 'Parque Nacional do Serengeti', href: '/destinations/serengeti' }, { label: 'Cratera do Ngorongoro', href: '/destinations/ngorongoro' }],
      },
      {
        q: 'Qual é a diferença entre a Cratera do Ngorongoro e o Serengeti?',
        a: 'O Ngorongoro é um ecossistema único, compacto e autónomo — uma caldeira vulcânica colapsada, com cerca de 260 km² no fundo da cratera — onde a vida selvagem está invulgarmente concentrada e costuma ser observada num único dia, muito produtivo. O Serengeti é vasto (quase 15.000 km²), planícies abertas onde a migração se desloca e os avistamentos se espalham por uma área muito maior, ao longo de vários dias. A maioria dos itinerários inclui os dois: o Ngorongoro para um dia denso e fiável de avistamentos dos Big Five, e depois o Serengeti para a experiência das planícies abertas e da migração.',
        relatedLinks: [{ label: 'Cratera do Ngorongoro', href: '/destinations/ngorongoro' }],
      },
      {
        q: 'Qual é a diferença entre os circuitos Norte, Sul e Oeste da Tanzânia?',
        a: 'O Circuito Norte (Serengeti, Ngorongoro, Tarangire, Lago Manyara) é o percurso clássico e mais visitado da Tanzânia — melhor infraestrutura, a migração, e Big Five fiáveis. O Circuito Sul (Ruaha, Nyerere/Selous) é remoto, pouco frequentado e mais selvagem — parques maiores e mais dispersos, com muito menos veículos. O Circuito Oeste (Mahale, Katavi, Gombe) é território de trekking de chimpanzés, acessível sobretudo por avioneta, e o mais afastado dos percursos habituais dos três.',
      },
      {
        q: 'Vale a pena visitar o circuito sul (Ruaha, Nyerere/Selous)?',
        a: 'Sim, especialmente para quem já visitou a Tanzânia antes ou procura um safari mais tranquilo e com sensação de exclusividade — o Ruaha é o maior parque nacional da Tanzânia e um dos melhores para leão e licaon, e o Nyerere (anteriormente Selous) é a maior área protegida de África, conhecida pelos safaris de barco a par dos game drives. Ambos recebem uma fração do número de visitantes do Circuito Norte. A contrapartida é o acesso — a maioria das viagens ao circuito sul faz-se de avião em vez de carro, o que aumenta o custo.',
        relatedLinks: [{ label: 'Parque Nacional de Ruaha', href: '/destinations/ruaha' }, { label: 'Parque Nacional de Nyerere (Selous)', href: '/destinations/nyerere' }],
      },
      {
        q: 'Que vida selvagem posso ver no Parque Nacional de Tarangire?',
        a: 'O Tarangire é mais conhecido pelas suas manadas de elefantes — algumas das maiores concentrações da Tanzânia, especialmente na estação seca (junho-outubro), quando se reúnem ao longo do rio Tarangire — além dos seus característicos e antigos baobás. É também um parque forte para leão, e um dos melhores do Circuito Norte para avistar espécies de antílopes mais pequenas e menos comuns. É normalmente visitado como extensão de 1-2 dias, a par do Serengeti e do Ngorongoro.',
        relatedLinks: [{ label: 'Parque Nacional de Tarangire', href: '/destinations/tarangire' }],
      },
    ],
  },
  {
    slug: 'kenya-and-rwanda',
    title: 'Safaris no Quénia e no Ruanda',
    description: 'Combinar países, a Masai Mara, e o trekking de gorilas.',
    icon: 'Compass',
    items: [
      {
        q: 'Posso combinar um safari no Quénia e na Tanzânia numa só viagem?',
        a: 'Sim, e é uma forma comum de ver tanto o Serengeti como a Masai Mara — tecnicamente um único ecossistema contínuo, dividido por uma fronteira internacional. A travessia da fronteira exige um voo de avioneta programado ou uma longa viagem por estrada, além de taxas de entrada em parques separadas de cada lado, pelo que a maioria dos itinerários combinados prevê pelo menos 10-12 dias no total, para evitar uma sensação de pressa.',
        relatedLinks: [{ label: 'Safari de 10 Dias no Quénia e na Tanzânia', href: '/safaris/10-day-kenya-tanzania-safari' }],
      },
      {
        q: 'Quanto custa o trekking de gorilas no Ruanda, e é preciso uma licença?',
        a: 'Sim, uma licença é obrigatória e disponível em número limitado — o Parque Nacional dos Vulcões, no Ruanda, emite um número fixo de licenças de trekking de gorilas por dia, atualmente ao preço de 1.500 $ por pessoa, o que inclui uma hora com uma família de gorilas habituada, além das taxas de parque e de um guia. As licenças devem ser reservadas com bastante antecedência, especialmente para os períodos de julho a setembro e de dezembro a fevereiro, as épocas mais secas e mais procuradas para o trekking.',
        relatedLinks: [{ label: 'Trekking de Gorilas no Ruanda de 4 Dias', href: '/safaris/4-day-rwanda-gorilla-trekking' }, { label: 'Parque Nacional dos Vulcões', href: '/destinations/volcanoes' }],
      },
      {
        q: 'Qual é a melhor época para ver os gorilas no Ruanda?',
        a: 'O trekking de gorilas é possível durante todo o ano, uma vez que as licenças não são sazonais, mas as estações secas — junho a setembro e dezembro a fevereiro — tornam a caminhada mais fácil e menos lamacenta no terreno íngreme do Parque Nacional dos Vulcões. Os meses mais húmidos (março-maio, outubro-novembro) implicam trilhos mais difíceis, mas claramente menos turistas e, por vezes, alojamento mais barato nas proximidades.',
      },
      {
        q: 'A Masai Mara é o mesmo que o Serengeti?',
        a: 'Fazem parte do mesmo ecossistema contínuo — a Masai Mara é, essencialmente, a extensão queniana, a norte, do Serengeti — separadas apenas por uma fronteira internacional que a própria vida selvagem ignora. A Mara é mais pequena e recebe as manadas da migração durante a época das travessias de rio (aproximadamente julho-outubro); o Serengeti é muito maior e acolhe a migração no resto do ano, incluindo a época de nascimentos.',
      },
      {
        q: 'O trekking de gorilas é fisicamente exigente?',
        a: 'Varia bastante de caminhada para caminhada — as famílias de gorilas são localizadas, não estão fixas num só sítio, pelo que uma caminhada pode durar entre menos de uma hora e 4-5 horas de percurso em cada sentido, por floresta vulcânica íngreme, por vezes lamacenta, em altitude (o Parque Nacional dos Vulcões situa-se entre os 2.400 e os 4.500 metros). Um nível de forma física razoável é genuinamente útil; existem carregadores disponíveis para transportar as mochilas e prestar apoio nos troços mais íngremes a quem estiver preocupado com o terreno.',
      },
    ],
  },
  {
    slug: 'kilimanjaro-and-trekking',
    title: 'Kilimanjaro e Trekking',
    description: 'Rotas, custo, dificuldade e taxas de sucesso na ascensão ao Kilimanjaro.',
    icon: 'Mountain',
    items: [
      {
        q: 'Qual é a rota mais fácil para subir o Kilimanjaro?',
        a: 'A rota Machame é a mais popular e oferece um bom equilíbrio entre paisagem e aclimatação, mas a rota Lemosho é geralmente considerada a mais fácil em termos de sucesso na chegada ao cume, sobretudo porque o seu itinerário mais longo (7-8 dias) dá ao corpo mais tempo para se aclimatar. A Marangu é a única rota com alojamento em refúgios em vez de tendas e tem um declive diário mais suave, mas o seu itinerário-padrão mais curto significa menos tempo de aclimatação, o que pode anular a vantagem de uma caminhada mais fácil.',
        relatedLinks: [{ label: 'Rota Machame do Kilimanjaro', href: '/trekking/machame' }, { label: 'Todas as Rotas do Kilimanjaro', href: '/trekking' }],
      },
      {
        q: 'Quanto custa subir o Kilimanjaro?',
        a: 'O custo de subir o Kilimanjaro varia normalmente entre 2.000-2.500 $ por pessoa numa ascensão em grupo de gama económica a média, até 3.500-5.000 $+ para uma rota privada, mais longa e com mais apoio, com um rácio guia-alpinista mais elevado. As taxas de parque, por si só (fixadas pela autoridade dos parques nacionais da Tanzânia), representam uma grande parte fixa de qualquer orçamento, pelo que ascensões muito baratas normalmente significam cortes nos salários da equipa, no equipamento ou nos dias de aclimatação — o que afeta tanto a segurança como o sucesso na chegada ao cume.',
        relatedLinks: [{ label: 'Rota Machame do Kilimanjaro', href: '/trekking/machame' }],
      },
      {
        q: 'Qual é a taxa de sucesso para chegar ao cume do Kilimanjaro?',
        a: 'As taxas de sucesso na chegada ao cume variam imenso consoante a duração da rota: rotas mais curtas, de 5 dias, registam taxas de sucesso tão baixas quanto 40-50%, devido a tempo de aclimatação insuficiente, enquanto rotas bem ritmadas de 7-8 dias, como a Lemosho, apresentam taxas de sucesso de 85-90%+. O fator mais determinante para chegar ao cume não é a forma física — é dar ao corpo dias suficientes para se aclimatar à altitude, razão pela qual as rotas mais longas superam sistematicamente as mais curtas.',
      },
      {
        q: 'Quantos dias demora a subida ao Kilimanjaro?',
        a: 'A maioria das rotas demora entre 6 e 8 dias, ida e volta, embora a Marangu possa ser feita em 5 dias e opções mais longas, como uma Lemosho completa ou a rota do Circuito Norte, possam durar 8-9 dias. Acrescentar mesmo apenas mais um dia de aclimatação melhora significativamente tanto o conforto como o sucesso na chegada ao cume, pelo que a maioria dos operadores experientes desaconselha o itinerário mais curto disponível em qualquer rota.',
      },
      {
        q: 'Preciso de ser um caminhante experiente para subir o Kilimanjaro?',
        a: 'Não é necessária qualquer experiência de escalada técnica nem equipamento especializado em nenhuma das rotas de trekking padrão — é uma longa caminhada em altitude elevada, não uma ascensão técnica. Dito isto, um nível de forma física razoável (conseguir caminhar confortavelmente 5-7 horas por dia) faz uma verdadeira diferença no quanto se aprecia a experiência, e a altitude afeta a forma física de maneira imprevisível, pelo que mesmo caminhantes experientes devem levar a aclimatação a sério.',
      },
    ],
  },
  {
    slug: 'honeymoon-zanzibar-and-experiences',
    title: 'Lua de Mel, Zanzibar e Experiências Especiais',
    description: 'Safaris de lua de mel, extensões de praia, balões de ar quente e viagens fotográficas.',
    icon: 'Heart',
    items: [
      {
        q: 'Qual é o melhor itinerário de lua de mel combinando safari e praia?',
        a: 'A combinação clássica é 4-5 noites de safari no Circuito Norte (Serengeti e Ngorongoro cobrem os pontos altos de forma eficiente), seguidas de 4-5 noites em Zanzibar para a parte de praia da viagem — cerca de 9-10 dias no total. Os campos vocacionados para luas de mel tendem a oferecer jantares privados, ambientes pensados só para adultos e suites de tenda de gama alta, em vez de quartos configurados para famílias, pelo que vale a pena confirmar que um alojamento é adequado para luas de mel, e não apenas amigo das famílias.',
        relatedLinks: [{ label: 'Safari de Lua de Mel e Zanzibar de 9 Dias', href: '/safaris/9-day-honeymoon-safari-zanzibar' }, { label: 'Zanzibar', href: '/destinations/zanzibar' }],
      },
      {
        q: 'Quanto custa um safari de balão de ar quente sobre o Serengeti?',
        a: 'Um voo de balão de ar quente sobre o Serengeti custa normalmente entre 550-700 $ por pessoa, para cerca de uma hora no ar ao nascer do sol, geralmente seguido de um pequeno-almoço na savana com champanhe. É apresentado como um extra opcional a um itinerário de safari padrão, e não incluído por defeito, sendo necessário reservar com antecedência, já que cada empresa de balões só transporta um número limitado de pessoas em cada manhã.',
      },
      {
        q: 'Posso combinar um safari na Tanzânia com umas férias de praia em Zanzibar?',
        a: 'Sim — é uma das extensões de safari mais populares, e logisticamente simples: Zanzibar fica a um curto voo de Arusha ou dos principais circuitos de safari, pelo que a maioria dos operadores a integra como uma etapa final natural. Uma divisão comum é 5-7 dias de safari seguidos de 3-5 dias de praia, embora a proporção seja totalmente flexível, consoante o equilíbrio pretendido entre tempo de praia e tempo de observação de vida selvagem.',
        relatedLinks: [{ label: 'Safari e Zanzibar de 10 Dias', href: '/safaris/10-day-safari-zanzibar' }],
      },
      {
        q: 'Um safari fotográfico é diferente de um safari normal?',
        a: 'Sim — um safari fotográfico dedicado utiliza veículos adaptados para fotógrafos (apoios de saco de feijão, mais espaço junto às janelas, por vezes uma escotilha no tejadilho à altura do fotógrafo), mantém grupos mais pequenos, e organiza o dia em função da luz — saindo do campo antes do nascer do sol e permanecendo no terreno até à hora dourada, em vez de seguir um horário fixo de game drive. Os guias em viagens vocacionadas para a fotografia também costumam estar preparados para privilegiar o posicionamento para a fotografia, em vez de se limitarem a assinalar espécies avistadas.',
        relatedLinks: [{ label: 'Safari Fotográfico de Aventura de 7 Dias', href: '/safaris/7-day-photography-adventure-safari' }],
      },
      {
        q: 'O que é um safari fly-in, e vale a pena o custo adicional?',
        a: 'Um safari fly-in utiliza avionetas para se deslocar entre parques, em vez de longas transferências de veículo — uma viagem de carro que poderia demorar 6-8 horas passa a ser um voo de 45-60 minutos. Vale o custo adicional sobretudo em viagens que cobrem os circuitos sul ou oeste (Ruaha, Nyerere, Mahale), onde as transferências por estrada são genuinamente longas e difíceis; nos parques do Circuito Norte, muito próximos entre si, conduzir entre eles costuma fazer parte da experiência, e não ser uma desvantagem.',
      },
    ],
  },
  {
    slug: 'culture-health-and-logistics',
    title: 'Cultura, Saúde e Logística Prática',
    description: 'Os Maasai, vacinas, vistos e o que levar na bagagem.',
    icon: 'ShieldCheck',
    items: [
      {
        q: 'Quem são os Maasai?',
        a: 'Os Maasai são um povo pastoril seminómada, indígena do norte da Tanzânia e do sul do Quénia, historicamente centrado na criação de gado pela região do Serengeti e do Vale do Rift — as mesmas terras que hoje muitos circuitos de safari atravessam. Muitas comunidades Maasai próximas do Circuito Norte recebem visitantes para visitas culturais às aldeias, oferecendo uma forma genuína e organizada por guias de conhecer as suas tradições, o seu vestuário distintivo e o seu modo de vida, em vez de os ver apenas como pano de fundo para a vida selvagem.',
      },
      {
        q: 'Quem são os Hadzabe, e posso visitar a sua comunidade durante um safari?',
        a: 'Os Hadzabe são uma das últimas verdadeiras comunidades de caçadores-recoletores do mundo, vivendo em torno do Lago Eyasi, no norte da Tanzânia, e falando ainda uma língua distintiva de cliques. Sim — uma visita respeitosa e conduzida por um guia é possível, e representa um interesse genuinamente crescente entre viajantes que procuram associar cultura e vida selvagem: uma visita típica inclui participar numa caçada matinal ou numa caminhada de recoleção com os Hadzabe, seguida de uma paragem junto aos vizinhos Datoga, conhecidos pela sua ferraria tradicional. Estas visitas funcionam melhor em viagens organizadas pela própria comunidade, com protocolos éticos, em vez de visitas informais e sem preparação.',
        relatedLinks: [{ label: 'Experiência Tarangire, Ngorongoro e Hadzabe', href: '/experiences/cultural-experience' }],
      },
      {
        q: 'Preciso de vacinas ou medicação antimalárica para um safari na Tanzânia?',
        a: 'É exigido um certificado de vacinação contra a febre amarela caso se esteja a chegar (ou se tenha estado em trânsito) de um país com risco de transmissão de febre amarela — verifique os requisitos atuais de acordo com o seu itinerário específico. A profilaxia antimalárica é fortemente recomendada para as regiões de safari (a maior parte da Tanzânia continental), embora Zanzibar e zonas de maior altitude, como Arusha e a orla da Cratera do Ngorongoro, apresentem menor risco. As vacinas de rotina (tétano, hepatite A/B, febre tifoide) são normalmente recomendadas pelas clínicas de saúde do viajante, mas não são requisitos de entrada na Tanzânia. Confirme sempre as orientações atuais com um profissional de saúde do viajante antes da partida.',
      },
      {
        q: 'De que visto preciso para visitar a Tanzânia?',
        a: 'A maioria das nacionalidades precisa de um visto para entrar na Tanzânia, disponível como e-visa, pedido online com antecedência, ou, para muitas nacionalidades, à chegada nos principais aeroportos. Tratar do e-visa antes da viagem é geralmente mais rápido e menos stressante do que chegar sem ele. Os requisitos e as nacionalidades elegíveis mudam periodicamente, pelo que deve confirmar sempre as regras atuais diretamente junto das autoridades de imigração da Tanzânia ou da sua embaixada, próximo das datas de viagem, em vez de confiar em informação desatualizada.',
      },
      {
        q: 'O que devo levar para um safari?',
        a: 'Roupa de cores neutras (cáqui, verde-oliva, castanho — evite cores vivas e o branco ou preto puros, que podem atrair insetos ou destacar-se perante a vida selvagem), camadas de roupa para os game drives matinais frios que aquecem depressa, um chapéu de abas largas, protetor solar, binóculos, e um saco impermeável ou uma mala acolchoada para o equipamento fotográfico, dadas as estradas com muito pó. A maioria dos campos oferece serviço de lavandaria, pelo que levar roupa para 4-5 dias costuma ser suficiente, mesmo em safaris mais longos.',
      },
      {
        q: 'A Tanzânia é segura para turistas?',
        a: 'As regiões de safari da Tanzânia são zonas bem estabelecidas, dependentes do turismo, com um bom historial de segurança — os riscos práticos num safari organizado prendem-se mais com a exposição solar, as condições das estradas e o bom senso na proximidade com a vida selvagem (permanecer no veículo, seguir as instruções do guia) do que com a criminalidade. Tal como em qualquer viagem internacional, aplicam-se as precauções habituais nas cidades e nos pontos de trânsito. Os operadores de confiança informam todos os hóspedes sobre as normas de segurança logo no início da viagem.',
      },
    ],
  },
  {
    slug: 'about-ewa',
    title: 'Sobre a EWA Safari Outfitters',
    description: 'Quem somos, as nossas credenciais, e o que torna um safari EWA diferente.',
    icon: 'Award',
    items: [
      {
        q: 'O que é a EWA Safari Outfitters?',
        a: 'A EWA Safari Outfitters é um operador de safaris de propriedade local, sediado em Arusha, que organiza safaris personalizados na Tanzânia, no Quénia e no Ruanda desde 2022 — a mesma equipa por trás das viagens de aventura na natureza extrema (extreme wilderness adventure) pelo Serengeti, pelo Ngorongoro e mais além. "EWA" significa Extreme Wilderness Adventure, o nome original da empresa, e cada viagem continua a ser construída em torno dessa mesma filosofia: safaris genuínos, privados e conduzidos por guias, em vez de circuitos de grupo pré-formatados.',
        relatedLinks: [{ label: 'Sobre a EWA Safari Outfitters', href: '/about' }],
      },
      {
        q: 'A EWA Safari Outfitters chamava-se anteriormente Extreme Wilderness Adventure?',
        a: 'Sim — a EWA Safari Outfitters foi originalmente fundada e operou como Extreme Wilderness Adventure, razão pela qual o domínio do site (theextremewilderness.com) e o perfil de Instagram (@extremewildernessadventure) mantêm ainda esse nome. A mudança de nome para "EWA Safari Outfitters" reflete a mesma equipa local, sediada em Arusha, os mesmos guias e as mesmas operações — é uma renovação de imagem, não uma mudança de proprietário nem uma empresa diferente.',
        relatedLinks: [{ label: 'Sobre a EWA Safari Outfitters', href: '/about' }],
      },
      {
        q: 'A EWA Safari Outfitters é certificada pela TATO e um operador turístico licenciado na Tanzânia?',
        a: 'Sim — a EWA Safari Outfitters é Certificada pela TATO (membro da Tanzania Association of Tour Operators), o organismo do setor que valida os operadores legítimos e licenciados na Tanzânia. Reservar com um operador certificado pela TATO é uma das formas mais simples de confirmar que uma empresa de safaris na Tanzânia está devidamente licenciada, em vez de ser um agente não registado a revender viagens de outros operadores.',
      },
      {
        q: 'O que significa a adesão à TATO, na prática, para a minha reserva?',
        a: 'A TATO representa e fiscaliza os operadores turísticos da Tanzânia desde 1983, pelo que ser membro significa que a EWA Safari Outfitters é reconhecida pelo mesmo organismo do setor com que trabalham tanto o governo como o setor internacional das viagens — e não apenas uma empresa que se autodenomina licenciada. Na prática, isso significa um verdadeiro organismo do setor a garantir a reserva caso alguma vez seja preciso resolver algo que vá além do nosso próprio serviço de apoio ao cliente, e é por isso que a adesão à TATO é uma das verificações habituais que os viajantes mais cautelosos fazem antes de reservar um safari na Tanzânia. A EWA está listada especificamente em seis categorias da TATO — Tour Operators, Mainland Tour Operators, DMC/Tour Operators, Mountain Trekking Operators, Zanzibar & Beach Holiday Operators e Cultural Experience Operators — que cobrem os nossos itinerários de safari, as escaladas ao Kilimanjaro, as extensões a Zanzibar e as excursões culturais.',
      },
      {
        q: 'Como posso verificar pessoalmente a adesão da EWA Safari Outfitters à TATO?',
        a: 'Diretamente no site oficial da TATO — a nossa listagem é pública, não é algo que controlemos ou que possamos adulterar. É uma forma rápida e independente de confirmar que somos um operador genuíno e licenciado antes de reservar, em vez de confiar apenas na palavra de qualquer operador.',
        relatedLinks: [{ label: 'Ver a Nossa Listagem de Membro da TATO', href: 'https://tatotz.org/portfolio/ewa-safari-outfitters/' }],
      },
      {
        q: 'Há quanto tempo a EWA Safari Outfitters organiza safaris?',
        a: 'A EWA Safari Outfitters organiza safaris desde 2022 (mais de 5 anos a operar sob o nome Extreme Wilderness Adventure, antes e durante a mudança de nome), com mais de 200 viajantes guiados pela Tanzânia, Quénia e Ruanda, uma classificação de 4,9 no TripAdvisor, e hóspedes de mais de 40 países — suficientemente estabelecida para conhecer bem estes percursos, mas ainda suficientemente pequena para que cada viagem seja planeada individualmente, em vez de encaixada num itinerário de grupo fixo.',
      },
      {
        q: 'O que torna a EWA Safari Outfitters diferente de outras empresas de safari na Tanzânia?',
        a: 'Todos os safaris EWA utilizam um veículo e um guia privados — nunca um camião partilhado com outros viajantes que não escolheu ter na sua viagem — e a empresa é 100% de propriedade local e sediada em Arusha, em vez de uma agência estrangeira a revender viagens de outros operadores. Os hóspedes relatam uma taxa de avistamento dos Big Five de 100%, e o conhecimento local da equipa no terreno (que estradas estão abertas, onde está exatamente a migração nesta semana) resulta de estar realmente sediada onde os safaris acontecem, e não de um call center no estrangeiro.',
        relatedLinks: [{ label: 'O Que Nos Torna Diferentes', href: '/about#why-us' }],
      },
      {
        q: 'Quem será o meu guia de safari com a EWA Safari Outfitters?',
        a: 'A equipa de guias da EWA inclui guias de safari experientes, sediados na Tanzânia — entre eles Mike Mawolle, Nixon Massawe e Josh Meela — cada um com anos de experiência a percorrer os mesmos percursos dos Circuitos Norte e Sul, exatamente o tipo de conhecimento local, estrada a estrada, que faz a diferença entre um bom game drive e um excelente game drive. Os guias são atribuídos por viagem, nunca partilhados entre vários veículos ao mesmo tempo.',
        relatedLinks: [{ label: 'Conheça a Equipa', href: '/about#guides' }],
      },
      {
        q: 'A EWA Safari Outfitters é de propriedade local, ou uma agência estrangeira que revende viagens?',
        a: 'A EWA Safari Outfitters é 100% de propriedade local e sediada em Arusha, na Tanzânia — não uma agência de propriedade estrangeira nem uma plataforma de reservas que revende viagens de outros operadores com margem acrescida. Reservar diretamente com um operador de propriedade local também costuma ser mais vantajoso em termos de custo, já que elimina a margem adicional de uma agência internacional.',
      },
      {
        q: 'Onde está sediada a EWA Safari Outfitters, e posso visitar o escritório?',
        a: 'A EWA Safari Outfitters está sediada na 20 Ingira Street, em Arusha, na Tanzânia — a mesma cidade de onde partem a maioria dos safaris do Circuito Norte e das ascensões ao Kilimanjaro. Os visitantes são bem-vindos a passar pelo escritório antes ou depois de uma viagem; contacte com antecedência através de info@theextremewilderness.com ou +255 (0) 747 999 070 para organizar uma visita.',
        relatedLinks: [{ label: 'Visite o Nosso Escritório', href: '/about' }, { label: 'Contacte-nos', href: '/contact' }],
      },
      {
        q: 'Com que rapidez a EWA Safari Outfitters responde a pedidos de informação?',
        a: 'A EWA Safari Outfitters responde normalmente a pedidos de informação sobre safaris no espaço de algumas horas, durante o horário de expediente da África Oriental, e geralmente no mesmo dia mesmo fora desse horário. A forma mais rápida de obter um orçamento real e personalizado (e não uma lista de preços genérica) é através do formulário de pedido de informação em qualquer página de safari, destino ou perguntas frequentes deste site, que chega diretamente à equipa em Arusha.',
        relatedLinks: [{ label: 'Contacte-nos', href: '/contact' }],
      },
      {
        q: 'A EWA Safari Outfitters opera apenas na Tanzânia, ou também no Quénia e no Ruanda?',
        a: 'A EWA Safari Outfitters está sediada na Tanzânia e profundamente enraizada no país, mas também opera e combina viagens pelo Quénia (Masai Mara e mais além) e pelo Ruanda (trekking de gorilas no Parque Nacional dos Vulcões) — muitos hóspedes combinam dois ou três países num único itinerário personalizado, em vez de reservar cada um separadamente.',
        relatedLinks: [{ label: 'Safaris no Quénia', href: '/kenya' }, { label: 'Safaris no Ruanda', href: '/rwanda' }],
      },
    ],
  },
]

export const FAQ_CATEGORY_SLUGS = faqCategories.map((c) => c.slug)
