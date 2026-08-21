import type { SafariPackage } from './packages'

export const packages: SafariPackage[] = [
  {
    slug: "7-day-serengeti-ngorongoro",
    name: "세렝게티 & 응고롱고로 7일 사파리",
    duration: 7,
    destinations: [
      "serengeti",
      "ngorongoro",
      "tarangire"
    ],
    type: "wildlife",
    priceFrom: 3400.63,
    groupSize: {
      min: 1,
      max: 8
    },
    badge: "bestseller",
    bestFor: [
      "couples",
      "honeymoon",
      "families",
      "solo"
    ],
    metaTitle: "7일 노던 서킷 사파리: 세렝게티, 응고롱고로 & 타랑기레",
    metaDescription: "프라이빗 가이드가 전 일정을 함께하는 7일 노던 서킷 사파리 — 타랑기레, 세렝게티, 응고롱고로 크레이터. 윌더니스 트레일부터 윌더니스 소버린까지 3개 등급. 1인당 $2,485부터.",
    overview: [
      "7일은 탄자니아의 지리를 제대로 파악한 초행 여행자들이 결국 선택하게 되는 일수입니다 — 세 가지 대조적인 생태계를 서두르지 않고 이동하기에 충분히 길면서도, 전후로 해변이나 고릴라 트레킹 연장 일정을 더해 표준적인 2주 여행에 맞추기에도 충분히 짧습니다. 이 일정은 노던 서킷을 가장 온전하게 담아낸 코스입니다. 타랑기레의 코끼리 무리와 고대 바오밥나무, 세렝게티에서 보내는 온전한 이틀, 그리고 하나의 폐쇄된 생태계 안에 아프리카 최고 밀도의 야생동물이 모여 있는 응고롱고로 크레이터로 내려가는 하루를 거친 뒤, 아루샤로 돌아오는 길에 음토와음부 마을에서의 문화 체험으로 마무리됩니다.",
      "윌더니스 트레일, 윌더니스 리저브, 윌더니스 소버린 3개 등급 중에서 선택하실 수 있습니다. 모든 등급이 동일한 7일 루트를 따르며, 머무는 캠프와 로지의 수준만 달라집니다.",
      "이 사파리는 더 넓은 동아프리카 여행과도 자연스럽게 어우러집니다 — 케냐나 르완다로 일정을 연장하거나, 마지막 게임 드라이브 후 해변 연장 일정을 추가할 수 있습니다."
    ],
    pricingTiersProvisional: false,
    pricingTiers: [
      {
        pax: 2,
        season: "high",
        trail: 3400.63,
        reserve: 4281.88,
        sovereign: 5674.38
      },
      {
        pax: 3,
        season: "high",
        trail: 2795.83,
        reserve: 3744.58,
        sovereign: 5085.83
      },
      {
        pax: 4,
        season: "high",
        trail: 2742.81,
        reserve: 3736.56,
        sovereign: 5016.56
      },
      {
        pax: 5,
        season: "high",
        trail: 2485,
        reserve: 3276.25,
        sovereign: 4775
      },
      {
        pax: 6,
        season: "high",
        trail: 2548.54,
        reserve: 3429.79,
        sovereign: 4822.29
      },
      {
        pax: 2,
        season: "low",
        trail: 2374,
        reserve: 3053,
        sovereign: 4480
      },
      {
        pax: 3,
        season: "low",
        trail: 2332,
        reserve: 2911,
        sovereign: 4783
      },
      {
        pax: 4,
        season: "low",
        trail: 1959,
        reserve: 2527,
        sovereign: 3979
      },
      {
        pax: 5,
        season: "low",
        trail: 1969,
        reserve: 2547,
        sovereign: 4260
      },
      {
        pax: 6,
        season: "low",
        trail: 1791,
        reserve: 2383,
        sovereign: 3855
      }
    ],
    highlights: [
      "국립공원 세 곳을 하나의 여정으로 — 타랑기레, 세렝게티, 응고롱고로 크레이터를 육로로 연결해 풍경 자체가 이야기의 일부가 됩니다",
      "세렝게티에서 보내는 온전한 이틀 — 포식자의 움직임을 실제로 따라가고, 시기에 따라 대이동 그 자체를 목격할 수 있는 충분한 시간",
      "응고롱고로 크레이터 안에서 보내는 온전한 하루 — 아프리카 대륙 어디보다 밀도 높은 야생동물이 모여 있으며, 이 지역에서 가장 신뢰도 높은 코뿔소 관찰 기회 중 하나",
      "타랑기레의 코끼리 무리와 고대 바오밥나무 — 짧은 일정에서는 대부분 생략되는, 저평가된 서장",
      "음토와음부 문화 마을 — 아루샤로 돌아가는 길에 서두르지 않고 들르는 진짜 체험으로, 급하게 지나치는 길거리 사진 촬영지가 아닙니다",
      "케냐나 르완다와도 손쉽게 조합 가능하며 해변으로 연장할 수도 있습니다 — 단독 일정으로도, 더 긴 동아프리카 여행의 한 구간으로도 손색이 없습니다",
      "모든 수준의 편안함을 아우릅니다 — 차분하고 세심한 스타일부터 진정으로 특별한 스타일까지, 루트 자체는 단 하루도 바뀌지 않습니다"
    ],
    heroImage: "/images/gallery/ngorongoro-crater-flamingos.webp",
    heroImageAlt: "Great white pelicans and flamingos resting on a grassy sandbar in a Ngorongoro Crater soda lake, framed by misty crater walls",
    gallery: [
      {
        src: "/images/gallery/serengeti-lion-pride.webp",
        alt: "Lion pride with a maned male leading lionesses through golden grass on the Serengeti plains"
      },
      {
        src: "/images/gallery/tarangire-elephants-baobab.webp",
        alt: "Two elephants with tusks foraging together in tall grass in Tarangire National Park"
      }
    ],
    included: [
      "전 국립공원 입장료",
      "4WD 사파리 차량으로 진행되는 전 게임 드라이브",
      "전 일정 함께하는 전문 현지 가이드",
      "일자별 명시된 식사",
      "일정표에 따른 숙박",
      "프라이빗 공항 및 캠프 간 이동"
    ],
    includedCategorized: {
      transfers: [
        "프라이빗 공항 및 캠프 간 이동"
      ],
      accommodationMeals: [
        "일자별 명시된 식사",
        "일정표에 따른 숙박"
      ],
      guidingGameDrives: [
        "전 국립공원 입장료",
        "4WD 사파리 차량으로 진행되는 전 게임 드라이브",
        "전 일정 함께하는 전문 현지 가이드"
      ]
    },
    excluded: [
      "국제선 항공권",
      "비자 발급 비용",
      "여행자 보험",
      "팁",
      "선택 액티비티"
    ],
    excludedCategorized: [
      "국제선 항공권",
      "비자 발급 비용",
      "여행자 보험",
      "팁",
      "선택 액티비티"
    ],
    notes: [
      "표시된 요금은 더블/트윈룸 2인 공유 기준 1인당 요금입니다. 싱글룸 이용 시 추가 요금이 발생합니다.",
      "숙박 시설 및 요금은 예약 가능 여부에 따라 달라지며, 동일 시즌 내에서도 정확한 여행 날짜에 따라 변동될 수 있습니다.",
      "탄자니아 국립공원 및 보호구역 입장료는 정부가 책정하며 사전 통보 없이 변경될 수 있습니다."
    ],
    faq: [
      {
        q: "세 가지 등급의 차이는 무엇인가요?",
        a: "어느 등급을 선택하든 방문하는 장소와 만나는 야생동물은 동일합니다. 달라지는 것은 그 사이에 어떻게 머무느냐입니다. 윌더니스 트레일은 편안하고 세심하게, 윌더니스 리저브는 더 여유롭게 쉴 수 있는 공간을, 윌더니스 소버린은 매일 밤 정말로 특별한 장소를 제공합니다. 여행 스타일에 맞는 등급을 선택하시면 됩니다."
      },
      {
        q: "대이동을 볼 수 있나요?",
        a: "이는 여행 시기와 무리의 이동 위치에 따라 달라지며, 특정 날짜에 특정 장면을 반드시 보실 수 있다고 약속드리기는 어렵습니다. 이 일정이 보장하는 것은 일 년 내내 관찰 가능한 정착형 사자와 표범 서식지에서 보내는 온전한 이틀입니다 — 대이동 시기 맞추기가 가장 중요하다면 예약 전 담당 컨설턴트와 상담해 최적의 날짜를 함께 정하시길 권합니다."
      },
      {
        q: "인원수에 따라 요금이 얼마나 달라지나요?",
        a: "차량, 가이드, 일부 이동 비용은 그룹 전체가 함께 부담하므로 인원이 늘어날수록 1인당 요금은 일반적으로 낮아집니다 — 그룹 규모에 맞는 요금은 위의 각 등급별 요금표를 참고해 주세요."
      },
      {
        q: "요금에 포함된 것과 별도로 준비해야 하는 것은 무엇인가요?",
        a: "포함 사항: 전 국립공원 및 보호구역 입장료, 프라이빗 4WD 랜드크루저로 진행되는 전 게임 드라이브, 가이드, 식사, 숙박, 게임 드라이브 중 생수, 공항 이동입니다. 별도로 준비하셔야 하는 것: 국제선 항공권, 비자 발급 비용, 여행자 보험, 팁, 주류 등 개인 경비입니다."
      },
      {
        q: "케냐, 르완다, 혹은 며칠간의 해변 일정을 더해 더 큰 여행으로 만들 수 있나요?",
        a: "네, 가능합니다. 실제로 많은 여행자분들이 그렇게 하고 계십니다. 이 사파리는 케냐 사파리나 르완다 고릴라 트레킹과 잘 어우러지며, 마지막 게임 드라이브 직후 해변 연장 일정도 마련해 드릴 수 있습니다. 계획하실 때 말씀해 주시면 전체 여정을 함께 구성해 드립니다."
      },
      {
        q: "탄자니아를 처음 방문하는 분에게도 이 일정이 적합한가요?",
        a: "매우 적합합니다 — 이 루트는 지리를 파악한 초행 여행자들이 가장 많이 선택하는 코스입니다. 거의 모든 노던 서킷 사파리의 중심이 되는 세 국립공원을, 짧고 촉박한 일정으로 압축하지 않고도 둘러볼 수 있기 때문입니다."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "아루샤",
        description: "아루샤에 도착. 호텔로 이동합니다.",
        accommodation: "아루샤, 등급별 상이",
        meals: "조식 포함",
        insiderFact: "아루샤는 해발 약 1,400m에 위치해 있어, 국립공원 방문 전 편안하게 몸을 적응시킬 수 있는 밤을 보낼 수 있습니다. 대부분의 여행사가 이곳에서 여행 사이사이 차량을 점검하고 정비합니다.",
        accommodationByTier: {
          trail: {
            name: "Kahawa House",
            image: "/images/lodges/kahawa-house.webp",
            amenities: [
              "wifi",
              "restaurant",
              "garden"
            ]
          },
          reserve: {
            name: "Gran Melia, Arusha",
            image: "/images/lodges/gran-melia-arusha.webp",
            amenities: [
              "wifi",
              "pool",
              "spa"
            ]
          },
          sovereign: {
            name: "Arusha Coffee Lodge",
            image: "/images/lodges/arusha-coffee-lodge-garden-path.webp",
            amenities: [
              "wifi",
              "pool",
              "view"
            ]
          }
        }
      },
      {
        day: 2,
        title: "타랑기레 국립공원",
        description: "타랑기레 국립공원으로 이동합니다. 코끼리 무리와 바오밥나무 사이에서 게임 드라이브를 진행합니다.",
        accommodation: "타랑기레 지역, 등급별 상이",
        meals: "풀보드(전 식사 포함)",
        insiderFact: "타랑기레는 우기를 제외하면 아프리카에서 가장 높은 코끼리 밀도를 자랑하며, 무리는 강을 따라 집중적으로 모여듭니다.",
        accommodationByTier: {
          trail: {
            name: "Ngorongoro Farm House",
            image: "/images/lodges/ngorongoro-farm-house.webp",
            amenities: [
              "restaurant",
              "garden"
            ]
          },
          reserve: {
            name: "Kitela Lodge",
            image: "/images/lodges/kitela-lodge.webp",
            amenities: [
              "pool",
              "view",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Gibb's Farm",
            image: "/images/lodges/gibbs-farm-cottage-exterior.webp",
            amenities: [
              "spa",
              "view",
              "organic-farm"
            ]
          }
        }
      },
      {
        day: 3,
        title: "세렝게티로 이동",
        description: "카라투를 경유해 세렝게티로 이동합니다. 오후 게임 드라이브를 진행합니다.",
        accommodation: "중앙 세렝게티, 등급별 상이",
        meals: "풀보드(전 식사 포함)",
        insiderFact: "카라투는 응고롱고로 보호구역 경계 바로 바깥에 위치하며, 크레이터 고지대로 들어가기 전 마지막 농경 지대입니다.",
        accommodationByTier: {
          trail: {
            name: "Serengeti Katikati Camp",
            image: "/images/lodges/serengeti-katikati-camp.webp",
            amenities: [
              "ensuite",
              "restaurant",
              "wildlife-view"
            ]
          },
          reserve: {
            name: "Kubukubu Tented Lodge",
            image: "/images/lodges/kubukubu-tented-lodge.webp",
            amenities: [
              "pool",
              "view",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Siringiti Serengeti Camp",
            image: "/images/lodges/siringiti-serengeti-camp.webp",
            amenities: [
              "wifi",
              "view",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 4,
        title: "중앙 세렝게티",
        description: "하루 종일 세렝게티 게임 드라이브를 진행합니다.",
        accommodation: "중앙 세렝게티, 등급별 상이",
        meals: "풀보드(전 식사 포함)",
        insiderFact: "세로네라는 연중 물이 마르지 않아 정착형 대형 고양잇과 동물이 모여드는데, 코피(암산)에서 나무를 타는 것으로 유명한 사자 무리도 이곳에 서식합니다.",
        accommodationByTier: {
          trail: {
            name: "Serengeti Katikati Camp",
            image: "/images/lodges/serengeti-katikati-camp.webp",
            amenities: [
              "ensuite",
              "restaurant",
              "wildlife-view"
            ]
          },
          reserve: {
            name: "Kubukubu Tented Lodge",
            image: "/images/lodges/kubukubu-tented-lodge.webp",
            amenities: [
              "pool",
              "view",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Siringiti Serengeti Camp",
            image: "/images/lodges/siringiti-serengeti-camp.webp",
            amenities: [
              "wifi",
              "view",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 5,
        title: "응고롱고로 크레이터",
        description: "응고롱고로 크레이터로 내려가 하루 종일 게임 드라이브를 진행합니다.",
        accommodation: "응고롱고로 지역, 등급별 상이",
        meals: "풀보드(전 식사 포함)",
        insiderFact: "응고롱고로 크레이터는 약 260km² 규모의 폐쇄된 생태계로, 이곳에 서식하는 동물 대부분은 평생 크레이터 밖으로 나가지 않습니다.",
        accommodationByTier: {
          trail: {
            name: "Ngorongoro Farm House",
            image: "/images/lodges/ngorongoro-farm-house.webp",
            amenities: [
              "restaurant",
              "garden"
            ]
          },
          reserve: {
            name: "Kitela Lodge",
            image: "/images/lodges/kitela-lodge.webp",
            amenities: [
              "pool",
              "view",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Gibb's Farm",
            image: "/images/lodges/gibbs-farm-cottage-exterior.webp",
            amenities: [
              "spa",
              "view",
              "organic-farm"
            ]
          }
        }
      },
      {
        day: 6,
        title: "음토와음부에서 아루샤로",
        description: "음토와음부 문화 마을을 방문한 뒤 아루샤로 이동합니다.",
        accommodation: "아루샤, 등급별 상이",
        meals: "조식 포함",
        insiderFact: "킬리만자로 국제공항을 출발하는 대부분의 국제선은 늦은 저녁에 출발하므로, 이 완충의 밤 덕분에 사파리 마지막 날도 여유롭게 보낼 수 있습니다.",
        accommodationByTier: {
          trail: {
            name: "Kahawa House",
            image: "/images/lodges/kahawa-house.webp",
            amenities: [
              "wifi",
              "restaurant",
              "garden"
            ]
          },
          reserve: {
            name: "Gran Melia, Arusha",
            image: "/images/lodges/gran-melia-arusha.webp",
            amenities: [
              "wifi",
              "pool",
              "spa"
            ]
          },
          sovereign: {
            name: "Arusha Coffee Lodge",
            image: "/images/lodges/arusha-coffee-lodge-garden-path.webp",
            amenities: [
              "wifi",
              "pool",
              "view"
            ]
          }
        }
      },
      {
        day: 7,
        title: "출발",
        description: "공항으로 이동해 출발합니다.",
        accommodation: "해당 없음",
        meals: "조식",
        insiderFact: "킬리만자로 국제공항은 아루샤에서 차로 약 45~60분 거리입니다."
      }
    ]
  },
  {
    slug: "10-day-northern-circuit",
    name: "10일 얼티메이트 노던 서킷",
    duration: 10,
    destinations: [
      "serengeti",
      "ngorongoro",
      "tarangire",
      "manyara"
    ],
    type: "wildlife",
    priceFrom: 4800,
    groupSize: {
      min: 1,
      max: 6
    },
    badge: "popular",
    bestFor: [
      "couples",
      "honeymoon",
      "solo"
    ],
    overview: [
      "10일은 탄자니아 북부를 대표하는 네 개의 국립공원을 서두르지 않고 둘러보는 데 실제로 필요한 일수입니다 — 이는 축약판이 아니라 완전한 순환 루트입니다. 세렝게티 평원에서는 대이동이 절정에 달한 모습을 따라가고, 응고롱고로 크레이터로 내려가 아프리카 굴지의 밀도를 자랑하는 야생동물을 목격하며, 타랑기레에서는 고대 바오밥나무 아래를 이동하는 코끼리 무리를 지켜보고, 같은 여정 안에서 마냐라 호수의 홍학빛 얕은 물과 나무를 타는 사자까지 만나게 됩니다.",
      "고인류학자들이 '인류의 요람'이라 부르는 올두바이 협곡에 들르면, 게임 드라이브 사이사이 인류 이야기 자체가 시작된 곳을 직접 느껴볼 수 있습니다. 매일 프라이빗 4WD 차량과 전담 영어 가이드가 함께하므로, 여정의 속도는 정해진 단체 일정이 아니라 그날그날 발견하는 것에 맞춰집니다."
    ],
    highlights: [
      "탄자니아 북부 완전 순환 루트",
      "4대 주요 국립공원 전체 포함",
      "절정에 달한 대이동",
      "마냐라 호수의 홍학과 나무 타는 사자",
      "올두바이 협곡 — 인류의 요람"
    ],
    heroImage: "/images/gallery/serengeti-wildebeest-herd-acacia-woodland.jpg",
    heroImageAlt: "Large wildebeest herd grazing beneath acacia trees in Central Serengeti's morning haze during the great migration",
    gallery: [
      {
        src: "/images/gallery/trekking-crew-rocky-ridge-highlands.webp",
        alt: "Safari crew standing on a rocky ridge in the highlands under a clear sky"
      },
      {
        src: "/images/gallery/elephants-grazing-tall-grass-savanna.webp",
        alt: "Elephant pair grazing among tall grass and wildflowers on the savanna"
      }
    ],
    included: [
      "전 국립공원 입장료",
      "4WD 랜드크루저로 진행되는 전 게임 드라이브",
      "영어 구사 전문 가이드",
      "명시된 전 식사",
      "일정표 기재 숙박 시설",
      "공항 이동"
    ],
    excluded: [
      "국제선 항공권",
      "비자 신청료",
      "여행자 보험",
      "팁"
    ],
    notes: [
      "표시된 요금은 더블 또는 트윈룸을 2인이 공유할 경우 1인당 요금입니다. 싱글룸 이용 시 추가 요금이 발생합니다.",
      "숙박 시설 및 요금은 예약 가능 여부에 따라 달라지며, 동일 시즌 내에서도 실제 여행 날짜에 따라 변동될 수 있습니다.",
      "탄자니아 국립공원 및 보호구역 요금은 정부가 책정하며 사전 통보 없이 변경될 수 있습니다."
    ],
    itinerary: []
  },
  {
    slug: "10-day-safari-zanzibar",
    name: "10일 탄자니아 사파리 & 잔지바르 비치",
    duration: 10,
    destinations: [
      "tarangire",
      "ngorongoro",
      "serengeti",
      "zanzibar"
    ],
    type: "combination",
    priceFrom: 4413.96,
    groupSize: {
      min: 2,
      max: 6
    },
    badge: "bestseller",
    bestFor: [
      "couples",
      "honeymoon",
      "families"
    ],
    tagline: "2027년 시즌에 맞춰 업데이트되었습니다.",
    metaTitle: "10일 탄자니아 사파리 & 잔지바르 비치 | EWA Safari Outfitters",
    metaDescription: "타랑기레, 응고롱고로, 세렝게티를 잇는 6일과 잔지바르 눙위 해안에서의 3박. 10일 9박, 1인당 $4,413.96부터.",
    overview: [
      "10일은 성격이 전혀 다른 두 가지 경험으로 깔끔하게 나뉘며, 각각에 스쳐 지나가듯 맛만 보는 것이 아니라 실제로 온전히 젖어들 수 있을 만큼 충분한 시간이 주어집니다. 앞선 6일은 탄자니아의 대표 순환 루트를 따라 북쪽으로 이어집니다 — 타랑기레, 응고롱고로 고지대, 세렝게티 — 각 국립공원이 저마다 뚜렷이 구분되어, '사파리'는 하나의 막연한 개념이 아니라 명확히 구별되는 세 곳의 구체적인 장소가 됩니다. 마지막 3박은 아무것도 요구하지 않습니다. 잔지바르의 눙위 해안까지는 또 하루의 육로 이동 대신 짧은 비행으로 도착합니다.",
      "타랑기레는 자체적으로 온전한 반나절을 확보하며 여정을 엽니다. 여기에 음토와음부에서의 정류와 마사이 공동체 방문이 덧붙이는 요소가 아니라 루트 자체에 포함되어 있습니다 — 건기에는 강을 따라 무리가 집중되는, 동아프리카 최대 규모의 코끼리 개체군을 자랑하는 지역입니다. 응고롱고로 크레이터는 서둘러 지나가는 오전 정차가 아니라 온전한 하루를 배정받습니다: 면적 약 260km²의 함몰된 화산 칼데라로, 벽이 가팔라 내부에 사는 동물 대부분은 평생 밖으로 나가지 않으며, 이 여정에서 가장 밀도 높은 야생동물 관찰의 하루가 됩니다. 이어서 세렝게티의 정착 포식자 서식지에서 온전한 이틀을 보낸 뒤, 아루샤를 경유하는 유람 비행이 차량을 대신해 눙위의 백사장에서 보내는 예정 없는 3박으로 이어집니다."
    ],
    pricingTiersProvisional: false,
    pricingTiers: [
      {
        pax: 2,
        trail: 5286.88,
        reserve: 6979.38,
        sovereign: 10863.13
      },
      {
        pax: 3,
        trail: 4850.42,
        reserve: 6542.92,
        sovereign: 10426.67
      },
      {
        pax: 4,
        trail: 4632.19,
        reserve: 6324.69,
        sovereign: 10208.44
      },
      {
        pax: 5,
        trail: 4501.25,
        reserve: 6193.75,
        sovereign: 10077.5
      },
      {
        pax: 6,
        trail: 4413.96,
        reserve: 6106.46,
        sovereign: 9990.21
      }
    ],
    highlights: [
      "고대 바오밥나무 아래 타랑기레의 코끼리 무리 — 그냥 지나치지 않고 온전한 반나절을 들여",
      "응고롱고로 고지대로 향하는 길에 있는 진짜 마사이 공동체 방문과 음토와음부 문화 정류",
      "지구 굴지의 야생동물 밀도를 자랑하는 응고롱고로 크레이터에서 보내는 온전한 하루",
      "세렝게티의 일급 포식자 서식지에서 보내는 온전한 이틀 — 되돌아가지 않고 순환 루트를 앞으로 나아가며 도달",
      "세렝게티에서 잔지바르로 이어지는 유람 비행 — 길고 긴 마지막 육로 구간 대신 하늘에서 보내는 시간과 바다 전망",
      "여정을 온전히 이완된 상태로 마무리하는, 잔지바르 눙위 해안에서의 올인클루시브 3박"
    ],
    heroImage: "/images/gallery/zanzibar-nungwi-aerial.jpg",
    heroImageAlt: "Aerial view of a beachfront resort with thatched roofs, palm trees, and turquoise lagoon waters at Nungwi, Zanzibar",
    gallery: [
      {
        src: "/images/gallery/tarangire-elephants-baobab.webp",
        alt: "Two elephants with tusks foraging together in tall grass in Tarangire National Park"
      },
      {
        src: "/images/gallery/serengeti-lion-pride.webp",
        alt: "Lion pride with a maned male leading lionesses through golden grass on the Serengeti plains"
      }
    ],
    included: [
      "전 국립공원 및 보호구역 입장료",
      "프라이빗 4WD 차량으로 진행되는 전 게임 드라이브",
      "사파리 전 일정 함께하는 전문 가이드",
      "세렝게티–아루샤–잔지바르 항공편",
      "명시된 전 식사",
      "일정표 기재 숙박 시설",
      "공항 이동 및 시설 간 이동"
    ],
    includedCategorized: {
      transfers: [
        "세렝게티–아루샤–잔지바르 항공편",
        "공항 이동 및 시설 간 이동"
      ],
      accommodationMeals: [
        "명시된 전 식사",
        "일정표 기재 숙박 시설"
      ],
      guidingGameDrives: [
        "전 국립공원 및 보호구역 입장료",
        "프라이빗 4WD 차량으로 진행되는 전 게임 드라이브",
        "사파리 전 일정 함께하는 전문 가이드"
      ]
    },
    excluded: [
      "국제선 항공권",
      "비자 신청료",
      "여행자 보험",
      "팁",
      "잔지바르 선택 액티비티"
    ],
    excludedCategorized: [
      "국제선 항공권",
      "비자 신청료",
      "여행자 보험",
      "팁",
      "잔지바르 선택 액티비티"
    ],
    notes: [
      "표시된 요금은 더블 또는 트윈룸을 2인이 공유할 경우 1인당 요금입니다. 싱글룸 이용 시 추가 요금이 발생합니다.",
      "표시된 모든 인원 규모에서 이는 처음부터 끝까지 완전한 프라이빗 사파리입니다 — 전용 차량과 가이드가 전 일정 함께합니다. 인원수에 따라 달라지는 것은 동일한 프라이빗 비용을 몇 명이 나누어 부담하는가뿐입니다.",
      "잔지바르 선택 액티비티(별도 요금, 8~9일 차 이용 가능): 리프에서의 스쿠버다이빙 또는 스노클링 투어, 석양 다우선 크루즈, 스톤타운 역사 도보 투어, 스파이스 팜 투어, 원양 낚시 차터.",
      "숙박 시설 및 요금은 예약 가능 여부에 따라 달라지며, 동일 시즌 내에서도 실제 여행 날짜에 따라 변동될 수 있습니다."
    ],
    faq: [
      {
        q: "3개 등급 모두 같은 루트와 일정을 따르나요?",
        a: "네 — 윌더니스 트레일, 윌더니스 리저브, 윌더니스 소버린 모두 일정, 진행 속도, 액티비티가 동일합니다. 달라지는 것은 캠프와 로지, 편안함의 수준이지 여정 자체가 아닙니다."
      },
      {
        q: "마사이 공동체 방문은 실제로 어떤 모습인가요?",
        a: "3일 차, 타랑기레에서 응고롱고로 고지대로 향하는 길에 이루어지는 진짜 방문입니다. 시장 마을 음토와음부에서 보내는 시간과 함께, 유료 부대 활동이 아니라 루트 자체에 포함되어 있습니다."
      },
      {
        q: "왜 아루샤로 육로로 돌아가지 않고 세렝게티에서 잔지바르로 비행하나요?",
        a: "육로로 전 구간을 되돌아가면 이미 지나온 하루 반 분량의 길을 다시 밟게 됩니다. 아루샤를 경유하는 비행편을 이용하면 순환 루트를 거슬러 올라가지 않고도 당일에 해안에 도착할 수 있습니다."
      },
      {
        q: "연장하거나 단축할 수 있나요?",
        a: "기본 구성은 각 구간에 충분한 시간을 배정합니다 — 세렝게티와 크레이터는 서둘러 지나가면 실질적인 가치를 잃습니다. 연장(잔지바르 1박 추가, 스톤타운 투어 추가)은 쉽게 더할 수 있습니다. 일정에 제약이 있어 단축을 원하신다면 담당 컨설턴트에게 문의해 주세요."
      },
      {
        q: "요금에 포함되는 것과 포함되지 않는 것은 무엇인가요?",
        a: "포함: 전 국립공원 및 보호구역 요금, 사파리 전 일정의 차량·가이드·연료, 세렝게티–아루샤–잔지바르 항공편, 명시된 전 액티비티, 9박 전체의 명시된 숙박 시설. 미포함: 국제선 항공권, 비자 신청료, 여행자 보험, 팁, 잔지바르 선택 액티비티."
      },
      {
        q: "인원수에 따라 요금이 얼마나 달라지나요?",
        a: "차량, 가이드, 디젤 비용은 그룹 전체가 함께 부담하므로 참여 인원이 늘어날수록 1인당 요금은 낮아집니다 — 위의 요금표를 참고해 주세요."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "아루샤 도착",
        description: "킬리만자로 국제공항에 도착해 프라이빗 차량으로 아루샤로 이동, 다음 날 시작될 사파리에 앞서 1박합니다.",
        accommodation: "아루샤, 등급별 상이",
        meals: "조식 포함",
        accommodationByTier: {
          trail: {
            name: "Kahawa House",
            image: "/images/lodges/kahawa-house.webp",
            amenities: [
              "wifi",
              "restaurant",
              "garden"
            ]
          },
          reserve: {
            name: "Gran Meliá, Arusha",
            image: "/images/lodges/gran-melia-arusha.webp",
            amenities: [
              "wifi",
              "pool",
              "spa"
            ]
          },
          sovereign: {
            name: "Arusha Coffee Lodge",
            image: "/images/lodges/arusha-coffee-lodge-garden-path.webp",
            amenities: [
              "wifi",
              "pool",
              "view"
            ]
          }
        }
      },
      {
        day: 2,
        title: "아루샤에서 타랑기레 국립공원으로",
        description: "남쪽으로 이동해 타랑기레로 향합니다. 탄자니아 최대 규모의 코끼리 무리 일부가 고대 바오밥나무 아래에 모이는 곳으로, 우기를 제외한 시기에는 강을 따라 무리가 집중되며 아프리카 최고 수준의 코끼리 밀도를 자랑합니다.",
        accommodation: "타랑기레, 등급별 상이",
        meals: "올인클루시브",
        insiderFact: "우기를 제외하면 타랑기레는 아프리카에서도 손꼽히는 코끼리 밀도를 자랑하며, 무리는 강을 따라 집중적으로 모입니다.",
        accommodationByTier: {
          trail: {
            name: "Tarangire Katikati Tented Camp",
            image: "https://placehold.co/800x600/1C3A2A/D4A853?text=Tarangire+Katikati",
            amenities: [
              "ensuite",
              "restaurant",
              "wildlife-view"
            ]
          },
          reserve: {
            name: "Elephant Springs",
            image: "/images/lodges/elephant-springs-exterior-view.webp",
            amenities: [
              "pool",
              "view",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Elewana Treetops",
            image: "https://placehold.co/800x600/1C3A2A/D4A853?text=Elewana+Treetops",
            amenities: [
              "pool",
              "spa",
              "view"
            ]
          }
        }
      },
      {
        day: 3,
        title: "타랑기레 반나절, 마사이 공동체 & 음토와음부",
        description: "고지대로 향하는 이동에 앞서 타랑기레에서 보내는 마지막 반나절입니다. 진짜 마사이 공동체 방문과 시장 마을 음토와음부에서의 정류가 더해집니다 — 나중에 끼워 넣은 것이 아니라 루트 자체에 포함된 진짜 문화 체험 시간입니다.",
        accommodation: "응고롱고로 고지대, 등급별 상이",
        meals: "올인클루시브",
        accommodationByTier: {
          trail: {
            name: "Ngorongoro Farm House",
            image: "/images/lodges/ngorongoro-farm-house.webp",
            amenities: [
              "restaurant",
              "garden"
            ]
          },
          reserve: {
            name: "Kitela Lodge",
            image: "/images/lodges/kitela-lodge.webp",
            amenities: [
              "pool",
              "view",
              "restaurant"
            ]
          },
          sovereign: {
            name: "The Manor at Ngorongoro",
            image: "/images/lodges/the-manor-at-ngorongoro.webp",
            amenities: [
              "spa",
              "view",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 4,
        title: "응고롱고로 크레이터 종일 투어",
        description: "응고롱고로 크레이터로 내려가는 온전한 하루입니다. 면적 약 260km²의 폐쇄된 생태계로, 이곳에 서식하는 동물 대부분은 평생 밖으로 나가지 않으며, 지구상에서 손꼽히는 확률로 진짜 빅파이브를 만날 수 있는 장소 중 하나입니다.",
        accommodation: "응고롱고로 고지대, 등급별 상이",
        meals: "올인클루시브",
        insiderFact: "응고롱고로 크레이터는 약 260km² 규모의 폐쇄된 생태계로, 이곳에 서식하는 동물 대부분은 평생 밖으로 나가지 않습니다. 이 지역에서 가장 신뢰도 높은 검은코뿔소 관찰지 중 한 곳이기도 합니다.",
        accommodationByTier: {
          trail: {
            name: "Ngorongoro Farm House",
            image: "/images/lodges/ngorongoro-farm-house.webp",
            amenities: [
              "restaurant",
              "garden"
            ]
          },
          reserve: {
            name: "Kitela Lodge",
            image: "/images/lodges/kitela-lodge.webp",
            amenities: [
              "pool",
              "view",
              "restaurant"
            ]
          },
          sovereign: {
            name: "The Manor at Ngorongoro",
            image: "/images/lodges/the-manor-at-ngorongoro.webp",
            amenities: [
              "spa",
              "view",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 5,
        title: "카라투에서 세렝게티로",
        description: "세렝게티 본토로 들어가는 이동으로, 지구상에서 가장 중요한 고인류학 유적지 중 하나인 올두바이 협곡에서 잠시 멈춘 뒤 캠프로 이어집니다.",
        accommodation: "세렝게티 중앙, 등급별 상이",
        meals: "올인클루시브",
        accommodationByTier: {
          trail: {
            name: "Serengeti Katikati Tented Camp",
            image: "/images/lodges/serengeti-katikati-camp.webp",
            amenities: [
              "ensuite",
              "restaurant",
              "wildlife-view"
            ]
          },
          reserve: {
            name: "Kubukubu Tented Lodge",
            image: "/images/lodges/kubukubu-tented-lodge.webp",
            amenities: [
              "pool",
              "view",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Serengeti Explorer Lodge",
            image: "/images/lodges/serengeti-explorer.webp",
            amenities: [
              "view",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 6,
        title: "세렝게티 국립공원 종일 투어",
        description: "세렝게티의 일급 포식자 서식지를 온전히 하루 동안 가이드와 함께 탐험합니다 — 사자, 표범, 치타 모두 연중 현실적으로 만날 수 있는 곳입니다.",
        accommodation: "세렝게티 중앙, 등급별 상이",
        meals: "올인클루시브",
        accommodationByTier: {
          trail: {
            name: "Serengeti Katikati Tented Camp",
            image: "/images/lodges/serengeti-katikati-camp.webp",
            amenities: [
              "ensuite",
              "restaurant",
              "wildlife-view"
            ]
          },
          reserve: {
            name: "Kubukubu Tented Lodge",
            image: "/images/lodges/kubukubu-tented-lodge.webp",
            amenities: [
              "pool",
              "view",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Serengeti Explorer Lodge",
            image: "/images/lodges/serengeti-explorer.webp",
            amenities: [
              "view",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 7,
        title: "아루샤 경유 잔지바르행 비행",
        description: "이른 아침 유람 비행이 아루샤를 경유해 잔지바르로 향합니다 — 사파리 위에 또 다른 긴 육로 이동을 더하지 않습니다. 도착 후 섬 북쪽 해안의 눙위로 이동합니다.",
        accommodation: "잔지바르 눙위, 등급별 상이",
        meals: "올인클루시브",
        accommodationByTier: {
          trail: {
            name: "Nungwi Dreams By Mantis",
            image: "/images/lodges/nungwi-dreams-by-mantis.webp",
            amenities: [
              "restaurant",
              "beachfront"
            ]
          },
          reserve: {
            name: "Diamond Mapenzi Beach Resort",
            image: "https://placehold.co/800x600/1C3A2A/D4A853?text=Diamond+Mapenzi",
            amenities: [
              "all-inclusive",
              "beachfront",
              "pool"
            ]
          },
          sovereign: {
            name: "Kilindi Zanzibar",
            image: "/images/lodges/kilindi-zanzibar.webp",
            amenities: [
              "pool",
              "spa",
              "beachfront"
            ]
          }
        }
      },
      {
        day: 8,
        title: "잔지바르 눙위",
        description: "자유 일정입니다: 리프에서의 스쿠버·스노클링, 석양 다우선 크루즈, 스톤타운 역사 투어, 스파이스 팜 투어를 더하거나 그저 해변에서 보내셔도 좋습니다. 눙위는 잔지바르 북단에 위치해, 동해안에서 썰물 때 수영객을 곤란하게 하는 조수의 영향을 거의 받지 않습니다.",
        accommodation: "잔지바르 눙위, 등급별 상이",
        meals: "올인클루시브",
        insiderFact: "눙위는 잔지바르 북단에 위치해, 동해안에서 썰물 때 수영객을 곤란하게 하는 조수의 영향을 거의 받지 않습니다.",
        accommodationByTier: {
          trail: {
            name: "Nungwi Dreams By Mantis",
            image: "/images/lodges/nungwi-dreams-by-mantis.webp",
            amenities: [
              "restaurant",
              "beachfront"
            ]
          },
          reserve: {
            name: "Diamond Mapenzi Beach Resort",
            image: "https://placehold.co/800x600/1C3A2A/D4A853?text=Diamond+Mapenzi",
            amenities: [
              "all-inclusive",
              "beachfront",
              "pool"
            ]
          },
          sovereign: {
            name: "Kilindi Zanzibar",
            image: "/images/lodges/kilindi-zanzibar.webp",
            amenities: [
              "pool",
              "spa",
              "beachfront"
            ]
          }
        }
      },
      {
        day: 9,
        title: "잔지바르 눙위",
        description: "잔지바르의 백사장 해안에서 보내는 마지막 온전한 자유 일정입니다 — 리프 다이빙, 석양 다우선 항해, 혹은 그저 아무것도 하지 않으셔도 좋습니다.",
        accommodation: "잔지바르 눙위, 등급별 상이",
        meals: "올인클루시브",
        accommodationByTier: {
          trail: {
            name: "Nungwi Dreams By Mantis",
            image: "/images/lodges/nungwi-dreams-by-mantis.webp",
            amenities: [
              "restaurant",
              "beachfront"
            ]
          },
          reserve: {
            name: "Diamond Mapenzi Beach Resort",
            image: "https://placehold.co/800x600/1C3A2A/D4A853?text=Diamond+Mapenzi",
            amenities: [
              "all-inclusive",
              "beachfront",
              "pool"
            ]
          },
          sovereign: {
            name: "Kilindi Zanzibar",
            image: "/images/lodges/kilindi-zanzibar.webp",
            amenities: [
              "pool",
              "spa",
              "beachfront"
            ]
          }
        }
      },
      {
        day: 10,
        title: "출발",
        description: "눙위에서 잔지바르 공항까지 프라이빗 이동 후 다음 여정 또는 귀국을 위해 출발합니다.",
        accommodation: "해당 없음",
        meals: "조식"
      }
    ]
  },
  {
    slug: "5-day-serengeti-fly-in",
    name: "세렝게티 플라이인 사파리 5일",
    duration: 5,
    destinations: [
      "serengeti",
      "ngorongoro",
      "manyara"
    ],
    type: "wildlife",
    priceFrom: 2475,
    groupSize: {
      min: 1,
      max: 6
    },
    badge: "popular",
    bestFor: [
      "couples",
      "solo",
      "honeymoon",
      "luxury"
    ],
    overview: [
      "대부분의 세렝게티 사파리는 공원에 들어가는 데만 이틀간의 육로 이동을 씁니다. 이 일정은 그 과정을 건너뜁니다. 전세기가 아루샤에서 중앙 세렝게티로 곧장 여러분을 데려다주므로, 착륙한 바로 그날 오후부터 첫 게임 드라이브가 시작됩니다. 이어지는 온전한 이틀은 일급 포식자 서식지에서 보내게 됩니다 — 사자, 표범, 치타가 계절과 무관하게 일 년 내내 이곳에 정착해 있습니다 — 그런 다음 세계 최대 규모의 온전한 칼데라인 응고롱고로 크레이터로의 가이드 동반 하강이 야생동물 일정을 마무리합니다.",
      "귀국 항공편 전 마지막 날 아침, 리프트밸리 절벽과 알칼리성 호수 사이에 자리한 마냐라 호수를 지나는 게임 드라이브로 여행을 마무리합니다. 5일, 리저브 캠프부터 소버린 럭셔리까지 두 가지 숙박 등급, 그리고 그저 이동만을 위해 차량 안에서 보내는 시간은 거의 없습니다."
    ],
    highlights: [
      "아루샤에서 중앙 세렝게티 심장부로 곧장 비행 — 이틀간의 육로 이동이 없습니다",
      "일급 포식자 서식지에서 보내는 온전한 이틀 — 사자, 표범, 치타를 연중 만날 수 있습니다",
      "응고롱고로 크레이터로의 가이드 동반 하강 — 세계 최대 규모의 온전한 칼데라",
      "출발 전 마지막 날 아침 마냐라 호수 게임 드라이브",
      "리저브 캠프부터 소버린 럭셔리까지 두 가지 숙박 등급"
    ],
    heroImage: "/images/gallery/lion-cub-resting.webp",
    heroImageAlt: "Lion cub nursing and nuzzled against its mother in the grass",
    gallery: [
      {
        src: "/images/gallery/lion-pride-resting-grassland.webp",
        alt: "Lion pride resting scattered across golden Serengeti grassland near a line of acacia trees"
      }
    ],
    pricingTiersProvisional: true,
    pricingTiers: [
      {
        pax: 1,
        trail: 4890,
        sovereign: 5860
      },
      {
        pax: 2,
        trail: 3700,
        sovereign: 4670
      },
      {
        pax: 3,
        trail: 3100,
        sovereign: 4275
      },
      {
        pax: 4,
        trail: 3105,
        sovereign: 4075
      },
      {
        pax: 5,
        trail: 2475,
        sovereign: 3605
      },
      {
        pax: 6,
        trail: 2875,
        sovereign: 3845
      }
    ],
    included: [
      "아루샤-세렝게티 전세기(왕복)",
      "전 국립공원 및 보호구역 입장료",
      "프라이빗 4WD 차량으로 진행되는 전 게임 드라이브",
      "전 일정 함께하는 전문 가이드",
      "명시된 전 식사",
      "일정표에 따른 숙박",
      "공항 및 캠프 간 이동"
    ],
    includedCategorized: {
      transfers: [
        "아루샤-세렝게티 전세기(왕복)",
        "공항 및 캠프 간 이동"
      ],
      accommodationMeals: [
        "명시된 전 식사",
        "일정표에 따른 숙박"
      ],
      guidingGameDrives: [
        "전 국립공원 및 보호구역 입장료",
        "프라이빗 4WD 차량으로 진행되는 전 게임 드라이브",
        "전 일정 함께하는 전문 가이드"
      ]
    },
    excluded: [
      "국제선 항공권",
      "탄자니아 입국 비자(대부분 국적 기준 약 USD 50)",
      "여행자 보험",
      "팁 및 사례",
      "열기구 사파리(선택, 1인당 약 USD 550 추가)"
    ],
    excludedCategorized: [
      "국제선 항공권",
      "탄자니아 입국 비자(대부분 국적 기준 약 USD 50)",
      "여행자 보험",
      "팁 및 사례",
      "열기구 사파리(선택, 1인당 약 USD 550 추가)",
      "개인 물품, 세탁, 전화 요금"
    ],
    notes: [
      "표시된 요금은 더블/트윈룸 2인 공유 기준 1인당 요금입니다. 싱글룸 이용 시 추가 요금이 발생합니다.",
      "숙박 시설 및 요금은 예약 가능 여부에 따라 달라지며, 정확한 여행 날짜에 따라 변동될 수 있습니다.",
      "탄자니아 국립공원 및 보호구역 입장료는 정부가 책정하며 사전 통보 없이 변경될 수 있습니다.",
      "예약 확정을 위해 30%의 예약금이 필요하며, 잔금은 출발 60일 전까지 납부합니다."
    ],
    itinerary: [
      {
        day: 1,
        title: "아루샤 도착",
        description: "아루샤에 도착해 로지로 이동, 이른 아침 세렝게티행 비행 전 하룻밤을 보냅니다.",
        accommodation: "아루샤 로지",
        meals: "석식 및 조식",
        accommodationByTier: {
          trail: {
            name: "Kahawa House",
            image: "/images/lodges/kahawa-house.webp",
            amenities: [
              "wifi",
              "restaurant",
              "garden"
            ]
          },
          sovereign: {
            name: "Siringiti Arusha Villa",
            image: "/images/lodges/siringiti-arusha-villa.webp",
            amenities: [
              "pool",
              "spa",
              "view",
              "wifi"
            ]
          }
        }
      },
      {
        day: 2,
        title: "중앙 세렝게티로 비행",
        description: "이른 아침 전세기가 아루샤에서 중앙 세렝게티로 곧장 여러분을 태워갑니다 — 두 시간의 육로 이동이 45분의 비행으로 압축됩니다. 착륙과 동시에 첫 게임 드라이브가 시작되며, 세렝게티의 평원이 사방으로 펼쳐지고 오후 햇살이 모든 것을 금빛으로 물들입니다.",
        accommodation: "세렝게티 텐티드 캠프",
        meals: "풀보드(전 식사 포함)",
        insiderFact: "세렝게티로 비행해 들어가면 흙먼지가 아닌 활력을 안고 도착하게 됩니다 — 첫날 오후 게임 드라이브에서 여행 최고의 관찰이 나오는 경우가 많습니다.",
        accommodationByTier: {
          trail: {
            name: "Kubukubu Tented Lodge",
            image: "/images/lodges/kubukubu-tented-lodge.webp",
            amenities: [
              "pool",
              "view",
              "restaurant",
              "wifi"
            ]
          },
          sovereign: {
            name: "Siringiti Serengeti Camp",
            image: "/images/lodges/siringiti-serengeti-camp.webp",
            amenities: [
              "view",
              "spa",
              "wildlife-view",
              "luxury-tent"
            ]
          }
        }
      },
      {
        day: 3,
        title: "세렝게티에서 보내는 온전한 하루",
        description: "세렝게티의 탁 트인 평원에서 하루 종일 게임 드라이브를 진행합니다. 중앙 세렝게티는 사자, 표범, 치타, 코끼리, 버팔로의 정착 개체군을 연중 보유하고 있어, 대이동 시기와 무관하게 아프리카에서 가장 신뢰도 높은 포식자 서식지 중 하나입니다. 가이드가 아침과 늦은 오후의 활동 절정 시간대에 맞춰 게임 드라이브를 계획합니다.",
        accommodation: "세렝게티 텐티드 캠프",
        meals: "풀보드(전 식사 포함)",
        insiderFact: "중앙 세렝게티의 세로네라 밸리는 때때로 아프리카의 '포식자의 수도'라고 불립니다 — 이곳의 정착형 사자 무리는 세계에서 가장 많이 연구된 개체군 중 하나입니다.",
        accommodationByTier: {
          trail: {
            name: "Kubukubu Tented Lodge",
            image: "/images/lodges/kubukubu-tented-lodge.webp",
            amenities: [
              "pool",
              "view",
              "restaurant",
              "wifi"
            ]
          },
          sovereign: {
            name: "Siringiti Serengeti Camp",
            image: "/images/lodges/siringiti-serengeti-camp.webp",
            amenities: [
              "view",
              "spa",
              "wildlife-view",
              "luxury-tent"
            ]
          }
        }
      },
      {
        day: 4,
        title: "응고롱고로 크레이터 & 카라투",
        description: "세렝게티에서 남쪽으로 이동해 응고롱고로 크레이터로 내려갑니다 — 260km² 규모의 폐쇄된 생태계이자 세계 최대의 온전한 칼데라입니다. 아프리카에서 가장 밀집된 야생동물 사이에서 하루 종일 게임 드라이브를 진행합니다. 빅파이브가 모두 정착해 있으며, 건강한 검은코뿔소 개체군 덕분에 응고롱고로는 탄자니아에서 코뿔소를 확실하게 볼 수 있는 마지막 남은 장소 중 하나입니다. 크레이터 림 바로 위, 카라투의 로지에서 하루를 마무리합니다.",
        accommodation: "카라투 로지",
        meals: "풀보드(전 식사 포함)",
        insiderFact: "응고롱고로는 하루 게임 드라이브만으로 검은코뿔소를 확실하게 볼 수 있는 아프리카의 몇 안 되는 장소 중 하나입니다 — 크레이터 바닥에는 약 25마리가 서식하고 있습니다.",
        accommodationByTier: {
          trail: {
            name: "Kitela Lodge",
            image: "/images/lodges/kitela-lodge.webp",
            amenities: [
              "pool",
              "view",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Gibb's Farm",
            image: "/images/lodges/gibbs-farm-cottage-exterior.webp",
            amenities: [
              "spa",
              "view",
              "organic-farm"
            ]
          }
        }
      },
      {
        day: 5,
        title: "마냐라 호수 & 아루샤 복귀",
        description: "그레이트 리프트밸리 절벽과 알칼리성 호수 사이에 자리한 마냐라 호수 국립공원에서 아침 게임 드라이브를 진행합니다 — 이 공원은 숲, 삼림지, 탁 트인 수면을 하나의 특별한 순환 코스 안에 압축해 놓았습니다. 나무를 타는 사자와 400종이 넘는 조류로 유명합니다. 이후 귀국 항공편을 위해 아루샤로 이동합니다.",
        accommodation: "해당 없음",
        meals: "조식 및 중식"
      }
    ]
  },
  {
    slug: "kilimanjaro-machame-7day",
    name: "킬리만자로 마차메 루트 — 7일",
    duration: 7,
    destinations: [
      "arusha"
    ],
    type: "trekking",
    priceFrom: 2100,
    groupSize: {
      min: 1,
      max: 12
    },
    bestFor: [
      "solo",
      "couples",
      "groups"
    ],
    overview: [
      "마차메 루트는 열대우림, 황무지, 고산 사막을 굽이굽이 지나는 경로 덕분에 흔히 '위스키 루트'라 불립니다. 킬리만자로를 오르는 가장 경관이 뛰어난 루트로 널리 평가받으며, 이 루트가 산에서 가장 높은 등정 성공률 중 하나를 기록하는 이유이기도 합니다. 7일 일정은 신체가 필요로 하는 시간을 충분히 제공하며, 3일 차에 라바 타워를 거쳐 '높이 올라갔다가 낮게 자는' 고도 순응일을 거치는데, 이는 등정일 밤에 확연한 차이를 만들어 냅니다.",
      "여정 내내 경험 많은 산악 가이드, 트레커 1인당 배정되는 전담 포터, 요리사와 캠프 크루, 그리고 기본으로 휴대되는 완전한 구조 장비의 지원을 받습니다. 이는 첫날 밤부터 마지막 밤까지 캠핑으로 진행되는 등정으로, 직접 걷는 것을 제외한 모든 물류가 처리됩니다."
    ],
    highlights: [
      "가장 경관이 뛰어난 킬리만자로 루트",
      "전체 루트 중 가장 높은 성공률",
      "라바 타워를 거치는 고도 순응 등정",
      "경험 많은 산악 가이드와 포터",
      "완전한 장비 및 안전 지원"
    ],
    heroImage: "/images/gallery/kilimanjaro.jpg",
    heroImageAlt: "Mount Kilimanjaro's snow-capped summit rising above the savanna, framed by an acacia tree at golden hour",
    gallery: [
      {
        src: "/images/gallery/lions-walking-dirt-track-dusk.webp",
        alt: "Lions walking along a dirt safari track at dusk"
      }
    ],
    included: [
      "국립공원 입장료 및 캠핑 요금",
      "경험 많은 산악 가이드",
      "포터(트레커 1인당 1명 + 단체 포터)",
      "요리사 및 캠프 크루",
      "산행 중 전 식사",
      "숙박용 텐트, 다이닝 텐트",
      "구조 장비"
    ],
    excluded: [
      "국제선 항공권",
      "개인 트레킹 장비",
      "여행자 보험",
      "팁",
      "산행 전후 호텔"
    ],
    notes: [
      "요금은 캠핑 기준 트레커 1인당 가격이며, 싱글 추가 요금은 적용되지 않습니다.",
      "개인 트레킹 장비(등산화, 방한 의류, 침낭)는 포함되지 않습니다 — 요청 시 준비물 체크리스트를 제공해 드립니다.",
      "요금 및 예약 가능 여부는 등반 시즌 내 정확한 여행 날짜에 따라 달라질 수 있습니다.",
      "킬리만자로 국립공원 요금은 탄자니아 국립공원청(TANAPA)이 책정하며 사전 통보 없이 변경될 수 있습니다."
    ],
    itinerary: []
  },
  {
    slug: "7-day-southern-circuit",
    name: "남부 서킷 7일 — 루아하 & 니에레레",
    duration: 7,
    destinations: [
      "nyerere",
      "ruaha"
    ],
    type: "wildlife",
    priceFrom: 4320,
    groupSize: {
      min: 1,
      max: 6
    },
    bestFor: [
      "solo",
      "couples",
      "wildlife-enthusiasts"
    ],
    metaTitle: "남부 서킷 사파리 7일: 니에레레 & 루아하",
    metaDescription: "니에레레와 루아하를 잇는 프라이빗 남부 서킷 사파리 — 아프리카에서 가장 한적한 야생지대. 육로 또는 플라이인 2개 등급, 1인당 $4,320부터.",
    overview: [
      "탄자니아 남부 서킷은 북부만큼 붐비지 않습니다 — 니에레레와 루아하를 합치면 74,826km²(28,891 sq mi)에 달하는 보호 야생지대로, 웬만한 국가 전체 면적보다 넓으면서도 붐비는 곳은 거의 없습니다. 이 프로그램은 도착 당일의 완충 역할을 하는 다르에스살람 1박과 함께 두 공원을 연결하며, 이후 여정을 어떻게 이동할지 선택할 수 있습니다.",
      "7일 6박 — 다르에스살람 1박 · 니에레레 국립공원 2박 · 루아하 국립공원 3박.",
      "두 가지 등급으로 제공되며, 가격만큼이나 성격도 각기 다릅니다. 윌더니스 리저브는 육로 원정입니다 — 프라이빗 차량과 가이드가 공원 사이의 실제 대지를 가로지릅니다. 윌더니스 소버린은 플라이인 버전입니다 — 모든 구간을 항공으로 이동해 이동 시간 대신 캠프에서 보내는 시간을 늘리고, 전 여정에 걸쳐 눈에 띄게 높은 수준의 편안함을 누릴 수 있습니다."
    ],
    highlights: [
      "니에레레와 루아하를 합쳐 74,826km²(28,891 sq mi)의 보호 야생지대 — 웬만한 국가 전체 면적보다 넓습니다",
      "니에레레에 서식하는, 대륙에서 가장 큰 규모로 남아 있는 아프리카들개 개체군",
      "루아하에는 세계 남은 사자 개체군의 약 10%가 서식하는 것으로 추정됩니다",
      "루피지강에서의 보트 사파리 — 남부 서킷 어디에서도 만날 수 없는 니에레레만의 특별한 체험",
      "무장 레인저가 인솔하는 니에레레 도보 사파리",
      "두 가지 이동 방식 — 윌더니스 리저브의 육로 원정 또는 완전 플라이인의 윌더니스 소버린",
      "동아프리카에 남은 가장 한적한 보호 야생지대 중 하나"
    ],
    heroImage: "/images/gallery/nyerere.webp",
    heroImageAlt: "Elephants wading and drinking from a river in Nyerere National Park",
    gallery: [
      {
        src: "/images/gallery/ruaha-giraffes-riverbank.webp",
        alt: "A tower of giraffes gathered along a river in Ruaha National Park"
      },
      {
        src: "/images/gallery/nyerere-elephants-river.jpg",
        alt: "Elephants wading and drinking from the river in Nyerere National Park"
      }
    ],
    pricingTiersProvisional: false,
    pricingTiers: [
      {
        pax: 2,
        reserve: 5145,
        sovereign: 7093.75
      },
      {
        pax: 3,
        reserve: 4732.5,
        sovereign: 6931.25
      },
      {
        pax: 4,
        reserve: 4526.25,
        sovereign: 6850
      },
      {
        pax: 5,
        reserve: 4402.5,
        sovereign: 6801.25
      },
      {
        pax: 6,
        reserve: 4320,
        sovereign: 6768.75
      }
    ],
    included: [
      "전 국립공원 및 컨세션 입장료",
      "전 일정 풀보드",
      "명시된 전 게임 드라이브 및 액티비티",
      "등급별로 명시된 국내선 항공편",
      "공항 이동"
    ],
    includedCategorized: {
      transfers: [
        "공항 이동",
        "등급별로 명시된 국내선 항공편"
      ],
      accommodationMeals: [
        "전 일정 풀보드",
        "일정표에 따른 숙박"
      ],
      guidingGameDrives: [
        "전 국립공원 및 컨세션 입장료",
        "명시된 전 게임 드라이브 및 액티비티",
        "전 일정 함께하는 전문 가이드"
      ]
    },
    excluded: [
      "다르에스살람행 국제선 항공권",
      "비자",
      "여행자 보험",
      "사례비",
      "개인 경비"
    ],
    excludedCategorized: [
      "다르에스살람행 국제선 항공권",
      "비자",
      "여행자 보험",
      "사례비",
      "개인 경비"
    ],
    notes: [
      "표시된 요금은 더블/트윈룸 2인 공유 기준 1인당 요금입니다. 싱글룸 이용 시 추가 요금이 발생합니다.",
      "니에레레와 루아하 사이에는 실질적인 육로 이동 경로가 없어, 두 등급 모두 이 구간은 항공편을 이용합니다.",
      "숙박 시설 및 요금은 예약 가능 여부에 따라 달라지며, 동일 시즌 내에서도 정확한 여행 날짜에 따라 변동될 수 있습니다.",
      "탄자니아 국립공원 및 보호구역 입장료는 정부가 책정하며 사전 통보 없이 변경될 수 있습니다."
    ],
    faq: [
      {
        q: "두 등급의 차이는 무엇인가요?",
        a: "주로 이동 방식과 숙박 장소가 다릅니다. 윌더니스 리저브는 다르에스살람에서 니에레레까지 육로로 이동하며 소박하지만 위치가 좋은 캠프에서 머뭅니다. 윌더니스 소버린은 첫 이동을 포함한 모든 구간을 항공으로 이동하며, 전 일정에 걸쳐 더 격조 있는 숙소에 머뭅니다. 두 등급 모두 동일한 두 공원을 동일한 박수만큼 방문하며, 포함된 게임 드라이브와 액티비티도 동일합니다."
      },
      {
        q: "니에레레-루아하 구간은 육로 사파리 등급에서도 왜 항공편을 이용하나요?",
        a: "두 공원 사이에는 실질적인 육로 경로가 없습니다 — 7일 일정으로는 지형상 단순히 불가능합니다. 윌더니스 리저브는 가능한 모든 곳은 육로로, 불가피한 곳만 항공으로 이동합니다. 윌더니스 소버린은 일관성과 편안함을 위해 전 구간을 항공으로 이동합니다."
      },
      {
        q: "이 일정은 체력적으로 얼마나 힘든가요?",
        a: "게임 드라이브는 좌석에 앉아 진행되므로 특별한 체력이 필요하지 않습니다. 니에레레의 선택 도보 사파리는 정해진 트레일을 무장 레인저의 인솔 아래 여유로운 속도로 걷는 프로그램입니다 — 적당히 건강한 성인이라면 무리 없이 소화할 수 있지만, 기술적인 트레킹은 아닙니다."
      },
      {
        q: "이 사파리에 가장 좋은 시기는 언제인가요?",
        a: "건기(대략 6월~10월)에는 덤불이 얇아지고 야생동물이 영구 수원 주변에 집중되어 두 공원 모두 가장 선명한 관찰이 가능합니다. 이 시기를 벗어나도 두 공원 모두 방문 가능하지만, 오후 소나기 가능성은 높아집니다."
      },
      {
        q: "빅파이브를 볼 수 있나요?",
        a: "두 공원 모두 사자, 표범, 코끼리, 버팔로의 건강한 개체군을 보유하고 있습니다. 코뿔소 관찰은 응고롱고로 지역에 비해 이 지역에서는 드물기 때문에, 이 일정은 빅파이브 체크리스트보다는 니에레레의 들개와 하마 개체군, 루아하의 탁월한 사자 밀도를 중심으로 접근하시는 편이 좋습니다."
      },
      {
        q: "인원수에 따라 요금이 얼마나 달라지나요?",
        a: "윌더니스 리저브에서는 차량, 가이드, 유류비가 그룹 전체가 함께 부담하며, 윌더니스 소버린에서도 여러 고정 비용이 마찬가지로 분담되기 때문에 인원이 늘어날수록 1인당 요금은 낮아집니다 — 정확한 수치는 위 요금표를 참고해 주세요."
      },
      {
        q: "요금에 포함된 것과 포함되지 않은 것은 무엇인가요?",
        a: "포함 사항: 전 국립공원 및 컨세션 입장료, 전 일정 풀보드, 명시된 전 게임 드라이브 및 액티비티, 등급별로 명시된 국내선 항공편, 공항 이동입니다. 미포함 사항: 다르에스살람행 국제선 항공권, 비자, 여행자 보험, 사례비, 개인 경비입니다."
      },
      {
        q: "혼자 여행하는 경우에도 적합한가요?",
        a: "네, 다만 위 요금은 2인 공유 기준으로 안내되어 있으며, 단독 여행자는 두 등급 모두 숙박에 싱글 추가 요금이 발생합니다. 담당 컨설턴트에게 솔로 요금을 문의해 주세요."
      },
      {
        q: "다른 공원과 조합하거나 일정을 연장할 수 있나요?",
        a: "네 — 남부 서킷은 잔지바르 해변 연장과 자연스럽게 어우러지며, 탄자니아의 두 지역을 한 번에 둘러보고 싶은 여행자를 위해 노던 서킷 사파리와 조합할 수도 있습니다. 담당 컨설턴트에게 이 프로그램의 연장 또는 조합에 대해 문의해 주세요."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "다르에스살람 도착",
        description: "다르에스살람에 도착합니다. 공항에서 프라이빗 이동합니다.",
        accommodation: "다르에스살람, 등급별 상이",
        meals: "석식",
        accommodationByTier: {
          reserve: {
            name: "Dar es Salaam Serena Hotel",
            image: "/images/lodges/dar-es-salaam-serena-hotel-entrance-night.webp",
            amenities: [
              "pool",
              "restaurant",
              "wifi"
            ]
          },
          sovereign: {
            name: "Hyatt Regency Dar",
            image: "/images/lodges/hyatt-regency-dar.webp",
            amenities: [
              "pool",
              "restaurant",
              "wifi"
            ]
          }
        }
      },
      {
        day: 2,
        title: "니에레레 국립공원으로",
        description: "리저브: 다르에스살람 → 니에레레 국립공원 육로 이동(약 4시간). 소버린: 다르에스살람 → 니에레레 항공 이동. 두 등급 모두 도착 즉시 보트 사파리를 진행합니다.",
        accommodation: "니에레레, 등급별 상이",
        meals: "풀보드(전 식사 포함)",
        insiderFact: "니에레레(구 셀루스 게임 리저브)는 면적 54,600km²(21,081 sq mi)로 아프리카 최대 규모의 보호 야생지대이며, 이는 스위스 국토 면적과 비슷합니다.",
        accommodationByTier: {
          reserve: {
            name: "Rufiji River Camp",
            image: "/images/lodges/rufiji-river-camp.webp",
            amenities: [
              "wildlife-view",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Serena Mivumo River Lodge",
            image: "/images/lodges/serena-mivumo-river-lodge.webp",
            amenities: [
              "all-inclusive",
              "pool",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 3,
        title: "니에레레에서 보내는 온전한 하루",
        description: "니에레레에서 하루 종일 게임 드라이브와 도보 사파리를 진행합니다.",
        accommodation: "니에레레, 등급별 상이",
        meals: "풀보드(전 식사 포함)",
        insiderFact: "니에레레는 아프리카에 남은 아프리카들개 개체군 중 가장 큰 규모를 보유하고 있으며, 루피지강을 따라 하마 개체수도 풍부합니다.",
        accommodationByTier: {
          reserve: {
            name: "Rufiji River Camp",
            image: "/images/lodges/rufiji-river-camp.webp",
            amenities: [
              "wildlife-view",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Serena Mivumo River Lodge",
            image: "/images/lodges/serena-mivumo-river-lodge.webp",
            amenities: [
              "all-inclusive",
              "pool",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 4,
        title: "루아하 국립공원으로 비행",
        description: "니에레레 → 루아하 국립공원 항공 이동합니다.",
        accommodation: "루아하, 등급별 상이",
        meals: "풀보드(전 식사 포함)",
        insiderFact: "루아하는 면적 20,226km²(7,809 sq mi)로 탄자니아 최대의 국립공원이며, 세계 남은 사자 개체군의 약 10%가 서식하는 것으로 추정됩니다.",
        accommodationByTier: {
          reserve: {
            name: "Ruaha River Lodge",
            image: "/images/lodges/ruaha-river-lodge-dining-pavilion.webp",
            amenities: [
              "view",
              "wildlife-view",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Ikuka Camp",
            image: "/images/lodges/ikuka-camp.webp",
            amenities: [
              "view",
              "wildlife-view",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 5,
        title: "루아하, 온전한 하루",
        description: "루아하에서 하루 종일 게임 드라이브를 진행합니다.",
        accommodation: "루아하, 등급별 상이",
        meals: "풀보드(전 식사 포함)",
        insiderFact: "그레이트 루아하강은 공원 남동쪽 가장자리의 야생동물 관찰을 지탱하는 축입니다 — 코끼리와 버팔로가 이곳에서 큰 무리를 이루어 이동합니다.",
        accommodationByTier: {
          reserve: {
            name: "Ruaha River Lodge",
            image: "/images/lodges/ruaha-river-lodge-dining-pavilion.webp",
            amenities: [
              "view",
              "wildlife-view",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Ikuka Camp",
            image: "/images/lodges/ikuka-camp.webp",
            amenities: [
              "view",
              "wildlife-view",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 6,
        title: "루아하, 온전한 하루",
        description: "루아하에서 하루 종일 게임 드라이브를 진행합니다.",
        accommodation: "루아하, 등급별 상이",
        meals: "풀보드(전 식사 포함)",
        insiderFact: "루아하는 탄자니아에서 세이블영양과 로안영양을 관찰할 확률이 가장 높은 곳 중 하나이기도 합니다.",
        accommodationByTier: {
          reserve: {
            name: "Ruaha River Lodge",
            image: "/images/lodges/ruaha-river-lodge-dining-pavilion.webp",
            amenities: [
              "view",
              "wildlife-view",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Ikuka Camp",
            image: "/images/lodges/ikuka-camp.webp",
            amenities: [
              "view",
              "wildlife-view",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 7,
        title: "출발",
        description: "루아하 → 다르에스살람 항공 이동. 출발합니다.",
        accommodation: "해당 없음",
        meals: "조식"
      }
    ]
  },
  {
    slug: "5-days-highlights-safari",
    name: "하이라이트 사파리 5일",
    duration: 5,
    destinations: [
      "serengeti",
      "ngorongoro"
    ],
    type: "wildlife",
    priceFrom: 3336.88,
    groupSize: {
      min: 1,
      max: 8
    },
    badge: "popular",
    bestFor: [
      "couples",
      "solo",
      "short-break"
    ],
    metaTitle: "프라이빗 세렝게티 & 응고롱고로 플라이인 사파리 5일 | 1인당 $3,337부터",
    metaDescription: "프라이빗 가이드가 전 일정을 함께하는 5일 플라이인 사파리 — 세렝게티에서 응고롱고로 크레이터까지, 윌더니스 트레일부터 윌더니스 소버린까지 3개 숙박 등급. 1인당 $3,337부터.",
    overview: [
      "5일이면 세렝게티와 응고롱고로 크레이터가 왜 아프리카 그 어떤 조합보다도 많은 사파리 일정의 중심이 되는지 충분히 확인하실 수 있습니다 — 육로를 아예 건너뛰고 평원으로 곧장 비행해 들어간다면 말입니다. 이 프로그램이 바로 그렇습니다. 1일 차에 경비행기가 아루샤에서 세로네라 활주로로 여러분을 데려다주고, 그 이후로는 이동이 아닌 게임 드라이브로 나머지 여정이 채워집니다. 세렝게티의 정착형 사자 무리, 그리고 시기에 따라 누 떼의 대이동 그 자체를 따라가는 온전한 이틀에 이어, 대륙 어디보다 밀도 높은 야생동물이 모인 응고롱고로 크레이터 안에서의 온전한 하루를 보낸 뒤, 아루샤로 돌아가는 길에 음토와음부 마을을 거치는 마지막 하강으로 마무리됩니다.",
      "윌더니스 트레일, 윌더니스 리저브, 윌더니스 소버린 3개 등급으로 제공되며, 각각 다른 수준의 캠프와 로지를 중심으로 구성되어 있습니다 — 일정 자체는 동일하게 유지되지만 그 안에서 경험하는 감각은 상당히 달라집니다.",
      "이 사파리는 더 넓은 동아프리카 여행과도 자연스럽게 어우러집니다 — 케냐나 르완다로 일정을 연장하거나, 마지막 게임 드라이브 후 해변 연장 일정을 추가할 수 있습니다."
    ],
    highlights: [
      "세렝게티로 곧장 비행 — 몇 시간에 걸친 육로 이동을 건너뛰고, 첫날 오후를 게임 드라이브에 씁니다",
      "세렝게티에서 보내는 온전한 이틀 — 포식자를 잠깐 스쳐 보는 것이 아니라 실제로 그 움직임을 따라갈 수 있는 충분한 시간",
      "처음부터 끝까지 빅파이브의 땅 — 사자, 표범, 코끼리, 버팔로, 코뿔소 모두 이 일정에서 현실적으로 관찰 가능합니다",
      "아프리카의 야생동물 그릇, 응고롱고로 크레이터 — 지구상 어디보다 밀집된 야생동물이 모인 폐쇄된 생태계 안에서 보내는 온전한 하루",
      "음토와음부 문화 마을 — 아루샤로 돌아가는 길에 서두르지 않고 들르는 진짜 체험으로, 급하게 지나치는 길거리 사진 촬영지가 아닙니다",
      "케냐나 르완다와도 손쉽게 조합 가능하며 해변으로 연장할 수도 있습니다 — 단독 일정으로도, 더 긴 동아프리카 여행의 한 구간으로도 손색이 없습니다",
      "모든 수준의 편안함을 아우릅니다 — 차분하고 세심한 스타일부터 진정으로 특별한 스타일까지, 일정 자체는 단 하루도 바뀌지 않습니다"
    ],
    heroImage: "/images/gallery/lion-cubs-greeting-male-lion.jpg",
    heroImageAlt: "Maned male lion greeted by a group of playful lion cubs in the grass",
    gallery: [],
    pricingTiersProvisional: false,
    pricingTiers: [
      {
        pax: 2,
        trail: 3336.88,
        reserve: 3975.63,
        sovereign: 5620.63
      },
      {
        pax: 3,
        trail: 2791.25,
        reserve: 3442.92,
        sovereign: 5209.17
      },
      {
        pax: 4,
        trail: 2724.69,
        reserve: 3303.44,
        sovereign: 5003.44
      },
      {
        pax: 5,
        trail: 2528.75,
        reserve: 3143.75,
        sovereign: 4576.25
      },
      {
        pax: 6,
        trail: 2489.38,
        reserve: 3076.88,
        sovereign: 4797.71
      }
    ],
    included: [
      "전 국립공원 입장료",
      "4WD 랜드크루저로 진행되는 전 게임 드라이브",
      "영어 구사 전문 가이드",
      "전 식사",
      "일정표에 따른 숙박",
      "공항 이동"
    ],
    excluded: [
      "국제선 항공권",
      "비자 발급 비용",
      "여행자 보험",
      "팁",
      "개인 경비"
    ],
    notes: [
      "표시된 요금은 더블/트윈룸 2인 공유 기준 1인당 요금입니다. 싱글룸 이용 시 추가 요금이 발생합니다.",
      "세로네라행 플라이인 전세기가 운항하려면 최소 그룹 인원 2명이 필요합니다.",
      "숙박 시설 및 요금은 예약 가능 여부에 따라 달라지며, 동일 시즌 내에서도 정확한 여행 날짜에 따라 변동될 수 있습니다.",
      "탄자니아 국립공원 및 보호구역 입장료는 정부가 책정하며 사전 통보 없이 변경될 수 있습니다."
    ],
    faq: [
      {
        q: "세 가지 등급의 차이는 무엇인가요?",
        a: "어느 등급을 선택하든 방문하는 장소와 만나는 야생동물은 동일합니다 — 이 부분은 절대 변하지 않습니다. 달라지는 것은 그 사이에 어떻게 머무느냐입니다. 윌더니스 트레일은 편안하고 소탈하게, 윌더니스 리저브는 조금 더 여유로운 공간을, 윌더니스 소버린은 매일 밤 정말로 특별한 장소를 제공합니다. 여행 스타일에 맞는 등급을 선택하시면 됩니다."
      },
      {
        q: "모든 등급이 동일한 방식으로 세렝게티에 비행해 들어가나요?",
        a: "그렇습니다 — 모든 여정은 동일하게 아루샤에서 이륙해 한 시간 안에 세렝게티의 탁 트인 평원에 착륙합니다. 착륙 순간부터 유일한 차이는 매일 저녁 어디서 머무느냐입니다."
      },
      {
        q: "대이동을 볼 수 있나요?",
        a: "모두가 궁금해하시는 질문이며, 저희도 특정 날짜와 장소를 약속드릴 수 있다면 좋겠습니다. 저희가 약속드릴 수 있는 것은 무리가 어디로 이동했든 연중 관찰이 가능한 정착형 사자와 표범 서식지에서 보내는 5일입니다. 대이동 시기 맞추기가 가장 중요하다면 예약 전 담당 컨설턴트와 상담해 주세요 — 최상의 가능성을 드릴 수 있는 날짜를 함께 찾아드립니다."
      },
      {
        q: "그룹으로 여행하면 요금이 달라지나요?",
        a: "대체로 조금 달라집니다 — 차량과 가이드 같은 일부 비용이 분담되므로 그룹 규모가 클수록 1인당 총액이 낮아지는 경향이 있습니다. 그룹 규모에 맞는 요금은 위의 각 등급별 요금표를 참고해 주세요."
      },
      {
        q: "요금에 포함된 것과 별도로 준비해야 하는 것은 무엇인가요?",
        a: "현지에서 중요한 모든 것을 요금에 포함했습니다: 국립공원 및 보호구역 입장료, 프라이빗 차량으로 진행되는 전 게임 드라이브, 가이드, 식사, 숙박, 공항 왕복 이동입니다. 여러분이 준비하실 것은 탄자니아까지 오시는 부분입니다 — 국제선 항공권, 비자, 여행자 보험, 그리고 여정을 잊지 못할 순간으로 만들어 준 분들께 남기고 싶은 팁입니다."
      },
      {
        q: "케냐, 르완다, 혹은 며칠간의 해변 일정을 더해 더 큰 여행으로 만들 수 있나요?",
        a: "물론입니다. 실제로 많은 여행자분들이 그렇게 하고 계십니다. 이 사파리는 케냐 사파리나 르완다 고릴라 트레킹과 아름답게 어우러지며, 모래사장에서 조용히 며칠을 보내는 것이 여정을 마무리하는 좋은 방법처럼 느껴지신다면 마지막 게임 드라이브 직후 그 일정도 마련해 드릴 수 있습니다. 계획하실 때 말씀해 주시면 전체 여정을 함께 구성해 드립니다."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "세렝게티로 비행",
        description: "아루샤에서 중앙 세렝게티 세로네라 활주로로 비행합니다. 오후 게임 드라이브를 진행합니다.",
        accommodation: "중앙 세렝게티, 등급별 상이",
        meals: "중식, 석식",
        accommodationByTier: {
          trail: {
            name: "Serengeti Katikati Camp",
            image: "/images/lodges/serengeti-katikati-camp.webp",
            amenities: [
              "ensuite",
              "restaurant",
              "wildlife-view"
            ]
          },
          reserve: {
            name: "Lahia Tented Lodge",
            image: "/images/lodges/lahia-tented-lodge.webp",
            amenities: [
              "view",
              "restaurant",
              "wildlife-view"
            ]
          },
          sovereign: {
            name: "Siringiti Serengeti Camp",
            image: "/images/lodges/siringiti-serengeti-camp.webp",
            amenities: [
              "wifi",
              "view",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 2,
        title: "세렝게티 게임 드라이브",
        description: "하루 종일 세렝게티 게임 드라이브를 진행합니다.",
        accommodation: "중앙 세렝게티, 등급별 상이",
        meals: "전 식사",
        accommodationByTier: {
          trail: {
            name: "Serengeti Katikati Camp",
            image: "/images/lodges/serengeti-katikati-camp.webp",
            amenities: [
              "ensuite",
              "restaurant",
              "wildlife-view"
            ]
          },
          reserve: {
            name: "Lahia Tented Lodge",
            image: "/images/lodges/lahia-tented-lodge.webp",
            amenities: [
              "view",
              "restaurant",
              "wildlife-view"
            ]
          },
          sovereign: {
            name: "Siringiti Serengeti Camp",
            image: "/images/lodges/siringiti-serengeti-camp.webp",
            amenities: [
              "wifi",
              "view",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 3,
        title: "중앙 세렝게티에서 응고롱고로 보호구역으로",
        description: "중앙 세렝게티에서 응고롱고로 보호구역으로 이동합니다.",
        accommodation: "응고롱고로 지역, 등급별 상이",
        meals: "전 식사",
        accommodationByTier: {
          trail: {
            name: "Tortils Ngorongoro Camp",
            image: "/images/lodges/tortils-ngorongoro-camp.webp",
            amenities: [
              "restaurant",
              "garden"
            ]
          },
          reserve: {
            name: "Ngorongoro Serena Lodge",
            image: "/images/lodges/ngorongoro-serena-safari-lodge.webp",
            amenities: [
              "view",
              "restaurant",
              "ensuite"
            ]
          },
          sovereign: {
            name: "Melia Ngorongoro Lodge",
            image: "/images/lodges/ngorongoro-lodge-the-rim-room-melia-collection.webp",
            amenities: [
              "view",
              "spa",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 4,
        title: "응고롱고로 크레이터",
        description: "하루 종일 응고롱고로 크레이터로 내려갑니다.",
        accommodation: "응고롱고로 지역, 등급별 상이",
        meals: "전 식사",
        insiderFact: "응고롱고로 크레이터는 약 260km² 규모의 폐쇄된 생태계로, 이곳에 서식하는 동물 대부분은 평생 크레이터 밖으로 나가지 않습니다.",
        accommodationByTier: {
          trail: {
            name: "Ngorongoro Farm House",
            image: "/images/lodges/ngorongoro-farm-house.webp",
            amenities: [
              "restaurant",
              "garden"
            ]
          },
          reserve: {
            name: "Kitela Lodge",
            image: "/images/lodges/kitela-lodge.webp",
            amenities: [
              "pool",
              "view",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Melia Ngorongoro Lodge",
            image: "/images/lodges/ngorongoro-lodge-the-rim-room-melia-collection.webp",
            amenities: [
              "view",
              "spa",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 5,
        title: "음토와음부를 경유한 출발",
        description: "음토와음부 마을을 지나 아루샤로 돌아갑니다. 공항으로 이동해 귀국 항공편을 탑니다.",
        accommodation: "해당 없음",
        meals: "조식"
      }
    ]
  },
  {
    slug: "8-days-honeymoon-safari",
    name: "허니문 사파리 8일 — 부시 러버스",
    duration: 8,
    destinations: [
      "tarangire",
      "manyara",
      "ngorongoro",
      "serengeti"
    ],
    type: "wildlife",
    priceFrom: 3824,
    groupSize: {
      min: 2,
      max: 2
    },
    badge: "popular",
    bestFor: [
      "honeymoon",
      "couples"
    ],
    tagline: "오직 두 분과 가이드만의 시간",
    overview: [
      "허니문이 모험적이고 특별하게 느껴지길 바라시겠지요 — 전망 좋은 비치체어에 앉아 있는 또 하나의 순간이 아니라 말입니다. 이 8일간의 탄자니아 허니문 사파리는 바로 그것을 위해 설계되었습니다. 타랑기레, 응고롱고로 고지대, 세렝게티를 이동하는 7박 동안 모든 게임 드라이브는 프라이빗으로 진행되며, 모든 캠프는 다른 누구와도 멀리 떨어져 있어야만 느낄 수 있는 종류의 고요함을 기준으로 선정되었습니다. 앞뒤로 킬리만자로 저지대에서 며칠을 보내거나 잔지바르 백사장을 더하면, 코끼리로 시작해 원하시는 방식으로 끝나는 허니문이 완성됩니다.",
      "루트와 속도, 만나는 야생동물은 어느 등급을 선택하든 동일합니다 — 달라지는 것은 머무는 장소뿐입니다. 이 일정을 두 가지 등급으로 마련한 이유는, 예산을 숙박에 더 쓸지 아니면 이를테면 잔지바르 연장 일정에 더 쓸지 선택하실 수 있도록 하기 위함입니다."
    ],
    whyDifferent: {
      heading: "커플들이 이 일정을 선택하는 이유",
      paragraphs: [
        "처음부터 끝까지 프라이빗 차량입니다. 다른 여행객과 게임 드라이브를 함께할 일도, 다른 이의 사진 촬영을 기다릴 일도 없습니다. 오직 가이드와 두 분의 속도, 그리고 사자 무리 곁에서 원하는 만큼 머무른 뒤 이동하시면 됩니다.",
        "반복 없는 세 가지 풍경. 바오밥나무가 점점이 흩어진 타랑기레의 평원은 크레이터 고지대로, 그리고 다시 끝없이 펼쳐진 세렝게티의 초원으로 이어집니다 — 각기 완전히 다른 리듬과 빛을 지니고 있습니다.",
        "뒷전이 아닌 샴페인 웰컴. 아루샤에서 맞는 첫날 밤은 오직 두 분만을 위해 준비된 차가운 샴페인과 함께 시작됩니다 — 사파리가 시작되기도 전에 말입니다.",
        "모든 캠프에서 풀보드. 조식, 중식, 석식이 머무는 모든 곳에서 준비되므로, 매일 남는 결정은 차량을 어느 방향으로 향할지뿐입니다."
      ]
    },
    destinationHighlights: {
      heading: "이 여행을 즐기는 두 가지 방법",
      items: [
        {
          title: "윌더니스 리저브",
          text: "가장 소탈한 형태의 여행입니다: 잘 운영되는 텐티드 캠프와 로지 — Kahawa House, 타랑기레의 Zuri Kilima Siri, 카라투 고지대의 Tloma Lodge, 그리고 Conserve Safari의 세렝게티 캠프 — 모두 풀보드이며 편안하지만, 그 누구도 리조트인 척하지 않습니다. 저희 허니문 커플 대부분이 선택하는 등급입니다."
        },
        {
          title: "윌더니스 소버린",
          text: "같은 일수와 루트를 따르지만 매일 밤 더 세심하게 고른 장소에 머무릅니다: 아루샤의 Siringiti 프라이빗 빌라, 같은 브랜드의 타랑기레 캠프, 카라투 고지대의 Gibb's Farm(운영 중인 커피 농장이며 이 지역 최고의 전망 중 하나를 자랑합니다), 그리고 Siringiti의 세렝게티 캠프. 사파리뿐 아니라 허니문 그 자체가 주인공처럼 느껴지길 원하는 커플을 위한 등급입니다."
        }
      ]
    },
    highlights: [
      "처음부터 끝까지 프라이빗 차량",
      "반복 없는 세 가지 풍경",
      "뒷전이 아닌 샴페인 웰컴",
      "모든 캠프에서 풀보드"
    ],
    heroImage: "/images/gallery/leopards-interacting-fallen-log.jpg",
    heroImageAlt: "Two leopards interacting closely on a fallen log in golden backlit woodland",
    gallery: [],
    pricingTiers: [
      {
        pax: 2,
        season: "low",
        reserve: 3824,
        sovereign: 5188
      },
      {
        pax: 2,
        season: "high",
        reserve: 4443,
        sovereign: 7334
      }
    ],
    included: [
      "전 국립공원 입장료",
      "전 게임 드라이브를 위한 프라이빗 4WD 차량 및 가이드",
      "도착 시 프라이빗 샴페인 웰컴",
      "전 일정 전 식사(모든 캠프에서 조식, 중식, 석식)",
      "위에 안내된 대로, 선택하신 등급에 따른 숙박",
      "도착 시 공항 이동 및 출발 시 국내선 항공편(세렝게티-킬리만자로)"
    ],
    excluded: [
      "국제선 항공권",
      "비자 발급 비용",
      "여행자 보험",
      "가이드 및 스태프 사례비",
      "스파 트리트먼트 등 개인적인 추가 비용",
      "도착일 저녁 식사(1일 차는 조식 포함이며, 샴페인 웰컴은 저희가 준비해 드립니다. 아루샤에서의 저녁 식사는 요청 시 손쉽게 마련해 드립니다)"
    ],
    notes: [
      "2인 공유 기준 요금이며, 이 일정은 커플만을 위해 설계되었습니다.",
      "사파리 전후로 잔지바르 또는 킬리만자로 저지대에서 며칠을 추가하실 수 있습니다 — 문의 시 연장 옵션을 안내해 드립니다.",
      "30%의 예약금으로 날짜를 확정하며, 잔금은 출발 60일 전까지 납부합니다.",
      "숙박 시설 및 요금은 예약 가능 여부에 따라 달라지며, 동일 시즌 내에서도 정확한 여행 날짜에 따라 변동될 수 있습니다.",
      "탄자니아 국립공원 및 보호구역 입장료는 정부가 책정하며 사전 통보 없이 변경될 수 있습니다."
    ],
    faq: [
      {
        q: "이것은 프라이빗 사파리인가요, 아니면 다른 여행객과 게임 드라이브를 함께하나요?",
        a: "매일 완전히 프라이빗으로 진행됩니다. 이 일정에서는 타협의 여지가 없는 부분입니다 — 여러분만의 차량, 여러분만의 가이드이며, 다른 누구의 일정도 신경 쓸 필요가 없습니다. 한 지점에서 40분을 더 머물고 싶으시든, 한 곳을 건너뛰고 싶으시든 그것은 두 분의 결정이지 단체 투표가 아닙니다."
      },
      {
        q: "윌더니스 리저브와 윌더니스 소버린은 실제로 무엇이 다른가요?",
        a: "루트와 야생동물은 달라지지 않습니다 — 같은 공원, 같은 대이동, 같은 크레이터를 보시게 됩니다. 달라지는 것은 매일 밤의 숙박입니다. 리저브는 그 이상을 흉내 내려 하지 않는, 잘 운영되는 편안한 캠프에 머무릅니다. 소버린은 조금 더 특별한 장소 — 프라이빗 빌라, 운영 중인 커피 농장, 더 높은 스태프 대 게스트 비율과 세심한 디자인을 갖춘 캠프에 머무릅니다. 이번 여행에서 어디에 더 투자할지 고민 중이시라면, 바로 이 부분이 그 기준이 됩니다."
      },
      {
        q: "탄자니아 허니문에 8일이면 충분한가요?",
        a: "좋은 길이입니다 — 각 공원을 단순히 체크리스트처럼 지나치지 않고 실제로 그 안에 머무를 만큼 길면서도, 전체 휴가 일수를 다 써버리지 않을 만큼 짧습니다. 마지막에 잔지바르나 킬리만자로 인근에서 3~4일을 더하실 수 있다면 추천해 드리지만, 이 일정만으로도 충분히 완결성이 있습니다."
      },
      {
        q: "누 떼의 대이동을 볼 수 있나요?",
        a: "여행 날짜에 따라 달라집니다. 대이동은 세렝게티 생태계를 대략적인 연간 순환 경로로 이동하므로 무리의 위치는 달마다 달라집니다 — 남부 평원의 출산기일 때도 있고, 북부의 강 도하일 때도 있습니다. 문의하실 때 여행 날짜를 알려주시면 6~7일 차 일정을 그 시기의 대이동 상황에 맞춰 최적으로 조정해 드립니다."
      },
      {
        q: "잔지바르나 킬리만자로를 더할 수 있나요?",
        a: "네 — 저희가 가장 자주 받는 요청 중 하나이며, 8일 차 항공편이 이미 허브를 거쳐 가기 때문에 물류상으로도 잘 맞아떨어집니다. 세렝게티의 흙먼지를 씻어낸 뒤 며칠간의 해변은 정말 좋은 조합입니다. 문의하실 때 연장 옵션을 요청해 주세요."
      },
      {
        q: "패키지 요금 외에 무엇을 추가로 준비해야 하나요?",
        a: "가이드와 캠프 스태프를 위한 사례비는 포함되어 있지 않습니다(대략적인 기준은 커플당 가이드에게 하루 $15~20, 그리고 캠프마다 스태프 공동 사례비 봉투입니다). 대부분의 캠프에서 하우스 음료를 넘어서는 주류, 스파 트리트먼트, 개인 기념품으로 분류되는 것들도 포함되지 않습니다. 여행자 보험도 직접 준비하셔야 합니다 — 생략하지 않으시길 권해 드립니다."
      },
      {
        q: "안전이나 건강 준비에 대해 걱정해야 하나요?",
        a: "탄자니아는 안전 관리가 잘 정착된 사파리 여행지이며, 이 여행은 처음부터 끝까지 경험 많은 가이드가 함께하는 프라이빗 여행이므로 혼자 헤쳐 나가실 일은 없습니다. 말라리아 예방약(이 지역은 말라리아 위험 지역입니다)과 표준 여행 예방접종은 출발 전 준비하시는 것이 좋으며, 구체적인 사항은 담당 의사나 여행 클리닉에서 안내받으실 수 있습니다."
      },
      {
        q: "얼마나 미리 예약해야 하나요?",
        a: "성수기(대략 7월~10월, 그리고 12월 연말연시)에는 6~12개월 전에 예약하시면 더 좋은 캠프와 객실을 우선적으로 선택하실 수 있습니다 — 특히 허니문 날짜는 일찍 마감됩니다. 준성수기와 비수기는 좀 더 여유가 있지만, 날짜를 빨리 확정할수록 세부 사항에 더 많은 유연성을 발휘할 수 있습니다."
      },
      {
        q: "팝업 루프가 달린 4WD가 정말 필요한가요, 아니면 단순한 업셀링인가요?",
        a: "업셀링이 아닙니다 — 좋은 사진과 훌륭한 사진의 차이이며, 더 중요하게는 답답한 7일과 편안한 7일의 차이입니다. 이 일정의 모든 차량은 게임 뷰잉을 위한 팝업 루프가 달린 정식 사파리 4WD이며, 두 분만을 위한 프라이빗 차량입니다."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "아루샤",
        description: "킬리만자로 국제공항에 항공편이 착륙하면 가이드가 기다리고 있습니다. 아루샤까지의 이동은 짧으며, 자리를 잡을 즈음이면 두 분의 이름이 적힌 차가운 샴페인 한 병이 준비되어 있습니다. 오늘은 게임 드라이브 없이, 결혼 후 맞는 첫 번째 조용한 저녁을 보내시면 됩니다.",
        accommodation: "Kahawa House",
        meals: "조식",
        insiderFact: "아루샤는 앞으로 만날 평원보다 서늘한 기후의 쾌적한 고도에 위치해 있습니다 — 첫날 저녁을 위해 얇은 겉옷을 챙기세요.",
        accommodationByTier: {
          reserve: {
            name: "Kahawa House",
            image: "/images/lodges/kahawa-house.webp",
            amenities: [
              "wifi",
              "restaurant",
              "garden"
            ]
          },
          sovereign: {
            name: "Siringiti Arusha Villa",
            image: "/images/lodges/siringiti-arusha-villa.webp",
            amenities: [
              "pool",
              "spa",
              "view",
              "wifi"
            ]
          }
        }
      },
      {
        day: 2,
        title: "타랑기레로",
        description: "남쪽으로 향하는 길은 정오 무렵 타랑기레에 도착해, 오후 게임 드라이브가 시작되기 전 점심 식사를 할 시간을 줍니다. 이곳은 코끼리의 땅입니다 — 건기에도 공원을 푸르게 유지해 주는 강을 따라 서른 마리 이상의 무리가 이동하는 모습도 드물지 않습니다. 빛이 낮아지면 가이드가 천 년 넘게 서 있는 바오밥나무 사이에서 프라이빗 선다우너를 위한 자리를 찾아 드립니다.",
        accommodation: "Zuri Kilima Siri",
        meals: "전 식사",
        insiderFact: "타랑기레의 바오밥나무는 천 년 넘게 살 수 있으며, 줄기 안에 몇 달간의 가뭄을 견딜 만큼 충분한 물을 저장합니다 — 가이드에게 가장 오래된 나무를 알려 달라고 요청해 보세요.",
        accommodationByTier: {
          reserve: {
            name: "Zuri Kilima Siri",
            image: "/images/lodges/zuri-kilima-siri.webp",
            amenities: [
              "restaurant",
              "wifi",
              "wildlife-view"
            ]
          },
          sovereign: {
            name: "Siringiti Tarangire Camp",
            image: "/images/lodges/siringit-tarangire-camp-pool-aerial.webp",
            amenities: [
              "view",
              "wildlife-view",
              "luxury-tent"
            ]
          }
        }
      },
      {
        day: 3,
        title: "여유로운 타랑기레",
        description: "달리 갈 곳 없이 온전히 하루를 보냅니다. 타랑기레는 인내심을 보상해 줍니다 — 이 시간대에는 물가에서 무리를 만날 확률이 높으며, 기린과 얼룩말, 가끔은 강가 나무에 몸을 늘어뜨린 비단뱀도 볼 수 있습니다. 오늘 밤 캠프는 공원 안에 자리해 있어, 잠들기 전 마지막으로 듣는 소리는 덤불의 소리입니다.",
        accommodation: "Zuri Kilima Siri",
        meals: "전 식사",
        insiderFact: "건기가 되면 야생동물이 타랑기레강을 따라 촘촘히 모여듭니다 — 10월에 가까워질수록 무리의 규모는 대체로 커지는 경향이 있습니다.",
        accommodationByTier: {
          reserve: {
            name: "Zuri Kilima Siri",
            image: "/images/lodges/zuri-kilima-siri.webp",
            amenities: [
              "restaurant",
              "wifi",
              "wildlife-view"
            ]
          },
          sovereign: {
            name: "Siringiti Tarangire Camp",
            image: "/images/lodges/siringit-tarangire-camp-pool-aerial.webp",
            amenities: [
              "view",
              "wildlife-view",
              "luxury-tent"
            ]
          }
        }
      },
      {
        day: 4,
        title: "카라투 고지대로",
        description: "오늘 아침의 이동은 마냐라 호수 국립공원을 지나갑니다 — 얕은 물가에 모인 홍학, 운이 좋다면 아카시아 나뭇가지에 걸쳐 있는 이 공원의 유명한 나무 타는 사자도 만나실 수 있습니다. 그곳에서 길은 카라투 주변의 서늘하고 푸른 고지대로 올라가며, 내일의 크레이터 하강 전 이곳에서 하룻밤을 보냅니다.",
        accommodation: "Tloma Lodge",
        meals: "전 식사",
        insiderFact: "카라투는 해발 1,500m가 넘는 곳에 위치해 있어 아래쪽 평원보다 눈에 띄게 서늘합니다 — 저녁을 위한 여분의 겉옷을 챙겨두시면 좋습니다.",
        accommodationByTier: {
          reserve: {
            name: "Tloma Lodge",
            image: "/images/lodges/tloma-lodge.webp",
            amenities: [
              "wifi",
              "restaurant",
              "garden"
            ]
          },
          sovereign: {
            name: "Gibb's Farm",
            image: "/images/lodges/gibbs-farm-cottage-exterior.webp",
            amenities: [
              "spa",
              "view",
              "organic-farm"
            ]
          }
        }
      },
      {
        day: 5,
        title: "응고롱고로 크레이터, 그리고 세렝게티로",
        description: "이른 출발 덕분에 빛이 아직 부드러운 시간에 크레이터에 들어서게 됩니다 — 초원, 숲, 소다호로 이루어진 260제곱킬로미터의 대지에는 대륙 어디보다 밀집된 야생동물이 살고 있습니다. 사자, 코끼리, 그리고 크레이터의 유명한 검은코뿔소까지 한나절 만에 모두 만날 가능성이 있습니다. 오후에는 서쪽 세렝게티로 향하는 길에 올라, 하늘이 주황빛으로 물들 무렵 캠프에 도착합니다.",
        accommodation: "Conserve Safari Serengeti Camp",
        meals: "전 식사",
        insiderFact: "크레이터 바닥은 정오에도 림보다 몇 도는 서늘합니다 — 하강할 때 얇은 재킷을 챙기세요.",
        accommodationByTier: {
          reserve: {
            name: "Conserve Safari Serengeti Camp",
            image: "/images/lodges/serengeti-queens-camp-firepit.webp",
            amenities: [
              "ensuite",
              "restaurant",
              "wildlife-view"
            ]
          },
          sovereign: {
            name: "Siringiti Serengeti Camp",
            image: "/images/lodges/siringiti-serengeti-camp.webp",
            amenities: [
              "wifi",
              "view",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 6,
        title: "세렝게티 깊숙이",
        description: "세렝게티가 그 이름값을 하는 날입니다 — '끝없는 평원'이라는 뜻이며, 그 뜻을 직접 체감하시게 됩니다. 치타는 흰개미 언덕 위에서 움직임을 살피고, 사자 무리는 찾을 수 있는 그늘마다 늘어져 있으며, 가이드는 두 분이 이제 막 배우기 시작한 언어처럼 그 풍경을 읽어냅니다. 오늘 밤의 저녁 식사는 촛불 아래, 아마 두 분 모두 한 번에 이렇게 많은 별을 본 적 없을 만큼의 하늘 아래에서 야외에 준비됩니다.",
        accommodation: "Conserve Safari Serengeti Camp",
        meals: "전 식사",
        insiderFact: "가이드에게 현재 대이동의 위치를 물어보세요 — 세렝게티의 정착 야생동물은 연중 훌륭하지만, 무리의 시기에 맞춰 방문하면 완전히 다른 층위의 경험이 더해집니다.",
        accommodationByTier: {
          reserve: {
            name: "Conserve Safari Serengeti Camp",
            image: "/images/lodges/serengeti-queens-camp-firepit.webp",
            amenities: [
              "ensuite",
              "restaurant",
              "wildlife-view"
            ]
          },
          sovereign: {
            name: "Siringiti Serengeti Camp",
            image: "/images/lodges/siringiti-serengeti-camp.webp",
            amenities: [
              "wifi",
              "view",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 7,
        title: "대이동을 따라서",
        description: "여행 날짜가 맞아떨어진다면, 오늘은 누 떼의 대이동을 중심으로 짜여집니다 — 수십만 마리의 동물이 평원을 가로질러 하나의, 쉼 없는 무리를 이루며 이동합니다. 무리가 그날 세렝게티의 어느 구역에 있든, 하루는 늘 같은 방식으로 마무리됩니다. 바위 언덕에서 즐기는 선다우너, 손에는 음료를 들고, 도저히 사진으로는 담아낼 수 없는 하늘의 변화를 지켜보시게 됩니다.",
        accommodation: "Conserve Safari Serengeti Camp",
        meals: "전 식사",
        insiderFact: "선다우너는 대개 시야가 탁 트인 바위 코피에서 준비됩니다 — 빛이 사라지기 전 카메라를 미리 준비해 두면 좋습니다.",
        accommodationByTier: {
          reserve: {
            name: "Conserve Safari Serengeti Camp",
            image: "/images/lodges/serengeti-queens-camp-firepit.webp",
            amenities: [
              "ensuite",
              "restaurant",
              "wildlife-view"
            ]
          },
          sovereign: {
            name: "Siringiti Serengeti Camp",
            image: "/images/lodges/siringiti-serengeti-camp.webp",
            amenities: [
              "wifi",
              "view",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 8,
        title: "출발",
        description: "이른 아침의 마지막 게임 드라이브입니다. 조식 전의 빛이 언제나 가장 아름답기 때문입니다. 이후 짧은 비행이 세렝게티를 떠나 킬리만자로 국제공항으로 돌아가는 여정을 이어주며, 그곳에서 다음 여정 — 집으로, 혹은 허니문이 이어질 어디로든 — 으로 연결됩니다.",
        accommodation: "해당 없음",
        meals: "조식"
      }
    ]
  },
  {
    slug: "7-days-crown-jewels",
    name: "크라운 주얼스 사파리 7일",
    duration: 7,
    destinations: [
      "tarangire",
      "manyara",
      "ngorongoro",
      "serengeti"
    ],
    type: "combination",
    priceFrom: 5334.38,
    groupSize: {
      min: 1,
      max: 8
    },
    badge: "bestseller",
    bestFor: [
      "couples",
      "honeymoon",
      "families"
    ],
    metaTitle: "크라운 주얼스 사파리 7일 | 타랑기레, 응고롱고로 & 세렝게티 | EWA 사파리 아웃피터즈",
    metaDescription: "EWA 사파리 아웃피터즈의 시그니처 본토 서킷 — 타랑기레 나이트 드라이브, 응고롱고로 크레이터, 세렝게티 열기구 사파리. 2개 등급, 1인당 $5,334.38부터.",
    overview: [
      "2027 시즌 업데이트. 탄자니아 사파리를 단 한 번 떠나신다면, 이 일정이야말로 크라운 주얼스(왕관의 보석)라는 이름값을 하는 코스입니다. 7일, 4개의 생태계, 그리고 이 정도 길이의 일정에서는 거의 시도되지 않는 두 가지 시그니처 체험이 함께합니다: 공원의 야행성 사냥꾼들이 유명한 코끼리 무리로부터 바통을 이어받는 타랑기레 나이트 드라이브, 그리고 앞유리 너머가 아닌 하늘 위에서 세렝게티의 끝없는 평원을 바라보는 일출 열기구 사파리입니다.",
      "이 루트 자체가 EWA 사파리 아웃피터즈가 던지는 하나의 단순한 질문에 대한 답입니다: 모든 정류장이 그 자리를 스스로 증명해야 한다면, 본토 서킷은 어떤 모습이 될까요? 코끼리와 바오밥나무를 위한 타랑기레. 마사이 공동체 방문과 마냐라 호수 모코로 사파리는 더 큰 공원들 사이의 진짜 변화입니다. 아프리카에서 빅파이브를 가장 확실하게 만날 수 있는 응고롱고로 크레이터로의 완전한 하강. 그리고 하늘에서 마무리되는 세렝게티에서의 온전한 이틀.",
      "저희는 탄자니아 태생이며 아루샤에 기반을 두고 있고, 이 일정은 바로 이 도로와 활주로에서 수년간 쌓아온 경험을 바탕으로 만들어졌습니다. 모든 크라운 주얼스 사파리는 여행 날짜와 속도에 맞춰 맞춤 제작되며, 처음부터 끝까지 동일한 전문 공인 가이드가 이끌고, 나중에 덧붙인 것이 아니라 애초에 설계에 포함된 24시간 지원이 함께합니다."
    ],
    tagline: "2022년 창업한 현지 소유 · 40여 개국 200명 이상의 게스트로부터 4.9/5 평점 · 빅파이브 목격률 100%",
    bestTimeToTravel: "응고롱고로 크레이터는 계절을 막론하고 정착 야생동물이 서식하며 타랑기레의 코끼리 무리도 연중 관찰 가능하므로 사시사철 가능합니다 — 6월~10월 및 12월 하순~2월에는 가장 건조한 관찰 조건이 갖춰집니다",
    highlights: [
      "타랑기레 나이트 드라이브 — 표준 주간 드라이브에서는 숨어 있는 공원의 야행성 포식자와 작고 좀처럼 볼 수 없는 종을 만날 수 있는 몇 안 되는 기회 중 하나",
      "세렝게티 위를 나는 일출 열기구 사파리 — 하늘에서 바라보는 평원, 그리고 착륙 후 이어지는 샴페인 조식",
      "응고롱고로 크레이터 안에서 보내는 온전한 하루 — 아프리카에서 빅파이브를 가장 확실하게 만날 수 있는 곳이며, 멸종위기종인 검은코뿔소를 만날 확률도 탄자니아에서 최고 수준입니다",
      "마사이 공동체 방문과 마냐라 호수 모코로 사파리 — 공원 사이 이동일에 채워 넣은 것이 아니라, 진짜 문화 체험과 카누 기반의 야생동물 관찰",
      "세렝게티에서 보내는 온전한 이틀 — 열기구 사파리와 일반 게임 드라이브 모두에 충분한 여유를 주며, 하루로 모든 것을 몰아넣지 않습니다"
    ],
    heroImage: "/images/gallery/Crown-Jewels-safari.jpg",
    heroImageAlt: "Two leopards interacting on a fallen log in warm backlit woodland light",
    gallery: [
      {
        src: "/images/gallery/tarangire-elephants-baobab.webp",
        alt: "Two elephants with tusks foraging together in tall grass in Tarangire National Park"
      },
      {
        src: "/images/gallery/serengeti-hot-air-balloon.webp",
        alt: "Hot air balloons drifting over the Serengeti savanna near scattered acacia trees at sunrise"
      }
    ],
    pricingTiers: [
      {
        pax: 2,
        reserve: 5334.38,
        sovereign: 9659.38
      },
      {
        pax: 3,
        reserve: 4929.17,
        sovereign: 9254.17
      },
      {
        pax: 4,
        reserve: 4726.56,
        sovereign: 9051.56
      },
      {
        pax: 5,
        reserve: 4605,
        sovereign: 8930
      },
      {
        pax: 6,
        reserve: 4523.96,
        sovereign: 8848.96
      }
    ],
    included: [
      "전 국립공원 및 컨세션 입장료",
      "타랑기레 나이트 드라이브를 포함한 전 게임 드라이브",
      "열기구 사파리",
      "전 일정 함께하는 프라이빗 가이드",
      "사파리 중 전 식사",
      "식수 및 도시락",
      "세로네라-아루샤 항공편",
      "긴급 의료 후송 보험(AMREF 플라잉 닥터스)"
    ],
    excluded: [
      "국제선 항공권",
      "비자 발급 비용",
      "여행자 보험",
      "팁"
    ],
    includedCategorized: {
      transfers: [
        "세로네라-아루샤 항공편",
        "공항 이동"
      ],
      accommodationMeals: [
        "사파리 중 전 식사",
        "식수 및 도시락"
      ],
      guidingGameDrives: [
        "전 국립공원 및 컨세션 입장료",
        "타랑기레 나이트 드라이브를 포함한 전 게임 드라이브",
        "열기구 사파리",
        "전 일정 함께하는 프라이빗 가이드",
        "긴급 의료 후송 보험(AMREF 플라잉 닥터스)"
      ]
    },
    excludedCategorized: [
      "국제선 항공권",
      "비자 발급 비용",
      "여행자 보험",
      "팁"
    ],
    notes: [
      "표시된 요금은 트윈룸 공유 기준 1인당 요금입니다.",
      "윌더니스 소버린 등급의 로지 선정은 예약 가능 여부에 따라 예약 시 확정됩니다.",
      "숙박 시설 및 요금은 예약 가능 여부에 따라 달라지며, 정확한 여행 날짜에 따라 변동될 수 있습니다.",
      "탄자니아 국립공원 및 보호구역 입장료는 정부가 책정하며 사전 통보 없이 변경될 수 있습니다."
    ],
    faq: [
      {
        q: "크라운 주얼스 사파리 7일의 요금은 얼마인가요?",
        a: "크라운 주얼스 사파리는 윌더니스 리저브 등급에서 1인당 $4,523.96부터 시작하며(6인 여행, 트윈룸 공유 기준), 커플 단둘이 여행할 경우 1인당 $5,334.38까지 올라갑니다. 전 구간 업그레이드 로지를 이용하는 윌더니스 소버린은 1인당 $8,848.96부터 시작해 2인 여행 시 $9,659.38까지 올라갑니다. 요금에는 전 국립공원 및 컨세션 입장료, 게임 드라이브, 나이트 드라이브, 열기구 사파리, 사파리 중 식사, 세로네라-아루샤 항공편이 포함됩니다. 모든 사파리는 고정 단체 패키지가 아닌 맞춤 제작이므로, 여행 날짜에 맞는 정확한 요금은 개별 견적을 요청해 주세요."
      },
      {
        q: "왜 EWA 사파리 아웃피터즈에서 크라운 주얼스 사파리를 예약해야 하나요?",
        a: "EWA 사파리 아웃피터즈는 탄자니아 태생이며 아루샤에 기반을 두고 있습니다 — 한 번도 직접 달려보지 않은 루트를 재판매하는 해외 에이전시가 아닙니다. 모든 사파리는 여행 날짜와 관심사에 맞춰 맞춤 제작되며, 처음부터 끝까지 전문 공인 가이드가 이끌고, 공항 픽업부터 마지막 하차까지 이어지는 전 과정 지원이 함께합니다."
      },
      {
        q: "이 일정이 일반적인 응고롱고로-세렝게티 사파리와 다른 점은 무엇인가요?",
        a: "이 정도 길이의 일정에서는 거의 시도되지 않는 두 가지 시그니처 포함 사항이 있습니다: 표준 주간 드라이브에서는 보이지 않는 야행성 야생동물을 보여주는 타랑기레 나이트 드라이브, 그리고 세렝게티 위를 나는 일출 열기구 사파리입니다. 둘 다 값비싼 추가 옵션이 아니라 표준 일정에 포함되어 있습니다."
      },
      {
        q: "열기구 사파리는 안전한가요, 어떤 방식으로 진행되나요?",
        a: "열기구 사파리는 표준 국제 안전 규정을 따르는 면허 보유의 숙련된 운영사가 진행합니다. 비행은 대개 바람이 가장 잔잔한 일출 무렵 약 한 시간 동안 진행되며, 착륙 후에는 샴페인 부시 조식이 이어집니다."
      },
      {
        q: "이 일정에 가장 좋은 시기는 언제인가요?",
        a: "응고롱고로 크레이터는 계절을 막론하고 정착 야생동물이 서식하며 타랑기레의 코끼리 무리도 연중 볼 수 있어, 이 사파리는 사시사철 잘 운영됩니다. 6월부터 10월, 그리고 12월 하순부터 2월까지는 가장 건조한 관찰 조건을 제공합니다."
      },
      {
        q: "이 사파리에서 빅파이브를 볼 수 있나요?",
        a: "응고롱고로 크레이터는 폐쇄된 생태계와 높은 동물 밀도 덕분에 탄자니아 그 어디보다도 빅파이브 — 사자, 표범, 코끼리, 버팔로, 멸종위기종인 검은코뿔소 — 를 모두 볼 수 있는 확률이 높으며, 하루 만에 모두 만나는 경우도 종종 있습니다."
      },
      {
        q: "크라운 주얼스 사파리 패키지에는 무엇이 포함되어 있나요?",
        a: "전 국립공원 및 컨세션 입장료, 타랑기레 나이트 드라이브를 포함한 전 게임 드라이브, 열기구 사파리, 전 일정 함께하는 프라이빗 가이드, 사파리 중 전 식사, 식수 및 도시락, 세로네라-아루샤 항공편, 긴급 의료 후송 보험(AMREF 플라잉 닥터스)이 포함됩니다. 국제선 항공권, 비자 발급 비용, 여행자 보험, 팁은 포함되지 않습니다."
      },
      {
        q: "탄자니아 방문에 비자가 필요한가요?",
        a: "미국, 영국, 캐나다를 비롯해 유럽 대부분 국가의 여행객을 포함해 대다수 여행자는 탄자니아 입국에 비자가 필요합니다. 사전 신청하는 전자 비자와 도착 비자 모두 이용 가능하며, 지연을 피하기 위해 여행 전 온라인 신청을 권해 드립니다."
      },
      {
        q: "각 지역에서 며칠 밤을 보내나요?",
        a: "아루샤에서 1박, 타랑기레에서 1박, 카라투에서 2박(마냐라 호수 이동일과 응고롱고로 크레이터 하루를 모두 포함), 세렝게티에서 2박입니다."
      },
      {
        q: "이 사파리는 허니문이나 탄자니아 첫 방문에 적합한가요?",
        a: "네 — 최상급 야생동물 관찰과 두 가지 진정으로 희귀한 시그니처 체험의 조합은 사파리를 처음 떠나는 분과, 완전하고 특별한 일생일대의 일정을 원하는 커플 모두에게 잘 맞습니다. 고정 출발이 아닌 맞춤 제작 일정이므로 요청 시 작은 개인적 디테일도 반영해 드릴 수 있습니다."
      },
      {
        q: "이 사파리는 어떤 규모의 그룹이 참여할 수 있나요?",
        a: "크라운 주얼스 사파리는 소그룹을 위한 프라이빗 맞춤 사파리로, 전용 차량과 전문 공인 가이드가 함께합니다 — 고정 단체 출발이 있는 공유 투어버스가 아닙니다."
      },
      {
        q: "이 일정에 무엇을 챙겨야 하나요?",
        a: "기온 변화에 맞춰 겹쳐 입으세요 — 타랑기레 나이트 드라이브와 크레이터의 아침은 서늘하지만, 한낮 사파리 더위는 상당합니다. 게임 드라이브를 위한 중성색 계열 의류, 자외선 차단, 벌레 기피제, 그리고 열기구 사파리의 새벽 출발을 위한 방한용 겉옷을 챙기세요."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "아루샤 도착",
        description: "킬리만자로 국제공항에 착륙하면 EWA 사파리 아웃피터즈 가이드가 기다리고 있습니다 — 여행 내내 함께할 바로 그 가이드입니다. 짐을 풀고 가이드를 만나 이른 취침 전 전체 사파리 브리핑을 받으세요.",
        accommodation: "Kahawa House 또는 Arusha Coffee Lodge(등급별)",
        meals: "석식",
        accommodationByTier: {
          reserve: {
            name: "Kahawa House",
            image: "/images/lodges/kahawa-house.webp",
            amenities: [
              "garden",
              "restaurant",
              "wifi"
            ]
          },
          sovereign: {
            name: "Arusha Coffee Lodge",
            image: "/images/lodges/arusha-coffee-lodge-garden-path.webp",
            amenities: [
              "garden",
              "restaurant",
              "wifi"
            ]
          }
        },
        insiderFact: "아루샤는 해발 약 1,400m에 위치해 앞으로 만날 평원보다 서늘한 기후입니다. 저녁을 위한 얇은 겉옷을 챙기세요."
      },
      {
        day: 2,
        title: "아루샤에서 타랑기레 국립공원으로",
        description: "탄자니아 최대 규모의 코끼리 무리가 서식하는 타랑기레의 바오밥나무 평원으로 남쪽 경관 도로를 달립니다. 해가 지면 나이트 드라이브가 완전히 다른 공원의 모습을 드러냅니다 — 제넷, 사향고양이, 갈라고, 그리고 낮에는 숨어 있는 야행성 사냥꾼들입니다.",
        accommodation: "Tarangire Katikati Camp 또는 Lemala Mpingo Ridge(등급별)",
        meals: "전 식사",
        accommodationByTier: {
          reserve: {
            name: "Tarangire Katikati Camp",
            image: "/images/gallery/tarangire-elephants-baobab.webp",
            amenities: [
              "restaurant",
              "view",
              "wildlife-view"
            ]
          },
          sovereign: {
            name: "Lemala Mpingo Ridge",
            image: "/images/lodges/lemala-mpingo-ridge.webp",
            amenities: [
              "restaurant",
              "view",
              "wildlife-view"
            ]
          }
        },
        insiderFact: "타랑기레의 나이트 드라이브는 표준 사파리에서 공원의 작고 좀처럼 볼 수 없는 야행성 종을 만날 수 있는 몇 안 되는 기회 중 하나입니다."
      },
      {
        day: 3,
        title: "타랑기레에서 카라투로, 마사이 공동체와 마냐라 호수를 경유",
        description: "카라투로 향하는 길에는 진짜 마사이 공동체 방문이 포함됩니다 — 연출된 정류장이 아닌 실제 대화입니다 — 이어서 마냐라 호수에서의 모코로(카누) 사파리가 이어집니다. 수면 높이에서 조용히 홍학, 하마, 그리고 공원의 유명한 나무 타는 사자를 만날 수 있는 방법입니다.",
        accommodation: "Ngorongoro Farm House 또는 Gibb's Farm(등급별)",
        meals: "전 식사",
        accommodationByTier: {
          reserve: {
            name: "Ngorongoro Farm House",
            image: "/images/lodges/ngorongoro-farm-house.webp",
            amenities: [
              "garden",
              "restaurant",
              "view"
            ]
          },
          sovereign: {
            name: "Gibb's Farm",
            image: "/images/lodges/gibbs-farm-cottage-exterior.webp",
            amenities: [
              "garden",
              "restaurant",
              "view"
            ]
          }
        },
        insiderFact: "마냐라 호수의 나무 타는 사자는 아카시아 나뭇가지에서 정기적으로 휴식을 취하는 것으로 알려진 아프리카의 몇 안 되는 개체군 중 하나입니다."
      },
      {
        day: 4,
        title: "응고롱고로 크레이터",
        description: "하루 종일 크레이터 바닥으로 내려갑니다. 이곳에는 하나의 폐쇄된 생태계 안에 약 2만~3만 마리의 동물이 서식하는 것으로 추정됩니다 — 탁 트인 초원의 사자 무리, 크레이터 가장자리를 누비는 하이에나 무리, 그리고 탄자니아에서 가장 확률 높은 멸종위기종 검은코뿔소와의 만남이 기다리고 있습니다.",
        accommodation: "Ngorongoro Farm House 또는 Gibb's Farm(등급별)",
        meals: "전 식사",
        accommodationByTier: {
          reserve: {
            name: "Ngorongoro Farm House",
            image: "/images/lodges/ngorongoro-farm-house.webp",
            amenities: [
              "garden",
              "restaurant",
              "view"
            ]
          },
          sovereign: {
            name: "Gibb's Farm",
            image: "/images/lodges/gibbs-farm-cottage-exterior.webp",
            amenities: [
              "garden",
              "restaurant",
              "view"
            ]
          }
        },
        insiderFact: "크레이터 바닥은 림보다 몇 도 더 서늘하게 유지됩니다. 날씨가 맑아 보여도 재킷을 챙기세요."
      },
      {
        day: 5,
        title: "카라투에서 세렝게티로",
        description: "세렝게티의 끝없는 평원으로 향하는 길이며, 오후 게임 드라이브가 이 공원의 압도적인 규모를 소개합니다 — 그늘에 늘어진 대형 고양잇과 동물들, 지평선까지 이어지는 얼룩말 무리를 만나게 됩니다.",
        accommodation: "Kubukubu Tented Lodge 또는 Lemala Nanyukie(등급별)",
        meals: "전 식사",
        accommodationByTier: {
          reserve: {
            name: "Kubukubu Tented Lodge",
            image: "/images/lodges/kubukubu-tented-lodge.webp",
            amenities: [
              "wifi",
              "view",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Lemala Nanyukie",
            image: "/images/lodges/lemala-nanyukie.webp",
            amenities: [
              "wifi",
              "view",
              "restaurant"
            ]
          }
        },
        insiderFact: "카라투와 세렝게티 사이의 이동 구간 자체가 하나의 게임 드라이브입니다. 카메라를 꺼내 두세요."
      },
      {
        day: 6,
        title: "세렝게티 온전한 하루 & 열기구 사파리",
        description: "새벽 전에 일어나 평원 위를 나는 일출 열기구 사파리를 즐기세요. 결코 소리를 듣지 못하는 야생동물 위를 조용히 떠다니며, 착륙 후에는 샴페인 부시 조식이 이어집니다. 남은 하루는 최적의 빛과 동물 활동에 맞춘 게임 드라이브로 계속됩니다.",
        accommodation: "Kubukubu Tented Lodge 또는 Lemala Nanyukie(등급별)",
        meals: "전 식사",
        accommodationByTier: {
          reserve: {
            name: "Kubukubu Tented Lodge",
            image: "/images/lodges/kubukubu-tented-lodge.webp",
            amenities: [
              "wifi",
              "view",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Lemala Nanyukie",
            image: "/images/lodges/lemala-nanyukie.webp",
            amenities: [
              "wifi",
              "view",
              "restaurant"
            ]
          }
        },
        insiderFact: "열기구 사파리는 바람이 가장 잔잔한 일출 무렵 출발합니다. 건기라도 방한 겉옷을 챙기시길 권합니다."
      },
      {
        day: 7,
        title: "아루샤로 경관 비행",
        description: "마지막 아침 게임 드라이브 후, 세로네라 활주로에서 짧은 비행으로 아루샤로 돌아가 다음 여정으로 연결됩니다.",
        accommodation: "해당 없음",
        meals: "조식"
      }
    ]
  },
  {
    slug: "7-days-migration-southern",
    name: "서던 에디션: 탄자니아 출산기 대이동 사파리 — 은두투 & 응고롱고로 크레이터",
    duration: 9,
    destinations: [
      "ngorongoro",
      "serengeti"
    ],
    type: "wildlife",
    priceFrom: 5790.63,
    groupSize: {
      min: 1,
      max: 6
    },
    bestFor: [
      "photography",
      "wildlife-enthusiasts",
      "solo"
    ],
    metaTitle: "서던 에디션: 탄자니아 출산기 대이동 사파리 | 은두투 & 응고롱고로 크레이터 | EWA 사파리 아웃피터즈",
    metaDescription: "9일 8박 — 중앙 세렝게티, 은두투 출산지, 올두바이 협곡, 응고롱고로 크레이터. 대이동에서 가장 강렬한 순간 중 하나를 직접 목격하세요. 1인당 $4,730부터.",
    overview: [
      "대부분의 방문객이 결코 보지 못하는 대이동의 한 장면이 있습니다. 강 도하도 아니고, 끝없는 북부 평원도 아닙니다 — 훨씬 조용하고 원초적인, 몇 달 앞서 벌어지는 장면입니다. 수십만 마리의 누가 은두투의 짧은 초원에 모여 새끼를 낳는 순간입니다. 하루 최대 8,000마리의 새끼가 숨을 곳 없는 탁 트인 땅 위에서 태어나며, 남부 생태계의 모든 포식자가 그 사실을 알고 있습니다.",
      "이는 저희 포토그래픽 사파리 시리즈의 서던 에디션입니다 — 9일 동안 중앙 세렝게티의 정착 야생동물에서 시작해, 은두투의 출산기 드라마 속으로 들어가고, 인류 자신의 기원이 자리한 올두바이 협곡을 지나, 응고롱고로 크레이터 바닥에서 온전한 하루를 보낸 뒤 음토와음부에서의 진짜 문화 시간으로 마무리됩니다. 저희 노던 에디션이 7월부터 10월까지 강 도하의 드라마를 뒤쫓는다면, 이 일정은 새 생명과 포식 압력이 아프리카에서 가장 사진 찍기 좋은 탁 트인 평원 위에서 충돌하는 2월을 향해 남쪽으로 향합니다.",
      "잔잔한 사파리가 아닙니다. 어느 아침은 태어난 지 얼마 안 된 새끼가 처음으로 다리 힘을 찾는 순간을 보여줄 것이고, 또 다른 아침은 사냥 중인 치타나 흙먼지 속에서 사냥감을 뜯는 하이에나 무리를 보여줄 것입니다. 둘 다 이 계절의 진짜 모습이며, 그것이 바로 사진작가들이 계속 이곳을 찾는 이유입니다."
    ],
    tagline: "2022년 창업한 현지 소유 · 전문 공인 가이드 · 고정 단체 출발이 아닌 맞춤 제작 출발",
    bestTimeToTravel: "무리가 은두투 평원에서 출산하는 1월 하순부터 3월까지 — 이 일정은 그 시기에 맞춰 고정되어 있습니다",
    whyDifferent: {
      heading: "이 시즌이 특별한 이유",
      paragraphs: [
        "대부분의 사파리 일정은 하나의 질문을 중심으로 설계됩니다: 동물들은 어디에 있는가? 출산기는 더 날카로운 두 번째 질문을 더합니다: 그들에게 곧 무슨 일이 벌어질 것인가?",
        "짧은 몇 주 동안 은두투 주변 평원에는 지구상 어디보다도 취약한 어린 야생동물이 밀집해 있으며, 수 킬로미터 밖의 모든 포식자가 정확히 어디에 있어야 하는지 알고 있습니다. 그 긴장감이 이 며칠의 촬영 방식 전체를 결정합니다. 차량은 빠르게 이동하기보다 자리를 지킵니다. 이곳의 이야기는 대개 펼쳐지는 데 시간이 걸리기 때문입니다 — 아직 다리 힘을 찾지 못한 갓 태어난 새끼 주위를 도는 어미 누, 흰개미 언덕 위에서 무리를 읽는 치타, 무리 가장자리에서 기회를 기다리는 자칼. 가이드는 단순히 야생동물을 찾는 것이 아니라 평원 전체에 쌓여가는 긴장을 읽어내고, 그것이 터지기 전에 여러분을 그 자리에 위치시킵니다.",
        "강 도하와는 감정적으로 다른 종류의 사파리입니다. 어떤 곳은 더 조용하고, 어떤 곳은 더 날카로우며, 동아프리카에서 촬영할 수 있는 거의 그 무엇과도 닮지 않았습니다."
      ]
    },
    destinationHighlights: {
      heading: "포토그래피 하이라이트",
      items: [
        {
          title: "중앙 세렝게티 — 자연스러운 도입부",
          text: "은두투의 출산지로 향하기 전 세로네라 밸리의 연중 정착형 사자와 표범 개체군 사이에서 보내는 이틀 — 훌륭한 워밍업이자, 무리가 아직 바꾸어 놓지 않은 배경 속에서 포식자 행동을 볼 수 있는 기회입니다."
        },
        {
          title: "은두투 — 평원 위의 새 생명",
          text: "짧은 초원, 탁 트인 지평선, 태어난 지 몇 분 만에 다리 힘을 찾는 수천 마리의 누 새끼들. 애틋하고 취약하면서도 시각적으로 강렬합니다 — 깔끔한 배경, 부드러운 2월의 빛, 그리고 대이동이 한 해 동안 선사하는 가장 감정적으로 울림 있는 이미지들 중 일부입니다."
        },
        {
          title: "은두투 — 움직이는 포식자들",
          text: "이만큼 새 생명이 밀집한 곳에는 포식자가 따라오기 마련입니다. 특히 치타가 이곳에서 두드러져, 탁 트인 평원을 이용해 눈앞에서 사냥을 벌입니다. 사자, 하이에나, 자칼도 모두 무리의 가장자리를 누빕니다. 단순히 멀리서 관찰하는 것이 아니라 진짜 행동을 만날 수 있는 시즌입니다 — 종의 목록을 채우기보다 이야기를 전하고 싶은 사진작가를 위한 계절입니다."
        },
        {
          title: "올두바이 협곡 — 분위기의 전환",
          text: "평원과 크레이터 사이, 지구상 가장 중요한 고인류학 유적지 중 한 곳에서 의도적으로 갖는 쉼표입니다 — 이곳의 화석 발견은 인류 기원에 대한 우리의 이해를 다시 썼습니다."
        },
        {
          title: "응고롱고로 크레이터 — 전조의 전환",
          text: "크레이터의 폐쇄된 생태계 안에서 보내는 온전한 하루는 탁 트인 평원으로부터의 의도적인 전환입니다 — 밀집된 야생동물, 극적인 벽면, 그리고 은두투가 같은 밀도로 제공하지 못하는 종들 — 멸종위기종인 검은코뿔소를 포함한 — 을 만날 진짜 기회입니다."
        }
      ]
    },
    highlights: [
      "대이동에서 가장 강렬하고 행동 중심적인 순간 중 하나를 목격하고 촬영합니다",
      "출산지로 향하기 전 중앙 세렝게티의 정착 야생동물로 시작해, 절정의 강도로 바로 시작하지 않고 자연스러운 흐름을 만듭니다",
      "은두투에서 보내는 진짜 시간 — 급하게 지나치는 한 번이 아니라, 출산기 한가운데서 보내는 온전한 이틀",
      "응고롱고로로 향하는 길에 지구상 가장 중요한 고인류학 유적지 중 하나인 올두바이 협곡 방문",
      "8일 차의 진짜 음토와음부 문화 시간 — 대본에 짜인 정류장이 아닌 시장 마을의 생활",
      "응고롱고로 크레이터 바닥에서 보내는 온전한 하루로 여정을 마무리하며, 속도와 풍경 모두 완전히 전환됩니다"
    ],
    heroImage: "/images/gallery/Migration-southern-serengeti1.jpg",
    heroImageAlt: "Wildebeest herd migrating across dirt tracks on the southern Serengeti plains",
    gallery: [],
    included: [
      "전 국립공원, 컨세션, 보호구역 입장료",
      "게임 드라이브 전 일수의 차량, 가이드, 유류비",
      "아루샤-세로네라 국내선",
      "공항 이동",
      "식수",
      "가이드 숙식",
      "사파리 중 전 식사",
      "일정표에 따른 숙박",
      "긴급 의료 후송 보험"
    ],
    excluded: [
      "국제선 항공권",
      "비자 발급 비용",
      "여행자 보험",
      "팁",
      "카메라·렌즈 대여"
    ],
    includedCategorized: {
      transfers: [
        "아루샤-세로네라 국내선",
        "공항 이동"
      ],
      accommodationMeals: [
        "사파리 중 전 식사",
        "일정표에 따른 숙박"
      ],
      guidingGameDrives: [
        "전 국립공원, 컨세션, 보호구역 입장료",
        "게임 드라이브 전 일수의 차량, 가이드, 유류비",
        "식수",
        "가이드 숙식",
        "긴급 의료 후송 보험"
      ]
    },
    excludedCategorized: [
      "국제선 항공권",
      "비자 발급 비용",
      "여행자 보험",
      "팁",
      "카메라·렌즈 대여"
    ],
    notes: [
      "이 일정은 출산기(1월 하순~3월, 예: 2월 출발)에 고정되어 있습니다 — 사파리 자체가 이 시기에만 운영되므로 별도의 비수기 요금은 없습니다.",
      "30%의 예약금으로 예약을 확정하며, 잔금은 출발 60일 전까지 납부합니다.",
      "숙박 시설 및 요금은 예약 가능 여부에 따라 달라지며, 동일 시즌 내에서도 정확한 여행 날짜에 따라 변동될 수 있습니다.",
      "탄자니아 국립공원 및 보호구역 입장료는 정부가 책정하며 사전 통보 없이 변경될 수 있습니다."
    ],
    pricingTiers: [
      {
        pax: 2,
        reserve: 5790.63,
        sovereign: 7869.38
      },
      {
        pax: 3,
        reserve: 5260.42,
        sovereign: 7339.17
      },
      {
        pax: 4,
        reserve: 4995.31,
        sovereign: 7074.06
      },
      {
        pax: 5,
        reserve: 4836.25,
        sovereign: 6915
      },
      {
        pax: 6,
        reserve: 4730.21,
        sovereign: 6808.96
      }
    ],
    faq: [
      {
        q: "출산기는 일반 사파리와 무엇이 다른가요?",
        a: "단순히 야생동물을 찾는 것이 아니라 행동과 타이밍을 중심으로 짜인 일정입니다. 은두투의 탁 트인 평원에서는 새로운 누의 생명과 강한 포식 활동이 가까운 거리에서 벌어져, 일반 게임 드라이브에서는 같은 밀도로 만나기 힘든 진짜 이야기 촬영 기회를 사진작가에게 제공합니다."
      },
      {
        q: "이 사파리의 요금은 얼마인가요?",
        a: "윌더니스 리저브는 1인당 $4,730.21부터 시작하며(6인 여행, 트윈룸 공유 기준), 커플 단둘이 여행할 경우 $5,790.63까지 올라갑니다. 윌더니스 소버린은 1인당 $6,808.96부터 시작해 2인 여행 시 $7,869.38까지 올라갑니다. 모든 사파리는 맞춤 제작이므로, 여행 날짜에 맞는 정확한 요금은 개별 견적을 요청해 주세요."
      },
      {
        q: "출산기는 정확히 언제인가요?",
        a: "주요 시기는 대략 1월 하순부터 3월까지이며, 출산의 절정은 보통 2월입니다."
      },
      {
        q: "이 일정은 왜 은두투로 곧장 비행하지 않고 중앙 세렝게티에서 시작하나요?",
        a: "여행에 자연스러운 흐름을 만들어 줍니다 — 출산지로 향하기 전 세렝게티의 연중 정착 포식자들과 하루 반나절을 보내며, 절정의 강도로 바로 시작하지 않습니다. 또한 이후 일정에서 순수한 이동 시간을 줄여주는 효과도 있습니다."
      },
      {
        q: "올두바이 협곡은 무엇이며, 왜 야생동물 사파리에 포함되어 있나요?",
        a: "올두바이 협곡은 지구상 가장 중요한 고인류학 유적지 중 하나입니다 — 리키 가문이 이곳에서 발견한 화석은 초기 인류 진화에 대한 과학적 이해를 다시 썼습니다. 평원과 크레이터 사이의 의도적인 분위기 전환이며, 이후에도 이 일정에서 가장 많이 회자되는 정류장 중 하나로 꾸준히 꼽힙니다."
      },
      {
        q: "이 사파리는 사진 초보자에게도 적합한가요?",
        a: "네 — 저희의 다른 포토그래픽 사파리와 마찬가지로 모든 실력 수준에 맞도록 설계되었으며, 현장 내내 위치 선정, 빛, 설정에 대한 실용적인 가이드를 제공합니다."
      },
      {
        q: "프라이빗 출발인가요, 단체 출발인가요?",
        a: "여행 날짜에 맞춰 맞춤 제작되며, 모든 사진작가가 제대로 작업할 공간을 확보할 수 있도록 그룹 규모를 의도적으로 작게 유지합니다."
      },
      {
        q: "어떤 장비를 챙겨야 하나요?",
        a: "DSLR 또는 미러리스 바디, 풍경용 광각~표준 렌즈, 최소 400mm의 망원 렌즈를 권장합니다 — 500~600mm는 멀리 있는 피사체에 유리하며, 70~200mm는 가까운 관찰에 유용합니다."
      },
      {
        q: "노던 에디션이나 해변 연장 일정과 조합할 수 있나요?",
        a: "네 — 담당 컨설턴트에게 잔지바르 해변 연장을 조합하는 방법, 또는 이 서던 에디션과 저희 노던 에디션(7월~10월 강 도하) 중 어느 쪽을 선택할지 고민 중이시라면 두 일정의 차이에 대해 문의해 주세요."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "아루샤 도착",
        location: "아루샤",
        description: "킬리만자로 국제공항에 착륙해 첫날 밤은 여유롭게 보내세요 — 아루샤에 자리를 잡고, 저녁 식사를 함께하며 가이드를 만나 앞으로의 시즌에 대해 이야기를 나눕니다. 출산기는 다른 어떤 사파리 시기와도 다르므로 이 브리핑이 중요합니다 — 사진 촬영뿐 아니라 감정적으로 무엇을 기대해야 할지, 하루하루가 어떤 속도로 진행될지, 평원에 나섰을 때 가이드가 무엇을 주시할지에 대해서도 안내받게 됩니다.",
        accommodation: "아루샤, 등급별 상이",
        meals: "석식",
        insiderFact: "이 브리핑은 여행 전체의 속도를 정합니다 — 가이드가 장면이 펼쳐질 때 차량이 빠르게 이동하지 않고 자리를 지키는 방식을 설명해 드리는데, 이는 출산기 촬영 방식의 핵심입니다.",
        accommodationByTier: {
          reserve: {
            name: "Kahawa House",
            image: "/images/lodges/kahawa-house.webp",
            amenities: [
              "wifi",
              "restaurant",
              "garden"
            ]
          },
          sovereign: {
            name: "Arusha Coffee Lodge",
            image: "/images/lodges/arusha-coffee-lodge-garden-path.webp",
            amenities: [
              "wifi",
              "pool",
              "view"
            ]
          }
        }
      },
      {
        day: 2,
        title: "아루샤에서 중앙 세렝게티로",
        location: "중앙 세렝게티로 비행",
        description: "아루샤에서 세로네라 활주로까지의 경관 비행은 긴 육로 이동을 세렝게티의 정착 사자·표범 개체군 사이에서 보내는 오후로 바꾸어 줍니다.",
        accommodation: "중앙 세렝게티, 등급별 상이",
        meals: "전 식사",
        insiderFact: "세로네라의 정착 무리는 대이동을 전혀 따라가지 않습니다 — 고정 영역, 연중 수원, 그리고 생태계 전체에서 손꼽히는 신뢰도 높은 포식자 관찰이 이루어집니다.",
        accommodationByTier: {
          reserve: {
            name: "Kubukubu Tented Lodge",
            image: "/images/lodges/kubukubu-tented-lodge.webp",
            amenities: [
              "pool",
              "view",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Siringiti Serengeti Camp",
            image: "/images/lodges/siringiti-serengeti-camp.webp",
            amenities: [
              "wifi",
              "view",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 3,
        title: "온전한 하루, 중앙 세렝게티",
        location: "중앙 세렝게티",
        description: "세로네라 밸리의 연중 정착 야생동물을 탐험하며 하루를 온전히 보냅니다 — 출산지로 향하기 전의 훌륭한 워밍업이며, 무리가 아직 바꾸어 놓지 않은 배경 속에서 포식자 행동을 볼 수 있는 기회입니다.",
        accommodation: "중앙 세렝게티, 등급별 상이",
        meals: "전 식사",
        insiderFact: "세로네라 밸리의 빽빽한 무화과나무와 소시지나무 군락은 최상급 표범 서식지입니다 — 이 일정 전체에서 표범 관찰이 가장 활발한 하루인 경우가 많습니다.",
        accommodationByTier: {
          reserve: {
            name: "Kubukubu Tented Lodge",
            image: "/images/lodges/kubukubu-tented-lodge.webp",
            amenities: [
              "pool",
              "view",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Siringiti Serengeti Camp",
            image: "/images/lodges/siringiti-serengeti-camp.webp",
            amenities: [
              "wifi",
              "view",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 4,
        title: "중앙 세렝게티에서 은두투 지역으로",
        location: "은두투로 이동",
        description: "은두투 생태계로 남쪽으로 이동하며, 이곳이 왜 이토록 특별한지 처음으로 맛보게 됩니다 — 탁 트인 짧은 초원, 그리고 해마다 사진작가들이 은두투를 즐겨 찾게 만드는 특유의 빛입니다.",
        accommodation: "은두투 지역, 등급별 상이",
        meals: "전 식사",
        insiderFact: "은두투는 세렝게티의 공식 공원 경계 바로 바깥, 응고롱고로 보호구역 안에 위치합니다 — 허가는 다르지만 같은 대이동입니다.",
        accommodationByTier: {
          reserve: {
            name: "Ndutu Safari Lodge",
            image: "/images/lodges/ndutu-safari-lodge.webp",
            amenities: [
              "wildlife-view",
              "restaurant",
              "view"
            ]
          },
          sovereign: {
            name: "Siringit Migration Camp, Ndutu Site",
            image: "/images/lodges/siringit-migration-camp-ndutu-site.webp",
            amenities: [
              "ensuite",
              "view",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 5,
        title: "온전한 하루, 은두투 지역",
        location: "은두투",
        description: "출산기 한가운데서 보내는 온전한 하루입니다 — 태어난 지 몇 분 만에 다리 힘을 찾는 갓 태어난 누, 그리고 그 뒤를 바짝 따르는 포식자들입니다. 가이드는 빠르게 이동하기보다 자리를 지킵니다. 이곳의 이야기는 대개 펼쳐지는 데 시간이 걸리기 때문입니다.",
        accommodation: "은두투 지역, 등급별 상이",
        meals: "전 식사",
        insiderFact: "시즌 절정기에는 은두투 평원 전역에서 하루 최대 8,000마리의 새끼가 태어나며, 대부분 몇 분 안에 다리 힘을 찾습니다.",
        accommodationByTier: {
          reserve: {
            name: "Ndutu Safari Lodge",
            image: "/images/lodges/ndutu-safari-lodge.webp",
            amenities: [
              "wildlife-view",
              "restaurant",
              "view"
            ]
          },
          sovereign: {
            name: "Siringit Migration Camp, Ndutu Site",
            image: "/images/lodges/siringit-migration-camp-ndutu-site.webp",
            amenities: [
              "ensuite",
              "view",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 6,
        title: "은두투 반나절 & 올두바이 협곡",
        location: "은두투에서 카라투로, 올두바이 협곡 경유",
        description: "카라투로 향하기 전 은두투 평원에서의 마지막 아침을 보내고, 올두바이 협곡에서 멈춥니다 — 지구상 가장 중요한 고인류학 유적지 중 한 곳으로, 이곳의 화석 발견이 인류 기원에 대한 우리의 이해를 다시 썼습니다.",
        accommodation: "카라투/응고롱고로 지역, 등급별 상이",
        meals: "전 식사",
        insiderFact: "리키 가문이 올두바이 협곡에서 발견한 화석은 알려진 인류 진화 연대를 100만 년 이상 앞당겼습니다.",
        accommodationByTier: {
          reserve: {
            name: "Ngorongoro Farm House",
            image: "/images/lodges/ngorongoro-farm-house.webp",
            amenities: [
              "restaurant",
              "garden"
            ]
          },
          sovereign: {
            name: "Gibb's Farm",
            image: "/images/lodges/gibbs-farm-cottage-exterior.webp",
            amenities: [
              "spa",
              "view",
              "organic-farm"
            ]
          }
        }
      },
      {
        day: 7,
        title: "응고롱고로 크레이터 데이 투어",
        location: "응고롱고로 크레이터",
        description: "크레이터 바닥의 폐쇄된 생태계로 하루 종일 내려갑니다 — 밀집된 야생동물, 극적인 벽면, 그리고 멸종위기종인 검은코뿔소를 포함해 평원이 같은 밀도로 제공하지 못하는 종들을 만날 진짜 기회입니다.",
        accommodation: "카라투/응고롱고로 지역, 등급별 상이",
        meals: "전 식사",
        insiderFact: "크레이터 바닥은 검은코뿔소를 만날 확률이 생태계 안에서 가장 높은 곳 중 하나입니다 — 약 260km² 규모의 폐쇄된 지형이 연중 정착 야생동물을 밀집시킵니다.",
        accommodationByTier: {
          reserve: {
            name: "Ngorongoro Farm House",
            image: "/images/lodges/ngorongoro-farm-house.webp",
            amenities: [
              "restaurant",
              "garden"
            ]
          },
          sovereign: {
            name: "Gibb's Farm",
            image: "/images/lodges/gibbs-farm-cottage-exterior.webp",
            amenities: [
              "spa",
              "view",
              "organic-farm"
            ]
          }
        }
      },
      {
        day: 8,
        title: "음토와음부 문화 액티비티",
        location: "음토와음부, 아루샤로 이동",
        description: "진짜 분위기의 전환입니다 — 게임 드라이브 사이의 대본에 짜인 정류장이 아니라, 시장 마을 음토와음부에서 진짜 지역 사회와 교류하는 문화 투어입니다.",
        accommodation: "아루샤, 등급별 상이",
        meals: "전 식사",
        insiderFact: "음토와음부는 '모기의 강'이라는 뜻이지만, 오늘날에는 하나의 시장에 120개가 넘는 부족이 모이는 탄자니아에서 가장 민족적으로 다양한 마을 중 하나로 더 잘 알려져 있습니다.",
        accommodationByTier: {
          reserve: {
            name: "Kahawa House",
            image: "/images/lodges/kahawa-house.webp",
            amenities: [
              "wifi",
              "restaurant",
              "garden"
            ]
          },
          sovereign: {
            name: "Arusha Coffee Lodge",
            image: "/images/lodges/arusha-coffee-lodge-garden-path.webp",
            amenities: [
              "wifi",
              "pool",
              "view"
            ]
          }
        }
      },
      {
        day: 9,
        title: "아루샤 시내 투어 & 출발",
        location: "아루샤 / 출발",
        description: "귀국 항공편을 위해 킬리만자로 국제공항으로 이동하기 전, 마지막 아침 아루샤를 둘러봅니다 — 부츠에는 아직 평원의 흙먼지가 남아 있고, 메모리 카드에는 동아프리카가 들려주는 이야기 중에서도 유독 특별한 이야기 하나가 담겨 있습니다.",
        accommodation: "해당 없음",
        meals: "조식"
      }
    ]
  },
  {
    slug: "10-days-luxury-family",
    name: "탄자니아 럭셔리 패밀리 사파리 10일",
    duration: 10,
    destinations: [
      "arusha",
      "tarangire",
      "ngorongoro",
      "serengeti"
    ],
    type: "wildlife",
    priceFrom: 6025.21,
    groupSize: {
      min: 3,
      max: 8
    },
    badge: "popular",
    bestFor: [
      "families"
    ],
    metaDescription: "두 세대가 함께하는, 가족의 속도에 맞춘 프라이빗 탄자니아 사파리 — 아루샤, 타랑기레, 응고롱고로, 세렝게티. 2개 등급, 1인당 $6,025부터.",
    overview: [
      "10일이면 어느 구간도 서두르지 않고 탄자니아 북부 전체를 가족에게 온전히 선사할 수 있습니다 — 공항에서 한 시간 안에 기린과 콜로부스 원숭이를 거의 확실하게 만날 수 있는 편안한 첫 정류장, 천 년 된 바오밥나무 아래 타랑기레의 코끼리 무리와 보내는 온전한 하루, 거의 3만 마리의 동물이 사는 응고롱고로 크레이터의 폐쇄된 세계로의 하강, 그리고 마무리로 세렝게티에서 보내는 여유로운 3일입니다. 아루샤는 해발 약 1,400m(4,593ft)에 위치해 있어, 본격적인 공원 여정이 시작되기 전 새로 도착한 여행자에게 완만한 고도 적응 시간을 줍니다 — 단순히 가족 친화적이라고 소개되는 일정과, 실제로 가족을 위해 설계된 일정을 가르는 여러 작은 디테일 중 하나입니다.",
      "윌더니스 리저브와 윌더니스 소버린 두 가지 등급으로 제공되며, 동일한 10일 루트와 동일한 액티비티, 동일한 공원, 동일한 횟수의 게임 드라이브를 따릅니다. 두 등급 사이에서 달라지는 것은 오로지 게임 드라이브 사이사이 가족이 어떻게 보살핌을 받느냐입니다. 윌더니스 리저브는 편안하고 넓으며 세심하게 준비되어 있고, 윌더니스 소버린은 노던 서킷이 제공하는 가장 뛰어난 가족 맞춤 숙소에서 매일 밤을 보내게 해 드립니다."
    ],
    highlights: [
      "2일 차의 아루샤 국립공원 — 기린, 콜로부스 원숭이, 그리고 탄자니아에서 유일하게 연중 운영되는 가이드 동반 도보 사파리로, 더 큰 공원들에 앞서 가족을 야생동물에 자연스럽게 적응시킵니다",
      "천 년 넘게 서 있는 바오밥나무 아래에서 타랑기레의 코끼리 무리와 보내는 온전한 하루",
      "타랑기레와 크레이터 사이, 카라투에서 보내는 문화 체험의 아침 — 게임 드라이브에서 벗어난 진짜이며 여유로운 시간으로, 아이와 어른 모두에게 가장 오래 기억에 남는 경험인 경우가 많습니다",
      "응고롱고로 크레이터를 온전히 — 하나의 폐쇄된 칼데라 안에 거의 3만 마리의 동물이 있으며, 빅파이브가 모두 존재합니다",
      "마사이 보마 방문과 올두바이 협곡, 180만 년 전 화석 발견이 현지 박물관을 통해 어린 여행자에게도 생생하게 전해집니다",
      "세렝게티에서 보내는 온전한 3일, 특히 가족을 염두에 두고 안내됩니다 — 발자국 추적, 동물 행동, 조류에 대한 설명이 모든 연령대의 흥미를 유지하는 속도로 진행됩니다",
      "모든 수준의 가족 편안함을 아우릅니다 — 넓고 세심한 스타일부터 진정으로 특별한 스타일까지, 루트 자체는 단 하루도 바뀌지 않습니다"
    ],
    heroImage: "/images/gallery/family1.jpg",
    heroImageAlt: "Family watching a herd of buffalo from their safari vehicle on the savanna",
    gallery: [
      {
        src: "/images/gallery/tarangire-elephants-baobab.webp",
        alt: "Two elephants with tusks foraging together in tall grass in Tarangire National Park"
      },
      {
        src: "/images/gallery/ngorongoro-crater-landscape.webp",
        alt: "Panoramic view of the Ngorongoro Crater floor with its soda lake and winding safari road, framed by the crater rim"
      }
    ],
    pricingTiersProvisional: false,
    pricingTiers: [
      {
        pax: 3,
        reserve: 6555.42,
        sovereign: 12384.17
      },
      {
        pax: 4,
        reserve: 6290.31,
        sovereign: 12119.06
      },
      {
        pax: 5,
        reserve: 6131.25,
        sovereign: 11960
      },
      {
        pax: 6,
        reserve: 6025.21,
        sovereign: 11853.96
      }
    ],
    included: [
      "전 국립공원 입장료",
      "넓은 프라이빗 4WD 차량으로 진행되는 전 게임 드라이브",
      "가족 친화적인 전문 가이드",
      "전 식사",
      "일정표에 따른 숙박",
      "공항 이동"
    ],
    excluded: [
      "국제선 항공권",
      "비자 발급 비용",
      "여행자 보험",
      "팁",
      "선택 액티비티(예: 열기구 사파리)"
    ],
    includedCategorized: {
      transfers: [
        "공항 이동",
        "세로네라-아루샤 항공편(9일 차)"
      ],
      accommodationMeals: [
        "전 식사",
        "일정표에 따른 숙박"
      ],
      guidingGameDrives: [
        "전 국립공원 입장료",
        "넓은 프라이빗 4WD 차량으로 진행되는 전 게임 드라이브",
        "가족 친화적인 전문 가이드"
      ]
    },
    excludedCategorized: [
      "국제선 항공권",
      "비자 발급 비용",
      "여행자 보험",
      "팁",
      "선택 액티비티(예: 열기구 사파리)"
    ],
    notes: [
      "표시된 요금은 공유 기준 1인당 요금입니다. 가족 구성과 연결 객실은 로지마다 다르며 예약 시 확정됩니다.",
      "숙박 시설 및 요금은 예약 가능 여부에 따라 달라지며, 동일 시즌 내에서도 정확한 여행 날짜에 따라 변동될 수 있습니다.",
      "탄자니아 국립공원 및 보호구역 입장료는 정부가 책정하며 사전 통보 없이 변경될 수 있습니다."
    ],
    faq: [
      {
        q: "두 등급의 차이는 무엇인가요?",
        a: "루트, 공원, 게임 드라이브 횟수는 어느 등급을 선택하든 동일합니다. 달라지는 것은 숙소의 수준입니다. 윌더니스 리저브는 편안하고 넓으며 세심합니다. 윌더니스 소버린은 밤마다 노던 서킷에서 가장 특별한 로지 중 일부에 가족을 머물게 해 드립니다."
      },
      {
        q: "이 사파리에 최소 연령 제한이 있나요?",
        a: "게임 드라이브 자체에는 공원 전체에 걸친 엄격한 최소 연령이 없지만, 어린아이는 차량에서 보내는 긴 하루에 지칠 수 있으며, 일부 선택 액티비티(예: 아루샤 국립공원의 가이드 동반 도보 사파리)에는 자체 연령 기준이 있습니다. 예약 시 자녀의 연령을 담당 컨설턴트에게 알려주시면 그에 맞춰 일정과 속도를 조정해 드립니다."
      },
      {
        q: "자녀의 말라리아를 걱정해야 하나요?",
        a: "이 루트의 대부분은 말라리아 위험 지역에 속하므로, 여행 전 충분한 시간을 두고 자녀를 위한 항말라리아 옵션을 가정의와 상의하시는 것이 좋습니다. 긴소매, 기피제, 그리고 이 일정의 모든 로지에 기본 제공되는 방충 처리된 모기장이 위험을 상당히 줄여줍니다."
      },
      {
        q: "가족이 연결 객실이나 인접 객실을 이용할 수 있나요?",
        a: "이 일정의 대부분의 숙소는 연결 또는 인접 가족 객실을 제공할 수 있지만, 정확한 구성은 로지마다 다르며 사전 보장이 아니라 예약 시점에 확정됩니다 — 가족의 인원과 취침 선호를 미리 알려주시면 담당 컨설턴트가 그에 맞는 로지를 매칭해 드립니다."
      },
      {
        q: "학교 방학 기간에 적합한 일정인가요?",
        a: "네 — 이 루트는 7~8월과 12월 학기 방학 기간에 흔히 예약되며, 더 여유로운 일정을 원하는 가족에게는 그 시기를 벗어나서도 공원이 한산할 때 똑같이 잘 어울립니다."
      },
      {
        q: "가족 인원수에 따라 요금이 얼마나 달라지나요?",
        a: "차량, 가이드, 일부 숙박 비용은 그룹 전체가 함께 부담하므로 함께 여행하는 가족 구성원이 늘어날수록 1인당 요금은 일반적으로 낮아집니다 — 위 요금표를 참고해 주세요."
      },
      {
        q: "요금에 포함된 것과 포함되지 않은 것은 무엇인가요?",
        a: "포함 사항: 전 국립공원 입장료, 넓은 프라이빗 4WD 차량으로 진행되는 전 게임 드라이브, 가족 친화적인 전문 가이드, 전 식사, 공항 이동입니다. 미포함 사항: 국제선 항공권, 비자 발급 비용, 여행자 보험, 팁, 열기구 사파리 등 선택 액티비티입니다."
      },
      {
        q: "해변 연장 일정과 조합할 수 있나요?",
        a: "네 — 많은 가족이 이 사파리 이후 잔지바르에서 며칠을 더하십니다. 담당 컨설턴트에게 두 등급 중 어느 쪽에든 해변 연장 일정을 추가하는 방법을 문의해 주세요."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "아루샤 도착",
        description: "킬리만자로 국제공항에 착륙해 호텔로 이동합니다 — 따뜻한 환영, 앞으로 열흘간의 명확한 안내, 그리고 여정의 피로를 씻어낼 편안한 첫날 밤이 기다립니다.",
        accommodation: "아루샤, 등급별 상이",
        meals: "석식",
        insiderFact: "아루샤는 해발 약 1,400m(4,593ft)에 위치해 있어, 본격적인 공원 여정이 시작되기 전 새로 도착한 여행자에게 완만한 고도 적응 시간을 줍니다.",
        accommodationByTier: {
          reserve: {
            name: "Gran Meliá, Arusha",
            image: "/images/lodges/gran-melia-arusha.webp",
            amenities: [
              "wifi",
              "pool",
              "spa"
            ]
          },
          sovereign: {
            name: "Arusha Coffee Lodge",
            image: "/images/lodges/arusha-coffee-lodge-garden-path.webp",
            amenities: [
              "wifi",
              "pool",
              "view"
            ]
          }
        }
      },
      {
        day: 2,
        title: "아루샤 국립공원",
        description: "시내에서 짧게 이동해 바로 이런 첫 아침을 위해 만들어진 공원으로 들어갑니다 — 가까이서 기린, 얼룩말, 콜로부스 원숭이를 안정적으로 만날 수 있고, 잔잔한 아침이면 모멜라 호수가 메루산을 그대로 비추며, 탄자니아에서 연중 가족에게 열려 있는 몇 안 되는 가이드 동반 도보 사파리 중 하나도 즐길 수 있습니다.",
        accommodation: "아루샤, 등급별 상이",
        meals: "전 식사",
        insiderFact: "아루샤 국립공원은 탄자니아에서 가이드 동반 도보 사파리가 연중 허용되는 몇 안 되는 공원 중 하나입니다.",
        accommodationByTier: {
          reserve: {
            name: "Gran Meliá, Arusha",
            image: "/images/lodges/gran-melia-arusha.webp",
            amenities: [
              "wifi",
              "pool",
              "spa"
            ]
          },
          sovereign: {
            name: "Arusha Coffee Lodge",
            image: "/images/lodges/arusha-coffee-lodge-garden-path.webp",
            amenities: [
              "wifi",
              "pool",
              "view"
            ]
          }
        }
      },
      {
        day: 3,
        title: "타랑기레로",
        description: "남쪽으로 향하는 길은 타랑기레의 바오밥나무 평원으로 이어지며, 이곳에서 탄자니아 최대 규모의 코끼리 무리가 수 킬로미터 내 마지막 남은 영구 수원 주변에 모여듭니다.",
        accommodation: "타랑기레/카라투 지역, 등급별 상이",
        meals: "전 식사",
        insiderFact: "타랑기레는 우기를 제외하면 탄자니아 최대의 코끼리 개체군을 보유하고 있으며, 수 킬로미터 내 마지막 남은 영구 수원이 이들을 끌어들입니다.",
        accommodationByTier: {
          reserve: {
            name: "Kitela Lodge",
            image: "/images/lodges/kitela-lodge.webp",
            amenities: [
              "pool",
              "view",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Ngorongoro Manor by Elewana",
            image: "/images/lodges/the-manor-at-ngorongoro.webp",
            amenities: [
              "view",
              "restaurant",
              "spa"
            ]
          }
        }
      },
      {
        day: 4,
        title: "카라투에서 보내는 아침",
        description: "여행 중간에 의도적으로 마련한 속도의 전환입니다 — 카라투 주변의 현지 문화 체험으로, 차량에서 벗어나 이 고지대를 고향으로 삼는 지역 사회와의 진짜 대화 속으로 들어갑니다. 가족들이 가장 놀라워하는 하루는 대개 야생동물이 아니라 바로 이 사람들과의 만남입니다.",
        accommodation: "타랑기레/카라투 지역, 등급별 상이",
        meals: "전 식사",
        insiderFact: "카라투는 응고롱고로 보호구역 경계 바로 바깥에 위치하며, 크레이터 고지대로 들어가기 전 마지막 농경 지대입니다.",
        accommodationByTier: {
          reserve: {
            name: "Kitela Lodge",
            image: "/images/lodges/kitela-lodge.webp",
            amenities: [
              "pool",
              "view",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Ngorongoro Manor by Elewana",
            image: "/images/lodges/the-manor-at-ngorongoro.webp",
            amenities: [
              "view",
              "restaurant",
              "spa"
            ]
          }
        }
      },
      {
        day: 5,
        title: "응고롱고로 크레이터로",
        description: "거의 3만 마리의 동물과 빅파이브 전체가 서식하는 크레이터 바닥으로 하루 종일 내려갑니다.",
        accommodation: "응고롱고로 지역, 등급별 상이",
        meals: "전 식사",
        insiderFact: "응고롱고로 크레이터는 약 260km²(100 sq mi) 규모의 폐쇄된 생태계로, 이곳에 서식하는 동물 대부분은 평생 크레이터 밖으로 나가지 않습니다.",
        accommodationByTier: {
          reserve: {
            name: "Ngorongoro Lion's Paw",
            image: "/images/lodges/ngorongoro-lion-s-paw.webp",
            amenities: [
              "view",
              "restaurant",
              "ensuite"
            ]
          },
          sovereign: {
            name: "Lemala Osonjoi",
            image: "/images/lodges/lemala-osonjoi.webp",
            amenities: [
              "spa",
              "view",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 6,
        title: "마사이 보마 & 올두바이 협곡",
        description: "마사이 보마 방문 — 연출된 공연이 아니라 가정과 삶의 방식으로의 진짜 초대 — 이후 올두바이 협곡으로 이어지며, 리키 가문의 180만 년 전 발견이 어린 여행자의 관심을 진심으로 사로잡는 방식으로 설명됩니다. 오후에는 세렝게티로 이동을 계속합니다.",
        accommodation: "중앙 세렝게티, 등급별 상이",
        meals: "전 식사",
        insiderFact: "올두바이 협곡의 현지 박물관은 180만 년 전 화석 발견을 어린 여행자조차 진심으로 흥미로워할 만한 이야기로 바꾸어 줍니다.",
        accommodationByTier: {
          reserve: {
            name: "Kubukubu Tented Lodge",
            image: "/images/lodges/kubukubu-tented-lodge.webp",
            amenities: [
              "all-inclusive",
              "pool",
              "view"
            ]
          },
          sovereign: {
            name: "Lemala Nanyukie",
            image: "/images/lodges/lemala-nanyukie.webp",
            amenities: [
              "all-inclusive",
              "spa",
              "view"
            ]
          }
        }
      },
      {
        day: 7,
        title: "세렝게티, 온전한 하루",
        description: "세 가지 서식지가 만나고 정착 대형 고양잇과 동물들이 대이동을 따르지 않고 그대로 머무는 세로네라 밸리에서 하루 종일 게임 드라이브를 진행합니다. 가이드는 가족 전체를 위해 그날의 속도를 조율하며, 발자국을 추적하고 행동을 설명하며, 새끼 사자나 혹멧돼지 가족을 두 번 멈춰 볼 가치가 있을 때를 알아챕니다.",
        accommodation: "중앙 세렝게티, 등급별 상이",
        meals: "전 식사",
        insiderFact: "세로네라 밸리는 세 가지 서식지가 교차하는 지점에 위치해, 대이동 시기에만이 아니라 연중 정착 대형 고양잇과 동물을 보유하고 있습니다.",
        accommodationByTier: {
          reserve: {
            name: "Kubukubu Tented Lodge",
            image: "/images/lodges/kubukubu-tented-lodge.webp",
            amenities: [
              "all-inclusive",
              "pool",
              "view"
            ]
          },
          sovereign: {
            name: "Lemala Nanyukie",
            image: "/images/lodges/lemala-nanyukie.webp",
            amenities: [
              "all-inclusive",
              "spa",
              "view"
            ]
          }
        }
      },
      {
        day: 8,
        title: "세렝게티, 온전한 하루",
        description: "결코 서두르는 느낌이 들지 않는 속도로 진행되는 두 번째 온전한 게임 드라이브의 날입니다 — 가이드가 가족 전체를 위해 하루를 읽어, 그 누구도 좋은 관찰을 서둘러 지나치지 않도록 합니다.",
        accommodation: "중앙 세렝게티, 등급별 상이",
        meals: "전 식사",
        insiderFact: "가이드는 정해진 경로를 따르기보다, 신선한 발자국과 다른 차량의 무전 정보를 읽어 하루 동안 위치를 재조정합니다.",
        accommodationByTier: {
          reserve: {
            name: "Kubukubu Tented Lodge",
            image: "/images/lodges/kubukubu-tented-lodge.webp",
            amenities: [
              "all-inclusive",
              "pool",
              "view"
            ]
          },
          sovereign: {
            name: "Lemala Nanyukie",
            image: "/images/lodges/lemala-nanyukie.webp",
            amenities: [
              "all-inclusive",
              "spa",
              "view"
            ]
          }
        }
      },
      {
        day: 9,
        title: "세렝게티에서 아루샤로",
        description: "세로네라 활주로에서 아루샤로 돌아가는 짧은 비행이 야생동물 일정을 마무리합니다 — 한 시간이 채 안 걸리는 비행으로, 같은 루트를 육로로 이동하면 6시간이 넘게 걸립니다.",
        accommodation: "아루샤, 등급별 상이",
        meals: "전 식사",
        insiderFact: "세렝게티에서 아루샤로 가는 부시 항공편은 한 시간이 채 걸리지 않습니다. 같은 루트를 육로로 이동하면 6시간 이상 소요됩니다.",
        accommodationByTier: {
          reserve: {
            name: "Gran Meliá, Arusha",
            image: "/images/lodges/gran-melia-arusha.webp",
            amenities: [
              "wifi",
              "pool",
              "spa"
            ]
          },
          sovereign: {
            name: "Arusha Coffee Lodge",
            image: "/images/lodges/arusha-coffee-lodge-garden-path.webp",
            amenities: [
              "wifi",
              "pool",
              "view"
            ]
          }
        }
      },
      {
        day: 10,
        title: "출발",
        description: "공항으로 이동합니다. 열흘간의 가족 추억이 여러분과 함께 집으로 향합니다.",
        accommodation: "해당 없음",
        meals: "조식"
      }
    ]
  },
  {
    slug: "12-days-wild-wilderness",
    name: "윌더니스 사파리, 문화 체험 & 킬리만자로 데이 하이크 12일",
    duration: 12,
    destinations: [
      "kilimanjaro",
      "manyara",
      "tarangire",
      "ngorongoro",
      "serengeti"
    ],
    type: "wildlife",
    priceFrom: 5857,
    groupSize: {
      min: 1,
      max: 6
    },
    bestFor: [
      "wildlife-enthusiasts",
      "couples",
      "solo"
    ],
    overview: [
      "대부분의 12일 탄자니아 일정은 산과 평원 중 하나를 선택하라고 요구합니다. 이 일정은 선택을 거부합니다. 킬리만자로의 조용한 서쪽 사면에서 시작해, 마사이 공동체와 진짜 시간을 보낸 뒤 등산화 끈을 조여 매고 시라 고원까지 하루 종일 이어지는 하이크에 나섭니다 — 이 산에서 가장 인상적인 화산 칼데라 중 하나이며, 단순한 사진 촬영용 정류장이 아니라 진짜 하이킹 체험입니다. 이후에는 탄자니아를 대표하는 야생동물 서킷으로 접어듭니다: 마냐라 호수, 타랑기레, 응고롱고로 크레이터, 그리고 세렝게티에서 보내는 온전한 3일이며, 로불루 족장과의 마사이 마을 방문, 카라투 커피 워크 등 문화 체험이 덧붙여진 것이 아니라 자연스럽게 짜여 있습니다.",
      "체크리스트를 서둘러 지우기보다 깊이를 원하는 여행자를 위해 만들어진 여행입니다. 킬리만자로 사면에서의 진짜 트레킹, 마사이 공동체에서의 진짜 대화, 그리고 탄자니아의 대표 공원 각각에서 보내는 진짜 시간이지 매 정류장에서 급하게 보내는 하룻밤이 아닙니다. 빅파이브를 쫓든, 산에서의 신체적 도전을 원하든, 진정한 문화 교류를 원하든, 이 일정은 각각에 서로를 침범하지 않는 온전한 한 장을 내어 줍니다."
    ],
    tagline: "2022년 창업한 현지 소유 · 전문 공인 가이드 · 고정 단체 출발이 아닌 맞춤 제작 출발",
    bestTimeToTravel: "연중 가능하며, 시라 고원 하이크는 건기(6월~10월, 1월~2월)에 가장 쾌적합니다",
    whyDifferent: {
      heading: "이 일정이 특별한 이유",
      paragraphs: [
        "'윌더니스와 문화'를 표방하는 많은 일정이 두 단어를 느슨하게 다룹니다 — 긴 이동일 사이에 끼워 넣은 마을 방문 한 번, 하이크 한 번 정도입니다. 이 일정은 각 요소에 진짜 자리를 내어 줍니다: 킬리만자로 서쪽 사면에서 보내는 온전한 이틀에는 무장 레인저와 현지 산악 가이드와 함께 해발 3,600m의 시라 고원까지 오르는 진짜 하이크가 포함됩니다. 로불루 족장 공동체와 함께하는 제대로 된 마사이 문화 체험의 아침은 단순한 춤 공연이 아닙니다. 그리고 마냐라, 타랑기레, 응고롱고로, 세렝게티로 이어지는 완전한 노던 서킷은 각 정류장에서 여러 밤을 보내며, 급하게 하룻밤만 머무는 방식이 아닙니다.",
        "숙박은 매일 밤 두 가지 등급 — 윌더니스 리저브와 윌더니스 소버린 — 으로 제공되므로 어떻게 여행하시든 일정 구조는 동일하게 유지되며, 차이는 하루의 속도나 내용이 아니라 로지 자체에서 드러납니다."
      ]
    },
    destinationHighlights: {
      heading: "하이라이트",
      items: [
        {
          title: "서부 킬리만자로 & 시라 고원",
          text: "대부분의 방문객이 결코 보지 못하는, 훨씬 푸르고 야생적인 산의 얼굴로, 암보셀리의 코끼리 이동로와 맞닿아 있습니다. 시라 고원 데이 하이크는 약 2,000m에서 3,600m까지 오르며, 이제는 세계유산으로 지정된 화산 칼데라를 지나갑니다. 맑은 날에는 트레일에서 만년설을 인 키보 봉우리 정상이 눈에 들어옵니다."
        },
        {
          title: "마사이 문화 몰입",
          text: "두 가지 뚜렷한 문화 체험 — 킬리만자로 서쪽 사면의 마사이 공동체와 함께 서두르지 않고 보내는 아침, 저녁의 전통 춤 공연, 그리고 카라투 인근 로불루 족장 마을에서의 두 번째 방문입니다. 대본에 짜인 5분짜리 정류장이 아니라 대화와 일상 속에서 보내는 시간입니다."
        },
        {
          title: "완전한 노던 서킷",
          text: "마냐라 호수의 마을 산책과 게임 드라이브, 타랑기레의 코끼리 무리와 바오밥나무가 점점이 흩어진 평원, 응고롱고로 크레이터 바닥에서 보내는 온전한 하루, 그리고 세렝게티에서 보내는 온전한 3일 — 탄자니아를 대표하는 야생동물 목적지 각각에 급하게 스쳐 지나가는 하루가 아닌 진짜 시간이 주어집니다."
        }
      ]
    },
    highlights: [
      "둘 중 하나를 선택하기보다, 진짜 킬리만자로 하이킹의 날과 완전한 야생동물 사파리를 결합합니다",
      "마사이 공동체에서 진짜로 여유롭게 시간을 보냅니다 — 10분짜리 버스 정류장 문화 체험이 아닙니다",
      "마냐라, 타랑기레, 응고롱고로, 세렝게티 — 탄자니아의 완전한 노던 서킷을 편안한 속도로 아우릅니다",
      "프라이빗하고 맞춤 제작된 여행이며, 편안한 스타일부터 격상된 스타일까지 취향에 맞는 숙박 등급을 선택하실 수 있습니다"
    ],
    heroImage: "/images/gallery/elephants-grazing-pair.webp",
    heroImageAlt: "Two elephants grazing together in lush green grass",
    gallery: [],
    pricingTiersProvisional: true,
    pricingTiers: [
      {
        pax: 2,
        season: "low",
        reserve: 5857,
        sovereign: 9609
      },
      {
        pax: 2,
        season: "high",
        reserve: 7277,
        sovereign: 13999
      }
    ],
    included: [
      "전 국립공원 및 보호구역 입장료",
      "전 게임 드라이브 및 시라 고원 데이 하이크(무장 레인저 및 산악 가이드 포함)",
      "문화 체험 요금",
      "전 일정 함께하는 전문 가이드",
      "일자별 명시된 전 식사",
      "선택하신 등급의 숙박",
      "전 공항 및 목적지 간 이동"
    ],
    excluded: [
      "국제선 항공권",
      "비자 발급 비용",
      "여행자 보험",
      "팁",
      "개인 경비"
    ],
    notes: [
      "표시된 요금은 트윈룸 공유 기준 1인당 요금입니다.",
      "두 등급 모두 시라 고원 데이 하이크 요금, 아루샤 국립공원 입장·도보·레인저 요금, 그리고 각 정류장(응고롱고로, 마냐라 호수, 타랑기레, 세렝게티)의 확정 공원 요금까지 포함합니다 — 숙박만이 아닙니다.",
      "윌더니스 소버린 등급의 로지 선정은 예약 가능 여부에 따라 예약 시 확정됩니다.",
      "숙박 시설 및 요금은 예약 가능 여부에 따라 달라지며, 동일 시즌 내에서도 정확한 여행 날짜에 따라 변동될 수 있습니다.",
      "탄자니아 국립공원 및 보호구역 입장료는 정부가 책정하며 사전 통보 없이 변경될 수 있습니다."
    ],
    faq: [
      {
        q: "시라 고원 데이 하이크에 등산 경험이 필요한가요?",
        a: "기술적인 등반 경험은 필요하지 않습니다 — 이것은 정상 등정 시도가 아니라 가이드 동반 데이 하이크이며, 무장 레인저와 현지 산악 가이드와 함께 본인의 속도로 걷습니다. 어느 정도의 체력이 있으면 더 즐겁게 보내실 수 있지만, 고도에서 몇 시간의 도보를 편안하게 여기는 대부분의 여행자에게 무리 없이 열려 있습니다."
      },
      {
        q: "이 일정은 탄자니아를 처음 방문하는 분에게도 적합한가요?",
        a: "네 — 완전한 노던 서킷(마냐라, 타랑기레, 응고롱고로, 세렝게티)을 진짜 문화 체험 및 산악 하이킹의 날과 함께 다루므로, 단순한 표준 게임 드라이브 사파리 이상을 원하는 여행자에게 탄자니아에 대한 포괄적인 입문이 되어 줍니다."
      },
      {
        q: "윌더니스 리저브와 윌더니스 소버린의 차이는 무엇인가요?",
        a: "두 등급 모두 동일한 12일 일정, 루트, 액티비티를 따릅니다 — 차이는 전적으로 숙박에 있습니다. 편안하고 위치가 좋은 로지와 캠프(윌더니스 리저브)부터 각 정류장에서 더 격상된 숙소(윌더니스 소버린)까지입니다."
      },
      {
        q: "시라 고원 하이크 외에 얼마나 더 걷게 되나요?",
        a: "4일 차의 아루샤 국립공원 도보 사파리는 더 짧고 여유로운 산책으로, 도보로 발자국을 추적하고 야생동물을 관찰하는 데 중점을 두며 시라 고원의 하루보다 훨씬 부담이 적습니다. 둘 다 가이드와 함께 속도를 조정할 수 있다는 점에서 선택적입니다."
      },
      {
        q: "킬리만자로 데이 하이크에는 실제로 무엇이 포함되나요?",
        a: "시라 고원 데이 하이크는 1인당 $200이며, 약 2,000m에서 고원 자체인 3,600m까지 오르는 하루 종일의 무장 국립공원 레인저와 현지 산악 가이드를 포함합니다. 단순한 사진 촬영용 정류장이 아니라 진짜 하이킹의 날입니다 — 트레일에서 몇 시간을 보내게 되며, 본인의 체력과 고원 안쪽(시라 1 캠프, 라이언 협곡, 또는 시라 피너클스 방향)으로 얼마나 더 나아가고 싶은지에 따라 속도가 정해집니다."
      },
      {
        q: "아루샤 국립공원 도보 사파리는 어떤 체험인가요?",
        a: "아루샤 국립공원 안에서 진행되는 가이드 동반 도보 사파리입니다 — 차량이 아닌 도보로 야생동물을 추적하며, 공원 규정에 따라 사파리 가이드와 함께 무장 레인저가 동행합니다. 이 공원은 기린, 버팔로, 숲에 서식하는 영장류, 그리고 인상적인 메루산 전망으로 유명합니다. 시라 고원의 하루보다 더 짧고 완만한 산책이며, 일반적인 게임 드라이브와는 진정으로 다른 방식으로 야생동물을 경험하게 됩니다."
      },
      {
        q: "이 일정을 단축하거나 연장할 수 있나요?",
        a: "네 — 이것은 고정 패키지가 아닌 맞춤 제작 루트입니다. 어느 정류장에서든 일수를 추가하거나 줄일 수 있으며, 여행 마지막에는 잔지바르 해변 연장과도 자연스럽게 어우러집니다."
      },
      {
        q: "프라이빗 사파리인가요, 단체 투어인가요?",
        a: "전 일정 프라이빗으로 진행됩니다 — 12일 전체에 걸쳐 여러분만의 차량과 가이드가 함께하며, 고정 단체 출발이 아닌 여행 날짜에 맞춰 조정됩니다."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "아루샤 도착",
        location: "아루샤",
        description: "킬리만자로 국제공항에 착륙해 프라이빗 차량으로 아루샤로 이동, 하룻밤을 보냅니다. 다음 날 아침에는 전체 사파리 브리핑이 이어집니다.",
        accommodation: "Arusha Hotel",
        meals: "조식",
        insiderFact: "아루샤는 앞으로 만날 평원보다 서늘한 기후의 쾌적한 고도에 위치해 있습니다 — 저녁을 위한 얇은 겉옷을 챙기세요.",
        accommodationByTier: {
          reserve: {
            name: "Kahawa House",
            image: "/images/lodges/kahawa-house.webp",
            amenities: [
              "wifi",
              "restaurant",
              "garden"
            ]
          },
          sovereign: {
            name: "Gran Meliá Arusha",
            image: "/images/lodges/gran-melia-arusha.webp",
            amenities: [
              "wifi",
              "pool",
              "spa"
            ]
          }
        }
      },
      {
        day: 2,
        title: "서부 킬리만자로: 문화",
        location: "서부 킬리만자로",
        description: "이른 아침 식사 후, 킬리만자로 서쪽 사면으로 이동합니다 — 표준 등반 루트보다 더 푸르고 한산하며, 암보셀리와 맞닿아 있어 계절 이동로를 따라 움직이는 진짜 대규모 코끼리 무리가 서식하는 곳입니다. 2일 차는 서두르지 않는 마사이 문화 체험의 아침을 중심으로 짜여 있습니다: 공동체 본연의 속도로 함께하는 진짜 시간, 이어지는 여유로운 로지에서의 오후, 그리고 저녁의 전통 춤 공연입니다.",
        accommodation: "Western Kilimanjaro Lodge",
        meals: "전 식사",
        insiderFact: "산의 남쪽 표준 등반 루트에 비해, 이쪽 킬리만자로는 방문객 통행량이 극히 적습니다.",
        accommodationByTier: {
          reserve: {
            name: "Kambi ya Tembo",
            image: "/images/lodges/kambi-ya-tembo.webp",
            amenities: [
              "view",
              "wildlife-view"
            ]
          },
          sovereign: {
            name: "Africa Amini Original Maasai Lodge",
            image: "/images/lodges/africa-amini-original-maasai-lodge.webp",
            amenities: [
              "view",
              "cultural"
            ]
          }
        }
      },
      {
        day: 3,
        title: "시라 고원 데이 하이크",
        location: "서부 킬리만자로",
        description: "3일 차는 이 일정의 핵심이 되는 하이킹의 날입니다. 론도로시 게이트로 이동해 시라 고원 하이크에 나서, 약 2,000m에서 고원 자체인 3,600m까지 오릅니다 — 화산 칼데라이자 세계유산으로, 무장 레인저와 현지 산악 가이드와 함께 본인의 속도로 걷습니다. 체력이 허락한다면 시라 1 캠프, 라이언 협곡, 시라 피너클스 자락까지 나아가 보세요. 맑은 날에는 트레일에서 만년설을 인 키보 봉우리 정상이 보이며, 이후 로지로 다시 내려옵니다.",
        accommodation: "Western Kilimanjaro Lodge",
        meals: "전 식사",
        insiderFact: "고도는 사람마다 다르게 영향을 미칩니다 — 이 하이크가 정해진 일정이 아닌 본인의 속도로 걷도록 구성된 것도 바로 그 때문에, 체력이 곧 속도를 정합니다.",
        accommodationByTier: {
          reserve: {
            name: "Kambi ya Tembo",
            image: "/images/lodges/kambi-ya-tembo.webp",
            amenities: [
              "view",
              "wildlife-view"
            ]
          },
          sovereign: {
            name: "Africa Amini Original Maasai Lodge",
            image: "/images/lodges/africa-amini-original-maasai-lodge.webp",
            amenities: [
              "view",
              "cultural"
            ]
          }
        }
      },
      {
        day: 4,
        title: "아루샤 국립공원 도보 사파리",
        location: "아루샤",
        description: "조식 후 아루샤 국립공원으로 이동해 가이드 동반 도보 사파리를 즐깁니다 — 야생동물을 경험하는 진정으로 다른 방식으로, 곁에 선 전문 가이드와 함께 발자국을 추적하고 지형을 도보로 읽어냅니다. 아루샤로 돌아와 따뜻한 식사와 여유로운 저녁을 보내세요. 계속 활동적으로 보내고 싶으시다면 커피 워크나 현지 관광 투어를 손쉽게 추가하실 수 있습니다.",
        accommodation: "Arusha Hotel",
        meals: "전 식사",
        insiderFact: "이곳의 모든 도보 사파리에 무장 레인저가 동행하는 것은 공원 규정 때문이며 특별한 위험의 신호가 아닙니다 — 탄자니아 공원 전역에서 표준적으로 시행되는 방식입니다.",
        accommodationByTier: {
          reserve: {
            name: "Kahawa House",
            image: "/images/lodges/kahawa-house.webp",
            amenities: [
              "wifi",
              "restaurant",
              "garden"
            ]
          },
          sovereign: {
            name: "Gran Meliá Arusha",
            image: "/images/lodges/gran-melia-arusha.webp",
            amenities: [
              "wifi",
              "pool",
              "spa"
            ]
          }
        }
      },
      {
        day: 5,
        title: "마냐라 호수 마을 산책",
        location: "마냐라 호수 / 타랑기레",
        description: "아침 이동을 통해 마냐라 호수 지역에 도착하면, 활기 넘치는 음토와음부를 지나는 마을 산책이 이어지며 바나나 농원에서의 현지 점심 식사 후 오후에는 마냐라 국립공원 안으로 게임 드라이브가 이어집니다.",
        accommodation: "Ngorongoro Farm House",
        meals: "전 식사",
        insiderFact: "음토와음부는 스와힐리어로 '모기 개울'이라는 뜻입니다 — 마을 산책 시 기피제를 챙겨야 한다는 좋은 상기가 됩니다.",
        accommodationByTier: {
          reserve: {
            name: "Ngorongoro Farm House",
            image: "/images/lodges/ngorongoro-farm-house.webp",
            amenities: [
              "wifi",
              "restaurant",
              "highland-garden",
              "farm"
            ]
          },
          sovereign: {
            name: "Gibb's Farm Lodge",
            image: "/images/lodges/gibbs-farm-cottage-exterior.webp",
            amenities: [
              "spa",
              "view",
              "organic-farm"
            ]
          }
        }
      },
      {
        day: 6,
        title: "타랑기레 국립공원",
        location: "마냐라 호수 / 타랑기레",
        description: "조식 후 가이드가 여러분을 데리고 타랑기레 국립공원으로 향합니다 — 강의 이름을 따온 이 공원은 많은 코끼리 가족을 강둑으로 불러들이며, 기린, 부시벅, 하테비스트도 함께하고, 그 뒤를 사자와 표범이 바짝 따릅니다.",
        accommodation: "Ngorongoro Farm House",
        meals: "전 식사",
        insiderFact: "타랑기레의 코끼리 무리는 건기에 강을 따라 가장 집중적으로 모입니다. 이 시기 강은 수 킬로미터 내 몇 안 되는 신뢰할 수 있는 수원 중 하나이기 때문입니다.",
        accommodationByTier: {
          reserve: {
            name: "Ngorongoro Farm House",
            image: "/images/lodges/ngorongoro-farm-house.webp",
            amenities: [
              "wifi",
              "restaurant",
              "highland-garden",
              "farm"
            ]
          },
          sovereign: {
            name: "Gibb's Farm Lodge",
            image: "/images/lodges/gibbs-farm-cottage-exterior.webp",
            amenities: [
              "spa",
              "view",
              "organic-farm"
            ]
          }
        }
      },
      {
        day: 7,
        title: "로불루 족장 마을 & 카라투 커피 워크",
        location: "응고롱고로",
        description: "7일 차는 로불루 족장의 마사이 마을을 방문하는 아침으로 시작되며, 이어서 카라투 타운십에 들러 운영 중인 농원, 현지 시장, 점심 식사를 거치는 커피 워크를 즐긴 뒤, 여유로운 오후를 위해 응고롱고로 고지대로 올라갑니다.",
        accommodation: "Ngorongoro Serena Safari Lodge",
        meals: "전 식사",
        insiderFact: "카라투의 커피 농원은 진정으로 우수한 아라비카를 생산하는 고도에 자리해 있습니다 — 커피 워크 가이드들이 이에 대해 상세히 설명해 드리는 것을 즐거워합니다.",
        accommodationByTier: {
          reserve: {
            name: "Ngorongoro Serena Safari Lodge",
            image: "/images/lodges/ngorongoro-serena-safari-lodge.webp",
            amenities: [
              "view",
              "restaurant",
              "ensuite"
            ]
          },
          sovereign: {
            name: "Ngorongoro Melia Lodge",
            image: "/images/lodges/ngorongoro-lodge-the-rim-room-melia-collection.webp",
            amenities: [
              "view",
              "restaurant",
              "ensuite"
            ]
          }
        }
      },
      {
        day: 8,
        title: "응고롱고로 크레이터 바닥에서 보내는 온전한 하루",
        location: "응고롱고로",
        description: "8일 차는 크레이터 자체입니다: 이른 아침 림에서 내려가 도시락을 챙긴 채 크레이터 바닥에서 하루 종일 야생동물을 관찰합니다 — 대륙에서 가장 밀집된 야생동물 환경 중 한 곳이며, 늦은 오후 로지로 돌아옵니다.",
        accommodation: "Ngorongoro Serena Safari Lodge",
        meals: "전 식사",
        insiderFact: "크레이터 바닥은 림보다 몇 도는 더 서늘하게 유지됩니다 — 아침 날씨가 맑아 보여도 재킷을 챙기세요.",
        accommodationByTier: {
          reserve: {
            name: "Ngorongoro Serena Safari Lodge",
            image: "/images/lodges/ngorongoro-serena-safari-lodge.webp",
            amenities: [
              "view",
              "restaurant",
              "ensuite"
            ]
          },
          sovereign: {
            name: "Ngorongoro Melia Lodge",
            image: "/images/lodges/ngorongoro-lodge-the-rim-room-melia-collection.webp",
            amenities: [
              "view",
              "restaurant",
              "ensuite"
            ]
          }
        }
      },
      {
        day: 9,
        title: "세렝게티로",
        location: "세렝게티",
        description: "세렝게티로 향하는 길은 응고롱고로 고지대를 가로질러 올두바이 협곡을 지나갑니다. 리키 가문이 오스트랄로피테쿠스, 호모 하빌리스, 호모 에렉투스의 유해를 발굴한 고고학 유적지로, 인근의 시프팅 샌즈에 들르는 것을 가이드에게 문의해 보세요. 공원 입구에서부터는 오후 게임 드라이브가 캠프까지 이어집니다.",
        accommodation: "Kubu Kubu Tented Lodge",
        meals: "전 식사",
        insiderFact: "올두바이 협곡은 별도의 박물관 방문 없이도 짧게 들를 가치가 충분합니다 — 도로변 전망대만으로도 유적지의 규모를 실감할 수 있습니다.",
        accommodationByTier: {
          reserve: {
            name: "Kubu Kubu Tented Lodge",
            image: "/images/lodges/kubukubu-tented-lodge.webp",
            amenities: [
              "pool",
              "view",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Four Seasons Safari Lodge Serengeti",
            image: "/images/lodges/four-seasons-safari-lodge-serengeti-terrace-waterhole.webp",
            amenities: [
              "pool",
              "spa",
              "view"
            ]
          }
        }
      },
      {
        day: 10,
        title: "세렝게티, 온전한 하루",
        location: "세렝게티",
        description: "세계에서 가장 손꼽히는 야생동물 풍경 속에서 3일간의 온전한 날들이 이어집니다 — 탁 트인 평원, 정착 대형 고양잇과 동물, 그리고 시기에 따라 이동하는 무리 그 자체입니다.",
        accommodation: "Kubu Kubu Tented Lodge",
        meals: "전 식사",
        insiderFact: "중앙 세렝게티의 코피는 아침 가장 먼저 확인해 볼 만한 신뢰도 높은 장소입니다 — 사자들이 새벽에 이곳을 전망대로 자주 이용합니다.",
        accommodationByTier: {
          reserve: {
            name: "Kubu Kubu Tented Lodge",
            image: "/images/lodges/kubukubu-tented-lodge.webp",
            amenities: [
              "pool",
              "view",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Four Seasons Safari Lodge Serengeti",
            image: "/images/lodges/four-seasons-safari-lodge-serengeti-terrace-waterhole.webp",
            amenities: [
              "pool",
              "spa",
              "view"
            ]
          }
        }
      },
      {
        day: 11,
        title: "세렝게티, 온전한 하루",
        location: "세렝게티",
        description: "세계에서 가장 손꼽히는 야생동물 풍경 속에서 3일간의 온전한 날들이 이어집니다 — 탁 트인 평원, 정착 대형 고양잇과 동물, 그리고 시기에 따라 이동하는 무리 그 자체입니다.",
        accommodation: "Kubu Kubu Tented Lodge",
        meals: "전 식사",
        insiderFact: "가이드에게 현재 대이동의 위치를 물어보세요 — 이곳의 정착 야생동물은 연중 강력하지만, 타이밍에 따라 그 외에 무엇을 볼 수 있는지가 달라집니다.",
        accommodationByTier: {
          reserve: {
            name: "Kubu Kubu Tented Lodge",
            image: "/images/lodges/kubukubu-tented-lodge.webp",
            amenities: [
              "pool",
              "view",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Four Seasons Safari Lodge Serengeti",
            image: "/images/lodges/four-seasons-safari-lodge-serengeti-terrace-waterhole.webp",
            amenities: [
              "pool",
              "spa",
              "view"
            ]
          }
        }
      },
      {
        day: 12,
        title: "출발",
        location: "출발",
        description: "예약된 아루샤행 전세기를 타기 위해 활주로로 향하는 길의 마지막 게임 드라이브입니다. 도착 후에는 호텔로 이동하며, 저녁 공항 이동 전까지 데이룸이 준비되어 있고 귀국 전 점심 식사도 포함됩니다.",
        accommodation: "해당 없음",
        meals: "중식"
      }
    ]
  },
  {
    slug: "8-days-great-northern-migration",
    name: "그레이트 노던 마이그레이션 8일",
    duration: 8,
    destinations: [
      "tarangire",
      "manyara",
      "ngorongoro",
      "serengeti"
    ],
    type: "wildlife",
    priceFrom: 4976.88,
    groupSize: {
      min: 1,
      max: 8
    },
    badge: "popular",
    bestFor: [
      "couples",
      "solo",
      "wildlife-enthusiasts"
    ],
    overview: [
      "일 년 중 4~5개월 동안, 100만 마리가 넘는 누와 얼룩말이 세렝게티-마라 생태계를 가로지르며 하나의 끊임없는 이동을 이어갑니다 — 그리고 7월부터 10월 사이 예측 불가능한 몇 주 동안, 그 움직임은 마라강으로 좁혀 들어가며, 그곳에서는 악어가 기다리고 도하 자체가 지구상에 남은 가장 극적인 야생동물 장관 중 하나가 됩니다. 이 8일 일정은 그 목격 확률을 최대한 높이는 데 온전히 집중해 설계되었으면서도, 그 자체로도 방문할 가치가 충분한 공원들을 건너뛰지 않습니다.",
      "루트는 탄자니아 북부를 서쪽에서 동쪽으로 가로지릅니다: 타랑기레의 코끼리 무리와 고대 바오밥나무, 마냐라 호수와 음토와음부 문화 마을에서의 정류장, 응고롱고로 크레이터의 폐쇄된 야생동물 그릇 안에서 보내는 온전한 하루, 그런 다음 세렝게티 깊숙이 온전한 3일 — 먼저 중앙 평원의 정착 포식자들, 그다음 마라강 자체에 자리 잡고 무리가 도하를 결심하는 순간을 기다리는 온전한 이틀입니다."
    ],
    highlights: [
      "마라강에 자리 잡은 온전한 이틀 — 도하가 벌어질 때 그곳에 있을 진짜 시간이며, 급하게 지나치는 아침 한 번이 아닙니다",
      "타랑기레의 코끼리 무리와 바오밥 풍경 — 짧은 일정에서는 대부분 생략되는 저평가된 서장",
      "응고롱고로 크레이터 안에서 보내는 온전한 하루, 이 지역에서 가장 신뢰도 높은 코뿔소 관찰 기회를 포함합니다",
      "마냐라 호수와 음토와음부 문화 마을 — 공원 사이의 진짜 속도 전환",
      "코가텐데 활주로에서 출발하는 경비행기 항공편으로, 방금 육로로 가로지른 평원을 내려다보며 여행을 마무리합니다",
      "모든 수준의 편안함을 아우릅니다 — 차분하고 직관적인 스타일부터 진정으로 특별한 스타일까지, 루트는 단 하루도 바뀌지 않습니다"
    ],
    heroImage: "/images/gallery/wildebeest-calf-migration.webp",
    heroImageAlt: "Newborn wildebeest calf walking alongside adults during the great migration",
    gallery: [
      {
        src: "/images/gallery/mara-river-crossing.webp",
        alt: "Wildebeest and zebra herds crossing the Mara River during the great migration"
      },
      {
        src: "/images/gallery/maasai-mara.webp",
        alt: "Wildebeest and zebras crossing a river in a cloud of dust in the Maasai Mara"
      },
      {
        src: "/images/gallery/tarangire-elephants-baobab.webp",
        alt: "Two elephants with tusks foraging together in tall grass in Tarangire National Park"
      }
    ],
    pricingTiersProvisional: true,
    pricingTiers: [
      {
        pax: 2,
        trail: 4976.88,
        reserve: 6815.63,
        sovereign: 10931.88
      },
      {
        pax: 3,
        trail: 4279.58,
        reserve: 5935.83,
        sovereign: 8508.33
      },
      {
        pax: 4,
        trail: 4240.31,
        reserve: 6079.06,
        sovereign: 10195.31
      },
      {
        pax: 5,
        trail: 3993,
        reserve: 5723,
        sovereign: 8886.75
      },
      {
        pax: 6,
        trail: 3994.79,
        reserve: 5833.54,
        sovereign: 9949.79
      }
    ],
    included: [
      "전 국립공원 및 보호구역 입장료",
      "프라이빗 4WD 랜드크루저로 진행되는 전 게임 드라이브",
      "전 일정 함께하는 전문 가이드",
      "명시된 전 식사",
      "일정표에 따른 숙박",
      "공항 이동",
      "코가텐데-아루샤 왕복 항공편"
    ],
    includedCategorized: {
      transfers: [
        "공항 이동",
        "코가텐데-아루샤 왕복 항공편"
      ],
      accommodationMeals: [
        "명시된 전 식사",
        "일정표에 따른 숙박"
      ],
      guidingGameDrives: [
        "전 국립공원 및 보호구역 입장료",
        "프라이빗 4WD 랜드크루저로 진행되는 전 게임 드라이브",
        "전 일정 함께하는 전문 가이드"
      ]
    },
    excluded: [
      "국제선 항공권",
      "비자 발급 비용",
      "여행자 보험",
      "팁"
    ],
    excludedCategorized: [
      "국제선 항공권",
      "비자 발급 비용",
      "여행자 보험",
      "팁"
    ],
    notes: [
      "표시된 요금은 더블/트윈룸 2인 공유 기준 1인당 요금입니다. 싱글룸 이용 시 추가 요금이 발생합니다.",
      "마라강 도하는 7월과 10월 사이에 가장 신뢰도가 높으며 특정 날짜를 보장할 수는 없습니다.",
      "숙박 시설 및 요금은 예약 가능 여부에 따라 달라지며, 동일 시즌 내에서도 정확한 여행 날짜에 따라 변동될 수 있습니다.",
      "탄자니아 국립공원 및 보호구역 입장료는 정부가 책정하며 사전 통보 없이 변경될 수 있습니다."
    ],
    faq: [
      {
        q: "세 가지 등급의 차이는 무엇인가요?",
        a: "루트와 일별 계획은 세 등급 모두 동일합니다 — 같은 공원, 마라강에서 보내는 같은 일수, 같은 귀환 항공편입니다. 달라지는 것은 캠프와 로지입니다: 윌더니스 트레일은 편안하고 소박하게, 윌더니스 리저브는 더 넓은 공간과 세심한 서비스를, 윌더니스 소버린은 이 루트에서 가장 특별한 숙소를 제공합니다."
      },
      {
        q: "마라강 도하를 보기에 가장 좋은 시기는 언제인가요?",
        a: "도하는 7월과 10월 사이에 가장 신뢰도가 높지만, 정확한 시기는 해마다 강우 패턴에 따라 달라지며 특정 날짜를 보장할 수는 없습니다 — 이 일정이 강가에서 온전한 이틀을 배정하는 것도 바로 확률을 최대한 높이기 위해서입니다."
      },
      {
        q: "도하는 보장되나요?",
        a: "책임감 있는 어떤 운영사도 특정 날짜의 특정 야생동물 이벤트를 보장할 수는 없습니다. 이 일정이 보장하는 것은 위치입니다 — 강가 자체에서 보내는 온전한 이틀 동안 가이드가 도하 활동을 적극적으로 모니터링하며, 급하게 한 번 지나치는 방문이 아닙니다."
      },
      {
        q: "인원수에 따라 요금이 얼마나 달라지나요?",
        a: "차량, 가이드, 일부 이동 비용은 그룹 전체가 함께 부담하므로 인원이 늘어날수록 1인당 요금은 일반적으로 낮아지지만, 완전히 일직선으로 움직이지는 않습니다 — 각 캠프의 객실 가용성이 그룹 규모에 따라 총액을 약간씩 다르게 만들 수 있습니다. 정확한 수치는 위 요금표를 참고해 주세요."
      },
      {
        q: "요금에 포함된 것과 포함되지 않은 것은 무엇인가요?",
        a: "포함 사항: 전 국립공원 및 보호구역 입장료, 프라이빗 4WD 랜드크루저로 진행되는 전 게임 드라이브, 전문 가이드, 명시된 전 식사, 일정표에 따른 숙박, 공항 이동, 코가텐데-아루샤 왕복 항공편입니다. 미포함 사항: 국제선 항공권, 비자 발급 비용, 여행자 보험, 팁입니다."
      },
      {
        q: "일정을 연장하거나 잔지바르와 조합할 수 있나요?",
        a: "네 — 이 일정은 잔지바르 해변 추가와 흔히 조합됩니다. 담당 컨설턴트에게 이 프로그램의 연장에 대해 문의해 주세요."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "아루샤 도착",
        description: "킬리만자로 국제공항에 도착해 프라이빗 차량으로 아루샤로 이동, 휴식과 사파리 브리핑을 진행합니다.",
        accommodation: "아루샤, 등급별 상이",
        meals: "석식",
        accommodationByTier: {
          trail: {
            name: "Kahawa House",
            image: "/images/lodges/kahawa-house.webp",
            amenities: [
              "wifi",
              "restaurant",
              "garden"
            ]
          },
          reserve: {
            name: "Gran Melia Arusha",
            image: "/images/lodges/gran-melia-arusha.webp",
            amenities: [
              "wifi",
              "pool",
              "spa"
            ]
          },
          sovereign: {
            name: "Arusha Coffee Lodge",
            image: "/images/lodges/arusha-coffee-lodge-garden-path.webp",
            amenities: [
              "wifi",
              "pool",
              "view"
            ]
          }
        }
      },
      {
        day: 2,
        title: "타랑기레 국립공원",
        description: "타랑기레 국립공원으로 이동해 코끼리 무리, 고대 바오밥나무, 그리고 하루 종일 가이드 동반 게임 드라이브를 즐깁니다.",
        accommodation: "타랑기레, 등급별 상이",
        meals: "전 식사",
        insiderFact: "타랑기레는 우기를 제외하면 아프리카에서 가장 높은 코끼리 밀도를 자랑하며, 무리는 강을 따라 집중적으로 모여듭니다.",
        accommodationByTier: {
          trail: {
            name: "Lake Burunge Baobab",
            image: "/images/lodges/lake-burunge-baobab-tented-lodge.webp",
            amenities: [
              "restaurant",
              "garden"
            ]
          },
          reserve: {
            name: "Kitela Lodge",
            image: "/images/lodges/kitela-lodge.webp",
            amenities: [
              "pool",
              "view",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Gibb's Farm Lodge",
            image: "/images/lodges/gibbs-farm-cottage-exterior.webp",
            amenities: [
              "spa",
              "view",
              "organic-farm"
            ]
          }
        }
      },
      {
        day: 3,
        title: "마냐라 호수 & 음토와음부",
        description: "마냐라 호수 국립공원과 음토와음부 문화 마을로 이동을 계속합니다 — 공원 사이의 속도 전환이며, 사파리 차량 너머의 탄자니아인의 삶을 들여다보는 시간입니다.",
        accommodation: "카라투, 등급별 상이",
        meals: "전 식사",
        accommodationByTier: {
          trail: {
            name: "Ngorongoro Farm House",
            image: "/images/lodges/ngorongoro-farm-house.webp",
            amenities: [
              "restaurant",
              "garden"
            ]
          },
          reserve: {
            name: "Kitela Lodge",
            image: "/images/lodges/kitela-lodge.webp",
            amenities: [
              "pool",
              "view",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Gibb's Farm Lodge",
            image: "/images/lodges/gibbs-farm-cottage-exterior.webp",
            amenities: [
              "spa",
              "view",
              "organic-farm"
            ]
          }
        }
      },
      {
        day: 4,
        title: "응고롱고로 크레이터에서 중앙 세렝게티로",
        description: "아프리카에서 빅파이브를 가장 확실하게 만날 수 있는 응고롱고로 크레이터로 하루 종일 가이드 동반 게임 드라이브를 진행한 뒤, 중앙 세렝게티로 이동해 1박합니다.",
        accommodation: "중앙 세렝게티, 등급별 상이",
        meals: "전 식사",
        insiderFact: "응고롱고로 크레이터는 약 260km² 규모의 폐쇄된 생태계로, 이곳에 서식하는 동물 대부분은 평생 크레이터 밖으로 나가지 않으며, 이 지역에서 가장 신뢰도 높은 검은코뿔소 관찰 기회도 포함됩니다.",
        accommodationByTier: {
          trail: {
            name: "Serengeti Katikati Camp",
            image: "/images/lodges/serengeti-katikati-camp.webp",
            amenities: [
              "ensuite",
              "restaurant",
              "wildlife-view"
            ]
          },
          reserve: {
            name: "Kubu Kubu Tented Lodge",
            image: "/images/lodges/kubukubu-tented-lodge.webp",
            amenities: [
              "pool",
              "view",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Lemala Nanyukie",
            image: "/images/lodges/lemala-nanyukie.webp",
            amenities: [
              "wildlife-view",
              "view"
            ]
          }
        }
      },
      {
        day: 5,
        title: "노던 세렝게티 — 마라강",
        description: "노던 세렝게티로 북상해 마라강으로 향하며, 앞으로 며칠간의 도하를 위한 위치를 잡습니다.",
        accommodation: "노던 세렝게티, 등급별 상이",
        meals: "전 식사",
        accommodationByTier: {
          trail: {
            name: "Mara Katikati Tented Camp",
            image: "/images/lodges/mara-katikati-tented-camp.webp",
            amenities: [
              "ensuite",
              "wildlife-view"
            ]
          },
          reserve: {
            name: "Mara Mara Tented Lodge",
            image: "/images/lodges/mara-mara-tented-lodge.webp",
            amenities: [
              "wildlife-view",
              "view"
            ]
          },
          sovereign: {
            name: "Lemala Kuria Hills",
            image: "/images/lodges/lemala-kuria-hills-aerial-kopje-camp.webp",
            amenities: [
              "pool",
              "view",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 6,
        title: "마라강에서 보내는 온전한 하루",
        description: "마라강에서 보내는 온전한 하루 — 도하, 포식자, 그리고 인내심입니다. 이 일정의 예측 불가능한 심장부입니다.",
        accommodation: "노던 세렝게티, 등급별 상이",
        meals: "전 식사",
        insiderFact: "도하는 어느 시간에든 일어날 수 있으며 단 몇 분 만에 끝납니다 — 가이드는 알려진 도하 지점에 차량을 배치하고 무리가 결단을 내릴 때까지 때로는 몇 시간이고 기다립니다.",
        accommodationByTier: {
          trail: {
            name: "Mara Katikati Tented Camp",
            image: "/images/lodges/mara-katikati-tented-camp.webp",
            amenities: [
              "ensuite",
              "wildlife-view"
            ]
          },
          reserve: {
            name: "Mara Mara Tented Lodge",
            image: "/images/lodges/mara-mara-tented-lodge.webp",
            amenities: [
              "wildlife-view",
              "view"
            ]
          },
          sovereign: {
            name: "Lemala Kuria Hills",
            image: "/images/lodges/lemala-kuria-hills-aerial-kopje-camp.webp",
            amenities: [
              "pool",
              "view",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 7,
        title: "노던 세렝게티 — 마지막 게임 드라이브",
        description: "노던 세렝게티에서 마지막 게임 드라이브를 진행하며, 도하와 이 지역 특유의 밀집된 정착 포식자 개체군을 다시 한번 만날 기회를 갖습니다.",
        accommodation: "노던 세렝게티, 등급별 상이",
        meals: "전 식사",
        accommodationByTier: {
          trail: {
            name: "Mara Katikati Tented Camp",
            image: "/images/lodges/mara-katikati-tented-camp.webp",
            amenities: [
              "ensuite",
              "wildlife-view"
            ]
          },
          reserve: {
            name: "Mara Mara Tented Lodge",
            image: "/images/lodges/mara-mara-tented-lodge.webp",
            amenities: [
              "wildlife-view",
              "view"
            ]
          },
          sovereign: {
            name: "Lemala Kuria Hills",
            image: "/images/lodges/lemala-kuria-hills-aerial-kopje-camp.webp",
            amenities: [
              "pool",
              "view",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 8,
        title: "코가텐데-아루샤 항공편, 출발",
        description: "코가텐데 활주로에서 경비행기에 탑승해 아루샤로 돌아가 다음 여정으로 향합니다 — 지난 사흘간 육로로 가로지른 평원을 내려다보며 말입니다.",
        accommodation: "해당 없음",
        meals: "조식"
      }
    ]
  },
  {
    slug: "ultimate-tanzania-safari",
    name: "얼티메이트 탄자니아 사파리 & 곰베 침팬지 트레킹",
    duration: 11,
    destinations: [
      "arusha",
      "tarangire",
      "ngorongoro",
      "gombe"
    ],
    type: "combination",
    priceFrom: 5908.96,
    groupSize: {
      min: 2,
      max: 6
    },
    badge: "bestseller",
    bestFor: [
      "couples",
      "honeymoon",
      "solo",
      "wildlife-enthusiasts"
    ],
    tagline: "2027년 시즌에 맞춰 업데이트되었습니다.",
    metaTitle: "얼티메이트 탄자니아 사파리 & 곰베 침팬지 트레킹 | EWA Safari Outfitters",
    metaDescription: "노던 서킷 야생동물 사파리와 곰베 침팬지 트레킹을 하나로 엮은 일정 — 탄자니아 사파리 시장에서 흔치 않은 조합입니다. 11일, 1인당 $5,908.96부터.",
    overview: [
      "이 일정은 대부분의 여행사가 따로 운영하는 탄자니아의 두 영역을 하나로 엮습니다: 노던 서킷과 곰베 스트림입니다. 탄자니아의 정통 야생동물 루트로 여정을 열어 — 도입부로서의 아루샤 국립공원, 오래된 바오밥나무 아래 타랑기레의 코끼리 무리, 응고롱고로 크레이터에서 보내는 온전한 하루 — 이어서 다르에스살람을 거쳐 키고마까지 서쪽으로 계속 이동해, 탕가니카 호숫가에 자리한 곰베 스트림 국립공원에 도착합니다. 이곳은 제인 구달의 최초 침팬지 연구가 시작된 곳입니다.",
      "곰베에서 보내는 온전한 이틀은 침팬지 트레킹을 위해 배정되며, 그녀의 연구가 이루어졌던 바로 그 숲길을 걷게 됩니다. 곰베까지 가려면 두 번째 국내선 항공편과 호수 횡단이 필요한데, 이는 대부분의 노던 서킷 중심 여행사가 일상적으로 다루는 물류의 범위를 벗어나는 것으로, 이 조합이 흔치 않은 이유이기도 합니다. 대부분의 탄자니아 여행사는 노던 서킷 사파리 또는 잔지바르 해변 연장 일정 중 하나만 운영합니다 — 저희는 이 여정의 두 절반을 하나의 연속된 예약으로, 하나의 가이드 관계 아래 운영하므로 여행자가 두 개의 서로 다른 여행사를 조율할 필요가 없습니다. 표준적인 탄자니아 사파리를 이미 경험하고 그다음 무엇을 볼지 고민하는 고객을 위해, 이 일정은 바로 그 답이 되도록 설계되었습니다."
    ],
    highlights: [
      "흔치 않은 조합 — 노던 서킷 야생동물 사파리와 곰베 침팬지 트레킹을 하나의 연속된 일정으로",
      "여정을 여는 아루샤 국립공원, 도보로 진행되는 반나절 가이드 워크 포함",
      "타랑기레의 코끼리 무리와 마사이 공동체 방문",
      "응고롱고로 크레이터에서 보내는 온전한 하루 — 이 지역에서 빅파이브를 만날 확률이 가장 높은 곳 중 하나",
      "제인 구달의 연구가 시작된 바로 그 숲길에서 진행되는 곰베 스트림 침팬지 트레킹 온전한 이틀",
      "루트의 부수적인 요소가 아니라 여정 그 자체의 일부인 탕가니카 호수 횡단"
    ],
    heroImage: "/images/gallery/gombe-stream.webp",
    heroImageAlt: "Chimpanzees resting on a moss-covered log in Gombe Stream's forest",
    gallery: [
      {
        src: "/images/gallery/chimpanzees-resting-mossy-log-gombe.jpg",
        alt: "Chimpanzees resting together on a moss-covered log in Gombe Stream National Park"
      },
      {
        src: "/images/gallery/tarangire-elephants-baobab.webp",
        alt: "Two elephants with tusks foraging together in tall grass in Tarangire National Park"
      }
    ],
    pricingTiersProvisional: false,
    pricingTiers: [
      {
        pax: 2,
        reserve: 7156.88
      },
      {
        pax: 3,
        reserve: 6532.92
      },
      {
        pax: 4,
        reserve: 6220.94
      },
      {
        pax: 5,
        reserve: 6033.75
      },
      {
        pax: 6,
        reserve: 5908.96
      }
    ],
    included: [
      "전 국립공원 및 보호구역 요금",
      "전 게임 드라이브",
      "침팬지 트레킹 퍼밋",
      "국내선 전 구간(아루샤–다르에스살람–키고마 왕복)",
      "명시된 숙박 시설",
      "사파리 중 전 식사",
      "공항 이동"
    ],
    excluded: [
      "국제선 항공권",
      "비자 발급 비용",
      "여행자 보험",
      "팁"
    ],
    notes: [
      "표시된 요금은 더블/트윈룸 2인 공유 기준 1인당 요금입니다. 싱글룸 이용 시 추가 요금이 발생합니다.",
      "곰베는 하루에 배정되는 트레킹 퍼밋 수가 제한되어 있습니다 — 6월~10월 성수기에는 최소 3개월 전 예약을 권장합니다.",
      "키고마 구간의 소형 항공기는 일반 국내선보다 수하물 허용량이 적습니다. 곰베 구간은 하드케이스 대신 소프트 더플백에 짐을 꾸리시길 권합니다.",
      "숙박 시설 및 요금은 예약 가능 여부에 따라 달라지며, 동일 시즌 내에서도 정확한 여행 날짜에 따라 변동될 수 있습니다."
    ],
    faq: [
      {
        q: "이 조합이 사파리 업계에서 흔치 않은 이유는 무엇인가요?",
        a: "표준 노던 서킷 사파리와 곰베 스트림 여행은 서로 다른 루트를 사용하기 때문입니다. 곰베는 탄자니아 서부 탕가니카 호숫가에 위치하며, 다르에스살람을 거쳐 키고마까지 비행해야 도달할 수 있습니다 — 북부의 게임 드라이브 서킷과는 완전히 별개의 물류 체계입니다. 대부분의 여행사는 둘 중 하나만 운영하며, 두 가지를 하나의 연속된 일정으로 엮는 곳은 많지 않습니다."
      },
      {
        q: "곰베 침팬지 트레킹은 체력적으로 얼마나 힘든가요?",
        a: "트레킹은 가파르고 고르지 않을 수 있는 숲길을 따라 진행되며, 침팬지를 찾아 걷는 시간은 공동체가 밤새 이동한 위치에 따라 30분에서 몇 시간까지 다양합니다. 어느 정도의 체력이 도움이 되지만, 이는 기술적이거나 극한의 트레킹은 아닙니다."
      },
      {
        q: "이 여정은 탄자니아 첫 방문자에게 적합한가요, 아니면 재방문자에게 더 어울리나요?",
        a: "둘 다 가능하지만, 이미 표준 사파리를 경험하고 전형적인 서킷을 넘어선 무언가를 찾는 여행자에게 특히 잘 맞습니다 — 노던 서킷 절반은 여전히 클래식한 야생동물 경험을 선사하며, 곰베는 대부분의 첫 방문자가 존재조차 알지 못하는 완전히 다른 종류의 만남을 더합니다."
      },
      {
        q: "이 일정에 가장 좋은 시기는 언제인가요?",
        a: "건기(대략 6월에서 10월)가 여정의 두 절반 모두에 가장 좋은 조건을 제공합니다 — 노던 서킷에서는 더 수월한 야생동물 관찰이, 곰베에서는 더 쾌적한 트레킹 여건이 가능합니다."
      },
      {
        q: "요금에 포함되는 것과 포함되지 않는 것은 무엇인가요?",
        a: "포함: 전 국립공원 및 보호구역 요금, 전 게임 드라이브, 침팬지 트레킹 퍼밋, 국내선 전 구간(아루샤–다르에스살람–키고마 왕복), 명시된 숙박 시설, 사파리 중 전 식사, 공항 이동. 미포함: 국제선 항공권, 비자 발급 비용, 여행자 보험, 팁."
      },
      {
        q: "연장하거나 잔지바르와 결합할 수 있나요?",
        a: "네 — 11일 차 이후 잔지바르 해변 연장을 추가해 해안에서 며칠 여유롭게 마무리할 수 있습니다. 담당 컨설턴트에게 문의해 주세요."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "아루샤 도착",
        description: "킬리만자로 국제공항에 도착해 므루산 기슭의 농경지와 커피 농원을 지나 아루샤로 이동합니다. 여장을 푼 뒤에는 가이드와 함께 저녁 식사를 하며 앞으로 11일간의 여정에 대한 전체 브리핑을 받습니다.",
        accommodation: "Kahawa House",
        meals: "석식",
        accommodationByTier: {
          reserve: {
            name: "Kahawa House",
            image: "/images/lodges/kahawa-house.webp",
            amenities: [
              "wifi",
              "restaurant",
              "garden"
            ]
          }
        }
      },
      {
        day: 2,
        title: "아루샤 국립공원 반나절 도보 투어",
        description: "무장 레인저를 동반해 도보로 진행하는 가이드 워크로, 탄자니아에서 연중 도보 사파리가 가능한 몇 안 되는 공원 중 한 곳을 걷습니다. 루트는 보통 모멜라 호수를 지나며, 기린과 버팔로를 가까운 거리에서 만날 수 있고, 콜로부스 원숭이가 머리 위 숲 캐노피를 이동하는 모습도 볼 수 있습니다.",
        accommodation: "Kahawa House",
        meals: "전 식사",
        accommodationByTier: {
          reserve: {
            name: "Kahawa House",
            image: "/images/lodges/kahawa-house.webp",
            amenities: [
              "wifi",
              "restaurant",
              "garden"
            ]
          }
        }
      },
      {
        day: 3,
        title: "아루샤에서 타랑기레 국립공원으로",
        description: "남쪽으로 향하는 이동은 마쿠야니를 지나 바오밥나무로 뒤덮인 타랑기레의 평원으로 이어지며, 탄자니아 최대 규모의 코끼리 무리 일부가 서식하는 곳입니다. 도착 후 오후 게임 드라이브에서는 공원의 건기 생명줄인 타랑기레강을 둘러봅니다.",
        accommodation: "Tarangire Katikati Camp",
        meals: "전 식사",
        accommodationByTier: {
          reserve: {
            name: "Tarangire Katikati Tented Camp",
            image: "https://placehold.co/800x600/1C3A2A/D4A853?text=Tarangire+Katikati",
            amenities: [
              "ensuite",
              "restaurant",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 4,
        title: "타랑기레 & 마사이 공동체 방문",
        description: "서쪽으로 향하는 이동에 앞서 타랑기레에서 보내는 마지막 반나절의 게임 관찰입니다. 대지구대 단층애를 올라 응고롱고로 고지대로 향하는 길에는 마사이 공동체 방문이 포함되어, 보마에서 시간을 보내고 보호구역 내 목축 생활에 관한 대화를 나눕니다.",
        accommodation: "Ngorongoro Farm House",
        meals: "전 식사",
        accommodationByTier: {
          reserve: {
            name: "Ngorongoro Farm House",
            image: "/images/lodges/ngorongoro-farm-house.webp",
            amenities: [
              "restaurant",
              "garden"
            ]
          }
        }
      },
      {
        day: 5,
        title: "응고롱고로 크레이터 데이 투어",
        description: "크레이터 내부에서 보내는 온전한 하루입니다 — 면적 약 260km²의 독립된 생태계로, 바닥에서 400~600m 솟은 벽으로 둘러싸여 있습니다. 밀집된 야생동물 개체군과 좁은 면적이 어우러져, 검은코뿔소를 포함한 빅파이브를 만나기에 동아프리카에서 가장 안정적인 장소 중 한 곳이 됩니다.",
        accommodation: "Ngorongoro Farm House",
        meals: "전 식사",
        accommodationByTier: {
          reserve: {
            name: "Ngorongoro Farm House",
            image: "/images/lodges/ngorongoro-farm-house.webp",
            amenities: [
              "restaurant",
              "garden"
            ]
          }
        }
      },
      {
        day: 6,
        title: "카라투에서 다르에스살람으로",
        description: "아침 이동으로 아루샤 공항으로 돌아간 뒤, 동쪽 다르에스살람으로 향하는 정기 항공편에 탑승합니다 — 노던 서킷에서 곰베로 향하는 여정으로의 전환점입니다.",
        accommodation: "Dar es Salaam Serena Hotel",
        meals: "전 식사",
        accommodationByTier: {
          reserve: {
            name: "Dar es Salaam Serena Hotel",
            image: "/images/lodges/dar-es-salaam-serena-hotel-entrance-night.webp",
            amenities: [
              "pool",
              "restaurant",
              "wifi"
            ]
          }
        }
      },
      {
        day: 7,
        title: "다르에스살람에서 곰베 스트림으로",
        description: "나라의 폭을 가로지르는 비행으로 탕가니카 호숫가의 키고마에 도착한 뒤, 보트로 호숫가를 거슬러 올라가 곰베 스트림 국립공원에 도착합니다 — 이 공원에는 도로가 닿지 않기에, 개장 이래 모든 방문객이 밟아온 것과 같은 경로입니다.",
        accommodation: "Mbali Mbali Gombe",
        meals: "전 식사",
        accommodationByTier: {
          reserve: {
            name: "Mbali Mbali Gombe Tented Camp",
            image: "/images/lodges/mbalimbali-gombe-tented-camp.webp",
            amenities: [
              "restaurant",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 8,
        title: "곰베 국립공원 침팬지 트레킹",
        description: "무장 공원 레인저와 함께 곰베의 순치된 침팬지 공동체를 찾아 나서는 온전한 하루입니다 — 아프리카에서 가장 면밀히 연구된 야생 침팬지 개체군 중 하나입니다. 트레일은 호숫가에서 시작해 숲으로 뒤덮인 능선으로 꾸준히 올라가며, 무리를 찾은 뒤에는 감독하에 최대 한 시간만 함께할 수 있습니다.",
        accommodation: "Mbali Mbali Gombe",
        meals: "전 식사",
        insiderFact: "곰베의 침팬지 공동체는 지구상에서 가장 면밀히 연구된 야생 영장류 개체군 중 하나입니다 — 1960년 제인 구달의 최초 연구 이래 지속적인 연구가 이어지고 있습니다.",
        accommodationByTier: {
          reserve: {
            name: "Mbali Mbali Gombe Tented Camp",
            image: "/images/lodges/mbalimbali-gombe-tented-camp.webp",
            amenities: [
              "restaurant",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 9,
        title: "곰베에서 키고마 시내로",
        description: "호숫가 루트를 되짚어 키고마로 돌아가는 이동입니다.",
        accommodation: "Kigoma Hilltop Hotel",
        meals: "전 식사",
        accommodationByTier: {
          reserve: {
            name: "Kigoma Hilltop",
            image: "/images/lodges/kigoma-hilltop.webp",
            amenities: [
              "view",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 10,
        title: "키고마에서 다르에스살람으로",
        description: "나라를 가로질러 다르에스살람으로 돌아가는 비행이며, 도착 후에는 짧은 시내 투어를 즐긴 뒤 저녁에는 여유롭게 휴식합니다.",
        accommodation: "Dar es Salaam Serena Hotel",
        meals: "전 식사",
        accommodationByTier: {
          reserve: {
            name: "Dar es Salaam Serena Hotel",
            image: "/images/lodges/dar-es-salaam-serena-hotel-entrance-night.webp",
            amenities: [
              "pool",
              "restaurant",
              "wifi"
            ]
          }
        }
      },
      {
        day: 11,
        title: "출발",
        description: "귀국 국제선 연결을 위해 공항으로 이동합니다.",
        accommodation: "해당 없음",
        meals: "조식"
      }
    ]
  },
  {
    slug: "7-days-gems-of-north",
    name: "북부의 보석 7일",
    duration: 7,
    destinations: [
      "tarangire",
      "manyara",
      "serengeti",
      "ngorongoro"
    ],
    type: "wildlife",
    priceFrom: 3300,
    groupSize: {
      min: 1,
      max: 8
    },
    bestFor: [
      "couples",
      "solo",
      "families"
    ],
    overview: [
      "7일, 4개 공원, 생략은 없습니다: 일주일을 넘기지 않으면서도 탄자니아 노던 서킷의 모든 것을 원하는 여행자를 위한 압축판입니다. 강가에 모인 코끼리 무리와 태고적 모습의 바오밥나무가 있는 타랑기레에서 시작해, 나무 타는 사자와 홍학빛으로 물든 얕은 물로 유명한 마냐라 호수를 지나, 대형 고양잇과 동물과 탁 트인 평원의 야생동물 관찰이 가득한 세렝게티로 넘어가 온전한 이틀을 보냅니다.",
      "여행의 야생동물 부분은 응고롱고로 크레이터로 마무리됩니다 — 노던 서킷의 왕관에 박힌 보석이자, 하루 만에 빅파이브를 거의 확실하게 만날 수 있는 유일한 공원입니다. 이후 루트는 일주일 분량의 탄자니아 북부를 뒤로한 채 킬리만자로 국제공항으로 돌아갑니다."
    ],
    highlights: [
      "타랑기레의 코끼리 무리와 바오밥 숲",
      "마냐라 호수의 나무 타는 사자",
      "세렝게티의 대형 고양잇과 동물과 탁 트인 평원",
      "응고롱고로 크레이터의 빅파이브",
      "7일 만에 완주하는 완전한 탄자니아 북부"
    ],
    heroImage: "/images/gallery/germs.jpg",
    heroImageAlt: "Zebras lined up drinking together at a watering hole",
    gallery: [],
    included: [
      "전 국립공원 입장료",
      "4WD 랜드크루저로 진행되는 전 게임 드라이브",
      "전문 가이드",
      "전 식사",
      "일정표에 따른 숙박",
      "공항 이동"
    ],
    excluded: [
      "국제선 항공권",
      "비자 발급 비용",
      "여행자 보험",
      "팁"
    ],
    notes: [
      "표시된 요금은 더블/트윈룸 2인 공유 기준 1인당 요금입니다. 싱글룸 이용 시 추가 요금이 발생합니다.",
      "응고롱고로 방문일 밤은 크레이터 림에 바로 인접하지 않고 고지대 마을 카라투에서 보냅니다.",
      "숙박 시설 및 요금은 예약 가능 여부에 따라 달라지며, 동일 시즌 내에서도 정확한 여행 날짜에 따라 변동될 수 있습니다.",
      "탄자니아 국립공원 및 보호구역 입장료는 정부가 책정하며 사전 통보 없이 변경될 수 있습니다."
    ],
    itinerary: [
      {
        day: 1,
        title: "아루샤 도착",
        description: "킬리만자로 국제공항에 도착해 아루샤 호텔로 이동, 휴식과 사파리 브리핑을 진행합니다.",
        accommodation: "Arusha Hotel",
        meals: "석식",
        accommodationByTier: {
          reserve: {
            name: "Arusha Coffee Lodge",
            image: "/images/lodges/arusha-coffee-lodge-garden-path.webp",
            amenities: [
              "garden",
              "restaurant",
              "wifi"
            ]
          }
        }
      },
      {
        day: 2,
        title: "타랑기레 국립공원",
        description: "타랑기레 국립공원으로 이동합니다. 타랑기레강은 놀라운 야생동물 밀집을 지탱합니다 — 수백 마리의 코끼리를 비롯해 얼룩말, 누, 기린, 임팔라가 악어와 하마와 함께 물을 나눕니다. 고대의 바오밥나무는 이 풍경에 거의 태고적인 분위기를 더합니다.",
        accommodation: "Tarangire Tented Camp",
        meals: "전 식사",
        accommodationByTier: {
          reserve: {
            name: "Lemala Nanyukie",
            image: "/images/lodges/lemala-nanyukie.webp",
            amenities: [
              "wildlife-view",
              "view"
            ]
          }
        }
      },
      {
        day: 3,
        title: "마냐라 호수 국립공원",
        description: "마냐라 호수로 이동합니다. 이 개체군에서만 볼 수 있는 특유의 행동인 나무 타는 사자로 유명한 곳입니다. 지하수림에는 개코원숭이 무리와 콜로부스 원숭이가 서식하며, 얕은 알칼리성 호수는 홍학 무리로 분홍빛을 띱니다. 물가에서는 뜨거운 간헐천이 김을 내뿜습니다.",
        accommodation: "Lake Manyara Hotel",
        meals: "전 식사",
        accommodationByTier: {
          reserve: {
            name: "andBeyond Lake Manyara Tree Lodge",
            image: "/images/lodges/andbeyond-lake-manyara-tree-lodge-living-room.webp",
            amenities: [
              "view",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 4,
        title: "세렝게티 — 도착 및 오후 드라이브",
        description: "응고롱고로 고지대를 가로질러 세렝게티 평원으로 내려갑니다. 세로네라 지역에 도착해 오후 게임 드라이브를 진행합니다. 표범은 강 합류 지점 주변의 소시지나무 숲을 즐겨 찾습니다 — 탄자니아에서 가장 신뢰도 높은 표범 서식지 중 하나입니다.",
        accommodation: "Serengeti Tented Camp",
        meals: "전 식사",
        accommodationByTier: {
          reserve: {
            name: "Siringiti Serengeti Camp",
            image: "/images/lodges/siringiti-serengeti-camp.webp",
            amenities: [
              "wifi",
              "view",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 5,
        title: "세렝게티 — 온전한 하루",
        description: "아침과 오후 드라이브로 세렝게티에서 완전한 하루를 보냅니다. 치타는 흰개미 언덕 위에서 사냥감을 살피고, 사자는 영역 경계를 순찰하며, 누 떼는 지평선 너머로 사라지는 행렬을 이루어 평원을 가로지릅니다.",
        accommodation: "Serengeti Tented Camp",
        meals: "전 식사",
        accommodationByTier: {
          reserve: {
            name: "Siringiti Serengeti Camp",
            image: "/images/lodges/siringiti-serengeti-camp.webp",
            amenities: [
              "wifi",
              "view",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 6,
        title: "응고롱고로 크레이터",
        description: "세렝게티를 떠나 응고롱고로 크레이터로 내려갑니다 — 탄자니아 노던 서킷의 왕관에 박힌 보석입니다. 빅파이브 모두가 이 고대의 칼데라 안에 서식합니다. 사자가 탁 트인 곳에서 사냥하는 모습이 자주 목격되며, 검은코뿔소는 멀리서 풀을 뜯습니다. 고지대 마을 카라투에서 1박합니다.",
        accommodation: "Karatu Lodge",
        meals: "전 식사",
        accommodationByTier: {
          reserve: {
            name: "Tloma Lodge, Karatu",
            image: "/images/lodges/tloma-lodge.webp",
            amenities: [
              "organic-farm",
              "garden",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 7,
        title: "출발",
        description: "귀국 항공편을 위해 킬리만자로 국제공항으로 이동합니다 — 탄자니아 북부에서 보낸 7일간의 특별한 야생동물 체험을 안고 돌아가는 길입니다.",
        accommodation: "해당 없음",
        meals: "조식"
      }
    ]
  },
  {
    slug: "7-days-flight-ndutu",
    name: "은두투 마이그레이션 유람비행 사파리 7일",
    duration: 7,
    destinations: [
      "serengeti",
      "ngorongoro"
    ],
    type: "wildlife",
    priceFrom: 4000,
    groupSize: {
      min: 1,
      max: 6
    },
    bestFor: [
      "couples",
      "solo",
      "wildlife-enthusiasts"
    ],
    overview: [
      "이 일정은 하나의 특정 사건에 맞춰 시기를 조율했습니다: 은두투 출산기입니다. 1월부터 3월 사이 매일 최대 8,000마리의 누 새끼가 이곳에서 태어나며, 사자, 치타, 하이에나, 들개 등 생태계의 모든 포식자가 이를 노리고 짧은 초원으로 모여듭니다. 착륙하기도 전에 여행의 분위기를 결정짓는 것은 바로 항공편입니다 — 응고롱고로 크레이터 림 바로 위를 지나가므로, 상공에서 칼데라의 완전한 원형 규모를 목격한 뒤 중앙 세렝게티의 연중 대형 고양잇과 동물 서식지에서 온전한 이틀을 지상에서 보내게 됩니다.",
      "은두투에서 보내는 온전한 하루는 여러분을 그 한가운데로 데려다주며, 여행은 응고롱고로 크레이터로의 가이드 동반 하강으로 마무리됩니다 — 출산지의 드라마를 아프리카에서 가장 밀집된 야생동물 그릇의 거의 확실한 빅파이브 관찰과 맞바꾸는 셈입니다."
    ],
    highlights: [
      "응고롱고로 크레이터 위를 나는 비행 — 하늘에서 바라보는 전망",
      "은두투 출산기 — 매일 8,000마리의 누가 태어납니다",
      "절정의 강도로 펼쳐지는 포식자의 활동",
      "중앙 세렝게티의 연중 대형 고양잇과 동물",
      "응고롱고로 크레이터로의 빅파이브 하강"
    ],
    heroImage: "/images/gallery/ndutu-wildebeest-watering-hole.jpg",
    heroImageAlt: "Wildebeest herds gathered around a watering hole in the Ndutu area of southern Serengeti",
    gallery: [],
    included: [
      "전 국립공원 요금",
      "국내선 전세기",
      "전 게임 드라이브",
      "전문 가이드",
      "전 식사",
      "숙박",
      "공항 이동"
    ],
    excluded: [
      "국제선 항공권",
      "비자 발급 비용",
      "여행자 보험",
      "팁"
    ],
    notes: [
      "표시된 요금은 더블/트윈룸 2인 공유 기준 1인당 요금입니다. 싱글룸 이용 시 추가 요금이 발생합니다.",
      "국내선 전세기가 운항하려면 최소 그룹 인원 2명이 필요합니다.",
      "이 일정은 은두투 출산기(1월~3월)에 맞춰 시기를 조율했습니다. 정확한 야생동물 관찰은 자연적 변동에 따라 달라질 수 있습니다.",
      "숙박 시설 및 요금은 예약 가능 여부에 따라 달라지며, 동일 시즌 내에서도 정확한 여행 날짜에 따라 변동될 수 있습니다.",
      "탄자니아 국립공원 및 보호구역 입장료는 정부가 책정하며 사전 통보 없이 변경될 수 있습니다."
    ],
    itinerary: [
      {
        day: 1,
        title: "아루샤 도착",
        description: "킬리만자로 국제공항에 도착해 아루샤 호텔로 이동합니다. 저녁 식사와 함께 사파리 브리핑을 진행합니다.",
        accommodation: "Arusha Hotel",
        meals: "석식",
        accommodationByTier: {
          reserve: {
            name: "Arusha Coffee Lodge",
            image: "/images/lodges/arusha-coffee-lodge-garden-path.webp",
            amenities: [
              "garden",
              "restaurant",
              "wifi"
            ]
          }
        }
      },
      {
        day: 2,
        title: "세렝게티로 비행",
        description: "아루샤에서 경비행기에 탑승합니다. 비행 경로는 응고롱고로 크레이터 바로 위를 지나갑니다 — 상공에서는 완벽한 원형의 그릇이 그 전체 규모를 드러내며, 고대 용암 림 안에 초원과 호수가 담긴 작은 세계를 이룹니다. 세로네라 활주로에 착륙해 첫 오후 게임 드라이브를 시작합니다.",
        accommodation: "Serengeti Tented Camp",
        meals: "중식, 석식",
        accommodationByTier: {
          reserve: {
            name: "Siringiti Serengeti Camp",
            image: "/images/lodges/siringiti-serengeti-camp.webp",
            amenities: [
              "wifi",
              "view",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 3,
        title: "중앙 세렝게티 — 게임 드라이브",
        description: "세로네라 주변의 중앙 세렝게티 평원을 하루 종일 탐험합니다. 연중 아프리카에서 가장 생산적인 야생동물 지역 중 하나로, 정착 사자 무리, 치타, 표범과 함께 방대한 얼룩말과 누 떼가 함께합니다.",
        accommodation: "Serengeti Tented Camp",
        meals: "전 식사",
        accommodationByTier: {
          reserve: {
            name: "Siringiti Serengeti Camp",
            image: "/images/lodges/siringiti-serengeti-camp.webp",
            amenities: [
              "wifi",
              "view",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 4,
        title: "남부 세렝게티 — 은두투 출산지",
        description: "세렝게티와 응고롱고로 보호구역 경계에 자리한 은두투 지역으로 남하합니다. 출산기(1월~3월) 동안에는 매일 최대 8,000마리의 누 새끼가 이곳에서 태어납니다. 치타, 사자, 하이에나, 들개가 취약한 신생 새끼들을 노리며 놀라운 밀도로 몰려듭니다.",
        accommodation: "Ndutu Safari Lodge",
        meals: "전 식사",
        accommodationByTier: {
          reserve: {
            name: "Masek Tented Lodge",
            image: "/images/lodges/masek-tented-lodge.webp",
            amenities: [
              "view",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 5,
        title: "은두투 — 출산기 온전한 하루",
        description: "짧은 초원 평원을 가로지르며 출산기의 무리와 그 포식자들을 하루 더 온전히 추적합니다. 탁 트인 대지의 드라마 사이사이, 은두투의 삼림지는 표범과 아프리카살쾡이의 서식지가 되어 줍니다. 이 시기 조류 관찰도 폭발적으로 늘어납니다.",
        accommodation: "Ndutu Safari Lodge",
        meals: "전 식사",
        accommodationByTier: {
          reserve: {
            name: "Masek Tented Lodge",
            image: "/images/lodges/masek-tented-lodge.webp",
            amenities: [
              "view",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 6,
        title: "응고롱고로 크레이터",
        description: "응고롱고로로 이동해 크레이터로 내려가 빅파이브와 함께 하루를 온전히 보냅니다. 이곳의 정착 사자 무리는 세계에서 가장 많이 연구된 개체군에 속합니다. 다른 곳에서는 좀처럼 볼 수 없는 검은코뿔소도 이곳에서는 정기적으로 관찰됩니다. 매력적인 마을 카라투에서 1박합니다.",
        accommodation: "Karatu Lodge",
        meals: "전 식사",
        accommodationByTier: {
          reserve: {
            name: "Tloma Lodge, Karatu",
            image: "/images/lodges/tloma-lodge.webp",
            amenities: [
              "organic-farm",
              "garden",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 7,
        title: "출발",
        description: "귀국 항공편을 위해 킬리만자로 국제공항으로 이동합니다.",
        accommodation: "해당 없음",
        meals: "조식"
      }
    ]
  },
  {
    slug: "8-days-flight-migration",
    name: "8일 누 떼 리버 크로싱 사파리",
    duration: 8,
    destinations: [
      "serengeti",
      "ngorongoro"
    ],
    type: "wildlife",
    priceFrom: 3852.29,
    groupSize: {
      min: 2,
      max: 6
    },
    badge: "popular",
    bestFor: [
      "couples",
      "solo",
      "wildlife-enthusiasts"
    ],
    tagline: "2027년 시즌에 맞춰 업데이트되었습니다.",
    metaTitle: "8일 누 떼 리버 크로싱 사파리 | EWA Safari Outfitters",
    metaDescription: "마라강 도하 지점으로 곧장 비행한 뒤, 세렝게티와 응고롱고로 크레이터를 지나 남쪽으로 이동합니다. 3개 등급, 1인당 $3,852.29부터.",
    overview: [
      "7월과 10월 사이, 노던 세렝게티는 대이동에서 가장 극적인 한 장면을 연출합니다: 수십만 마리의 누가 마라강 둑에 모여든 뒤, 이미 기다리고 있는 나일악어가 있는 물속으로 뛰어듭니다. 이 일정은 도하 지점에서 불과 45분 거리인 코가텐데 활주로로 곧장 비행해, 그곳까지 하루 반나절을 육로로 이동하는 대신, 그 지역에서 온전한 이틀을 머무르며 가이드가 단 하나의 관찰에 매달리기보다 무리의 움직임에 맞춰 대응할 수 있도록 합니다.",
      "그곳에서 루트는 세렝게티의 정착 야생동물을 따라 남쪽으로 이어집니다 — 사자 무리, 강가 숲의 표범, 탁 트인 초원의 새끼 딸린 치타입니다 — 이어서 응고롱고로 크레이터에서 보내는 온전한 이틀 밤이, 진짜 마사이 공동체 방문과 아루샤로 돌아가는 길의 음토와음부 정류로 마무리됩니다. 윌더니스 트레일, 윌더니스 리저브, 윌더니스 소버린 3개 등급으로 제공되며, 동일한 8일 루트를 따르되 머무는 캠프와 로지의 수준만 달라집니다."
    ],
    highlights: [
      "노던 세렝게티로 곧장 비행 — 육로로 하루 반나절 걸리는 대신 마라강 도하 지점에서 45분 거리",
      "도하 지점에서 보내는 온전한 이틀 — 단 하나의 관찰에 매달리지 않고 무리의 움직임에 맞춰 대응할 시간을 가이드에게",
      "도하 지점에서 활동하는 악어와 대형 고양잇과 동물 — 대이동 시즌 내내 마라강은 두 무리 모두로 붐빕니다",
      "남하하는 길의 중앙 세렝게티 연중 정착 포식자",
      "응고롱고로 크레이터에서 보내는 온전한 이틀 밤 — 신뢰도 높은 검은코뿔소 관찰과 탄자니아에서도 손꼽히는 밀집된 사자 개체군",
      "아루샤로 향하는 마지막 여정에서의 진짜 마사이 공동체 방문과 음토와음부 정류"
    ],
    heroImage: "/images/gallery/mara-river-crossing.webp",
    heroImageAlt: "Wildebeest and zebra herds crossing the Mara River during the great migration",
    gallery: [
      {
        src: "/images/gallery/impala-close-up.webp",
        alt: "Alert impalas with large ears raised, standing together in tall grass"
      },
      {
        src: "/images/gallery/maasai-mara.webp",
        alt: "Wildebeest and zebras crossing a river in a cloud of dust in the Maasai Mara"
      }
    ],
    pricingTiersProvisional: false,
    pricingTiers: [
      {
        pax: 2,
        trail: 4829.38,
        reserve: 6128.13,
        sovereign: 10141.88
      },
      {
        pax: 3,
        trail: 4340.83,
        reserve: 5639.58,
        sovereign: 9653.33
      },
      {
        pax: 4,
        trail: 4096.56,
        reserve: 5395.31,
        sovereign: 9409.06
      },
      {
        pax: 5,
        trail: 3950,
        reserve: 5194.75,
        sovereign: 9262.5
      },
      {
        pax: 6,
        trail: 3852.29,
        reserve: 5151.04,
        sovereign: 9164.79
      }
    ],
    included: [
      "전 국립공원 및 특별보호구역 요금",
      "아루샤–코가텐데 항공편",
      "전 게임 드라이브",
      "전 일정 함께하는 전문 가이드",
      "전 식사",
      "명시된 숙박 시설",
      "공항 이동"
    ],
    excluded: [
      "국제선 항공권",
      "비자 발급 비용",
      "여행자 보험",
      "팁"
    ],
    notes: [
      "표시된 요금은 더블/트윈룸 2인 공유 기준 1인당 요금입니다. 싱글룸 이용 시 추가 요금이 발생합니다.",
      "마라강 도하는 7월과 10월 사이에 가장 신뢰도가 높으며 특정 날짜를 보장할 수는 없습니다.",
      "숙박 시설 및 요금은 예약 가능 여부에 따라 달라지며, 동일 시즌 내에서도 정확한 여행 날짜에 따라 변동될 수 있습니다.",
      "탄자니아 국립공원 및 보호구역 입장료는 정부가 책정하며 사전 통보 없이 변경될 수 있습니다."
    ],
    faq: [
      {
        q: "이 사파리는 얼마인가요?",
        a: "윌더니스 트레일은 1인당 $3,852.29부터 시작합니다(6인 기준, 트윈 셰어), 2인이 단둘이 여행할 경우 $4,829.38까지 오릅니다. 윌더니스 리저브는 $5,151.04부터 시작해 $6,128.13까지, 윌더니스 소버린은 $9,164.79부터 시작해 $10,141.88까지 오릅니다. 모든 사파리는 맞춤 제작되므로, 여행 날짜에 맞는 정확한 요금은 개인 맞춤 견적을 요청해 주세요."
      },
      {
        q: "3개 등급의 차이는 무엇인가요?",
        a: "루트, 액티비티, 도하 지점에서의 일정은 3개 등급 모두 동일합니다. 달라지는 것은 캠프와 로지입니다: 윌더니스 트레일은 직관적이고 편안하며, 윌더니스 리저브는 여유로운 공간과 세심한 서비스를 더하고, 윌더니스 소버린은 이 루트에서 가장 특별한 숙박 시설로 안내합니다."
      },
      {
        q: "리버 크로싱은 보장되나요?",
        a: "특정 날짜에 특정 야생동물 이벤트를 보장할 수 있는 책임 있는 여행사는 없습니다 — 도하는 7월에서 10월 사이 가장 신뢰도가 높지만, 시기는 매년 달라지는 강수 패턴과 무리 이동에 따라 달라집니다. 이 일정은 확률을 최대화하기 위해 도하 지점에서 온전한 이틀을 배정합니다."
      },
      {
        q: "왜 마라강까지 육로 대신 비행으로 이동하나요?",
        a: "아루샤에서 노던 세렝게티까지 육로로는 편도 하루 반이 걸립니다. 코가텐데까지 비행하면 아루샤를 떠난 당일 오후에 현장에 들어설 수 있으며, 도하 지점에서 몇 시간이 아닌 45분 거리에 머무를 수 있습니다."
      },
      {
        q: "이 사파리에 가장 좋은 시기는 언제인가요?",
        a: "7월부터 10월까지가 대이동의 마라강 도하 시즌이며, 이 일정은 바로 그 시기에 맞춰 설계되었습니다."
      },
      {
        q: "빅파이브를 볼 수 있나요?",
        a: "응고롱고로 크레이터는 멸종 위기종인 검은코뿔소를 포함한 완전한 빅파이브를 만날 최고의 확률을 이 지역에서 제공하며, 중앙 세렝게티의 연중 정착 사자, 표범, 치타 개체군도 함께 만날 수 있습니다."
      },
      {
        q: "요금에 포함되는 것과 포함되지 않는 것은 무엇인가요?",
        a: "포함: 전 국립공원 및 특별보호구역 요금, 아루샤–코가텐데 항공편, 전 게임 드라이브, 전 일정 함께하는 전문 가이드, 전 식사, 명시된 숙박 시설, 공항 이동. 미포함: 국제선 항공권, 비자 발급 비용, 여행자 보험, 팁."
      },
      {
        q: "다른 목적지와 결합할 수 있나요?",
        a: "네 — 이 일정은 잔지바르 해변 연장과 자연스럽게 어울리며, 탄자니아의 두 지역을 모두 경험하고 싶은 여행자를 위해 서던 서킷 사파리와 결합할 수도 있습니다."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "아루샤 도착",
        description: "킬리만자로 국제공항에 도착해 아루샤로 이동합니다. 저녁 식사와 함께 사파리 브리핑을 진행합니다.",
        accommodation: "아루샤, 등급별 상이",
        meals: "석식",
        accommodationByTier: {
          trail: {
            name: "Kahawa House",
            image: "/images/lodges/kahawa-house.webp",
            amenities: [
              "wifi",
              "restaurant",
              "garden"
            ]
          },
          reserve: {
            name: "Gran Meliá Arusha",
            image: "/images/lodges/gran-melia-arusha.webp",
            amenities: [
              "wifi",
              "pool",
              "spa"
            ]
          },
          sovereign: {
            name: "Arusha Coffee Lodge",
            image: "/images/lodges/arusha-coffee-lodge-garden-path.webp",
            amenities: [
              "wifi",
              "pool",
              "view"
            ]
          }
        }
      },
      {
        day: 2,
        title: "노던 세렝게티 — 코가텐데로 비행",
        description: "아루샤에서 경비행기에 탑승합니다. 비행 경로는 응고롱고로 크레이터 림 바로 위를 지나가며, 저 아래로는 고대의 칼데라가 축소된 모습으로 드러납니다. 마라강 도하 지점에서 불과 45분 거리인 코가텐데 활주로에 착륙합니다. 오후 게임 드라이브로 분위기를 잡습니다.",
        accommodation: "노던 세렝게티, 등급별 상이",
        meals: "전 식사",
        accommodationByTier: {
          trail: {
            name: "Mara Katikati Camp",
            image: "/images/lodges/mara-katikati-tented-camp.webp",
            amenities: [
              "ensuite",
              "wildlife-view"
            ]
          },
          reserve: {
            name: "Mara Under Canvas Tented Camp",
            image: "/images/lodges/mara-under-canvas.webp",
            amenities: [
              "wildlife-view",
              "view"
            ]
          },
          sovereign: {
            name: "Lemala Kuria Hills",
            image: "/images/lodges/lemala-kuria-hills-aerial-kopje-camp.webp",
            amenities: [
              "pool",
              "view",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 3,
        title: "세렝게티 북부에서 보내는 온전한 하루",
        description: "마라강 도하 지점에서 보내는 온전한 하루입니다 — 수십만 마리의 누가 강둑에 모여든 뒤, 이미 기다리고 있는 나일악어가 있는 물속으로 뛰어듭니다. 가이드가 정해진 일정이 아니라 하루 동안의 무리 움직임에 따라 여러분을 위치시킵니다.",
        accommodation: "노던 세렝게티, 등급별 상이",
        meals: "전 식사",
        insiderFact: "도하는 하루 중 어느 시간에도 일어날 수 있고 단 몇 분 만에 끝납니다 — 가이드는 알려진 도하 지점에 차량을 세우고 무리가 결심할 때까지 때로 몇 시간이고 기다립니다.",
        accommodationByTier: {
          trail: {
            name: "Mara Katikati Camp",
            image: "/images/lodges/mara-katikati-tented-camp.webp",
            amenities: [
              "ensuite",
              "wildlife-view"
            ]
          },
          reserve: {
            name: "Mara Under Canvas Tented Camp",
            image: "/images/lodges/mara-under-canvas.webp",
            amenities: [
              "wildlife-view",
              "view"
            ]
          },
          sovereign: {
            name: "Lemala Kuria Hills",
            image: "/images/lodges/lemala-kuria-hills-aerial-kopje-camp.webp",
            amenities: [
              "pool",
              "view",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 4,
        title: "노던 세렝게티에서 중앙 세렝게티로",
        description: "도하 지점에서 마지막 반나절을 보낸 뒤 남쪽으로 이동합니다. 이 구간에서는 코끼리와 기린을 흔히 볼 수 있어, 단순한 이동일이 아니라 활기찬 하루가 됩니다.",
        accommodation: "중앙 세렝게티, 등급별 상이",
        meals: "전 식사",
        accommodationByTier: {
          trail: {
            name: "Serengeti Katikati Camp",
            image: "/images/lodges/serengeti-katikati-camp.webp",
            amenities: [
              "ensuite",
              "restaurant",
              "wildlife-view"
            ]
          },
          reserve: {
            name: "Kubukubu Tented Lodge",
            image: "/images/lodges/kubukubu-tented-lodge.webp",
            amenities: [
              "pool",
              "view",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Lemala Nanyukie",
            image: "/images/lodges/lemala-nanyukie.webp",
            amenities: [
              "wildlife-view",
              "view"
            ]
          }
        }
      },
      {
        day: 5,
        title: "중앙 세렝게티에서 응고롱고로로",
        description: "연중 정착하는 세로네라의 대형 고양잇과 동물을 둘러보는 반나절입니다 — 사자, 표범, 치타 모두 계절과 무관하게 현실적으로 만날 수 있는 곳입니다 — 이후 응고롱고로 고지대로 이동합니다.",
        accommodation: "응고롱고로 고지대, 등급별 상이",
        meals: "전 식사",
        accommodationByTier: {
          trail: {
            name: "Tortils Ngorongoro Camp",
            image: "/images/lodges/tortils-ngorongoro-camp.webp",
            amenities: [
              "restaurant",
              "wildlife-view"
            ]
          },
          reserve: {
            name: "Ngorongoro Serena Safari Lodge",
            image: "/images/lodges/ngorongoro-serena-safari-lodge.webp",
            amenities: [
              "view",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Melia Ngorongoro Lodge",
            image: "/images/lodges/ngorongoro-lodge-the-rim-room-melia-collection.webp",
            amenities: [
              "view",
              "restaurant",
              "spa"
            ]
          }
        }
      },
      {
        day: 6,
        title: "응고롱고로 크레이터 데이 투어",
        description: "크레이터 바닥으로 내려가는 온전한 하루입니다 — 하나의 폐쇄된 생태계 안에 밀집된 야생동물, 신뢰도 높은 검은코뿔소 관찰, 그리고 탄자니아에서도 손꼽히는 밀집된 사자 무리까지 만날 수 있습니다.",
        accommodation: "응고롱고로 고지대, 등급별 상이",
        meals: "전 식사",
        insiderFact: "응고롱고로 크레이터는 약 260km² 규모의 폐쇄된 생태계로, 이곳에 서식하는 동물 대부분은 평생 밖으로 나가지 않습니다. 이 지역에서 가장 신뢰도 높은 검은코뿔소 관찰지 중 한 곳이기도 합니다.",
        accommodationByTier: {
          trail: {
            name: "Tortils Ngorongoro Camp",
            image: "/images/lodges/tortils-ngorongoro-camp.webp",
            amenities: [
              "restaurant",
              "wildlife-view"
            ]
          },
          reserve: {
            name: "Ngorongoro Serena Safari Lodge",
            image: "/images/lodges/ngorongoro-serena-safari-lodge.webp",
            amenities: [
              "view",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Melia Ngorongoro Lodge",
            image: "/images/lodges/ngorongoro-lodge-the-rim-room-melia-collection.webp",
            amenities: [
              "view",
              "restaurant",
              "spa"
            ]
          }
        }
      },
      {
        day: 7,
        title: "마사이 공동체 & 음토와음부",
        description: "진짜 마사이 공동체 방문에 이어, 아루샤로 돌아가는 길에 시장 마을 음토와음부에서 정류합니다 — 게임 드라이브 사이에 짜여진 각본이 아니라 진짜 문화 체험 시간입니다.",
        accommodation: "아루샤, 등급별 상이",
        meals: "전 식사",
        accommodationByTier: {
          trail: {
            name: "Kahawa House",
            image: "/images/lodges/kahawa-house.webp",
            amenities: [
              "wifi",
              "restaurant",
              "garden"
            ]
          },
          reserve: {
            name: "Gran Meliá Arusha",
            image: "/images/lodges/gran-melia-arusha.webp",
            amenities: [
              "wifi",
              "pool",
              "spa"
            ]
          },
          sovereign: {
            name: "Arusha Coffee Lodge",
            image: "/images/lodges/arusha-coffee-lodge-garden-path.webp",
            amenities: [
              "wifi",
              "pool",
              "view"
            ]
          }
        }
      },
      {
        day: 8,
        title: "아루샤 시티 투어 & 출발",
        description: "킬리만자로 국제공항으로 이동해 귀국 항공편을 타기 전, 아루샤에서 보내는 마지막 아침입니다.",
        accommodation: "해당 없음",
        meals: "조식"
      }
    ]
  },
  {
    slug: "11-days-rwanda-tanzania",
    name: "르완다 탄자니아 사파리 11일",
    duration: 11,
    destinations: [
      "volcanoes",
      "kigali",
      "serengeti",
      "ngorongoro"
    ],
    type: "wildlife",
    priceFrom: 6500,
    groupSize: {
      min: 1,
      max: 8
    },
    bestFor: [
      "couples",
      "solo",
      "wildlife-enthusiasts"
    ],
    overview: [
      "아프리카에서 가장 뚜렷하게 다른 두 가지 야생동물 체험을 잇는 11일입니다: 르완다 화산 국립공원에서의 마운틴고릴라 트레킹과 골든몽키 트래킹, 그리고 이어지는 세렝게티의 탁 트인 평원과 응고롱고로 크레이터로의 완전한 하강입니다. 첫 온전한 날에 방문하는 키갈리 대학살 추모관은 비룽가의 대나무 숲으로 여정이 접어들기 전, 오늘날의 르완다를 이해하는 데 반드시 필요한 맥락을 전해 줍니다. 이 산에서만 볼 수 있는 순치된 고릴라 가족과 골든몽키 무리 모두가 일정에 포함됩니다.",
      "천 개의 언덕 위를 지나 탄자니아의 사바나로 들어가는 비행이 여정의 절반을 표시하며, 마지막 구간은 두 나라의 공원 어디에서도 얻을 수 없는 무언가를 더합니다: 에야시 호수에서 하드자베와 함께 보내는 하루로, 아프리카에 남은 진정한 마지막 수렵채집 공동체 중 한 곳입니다. 아침 사냥에 동참하고 수천 년간 이어져 온 불 피우기 기술을 배운 뒤, 킬리만자로에서 여정을 마무리합니다."
    ],
    highlights: [
      "화산 국립공원에서의 마운틴고릴라 트레킹",
      "비룽가에서의 골든몽키 트래킹",
      "키갈리 대학살 추모관 — 강력하고 중요한 체험",
      "세렝게티의 대형 고양잇과 동물과 누 떼",
      "응고롱고로의 빅파이브"
    ],
    heroImage: "/images/gallery/gorilla-mother-and-baby-rwanda.jpg",
    heroImageAlt: "Mountain gorilla mother and her baby together in Rwanda's forest",
    gallery: [],
    included: [
      "전 국립공원 및 고릴라 퍼밋 요금",
      "전 게임 드라이브",
      "전문 가이드",
      "전 식사",
      "숙박",
      "공항 이동",
      "탄자니아 국내선"
    ],
    excluded: [
      "국제선 항공권",
      "비자 발급 비용",
      "여행자 보험",
      "팁"
    ],
    notes: [
      "표시된 요금은 더블/트윈룸 2인 공유 기준 1인당 요금입니다. 싱글룸 이용 시 추가 요금이 발생합니다.",
      "고릴라 트레킹은 고릴라 가족과의 만남이 한 시간으로 고정되어 있으며, 골든몽키 트래킹은 별도의 액티비티입니다 — 두 퍼밋 모두 르완다 개발청이 사전에 배정합니다.",
      "숙박 시설 및 요금은 예약 가능 여부에 따라 달라지며, 동일 시즌 내에서도 정확한 여행 날짜에 따라 변동될 수 있습니다.",
      "르완다 및 탄자니아의 공원·보호구역 요금은 각국 정부가 책정하며 사전 통보 없이 변경될 수 있습니다."
    ],
    itinerary: [
      {
        day: 1,
        title: "키갈리 도착",
        description: "키갈리 국제공항에 도착해 호텔로 이동합니다. 키갈리는 아프리카에서 가장 깨끗하고 정돈된 수도 중 하나이며, 르완다를 처음 만나기에 이상적인 도시입니다.",
        accommodation: "Kigali Hotel",
        meals: "석식",
        accommodationByTier: {
          reserve: {
            name: "Radisson Blu Hotel & Convention Centre, Kigali",
            image: "/images/lodges/radisson-blu-hotel-convention-centre-kigali.webp",
            amenities: [
              "pool",
              "restaurant",
              "wifi"
            ]
          }
        }
      },
      {
        day: 2,
        title: "키갈리 대학살 추모관",
        description: "키갈리 대학살 추모관을 방문합니다. 이곳에는 25만 명의 희생자가 안장되어 있으며, 생존자 증언, 사진, 다큐멘터리 영상을 통해 1994년 대학살의 역사를 전합니다. 이 추모관은 깊은 울림을 주는 동시에 오늘날의 르완다를 이해하는 데 반드시 필요한 맥락을 전해 줍니다. 오후는 키갈리의 활기찬 예술 지구를 자유롭게 둘러보실 수 있습니다.",
        accommodation: "Kigali Hotel",
        meals: "조식, 석식",
        accommodationByTier: {
          reserve: {
            name: "Radisson Blu Hotel & Convention Centre, Kigali",
            image: "/images/lodges/radisson-blu-hotel-convention-centre-kigali.webp",
            amenities: [
              "pool",
              "restaurant",
              "wifi"
            ]
          }
        }
      },
      {
        day: 3,
        title: "루헹게리로 이동 — 비룽가 전망",
        description: "르완다의 유명한 천 개의 언덕을 지나 북서쪽 루헹게리(무산제)까지 4시간을 이동합니다. 비룽가 화산 산맥이 주변 농경지 위로 극적으로 솟아 있습니다. 고지대의 현지 식당에서 점심을 즐기고, 이른 저녁 무렵 루헹게리에 도착합니다.",
        accommodation: "Ruhengeri Hotel",
        meals: "전 식사",
        accommodationByTier: {
          reserve: {
            name: "Kinigi Guest House",
            image: "/images/lodges/kinigi-guest-house.webp",
            amenities: [
              "view",
              "garden"
            ]
          }
        }
      },
      {
        day: 4,
        title: "마운틴고릴라 트레킹 — 화산 국립공원",
        description: "세계에서 가장 특별한 야생동물 체험 중 하나입니다. 전문 가이드와 무장 레인저와 함께 키니기 레인저 스테이션에서 출발해 비룽가의 대나무 숲에서 순치된 고릴라 가족을 찾아 나섭니다. 만남이 이루어지면, 이 놀라운 영장류들과 한 시간을 보냅니다 — 실버백이 가족을 이끌고, 어미가 새끼에게 젖을 물리고, 어린 개체들이 머리 위에서 노는 모습을 지켜봅니다. 무헤자 고릴라 수의학 프로젝트를 방문해 보전 노력에 대해 알아봅니다.",
        accommodation: "Ruhengeri Hotel",
        meals: "전 식사",
        accommodationByTier: {
          reserve: {
            name: "Kinigi Guest House",
            image: "/images/lodges/kinigi-guest-house.webp",
            amenities: [
              "view",
              "garden"
            ]
          }
        }
      },
      {
        day: 5,
        title: "골든몽키 트래킹",
        description: "화산 국립공원으로 돌아가 멸종위기종인 골든몽키를 추적합니다 — 비룽가 산맥에서만 서식하는 전기 파란색과 금빛이 어우러진 영장류입니다. 트레일은 고릴라 트레킹과는 다른 경로를 거치며, 대나무 서식지에 대한 새로운 시각을 선사합니다. 오후에는 가젤과 영양이 숲 가장자리에서 풀을 뜯습니다.",
        accommodation: "Ruhengeri Hotel",
        meals: "전 식사",
        accommodationByTier: {
          reserve: {
            name: "Kinigi Guest House",
            image: "/images/lodges/kinigi-guest-house.webp",
            amenities: [
              "view",
              "garden"
            ]
          }
        }
      },
      {
        day: 6,
        title: "세렝게티로 비행",
        description: "아침에는 키갈리 공항으로 이동해 세렝게티로 비행합니다. 비행 경로는 르완다의 천 개의 언덕 위를 지나 국경을 넘어 탄자니아의 광활한 사바나로 이어지며, 풍경의 극적인 전환을 만끽할 수 있습니다. 세로네라에 착륙해 평원에서의 첫 오후 게임 드라이브를 시작합니다.",
        accommodation: "Serengeti Tented Camp",
        meals: "중식, 석식",
        accommodationByTier: {
          reserve: {
            name: "Siringiti Serengeti Camp",
            image: "/images/lodges/siringiti-serengeti-camp.webp",
            amenities: [
              "wifi",
              "view",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 7,
        title: "세렝게티 — 온전한 하루",
        description: "중앙 세렝게티에서 하루를 온전히 보냅니다. 대형 고양잇과 동물, 누 떼, 그리고 상징적인 아카시아 풍경이 아침부터 저녁까지 풍부한 야생동물 관찰을 선사합니다. 세렝게티의 하늘이 황금빛으로 물드는 코피 위에서의 선다우너도 즐깁니다.",
        accommodation: "Serengeti Tented Camp",
        meals: "전 식사",
        accommodationByTier: {
          reserve: {
            name: "Siringiti Serengeti Camp",
            image: "/images/lodges/siringiti-serengeti-camp.webp",
            amenities: [
              "wifi",
              "view",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 8,
        title: "세렝게티 — 심화 탐험",
        description: "세렝게티 평원을 가로지르며 또 하루를 온전히 야생동물 추적에 씁니다. 가이드는 최신 정보를 따라 사자가 사냥에 나섰거나 치타가 풀숲에 새끼를 두고 있는 곳으로 여러분을 위치시킵니다.",
        accommodation: "Serengeti Tented Camp",
        meals: "전 식사",
        accommodationByTier: {
          reserve: {
            name: "Siringiti Serengeti Camp",
            image: "/images/lodges/siringiti-serengeti-camp.webp",
            amenities: [
              "wifi",
              "view",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 9,
        title: "응고롱고로 크레이터",
        description: "응고롱고로로 이동해 크레이터로 내려가 하루 종일 빅파이브와 함께 보냅니다. 폐쇄된 칼데라는 장엄한 화산 지형 속에서 놀라운 야생동물 관찰을 보장해 줍니다.",
        accommodation: "Ngorongoro Serena Lodge",
        meals: "전 식사",
        accommodationByTier: {
          reserve: {
            name: "Kitela Lodge",
            image: "/images/lodges/kitela-lodge.webp",
            amenities: [
              "pool",
              "view",
              "garden"
            ]
          }
        }
      },
      {
        day: 10,
        title: "에야시 호수 — 하드자베 수렵채집민",
        description: "에야시 호수로 이동해 아프리카에 남은 진정한 마지막 수렵채집 공동체 중 하나인 하드자베 사람들과 하루를 보냅니다. 전통 활과 화살을 이용한 아침 사냥에 함께하고, 수천 년간 변하지 않은 불 피우기 기술을 목격하며, 현대성의 가장자리에 놓인 삶의 방식에 대해 깊이 이해하는 시간을 갖습니다.",
        accommodation: "Lake Eyasi Tented Camp",
        meals: "전 식사",
        accommodationByTier: {
          reserve: {
            name: "Kisima Ngeda Tented Camp",
            image: "/images/lodges/kisima-ngeda-tented-camp.webp",
            amenities: [
              "view",
              "garden"
            ]
          }
        }
      },
      {
        day: 11,
        title: "출발 — 킬리만자로 국제공항",
        description: "에야시 호수에서 킬리만자로 국제공항으로 이동해 귀국 항공편을 탑니다. 아프리카에서 가장 특별한 두 나라를 잇는 11일간의 여정입니다.",
        accommodation: "해당 없음",
        meals: "조식"
      }
    ]
  },
  {
    slug: "12-days-rwanda-tanzania-zanzibar",
    name: "르완다, 탄자니아 & 잔지바르 12일",
    duration: 12,
    destinations: [
      "volcanoes",
      "tarangire",
      "ngorongoro",
      "serengeti",
      "zanzibar"
    ],
    type: "combination",
    priceFrom: 9375,
    groupSize: {
      min: 1,
      max: 6
    },
    bestFor: [
      "couples",
      "honeymoon",
      "wildlife-enthusiasts"
    ],
    overview: [
      "그 무엇도 포기할 필요가 없는 12일입니다: 르완다 화산 국립공원에서의 마운틴고릴라 만남과 골든몽키 트래킹, 타랑기레와 응고롱고로 크레이터, 중앙 세렝게티에서의 온전한 이틀을 거치는 완전한 탄자니아 사파리, 그리고 잔지바르 해변에서 여정을 마무리하는 4박입니다. 순치된 고릴라 가족, 빅파이브, 백사장을 한 번의 예약에 담는 일정은 흔치 않으며, 이만큼 순서가 잘 짜인 루트는 더더욱 드뭅니다.",
      "키갈리 대학살 추모관이 르완다 구간에 걸맞은 맥락을 더해 주고, 타랑기레에서의 가이드 동반 도보 사파리는 야생동물 구간에 다른 속도를 더해 주며, 여정 전체는 트레일, 리저브, 소버린 세 가지 숙박 등급으로 진행되므로 어느 등급을 예약하든 루트는 동일하게 유지됩니다."
    ],
    pricingTiersProvisional: true,
    pricingTiers: [
      {
        pax: 2,
        trail: 9375,
        reserve: 12499,
        sovereign: 19375
      },
      {
        pax: 3,
        trail: 8885,
        reserve: 11849,
        sovereign: 18365
      },
      {
        pax: 4,
        trail: 8645,
        reserve: 11529,
        sovereign: 17870
      },
      {
        pax: 5,
        trail: 8505,
        reserve: 11339,
        sovereign: 17575
      },
      {
        pax: 6,
        trail: 8405,
        reserve: 11209,
        sovereign: 17375
      }
    ],
    highlights: [
      "르완다 화산 국립공원에서 순치된 마운틴고릴라 가족과 보내는 한 시간의 만남",
      "같은 비룽가 대나무 숲에서의 골든몽키 트래킹",
      "키갈리 대학살 추모관 — 강력하고 필수적인 르완다 이야기의 한 조각",
      "타랑기레의 코끼리 무리와 가이드 동반 도보 사파리",
      "세계 최대의 온전한 칼데라 안에서 만나는 응고롱고로 크레이터의 빅파이브",
      "중앙 세렝게티의 일급 포식자 서식지에서 보내는 온전한 이틀",
      "잔지바르 해변에서 여정을 마무리하는 4박"
    ],
    heroImage: "/images/gallery/rwanda-mountain-gorilla.jpg",
    heroImageAlt: "Mountain gorilla resting with its chin on its arm amid Rwanda's forest foliage",
    gallery: [
      {
        src: "/images/gallery/rwanda-virunga-hills.webp",
        alt: "Silhouetted trees and rolling hills at golden sunset in the Virunga foothills, Rwanda"
      },
      {
        src: "/images/gallery/serengeti-lion-pride.webp",
        alt: "Lion pride with a maned male leading lionesses through golden grass on the Serengeti plains"
      },
      {
        src: "/images/gallery/zanzibar-nungwi-aerial.webp",
        alt: "Aerial view of a beachfront resort with thatched roofs, palm trees, and turquoise lagoon waters at Nungwi, Zanzibar"
      }
    ],
    included: [
      "고릴라 트레킹 및 골든몽키 퍼밋 요금",
      "전 국립공원 입장료",
      "프라이빗 4WD 차량으로 진행되는 전 게임 드라이브",
      "전 일정 함께하는 전문 가이드",
      "국내선(키갈리-아루샤, 세렝게티-잔지바르)",
      "명시된 전 식사",
      "일정표에 따른 숙박",
      "공항 이동 및 시설 간 이동"
    ],
    includedCategorized: {
      transfers: [
        "국내선(키갈리-아루샤, 세렝게티-잔지바르)",
        "공항 이동 및 시설 간 이동"
      ],
      accommodationMeals: [
        "명시된 전 식사",
        "일정표에 따른 숙박"
      ],
      guidingGameDrives: [
        "고릴라 트레킹 및 골든몽키 퍼밋 요금",
        "전 국립공원 입장료",
        "프라이빗 4WD 차량으로 진행되는 전 게임 드라이브",
        "전 일정 함께하는 전문 가이드"
      ]
    },
    excluded: [
      "국제선 항공권",
      "비자 발급 비용",
      "여행자 보험",
      "팁",
      "잔지바르 선택 액티비티"
    ],
    excludedCategorized: [
      "국제선 항공권",
      "비자 발급 비용",
      "여행자 보험",
      "팁",
      "잔지바르 선택 액티비티(다이빙, 다우선 크루즈, 스톤타운 투어)"
    ],
    notes: [
      "표시된 요금은 더블/트윈룸 2인 공유 기준 1인당 요금입니다. 싱글룸 이용 시 추가 요금이 발생합니다.",
      "그룹 규모는 최대 6인이며, 더 큰 그룹은 요청 시 안내해 드립니다.",
      "숙박 시설 및 요금은 예약 가능 여부에 따라 달라지며, 동일 시즌 내에서도 정확한 여행 날짜에 따라 변동될 수 있습니다.",
      "르완다 및 탄자니아의 공원·보호구역 요금은 각국 정부가 책정하며 사전 통보 없이 변경될 수 있습니다."
    ],
    itinerary: [
      {
        day: 1,
        title: "키갈리 도착",
        description: "키갈리 국제공항에 도착해 호텔로 이동, 1박합니다.",
        accommodation: "Kigali Hotel",
        meals: "조식 포함",
        accommodationByTier: {
          trail: {
            name: "Discover Rwanda Youth Hostel",
            image: "/images/lodges/discover-rwanda-youth-hostel-exterior-night.webp",
            amenities: [
              "wifi",
              "pool",
              "restaurant"
            ]
          },
          reserve: {
            name: "Ubumwe Grande Hotel",
            image: "/images/lodges/ubumwe-grande-hotel.webp",
            amenities: [
              "wifi",
              "restaurant",
              "view"
            ]
          },
          sovereign: {
            name: "Radisson Blu Hotel & Convention Centre, Kigali",
            image: "/images/lodges/radisson-blu-hotel-convention-centre-kigali.webp",
            amenities: [
              "pool",
              "spa",
              "wifi"
            ]
          }
        }
      },
      {
        day: 2,
        title: "키갈리 시내 투어 & 화산 국립공원으로 이동",
        description: "1994년 대학살 희생자들을 기리는 키갈리 대학살 추모관을 방문합니다 — 생존자 증언과 역사적 기록을 통해 전해지는, 오늘날의 르완다를 이해하는 데 반드시 필요한 진지한 입문입니다. 비룽가 화산의 산기슭으로 이동해 1박합니다.",
        accommodation: "Ruhengeri Hotel",
        meals: "풀보드(전 식사 포함)",
        accommodationByTier: {
          trail: {
            name: "Kinigi Guest House",
            image: "/images/lodges/kinigi-guest-house.webp",
            amenities: [
              "ensuite",
              "restaurant"
            ]
          },
          reserve: {
            name: "La Palme Hotel",
            image: "/images/lodges/la-palme-hotel.webp",
            amenities: [
              "wifi",
              "restaurant",
              "garden"
            ]
          },
          sovereign: {
            name: "Bisate Lodge",
            image: "/images/lodges/bisate-lodge-villa-exterior.webp",
            amenities: [
              "view",
              "spa",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 3,
        title: "마운틴고릴라 트레킹",
        description: "전문 가이드와 무장 국립공원 레인저와 함께 비룽가의 대나무 숲으로 나서 순치된 고릴라 가족을 찾아갑니다. 만남이 이루어지면 그들의 곁에서 온전한 한 시간을 보냅니다 — 실버백이 가족을 이끄는 모습, 새끼들이 발밑에서 노는 모습을 지켜보는, 진정으로 흔치 않은 야생동물 만남입니다.",
        accommodation: "Ruhengeri Hotel",
        meals: "풀보드(전 식사 포함)",
        insiderFact: "르완다는 고릴라 가족당 하루 방문객 수를 제한하기 위해 트레킹 퍼밋을 제한합니다 — 성수기에는 충분히 미리 예약하는 것이 필수입니다.",
        accommodationByTier: {
          trail: {
            name: "Kinigi Guest House",
            image: "/images/lodges/kinigi-guest-house.webp",
            amenities: [
              "ensuite",
              "restaurant"
            ]
          },
          reserve: {
            name: "La Palme Hotel",
            image: "/images/lodges/la-palme-hotel.webp",
            amenities: [
              "wifi",
              "restaurant",
              "garden"
            ]
          },
          sovereign: {
            name: "Bisate Lodge",
            image: "/images/lodges/bisate-lodge-villa-exterior.webp",
            amenities: [
              "view",
              "spa",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 4,
        title: "골든몽키 트래킹 & 키갈리로 복귀",
        description: "비룽가 숲의 다른 구간을 지나며 멸종위기종인 골든몽키를 추적한 뒤, 키갈리로 돌아가 1박합니다.",
        accommodation: "Kigali Hotel",
        meals: "풀보드(전 식사 포함)",
        accommodationByTier: {
          trail: {
            name: "Discover Rwanda Youth Hostel",
            image: "/images/lodges/discover-rwanda-youth-hostel-exterior-night.webp",
            amenities: [
              "wifi",
              "pool",
              "restaurant"
            ]
          },
          reserve: {
            name: "Ubumwe Grande Hotel",
            image: "/images/lodges/ubumwe-grande-hotel.webp",
            amenities: [
              "wifi",
              "restaurant",
              "view"
            ]
          },
          sovereign: {
            name: "Radisson Blu Hotel & Convention Centre, Kigali",
            image: "/images/lodges/radisson-blu-hotel-convention-centre-kigali.webp",
            amenities: [
              "pool",
              "spa",
              "wifi"
            ]
          }
        }
      },
      {
        day: 5,
        title: "아루샤로 비행",
        description: "르완다의 천 개의 언덕 위를 지나 탄자니아의 사바나로 들어가는 짧은 비행 후, 사파리에 앞서 아루샤에서 1박합니다.",
        accommodation: "Arusha Hotel",
        meals: "조식 포함",
        accommodationByTier: {
          trail: {
            name: "Kahawa House",
            image: "/images/lodges/kahawa-house.webp",
            amenities: [
              "wifi",
              "restaurant",
              "garden"
            ]
          },
          reserve: {
            name: "Gran Melia, Arusha",
            image: "/images/lodges/gran-melia-arusha.webp",
            amenities: [
              "wifi",
              "pool",
              "spa"
            ]
          },
          sovereign: {
            name: "Arusha Coffee Lodge",
            image: "/images/lodges/arusha-coffee-lodge-garden-path.webp",
            amenities: [
              "wifi",
              "pool",
              "view"
            ]
          }
        }
      },
      {
        day: 6,
        title: "아루샤에서 타랑기레 국립공원으로",
        description: "타랑기레로 이동해 탄자니아 최대 규모의 코끼리 무리와 고대 바오밥나무 사이에서 가이드 동반 게임 드라이브와 도보 사파리를 즐깁니다.",
        accommodation: "Tarangire Lodge",
        meals: "풀보드(전 식사 포함)",
        insiderFact: "타랑기레는 우기를 제외하면 아프리카에서 가장 높은 코끼리 밀도를 자랑하며, 무리는 강을 따라 집중적으로 모여듭니다.",
        accommodationByTier: {
          trail: {
            name: "Tloma Lodge",
            image: "/images/lodges/tloma-lodge.webp",
            amenities: [
              "wifi",
              "restaurant",
              "garden"
            ]
          },
          reserve: {
            name: "Kitela Lodge",
            image: "/images/lodges/kitela-lodge.webp",
            amenities: [
              "pool",
              "view",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Gibb's Farm",
            image: "/images/lodges/gibbs-farm-cottage-exterior.webp",
            amenities: [
              "spa",
              "view",
              "organic-farm"
            ]
          }
        }
      },
      {
        day: 7,
        title: "응고롱고로 크레이터에서 카라투로",
        description: "하루 종일 가이드 동반 응고롱고로 크레이터 하강으로 세계 최대의 온전한 칼데라 안에서 빅파이브를 추적한 뒤, 카라투로 돌아가 1박합니다.",
        accommodation: "Karatu Lodge",
        meals: "풀보드(전 식사 포함)",
        insiderFact: "응고롱고로 크레이터는 약 260km² 규모의 폐쇄된 생태계로, 이곳에 서식하는 동물 대부분은 평생 크레이터 밖으로 나가지 않습니다.",
        accommodationByTier: {
          trail: {
            name: "Tloma Lodge",
            image: "/images/lodges/tloma-lodge.webp",
            amenities: [
              "wifi",
              "restaurant",
              "garden"
            ]
          },
          reserve: {
            name: "Kitela Lodge",
            image: "/images/lodges/kitela-lodge.webp",
            amenities: [
              "pool",
              "view",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Gibb's Farm",
            image: "/images/lodges/gibbs-farm-cottage-exterior.webp",
            amenities: [
              "spa",
              "view",
              "organic-farm"
            ]
          }
        }
      },
      {
        day: 8,
        title: "카라투에서 중앙 세렝게티로",
        description: "중앙 세렝게티로 이동해 사자, 표범, 치타 관찰이 탄자니아에서 가장 안정적인 지역 중 한 곳으로 들어섭니다.",
        accommodation: "Serengeti Tented Camp",
        meals: "풀보드(전 식사 포함)",
        accommodationByTier: {
          trail: {
            name: "Serengeti Queens Camp",
            image: "/images/lodges/serengeti-queens-camp-firepit.webp",
            amenities: [
              "ensuite",
              "restaurant",
              "wildlife-view"
            ]
          },
          reserve: {
            name: "Kubukubu Tented Lodge",
            image: "/images/lodges/kubukubu-tented-lodge.webp",
            amenities: [
              "pool",
              "view",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Four Seasons Safari Lodge Serengeti",
            image: "/images/lodges/four-seasons-safari-lodge-serengeti-terrace-waterhole.webp",
            amenities: [
              "pool",
              "spa",
              "view"
            ]
          }
        }
      },
      {
        day: 9,
        title: "중앙 세렝게티, 온전한 하루",
        description: "세렝게티의 탁 트인 평원을 가로지르며 하루 종일 가이드 동반 게임 드라이브를 진행하고, 활동이 절정에 달한 포식자를 추적합니다.",
        accommodation: "Serengeti Tented Camp",
        meals: "풀보드(전 식사 포함)",
        accommodationByTier: {
          trail: {
            name: "Serengeti Queens Camp",
            image: "/images/lodges/serengeti-queens-camp-firepit.webp",
            amenities: [
              "ensuite",
              "restaurant",
              "wildlife-view"
            ]
          },
          reserve: {
            name: "Kubukubu Tented Lodge",
            image: "/images/lodges/kubukubu-tented-lodge.webp",
            amenities: [
              "pool",
              "view",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Four Seasons Safari Lodge Serengeti",
            image: "/images/lodges/four-seasons-safari-lodge-serengeti-terrace-waterhole.webp",
            amenities: [
              "pool",
              "spa",
              "view"
            ]
          }
        }
      },
      {
        day: 10,
        title: "잔지바르로 비행",
        description: "세렝게티에서 아루샤를 경유해 잔지바르로 비행한 뒤, 여정의 마지막 구간을 위해 해변가 숙소로 이동합니다.",
        accommodation: "Royal Zanzibar",
        meals: "조식, 중식",
        accommodationByTier: {
          trail: {
            name: "Makofi Guest House",
            image: "/images/lodges/makofi-guest-house-thatched-cottage-exterior.webp",
            amenities: [
              "restaurant",
              "beachfront"
            ]
          },
          reserve: {
            name: "Royal Zanzibar",
            image: "/images/lodges/royal-zanzibar.webp",
            amenities: [
              "all-inclusive",
              "beachfront",
              "pool"
            ]
          },
          sovereign: {
            name: "Kilindi Zanzibar",
            image: "/images/lodges/kilindi-zanzibar.webp",
            amenities: [
              "pool",
              "spa",
              "beachfront"
            ]
          }
        }
      },
      {
        day: 11,
        title: "잔지바르에서 보내는 온전한 하루",
        description: "잔지바르 해변에서의 자유 일정입니다 — 리프 다이빙, 석양 다우선 항해, 또는 11일간의 여정 끝에 그저 휴식을 취하셔도 좋습니다.",
        accommodation: "Royal Zanzibar",
        meals: "올인클루시브",
        accommodationByTier: {
          trail: {
            name: "Makofi Guest House",
            image: "/images/lodges/makofi-guest-house-thatched-cottage-exterior.webp",
            amenities: [
              "restaurant",
              "beachfront"
            ]
          },
          reserve: {
            name: "Royal Zanzibar",
            image: "/images/lodges/royal-zanzibar.webp",
            amenities: [
              "all-inclusive",
              "beachfront",
              "pool"
            ]
          },
          sovereign: {
            name: "Kilindi Zanzibar",
            image: "/images/lodges/kilindi-zanzibar.webp",
            amenities: [
              "pool",
              "spa",
              "beachfront"
            ]
          }
        }
      },
      {
        day: 12,
        title: "출발",
        description: "잔지바르 공항으로 이동해 귀국 항공편을 탑니다.",
        accommodation: "해당 없음",
        meals: "조식, 중식"
      }
    ]
  },
  {
    slug: "12-days-rwanda-primates",
    name: "르완다 영장류 사파리 & 잔지바르 비치 이스케이프",
    duration: 12,
    destinations: [
      "kigali",
      "nyungwe",
      "volcanoes",
      "zanzibar"
    ],
    type: "combination",
    priceFrom: 7742.08,
    groupSize: {
      min: 2,
      max: 6
    },
    bestFor: [
      "couples",
      "honeymoon",
      "wildlife-enthusiasts"
    ],
    tagline: "2027년 시즌에 맞춰 업데이트되었습니다.",
    metaTitle: "르완다 영장류 사파리 & 잔지바르 비치 이스케이프 | EWA Safari Outfitters",
    metaDescription: "르완다에서의 침팬지, 고릴라, 골든몽키 트레킹에 이어 잔지바르 해변에서 보내는 4박. 하나의 매끄러운 예약, 1인당 $7,742.08부터.",
    overview: [
      "르완다에는 대부분의 여행자가 단 하나만 보고 마는 세 종의 영장류가 있습니다. 이 일정은 그 세 가지 모두를 추적합니다 — 니웅궤 숲 캐노피를 이동하는 침팬지, 무산제 위 안개 낀 산비탈의 마운틴고릴라, 화산 국립공원의 대나무 숲을 누비는 골든몽키 — 그런 다음 잔지바르 해변에서 아무것도 하지 않는 4박으로 마무리됩니다.",
      "두 절반은 완전히 다른 톤을 지니고 있으며, 이 일정은 그 둘을 뒤섞지 않고 각각을 존중하도록 설계되었습니다. 르완다는 여러분에게 무언가를 요구합니다: 때로는 고지대에서 이루어지는 진짜 숲 하이킹, 한 번 예약하면 서두르거나 재조정할 수 없는 퍼밋 기반의 트레킹 일자입니다. 잔지바르는 아무것도 요구하지 않습니다. 두 트레킹 지역 사이에는 의도적인 휴지기로서 키부 호수 보트 횡단이 자리하고, 스톤타운에서 보내는 아침이 해변 구간을 열며 이후 일정은 완전히 비워집니다. 침팬지와 고릴라 트레킹은 앉아서 하는 게임 드라이브가 아니라 신체적으로 부담이 큰 액티비티입니다 — 추가 지원이 필요하면 포터를 고용할 수 있으며, 트레킹 자체는 쉽게 만들 수 없는 대신 르완다 전 일정에 걸친 진짜 2박 체류로 피로를 줄이도록 설계되었습니다."
    ],
    highlights: [
      "르완다의 세 가지 영장류 — 침팬지, 마운틴고릴라, 골든몽키 — 각각이 저마다 뚜렷이 구별되는 트레킹 경험",
      "두 트레킹 지역 사이의 키부 호수 보트 이동 — 단순한 이동일이 아니라 휴식일로 설계",
      "고릴라 트레킹 날에 더해지는 문화 교류 — 서둘러 끼워 넣은 부대 활동이 아니라 진짜 맥락을 더하는 시간",
      "잔지바르에서 보내는 온전한 4박 — 스톤타운에서의 아침과 예정 없는 해변 3일 포함",
      "르완다 전 일정에 걸친 진짜 2박 체류 — 1박짜리 정류 없이, 다음 이동 전 제대로 자리 잡을 시간"
    ],
    heroImage: "/images/gallery/golden-monkey.jpg",
    heroImageAlt: "Close-up portrait of a golden monkey in Rwanda's bamboo forest",
    gallery: [
      {
        src: "/images/gallery/chimpanzees-resting-mossy-log-gombe.jpg",
        alt: "Chimpanzees resting together on a moss-covered log"
      }
    ],
    pricingTiersProvisional: false,
    pricingTiers: [
      {
        pax: 2,
        reserve: 8533.75
      },
      {
        pax: 3,
        reserve: 8137.92
      },
      {
        pax: 4,
        reserve: 7940
      },
      {
        pax: 5,
        reserve: 7821.25
      },
      {
        pax: 6,
        reserve: 7742.08
      }
    ],
    included: [
      "전 국립공원 및 트레킹 퍼밋 요금",
      "전 일정의 차량, 가이드, 연료",
      "명시된 전 액티비티",
      "명시된 숙박 시설",
      "키갈리–카멤베 및 키갈리–잔지바르 항공편",
      "공항 이동"
    ],
    excluded: [
      "국제선 항공권",
      "비자 발급 비용",
      "여행자 보험",
      "팁",
      "개인 경비"
    ],
    notes: [
      "표시된 요금은 더블/트윈룸 2인 공유 기준 1인당 요금입니다. 싱글룸 이용 시 추가 요금이 발생합니다.",
      "고릴라, 침팬지, 골든몽키 트레킹은 각각 르완다 개발청이 사전에 배정하는 제한된 퍼밋 기반 액티비티입니다.",
      "고릴라 및 침팬지 트레킹에는 최소 연령이 있으며, 이는 르완다 공원 당국이 정한 기준으로 변경될 수 있습니다 — 예약 시 담당 컨설턴트에게 현재 연령 기준을 확인해 주세요.",
      "숙박 시설 및 요금은 예약 가능 여부에 따라 달라지며, 동일 시즌 내에서도 정확한 여행 날짜에 따라 변동될 수 있습니다."
    ],
    faq: [
      {
        q: "이 일정은 체력적으로 힘든가요?",
        a: "르완다 구간은 확실히 힘듭니다 — 침팬지와 고릴라 트레킹은 때로는 가파르거나 고르지 않은 지형에서, 때로는 고지대에서 이루어지는 진짜 숲 하이킹입니다. 잔지바르 구간은 아무것도 요구하지 않습니다. 르완다 트레킹에서 추가 지원이 필요하면 포터를 고용할 수 있습니다."
      },
      {
        q: "세 가지 영장류 트레킹의 차이는 무엇인가요?",
        a: "니웅궤에서의 침팬지 트레킹은 더 빠르게 움직이고 더 활발하게 소리 내는 영장류를 찾아 더 빽빽한 숲을 누빕니다. 무산제 위의 고릴라 트레킹은 순치된 가족과 함께하는, 엄격하게 규제된 한 시간의 만남입니다. 골든몽키 트레킹은 셋 중 가장 활기차고 빠른 속도로, 대나무 숲을 무대로 진행됩니다."
      },
      {
        q: "왜 이 일정에는 키부 호수 보트 이동이 포함되나요?",
        a: "두 트레킹 지역 사이의 의도적인 휴지기입니다 — 단순한 이동이 아니라 진정으로 쉬어가는 하루이자, 아프리카 대호수 중 한 곳을 건너는 경관 좋은 하루이기도 합니다."
      },
      {
        q: "요금에 포함되는 것과 포함되지 않는 것은 무엇인가요?",
        a: "포함: 전 국립공원 및 트레킹 퍼밋 요금, 전 일정의 차량·가이드·연료, 명시된 전 액티비티, 명시된 숙박 시설, 키갈리–카멤베 및 키갈리–잔지바르 항공편, 공항 이동. 미포함: 국제선 항공권, 비자 발급 비용, 여행자 보험, 팁, 개인 경비."
      },
      {
        q: "일정을 단축할 수 있나요, 아니면 12일 전체가 꼭 필요한가요?",
        a: "전체 일정은 두 절반 모두에 적절한 시간을 배정합니다 — 르완다 구간을 서두르면 퍼밋을 놓치거나 해변으로 넘어가기 전 그룹이 지칠 위험이 있고, 잔지바르를 단축하면 이 여정이 마무리로 설계된 휴식을 훼손합니다. 구체적인 시간 제약이 있으시면 담당 컨설턴트에게 문의해 주세요."
      },
      {
        q: "인원수에 따라 요금이 얼마나 달라지나요?",
        a: "차량, 가이드, 디젤 비용은 그룹 전체가 함께 부담하므로 참여 인원이 늘어날수록 1인당 요금은 낮아집니다 — 위의 요금표를 참고해 주세요."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "키갈리 도착",
        description: "키갈리에 도착해 첫날 저녁은 여유롭게 보내십시오 — 처음 방문하는 대부분의 여행자를 놀라게 하는, 깨끗하고 질서정연한 수도입니다.",
        accommodation: "Kigali Serena Hotel",
        meals: "석식",
        accommodationByTier: {
          reserve: {
            name: "Kigali Serena",
            image: "/images/lodges/kigali-serena.webp",
            amenities: [
              "pool",
              "restaurant",
              "wifi"
            ]
          }
        }
      },
      {
        day: 2,
        title: "키갈리에서 니웅궤 국립공원으로",
        description: "카멤베행 항공편이 긴 육로 이동을 대신해, 내일 트레킹에 앞서 숲 가까이에서 여유롭게 자리 잡을 수 있는 오후를 선사합니다.",
        accommodation: "Munazi Eco Lodge",
        meals: "전 식사",
        accommodationByTier: {
          reserve: {
            name: "Munazi Eco Lodge",
            image: "https://placehold.co/800x600/1C3A2A/D4A853?text=Munazi+Eco+Lodge",
            amenities: [
              "restaurant",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 3,
        title: "니웅궤에서의 침팬지 트레킹",
        description: "아프리카에서 가장 오래된 우림 중 한 곳을 가이드와 함께 걸으며 니웅궤의 침팬지 공동체를 찾아 나섭니다 — 마운틴고릴라보다 더 빠르게 움직이고 더 활발하게 소리 내는 만큼, 완전히 다른 트레킹의 리듬을 경험하게 됩니다.",
        accommodation: "Munazi Eco Lodge",
        meals: "전 식사",
        accommodationByTier: {
          reserve: {
            name: "Munazi Eco Lodge",
            image: "https://placehold.co/800x600/1C3A2A/D4A853?text=Munazi+Eco+Lodge",
            amenities: [
              "restaurant",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 4,
        title: "니웅궤 보트 투어와 무산제로 이동",
        description: "의도적으로 여유로운 하루입니다 — 무산제로 향하는 이동에 앞서 키부 호수를 가로지르는 보트 투어가 이어지며, 무산제는 비룽가 화산군의 그늘 아래 자리합니다.",
        accommodation: "Ingagi Lodge",
        meals: "전 식사",
        accommodationByTier: {
          reserve: {
            name: "Ingagi Lodge",
            image: "/images/lodges/ingagi-lodge.webp",
            amenities: [
              "view",
              "garden"
            ]
          }
        }
      },
      {
        day: 5,
        title: "고릴라 트레킹과 문화 교류",
        description: "트래커들이 숲속으로 앞장서 순치된 마운틴고릴라 가족을 찾아 나섭니다. 무리를 찾으면 엄격하게 규제된 한 시간 동안 실버백, 새끼를 안은 어미, 뛰노는 어린 개체들을 곁에서 지켜봅니다. 오후에는 지역 공동체와의 문화 교류가 이어집니다.",
        accommodation: "Ingagi Lodge",
        meals: "전 식사",
        accommodationByTier: {
          reserve: {
            name: "Ingagi Lodge",
            image: "/images/lodges/ingagi-lodge.webp",
            amenities: [
              "view",
              "garden"
            ]
          }
        }
      },
      {
        day: 6,
        title: "골든몽키 트레킹과 키갈리로 이동",
        description: "고릴라 트레킹보다 더 빠르고 활기찬 아침입니다 — 골든몽키는 대나무 캐노피를 빠르게 이동하므로, 트레킹은 인내심만큼이나 속도를 맞추는 일이 됩니다.",
        accommodation: "Kigali Serena",
        meals: "전 식사",
        accommodationByTier: {
          reserve: {
            name: "Kigali Serena",
            image: "/images/lodges/kigali-serena.webp",
            amenities: [
              "pool",
              "restaurant",
              "wifi"
            ]
          }
        }
      },
      {
        day: 7,
        title: "키갈리에서 잔지바르로",
        description: "키갈리에서 잔지바르로 향하는 비행이 여정의 모험적인 절반을 마무리하고 휴식의 절반을 엽니다.",
        accommodation: "Zanzibar Serena",
        meals: "조식",
        accommodationByTier: {
          reserve: {
            name: "Zanzibar Serena",
            image: "https://placehold.co/800x600/1C3A2A/D4A853?text=Zanzibar+Serena",
            amenities: [
              "pool",
              "beachfront",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 8,
        title: "스톤타운 투어",
        description: "스톤타운의 구불구불한 골목길, 스파이스 마켓, 스와힐리-아랍 건축을 둘러보는 아침 이후 해변으로 향합니다.",
        accommodation: "Nungwi Dreams By Mantis",
        meals: "조식",
        accommodationByTier: {
          reserve: {
            name: "Nungwi Dreams By Mantis",
            image: "/images/lodges/nungwi-dreams-by-mantis.webp",
            amenities: [
              "restaurant",
              "beachfront"
            ]
          }
        }
      },
      {
        day: 9,
        title: "해변에서의 휴식",
        description: "일정에 아무것도 없는 온전한 3일 중 첫날입니다. 해변만이 전부입니다.",
        accommodation: "Nungwi Dreams By Mantis",
        meals: "조식",
        accommodationByTier: {
          reserve: {
            name: "Nungwi Dreams By Mantis",
            image: "/images/lodges/nungwi-dreams-by-mantis.webp",
            amenities: [
              "restaurant",
              "beachfront"
            ]
          }
        }
      },
      {
        day: 10,
        title: "해변에서의 휴식",
        description: "잔지바르 백사장 해안에서 보내는 두 번째 온전한 자유의 날입니다.",
        accommodation: "Nungwi Dreams By Mantis",
        meals: "조식",
        accommodationByTier: {
          reserve: {
            name: "Nungwi Dreams By Mantis",
            image: "/images/lodges/nungwi-dreams-by-mantis.webp",
            amenities: [
              "restaurant",
              "beachfront"
            ]
          }
        }
      },
      {
        day: 11,
        title: "해변에서의 휴식",
        description: "마지막 온전한 해변의 날입니다 — 리프 다이빙, 석양 다우선 항해, 혹은 그저 아무것도 하지 않으셔도 좋습니다.",
        accommodation: "Nungwi Dreams By Mantis",
        meals: "조식",
        accommodationByTier: {
          reserve: {
            name: "Nungwi Dreams By Mantis",
            image: "/images/lodges/nungwi-dreams-by-mantis.webp",
            amenities: [
              "restaurant",
              "beachfront"
            ]
          }
        }
      },
      {
        day: 12,
        title: "출발",
        description: "귀국 국제선 연결을 위해 잔지바르 공항으로 이동합니다.",
        accommodation: "해당 없음",
        meals: "조식"
      }
    ]
  },
  {
    slug: "4-day-rwanda-gorilla-trekking",
    name: "르완다 고릴라 트레킹 4일",
    duration: 4,
    destinations: [
      "volcanoes",
      "kigali"
    ],
    type: "wildlife",
    priceFrom: 3414.58,
    groupSize: {
      min: 1,
      max: 8
    },
    bestFor: [
      "couples",
      "solo",
      "wildlife-enthusiasts"
    ],
    overview: [
      "사람들은 이곳을 '천 개의 언덕의 나라'라 부르며, 여러분의 차량이 무산제 위쪽 안개 속으로 올라갈 즈음이면 왜 그 이름조차 이 나라를 다 담아내지 못하는지 이해하시게 될 것입니다. 르완다는 손으로 계단식으로 다듬어 대를 이어 경작해 온 초록빛 산등성이를 겹겹이 접어 올리며, 지구상에 남은 가장 희귀하고 믿기 힘든 만남 중 하나를 품은 화산 산맥으로 꾸준히 솟아오릅니다. 평범한 아침을 보내는 마운틴고릴라 가족은, 그토록 먼 길을 달려와 함께 앉으려는 작고 놀란 인간들에게 조금도 개의치 않습니다.",
      "이것은 두 부분으로 이루어진 여정이며, 둘 다 중요합니다. 키갈리에서는 대학살 추모관을 걸으며, 이후 이 작은 나라가 스스로 선택해 온 모습에 변화된 자신을 발견하게 됩니다 — 세계 어디에서도 보기 드문 회복력과 화해의 이야기 중 하나입니다. 그런 다음 길은 북쪽으로 방향을 틀어 대나무 숲과 화산 봉우리로 들어가며, 그 어떤 사진으로도 온전히 준비할 수 없는 고릴라 가족과의 단 한 시간, 그리고 산을 공유하는 골든몽키와 함께하는 더욱 활기찬 다음 날 아침으로 이어집니다. 4일, 두 개의 잊지 못할 이야기, 그리고 그 크기가 주는 인상보다 훨씬 많은 것을 품은 작은 나라입니다.",
      "이 여행은 케냐나 탄자니아에서의 더 넓은 사파리 앞뒤에 붙이는 연장 일정으로도 아름답게 어우러집니다 — 실제로 많은 여행자분들이 더 긴 동아프리카 여정의 앞이나 뒤에 이 일정을 더하십니다."
    ],
    highlights: [
      "평생 기억에 남을 한 시간 — 새벽부터 가족을 따라온 트래커들이 여러분을 그들에게 안내하며, 만남 자체는 60분으로 제한되지만 그 짧은 시간이 이상하게도 충분하게 느껴집니다",
      "키갈리 대학살 추모관 — 쉽지 않은 아침이지만 반드시 필요한 시간이며, 이어지는 회복력의 이야기는 여행의 나머지를 바라보는 시각을 바꾸어 놓을 것입니다",
      "골든몽키 트레킹 — 고릴라 트레킹보다 빠르고 활기찬 사촌 격으로, 지구상 비룽가의 이 지역을 제외하고는 거의 어디에서도 볼 수 없습니다",
      "화산 국립공원 그 자체 — 사파리 지도 어디에도 없는 듯한 대나무 숲과 화산 봉우리",
      "사전에 확보하고 확정한 단일 입장 고릴라 퍼밋 — 르완다는 일일 퍼밋 수를 엄격히 제한하며, 이 일정은 하나를 확보하는 것을 중심으로 설계되었습니다",
      "케냐나 탄자니아와도 손쉽게 조합 가능 — 더 긴 동아프리카 사파리에 사전 또는 사후 연장 일정으로 추가하실 수 있습니다"
    ],
    heroImage: "/images/gallery/rwanda-mountain-gorilla.jpg",
    heroImageAlt: "Mountain gorilla resting with its chin on its arm amid Rwanda's forest foliage",
    gallery: [
      {
        src: "/images/gallery/rwanda-virunga-hills.webp",
        alt: "Silhouetted trees and rolling hills at golden sunset in the Virunga foothills, Rwanda"
      },
      {
        src: "/images/gallery/lake-kivu.webp",
        alt: "Beach loungers and umbrellas along the sandy shore of Lake Kivu, Rwanda"
      }
    ],
    pricingTiersProvisional: false,
    pricingTiers: [
      {
        pax: 2,
        trail: 3906.25
      },
      {
        pax: 3,
        trail: 3590.42
      },
      {
        pax: 4,
        trail: 3506.25
      },
      {
        pax: 5,
        trail: 3432.5
      },
      {
        pax: 6,
        trail: 3414.58
      }
    ],
    included: [
      "전 이동",
      "키갈리 대학살 추모관 입장료",
      "단일 입장 고릴라 트레킹 퍼밋",
      "골든몽키 트레킹 퍼밋",
      "명시된 숙박",
      "명시된 식사"
    ],
    excluded: [
      "키갈리행 국제선 항공권",
      "비자",
      "여행자 보험",
      "사례비",
      "개인 경비"
    ],
    notes: [
      "표시된 요금은 더블/트윈룸 2인 공유 기준 1인당 요금입니다. 싱글룸 이용 시 추가 요금이 발생합니다.",
      "고릴라 및 골든몽키 트레킹 퍼밋은 르완다 개발청이 사전에 배정하는 제한된 퍼밋 기반 액티비티입니다.",
      "숙박 시설 및 요금은 예약 가능 여부에 따라 달라지며, 정확한 여행 날짜에 따라 변동될 수 있습니다.",
      "르완다 국립공원 및 보호구역 요금은 정부가 책정하며 사전 통보 없이 변경될 수 있습니다."
    ],
    faq: [
      {
        q: "고릴라 트레킹은 체력적으로 얼마나 힘든가요?",
        a: "날마다 다릅니다 — 트래커가 먼저 고릴라의 전날 밤 위치를 파악하므로, 하이크 자체는 30분처럼 짧을 수도 있고 가파르고 때로는 진흙투성이인 숲 지형을 몇 시간씩 걸을 수도 있습니다. 어느 정도의 체력이 도움이 되며, 등반에 추가 지원이 필요한 분을 위해 현지에서 포터를 고용하실 수도 있습니다."
      },
      {
        q: "고릴라 퍼밋은 왜 이렇게 비싼가요?",
        a: "르완다는 일일 방문객 수를 제한하고 보전 및 밀렵 방지 활동에 직접 자금을 지원하기 위해 의도적으로 퍼밋 가격을 책정하고 수를 제한합니다 — 이 모델은 마운틴고릴라를 개체 수가 증가하는 몇 안 되는 유인원 개체군 중 하나로 만드는 데 크게 기여한 것으로 널리 평가받습니다."
      },
      {
        q: "고릴라와 얼마나 가까이, 얼마나 오래 함께할 수 있나요?",
        a: "트래커가 가족을 찾으면, 그룹은 엄격히 규정된 한 시간을 그들 곁에서 보냅니다. 고릴라가 스스로 다가오는 경우를 제외하면 예의를 지키는 최소 거리가 유지됩니다."
      },
      {
        q: "골든몽키 트레킹은 포함되어 있나요, 아니면 선택인가요?",
        a: "포함되어 있습니다 — 이 일정의 4일 차에는 고릴라 트레킹보다 가볍고 빠른 속도의 대응 체험으로 짜여 있습니다."
      },
      {
        q: "요금에 포함된 것과 별도로 준비해야 하는 것은 무엇인가요?",
        a: "포함 사항: 전 이동, 키갈리 대학살 추모관 입장료, 단일 입장 고릴라 트레킹 퍼밋, 골든몽키 트레킹 퍼밋, 명시된 숙박, 명시된 식사입니다. 미포함 사항: 키갈리행 국제선 항공권, 비자, 여행자 보험, 사례비, 개인 경비입니다."
      },
      {
        q: "다른 목적지와 연장하거나 조합할 수 있나요?",
        a: "네 — 이 여행은 고릴라와 더 넓은 동아프리카 여정을 조합하고 싶은 여행자를 위해 케냐나 탄자니아에서의 더 긴 사파리 앞뒤에 붙이는 연장 일정으로도 아름답게 어우러집니다. 담당 컨설턴트에게 이 프로그램의 연장에 대해 문의해 주세요."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "키갈리 도착",
        description: "키갈리에 착륙해 호텔로 이동합니다. 키갈리 세레나에서 1박하며, 여행이 북쪽으로 방향을 틀기 전 편안하고 중심에 위치한 거점입니다.",
        accommodation: "Kigali Serena",
        meals: "석식",
        accommodationByTier: {
          trail: {
            name: "Kigali Serena",
            image: "/images/lodges/kigali-serena.webp",
            amenities: [
              "wifi",
              "pool",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 2,
        title: "키갈리 대학살 추모관에서 화산 국립공원으로",
        description: "아침에는 키갈리 대학살 추모관을 방문합니다 — 쉽지 않은 정류장이지만, 지금 여러분이 지나고 있는 르완다를 이해하는 데 반드시 필요한 시간입니다. 키갈리에서 따뜻한 점심을 즐긴 뒤, 비룽가 화산의 산기슭으로 북상합니다. 잉가기 로지에서 1박하며, 내일 이른 출발을 위해 공원 게이트에서 가까운 위치입니다.",
        accommodation: "Ingagi Lodge",
        meals: "전 식사",
        accommodationByTier: {
          trail: {
            name: "Ingagi Lodge",
            image: "/images/lodges/ingagi-lodge.webp",
            amenities: [
              "restaurant",
              "garden"
            ]
          }
        }
      },
      {
        day: 3,
        title: "고릴라 트레킹, 화산 국립공원",
        description: "이 여행이 중심으로 삼는 하루입니다. 트래커들이 새벽에 숲으로 들어가 고릴라 가족을 찾고, 여러분의 그룹이 그 뒤를 따릅니다 — 그룹이 이동한 위치에 따라 대나무와 산악림을 30분에서 몇 시간까지 하이킹하게 됩니다. 가족을 찾으면, 엄격히 규정된 한 시간을 그들 곁에서 보내게 됩니다: 실버백, 새끼를 안은 어미, 야생 고릴라 가족이 하루를 서두르지 않고 보내는 모습 — 손을 뻗으면 닿을 듯 가까운 거리에서 지켜보는 것이 도무지 믿기지 않는 경험입니다.",
        accommodation: "Ingagi Lodge",
        meals: "전 식사",
        insiderFact: "르완다는 고릴라 가족당 하루 방문객 수를 제한하기 위해 트레킹 퍼밋을 제한합니다 — 성수기에는 충분히 미리 예약하는 것이 필수입니다.",
        accommodationByTier: {
          trail: {
            name: "Ingagi Lodge",
            image: "/images/lodges/ingagi-lodge.webp",
            amenities: [
              "restaurant",
              "garden"
            ]
          }
        }
      },
      {
        day: 4,
        title: "골든몽키 익스피리언스 & 출발",
        description: "다른 숲, 다른 리듬입니다 — 골든몽키는 빠르게 움직이며 대나무 캐노피 높은 곳에 머무르므로, 이들을 추적하는 것은 고릴라 트레킹보다 더 활기차고 에너지 넘치는 아침이 됩니다. 다음 항공편을 위해 키갈리로 돌아갑니다.",
        accommodation: "해당 없음",
        meals: "조식"
      }
    ]
  },
  {
    slug: "5-day-gombe-chimpanzee-trekking",
    name: "프라이빗 곰베 침팬지 트레킹 5일",
    duration: 5,
    destinations: [
      "gombe"
    ],
    type: "wildlife",
    priceFrom: 4206.25,
    groupSize: {
      min: 1,
      max: 6
    },
    bestFor: [
      "couples",
      "solo",
      "wildlife-enthusiasts"
    ],
    metaTitle: "프라이빗 곰베 침팬지 트레킹 5일 | 탄자니아 럭셔리 어드벤처",
    metaDescription: "곰베 스트림에서 야생 침팬지를 추적하는 프라이빗 가이드 동반 원정 — 아프리카에서 가장 희귀한 야생동물 만남 중 하나입니다. 5일, 1인당 $4,206.25부터.",
    overview: [
      "탕가니카 호수 동쪽 기슭에는 인간과 동물의 경계가 거의 사라지는 숲이 있습니다. 바로 곰베입니다 — 약 35km²(13.5 sq mi)로 탄자니아에서 가장 작은 국립공원이며, 젊은 제인 구달이 침팬지가 나뭇가지의 잎을 벗겨내 흰개미 언덕에서 흰개미를 낚아 올리는 모습을 처음 관찰하고, 우리와 가장 가까운 살아 있는 친척에 대한 과학의 이해를 다시 쓴 바로 그곳입니다. 지금부터 5일 후, 여러분은 그녀가 서 있던 바로 그 자리에 서 있을 수 있습니다.",
      "이곳까지 가는 여정 자체가 이야기의 일부이며, 이 체험을 진정으로 독점적으로 만들어 주는 요소이기도 합니다. 곰베에는 도로가 닿지 않습니다 — 지난 60년간 그래왔듯, 모든 방문은 프라이빗 보트로 이루어지며, 그 자체로 침묵을 품은 듯 맑은 물을 건너갑니다. 이 공원의 숲으로 뒤덮인 능선은 해발 773m(2,536ft)의 호숫가에서 가장 높은 지점 약 1,500m(4,921ft)까지 솟아 있습니다 — 좁고 가파른 이 야생지대는 자연스럽게, 그리고 영구적으로 방문객 수를 낮게 유지합니다. 공원 안에는 로지가 단 하나뿐입니다. 이는 규모를 확장한 체험이 아니라, 단 하나뿐인 체험입니다.",
      "이 일정은 다르에스살람, 키고마, 곰베를 서두르지 않는 5일 안에 엮어내며, 프라이빗 이동과 새벽의 침팬지 추적 두 번의 온전한 아침을 중심으로 전적으로 설계되었습니다. 과장 없이, 지구상에 남은 가장 희귀하고 특별한 야생동물 만남 중 하나이며, 공원 자체가 허락하지 않기에 아무리 많은 돈으로도 더 붐비게 만들 수 없는 몇 안 되는 체험 중 하나입니다."
    ],
    highlights: [
      "새벽에 침팬지를 추적하는 온전한 이틀 — 급하게 지나치는 아침 한 번이 아니라, 공동체가 밤새 이동해 좀처럼 같은 자리에 두 번 잠자리를 잡지 않기에 강렬한 만남을 위한 진짜 두 번의 기회입니다",
      "지구상에서 가장 순치된 야생 침팬지 개체군 중 일부 — 60년에 걸친 지속적인 연구 활동 덕분에 야생에서 침팬지를 추적하는 거의 그 어느 곳보다도 더 가깝고 차분한 만남이 가능합니다",
      "제인 구달이 서 있던 바로 그 자리에 서기 — 곰베는 영장류 현장 연구의 발상지이며, 여러분이 걷게 될 숲길은 그녀의 초기 연구가 이루어진 바로 그 길입니다",
      "이름뿐 아니라 본질적으로도 원정입니다 — 곰베에는 도로가 닿지 않습니다. 탕가니카 호수를 건너는 모든 이동은 프라이빗 보트로 이루어지며, 전적으로 여러분의 일정에 맞춰 조율됩니다",
      "마케팅상의 표현이 아니라 구조적으로 독점적입니다 — 공원 안에 로지가 단 하나뿐이고 보트로만 접근 가능하므로, 곰베는 가격이 아닌 지리로 스스로 방문객 수를 제한합니다",
      "전 일정 프라이빗 차량, 가이드, 보트 — 공유 이동도, 정해진 출발 시간도, 다른 여행자의 일정을 기다릴 일도 없습니다"
    ],
    heroImage: "/images/gallery/gombe-stream.webp",
    heroImageAlt: "Chimpanzees resting on a moss-covered log in Gombe Stream's forest",
    gallery: [
      {
        src: "/images/gallery/chimpanzees-resting-mossy-log-gombe.jpg",
        alt: "Chimpanzees resting together on a moss-covered log in Gombe Stream National Park"
      }
    ],
    pricingTiersProvisional: false,
    pricingTiers: [
      {
        pax: 2,
        trail: 4206.25
      },
      {
        pax: 3,
        trail: 3769.17
      },
      {
        pax: 4,
        trail: 3550.63
      },
      {
        pax: 5,
        trail: 3419.5
      },
      {
        pax: 6,
        trail: 3332.08
      }
    ],
    included: [
      "전 프라이빗 이동",
      "다르에스살람-키고마 왕복 항공편",
      "국립공원 및 침팬지 트레킹 입장료",
      "Mbalimbali Gombe Tented Camp에서의 풀보드",
      "명시된 전 숙박"
    ],
    excluded: [
      "다르에스살람행 국제선 항공권",
      "비자",
      "여행자 보험",
      "사례비",
      "개인 경비"
    ],
    notes: [
      "표시된 요금은 더블/트윈룸 2인 공유 기준 1인당 요금입니다. 단독 여행자는 싱글 추가 요금이 발생합니다 — 담당 컨설턴트에게 솔로 요금을 문의해 주세요.",
      "프라이빗 차량, 가이드, 보트 이동 비용은 그룹 전체가 함께 부담하므로 인원이 늘어날수록 1인당 요금은 낮아집니다.",
      "숙박 시설 및 요금은 예약 가능 여부에 따라 달라지며, 정확한 여행 날짜에 따라 변동될 수 있습니다.",
      "탄자니아 국립공원 및 보호구역 입장료는 정부가 책정하며 사전 통보 없이 변경될 수 있습니다."
    ],
    faq: [
      {
        q: "침팬지 트레킹은 체력적으로 얼마나 힘든가요?",
        a: "트레킹은 가파르고 고르지 않을 수 있는 숲길을 따라 호수 높이 773m(2,536ft)에서 능선 인근 1,500m(4,921ft)까지 오르며 진행됩니다. 침팬지를 찾아 걷는 시간은 공동체가 밤새 이동한 위치에 따라 30분에서 몇 시간까지 다양합니다. 어느 정도의 체력이 도움이 되지만, 이는 모험적인 트레킹이지 기술적이거나 극한의 트레킹은 아닙니다 — 전반적으로 건강한 대부분의 여행자가 무리 없이 소화하십니다."
      },
      {
        q: "트레킹에 최소 연령이 있나요?",
        a: "있습니다. 이는 공원 당국이 정한 기준으로 변경될 수 있으므로, 예약 시 담당 사파리 컨설턴트에게 현재 연령 기준을 확인해 주세요."
      },
      {
        q: "침팬지와 얼마나 가까이, 얼마나 오래 함께할 수 있나요?",
        a: "가이드가 무리를 찾으면, 그들 곁에서 최대 한 시간을 보내게 됩니다 — 고릴라 트레킹과 동일한 시간 제한이며, 이유도 같습니다: 야생 개체군에 대한 스트레스를 최소화하기 위해서입니다. 침팬지의 이동에 따라 거리는 자연스럽게 달라지지만, 곰베에서의 관찰은 아프리카 그 어느 침팬지 트레킹 목적지보다 가까운 편입니다."
      },
      {
        q: "트레킹 전에 지켜야 할 건강 수칙이 있나요?",
        a: "네. 침팬지는 인간 DNA의 약 99%를 공유하고 있어 인간의 호흡기 질환에 매우 취약합니다. 따라서 감기나 독감 증상이 있는 분은 해당 날짜의 트레킹이 제한되며, 무리와 가까운 거리에서는 마스크 착용이 필수입니다."
      },
      {
        q: "곰베를 방문하기 가장 좋은 시기는 언제인가요?",
        a: "건기(대략 6월~10월)에는 가장 수월한 트레킹 조건과 가장 선명한 숲의 시야를 제공합니다. 트레킹은 연중 가능하지만, 우기의 트레일은 더 가파르게 느껴질 수 있습니다."
      },
      {
        q: "곰베까지는 어떻게 가나요 — 도로가 있나요?",
        a: "없습니다. 곰베에는 도로가 닿지 않습니다. 모든 방문은 키고마에서 출발하는 프라이빗 보트로 이루어지며, 이 일정에도 처음부터 그 경로가 반영되어 있습니다."
      },
      {
        q: "혼자 여행하는 경우에도 적합한가요?",
        a: "네, 다만 위 요금은 2인 공유 기준으로 안내되어 있으며, 단독 여행자는 숙박에 싱글 추가 요금이 발생합니다. 담당 컨설턴트에게 솔로 요금을 문의해 주세요."
      },
      {
        q: "요금에 포함된 것과 포함되지 않은 것은 무엇인가요?",
        a: "포함 사항: 전 프라이빗 이동, 다르에스살람-키고마 왕복 항공편, 국립공원 및 침팬지 트레킹 입장료, Mbalimbali Gombe Tented Camp에서의 풀보드, 그리고 전 숙박입니다. 미포함 사항: 다르에스살람행 국제선 항공권, 비자, 여행자 보험, 사례비, 개인 경비입니다."
      },
      {
        q: "다른 공원과 조합하거나 일정을 연장할 수 있나요?",
        a: "네 — 곰베는 두 곳의 침팬지 트레킹 체험을 원하는 여행자를 위해 마할레 산맥과 자연스럽게 조합되거나, 남부 서킷 일정에 더할 수도 있습니다. 담당 컨설턴트에게 이 프로그램의 연장 또는 조합에 대해 문의해 주세요."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "다르에스살람 도착",
        description: "다르에스살람에 착륙해 앞으로의 여정을 위한 속도를 해안에서 잡아 봅니다.",
        accommodation: "Dar es Salaam Serena Hotel",
        meals: "석식",
        accommodationByTier: {
          trail: {
            name: "Dar es Salaam Serena Hotel",
            image: "/images/lodges/dar-es-salaam-serena-hotel-entrance-night.webp",
            amenities: [
              "pool",
              "restaurant",
              "wifi"
            ]
          }
        }
      },
      {
        day: 2,
        title: "서부로: 키고마에서 곰베 스트림으로",
        description: "프라이빗 전세기가 다르에스살람에서 키고마까지 여러분을 데려다줍니다 — 철도와 호숫가 교역소 시절의 정취가 여전히 남아 있는 마을입니다. 그곳에서부터는 여정이 물로 바뀝니다 — 프라이빗 차량과 다우 보트로 탕가니카 호수를 건너 곰베 스트림까지 이동합니다.",
        accommodation: "Mbalimbali Gombe Tented Camp",
        meals: "풀보드(전 식사 포함)",
        insiderFact: "곰베에는 도로가 닿지 않습니다 — 지난 60년간 그래왔듯, 모든 방문은 프라이빗 보트로 이루어집니다.",
        accommodationByTier: {
          trail: {
            name: "Mbalimbali Gombe Tented Camp",
            image: "/images/lodges/mbalimbali-gombe-tented-camp.webp",
            amenities: [
              "wildlife-view",
              "ensuite"
            ]
          }
        }
      },
      {
        day: 3,
        title: "침팬지와 함께하는 온전한 하루",
        description: "이 원정 전체가 중심으로 삼는 하루입니다. 트레킹은 새벽에 시작되며, 호숫가에서 위쪽 숲의 능선으로 꾸준히 오르는 트레일을 따라, 이 지형과 이 공동체를 손바닥 보듯 아는 가이드와 함께합니다. 침팬지를 발견하면 — 그리고 지구상 그 어느 야생 개체군보다도 순치된 곰베의 침팬지들은 발견되는 경우가 그렇지 않은 경우보다 훨씬 많습니다 — 그들 곁에서 흔치 않고 서두르지 않는 한 시간을 보내게 됩니다.",
        accommodation: "Mbalimbali Gombe Tented Camp",
        meals: "풀보드(전 식사 포함)",
        insiderFact: "젊은 제인 구달은 1960년 바로 이 숲에서 획기적인 연구를 시작했습니다 — 여러분이 걷게 될 트레일은 그녀의 초기 연구가 이루어진 바로 그 길입니다.",
        accommodationByTier: {
          trail: {
            name: "Mbalimbali Gombe Tented Camp",
            image: "/images/lodges/mbalimbali-gombe-tented-camp.webp",
            amenities: [
              "wildlife-view",
              "ensuite"
            ]
          }
        }
      },
      {
        day: 4,
        title: "키고마로 복귀",
        description: "물을 다시 건너 키고마로 돌아갑니다. 숲과 그곳의 침팬지들은 이제 뒤에 남았지만 잊히지 않습니다.",
        accommodation: "Kigoma Hilltop",
        meals: "풀보드(전 식사 포함)",
        insiderFact: "키고마 힐탑은 지구상에서 가장 깊은 담수호 중 하나인 탕가니카 호수를 되짚어보는 탁 트인 전망을 자랑합니다.",
        accommodationByTier: {
          trail: {
            name: "Kigoma Hilltop",
            image: "/images/lodges/kigoma-hilltop.webp",
            amenities: [
              "view",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 5,
        title: "키고마에서 다르에스살람으로",
        description: "공항으로의 마지막 이동과 다르에스살람 줄리어스 니에레레 국제공항으로 돌아가는 항공편입니다.",
        accommodation: "해당 없음",
        meals: "조식"
      }
    ]
  },
  {
    slug: "12-day-seniors-anniversary-groups-safari",
    name: "시니어, 기념일 여행, 그룹을 위한 탄자니아 12일 사파리",
    duration: 12,
    destinations: [
      "arusha",
      "tarangire",
      "ngorongoro",
      "serengeti"
    ],
    type: "wildlife",
    priceFrom: 6036.46,
    groupSize: {
      min: 2,
      max: 6
    },
    bestFor: [
      "couples",
      "families",
      "wildlife-enthusiasts"
    ],
    metaTitle: "시니어, 기념일 여행, 그룹을 위한 탄자니아 12일 사파리",
    metaDescription: "시니어 여행객, 기념일을 맞은 커플, 그룹을 위해 설계된 여유로운 속도의 프라이빗 탄자니아 12일 사파리 — 웨스트 킬리만자로, 타랑기레, 응고롱고로, 세렝게티를 둘러봅니다. 1인당 $6,036부터.",
    overview: [
      "모든 사파리가 가치 있으려면 빠르게 움직여야 하는 것은 아닙니다. 이 12일 일정은 다른 전제 위에 세워졌습니다 — 하룻밤만 머무는 경유지를 줄이고, 각 장소에서 더 많은 시간을 보내며, 야생동물만큼이나 페이스 배분 자체를 기준으로 선택된 루트입니다. 여정은 웨스트 킬리만자로 고원에서 시작됩니다 — 본격적인 게임 드라이브가 시작되기 훨씬 전, 걷는 속도로 즐기는 자연 산책과 진정성 있는 마사이족 문화 체험이 먼저 기다리고 있습니다 — 이후 아루샤 국립공원, 타랑기레, 응고롱고로 크레이터를 거쳐 세렝게티에서 느긋한 3박을 보내고, 긴 귀환 드라이브 대신 짧은 비행으로 아루샤로 돌아오며 마무리됩니다.",
      "이 일정은 일반적인 사파리 소개 페이지에서는 좀처럼 직접적으로 다뤄지지 않는 세 부류의 여행객 모두에게 똑같이 잘 어울립니다. 장거리 이동일이 연이어지지 않으면서도 탄자니아를 온전히 경험하고 싶은 시니어 여행객, 국립공원을 서둘러 훑는 체크리스트 여행이 아니라 아름답고 조용한 환경에서 진짜 함께하는 시간을 원하는 기념일 커플, 그리고 나이나 체력에 관계없이 함께 여행하는 모든 사람에게 편안한 페이스로 짜인 일정에서 혜택을 얻는 친구 모임, 대가족, 또는 다세대 여행과 같은 그룹입니다. 윌더니스 리저브와 윌더니스 소버린, 두 등급으로 이용 가능하며 두 등급 모두 동일한 12일 루트를 따르되 캠프와 롯지의 수준이 달라집니다."
    ],
    highlights: [
      "더 여유로운 시작 — 웨스트 킬리만자로 고원에서 2박을 보내며, 게임 드라이브의 속도가 빨라지기 전에 가이드 동반 자연 산책과 진정성 있는 마사이족 문화 체험을 즐깁니다",
      "하룻밤씩 이어지는 경유가 아닌, 2박·3박의 여러 체류 — 매일 아침 짐을 다시 싸는 대신 각 장소에 진짜로 자리 잡을 시간",
      "아루샤 국립공원의 가이드 동반 도보 사파리 — 탄자니아에서 도보로 사파리를 즐길 수 있는 몇 안 되는 공원 중 하나를, 느긋하고 여유로운 속도로",
      "약 260제곱킬로미터(100제곱마일)에 달하는, 야생동물이 풍부한 폐쇄형 칼데라 응고롱고로 크레이터에서의 하루 전체 — 힘든 하강이 아니라 차량으로 도달",
      "세렝게티에서의 온전한 3박 — 평원을 하루에 압축하는 대신 여정에 숨 쉴 여유를 더합니다",
      "긴 귀환 드라이브 대신 아루샤로 돌아오는 비행편 — 그렇지 않으면 6시간 이상 걸릴 귀환길을 1시간도 채 안 되는 비행으로",
      "여유롭고 세심한 수준부터 진정으로 탁월한 수준까지, 모든 편안함의 단계를 갖추었으며 루트 자체는 단 하루도 달라지지 않습니다"
    ],
    heroImage: "/images/gallery/maasai-warriors-jumping-dance-boma.jpg",
    heroImageAlt: "Maasai warriors in traditional red shuka performing the adumu jumping dance beside a boma",
    gallery: [
      {
        src: "/images/gallery/giraffe-walking-savanna-dusk.webp",
        alt: "Lone giraffe walking across the savanna grassland at dusk"
      },
      {
        src: "/images/gallery/tarangire-elephants-baobab.webp",
        alt: "Two elephants with tusks foraging together in tall grass in Tarangire National Park"
      }
    ],
    pricingTiersProvisional: false,
    pricingTiers: [
      {
        pax: 2,
        reserve: 7399.38,
        sovereign: 11080.63
      },
      {
        pax: 3,
        reserve: 6717.92,
        sovereign: 10399.17
      },
      {
        pax: 4,
        reserve: 6377.19,
        sovereign: 10004.69
      },
      {
        pax: 5,
        reserve: 6172.75,
        sovereign: 10067.75
      },
      {
        pax: 6,
        reserve: 6036.46,
        sovereign: 9717.71
      }
    ],
    included: [
      "모든 국립공원, 컨세션, 보전구역 입장료",
      "매일 제공되는 차량, 가이드, 연료",
      "전 일정 식사",
      "일정표에 명시된 숙박시설",
      "세로네라-아루샤 구간 항공편",
      "공항 송영"
    ],
    excluded: [
      "국제선 항공권",
      "비자 발급 비용",
      "여행자 보험",
      "팁",
      "개인 경비"
    ],
    notes: [
      "표시된 요금은 더블/트윈 룸을 2인이 함께 사용하는 것을 기준으로 한 1인당 요금입니다. 싱글룸 이용 시 별도의 싱글 서플먼트 요금이 요청에 따라 적용됩니다.",
      "소버린 등급 5인 요금에 대한 참고 사항: 4인 요금보다 다소 높게 책정되어 있는데, 이는 요금 오류가 아니라 해당 인원 수에서 발생하는 객실 구성 단계 변화를 반영한 것입니다.",
      "이 일정에는 AMREF 플라잉 닥터스 응급 후송 보장이 기본으로 포함되어 있으나, 특히 연령대가 높은 여행객의 경우 포괄적인 개인 여행자 보험 가입을 여전히 권장합니다.",
      "숙박시설 및 요금은 예약 가능 여부에 따라 달라지며, 동일 시즌 내에서도 정확한 여행 날짜에 따라 변동될 수 있습니다.",
      "탄자니아 국립공원 및 보전구역 입장료는 정부가 책정하며 사전 통지 없이 변경될 수 있습니다."
    ],
    faq: [
      {
        q: "이 사파리는 체력적으로 힘든가요?",
        a: "느긋한 도보 속도 이상의 체력을 요구하지 않습니다. 게임 드라이브는 앉은 채로 진행되며, 크레이터는 전적으로 차량으로 이동하고, 두 가지 도보 활동(웨스트 킬리만자로와 아루샤 국립공원)은 대부분의 체력 수준에 적합한 느긋하고 여유로운 속도로 가이드가 안내합니다. 예약 시 구체적인 이동성 관련 사항을 상담사에게 알려주시면 일정을 추가로 조정해 드릴 수 있습니다."
      },
      {
        q: "기념일이나 특별한 축하 여행으로 적합한가요?",
        a: "매우 적합합니다 — 이 페이스 배분 자체가 축하 여행으로서 잘 맞는 이유 중 하나입니다. 저녁을 즐기기에는 너무 지쳐버리는 일정이 아니라, 각 장소에서 진짜로 함께하는 시간을 보낼 수 있습니다. 특별히 기념하실 일이 있다면 상담사에게 알려주세요. 작은 이벤트를 준비해 드릴 수 있습니다."
      },
      {
        q: "이 일정에서 그룹 여행은 어떻게 진행되나요?",
        a: "이 루트와 페이스 배분은 그룹 여행에 특히 적합합니다. 일행 중 누구에게도 유난히 힘든 날이 없기 때문입니다. 차량과 가이드 비용도 그룹 전체가 분담하므로, 참여 인원이 늘어날수록 1인당 요금이 낮아집니다 — 위의 요금표를 참고해 주세요."
      },
      {
        q: "요금에 포함되는 것과 포함되지 않는 것은 무엇인가요?",
        a: "포함 사항: 모든 국립공원, 컨세션, 보전구역 입장료, 매일 제공되는 차량·가이드·연료, 전 일정 식사, 일정표에 명시된 숙박시설, 세로네라-아루샤 구간 항공편, 공항 송영. 불포함 사항: 국제선 항공권, 비자 발급 비용, 여행자 보험, 팁, 개인 경비."
      },
      {
        q: "의료 후송이 포함된 여행자 보험이 필요한가요?",
        a: "네, 어떤 사파리든 반드시 권장드립니다. 이 일정에는 AMREF 플라잉 닥터스 응급 후송 보장이 기본으로 포함되어 있지만, 특히 연령대가 높은 여행객의 경우 기왕증을 보장하는 포괄적인 개인 여행자 보험을 별도로 준비하시는 것이 여전히 좋습니다."
      },
      {
        q: "해변 연장 일정과 결합할 수 있나요?",
        a: "네 — 많은 여행객이 이 사파리 이후 잔지바르에서 며칠간 편안한 시간을 보내는 일정을 추가합니다. 두 등급 모두에 해변 연장 일정을 추가하는 방법은 상담사에게 문의해 주세요."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "아루샤 도착",
        description: "킬리만자로 국제공항에 도착하여 서두르지 않는 첫날 밤을 보내세요.",
        accommodation: "아루샤 (등급별로 상이)",
        meals: "석식",
        accommodationByTier: {
          reserve: {
            name: "Kahawa House",
            image: "/images/lodges/kahawa-house.webp",
            amenities: [
              "wifi",
              "restaurant",
              "garden"
            ]
          },
          sovereign: {
            name: "Arusha Coffee Lodge",
            image: "/images/lodges/arusha-coffee-lodge-garden-path.webp",
            amenities: [
              "wifi",
              "pool",
              "view"
            ]
          }
        }
      },
      {
        day: 2,
        title: "웨스트 킬리만자로로 이동",
        description: "킬리만자로 서쪽 고원 지대로 향하는 경치 좋은 드라이브로, 이 지역은 여전히 진정한 의미에서 일반적인 사파리 루트를 벗어난 곳입니다.",
        accommodation: "웨스트 킬리만자로 (등급별로 상이)",
        meals: "삼시세끼 포함",
        accommodationByTier: {
          reserve: {
            name: "Original Maasai Lodge",
            image: "/images/lodges/original-maasai-lodge.webp",
            amenities: [
              "restaurant",
              "garden"
            ]
          },
          sovereign: {
            name: "Original Maasai Lodge (Kisiwa Boma)",
            image: "/images/lodges/original-maasai-lodge.webp",
            amenities: [
              "restaurant",
              "garden",
              "view"
            ]
          }
        }
      },
      {
        day: 3,
        title: "웨스트 킬리만자로에서 보내는 하루",
        description: "야생동물 관리 구역을 가로지르는 가이드 동반 자연 산책과 진정성 있는 마사이족 문화 체험 — 서두르지 않고, 도보로, 그룹의 모든 구성원에게 맞는 속도로 진행됩니다.",
        accommodation: "웨스트 킬리만자로 (등급별로 상이)",
        meals: "삼시세끼 포함",
        insiderFact: "웨스트 킬리만자로 고원은 일반적인 북부 루트에서 진정으로 벗어난 곳으로, 이곳을 경유하는 여행사는 거의 없습니다.",
        accommodationByTier: {
          reserve: {
            name: "Original Maasai Lodge",
            image: "/images/lodges/original-maasai-lodge.webp",
            amenities: [
              "restaurant",
              "garden"
            ]
          },
          sovereign: {
            name: "Original Maasai Lodge (Kisiwa Boma)",
            image: "/images/lodges/original-maasai-lodge.webp",
            amenities: [
              "restaurant",
              "garden",
              "view"
            ]
          }
        }
      },
      {
        day: 4,
        title: "아루샤 국립공원으로 이동",
        description: "바로 이런 여유로운 아침을 위해 만들어진 듯한 공원까지 짧은 드라이브 — 기린, 콜로부스 원숭이, 그리고 탄자니아에서 몇 안 되는 도보 사파리 중 하나를 여유로운 속도로 즐길 수 있습니다.",
        accommodation: "아루샤 (등급별로 상이)",
        meals: "삼시세끼 포함",
        insiderFact: "아루샤 국립공원은 탄자니아에서 연중 가이드 동반 도보 사파리가 허용되는 몇 안 되는 공원 중 하나입니다.",
        accommodationByTier: {
          reserve: {
            name: "Kahawa House",
            image: "/images/lodges/kahawa-house.webp",
            amenities: [
              "wifi",
              "restaurant",
              "garden"
            ]
          },
          sovereign: {
            name: "Arusha Coffee Lodge",
            image: "/images/lodges/arusha-coffee-lodge-garden-path.webp",
            amenities: [
              "wifi",
              "pool",
              "view"
            ]
          }
        }
      },
      {
        day: 5,
        title: "타랑기레, 하루 종일",
        description: "타랑기레의 코끼리 무리와 수령이 천 년이 넘는 바오밥나무 사이에서 보내는 하루 전체.",
        accommodation: "타랑기레 (등급별로 상이)",
        meals: "삼시세끼 포함",
        insiderFact: "타랑기레는 건기 이외의 시기에도 아프리카에서 가장 높은 코끼리 밀도를 자랑하며, 건기에는 무리가 강 주변에 집중됩니다.",
        accommodationByTier: {
          reserve: {
            name: "Lake Burunge Baobab Tented Lodge",
            image: "/images/lodges/lake-burunge-baobab-tented-lodge.webp",
            amenities: [
              "restaurant",
              "garden"
            ]
          },
          sovereign: {
            name: "Siringit Serengeti Camp",
            image: "/images/lodges/siringiti-serengeti-camp.webp",
            amenities: [
              "wifi",
              "view",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 6,
        title: "므토와음부를 거쳐 카라투로",
        description: "응고롱고로 고원으로 향하는 길목의 시장 마을 므토와음부에서의 문화 체험 — 스쳐 지나가는 사진 촬영이 아니라, 이곳 주민들과 진솔하고 여유로운 만남을 가집니다.",
        accommodation: "카라투 (등급별로 상이)",
        meals: "삼시세끼 포함",
        accommodationByTier: {
          reserve: {
            name: "Ngorongoro Farm House",
            image: "/images/lodges/ngorongoro-farm-house.webp",
            amenities: [
              "restaurant",
              "garden"
            ]
          },
          sovereign: {
            name: "Gibb's Farm",
            image: "/images/lodges/gibbs-farm-cottage-exterior.webp",
            amenities: [
              "spa",
              "view",
              "organic-farm"
            ]
          }
        }
      },
      {
        day: 7,
        title: "응고롱고로 크레이터 투어",
        description: "크레이터 바닥의 폐쇄된 생태계를 온전히 차량으로 둘러보는 하루 — 아프리카에서 가장 밀도 높은 야생동물 집중 지역 중 하나를 체험하는 데 힘든 도보는 전혀 필요하지 않습니다.",
        accommodation: "카라투 (등급별로 상이)",
        meals: "삼시세끼 포함",
        insiderFact: "응고롱고로 크레이터는 약 260제곱킬로미터(100제곱마일) 규모의 폐쇄된 생태계로, 대부분의 서식 동물이 이곳을 떠나지 않습니다.",
        accommodationByTier: {
          reserve: {
            name: "Ngorongoro Farm House",
            image: "/images/lodges/ngorongoro-farm-house.webp",
            amenities: [
              "restaurant",
              "garden"
            ]
          },
          sovereign: {
            name: "Gibb's Farm",
            image: "/images/lodges/gibbs-farm-cottage-exterior.webp",
            amenities: [
              "spa",
              "view",
              "organic-farm"
            ]
          }
        }
      },
      {
        day: 8,
        title: "카라투에서 중부 세렝게티로",
        description: "세렝게티의 끝없는 평원으로 향하는 드라이브, 그리고 한 곳에서 보내는 3박 중 첫째 날 밤.",
        accommodation: "중부 세렝게티 (등급별로 상이)",
        meals: "삼시세끼 포함",
        accommodationByTier: {
          reserve: {
            name: "Kubukubu Tented Lodge",
            image: "/images/lodges/kubukubu-tented-lodge.webp",
            amenities: [
              "pool",
              "view",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Siringit Serengeti Camp",
            image: "/images/lodges/siringiti-serengeti-camp.webp",
            amenities: [
              "wifi",
              "view",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 9,
        title: "중부 세렝게티, 하루 종일",
        description: "결코 서두르지 않는 속도로 진행되는 하루 종일의 게임 드라이브 — 가이드가 그룹 전체를 위해 그날의 흐름을 읽어, 누구도 좋은 관찰 기회를 서둘러 지나치지 않도록 합니다.",
        accommodation: "중부 세렝게티 (등급별로 상이)",
        meals: "삼시세끼 포함",
        accommodationByTier: {
          reserve: {
            name: "Kubukubu Tented Lodge",
            image: "/images/lodges/kubukubu-tented-lodge.webp",
            amenities: [
              "pool",
              "view",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Siringit Serengeti Camp",
            image: "/images/lodges/siringiti-serengeti-camp.webp",
            amenities: [
              "wifi",
              "view",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 10,
        title: "중부 세렝게티, 하루 종일",
        description: "세로네라 계곡을 가로지르는 두 번째 하루 종일의 게임 드라이브.",
        accommodation: "중부 세렝게티 (등급별로 상이)",
        meals: "삼시세끼 포함",
        insiderFact: "세로네라의 연중 수원은 코피에스의 유명한 나무 등반 사자를 포함해 상주하는 대형 고양잇과 동물 개체군을 끌어들입니다.",
        accommodationByTier: {
          reserve: {
            name: "Kubukubu Tented Lodge",
            image: "/images/lodges/kubukubu-tented-lodge.webp",
            amenities: [
              "pool",
              "view",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Siringit Serengeti Camp",
            image: "/images/lodges/siringiti-serengeti-camp.webp",
            amenities: [
              "wifi",
              "view",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 11,
        title: "세렝게티에서 아루샤로",
        description: "세로네라 활주로에서 아루샤로 돌아오는 짧은 비행 — 같은 구간을 차로 이동하면 6시간 이상 걸리지만 비행으로는 1시간이 채 걸리지 않습니다.",
        accommodation: "아루샤 (등급별로 상이)",
        meals: "삼시세끼 포함",
        accommodationByTier: {
          reserve: {
            name: "Kahawa House",
            image: "/images/lodges/kahawa-house.webp",
            amenities: [
              "wifi",
              "restaurant",
              "garden"
            ]
          },
          sovereign: {
            name: "Arusha Coffee Lodge",
            image: "/images/lodges/arusha-coffee-lodge-garden-path.webp",
            amenities: [
              "wifi",
              "pool",
              "view"
            ]
          }
        }
      },
      {
        day: 12,
        title: "출발",
        description: "킬리만자로 국제공항으로 이동하며, 서두르지 않았던 12일간의 여정이 여러분과 함께 집으로 돌아갑니다.",
        accommodation: "N/A",
        meals: "조식"
      }
    ]
  },
  {
    slug: "7-day-photography-adventure-safari",
    name: "탄자니아 포토그래피 & 어드벤처 사파리 7일",
    duration: 7,
    destinations: [
      "tarangire",
      "ngorongoro",
      "serengeti"
    ],
    type: "wildlife",
    priceFrom: 4597.29,
    groupSize: {
      min: 1,
      max: 6
    },
    bestFor: [
      "solo",
      "couples",
      "wildlife-enthusiasts"
    ],
    metaTitle: "탄자니아 포토그래피 & 어드벤처 사파리 7일 | 타랑기레, 응고롱고로 & 은두투",
    metaDescription: "타랑기레, 응고롱고로 크레이터, 은두투 출산지를 거치는 프라이빗 가이드 동반 포토그래피 & 어드벤처 사파리. 사진작가와 진정성 있는 사파리를 찾는 여행객을 위한 일정으로, 1인당 $4,597부터.",
    overview: [
      "야생동물을 '보는 것'과 그것을 위한 '자리에 있는 것' 사이에는 차이가 있습니다 — 그리고 그 차이가 바로 이 일정 전체의 전제입니다. 세 가지 생태계를 아우르는 7일 여정으로, 각 장소는 단순히 그곳에 무엇이 사는지가 아니라 카메라와 함께, 혹은 진정한 호기심을 품고 무엇을 할 수 있는지를 기준으로 선택되었습니다. 수령 천 년이 넘는 바오밥나무 아래를 이동하는 타랑기레의 코끼리 무리, 마사이족 문화 체험과 시장 마을 므토와음부, 거의 3만 마리에 달하는 동물이 사는 응고롱고로 크레이터 폐쇄 세계로의 완전한 하강, 그리고 출산기 동안 하루에 최대 8,000마리의 누 새끼가 태어나는 은두투의 짧은 초원에서 보내는 3일 — 그 사실을 아는 모든 포식자가 그곳에 모여드는 시기입니다.",
      "이 일정은 서로 겹치는 두 부류의 여행객을 위해 만들어졌습니다. 지형을 읽듯이 빛과 동물의 행동을 세심하게 읽어주는 가이드를 원하는 사진작가, 그리고 여러 공원을 체크리스트처럼 서둘러 도는 대신 더 적은 장소에서 진짜 시간을 보내고 싶은 모험을 즐기는 여행객입니다. 윌더니스 리저브와 윌더니스 소버린, 두 등급으로 이용 가능하며 두 등급 모두 동일한 7일 루트를 따르되 캠프의 수준이 달라집니다."
    ],
    highlights: [
      "출산기에 맞춘 일정 — 은두투 평원에서 하루 최대 8,000마리의 누 새끼가 태어나며, 그에 걸맞은 포식자의 활동도 함께 볼 수 있습니다",
      "천 년 넘게 서 있는 바오밥나무를 배경으로, 타랑기레의 코끼리 무리와 함께하는 하루 전체",
      "마사이족 문화 체험과 므토와음부 시장 마을 — 야생동물 관찰 사이사이에 이어지는 진정성 있는 인간적 맥락으로, 각본에 짜인 정차가 아닙니다",
      "응고롱고로 크레이터의 모든 것 — 약 260제곱킬로미터(100제곱마일)의 폐쇄된 칼데라로, 지구상에서 가장 높은 야생동물 밀집도를 자랑하며 이 지역에서 검은코뿔소를 만날 확률이 가장 높습니다",
      "은두투 평원에서 보내는 3일 전체 — 장면이 그저 스쳐 지나가는 것이 아니라 실제로 펼쳐질 수 있는 충분한 시간",
      "그저 야생동물을 '찾는' 것이 아니라 자리를 지키는 가이드 — 차량은 다음 장면을 찾아 이동하는 대신 펼쳐지는 행동과 함께 머무릅니다",
      "안정적이고 세심한 수준부터 진정으로 탁월한 수준까지, 모든 편안함의 단계를 갖추었으며 루트 자체는 단 하루도 달라지지 않습니다"
    ],
    heroImage: "/images/gallery/ndutu-wildebeest-watering-hole.webp",
    heroImageAlt: "Wildebeest herds gathered around a watering hole in the Ndutu area of southern Serengeti",
    gallery: [
      {
        src: "/images/gallery/tarangire-elephants-baobab.webp",
        alt: "Two elephants with tusks foraging together in tall grass in Tarangire National Park"
      },
      {
        src: "/images/gallery/ngorongoro-crater-landscape.webp",
        alt: "Panoramic view of the Ngorongoro Crater floor with its soda lake and winding safari road, framed by the crater rim"
      }
    ],
    pricingTiersProvisional: false,
    pricingTiers: [
      {
        pax: 1,
        reserve: 7742.5,
        sovereign: 10160
      },
      {
        pax: 2,
        reserve: 5386.88,
        sovereign: 7249.38
      },
      {
        pax: 3,
        reserve: 4992.08,
        sovereign: 6854.58
      },
      {
        pax: 4,
        reserve: 4794.69,
        sovereign: 6657.19
      },
      {
        pax: 5,
        reserve: 4676.25,
        sovereign: 6538.75
      },
      {
        pax: 6,
        reserve: 4597.29,
        sovereign: 6459.79
      }
    ],
    included: [
      "모든 국립공원, 컨세션, 보전구역 입장료",
      "현장 활동 매일 제공되는 차량/가이드/연료",
      "전 일정 식사",
      "일정표에 명시된 숙박시설",
      "공항 송영"
    ],
    excluded: [
      "국제선 항공권",
      "비자 발급 비용",
      "여행자 보험",
      "팁",
      "카메라/렌즈 대여"
    ],
    notes: [
      "표시된 요금은 더블/트윈 룸을 2인이 함께 사용하는 것을 기준으로 한 1인당 요금입니다. 1인 여행자 요금은 위에 표시되어 있으며 요청 시에도 안내해 드립니다.",
      "원하시는 날짜에 맞춰 맞춤 제작되며, 모두가 충분한 활동 공간을 가질 수 있도록 그룹 규모를 의도적으로 소규모로 유지합니다.",
      "숙박시설 및 요금은 예약 가능 여부에 따라 달라지며, 정확한 여행 날짜에 따라 변동될 수 있습니다.",
      "탄자니아 국립공원 및 보전구역 입장료는 정부가 책정하며 사전 통지 없이 변경될 수 있습니다."
    ],
    faq: [
      {
        q: "비전문 사진작가도 참여할 수 있는 여행인가요?",
        a: "네 — 이 일정은 처음 DSLR을 구입한 분부터 현업 전문가까지 모든 실력 수준에 맞도록 구성되어 있습니다. 가이드가 사파리가 아닌 강습처럼 느껴지지 않도록 하면서도, 현장에서 위치 선정과 타이밍에 대한 실질적인 조언을 계속 제공합니다."
      },
      {
        q: "일반적인 게임 드라이브 사파리와 무엇이 다른가요?",
        a: "속도와 의도입니다. 일반적인 사파리는 다음 관찰 대상을 향해 이동하지만, 이 일정은 한 자리에 머물며 한 장면이 펼쳐지도록 기다립니다 — 이제 막 다리로 서기 시작한 새끼를 데리고 있는 어미 누, 흰개미 언덕 위에서 무리를 살피는 치타. 그런 인내심은 우연이 아니라 일정 자체에 설계되어 있습니다."
      },
      {
        q: "출산기는 정확히 언제인가요?",
        a: "주요 기간은 대략 1월 말부터 3월까지이며, 출산의 절정은 보통 2월에 찾아옵니다 — 갓 태어난 누의 밀도가 가장 높아지고 포식자의 활동도 가장 활발해지는 시기가 겹칩니다."
      },
      {
        q: "어떤 카메라 장비를 가져가야 하나요?",
        a: "DSLR 또는 미러리스 바디, 풍경 촬영용 광각~중간 초점거리 렌즈, 그리고 최소 400mm 이상의 망원렌즈를 권장합니다 — 500~600mm는 멀리 있는 피사체에 유리하며, 70~200mm는 가까운 관찰 대상에 유용합니다. 예약이 확정된 여행객에게는 출발 전 상세한 짐 꾸리기 및 장비 가이드를 제공해 드립니다."
      },
      {
        q: "프라이빗 출발인가요, 아니면 낯선 사람들과 그룹으로 묶이나요?",
        a: "원하시는 날짜에 맞춰 맞춤 제작되며, 모두가 충분한 활동 공간을 가질 수 있도록 그룹 규모를 의도적으로 소규모로 유지합니다 — 정확한 인원 제한 및 프라이빗 출발 옵션은 요청 시 안내해 드립니다."
      },
      {
        q: "그룹 규모에 따라 요금이 얼마나 달라지나요?",
        a: "차량, 가이드, 디젤 비용이 그룹 전체에서 분담되므로, 참여 인원이 늘어날수록 1인당 요금이 의미 있게 낮아집니다 — 위의 요금표를 참고해 주세요."
      },
      {
        q: "요금에 포함되는 것과 포함되지 않는 것은 무엇인가요?",
        a: "포함 사항: 모든 국립공원, 컨세션, 보전구역 입장료, 현장 활동 매일 제공되는 차량/가이드/연료, 전 일정 식사, 일정표에 명시된 숙박시설, 공항 송영. 불포함 사항: 국제선 항공권, 비자 발급 비용, 여행자 보험, 팁, 카메라/렌즈 대여."
      },
      {
        q: "다른 목적지와 결합할 수 있나요?",
        a: "네 — 이 일정은 잔지바르 해변 연장 일정과 자연스럽게 어울리며, 출산기의 감동과 대이동 성수기의 강 건너기 장관을 한 번의 여행에서 모두 경험하고 싶은 여행객을 위해 북부 루트 사파리와 결합할 수도 있습니다."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "아루샤 도착",
        description: "킬리만자로 국제공항에 도착하여 편안한 첫날 밤을 보내세요 — 앞으로의 일주일에 대한 제대로 된 브리핑과 함께, 각 장소에서 빛이 어떻게 변화하는지, 그리고 현장에 들어선 뒤 가이드가 하루를 어떻게 배분할지 안내받습니다.",
        accommodation: "아루샤 (등급별로 상이)",
        meals: "석식",
        accommodationByTier: {
          reserve: {
            name: "Gran Meliá, Arusha",
            image: "/images/lodges/gran-melia-arusha.webp",
            amenities: [
              "wifi",
              "pool",
              "spa"
            ]
          },
          sovereign: {
            name: "Arusha Coffee Lodge",
            image: "/images/lodges/arusha-coffee-lodge-garden-path.webp",
            amenities: [
              "wifi",
              "pool",
              "view"
            ]
          }
        }
      },
      {
        day: 2,
        title: "타랑기레로 이동",
        description: "남쪽으로 향하는 드라이브가 바오밥나무로 뒤덮인 타랑기레의 평원으로 이어지며, 이곳에서는 탄자니아 최대 규모의 코끼리 무리가 수 마일에 걸쳐 마지막으로 남은 상시 수원 주변에 모여듭니다. 오후에는 마사이족 문화 체험이 촬영 중인 풍경에 진정한 맥락을 더해줍니다.",
        accommodation: "타랑기레 (등급별로 상이)",
        meals: "삼시세끼 포함",
        insiderFact: "타랑기레는 건기 이외의 시기에도 아프리카에서 가장 높은 코끼리 밀도를 자랑하며, 건기에는 무리가 강 주변에 집중됩니다.",
        accommodationByTier: {
          reserve: {
            name: "Elephant Springs",
            image: "/images/lodges/elephant-springs-exterior-view.webp",
            amenities: [
              "pool",
              "view",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Siringit Tarangire Camp",
            image: "/images/lodges/siringit-tarangire-camp-pool-aerial.webp",
            amenities: [
              "view",
              "wildlife-view",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 3,
        title: "타랑기레에서 므토와음부를 거쳐 응고롱고로로",
        description: "도로가 고원으로 향하기 전 타랑기레에서 보내는 마지막 반나절, 그리고 시장 마을 므토와음부에서의 잠시 멈춤 — 짧은 문화 도보 체험을 통해 이 공원들의 경계에서 살아가는 지역 사회와 진정한 접촉을 가질 수 있습니다.",
        accommodation: "응고롱고로 지역 (등급별로 상이)",
        meals: "삼시세끼 포함",
        accommodationByTier: {
          reserve: {
            name: "Ngorongoro Lion's Paw",
            image: "/images/lodges/ngorongoro-lion-s-paw.webp",
            amenities: [
              "view",
              "restaurant",
              "ensuite"
            ]
          },
          sovereign: {
            name: "Ngorongoro Melia Lodge",
            image: "/images/lodges/ngorongoro-lodge-the-rim-room-melia-collection.webp",
            amenities: [
              "view",
              "restaurant",
              "ensuite"
            ]
          }
        }
      },
      {
        day: 4,
        title: "응고롱고로 크레이터에서 은두투로",
        description: "크레이터 바닥으로 내려가는 오전 시간 전체 — 밀도 높은 야생동물, 극적인 절벽 지형, 그리고 검은코뿔소를 포함해 앞으로 만날 평원에서는 같은 밀도로 볼 수 없는 종들을 만날 진짜 기회 — 그 후 드라이브는 은두투 생태계로 이어집니다.",
        accommodation: "은두투 (등급별로 상이)",
        meals: "삼시세끼 포함",
        insiderFact: "응고롱고로 크레이터는 약 260제곱킬로미터(100제곱마일) 규모의 폐쇄된 생태계로, 이 지역에서 가장 안정적으로 검은코뿔소를 관찰할 수 있는 곳 중 하나입니다.",
        accommodationByTier: {
          reserve: {
            name: "Masek Tented Lodge",
            image: "/images/lodges/masek-tented-lodge.webp",
            amenities: [
              "ensuite",
              "wildlife-view"
            ]
          },
          sovereign: {
            name: "Taasa Migration Camp",
            image: "/images/lodges/siringit-migration-camp-ndutu-site.webp",
            amenities: [
              "ensuite",
              "view",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 5,
        title: "은두투, 하루 종일",
        description: "이곳에서는 정해진 각본이 아니라 평원 자체가 그날의 흐름을 정합니다. 짧은 풀, 탁 트인 지평선, 그리고 타이밍이 맞는다면 태어난 지 몇 분 만에 다리로 서려 애쓰는 새끼 누들의 특별한 애틋함까지 만날 수 있습니다. 이야기가 펼쳐지는 데는 종종 시간이 걸리기 때문에, 가이드는 서둘러 이동하지 않고 자리를 지킵니다.",
        accommodation: "은두투 (등급별로 상이)",
        meals: "삼시세끼 포함",
        insiderFact: "출산기 절정에는 하루 최대 8,000마리의 누 새끼가 은두투 평원 전역에서 태어납니다.",
        accommodationByTier: {
          reserve: {
            name: "Masek Tented Lodge",
            image: "/images/lodges/masek-tented-lodge.webp",
            amenities: [
              "ensuite",
              "wildlife-view"
            ]
          },
          sovereign: {
            name: "Taasa Migration Camp",
            image: "/images/lodges/siringit-migration-camp-ndutu-site.webp",
            amenities: [
              "ensuite",
              "view",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 6,
        title: "은두투, 하루 종일",
        description: "새로운 생명이 이렇게 밀집한 곳에는 포식자도 따라옵니다. 치타, 사자, 하이에나, 자칼이 모두 대낮에 무리의 가장자리를 오가며 활동하는 이곳에서, 하루는 먼 곳의 관찰이 아니라 실제 행동을 위해 설계되어 있습니다.",
        accommodation: "은두투 (등급별로 상이)",
        meals: "삼시세끼 포함",
        insiderFact: "출산기에는 은두투 평원에서 일 년 중 가장 활발한 치타의 활동을 볼 수 있으며, 이들은 탁 트인 지형에서 대낮에 사냥합니다.",
        accommodationByTier: {
          reserve: {
            name: "Masek Tented Lodge",
            image: "/images/lodges/masek-tented-lodge.webp",
            amenities: [
              "ensuite",
              "wildlife-view"
            ]
          },
          sovereign: {
            name: "Taasa Migration Camp",
            image: "/images/lodges/siringit-migration-camp-ndutu-site.webp",
            amenities: [
              "ensuite",
              "view",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 7,
        title: "남부 세렝게티에서 아루샤로",
        description: "아루샤로 돌아가 공항으로 향하는 드라이브 전 마지막 오전 시간 — 부츠에는 여전히 먼지가 묻어 있고, 메모리 카드에는 전혀 다른 종류의 사파리 이야기가 담겨 있습니다.",
        accommodation: "N/A",
        meals: "조식"
      }
    ]
  },
  {
    slug: "11-days-kenya-undisputed",
    name: "케냐 언디스퓨티드 11일",
    duration: 11,
    destinations: [
      "masai-mara"
    ],
    type: "wildlife",
    priceFrom: 5800,
    groupSize: {
      min: 1,
      max: 8
    },
    badge: "popular",
    bestFor: [
      "couples",
      "families",
      "solo",
      "wildlife-enthusiasts"
    ],
    overview: [
      "11일, 하나의 나라, 그리고 케냐가 아프리카에서 가장 완벽한 사파리 목적지라는 증명 — 이제 결론이 났습니다.",
      "이 일정은 케냐를 대표하는 다섯 가지 생태계를 하나로 엮습니다. 암보셀리에서는 킬리만자로를 배경으로 평원을 가로지르는 코끼리 가족들, 케냐에서 이곳 말고는 볼 수 없는 '삼부루 스페셜 파이브' — 그레비얼룩말, 그물무늬기린, 게레눅, 베이사오릭스, 소말리타조 — 올 페제타에서는 검은코뿔소와 동아프리카 유일의 침팬지 보호구역, 낙우루 호수에서는 최대 200만 마리에 달해 호수를 온통 분홍빛으로 물들이는 플라밍고 무리, 그리고 아프리카의 7대 자연 경관 중 하나로 선정된 마사이마라에서의 온전한 이틀. 나이로비는 카렌 블릭센 박물관, 기린 센터, 셸드릭 코끼리 고아원과 함께 여정의 시작과 끝을 장식합니다. 모든 정차지에서 그냥 스쳐 지나가는 대신 진짜 시간을 보내는 것, 바로 그것이 11일을 서두른 여정이 아니라 '언디스퓨티드'로 느껴지게 만드는 이유입니다."
    ],
    highlights: [
      "마사이마라 — 아프리카의 7대 자연 경관 중 하나로 선정",
      "암보셀리 — 킬리만자로를 배경으로 한 코끼리 무리",
      "삼부루 보호구역 — 이곳에서만 볼 수 있는 희귀한 북부 종",
      "올 페제타 보호구역 — 침팬지와 검은코뿔소",
      "나이로비의 카렌 블릭센 박물관과 기린 센터"
    ],
    heroImage: "/images/gallery/maned-lion-resting-savanna-grass.webp",
    heroImageAlt: "Maned lion resting alone in tall golden savanna grass",
    gallery: [],
    included: [
      "모든 국립공원 및 보호구역 입장료",
      "모든 게임 드라이브",
      "전문 가이드",
      "전 일정 식사",
      "숙박시설",
      "공항 송영"
    ],
    excluded: [
      "국제선 항공권",
      "비자 발급 비용",
      "여행자 보험",
      "팁",
      "선택 활동"
    ],
    notes: [
      "표시된 요금은 더블/트윈 룸을 2인이 함께 사용하는 것을 기준으로 한 1인당 요금입니다. 싱글룸 이용 시 별도의 싱글 서플먼트 요금이 요청에 따라 적용됩니다.",
      "일정에 언급된 승마 체험과 삼부루 마냐타 문화 방문은 선택 추가 활동으로, 별도 요금이 부과되며 예약 가능 여부에 따라 달라집니다.",
      "숙박시설 및 요금은 예약 가능 여부에 따라 달라지며, 동일 시즌 내에서도 정확한 여행 날짜에 따라 변동될 수 있습니다.",
      "케냐 국립공원 및 보호구역 입장료는 정부가 책정하며 사전 통지 없이 변경될 수 있습니다."
    ],
    itinerary: [
      {
        day: 1,
        title: "나이로비 도착",
        description: "조모 케냐타 국제공항에 도착하여 나이로비의 호텔로 이동합니다. 수영장과 스파 시설을 즐기며 본격적인 모험에 앞서 휴식을 취하세요.",
        accommodation: "Nairobi Luxury Hotel",
        meals: "석식",
        accommodationByTier: {
          reserve: {
            name: "Hemingways Nairobi",
            image: "/images/lodges/hemingways-nairobi.webp",
            amenities: [
              "pool",
              "spa",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 2,
        title: "나이로비 — 시내 하이라이트",
        description: "오전에는 카렌 블릭센 박물관을 방문합니다. 영화 '아웃 오브 아프리카'에 영감을 준 식민지 시대 농가로, 옹공 힐스를 배경으로 자리하고 있습니다. 이어서 기린 센터로 이동해 높은 플랫폼 위에서 눈높이를 맞춰 멸종위기종인 로스차일드기린에게 직접 먹이를 줄 수 있습니다. 오후에는 데임 대프니 셸드릭 야생동물 재단의 코끼리 고아원을 방문해 매일 진행되는 진흙 목욕 급식 시간을 지켜봅니다.",
        accommodation: "Nairobi Luxury Hotel",
        meals: "전 일정 식사",
        accommodationByTier: {
          reserve: {
            name: "Hemingways Nairobi",
            image: "/images/lodges/hemingways-nairobi.webp",
            amenities: [
              "pool",
              "spa",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 3,
        title: "암보셀리 국립공원",
        description: "케냐를 대표하는 국립공원 암보셀리로 이동합니다. 눈 덮인 킬리만자로를 배경으로 거대한 코끼리 무리가 돌아다닙니다. 맑은 날 아침에는 산의 모습을 놀라울 정도로 선명하게 볼 수 있으며, 그 빙하가 아래쪽 사바나의 먼지 위로 빛나는 모습을 확인할 수 있습니다. 암보셀리에는 600종이 넘는 조류가 서식하며 사자와 표범 개체군도 안정적으로 관찰됩니다.",
        accommodation: "Amboseli Safari Camp",
        meals: "전 일정 식사",
        accommodationByTier: {
          reserve: {
            name: "Ol Tukai Lodge",
            image: "/images/lodges/ol-tukai-lodge.webp",
            amenities: [
              "view",
              "wildlife-view",
              "pool"
            ]
          }
        }
      },
      {
        day: 4,
        title: "암보셀리 — 하루 종일",
        description: "암보셀리에서 오전과 오후에 걸쳐 게임 드라이브를 즐기는 하루 전체 일정입니다. 공원의 탁 트인 초원과 습지 덕분에 동물 관찰이 수월하면서도 깊은 만족감을 줍니다. 대규모 코끼리 가족들이 느릿한 행렬을 이루며 이동하고, 어미들이 아카시아 숲 사이로 새끼들을 이끕니다.",
        accommodation: "Amboseli Safari Camp",
        meals: "전 일정 식사",
        accommodationByTier: {
          reserve: {
            name: "Ol Tukai Lodge",
            image: "/images/lodges/ol-tukai-lodge.webp",
            amenities: [
              "view",
              "wildlife-view",
              "pool"
            ]
          }
        }
      },
      {
        day: 5,
        title: "삼부루 국립보호구역",
        description: "북쪽으로 이동해 에와소 응이로 강을 따라 펼쳐진 거칠고 건조한 삼부루 보호구역으로 향합니다. 삼부루는 '삼부루 스페셜 파이브'로 유명합니다 — 그레비얼룩말, 그물무늬기린, 소말리타조, 게레눅(목이 긴 영양), 베이사오릭스로, 모두 케냐에서 이곳 말고는 볼 수 없는 북부 고유종입니다. 강가에서의 선택적 승마 체험도 가능합니다.",
        accommodation: "Samburu Safari Camp",
        meals: "전 일정 식사",
        accommodationByTier: {
          reserve: {
            name: "Samburu Intrepids",
            image: "/images/lodges/samburu-intrepids.webp",
            amenities: [
              "view",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 6,
        title: "삼부루 — 강과 포식자",
        description: "에와소 응이로 강을 따라 진행되는 오전 게임 드라이브에서는 사람에게 놀라울 정도로 익숙해진 표범들을 강변 숲에서 가까이 볼 수 있는 경우가 많습니다. 모래톱을 따라 악어들이 늘어서 있으며, 텃세를 지닌 사자 무리는 새벽에 사냥에 나섭니다. 오후는 자유 시간이거나 선택적으로 삼부루 마냐타 문화 방문을 즐길 수 있습니다.",
        accommodation: "Samburu Safari Camp",
        meals: "전 일정 식사",
        accommodationByTier: {
          reserve: {
            name: "Samburu Intrepids",
            image: "/images/lodges/samburu-intrepids.webp",
            amenities: [
              "view",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 7,
        title: "올 페제타 보호구역 — 스위트워터스",
        description: "동아프리카 최대의 검은코뿔소 개체군과 지구상에 남은 마지막 두 마리의 북부흰코뿔소가 서식하는 올 페제타 보호구역으로 이동합니다. 이 보호구역에는 동아프리카 유일의 침팬지 보호구역도 있어, 구조된 침팬지들이 넓은 숲 방사장에서 생활하며 가이드 동반 방문이 가능합니다. 탁 트인 평원을 가로지르는 선셋 게임 드라이브도 즐길 수 있습니다.",
        accommodation: "Ol Pejeta Lodge",
        meals: "전 일정 식사",
        accommodationByTier: {
          reserve: {
            name: "Sweetwaters Serena Camp",
            image: "/images/lodges/sweetwaters-serena-camp.webp",
            amenities: [
              "wildlife-view",
              "pool"
            ]
          }
        }
      },
      {
        day: 8,
        title: "낙우루 호수 국립공원",
        description: "낙우루 호수로 이동합니다. 최대 200만 마리에 달하는 거대한 플라밍고 무리로 유명하며, 얕은 알칼리성 호수 전체를 완전히 분홍빛으로 물들입니다. 이 공원은 검은코뿔소와 흰코뿔소가 모두 서식하는 코뿔소 보호구역이기도 하며, 사자, 표범, 로스차일드기린의 건강한 개체군도 서식하고 있습니다.",
        accommodation: "Lake Nakuru Lodge",
        meals: "전 일정 식사",
        accommodationByTier: {
          reserve: {
            name: "Lake Nakuru Lodge",
            image: "/images/lodges/lake-nakuru-lodge.webp",
            amenities: [
              "view",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 9,
        title: "마사이마라 국립보호구역",
        description: "남쪽으로 이동해 케냐에서 가장 명성 높은 야생동물 보호구역이자 지구상에서 손꼽히는 야생동물 여행지인 마사이마라로 향합니다. 아프리카의 7대 자연 경관 중 하나로 거듭 선정되어 온 마라에는 사자, 치타, 표범, 코끼리, 버팔로, 하마가 연중 서식하며, 7월부터 10월까지는 대이동의 무대가 되기도 합니다.",
        accommodation: "Masai Mara Tented Camp",
        meals: "전 일정 식사",
        accommodationByTier: {
          reserve: {
            name: "Kichwa Tembo Camp",
            image: "/images/lodges/kichwa-tembo-camp.webp",
            amenities: [
              "wildlife-view",
              "view"
            ]
          }
        }
      },
      {
        day: 10,
        title: "마사이마라 — 하루 종일",
        description: "마사이마라에서 오전과 오후에 걸쳐 게임 드라이브를 즐기는 하루 전체 일정입니다. 얼룩말과 기린과 함께 탁 트인 사바나를 가로지르는 승마 체험을 궁극의 몰입형 경험으로 선택하실 수 있습니다. 대형 고양잇과 동물을 목격할 확률은 아프리카 어디에서도 손꼽힐 만큼 높습니다.",
        accommodation: "Masai Mara Tented Camp",
        meals: "전 일정 식사",
        accommodationByTier: {
          reserve: {
            name: "Kichwa Tembo Camp",
            image: "/images/lodges/kichwa-tembo-camp.webp",
            amenities: [
              "wildlife-view",
              "view"
            ]
          }
        }
      },
      {
        day: 11,
        title: "출발 — 나이로비",
        description: "마라에서의 오전 게임 드라이브 후, 육로 또는 항공편으로 나이로비로 이동해 귀국 국제선에 탑승합니다. 케냐 최고의 매력을 만끽한 11일간의 여정이 마무리됩니다.",
        accommodation: "N/A",
        meals: "조식"
      }
    ]
  },
  {
    slug: "10-days-southern-secrets",
    name: "탄자니아 남부의 비밀 10일",
    duration: 10,
    destinations: [
      "nyerere",
      "ruaha"
    ],
    type: "wildlife",
    priceFrom: 5200,
    groupSize: {
      min: 1,
      max: 6
    },
    bestFor: [
      "solo",
      "couples",
      "wildlife-enthusiasts"
    ],
    overview: [
      "남부 탄자니아는 스스로를 홍보하지 않습니다. 바로 그것이 핵심입니다 — 이 10일 일정은 세렝게티에 견줄 만한 야생동물을 만나면서도 다른 차량을 마주치지 않기를 원하는 여행객을 위해 설계되었습니다.",
      "일정은 니에레레 국립공원에서 시작됩니다 — 면적 5만 제곱킬로미터로 스위스보다 넓은 이곳에서 강변림과 미옴보 삼림을 가로지르는 게임 드라이브와, 루피지 강에서 하마와 코끼리를 물가 가까이에서 만나는 보트 사파리를 즐깁니다. 그곳에서 남쪽으로 미쿠미를 거쳐 우중과 산맥에서 산제 폭포 아래 수영을 위한 하이킹으로 이어지며, 이후 탄자니아 최대의 국립공원이자 사자, 표범, 치타, 리카온의 최대 개체군을 보유한 루아하에서 온전한 이틀을 보냅니다. 남부 탄자니아는 북부 루트에 비하면 극히 적은 방문객만이 찾는 곳이며, 이 일정은 그 이점을 최대한 살리도록 설계되었습니다 — 정문에서의 대기 줄이 아니라, 진정한 원시 자연 속에서 길고 여유로운 시간을 보내게 됩니다."
    ],
    highlights: [
      "니에레레 국립공원 — 스위스보다 넓은 면적",
      "루피지 강에서의 보트 사파리",
      "루아하 — 탄자니아 최대의 국립공원이자 최대의 대형 고양잇과 동물 개체군",
      "우중과 산맥과 산제 폭포에서의 수영",
      "인파 없는 — 진정한 원시 자연 체험"
    ],
    heroImage: "/images/gallery/serengeti-plains-sunset-panorama.jpg",
    heroImageAlt: "Panoramic sunset over the Serengeti plains with silhouetted acacia trees and distant hills",
    gallery: [],
    included: [
      "모든 국립공원 입장료",
      "모든 게임 드라이브 및 보트 사파리",
      "전문 가이드",
      "전 일정 식사",
      "숙박시설",
      "공항 송영"
    ],
    excluded: [
      "국제선 항공권",
      "비자 발급 비용",
      "여행자 보험",
      "팁"
    ],
    notes: [
      "표시된 요금은 더블/트윈 룸을 2인이 함께 사용하는 것을 기준으로 한 1인당 요금입니다. 싱글룸 이용 시 별도의 싱글 서플먼트 요금이 요청에 따라 적용됩니다.",
      "1일 차의 선셋 보트 투어는 선택 사항이며, 10일 차의 귀환 이동 수단(육로 또는 소형 경비행기)은 예약 시 확정됩니다.",
      "숙박시설 및 요금은 예약 가능 여부에 따라 달라지며, 동일 시즌 내에서도 정확한 여행 날짜에 따라 변동될 수 있습니다.",
      "탄자니아 국립공원 및 보전구역 입장료는 정부가 책정하며 사전 통지 없이 변경될 수 있습니다."
    ],
    itinerary: [
      {
        day: 1,
        title: "니에레레 국립공원 도착",
        description: "다르에스살람의 줄리어스 니에레레 국제공항에 도착한 후, 니에레레 국립공원 내 루피지 강변에 위치한 롯지로 곧바로 이동합니다. 도착 첫날 저녁에는 선택 사항인 선셋 보트 투어를 통해 강에 사는 하마와 악어를 만나볼 수 있습니다.",
        accommodation: "Rufiji River Camp",
        meals: "석식",
        accommodationByTier: {
          reserve: {
            name: "Rufiji River Camp",
            image: "/images/lodges/rufiji-river-camp.webp",
            amenities: [
              "view",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 2,
        title: "니에레레 국립공원 — 게임 드라이브",
        description: "탄자니아 최대의 국립공원인 니에레레에서 하루 종일 게임 드라이브를 즐깁니다. 5만 제곱킬로미터에 걸쳐 강변림, 탁 트인 초원, 미옴보 삼림이 펼쳐져 있습니다. 사자 무리, 코끼리 무리, 버팔로, 쿠두, 기린 모두 다양한 지형 곳곳에서 안정적으로 관찰됩니다.",
        accommodation: "Rufiji River Camp",
        meals: "전 일정 식사",
        accommodationByTier: {
          reserve: {
            name: "Rufiji River Camp",
            image: "/images/lodges/rufiji-river-camp.webp",
            amenities: [
              "view",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 3,
        title: "니에레레 — 루피지 강 보트 사파리",
        description: "동아프리카 최고의 수로 중 하나인 루피지 강에서 즐기는 오전 보트 사파리입니다. 하마가 모이는 웅덩이, 악어가 있는 강둑, 밀집된 물새 군락이 강변을 따라 이어집니다. 코끼리 무리가 얕은 여울을 건너는 모습도 볼 수 있습니다. 이곳은 도보 사파리와 보트 사파리의 진수를 보여주는 곳으로, 가이드가 안내할 수 있는 범위에 차량으로 인한 제약이 없습니다.",
        accommodation: "Rufiji River Camp",
        meals: "전 일정 식사",
        accommodationByTier: {
          reserve: {
            name: "Rufiji River Camp",
            image: "/images/lodges/rufiji-river-camp.webp",
            amenities: [
              "view",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 4,
        title: "니에레레에서 짧은 드라이브 — 미쿠미로 이동",
        description: "니에레레에서의 마지막 오전 게임 드라이브 후, 북쪽의 미쿠미 국립공원으로 이동합니다. 이동 중에는 방문객이 좀처럼 보지 못하는 남부 탄자니아 오지의 시골 풍경을 지나게 됩니다.",
        accommodation: "Mikumi Wildlife Lodge",
        meals: "전 일정 식사",
        accommodationByTier: {
          reserve: {
            name: "Mikumi Wildlife Lodge",
            image: "/images/lodges/mikumi-wildlife-lodge.webp",
            amenities: [
              "pool",
              "view",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 5,
        title: "미쿠미 국립공원",
        description: "미쿠미에서 가장 풍부한 야생동물 서식지인 므카타 범람원을 가로지르는 게임 드라이브입니다. 코끼리, 엘런드, 사자, 표범, 치타, 리카온이 모두 이 공원에 서식합니다. 미쿠미는 탁 트인 초원 경관과 대형 고양잇과 동물을 쉽게 관찰할 수 있다는 점에서 흔히 '남부의 세렝게티'라고 불립니다.",
        accommodation: "Mikumi Wildlife Lodge",
        meals: "전 일정 식사",
        accommodationByTier: {
          reserve: {
            name: "Mikumi Wildlife Lodge",
            image: "/images/lodges/mikumi-wildlife-lodge.webp",
            amenities: [
              "pool",
              "view",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 6,
        title: "우중과 산맥 국립공원",
        description: "탄자니아에서 생물다양성이 가장 풍부한 공원 중 하나이자 세계적으로도 중요한 보전 우선 지역인 우중과 산맥으로 이동합니다. 몬탄 삼림을 하이킹하여 산제 폭포에 도착하면, 폭포 아래 천연 웅덩이에서 수영을 즐길 수 있습니다. 이 숲에는 고유 영장류 2종과 400종이 넘는 조류가 서식하며, 그중 다수는 알버틴 열곡대 고유종입니다.",
        accommodation: "Udzungwa Forest Camp",
        meals: "전 일정 식사",
        accommodationByTier: {
          reserve: {
            name: "Hondo Hondo Udzungwa Forest Camp",
            image: "/images/lodges/hondo-hondo-udzungwa-forest-camp.webp",
            amenities: [
              "garden",
              "view"
            ]
          }
        }
      },
      {
        day: 7,
        title: "루아하 국립공원으로 이동",
        description: "루아하 국립공원을 향해 서쪽으로 이동합니다. 남부 고원지대를 지나는 길고도 경치 좋은 여정입니다. 루아하는 탄자니아 최대의 국립공원이며, 진지한 야생동물 애호가에게 대륙에서 가장 흥미로운 목적지 중 하나입니다.",
        accommodation: "Ruaha River Lodge",
        meals: "전 일정 식사",
        accommodationByTier: {
          reserve: {
            name: "Ruaha River Lodge",
            image: "/images/lodges/ruaha-river-lodge-dining-pavilion.webp",
            amenities: [
              "view",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 8,
        title: "루아하 국립공원 — 하루 종일",
        description: "루아하는 탄자니아 최대의 사자, 표범, 치타, 리카온 개체군을 품고 있으며, 공원 내 포식자 밀도는 매우 뛰어납니다. 코끼리 무리는 수천 마리에 달합니다. 그레이트 루아하 강은 이 공원의 생명줄로, 건기에는 지역 전역에서 동물들을 끌어들입니다. 인파도 소음도 없이, 가장 순수한 형태의 원시 자연만이 존재합니다.",
        accommodation: "Ruaha River Lodge",
        meals: "전 일정 식사",
        accommodationByTier: {
          reserve: {
            name: "Ruaha River Lodge",
            image: "/images/lodges/ruaha-river-lodge-dining-pavilion.webp",
            amenities: [
              "view",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 9,
        title: "루아하 — 오전 및 오후 드라이브",
        description: "루아하에서 보내는 또 하루입니다. 오전 드라이브는 새벽에 포식자 활동이 가장 활발한 강변 지역을 중심으로 진행됩니다. 오후 드라이브는 좀처럼 찾지 않는 오지로 들어가며, 이곳에는 더 흔한 종들과 함께 세이블영양, 대쿠두, 오릭스가 서식하고 있습니다.",
        accommodation: "Ruaha River Lodge",
        meals: "전 일정 식사",
        accommodationByTier: {
          reserve: {
            name: "Ruaha River Lodge",
            image: "/images/lodges/ruaha-river-lodge-dining-pavilion.webp",
            amenities: [
              "view",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 10,
        title: "출발 — 다르에스살람",
        description: "루아하에서의 오전 게임 드라이브 후, 육로 또는 소형 경비행기로 다르에스살람으로 이동해 귀국 국제선에 탑승합니다.",
        accommodation: "N/A",
        meals: "조식"
      }
    ]
  },
  {
    slug: "11-days-southern-spice",
    name: "남부 야생동물과 향신료의 섬 11일",
    duration: 11,
    destinations: [
      "nyerere",
      "ruaha",
      "zanzibar"
    ],
    type: "combination",
    priceFrom: 6100,
    groupSize: {
      min: 1,
      max: 8
    },
    badge: "new",
    bestFor: [
      "couples",
      "honeymoon",
      "wildlife-enthusiasts"
    ],
    overview: [
      "이것은 탄자니아의 대표적인 '사파리 후 해변' 공식에 대한 남부 루트만의 응답입니다 — 붐비는 북부 대신 니에레레와 루아하를 선택하고, 잔지바르의 하얀 백사장으로 마무리합니다.",
      "남부에서의 나날은 니에레레 국립공원에서의 게임 드라이브와 루피지 강 보트 사파리로 시작되며, 이곳에서는 사자 무리가 작은 나라만 한 크기의 미옴보 삼림 사이를 이동합니다. 이후 소형 경비행기로 루아하로 이동합니다 — 탄자니아에서 가장 야생적이고 방문객이 가장 적은 공원으로, 포식자 밀도는 대륙 어디에도 뒤지지 않습니다. 그곳에서 짧은 비행으로 잔지바르에 도착해 5성급 해변가 리조트에서 3일을 보냅니다. 스톤타운의 조각된 문, 프리즌 아일랜드의 대형 거북, 키짐카지 앞바다의 야생 돌고래, 향신료 농장 투어가 해변에서의 시간 사이사이에 짜여 있습니다. 육로 국경 통과도, 다른 여행객과 공유하는 관찰 루트도 없이, 진정한 남부의 원시 자연과 진정한 휴식만이 이어집니다."
    ],
    highlights: [
      "니에레레 국립공원과 루피지 강 보트 사파리",
      "루아하 — 탄자니아에서 가장 야생적이고 방문객이 가장 적은 공원",
      "잔지바르에서의 3일 — 5성급 해변 리조트",
      "스톤타운, 프리즌 아일랜드, 향신료 농장",
      "북부의 인파 없이 즐기는 남부 루트의 야생동물"
    ],
    heroImage: "/images/gallery/elephant-acacia-southern.webp",
    heroImageAlt: "Solitary elephant standing beneath a large acacia tree on the southern plains",
    gallery: [],
    included: [
      "모든 국립공원 입장료",
      "모든 게임 드라이브 및 보트 사파리",
      "잔지바르 호텔(해변가)",
      "사파리 중 전 일정 식사",
      "잔지바르에서의 조식",
      "국내선 및 섬 간 항공편",
      "공항 송영"
    ],
    excluded: [
      "국제선 항공권",
      "비자 발급 비용",
      "여행자 보험",
      "팁",
      "잔지바르에서의 중식 및 석식"
    ],
    notes: [
      "표시된 요금은 더블/트윈 룸을 2인이 함께 사용하는 것을 기준으로 한 1인당 요금입니다. 싱글룸 이용 시 별도의 싱글 서플먼트 요금이 요청에 따라 적용됩니다.",
      "잔지바르 숙박은 조식만 포함되며, 중식과 석식은 별도 비용이 발생합니다.",
      "숙박시설 및 요금은 예약 가능 여부에 따라 달라지며, 동일 시즌 내에서도 정확한 여행 날짜에 따라 변동될 수 있습니다.",
      "탄자니아 국립공원 및 보전구역 입장료는 정부가 책정하며 사전 통지 없이 변경될 수 있습니다."
    ],
    itinerary: [
      {
        day: 1,
        title: "니에레레 국립공원 도착",
        description: "다르에스살람의 줄리어스 니에레레 국제공항에 도착한 후, 니에레레 국립공원 내 루피지 강변에 위치한 롯지로 이동합니다. 도착 첫날 저녁에는 선택 사항인 선셋 보트 투어를 통해 강에 사는 하마와 악어를 만나볼 수 있습니다.",
        accommodation: "Rufiji River Camp",
        meals: "석식",
        accommodationByTier: {
          reserve: {
            name: "Rufiji River Camp",
            image: "/images/lodges/rufiji-river-camp.webp",
            amenities: [
              "view",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 2,
        title: "니에레레 — 사자의 땅",
        description: "니에레레 국립공원에서 하루 종일 게임 드라이브를 즐깁니다. 큰 사자 무리가 미옴보 삼림과 탁 트인 초원을 이동하며, 코끼리 무리, 버팔로, 기린과 이 풍경을 함께 나눕니다. 스위스보다 넓은 이 공원의 규모 덕분에 만남은 진정으로 야생적이고 여유롭게 느껴집니다.",
        accommodation: "Rufiji River Camp",
        meals: "전 일정 식사",
        accommodationByTier: {
          reserve: {
            name: "Rufiji River Camp",
            image: "/images/lodges/rufiji-river-camp.webp",
            amenities: [
              "view",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 3,
        title: "니에레레 — 루피지 강 선셋",
        description: "오전에는 표범과 리카온이 사냥하는 삼림 지역을 중심으로 게임 드라이브를 진행합니다. 오후에는 루피지 강에서의 보트 사파리 — 대부분의 방문객이 결코 경험하지 못하는, 아프리카 야생동물을 바라보는 독특한 시각을 제공합니다. 하마가 보트 주변에 떠오르는 가운데 물가에서 선셋을 즐깁니다.",
        accommodation: "Rufiji River Camp",
        meals: "전 일정 식사",
        accommodationByTier: {
          reserve: {
            name: "Rufiji River Camp",
            image: "/images/lodges/rufiji-river-camp.webp",
            amenities: [
              "view",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 4,
        title: "루아하 국립공원으로 비행",
        description: "소형 경비행기에 탑승해 서쪽으로 남부 탄자니아 평원 위를 날아 루아하 국립공원으로 향합니다. 하늘에서 내려다보면 지평선까지 펼쳐진 미옴보 삼림의 규모를 실감할 수 있습니다. 그레이트 루아하 강에서의 오후 게임 드라이브가 앞으로 이어질 여정의 분위기를 결정짓습니다.",
        accommodation: "Ruaha River Lodge",
        meals: "중식, 석식",
        accommodationByTier: {
          reserve: {
            name: "Ruaha River Lodge",
            image: "/images/lodges/ruaha-river-lodge-dining-pavilion.webp",
            amenities: [
              "view",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 5,
        title: "루아하 — 대형 고양잇과 동물과 큰 코끼리들",
        description: "탄자니아 최대의 국립공원이자 아프리카가 숨겨온 최고의 비경 중 하나인 루아하에서 보내는 하루 전체입니다. 포식자 밀도는 놀라울 정도로, 사자, 표범, 치타, 리카온이 모두 같은 지형에 서식합니다. 코끼리 무리는 수천 마리에 달합니다. 관광버스 행렬도, 인파도 없이, 오직 여러분과 가이드, 그리고 원시 자연만이 있습니다.",
        accommodation: "Ruaha River Lodge",
        meals: "전 일정 식사",
        accommodationByTier: {
          reserve: {
            name: "Ruaha River Lodge",
            image: "/images/lodges/ruaha-river-lodge-dining-pavilion.webp",
            amenities: [
              "view",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 6,
        title: "루아하 — 오지 드라이브",
        description: "루아하의 더 깊은 오지로 들어갑니다. 건조한 미옴보 삼림에는 세이블영양과 대쿠두가 서식합니다. 그레이트 루아하 강은 지역 전역에서 동물들을 끌어들이며, 물가에서 벌어지는 포식자와 피식자의 상호작용은 매일의 장관을 이룹니다.",
        accommodation: "Ruaha River Lodge",
        meals: "전 일정 식사",
        accommodationByTier: {
          reserve: {
            name: "Ruaha River Lodge",
            image: "/images/lodges/ruaha-river-lodge-dining-pavilion.webp",
            amenities: [
              "view",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 7,
        title: "잔지바르로 비행",
        description: "루아하에서의 오전 게임 드라이브 후 잔지바르로 비행합니다. 전설적인 향신료 섬에 도착해 5성급 해변가 리조트로 이동합니다. 오후에는 하얀 백사장에서 낙원과도 같은 시간에 익숙해지는 시간을 보냅니다.",
        accommodation: "Zanzibar Luxury Beach Resort",
        meals: "조식",
        accommodationByTier: {
          reserve: {
            name: "Kilindi Zanzibar",
            image: "/images/lodges/kilindi-zanzibar.webp",
            amenities: [
              "pool",
              "spa",
              "all-inclusive"
            ]
          }
        }
      },
      {
        day: 8,
        title: "잔지바르 — 스톤타운과 프리즌 아일랜드",
        description: "오전에는 유네스코에 등재된 스톤타운의 가이드 동반 투어입니다. 조각된 목제 문, 아랍풍 아치, 스와힐리 문화가 살아 숨쉬는 거리로 가득합니다. 프리즌 아일랜드로의 보트 여행에서는 수령 100년이 넘는 대형 알다브라 육지거북들이 정원을 자유롭게 돌아다니는 모습을 볼 수 있습니다. 오후에는 다우선 선셋 크루즈를 즐깁니다.",
        accommodation: "Zanzibar Luxury Beach Resort",
        meals: "조식",
        accommodationByTier: {
          reserve: {
            name: "Kilindi Zanzibar",
            image: "/images/lodges/kilindi-zanzibar.webp",
            amenities: [
              "pool",
              "spa",
              "all-inclusive"
            ]
          }
        }
      },
      {
        day: 9,
        title: "잔지바르 — 돌고래와 향신료 농장",
        description: "이른 아침, 키짐카지로 보트 여행을 떠나 넓은 바다에서 야생 스피너돌고래와 함께 수영합니다. 오후에는 정향, 시나몬, 바닐라, 흑후추, 일랑일랑 농장을 둘러보는 향신료 농장 투어를 즐깁니다. 저녁에는 태양이 인도양으로 저무는 가운데 리조트에서 칵테일을 즐깁니다.",
        accommodation: "Zanzibar Luxury Beach Resort",
        meals: "조식",
        accommodationByTier: {
          reserve: {
            name: "Kilindi Zanzibar",
            image: "/images/lodges/kilindi-zanzibar.webp",
            amenities: [
              "pool",
              "spa",
              "all-inclusive"
            ]
          }
        }
      },
      {
        day: 10,
        title: "잔지바르 — 해변에서의 하루",
        description: "잔지바르의 전설적인 해변에서 보내는 완전한 자유일입니다. 청록빛 바다, 하얀 산호 백사장, 흔들리는 야자수는 남부 사파리 공원에서의 강렬한 나날과 완벽한 대조를 이룹니다. 스노클링, 세일링, 카약을 선택 활동으로 즐길 수 있습니다.",
        accommodation: "Zanzibar Luxury Beach Resort",
        meals: "조식",
        accommodationByTier: {
          reserve: {
            name: "Kilindi Zanzibar",
            image: "/images/lodges/kilindi-zanzibar.webp",
            amenities: [
              "pool",
              "spa",
              "all-inclusive"
            ]
          }
        }
      },
      {
        day: 11,
        title: "출발",
        description: "오전에는 해변에서 시간을 보낸 후, 잔지바르 공항으로 이동해 귀국 국제선으로 환승합니다.",
        accommodation: "N/A",
        meals: "조식"
      }
    ]
  },
  {
    slug: "12-days-tanzania-kenya",
    name: "12일 탄자니아 케냐 익스페디션",
    duration: 12,
    destinations: [
      "serengeti",
      "ngorongoro",
      "manyara",
      "masai-mara"
    ],
    type: "wildlife",
    priceFrom: 7200,
    groupSize: {
      min: 1,
      max: 8
    },
    bestFor: [
      "couples",
      "solo",
      "wildlife-enthusiasts"
    ],
    overview: [
      "12일이면 케냐와 탄자니아 중 하나를 선택할 필요가 없습니다 — 이 익스페디션은 타협 대신 경비행기로 국경을 넘어 두 나라를 모두 아우릅니다.",
      "케냐 구간에서는 킬리만자로를 배경으로 한 암보셀리의 코끼리 무리, 플라밍고로 분홍빛을 띠는 나쿠루 호수의 호숫가와 코뿔소 보호구역, 그리고 아프리카 7대 자연경관 중 하나인 마사이마라에서의 2일을 둘러봅니다. 국경을 넘는 비행으로 세렝게티에 도착한 뒤에는 사자와 치타 개체군과 함께 며칠을 더 보내고, 응고롱고로 크레이터 바닥에서는 단 한 번의 하강으로 빅파이브를 만나며, 헤밍웨이가 '아프리카에서 가장 아름다운 곳'이라는 증거라 불렀던 나무를 오르는 사자들과 함께 마니야라 호수에서 여정을 마무리합니다. 두 나라, 네 개의 생태계, 하나로 이어지는 야생동물 익스페디션 — 흔히 겪는 육로 국경 통과 대신 경치 좋은 비행으로 국경을 넘습니다."
    ],
    highlights: [
      "마사이마라와 세렝게티 — 아프리카 최고의 야생동물 국립공원 두 곳",
      "암보셀리 — 킬리만자로를 배경으로 한 코끼리",
      "나쿠루 호수의 플라밍고와 검은코뿔소",
      "마니야라 호수 — 헤밍웨이의 '아프리카에서 가장 아름다운 곳'",
      "두 나라를 넘나드는 국경 간 야생동물 익스페디션"
    ],
    heroImage: "/images/gallery/africa-lion.jpg",
    heroImageAlt: "Black-and-white portrait of a maned lion walking through tall savanna grass",
    gallery: [],
    included: [
      "모든 국립공원 입장료",
      "모든 게임 드라이브",
      "전문 가이드",
      "전 일정 식사",
      "숙박",
      "국경 간 송영",
      "공항 송영"
    ],
    excluded: [
      "국제선 항공권",
      "케냐 및 탄자니아 비자 발급 비용",
      "여행자 보험",
      "팁"
    ],
    notes: [
      "표시된 요금은 더블/트윈룸을 2인이 함께 사용할 경우 1인당 요금이며, 싱글룸 이용 시 추가 요금이 적용됩니다.",
      "이 일정의 케냐-탄자니아 국경 통과는 육로가 아닌 경비행기로 이루어집니다.",
      "숙박시설 및 요금은 예약 가능 여부에 따라 달라질 수 있으며, 같은 시즌 내에서도 정확한 여행 날짜에 따라 변동될 수 있습니다.",
      "탄자니아 및 케냐의 국립공원 입장료는 각국 정부가 책정하며, 사전 예고 없이 변경될 수 있습니다."
    ],
    itinerary: [
      {
        day: 1,
        title: "나이로비 도착",
        description: "조모 케냐타 국제공항에 도착한 후 나이로비 호텔로 이동합니다. 아프리카 최고의 야생동물 여행지 두 곳을 아우르는 12일간의 여정을 앞두고 편안히 휴식을 취하세요.",
        accommodation: "Nairobi Hotel",
        meals: "석식",
        accommodationByTier: {
          reserve: {
            name: "Hemingways Nairobi",
            image: "/images/lodges/hemingways-nairobi.webp",
            amenities: [
              "pool",
              "spa",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 2,
        title: "나이로비 — 시내 투어",
        description: "영화 '아웃 오브 아프리카'의 배경이 된 농장에 자리한 카렌 블릭센 박물관을 방문합니다. 이어서 기린 센터로 이동해 높이 설치된 전망대에서 눈높이로 로스차일드 기린에게 직접 사료를 먹여볼 수 있습니다. 오후에는 다프네 셸드릭 코끼리 고아원을 방문해 진흙 목욕 먹이 주기 시간을 관람합니다.",
        accommodation: "Nairobi Hotel",
        meals: "전 일정 식사",
        accommodationByTier: {
          reserve: {
            name: "Hemingways Nairobi",
            image: "/images/lodges/hemingways-nairobi.webp",
            amenities: [
              "pool",
              "spa",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 3,
        title: "암보셀리 국립공원",
        description: "만년설을 이고 있는 킬리만자로 정상 아래에 자리한 암보셀리로 이동합니다. 맑은 날 아침이면 아프리카 최고봉이 풍경을 압도적으로 지배하며, 케냐 최대 규모의 코끼리 무리에게 상징적인 배경을 선사합니다. 이 아담한 공원에서는 600종이 넘는 조류가 기록되었습니다.",
        accommodation: "Amboseli Safari Camp",
        meals: "전 일정 식사",
        accommodationByTier: {
          reserve: {
            name: "Ol Tukai Lodge",
            image: "/images/lodges/ol-tukai-lodge.webp",
            amenities: [
              "view",
              "wildlife-view",
              "pool"
            ]
          }
        }
      },
      {
        day: 4,
        title: "암보셀리 — 종일 일정",
        description: "암보셀리의 습지, 삼림지대, 탁 트인 초원을 탐험하는 온전한 하루입니다. 대규모 코끼리 가족 무리가 갈대숲과 아카시아 숲 사이를 이동하고, 사자 무리는 범람원 가장자리에서 사냥을 하며, 치타는 탁 트인 대지에서 가젤을 뒤쫓습니다.",
        accommodation: "Amboseli Safari Camp",
        meals: "전 일정 식사",
        accommodationByTier: {
          reserve: {
            name: "Ol Tukai Lodge",
            image: "/images/lodges/ol-tukai-lodge.webp",
            amenities: [
              "view",
              "wildlife-view",
              "pool"
            ]
          }
        }
      },
      {
        day: 5,
        title: "나쿠루 호수 국립공원",
        description: "나쿠루 호수로 이동합니다. 이 알칼리성 호수는 세계 최대 규모의 플라밍고 개체군 중 하나를 품고 있습니다. 수면을 뒤덮은 유명한 분홍빛 무리는 새들의 움직임에 따라 형태를 바꾸며 소용돌이칩니다. 이 공원은 검은코뿔소와 흰코뿔소 모두를 위한 보호구역이기도 하며, 케냐에서 이들을 볼 수 있는 최고의 장소 중 하나입니다.",
        accommodation: "Lake Nakuru Lodge",
        meals: "전 일정 식사",
        accommodationByTier: {
          reserve: {
            name: "Lake Nakuru Lodge",
            image: "/images/lodges/lake-nakuru-lodge.webp",
            amenities: [
              "view",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 6,
        title: "마사이마라 — 도착",
        description: "남쪽으로 이동해 케냐의 보석과도 같은 마사이마라 국립보호구역으로 향합니다. 완만하게 굽이치는 마라의 초원은 지평선까지 펼쳐지며 남쪽의 세렝게티와 매끄럽게 이어집니다. 오후 게임 드라이브를 통해 이곳에 서식하는 사자 무리와 치타 가족을 만나봅니다.",
        accommodation: "Masai Mara Tented Camp",
        meals: "전 일정 식사",
        accommodationByTier: {
          reserve: {
            name: "Kichwa Tembo Camp",
            image: "/images/lodges/kichwa-tembo-camp.webp",
            amenities: [
              "wildlife-view",
              "view"
            ]
          }
        }
      },
      {
        day: 7,
        title: "마사이마라 — 종일 일정",
        description: "아프리카 7대 자연경관 중 하나로 선정된 마라에서 보내는 온전한 하루입니다. 7월부터 10월까지는 누 대이동이 지평선을 가득 채웁니다. 연중 내내 빅파이브를 비롯한 아프리카의 모든 포식동물이 이곳에 모여, 마라를 지구상 최고의 야생동물 관찰지 중 하나로 만듭니다. 야생동물과 함께하는 승마 체험을 선택하실 수 있습니다.",
        accommodation: "Masai Mara Tented Camp",
        meals: "전 일정 식사",
        accommodationByTier: {
          reserve: {
            name: "Kichwa Tembo Camp",
            image: "/images/lodges/kichwa-tembo-camp.webp",
            amenities: [
              "wildlife-view",
              "view"
            ]
          }
        }
      },
      {
        day: 8,
        title: "세렝게티로 비행",
        description: "경비행기로 국경을 넘어 탄자니아로 입국해 세렝게티 중심부에 있는 세로네라 활주로에 착륙합니다. 오후에는 중앙 평원에서 게임 드라이브를 즐기며, 황금빛 오후 햇살 속에 세렝게티에 서식하는 사자와 치타 개체군이 활기를 띠는 모습을 관찰합니다. 일몰 무렵 하마 웅덩이가 붉게 물듭니다.",
        accommodation: "Serengeti Tented Camp",
        meals: "중식, 석식",
        accommodationByTier: {
          reserve: {
            name: "Siringiti Serengeti Camp",
            image: "/images/lodges/siringiti-serengeti-camp.webp",
            amenities: [
              "wifi",
              "view",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 9,
        title: "세렝게티 — 종일 일정",
        description: "오전과 오후 게임 드라이브로 세렝게티 평원을 만끽하는 온전한 하루입니다. 대형 고양잇과 동물, 누 떼, 얼룩말, 기린, 코끼리가 사방을 가득 채웁니다. 세렝게티는 지구상에서 가장 넓게 끊김 없이 이어지는 사바나 생태계입니다.",
        accommodation: "Serengeti Tented Camp",
        meals: "전 일정 식사",
        accommodationByTier: {
          reserve: {
            name: "Siringiti Serengeti Camp",
            image: "/images/lodges/siringiti-serengeti-camp.webp",
            amenities: [
              "wifi",
              "view",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 10,
        title: "응고롱고로 크레이터",
        description: "응고롱고로로 이동해 크레이터 안으로 내려가 빅파이브와 함께 온전한 하루를 보냅니다. 이 고대 칼데라 안에 밀집된 야생동물 덕분에 아프리카에서 손꼽히게 알찬 야생동물 관찰이 가능합니다. 이곳에서는 검은코뿔소도 안정적으로 관찰할 수 있습니다.",
        accommodation: "Ngorongoro Serena Lodge",
        meals: "전 일정 식사",
        accommodationByTier: {
          reserve: {
            name: "Kitela Lodge",
            image: "/images/lodges/kitela-lodge.webp",
            amenities: [
              "pool",
              "view",
              "garden"
            ]
          }
        }
      },
      {
        day: 11,
        title: "마니야라 호수 국립공원",
        description: "헤밍웨이가 '아프리카에서 가장 아름다운 곳'이라 불렀던 마니야라 호수로 이동합니다. 나무를 오르는 사자들이 숲 바닥 위 무화과나무 가지에 늘어져 있습니다. 이 알칼리성 호수는 거대한 플라밍고, 펠리컨, 황새 무리를 품고 있습니다. 호숫가를 따라 뜨거운 간헐천이 보글거립니다.",
        accommodation: "Lake Manyara Hotel",
        meals: "전 일정 식사",
        accommodationByTier: {
          reserve: {
            name: "andBeyond Lake Manyara Tree Lodge",
            image: "/images/lodges/andbeyond-lake-manyara-tree-lodge-living-room.webp",
            amenities: [
              "view",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 12,
        title: "출발 — 킬리만자로 국제공항",
        description: "아침에 킬리만자로 국제공항으로 이동해 귀국 국제선에 탑승합니다. 아프리카 최고의 야생동물 여행지 두 곳에서 쌓은 12일간의 추억을 안고 여정을 마칩니다.",
        accommodation: "N/A",
        meals: "조식"
      }
    ]
  },
  {
    slug: "14-days-kilimanjaro-lemosho-safari",
    name: "킬리만자로 레모쇼 등반 & 5일 하이라이트 사파리",
    duration: 14,
    destinations: [
      "arusha",
      "serengeti",
      "ngorongoro"
    ],
    type: "combination",
    priceFrom: 6607.58,
    groupSize: {
      min: 2,
      max: 4
    },
    badge: "new",
    bestFor: [
      "couples",
      "solo",
      "wildlife-enthusiasts"
    ],
    tagline: "2027년 시즌에 맞춰 업데이트되었습니다.",
    metaTitle: "킬리만자로 등반 & 사파리 | 레모쇼 루트 + 세렝게티 & 응고롱고로 | EWA Safari Outfitters",
    metaDescription: "레모쇼 루트로 킬리만자로 정상에 오른 뒤, 곧장 세렝게티와 응고롱고로 크레이터로 비행합니다. 14일, 하나의 매끄러운 예약. 1인당 $6,607.58부터.",
    overview: [
      "이 일정은 등반가들이 그 어떤 질문보다도 자주 던지는 물음에 답합니다: 정상 정복 후에는 무엇이 남는가? 가이드들 사이에서 킬리만자로에서 가장 완전한 루트이자 가장 높은 등정 성공률을 자랑하는 것으로 널리 평가받는 레모쇼 루트에서의 8일에 이어, 아루샤에서의 완전한 휴식일, 그리고 세렝게티로 곧장 비행해 응고롱고로 크레이터에서 보내는 온전한 하루로 이어집니다.",
      "두 절반은 의도적으로 순서가 짜여 있습니다. 레모쇼를 마친 등반가들은 신체적으로 완전히 지친 상태이므로, 이 일정은 사파리를 시작하기 전에 진짜 회복 시간을 확보해 두었으며, 또다시 긴 육로 이동 대신 비행기로 이들을 다시 야생 속으로 옮겨줍니다. 14일, 하나의 연속된 예약, 별도의 트레킹 여행사와 별도의 사파리 여행사를 조율할 필요가 없습니다."
    ],
    highlights: [
      "레모쇼 루트의 완전한 8일 고도순응 프로파일 — 킬리만자로에서도 가장 높은 등정 성공률(약 90~95%)",
      "생략되지 않는 진짜 휴식일 — 사파리 시작 전 실질적인 회복 시간",
      "아루샤에서 세렝게티로 곧장 이어지는 비행 — 두 번째 긴 육로 이동을 피합니다",
      "응고롱고로 크레이터에서 보내는 온전한 하루 — 이 지역에서 빅파이브를 만날 확률이 가장 높은 곳 중 하나",
      "하나의 연속된 예약, 하나의 가이드 관계 — 트레킹 여행사와 사파리 여행사를 따로 조율할 필요 없음"
    ],
    heroImage: "/images/gallery/Grand-Tanzania-Safari-lion.jpg",
    heroImageAlt: "Lioness resting alertly on a fallen tree trunk in Tarangire's savanna",
    gallery: [],
    pricingTiersProvisional: true,
    pricingTiers: [
      {
        pax: 2,
        reserve: 6607.58,
        sovereign: 8290.98
      },
      {
        pax: 3,
        reserve: 6607.58,
        sovereign: 8290.98
      },
      {
        pax: 4,
        reserve: 6607.58,
        sovereign: 8290.98
      }
    ],
    included: [
      "전 킬리만자로 국립공원 요금",
      "KINAPA 인증 가이드 및 전체 산악 크루",
      "산행 중 장비 및 식사",
      "아루샤–세로네라 항공편",
      "전 사파리 국립공원 및 보호구역 요금",
      "게임 드라이브",
      "13박 전체의 명시된 숙박 시설"
    ],
    excluded: [
      "국제선 항공권",
      "비자 발급 비용",
      "여행자 보험",
      "팁"
    ],
    notes: [
      "표시된 요금은 더블/트윈룸 2인 공유 기준 1인당 요금입니다. 싱글룸 이용 시 추가 요금이 발생합니다.",
      "표시된 요금은 2~4인 기준이며, 5~6인 요금은 담당 컨설턴트에게 별도로 문의해 주세요.",
      "더 합리적인 옵션(윌더니스 트레일 수준의 숙박에 해당)은 정식 등급으로 게시되는 대신 요청 시 제공됩니다 — 담당 컨설턴트에게 견적을 문의해 주세요.",
      "숙박 시설 및 요금은 예약 가능 여부에 따라 달라지며, 동일 시즌 내에서도 정확한 여행 날짜에 따라 변동될 수 있습니다."
    ],
    faq: [
      {
        q: "왜 킬리만자로를 사파리와 따로 예약하지 않고 결합하나요?",
        a: "트레킹 여행사와 별도의 사파리 여행사를 조율하려면 두 번의 예약, 두 세트의 물류, 그리고 그 사이의 전환이 제대로 처리된다는 보장도 없습니다. 이 일정은 두 여정을 하나의 연속된 예약으로 운영하며, 여러분이 직접 준비할 필요 없이 그 사이에 휴식일을 미리 넣어 둡니다."
      },
      {
        q: "등반과 사파리 사이에 휴식일이 꼭 필요한가요?",
        a: "강력히 권장합니다. 부담이 큰 정상 정복 밤을 포함한 산에서의 8일은 대부분의 등반가에게 확실한 피로를 남깁니다 — 사파리를 시작하기 전 진짜 회복의 하루를 가지면, 곧바로 이어서 진행하는 것보다 여정의 후반부를 훨씬 더 즐길 수 있습니다."
      },
      {
        q: "왜 세렝게티까지 육로 대신 비행으로 이동하나요?",
        a: "8일간의 트레킹 이후 또 다른 긴 육로 이동은 적절한 다음 단계가 아닙니다. 아루샤에서의 비행편은 당일에 현장으로 들어설 수 있게 하며, 등반의 신체적 부담 위에 차량에서 보내는 시간을 더 얹지 않습니다."
      },
      {
        q: "이 일정의 등정 성공률은 어느 정도인가요?",
        a: "레모쇼 루트의 8일 일정은 약 90~95%의 성공률을 기록하며, 이는 산에 있는 표준 루트 중에서도 가장 높은 수준입니다 — 확장된 고도순응 프로파일이 직접적인 원인입니다."
      },
      {
        q: "이 조합에서 다른 레모쇼 일정(6일 또는 7일)을 선택할 수 있나요?",
        a: "네 — 6일 및 7일 레모쇼 옵션으로 대체할 수 있습니다. 다만 이어지는 사파리와의 조합에서는 성공률이 더 높은 8일 버전이 일반적으로 더 나은 선택입니다."
      },
      {
        q: "요금에 포함되는 것과 포함되지 않는 것은 무엇인가요?",
        a: "포함: 전 킬리만자로 국립공원 요금, KINAPA 인증 가이드 및 전체 산악 크루, 산행 중 장비 및 식사, 아루샤–세로네라 항공편, 전 사파리 국립공원 및 보호구역 요금, 게임 드라이브, 13박 전체의 명시된 숙박 시설. 미포함: 국제선 항공권, 비자 발급 비용, 여행자 보험, 팁."
      },
      {
        q: "잔지바르나 르완다로 더 연장할 수 있나요?",
        a: "네 — 14일 차 이후 잔지바르 해변 연장은 여정을 완전히 이완된 상태로 마무리하는 인기 있는 방법입니다. 이 연장이나 르완다 고릴라 트레킹 연장 추가에 대해 담당 컨설턴트에게 문의해 주세요."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "모시 도착",
        description: "모시의 호텔로 이동합니다. 리드 가이드가 등반 전 전체 브리핑을 위해 여러분을 만납니다 — 장비 점검, 루트 개요, 고도 안전 프로토콜, 정상 정복 전략까지 안내합니다.",
        accommodation: "모시 소재 호텔",
        meals: "석식"
      },
      {
        day: 2,
        title: "모시 → 론도로시 게이트 → 음티 음쿠부 캠프",
        description: "레모쇼 국립공원 게이트까지 차량으로 이동한 뒤, 울창한 산악림을 도보로 지나 음티 음쿠부('큰 나무') 캠프사이트에 도착합니다 — 꾸준하고 완만한 첫날입니다.",
        accommodation: "Mti Mkubwa Camp",
        meals: "전 식사",
        location: "고도: 2,650m(8,694ft)"
      },
      {
        day: 3,
        title: "음티 음쿠부 캠프 → 시라 2 캠프",
        description: "트레일은 거대한 히스 관목지대와 황무지로 가팔라지며, 시라 능선을 넘어 탁 트인 황무지 초원의 시라 2 캠프에 도착합니다. 상당한 고도 상승이 이어지는 구간입니다.",
        accommodation: "Shira 2 Camp",
        meals: "전 식사",
        location: "고도: 3,850m(12,631ft)"
      },
      {
        day: 4,
        title: "시라 2 캠프 → 바랑코 캠프",
        description: "시라 고원을 동쪽으로 가로질러 해발 4,650m(15,256ft)의 라바 타워에 도착한 뒤 바랑코 캠프로 내려갑니다 — '높이 올라갔다가 낮게 자는' 전형적인 고도 순응일입니다.",
        accommodation: "Barranco Camp",
        meals: "전 식사",
        location: "고도: 4,000m(13,123ft)"
      },
      {
        day: 5,
        title: "바랑코 캠프 → 카랑가 캠프",
        description: "바랑코 월(기술적인 등반이 아닌 스크램블 구간)을 올라 산에서 마지막 수원인 카랑가 계곡에 도착합니다.",
        accommodation: "Karanga Camp",
        meals: "전 식사",
        location: "고도: 4,050m(13,287ft)"
      },
      {
        day: 6,
        title: "카랑가 캠프 → 바라푸 캠프",
        description: "정상이 한눈에 펼쳐지는 바라푸 캠프까지 짧게 이동합니다. 휴식, 이른 저녁 식사, 그리고 정상 정복 밤을 위한 최종 준비가 이어집니다.",
        accommodation: "Barafu Camp",
        meals: "전 식사",
        location: "고도: 4,700m(15,420ft)"
      },
      {
        day: 7,
        title: "정상 정복 밤 → 우후루 피크 → 음웨카 캠프",
        description: "자정에서 새벽 2시 사이에 출발해, 렙만 빙하와 라첼 빙하 사이를 지나 스텔라 포인트에 도착한 뒤 우후루 피크로 향합니다 — 원정 전체에서 가장 힘든 구간이자 정상입니다. 이후 음웨카 캠프까지 하산합니다.",
        accommodation: "Mweka Camp",
        meals: "전 식사",
        insiderFact: "해발 5,895m(19,341ft)의 우후루 피크는 아프리카 최고봉입니다.",
        location: "고도: 정상 5,895m(19,341ft), 하산 후 3,090m(10,138ft)"
      },
      {
        day: 8,
        title: "음웨카 캠프 → 음웨카 게이트 → 호텔",
        description: "음웨카 게이트까지 하산해 정상 정복 인증서를 수령한 뒤, 모시의 호텔로 돌아갑니다.",
        accommodation: "모시 소재 호텔",
        meals: "전 식사"
      },
      {
        day: 9,
        title: "휴식일, 모시에서 아루샤로",
        description: "진짜 회복을 위한 온전한 하루입니다 — 제대로 된 침대, 진짜 샤워, 일정 없는 하루입니다. 오후 또는 저녁에 아루샤로 이동해, 다음 날 세렝게티행 비행에 앞서 자리 잡습니다. 윌더니스 소버린 투숙객은 아루샤 커피 로지에서의 저녁 커피 산책으로 하루를 마무리합니다.",
        accommodation: "아루샤, 등급별 상이",
        meals: "전 식사",
        accommodationByTier: {
          reserve: {
            name: "Kahawa House",
            image: "/images/lodges/kahawa-house.webp",
            amenities: [
              "wifi",
              "restaurant",
              "garden"
            ]
          },
          sovereign: {
            name: "Arusha Coffee Lodge",
            image: "/images/lodges/arusha-coffee-lodge-garden-path.webp",
            amenities: [
              "wifi",
              "pool",
              "view"
            ]
          }
        }
      },
      {
        day: 10,
        title: "세렝게티로 비행",
        description: "경비행기가 아루샤에서 세렝게티의 세로네라 활주로까지 데려다줍니다 — 추가 육로 이동이 필요 없습니다. 이어서 오후 게임 드라이브가 진행됩니다.",
        accommodation: "세렝게티 중앙, 등급별 상이",
        meals: "전 식사",
        accommodationByTier: {
          reserve: {
            name: "Lahia Tented Lodge",
            image: "/images/lodges/lahia-tented-lodge.webp",
            amenities: [
              "view",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Siringiti Serengeti Camp",
            image: "/images/lodges/siringiti-serengeti-camp.webp",
            amenities: [
              "wifi",
              "view",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 11,
        title: "세렝게티 종일 투어",
        description: "세렝게티의 정착 사자와 표범 개체군, 그리고 계절에 따라서는 누 떼의 대이동까지 추적하는 온전한 하루입니다.",
        accommodation: "세렝게티 중앙, 등급별 상이",
        meals: "전 식사",
        accommodationByTier: {
          reserve: {
            name: "Lahia Tented Lodge",
            image: "/images/lodges/lahia-tented-lodge.webp",
            amenities: [
              "view",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Siringiti Serengeti Camp",
            image: "/images/lodges/siringiti-serengeti-camp.webp",
            amenities: [
              "wifi",
              "view",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 12,
        title: "세렝게티에서 응고롱고로로",
        description: "응고롱고로 고지대로 향하는 이동이며, 도중에 게임 드라이브가 포함됩니다.",
        accommodation: "응고롱고로 고지대, 등급별 상이",
        meals: "전 식사",
        accommodationByTier: {
          reserve: {
            name: "Ngorongoro Serena Lodge",
            image: "/images/lodges/ngorongoro-serena-safari-lodge.webp",
            amenities: [
              "view",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Melia Ngorongoro Lodge",
            image: "/images/lodges/ngorongoro-lodge-the-rim-room-melia-collection.webp",
            amenities: [
              "view",
              "restaurant",
              "spa"
            ]
          }
        }
      },
      {
        day: 13,
        title: "응고롱고로 크레이터 데이 투어",
        description: "크레이터로 내려가는 온전한 하루입니다 — 하나의 폐쇄된 생태계 안에 대륙에서도 손꼽히는 밀집된 야생동물이 모여 있습니다.",
        accommodation: "응고롱고로 고지대, 등급별 상이",
        meals: "전 식사",
        accommodationByTier: {
          reserve: {
            name: "Kitela Lodge",
            image: "/images/lodges/kitela-lodge.webp",
            amenities: [
              "pool",
              "view",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Melia Ngorongoro Lodge",
            image: "/images/lodges/ngorongoro-lodge-the-rim-room-melia-collection.webp",
            amenities: [
              "view",
              "restaurant",
              "spa"
            ]
          }
        }
      },
      {
        day: 14,
        title: "출발",
        description: "마지막 아침 게임 드라이브 후, 아루샤로 돌아가 귀국 국제선에 탑승합니다.",
        accommodation: "해당 없음",
        meals: "조식"
      }
    ]
  },
  {
    slug: "kilimanjaro-extension-safari",
    name: "5일 킬리만자로 익스텐션 사파리",
    duration: 5,
    destinations: [
      "arusha",
      "tarangire",
      "serengeti",
      "ngorongoro"
    ],
    type: "wildlife",
    priceFrom: 2118.96,
    groupSize: {
      min: 2,
      max: 6
    },
    badge: "new",
    bestFor: [
      "solo",
      "couples",
      "wildlife-enthusiasts"
    ],
    tagline: "2027년 시즌에 맞춰 업데이트되었습니다.",
    metaTitle: "킬리만자로 익스텐션 사파리 | 등반 후 5일 | EWA Safari Outfitters",
    metaDescription: "이제 막 하산하셨나요? 타랑기레, 세렝게티, 응고롱고로 크레이터로 곧장 이어집니다 — 모시에서 픽업, 먼저 귀국할 필요 없이. 1인당 $2,118.96부터.",
    overview: [
      "대부분의 등반가는 산을 준비하는 데 몇 달을 쏟으면서도, 그 이후에 무엇을 할지는 거의 생각하지 않습니다. 이 일정은 바로 그 여정의 후반부를 위해 만들어졌습니다 — 공항이 아닌 모시 시내에서의 픽업으로 시작하는 5일이 타랑기레의 코끼리 무리로, 세렝게티에서의 온전한 하루로, 응고롱고로 크레이터로의 하강으로, 그리고 킬리만자로 국제공항으로 이동하기 전 음토와음부에서의 마무리 문화 체험 아침으로 곧장 이어집니다.",
      "논리는 간단합니다: 여러분은 이미 탄자니아에 있고, 이미 집을 떠난 상태에 적응해 있으며, 노던 서킷의 관문 도시들은 대부분의 트레킹이 끝나는 지점에서 짧은 거리에 있습니다. 이 여정을 하나의 연속된 여행으로 예약하는 것 — 귀국 후 별도의 재방문을 계획하는 대신 — 은 보통 그 대안보다 더 저렴하고 더 간단합니다. 특히 정상 정복 밤이 부담이 큰 8일 루트를 마친 뒤라면, 시작 전 모시에서 최소 하루의 휴식일을 권장합니다."
    ],
    highlights: [
      "아루샤나 공항이 아니라 모시에서 시작 — 산에서 곧장 내려온 등반가를 위해 특별히 설계",
      "타랑기레의 코끼리 무리와 고대 바오밥나무, 노던 서킷의 클래식한 첫 장",
      "탁 트인 평원에서 사자와 치타를 추적하는 세렝게티 종일 투어",
      "동아프리카에서 빅파이브를 만나기에 가장 신뢰도 높은 장소 중 한 곳인 응고롱고로 크레이터 완전 하강",
      "여정을 마무리하는 음토와음부 문화 체험 아침, 킬리만자로 국제공항으로의 이동에 앞서",
      "먼저 귀국할 필요 없음 — 별도의 재방문을 계획하는 것보다 대개 더 간단하고 비용 효율적인 하나의 연속된 여행"
    ],
    heroImage: "/images/gallery/tarangire-elephants-baobab.webp",
    heroImageAlt: "Two elephants with tusks foraging together in tall grass in Tarangire National Park",
    gallery: [
      {
        src: "/images/gallery/serengeti-lion-pride.webp",
        alt: "Lion pride with a maned male leading lionesses through golden grass on the Serengeti plains"
      }
    ],
    pricingTiersProvisional: false,
    pricingTiers: [
      {
        pax: 2,
        trail: 2789.38
      },
      {
        pax: 3,
        trail: 2454.17
      },
      {
        pax: 4,
        trail: 2286.56
      },
      {
        pax: 5,
        trail: 2186
      },
      {
        pax: 6,
        trail: 2118.96
      }
    ],
    included: [
      "전 국립공원 및 보호구역 요금",
      "전 일정의 차량, 가이드, 연료",
      "사파리 시설에서의 풀보드",
      "첫날 밤 조식 포함",
      "식수",
      "AMREF 플라잉 닥터스 응급 보장"
    ],
    excluded: [
      "국제선 항공권",
      "비자 발급 비용",
      "여행자 보험",
      "팁",
      "선택 액티비티"
    ],
    notes: [
      "표시된 요금은 더블/트윈룸 2인 공유 기준 1인당 요금입니다. 싱글룸 이용 시 추가 요금이 발생합니다.",
      "차량, 가이드, 디젤 비용은 그룹 전체가 함께 부담하므로 참여 인원이 늘어날수록 1인당 요금이 확연히 낮아집니다.",
      "이 일정은 대부분의 킬리만자로 트레킹이 마무리되는 모시에서 시작하도록 설계되었습니다 — 픽업은 투숙 호텔에서 바로 이루어집니다.",
      "숙박 시설 및 요금은 예약 가능 여부에 따라 달라지며, 동일 시즌 내에서도 정확한 여행 날짜에 따라 변동될 수 있습니다."
    ],
    faq: [
      {
        q: "사파리를 시작하기 전에 먼저 귀국해야 하나요?",
        a: "아닙니다 — 이 일정은 대부분의 킬리만자로 트레킹이 마무리되는 모시에서 시작하도록 특별히 설계되었습니다. 픽업은 투숙 호텔에서 바로 이루어지며, 먼저 킬리만자로 국제공항을 경유할 필요가 없습니다."
      },
      {
        q: "정상 정복 후 얼마나 지나서 사파리를 시작할 수 있나요?",
        a: "특히 정상 정복 밤이 부담이 큰 루트를 마친 뒤라면, 시작 전 모시에서 최소 하루의 휴식일을 권장합니다. 그 외에는 준비가 되는 대로 이 일정을 시작할 수 있습니다 — 등반 일정에 맞는 정확한 타이밍은 담당 컨설턴트와 상의해 주세요."
      },
      {
        q: "큰 등반을 마친 후 5일이면 제대로 된 사파리로 충분한가요?",
        a: "네 — 이 일정은 서두르는 느낌 없이 효율적으로 진행되도록 설계되었습니다: 타랑기레와 세렝게티에서 각각 온전한 하루, 응고롱고로에서 온전한 크레이터 데이, 그리고 진짜 문화 체험까지 5일 안에 모두 담겨 있습니다."
      },
      {
        q: "등반으로 지쳐서 곧바로 사파리를 즐기지 못하지는 않을까요?",
        a: "대부분의 등반가는 트레킹보다 사파리 일정이 훨씬 수월하다고 느낍니다 — 걷는 대신 차량에 앉아 있고, 진행 속도도 완전히 다릅니다. 그래도 다리가 힘들다면 시작 전 휴식일을 권장합니다."
      },
      {
        q: "인원수에 따라 요금이 얼마나 달라지나요?",
        a: "차량, 가이드, 디젤 비용은 그룹 전체가 함께 부담하므로 참여 인원이 늘어날수록 1인당 요금이 확연히 낮아집니다 — 위의 요금표를 참고해 주세요."
      },
      {
        q: "요금에 포함되는 것과 포함되지 않는 것은 무엇인가요?",
        a: "포함: 전 국립공원 및 보호구역 요금, 전 일정의 차량·가이드·연료, 사파리 시설에서의 풀보드, 첫날 밤 조식, 식수, AMREF 플라잉 닥터스 응급 보장. 미포함: 국제선 항공권, 비자 발급 비용, 여행자 보험, 팁, 선택 액티비티."
      },
      {
        q: "특정 킬리만자로 루트와 결합할 수 있나요?",
        a: "네 — 이 익스텐션은 저희가 제공하는 6개 킬리만자로 루트 어디와도 결합할 수 있습니다. 아직 등반을 예약하지 않으셨다면, 담당 컨설턴트에게 레모쇼, 마차메 등 다른 루트와 이 사파리를 직접 연결하는 방법을 문의해 주세요."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "모시에서 아루샤로",
        description: "모시의 투숙 호텔에서 바로 픽업합니다 — 별도의 공항 이동이나 항공편을 준비할 필요가 없습니다. 아루샤로 향하는 이동은 므루산 기슭의 농경지와 커피 농원을 지나며, 다음 날 이른 아침 공원으로 출발하기 전 휴식할 시간을 드립니다.",
        accommodation: "Kahawa House",
        meals: "조식 포함",
        accommodationByTier: {
          trail: {
            name: "Kahawa House",
            image: "/images/lodges/kahawa-house.webp",
            amenities: [
              "wifi",
              "restaurant",
              "garden"
            ]
          }
        }
      },
      {
        day: 2,
        title: "아루샤에서 타랑기레 국립공원으로",
        description: "남쪽으로 향하는 이동은 바오밥나무로 뒤덮인 타랑기레의 평원으로 이어지며, 탄자니아 최대 규모의 코끼리 무리가 서식하는 곳입니다 — 며칠간 산을 올려다보는 데 익숙했던 시선이 탁 트인 관목지대를 바라보는 것으로 확연히 전환되는 순간입니다.",
        accommodation: "Lake Burunge Baobab Tented Lodge",
        meals: "풀보드",
        accommodationByTier: {
          trail: {
            name: "Lake Burunge Baobab Tented Lodge",
            image: "/images/lodges/lake-burunge-baobab-tented-lodge.webp",
            amenities: [
              "restaurant",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 3,
        title: "카라투에서 세렝게티로",
        description: "응고롱고로 보호구역을 가로질러 세렝게티 본토로 진입하는 온전한 이동일입니다 — 아프리카에서 가장 유명한 평원이며, 많은 등반가에게 사파리 연장을 계획할 만한 가치가 있었다고 느끼게 하는 바로 그 이유입니다.",
        accommodation: "Serengeti Katikati Camp",
        meals: "풀보드",
        accommodationByTier: {
          trail: {
            name: "Serengeti Katikati Camp",
            image: "/images/lodges/serengeti-katikati-camp.webp",
            amenities: [
              "ensuite",
              "restaurant",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 4,
        title: "세렝게티에서 응고롱고로 크레이터로",
        description: "응고롱고로로 되돌아가는 이동이며, 크레이터 바닥으로 내려가 지구상에서 가장 밀집된 대형 포유류 개체군 중 하나 속에서 빅파이브와 함께 온전한 하루를 보냅니다.",
        accommodation: "Ngorongoro Farm House",
        meals: "풀보드",
        insiderFact: "응고롱고로 크레이터는 약 260km² 규모의 폐쇄된 생태계로, 이곳에 서식하는 동물 대부분은 평생 밖으로 나가지 않습니다.",
        accommodationByTier: {
          trail: {
            name: "Ngorongoro Farm House",
            image: "/images/lodges/ngorongoro-farm-house.webp",
            amenities: [
              "restaurant",
              "garden"
            ]
          }
        }
      },
      {
        day: 5,
        title: "음토와음부 문화 체험 & JRO 공항으로 이동",
        description: "시장 마을 음토와음부에서 보내는 마지막 문화 체험 아침입니다 — 서둘러 지나가는 사진 촬영이 아니라 여유로운 진짜 방문입니다 — 이후 킬리만자로 국제공항으로 이동해 다음 여정을 준비합니다.",
        accommodation: "해당 없음",
        meals: "풀보드"
      }
    ]
  },
  {
    slug: "5-day-comfort-tanzania-safari",
    name: "5일 컴포트 탄자니아 사파리",
    duration: 5,
    destinations: [
      "tarangire",
      "ngorongoro",
      "serengeti",
      "manyara"
    ],
    type: "wildlife",
    priceFrom: 1909,
    groupSize: {
      min: 1,
      max: 8
    },
    badge: "popular",
    bestFor: [
      "couples",
      "first-time",
      "families"
    ],
    overview: [
      "5일은 노던 서킷을 제대로 둘러보는 데 필요한 최소한의 시간이며, 이 일정은 단 하루도 허투루 쓰지 않습니다.",
      "빠르게 진행되지만 결코 서두르는 느낌은 들지 않습니다. 타랑기레의 고대 바오밥나무와 아프리카 최대 규모의 코끼리 무리 사이에서 보내는 하루, 빅파이브와 검은코뿔소를 만나기 위한 응고롱고로 크레이터로의 완전한 하강, 탁 트인 평원에서 사자와 치타를 추적하는 세렝게티에서의 하루 반, 그리고 나무를 오르는 사자와 플라밍고로 뒤덮인 호숫가가 있는 마니야라 호수에서의 마지막 일정까지. 이는 사파리를 처음 떠나는 여행자와 일정이 빠듯한 커플에게 저희가 가장 자주 추천하는 일정입니다 — 노던 서킷의 이야기를 축약하되 결코 부족함 없이 담아냈습니다."
    ],
    highlights: [
      "5일간의 완전한 노던 서킷 — 타랑기레, 응고롱고로, 세렝게티 & 마니야라",
      "고대 바오밥 숲과 아프리카 최대 규모의 코끼리 무리",
      "응고롱고로 크레이터로의 하강 — 빅파이브와 검은코뿔소",
      "세렝게티 게임 드라이브 — 사자, 치타, 그리고 대이동",
      "마니야라 호수의 나무 오르는 사자와 플라밍고"
    ],
    heroImage: "/images/gallery/lion-sleeping-tree-branch-serengeti.jpg",
    heroImageAlt: "Lion sleeping stretched out on a tree branch in the Serengeti",
    gallery: [],
    included: [
      "팝업 루프가 장착된 프라이빗 토요타 랜드크루저 4x4",
      "전문 전담 드라이버 가이드",
      "전 일정 숙박(4박)",
      "모든 국립공원 입장료 — 타랑기레, 응고롱고로, 세렝게티, 마니야라 호수",
      "삼시세끼 포함(1박째는 조식 포함)",
      "차량 내 식수 무제한 제공",
      "AMREF 플라잉 닥터스 응급 보험",
      "공항 도착 송영"
    ],
    excluded: [
      "국제선 또는 국내선 항공권",
      "탄자니아 입국 비자(약 미화 50달러)",
      "팁 및 사례비",
      "개인 용품 및 세탁비",
      "선택 활동",
      "AMREF 보장 범위를 초과하는 여행자 보험"
    ],
    includedCategorized: {
      transfers: [
        "1일 차 공항 도착 송영",
        "사파리 전 일정에 걸친 목적지 간 이동 송영"
      ],
      accommodationMeals: [
        "카하와 하우스에서 조식 포함 숙박(1박째)",
        "삼시세끼 포함 — 사파리 숙소에서의 전 식사(2~4박째)",
        "일정표에 따른 숙박"
      ],
      guidingGameDrives: [
        "모든 국립공원 입장료 — 타랑기레, 응고롱고로 보전구역(통과료 + 크레이터), 세렝게티, 마니야라 호수",
        "팝업 루프가 장착된 프라이빗 4x4 토요타 랜드크루저로 진행되는 모든 게임 드라이브",
        "전 일정 전문 전담 드라이버 가이드",
        "AMREF 플라잉 닥터스 응급 보험",
        "차량 내 식수 무제한 제공",
        "차량 내 지정 청량음료 및 맥주 제공"
      ]
    },
    excludedCategorized: [
      "국제선 또는 국내선 항공권",
      "탄자니아 입국 비자(대부분 국적 기준 약 미화 50달러)",
      "가이드 및 캠프 직원을 위한 팁 및 사례비",
      "개인 용품, 세탁비, 전화 요금",
      "선택 활동(열기구 사파리 1인당 $550, 마사이 마을 방문 1인당 $25, 코뿔소 트래킹 1인당 $120, 워킹 사파리 1인당 $59)",
      "AMREF 플라잉 닥터스 보장 범위를 초과하는 여행자 보험"
    ],
    notes: [
      "표시된 요금은 더블/트윈룸을 2인이 함께 사용할 경우 1인당 요금이며, 싱글룸 이용 시 추가 요금이 적용됩니다.",
      "숙박시설 및 요금은 예약 가능 여부에 따라 달라질 수 있으며, 같은 시즌 내에서도 정확한 여행 날짜에 따라 변동될 수 있습니다.",
      "탄자니아 국립공원 및 보전구역 입장료는 정부가 책정하며, 사전 예고 없이 변경될 수 있습니다.",
      "예약 확정을 위해 10%의 예약금이 필요하며, 잔금은 출발일 최소 28일 전까지 지불해야 합니다."
    ],
    pricingTiers: [
      {
        pax: 2,
        trail: 2486
      },
      {
        pax: 3,
        trail: 2200
      },
      {
        pax: 4,
        trail: 2061
      },
      {
        pax: 5,
        trail: 1982
      },
      {
        pax: 6,
        trail: 1909
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "아루샤 도착",
        description: "아루샤 공항(ARK) 또는 킬리만자로 국제공항(JRO)에 도착해 EWA Safari Outfitters 담당자를 만납니다. 따뜻한 환영과 간단한 브리핑에 이어, 아루샤의 매력적이고 위치가 좋은 숙소 카하와 하우스로 편안하게 이동합니다 — 앞으로의 일정을 위한 이상적인 출발점입니다. 푹 쉬세요. 부시에서의 여정은 내일부터 시작됩니다.",
        accommodation: "Kahawa House",
        meals: "석식 및 조식",
        insiderFact: "아루샤는 해발 1,400m에 위치해 있어 국립공원에 들어가기 전 편안하게 고도 적응을 할 수 있는 완충지 역할을 합니다. 대부분의 사파리 업체가 이곳에서 여정 사이사이 차량을 정비하고 물자를 보충합니다.",
        accommodationByTier: {
          trail: {
            name: "Kahawa House",
            image: "/images/lodges/kahawa-house.webp",
            amenities: [
              "wifi",
              "restaurant",
              "garden"
            ]
          }
        }
      },
      {
        day: 2,
        title: "타랑기레 국립공원",
        description: "조식 후, 전담 가이드가 남쪽으로 2시간 30분 거리의 타랑기레까지 안내합니다. 수령 1,000년이 넘는 것도 있는 고대 바오밥나무들이 붉은 대지 위에 파수꾼처럼 솟아 있고, 그 아래를 이동하는 코끼리 떼는 말문이 막힐 정도의 규모로 노던 서킷을 상징합니다. 건기가 되면 타랑기레 강이 놀라운 규모의 야생동물을 끌어모으며, 사자, 표범, 얼룩말, 기린, 오릭스와 함께 500종이 넘는 조류가 공원의 다채로운 지형 곳곳에 퍼져 있습니다. 공원 내 경치 좋은 피크닉 장소에서 점심을 즐긴 뒤, 늦은 오후에는 부룽게 호숫가에 자리한 텐티드 로지로 이동합니다.",
        accommodation: "Lake Burunge Baobab Tented Lodge",
        meals: "삼시세끼 포함",
        insiderFact: "타랑기레는 노던 서킷의 어떤 공원보다도 코끼리 밀도가 높습니다 — 건기에 강이 수 마일 내 유일한 수원이 되면 200마리가 넘는 무리도 드물지 않게 볼 수 있습니다.",
        accommodationByTier: {
          trail: {
            name: "Lake Burunge Baobab Tented Lodge",
            image: "/images/lodges/lake-burunge-baobab-tented-lodge.webp",
            amenities: [
              "pool",
              "wifi",
              "restaurant",
              "lake-view"
            ]
          }
        }
      },
      {
        day: 3,
        title: "응고롱고로 크레이터 & 세렝게티 국립공원",
        description: "이른 아침 응고롱고로 크레이터 가장자리로 출발해 전망 포인트에 잠시 멈춥니다. 지름 20킬로미터, 깊이 600미터에 25,000마리의 대형 포유류가 상주하는 곳입니다. 구불구불한 비포장도로를 따라 하강이 시작됩니다. 내부에서는 차량 주변에서 느긋하게 쉬는 사자 무리, 광활한 얼룩말과 누 떼, 점심 휴식 장소가 되는 응고이톡토크 하마 웅덩이, 소다 호수의 플라밍고, 그리고 동아프리카에서 가장 안정적으로 관찰 가능한 개체군인 검은코뿔소를 만날 가능성까지 경험할 수 있습니다. 크레이터에서 종일 게임 드라이브를 마친 후, 동쪽으로 이동해 세렝게티의 텐티드 캠프에서 선다우너를 즐길 시간에 맞춰 도착합니다.",
        accommodation: "Kubukubu Tented Lodge, Serengeti",
        meals: "삼시세끼 포함",
        insiderFact: "응고롱고로는 폐쇄된 생태계입니다 — 600미터에 달하는 크레이터 벽이 수백만 년 동안 자립적인 야생동물 개체군을 그 안에 가두어 왔으며, 이로써 지구상에서 대형 포유류가 가장 밀집된 지역이 되었습니다.",
        accommodationByTier: {
          trail: {
            name: "Kubukubu Tented Lodge",
            image: "/images/lodges/kubukubu-tented-lodge.webp",
            amenities: [
              "ensuite",
              "restaurant",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 4,
        title: "세렝게티 국립공원 종일 일정",
        description: "부시가 깨어나는 이른 아침 게임 드라이브를 즐깁니다 — 밤새 사냥을 마치고 돌아오는 사자 무리, 흰개미 둔덕을 감시 초소로 활용하는 치타, 서늘한 아침 공기 속에서 평원을 가로지르는 코끼리들. 세렝게티는 면적 14,763제곱킬로미터에 달하며 아프리카 최대의 포식동물 밀집지를 이루고 있습니다. 대이동 경로가 매년 이곳을 지나가며, 가이드는 현재 무리의 위치를 정확히 파악하고 있습니다. 나비 힐 게이트에서 점심을 즐긴 후, 공원이 이끄는 대로 오후 드라이브를 이어가다가 카라투 방향으로 이동해 고지대 숲에 자리한 응고롱고로 팜 하우스에서 숙박합니다.",
        accommodation: "Ngorongoro Farm House, Karatu",
        meals: "삼시세끼 포함",
        insiderFact: "세렝게티에는 3,000마리가 넘는 사자가 서식합니다 — 지구상 어떤 보호구역보다도 많은 개체수이자, 방문객에게 가장 꾸준히 관찰되는 개체군입니다.",
        accommodationByTier: {
          trail: {
            name: "Ngorongoro Farm House",
            image: "/images/lodges/ngorongoro-farm-house.webp",
            amenities: [
              "wifi",
              "restaurant",
              "highland-garden",
              "farm"
            ]
          }
        }
      },
      {
        day: 5,
        title: "마니야라 호수 & 아루샤 귀환",
        description: "부시에서 보내는 마지막 아침입니다. 조식 후 마니야라 호수까지 1시간 동안 이동하며, 커피 농장과 바나나 숲이 펼쳐진 농업 고지대를 지나 리프트 밸리 바닥으로 내려갑니다. 마니야라는 나무를 오르는 사자로 유명하며, 이 행동은 이곳에서 60년 넘게 기록되어 왔고 동아프리카에서는 우간다의 이샤샤를 제외하면 어디에서도 볼 수 없습니다. 이 공원에는 놀랍도록 다양한 서식지가 응축되어 있습니다 — 코끼리와 블루몽키가 서식하는 빽빽한 지하수림, 탁 트인 범람원, 그리고 극적인 리프트 밸리 단층애를 배경으로 플라밍고가 늘어선 소다 호수까지. 게임 드라이브와 공원 내 피크닉 점심을 즐긴 후, 북쪽으로 아루샤까지 이동해 작별 송영을 받습니다.",
        accommodation: "출발",
        meals: "조식 및 중식"
      }
    ]
  },
  {
    slug: "6-day-comfort-tanzania-safari",
    name: "6일 컴포트 탄자니아 사파리",
    duration: 6,
    destinations: [
      "tarangire",
      "serengeti",
      "ngorongoro",
      "manyara"
    ],
    type: "wildlife",
    priceFrom: 2554,
    groupSize: {
      min: 1,
      max: 8
    },
    bestFor: [
      "couples",
      "first-time",
      "families",
      "wildlife-enthusiasts"
    ],
    overview: [
      "이 여정은 5일 컴포트 사파리의 형님 격입니다 — 같은 노던 서킷에 하루가 추가되며, 그 추가된 하루는 오롯이 세렝게티에 할애됩니다.",
      "이 하루 더 늘어난 밤 덕분에, 포식동물이 가장 활발한 시간대인 세렝게티에서의 진정한 이른 아침 게임 드라이브를 즐길 수 있습니다. 여기에 타랑기레의 고대 바오밥 숲과 기록적인 규모의 코끼리 무리, 빅파이브와 검은코뿔소를 만나기 위한 응고롱고로 크레이터로의 완전한 하강, 마니야라 호수의 나무 오르는 사자까지 더해집니다. 서류상으로는 작은 변화처럼 보입니다 — 하루가 늘고, 한 공원을 한 번이 아니라 두 번 방문하는 정도지만, 예측할 수 없는 야생동물 목격을 중심으로 짜인 이 땅에서는 세렝게티에서의 그 추가 하루가 종종 서킷을 '보는 것'과 실제로 '경험하는 것'의 차이를 만듭니다."
    ],
    highlights: [
      "세렝게티에서의 온전한 이틀 — 모든 것을 바꾸는 추가의 하루",
      "타랑기레의 코끼리 무리와 고대 바오밥 숲",
      "응고롱고로 크레이터로의 완전한 하강 — 빅파이브와 검은코뿔소",
      "마니야라 호수의 나무 오르는 사자와 플라밍고",
      "포식동물이 가장 활발한 이른 아침 세렝게티 게임 드라이브"
    ],
    heroImage: "/images/gallery/wildebeest-herd-migration-serengeti-plains.jpg",
    heroImageAlt: "Wildebeest herd migrating across the open Serengeti plains near a solitary tree",
    gallery: [],
    included: [
      "팝업 루프가 장착된 프라이빗 토요타 랜드크루저 4x4",
      "전문 전담 드라이버 가이드",
      "전 일정 숙박(5박)",
      "모든 국립공원 입장료 — 타랑기레, 세렝게티(2일), 응고롱고로, 마니야라 호수",
      "전 일정 삼시세끼 포함(1박째는 석식 및 조식)",
      "차량 내 식수 무제한 제공",
      "AMREF 플라잉 닥터스 응급 보험",
      "모든 공항 및 목적지 간 이동 송영"
    ],
    excluded: [
      "국제선 또는 국내선 항공권",
      "탄자니아 입국 비자(약 미화 50달러)",
      "팁 및 사례비",
      "개인 용품 및 세탁비",
      "선택 활동",
      "AMREF 보장 범위를 초과하는 여행자 보험"
    ],
    includedCategorized: {
      transfers: [
        "1일 차 공항 도착 송영",
        "사파리 전 일정에 걸친 목적지 간 이동 송영"
      ],
      accommodationMeals: [
        "카하와 하우스에서 석식 및 조식(1박째)",
        "모든 사파리 숙소에서 삼시세끼 포함(2~5박째)",
        "일정표에 따른 숙박"
      ],
      guidingGameDrives: [
        "모든 국립공원 입장료 — 타랑기레, 세렝게티(2일), 응고롱고로 보전구역(통과료 + 크레이터), 마니야라 호수",
        "팝업 루프가 장착된 프라이빗 4x4 토요타 랜드크루저로 진행되는 모든 게임 드라이브",
        "전 일정 전문 전담 드라이버 가이드",
        "AMREF 플라잉 닥터스 응급 보험",
        "차량 내 식수 무제한 제공",
        "차량 내 지정 청량음료 및 맥주 제공"
      ]
    },
    excludedCategorized: [
      "국제선 또는 국내선 항공권",
      "탄자니아 입국 비자(대부분 국적 기준 약 미화 50달러)",
      "가이드 및 캠프 직원을 위한 팁 및 사례비",
      "개인 용품, 세탁비, 전화 요금",
      "선택 활동(열기구 사파리 1인당 $550, 마사이 마을 방문 1인당 $25, 코뿔소 트래킹 1인당 $120, 워킹 사파리 1인당 $59)",
      "AMREF 플라잉 닥터스 보장 범위를 초과하는 여행자 보험"
    ],
    notes: [
      "표시된 요금은 더블/트윈룸을 2인이 함께 사용할 경우 1인당 요금이며, 싱글룸 이용 시 추가 요금이 적용됩니다.",
      "숙박시설 및 요금은 예약 가능 여부에 따라 달라질 수 있으며, 같은 시즌 내에서도 정확한 여행 날짜에 따라 변동될 수 있습니다.",
      "탄자니아 국립공원 및 보전구역 입장료는 정부가 책정하며, 사전 예고 없이 변경될 수 있습니다.",
      "예약 확정을 위해 10%의 예약금이 필요하며, 잔금은 출발일 최소 28일 전까지 지불해야 합니다."
    ],
    pricingTiers: [
      {
        pax: 2,
        trail: 3226
      },
      {
        pax: 3,
        trail: 2825
      },
      {
        pax: 4,
        trail: 2729
      },
      {
        pax: 5,
        trail: 2642
      },
      {
        pax: 6,
        trail: 2554
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "아루샤 도착",
        description: "아루샤 공항(ARK) 또는 킬리만자로 국제공항(JRO)에 도착해 EWA Safari Outfitters 담당자를 만납니다. 아루샤에서 편안하고 개성 있는 숙소인 카하와 하우스로 이동합니다 — 탄자니아에서의 첫날 밤을 보내기에 이상적인 곳입니다. 휴식을 취하고 짐을 풀며, 앞으로 5일간 펼쳐질 여정을 준비하세요.",
        accommodation: "Kahawa House",
        meals: "석식 및 조식",
        insiderFact: "아루샤는 해발 1,400m에 위치해 있어 저녁에는 선선한 날씨가 흔합니다. 탄자니아의 어드벤처 수도인 이곳은 킬리만자로, 세렝게티, 그리고 노던 서킷 전역으로 향하는 관문입니다.",
        accommodationByTier: {
          trail: {
            name: "Kahawa House",
            image: "/images/lodges/kahawa-house.webp",
            amenities: [
              "wifi",
              "restaurant",
              "garden"
            ]
          }
        }
      },
      {
        day: 2,
        title: "타랑기레 국립공원",
        description: "조식 후, 전담 가이드가 남쪽으로 2시간 거리의 타랑기레까지 안내합니다. 수령 1,000년이 넘는 것도 있는 이 공원의 고대 바오밥나무와, 그 아래를 놀라운 규모로 이동하는 코끼리 떼가 이곳의 경험을 정의합니다. 탄자니아는 세계 최대의 아프리카코끼리 개체군이 서식하는 곳이며, 타랑기레는 노던 서킷 중에서도 가장 밀도가 높은 지역입니다. 건기가 되면 타랑기레 강이 수백 킬로미터에 걸쳐 유일한 수원이 되어 사자, 버팔로, 얼룩말, 표범과 함께 500종이 넘는 조류를 끌어모읍니다. 경치 좋은 피크닉 장소에서 도시락 점심을 즐긴 뒤, 늦은 오후 부룽게 호숫가의 로지로 이동합니다.",
        accommodation: "Lake Burunge Baobab Tented Lodge",
        meals: "삼시세끼 포함",
        insiderFact: "건기(6월~10월) 동안 타랑기레 강은 수백 킬로미터에 걸쳐 유일한 영구 수원이 됩니다 — 동물들이 이곳으로 모여드는 밀도는 아프리카 대륙의 어떤 공원과 견주어도 뒤지지 않습니다.",
        accommodationByTier: {
          trail: {
            name: "Lake Burunge Baobab Tented Lodge",
            image: "/images/lodges/lake-burunge-baobab-tented-lodge.webp",
            amenities: [
              "pool",
              "wifi",
              "restaurant",
              "lake-view"
            ]
          }
        }
      },
      {
        day: 3,
        title: "세렝게티 국립공원 — 도착 및 첫 게임 드라이브",
        description: "타랑기레에서 세렝게티로 가는 길은 응고롱고로 보전구역을 지나 평원으로 내려갑니다. 마사이어로 '시링기티'는 '끝없는 평원의 땅'이라는 뜻입니다 — 세렝게티가 사방으로 지평선까지 펼쳐진 모습을 처음 보는 순간, 그 이름이 필연적이었다는 것을 느끼게 됩니다. 늦은 오전에 도착해 곧바로 첫 게임 드라이브를 시작합니다. 세렝게티 남부의 짧은 초원 지대는 치타의 주요 서식지이며, 강 유역에는 표범이 숨어 있고, 탁 트인 평원에서는 놀라울 정도로 꾸준히 사자를 목격할 수 있습니다. 황혼 무렵 평원이 호박빛으로 물들 때 쿠부쿠부의 데크에서 선다우너를 즐깁니다.",
        accommodation: "Kubukubu Tented Lodge, Serengeti",
        meals: "삼시세끼 포함",
        insiderFact: "세렝게티는 지구상 어떤 생태계보다도 높은 밀도의 대형 포식동물을 품고 있습니다 — 3,000마리가 넘는 사자, 1,000마리 이상의 치타, 그리고 강변 숲에는 셀 수 없이 많은 표범이 서식합니다.",
        accommodationByTier: {
          trail: {
            name: "Kubukubu Tented Lodge",
            image: "/images/lodges/kubukubu-tented-lodge.webp",
            amenities: [
              "ensuite",
              "restaurant",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 4,
        title: "세렝게티 국립공원 종일 일정",
        description: "이른 출발 — 동틀 무렵 부시의 모습은 그 무엇과도 비교할 수 없습니다. 사자 무리가 밤새 사냥을 마치고 돌아오고, 치타는 흰개미 둔덕을 관측소로 활용하며, 코끼리는 서늘한 아침 공기 속에서 평원을 가로지릅니다. 이 온전한 하루는 오롯이 공원 안에서 여러분의 것입니다 — 가이드는 정해진 경로가 아니라 야생동물을 따라 움직입니다. 평원이 내려다보이는 나비 힐 게이트 피크닉 장소에서 점심을 즐깁니다. 오후 게임 드라이브는 공원이 정하는 흐름에 따라 계속됩니다. 이 날이야말로 6일 사파리가 5일 일정과 차별화되는 지점입니다 — 세렝게티에서 보내는 시간이야말로 이곳에서 쓸 수 있는 가장 가치 있는 자산입니다.",
        accommodation: "Kubukubu Tented Lodge, Serengeti",
        meals: "삼시세끼 포함",
        insiderFact: "그레이트 누 대이동은 끊임없이 이어지는 움직임입니다 — 무리는 1년 365일 언제나 세렝게티 생태계 어딘가에 있습니다. 가이드는 그 위치를 실시간으로 파악하고 있습니다.",
        accommodationByTier: {
          trail: {
            name: "Kubukubu Tented Lodge",
            image: "/images/lodges/kubukubu-tented-lodge.webp",
            amenities: [
              "ensuite",
              "restaurant",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 5,
        title: "응고롱고로 크레이터",
        description: "세렝게티에서 1시간 이동하면 응고롱고로 크레이터의 가장자리에 도착합니다. 이곳에 서면, 크레이터는 발아래로 600미터 떨어져 있고 지름은 20킬로미터에 달하며, 그 바닥은 호수, 늪지, 초원, 숲으로 이루어진 자기완결적인 세계입니다. 구불구불한 비포장도로를 따라 칼데라 안으로 하강이 시작됩니다. 내부에는 빅파이브를 포함해 약 25,000마리의 대형 포유류가 서식합니다. 응고롱고로 내 검은코뿔소 개체군은 동아프리카에서 가장 안정적으로 관찰 가능한 개체군입니다. 응고이톡토크 하마 웅덩이가 점심 휴식 장소입니다. 소다 호수를 따라 플라밍고가 늘어서 있습니다. 크레이터에서 종일 게임 드라이브를 마친 후, 고지대 숲에 자리한 응고롱고로 팜 하우스로 올라갑니다.",
        accommodation: "Ngorongoro Farm House, Karatu",
        meals: "삼시세끼 포함",
        insiderFact: "응고롱고로 크레이터는 약 250만 년 전 거대한 화산이 안쪽으로 붕괴하면서 형성되었습니다 — 이때 생겨난 벽은 그 이후로 지구상에서 가장 놀라운 야생동물 밀집 지역 중 하나를 유지해 왔습니다.",
        accommodationByTier: {
          trail: {
            name: "Ngorongoro Farm House",
            image: "/images/lodges/ngorongoro-farm-house.webp",
            amenities: [
              "wifi",
              "restaurant",
              "highland-garden",
              "farm"
            ]
          }
        }
      },
      {
        day: 6,
        title: "마니야라 호수 & 아루샤 귀환",
        description: "응고롱고로 팜 하우스에서 조식을 마친 후, 북쪽으로 이동하며 카라투의 농업 고지대를 지나 리프트 밸리 바닥으로 내려갑니다. 이곳에는 그레이트 리프트 밸리 단층애와 알칼리성 호수 사이에 자리한 마니야라 호수 국립공원이 있습니다. 이 공원에서 가장 유명한 주민은 나무를 오르는 사자로, 이 행동은 이곳에서 60년 넘게 기록되어 왔습니다. 사자 외에도 코끼리, 버팔로, 기린, 하마와 함께 400종이 넘는 조류가 서식합니다. 게임 드라이브와 공원 내 피크닉 점심을 즐긴 후, 북쪽으로 아루샤까지 이동합니다. EWA 담당자가 정성 어린 작별 인사를 위해 마중 나옵니다.",
        accommodation: "출발",
        meals: "조식 및 석식 포함"
      }
    ]
  },
  {
    slug: "kenya-tanzania-highlights-safari",
    name: "케냐 & 탄자니아 하이라이트 사파리",
    duration: 10,
    destinations: [
      "nairobi",
      "amboseli",
      "masai-mara",
      "serengeti",
      "ngorongoro",
      "manyara"
    ],
    type: "combination",
    priceFrom: 4600,
    groupSize: {
      min: 2,
      max: 8
    },
    bestFor: [
      "luxury",
      "couples",
      "wildlife-enthusiasts",
      "photography"
    ],
    overview: [
      "경험 많은 사파리 가이드에게 동아프리카에서 절대 놓쳐서는 안 될 다섯 곳을 꼽아 달라고 하면, 대략 이 10일 일정과 같은 답이 돌아올 것입니다.",
      "여정은 킬리만자로를 배경으로 평원을 누비는 암보셀리의 코끼리 무리로 시작되며, 이어 마라 강 크로싱 지역을 포함한 마사이마라에서의 1박 2일을 보낸 뒤, 이시바니아에서의 육로 국경 통과를 통해 케냐에서 탄자니아의 세렝게티로 매끄럽게 이어집니다. 정치적으로는 국경선이 나뉘어 있지만 생태학적으로는 하나로 이어진 땅입니다. 세렝게티의 치타와 사자 서식지에서 보내는 온전한 이틀은 응고롱고로 크레이터 안에서의 온전한 하루로 이어지고, 동아프리카 어디에서도 볼 수 없는 나무 오르는 사자의 행동을 볼 수 있는 마니야라 호수에서의 방문으로 마무리됩니다. 전 일정 컴포트 또는 프리미엄 등급으로 이용 가능한 이 여정은, 두 나라의 대표적인 풍경을 어느 하나도 아쉽지 않게 만끽하고 싶은 여행자, 특히 사진 애호가를 위해 구성된 하이라이트 모음입니다."
    ],
    highlights: [
      "마사이마라 — 케냐에서 가장 유명한 야생동물 여행지이자 강 크로싱 지역",
      "암보셀리 국립공원 — 상징적인 킬리만자로를 배경으로 한 코끼리 무리",
      "세렝게티에서의 온전한 이틀 — 아프리카 최대의 포식동물 밀집지",
      "응고롱고로 크레이터에서의 온전한 하루 — 빅파이브, 검은코뿔소, 그리고 세계 최대의 칼데라",
      "국경 간 이동 — 마사이마라에서 세렝게티까지 매끄러운 육로 여정",
      "마니야라 호수의 나무 오르는 사자 — 동아프리카 어디에서도 볼 수 없는 행동"
    ],
    heroImage: "/images/gallery/zebras-grazing.webp",
    heroImageAlt: "Two zebras grazing in grassland with the Ngorongoro highlands in the distance",
    gallery: [],
    included: [
      "선택한 등급에 따른 전 일정 숙박(9박)",
      "팝업 루프가 장착된 프라이빗 토요타 랜드크루저 4x4(탄자니아)",
      "프라이빗 케냐 사파리 차량(케냐)",
      "전 일정 전문 전담 가이드",
      "모든 국립공원 입장료 — 암보셀리, 마사이마라, 세렝게티, 응고롱고로(통과료 + 크레이터), 마니야라 호수",
      "전 일정 삼시세끼 포함",
      "국경 간 이동 — 마사이마라에서 세렝게티까지",
      "케냐 및 탄자니아 내 모든 공항 송영",
      "AMREF 플라잉 닥터스 응급 보험",
      "정부세 — 케냐 및 탄자니아"
    ],
    excluded: [
      "국제선 항공권",
      "케냐 및 탄자니아 입국 비자(각 약 미화 50~100달러)",
      "팁 및 사례비",
      "개인 용품 및 여행자 보험",
      "선택 활동"
    ],
    includedCategorized: {
      transfers: [
        "나이로비 공항 도착 송영(1일 차)",
        "국경 간 육로 이동 — 마사이마라에서 세렝게티까지(5일 차)",
        "양국 전 일정에 걸친 목적지 간 이동 송영",
        "아루샤 출발 공항 송영(10일 차)"
      ],
      accommodationMeals: [
        "1박째 석식(나이로비)",
        "모든 사파리 숙소에서 삼시세끼 포함(2~9박째)",
        "선택한 컴포트 또는 프리미엄 등급에 따른 숙박"
      ],
      guidingGameDrives: [
        "모든 국립공원 입장료 — 암보셀리, 마사이마라, 세렝게티, 응고롱고로(NCA 통과료 + 크레이터), 마니야라 호수",
        "프라이빗 4x4 토요타 랜드크루저(탄자니아) 및 프라이빗 케냐 사파리 차량으로 진행되는 모든 게임 드라이브",
        "전 일정 영어 구사 가능한 숙련된 전문 전담 드라이버 가이드 — 양국 경험 보유",
        "AMREF 플라잉 닥터스 응급 보험",
        "차량 내 식수 무제한 제공",
        "정부세 — 케냐 및 탄자니아 양국"
      ]
    },
    excludedCategorized: [
      "국제선 항공권",
      "케냐 eTA(약 미화 30달러) 및 탄자니아 입국 비자(약 미화 50달러) — 둘 다 사전 온라인 신청 가능",
      "가이드 및 캠프 직원을 위한 팁 및 사례비",
      "개인 용품 및 여행자 보험",
      "선택 활동(열기구 사파리 1인당 $550, 마라 나이트 드라이브 1인당 $85, 마사이 마을 방문 1인당 $25, 올두바이 협곡 1인당 $30, 코뿔소 트래킹 1인당 $120)"
    ],
    notes: [
      "표시된 요금은 더블/트윈룸을 2인이 함께 사용할 경우 1인당 요금이며, 싱글룸 이용 시 추가 요금이 적용됩니다.",
      "컴포트 등급 숙소: Ol Tukai Lodge, Governors Camp, Kubukubu Tented Lodge, Ngorongoro Farm House, Kirurumu Manyara Lodge. 프리미엄 등급: Tawi Lodge, Governors Camp, &Beyond Serengeti Under Canvas, The Manor at Ngorongoro, andBeyond Lake Manyara Tree Lodge.",
      "탄자니아 국립공원 및 보전구역 입장료는 정부가 책정하며, 사전 예고 없이 변경될 수 있습니다.",
      "예약 확정을 위해 30%의 예약금이 필요하며, 잔금은 출발일 60일 전까지 지불해야 합니다."
    ],
    pricingTiers: [
      {
        pax: 2,
        trail: 6600,
        reserve: 9700
      },
      {
        pax: 3,
        trail: 5700,
        reserve: 8400
      },
      {
        pax: 4,
        trail: 5100,
        reserve: 7500
      },
      {
        pax: 6,
        trail: 4600,
        reserve: 6700
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "케냐 나이로비 도착",
        description: "동아프리카 익스페디션은 나이로비에서 시작됩니다. 조모 케냐타 국제공항(NBO)에 도착해 호텔로 이동합니다. 가이드와 함께하는 웰컴 브리핑에서는 앞으로의 10일간의 여정을 안내합니다 — 두 나라에 걸친 다섯 곳의 국립공원은 저마다 고유한 개성과 야생동물의 특징을 지니고 있습니다. 시간이 허락한다면 데이비드 셸드릭 야생동물 신탁의 코끼리 고아원, 기린 센터, 카렌 블릭센 박물관 모두 어렵지 않게 방문할 수 있습니다.",
        accommodation: "Hemingways Nairobi",
        meals: "석식",
        insiderFact: "케냐와 탄자니아는 각각 별도의 입국 비자가 필요합니다 — 케냐의 eTA는 etakenya.go.ke에서, 탄자니아의 전자비자는 eservices.immigration.go.tz에서 신청할 수 있습니다. 여행 최소 2주 전에 신청하세요.",
        accommodationByTier: {
          trail: {
            name: "Hemingways Nairobi",
            image: "/images/lodges/hemingways-nairobi.webp",
            amenities: [
              "wifi",
              "pool",
              "spa",
              "restaurant"
            ]
          },
          reserve: {
            name: "Hemingways Nairobi",
            image: "/images/lodges/hemingways-nairobi.webp",
            amenities: [
              "wifi",
              "pool",
              "spa",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 2,
        title: "나이로비에서 암보셀리 국립공원으로",
        description: "아침에 나이로비에서 남쪽으로 이동하면 암보셀리 국립공원에 도착합니다 — 이곳에서는 평원이 누구나 알아볼 수 있는 킬리만자로산의 하얀 돔을 향해 펼쳐져 있습니다. 암보셀리의 대규모 코끼리 개체군은 탁 트인 평원을 정말이지 태연하게 이동합니다 — 수십 년간 예의 바른 방문객들과 공존해 온 덕분에 아프리카에서 가장 가까이서 관찰할 수 있는 개체군 중 하나가 되었습니다. 좋은 빛 아래에서 스무 마리 규모의 코끼리 가족이 뒤로 킬리만자로가 하늘을 가득 채운 탁 트인 평원을 가로지르는 모습은 동아프리카에서 가장 강렬한 야생동물 이미지 중 하나입니다. 오후 게임 드라이브, 킬리만자로의 실루엣과 함께하는 선다우너, 그리고 로지에서 숙박합니다.",
        accommodation: "Ol Tukai Lodge / Tawi Lodge",
        meals: "삼시세끼 포함",
        insiderFact: "암보셀리는 아프리카 최고봉의 기슭에 자리하고 있습니다 — 맑은 날 아침이면 해발 5,895미터의 킬리만자로가 평원 위로 솟아오르며, 이 풍경은 수십 년간 동아프리카 야생동물 사진의 시각적 정체성을 규정해 왔습니다.",
        accommodationByTier: {
          trail: {
            name: "Ol Tukai Lodge",
            image: "/images/lodges/ol-tukai-lodge.webp",
            amenities: [
              "wifi",
              "pool",
              "restaurant",
              "kilimanjaro-view"
            ]
          },
          reserve: {
            name: "Tawi Lodge",
            image: "/images/lodges/tawi-lodge.webp",
            amenities: [
              "pool",
              "spa",
              "kilimanjaro-view",
              "conservation"
            ]
          }
        }
      },
      {
        day: 3,
        title: "마사이마라 — 도착 및 첫 게임 드라이브",
        description: "암보셀리에서 북서쪽으로 이동하는 길은 케냐의 고지대를 가로질러 마라로 내려갑니다 — 단층애가 사라지고 마라의 평원이 눈앞에 펼쳐지는 순간, 무언가가 달라짐을 느끼게 됩니다. 마사이마라 국립보호구역은 세렝게티 생태계가 북쪽으로 확장된 지역이자 세계에서 가장 유명한 야생동물 여행지입니다. 마라는 동아프리카에서 가장 높은 밀도의 대형 포식동물을 품고 있습니다 — 사자, 표범, 치타, 리카온, 하이에나가 모두 접근 가능한 게임 드라이브 구역 안에서 눈에 띄게 활동합니다. 이른 오후 캠프에 도착해 빛이 황금빛으로 물들 때 첫 게임 드라이브를 시작합니다.",
        accommodation: "Governors Camp, Masai Mara",
        meals: "삼시세끼 포함",
        insiderFact: "마사이마라와 탄자니아의 세렝게티는 함께 하나의 매끄럽게 이어진 생태계를 이룹니다 — 지구상에서 가장 위대한 야생동물의 땅입니다. 두 지역 사이의 국경은 정치적인 것이지 생태학적인 것이 아닙니다.",
        accommodationByTier: {
          trail: {
            name: "Governors Camp",
            image: "/images/lodges/governors-camp.webp",
            amenities: [
              "wifi",
              "pool",
              "restaurant",
              "mara-river-view"
            ]
          },
          reserve: {
            name: "Kichwa Tembo Camp",
            image: "/images/lodges/kichwa-tembo-camp.webp",
            amenities: [
              "pool",
              "spa",
              "migration-corridor",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 4,
        title: "마사이마라 종일 일정",
        description: "마라 생태계에만 온전히 집중하는 하루입니다 — 동틀 무렵 이른 아침 게임 드라이브, 캠프로 돌아와 즐기는 조식, 그리고 평원, 강변 숲, 마라 강 회랑을 아우르는 종일 탐험까지. 이 날은 마라가 최고의 모습을 보여주는 날입니다. 공원의 북쪽 경계를 이루는 마라 강은 7월부터 10월까지 대이동의 강 건너기가 벌어지는 현장으로, 수백 마리의 누가 악어가 가득한 물속으로 뛰어드는 자연에서 가장 원초적인 장관 중 하나입니다. 연중 내내 정착한 대형 고양잇과 동물과의 만남도 세계 최고 수준입니다.",
        accommodation: "Governors Camp, Masai Mara",
        meals: "삼시세끼 포함",
        insiderFact: "강 건너기는 누 무리의 기세가 개별 동물의 망설임을 압도할 때 일어납니다 — 하루 중 언제든 발생할 수 있으며 몇 분에서 몇 시간까지 지속될 수 있습니다. 가이드는 무리가 모여드는 상황을 관찰하며 이를 예측합니다.",
        accommodationByTier: {
          trail: {
            name: "Governors Camp",
            image: "/images/lodges/governors-camp.webp",
            amenities: [
              "wifi",
              "pool",
              "restaurant",
              "mara-river-view"
            ]
          },
          reserve: {
            name: "Kichwa Tembo Camp",
            image: "/images/lodges/kichwa-tembo-camp.webp",
            amenities: [
              "pool",
              "spa",
              "migration-corridor",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 5,
        title: "세렝게티로의 국경 간 이동",
        description: "케냐의 마사이마라에서 탄자니아의 세렝게티로 넘어가는 국경 간 이동은 사파리에서 손꼽히는 위대한 육로 여정 중 하나입니다 — 생태학적으로 하나로 이어진 원시 자연인 두 나라 사이를 매끄럽게 넘나듭니다. 이시바니아의 국경 통과는 사파리 차량 통행에 맞춰 잘 관리되고 있으며, 관련 서류 절차는 모두 가이드가 처리합니다. 세렝게티에 진입하는 즉시 오후 게임 드라이브가 시작됩니다. 중앙 평원은 마라와는 다른 성격을 지니고 있습니다 — 더 넓고, 더 탁 트여 있으며, 지평선이 더 멀리 있습니다 — 그리고 야생동물도 그에 맞춰 반응합니다. 이곳의 사자 무리는 더 크며, 치타 개체군은 아프리카의 어떤 보호구역보다도 밀도가 높습니다.",
        accommodation: "Kubukubu Tented Lodge / &Beyond Serengeti Under Canvas",
        meals: "삼시세끼 포함",
        insiderFact: "세렝게티와 마사이마라는 하나의 이동성 생태계를 이룹니다 — 누는 매년 이 정치적 국경을 완전히 무시한 채 넘나들며, 강우와 풀을 따라 3,000킬로미터에 달하는 연간 순환 경로를 따릅니다.",
        accommodationByTier: {
          trail: {
            name: "Kubukubu Tented Lodge",
            image: "/images/lodges/kubukubu-tented-lodge.webp",
            amenities: [
              "ensuite",
              "restaurant",
              "wildlife-view"
            ]
          },
          reserve: {
            name: "&Beyond Serengeti Under Canvas",
            image: "/images/lodges/andbeyond-serengeti-under-canvas.webp",
            amenities: [
              "luxury-tent",
              "ensuite",
              "migration-position",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 6,
        title: "세렝게티 국립공원 종일 일정",
        description: "아프리카에서 가장 상징적인 국립공원에서 보내는 온전한 하루입니다 — 모든 기대에 부응하는 하루가 될 것입니다. 세렝게티는 면적 14,763제곱킬로미터에 200만 마리가 넘는 포유류가 서식합니다. 대이동뿐만 아니라, 이 공원은 아프리카 최고의 포식동물 밀도를 자랑하며 대륙에서 가장 안정적인 대형 고양잇과 동물 목격을 제공합니다. 가이드는 세렝게티를 속속들이 알고 있습니다 — 어느 구역에서 목격이 이어지고 있는지, 어제 아침 표범이 어디서 목격되었는지, 어느 무리가 마른 개울가 근처에서 새끼를 기르고 있는지까지. 일출 게임 드라이브, 종일 탐험, 그리고 일몰과 함께 캠프로 복귀합니다.",
        accommodation: "Kubukubu Tented Lodge / &Beyond Serengeti Under Canvas",
        meals: "삼시세끼 포함",
        insiderFact: "&Beyond Serengeti Under Canvas는 이동식 캠프입니다 — 계절에 따라 위치를 옮겨 대이동을 따라가므로, 투숙객은 언제나 야생동물 관찰에 최적의 위치에 머물 수 있습니다.",
        accommodationByTier: {
          trail: {
            name: "Kubukubu Tented Lodge",
            image: "/images/lodges/kubukubu-tented-lodge.webp",
            amenities: [
              "ensuite",
              "restaurant",
              "wildlife-view"
            ]
          },
          reserve: {
            name: "&Beyond Serengeti Under Canvas",
            image: "/images/lodges/andbeyond-serengeti-under-canvas.webp",
            amenities: [
              "luxury-tent",
              "ensuite",
              "migration-position",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 7,
        title: "세렝게티에서 올두바이 협곡을 거쳐 응고롱고로로",
        description: "세렝게티에서 응고롱고로로 가는 길은 응고롱고로 보전구역을 지나갑니다 — 그 자체로 고지대 숲과 마사이족의 목축 문화가 어우러진 장엄한 풍경입니다. 가이드가 올두바이 협곡에 잠시 멈춰 간단한 설명을 들려줍니다 — 180만 년 전 초기 인류 조상의 흔적이 발굴된, 세계에서 가장 중요한 고생물학 유적지 중 한 곳입니다. 야생동물 사파리 중에 만나는 진정으로 매혹적인 막간입니다. 마지막으로 크레이터 가장자리와 고지대 숲에 자리한 로지에 도착하며, 숲의 소리와 함께, 맑은 밤이면 놀라운 고지대의 밤하늘과 함께 저녁 식사를 즐깁니다.",
        accommodation: "Ngorongoro Farm House / The Manor at Ngorongoro",
        meals: "삼시세끼 포함",
        insiderFact: "올두바이 협곡은 고생물학자 메리 리키가 1959년 180만 년 된 파란트로푸스 보이세이의 두개골을 발견한 곳입니다 — 이 발견은 인류 진화에 대한 이해를 근본적으로 바꾸어 놓았습니다.",
        accommodationByTier: {
          trail: {
            name: "Ngorongoro Farm House",
            image: "/images/lodges/ngorongoro-farm-house.webp",
            amenities: [
              "wifi",
              "restaurant",
              "highland-garden",
              "farm"
            ]
          },
          reserve: {
            name: "The Manor at Ngorongoro",
            image: "/images/lodges/the-manor-at-ngorongoro.webp",
            amenities: [
              "pool",
              "spa",
              "colonial-manor",
              "coffee-farm"
            ]
          }
        }
      },
      {
        day: 8,
        title: "응고롱고로 크레이터 종일 일정",
        description: "응고롱고로 크레이터로의 하강은 새벽에 시작됩니다. 가장자리에서 600미터 아래, 칼데라 바닥에는 지구상에서 가장 놀라운 야생동물 밀집지 중 하나가 펼쳐집니다 — 지름 20킬로미터의 분지 안에 약 25,000마리의 대형 포유류가 서식합니다. 빅파이브가 놀라운 밀도로 공존합니다. 검은코뿔소 개체군은 동아프리카에서 가장 안정적으로 관찰 가능합니다. 응고이톡토크 하마 웅덩이가 점심 휴식 장소로, 하마가 피크닉 자리에서 몇 미터 떨어진 곳에서 물 위로 모습을 드러내고, 이집트기러기가 물가에서 다투며, 크레이터의 벽이 사방으로 솟아 있습니다. 아프리카에서 가장 유명한 화산 칼데라를 내려가고, 탐험하고, 다시 오르는 온전한 하루입니다.",
        accommodation: "Ngorongoro Farm House / The Manor at Ngorongoro",
        meals: "삼시세끼 포함",
        insiderFact: "크레이터의 벽은 여러 세대에 걸쳐 정착한 야생동물 개체군이 떠나지 못하도록 막아온 자연 장벽입니다 — 사자 무리는 수십 년간 같은 칼데라에서 살아왔으며, 검은코뿔소는 세계에서 가장 면밀히 연구된 개체군 중 하나입니다.",
        accommodationByTier: {
          trail: {
            name: "Ngorongoro Farm House",
            image: "/images/lodges/ngorongoro-farm-house.webp",
            amenities: [
              "wifi",
              "restaurant",
              "highland-garden",
              "farm"
            ]
          },
          reserve: {
            name: "The Manor at Ngorongoro",
            image: "/images/lodges/the-manor-at-ngorongoro.webp",
            amenities: [
              "pool",
              "spa",
              "colonial-manor",
              "coffee-farm"
            ]
          }
        }
      },
      {
        day: 9,
        title: "마니야라 호수 국립공원",
        description: "어니스트 헤밍웨이는 마니야라 호수를 아프리카에서 가장 아름다운 호수라 불렀습니다. 그레이트 리프트 밸리 단층애와, 공원 면적 325제곱킬로미터의 대부분을 차지하는 알칼리성 호수 사이에 자리한 마니야라는 놀랍도록 다양한 서식지를 응축하고 있습니다 — 단층애 기슭의 빽빽한 지하수림, 탁 트인 초원과 아카시아 삼림지대, 그리고 플라밍고가 늘어선 소다 호수까지. 이 공원에서 가장 유명한 주민은 나무를 오르는 사자로, 동아프리카에서 마니야라에서만 볼 수 있는 이 행동은 60년 넘게 기록되어 왔습니다. 사자 외에도 코끼리, 버팔로, 하마, 기린과 함께 400종이 넘는 조류가 서식합니다. 호수와 단층애 벽에 비치는 오후의 빛은 탄자니아에서 가장 아름다운 사진 촬영 순간 중 하나입니다.",
        accommodation: "Kirurumu Manyara Lodge / andBeyond Lake Manyara Tree Lodge",
        meals: "삼시세끼 포함",
        insiderFact: "andBeyond Lake Manyara Tree Lodge는 탄자니아에서 가장 독특한 숙소 중 하나입니다 — 고대 마호가니 숲의 수관층에 지어진 열 채의 트리하우스로, 투숙객은 밤에 높이 설치된 보드워크를 걸어 객실과 다이닝 공간을 오갑니다.",
        accommodationByTier: {
          trail: {
            name: "Kirurumu Manyara Lodge",
            image: "/images/lodges/kirurumu-manyara-lodge.webp",
            amenities: [
              "wifi",
              "restaurant",
              "rift-valley-view",
              "pool"
            ]
          },
          reserve: {
            name: "andBeyond Lake Manyara Tree Lodge",
            image: "/images/lodges/andbeyond-lake-manyara-tree-lodge-living-room.webp",
            amenities: [
              "treehouse",
              "forest-canopy",
              "ensuite",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 10,
        title: "아루샤 귀환 및 출발",
        description: "탄자니아에서 보내는 마지막 아침입니다 — 리프트 밸리의 농업 고지대를 지나 북쪽으로 아루샤까지 이동하며, 지평선에 메루산을 두고 특별했던 10일간의 여정을 뒤로합니다. EWA 담당자가 아루샤에서 정성 어린 작별 인사를 위해 마중 나옵니다. 나이로비, 잔지바르, 또는 귀국행 항공편을 위한 공항 송영이 제공됩니다. 요청 시 아루샤에서의 추가 숙박도 가능합니다.",
        accommodation: "출발",
        meals: "조식"
      }
    ]
  },
  {
    slug: "10-day-kenya-tanzania-safari",
    name: "10일 케냐 & 탄자니아 사파리",
    duration: 10,
    destinations: [
      "masai-mara",
      "nairobi",
      "serengeti",
      "ngorongoro",
      "tarangire"
    ],
    type: "combination",
    priceFrom: 5072,
    groupSize: {
      min: 1,
      max: 6
    },
    badge: "new",
    bestFor: [
      "couples",
      "wildlife-enthusiasts",
      "first-time"
    ],
    overview: [
      "이 루트는 당사의 대표적인 크로스보더 일정과 동일하게 케냐에서 탄자니아로 이어지는 여정을 따르지만, 이동에 쓰이는 하루를 세렝게티에서 보내는 셋째 날 온전한 하루로 바꾼 것이 특징입니다.",
      "여정은 플라밍고가 늘어선 호숫가와 검은코뿔소·흰코뿔소가 모두 서식하는 코뿔소 보호구역을 지나는 나쿠루 호수에서 시작되며, 이어서 마사이마라의 사자와 치타 영역에서 꼬박 이틀을 보냅니다. 시라리 국경 통과 시 가이드와 차량 인수인계는 EWA가 전담하므로 탄자니아 중앙 세렝게티로의 전환은 그 생태계 자체만큼이나 매끄럽게 이루어집니다 — 이곳에서는 당사의 다른 어떤 일정보다도 한 국립공원에서 더 긴 시간인 꼬박 3일을 보내게 됩니다. 가이드 동반 응고롱고로 크레이터 하강은 단 하루 만에 빅파이브를 만나게 해 주며, 타랑기레의 전설적인 코끼리 무리와 고대 바오바브나무를 끝으로 여정을 마무리한 뒤 아루샤로 돌아옵니다."
    ],
    highlights: [
      "나쿠루 호수의 플라밍고 호숫가와 서식하는 검은코뿔소·흰코뿔소",
      "마사이마라에서 꼬박 이틀 — 케냐 최고의 야생동물 무대",
      "시라리에서의 매끄러운 케냐-탄자니아 국경 통과(물류는 EWA가 전담)",
      "중앙 세렝게티 최고의 포식동물 서식지에서 꼬박 3일",
      "가이드 동반 응고롱고로 크레이터 하강 — 하루 만에 만나는 빅파이브",
      "타랑기레의 전설적인 코끼리 무리와 고대 바오바브나무"
    ],
    heroImage: "/images/gallery/lion-resting-shade.webp",
    heroImageAlt: "Lion resting with head down in golden grass",
    gallery: [
      {
        src: "/images/gallery/cheetah-mother-and-cub-portrait.webp",
        alt: "Cheetah mother and her cub sitting close together in the grass"
      }
    ],
    pricingTiersProvisional: true,
    pricingTiers: [
      {
        pax: 1,
        trail: 9628
      },
      {
        pax: 2,
        trail: 6467
      },
      {
        pax: 3,
        trail: 5418
      },
      {
        pax: 4,
        trail: 5421
      },
      {
        pax: 5,
        trail: 5000
      },
      {
        pax: 6,
        trail: 5072
      }
    ],
    included: [
      "모든 국립공원 입장료 및 보전 비용(케냐·탄자니아)",
      "프라이빗 4X4 차량으로 즐기는 모든 게임 드라이브",
      "전 일정 전문 가이드",
      "시라리(케냐/탄자니아) 국경 통과 지원",
      "명시된 전 일정 식사",
      "일정표에 명시된 숙박시설",
      "공항 송영 및 숙소 간 이동"
    ],
    includedCategorized: {
      transfers: [
        "시라리(케냐/탄자니아) 국경 통과 지원",
        "공항 송영 및 숙소 간 이동"
      ],
      accommodationMeals: [
        "명시된 전 일정 식사",
        "일정표에 명시된 숙박시설"
      ],
      guidingGameDrives: [
        "모든 국립공원 입장료 및 보전 비용(케냐·탄자니아)",
        "프라이빗 4X4 차량으로 즐기는 모든 게임 드라이브",
        "전 일정 전문 가이드"
      ]
    },
    excluded: [
      "국제선 항공권",
      "케냐 및 탄자니아 입국 비자",
      "여행자 보험",
      "팁 및 사례비",
      "선택 활동(열기구 사파리, 문화 체험)"
    ],
    excludedCategorized: [
      "국제선 항공권",
      "케냐 입국 비자(대부분 국적 기준 약 USD 30)와 탄자니아 입국 비자(약 USD 50)",
      "여행자 보험",
      "가이드 및 숙소 직원을 위한 팁과 사례비",
      "선택 활동(열기구 사파리 1인당 약 USD 550, 마사이 마을 방문 1인당 약 USD 25)",
      "개인 용품, 세탁비, 전화 요금"
    ],
    notes: [
      "표시된 요금은 더블/트윈룸을 2인이 함께 사용하는 경우의 1인당 요금입니다. 싱글룸 이용 시 추가 요금이 적용됩니다.",
      "가이드와 차량은 시라리의 케냐-탄자니아 국경에서 교체됩니다. 이 인수인계는 EWA가 조율합니다.",
      "숙박시설 및 요금은 예약 가능 여부에 따라 달라지며, 정확한 여행 날짜에 따라 변동될 수 있습니다.",
      "탄자니아와 케냐의 국립공원 입장료는 각 정부가 책정하며, 사전 공지 없이 변경될 수 있습니다.",
      "예약 확정을 위해 35%의 예약금이 필요하며, 잔금은 출발 60일 전까지 지불해야 합니다."
    ],
    itinerary: [
      {
        day: 1,
        title: "나이로비 도착",
        description: "조모 케냐타 국제공항에 도착하여 나이로비 시내 호텔로 이동해 1박을 보냅니다.",
        accommodation: "Eka Hotel, Nairobi",
        meals: "조식 포함",
        accommodationByTier: {
          trail: {
            name: "Eka Hotel",
            image: "/images/lodges/eka-hotel-courtyard-pool.webp",
            amenities: [
              "wifi",
              "pool",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 2,
        title: "나쿠루 호수 국립공원",
        description: "그레이트 리프트 밸리에서 가장 드라마틱한 국립공원 중 하나인 나쿠루 호수로 이동합니다. 알칼리성 호수는 제철이 되면 엄청난 수의 플라밍고 무리를 끌어들여 호숫가 전체가 분홍빛 벽을 이룹니다. 이 공원은 코뿔소 보호구역으로 지정되어 있어 검은코뿔소와 흰코뿔소가 모두 서식하며, 주변 아카시아 숲에는 사자, 표범, 버팔로, 기린도 살고 있습니다.",
        accommodation: "Lake Nakuru Sopa Lodge",
        meals: "삼시세끼 포함",
        insiderFact: "나쿠루 호수는 1983년에 코뿔소 보호구역으로 지정되었습니다 — 오늘날 이곳은 관리형 보호구역이 아닌 곳 중에서는 동아프리카에서 검은코뿔소와 흰코뿔소 모두 가장 높은 밀도로 서식하는 지역 중 하나입니다.",
        accommodationByTier: {
          trail: {
            name: "Lake Nakuru Sopa Lodge",
            image: "/images/lodges/lake-nakuru-sopa-lodge.webp",
            amenities: [
              "wifi",
              "pool",
              "restaurant",
              "view"
            ]
          }
        }
      },
      {
        day: 3,
        title: "마사이마라 국립보호구역 — 도착",
        description: "나쿠루에서 남서쪽으로 이동해 케냐에서 가장 명성 높은 야생동물 보호구역인 마사이마라로 향합니다. 도착 즉시 진행되는 게임 드라이브에서는 마라 강을 따라 펼쳐진 개방된 초원과 강변 숲을 둘러보며, 늦은 오후에는 대형 고양잇과 동물의 흔적을 찾아봅니다.",
        accommodation: "Masai Mara Sopa Lodge",
        meals: "삼시세끼 포함",
        accommodationByTier: {
          trail: {
            name: "Masai Mara Sopa Lodge",
            image: "/images/lodges/masai-mara-sopa-lodge.webp",
            amenities: [
              "wifi",
              "pool",
              "restaurant",
              "mara-river-view"
            ]
          }
        }
      },
      {
        day: 4,
        title: "마사이마라에서 보내는 하루",
        description: "마사이마라에서 하루 종일 게임 드라이브를 즐깁니다. 이 보호구역에는 동아프리카에서 손꼽히는 규모의 상주 사자 개체군을 비롯해 치타, 표범, 코끼리가 서식하며, 세계적으로 유명한 마라 강의 누 떼 도하(7월~10월)도 이곳에서 펼쳐집니다. 가이드는 가장 활발히 활동하는 포식동물을 추적하기 위해 보호구역 내 여러 구역을 두루 살핍니다.",
        accommodation: "Masai Mara Sopa Lodge",
        meals: "삼시세끼 포함",
        insiderFact: "대이동 기간(7월~10월) 동안에는 150만 마리가 넘는 누와 20만 마리의 얼룩말이 탄자니아 세렝게티에서 마라로 건너옵니다 — 지구상에서 가장 극적인 야생동물의 장관 중 하나입니다.",
        accommodationByTier: {
          trail: {
            name: "Masai Mara Sopa Lodge",
            image: "/images/lodges/masai-mara-sopa-lodge.webp",
            amenities: [
              "wifi",
              "pool",
              "restaurant",
              "mara-river-view"
            ]
          }
        }
      },
      {
        day: 5,
        title: "케냐-탄자니아 국경 통과 & 중앙 세렝게티",
        description: "EWA 가이드 인수인계와 함께 시라리에서 케냐-탄자니아 국경을 통과하여 세렝게티 북쪽으로 진입합니다. 탄자니아 쪽에 들어서자마자 오후 게임 드라이브가 시작되며, 세렝게티 생태계는 마라에서 이어져 매끄럽게 연결됩니다. 해가 지기 전 중앙 세렝게티의 캠프에 도착합니다.",
        accommodation: "Kubukubu Tented Lodge, Serengeti",
        meals: "삼시세끼 포함",
        accommodationByTier: {
          trail: {
            name: "Kubukubu Tented Lodge",
            image: "/images/lodges/kubukubu-tented-lodge.webp",
            amenities: [
              "pool",
              "view",
              "restaurant",
              "wifi"
            ]
          }
        }
      },
      {
        day: 6,
        title: "종일 — 중앙 세렝게티",
        description: "세로네라 계곡과 그 주변 초원을 둘러보며 중앙 세렝게티에서 하루를 온전히 보냅니다. 중앙 세렝게티에는 사자, 표범, 치타, 코끼리, 버팔로가 연중 상주하며, 계절을 불문하고 아프리카에서 가장 풍부한 포식동물 서식지 중 하나입니다.",
        accommodation: "Kubukubu Tented Lodge, Serengeti",
        meals: "삼시세끼 포함",
        insiderFact: "중앙 세렝게티의 세로네라 강 주변에는 무화과나무와 소시지나무가 늘어서 있어 표범이 사냥 사이사이에 쉬어가는 장소가 됩니다 — 차량에서 표범을 발견하기에 아프리카 최고의 지역 중 하나입니다.",
        accommodationByTier: {
          trail: {
            name: "Kubukubu Tented Lodge",
            image: "/images/lodges/kubukubu-tented-lodge.webp",
            amenities: [
              "pool",
              "view",
              "restaurant",
              "wifi"
            ]
          }
        }
      },
      {
        day: 7,
        title: "종일 — 중앙 세렝게티",
        description: "중앙 세렝게티에서 게임 드라이브로 보내는 셋째 날입니다. 가이드는 최신 추적 정보와 계절 패턴을 바탕으로 보호구역의 다른 구역을 탐색하여 새로운 목격과 행동을 볼 수 있는 최상의 기회를 제공합니다.",
        accommodation: "Kubukubu Tented Lodge, Serengeti",
        meals: "삼시세끼 포함",
        accommodationByTier: {
          trail: {
            name: "Kubukubu Tented Lodge",
            image: "/images/lodges/kubukubu-tented-lodge.webp",
            amenities: [
              "pool",
              "view",
              "restaurant",
              "wifi"
            ]
          }
        }
      },
      {
        day: 8,
        title: "응고롱고로 크레이터",
        description: "남쪽으로 이동해 응고롱고로 보전지역에 도착한 뒤, 가이드와 함께 크레이터로 하강합니다. 초원, 숲, 소다호로 이루어진 260km²의 크레이터 바닥에는 약 25마리의 검은코뿔소를 포함해 빅파이브 전체가 상주하고 있어, 응고롱고로는 탄자니아에서 야생 코뿔소를 확실히 관찰할 수 있는 몇 안 되는 곳 중 하나입니다.",
        accommodation: "Ngorongoro Farm House, Karatu",
        meals: "삼시세끼 포함",
        insiderFact: "응고롱고로 크레이터의 벽은 천연 울타리 역할을 합니다 — 대부분의 동물이 260km²의 크레이터 바닥 안에서 평생을 살아가며, 이는 놀라운 야생동물 밀도의 이유를 설명해 줍니다.",
        accommodationByTier: {
          trail: {
            name: "Ngorongoro Farm House",
            image: "/images/lodges/ngorongoro-farm-house.webp",
            amenities: [
              "wifi",
              "restaurant",
              "highland-garden",
              "farm"
            ]
          }
        }
      },
      {
        day: 9,
        title: "타랑기레 국립공원 & 아루샤",
        description: "타랑기레로 이동해 탄자니아에서 가장 장관을 이루는 코끼리 무리 사이로 아침 게임 드라이브를 즐깁니다. 건기가 되면 타랑기레 강에는 수백 마리의 코끼리가 모여들며, 이 일대에 흩어져 있는 고대 바오바브나무는 아프리카에서 가장 오래된 생명체에 속합니다. 이후 마지막 밤을 보낼 아루샤로 이동합니다.",
        accommodation: "Kahawa House, Arusha",
        meals: "삼시세끼 포함",
        insiderFact: "타랑기레는 우기를 제외하면 아프리카에서 가장 높은 코끼리 밀도를 자랑하는 지역 중 하나입니다 — 강을 따라 50~200마리 규모의 무리를 흔히 볼 수 있습니다.",
        accommodationByTier: {
          trail: {
            name: "Kahawa House",
            image: "/images/lodges/kahawa-house.webp",
            amenities: [
              "wifi",
              "restaurant",
              "garden"
            ]
          }
        }
      },
      {
        day: 10,
        title: "아루샤에서 출발",
        description: "아루샤 공항 또는 킬리만자로 국제공항으로 이동하여 귀국 항공편에 탑승합니다.",
        accommodation: "N/A",
        meals: "조식"
      }
    ]
  },
  {
    slug: "2-day-selous-safari-from-zanzibar",
    name: "잔지바르 출발 2일 니에레레 사파리",
    duration: 2,
    destinations: [
      "nyerere",
      "zanzibar"
    ],
    type: "wildlife",
    priceFrom: 1957.5,
    groupSize: {
      min: 2,
      max: 6
    },
    badge: "popular",
    bestFor: [
      "couples",
      "short-break"
    ],
    metaTitle: "잔지바르 출발 2일 니에레레 사파리 | 본토 야생동물 애드온 여행 | EWA Safari Outfitters",
    metaDescription: "잔지바르에서 니에레레 국립공원까지 왕복 항공편으로 — 루피지강 보트 사파리, 워킹 사파리와 게임 드라이브를 즐기고 오후에는 다시 해변으로 돌아옵니다. 3개 등급, 1인당 $1,957.50부터.",
    overview: [
      "2027 시즌에 맞춰 업데이트되었습니다. 본토의 야생동물을 보기 위해 잔지바르 휴가를 포기할 필요는 없습니다 — 이 2일 애드온 여행은 해변에서의 시간을 단 하룻밤만 내어주면 니에레레 국립공원을 다녀올 수 있게 해 줍니다.",
      "왕복 항공편이 양방향 이동을 모두 책임지며, 아프리카 최대 규모의 동물보호구역에 도착하면 오후에는 하마가 모여 있는 웅덩이와 코끼리가 강을 건너는 지점을 지나는 루피지강 보트 사파리를 즐깁니다. 이어서 이른 아침 워킹 사파리와 게임 드라이브를 마친 뒤, 오후에는 다시 모래사장에서의 시간을 되찾을 수 있도록 잔지바르로 돌아가는 항공편에 탑승합니다."
    ],
    highlights: [
      "잔지바르 출발 왕복 항공편 — 육로 이동이 전혀 필요 없습니다",
      "도착 당일 오후에 즐기는 루피지강 보트 사파리 — 처음 방문하는 여행객들에게 게임 드라이브보다도 더 높은 평가를 받는 경우가 많습니다",
      "2일 차 이른 아침에 진행되는 워킹 사파리와 게임 드라이브 — 포식동물이 가장 활발히 활동하는 시간대에 맞춰 진행됩니다",
      "오후에는 다시 해변으로 — 본토 사파리 전체가 단 하룻밤의 외박으로 완결됩니다",
      "편안하고 군더더기 없는 스타일부터 진정으로 특별한 수준까지 모든 편안함의 단계를 갖추었으며, 일정 자체는 단 한 시간도 바뀌지 않습니다"
    ],
    heroImage: "/images/gallery/selous-hippo-pool.webp",
    heroImageAlt: "Elephants drinking beside a pool crowded with hippos, with a grey heron in the foreground at Selous",
    gallery: [
      {
        src: "/images/gallery/zebra-head-portrait-close-up.webp",
        alt: "Close-up portrait of a zebra's head and striped neck"
      }
    ],
    pricingTiers: [
      {
        pax: 2,
        trail: 1957.5,
        reserve: 2086.5,
        sovereign: 2860.5
      },
      {
        pax: 3,
        trail: 1598.33,
        reserve: 1705.83,
        sovereign: 2350.83
      },
      {
        pax: 4,
        trail: 1581.88,
        reserve: 1689.38,
        sovereign: 2334.38
      },
      {
        pax: 5,
        trail: 1572,
        reserve: 1679.5,
        sovereign: 2324.5
      },
      {
        pax: 6,
        trail: 1565.42,
        reserve: 1672.92,
        sovereign: 2317.92
      }
    ],
    included: [
      "잔지바르-니에레레-잔지바르 왕복 항공편",
      "모든 국립공원 및 컨세션 비용",
      "루피지강 보트 사파리",
      "워킹 사파리 및 게임 드라이브",
      "전 일정 전문 가이드",
      "명시된 삼시세끼 포함 숙박시설",
      "공항 송영"
    ],
    includedCategorized: {
      transfers: [
        "잔지바르-니에레레-잔지바르 왕복 항공편",
        "공항 송영"
      ],
      accommodationMeals: [
        "명시된 삼시세끼 포함 숙박시설"
      ],
      guidingGameDrives: [
        "모든 국립공원 및 컨세션 비용",
        "루피지강 보트 사파리",
        "워킹 사파리 및 게임 드라이브",
        "전 일정 전문 가이드"
      ]
    },
    excluded: [
      "국제선 항공권",
      "탄자니아 입국 비자(대부분 국적 기준 약 USD 50)",
      "여행자 보험",
      "팁 및 사례비",
      "표준 삼시세끼 제공 범위를 벗어난 개인 용품 및 음료"
    ],
    excludedCategorized: [
      "국제선 항공권",
      "탄자니아 입국 비자(대부분 국적 기준 약 USD 50)",
      "여행자 보험",
      "가이드 및 캠프 직원을 위한 팁과 사례비",
      "개인 용품, 세탁비, 전화 요금"
    ],
    notes: [
      "표시된 요금은 더블/트윈룸을 2인이 함께 사용하는 경우의 1인당 요금입니다. 싱글룸 이용 시 추가 요금이 적용됩니다.",
      "항공 이동이 성립하려면 최소 2인 이상의 그룹이 필요합니다.",
      "숙박시설 및 요금은 예약 가능 여부에 따라 달라지며, 정확한 여행 날짜에 따라 변동될 수 있습니다.",
      "탄자니아 국립공원 입장료는 정부가 책정하며, 사전 공지 없이 변경될 수 있습니다."
    ],
    itinerary: [
      {
        day: 1,
        title: "니에레레 도착",
        description: "잔지바르에서 니에레레 국립공원으로 직항 항공편을 이용해 이동합니다 — 옛 셀루스 동물보호구역으로, 면적 54,600km²에 달하는 아프리카 최대의 보호지역입니다. 오후에는 루피지강 보트 사파리를 즐기며 하마가 모인 웅덩이와 악어가 늘어선 강둑 사이를 누비고, 물가에서 물을 마시는 코끼리와 버팔로도 만날 수 있습니다.",
        accommodation: "등급에 따라 Serena Mivumo River Lodge, Rufiji River Camp, 또는 Roho ya Selous",
        meals: "삼시세끼 포함",
        insiderFact: "니에레레 국립공원(옛 셀루스 동물보호구역)은 스위스보다도 넓습니다 — 세계적인 대자연 지역이면서도 탄자니아 북부 국립공원들에 비하면 방문객 수는 극히 적습니다.",
        accommodationByTier: {
          trail: {
            name: "Serena Mivumo River Lodge",
            image: "/images/lodges/serena-mivumo-river-lodge.webp",
            amenities: [
              "restaurant",
              "view",
              "wifi",
              "wildlife-view"
            ]
          },
          reserve: {
            name: "Rufiji River Camp",
            image: "/images/lodges/rufiji-river-camp.webp",
            amenities: [
              "restaurant",
              "view",
              "wildlife-view"
            ]
          },
          sovereign: {
            name: "Roho ya Selous",
            image: "/images/gallery/selous-hippo-pool.webp",
            amenities: [
              "restaurant",
              "view",
              "wifi",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 2,
        title: "워킹 사파리, 게임 드라이브 & 잔지바르 귀환",
        description: "이른 아침 워킹 사파리에 이어 보호구역을 둘러보는 게임 드라이브를 진행하며, 포식동물이 가장 활발히 활동하는 시간대에 맞춰 일정을 구성했습니다. 이후 오후에는 다시 해변에서의 시간을 되찾을 수 있도록 잔지바르로 돌아가는 항공편에 탑승합니다.",
        accommodation: "N/A",
        meals: "조식 및 중식 포함"
      }
    ],
    faq: [
      {
        q: "잔지바르에서 떠나는 2일 사파리가 애초에 어떻게 가능한가요?",
        a: "이동이 육로가 아닌 항공편으로 이루어지기 때문입니다. 직항 항공편을 이용하면 해변 호텔을 출발한 지 몇 시간 안에 니에레레 국립공원에 도착할 수 있으며, 돌아올 때도 같은 방식입니다 — 어느 방향으로도 육로 이동으로 시간을 낭비하지 않습니다."
      },
      {
        q: "이렇게 짧은 방문에도 실제로 야생동물을 볼 수 있을까요?",
        a: "네, 가능합니다 — 도착 당일의 루피지강 보트 사파리는 처음 방문하는 여행객들에게 여행 전체의 하이라이트로 꼽히는 경우가 많으며, 2일 차 이른 아침의 워킹 사파리와 게임 드라이브는 포식동물이 가장 활발히 활동하는 시간대에 맞춰 특별히 계획되어 있습니다."
      },
      {
        q: "세 가지 등급의 차이는 무엇인가요?",
        a: "항공편, 액티비티, 루트는 세 등급 모두 동일합니다. 달라지는 것은 캠프입니다. 윌더니스 트레일은 편안하고 군더더기 없는 스타일을, 윌더니스 리저브는 더 넓은 공간과 강변 위치를, 윌더니스 소버린은 이 루트에서 가장 특별한 숙소를 제공합니다."
      },
      {
        q: "그룹 인원에 따라 가격이 얼마나 달라지나요?",
        a: "상당히 달라집니다 — 이동비, 가이드 비용 등 고정 비용이 그룹 전체에 분산되므로, 특히 2인에서 3인으로 늘어날 때 1인당 가격이 크게 낮아집니다."
      },
      {
        q: "요금에 포함된 것과 포함되지 않은 것은 무엇인가요?",
        a: "포함 사항: 잔지바르-니에레레 왕복 항공편, 모든 국립공원 및 컨세션 비용, 보트 사파리, 워킹 사파리 및 게임 드라이브, 삼시세끼 포함 숙박시설, 전 일정 전문 가이드입니다. 불포함 사항: 국제선 항공권, 비자 발급 비용, 여행자 보험, 팁, 개인 경비입니다."
      },
      {
        q: "하룻밤으로 정말 충분할까요, 아니면 더 오래 머무는 것을 고려해야 할까요?",
        a: "이 일정은 해변 휴가에서 하룻밤 이상을 포기하고 싶지 않은 여행객을 위해 특별히 구성되었습니다 — 더 여유로운 시간이 있다면, 니에레레를 여러 날에 걸쳐 충분히 즐길 수 있는 당사의 더 긴 서던 서킷 일정을 추천드립니다."
      }
    ]
  },
  {
    slug: "4-day-tarangire-ngorongoro-lake-eyasi",
    name: "4일 타랑기레, 응고롱고로 & 에야시 호수",
    duration: 4,
    destinations: [
      "tarangire",
      "ngorongoro"
    ],
    type: "wildlife",
    priceFrom: 1250,
    groupSize: {
      min: 2,
      max: 6
    },
    badge: "new",
    bestFor: [
      "couples",
      "wildlife-enthusiasts",
      "first-time"
    ],
    overview: [
      "나흘이면 탄자니아의 야생동물과 더불어 당사의 다른 어떤 일정에서도 만날 수 없는 특별한 경험을 함께 누리기에 충분합니다. 바로 세계에 남은 마지막 수렵채집 공동체 중 하나인 하드자베족과 함께하는 오후입니다.",
      "여정은 바오바브나무가 점점이 서 있는 풍경과 코끼리 무리를 지나는 타랑기레의 오후 게임 드라이브로 시작됩니다. 이후 남쪽의 에야시 호수로 이동해 하드자베족의 사냥 무리와 함께 덤불을 누비고, 지금도 손으로 직접 도구를 벼려내는 다토가족 대장장이를 방문합니다. 응고롱고로 크레이터로의 종일 하강에서는 이 나라에 몇 남지 않은 안정적인 검은코뿔소 개체군을 포함해 빅파이브를 만난 뒤, 아루샤로 돌아옵니다. 카라투의 같은 롯지에서 이틀 연속 머무르기 때문에 짐을 쌌다 풀었다 하는 번거로움이 줄고, 눈앞의 것들을 실제로 바라볼 수 있는 시간이 늘어납니다 — 탄자니아의 야생동물과 살아 숨 쉬는 문화를 균형 있는 속도로 압축해서 소개하는 여정입니다."
    ],
    highlights: [
      "타랑기레 국립공원 — 고대 바오바브나무 아래를 거니는 코끼리 무리",
      "가이드 동반 응고롱고로 크레이터 종일 하강(빅파이브)",
      "하드자베족과 함께하는 문화 체험의 오후 — 세계에 남은 마지막 수렵채집 공동체 중 하나",
      "에야시 호수의 다토가족 대장장이 방문 — 수 세기 동안 변함없이 이어져 온 공예 전통",
      "카라투의 같은 롯지에서 2박 — 짐 정리와 이동의 번거로움을 최소화"
    ],
    heroImage: "/images/gallery/ngorongoro-crater-vehicle.webp",
    heroImageAlt: "View from the Ngorongoro Crater rim with candelabra trees overlooking the crater floor and lake",
    gallery: [
      {
        src: "/images/gallery/lion-sleeping-tree-branch-serengeti.webp",
        alt: "Lion sleeping stretched out on a tree branch in the Serengeti"
      }
    ],
    pricingTiers: [
      {
        pax: 2,
        trail: 1820
      },
      {
        pax: 3,
        trail: 1455
      },
      {
        pax: 4,
        trail: 1395
      },
      {
        pax: 5,
        trail: 1310
      },
      {
        pax: 6,
        trail: 1250
      }
    ],
    included: [
      "모든 국립공원 입장료 및 보전지역 비용",
      "에야시 호수 문화 체험(하드자베족·다토가족 가이드)",
      "프라이빗 4X4 차량으로 즐기는 모든 게임 드라이브",
      "전 일정 전문 가이드",
      "명시된 전 일정 식사",
      "일정표에 명시된 숙박시설",
      "공항 송영 및 숙소 간 이동"
    ],
    includedCategorized: {
      transfers: [
        "공항 송영 및 숙소 간 이동"
      ],
      accommodationMeals: [
        "명시된 전 일정 식사",
        "일정표에 명시된 숙박시설"
      ],
      guidingGameDrives: [
        "모든 국립공원 입장료 및 보전지역 비용",
        "에야시 호수 문화 체험(하드자베족·다토가족 가이드)",
        "프라이빗 4X4 차량으로 즐기는 모든 게임 드라이브",
        "전 일정 전문 가이드"
      ]
    },
    excluded: [
      "국제선 항공권",
      "탄자니아 입국 비자(대부분 국적 기준 약 USD 50)",
      "여행자 보험",
      "팁 및 사례비",
      "선택 활동(코뿔소 트래킹, 워킹 사파리)"
    ],
    excludedCategorized: [
      "국제선 항공권",
      "탄자니아 입국 비자(대부분 국적 기준 약 USD 50)",
      "여행자 보험",
      "가이드 및 숙소 직원을 위한 팁과 사례비",
      "선택 활동(코뿔소 트래킹 1인당 약 USD 120, 워킹 사파리 1인당 약 USD 59)",
      "개인 용품, 세탁비, 전화 요금"
    ],
    notes: [
      "표시된 요금은 더블/트윈룸을 2인이 함께 사용하는 경우의 1인당 요금입니다. 싱글룸 이용 시 추가 요금이 적용됩니다.",
      "숙박시설 및 요금은 예약 가능 여부에 따라 달라지며, 정확한 여행 날짜에 따라 변동될 수 있습니다.",
      "탄자니아 국립공원 및 보전지역 입장료는 정부가 책정하며, 사전 공지 없이 변경될 수 있습니다.",
      "예약 확정을 위해 10%의 예약금이 필요하며, 잔금은 출발 28일 전까지 지불해야 합니다."
    ],
    itinerary: [
      {
        day: 1,
        title: "아루샤 → 타랑기레 국립공원",
        description: "아루샤에서 타랑기레 국립공원으로 이동해 오후 내내 게임 드라이브를 즐깁니다. 타랑기레는 탄자니아에서 가장 저평가된 국립공원 중 하나입니다 — 건기가 되면 타랑기레 강은 수백 킬로미터 이내에서 유일하게 안정적인 수원이 되어, 동아프리카 최대 규모의 코끼리 무리를 끌어들입니다. 수령 천 년이 넘는 것도 있는 고대 바오바브나무들이 이 일대에 흩어져 있습니다. 저녁에는 아루샤로 돌아옵니다.",
        accommodation: "Kahawa House, Arusha",
        meals: "석식 및 조식 포함",
        insiderFact: "타랑기레의 코끼리 무리는 아프리카에서 손꼽히는 규모를 자랑하며, 건기에는 강 주변에 300~500마리 규모의 계절적 집결이 나타납니다.",
        accommodationByTier: {
          trail: {
            name: "Kahawa House",
            image: "/images/lodges/kahawa-house.webp",
            amenities: [
              "wifi",
              "restaurant",
              "garden"
            ]
          }
        }
      },
      {
        day: 2,
        title: "에야시 호수 문화 체험 & 카라투",
        description: "에야시 호수로 이동해 하드자베족과 함께하는 오후를 보냅니다. 이들은 세계에 남은 마지막 수렵채집 공동체 중 하나로, 수만 년 전 조상들과 다름없는 방식으로 살아가고 있습니다. 하드자베족 사냥 무리와 함께 덤불을 누빈 뒤, 수 세기 동안 변함없는 기법으로 전통 장신구와 도구를 벼려내는 다토가족 대장장이를 방문합니다. 이후 카라투의 롯지로 이동합니다.",
        accommodation: "Ngorongoro Farm House, Karatu",
        meals: "삼시세끼 포함",
        insiderFact: "하드자베족은 흡착음(클릭 자음)을 사용하는 언어를 구사하며, 오늘날에도 주로 수렵과 채집으로 생계를 이어가는 전 세계 몇 안 되는 민족 중 하나입니다.",
        accommodationByTier: {
          trail: {
            name: "Ngorongoro Farm House",
            image: "/images/lodges/ngorongoro-farm-house.webp",
            amenities: [
              "wifi",
              "restaurant",
              "highland-garden",
              "farm"
            ]
          }
        }
      },
      {
        day: 3,
        title: "응고롱고로 크레이터, 종일",
        description: "세계 최대의 온전한 화산 칼데라이자 유네스코 세계유산인 응고롱고로 크레이터로 가이드와 함께 종일 하강합니다. 260km² 규모의 크레이터 바닥은 독립된 생태계를 이루고 있으며, 이 나라에 남은 몇 안 되는 안정적인 검은코뿔소 개체군을 포함해 탄자니아 빅파이브 전체가 상주하고 있습니다.",
        accommodation: "Ngorongoro Farm House, Karatu",
        meals: "삼시세끼 포함",
        insiderFact: "응고롱고로의 검은코뿔소 개체군은 약 25마리로, 탄자니아에서 가장 접근하기 쉬운 개체군 중 하나입니다. 탁 트인 크레이터 바닥 덕분에 일반 덤불 지역보다 이곳에서 목격 가능성이 훨씬 높습니다.",
        accommodationByTier: {
          trail: {
            name: "Ngorongoro Farm House",
            image: "/images/lodges/ngorongoro-farm-house.webp",
            amenities: [
              "wifi",
              "restaurant",
              "highland-garden",
              "farm"
            ]
          }
        }
      },
      {
        day: 4,
        title: "아루샤 귀환 & 출발",
        description: "농경지가 펼쳐진 고원지대를 지나 아루샤로 돌아갑니다. 이후 아루샤 공항 또는 킬리만자로 국제공항으로 이동하여 다음 항공편에 탑승합니다.",
        accommodation: "N/A",
        meals: "조식 및 중식 포함"
      }
    ]
  },
  {
    slug: "5-day-kenya-safari",
    name: "5일 케냐 사파리 — 헬스 게이트, 나쿠루 호수 & 마사이마라",
    duration: 5,
    destinations: [
      "masai-mara",
      "nairobi"
    ],
    type: "wildlife",
    priceFrom: 1520,
    groupSize: {
      min: 2,
      max: 6
    },
    badge: "new",
    bestFor: [
      "couples",
      "wildlife-enthusiasts",
      "families",
      "first-time"
    ],
    overview: [
      "대부분의 케냐 일정은 첫날부터 차량에 탑승하지만, 이 여정은 자전거로 시작됩니다. 앞유리도 없이 얼룩말과 기린 사이를 직접 페달을 밟으며 지나갑니다.",
      "야생동물 사이를 자유롭게 걷거나 자전거로 다닐 수 있는 케냐에서 몇 안 되는 국립공원인 헬스 게이트 국립공원으로 여정이 시작되며, 이어서 나이바샤 호수의 조류와 리프트 밸리의 풍경을 지나, 유명한 플라밍고 무리와 더불어 이 나라에 남은 마지막 검은코뿔소·흰코뿔소 서식지 중 하나인 나쿠루 호수로 향합니다. 여정의 후반부는 케냐를 대표하는 야생동물 무대이자 7월부터 10월까지는 대이동 강 건너기의 무대가 되는 마사이마라에서 꼬박 이틀을 보냅니다. 편안한 캠프부터 초호화 숙소까지 세 가지 숙박 등급으로 이용 가능하며, 서두르기보다는 다채로움을 느낄 수 있도록 구성된 5일 루트입니다."
    ],
    highlights: [
      "헬스 게이트 국립공원 — 얼룩말, 기린, 버팔로 사이를 자유롭게 자전거와 도보로 다닐 수 있는 케냐 유일의 국립공원",
      "나이바샤 호수의 조류와 그레이트 리프트 밸리의 풍경",
      "나쿠루 호수 — 플라밍고 호숫가이자 케냐에 남은 마지막 검은코뿔소·흰코뿔소 보호구역 중 하나",
      "마사이마라에서 꼬박 이틀(대이동 7월~10월)",
      "편안한 캠프부터 초호화 숙소까지 세 가지 숙박 등급"
    ],
    heroImage: "/images/gallery/lioness-on-rock.webp",
    heroImageAlt: "Lioness resting atop a large granite kopje under a clear blue sky",
    gallery: [
      {
        src: "/images/gallery/wildebeest-leaping-riverbank-migration.webp",
        alt: "Wildebeest leaping down a steep riverbank during the migration river crossing"
      }
    ],
    pricingTiersProvisional: true,
    pricingTiers: [
      {
        pax: 2,
        trail: 1950,
        reserve: 2850,
        sovereign: 4200
      },
      {
        pax: 3,
        trail: 1780,
        reserve: 2650,
        sovereign: 3950
      },
      {
        pax: 4,
        trail: 1650,
        reserve: 2480,
        sovereign: 3750
      },
      {
        pax: 5,
        trail: 1580,
        reserve: 2380,
        sovereign: 3600
      },
      {
        pax: 6,
        trail: 1520,
        reserve: 2290,
        sovereign: 3480
      }
    ],
    included: [
      "모든 국립공원 입장료 및 보전 비용",
      "프라이빗 4X4 차량으로 즐기는 모든 게임 드라이브",
      "전 일정 전문 가이드",
      "헬스 게이트 사이클링/워킹 액티비티",
      "명시된 전 일정 식사",
      "일정표에 명시된 숙박시설",
      "공항 송영 및 숙소 간 이동"
    ],
    includedCategorized: {
      transfers: [
        "공항 송영 및 숙소 간 이동"
      ],
      accommodationMeals: [
        "명시된 전 일정 식사",
        "일정표에 명시된 숙박시설"
      ],
      guidingGameDrives: [
        "모든 국립공원 입장료 및 보전 비용",
        "프라이빗 4X4 차량으로 즐기는 모든 게임 드라이브",
        "전 일정 전문 가이드",
        "헬스 게이트 사이클링/워킹 액티비티"
      ]
    },
    excluded: [
      "국제선 항공권",
      "케냐 입국 비자(대부분 국적 기준 약 USD 30)",
      "여행자 보험",
      "팁 및 사례비",
      "선택 활동(열기구 사파리, 마사이 문화 체험)"
    ],
    excludedCategorized: [
      "국제선 항공권",
      "케냐 입국 비자(대부분 국적 기준 약 USD 30)",
      "여행자 보험",
      "가이드 및 숙소 직원을 위한 팁과 사례비",
      "마사이마라 열기구 투어(선택, 1인당 약 USD 450)",
      "개인 용품, 세탁비, 전화 요금"
    ],
    notes: [
      "표시된 요금은 더블/트윈룸을 2인이 함께 사용하는 경우의 1인당 요금입니다. 싱글룸 이용 시 추가 요금이 적용됩니다.",
      "요금은 시장 조사를 바탕으로 산정된 추정치이며, 숙소 구성은 제안 사항으로 예약 가능 여부 확인이 필요합니다.",
      "숙박시설 및 요금은 예약 가능 여부에 따라 달라지며, 정확한 여행 날짜에 따라 변동될 수 있습니다.",
      "케냐 국립공원 입장료는 정부가 책정하며, 사전 공지 없이 변경될 수 있습니다.",
      "예약 확정을 위해 10%의 예약금이 필요하며, 잔금은 출발 28일 전까지 지불해야 합니다."
    ],
    itinerary: [
      {
        day: 1,
        title: "나이로비 → 헬스 게이트 & 나이바샤 호수",
        description: "나이로비에서 그레이트 리프트 밸리로 이동해 헬스 게이트 국립공원에 도착합니다 — 차량 없이도 얼룩말, 기린, 버팔로 사이를 자유롭게 자전거나 도보로 다닐 수 있는, 케냐에서 가장 독특한 국립공원 중 하나입니다. 웅장한 붉은 바위 협곡과 지열 증기 분출구가 어우러져 동아프리카 어디에서도 볼 수 없는 풍경을 자아냅니다. 오후에는 나이바샤 호수에서 시간을 보낸 뒤 체크인합니다.",
        accommodation: "나이바샤 호수 로지",
        meals: "삼시세끼 포함",
        insiderFact: "헬스 게이트라는 이름은 한때 야생동물 무리의 이동 통로로 쓰이던 절벽 사이의 틈에서 유래했습니다 — 그리고 케냐에서 유일하게, 방문객이 야생동물 사이를 자유롭게 걷거나 자전거로 다닐 수 있는 몇 안 되는 국립공원 중 하나입니다.",
        accommodationByTier: {
          trail: {
            name: "Lake Naivasha Sopa Resort",
            image: "/images/lodges/lake-naivasha-sopa-resort.webp",
            amenities: [
              "wifi",
              "pool",
              "restaurant",
              "lake-view"
            ]
          },
          reserve: {
            name: "Enashipai Resort & Spa",
            image: "/images/lodges/enashipai-resort-spa.webp",
            amenities: [
              "spa",
              "pool",
              "view",
              "wifi"
            ]
          },
          sovereign: {
            name: "Great Rift Valley Lodge & Golf Resort",
            image: "/images/lodges/great-rift-valley-lodge-golf-resort.webp",
            amenities: [
              "pool",
              "view",
              "spa",
              "rift-valley-view"
            ]
          }
        }
      },
      {
        day: 2,
        title: "나쿠루 호수 국립공원",
        description: "나쿠루 호수 국립공원으로 이동합니다. 알칼리성 호수는 제철이 되면 거대한 플라밍고 무리를 끌어들여 호숫가를 온통 분홍빛으로 물들입니다. 이 공원은 코뿔소 보호구역으로 지정되어 있어, 한 번의 드라이브에서 검은코뿔소와 흰코뿔소를 모두 확실히 볼 수 있는 케냐의 몇 안 되는 곳 중 하나입니다. 사자, 표범, 로스차일드 기린도 서식하고 있습니다.",
        accommodation: "Lake Nakuru Lodge",
        meals: "삼시세끼 포함",
        insiderFact: "나쿠루 호수는 케냐 최초로 지정된 코뿔소 보호구역입니다 — 울타리로 둘러싸인 이 구역은 약 25마리의 검은코뿔소와 70마리가 넘는 흰코뿔소를 밀렵으로부터 보호하고 있습니다.",
        accommodationByTier: {
          trail: {
            name: "Lake Nakuru Lodge",
            image: "/images/lodges/lake-nakuru-lodge.webp",
            amenities: [
              "wifi",
              "restaurant",
              "view"
            ]
          },
          reserve: {
            name: "Sarova Lion Hill Game Lodge",
            image: "/images/lodges/sarova-lion-hill-game-lodge.webp",
            amenities: [
              "wifi",
              "pool",
              "restaurant",
              "view"
            ]
          },
          sovereign: {
            name: "Lake Elementaita Serena Camp",
            image: "/images/lodges/lake-elementaita-serena-camp.webp",
            amenities: [
              "view",
              "restaurant",
              "lake-view",
              "wifi"
            ]
          }
        }
      },
      {
        day: 3,
        title: "마사이마라 국립보호구역 — 도착",
        description: "케냐에서 가장 명성 높은 야생동물 지역이자 세계적인 사파리 목적지인 마사이마라 국립보호구역으로 이동합니다. 마라 강이 보호구역을 가로지르며, 숲과 탁 트인 초원에는 사자, 치타, 표범, 코끼리, 버팔로가 연중 서식합니다. 도착 즉시 진행되는 게임 드라이브에서는 늦은 오후 가장 활발한 지역을 둘러봅니다.",
        accommodation: "마사이마라 로지",
        meals: "삼시세끼 포함",
        accommodationByTier: {
          trail: {
            name: "Mara Sopa Lodge",
            image: "/images/lodges/masai-mara-sopa-lodge.webp",
            amenities: [
              "wifi",
              "pool",
              "restaurant",
              "migration-position"
            ]
          },
          reserve: {
            name: "Mara Serena Safari Lodge",
            image: "/images/lodges/mara-serena-safari-lodge.webp",
            amenities: [
              "wifi",
              "pool",
              "restaurant",
              "view"
            ]
          },
          sovereign: {
            name: "Angama Mara",
            image: "/images/lodges/angama-mara-escarpment-view.webp",
            amenities: [
              "pool",
              "view",
              "spa",
              "migration-corridor"
            ]
          }
        }
      },
      {
        day: 4,
        title: "마사이마라에서 보내는 하루",
        description: "마사이마라 전역에서 하루 종일 게임 드라이브를 즐깁니다. 이 보호구역은 연중 아프리카에서 가장 풍부한 포식동물 생태계 중 하나를 자랑하며, 7월부터 10월까지는 150만 마리가 넘는 누가 마라 강을 건너는 대이동이 펼쳐져 자연계에서 가장 극적인 장관 중 하나를 이룹니다. 가이드는 실시간 추적 정보와 수십 년간 쌓아온 현지 경험을 바탕으로 보호구역을 안내합니다.",
        accommodation: "마사이마라 로지",
        meals: "삼시세끼 포함",
        insiderFact: "대이동 기간의 마라 강 건너기는 정해진 시간표에 따라 일어나는 일이 아닙니다 — 누는 강을 건너기로 결정하기 전 몇 시간 동안 강둑에 모여 있습니다. 가이드는 무리의 행동을 미리 읽어 최적의 위치를 선점합니다.",
        accommodationByTier: {
          trail: {
            name: "Mara Sopa Lodge",
            image: "/images/lodges/masai-mara-sopa-lodge.webp",
            amenities: [
              "wifi",
              "pool",
              "restaurant",
              "migration-position"
            ]
          },
          reserve: {
            name: "Mara Serena Safari Lodge",
            image: "/images/lodges/mara-serena-safari-lodge.webp",
            amenities: [
              "wifi",
              "pool",
              "restaurant",
              "view"
            ]
          },
          sovereign: {
            name: "Angama Mara",
            image: "/images/lodges/angama-mara-escarpment-view.webp",
            amenities: [
              "pool",
              "view",
              "spa",
              "migration-corridor"
            ]
          }
        }
      },
      {
        day: 5,
        title: "나이로비 귀환 & 출발",
        description: "지평선 너머로 그레이트 리프트 밸리를 바라보며 나이로비로 돌아갑니다. 이후 조모 케냐타 국제공항으로 이동하여 다음 항공편에 탑승합니다.",
        accommodation: "N/A",
        meals: "조식"
      }
    ]
  },
  {
    slug: "9-day-honeymoon-safari-zanzibar",
    name: "9일 허니문 사파리 & 잔지바르 비치 이스케이프",
    duration: 9,
    destinations: [
      "tarangire",
      "ngorongoro",
      "serengeti",
      "zanzibar"
    ],
    type: "combination",
    priceFrom: 3847,
    groupSize: {
      min: 1,
      max: 6
    },
    bestFor: [
      "couples",
      "honeymoon",
      "luxury"
    ],
    overview: [
      "5일간의 사파리와 4박의 해변 휴식, 그리고 스스로 선택하지 않은 아침 알람은 단 한 번도 울리지 않는 여정 — 이 허니문은 풍경 못지않게 속도감을 중심으로 설계되었습니다.",
      "사파리 구간에서는 타랑기레의 코끼리 무리와 고대 바오바브 숲을 지나 중앙 세렝게티의 사자와 표범 영역에서 꼬박 이틀을 보내고, 유네스코 세계유산인 응고롱고로 크레이터로 가이드와 함께 하강한 뒤, 짧은 항공편을 타고 사파리 차량 대신 잔지바르 북단의 능귀 비치로 향합니다. 그곳에서 서두름 없이 보내는 4박 동안에는 다이빙, 석양 속 다우 보트 크루즈, 스톤타운 방문, 혹은 아무것도 하지 않는 여유까지 즐길 수 있습니다. 윌더니스 트레일과 윌더니스 소버린, 두 가지 숙박 등급 모두 허니문에 어울리는 리듬에 맞춰 특별히 선정되었습니다 — 절대 서두르지 않고, 절대 일정을 과하게 채우지 않습니다."
    ],
    highlights: [
      "타랑기레의 코끼리 무리와 고대 바오바브 숲",
      "중앙 세렝게티 최고의 포식동물 서식지에서 꼬박 이틀",
      "유네스코 세계유산인 응고롱고로 크레이터로의 가이드 동반 하강",
      "잔지바르 능귀 비치에서 여정을 마무리하는 4박",
      "허니문에 어울리는 속도로 설계된 두 가지 숙박 등급 — 절대 서두르지 않습니다"
    ],
    heroImage: "/images/gallery/zanzibar-nungwi-aerial.jpg",
    heroImageAlt: "Aerial view of a beachfront resort with thatched roofs, palm trees, and turquoise lagoon waters at Nungwi, Zanzibar",
    gallery: [
      {
        src: "/images/gallery/beachfront-candlelit-dinner-zanzibar.webp",
        alt: "Candlelit beachfront dinner setup under palm trees on a Zanzibar beach at dusk"
      },
      {
        src: "/images/gallery/serengeti-wildebeest-herd-acacia-woodland.webp",
        alt: "Wildebeest herd grazing beneath acacia trees in Central Serengeti's morning haze"
      },
      {
        src: "/images/gallery/ngorongoro-crater-landscape.webp",
        alt: "Panoramic view of the Ngorongoro Crater floor with its soda lake and winding safari road, framed by the crater rim"
      }
    ],
    pricingTiersProvisional: true,
    pricingTiers: [
      {
        pax: 1,
        trail: 5923,
        sovereign: 10264
      },
      {
        pax: 2,
        trail: 4570,
        sovereign: 7241
      },
      {
        pax: 3,
        trail: 4056,
        sovereign: 6823
      },
      {
        pax: 4,
        trail: 4052,
        sovereign: 6752
      },
      {
        pax: 5,
        trail: 3847,
        sovereign: 6599
      },
      {
        pax: 6,
        trail: 3879,
        sovereign: 6589
      }
    ],
    included: [
      "모든 국립공원 입장료 및 보전 비용",
      "프라이빗 4X4 차량으로 즐기는 모든 게임 드라이브",
      "사파리 전 일정 전문 가이드",
      "아루샤-잔지바르 구간 항공편",
      "명시된 전 일정 식사",
      "일정표에 명시된 숙박시설",
      "공항 송영 및 숙소 간 이동"
    ],
    includedCategorized: {
      transfers: [
        "아루샤-잔지바르 구간 항공편",
        "공항 송영 및 숙소 간 이동"
      ],
      accommodationMeals: [
        "명시된 전 일정 식사",
        "일정표에 명시된 숙박시설"
      ],
      guidingGameDrives: [
        "모든 국립공원 입장료 및 보전 비용",
        "프라이빗 4X4 차량으로 즐기는 모든 게임 드라이브",
        "사파리 전 일정 전문 가이드"
      ]
    },
    excluded: [
      "국제선 항공권",
      "비자 발급 비용",
      "여행자 보험",
      "팁",
      "선택 활동(다이빙, 스톤타운 투어, 스파 트리트먼트)"
    ],
    excludedCategorized: [
      "국제선 항공권",
      "비자 발급 비용",
      "여행자 보험",
      "팁",
      "선택 활동(다이빙, 스톤타운 투어, 스파 트리트먼트)",
      "개인 용품, 세탁비, 전화 요금"
    ],
    notes: [
      "표시된 요금은 더블/트윈룸을 2인이 함께 사용하는 경우의 1인당 요금입니다. 싱글룸 이용 시 추가 요금이 적용됩니다.",
      "숙박시설 및 요금은 예약 가능 여부에 따라 달라지며, 정확한 여행 날짜에 따라 변동될 수 있습니다.",
      "탄자니아 국립공원 및 보전지역 입장료는 정부가 책정하며, 사전 공지 없이 변경될 수 있습니다.",
      "예약 확정을 위해 30%의 예약금이 필요하며, 잔금은 출발 60일 전까지 지불해야 합니다.",
      "국내선 항공편 및 숙소 요금은 예약 시점에 확정됩니다."
    ],
    faq: [
      {
        q: "이 일정은 정말 커플만을 위한 것인가요, 아니면 가족이나 친구도 함께할 수 있나요?",
        a: "기본적으로 두 사람을 중심으로 설계되었지만, 두 등급 모두 함께 축하하는 소규모 가족이나 친구 그룹에도 잘 맞습니다 — 위의 요금은 최대 6인까지 적용됩니다."
      },
      {
        q: "두 가지 숙박 등급의 차이는 무엇인가요?",
        a: "윌더니스 트레일은 편안하고 위치가 좋은 롯지를 상위 등급과 동일한 루트 및 가이딩과 결합해, 최고가는 아니면서도 여정에 온전히 몰입할 수 있게 해 줍니다. 윌더니스 소버린은 Gibb's Farm과 Kilindi Zanzibar를 포함해 탄자니아와 잔지바르에서 가장 명성 높은 숙소들로 모든 구간을 업그레이드합니다."
      },
      {
        q: "케이크, 꽃, 프라이빗 디너 같은 허니문 특별 서비스를 준비할 수 있나요?",
        a: "네, 가능합니다 — 대부분의 파트너 롯지에서는 요청 시 허니문 패키지(스파클링 와인, 꽃, 프라이빗 디너 등)를 제공합니다. 예약 시 알려주시면 일정에 반영해 드리겠습니다."
      },
      {
        q: "이 여행을 위해 여행 경험이 많아야 하나요?",
        a: "전혀 그렇지 않습니다. 게임 드라이브, 잔지바르행 국내선 항공편, 해변 숙박까지 모든 구간이 완전히 가이드되고 준비되어 있습니다. 많은 커플들에게 첫 번째 큰 여행으로도 자주 선택되는 일정입니다."
      },
      {
        q: "이 루트로 허니문을 떠나기에 가장 좋은 시기는 언제인가요?",
        a: "건기(6월~10월)는 가장 안정적인 야생동물 관찰과 가장 잔잔한 잔지바르 날씨를 제공합니다. 12월~2월도 인파가 적고 해변 여건이 뛰어난 훌륭한 대안입니다."
      },
      {
        q: "잔지바르에서의 4박은 충분한가요?",
        a: "5일간의 활동적인 사파리 이후 진정으로 서두름 없이 쉴 수 있는 시간입니다 — 대부분의 커플에게 딱 알맞은 길이지만, 해변에서 더 많은 시간을 원하신다면 하루 이틀 연장하는 것도 쉽게 준비해 드릴 수 있습니다."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "아루샤에서 타랑기레 국립공원으로",
        description: "아루샤 시내 호텔에서 픽업 후, 고대 바오바브나무 아래를 거니는 코끼리 무리를 추적하며 타랑기레에서 하루 종일 가이드 동반 게임 드라이브를 즐깁니다. 이후 카라투로 이동해 숙박합니다.",
        accommodation: "카라투 로지",
        meals: "삼시세끼 포함",
        accommodationByTier: {
          trail: {
            name: "Ngorongoro Farm House",
            image: "/images/lodges/ngorongoro-farm-house.webp",
            amenities: [
              "pool",
              "view",
              "organic-farm",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Gibb's Farm",
            image: "/images/lodges/gibbs-farm-cottage-exterior.webp",
            amenities: [
              "spa",
              "view",
              "organic-farm"
            ]
          }
        }
      },
      {
        day: 2,
        title: "카라투에서 중앙 세렝게티로",
        description: "응고롱고로 숲을 지나며 크레이터 전망대에 잠시 들른 뒤, 중앙 세렝게티로 이동해 오후에 가이드 동반 게임 드라이브를 즐깁니다.",
        accommodation: "세렝게티 텐티드 캠프",
        meals: "삼시세끼 포함",
        accommodationByTier: {
          trail: {
            name: "Kubu Kubu Tented Lodge",
            image: "/images/lodges/kubukubu-tented-lodge.webp",
            amenities: [
              "pool",
              "view",
              "restaurant",
              "wifi"
            ]
          },
          sovereign: {
            name: "Siringiti Serengeti Camp",
            image: "/images/lodges/siringiti-serengeti-camp.webp",
            amenities: [
              "view",
              "spa",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 3,
        title: "중앙 세렝게티, 종일",
        description: "탄자니아에서 사자, 표범, 치타를 가장 꾸준히 만날 수 있는 지역 중 하나인 중앙 세렝게티의 탁 트인 초원에서 하루 종일 몰입하는 시간을 보냅니다.",
        accommodation: "세렝게티 텐티드 캠프",
        meals: "삼시세끼 포함",
        insiderFact: "세로네라 계곡에 상주하는 사자 무리 덕분에 중앙 세렝게티는 대이동 시기와 무관하게 연중 언제든 사자를 확실히 볼 수 있는 아프리카 최고의 지역 중 하나입니다.",
        accommodationByTier: {
          trail: {
            name: "Kubu Kubu Tented Lodge",
            image: "/images/lodges/kubukubu-tented-lodge.webp",
            amenities: [
              "pool",
              "view",
              "restaurant",
              "wifi"
            ]
          },
          sovereign: {
            name: "Siringiti Serengeti Camp",
            image: "/images/lodges/siringiti-serengeti-camp.webp",
            amenities: [
              "view",
              "spa",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 4,
        title: "중앙 세렝게티에서 응고롱고로 크레이터로",
        description: "유네스코 세계유산이자 빅파이브의 서식지인 응고롱고로 크레이터로 가이드와 함께 하강한 뒤, 카라투로 돌아와 숙박합니다.",
        accommodation: "카라투 로지",
        meals: "삼시세끼 포함",
        insiderFact: "응고롱고로는 단 한 번의 게임 드라이브에서 검은코뿔소를 확실히 볼 수 있는 탄자니아의 몇 안 되는 곳 중 하나입니다.",
        accommodationByTier: {
          trail: {
            name: "Ngorongoro Farm House",
            image: "/images/lodges/ngorongoro-farm-house.webp",
            amenities: [
              "pool",
              "view",
              "organic-farm",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Gibb's Farm",
            image: "/images/lodges/gibbs-farm-cottage-exterior.webp",
            amenities: [
              "spa",
              "view",
              "organic-farm"
            ]
          }
        }
      },
      {
        day: 5,
        title: "카라투에서 잔지바르로",
        description: "롯지에서 여유로운 아침을 보내며, 원하신다면 커피 농장 산책을 즐길 시간도 있습니다. 이후 이른 점심 식사를 마치고 전용 차량으로 잔지바르로 이동합니다. 도착 시 현지 가이드가 맞이하여 능귀 비치까지 안내해 드립니다.",
        accommodation: "능귀 비치 리조트",
        meals: "조식 및 중식 포함",
        accommodationByTier: {
          trail: {
            name: "Nungwi Dreams By Mantis",
            image: "/images/lodges/nungwi-dreams-by-mantis.webp",
            amenities: [
              "pool",
              "view",
              "restaurant",
              "wifi"
            ]
          },
          sovereign: {
            name: "Kilindi Zanzibar",
            image: "/images/lodges/kilindi-zanzibar.webp",
            amenities: [
              "pool",
              "spa",
              "view",
              "all-inclusive"
            ]
          }
        }
      },
      {
        day: 6,
        title: "능귀 비치, 잔지바르",
        description: "잔지바르의 백사장에서 서두름 없이 보내는 3일 중 첫째 날입니다 — 다이빙, 석양 속 다우 보트 크루즈, 스톤타운 방문, 혹은 그저 해변에서 쉬는 것도 자유롭게 선택할 수 있습니다.",
        accommodation: "능귀 비치 리조트",
        meals: "등급에 따라 다름",
        accommodationByTier: {
          trail: {
            name: "Nungwi Dreams By Mantis",
            image: "/images/lodges/nungwi-dreams-by-mantis.webp",
            amenities: [
              "pool",
              "view",
              "restaurant",
              "wifi"
            ]
          },
          sovereign: {
            name: "Kilindi Zanzibar",
            image: "/images/lodges/kilindi-zanzibar.webp",
            amenities: [
              "pool",
              "spa",
              "view",
              "all-inclusive"
            ]
          }
        }
      },
      {
        day: 7,
        title: "능귀 비치, 잔지바르",
        description: "해변에서 온전히 자유롭게 보내는 하루입니다 — 다이빙, 스노클링, 혹은 그저 아무것도 하지 않아도 좋습니다.",
        accommodation: "능귀 비치 리조트",
        meals: "등급에 따라 다름",
        accommodationByTier: {
          trail: {
            name: "Nungwi Dreams By Mantis",
            image: "/images/lodges/nungwi-dreams-by-mantis.webp",
            amenities: [
              "pool",
              "view",
              "restaurant",
              "wifi"
            ]
          },
          sovereign: {
            name: "Kilindi Zanzibar",
            image: "/images/lodges/kilindi-zanzibar.webp",
            amenities: [
              "pool",
              "spa",
              "view",
              "all-inclusive"
            ]
          }
        }
      },
      {
        day: 8,
        title: "능귀 비치, 잔지바르",
        description: "잔지바르에서 보내는 마지막 온전한 하루입니다 — 석양 속 다우 보트 크루즈로 여정을 마무리하는 것이 인기 있는 방법입니다.",
        accommodation: "능귀 비치 리조트",
        meals: "등급에 따라 다름",
        accommodationByTier: {
          trail: {
            name: "Nungwi Dreams By Mantis",
            image: "/images/lodges/nungwi-dreams-by-mantis.webp",
            amenities: [
              "pool",
              "view",
              "restaurant",
              "wifi"
            ]
          },
          sovereign: {
            name: "Kilindi Zanzibar",
            image: "/images/lodges/kilindi-zanzibar.webp",
            amenities: [
              "pool",
              "spa",
              "view",
              "all-inclusive"
            ]
          }
        }
      },
      {
        day: 9,
        title: "출발",
        description: "전용 차량으로 잔지바르 아베이드 카루메 국제공항으로 이동하여 다음 항공편에 탑승합니다.",
        accommodation: "N/A",
        meals: "조식"
      }
    ]
  },
  {
    slug: "10-day-ultimate-great-migration-mara-river-crossing",
    name: "10일 얼티밋 대이동 — 마라 강 건너기 사파리",
    duration: 10,
    destinations: [
      "tarangire",
      "manyara",
      "ngorongoro",
      "serengeti"
    ],
    type: "wildlife",
    priceFrom: 4775,
    groupSize: {
      min: 1,
      max: 6
    },
    bestFor: [
      "couples",
      "photography",
      "luxury"
    ],
    overview: [
      "강 건너기 장면은 아프리카 야생동물 사진에서 가장 많은 사람이 담고 싶어 하는 순간이자, 동시에 가장 보장하기 어려운 순간이기도 합니다 — 그래서 이 일정은 확률을 실제로 높이는 단 하나의 방법을 택했습니다. 도하 지역에서 하루가 아닌 꼬박 3일을 보내는 것입니다.",
      "여정의 흐름을 쌓아가는 방식도 중요합니다. 타랑기레의 코끼리 무리와 좀처럼 만나기 힘든 가이드 동반 워킹 사파리로 시작해, 응고롱고로 크레이터로의 종일 하강에서 빅파이브를 만나고, 지금까지 발견된 가장 중요한 초기 인류 화석의 산지인 올두바이 협곡에도 들릅니다. 그 후에는 북쪽으로 이동해 세렝게티의 마라 강 지역에서 연속 3일을 보내며, 대부분의 짧은 일정이 제공하는 단 한 번의 도박이 아니라 대이동의 강 건너기를 포착할 수 있는 위치를 확보합니다. 윌더니스 트레일과 윌더니스 소버린, 두 가지 숙박 등급 모두 동일한 목표 아래 설계되었습니다 — 무리가 마침내 강으로 뛰어드는 순간, 최적의 위치에 있을 가능성을 극대화하는 것입니다."
    ],
    highlights: [
      "타랑기레의 코끼리 무리와 가이드 동반 워킹 사파리",
      "응고롱고로 크레이터로의 가이드 동반 종일 하강",
      "인류의 요람, 올두바이 협곡 방문",
      "북부 세렝게티 마라 강 도하 지역에서 꼬박 3일",
      "강 건너기 목격 확률을 극대화하도록 설계된 두 가지 숙박 등급"
    ],
    heroImage: "/images/gallery/hartebeest-plains.webp",
    heroImageAlt: "Hartebeest antelope with distinctive lyre-shaped horns standing in golden grassland",
    gallery: [
      {
        src: "/images/gallery/mara-river-crossing.webp",
        alt: "Wildebeest and zebra herds crossing the Mara River during the great migration"
      },
      {
        src: "/images/gallery/olduvai-gorge.webp",
        alt: "Olduvai Gorge's dramatic rock formations and savanna landscape beneath a cloudy sky"
      },
      {
        src: "/images/gallery/ngorongoro-crater-landscape.webp",
        alt: "Panoramic view of the Ngorongoro Crater floor with its soda lake and winding safari road, framed by the crater rim"
      },
      {
        src: "/images/gallery/tarangire-elephants-baobab.webp",
        alt: "Two elephants with tusks foraging together in tall grass in Tarangire National Park"
      }
    ],
    pricingTiersProvisional: true,
    pricingTiers: [
      {
        pax: 1,
        trail: 9002,
        sovereign: 15148
      },
      {
        pax: 2,
        trail: 5987,
        sovereign: 10746
      },
      {
        pax: 3,
        trail: 5060,
        sovereign: 8473
      },
      {
        pax: 4,
        trail: 5168,
        sovereign: 10286
      },
      {
        pax: 5,
        trail: 4775,
        sovereign: 9014
      },
      {
        pax: 6,
        trail: 4895,
        sovereign: 10132
      }
    ],
    included: [
      "모든 국립공원 입장료 및 보전 비용",
      "프라이빗 4X4 차량으로 즐기는 모든 게임 드라이브",
      "전 일정 전문 가이드",
      "올두바이 협곡 입장료",
      "명시된 전 일정 식사",
      "일정표에 명시된 숙박시설",
      "공항 송영 및 숙소 간 이동"
    ],
    includedCategorized: {
      transfers: [
        "공항 송영 및 숙소 간 이동"
      ],
      accommodationMeals: [
        "명시된 전 일정 식사",
        "일정표에 명시된 숙박시설"
      ],
      guidingGameDrives: [
        "모든 국립공원 입장료 및 보전 비용",
        "프라이빗 4X4 차량으로 즐기는 모든 게임 드라이브",
        "전 일정 전문 가이드",
        "올두바이 협곡 입장료"
      ]
    },
    excluded: [
      "국제선 항공권",
      "비자 발급 비용",
      "여행자 보험",
      "팁",
      "선택 활동"
    ],
    excludedCategorized: [
      "국제선 항공권",
      "비자 발급 비용",
      "여행자 보험",
      "팁",
      "선택 활동",
      "개인 용품, 세탁비, 전화 요금"
    ],
    notes: [
      "표시된 요금은 더블/트윈룸을 2인이 함께 사용하는 경우의 1인당 요금입니다. 싱글룸 이용 시 추가 요금이 적용됩니다.",
      "숙박시설 및 요금은 예약 가능 여부에 따라 달라지며, 정확한 여행 날짜에 따라 변동될 수 있습니다.",
      "탄자니아 국립공원 및 보전지역 입장료는 정부가 책정하며, 사전 공지 없이 변경될 수 있습니다.",
      "예약 확정을 위해 30%의 예약금이 필요하며, 잔금은 출발 60일 전까지 지불해야 합니다.",
      "3~4인 그룹의 윌더니스 소버린 요금은 번들 패키지 방식으로 산정되며, 예약 시점에 확정됩니다."
    ],
    faq: [
      {
        q: "마라 강 건너기를 보기에 가장 좋은 시기는 언제인가요?",
        a: "대이동이 북부 세렝게티를 지나는 7월부터 10월 사이에 도하가 주로 일어나지만, 정확한 시기는 강수량에 따라 해마다 달라집니다. 특정 하루에 반드시 볼 수 있다는 보장은 없습니다 — 바로 그래서 이 일정은 도하 지역에서 하루가 아닌 꼬박 3일을 확보해 두었습니다."
      },
      {
        q: "왜 마라 강에서 하루가 아닌 3일을 보내나요?",
        a: "강 건너기는 예측할 수 없습니다 — 무리는 강을 건너기로 결정하기 전 몇 시간, 때로는 며칠 동안 강둑에 머물러 있습니다. 단 하루는 단 한 번의 도박에 불과하지만, 3일이면 그 순간 최적의 위치에 있을 확률을 의미 있게 높일 수 있습니다."
      },
      {
        q: "사파리 초보 여행객에게도 적합한 일정인가요?",
        a: "네 — 이 루트는 더 확실하고 밀도 높은 야생동물 관찰이 가능한 타랑기레와 응고롱고로에서 시작해 변수가 더 큰 마라의 도하 지역으로 자연스럽게 이어지므로, 도하가 없는 날에도 여정 내내 확실한 야생동물 관찰을 보장받을 수 있습니다."
      },
      {
        q: "올두바이 협곡은 무엇이며, 왜 일정에 포함되어 있나요?",
        a: "흔히 '인류의 요람'이라 불리는 올두바이 협곡은 가장 중요한 초기 인류 화석 일부가 발견된 장소입니다. 응고롱고로와 세렝게티 사이를 이동하는 길에 짧지만 진정으로 흥미로운 정차지입니다."
      },
      {
        q: "두 가지 숙박 등급의 차이는 무엇인가요?",
        a: "윌더니스 리저브는 편안하고 위치가 좋은 숙소를 상위 등급과 동일한 루트 및 가이딩과 결합합니다. 윌더니스 소버린은 모든 구간을 탄자니아에서 가장 명성 높은 캠프와 롯지로 업그레이드하며, 그중 일부는 공유 게임 드라이브가 숙박 요금에 직접 포함되는 게임 패키지 요금제를 적용합니다."
      },
      {
        q: "이 사파리는 프라이빗인가요, 아니면 다른 여행객과 공유하나요?",
        a: "게임 패키지 요금제를 운영하는 일부 윌더니스 소버린 숙소에서의 공유 게임 드라이브를 제외하면, 가이드와 차량은 전 일정 동안 귀하의 그룹만을 위한 프라이빗 서비스입니다."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "아루샤",
        description: "도착 후 아루샤로 이동하여 사파리 시작 전 1박을 보냅니다.",
        accommodation: "아루샤 로지",
        meals: "조식 포함",
        accommodationByTier: {
          trail: {
            name: "Kahawa House",
            image: "/images/lodges/kahawa-house.webp",
            amenities: [
              "wifi",
              "restaurant",
              "garden"
            ]
          },
          sovereign: {
            name: "Arusha Coffee Lodge",
            image: "/images/lodges/arusha-coffee-lodge-garden-path.webp",
            amenities: [
              "wifi",
              "pool",
              "view"
            ]
          }
        }
      },
      {
        day: 2,
        title: "여유의 하루, 아루샤",
        description: "국립공원으로 떠나기 전 아루샤에서 자유롭게 보내며 여정에 적응하는 하루입니다.",
        accommodation: "아루샤 로지",
        meals: "삼시세끼 포함",
        accommodationByTier: {
          trail: {
            name: "Kahawa House",
            image: "/images/lodges/kahawa-house.webp",
            amenities: [
              "wifi",
              "restaurant",
              "garden"
            ]
          },
          sovereign: {
            name: "Arusha Coffee Lodge",
            image: "/images/lodges/arusha-coffee-lodge-garden-path.webp",
            amenities: [
              "wifi",
              "pool",
              "view"
            ]
          }
        }
      },
      {
        day: 3,
        title: "타랑기레 국립공원",
        description: "고대 바오바브나무 아래를 거니는 탄자니아 최대 규모의 코끼리 무리를 추적하며 타랑기레에서 가이드 동반 게임 드라이브를 즐깁니다.",
        accommodation: "타랑기레 로지",
        meals: "삼시세끼 포함",
        accommodationByTier: {
          trail: {
            name: "Conserve Safari Tarangire",
            image: "/images/lodges/conserve-safari-tarangire-tent-bedroom.webp",
            amenities: [
              "restaurant",
              "wifi"
            ]
          },
          sovereign: {
            name: "Tarangire Treetops",
            image: "/images/lodges/siringit-tarangire-camp-pool-aerial.webp",
            amenities: [
              "pool",
              "view",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 4,
        title: "타랑기레 워킹 사파리에서 마니아라 호수를 거쳐 카라투로",
        description: "타랑기레에서 아침 워킹 사파리를 즐긴 뒤, 마니아라 호수를 지나 카라투로 이동해 숙박합니다.",
        accommodation: "카라투 로지",
        meals: "삼시세끼 포함",
        insiderFact: "타랑기레는 가이드 동반 워킹 사파리가 허용되는 탄자니아의 몇 안 되는 국립공원 중 하나입니다 — 무장 레인저와 함께 도보로 야생동물을 추적할 수 있는 흔치 않은 기회입니다.",
        accommodationByTier: {
          trail: {
            name: "Ngorongoro Farm House",
            image: "/images/lodges/ngorongoro-farm-house.webp",
            amenities: [
              "pool",
              "view",
              "organic-farm",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Gibb's Farm",
            image: "/images/lodges/gibbs-farm-cottage-exterior.webp",
            amenities: [
              "spa",
              "view",
              "organic-farm"
            ]
          }
        }
      },
      {
        day: 5,
        title: "응고롱고로 크레이터",
        description: "세계 최대의 온전한 화산 칼데라 안에서 빅파이브를 추적하며 응고롱고로 크레이터로 종일 가이드 동반 하강을 진행합니다.",
        accommodation: "카라투 로지",
        meals: "삼시세끼 포함",
        insiderFact: "응고롱고로는 단 한 번의 게임 드라이브에서 검은코뿔소를 확실히 볼 수 있는 탄자니아의 몇 안 되는 곳 중 하나입니다.",
        accommodationByTier: {
          trail: {
            name: "Ngorongoro Farm House",
            image: "/images/lodges/ngorongoro-farm-house.webp",
            amenities: [
              "pool",
              "view",
              "organic-farm",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Gibb's Farm",
            image: "/images/lodges/gibbs-farm-cottage-exterior.webp",
            amenities: [
              "spa",
              "view",
              "organic-farm"
            ]
          }
        }
      },
      {
        day: 6,
        title: "응고롱고로에서 중앙 세렝게티로(올두바이 협곡 경유)",
        description: "흔히 '인류의 요람'이라 불리는 올두바이 협곡에 들르며 응고롱고로 보전지역을 통과한 뒤, 중앙 세렝게티로 이동합니다.",
        accommodation: "세렝게티 텐티드 캠프",
        meals: "삼시세끼 포함",
        accommodationByTier: {
          trail: {
            name: "Kubu Kubu Tented Lodge",
            image: "/images/lodges/kubukubu-tented-lodge.webp",
            amenities: [
              "pool",
              "view",
              "restaurant",
              "wifi"
            ]
          },
          sovereign: {
            name: "Serengeti Explorer",
            image: "/images/lodges/serengeti-explorer.webp",
            amenities: [
              "pool",
              "view",
              "spa"
            ]
          }
        }
      },
      {
        day: 7,
        title: "중앙 세렝게티에서 북부 세렝게티/마라 강으로",
        description: "북쪽의 마라 강을 향해 이동하여 세렝게티 최고의 도하 지역으로 진입합니다.",
        accommodation: "마라 강 캠프",
        meals: "삼시세끼 포함",
        accommodationByTier: {
          trail: {
            name: "Mara Mara Tented Lodge",
            image: "/images/lodges/mara-mara-tented-lodge.webp",
            amenities: [
              "view",
              "restaurant",
              "wildlife-view"
            ]
          },
          sovereign: {
            name: "Lemala Kuria Hills",
            image: "/images/lodges/lemala-kuria-hills-aerial-kopje-camp.webp",
            amenities: [
              "pool",
              "view",
              "spa",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 8,
        title: "마라 강 건너기, 종일",
        description: "대이동의 강 건너기를 포착하기 위해 위치를 잡고 하루 종일 머무릅니다.",
        accommodation: "마라 강 캠프",
        meals: "삼시세끼 포함",
        insiderFact: "강 건너기는 정해진 시간표에 따라 일어나는 일이 아닙니다 — 무리는 강을 건너기로 결정하기 전 몇 시간 동안 강둑에 모여 있습니다. 가이드는 무리의 행동을 미리 읽어 최적의 위치를 선점합니다.",
        accommodationByTier: {
          trail: {
            name: "Mara Mara Tented Lodge",
            image: "/images/lodges/mara-mara-tented-lodge.webp",
            amenities: [
              "view",
              "restaurant",
              "wildlife-view"
            ]
          },
          sovereign: {
            name: "Lemala Kuria Hills",
            image: "/images/lodges/lemala-kuria-hills-aerial-kopje-camp.webp",
            amenities: [
              "pool",
              "view",
              "spa",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 9,
        title: "마라 강 건너기, 종일",
        description: "같은 지역에서 보내는 둘째 날입니다 — 강 건너기는 정해진 일정대로 일어나지 않기 때문에, 이 추가된 하루가 목격 확률을 의미 있게 높여줍니다.",
        accommodation: "마라 강 캠프",
        meals: "삼시세끼 포함",
        accommodationByTier: {
          trail: {
            name: "Mara Mara Tented Lodge",
            image: "/images/lodges/mara-mara-tented-lodge.webp",
            amenities: [
              "view",
              "restaurant",
              "wildlife-view"
            ]
          },
          sovereign: {
            name: "Lemala Kuria Hills",
            image: "/images/lodges/lemala-kuria-hills-aerial-kopje-camp.webp",
            amenities: [
              "pool",
              "view",
              "spa",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 10,
        title: "출발",
        description: "코가텐데 활주로로 이동하여 다음 항공편에 탑승합니다.",
        accommodation: "N/A",
        meals: "조식"
      }
    ]
  },
  {
    slug: "tanzania-photographic-safari",
    name: "탄자니아 포토그래픽 사파리 — 타랑기레, 응고롱고로 크레이터 & 세렝게티",
    duration: 10,
    destinations: [
      "tarangire",
      "ngorongoro",
      "serengeti"
    ],
    type: "wildlife",
    priceFrom: 4597,
    groupSize: {
      min: 1,
      max: 6
    },
    badge: "new",
    bestFor: [
      "photography",
      "wildlife-enthusiasts",
      "solo"
    ],
    overview: [
      "대부분의 사파리는 빠르게 움직입니다. 동물을 발견하고, 차창 너머로 몇 장 찍은 뒤, 눈앞의 광경을 제대로 볼 틈도 없이 다음 목적지로 향합니다. 이 여정은 그 반대로 설계되었습니다. 실제로 원하는 장면을 담아낼 수 있을 만큼 충분히 느린 속도와, 차량 안의 충분한 공간을 갖추고 있습니다 — '거의 찍을 뻔했다'는 아쉬운 기억이 아니라 말입니다.",
      "10일 동안 이 포토그래픽 사파리는 탄자니아 북부에서 가장 풍요로운 4개 지역을 순회합니다. 타랑기레의 코끼리 무리와 고대 바오바브나무에서 시작해, 야생동물 밀도가 높은 응고롱고로 크레이터 바닥에서 하루를 온전히 보낸 뒤, 세렝게티로 향합니다 — 먼저 대륙에서 가장 확실하게 대형 고양잇과 동물을 만날 수 있는 지역 중 하나인 중앙 평원, 그 다음에는 빛이 황금빛으로 물들고 지평선이 끝없이 이어지는 북부 대이동 지역으로 향합니다. 매일의 일정은 국립공원을 체크리스트처럼 소화하는 것이 아니라, 빛과 위치 선정, 그리고 인내를 중심으로 짜여 있습니다.",
      "그룹은 각 사진가가 자신만의 좌석과 망원렌즈를 위한 실질적인 작업 공간을 확보할 수 있을 만큼 소규모로 유지되며, 여정 내내 촬영 위치 선정에 대해 특별히 교육받은 전문 자격을 갖춘 가이드가 동행합니다 — 단순히 동물이 어디에 있는지뿐 아니라, 도착했을 때 빛이 어떻게 비칠지까지 파악하고 있습니다. 20년간 야생동물을 촬영해 온 분이든, 새 카메라를 들고 처음으로 큰 여행을 떠나는 분이든, 이 탄자니아 사파리는 스마트폰 가득한 스냅사진이 아니라 진심으로 자랑스러워할 만한 사진 폴더를 안고 돌아가고 싶은 분들을 위해 만들어졌습니다."
    ],
    tagline: "2022년 설립된 현지 기업 · 전문 자격을 갖춘 가이드 · 고정 그룹 일정이 아닌 맞춤 출발",
    bestTimeToTravel: "6월~10월은 건기의 빛과 타랑기레의 코끼리 집결이 매력적이며, 6월 말~9월은 북부 세렝게티의 대이동과 강 건너기 가능성이 높은 시기입니다",
    whyDifferent: {
      heading: "이 체험이 일반 사파리와 다른 이유",
      paragraphs: [
        "일반적인 사파리는 야생동물을 '보는' 것을 중심으로 설계됩니다. 이 여정은 야생동물을 '촬영하는' 것을 중심으로 설계되어 있으며, 그 차이가 하루하루의 진행 방식을 거의 모든 면에서 바꿔놓습니다.",
        "차량은 단순히 동물과의 거리뿐 아니라 빛과 각도까지 고려해 위치를 잡습니다. 즉 태양이 딱 맞는 위치에 오도록 하기 위해 예상치 못한 방향에서 접근할 수도 있다는 뜻입니다. 한 장면에 머무는 시간은 정해진 일정의 속도가 아니라 사진에 필요한 인내로 결정됩니다 — 프라이드가 곧 움직일 것 같으면, 기다립니다. 그리고 가이드의 역할은 단지 동물을 찾아주는 것에 그치지 않습니다 — 20분 후에 빛이 어디로 떨어질지, 배경에서 방해가 되는 덤불이 언제 걷힐지, 다음 무전 연락을 쫓기보다 그 자리를 지키는 것이 언제 더 가치 있는지를 읽어냅니다.",
        "사진 중심의 사파리를 처음 경험하신다면, 이 차이는 거의 즉시 느껴지실 것입니다 — 서두름은 줄고, 응시하는 시간은 늘어납니다."
      ]
    },
    destinationHighlights: {
      heading: "촬영 하이라이트",
      items: [
        {
          title: "타랑기레 — 코끼리와 바오바브나무",
          text: "사파리는 이곳에서 시작되며, 카메라와의 리듬을 찾기에 더없이 온화하고 풍요로운 장소입니다. 거대한 코끼리 무리가 고대 바오바브나무 사이를 이동하며, 그 실루엣만으로도 메모리카드의 절반을 채울 가치가 있습니다. 건기에는 따뜻하고 먼지 낀 늦은 오후의 빛이 모든 것을 감싸 안습니다. 넓은 환경 사진에도, 근거리 야생동물 초상 사진에도 똑같이 보람이 있는 곳으로, 여행 초반부터 이따금 망원렌즈를 내려놓고 코끼리들이 살아가는 풍경 자체를 찍어보라는 좋은 일깨움을 줍니다."
        },
        {
          title: "응고롱고로 크레이터 — 밀도와 드라마",
          text: "크레이터 바닥에서 하루를 온전히 보내며 촬영합니다. 탄자니아의 다른 거의 모든 곳과 달리, 이곳에서는 피사체를 찾느라 고생할 필요가 없습니다 — 크레이터의 폐쇄된 생태계는 사자, 코끼리, 버팔로, 하이에나, 플라밍고, 그리고 운이 좋다면 멸종위기종인 검은코뿔소까지, 이 모든 것을 좁고 극적인 풍경 안에 응축해 놓았습니다. 처음 방문하는 분들에게는 자신감이 자리 잡는 날이 되는 경우가 많고, 경험 많은 사진가에게는 너무 많은 좋은 선택지 중에서 고민하는 하루가 됩니다."
        },
        {
          title: "중앙 세렝게티 — 포식동물",
          text: "일 년 내내 대형 고양잇과 동물을 가장 확실하게 만날 수 있는 탄자니아의 지역이며, 이 여정에서 인내를 위해 마련된 장소입니다. 코피에(바위 언덕), 탁 트인 평원, 숲의 가장자리가 사자, 표범, 치타를 만날 기회를 거듭 제공합니다 — 풀숲 너머로 보이는 먼 광경이 아니라, 나무에서 내려오는 표범, 그늘에서 장난스레 싸우는 새끼들, 사냥에 나서기 전 지평선을 읽는 치타 같은 진짜 행동을 담을 수 있습니다."
        },
        {
          title: "북부 세렝게티 — 대이동 지역",
          text: "여정 중 가장 야성적인 구간입니다. 시기에 따라 강가에 모여드는 누 떼, 강 건너기 직전의 긴장감, 혹은 광활한 하늘 아래 탁 트인 초원을 가로질러 무리를 뒤쫓는 포식동물을 촬영하게 될 수도 있습니다. 강 건너기는 결코 확답드릴 수 없습니다 — 자연은 일정표대로 움직이지 않습니다 — 하지만 이곳의 빛과 풍경은 조용한 날에도 각별합니다."
        },
        {
          title: "준비물",
          text: "DSLR 또는 미러리스 카메라 본체, 풍경 및 환경 사진용 광각~표준 줌렌즈, 그리고 최소 400mm 이상의 망원렌즈를 권장합니다 — 500~600mm 렌즈는 먼 거리의 피사체와 압축 효과를 살린 야생동물 초상 사진에 특히 유용합니다. 70~200mm 렌즈는 가까운 거리의 장면과 차량 내에서의 스토리텔링 사진에 유용합니다. 야생동물 사진이 처음이신가요? 완벽한 전문가용 장비를 갖추고 오실 필요는 없습니다 — 예약이 확정된 분들께는 출발 전 각자의 장비 구성에 맞춘 상세한 짐 싸기 및 장비 가이드를 보내드립니다."
        }
      ]
    },
    highlights: [
      "그저 찍고 지나치는 것이 아니라, 구도를 잡을 수 있는 차량 공간과 시간을 갖고 각 장면을 제대로 촬영",
      "다양한 관심사가 섞인 일반 사파리가 아닌, 촬영에 특화된 소규모 그룹으로 여행",
      "코끼리와 바오바브나무, 크레이터의 밀도, 세렝게티의 포식동물, 대이동 지역까지 — 탄자니아 최고의 촬영 명소를 한 번의 여행으로 모두 경험",
      "동물의 위치만 아는 운전기사가 아니라, 위치 선정과 빛, 설정에 대한 실질적인 현장 조언을 제공"
    ],
    heroImage: "/images/gallery/elephants-grazing-tall-grass-savanna.jpg",
    heroImageAlt: "Elephant pair grazing among tall grass and wildflowers on the savanna",
    gallery: [],
    pricingTiersProvisional: true,
    pricingTiers: [
      {
        pax: 2,
        season: "low",
        reserve: 4597,
        sovereign: 5692
      },
      {
        pax: 2,
        season: "high",
        reserve: 6556,
        sovereign: 9668
      }
    ],
    included: [
      "모든 국립공원, 컨세션, 보전구역 입장료",
      "게임 드라이브가 있는 매일 제공되는 차량, 가이드, 연료",
      "공항 송영",
      "식수",
      "가이드 숙박비",
      "긴급 의료 후송 보험"
    ],
    excluded: [
      "국제선 항공권",
      "비자 발급 비용",
      "여행자 보험",
      "팁",
      "카메라·렌즈 대여"
    ],
    notes: [
      "표시된 요금은 2인 1실 기준 1인당 요금입니다.",
      "예약금 30%로 예약이 확정되며, 잔금은 출발 60일 전까지 지불하시면 됩니다.",
      "이 여정은 대략 6월부터 10월까지 이용 가능한 북부 세렝게티의 대이동 캠프를 중심으로 구성되어 있습니다. 비수기 출발의 경우 응두투를 거점으로 한 다른 경로를 이용하게 됩니다.",
      "숙박시설 및 요금은 예약 가능 여부에 따라 달라지며, 동일 시즌 내에서도 정확한 여행 날짜에 따라 변동될 수 있습니다.",
      "탄자니아 국립공원 및 보전구역 입장료는 정부에서 책정하며, 예고 없이 변경될 수 있습니다."
    ],
    faq: [
      {
        q: "참가하려면 사진 촬영 경험이 필요한가요?",
        a: "아니요 — 이 여정은 모든 실력 수준에 맞도록 구성되어 있습니다. 현장에서의 안내는 실용적이며, 처음으로 본격적인 야생동물 여행에 나서는 분이든 이미 장비를 속속들이 알고 있는 상급자든, 각자의 출발점에 맞춰 조정됩니다."
      },
      {
        q: "이 포토그래픽 사파리의 비용은 얼마인가요?",
        a: "Wilderness Reserve 등급은 비수기 1인당 $4,597부터 시작하며, 성수기에는 $6,556까지 오릅니다. 응고롱고로 롯지(Meliá Collection)와 시링깃의 럭셔리 텐티드 캠프를 포함해 전 일정 숙박이 업그레이드되는 Wilderness Sovereign 등급은 비수기 1인당 $5,692부터, 성수기 $9,668부터 시작합니다. 요금에는 모든 국립공원 및 보전구역 입장료, 게임 드라이브, 식사, 가이드, 공항 송영이 포함됩니다 — 정확한 여행 날짜에 대한 맞춤 견적을 요청해 주세요."
      },
      {
        q: "일반적인 탄자니아 사파리와 어떻게 다른가요?",
        a: "진행 속도, 차량 위치 선정, 각 장면에서 머무는 시간까지 모두 촬영을 최우선으로 설계되어 있습니다 — 더 긴 정차 시간, 더 많은 인내, 그리고 단순히 동물을 발견하는 것을 넘어 빛과 구도에 초점을 맞춘 안내가 특징입니다."
      },
      {
        q: "프라이빗 출발인가요, 그룹 출발인가요?",
        a: "원하시는 날짜에 맞춘 맞춤 여행이며, 모든 사진가가 충분한 작업 공간을 확보할 수 있도록 그룹 규모를 의도적으로 소규모로 유지합니다 — 정확한 인원 상한과 프라이빗 출발 옵션은 문의해 주세요."
      },
      {
        q: "이 여정에 가장 좋은 시기는 언제인가요?",
        a: "6월부터 10월까지는 가장 건조한 빛과 타랑기레의 코끼리 집결이 가장 활발한 시기이며, 6월 말부터 9월까지는 북부 세렝게티 대이동과 강 건너기 활동이 가장 활발한 시기입니다."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "아루샤 도착",
        location: "아루샤",
        description: "킬리만자로 국제공항에 도착해, 사파리가 본격적으로 시작되기 전 아루샤에서 편안하게 여독을 풀어보세요. 저녁에는 가이드와 함께 식사를 하며 상세한 브리핑을 진행합니다 — 앞으로의 경로뿐 아니라, 장비와 경험 수준, 그리고 어떤 사진을 안고 돌아가고 싶으신지에 대해 진솔한 대화를 나눕니다. 처음 오신 분이라면 그동안 궁금했던 모든 질문을 던질 좋은 기회이며, 경험 많은 사진가라면 가이드가 실제 촬영 방식에 맞춰 여행을 조율하기 시작하는 순간입니다.",
        accommodation: "Kahawa House, Arusha",
        meals: "석식",
        insiderFact: "특정 종, 행동, 구도 스타일 등 원하는 촬영 목록이 있다면 이 시점에 가이드에게 전달하는 것이 좋습니다 — 첫날부터 이를 중심으로 경로를 짤 수 있습니다.",
        accommodationByTier: {
          reserve: {
            name: "Kahawa House, Arusha",
            image: "/images/lodges/kahawa-house.webp",
            amenities: [
              "wifi",
              "restaurant",
              "garden"
            ]
          },
          sovereign: {
            name: "Gran Meliá Arusha",
            image: "/images/lodges/gran-melia-arusha.webp",
            amenities: [
              "wifi",
              "pool",
              "spa"
            ]
          }
        }
      },
      {
        day: 2,
        title: "타랑기레 국립공원",
        location: "타랑기레 국립공원",
        description: "타랑기레의 코끼리 무리와 바오바브나무가 점점이 서 있는 평원 속에서 카메라 감각을 익히는 온전한 이틀입니다. 늦은 오후의 빛 속에 황금빛으로 떠도는 먼지, 나무 사이를 여유롭게 이동하는 코끼리들, 그리고 사파리의 속도가 빨라지기 전 넓은 풍경 사진과 근거리 야생동물 초상 사진을 모두 시도해 볼 충분한 시간이 기다리고 있습니다.",
        accommodation: "Burunge Tented Lodge",
        meals: "전 일정 식사",
        insiderFact: "역광 속 먼지는 타랑기레를 상징하는 광경 중 하나입니다 — 늦은 오후에는 태양을 등지기보다 태양을 향해 촬영하는 것이 최고의 컷을 만들어내는 경우가 많습니다.",
        accommodationByTier: {
          reserve: {
            name: "Burunge Tented Lodge",
            image: "/images/lodges/burunge-tented-lodge-tent-bedroom.webp",
            amenities: [
              "restaurant",
              "wifi",
              "wildlife-view"
            ]
          },
          sovereign: {
            name: "Siringit Tarangire Camp",
            image: "/images/lodges/siringit-tarangire-camp-pool-aerial.webp",
            amenities: [
              "view",
              "wildlife-view",
              "luxury-tent"
            ]
          }
        }
      },
      {
        day: 3,
        title: "타랑기레 국립공원",
        location: "타랑기레 국립공원",
        description: "타랑기레의 코끼리 무리와 바오바브나무가 점점이 서 있는 평원 속에서 카메라 감각을 익히는 온전한 이틀입니다. 늦은 오후의 빛 속에 황금빛으로 떠도는 먼지, 나무 사이를 여유롭게 이동하는 코끼리들, 그리고 사파리의 속도가 빨라지기 전 넓은 풍경 사진과 근거리 야생동물 초상 사진을 모두 시도해 볼 충분한 시간이 기다리고 있습니다.",
        accommodation: "Burunge Tented Lodge",
        meals: "전 일정 식사",
        insiderFact: "타랑기레의 바오바브나무 중 일부는 수령이 1,000년을 훌쩍 넘습니다 — 탁 트인 하늘을 배경으로 나무 전체의 실루엣을 담는 광각 컷을 찍어볼 가치가 있습니다.",
        accommodationByTier: {
          reserve: {
            name: "Burunge Tented Lodge",
            image: "/images/lodges/burunge-tented-lodge-tent-bedroom.webp",
            amenities: [
              "restaurant",
              "wifi",
              "wildlife-view"
            ]
          },
          sovereign: {
            name: "Siringit Tarangire Camp",
            image: "/images/lodges/siringit-tarangire-camp-pool-aerial.webp",
            amenities: [
              "view",
              "wildlife-view",
              "luxury-tent"
            ]
          }
        }
      },
      {
        day: 4,
        title: "응고롱고로로 이동",
        location: "응고롱고로 크레이터",
        description: "타랑기레의 저지대를 뒤로하고 응고롱고로 고원으로 올라가는, 비교적 짧고 조용한 하루입니다. 저녁에는 내일의 크레이터 하강에 대한 상세한 브리핑 시간이 마련됩니다 — 빛이 어떻게 변할지, 하루의 진행 속도, 그리고 새벽에 게이트가 열리기 전에 무엇을 준비해야 하는지에 대해 안내해 드립니다.",
        accommodation: "Ngorongoro Serena Safari Lodge",
        meals: "전 일정 식사",
        insiderFact: "크레이터 바닥은 정오에도 가장자리보다 몇 도 더 서늘합니다 — 손이 차가우면 렌즈 교체가 느려지므로, 이른 아침 하강에 대비해 장갑을 손 닿는 곳에 두세요.",
        accommodationByTier: {
          reserve: {
            name: "Ngorongoro Serena Safari Lodge",
            image: "/images/lodges/ngorongoro-serena-safari-lodge.webp",
            amenities: [
              "view",
              "restaurant",
              "ensuite"
            ]
          },
          sovereign: {
            name: "Ngorongoro Lodge, The Rim Room (Meliá Collection)",
            image: "/images/lodges/ngorongoro-lodge-the-rim-room-melia-collection.webp",
            amenities: [
              "view",
              "restaurant",
              "ensuite"
            ]
          }
        }
      },
      {
        day: 5,
        title: "응고롱고로 크레이터 바닥에서 보내는 하루",
        location: "응고롱고로 크레이터",
        description: "이른 출발과 함께, 대륙에서 야생동물이 가장 밀집한 환경 중 하나에서 하루를 온전히 보냅니다. 이날은 '찾는' 날이라기보다 '선택하는' 날입니다 — 탁 트인 초원의 사자, 크레이터 벽을 배경으로 한 코끼리, 소다호 가장자리에 분홍빛으로 무리 지은 플라밍고까지. 가이드의 역할은 동물을 찾는 것보다, 다음에 렌즈를 어디로 향할지 선택하도록 돕는 데 더 가깝습니다.",
        accommodation: "Ngorongoro Serena Safari Lodge",
        meals: "전 일정 식사",
        insiderFact: "크레이터의 폐쇄된 벽 때문에 빛이 탁 트인 평원과는 다르게 작용합니다 — 그림자가 부드러워지는 시간이 다른 지역에서 예상하는 것보다 늦은 아침입니다.",
        accommodationByTier: {
          reserve: {
            name: "Ngorongoro Serena Safari Lodge",
            image: "/images/lodges/ngorongoro-serena-safari-lodge.webp",
            amenities: [
              "view",
              "restaurant",
              "ensuite"
            ]
          },
          sovereign: {
            name: "Ngorongoro Lodge, The Rim Room (Meliá Collection)",
            image: "/images/lodges/ngorongoro-lodge-the-rim-room-melia-collection.webp",
            amenities: [
              "view",
              "restaurant",
              "ensuite"
            ]
          }
        }
      },
      {
        day: 6,
        title: "중앙 세렝게티",
        location: "중앙 세렝게티",
        description: "일 년 내내 포식동물이 가장 풍부한 탄자니아 지역에서 여유롭게 보내는 이틀입니다. 이곳에서 인내는 진정한 결실을 맺기 시작합니다 — 무언가 일어날 때까지 프라이드 곁에 머물고, 표범이 사냥감으로 돌아갈 만한 경로를 따라가고, 치타가 질주에 나서기 전 평원을 천천히 읽어내는 모습을 지켜봅니다. 코피에(바위 언덕), 탁 트인 초원, 점점이 흩어진 삼림지대가 실로 다채로운 배경을 제공합니다.",
        accommodation: "Kubu Kubu Tented Lodge",
        meals: "전 일정 식사",
        insiderFact: "코피에는 특히 일출 직후에 확인할 가치가 있습니다 — 사자와 표범은 낮의 더위가 본격화되기 전 따뜻한 바위 표면을 전망대처럼 이용하는 경우가 많습니다.",
        accommodationByTier: {
          reserve: {
            name: "Kubu Kubu Tented Lodge",
            image: "/images/lodges/kubukubu-tented-lodge.webp",
            amenities: [
              "pool",
              "view",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Siringit Serengeti Camp",
            image: "/images/lodges/siringiti-serengeti-camp.webp",
            amenities: [
              "wifi",
              "view",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 7,
        title: "중앙 세렝게티",
        location: "중앙 세렝게티",
        description: "일 년 내내 포식동물이 가장 풍부한 탄자니아 지역에서 여유롭게 보내는 이틀입니다. 이곳에서 인내는 진정한 결실을 맺기 시작합니다 — 무언가 일어날 때까지 프라이드 곁에 머물고, 표범이 사냥감으로 돌아갈 만한 경로를 따라가고, 치타가 질주에 나서기 전 평원을 천천히 읽어내는 모습을 지켜봅니다. 코피에(바위 언덕), 탁 트인 초원, 점점이 흩어진 삼림지대가 실로 다채로운 배경을 제공합니다.",
        accommodation: "Kubu Kubu Tented Lodge",
        meals: "전 일정 식사",
        insiderFact: "엔진을 끄고 정차한 차량은 계속 위치를 바꾸는 차량보다 사냥 중인 치타를 놀라게 할 가능성이 훨씬 낮습니다 — 이곳에서는 인내가 사진의 질에 실질적으로 반영됩니다.",
        accommodationByTier: {
          reserve: {
            name: "Kubu Kubu Tented Lodge",
            image: "/images/lodges/kubukubu-tented-lodge.webp",
            amenities: [
              "pool",
              "view",
              "restaurant"
            ]
          },
          sovereign: {
            name: "Siringit Serengeti Camp",
            image: "/images/lodges/siringiti-serengeti-camp.webp",
            amenities: [
              "wifi",
              "view",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 8,
        title: "북부 세렝게티",
        location: "북부 세렝게티",
        description: "이 여정에서 가장 야성적이고 광활한 지역에서 보내는 온전한 이틀입니다. 무리의 이동 상황에 따라, 강 건너기 지점에 초조하게 모여드는 누 떼를 오후 내내 지켜보게 될 수도 있고, 혹은 끝없이 이어질 것만 같은 하늘 아래 탁 트인 평원의 규모를 그저 만끽하게 될 수도 있습니다. 이곳에서는 그 무엇도 보장되지 않지만, 모든 것이 드라마틱합니다 — 고요한 순간조차 묵직한 무게를 지닙니다.",
        accommodation: "Mara Under Canvas",
        meals: "전 일정 식사",
        insiderFact: "강둑에서 긴장한 채 밀집한 무리는 대개 강 건너기가 임박했다는 가장 좋은 신호입니다 — 가이드는 무리의 몸짓 언어를 읽은 뒤 차량의 위치를 정합니다.",
        accommodationByTier: {
          reserve: {
            name: "Mara Under Canvas",
            image: "/images/lodges/mara-under-canvas.webp",
            amenities: [
              "wildlife-view",
              "view"
            ]
          },
          sovereign: {
            name: "Siringit Migration Camp, Kogatende",
            image: "/images/lodges/siringit-migration-camp-ndutu-site.webp",
            amenities: [
              "ensuite",
              "view",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 9,
        title: "북부 세렝게티",
        location: "북부 세렝게티",
        description: "이 여정에서 가장 야성적이고 광활한 지역에서 보내는 온전한 이틀입니다. 무리의 이동 상황에 따라, 강 건너기 지점에 초조하게 모여드는 누 떼를 오후 내내 지켜보게 될 수도 있고, 혹은 끝없이 이어질 것만 같은 하늘 아래 탁 트인 평원의 규모를 그저 만끽하게 될 수도 있습니다. 이곳에서는 그 무엇도 보장되지 않지만, 모든 것이 드라마틱합니다 — 고요한 순간조차 묵직한 무게를 지닙니다.",
        accommodation: "Mara Under Canvas",
        meals: "전 일정 식사",
        insiderFact: "역동적인 장면을 쫓다 보면 탁 트인 평원의 넓은 환경 사진을 놓치기 쉽습니다 — 풍경 자체의 규모를 담기 위해 의도적으로 몇 컷을 따로 남겨두는 것이 좋습니다.",
        accommodationByTier: {
          reserve: {
            name: "Mara Under Canvas",
            image: "/images/lodges/mara-under-canvas.webp",
            amenities: [
              "wildlife-view",
              "view"
            ]
          },
          sovereign: {
            name: "Siringit Migration Camp, Kogatende",
            image: "/images/lodges/siringit-migration-camp-ndutu-site.webp",
            amenities: [
              "ensuite",
              "view",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 10,
        title: "출발",
        location: "아루샤",
        description: "필드에서 보내는 마지막 아침, 마지막 순간까지 카메라를 손에서 놓지 않은 뒤 아루샤로 돌아가 킬리만자로 국제공항에서 귀국 항공편에 오릅니다 — 10일간의 여정, 4곳의 풍경, 그리고 몇 주에 걸쳐 정리하게 될 메모리카드와 함께요.",
        accommodation: "N/A",
        meals: "조식"
      }
    ]
  },
  {
    slug: "authentic-exclusive-kenya",
    name: "진정한, 독점적인 케냐 — 암보셀리, 삼부루 & 마사이마라",
    duration: 9,
    destinations: [
      "amboseli",
      "samburu",
      "masai-mara"
    ],
    type: "wildlife",
    priceFrom: 1926,
    groupSize: {
      min: 1,
      max: 6
    },
    badge: "new",
    bestFor: [
      "couples",
      "first-time",
      "wildlife-enthusiasts"
    ],
    metaTitle: "진정한, 독점적인 케냐 사파리 | 암보셀리, 삼부루 & 마사이마라 | EWA Safari Outfitters",
    metaDescription: "암보셀리, 삼부루, 그리고 마사이마라의 조용한 남서부를 순회하는 9일간의 프라이빗 케냐 사파리 — 전용 캠프, 전담 가이드, 그리고 진정한 문화 체험까지. 현지 자본의 동아프리카 사파리 운영사가 맞춤 제작합니다.",
    overview: [
      "케냐는 조용하고 프라이빗하게 여행하는 이들에게 보답하는 곳입니다 — 이 여정은 전적으로 그 발상을 중심으로 설계되었습니다. 9일간, 3곳의 풍경, 그리고 그룹 외 누구와도 공유하지 않는 시간 — 킬리만자로의 그림자가 드리운 암보셀리에 세워진 전용 캠프, 문화적으로 풍요로운 삼부루 북부 건조지대에서의 체류, 그리고 대부분의 방문객이 결코 닿지 못하는 마사이마라의 프라이빗한 한 구석까지.",
      "이것은 체크리스트를 소화하는 사파리가 아닙니다. 의도적으로 서로 다른 세 가지 케냐의 모습을, 각각 실제로 몸에 스며들 만큼 충분한 시간과 함께 경험하는 여정입니다 — 암보셀리의 큰 상아를 가진 코끼리들과 킬리만자로 배경, 북부 삼부루의 노래하는 우물과 살아 숨 쉬는 삼부루 문화, 그리고 방문객이 적은 마라 남서부 구석의 야생동물 밀도까지. 신뢰할 수 있는 동일한 가이드 팀이 여정 내내 동행하기에, 경험과 신뢰가 매 정거장마다 새로 시작되는 것이 아니라 여행 전체에 걸쳐 쌓여갑니다.",
      "탄자니아에서 출발해 아루샤를 거점으로 삼아 이제 케냐 서킷을 구축해 나가고 있는 저희는, 동아프리카의 모든 여정을 설계하는 방식과 동일하게 이 루트를 설계합니다 — 원하시는 날짜에 맞춘 맞춤 제작, 여정 내내 이어지는 프라이빗함, 그리고 현지를 잘 아는 전문 자격을 갖춘 가이드의 안내까지."
    ],
    tagline: "2022년 설립된 현지 기업 · 전문 자격을 갖춘 가이드 · 고정 그룹 일정이 아닌 맞춤 출발",
    bestTimeToTravel: "연중 가능하며, 마사이마라 보호구역 입장료는 7월 1일~12월 31일(누 대이동 성수기)에 인상됩니다",
    whyDifferent: {
      heading: "이 여정이 특별한 이유",
      paragraphs: [
        "대부분의 케냐 서킷은 주요 보호구역 안에 있는 붐비고 유명한 롯지들 사이를 오갑니다. 이 여정은 각 목적지의 더 조용한 가장자리로 향합니다 — 킬리만자로를 배경으로 한 암보셀리의 코끼리 무리, 연출된 방문이 아닌 진정한 문화 교류를 바탕으로 한 삼부루 체류, 그리고 대이동 성수기에 차량이 밀집하는 메인 보호구역 대신 마라의 남서부 컨서번시까지.",
        "동일한 가이드 팀이 9일 내내 함께합니다. 이 연속성은 말로 듣는 것보다 훨씬 큰 의미를 지닙니다 — 4일째가 되면 가이드는 이미 당신이 어떻게 여행하기를 좋아하는지, 어떤 속도를 선호하는지, 다음에 무엇을 보고 싶어 하는지를 파악하고 있어, 새로운 정거장마다 처음부터 다시 시작할 필요가 없습니다."
      ]
    },
    destinationHighlights: {
      heading: "목적지 하이라이트",
      items: [
        {
          title: "암보셀리",
          text: "동아프리카 최고의 킬리만자로 전망 중 일부와, 대륙 어디에서도 보기 드문 유난히 큰 상아를 가진 '빅 터스커' 정주 개체군을 만날 수 있습니다. 암보셀리의 습지와 탁 트인 평원은 사자, 치타, 기린과 더불어 아프리카에서 가장 확실하게 관찰할 수 있는 코끼리 무리의 서식지입니다."
        },
        {
          title: "삼부루",
          text: "연출된 공연이 아닌 진정한 문화 교류를 중심으로 짜인 체류입니다. 전통적인 삼부루 전사 '모란'들이 문화 탐방부터 삼부루의 건조지대 생태계를 아우르는 야생동물 관찰까지 다양한 활동을 안내합니다 — 이곳은 그레비얼룩말, 그물무늬기린, 제레눅 등 케냐의 다른 곳에서는 거의 볼 수 없는 종들의 서식지입니다."
        },
        {
          title: "마사이마라 — 남서부 컨서번시",
          text: "아프리카 최고의 보호구역으로 널리 알려진 이곳을, 붐비는 중앙 마라가 아니라 더 조용한 남서부 가장자리에서 경험합니다. 일 년 내내 서식하는 야생동물, 시즌에 따른 이동 무리, 그리고 모든 관찰 장면에서 눈에 띄게 적은 차량 대수가 특징입니다."
        }
      ]
    },
    highlights: [
      "프라이빗하고 독점적인 여행 — 공유 롯지 서킷이 아닌 전용 캠프와 차량으로",
      "형식적인 마을 방문이 아닌, 대형 야생동물 사파리와 진정한 문화 체험의 결합",
      "킬리만자로를 배경으로 한 암보셀리의 터스커와, 메인 보호구역의 인파 없이 마라의 풍부한 야생동물을 관찰",
      "정거장마다 새로운 운전기사가 아닌, 9일 내내 신뢰할 수 있는 동일한 가이드 팀과 함께 여행"
    ],
    heroImage: "/images/gallery/lion-mane-closeup.webp",
    heroImageAlt: "Close-up profile of a lion's thick golden mane in warm evening light",
    gallery: [],
    pricingTiersProvisional: true,
    pricingTiers: [
      {
        pax: 2,
        season: "low",
        trail: 3921
      },
      {
        pax: 4,
        season: "low",
        trail: 3229
      },
      {
        pax: 6,
        season: "low",
        trail: 2853
      },
      {
        pax: 2,
        season: "high",
        trail: 5630
      }
    ],
    included: [
      "전 일정 삼시세끼 포함 숙박",
      "전 일정 전담 전문 사파리 가이드",
      "모든 국립공원 및 보호구역 입장료",
      "주간 및 야간 게임 드라이브",
      "가이드 동행 부시 워크",
      "삼부루에서의 문화 활동",
      "조모 케냐타 국제공항 마중 및 서포트",
      "모든 공항 및 활주로 송영",
      "긴급 의료 후송 보험"
    ],
    excluded: [
      "프리미엄 음료",
      "위에 명시된 것 외의 활동",
      "국제선 항공권 및 비자 발급 비용",
      "팁"
    ],
    notes: [
      "표시된 요금은 더블 또는 트윈룸을 2인이 함께 이용할 경우의 1인당 요금입니다. 싱글룸을 원하실 경우 추가 요금이 적용됩니다.",
      "마사이마라와 암보셀리 국립공원 입장료는 성수기(7월~12월)에 인상되며, 이는 성수기 요금에 반영되어 있습니다.",
      "숙박시설 및 요금은 예약 가능 여부에 따라 달라지며, 동일 시즌 내에서도 정확한 여행 날짜에 따라 변동될 수 있습니다.",
      "케냐 국립공원 및 컨서번시 입장료는 정부에서 책정하며, 예고 없이 변경될 수 있습니다."
    ],
    faq: [
      {
        q: "이것은 프라이빗 사파리인가요, 그룹 사파리인가요?",
        a: "전 일정 완전히 프라이빗합니다. 차량과 가이드는 9일 내내 오직 당신의 그룹만을 위해 전담되며, 다른 그룹과 공유되는 일은 없습니다. 정해진 그룹 출발일이 아닌, 원하시는 여행 날짜에 맞춰 맞춤 제작됩니다."
      },
      {
        q: "이 사파리는 케냐를 처음 방문하는 분에게도 적합한가요?",
        a: "네, 적합합니다. 세 목적지 모두에서 동일한 가이드 팀이 이어지는 연속성 덕분에 처음 여행하는 분들도 편안하게 느낄 수 있는 구성이며, 각 체류지의 깊이와 프라이버시는 경험 많은 사파리 애호가에게도 만족을 드립니다."
      },
      {
        q: "이 케냐 사파리의 비용은 얼마인가요?",
        a: "요금은 그린(비수기) 시즌에 6명 그룹으로 여행할 경우 1인당 $1,926부터 시작하며, 그룹 인원이 적어질수록, 그리고 성수기(7월 1일~12월 31일, 마사이마라 보호구역 입장료도 인상되는 시기)에는 요금이 더 올라갑니다. 정확한 여행 날짜와 그룹 인원에 대한 맞춤 견적을 요청해 주세요."
      },
      {
        q: "이 여정에 가장 좋은 시기는 언제인가요?",
        a: "이 루트는 연중 언제나 좋습니다. 성수기(7월~12월)에는 마사이마라의 누 대이동이 절정에 이르지만 보호구역 입장료도 높아집니다. 나머지 시기에는 세 목적지 모두에서 더 낮은 비용으로 정주 야생동물을 훌륭하게 관찰할 수 있습니다."
      },
      {
        q: "이 여정을 탄자니아 사파리와 결합할 수 있나요?",
        a: "네, 가능합니다 — 탄자니아와 케냐 양쪽에서 사업을 운영하는 저희는 동아프리카를 아우르는 결합 여정을 정기적으로 구성하고 있습니다. 이 루트를 탄자니아 사파리나 잔지바르 해변 연장 일정과 결합하는 방법에 대해 문의해 주세요."
      },
      {
        q: "암보셀리, 삼부루, 마사이마라 사이는 어떻게 이동하나요?",
        a: "국내선 항공편으로 이동합니다 — 목적지 간 긴 육로 이동으로 시간을 허비하지 않고 이 루트를 가장 효율적으로 소화하는 방법입니다."
      },
      {
        q: "이것은 프라이빗 사파리인가요, 그룹 투어인가요?",
        a: "전 일정 프라이빗합니다 — 9일 내내 전용 차량과 가이드가 함께하며, 정해진 그룹 출발일이 아닌 원하시는 날짜에 맞춰 제작됩니다."
      },
      {
        q: "이 여정은 조정이 가능한가요?",
        a: "네, 가능합니다. 이것은 고정된 패키지가 아니라 하나의 출발점입니다. 목적지, 진행 속도, 숙박 스타일까지 실제로 원하시는 여행 방식에 맞춰 모두 조정할 수 있습니다."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "나이로비 도착",
        location: "나이로비",
        description: "조모 케냐타 국제공항에 도착하면 사파리 팀이 마중 나와 입국 수속을 도와드린 뒤, 나이로비 시내로 이동해 하룻밤을 보냅니다. 여유로운 첫날 저녁입니다 — 사파리는 내일 암보셀리로 향하는 비행기에 오르면서 본격적으로 시작됩니다.",
        accommodation: "Nairobi Hotel",
        meals: "석식",
        insiderFact: "나이로비는 해발 약 1,700m에 위치해 있어, 적도 근처라는 것이 믿기지 않을 만큼 저녁이 서늘합니다 — 도착 첫날 밤을 위해 가벼운 재킷을 챙기시는 것이 좋습니다.",
        accommodationByTier: {
          trail: {
            name: "Hemingways Nairobi",
            image: "/images/lodges/hemingways-nairobi.webp",
            amenities: [
              "pool",
              "spa",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 2,
        title: "암보셀리",
        location: "암보셀리",
        description: "짧은 비행 끝에 암보셀리에 도착하면, 맑은 날 배경으로 솟은 킬리만자로 아래 탁 트인 평원을 가로지르는 코끼리 무리를 만나게 됩니다. 온전한 이틀 동안 주간 및 야간 게임 드라이브와 가이드 동행 부시 워크가 이어지며, 이 생태계로 유명한 '빅 터스커'를 만날 실질적인 기회도 있습니다.",
        accommodation: "Amboseli Camp",
        meals: "전 일정 식사",
        insiderFact: "암보셀리의 마른 호수 바닥은 낮 동안 고운 먼지를 일으킵니다 — 코와 입을 버프나 가벼운 스카프로 가리면 게임 드라이브가 한결 쾌적해집니다.",
        accommodationByTier: {
          trail: {
            name: "Ol Tukai Lodge",
            image: "/images/lodges/ol-tukai-lodge.webp",
            amenities: [
              "view",
              "wildlife-view",
              "pool"
            ]
          }
        }
      },
      {
        day: 3,
        title: "암보셀리",
        location: "암보셀리",
        description: "짧은 비행 끝에 암보셀리에 도착하면, 맑은 날 배경으로 솟은 킬리만자로 아래 탁 트인 평원을 가로지르는 코끼리 무리를 만나게 됩니다. 온전한 이틀 동안 주간 및 야간 게임 드라이브와 가이드 동행 부시 워크가 이어지며, 이 생태계로 유명한 '빅 터스커'를 만날 실질적인 기회도 있습니다.",
        accommodation: "Amboseli Camp",
        meals: "전 일정 식사",
        insiderFact: "킬리만자로는 대개 일출 후 첫 한 시간 동안 가장 선명하게 보입니다 — 낮의 열기가 정상 주변에 구름을 만들어내기 전입니다.",
        accommodationByTier: {
          trail: {
            name: "Ol Tukai Lodge",
            image: "/images/lodges/ol-tukai-lodge.webp",
            amenities: [
              "view",
              "wildlife-view",
              "pool"
            ]
          }
        }
      },
      {
        day: 4,
        title: "삼부루",
        location: "삼부루",
        description: "북쪽으로 삼부루를 향하면, 완전히 다른 리듬이 기다리고 있습니다. 이곳에서의 이틀은 야생동물 관찰과 더불어 진정한 문화 교류에 무게를 둡니다 — 이 땅을 대대로 고향으로 삼아온 삼부루 공동체와 함께하는 가이드 동행 워크와 시간을, 케냐 어디에서도 볼 수 없는 건조지대 생태계를 배경으로 보내게 됩니다.",
        accommodation: "Samburu Camp",
        meals: "전 일정 식사",
        insiderFact: "삼부루는 암보셀리보다 눈에 띄게 저지대이고 더 덥습니다 — 에와소 응이로 강의 마른 강바닥이 물 자체보다 더 많은 야생동물 활동을 드러내는 경우가 많습니다.",
        accommodationByTier: {
          trail: {
            name: "Samburu Intrepids",
            image: "/images/lodges/samburu-intrepids.webp",
            amenities: [
              "view",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 5,
        title: "삼부루",
        location: "삼부루",
        description: "북쪽으로 삼부루를 향하면, 완전히 다른 리듬이 기다리고 있습니다. 이곳에서의 이틀은 야생동물 관찰과 더불어 진정한 문화 교류에 무게를 둡니다 — 이 땅을 대대로 고향으로 삼아온 삼부루 공동체와 함께하는 가이드 동행 워크와 시간을, 케냐 어디에서도 볼 수 없는 건조지대 생태계를 배경으로 보내게 됩니다.",
        accommodation: "Samburu Camp",
        meals: "전 일정 식사",
        insiderFact: "삼부루 스페셜 파이브 — 그레비얼룩말, 그물무늬기린, 제레눅, 베이사오릭스, 소말리아타조 — 는 케냐의 다른 곳에서는 거의 볼 수 없으므로, 종 체크리스트를 손 닿는 곳에 두세요.",
        accommodationByTier: {
          trail: {
            name: "Samburu Intrepids",
            image: "/images/lodges/samburu-intrepids.webp",
            amenities: [
              "view",
              "wildlife-view"
            ]
          }
        }
      },
      {
        day: 6,
        title: "마사이마라(남서부)",
        location: "마사이마라(남서부)",
        description: "대부분의 방문객이 결코 보지 못하는 마라의 지역에서 보내는 온전한 3일입니다. 붐비는 중앙 보호구역이 아니라 남서부 컨서번시에 머물게 되며, 일 년 내내 서식하는 야생동물, 시즌에 따른 이동 무리, 그리고 눈에 띄게 조용하고 개인적인 속도로 진행되는 게임 드라이브를 경험합니다.",
        accommodation: "Masai Mara Conservancy Camp",
        meals: "전 일정 식사",
        insiderFact: "남서부 컨서번시는 자체적인 차량 밀도 제한 하에 운영되며, 이것이 이곳의 관찰이 메인 보호구역보다 훨씬 프라이빗하게 느껴지는 주된 이유입니다.",
        accommodationByTier: {
          trail: {
            name: "Kichwa Tembo Camp",
            image: "/images/lodges/kichwa-tembo-camp.webp",
            amenities: [
              "wildlife-view",
              "view"
            ]
          }
        }
      },
      {
        day: 7,
        title: "마사이마라(남서부)",
        location: "마사이마라(남서부)",
        description: "대부분의 방문객이 결코 보지 못하는 마라의 지역에서 보내는 온전한 3일입니다. 붐비는 중앙 보호구역이 아니라 남서부 컨서번시에 머물게 되며, 일 년 내내 서식하는 야생동물, 시즌에 따른 이동 무리, 그리고 눈에 띄게 조용하고 개인적인 속도로 진행되는 게임 드라이브를 경험합니다.",
        accommodation: "Masai Mara Conservancy Camp",
        meals: "전 일정 식사",
        insiderFact: "컨서번시에서의 이른 아침 드라이브는 더위가 시작되기 전, 밤의 서늘함 속에서 아직 활동 중인 포식동물을 마주치는 경우가 많습니다.",
        accommodationByTier: {
          trail: {
            name: "Kichwa Tembo Camp",
            image: "/images/lodges/kichwa-tembo-camp.webp",
            amenities: [
              "wildlife-view",
              "view"
            ]
          }
        }
      },
      {
        day: 8,
        title: "마사이마라(남서부)",
        location: "마사이마라(남서부)",
        description: "대부분의 방문객이 결코 보지 못하는 마라의 지역에서 보내는 온전한 3일입니다. 붐비는 중앙 보호구역이 아니라 남서부 컨서번시에 머물게 되며, 일 년 내내 서식하는 야생동물, 시즌에 따른 이동 무리, 그리고 눈에 띄게 조용하고 개인적인 속도로 진행되는 게임 드라이브를 경험합니다.",
        accommodation: "Masai Mara Conservancy Camp",
        meals: "전 일정 식사",
        insiderFact: "마지막 온전한 하루에는 가이드에게 부시 브렉퍼스트나 선다우너 정차에 대해 문의해 보세요 — 컨서번시에서는 메인 보호구역에서는 일반적으로 불가능한 차량 밖 체험이 가능합니다.",
        accommodationByTier: {
          trail: {
            name: "Kichwa Tembo Camp",
            image: "/images/lodges/kichwa-tembo-camp.webp",
            amenities: [
              "wildlife-view",
              "view"
            ]
          }
        }
      },
      {
        day: 9,
        title: "나이로비 / 출발",
        location: "나이로비 / 출발",
        description: "마라에서 보내는 마지막 아침을 뒤로하고 나이로비로 돌아가는 항공편에 올라, 조모 케냐타 국제공항에서 국제선 연결편에 탑승합니다 — 서로 완전히 다른 세 가지 케냐의 모습이, 하나의 이어진 이야기가 됩니다.",
        accommodation: "N/A",
        meals: "조식"
      }
    ]
  },
  {
    slug: "classic-kenya-safari",
    name: "클래식 케냐 사파리 — 마사이마라, 리프트밸리 & 암보셀리",
    duration: 7,
    destinations: [
      "masai-mara",
      "lake-nakuru",
      "amboseli"
    ],
    type: "wildlife",
    priceFrom: 1295,
    groupSize: {
      min: 1,
      max: 6
    },
    badge: "new",
    bestFor: [
      "couples",
      "first-time",
      "wildlife-enthusiasts"
    ],
    metaTitle: "클래식 케냐 사파리 | 마사이마라, 리프트밸리 & 암보셀리 | EWA Safari Outfitters",
    metaDescription: "마사이마라, 리프트밸리의 소다호, 그리고 킬리만자로를 배경으로 한 암보셀리를 순회하는 7일간의 클래식 케냐 사파리 — 프라이빗하고 여유로운 속도로, 현지 자본의 동아프리카 사파리 운영사가 맞춤 제작합니다.",
    overview: [
      "이 루트가 계속해서 '클래식'이라 불리는 데는 이유가 있습니다 — 실제로 그 이름값을 하는 여정이기 때문입니다. 7일간, 3곳의 풍경, 그리고 그 하나하나가 케냐의 진정으로 다른 얼굴입니다 — 마사이마라의 드라마틱한 평원, 리프트밸리 소다호의 고요하고 조류가 풍부한 호숫가, 그리고 여정의 마무리를 장식하는 코끼리와 킬리만자로가 어우러진 암보셀리의 엽서 같은 풍경까지.",
      "이것은 서둘러 항목을 소화하는 서킷이 아닙니다. 각 장소에서 실질적인 시간을 보낼 수 있도록 짜여 있습니다 — 이 보호구역이 유명한 야생동물 밀도를 만끽할 마라에서의 온전한 이틀, 속도를 늦추고 호숫가를 누비는 플라밍고를 지켜보는 리프트밸리 호수에서의 조용한 휴식, 그리고 코끼리들이 아프리카 최고봉 앞에서 일부러 포즈를 취하는 듯한 암보셀리에서의 또 다른 이틀까지. 케냐 사파리가 처음이든 다섯 번째든, 사람들이 애초에 이 나라에 반하는 이유를 다시금 일깨워주는 여정입니다.",
      "탄자니아에서 출발해 아루샤를 거점으로 삼아 이제 케냐 서킷을 구축해 나가고 있는 저희는, 동아프리카의 모든 여정을 설계하는 방식과 동일하게 이 루트를 설계합니다 — 원하시는 날짜에 맞춘 맞춤 제작, 여정 내내 이어지는 프라이빗함, 그리고 전문 자격을 갖춘 가이드의 안내까지."
    ],
    tagline: "2022년 설립된 현지 기업 · 전문 자격을 갖춘 가이드 · 고정 그룹 일정이 아닌 맞춤 출발",
    bestTimeToTravel: "연중 가능하며, 7월~12월에는 마라에서 대이동이 절정의 드라마를 펼칩니다(이에 따라 보호구역 입장료도 높아집니다)",
    destinationHighlights: {
      heading: "목적지 하이라이트",
      items: [
        {
          title: "마사이마라 국립보호구",
          text: "아프리카에서 가장 이야깃거리가 풍부한 사파리 풍경 중 한 곳에서 보내는 온전한 이틀 — 완만하게 굽이치는 사바나, 건강한 정주 개체군의 사자와 코끼리, 그리고 날짜가 무리의 이동 시기와 맞아떨어진다면 대이동의 드라마를 만날 기회까지. 이곳은 대부분의 사람들이 케냐 땅을 밟기도 전에 머릿속으로 그리는 바로 그 모습이며, 실제로도 그 기대에 그대로 부응합니다."
        },
        {
          title: "리프트밸리의 호수",
          text: "의도적인 전환입니다. 화산 크레이터와 오래된 용암류 사이에 자리한 이곳 리프트밸리는 알칼리성 호숫가로 플라밍고와 펠리컨을 비롯한 수많은 조류를 불러 모읍니다. 마라의 탁 트인 평원과는 전혀 다른, 더 조용하고 느리며 진정으로 다른 종류의 아름다움을 지녔습니다 — 암보셀리의 피날레를 앞두고 잠시 숨을 고르는, 사파리 버전의 정적인 순간입니다."
        },
        {
          title: "암보셀리 국립공원",
          text: "구름이 협조해 준다면, 킬리만자로는 그 어떤 사진으로도 미리 대비할 수 없을 만큼 압도적으로 이곳의 지평선을 지배합니다. 암보셀리의 습지와 탁 트인 평원은 사자, 치타, 기린과 더불어 동아프리카에서 가장 확실하게 관찰할 수 있는 코끼리 무리의 서식지입니다 — 여행을 마무리하기에 더없이 인상적이고 아름다운 방법입니다."
        }
      ]
    },
    highlights: [
      "서둘러 하룻밤만 머무는 것이 아니라, 온전한 이틀 동안 마사이마라를 제대로 경험",
      "대표적인 국립공원을 넘어선 케냐의 또 다른 면모를 경험 — 리프트밸리 호수의 조류는 진정한 분위기의 전환을 선사",
      "동아프리카에서 가장 상징적인 사파리 장면 중 하나인, 암보셀리에서 킬리만자로를 배경으로 한 코끼리 촬영",
      "매일 새로운 장소로 이동하는 대신, 편안하고 여유로운 리듬으로 여행"
    ],
    heroImage: "/images/gallery/grey-crowned-crane.webp",
    heroImageAlt: "Grey crowned crane standing in golden grassland, displaying its distinctive golden crest",
    gallery: [],
    pricingTiersProvisional: true,
    pricingTiers: [
      {
        pax: 2,
        season: "low",
        trail: 2820
      },
      {
        pax: 4,
        season: "low",
        trail: 2297
      },
      {
        pax: 6,
        season: "low",
        trail: 1295
      },
      {
        pax: 2,
        season: "high",
        trail: 4119
      }
    ],
    included: [
      "전 일정 삼시세끼 포함 숙박",
      "전 일정 전담 전문 사파리 가이드",
      "모든 국립공원 및 보호구역 입장료",
      "주간 게임 드라이브",
      "공항 및 이동 수단 지원",
      "긴급 의료 후송 보험"
    ],
    excluded: [
      "프리미엄 음료",
      "명시된 것 외의 활동",
      "국제선 항공권 및 비자 발급 비용",
      "팁"
    ],
    notes: [
      "표시된 요금은 더블 또는 트윈룸을 2인이 함께 이용할 경우의 1인당 요금입니다. 싱글룸을 원하실 경우 추가 요금이 적용됩니다.",
      "리프트밸리 호수 방문지는 이용 가능한 동급 제휴 롯지 중에서 선정되며, 날짜에 따라 달라질 수 있습니다.",
      "숙박시설 및 요금은 예약 가능 여부에 따라 달라지며, 동일 시즌 내에서도 정확한 여행 날짜에 따라 변동될 수 있습니다.",
      "케냐 국립공원 및 컨서번시 입장료는 정부에서 책정하며, 예고 없이 변경될 수 있습니다."
    ],
    faq: [
      {
        q: "7일이면 마사이마라와 암보셀리를 제대로 둘러보기에 충분한가요?",
        a: "네, 충분합니다 — 이 여정은 각 공원에서 하룻밤만 머무는 함정을 피하도록 특별히 설계되었습니다. 마라에서의 온전한 이틀과 암보셀리에서의 또 다른 이틀이 양쪽 모두에서 실질적인 시간을 보장하며, 그 사이에는 서둘러 지나치는 것이 아니라 의도적인 분위기 전환으로서 리프트밸리 호수를 배치했습니다."
      },
      {
        q: "마사이마라에서 대이동을 보기에 가장 좋은 시기는 언제인가요?",
        a: "대이동은 일반적으로 7월경부터 12월까지 마라로 이동해 오지만, 정확한 시기는 강우량에 따라 매년 달라집니다 — 이 시기는 마사이마라 국립보호구 입장료도 인상되는 때입니다. 마라는 대이동 시즌이 아니더라도 더 낮은 비용으로 훌륭한 빅파이브 관찰을 제공하므로, 이 여정은 일 년의 대부분 시기에 잘 어울립니다."
      },
      {
        q: "암보셀리에서 킬리만자로산을 반드시 볼 수 있나요?",
        a: "킬리만자로는 특히 이른 아침과 건기에 자주 보이지만, 모든 산 조망이 그렇듯 구름은 날씨에 따라 달라지므로 특정한 날에 반드시 보인다고 장담할 수는 없습니다."
      },
      {
        q: "이 클래식 케냐 사파리의 비용은 얼마인가요?",
        a: "요금은 그린(비수기) 시즌에 6명 그룹으로 여행할 경우 1인당 $1,295부터 시작하며, 그룹 인원이 적어질수록, 그리고 성수기(7월~12월)에는 요금이 더 올라갑니다. 정확한 여행 날짜와 그룹 인원에 대한 맞춤 견적을 요청해 주세요."
      },
      {
        q: "이것은 프라이빗 사파리인가요, 그룹 투어인가요?",
        a: "전 일정 프라이빗합니다 — 7일 내내 전용 차량과 가이드가 함께하며, 정해진 그룹 출발일이 아닌 원하시는 날짜에 맞춰 제작됩니다."
      },
      {
        q: "이 여정을 탄자니아 사파리와 결합할 수 있나요?",
        a: "네, 가능합니다 — 탄자니아와 케냐 양쪽에서 사업을 운영하는 저희는 동아프리카를 아우르는 결합 여정을 정기적으로 구성하며, 이 루트를 탄자니아 사파리나 잔지바르 해변 연장 일정과 결합하는 것도 포함됩니다."
      },
      {
        q: "이 여정은 조정이 가능한가요?",
        a: "네, 가능합니다. 이것은 고정된 패키지가 아니라 하나의 출발점입니다. 목적지, 진행 속도, 숙박 스타일은 물론 리프트밸리 호수 방문지까지, 실제로 원하시는 여행 방식에 맞춰 모두 조정할 수 있습니다."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "나이로비 도착",
        location: "나이로비",
        description: "조모 케냐타 국제공항에 도착하면 가이드가 마중 나와 시내까지 짧은 이동을 함께합니다. 나이로비는 대부분의 첫날 밤 경유지가 받는 저평가보다 훨씬 볼거리가 많은 곳입니다 — 활기찬 공예품 시장, 정말로 훌륭한 레스토랑들, 그리고 사파리가 본격적으로 시작되기 전 이른 야생의 맛을 보고 싶다면 수도 바로 곁에 자리한 나이로비 국립공원까지. 다만 오늘 밤은 여독을 풀고 방향을 잡는 시간입니다.",
        accommodation: "Nairobi Hotel",
        meals: "석식",
        insiderFact: "나이로비 국립공원은 수도 안에 완전한 규모의 야생동물 공원이 있다는 점에서 독특합니다 — 도착 시간이 맞는다면 2시간 정도의 추가 방문을 쉽게 계획할 수 있습니다.",
        accommodationByTier: {
          trail: {
            name: "Hemingways Nairobi",
            image: "/images/lodges/hemingways-nairobi.webp",
            amenities: [
              "pool",
              "spa",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 2,
        title: "마사이마라에서 보내는 온전한 이틀",
        location: "마사이마라 국립보호구",
        description: "이동을 마치고 마사이마라에 도착하면, 왜 이토록 화제가 되는지 금세 이해하게 됩니다. 이곳에서의 온전한 이틀은 보호구역을 제대로 탐험할 실질적인 시간을 의미합니다 — 아침과 오후의 게임 드라이브, 어제 어디서 목격되었는지가 아니라 오늘 고양잇과 동물이 있을 법한 곳을 읽어내는 가이드, 그리고 날짜가 대이동과 맞아떨어진다면 실로 놀라운 수의 누와 얼룩말 무리가 초원을 가로지르는 광경까지. 빅파이브와의 제대로 된 만남, 촬영에 좋은 고요한 골든아워의 빛, 그리고 평원이 주황빛으로 물드는 모습을 지켜보는 선다우너 시간도 최소 한 번은 경험하게 됩니다.",
        accommodation: "Masai Mara Camp",
        meals: "전 일정 식사",
        insiderFact: "보호구역 입장료는 7월 1일에 인상되므로, 시즌 초반이나 후반에 마라를 방문하면 같은 장면에서도 눈에 띄게 적은 차량과 더 낮은 숙박 비용을 기대할 수 있습니다.",
        accommodationByTier: {
          trail: {
            name: "Kichwa Tembo Camp",
            image: "/images/lodges/kichwa-tembo-camp.webp",
            amenities: [
              "wildlife-view",
              "view"
            ]
          }
        }
      },
      {
        day: 3,
        title: "마사이마라에서 보내는 온전한 이틀",
        location: "마사이마라 국립보호구",
        description: "이동을 마치고 마사이마라에 도착하면, 왜 이토록 화제가 되는지 금세 이해하게 됩니다. 이곳에서의 온전한 이틀은 보호구역을 제대로 탐험할 실질적인 시간을 의미합니다 — 아침과 오후의 게임 드라이브, 어제 어디서 목격되었는지가 아니라 오늘 고양잇과 동물이 있을 법한 곳을 읽어내는 가이드, 그리고 날짜가 대이동과 맞아떨어진다면 실로 놀라운 수의 누와 얼룩말 무리가 초원을 가로지르는 광경까지. 빅파이브와의 제대로 된 만남, 촬영에 좋은 고요한 골든아워의 빛, 그리고 평원이 주황빛으로 물드는 모습을 지켜보는 선다우너 시간도 최소 한 번은 경험하게 됩니다.",
        accommodation: "Masai Mara Camp",
        meals: "전 일정 식사",
        insiderFact: "평원은 일몰 전 마지막 한 시간 동안 가장 오래 황금빛을 유지합니다 — 사진 촬영이 우선이라면 두 번째 게임 드라이브 시간을 이에 맞추는 것이 좋습니다.",
        accommodationByTier: {
          trail: {
            name: "Kichwa Tembo Camp",
            image: "/images/lodges/kichwa-tembo-camp.webp",
            amenities: [
              "wildlife-view",
              "view"
            ]
          }
        }
      },
      {
        day: 4,
        title: "리프트밸리의 호수",
        location: "리프트밸리 호수",
        description: "완전한 풍경의 전환이자, 솔직히 말해 반가운 변화입니다. 이곳 리프트밸리 일대는 오래된 화산 크레이터와 용암류 사이에 자리하며, 얕은 알칼리성 물이 계절과 수위에 따라 눈에 띄게 달라지는 수의 플라밍고와 펠리컨을 불러 모읍니다 — 가이드는 그날 실제로 새들이 어디에 모여 있는지 정확히 파악하고 있습니다. 이날은 의도적으로 느리고 조용하게 설계되어 있습니다 — 호숫가를 따라 걷고, 훌륭한 조류 사진을 촬영하며, 더 강렬한 두 야생동물 목적지 사이에서 그저 숨을 고를 기회입니다.",
        accommodation: "Rift Valley Lake Lodge",
        meals: "전 일정 식사",
        insiderFact: "이곳의 플라밍고 수는 매년 수위에 따라 달라집니다 — 어떤 시즌에는 수천 마리가 찾아오고, 어떤 시즌에는 훨씬 적을 수 있으므로, 구체적인 수치는 확답이 아닌 참고 사항으로 받아들여 주세요.",
        accommodationByTier: {
          trail: {
            name: "Lake Nakuru Lodge",
            image: "/images/lodges/lake-nakuru-lodge.webp",
            amenities: [
              "view",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 5,
        title: "암보셀리 국립공원",
        location: "암보셀리 국립공원",
        description: "암보셀리로 향하면, 마침내 엽서 속 풍경이 눈앞에 펼쳐집니다 — 맑은 날 배경으로 솟은 킬리만자로산 아래, 탁 트인 평원을 가로지르는 코끼리 무리. 이곳에서의 온전한 이틀은 실질적인 현장 시간을 선사합니다 — 습지와 탁 트인 초원을 지나며 코끼리, 사자, 치타, 기린을 추적하는 게임 드라이브, 그리고 공원 전체를 파노라마로 조망할 수 있는 옵저베이션 힐 방문까지. 이 공원은 인내에 보답하는 곳이며, 이틀이라는 시간 덕분에 일정을 맞추기 위해 무리를 서둘러 지나칠 필요가 없습니다.",
        accommodation: "Amboseli Camp",
        meals: "전 일정 식사",
        insiderFact: "암보셀리의 마른 호수 바닥은 낮 동안 고운 먼지를 일으킵니다 — 코와 입을 버프나 가벼운 스카프로 가리면 게임 드라이브가 한결 쾌적해집니다.",
        accommodationByTier: {
          trail: {
            name: "Ol Tukai Lodge",
            image: "/images/lodges/ol-tukai-lodge.webp",
            amenities: [
              "view",
              "wildlife-view",
              "pool"
            ]
          }
        }
      },
      {
        day: 6,
        title: "암보셀리 국립공원",
        location: "암보셀리 국립공원",
        description: "암보셀리로 향하면, 마침내 엽서 속 풍경이 눈앞에 펼쳐집니다 — 맑은 날 배경으로 솟은 킬리만자로산 아래, 탁 트인 평원을 가로지르는 코끼리 무리. 이곳에서의 온전한 이틀은 실질적인 현장 시간을 선사합니다 — 습지와 탁 트인 초원을 지나며 코끼리, 사자, 치타, 기린을 추적하는 게임 드라이브, 그리고 공원 전체를 파노라마로 조망할 수 있는 옵저베이션 힐 방문까지. 이 공원은 인내에 보답하는 곳이며, 이틀이라는 시간 덕분에 일정을 맞추기 위해 무리를 서둘러 지나칠 필요가 없습니다.",
        accommodation: "Amboseli Camp",
        meals: "전 일정 식사",
        insiderFact: "킬리만자로는 대개 일출 후 첫 한 시간 동안 가장 선명하게 보입니다 — 낮의 열기가 정상 주변에 구름을 만들어내기 전입니다.",
        accommodationByTier: {
          trail: {
            name: "Ol Tukai Lodge",
            image: "/images/lodges/ol-tukai-lodge.webp",
            amenities: [
              "view",
              "wildlife-view",
              "pool"
            ]
          }
        }
      },
      {
        day: 7,
        title: "나이로비 / 출발",
        location: "나이로비 / 출발",
        description: "나이로비로 돌아가는 마지막 경치 좋은 드라이브 길에서, 탁 트인 평원에서 조용한 호숫가, 그리고 킬리만자로 아래 코끼리의 땅으로 이어졌던 6일간의 여정을 돌아볼 시간을 갖습니다. 그 후에는 조모 케냐타 국제공항까지 곧바로 이동해 귀국 항공편에 오릅니다.",
        accommodation: "N/A",
        meals: "조식"
      }
    ]
  },
  {
    slug: "off-the-beaten-track-photography-safari",
    name: "8일간의 '비경' 포토그래픽 사파리",
    duration: 8,
    destinations: [
      "serengeti",
      "ngorongoro"
    ],
    type: "wildlife",
    priceFrom: 6218.75,
    groupSize: {
      min: 2,
      max: 6
    },
    badge: "new",
    bestFor: [
      "photography",
      "wildlife-enthusiasts",
      "solo"
    ],
    metaTitle: "8일간의 '비경' 포토그래픽 사파리 | 응두투 정주 포식동물",
    metaDescription: "응두투의 정주 포식동물을 중심으로 구성된 프라이빗 비수기 포토그래픽 사파리 — 더 적은 차량, 더 깊은 행동 관찰, 그리고 들려줄 만한 진짜 이야기까지. 사진가, 작가, 콘텐츠 크리에이터를 위한 여정입니다. 1인당 $6,219부터.",
    overview: [
      "대부분의 여행자가 결코 보지 못하는 응두투의 또 다른 모습이 있습니다 — 숨겨져 있어서가 아니라, 대부분의 사파리가 그것을 발견하기에 맞지 않는 계절에 맞춰져 있기 때문입니다. 매년 수십만 마리의 누가 이 평원을 지나 이동해 갑니다. 하지만 이곳에 사는 사자, 표범, 치타는 그들과 함께 움직이지 않습니다. 이들은 남습니다 — 그 외에는 계절에 따라 물이 마르는 이 땅에서 유일하게 믿을 수 있는 담수원인 응두투의 습지에 영구히 묶인 채, 영역을 지키고, 굴을 파고, 사냥하고, 새끼를 기르며, 관객이 있든 없든 일 년 내내 그렇게 살아갑니다. 이 여정은 그 관객이 가장 적어지는 달에 맞춰 짜여 있습니다 — 풀이 낮고, 빛이 정직하며, 렌즈 앞의 이야기가 동물을 둘러싼 차량 무리가 아니라 정주하는 고양잇과 동물들 그 자체인 시기입니다.",
      "8일간, 하나로 이어지는 이야기입니다 — 생물학자처럼 행동을 읽어내는 가이드와 함께하는 응두투 평원에서의 온전한 3일, 풍경에 진정한 인간적 맥락을 더해주는 마사이족 공동체 땅을 지나는 여정, 그리고 지구상에서 가장 완성도 높은 야생동물 무대 중 하나인 응고롱고로 크레이터 가장자리에서의 마무리까지 — 여정 초반에 서둘러 지나치는 것이 아니라, 여행의 마지막 장을 위해 의도적으로 아껴둔 것입니다. 이곳의 모든 하루는 한 사람을 염두에 두고 짜여 있습니다 — 목격담의 체크리스트 이상을 사파리에서 원하는 사람. 진짜 포트폴리오를 쌓아가는 사진가, 이미 수천 번 이야기된 적 없는 소재를 모으는 작가, 혹은 한 장소를 그저 스쳐 지나가기보다 이해하고 싶은 여행자를 위한 것입니다."
    ],
    tagline: "2022년 설립된 현지 기업 · 출산 시즌의 인파가 아닌 정주 포식동물 시즌에 맞춘 일정 · 프라이빗 가이드 동행 출발",
    bestTimeToTravel: "건기의 정주 포식동물 시즌 — 이동하는 무리가 떠나고, 응두투의 영역을 지키는 고양잇과 동물들이 평원을 거의 독차지하는 시기입니다",
    whyDifferent: {
      heading: "응두투와 응고롱고로는 널리 알려진 곳인데, 왜 '비경'이라 부르는가",
      paragraphs: [
        "목적지 자체는 잘 알려져 있습니다 — 잘 알려지지 않은 것은 시기와 속도입니다. 대부분의 응두투 여정은 대이동이 머무르고 방문객 수가 정점에 달하는 12월~3월 출산 시즌을 중심으로 짜여 있습니다.",
        "이 사파리는 그 대신 정주 포식동물 시즌에 맞춰져 있습니다 — 이동하는 무리는 떠났지만 응두투를 고향으로 삼는 영역 동물들은 남아 있고, 대이동을 뒤쫓는 인파도 함께 떠나가는 시기입니다. 한곳에서 보내는 온전한 3일, 목격 장면뿐 아니라 생태와 배경까지 설명해 주는 가이드, 그리고 진정한 마사이족 공동체 방문까지 — 이 모두가 단순한 사진이 아닌 진짜 소재를 만들어내도록 짜여 있습니다."
      ]
    },
    highlights: [
      "응두투 평원에서 보내는 온전한 3일 — 서두른 아침 한 번이 아니라, 장면이나 사냥, 혹은 굴 주변의 상황이 스스로의 속도로 펼쳐지도록 지켜보는 실질적인 시간",
      "건기의 낮은 초목이 붐비는 출산 시즌 동안 숨겨져 있던 행동을 드러내는 정주 포식동물 시즌에 맞춘 일정, 그리고 같은 장면을 두고 경쟁하는 차량도 훨씬 적음",
      "대표적인 고양잇과 동물을 넘어선 진정으로 다양한 포식동물들 — 사향고양이, 서벌, 아프리카들고양이, 카라칼, 그리고 좀처럼 사진에 담기지 않는 줄무늬자칼을 포함한 3종의 자칼",
      "응고롱고로로 향하는 길에 지나는 마사이족 공동체 — 게임 드라이브 사이의 각본대로 짜인 정차가 아닌, 진정한 배경과 진정한 대화",
      "서장이 아닌 종장으로서의 응고롱고로 크레이터 — 여정이 너무 일찍 정점을 찍는 대신, 아프리카에서 가장 완성도 높은 야생동물 무대를 향해 서서히 고조",
      "목격 장면뿐 아니라 생태계 자체를 설명해 주는 가이드 — 포식동물이 왜 그 자리에 머무는지 이해하면, 무엇을 예측하고 구도를 잡으며 결국 무엇을 쓰거나 촬영할 수 있는지가 달라집니다",
      "사진가 못지않게 이야기꾼을 위해 설계된 여정 — 매일이 단순한 촬영 기회를 넘어 진정한 서사적 소재를 제공"
    ],
    heroImage: "/images/lodges/ndutu-safari-lodge.webp",
    heroImageAlt: "Lantern-lit lounge terrace at Ndutu Safari Lodge overlooking acacia-dotted Serengeti plains at dusk",
    gallery: [],
    pricingTiersProvisional: true,
    pricingTiers: [
      {
        pax: 2,
        reserve: 7135
      },
      {
        pax: 3,
        reserve: 6524.17
      },
      {
        pax: 4,
        reserve: 6218.75
      },
      {
        pax: 5,
        reserve: 6688.5
      },
      {
        pax: 6,
        reserve: 6518.96
      }
    ],
    included: [
      "모든 국립공원, 컨세션, 보전구역 입장료",
      "필드 활동이 있는 매일 제공되는 차량, 가이드, 연료",
      "전 일정 식사",
      "일정표에 명시된 숙박시설",
      "공항 송영"
    ],
    excluded: [
      "국제선 항공권",
      "비자 발급 비용",
      "여행자 보험",
      "팁",
      "카메라·렌즈 대여"
    ],
    notes: [
      "표시된 요금은 2인 1실 기준 1인당 요금입니다.",
      "차량, 가이드, 디젤 비용은 그룹 전체가 함께 부담하므로, 참가 인원이 늘어날수록 1인당 요금은 일반적으로 낮아집니다. 5인 요금이 4인 요금보다 다소 높게 책정된 것은 해당 인원수에서의 객실 구성 단계 때문이며, 이는 저희의 다른 다단계 요금 여정에서도 간혹 나타나는 패턴으로, 요금 오류가 아닙니다."
    ],
    faq: [
      {
        q: "응두투와 응고롱고로는 잘 알려진 목적지인데, 왜 '비경'이라고 부르나요?",
        a: "목적지 자체는 잘 알려져 있습니다 — 잘 알려지지 않은 것은 시기와 속도입니다. 대부분의 응두투 여정은 대이동이 머무르고 방문객 수가 정점에 달하는 12월~3월 출산 시즌을 중심으로 짜여 있습니다. 이 사파리는 그 대신 정주 포식동물 시즌에 맞춰져 있습니다 — 이동하는 무리는 떠났지만 응두투를 고향으로 삼는 영역 동물들은 남아 있고, 대이동을 뒤쫓는 인파도 함께 떠나가는 시기입니다."
      },
      {
        q: "이 여행은 사진가뿐 아니라 콘텐츠 크리에이터와 작가에게도 적합한가요?",
        a: "매우 적합합니다. 진행 속도 자체가 — 한곳에서 보내는 온전한 3일, 목격 장면뿐 아니라 생태와 배경도 설명해 주는 가이드, 진정한 마사이족 공동체 방문 — 단순한 사진이 아닌 진짜 소재를 만들어내도록 짜여 있습니다. 이 여정의 여러 날은 단발성 촬영 기회가 아니라 이야기의 전개를 중심으로 의도적으로 구성되어 있습니다."
      },
      {
        q: "어떤 카메라 장비를 가져가야 하나요?",
        a: "DSLR 또는 미러리스 카메라 본체, 포식동물 촬영을 위한 최소 400mm 이상의 망원렌즈, 그리고 풍경 및 스토리텔링을 위한 환경 사진용 광각렌즈를 추천합니다. 예약이 확정된 분들께는 출발 전 상세한 짐 싸기 및 장비 가이드를 보내드립니다."
      },
      {
        q: "대이동 무리가 떠난 뒤에도 많은 수의 야생동물을 볼 수 있나요?",
        a: "네, 가능합니다 — 응두투의 정주 포식동물 개체군과 그를 뒷받침하는 소형 육식동물들, 그리고 건강한 수의 정주 초식동물이 일 년 내내 이 생태계에 머뭅니다. 달라지는 것은 존재 여부가 아니라 구성입니다 — 누의 수는 줄어들지만, 지속적이고 근거리에서 포식동물의 행동을 관찰할 가능성은 훨씬 높아집니다."
      },
      {
        q: "참가 인원에 따라 요금은 얼마나 달라지나요?",
        a: "차량, 가이드, 디젤 비용은 그룹 전체가 함께 부담하므로, 참가 인원이 늘어날수록 1인당 요금은 일반적으로 낮아집니다 — 인원별 정확한 요금은 위 요금표를 참고해 주세요."
      },
      {
        q: "이 여정을 다른 목적지와 결합할 수 있나요?",
        a: "네, 가능합니다 — 이 여정은 여행 후 여유를 즐길 잔지바르 해변 연장 일정과 자연스럽게 어울리며, 정주 포식동물 체험과 대이동 성수기의 강 건너기 드라마를 한 번의 여행에서 모두 원하는 분들을 위해 노던 서킷 사파리와 결합할 수도 있습니다."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "아루샤 도착",
        location: "아루샤",
        description: "아루샤에 도착해, 첫날 저녁이 앞으로의 여정을 위한 분위기를 잡도록 맡겨두세요 — 다가올 날들에 대한 상세한 브리핑, 빛과 계절이 무엇을 선사할지, 그리고 이 여정이 체크리스트가 아닌 인내를 중심으로 짜여 있는 방식에 대해 안내해 드립니다.",
        accommodation: "Arusha Coffee Lodge",
        meals: "석식",
        accommodationByTier: {
          reserve: {
            name: "Arusha Coffee Lodge",
            image: "/images/lodges/arusha-coffee-lodge-garden-path.webp",
            amenities: [
              "wifi",
              "pool",
              "garden"
            ]
          }
        }
      },
      {
        day: 2,
        title: "아루샤에서 남부 세렝게티로",
        location: "응두투, 남부 세렝게티",
        description: "아루샤에서 응두투 활주로까지의 짧은 비행 덕분에, 긴 육로 이동 대신 이미 오후부터 필드에 나가 있을 수 있습니다. 캠프에 체크인할 무렵이면 빛은 이미 황금빛으로 물들어가고, 평원은 이미 제 모습을 한껏 뽐내고 있습니다.",
        accommodation: "Ndutu Safari Lodge",
        meals: "전 일정 식사",
        insiderFact: "특정 종, 행동, 구도 스타일 등 원하는 촬영 목록이 있다면 이 시점에 가이드에게 전달하는 것이 좋습니다 — 첫날부터 이를 중심으로 경로를 짤 수 있습니다.",
        accommodationByTier: {
          reserve: {
            name: "Ndutu Safari Lodge",
            image: "/images/lodges/ndutu-safari-lodge.webp",
            amenities: [
              "wildlife-view",
              "restaurant",
              "view"
            ]
          }
        }
      },
      {
        day: 3,
        title: "응두투 평원에서 보내는 하루",
        location: "응두투, 남부 세렝게티",
        description: "평원에서 보내는 첫 온전한 하루이자, 이 여행의 속도가 스스로를 드러내는 날입니다. 여러 장면을 빠르게 옮겨 다니는 대신, 가이드는 한자리에 머뭅니다 — 굴 주변을 지켜보고, 치타의 몸짓을 읽으며, 다음 이야기를 쫓기보다 지금의 이야기를 기다립니다. 여기서 일반적인 게임 드라이브와 사진 중심 사파리의 차이가 뚜렷해집니다.",
        accommodation: "Ndutu Safari Lodge",
        meals: "전 일정 식사",
        accommodationByTier: {
          reserve: {
            name: "Ndutu Safari Lodge",
            image: "/images/lodges/ndutu-safari-lodge.webp",
            amenities: [
              "wildlife-view",
              "restaurant",
              "view"
            ]
          }
        }
      },
      {
        day: 4,
        title: "응두투 평원, 온전한 하루",
        location: "응두투, 남부 세렝게티",
        description: "두 번째 날은 단 한 번의 방문으로는 결코 얻을 수 없는 것을 선사합니다 — 다시 등장하는 낯익은 얼굴들입니다. 같은 굴, 같은 영역, 그리고 다른 각도와 다른 빛 속에서 다시 마주하는 낯익은 프라이드까지. 단발적인 컷을 모으기보다 하나의 작품 세계를 쌓아가는 사람에게, 이 날부터 진짜 의미를 갖기 시작합니다.",
        accommodation: "Ndutu Safari Lodge",
        meals: "전 일정 식사",
        accommodationByTier: {
          reserve: {
            name: "Ndutu Safari Lodge",
            image: "/images/lodges/ndutu-safari-lodge.webp",
            amenities: [
              "wildlife-view",
              "restaurant",
              "view"
            ]
          }
        }
      },
      {
        day: 5,
        title: "응두투 평원, 온전한 하루",
        location: "응두투, 남부 세렝게티",
        description: "평원에서 보내는 세 번째이자 마지막 날로, 3일째에 시작된 이야기의 실마리를 마무리 짓기 위한 시간입니다 — 끝나지 않았던 사냥, 언뜻 스쳐 지나갔던 새끼들, 처음에는 완벽하지 않았던 빛까지.",
        accommodation: "Ndutu Safari Lodge",
        meals: "전 일정 식사",
        accommodationByTier: {
          reserve: {
            name: "Ndutu Safari Lodge",
            image: "/images/lodges/ndutu-safari-lodge-veranda-view.webp",
            amenities: [
              "wildlife-view",
              "restaurant",
              "view"
            ]
          }
        }
      },
      {
        day: 6,
        title: "응두투 평원에서 마사이족 공동체를 거쳐 응고롱고로 크레이터 가장자리로",
        location: "응고롱고로 크레이터",
        description: "오늘 여정의 분위기가 바뀝니다. 응고롱고로로 향하는 길은 마사이족 공동체의 땅을 지나며, 진정한 방문을 위한 시간이 마련되어 있습니다 — 사진 촬영을 위한 정차가 아니라 교류의 시간이며, 촬영뿐 아니라 글을 쓰는 사람에게는 여정 전체에서 가장 풍부한 소재가 되는 경우가 많습니다.",
        accommodation: "Ngorongoro Serena Safari Lodge",
        meals: "전 일정 식사",
        accommodationByTier: {
          reserve: {
            name: "Ngorongoro Serena Safari Lodge",
            image: "/images/lodges/ngorongoro-serena-safari-lodge.webp",
            amenities: [
              "view",
              "restaurant",
              "ensuite"
            ]
          }
        }
      },
      {
        day: 7,
        title: "응고롱고로 크레이터 데이 투어",
        location: "응고롱고로 크레이터",
        description: "크레이터 바닥으로 내려가 하루를 온전히 보냅니다 — 약 260km²(100제곱마일)에 이르는 폐쇄된 칼데라 안에, 이 대륙에서 가장 밀도 높은 야생동물 군집 중 하나가 모여 있습니다. 하나의 생태계를 천천히 읽어내는 법을 배우며 보낸 3일 뒤, 크레이터의 압도적인 밀도는 이날의 주제를 인내가 아닌 풍요로움으로 바꿔놓으며 전혀 다른 종류의 이야기를 선사합니다.",
        accommodation: "Ngorongoro Serena Safari Lodge",
        meals: "전 일정 식사",
        insiderFact: "크레이터 바닥은 정오에도 가장자리보다 몇 도 더 서늘합니다 — 손이 차가우면 렌즈 교체가 느려지므로, 이른 아침 하강에 대비해 장갑을 손 닿는 곳에 두세요.",
        accommodationByTier: {
          reserve: {
            name: "Ngorongoro Serena Safari Lodge",
            image: "/images/lodges/ngorongoro-serena-safari-lodge.webp",
            amenities: [
              "view",
              "restaurant",
              "ensuite"
            ]
          }
        }
      },
      {
        day: 8,
        title: "응고롱고로 보전지역에서 아루샤 시내로",
        location: "아루샤",
        description: "아루샤로 돌아가는 마지막 드라이브가 여정의 원을 닫습니다 — 고원은 익숙한 저지대로 바뀌어가고, 그 길 위에서 한 주간의 사진과 메모를 돌아볼 시간도 갖게 됩니다. 다음 날 아침에는 귀국 항공편에 오릅니다.",
        accommodation: "N/A",
        meals: "조식"
      }
    ]
  },
  {
    slug: "rwanda-primates-zanzibar-seniors-groups",
    name: "12일간 르완다 영장류 사파리 & 잔지바르 비치 에스케이프",
    duration: 12,
    destinations: [
      "kigali",
      "nyungwe",
      "volcanoes",
      "zanzibar"
    ],
    type: "combination",
    priceFrom: 8533.75,
    groupSize: {
      min: 2,
      max: 6
    },
    badge: "new",
    bestFor: [
      "seniors",
      "anniversary",
      "groups"
    ],
    metaTitle: "12일간 르완다 영장류 사파리 & 잔지바르 비치 에스케이프 | 시니어, 기념일, 그룹을 위한 여정 | EWA Safari Outfitters",
    metaDescription: "르완다에서 침팬지, 고릴라, 골든몽키를 만나고, 이어 잔지바르 해변에서 여유로운 4박을 — 시니어, 기념일을 맞은 커플, 그룹 여행객을 위해 만들어진 여정입니다. 1인당 $7,742부터.",
    overview: [
      "2027년 시즌에 맞춰 업데이트되었습니다. 12일간, 완전히 다른 두 가지 종류의 특별함을 경험합니다. 전반부는 가장 생동감 넘치는 르완다의 모습입니다 — 니웅웨의 숲 캐노피를 이동하는 침팬지, 무산제 위 안개 낀 산비탈의 마운틴고릴라, 대나무 숲을 누비는 골든몽키, 그리고 그 사이사이 키부호를 가로지르는 보트 여행까지. 후반부는 아무것도 요구하지 않습니다 — 잔지바르의 백사장에서 보내는 여유로운 4박, 그리고 본격적인 휴식이 시작되기 전 하나의 이야기를 더 원하는 분들을 위한 스톤타운에서의 아침 일정도 마련되어 있습니다.",
      "이 구성은 특히 세 부류의 여행자에게 잘 어울립니다. 시니어 여행자에게는 여정 자체가 속도를 조절해 줍니다 — 하룻밤씩 옮겨 다니는 것이 아니라 진정한 2박 연속 체류, 그리고 부수적으로 다뤄지는 것이 아니라 처음부터 진정한 휴식으로 설계된 후반부까지. 기념일을 맞은 커플에게는 그 대비 자체가 핵심입니다 — 르완다에서 함께 무언가에 도전하는 날들 뒤에, 잔지바르에서 아무것도 요구하지 않는 날들이 이어집니다. 그리고 그룹 — 친구, 대가족, 여러 세대가 함께하는 여행 — 에게는, 이 구성이 각자의 속도로 모험 파트에 참여한 뒤 해변에서 다시 온전히 모일 여유를 줍니다.",
      "한 가지 솔직히 말씀드릴 점이 있습니다. 침팬지와 고릴라 트레킹은 진정으로 체력을 요구합니다 — 앉아서 하는 게임 드라이브가 아니라, 때로는 고지대에서의 본격적인 숲 트레킹입니다. 이 여행은 트레킹 자체가 완만한 것처럼 가장하지 않고, 진정한 모험 뒤에 진정한 휴식을 짝지어 놓았습니다. 산에서 추가 지원을 원하시는 분은 포터를 고용하실 수 있습니다."
    ],
    bestTimeToTravel: "연중 가능하며, 6월~9월과 12월~2월의 건기가 가장 쾌적한 트레킹 여건을 제공합니다",
    highlights: [
      "한 번의 여행에서 만나는 세 종의 영장류 — 니웅웨의 침팬지, 무산제 위의 마운틴고릴라, 대나무 숲의 골든몽키까지, 각각이 진정으로 다른 트레킹 체험",
      "두 트레킹 지역 사이의 키부호 보트 여행 — 단순한 이동이 아닌, 여정에 마련된 휴식의 전환일",
      "급하게 덧붙인 일정이 아닌, 고릴라 트레킹 날에 함께하는 진정한 문화 교류",
      "스톤타운에서의 아침과 아무 일정 없는 순수한 비치타임 3일을 포함한, 잔지바르에서의 온전한 4박",
      "르완다 전역에서 이어지는 진정한 2박 연속 체류 — 정신없이 몰아치는 하룻밤 정차 없이, 그룹의 모든 구성원이 다음으로 이동하기 전 자리를 잡을 시간을 확보",
      "대비를 중심으로 설계된 여정 — 어느 한쪽만이 아니라, 진정한 모험 뒤에 진정한 휴식이 이어집니다"
    ],
    heroImage: "/images/gallery/rwanda-mountain-gorilla.webp",
    heroImageAlt: "Mountain gorilla resting with its chin on its arm amid Rwanda's forest foliage",
    gallery: [
      {
        src: "/images/gallery/golden-monkey.webp",
        alt: "Close-up portrait of a golden monkey in Rwanda's bamboo forest"
      },
      {
        src: "/images/gallery/lake-kivu.webp",
        alt: "Beach loungers and umbrellas along the sandy shore of Lake Kivu, Rwanda"
      },
      {
        src: "/images/gallery/nyungwe.webp",
        alt: "Chimpanzee mother resting with her infant on a mossy log in Nyungwe Forest"
      },
      {
        src: "/images/gallery/zanzibar-nungwi-aerial.webp",
        alt: "Aerial view of a beachfront resort with thatched roofs, palm trees, and turquoise lagoon waters at Nungwi, Zanzibar"
      }
    ],
    pricingTiers: [
      {
        pax: 2,
        reserve: 8533.75,
        sovereign: 13093.33
      },
      {
        pax: 3,
        reserve: 8137.92,
        sovereign: 12486.01
      },
      {
        pax: 4,
        reserve: 7940,
        sovereign: 12182.34
      },
      {
        pax: 5,
        reserve: 7821.25,
        sovereign: 12000.14
      },
      {
        pax: 6,
        reserve: 7742.08,
        sovereign: 11878.67
      }
    ],
    included: [
      "모든 국립공원 및 트레킹 허가증 비용",
      "전 일정 제공되는 차량, 가이드, 연료",
      "명시된 모든 활동",
      "일정표에 명시된 숙박시설",
      "키갈리~카멤베 및 키갈리~잔지바르 항공편",
      "공항 송영"
    ],
    includedCategorized: {
      transfers: [
        "키갈리~카멤베 및 키갈리~잔지바르 항공편",
        "공항 송영"
      ],
      accommodationMeals: [
        "일정표에 명시된 숙박시설"
      ],
      guidingGameDrives: [
        "모든 국립공원 및 트레킹 허가증 비용",
        "전 일정 제공되는 차량, 가이드, 연료",
        "명시된 모든 활동"
      ]
    },
    excluded: [
      "국제선 항공권",
      "비자 발급 비용",
      "여행자 보험",
      "팁 및 사례비",
      "개인 경비"
    ],
    excludedCategorized: [
      "국제선 항공권",
      "비자 발급 비용",
      "여행자 보험",
      "팁 및 사례비",
      "개인 경비"
    ],
    notes: [
      "표시된 요금은 더블 또는 트윈룸을 2인이 함께 이용할 경우의 1인당 요금입니다. 싱글룸을 원하실 경우 추가 요금이 적용됩니다.",
      "고릴라 및 침팬지 트레킹 허가증 비용은 르완다 공원 당국이 책정하며, 예고 없이 변경될 수 있습니다.",
      "고릴라 및 침팬지 트레킹에는 공원 당국이 정한 최소 연령 제한이 적용됩니다 — 예약 시 담당 컨설턴트에게 현재 기준을 확인해 주세요.",
      "숙박시설 및 요금은 예약 가능 여부에 따라 달라지며, 정확한 여행 날짜에 따라 변동될 수 있습니다."
    ],
    faq: [
      {
        q: "이 여정은 고령의 여행자에게도 적합한가요?",
        a: "잔지바르 파트는 전적으로 여유로우며 연령이나 체력에 관계없이 적합합니다. 르완다 파트는 진정으로 더 많은 체력을 요구합니다 — 침팬지와 고릴라 트레킹에는 때로 가파르거나 고르지 않은 지형에서의 본격적인 숲 트레킹이 포함됩니다. 추가 지원이 필요하면 포터를 고용할 수 있으며, 예약 시 구체적인 우려 사항을 담당 컨설턴트에게 전달해 주시면 가능한 범위에서 속도를 조정해 드립니다."
      },
      {
        q: "고릴라나 침팬지 트레킹에 최소 연령 제한이 있나요?",
        a: "네, 있습니다. 공원 당국이 정하며 변경될 수 있으므로, 예약 시 담당 컨설턴트에게 현재 기준을 확인해 주세요."
      },
      {
        q: "체력 수준이 다양한 그룹의 경우 어떻게 진행되나요?",
        a: "문제없이 진행됩니다. 처음부터 그렇게 설계되어 있습니다. 트레킹을 원하는 분은 참여하고, 원하지 않는 분은 대신 롯지에서 여유로운 하루를 보낼 수 있습니다 — 이 여정은 그룹의 모든 구성원이 모든 활동에 참여할 것을 요구하지 않으며, 잔지바르 파트에서는 어차피 모두가 다시 하나로 모입니다."
      },
      {
        q: "세 가지 영장류 트레킹의 차이는 무엇인가요?",
        a: "니웅웨에서의 침팬지 트레킹은 더 울창한 숲을 지나며 더 빠르게 움직이는 영장류를 추적합니다. 무산제 위에서의 고릴라 트레킹은 사람에게 익숙해진 가족 무리와의, 엄격하게 관리되는 한 시간짜리 만남입니다. 골든몽키 트레킹은 세 가지 중 가장 활발하고 빠른 속도로 진행되며, 대나무 숲을 지납니다."
      },
      {
        q: "요금에 포함되는 것과 포함되지 않는 것은 무엇인가요?",
        a: "포함 사항: 모든 국립공원 및 트레킹 허가증 비용, 전 일정 차량·가이드·연료, 명시된 모든 활동, 일정표에 명시된 숙박시설, 키갈리~카멤베 및 키갈리~잔지바르 항공편, 공항 송영입니다. 불포함 사항: 국제선 항공권, 비자 발급 비용, 여행자 보험, 팁, 개인 경비입니다."
      },
      {
        q: "참가 인원에 따라 요금은 얼마나 달라지나요?",
        a: "차량, 가이드, 디젤 비용은 그룹 전체가 함께 부담하므로, 참가 인원이 늘어날수록 1인당 요금은 낮아집니다."
      },
      {
        q: "이 여정은 단축할 수 있나요, 아니면 12일 전체가 필요한가요?",
        a: "전체 여정은 두 파트 모두에 충분한 시간을 배분하도록 설계되어 있습니다 — 르완다 구간을 서두르면 허가증 일정을 놓치거나 해변에 도착하기 전 그룹이 지나치게 지칠 위험이 있으며, 잔지바르를 단축하면 이 여행이 마지막에 마련해 둔 휴식의 의미가 퇴색됩니다. 구체적인 시간 제약이 있다면 담당 컨설턴트에게 문의해 주세요 — 조정이 가능합니다."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "키갈리 도착",
        description: "키갈리에 도착해, 첫날 저녁은 편안하게 보내세요.",
        accommodation: "Kigali Serena Hotel",
        meals: "석식",
        accommodationByTier: {
          reserve: {
            name: "Kigali Serena",
            image: "/images/lodges/kigali-serena.webp",
            amenities: [
              "wifi",
              "restaurant",
              "pool"
            ]
          }
        }
      },
      {
        day: 2,
        title: "키갈리에서 니웅웨 국립공원으로",
        description: "카멤베까지의 짧은 비행 덕분에, 긴 육로 이동 대신 이미 오후부터 숲 가까이에 도착할 수 있습니다.",
        accommodation: "Munazi Eco Lodge",
        meals: "전 일정 식사",
        accommodationByTier: {
          reserve: {
            name: "Munazi Eco Lodge",
            image: "/images/gallery/nyungwe.webp",
            amenities: [
              "restaurant",
              "view"
            ]
          }
        }
      },
      {
        day: 3,
        title: "니웅웨에서의 침팬지 트레킹",
        description: "아프리카에서 가장 오래된 열대우림 중 한 곳을 가이드와 함께 트레킹하며 니웅웨의 침팬지 무리를 찾아 나섭니다 — 고릴라 트래킹과는 진정으로 다른 트레킹 체험으로, 울창한 숲 캐노피 속에서 더 빠르게 움직이고 더 시끄러운 영장류를 뒤쫓습니다.",
        accommodation: "Munazi Eco Lodge",
        meals: "전 일정 식사",
        insiderFact: "니웅웨는 아프리카에서 가장 오래된 열대우림 중 하나이자, 13종이 기록된 대륙에서 가장 풍부한 영장류 다양성을 자랑하는 지역 중 한 곳입니다.",
        accommodationByTier: {
          reserve: {
            name: "Munazi Eco Lodge",
            image: "/images/gallery/nyungwe.webp",
            amenities: [
              "restaurant",
              "view"
            ]
          }
        }
      },
      {
        day: 4,
        title: "니웅웨 보트 여행과 무산제로의 이동",
        description: "의도적으로 완만하게 짜인 하루입니다 — 키부호를 가로지르는 보트 여행 후, 비룽가 화산군의 그늘 아래 자리한 무산제로 북쪽을 향해 드라이브합니다.",
        accommodation: "Ingagi Lodge",
        meals: "전 일정 식사",
        accommodationByTier: {
          reserve: {
            name: "Ingagi Lodge",
            image: "/images/lodges/ingagi-lodge.webp",
            amenities: [
              "restaurant",
              "view"
            ]
          }
        }
      },
      {
        day: 5,
        title: "고릴라 트레킹과 문화 교류",
        description: "이 여정이 중심에 두는 하루입니다. 트래커들이 숲속으로 길을 안내해 마운틴고릴라 가족을 찾아내며, 엄격하게 관리되는 한 시간 동안 그들과 함께합니다 — 실버백, 새끼를 안은 어미, 그리고 야생 고릴라 가족이 여유롭게 하루를 보내는 모습까지. 이어서 지역 공동체와의 진정한 문화 교류가 이어집니다.",
        accommodation: "Ingagi Lodge",
        meals: "전 일정 식사",
        insiderFact: "고릴라 가족 하나당 하루에 발급되는 허가증 수는 제한되어 있습니다 — 이는 인간에게 익숙해진 가족 무리를 보호하기 위해 만남을 엄격하게 관리하기 때문입니다.",
        accommodationByTier: {
          reserve: {
            name: "Ingagi Lodge",
            image: "/images/lodges/ingagi-lodge.webp",
            amenities: [
              "restaurant",
              "view"
            ]
          }
        }
      },
      {
        day: 6,
        title: "골든몽키 트레킹과 키갈리로의 이동",
        description: "고릴라 트레킹보다 더 빠르고 활기찬 아침입니다 — 골든몽키는 대나무 캐노피 사이를 빠르게 이동하며, 이를 추적하는 것은 인내만큼이나 속도를 맞추는 것이 관건입니다. 오후에는 드라이브를 통해 키갈리로 돌아갑니다.",
        accommodation: "Kigali Serena Hotel",
        meals: "전 일정 식사",
        accommodationByTier: {
          reserve: {
            name: "Kigali Serena",
            image: "/images/lodges/kigali-serena.webp",
            amenities: [
              "wifi",
              "restaurant",
              "pool"
            ]
          }
        }
      },
      {
        day: 7,
        title: "키갈리에서 잔지바르로",
        description: "키갈리에서 잔지바르까지의 항공편이 여행의 모험 파트를 마무리하고 휴식 파트를 엽니다.",
        accommodation: "Zanzibar Serena",
        meals: "조식",
        accommodationByTier: {
          reserve: {
            name: "Zanzibar Serena",
            image: "/images/gallery/zanzibar.webp",
            amenities: [
              "pool",
              "view",
              "restaurant"
            ]
          }
        }
      },
      {
        day: 8,
        title: "스톤타운 투어",
        description: "스톤타운의 구불구불한 골목과 향신료 시장, 스와힐리-아라비아 양식의 건축을 둘러보는 아침 — 해변이 완전히 일상을 차지하기 전, 하나의 이야기를 더 담아봅니다.",
        accommodation: "Nungwi Dreams By Mantis",
        meals: "조식",
        accommodationByTier: {
          reserve: {
            name: "Nungwi Dreams By Mantis",
            image: "/images/lodges/nungwi-dreams-by-mantis.webp",
            amenities: [
              "pool",
              "view"
            ]
          }
        }
      },
      {
        day: 9,
        title: "해변에서의 휴식",
        description: "해변 외에는 아무 일정도 없는 온전한 3일 중 첫째 날입니다.",
        accommodation: "Nungwi Dreams By Mantis",
        meals: "조식",
        accommodationByTier: {
          reserve: {
            name: "Nungwi Dreams By Mantis",
            image: "/images/lodges/nungwi-dreams-by-mantis.webp",
            amenities: [
              "pool",
              "view"
            ]
          }
        }
      },
      {
        day: 10,
        title: "해변에서의 휴식",
        description: "일정 없는 해변 시간으로 보내는 또 하루입니다.",
        accommodation: "Nungwi Dreams By Mantis",
        meals: "조식",
        accommodationByTier: {
          reserve: {
            name: "Nungwi Dreams By Mantis",
            image: "/images/lodges/nungwi-dreams-by-mantis.webp",
            amenities: [
              "pool",
              "view"
            ]
          }
        }
      },
      {
        day: 11,
        title: "해변에서의 휴식",
        description: "출발 전 해변에서 보내는 마지막 온전한 하루입니다.",
        accommodation: "Nungwi Dreams By Mantis",
        meals: "조식",
        accommodationByTier: {
          reserve: {
            name: "Nungwi Dreams By Mantis",
            image: "/images/lodges/nungwi-dreams-by-mantis.webp",
            amenities: [
              "pool",
              "view"
            ]
          }
        }
      },
      {
        day: 12,
        title: "출발",
        description: "잔지바르 공항으로 이동하며, 완전히 다른 두 가지 특별함을 아우른 12일간의 여정이 여러분과 함께 집으로 향합니다.",
        accommodation: "N/A",
        meals: "조식"
      }
    ]
  }
]
