import type { SafariPackage } from './packages'

export const packages: SafariPackage[] = [
  {
    slug: "7-day-serengeti-ngorongoro",
    name: "سفاري 7 أيام: سيرينغيتي ونجورونجورو",
    duration: 7,
    destinations: [
      "serengeti",
      "ngorongoro",
      "tarangire"
    ],
    type: "big_five_game_drives",
    bestMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
    metaTitle: "سفاري 7 أيام في الدائرة الشمالية: سيرينغيتي ونجورونجورو وتارانجيري",
    metaDescription: "سفاري خاصة تمتد 7 أيام بإشراف دليل مرافق طوال الرحلة في الدائرة الشمالية — تارانجيري وسيرينغيتي وفوهة نجورونجورو. ثلاث فئات، من Wilderness Trail إلى Wilderness Sovereign. تبدأ الأسعار من 2,485 دولارًا للشخص الواحد.",
    overview: [
      "سبعة أيام هي المدة التي يستقر عليها معظم المسافرين الذين يزورون تنزانيا للمرة الأولى بعد أن يدركوا طبيعة جغرافيتها جيدًا — مدة كافية للتنقل بين ثلاث بيئات طبيعية متباينة دون تسرع، وقصيرة بما يكفي لتناسب فترة أسبوعين معتادة مع إضافة امتداد شاطئي أو رحلة تتبع غوريلا في أي من طرفيها. يمثل هذا البرنامج الدائرة الشمالية في أكمل صورها: قطعان الفيلة وأشجار الباوباب العريقة في تارانجيري، يومان كاملان في أعماق سيرينغيتي، ويوم كامل للنزول إلى فوهة نجورونجورو — أعلى كثافة للحياة البرية في أفريقيا داخل نظام بيئي مغلق واحد — قبل التوقف الثقافي الختامي في قرية موتو وا مبو في طريق العودة إلى أروشا.",
      "متاحة بثلاث فئات — Wilderness Trail وWilderness Reserve وWilderness Sovereign — تتبع جميعها المسار نفسه على مدى سبعة أيام، بينما يتغير مستوى المخيمات والنُزل التي تقيمون فيها.",
      "تندمج هذه الرحلة السفارية بسلاسة مع رحلة أوسع في شرق أفريقيا — يمكن تمديدها إلى كينيا أو رواندا، أو إضافة امتداد شاطئي بعد جولة السفاري الأخيرة."
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
        trail: 2485.00,
        reserve: 3276.25,
        sovereign: 4775.00
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
      "ثلاث حدائق في رحلة واحدة متصلة — تارانجيري وسيرينغيتي وفوهة نجورونجورو، مرتبطة عبر الطريق البري بحيث يصبح المشهد الطبيعي نفسه جزءًا من القصة",
      "يومان كاملان في سيرينغيتي — وقت كافٍ لتتبع حركة الحيوانات المفترسة فعليًا، وربما مشاهدة الهجرة الكبرى نفسها بحسب الموسم",
      "يوم كامل داخل فوهة نجورونجورو — أعلى كثافة للحياة البرية في القارة، مع بعض أكثر فرص مشاهدة وحيد القرن موثوقية في المنطقة",
      "قطعان الفيلة وأشجار الباوباب العريقة في تارانجيري — فصل افتتاحي لا يحظى بتقدير كافٍ وتتجاهله معظم البرامج القصيرة",
      "قرية موتو وا مبو الثقافية — توقف حقيقي وغير متعجل في طريق العودة إلى أروشا، وليس محطة تصوير سريعة على جانب الطريق",
      "يمكن دمجها بسهولة مع كينيا أو رواندا، أو تمديدها إلى الشاطئ — تصلح هذه الرحلة بمفردها أو كجزء من رحلة أطول في شرق أفريقيا",
      "تغطي كل مستويات الراحة — من الأسلوب الهادئ المدروس إلى الأسلوب الاستثنائي حقًا، دون تغيير يوم واحد من المسار نفسه"
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
      "جميع رسوم دخول الحدائق الوطنية",
      "جميع جولات السفاري بمركبة دفع رباعي",
      "دليل محلي محترف طوال الرحلة",
      "الوجبات المحددة في كل يوم",
      "الإقامة وفق برنامج الرحلة",
      "تنقلات خاصة من وإلى المطار وبين المخيمات"
    ],
    includedCategorized: {
      transfers: [
        "تنقلات خاصة من وإلى المطار وبين المخيمات"
      ],
      accommodationMeals: [
        "الوجبات المحددة في كل يوم",
        "الإقامة وفق برنامج الرحلة"
      ],
      guidingGameDrives: [
        "جميع رسوم دخول الحدائق الوطنية",
        "جميع جولات السفاري بمركبة دفع رباعي",
        "دليل محلي محترف طوال الرحلة"
      ]
    },
    excluded: [
      "رحلات الطيران الدولية",
      "رسوم التأشيرة",
      "التأمين على السفر",
      "الإكراميات",
      "الأنشطة الاختيارية"
    ],
    excludedCategorized: [
      "رحلات الطيران الدولية",
      "رسوم التأشيرة",
      "التأمين على السفر",
      "الإكراميات",
      "الأنشطة الاختيارية"
    ],
    notes: [
      "الأسعار المعروضة هي للشخص الواحد بمشاركة غرفة مزدوجة/توأم؛ تُطبَّق رسوم إضافية عند طلب غرفة فردية.",
      "تخضع الإقامة والأسعار لمدى التوافر، وقد تختلف حسب تاريخ السفر الدقيق ضمن الموسم نفسه.",
      "تحدد الحكومة رسوم دخول الحدائق الوطنية ومناطق الحفظ في تنزانيا، وهي عرضة للتغيير دون إشعار مسبق."
    ],
    faq: [
      {
        q: "ما الفرق بين الفئات الثلاث؟",
        a: "ستزورون الأماكن نفسها وتشاهدون الحياة البرية ذاتها في جميع الأحوال. ما يتغير هو أسلوب العناية بكم بين المحطات: يحافظ Wilderness Trail على الراحة والذوق الرفيع، ويمنحكم Wilderness Reserve مساحة أوسع للاسترخاء، بينما يضعكم Wilderness Sovereign في مكان استثنائي حقًا كل ليلة. اختاروا الفئة التي تناسب أسلوبكم في السفر."
      },
      {
        q: "هل سنشاهد الهجرة الكبرى؟",
        a: "يعتمد ذلك على توقيت الرحلة وموقع القطعان، ولا يمكننا أن نعدكم بمشهد محدد في يوم بعينه. ما يضمنه هذا البرنامج هو يومان كاملان في أراضي الأسود والنمور المقيمة على مدار العام — إن كان توقيت الهجرة هو الأهم بالنسبة لكم، فننصح بالتواصل مع مستشاركم قبل الحجز لاختيار أفضل التواريخ معًا."
      },
      {
        q: "كم تتغير الأسعار حسب عدد الأفراد؟",
        a: "تُقسَّم تكاليف المركبة والدليل وبعض التنقلات على المجموعة بأكملها، لذا ينخفض السعر للفرد الواحد عمومًا كلما زاد عدد المسافرين — يمكنكم مراجعة جدول الأسعار الخاص بكل فئة أعلاه بحسب حجم مجموعتكم."
      },
      {
        q: "ما المشمول في السعر، وما الذي يجب ترتيبه بشكل منفصل؟",
        a: "المشمول: جميع رسوم دخول الحدائق الوطنية ومناطق الحفظ، جميع جولات السفاري بسيارة لاندكروزر خاصة رباعية الدفع، الدليل، الوجبات، الإقامة، المياه المعبأة أثناء جولات السفاري، وتنقلات المطار. غير المشمول: رحلات الطيران الدولية، رسوم التأشيرة، التأمين على السفر، الإكراميات، والمصاريف الشخصية كالمشروبات الكحولية."
      },
      {
        q: "هل يمكن تحويلها إلى رحلة أكبر تشمل كينيا أو رواندا أو أيامًا على الشاطئ؟",
        a: "نعم، وهذا ما يفعله كثير من مسافرينا بالفعل. تنسجم هذه الرحلة جيدًا مع سفاري في كينيا أو رحلة تتبع غوريلا في رواندا، كما يمكن ترتيب امتداد شاطئي مباشرة بعد جولة السفاري الأخيرة. يكفي أن تخبرونا بذلك أثناء التخطيط، وسنساعدكم في تصميم الرحلة كاملة."
      },
      {
        q: "هل يناسب هذا البرنامج من يزور تنزانيا للمرة الأولى؟",
        a: "يناسبها تمامًا — هذا هو المسار الذي يختاره معظم زوار تنزانيا لأول مرة بعد أن يفهموا جغرافيتها، لأنه يغطي الحدائق الثلاث التي ترتكز عليها تقريبًا كل رحلات سفاري الدائرة الشمالية، دون الحاجة لضغطها في جدول قصير ومتسرع."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "أروشا",
        description: "الوصول إلى أروشا، والتوجه إلى الفندق.",
        accommodation: "أروشا، حسب الفئة",
        meals: "مبيت وإفطار",
        insiderFact: "تقع أروشا على ارتفاع نحو 1,400 متر — ليلة راحة مريحة قبل التوجه إلى الحدائق، وحيث تقوم معظم شركات السفاري بصيانة مركباتها وتزويدها بين الرحلات.",
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
        title: "حديقة تارانجيري الوطنية",
        description: "التوجه إلى حديقة تارانجيري الوطنية، وجولات سفاري بين قطعان الفيلة وأشجار الباوباب.",
        accommodation: "منطقة تارانجيري، حسب الفئة",
        meals: "الإقامة الكاملة",
        insiderFact: "تحتفظ تارانجيري بواحدة من أعلى كثافات الفيلة في أفريقيا خارج موسم الأمطار، حين تتجمع القطعان على امتداد النهر.",
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
        title: "التوجه إلى سيرينغيتي",
        description: "التوجه إلى سيرينغيتي عبر كاراتو. جولة سفاري بعد الظهر.",
        accommodation: "وسط سيرينغيتي، حسب الفئة",
        meals: "الإقامة الكاملة",
        insiderFact: "تقع كاراتو خارج حدود منطقة حفظ نجورونجورو مباشرة — وهي آخر شريط من الأراضي الزراعية قبل الدخول إلى مرتفعات الفوهة.",
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
        title: "وسط سيرينغيتي",
        description: "يوم كامل من جولات السفاري في سيرينغيتي.",
        accommodation: "وسط سيرينغيتي، حسب الفئة",
        meals: "الإقامة الكاملة",
        insiderFact: "تجذب مياه سيرونيرا المتوفرة على مدار العام أعدادًا مقيمة من القطط الكبيرة، بما في ذلك أسود سيرينغيتي الشهيرة المتسلقة للأشجار فوق الصخور.",
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
        title: "فوهة نجورونجورو",
        description: "النزول إلى فوهة نجورونجورو لجولة سفاري تمتد ليومٍ كامل.",
        accommodation: "منطقة نجورونجورو، حسب الفئة",
        meals: "الإقامة الكاملة",
        insiderFact: "فوهة نجورونجورو نظام بيئي مغلق تبلغ مساحته نحو 260 كيلومترًا مربعًا — لا تغادرها معظم الحيوانات المقيمة أبدًا.",
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
        title: "من موتو وا مبو إلى أروشا",
        description: "زيارة قرية موتو وا مبو الثقافية، ثم التوجه بالسيارة إلى أروشا.",
        accommodation: "أروشا، حسب الفئة",
        meals: "مبيت وإفطار",
        insiderFact: "تُقلع معظم الرحلات الدولية من مطار كليمنجارو مساءً، لذا تتيح هذه الليلة الفاصلة قضاء اليوم الأخير من السفاري دون تعجل.",
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
        title: "المغادرة",
        description: "التوجه إلى المطار، والمغادرة.",
        accommodation: "لا ينطبق",
        meals: "الإفطار",
        insiderFact: "يبعد مطار كليمنجارو الدولي نحو 45 إلى 60 دقيقة بالسيارة عن أروشا."
      }
    ]
  },
  {
    slug: "10-day-northern-circuit",
    name: "سفاري الدائرة الشمالية المطلقة لمدة 10 أيام",
    duration: 10,
    destinations: [
      "serengeti",
      "ngorongoro",
      "tarangire",
      "manyara"
    ],
    type: "big_five_game_drives",
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
    metaDescription: "سفاري خاصة بإشراف دليل مرافق طوال الرحلة، لمدة 10 أيام في الدائرة الشمالية — تارانجيري ومانيارا وسيرينغيتي وفوهة نجورونجورو، الحدائق الوطنية الأربع الرئيسية في تنزانيا. تبدأ الأسعار من 4,800 دولار للشخص الواحد.",
    overview: [
      "عشرة أيام هي المدة التي يستغرقها فعليًا استكشاف الحدائق الأربع الرئيسية في شمال تنزانيا دون تسرع في أي منها — هذه هي الدائرة الكاملة، لا نسختها المختصرة. ستتتبعون الهجرة الكبرى في أوج نشاطها عبر سهول سيرينغيتي، وتنزلون إلى فوهة نجورونجورو وسط أعلى كثافة للحياة البرية في أفريقيا، وتشاهدون قطعان الفيلة تتحرك في تارانجيري تحت أشجار الباوباب العريقة، وتستمتعون بالمياه الضحلة الوردية بفعل طيور الفلامينغو في بحيرة مانيارا وأسودها المتسلقة للأشجار، كل ذلك ضمن المسار نفسه.",
      "يكسر التوقف عند وادي أولدوفاي — الموقع الذي يطلق عليه علماء الحفريات مهد البشرية — إيقاع جولات السفاري بنظرة على حيث بدأت قصة الإنسان نفسها، وتسير كل الأيام بمركبة دفع رباعي خاصة مع دليل ناطق بالإنجليزية خاص بكم، بحيث تحدَّد وتيرة الرحلة بحسب ما تكتشفونه لا وفق جدول مجموعة مشتركة."
    ],
    highlights: [
      "الدائرة الشمالية الكاملة في تنزانيا",
      "الحدائق الرئيسية الأربع جميعها",
      "الهجرة الكبرى في أوج نشاطها",
      "طيور الفلامينغو وأسود بحيرة مانيارا المتسلقة للأشجار",
      "وادي أولدوفاي — مهد البشرية"
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
      "جميع رسوم دخول الحدائق الوطنية",
      "جميع جولات السفاري بسيارة لاندكروزر رباعية الدفع",
      "دليل محترف ناطق بالإنجليزية",
      "جميع الوجبات المحددة",
      "الإقامة وفق برنامج الرحلة",
      "تنقلات المطار"
    ],
    excluded: [
      "رحلات الطيران الدولية",
      "رسوم التأشيرة",
      "التأمين على السفر",
      "الإكراميات"
    ],
    notes: [
      "الأسعار المعروضة هي للشخص الواحد بمشاركة غرفة مزدوجة/توأم؛ تُطبَّق رسوم إضافية عند طلب غرفة فردية.",
      "تخضع الإقامة والأسعار لمدى التوافر، وقد تختلف حسب تاريخ السفر الدقيق ضمن الموسم نفسه.",
      "تحدد الحكومة رسوم دخول الحدائق الوطنية ومناطق الحفظ في تنزانيا، وهي عرضة للتغيير دون إشعار مسبق."
    ],
    itinerary: []
  },
  {
    slug: "10-day-safari-zanzibar",
    name: "سفاري تنزانيا وشاطئ زنجبار لمدة 10 أيام",
    duration: 10,
    destinations: [
      "tarangire",
      "ngorongoro",
      "serengeti",
      "zanzibar"
    ],
    type: "big_five_game_drives",
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
    tagline: "محدَّثة لموسم 2027.",
    metaTitle: "سفاري تنزانيا وشاطئ زنجبار لمدة 10 أيام | EWA Safari Outfitters",
    metaDescription: "ستة أيام بين تارانجيري ونجورونجورو وسيرينغيتي، تليها ثلاث ليالٍ على ساحل نونغوي في زنجبار. 10 أيام و9 ليالٍ. تبدأ الأسعار من 4,413.96 دولارًا للشخص الواحد.",
    overview: [
      "تنقسم الأيام العشرة بوضوح إلى نوعين مختلفين من التجربة، يُمنح كل منهما وقتًا كافيًا للاستقرار الحقيقي فيه بدلًا من تذوقه عابرًا. تمتد الأيام الستة الأولى شمالًا عبر الدائرة الكلاسيكية في تنزانيا — تارانجيري، ومرتفعات نجورونجورو، وسيرينغيتي — وكل حديقة متمايزة عن الأخرى بما يكفي لتتوقف كلمة \"سفاري\" عن كونها فكرة عامة واحدة وتصبح ثلاثة أماكن محددة ومتمايزة بوضوح. أما الليالي الثلاث الأخيرة فلا تطلب منكم شيئًا على الإطلاق: ساحل نونغوي في زنجبار، الذي تصلونه برحلة طيران قصيرة بدلًا من يوم آخر على الطريق.",
      "تفتتح تارانجيري الرحلة بنصف يوم حقيقي خاص بها، إضافة إلى توقف في موتو وا مبو وزيارة لمجتمع الماساي مدمجة في المسار لا مقدَّمة كإضافة جانبية — موطن واحدة من أكبر تجمعات الفيلة في شرق أفريقيا، تتركز على امتداد النهر في الموسم الجاف. تحظى فوهة نجورونجورو بيوم كامل بدلًا من توقف صباحي متسرع: كالديرا بركانية منهارة تبلغ مساحتها نحو 260 كيلومترًا مربعًا، بجدران شديدة الانحدار بحيث لا تغادر معظم الكائنات التي تعيش بداخلها أبدًا، وهو من أكثر أيام مشاهدة الحياة البرية كثافة في المسار بأكمله. يلي ذلك يومان كاملان في أراضي الحيوانات المفترسة المقيمة في سيرينغيتي، قبل رحلة طيران بانورامية — تمر عبر أروشا — تستبدل المركبة بالمياه المفتوحة وثلاث ليالٍ غير مبرمجة على رمال نونغوي البيضاء."
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
        sovereign: 10077.50
      },
      {
        pax: 6,
        trail: 4413.96,
        reserve: 6106.46,
        sovereign: 9990.21
      }
    ],
    highlights: [
      "قطعان فيلة تارانجيري تحت أشجار الباوباب العريقة، مع نصف يوم مخصص بدلًا من مجرد المرور",
      "زيارة حقيقية لمجتمع الماساي وتوقف ثقافي في موتو وا مبو في الطريق إلى مرتفعات نجورونجورو",
      "يوم كامل داخل فوهة نجورونجورو، إحدى أعلى كثافات الحياة البرية على وجه الأرض",
      "يومان كاملان في أراضي الحيوانات المفترسة الأولى في سيرينغيتي، تصلونها بالتقدم عبر المسار لا بالعودة إلى الوراء",
      "رحلة طيران بانورامية من سيرينغيتي إلى زنجبار، تستبدل مرحلة برية طويلة أخيرة بوقت في الجو وإطلالة على المحيط",
      "ثلاث ليالٍ على ساحل نونغوي في زنجبار، شاملة كليًا، لإنهاء الرحلة باسترخاء تام"
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
      "جميع رسوم دخول الحدائق الوطنية ومناطق الحفظ",
      "جميع جولات السفاري بمركبة دفع رباعي خاصة",
      "دليل محترف طوال رحلة السفاري",
      "رحلة الطيران سيرينغيتي–أروشا–زنجبار",
      "جميع الوجبات المحددة",
      "الإقامة وفق برنامج الرحلة",
      "التنقلات من وإلى المطار وبين المنشآت"
    ],
    includedCategorized: {
      transfers: [
        "رحلة الطيران سيرينغيتي–أروشا–زنجبار",
        "التنقلات من وإلى المطار وبين المنشآت"
      ],
      accommodationMeals: [
        "جميع الوجبات المحددة",
        "الإقامة وفق برنامج الرحلة"
      ],
      guidingGameDrives: [
        "جميع رسوم دخول الحدائق الوطنية ومناطق الحفظ",
        "جميع جولات السفاري بمركبة دفع رباعي خاصة",
        "دليل محترف طوال رحلة السفاري"
      ]
    },
    excluded: [
      "رحلات الطيران الدولية",
      "رسوم التأشيرة",
      "التأمين على السفر",
      "الإكراميات",
      "الإضافات الاختيارية في زنجبار"
    ],
    excludedCategorized: [
      "رحلات الطيران الدولية",
      "رسوم التأشيرة",
      "التأمين على السفر",
      "الإكراميات",
      "الإضافات الاختيارية في زنجبار"
    ],
    notes: [
      "الأسعار المعروضة هي للشخص الواحد بمشاركة غرفة مزدوجة/توأم؛ تُطبَّق رسوم إضافية عند طلب غرفة فردية.",
      "هذه رحلة سفاري خاصة بالكامل في جميع أحجام المجموعات المعروضة — مركبتكم ودليلكم الخاص طوال الرحلة. ما يتغير مع حجم المجموعة هو عدد الأشخاص الذين تُقسَّم عليهم التكلفة الخاصة نفسها.",
      "إضافات اختيارية في زنجبار (بسعر منفصل، متاحة في اليومين 8-9): رحلة غوص أو غطس عند الشعاب المرجانية، رحلة قارب داو عند الغروب، جولة سير تاريخية في مدينة ستون تاون، رحلة إلى مزرعة توابل، رحلة صيد في أعالي البحار.",
      "تخضع الإقامة والأسعار لمدى التوافر، وقد تختلف حسب تاريخ السفر الدقيق ضمن الموسم نفسه."
    ],
    faq: [
      {
        q: "هل تتبع الفئات الثلاث المسار والجدول نفسه؟",
        a: "نعم — الرحلة ووتيرتها وأنشطتها متطابقة عبر Wilderness Trail وWilderness Reserve وWilderness Sovereign. ما يتغير هو المخيمات والنُزل ومستوى الراحة، لا الرحلة نفسها."
      },
      {
        q: "كيف تبدو زيارة مجتمع الماساي فعليًا؟",
        a: "إنها زيارة حقيقية في اليوم الثالث، أثناء الانتقال من تارانجيري إلى مرتفعات نجورونجورو، تقترن بوقت في بلدة السوق موتو وا مبو — مدمجة في المسار نفسه لا مقدَّمة كإضافة مدفوعة."
      },
      {
        q: "لماذا نطير من سيرينغيتي إلى زنجبار بدلًا من العودة بالسيارة إلى أروشا؟",
        a: "العودة بالكامل عبر الطريق البري تعني إعادة قطع يوم ونصف من الطريق الذي عبرتموه بالفعل. أما الطيران، بتوقف عبر أروشا، فيوصلكم إلى الساحل في اليوم نفسه دون العودة عبر المسار."
      },
      {
        q: "هل يمكن تمديد الرحلة أو تقصيرها؟",
        a: "يمنح الهيكل الأساسي كل مرحلة وقتها الكافي — يفقد سيرينغيتي والفوهة قيمتهما الحقيقية إذا تم التسرع فيهما. من السهل إضافة امتدادات (ليلة إضافية في زنجبار، إضافة ستون تاون)؛ اسألوا مستشاركم عن التقصير إن كانت لديكم قيود زمنية صارمة."
      },
      {
        q: "ما المشمول في السعر، وما غير المشمول؟",
        a: "المشمول: جميع رسوم الحدائق ومناطق الحفظ، المركبة والدليل والوقود طوال السفاري، رحلة الطيران سيرينغيتي–أروشا–زنجبار، جميع الأنشطة المذكورة، والإقامة المذكورة لكل الليالي التسع. غير المشمول: رحلات الطيران الدولية، رسوم التأشيرة، التأمين على السفر، الإكراميات، والإضافات الاختيارية في زنجبار."
      },
      {
        q: "كم تتغير الأسعار حسب حجم المجموعة؟",
        a: "تُقسَّم تكاليف المركبة والدليل والديزل على المجموعة، لذا ينخفض السعر للفرد الواحد كلما زاد عدد المسافرين — راجعوا جدول الأسعار أعلاه."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول إلى أروشا",
        description: "الهبوط في مطار كليمنجارو الدولي والتوجه بشكل خاص إلى أروشا للمبيت قبل التوجه غدًا إلى البرية.",
        accommodation: "أروشا، حسب الفئة",
        meals: "مبيت وإفطار",
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
        title: "من أروشا إلى حديقة تارانجيري الوطنية",
        description: "الطريق جنوبًا إلى تارانجيري، حيث تتجمع بعض أكبر قطعان الفيلة في تنزانيا تحت أشجار الباوباب العريقة — من بين أعلى كثافات الفيلة في أفريقيا خارج موسم الأمطار، حين تتركز القطعان على امتداد النهر.",
        accommodation: "تارانجيري، حسب الفئة",
        meals: "شامل بالكامل",
        insiderFact: "تحتفظ تارانجيري بواحدة من أعلى كثافات الفيلة في أفريقيا خارج موسم الأمطار، حين تتجمع القطعان على امتداد النهر.",
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
        title: "نصف يوم في تارانجيري، ومجتمع الماساي، وموتو وا مبو",
        description: "نصف يوم أخير في تارانجيري قبل التوجه إلى المرتفعات، يتخلله زيارة حقيقية لمجتمع الماساي وتوقف في بلدة السوق موتو وا مبو — وقت ثقافي حقيقي مدمج في المسار، لا مضغوط كفكرة لاحقة.",
        accommodation: "مرتفعات نجورونجورو، حسب الفئة",
        meals: "شامل بالكامل",
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
        title: "جولة يوم كامل في فوهة نجورونجورو",
        description: "يوم كامل للنزول إلى فوهة نجورونجورو — نظام بيئي مغلق تبلغ مساحته نحو 260 كيلومترًا مربعًا، لا تغادره معظم الحيوانات المقيمة أبدًا، وأحد الأماكن الأكثر موثوقية على وجه الأرض لمشاهدة الحيوانات الخمس الكبرى في يوم واحد حقيقي.",
        accommodation: "مرتفعات نجورونجورو، حسب الفئة",
        meals: "شامل بالكامل",
        insiderFact: "فوهة نجورونجورو نظام بيئي مغلق تبلغ مساحته نحو 260 كيلومترًا مربعًا — لا تغادرها معظم الحيوانات المقيمة أبدًا، بما في ذلك بعض أكثر مشاهدات وحيد القرن الأسود موثوقية في المنطقة.",
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
        title: "من كاراتو إلى سيرينغيتي",
        description: "الطريق إلى سيرينغيتي نفسها، بتوقف عند وادي أولدوفاي — أحد أهم مواقع علم الإنسان القديم على وجه الأرض — قبل مواصلة الطريق إلى المخيم.",
        accommodation: "وسط سيرينغيتي، حسب الفئة",
        meals: "شامل بالكامل",
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
        title: "يوم كامل في حديقة سيرينغيتي الوطنية",
        description: "يوم كامل من جولات السفاري الموجهة عبر أراضي الحيوانات المفترسة الأولى في سيرينغيتي — الأسد والنمر والفهد كلها مشاهدات واقعية هنا على مدار العام.",
        accommodation: "وسط سيرينغيتي، حسب الفئة",
        meals: "شامل بالكامل",
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
        title: "الطيران إلى زنجبار، عبر أروشا",
        description: "رحلة طيران بانورامية صباحية تمر عبر أروشا قبل مواصلة الطريق إلى زنجبار — دون تنقل بري طويل ثانٍ يُضاف فوق السفاري. التوجه إلى نونغوي على الساحل الشمالي للجزيرة عند الوصول.",
        accommodation: "نونغوي، زنجبار، حسب الفئة",
        meals: "شامل بالكامل",
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
        title: "نونغوي، زنجبار",
        description: "يوم حر لملئه كما يحلو لكم: رحلة غوص أو غطس عند الشعاب المرجانية، رحلة قارب داو عند الغروب، جولة تاريخية في ستون تاون، رحلة إلى مزرعة توابل، أو ببساطة الشاطئ. تقع نونغوي عند الطرف الشمالي لزنجبار، وتتأثر بشكل محدود بالمد والجزر الذي يحاصر السباحين على الساحل الشرقي عند انخفاض المياه.",
        accommodation: "نونغوي، زنجبار، حسب الفئة",
        meals: "شامل بالكامل",
        insiderFact: "تقع نونغوي عند الطرف الشمالي لزنجبار، وتتأثر بشكل محدود بالمد والجزر الذي يحاصر السباحين على الساحل الشرقي عند انخفاض المياه.",
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
        title: "نونغوي، زنجبار",
        description: "يوم أخير كامل من وقت الفراغ على ساحل زنجبار الأبيض — غوص عند الشعاب المرجانية، أو إبحار بقارب داو عند الغروب، أو ببساطة عدم فعل شيء على الإطلاق.",
        accommodation: "نونغوي، زنجبار، حسب الفئة",
        meals: "شامل بالكامل",
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
        title: "المغادرة",
        description: "تنقل خاص من نونغوي إلى مطار زنجبار لمواصلة الرحلة أو المغادرة.",
        accommodation: "لا ينطبق",
        meals: "الإفطار"
      }
    ]
  },
  {
    slug: "5-day-serengeti-fly-in",
    name: "سفاري سيرينغيتي بالطيران لمدة 5 أيام",
    duration: 5,
    destinations: [
      "serengeti",
      "ngorongoro",
      "manyara"
    ],
    type: "big_five_game_drives",
    bestMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
    metaDescription: "تخطَّوا يومين من التنقل البري وطيروا مباشرة إلى وسط سيرينغيتي في سفاري خاصة مدتها 5 أيام، مع يومين كاملين بين الأسود والفهود وفهود الصيد. تبدأ الأسعار من 2,475 دولارًا للشخص الواحد.",
    overview: [
      "تقضي معظم رحلات سفاري سيرينغيتي يومين كاملين من القيادة البرية فقط للوصول إلى الحديقة. أما هذه الرحلة فتتخطى ذلك تمامًا: رحلة طيران خاصة تنقلكم من أروشا مباشرة إلى وسط سيرينغيتي، بحيث تبدأ أول جولة سفاري لكم في العصر نفسه الذي تصلون فيه. يليها يومان كاملان في تلك الأراضي الأولى للحيوانات المفترسة — فالأسد والنمر والفهد مقيمون هنا على مدار العام، لا زوار موسميون — قبل نزول موجَّه إلى فوهة نجورونجورو، أكبر كالديرا سليمة في العالم، لتختتم مشاهدة الحياة البرية.",
      "تختتم الرحلة بجولة سفاري صباحية أخيرة عبر بحيرة مانيارا، المحصورة بين هضبة الصدع الأفريقي وبحيرتها القلوية، قبل رحلة العودة إلى الوطن. خمسة أيام، وفئتا إقامة من مخيمات ريزيرف إلى فخامة سوفرين، وقلّما تُقضى دقيقة منها في مركبة فقط للوصول إلى مكان ما."
    ],
    highlights: [
      "الطيران مباشرة من أروشا إلى قلب وسط سيرينغيتي — دون رحلة برية تمتد ليومين",
      "يومان كاملان في أراضي الحيوانات المفترسة الأولى: الأسد والنمر والفهد على مدار العام",
      "نزول موجَّه إلى فوهة نجورونجورو — أكبر كالديرا سليمة في العالم",
      "جولة سفاري في بحيرة مانيارا صباح اليوم الأخير قبل المغادرة",
      "فئتا إقامة من مخيمات ريزيرف إلى فخامة سوفرين"
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
      "رحلة طيران خاصة أروشا–سيرينغيتي (ذهابًا وإيابًا)",
      "جميع رسوم دخول الحدائق ومناطق الحفظ",
      "جميع جولات السفاري بمركبة دفع رباعي خاصة",
      "دليل محترف طوال الرحلة",
      "جميع الوجبات المحددة",
      "الإقامة وفق برنامج الرحلة",
      "التنقلات من وإلى المطار وبين المخيمات"
    ],
    includedCategorized: {
      transfers: [
        "رحلة طيران خاصة أروشا–سيرينغيتي (ذهابًا وإيابًا)",
        "التنقلات من وإلى المطار وبين المخيمات"
      ],
      accommodationMeals: [
        "جميع الوجبات المحددة",
        "الإقامة وفق برنامج الرحلة"
      ],
      guidingGameDrives: [
        "جميع رسوم دخول الحدائق ومناطق الحفظ",
        "جميع جولات السفاري بمركبة دفع رباعي خاصة",
        "دليل محترف طوال الرحلة"
      ]
    },
    excluded: [
      "رحلات الطيران الدولية",
      "تأشيرة دخول تنزانيا (نحو 50 دولارًا أمريكيًا لمعظم الجنسيات)",
      "التأمين على السفر",
      "الإكراميات والبقشيش",
      "سفاري المنطاد بالهواء الساخن (إضافة اختيارية بسعر يقارب 550 دولارًا للشخص)"
    ],
    excludedCategorized: [
      "رحلات الطيران الدولية",
      "تأشيرة دخول تنزانيا (نحو 50 دولارًا أمريكيًا لمعظم الجنسيات)",
      "التأمين على السفر",
      "الإكراميات والبقشيش",
      "سفاري المنطاد بالهواء الساخن (إضافة اختيارية بسعر يقارب 550 دولارًا للشخص)",
      "الأغراض الشخصية والغسيل ورسوم الهاتف"
    ],
    notes: [
      "الأسعار المعروضة هي للشخص الواحد بمشاركة غرفة مزدوجة/توأم؛ تُطبَّق رسوم إضافية عند طلب غرفة فردية.",
      "تخضع الإقامة والأسعار لمدى التوافر، وقد تختلف حسب تاريخ السفر الدقيق.",
      "تحدد الحكومة رسوم دخول الحدائق الوطنية ومناطق الحفظ في تنزانيا، وهي عرضة للتغيير دون إشعار مسبق.",
      "يلزم دفع عربون بنسبة 30% لتأكيد الحجز؛ ويُستحق باقي المبلغ قبل 60 يومًا من المغادرة."
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول إلى أروشا",
        description: "الوصول إلى أروشا والتوجه إلى النُزل للمبيت قبل رحلة الطيران المبكرة إلى سيرينغيتي.",
        accommodation: "نُزل أروشا",
        meals: "العشاء والإفطار",
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
        title: "الطيران إلى وسط سيرينغيتي",
        description: "رحلة طيران خاصة مبكرة تنقلكم مباشرة من أروشا إلى وسط سيرينغيتي — ساعتان من القيادة البرية تتحولان إلى 45 دقيقة في الجو. تبدأ أول جولة سفاري فور الهبوط، مع امتداد سهول سيرينغيتي إلى كل أفق وضوء العصر الذهبي يلوّن كل شيء.",
        accommodation: "مخيم سيرينغيتي المخيّم",
        meals: "الإقامة الكاملة",
        insiderFact: "الطيران إلى سيرينغيتي يعني الوصول بطاقة متجددة لا بغبار الطريق — غالبًا ما تنتج جولة سفاري العصر الأولى أفضل مشاهدات الرحلة.",
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
        title: "يوم كامل في سيرينغيتي",
        description: "يوم كامل من جولات السفاري عبر السهول المفتوحة لسيرينغيتي. يحتفظ وسط سيرينغيتي بأعداد مقيمة من الأسود والنمور والفهود والفيلة والجاموس على مدار العام — إنها واحدة من أكثر أراضي الحيوانات المفترسة موثوقية في أفريقيا بصرف النظر عن توقيت الهجرة. يخطط دليلكم لجولات السفاري حول فترتي النشاط الذروة صباحًا وأواخر العصر.",
        accommodation: "مخيم سيرينغيتي المخيّم",
        meals: "الإقامة الكاملة",
        insiderFact: "يُطلق على وادي سيرونيرا في وسط سيرينغيتي أحيانًا اسم \"عاصمة الحيوانات المفترسة\" في أفريقيا — فخور الأسود المقيمة هنا من بين الأكثر دراسة في العالم.",
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
        title: "فوهة نجورونجورو وكاراتو",
        description: "التوجه جنوبًا من سيرينغيتي والنزول إلى فوهة نجورونجورو — نظام بيئي مغلق تبلغ مساحته 260 كيلومترًا مربعًا وأكبر كالديرا سليمة في العالم. يوم كامل من جولات السفاري وسط أكثف تجمعات الحياة البرية في أفريقيا: الحيوانات الخمس الكبرى جميعها مقيمة، بما في ذلك عدد صحي من وحيد القرن الأسود يجعل نجورونجورو أحد آخر الأماكن الموثوقة في تنزانيا لمشاهدته. اختتام اليوم في نُزلكم بكاراتو، فوق حافة الفوهة مباشرة.",
        accommodation: "نُزل كاراتو",
        meals: "الإقامة الكاملة",
        insiderFact: "نجورونجورو من الأماكن القليلة في أفريقيا التي يمكن فيها مشاهدة وحيد القرن الأسود بشكل موثوق في جولة سفاري ليوم واحد — يعيش نحو 25 فردًا داخل أرضية الفوهة.",
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
        title: "بحيرة مانيارا والعودة إلى أروشا",
        description: "جولة سفاري صباحية عبر حديقة بحيرة مانيارا الوطنية — المحصورة بين هضبة الصدع الأفريقي العظيم وبحيرتها القلوية، تجمع الحديقة الغابة والأحراج والمياه المفتوحة في مسار واحد استثنائي. تشتهر بأسودها المتسلقة للأشجار وأكثر من 400 نوع من الطيور. مواصلة الطريق إلى أروشا لرحلة العودة إلى الوطن.",
        accommodation: "لا ينطبق",
        meals: "الإفطار والغداء"
      }
    ]
  },
  {
    slug: "kilimanjaro-machame-7day",
    name: "مسار ماشامي في كليمنجارو — 7 أيام",
    duration: 7,
    destinations: [
      "arusha"
    ],
    type: "mountain_trekking",
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
    metaDescription: "تسلقوا كليمنجارو عبر مسار ماشامي الخلاب لمدة 7 أيام — أعلى معدل نجاح بين جميع المسارات، مع أدلاء جبليين ذوي خبرة وحمالين وتجهيزات كاملة. تبدأ الأسعار من 2,100 دولار للشخص الواحد.",
    overview: [
      "غالبًا ما يُطلق على مسار ماشامي اسم \"طريق الويسكي\" لمساره المتعرج عبر الغابة المطيرة والمروج العالية والصحراء الألبية. يُعد على نطاق واسع الطريق الأكثر جمالًا للصعود إلى كليمنجارو، وأحد أسباب تسجيل هذا المسار لأحد أعلى معدلات النجاح في الوصول للقمة على الجبل. تمنح الأيام السبعة أجسادكم الوقت الذي تحتاجه، بمرور عبر برج لافا في يوم تأقلم بأسلوب \"اصعد عاليًا، نم منخفضًا\" يُحدث فرقًا ملموسًا في ليلة القمة.",
      "تحظون بدعم كامل طوال الطريق من مرشدي جبال ذوي خبرة، وحمّال مخصص لكل متسلق، وطاقم طهي ومخيم، ومعدات إنقاذ كاملة تُحمَل كإجراء معتاد. هذا تسلق بنظام التخييم من الليلة الأولى حتى الأخيرة، مع تولي كل الأمور اللوجستية عدا مجهودكم الشخصي في السير."
    ],
    highlights: [
      "أكثر مسارات كليمنجارو جمالًا",
      "أعلى معدل نجاح بين جميع المسارات",
      "الوصول للقمة عبر تأقلم برج لافا",
      "مرشدو جبال وحمّالون ذوو خبرة",
      "معدات كاملة ودعم أمان"
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
      "رسوم الحديقة ورسوم التخييم",
      "مرشد جبال ذو خبرة",
      "حمّالون (واحد لكل متسلق بالإضافة إلى المجموعة)",
      "طاقم طهي ومخيم",
      "جميع الوجبات على الجبل",
      "خيمة نوم، خيمة طعام",
      "معدات إنقاذ"
    ],
    excluded: [
      "رحلات الطيران الدولية",
      "معدات التسلق الشخصية",
      "التأمين على السفر",
      "الإكراميات",
      "الفندق قبل/بعد الرحلة"
    ],
    notes: [
      "تُحسب الأسعار للمتسلق الواحد على أساس التخييم؛ لا تُطبَّق أي رسوم إضافية للغرفة الفردية.",
      "معدات التسلق الشخصية (الأحذية، الطبقات الدافئة، كيس النوم) غير مشمولة — تتوفر قائمة تحضير عند الطلب.",
      "قد تختلف الأسعار والتوافر حسب تاريخ السفر الدقيق ضمن موسم التسلق.",
      "تحدد هيئة الحدائق الوطنية التنزانية (TANAPA) رسوم حديقة كليمنجارو الوطنية، وهي عرضة للتغيير دون إشعار مسبق."
    ],
    itinerary: []
  },
  {
    slug: "7-day-southern-circuit",
    name: "سفاري 7 أيام في الدائرة الجنوبية — رواها ونييريري",
    duration: 7,
    destinations: [
      "nyerere",
      "ruaha"
    ],
    type: "big_five_game_drives",
    bestMonths: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
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
    metaTitle: "سفاري 7 أيام في الدائرة الجنوبية: نييريري ورواها",
    metaDescription: "سفاري خاصة في الدائرة الجنوبية عبر نييريري ورواها — أقل مناطق البرية ازدحامًا في أفريقيا. فئتان، بالطريق البري أو بالطيران، تبدأ الأسعار من 4,320 دولارًا للشخص الواحد.",
    overview: [
      "تشهد الدائرة الجنوبية في تنزانيا جزءًا يسيرًا من الحركة التي يشهدها الشمال — تغطي نييريري ورواها معًا مساحة 74,826 كيلومترًا مربعًا (28,891 ميلًا مربعًا) من البرية المحمية، وهي مساحة تفوق ما تملكه معظم الدول مجتمعة، وتكاد تخلو من الازدحام تمامًا. يربط هذا البرنامج بين الحديقتين بليلة في دار السلام لتمنحكم راحة عند الوصول، ثم يمنحكم خيارًا في طريقة التنقل خلال بقية الرحلة.",
      "7 أيام / 6 ليالٍ — ليلة واحدة في دار السلام · ليلتان في حديقة نييريري الوطنية · 3 ليالٍ في حديقة رواها الوطنية.",
      "متاحة بفئتين، لكل منهما طابعها الخاص بقدر سعرها الخاص: Wilderness Reserve هي الرحلة البرية — مركبة ودليل خاصان يتتبعان الأرض الفعلية بين الحديقتين. أما Wilderness Sovereign فهي نسخة الطيران — كل مرحلة عبر الجو، لتستبدل وقت التنقل بساعات أكثر في المخيم ومستوى راحة أعلى بوضوح طوال الرحلة."
    ],
    highlights: [
      "نييريري ورواها معًا — 74,826 كيلومترًا مربعًا (28,891 ميلًا مربعًا) من البرية المحمية، مساحة تفوق ما تملكه معظم الدول مجتمعة",
      "واحدة من أكبر التجمعات المتبقية للكلاب البرية الأفريقية في القارة، في نييريري",
      "تحتضن رواها ما يُقدَّر بنحو 10% من أسود العالم المتبقية",
      "جولات سفاري بالقارب على نهر روفيجي — ميزة فريدة تختص بها نييريري ولا توجد في أي مكان آخر بالدائرة الجنوبية",
      "سفاري سيرًا على الأقدام في نييريري، بقيادة حارس مسلح",
      "طريقتان للسفر: رحلة برية على Wilderness Reserve، أو رحلة طيران كاملة على Wilderness Sovereign",
      "من أقل مناطق البرية المحمية ازدحامًا المتبقية في شرق أفريقيا"
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
        reserve: 5145.00,
        sovereign: 7093.75
      },
      {
        pax: 3,
        reserve: 4732.50,
        sovereign: 6931.25
      },
      {
        pax: 4,
        reserve: 4526.25,
        sovereign: 6850.00
      },
      {
        pax: 5,
        reserve: 4402.50,
        sovereign: 6801.25
      },
      {
        pax: 6,
        reserve: 4320.00,
        sovereign: 6768.75
      }
    ],
    included: [
      "جميع رسوم الحدائق والامتيازات",
      "الإقامة الكاملة طوال الرحلة",
      "جميع جولات السفاري والأنشطة المذكورة",
      "رحلة (رحلات) الطيران الداخلية المحددة حسب الفئة",
      "تنقلات المطار"
    ],
    includedCategorized: {
      transfers: [
        "تنقلات المطار",
        "رحلة (رحلات) الطيران الداخلية المحددة حسب الفئة"
      ],
      accommodationMeals: [
        "الإقامة الكاملة طوال الرحلة",
        "الإقامة وفق برنامج الرحلة"
      ],
      guidingGameDrives: [
        "جميع رسوم الحدائق والامتيازات",
        "جميع جولات السفاري والأنشطة المذكورة",
        "دليل محترف طوال الرحلة"
      ]
    },
    excluded: [
      "رحلات الطيران الدولية إلى دار السلام",
      "التأشيرات",
      "التأمين على السفر",
      "الإكراميات",
      "المصاريف الشخصية"
    ],
    excludedCategorized: [
      "رحلات الطيران الدولية إلى دار السلام",
      "التأشيرات",
      "التأمين على السفر",
      "الإكراميات",
      "المصاريف الشخصية"
    ],
    notes: [
      "الأسعار المعروضة هي للشخص الواحد بمشاركة غرفة مزدوجة/توأم؛ تُطبَّق رسوم إضافية عند طلب غرفة فردية.",
      "لا يوجد طريق بري عملي بين نييريري ورواها، لذا تطير الفئتان كلتاهما هذه المرحلة الداخلية.",
      "تخضع الإقامة والأسعار لمدى التوافر، وقد تختلف حسب تاريخ السفر الدقيق ضمن الموسم نفسه.",
      "تحدد الحكومة رسوم دخول الحدائق الوطنية ومناطق الحفظ في تنزانيا، وهي عرضة للتغيير دون إشعار مسبق."
    ],
    faq: [
      {
        q: "ما الفرق بين الفئتين؟",
        a: "الفرق الأساسي هو طريقة التنقل ومكان المبيت. تقود Wilderness Reserve مرحلة دار السلام–نييريري وتقيم في مخيمات بسيطة وجيدة الموقع؛ بينما تطير Wilderness Sovereign كل مرحلة، بما فيها التنقل الأول، وتضعكم في منشآت أرقى طوال الرحلة. تزور الفئتان الحديقتين نفسيهما، لعدد الليالي نفسه، مع جولات السفاري والأنشطة نفسها."
      },
      {
        q: "لماذا تُطار مرحلة نييريري–رواها في كلتا الفئتين، حتى فئة السفاري البري؟",
        a: "لا يوجد طريق بري عملي بين الحديقتين — لا تسمح الجغرافيا ببساطة بذلك ضمن جدول سبعة أيام. تقود Wilderness Reserve في كل مكان ممكن وتطير فقط عند الضرورة؛ بينما تطير Wilderness Sovereign طوال الرحلة تحقيقًا للاتساق والراحة."
      },
      {
        q: "ما مدى الجهد البدني الذي يتطلبه هذا البرنامج؟",
        a: "جولات السفاري تتم جلوسًا ولا تتطلب لياقة خاصة. أما جولات السفاري سيرًا على الأقدام الاختيارية في نييريري فتسير على مسارات ثابتة بوتيرة معتدلة، بقيادة حارس مسلح — يتمكن البالغون ذوو اللياقة المعقولة من القيام بها براحة، لكنها ليست مشيًا تقنيًا صعبًا."
      },
      {
        q: "ما أفضل وقت في السنة لهذه الرحلة؟",
        a: "يوفر الموسم الجاف (تقريبًا من يونيو إلى أكتوبر) أوضح مشاهدة للحياة البرية في كلتا الحديقتين، مع أحراش أقل كثافة وتركز الحياة البرية حول مصادر المياه الدائمة. تظل الحديقتان متاحتين خارج هذه الفترة أيضًا، وإن كانت احتمالية أمطار بعد الظهر أعلى."
      },
      {
        q: "هل سنشاهد الحيوانات الخمس الكبرى؟",
        a: "تحتضن الحديقتان أعدادًا صحية من الأسود والنمور والفيلة والجاموس؛ أما مشاهدات وحيد القرن فنادرة في هذه المنطقة مقارنة بمنطقة نجورونجورو، لذا يُفضَّل النظر إلى هذا البرنامج من زاوية الكلاب البرية وأفراس النهر في نييريري وكثافة الأسود الاستثنائية في رواها، لا كقائمة تحقق للحيوانات الخمس الكبرى."
      },
      {
        q: "كم تتغير الأسعار حسب حجم المجموعة؟",
        a: "تُقسَّم تكاليف المركبة والدليل والديزل على المجموعة في Wilderness Reserve، وتُقسَّم عدة تكاليف ثابتة بالمثل في Wilderness Sovereign، لذا ينخفض السعر للفرد الواحد كلما زاد عدد المسافرين — راجعوا جدول الأسعار أعلاه للأرقام الدقيقة."
      },
      {
        q: "ما المشمول في السعر، وما غير المشمول؟",
        a: "المشمول: جميع رسوم الحدائق والامتيازات، الإقامة الكاملة طوال الرحلة، جميع جولات السفاري والأنشطة المذكورة، رحلة (رحلات) الطيران الداخلية المحددة حسب الفئة، وتنقلات المطار. غير المشمول: رحلات الطيران الدولية إلى دار السلام، التأشيرات، التأمين على السفر، الإكراميات، والمصاريف الشخصية."
      },
      {
        q: "هل تناسب هذه الرحلة المسافر الفردي؟",
        a: "نعم، وإن كانت الأسعار أعلاه محسوبة للشخص الواحد بمشاركة غرفة؛ سيتحمل المسافر الفردي رسومًا إضافية على الإقامة في أي من الفئتين. اسألوا مستشاركم عن سعر المسافر الفردي."
      },
      {
        q: "هل يمكن دمج هذه الرحلة مع حدائق أخرى أو تمديدها؟",
        a: "نعم — تنسجم الدائرة الجنوبية بشكل طبيعي مع امتداد شاطئي في زنجبار، أو يمكن دمجها مع سفاري في الدائرة الشمالية لمن يرغب في رؤية نصفي تنزانيا في رحلة واحدة. اسألوا مستشاركم عن تمديد هذا البرنامج أو دمجه."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول إلى دار السلام",
        description: "الوصول إلى دار السلام، والتنقل الخاص من المطار.",
        accommodation: "دار السلام، حسب الفئة",
        meals: "العشاء",
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
        title: "الدخول إلى حديقة نييريري الوطنية",
        description: "ريزيرف: التنقل بريًا من دار السلام إلى حديقة نييريري الوطنية (نحو 4 ساعات بالطريق). سوفرين: الطيران من دار السلام إلى نييريري. جولة سفاري بالقارب عند الوصول لكلتا الفئتين.",
        accommodation: "نييريري، حسب الفئة",
        meals: "الإقامة الكاملة",
        insiderFact: "نييريري (المعروفة سابقًا باسم محمية سيلوس) هي أكبر منطقة برية محمية في أفريقيا بمساحة 54,600 كيلومتر مربع (21,081 ميلًا مربعًا) — أي ما يقارب مساحة سويسرا.",
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
        title: "يوم كامل في نييريري",
        description: "يوم كامل في نييريري — جولة سفاري بالمركبة وسفاري سيرًا على الأقدام.",
        accommodation: "نييريري، حسب الفئة",
        meals: "الإقامة الكاملة",
        insiderFact: "تحتضن نييريري واحدة من أكبر التجمعات المتبقية للكلاب البرية الأفريقية، إلى جانب أعداد قوية من أفراس النهر على امتداد نهر روفيجي.",
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
        title: "الطيران إلى حديقة رواها الوطنية",
        description: "الطيران من نييريري إلى حديقة رواها الوطنية.",
        accommodation: "رواها، حسب الفئة",
        meals: "الإقامة الكاملة",
        insiderFact: "رواها هي أكبر حديقة وطنية في تنزانيا بمساحة 20,226 كيلومترًا مربعًا (7,809 أميال مربعة)، وتحتضن ما يُقدَّر بنحو 10% من أسود العالم المتبقية.",
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
        title: "رواها، يوم كامل",
        description: "يوم كامل في رواها — جولات سفاري.",
        accommodation: "رواها، حسب الفئة",
        meals: "الإقامة الكاملة",
        insiderFact: "يشكّل نهر روها الكبير محور مشاهدة الحياة البرية على طول الحافة الجنوبية الشرقية للحديقة — تتحرك هنا قطعان كبيرة من الفيلة والجاموس.",
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
        title: "رواها، يوم كامل",
        description: "يوم كامل في رواها — جولات سفاري.",
        accommodation: "رواها، حسب الفئة",
        meals: "الإقامة الكاملة",
        insiderFact: "تحظى رواها أيضًا ببعض أفضل فرص مشاهدة ظباء السيبل والرُوان في تنزانيا.",
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
        title: "المغادرة",
        description: "الطيران من رواها إلى دار السلام. المغادرة.",
        accommodation: "لا ينطبق",
        meals: "الإفطار"
      }
    ]
  },
  {
    slug: "5-days-highlights-safari",
    name: "سفاري أبرز المعالم لمدة 5 أيام",
    duration: 5,
    destinations: [
      "serengeti",
      "ngorongoro"
    ],
    type: "big_five_game_drives",
    bestMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
    metaTitle: "سفاري خاصة بالطيران لمدة 5 أيام: سيرينغيتي ونجورونجورو | تبدأ من 3,337 دولارًا للشخص",
    metaDescription: "سفاري خاصة بالطيران مدتها 5 أيام بمرافقة دليل كامل — من سيرينغيتي إلى فوهة نجورونجورو، بثلاث فئات إقامة من Wilderness Trail إلى Wilderness Sovereign. تبدأ الأسعار من 3,337 دولارًا للشخص الواحد.",
    overview: [
      "خمسة أيام كافية لفهم لماذا يشكّل سيرينغيتي وفوهة نجورونجورو الثنائي الذي ترتكز عليه رحلات السفاري في أفريقيا أكثر من أي مزيج آخر — إن تجاوزتم الطريق البري تمامًا وطرتم مباشرة إلى السهول. يفعل هذا البرنامج ذلك بالضبط: طائرة خفيفة تنقلكم من أروشا إلى مدرج سيرونيرا في اليوم الأول، ومن هناك يصبح كل شيء جولات سفاري، لا تنقلات، لبقية الرحلة. يومان كاملان لتتبع فخور الأسود المقيمة في سيرينغيتي، وربما هجرة النو نفسها بحسب الموسم، ثم يوم كامل داخل فوهة نجورونجورو — أعلى كثافة للحياة البرية في القارة بأكملها — قبل نزول أخير عبر قرية موتو وا مبو في طريق العودة إلى أروشا.",
      "متاحة بثلاث فئات — Wilderness Trail وWilderness Reserve وWilderness Sovereign — مبنية كل منها حول مستوى مختلف من المخيمات والنُزل، بحيث يبقى المسار نفسه بينما تتغير تجربة التنقل عبره بشكل ملحوظ.",
      "تندمج هذه الرحلة السفارية بسلاسة مع رحلة أوسع في شرق أفريقيا — يمكن تمديدها إلى كينيا أو رواندا، أو إضافة امتداد شاطئي بعد جولة السفاري الأخيرة."
    ],
    highlights: [
      "الطيران مباشرة إلى سيرينغيتي — تخطي التنقل البري الذي يمتد لساعات، وتخصيص عصر اليوم الأول لجولة سفاري بدلًا من ذلك",
      "يومان كاملان في سيرينغيتي — وقت كافٍ لتتبع حركة الحيوانات المفترسة فعليًا لا مجرد لمحها",
      "أرض الحيوانات الخمس الكبرى، من البداية للنهاية — الأسد والنمر والفيل والجاموس ووحيد القرن كلها مشاهدات واقعية عبر هذا البرنامج",
      "فوهة نجورونجورو، وعاء الحياة البرية في أفريقيا — يوم كامل داخل نظام بيئي مغلق يحتضن واحدة من أعلى كثافات الحياة البرية على وجه الأرض",
      "قرية موتو وا مبو الثقافية — توقف حقيقي وغير متعجل في طريق العودة إلى أروشا، لا محطة تصوير سريعة على جانب الطريق",
      "يمكن دمجها بسهولة مع كينيا أو رواندا، أو تمديدها إلى الشاطئ — تصلح هذه الرحلة بمفردها أو كجزء من رحلة أطول في شرق أفريقيا",
      "تغطي كل مستويات الراحة — من الأسلوب الهادئ المدروس إلى الأسلوب الاستثنائي حقًا، دون تغيير يوم واحد من البرنامج نفسه"
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
      "جميع رسوم دخول الحدائق الوطنية",
      "جميع جولات السفاري بسيارة لاندكروزر رباعية الدفع",
      "دليل محترف ناطق بالإنجليزية",
      "جميع الوجبات",
      "الإقامة وفق برنامج الرحلة",
      "تنقلات المطار"
    ],
    excluded: [
      "رحلات الطيران الدولية",
      "رسوم التأشيرة",
      "التأمين على السفر",
      "الإكراميات",
      "المصاريف الشخصية"
    ],
    notes: [
      "الأسعار المعروضة هي للشخص الواحد بمشاركة غرفة مزدوجة/توأم؛ تُطبَّق رسوم إضافية عند طلب غرفة فردية.",
      "الحد الأدنى لحجم المجموعة شخصان لكي تكون رحلة الطيران المستأجرة إلى سيرونيرا ممكنة.",
      "تخضع الإقامة والأسعار لمدى التوافر، وقد تختلف حسب تاريخ السفر الدقيق ضمن الموسم نفسه.",
      "تحدد الحكومة رسوم دخول الحدائق الوطنية ومناطق الحفظ في تنزانيا، وهي عرضة للتغيير دون إشعار مسبق."
    ],
    faq: [
      {
        q: "ما الفرق بين الفئات الثلاث؟",
        a: "ستزورون الأماكن نفسها وتشاهدون الحياة البرية ذاتها في جميع الأحوال — هذا الجزء لا يتغير أبدًا. ما يتغير هو أسلوب العناية بكم بين المحطات: يحافظ Wilderness Trail على الراحة والبساطة الأنيقة، ويمنحكم Wilderness Reserve مساحة أكبر قليلًا للاسترخاء، بينما يضعكم Wilderness Sovereign في مكان استثنائي حقًا كل ليلة دون استثناء. اختاروا الفئة التي تناسب أسلوبكم في السفر."
      },
      {
        q: "هل تطير جميع الفئات إلى سيرينغيتي بالطريقة نفسها؟",
        a: "نعم — تبدأ كل رحلة بالطريقة نفسها، بالإقلاع من أروشا والهبوط على سهول سيرينغيتي المفتوحة خلال أقل من ساعة. ومنذ لحظة الهبوط، يكمن الفارق الوحيد في أين تريحون رؤوسكم كل مساء."
      },
      {
        q: "هل سنشاهد الهجرة الكبرى؟",
        a: "هذا هو السؤال الذي يطرحه الجميع، وليتنا نستطيع أن نعدكم بتاريخ ومكان محددين. ما يمكننا أن نعدكم به هو خمسة أيام في أراضي الأسود والنمور المقيمة، حيث تحدث المشاهدات على مدار العام بصرف النظر عن مكان تجوال القطعان. إن كان توقيت الهجرة نفسها هو الأهم بالنسبة لكم، تحدثوا مع مستشاركم قبل الحجز — سنساعدكم في اختيار التواريخ التي تمنحكم أفضل فرصة ممكنة."
      },
      {
        q: "هل يتغير السعر إذا سافرنا كمجموعة؟",
        a: "غالبًا ما يتغير قليلًا — بعض التكاليف مثل المركبة والدليل مشتركة، لذا يمكن للمجموعة الأكبر أن تخفف الإجمالي للفرد الواحد. ألقوا نظرة على جدول الأسعار تحت كل فئة أعلاه لمعرفة كيف يتحدد ذلك بحسب حجم مجموعتكم."
      },
      {
        q: "ما المشمول، وما الذي يجب ترتيبه بشكل منفصل؟",
        a: "بنينا السعر حول كل ما يهم بمجرد وصولكم: رسوم الحدائق ومناطق الحفظ، كل جولة سفاري بمركبة خاصة، دليلكم، وجباتكم، إقامتكم، والتنقلات من وإلى المطار. ما يتبقى لترتيبه هو الوصول إلى تنزانيا نفسها — رحلات الطيران الدولية، التأشيرات، التأمين على السفر، والإكراميات التي ستودّون تركها لمن يجعلون الرحلة لا تُنسى."
      },
      {
        q: "هل يمكن تحويلها إلى رحلة أكبر تشمل كينيا أو رواندا أو أيامًا على الشاطئ؟",
        a: "بالتأكيد، وهذا ما يفعله كثير من مسافرينا بالفعل. تنسجم هذه الرحلة بشكل جميل مع سفاري في كينيا أو رحلة تتبع غوريلا في رواندا، وإذا بدت أيام هادئة على الرمال هي الطريقة المناسبة لإنهاء الرحلة، يمكننا ترتيب ذلك أيضًا مباشرة بعد جولة السفاري الأخيرة. يكفي أن تخبرونا بذلك أثناء التخطيط، وسنساعدكم في تصميم الرحلة كاملة."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "الطيران إلى سيرينغيتي",
        description: "الطيران من أروشا إلى مدرج سيرونيرا، وسط سيرينغيتي. جولة سفاري بعد الظهر.",
        accommodation: "وسط سيرينغيتي، حسب الفئة",
        meals: "الغداء والعشاء",
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
        title: "جولات سفاري في سيرينغيتي",
        description: "يوم كامل من جولات السفاري في سيرينغيتي.",
        accommodation: "وسط سيرينغيتي، حسب الفئة",
        meals: "جميع الوجبات",
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
        title: "من وسط سيرينغيتي إلى منطقة حفظ نجورونجورو",
        description: "التنقل من وسط سيرينغيتي إلى منطقة حفظ نجورونجورو.",
        accommodation: "منطقة نجورونجورو، حسب الفئة",
        meals: "جميع الوجبات",
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
        title: "فوهة نجورونجورو",
        description: "يوم كامل، النزول إلى فوهة نجورونجورو.",
        accommodation: "منطقة نجورونجورو، حسب الفئة",
        meals: "جميع الوجبات",
        insiderFact: "فوهة نجورونجورو نظام بيئي مغلق تبلغ مساحته نحو 260 كيلومترًا مربعًا — لا تغادرها معظم الحيوانات المقيمة أبدًا.",
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
        title: "المغادرة عبر موتو وا مبو",
        description: "العودة بالسيارة إلى أروشا عبر قرية موتو وا مبو. التوجه إلى المطار، والطيران إلى الوطن.",
        accommodation: "لا ينطبق",
        meals: "الإفطار"
      }
    ]
  },
  {
    slug: "8-days-honeymoon-safari",
    name: "سفاري شهر العسل لمدة 8 أيام — لعشاق البرية",
    duration: 8,
    destinations: [
      "tarangire",
      "manyara",
      "ngorongoro",
      "serengeti"
    ],
    type: "big_five_game_drives",
    bestMonths: ['Jul', 'Aug', 'Sep', 'Oct'],
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
    tagline: "أنتما فقط ودليلكما",
    metaDescription: "سفاري خاصة لشهر العسل في تنزانيا لمدة 8 أيام لشخصين فقط — تارانجيري ومرتفعات نجورونجورو وسيرينغيتي، حيث كل جولة برية وكل مخيم مخصص لكما وحدكما. تبدأ الأسعار من 3,824 دولارًا للشخص الواحد.",
    overview: [
      "تريدان أن يشعر شهر عسلكما بالمغامرة والتميز — لا أن يكون مجرد كرسي شاطئي آخر بإطلالة. صُمم هذا السفاري لشهر العسل في تنزانيا لمدة 8 أيام تحديدًا لتحقيق ذلك: سبع ليالٍ تتنقلان خلالها عبر تارانجيري ومرتفعات نجورونجورو وسيرينغيتي، مع جولة سفاري خاصة تمامًا كل يوم، ومخيمات مختارة بعناية لتمنحكما ذلك الهدوء الذي لا يأتي إلا من البعد عن أي شخص آخر. أضيفا إليها بضعة أيام على سفوح كليمنجارو السفلى أو امتدادًا على رمال زنجبار قبل الرحلة أو بعدها، وستحصلان على شهر عسل يبدأ بالفيلة وينتهي كما تشاءان.",
      "المسار والوتيرة والحياة البرية متطابقة في كلتا الحالتين — ما يتغير هو مكان المبيت. صممنا هذا البرنامج بمستويين، بحيث يمكنكما الاختيار بناءً على مقدار الميزانية التي تريدان تخصيصها للإقامة مقابل، على سبيل المثال، امتداد زنجبار ذاك."
    ],
    whyDifferent: {
      heading: "لماذا يختار الأزواج هذه الرحلة",
      paragraphs: [
        "مركبة خاصة، من البداية إلى النهاية. لا جولات سفاري مشتركة، ولا انتظار لتوقفات تصوير مسافرين آخرين. فقط دليلكما ووتيرتكما، والمدة التي تريدانها للبقاء مع قطيع من الأسود قبل مواصلة الطريق.",
        "ثلاثة مشاهد طبيعية، دون تكرار. تُفسح سهول تارانجيري المزينة بأشجار الباوباب المجال لمرتفعات الفوهة، ثم عشب سيرينغيتي الذي لا ينتهي — لكل منها إيقاع وضوء مختلف تمامًا.",
        "استقبال بالشمبانيا لا يأتي كفكرة لاحقة. تفتتح ليلتكما الأولى في أروشا بزجاجة شمبانيا مثلجة، مخصصة لكما وحدكما، قبل أن تبدأ رحلة السفاري نفسها.",
        "إقامة كاملة في كل مخيم. يُهيَّأ الإفطار والغداء والعشاء في كل محطة مبيت، بحيث يبقى القرار الوحيد المتبقي كل يوم هو الاتجاه الذي تشيران فيه المركبة."
      ]
    },
    destinationHighlights: {
      heading: "طريقتان لخوض هذه الرحلة",
      items: [
        {
          title: "Wilderness Reserve",
          text: "الرحلة في أبسط صورها الأنيقة: مخيمات ونُزل مُدارة جيدًا — Kahawa House، وZuri Kilima Siri في تارانجيري، وTloma Lodge في مرتفعات كاراتو، ومخيم Conserve Safari في سيرينغيتي — جميعها بإقامة كاملة، مريحة، دون أن تحاول أن تكون منتجعًا. هنا يستقر معظم أزواجنا في شهر العسل."
        },
        {
          title: "Wilderness Sovereign",
          text: "تأخذكما عبر الأيام والمسار نفسه، لكنها تضعكما في مكان أكثر تميزًا كل ليلة: فيلا Siringiti الخاصة في أروشا، ومخيمها في تارانجيري، وGibb's Farm في مرتفعات كاراتو (مزرعة قهوة عاملة، وأحد أفضل المناظر في المنطقة حقًا)، ومخيم Siringiti في سيرينغيتي. هذه هي الفئة للأزواج الذين يريدون لشهر العسل نفسه — لا السفاري وحده — أن يكون الحدث الرئيسي."
        }
      ]
    },
    highlights: [
      "مركبة خاصة، من البداية إلى النهاية",
      "ثلاثة مشاهد طبيعية، دون تكرار",
      "استقبال بالشمبانيا لا يأتي كفكرة لاحقة",
      "إقامة كاملة في كل مخيم"
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
      "جميع رسوم دخول الحدائق الوطنية",
      "مركبة دفع رباعي خاصة ودليل لكل جولة سفاري",
      "استقبال خاص بالشمبانيا عند الوصول",
      "جميع الوجبات طوال الرحلة (الإفطار والغداء والعشاء في كل مخيم)",
      "الإقامة كما هو موضح أعلاه، في الفئة التي تختارانها",
      "تنقل من المطار عند الوصول، ورحلة طيران داخلية عند المغادرة (من سيرينغيتي إلى كليمنجارو)"
    ],
    excluded: [
      "رحلات الطيران الدولية",
      "رسوم التأشيرة",
      "التأمين على السفر",
      "إكراميات الدليل والطاقم",
      "جلسات السبا وغيرها من الإضافات الشخصية",
      "عشاء ليلة الوصول (اليوم الأول مبيت وإفطار فقط — استقبال الشمبانيا على حسابنا؛ يسهل ترتيب عشاء في أروشا عند الطلب)"
    ],
    notes: [
      "السعر محسوب لشخصين يتشاركان الإقامة؛ صُمم هذا البرنامج حصريًا للأزواج.",
      "يمكن إضافة بضعة أيام في زنجبار أو على سفوح كليمنجارو السفلى قبل السفاري أو بعده — اسألوا عن خيارات التمديد عند الاستفسار.",
      "يؤمّن عربون بنسبة 30% تواريخكما، ويُستحق باقي المبلغ قبل 60 يومًا من الطيران.",
      "تخضع الإقامة والأسعار لمدى التوافر، وقد تختلف حسب تاريخ السفر الدقيق ضمن الموسم نفسه.",
      "تحدد الحكومة رسوم دخول الحدائق الوطنية ومناطق الحفظ في تنزانيا، وهي عرضة للتغيير دون إشعار مسبق."
    ],
    faq: [
      {
        q: "هل هذه رحلة سفاري خاصة، أم سنشارك جولات السفاري مع ضيوف آخرين؟",
        a: "خاصة تمامًا، كل يوم. هذا غير قابل للتفاوض في هذا البرنامج — إنها مركبتكما ودليلكما، ولا جدول لأحد آخر تراعيانه. إن أردتما البقاء عند مشاهدة ما لأربعين دقيقة أو تخطي توقف بالكامل، فهذا قراركما لا تصويت جماعي."
      },
      {
        q: "ما الفرق الفعلي بين Wilderness Reserve وWilderness Sovereign؟",
        a: "لا يتغير المسار ولا الحياة البرية — تريان الحدائق نفسها، والهجرة نفسها، والفوهة نفسها. ما يتغير هو الإقامة كل ليلة. يضعكما ريزيرف في مخيمات مُدارة جيدًا ومريحة لا تحاول أن تكون أكثر مما هي عليه. أما سوفرين فيضعكما في مكان أكثر تميزًا قليلًا — فيلات خاصة، مزارع قهوة عاملة، ومخيمات بنسبة طاقم إلى ضيوف أعلى وتصميم أكثر عناية. إن كنتما تقرران أين تنفقان أكثر في هذه الرحلة، فهذه هي النقطة الفاصلة."
      },
      {
        q: "هل 8 أيام كافية لشهر عسل في تنزانيا؟",
        a: "إنها مدة جيدة — طويلة بما يكفي للاستقرار فعليًا في كل حديقة بدلًا من مجرد عبورها، وقصيرة بما يكفي ألا تستهلك رصيد إجازتكما بالكامل. إن أمكنكما إضافة 3-4 أيام في النهاية لزنجبار أو ليلتين قرب كليمنجارو، فسننصح بذلك، لكن هذا البرنامج قائم بذاته بشكل ممتاز أيضًا."
      },
      {
        q: "هل سنشاهد هجرة النو؟",
        a: "يعتمد ذلك على تواريخكما. تتحرك الهجرة في دورة سنوية تقريبية عبر نظام سيرينغيتي البيئي، لذا يتغير مكان القطعان من شهر لآخر — أحيانًا يكون موسم الولادة في السهول الجنوبية، وأحيانًا عبور الأنهار في الشمال. أخبرونا بتواريخ سفركما عند الاستفسار وسنوجّه اليومين 6-7 لمنحكما أفضل فرصة لما تفعله الهجرة في تلك الفترة من السنة."
      },
      {
        q: "هل يمكننا إضافة زنجبار أو كليمنجارو؟",
        a: "نعم — هذا أحد أكثر الطلبات شيوعًا لدينا، وهو منطقي لوجستيًا لأن رحلة طيران اليوم الثامن تمر بالفعل عبر المحور. بضعة أيام على الشاطئ بعد غبار سيرينغيتي مزيج جيد حقًا. اسألونا عن خيارات التمديد عند الاستفسار."
      },
      {
        q: "ما الذي يجب أن نضعه في الميزانية إضافة إلى سعر الباقة؟",
        a: "إكراميات الدليل وطاقم المخيم غير مشمولة (كدليل تقريبي، نحو 15-20 دولارًا يوميًا للزوجين لدليلكما، إضافة إلى مظروف إكرامية مشترك للطاقم في كل مخيم)، وكذلك المشروبات خارج المشروبات الأساسية في معظم المخيمات، وجلسات السبا، أو أي شيء يُعد هدية تذكارية شخصية. التأمين على السفر أيضًا مسؤوليتكما — وننصح بعدم تجاهله."
      },
      {
        q: "هل نحتاج للقلق بشأن السلامة أو التحضيرات الصحية؟",
        a: "تنزانيا وجهة سفاري راسخة وواعية بالسلامة، وهذه رحلة خاصة مع دليل متمرس طوال الطريق، فلن تتنقلا بمفردكما في شيء. ستحتاجان دواءً مضادًا للملاريا (هذه منطقة موبوءة بالملاريا) وتطعيمات السفر المعتادة قبل السفر — يمكن لطبيبكما أو عيادة سفر أن تنصحكما بالتفاصيل الخاصة بظروفكما."
      },
      {
        q: "متى يجب أن نحجز؟",
        a: "لموسم الذروة (تقريبًا يوليو–أكتوبر، إضافة إلى عطلات ديسمبر)، تمنحكما فترة 6-12 شهرًا مسبقًا أفضلية اختيار المخيمات والغرف الأفضل — تُحجز تواريخ شهر العسل خصوصًا مبكرًا. الموسم المتوسط والمنخفض أكثر مرونة، لكن كلما بكّرنا في تثبيت التواريخ، زادت مرونتنا في التفاصيل."
      },
      {
        q: "هل مركبة الدفع الرباعي بسقف قابل للفتح ضرورية فعلًا، أم مجرد بيع إضافي؟",
        a: "ليست بيعًا إضافيًا — إنها الفرق بين صورة جيدة وصورة رائعة، والأهم من ذلك، بين سبعة أيام مريحة وأخرى ضيقة. كل مركبة في هذا البرنامج هي مركبة سفاري حقيقية بسقف قابل للفتح لمشاهدة الحياة البرية، خاصة بكما وحدكما."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "أروشا",
        description: "تهبط رحلتكما في مطار كليمنجارو الدولي، ودليلكما في الانتظار. الطريق إلى أروشا قصير، وبحلول وقت استقراركما، ستجدان زجاجة شمبانيا مثلجة تحمل اسمكما. لا جولات سفاري اليوم — فقط أول أمسية هادئة كزوجين.",
        accommodation: "Kahawa House",
        meals: "الإفطار",
        insiderFact: "تقع أروشا على ارتفاع مريح بمناخ أبرد من السهول المقبلة — أحضرا طبقة خفيفة لأمسيتكما الأولى.",
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
        title: "الدخول إلى تارانجيري",
        description: "يوصلكما الطريق جنوبًا إلى تارانجيري بحلول الظهيرة، في وقت مناسب للغداء قبل بدء جولة سفاري بعد الظهر. هذه أرض الفيلة — قطعان من ثلاثين فردًا أو أكثر ليست أمرًا نادرًا، تتحرك على امتداد النهر الذي يبقي الحديقة خضراء حتى في الموسم الجاف. مع انخفاض الضوء، يجد دليلكما مكانًا لجلسة غروب خاصة بين أشجار الباوباب، التي وقف بعضها منذ أكثر من ألف عام.",
        accommodation: "Zuri Kilima Siri",
        meals: "جميع الوجبات",
        insiderFact: "يمكن لأشجار الباوباب في تارانجيري أن تعيش أكثر من ألف عام وتخزّن في جذوعها ماءً يكفي للبقاء لأشهر من الجفاف — اطلبا من دليلكما الإشارة إلى أقدمها.",
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
        title: "تارانجيري، دون تعجل",
        description: "يوم كامل دون وجهة أخرى. تكافئ تارانجيري الصبر — هذا هو الوقت الذي ستشاهدان فيه على الأرجح القطعان عند حافة المياه، إلى جانب الزرافات والحمير الوحشية وأحيانًا ثعبان بايثون ملتفٍّ على شجرة عند النهر. يقع مخيمكما لليلة داخل الحديقة نفسها، بحيث تكون أصوات البرية آخر ما تسمعانه قبل النوم.",
        accommodation: "Zuri Kilima Siri",
        meals: "جميع الوجبات",
        insiderFact: "يركّز الموسم الجاف الحياة البرية بشدة على امتداد نهر تارانجيري — كلما اقتربتما من أكتوبر في سفركما، كلما كانت القطعان أكبر عادة.",
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
        title: "الدخول إلى مرتفعات كاراتو",
        description: "يمر بكما طريق هذا الصباح عبر حديقة بحيرة مانيارا الوطنية — طيور الفلامينغو تحتشد في المياه الضحلة، وإن حالفكما الحظ، أحد أسود الحديقة الشهيرة المتسلقة للأشجار ممددًا على غصن سنط. من هناك، يصعد الطريق إلى مرتفعات كاراتو الباردة والخضراء، حيث ستقضيان الليلة قبل نزول الغد إلى الفوهة.",
        accommodation: "Tloma Lodge",
        meals: "جميع الوجبات",
        insiderFact: "تقع كاراتو على ارتفاع يزيد عن 1,500 متر، أبرد بشكل ملحوظ من السهول أدناه — يستحق إحضار طبقة إضافية للمساء.",
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
        title: "فوهة نجورونجورو، ثم سيرينغيتي",
        description: "بداية مبكرة تدخلكما الفوهة بينما لا يزال الضوء ناعمًا — 260 كيلومترًا مربعًا من الأعشاب والغابات والبحيرة القلوية، تحتضن واحدة من أعلى كثافات الحياة البرية في القارة. الأسود والفيلة ووحيد القرن الأسود الشهير في الفوهة كلها احتمالات حقيقية في صباح واحد. بحلول العصر، تكونان على الطريق غربًا نحو سيرينغيتي، لتصلا المخيم مع تحول السماء إلى اللون البرتقالي.",
        accommodation: "Conserve Safari Serengeti Camp",
        meals: "جميع الوجبات",
        insiderFact: "تبقى أرضية الفوهة أبرد بعدة درجات من الحافة، حتى في منتصف النهار — أحضرا سترة خفيفة للنزول.",
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
        title: "في عمق سيرينغيتي",
        description: "هذا هو اليوم الذي يستحق فيه سيرينغيتي اسمه — \"السهول التي لا تنتهي\"، وستشعران بذلك. يبحث الفهد عن الحركة من فوق تلال النمل الأبيض، وتتمدد فخور الأسود في أي ظل تجده، ويقرأ دليلكما المشهد كلغة بدأتما لتوكما تعلمها. عشاء الليلة على ضوء الشموع، مُقام في الخارج تحت نجوم أكثر مما رآه أي منكما في وقت واحد على الأرجح.",
        accommodation: "Conserve Safari Serengeti Camp",
        meals: "جميع الوجبات",
        insiderFact: "اسألا دليلكما عن موقع الهجرة الحالي — الحياة البرية المقيمة في سيرينغيتي ممتازة على مدار العام، لكن توقيت زيارتكما مع القطعان يضيف طبقة مختلفة تمامًا.",
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
        title: "تتبع الهجرة",
        description: "إن تزامنت تواريخ سفركما معها، يتمحور اليوم حول هجرة النو — مئات الآلاف من الحيوانات تتحرك في كتلة واحدة لا تهدأ عبر السهول. سواء كانت القطعان في قطاعكما من سيرينغيتي أم لا، ينتهي اليوم بالطريقة نفسها: جلسة غروب على نتوء صخري، بأيدٍ تحمل المشروبات، ومشاهدة السماء تفعل ما لن تستطيعا تصويره بشكل يليق.",
        accommodation: "Conserve Safari Serengeti Camp",
        meals: "جميع الوجبات",
        insiderFact: "تُرتَّب توقفات الغروب عادة على تلة صخرية بأفق واضح — لحظة جيدة لتجهيز الكاميرا قبل أن يختفي الضوء.",
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
        title: "المغادرة",
        description: "جولة سفاري صباحية أخيرة، لأن الضوء دائمًا أفضل قبل الإفطار. بعدها، رحلة طيران قصيرة تنقلكما من سيرينغيتي إلى مطار كليمنجارو الدولي، لتتصلا برحلتكما التالية — إلى الوطن، أو إلى حيث يتواصل شهر العسل بعد ذلك.",
        accommodation: "لا ينطبق",
        meals: "الإفطار"
      }
    ]
  },
  {
    slug: "7-days-crown-jewels",
    name: "سفاري جواهر التاج لمدة 7 أيام",
    duration: 7,
    destinations: [
      "tarangire",
      "manyara",
      "ngorongoro",
      "serengeti"
    ],
    type: "big_five_game_drives",
    bestMonths: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Dec', 'Jan', 'Feb'],
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
    metaTitle: "سفاري جواهر التاج لمدة 7 أيام | تارانجيري ونجورونجورو وسيرينغيتي | EWA Safari Outfitters",
    metaDescription: "الجولة البرية المميزة لشركة EWA Safari Outfitters — جولات ليلية في تارانجيري، وفوهة نجورونجورو، وسفاري منطاد الهواء الساخن في سيرينغيتي. فئتان، تبدأ الأسعار من 5,334.38 دولارًا للشخص الواحد.",
    overview: [
      "محدَّثة لموسم 2027. إن كانت لديكم رحلة سفاري واحدة فقط في تنزانيا، فهذا هو البرنامج الذي يستحق اسم جواهر التاج. سبعة أيام، وأربعة أنظمة بيئية، وتجربتان مميزتان لا تحاول معظم البرامج بهذا الطول خوضهما: جولة سفاري ليلية عبر تارانجيري، حين يتولى صيادو الحديقة الليليون زمام الأمور بدلًا من قطعان الفيلة الشهيرة، وسفاري منطاد هواء ساخن عند الشروق فوق سهول سيرينغيتي التي لا تنتهي، تُشاهد من الأعلى لا من خلف زجاج المركبة.",
      "المسار نفسه هو إجابة EWA Safari Outfitters على سؤال بسيط: كيف ستبدو الجولة البرية إن كان على كل توقف أن يبرر مكانته؟ تارانجيري من أجل الفيلة وأشجار الباوباب. زيارة لمجتمع الماساي وسفاري بقارب موكورو في بحيرة مانيارا، تغيير حقيقي في الإيقاع بين الحدائق الكبرى. نزول كامل إلى فوهة نجورونجورو، أكثر مسرح موثوقية في أفريقيا للحيوانات الخمس الكبرى. ويومان كاملان في سيرينغيتي، تُختتمان من الجو.",
      "نحن من مواليد تنزانيا ومقرّنا في أروشا، وهذا البرنامج مبني على سنوات من الخبرة على هذه الطرق والمدارج بالذات. كل رحلة جواهر تاج مصممة خصيصًا حسب تواريخكم ووتيرتكم، بقيادة الدليل المحترف المعتمد نفسه من البداية إلى النهاية، مع دعم متواصل على مدار الساعة مدمج في التصميم لا مضافًا لاحقًا."
    ],
    tagline: "شركة محلية منذ 2022 · تقييم 4.9/5 من أكثر من 200 ضيف من أكثر من 40 دولة · سجل مشاهدة 100% للحيوانات الخمس الكبرى",
    bestTimeToTravel: "على مدار العام، إذ تحتضن فوهة نجورونجورو حياة برية مقيمة في كل فصل وتتواجد قطعان فيلة تارانجيري باستمرار — تمنح الفترة من يونيو إلى أكتوبر وأواخر ديسمبر إلى فبراير أكثر ظروف مشاهدة الحياة البرية جفافًا",
    highlights: [
      "جولة سفاري ليلية في تارانجيري — من الفرص القليلة لمشاهدة الحيوانات المفترسة الليلية في الحديقة والأنواع الصغيرة النادرة التي تبقى مختفية خلال الجولات النهارية المعتادة",
      "سفاري منطاد هواء ساخن عند الشروق فوق سيرينغيتي — السهول من الأعلى، يليها إفطار بالشمبانيا عند الهبوط",
      "يوم كامل داخل فوهة نجورونجورو — أكثر مسرح موثوقية في أفريقيا للحيوانات الخمس الكبرى، بما في ذلك أفضل فرصكم في تنزانيا لمشاهدة وحيد القرن الأسود المهدد بالانقراض",
      "زيارة لمجتمع الماساي وسفاري بقارب موكورو في بحيرة مانيارا — تجربة ثقافية حقيقية ومشاهدة حياة برية من على الماء مدمجة في يوم التنقل بين الحديقتين، لا معاملة كحشو",
      "يومان كاملان في سيرينغيتي، يمنحان كلًا من سفاري المنطاد وجولات السفاري المعتادة مساحة للتنفس بدلًا من ضغط كل شيء في يوم واحد متسرع"
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
        reserve: 4605.00,
        sovereign: 8930.00
      },
      {
        pax: 6,
        reserve: 4523.96,
        sovereign: 8848.96
      }
    ],
    included: [
      "جميع رسوم دخول الحدائق والامتيازات",
      "جميع جولات السفاري بما فيها الجولة الليلية في تارانجيري",
      "سفاري منطاد الهواء الساخن",
      "دليلكم الخاص طوال الرحلة",
      "جميع الوجبات أثناء السفاري",
      "مياه الشرب وعلب الغداء",
      "رحلة الطيران من سيرونيرا إلى أروشا",
      "تغطية إخلاء طبي طارئ (AMREF Flying Doctors)"
    ],
    excluded: [
      "رحلات الطيران الدولية",
      "رسوم التأشيرة",
      "التأمين على السفر",
      "الإكراميات"
    ],
    includedCategorized: {
      transfers: [
        "رحلة الطيران من سيرونيرا إلى أروشا",
        "تنقلات المطار"
      ],
      accommodationMeals: [
        "جميع الوجبات أثناء السفاري",
        "مياه الشرب وعلب الغداء"
      ],
      guidingGameDrives: [
        "جميع رسوم دخول الحدائق والامتيازات",
        "جميع جولات السفاري بما فيها الجولة الليلية في تارانجيري",
        "سفاري منطاد الهواء الساخن",
        "دليلكم الخاص طوال الرحلة",
        "تغطية إخلاء طبي طارئ (AMREF Flying Doctors)"
      ]
    },
    excludedCategorized: [
      "رحلات الطيران الدولية",
      "رسوم التأشيرة",
      "التأمين على السفر",
      "الإكراميات"
    ],
    notes: [
      "الأسعار المعروضة هي للشخص الواحد بمشاركة غرفة توأم.",
      "تخضع اختيارات نُزل فئة Wilderness Sovereign لمدى التوافر والتأكيد عند الحجز.",
      "تخضع الإقامة والأسعار لمدى التوافر، وقد تختلف حسب تاريخ السفر الدقيق.",
      "تحدد الحكومة رسوم دخول الحدائق الوطنية ومناطق الحفظ في تنزانيا، وهي عرضة للتغيير دون إشعار مسبق."
    ],
    faq: [
      {
        q: "كم تكلف سفاري جواهر التاج لمدة 7 أيام؟",
        a: "تبدأ رحلة جواهر التاج من 4,523.96 دولارًا للشخص الواحد على فئة Wilderness Reserve (6 مسافرين، بمشاركة غرفة توأم)، وترتفع إلى 5,334.38 دولارًا للشخص الواحد لزوجين يسافران بمفردهما. أما Wilderness Sovereign، بنُزل مطوَّرة طوال الرحلة، فتبدأ من 8,848.96 دولارًا للشخص الواحد وترتفع إلى 9,659.38 دولارًا لمسافرَين اثنين. يشمل السعر جميع رسوم الحدائق والامتيازات، وجولات السفاري، والجولة الليلية، وسفاري منطاد الهواء الساخن، والوجبات أثناء السفاري، ورحلة الطيران من سيرونيرا إلى أروشا. وبما أن كل رحلة مصممة خصيصًا وليست باقة جماعية ثابتة، اطلبوا عرض سعر شخصيًا لتواريخكم الدقيقة."
      },
      {
        q: "لماذا تحجزون سفاري جواهر التاج مع EWA Safari Outfitters؟",
        a: "شركة EWA Safari Outfitters من مواليد تنزانيا ومقرّها أروشا، وليست وكالة خارجية تعيد بيع مسار لم تقده يومًا. كل سفاري مصمم خصيصًا حسب تواريخكم واهتماماتكم، بقيادة دليل محترف معتمد طوال الرحلة، مع دعم شامل من استقبال المطار حتى التوصيل النهائي."
      },
      {
        q: "ما الذي يميز هذا البرنامج عن سفاري نجورونجورو-سيرينغيتي القياسي؟",
        a: "إضافتان مميزتان لا تحاول معظم البرامج بهذا الطول تقديمهما: جولة سفاري ليلية في تارانجيري تكشف حياة برية ليلية غير مرئية في الجولات النهارية المعتادة، وسفاري منطاد هواء ساخن عند الشروق فوق سيرينغيتي. كلتاهما مدمجتان في البرنامج القياسي، لا مقدَّمتان كإضافات مكلفة."
      },
      {
        q: "هل سفاري منطاد الهواء الساخن آمن، وماذا يتضمن؟",
        a: "تُدار رحلات المنطاد من قِبل مشغلين مرخصين وذوي خبرة باستخدام بروتوكولات سلامة دولية معيارية. تستغرق الرحلات عادة نحو ساعة عند الشروق، حين تكون الرياح أهدأ ما يمكن، يعقبها إفطار بالشمبانيا في البرية عند الهبوط."
      },
      {
        q: "ما أفضل وقت في السنة لهذا البرنامج؟",
        a: "يسير هذا السفاري بشكل جيد على مدار العام، إذ تحتضن فوهة نجورونجورو حياة برية مقيمة في كل فصل وتتواجد قطعان فيلة تارانجيري باستمرار. تمنح الفترة من يونيو إلى أكتوبر وأواخر ديسمبر إلى فبراير أكثر ظروف مشاهدة الحياة البرية جفافًا."
      },
      {
        q: "هل سأشاهد الحيوانات الخمس الكبرى في هذا السفاري؟",
        a: "تمنحكم فوهة نجورونجورو أفضل فرصة في أي مكان بتنزانيا لمشاهدة جميع الحيوانات الخمس الكبرى — الأسد والنمر والفيل والجاموس ووحيد القرن الأسود المهدد بالانقراض — غالبًا في يوم واحد، بفضل النظام البيئي المغلق للفوهة وكثافة الحيوانات العالية فيها."
      },
      {
        q: "ما المشمول في باقة سفاري جواهر التاج؟",
        a: "جميع رسوم دخول الحدائق والامتيازات، جميع جولات السفاري بما فيها الجولة الليلية في تارانجيري، سفاري منطاد الهواء الساخن، دليلكم الخاص طوال الرحلة، جميع الوجبات أثناء السفاري، مياه الشرب وعلب الغداء، رحلة الطيران من سيرونيرا إلى أروشا، وتغطية الإخلاء الطبي الطارئ (AMREF Flying Doctors). لا تشمل الباقة رحلات الطيران الدولية أو رسوم التأشيرة أو التأمين على السفر أو الإكراميات."
      },
      {
        q: "هل أحتاج إلى تأشيرة لزيارة تنزانيا؟",
        a: "يحتاج معظم المسافرين، بمن فيهم القادمون من الولايات المتحدة والمملكة المتحدة وكندا ومعظم دول أوروبا، إلى تأشيرة لدخول تنزانيا. يتوفر كل من التأشيرة الإلكترونية المُتقدَّم بها مسبقًا والتأشيرة عند الوصول؛ ويُنصح بالتقديم إلكترونيًا قبل السفر لتجنب أي تأخير."
      },
      {
        q: "كم ليلة نقضيها في كل موقع؟",
        a: "ليلة واحدة في أروشا، وليلة واحدة في تارانجيري، وليلتان في كاراتو (تغطيان يوم التنقل عبر بحيرة مانيارا ويوم فوهة نجورونجورو)، وليلتان في سيرينغيتي."
      },
      {
        q: "هل يناسب هذا السفاري شهر العسل أو الزيارة الأولى لتنزانيا؟",
        a: "نعم — يجعل مزيج مشاهدة الحياة البرية الفاخرة مع تجربتين مميزتين نادرتين حقًا هذا البرنامج مناسبًا لكل من يخوض السفاري لأول مرة والأزواج الباحثين عن رحلة كاملة لا تُنسى. وبما أنه مصمم خصيصًا لا مواعيد مجموعة ثابتة، يمكن إضافة لمسات شخصية صغيرة عند الطلب."
      },
      {
        q: "ما حجم المجموعات التي يمكنها الانضمام لهذا السفاري؟",
        a: "سفاري جواهر التاج رحلة خاصة مصممة خصيصًا لمجموعات صغيرة، بمركبتكم الخاصة ودليل محترف معتمد — لا حافلة سياحية مشتركة بمواعيد مجموعة ثابتة أبدًا."
      },
      {
        q: "ماذا يجب أن أحزم لهذا البرنامج؟",
        a: "استعدوا لتقلبات الحرارة — تكون الجولة الليلية في تارانجيري وصباحات الفوهة باردة، بينما تكون حرارة السفاري في منتصف النهار كبيرة. أحضروا ملابس بألوان محايدة لجولات السفاري، ووسائل حماية من الشمس، وطارد حشرات، وطبقة دافئة لموعد انطلاق منطاد الهواء الساخن قبل الفجر."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول إلى أروشا",
        description: "الهبوط في مطار كليمنجارو الدولي، حيث سيكون دليلكم من EWA Safari Outfitters في الانتظار — الدليل نفسه الذي يرافقكم طوال الرحلة. استقروا، وتعرّفوا على دليلكم، واحصلوا على إحاطة كاملة عن السفاري قبل ليلة مبكرة.",
        accommodation: "Kahawa House أو Arusha Coffee Lodge حسب الفئة",
        meals: "العشاء",
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
        insiderFact: "تقع أروشا على ارتفاع نحو 1,400 متر — مناخ أبرد من السهول المقبلة؛ أحضروا طبقة خفيفة للمساء."
      },
      {
        day: 2,
        title: "من أروشا إلى حديقة تارانجيري الوطنية",
        description: "طريق بانورامي جنوبًا إلى سهول تارانجيري المزينة بأشجار الباوباب، موطن أكبر قطعان الفيلة في تنزانيا. مع غروب الشمس، تكشف جولة سفاري ليلية حديقة مختلفة تمامًا — الزباد والقطط الزبادية والغلاغو والصيادين الليليين الذين يبقون مختفين خلال النهار.",
        accommodation: "Tarangire Katikati Camp أو Lemala Mpingo Ridge حسب الفئة",
        meals: "جميع الوجبات",
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
        insiderFact: "الجولة الليلية في تارانجيري من الفرص القليلة في سفاري قياسي لمشاهدة الأنواع الليلية الصغيرة والنادرة في الحديقة."
      },
      {
        day: 3,
        title: "من تارانجيري إلى كاراتو، عبر مجتمع الماساي وبحيرة مانيارا",
        description: "يتضمن الطريق نحو كاراتو زيارة حقيقية لمجتمع الماساي — حوار فعلي، لا توقفًا مُعدًّا مسبقًا — تليها جولة سفاري بقارب موكورو (زورق) في بحيرة مانيارا، طريقة هادئة على مستوى الماء لمشاهدة طيور الفلامينغو وأفراس النهر وأسود الحديقة الشهيرة المتسلقة للأشجار.",
        accommodation: "Ngorongoro Farm House أو Gibb's Farm حسب الفئة",
        meals: "جميع الوجبات",
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
        insiderFact: "أسود بحيرة مانيارا المتسلقة للأشجار من بين التجمعات القليلة في أفريقيا المعروفة بالراحة بانتظام على أغصان أشجار السنط."
      },
      {
        day: 4,
        title: "فوهة نجورونجورو",
        description: "يوم كامل للنزول إلى أرضية الفوهة، موطن ما يُقدَّر بـ20,000-30,000 حيوان في نظام بيئي مغلق واحد — فخور أسود على الأعشاب المفتوحة، وعشائر ضباع تعمل على أطراف الفوهة، وأفضل فرصكم في أي مكان بتنزانيا لمشاهدة وحيد القرن الأسود المهدد بالانقراض.",
        accommodation: "Ngorongoro Farm House أو Gibb's Farm حسب الفئة",
        meals: "جميع الوجبات",
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
        insiderFact: "تبقى أرضية الفوهة أبرد بعدة درجات من الحافة؛ أحضروا سترة حتى لو بدا اليوم صافيًا."
      },
      {
        day: 5,
        title: "من كاراتو إلى سيرينغيتي",
        description: "الطريق إلى سهول سيرينغيتي التي لا تنتهي، مع جولة سفاري بعد الظهر تقدّم مقياس الحديقة الحقيقي — قطط كبيرة ممددة في الظل، وقطعان حمير وحشية تمتد حتى الأفق.",
        accommodation: "Kubukubu Tented Lodge أو Lemala Nanyukie حسب الفئة",
        meals: "جميع الوجبات",
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
        insiderFact: "الطريق بين كاراتو وسيرينغيتي هو نفسه جولة سفاري؛ أبقوا الكاميرا جاهزة."
      },
      {
        day: 6,
        title: "يوم كامل في سيرينغيتي وسفاري منطاد الهواء الساخن",
        description: "استيقظوا قبل الفجر لسفاري منطاد هواء ساخن عند الشروق فوق السهول، تحلّقون بصمت فوق حياة برية لا تسمعكم قادمين أبدًا، يليه إفطار بالشمبانيا في البرية عند الهبوط. يستمر باقي اليوم بجولات سفاري تُنظَّم حول أفضل ضوء ونشاط حيواني.",
        accommodation: "Kubukubu Tented Lodge أو Lemala Nanyukie حسب الفئة",
        meals: "جميع الوجبات",
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
        insiderFact: "تنطلق رحلات المنطاد قرب الشروق حين تكون الرياح أهدأ ما يمكن؛ يستحق إحضار طبقة دافئة حتى في الموسم الجاف."
      },
      {
        day: 7,
        title: "رحلة طيران بانورامية إلى أروشا",
        description: "جولة سفاري صباحية أخيرة، ثم رحلة طيران قصيرة من مدرج سيرونيرا عائدة إلى أروشا لمتابعة رحلتكم.",
        accommodation: "لا ينطبق",
        meals: "الإفطار"
      }
    ]
  },
  {
    slug: "7-days-migration-southern",
    name: "الإصدار الجنوبي: سفاري هجرة موسم الولادة في تنزانيا — ندوتو وفوهة نجورونجورو",
    duration: 9,
    destinations: [
      "ngorongoro",
      "serengeti"
    ],
    type: "migration",
    bestMonths: ['Jan', 'Feb', 'Mar'],
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
    metaTitle: "الإصدار الجنوبي: سفاري هجرة موسم الولادة في تنزانيا | ندوتو وفوهة نجورونجورو | EWA Safari Outfitters",
    metaDescription: "9 أيام، 8 ليالٍ — وسط سيرينغيتي، وأراضي ولادة ندوتو، ووادي أولدوفاي، وفوهة نجورونجورو. شاهدوا واحدة من أكثر لحظات الهجرة الكبرى كثافة. تبدأ الأسعار من 4,730 دولارًا للشخص الواحد.",
    overview: [
      "هناك نسخة من الهجرة الكبرى لا يراها معظم الزوار أبدًا. ليست عبور الأنهار، ولا السهول الشمالية التي لا تنتهي — بل الفصل الأكثر هدوءًا وخشونة الذي يحدث قبل ذلك بأشهر، حين تتجمع مئات الآلاف من حيوانات النو على العشب القصير في ندوتو لتلد. حتى 8,000 عجل يوميًا، تُولد على أرض مفتوحة دون مكان للاختباء، وكل حيوان مفترس في النظام البيئي الجنوبي يعرف ذلك.",
      "هذا هو الإصدار الجنوبي من سلسلة رحلاتنا السفارية التصويرية — تسعة أيام تنتقل من الحياة البرية المقيمة في وسط سيرينغيتي، إلى دراما موسم الولادة في ندوتو، مرورًا بموقع أصل البشرية نفسها في وادي أولدوفاي، ويوم كامل على أرضية فوهة نجورونجورو، قبل الاختتام بوقت ثقافي حقيقي في موتو وا مبو. وبينما يطارد إصدارنا الشمالي دراما عبور الأنهار من يوليو إلى أكتوبر، تتجه هذه الرحلة جنوبًا في فبراير، حين تتصادم حياة جديدة وضغط الحيوانات المفترسة على بعض أكثر السهول المفتوحة تصويرًا في أفريقيا.",
      "ليست سفاري هادئة. بعض الصباحات ستقدّم لكم عجلًا حديث الولادة يجد قدميه للمرة الأولى؛ وأخرى ستقدّم فهدًا في منتصف عملية صيد، أو عشيرة ضباع تعمل على فريسة وسط الغبار. كلاهما حقيقي لما يمثله هذا الموسم فعلًا، وكلاهما السبب في عودة المصورين إليه مرارًا."
    ],
    tagline: "شركة محلية منذ 2022 · دليلون محترفون معتمدون · رحلات مصممة خصيصًا لا مواعيد مجموعة ثابتة",
    bestTimeToTravel: "من أواخر يناير حتى مارس، حين تلد القطعان على سهول ندوتو — هذا البرنامج مرتبط بهذه الفترة تحديدًا",
    whyDifferent: {
      heading: "لماذا هذا الموسم مختلف",
      paragraphs: [
        "تُبنى معظم برامج السفاري حول سؤال واحد: أين الحيوانات؟ يضيف موسم الولادة سؤالًا ثانيًا وأكثر حدة: ماذا سيحدث لها قريبًا؟",
        "لبضعة أسابيع قصيرة، تحتضن السهول حول ندوتو واحدة من أعلى كثافات الحياة البرية الصغيرة الضعيفة على وجه الأرض — ويعرف كل حيوان مفترس على مدى أميال أين يكون بالضبط. يشكّل هذا التوتر كل شيء في طريقة تصوير هذه الأيام. تحافظ المركبات على موقعها بدلًا من التحرك بسرعة، لأن القصة هنا غالبًا ما تستغرق وقتًا لتتكشف: أنثى نو تدور حول مولود لم يجد قدميه بعد، فهد يقرأ القطيع من فوق تلة نمل أبيض، ابن آوى ينتظر عند الأطراف لحظته. لا يكتفي دليلكم بإيجاد الحياة البرية — بل يقرأ التوتر المتصاعد عبر السهول ويساعدكم على أن تكونوا في الموقع الصحيح قبل أن ينفجر.",
        "إنها نوع مختلف عاطفيًا من السفاري عن عبور نهر في الهجرة. أكثر هدوءًا في أماكن، وأكثر حدة في أخرى، ولا تشبه تقريبًا أي شيء آخر يمكن تصويره في شرق أفريقيا."
      ]
    },
    destinationHighlights: {
      heading: "أبرز محطات التصوير",
      items: [
        {
          title: "وسط سيرينغيتي — تصاعد طبيعي",
          text: "يومان بين أعداد الأسود والنمور المقيمة على مدار العام في وادي سيرونيرا قبل أراضي الولادة — إحماء قوي، وفرصة لرؤية سلوك الحيوانات المفترسة في بيئة لم تُحوّلها القطعان بعد."
        },
        {
          title: "ندوتو — حياة وليدة على السهول",
          text: "عشب قصير، آفاق مفتوحة، وآلاف من عجول النو تجد أقدامها خلال دقائق من الولادة. هذا مشهد رقيق وضعيف ومؤثر بصريًا — خلفيات نظيفة، وضوء فبراير الناعم، وبعض أكثر الصور تأثيرًا عاطفيًا التي تقدّمها الهجرة طوال العام."
        },
        {
          title: "ندوتو — الحيوانات المفترسة في حركة",
          text: "حيث توجد حياة جديدة بهذه الكثافة، تتبعها الحيوانات المفترسة. الفهود قوية بشكل خاص هنا، تستخدم السهول المفتوحة للصيد في العلن؛ وتعمل الأسود والضباع وابن آوى جميعها على أطراف القطعان. توقعوا سلوكًا حقيقيًا، لا مجرد مشاهدات بعيدة — هذا موسم مصمم للمصورين الراغبين في سرد قصة، لا مجرد جمع قائمة أنواع."
        },
        {
          title: "وادي أولدوفاي — تغيير في الإيقاع",
          text: "توقف متعمد بين السهول والفوهة عند أحد أهم مواقع علم الإنسان القديم على وجه الأرض — أعادت الاكتشافات الأحفورية هنا تشكيل فهمنا لأصل الإنسان."
        },
        {
          title: "فوهة نجورونجورو — تغيير في المفتاح",
          text: "يمثل يوم كامل داخل النظام البيئي المغلق للفوهة تحولًا متعمدًا عن السهول المفتوحة — حياة برية كثيفة، جدران درامية، وفرصة حقيقية لأنواع لا تقدّمها ندوتو بالكثافة نفسها، بما فيها وحيد القرن الأسود المهدد بالانقراض."
        }
      ]
    },
    highlights: [
      "شاهدوا وصوّروا واحدة من أكثر لحظات الهجرة الكبرى كثافة وسلوكًا",
      "البداية في الحياة البرية المقيمة بوسط سيرينغيتي قبل أراضي الولادة، لتمنح الرحلة تصاعدًا طبيعيًا بدلًا من البدء عند ذروة الكثافة",
      "وقت حقيقي في ندوتو نفسها — يومان كاملان في قلب موسم الولادة، لا مرور واحد متسرع",
      "زيارة لوادي أولدوفاي، أحد أهم مواقع علم الإنسان القديم على وجه الأرض، في الطريق إلى نجورونجورو",
      "وقت ثقافي حقيقي في موتو وا مبو في اليوم الثامن — حياة بلدة السوق، لا توقفًا مُعدًّا مسبقًا",
      "اختتام الرحلة بيوم كامل على أرضية فوهة نجورونجورو، تغيير كامل في الوتيرة والمشهد"
    ],
    heroImage: "/images/gallery/Migration-southern-serengeti1.jpg",
    heroImageAlt: "Wildebeest herd migrating across dirt tracks on the southern Serengeti plains",
    gallery: [],
    included: [
      "جميع رسوم الحدائق والامتيازات ومناطق الحفظ",
      "المركبة والدليل والوقود لكل يوم من أيام جولات السفاري",
      "رحلة الطيران الداخلية أروشا–سيرونيرا",
      "تنقلات المطار",
      "مياه الشرب",
      "إقامة الدليل",
      "جميع الوجبات أثناء السفاري",
      "الإقامة وفق برنامج الرحلة",
      "تغطية إخلاء طبي طارئ"
    ],
    excluded: [
      "رحلات الطيران الدولية",
      "رسوم التأشيرة",
      "التأمين على السفر",
      "الإكراميات",
      "استئجار الكاميرا/العدسات"
    ],
    includedCategorized: {
      transfers: [
        "رحلة الطيران الداخلية أروشا–سيرونيرا",
        "تنقلات المطار"
      ],
      accommodationMeals: [
        "جميع الوجبات أثناء السفاري",
        "الإقامة وفق برنامج الرحلة"
      ],
      guidingGameDrives: [
        "جميع رسوم الحدائق والامتيازات ومناطق الحفظ",
        "المركبة والدليل والوقود لكل يوم من أيام جولات السفاري",
        "مياه الشرب",
        "إقامة الدليل",
        "تغطية إخلاء طبي طارئ"
      ]
    },
    excludedCategorized: [
      "رحلات الطيران الدولية",
      "رسوم التأشيرة",
      "التأمين على السفر",
      "الإكراميات",
      "استئجار الكاميرا/العدسات"
    ],
    notes: [
      "هذا البرنامج مرتبط بموسم الولادة (أواخر يناير–مارس، مثلًا انطلاقة في فبراير) — لا يوجد سعر منفصل لموسم منخفض، إذ إن السفاري نفسه لا يعمل إلا خلال هذه الفترة.",
      "يؤمّن عربون بنسبة 30% حجزكم، ويُستحق باقي المبلغ قبل 60 يومًا من المغادرة.",
      "تخضع الإقامة والأسعار لمدى التوافر، وقد تختلف حسب تاريخ السفر الدقيق ضمن الموسم نفسه.",
      "تحدد الحكومة رسوم دخول الحدائق الوطنية ومناطق الحفظ في تنزانيا، وهي عرضة للتغيير دون إشعار مسبق."
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
        sovereign: 6915.00
      },
      {
        pax: 6,
        reserve: 4730.21,
        sovereign: 6808.96
      }
    ],
    faq: [
      {
        q: "ما الذي يجعل موسم الولادة مختلفًا عن سفاري عادي؟",
        a: "إنه مبني حول السلوك والتوقيت بدلًا من مجرد إيجاد الحياة البرية. تحدث حياة النو الجديدة ونشاط الحيوانات المفترسة الكثيف في قرب شديد على سهول ندوتو المفتوحة، مما يمنح المصورين فرصًا حقيقية لسرد القصص لا تقدّمها جولة سفاري عامة بالكثافة نفسها."
      },
      {
        q: "كم تكلف هذه الرحلة؟",
        a: "تبدأ فئة Wilderness Reserve من 4,730.21 دولارًا للشخص الواحد (6 مسافرين، بمشاركة غرفة توأم)، وترتفع إلى 5,790.63 دولارًا لزوجين يسافران بمفردهما. تبدأ فئة Wilderness Sovereign من 6,808.96 دولارًا للشخص الواحد، وترتفع إلى 7,869.38 دولارًا لمسافرَين اثنين. وبما أن كل رحلة مصممة خصيصًا، اطلبوا عرض سعر شخصيًا لتواريخكم الدقيقة."
      },
      {
        q: "متى بالضبط يكون موسم الولادة؟",
        a: "تمتد الفترة الرئيسية تقريبًا من أواخر يناير حتى مارس، مع بلوغ ذروة الولادة عادة في فبراير."
      },
      {
        q: "لماذا يبدأ هذا البرنامج في وسط سيرينغيتي بدلًا من الطيران مباشرة إلى ندوتو؟",
        a: "يمنح ذلك الرحلة تصاعدًا طبيعيًا — يوم ونصف بين حيوانات سيرينغيتي المفترسة المقيمة على مدار العام قبل أراضي الولادة، بدلًا من بدء الرحلة عند ذروة الكثافة. كما يعني ذلك وقتًا أقل يُقضى في التنقل الصرف لاحقًا في البرنامج."
      },
      {
        q: "ما هو وادي أولدوفاي، ولماذا هو ضمن سفاري للحياة البرية؟",
        a: "وادي أولدوفاي من أهم مواقع علم الإنسان القديم على وجه الأرض — أعادت الاكتشافات الأحفورية هنا على يد عائلة ليكي تشكيل الفهم العلمي لتطور الإنسان المبكر. إنه تغيير متعمد في الإيقاع بين السهول والفوهة، وواحد من أكثر التوقفات التي يتحدث عنها الزوار لاحقًا في هذا البرنامج."
      },
      {
        q: "هل يناسب هذا السفاري المصورين المبتدئين؟",
        a: "نعم — كسائر رحلاتنا السفارية التصويرية، صُمم هذا البرنامج ليناسب كل مستويات المهارة، مع إرشاد عملي ميداني حول الموضع والضوء والإعدادات طوال الرحلة."
      },
      {
        q: "هل هذه رحلة خاصة أم مغادرة جماعية؟",
        a: "مصممة خصيصًا حسب تواريخكم، مع الحفاظ على حجم مجموعة صغير عمدًا بحيث يحظى كل مصور بمساحة عمل مناسبة."
      },
      {
        q: "ما المعدات التي يجب أن أحضرها؟",
        a: "يُنصح بكاميرا DSLR أو بلا مرآة، عدسة بزاوية واسعة إلى متوسطة للمناظر الطبيعية، وعدسة تصوير بعيد لا تقل عن 400 مم — تكافئ عدسات 500-600 مم المواضيع البعيدة، بينما تُعد عدسة 70-200 مم مفيدة للمشاهدات القريبة."
      },
      {
        q: "هل يمكن دمج هذه الرحلة مع الإصدار الشمالي أو امتداد شاطئي؟",
        a: "نعم — اسألوا مستشاركم عن دمج هذا البرنامج مع امتداد شاطئي في زنجبار، أو عن الفروق بين هذا الإصدار الجنوبي وإصدارنا الشمالي (عبور الأنهار من يوليو إلى أكتوبر) إن كنتم تترددون بين الاثنين."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول إلى أروشا",
        location: "أروشا",
        description: "الهبوط في مطار كليمنجارو الدولي واجعلوا الليلة الأولى سهلة — استقروا في أروشا، وتعرّفوا على دليلكم خلال العشاء، وناقشوا الموسم المقبل. موسم الولادة لا يشبه أي فترة سفاري أخرى، لذا تهم هذه الإحاطة: ما يجب توقعه عاطفيًا بقدر ما هو تصويري، وكيف ستُنظَّم وتيرة الأيام، وما الذي سيرصده دليلكم بمجرد وصولكم إلى السهول.",
        accommodation: "أروشا، حسب الفئة",
        meals: "العشاء",
        insiderFact: "تحدد هذه الإحاطة وتيرة الرحلة بأكملها — سيشرح دليلكم كيف تحافظ المركبات على موقعها للمشاهد المتكشفة بدلًا من التحرك بسرعة، وهو أمر محوري في طريقة تصوير موسم الولادة.",
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
        title: "من أروشا إلى وسط سيرينغيتي",
        location: "الطيران إلى وسط سيرينغيتي",
        description: "رحلة طيران بانورامية من أروشا إلى مدرج سيرونيرا تستبدل تنقلًا بريًا طويلًا بعصر يبدأ فعليًا في الميدان، وسط أعداد الأسود والنمور المقيمة في سيرينغيتي.",
        accommodation: "وسط سيرينغيتي، حسب الفئة",
        meals: "جميع الوجبات",
        insiderFact: "فخور سيرونيرا المقيمة لا تتبع الهجرة إطلاقًا — أراضٍ دائمة ومياه على مدار العام، وبعض أكثر مشاهدات الحيوانات المفترسة موثوقية في النظام البيئي بأكمله.",
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
        title: "يوم كامل، وسط سيرينغيتي",
        location: "وسط سيرينغيتي",
        description: "يوم كامل لاستكشاف الحياة البرية المقيمة على مدار العام في وادي سيرونيرا — إحماء قوي قبل أراضي الولادة، وفرصة لرؤية سلوك الحيوانات المفترسة في بيئة لم تُحوّلها القطعان بعد.",
        accommodation: "وسط سيرينغيتي، حسب الفئة",
        meals: "جميع الوجبات",
        insiderFact: "يشكّل الغطاء الكثيف من أشجار التين والسوسج في وادي سيرونيرا أرضًا مثالية للنمور — غالبًا ما يكون هذا أفضل يوم واحد لمشاهدة النمور في البرنامج بأكمله.",
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
        title: "من وسط سيرينغيتي إلى منطقة ندوتو",
        location: "التنقل إلى ندوتو",
        description: "الطريق جنوبًا إلى نظام ندوتو البيئي، وأول تذوق لما يجعل هذا المكان مختلفًا جدًا — سهول عشب قصير مفتوحة، ونوعية الضوء الخاصة التي تجعل ندوتو مفضلة لدى المصورين عامًا بعد عام.",
        accommodation: "منطقة ندوتو، حسب الفئة",
        meals: "جميع الوجبات",
        insiderFact: "تقع ندوتو خارج الحدود الرسمية لحديقة سيرينغيتي مباشرة، داخل منطقة حفظ نجورونجورو — تصريح مختلف، لكن الهجرة نفسها.",
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
        title: "يوم كامل، منطقة ندوتو",
        location: "ندوتو",
        description: "يوم كامل في قلب موسم الولادة — عجول نو حديثة الولادة تجد أقدامها خلال دقائق من ولادتها، والحيوانات المفترسة التي تتبعها عن قرب. يحافظ دليلكم على موقعه بدلًا من التحرك بسرعة، لأن القصة هنا غالبًا ما تستغرق وقتًا لتتكشف.",
        accommodation: "منطقة ندوتو، حسب الفئة",
        meals: "جميع الوجبات",
        insiderFact: "يُولد ما يصل إلى 8,000 عجل عبر سهول ندوتو في يوم واحد عند ذروة الموسم — يجد معظمها أقدامه خلال دقائق.",
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
        title: "نصف يوم في ندوتو ووادي أولدوفاي",
        location: "من ندوتو إلى كاراتو، عبر وادي أولدوفاي",
        description: "صباح أخير على سهول ندوتو قبل التوجه نحو كاراتو، بتوقف عند وادي أولدوفاي — أحد أهم مواقع علم الإنسان القديم على وجه الأرض، حيث أعادت الاكتشافات الأحفورية تشكيل فهمنا لأصل الإنسان.",
        accommodation: "منطقة كاراتو/نجورونجورو، حسب الفئة",
        meals: "جميع الوجبات",
        insiderFact: "دفعت الاكتشافات الأحفورية في وادي أولدوفاي على يد عائلة ليكي الخط الزمني المعروف لتطور الإنسان إلى الوراء بأكثر من مليون عام.",
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
        title: "جولة يوم في فوهة نجورونجورو",
        location: "فوهة نجورونجورو",
        description: "يوم كامل للنزول إلى النظام البيئي المغلق لأرضية الفوهة — حياة برية كثيفة، جدران درامية، وفرصة حقيقية لأنواع لا تقدّمها السهول بالكثافة نفسها، بما فيها وحيد القرن الأسود المهدد بالانقراض.",
        accommodation: "منطقة كاراتو/نجورونجورو، حسب الفئة",
        meals: "جميع الوجبات",
        insiderFact: "تحمل أرضية الفوهة بعضًا من أفضل فرص النظام البيئي لمشاهدة وحيد القرن الأسود — يحافظ وعاؤها المغلق البالغة مساحته نحو 260 كيلومترًا مربعًا على تركّز الحياة البرية المقيمة على مدار العام.",
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
        title: "أنشطة موتو وا مبو الثقافية",
        location: "موتو وا مبو، التنقل إلى أروشا",
        description: "تغيير حقيقي في الإيقاع — جولة ثقافية عبر بلدة السوق موتو وا مبو، بتفاعل مجتمعي حقيقي بدلًا من توقف مُعدّ مسبقًا بين جولات السفاري.",
        accommodation: "أروشا، حسب الفئة",
        meals: "جميع الوجبات",
        insiderFact: "يعني اسم موتو وا مبو \"نهر البعوض\" — لكنها اليوم أشهر بكونها إحدى أكثر بلدات تنزانيا تنوعًا عرقيًا، بأكثر من 120 قبيلة ممثَّلة في سوق واحد.",
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
        title: "جولة مدينة أروشا والمغادرة",
        location: "أروشا / المغادرة",
        description: "صباح أخير لاستكشاف أروشا قبل التوجه إلى مطار كليمنجارو الدولي لرحلة العودة إلى الوطن — غبار السهول لا يزال على أحذيتكم، وبطاقة ذاكرة تحمل واحدة من أكثر القصص غرابة التي يمكن أن يرويها شرق أفريقيا.",
        accommodation: "لا ينطبق",
        meals: "الإفطار"
      }
    ]
  },
  {
    slug: "10-days-luxury-family",
    name: "سفاري تنزانيا الفاخر للعائلات لمدة 10 أيام",
    duration: 10,
    destinations: [
      "arusha",
      "tarangire",
      "ngorongoro",
      "serengeti"
    ],
    type: "big_five_game_drives",
    priceFrom: 6025.21,
    groupSize: {
      min: 3,
      max: 8
    },
    badge: "popular",
    bestFor: [
      "families"
    ],
    metaDescription: "سفاري خاصة في تنزانيا، بوتيرة هادئة تناسب جيلين من العائلة معًا — أروشا وتارانجيري ونجورونجورو وسيرينغيتي. فئتان للإقامة، وتبدأ الأسعار من 6,025 دولارًا أمريكيًا للشخص الواحد.",
    overview: [
      "عشرة أيام كافية لتمنح العائلة القوس الكامل لشمال تنزانيا دون تسرع في أي جزء منه — محطة أولى سهلة حيث تكاد الزرافات وقرود الكولوبس تكون مضمونة خلال ساعة من المطار، ويوم كامل مع قطعان فيلة تارانجيري تحت أشجار باوباب عمرها ألف عام، ونزول إلى عالم فوهة نجورونجورو المغلق الذي يضم نحو 30,000 حيوان، وثلاثة أيام دون تعجل في سيرينغيتي لاختتام الرحلة. تقع أروشا على ارتفاع نحو 1,400 متر (4,593 قدمًا)، ما يمنح القادمين الجدد فترة تأقلم هادئة قبل أن تبدأ الحدائق فعليًا — واحدة من عدة تفاصيل صغيرة تميّز برنامجًا مصممًا للعائلات عن آخر يُوصف فقط بأنه مناسب للعائلات.",
      "متاحة بفئتين — Wilderness Reserve وWilderness Sovereign — تتبعان المسار نفسه على مدى عشرة أيام بالأنشطة نفسها، والحدائق نفسها، وعدد جولات السفاري نفسه. ما يتغير بينهما يتعلق كليًا بكيفية العناية بالعائلة في الساعات بين جولات السفاري: يحافظ Wilderness Reserve على الراحة والاتساع والذوق الرفيع؛ بينما يضع Wilderness Sovereign كل ليلة في أكثر المنشآت المناسبة للعائلات تميزًا فيما تقدّمه الدائرة الشمالية."
    ],
    highlights: [
      "حديقة أروشا الوطنية في اليوم الثاني — الزرافات وقرود الكولوبس وسفاري تنزانيا الوحيد المُرشَد سيرًا على الأقدام على مدار العام، لتُدخل العائلة تدريجيًا إلى الحياة البرية قبل الحدائق الكبرى",
      "يوم كامل مع قطعان فيلة تارانجيري، تحت أشجار باوباب وقفت لأكثر من ألف عام",
      "صباح ثقافي في كاراتو بين تارانجيري والفوهة — استراحة حقيقية وغير متعجلة من جولات السفاري يتذكرها الأطفال والكبار طويلًا عادة",
      "فوهة نجورونجورو بأكملها — نحو 30,000 حيوان داخل كالديرا مغلقة واحدة، مع حضور الحيوانات الخمس الكبرى جميعها",
      "زيارة لمضارب الماساي ووادي أولدوفاي، حيث تُعرَض اكتشافات أحفورية عمرها 1.8 مليون سنة بأسلوب حي للمسافرين الصغار عبر متحف في الموقع",
      "ثلاثة أيام كاملة في سيرينغيتي، بإرشاد مصمم خصيصًا مع مراعاة العائلات — تتبع الآثار وسلوك الحيوانات والحياة الطيرية تُشرح بوتيرة تُبقي كل الأعمار منخرطة",
      "تغطية كل مستويات الراحة العائلية، من الفسيح المدروس إلى الاستثنائي حقًا، دون تغيير يوم واحد من المسار نفسه"
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
        sovereign: 11960.00
      },
      {
        pax: 6,
        reserve: 6025.21,
        sovereign: 11853.96
      }
    ],
    included: [
      "جميع رسوم دخول الحدائق الوطنية",
      "جميع جولات السفاري بمركبة دفع رباعي خاصة وفسيحة",
      "دليل محترف يراعي احتياجات العائلات",
      "جميع الوجبات",
      "الإقامة وفق برنامج الرحلة",
      "تنقلات المطار"
    ],
    excluded: [
      "رحلات الطيران الدولية",
      "رسوم التأشيرة",
      "التأمين على السفر",
      "الإكراميات",
      "الأنشطة الاختيارية (مثل سفاري منطاد الهواء الساخن)"
    ],
    includedCategorized: {
      transfers: [
        "تنقلات المطار",
        "رحلة الطيران من سيرونيرا إلى أروشا (اليوم التاسع)"
      ],
      accommodationMeals: [
        "جميع الوجبات",
        "الإقامة وفق برنامج الرحلة"
      ],
      guidingGameDrives: [
        "جميع رسوم دخول الحدائق الوطنية",
        "جميع جولات السفاري بمركبة دفع رباعي خاصة وفسيحة",
        "دليل محترف يراعي احتياجات العائلات"
      ]
    },
    excludedCategorized: [
      "رحلات الطيران الدولية",
      "رسوم التأشيرة",
      "التأمين على السفر",
      "الإكراميات",
      "الأنشطة الاختيارية (مثل سفاري منطاد الهواء الساخن)"
    ],
    notes: [
      "الأسعار المعروضة هي للشخص الواحد بمشاركة الإقامة؛ تختلف تشكيلات العائلة والغرف المتصلة حسب النُزل وتُؤكَّد عند الحجز.",
      "تخضع الإقامة والأسعار لمدى التوافر، وقد تختلف حسب تاريخ السفر الدقيق ضمن الموسم نفسه.",
      "تحدد الحكومة رسوم دخول الحدائق الوطنية ومناطق الحفظ في تنزانيا، وهي عرضة للتغيير دون إشعار مسبق."
    ],
    faq: [
      {
        q: "ما الفرق بين الفئتين؟",
        a: "المسار والحدائق وعدد جولات السفاري متطابقة في كلتا الحالتين. ما يتغير هو مستوى المنشأة: Wilderness Reserve مريح وفسيح ومدروس؛ بينما يضع Wilderness Sovereign عائلتكم في بعض أكثر النُزل تميزًا في الدائرة الشمالية، ليلة بعد ليلة."
      },
      {
        q: "هل يوجد حد أدنى للعمر في هذا السفاري؟",
        a: "لا يوجد حد أدنى صارم على مستوى الحدائق لجولات السفاري، رغم أن الأطفال الصغار جدًا قد يجدون الأيام الطويلة في المركبة مرهقة، ولبعض الأنشطة الاختيارية (مثل سفاري السير المُرشَد في حديقة أروشا الوطنية) إرشادات عمرية خاصة بها. أخبروا مستشاركم بأعمار أطفالكم عند الحجز ويمكن تعديل البرنامج ووتيرته وفقًا لذلك."
      },
      {
        q: "هل نحتاج للقلق بشأن الملاريا لأطفالنا؟",
        a: "يقع معظم هذا المسار في منطقة معرضة لخطر الملاريا، لذا يستحق الأمر مناقشة خيارات الوقاية من الملاريا لأطفالكم مع طبيب العائلة قبل السفر بوقت كافٍ. الأكمام الطويلة، وطارد الحشرات، والناموسيات المعالجة (معيار في كل نُزل ضمن هذا البرنامج) كلها تقلل الخطر بشكل كبير."
      },
      {
        q: "هل ستحصل عائلتنا على غرف متصلة أو متجاورة؟",
        a: "يمكن لمعظم المنشآت في هذا البرنامج توفير غرف عائلية متصلة أو متجاورة، رغم أن التشكيلات الدقيقة تختلف حسب النُزل وتُؤكَّد عند الحجز بدلًا من ضمانها مسبقًا — أخبرونا بحجم عائلتكم وتفضيلات النوم مبكرًا وسيطابقكم مستشاركم مع النُزل المناسبة."
      },
      {
        q: "هل هذا برنامج جيد لعطلات المدارس؟",
        a: "نعم — يُحجز هذا المسار عادة حول عطلتي يوليو/أغسطس وديسمبر المدرسية، ويعمل بالقدر نفسه من الجودة خارج هاتين الفترتين للعائلات ذات المرونة الأكبر، حين تكون الحدائق أهدأ."
      },
      {
        q: "كم تتغير الأسعار حسب حجم العائلة؟",
        a: "تُقسَّم تكاليف المركبة والدليل وبعض الإقامة على المجموعة، لذا ينخفض السعر للفرد الواحد عمومًا كلما سافر عدد أكبر من أفراد العائلة معًا — راجعوا جدول الأسعار أعلاه."
      },
      {
        q: "ما المشمول في السعر، وما غير المشمول؟",
        a: "المشمول: جميع رسوم دخول الحدائق الوطنية، جميع جولات السفاري بمركبة دفع رباعي خاصة وفسيحة، دليل محترف يراعي احتياجات العائلات، جميع الوجبات، وتنقلات المطار. غير المشمول: رحلات الطيران الدولية، رسوم التأشيرة، التأمين على السفر، الإكراميات، والأنشطة الاختيارية مثل سفاري منطاد الهواء الساخن."
      },
      {
        q: "هل يمكن دمج هذا مع امتداد شاطئي؟",
        a: "نعم — تمدّد كثير من العائلات هذا السفاري بعدة أيام في زنجبار لاحقًا. اسألوا مستشاركم عن إضافة امتداد شاطئي لأي من الفئتين."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول إلى أروشا",
        description: "الهبوط في مطار كليمنجارو الدولي والتوجه إلى الفندق — ترحيب حار، وشرح واضح للأيام العشرة المقبلة، وليلة أولى مريحة للتخلص من إرهاق السفر.",
        accommodation: "أروشا، حسب الفئة",
        meals: "العشاء",
        insiderFact: "تقع أروشا على ارتفاع نحو 1,400 متر (4,593 قدمًا)، ما يمنح القادمين الجدد فترة تأقلم هادئة قبل أن تبدأ الحدائق فعليًا.",
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
        title: "حديقة أروشا الوطنية",
        description: "طريق قصير من المدينة إلى حديقة مصممة تمامًا لهذا النوع من الصباح الأول — زرافات وحمير وحشية وقرود كولوبس قريبة بشكل موثوق، وبحيرة موميلا تعكس جبل ميرو في صباح هادئ، وواحدة من رحلات السفاري القليلة المُرشَدة سيرًا على الأقدام في تنزانيا المتاحة للعائلات على مدار العام.",
        accommodation: "أروشا، حسب الفئة",
        meals: "جميع الوجبات",
        insiderFact: "حديقة أروشا الوطنية من الحدائق القليلة في تنزانيا التي يُسمح فيها بسفاري مُرشَد سيرًا على الأقدام على مدار العام.",
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
        title: "التوجه إلى تارانجيري",
        description: "يفتح الطريق جنوبًا على سهول تارانجيري المزينة بأشجار الباوباب، حيث تتجمع أكبر قطعان الفيلة في تنزانيا حول آخر مصدر مياه دائم على مدى أميال.",
        accommodation: "منطقة تارانجيري/كاراتو، حسب الفئة",
        meals: "جميع الوجبات",
        insiderFact: "تحتضن تارانجيري أكبر تجمع للفيلة في تنزانيا خارج موسم الأمطار، تجذبه آخر مياه دائمة على مدى أميال.",
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
        title: "صباح في كاراتو",
        description: "تغيير في الوتيرة، مُدرج عمدًا في منتصف الرحلة: تجربة ثقافية محلية حول كاراتو، بعيدًا عن المركبة وفي حوار حقيقي مع المجتمع الذي يعتبر هذا الجزء من المرتفعات وطنه. هذا هو اليوم الذي يفاجئ العائلات أكثر من غيره عادة — ليس بالحياة البرية، بل بالناس.",
        accommodation: "منطقة تارانجيري/كاراتو، حسب الفئة",
        meals: "جميع الوجبات",
        insiderFact: "تقع كاراتو خارج حدود منطقة حفظ نجورونجورو مباشرة — آخر شريط من الأراضي الزراعية قبل مرتفعات الفوهة.",
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
        title: "الدخول إلى فوهة نجورونجورو",
        description: "يوم كامل للنزول إلى أرضية الفوهة، موطن ما يقارب 30,000 حيوان وجميع أفراد الحيوانات الخمس الكبرى.",
        accommodation: "منطقة نجورونجورو، حسب الفئة",
        meals: "جميع الوجبات",
        insiderFact: "فوهة نجورونجورو نظام بيئي مغلق تبلغ مساحته نحو 260 كيلومترًا مربعًا (100 ميل مربع) — لا تغادرها معظم الحيوانات المقيمة أبدًا.",
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
        title: "مضارب الماساي ووادي أولدوفاي",
        description: "زيارة لمضرب ماساي — استقبال حقيقي في مسكن وأسلوب حياة، لا عرضًا مُعدًّا مسبقًا — تليها زيارة لوادي أولدوفاي، حيث تُشرح اكتشافات عائلة ليكي التي يعود عمرها إلى 1.8 مليون سنة بطريقة تجذب انتباه المسافرين الصغار فعليًا. يستمر بعد الظهر نحو سيرينغيتي.",
        accommodation: "وسط سيرينغيتي، حسب الفئة",
        meals: "جميع الوجبات",
        insiderFact: "يحوّل متحف وادي أولدوفاي في الموقع اكتشافات أحفورية عمرها 1.8 مليون سنة إلى شيء يجده حتى المسافرون الصغار مشوقًا فعليًا.",
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
        title: "سيرينغيتي، يوم كامل",
        description: "يوم كامل من جولات السفاري عبر وادي سيرونيرا، حيث تلتقي ثلاث بيئات وتبقى القطط الكبيرة المقيمة في مكانها على مدار العام بدلًا من اتباع الهجرة. يقرأ دليلكم وتيرة اليوم لكل العائلة — يتتبع الآثار، ويشرح السلوك، ويعرف متى يستحق شبل أسد أو عائلة خنازير بري التوقف مرتين.",
        accommodation: "وسط سيرينغيتي، حسب الفئة",
        meals: "جميع الوجبات",
        insiderFact: "يقع وادي سيرونيرا عند تقاطع ثلاث بيئات، وهو سبب احتفاظه بقطط كبيرة مقيمة على مدار العام لا في موسم الهجرة فقط.",
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
        title: "سيرينغيتي، يوم كامل",
        description: "يوم ثانٍ كامل من جولات السفاري، بوتيرة لا تشعر بالتسرع أبدًا — يقرأ دليلكم اليوم لكل العائلة، ليضمن ألا يشعر أحد بالاستعجال بعد مشاهدة جيدة.",
        accommodation: "وسط سيرينغيتي، حسب الفئة",
        meals: "جميع الوجبات",
        insiderFact: "يقرأ الأدلاء الآثار الطازجة وتحديثات اللاسلكي من مركبات أخرى لإعادة التموضع طوال اليوم، بدلًا من اتباع مسار ثابت.",
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
        title: "من سيرينغيتي إلى أروشا",
        description: "رحلة طيران قصيرة من مدرج سيرونيرا عائدة إلى أروشا تختتم أيام الحياة البرية — أقل من ساعة في الجو، مقابل رحلة برية تتجاوز ست ساعات على المسار نفسه.",
        accommodation: "أروشا، حسب الفئة",
        meals: "جميع الوجبات",
        insiderFact: "تستغرق رحلة الطيران البرية من سيرينغيتي إلى أروشا أقل من ساعة، مقارنة برحلة برية تتجاوز 6 ساعات على المسار نفسه.",
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
        title: "المغادرة",
        description: "التوجه إلى المطار، وتعود معكم عشرة أيام من الذكريات العائلية إلى الوطن.",
        accommodation: "لا ينطبق",
        meals: "الإفطار"
      }
    ]
  },
  {
    slug: "12-days-wild-wilderness",
    name: "سفاري البرية 12 يومًا: تجارب ثقافية ورحلة تسلق نهارية في كليمنجارو",
    duration: 12,
    destinations: [
      "kilimanjaro",
      "manyara",
      "tarangire",
      "ngorongoro",
      "serengeti"
    ],
    type: "big_five_game_drives",
    bestMonths: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Jan', 'Feb'],
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
    metaDescription: "رحلة تنزانية مدتها 12 يومًا تجمع بين نزهة يومية على سفح كليمنجارو وثقافة الماساي والدائرة البرية الكاملة — مانيارا وتارانجيري ونجورونجورو وسيرينغيتي. تبدأ الأسعار من 5,857 دولارًا للشخص الواحد.",
    overview: [
      "تطلب معظم برامج تنزانيا الممتدة على اثني عشر يومًا منكم الاختيار بين الجبل والسهول. أما هذا البرنامج فيرفض الاختيار. يبدأ على السفح الغربي الأكثر هدوءًا لجبل كليمنجارو، حيث تقضون وقتًا حقيقيًا مع مجتمع من الماساي، ثم تشدّون أحذية المشي ليوم كامل من التسلق نحو هضبة شيرا — إحدى أكثر الفوهات البركانية إثارة في الجبل، وتجربة تسلق حقيقية لا مجرد محطة عابرة للتصوير. ومن هناك، ينتقل البرنامج إلى دائرة الحياة البرية التي تشتهر بها تنزانيا: بحيرة مانيارا وتارانجيري وفوهة نجورونجورو، وثلاثة أيام كاملة في سيرينغيتي، مع تجارب ثقافية — زيارة قرية للماساي برفقة الزعيم لوبولو، ونزهة قهوة في كاراتو — منسوجة في صلب البرنامج لا مضافة إليه.",
      "إنها رحلة مصمّمة للمسافرين الذين يفضّلون العمق على قائمة مهام متسرّعة: مشي حقيقي على سفوح كليمنجارو، وحوار حقيقي داخل مجتمعات الماساي، ووقت حقيقي في كل حديقة من الحدائق البارزة في تنزانيا، بدلًا من ليلة واحدة عابرة في كل محطة. سواء كنتم تسعون خلف الخمسة الكبار أو تحدٍّ بدني على الجبل أو تبادل ثقافي أصيل، يمنح هذا البرنامج كلًّا من هذه التجارب فصلًا خاصًا به بدلًا من حشرها على هامش بعضها بعضًا."
    ],
    tagline: "ملكية محلية منذ عام 2022 · مرشدون معتمدون محترفون · رحلات مصممة خصيصًا لا مواعيد جماعية ثابتة",
    bestTimeToTravel: "على مدار العام؛ وتكون رحلة هضبة شيرا أكثر راحة في موسمي الجفاف (يونيو–أكتوبر ويناير–فبراير)",
    whyDifferent: {
      heading: "لماذا يتميّز هذا البرنامج",
      paragraphs: [
        "تتعامل الكثير من برامج «البرية والثقافة» مع الكلمتين بشكل سطحي — محطة واحدة في قرية، ورحلة تسلق واحدة، محشورتان بين أيام تنقّل طويلة. أما هذا البرنامج فيمنح كل عنصر مساحته الحقيقية الخاصة: يومان كاملان على السفوح الغربية لكليمنجارو، تتضمّنان رحلة تسلق حقيقية حتى ارتفاع 3600 متر على هضبة شيرا برفقة حارس مسلّح ومرشد جبلي محلي؛ وصباح ثقافي حقيقي مع الماساي في مجتمع الزعيم لوبولو، وليس مجرد عرض رقص؛ ودائرة شمالية كاملة — مانيارا وتارانجيري ونجورونجورو وسيرينغيتي — بوتيرة تتيح عدة ليالٍ في كل محطة بدلًا من مبيت واحد متسرّع.",
        "تُقدَّم كل ليلة إقامة بفئتين — Wilderness Reserve وWilderness Sovereign — بحيث يبقى هيكل البرنامج ذاته أيًّا كانت طريقة سفركم، فيما يظهر الفرق في النُّزل نفسها لا في وتيرة أيامكم أو محتواها."
      ]
    },
    destinationHighlights: {
      heading: "أبرز المحطات",
      items: [
        {
          title: "غرب كليمنجارو وهضبة شيرا",
          text: "وجه أكثر خضرة وبرّية للجبل، لا يراه معظم الزوار أبدًا، يحاذي ممرات الفيلة في أمبوسيلي. تصعد رحلة هضبة شيرا النهارية من نحو 2000 متر إلى 3600 متر عبر فوهة بركانية باتت اليوم مدرجة موقعًا للتراث العالمي، وتظهر قمة كيبو المكسوة بالثلوج من الدرب في الأيام الصافية."
        },
        {
          title: "انغماس ثقافي في عالم الماساي",
          text: "تجربتان ثقافيتان متمايزتان — صباح غير متعجّل مع مجتمع من الماساي على السفوح الغربية لكليمنجارو يُختتم برقصة تقليدية مساءً، وزيارة ثانية لقرية الزعيم لوبولو قرب كاراتو. إنه وقت يُقضى في الحوار والحياة اليومية، لا محطة معدّة سلفًا لخمس دقائق."
        },
        {
          title: "الدائرة الشمالية الكاملة",
          text: "نزهة القرية وجولة السفاري في بحيرة مانيارا، وقطعان الفيلة وسهول تارانجيري المرصّعة بأشجار الباوباب، ويوم كامل على أرض فوهة نجورونجورو، وثلاثة أيام كاملة في سيرينغيتي — أبرز وجهات الحياة البرية في تنزانيا، تُمنح كل منها وقتًا حقيقيًا بدلًا من عبور متسرّع واحد."
        }
      ]
    },
    highlights: [
      "الجمع بين يوم تسلق حقيقي في كليمنجارو وسفاري حياة برية كامل، بدلًا من الاختيار بين أحدهما",
      "وقت حقيقي وغير متعجّل داخل مجتمعات الماساي — لا زيارة ثقافية عابرة من عشر دقائق",
      "تغطية الدائرة الشمالية الكاملة لتنزانيا — مانيارا وتارانجيري ونجورونجورو وسيرينغيتي — بوتيرة مريحة",
      "سفر خاص ومصمَّم خصيصًا، مع فئة إقامة تناسب أسلوبكم، من المريح إلى الراقي"
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
      "جميع رسوم الحدائق والمحميات",
      "جميع جولات السفاري ورحلة هضبة شيرا النهارية (تشمل حارسًا مسلّحًا ومرشدًا جبليًا)",
      "رسوم التجارب الثقافية",
      "مرشد محترف طوال الرحلة",
      "جميع الوجبات المحددة يوميًا",
      "الإقامة في الفئة التي تختارونها",
      "جميع التنقلات من وإلى المطار وبين الوجهات"
    ],
    excluded: [
      "الرحلات الجوية الدولية",
      "رسوم التأشيرة",
      "التأمين على السفر",
      "الإكراميات",
      "المصروفات الشخصية"
    ],
    notes: [
      "الأسعار المعروضة للشخص الواحد بنظام تقاسم غرفة مزدوجة.",
      "تشمل الفئتان كلتاهما رسوم رحلة هضبة شيرا النهارية، ورسوم دخول حديقة أروشا الوطنية والمشي والحارس، إضافة إلى رسوم الحدائق المؤكدة في كل محطة (نجورونجورو وبحيرة مانيارا وتارانجيري وسيرينغيتي) — وليس الإقامة فقط.",
      "اختيارات نُزل فئة Wilderness Sovereign خاضعة للتوافر والتأكيد عند الحجز.",
      "تخضع الإقامة والأسعار للتوافر وقد تتفاوت وفق تاريخ السفر الدقيق ضمن الموسم.",
      "تحدد الحكومة رسوم الحدائق الوطنية ومناطق الحفظ في تنزانيا، وهي عرضة للتغيير دون إشعار مسبق."
    ],
    faq: [
      {
        q: "هل أحتاج إلى خبرة في التسلق لرحلة هضبة شيرا النهارية؟",
        a: "لا تلزم خبرة تسلق تقنية — فهذه رحلة نهارية بمرشد وليست محاولة للوصول إلى القمة، تُقطع بوتيرتكم الخاصة برفقة حارس مسلّح ومرشد جبلي محلي. يجعل المستوى المعقول من اللياقة اليوم أكثر متعة، لكنها متاحة لمعظم المسافرين المرتاحين للمشي لساعات عدة على ارتفاع."
      },
      {
        q: "هل يناسب هذا البرنامج زوّار تنزانيا لأول مرة؟",
        a: "نعم — فهو يغطي الدائرة الشمالية الكاملة (مانيارا وتارانجيري ونجورونجورو وسيرينغيتي) إلى جانب تجارب ثقافية أصيلة ويوم تسلق جبلي، ما يجعله مقدمة شاملة إلى تنزانيا للمسافرين الراغبين في أكثر من مجرد سفاري تقليدي بجولات القيادة."
      },
      {
        q: "ما الفرق بين فئتي Wilderness Reserve وWilderness Sovereign؟",
        a: "تتبع الفئتان كلتاهما البرنامج ذاته على مدى 12 يومًا، بالمسار والأنشطة نفسها — ويكمن الفرق كليًا في الإقامة، من نُزل ومخيمات مريحة وموقعها جيد (Wilderness Reserve) إلى منشآت أكثر رقيًا في كل محطة (Wilderness Sovereign)."
      },
      {
        q: "كم يبلغ حجم المشي إلى جانب رحلة هضبة شيرا؟",
        a: "سفاري المشي في حديقة أروشا الوطنية في اليوم الرابع مشيٌ أقصر وأكثر استرخاءً، يركّز على التتبع ومشاهدة الحياة البرية سيرًا على الأقدام، وهو أقل إرهاقًا بكثير من يوم هضبة شيرا. وكلاهما اختياري بمعنى أن الوتيرة قابلة للتعديل مع مرشدكم."
      },
      {
        q: "ماذا تتضمن رحلة كليمنجارو النهارية فعليًا؟",
        a: "تُسعَّر رحلة هضبة شيرا النهارية بمبلغ 200 دولار للشخص الواحد، وتشمل حارس الحديقة المسلّح والمرشد الجبلي المحلي طوال اليوم، مع صعود من نحو 2000 متر إلى الهضبة نفسها عند 3600 متر. إنه يوم تسلق حقيقي لا محطة رمزية — توقعوا ساعات عدة على الدرب، تحدد وتيرتها لياقتكم ومدى رغبتكم في التقدم داخل الهضبة (نحو مخيم شيرا 1 أو ممر الأسد أو قمم شيرا الصخرية)."
      },
      {
        q: "كيف تبدو تجربة سفاري المشي في حديقة أروشا الوطنية؟",
        a: "هذا سفاري مشي بمرشد داخل حديقة أروشا الوطنية — تتبّع الحياة البرية سيرًا على الأقدام بدلًا من المركبة، مع حارس مسلّح تفرضه لوائح الحديقة إلى جانب مرشد السفاري. تشتهر الحديقة بالزرافات والجاموس والرئيسيات التي تسكن الغابة، إضافة إلى إطلالات آسرة على جبل ميرو. إنه مشي أقصر وأهدأ من يوم هضبة شيرا، وطريقة مختلفة حقًا لاختبار الحياة البرية مقارنة بجولة السفاري الاعتيادية."
      },
      {
        q: "هل يمكن تقصير هذا البرنامج أو تمديده؟",
        a: "نعم — فهذا مسار مصمَّم خصيصًا لا باقة ثابتة. يمكن إضافة أيام أو حذفها في أي محطة، وهو يتناسب بشكل طبيعي مع تمديد لشاطئ زنجبار في نهاية الرحلة."
      },
      {
        q: "هل هذا سفاري خاص أم جولة جماعية؟",
        a: "خاص طوال الرحلة — مركبتكم ومرشدكم الخاصان طوال الأيام الاثني عشر، مصممان وفق تواريخكم لا وفق موعد انطلاق جماعي ثابت."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول إلى أروشا",
        location: "أروشا",
        description: "الهبوط في مطار كليمنجارو الدولي والانتقال بسيارة خاصة إلى أروشا للمبيت، على أن تُعقد جلسة إحاطة كاملة عن السفاري صباح اليوم التالي.",
        accommodation: "فندق في أروشا",
        meals: "الإفطار",
        insiderFact: "تقع أروشا على ارتفاع مريح ومناخها أكثر برودة من السهول التي تنتظركم — يُستحسن تحضير طبقة خفيفة من الملابس للمساء.",
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
        title: "غرب كليمنجارو: ثقافة",
        location: "غرب كليمنجارو",
        description: "بعد إفطار مبكر، تنطلق الرحلة نحو السفح الغربي لكليمنجارو — الأكثر خضرة والأقل ازدحامًا مقارنة بمسارات التسلق التقليدية، والمحاذي لأمبوسيلي، حيث تعيش قطعان فيلة كبيرة حقًا تتنقل عبر ممرات موسمية. يتمحور اليوم الثاني حول صباح ثقافي غير متعجّل مع الماساي: وقت حقيقي مع المجتمع بوتيرته الخاصة، تليه ظهيرة هادئة في النُّزل وعرض رقص تقليدي مساءً.",
        accommodation: "نُزل في غرب كليمنجارو",
        meals: "جميع الوجبات",
        insiderFact: "يشهد هذا الجانب من كليمنجارو جزءًا يسيرًا فقط من حركة الزوار التي تشهدها مسارات التسلق التقليدية في الجانب الجنوبي من الجبل.",
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
        title: "رحلة هضبة شيرا النهارية",
        location: "غرب كليمنجارو",
        description: "اليوم الثالث هو يوم التسلق المحوري في البرنامج. تنطلق الرحلة إلى بوابة لوندوروسي ثم إلى رحلة هضبة شيرا، صعودًا من نحو 2000 متر إلى الهضبة نفسها عند 3600 متر — وهي فوهة بركانية ومدرجة موقعًا للتراث العالمي، تُقطع بوتيرتكم الخاصة برفقة حارس مسلّح ومرشد جبلي محلي. يمكن المضي قدمًا نحو مخيم شيرا 1 وممر الأسد وسفوح قمم شيرا الصخرية إن سمحت الطاقة، مع رؤية قمة كيبو المكسوة بالثلوج من الدرب في الأيام الصافية، قبل النزول مجددًا إلى النُّزل.",
        accommodation: "نُزل في غرب كليمنجارو",
        meals: "جميع الوجبات",
        insiderFact: "يؤثر الارتفاع في كل شخص بطريقة مختلفة — لذا تُقطع الرحلة بوتيرتكم الخاصة تحديدًا، لتحدد لياقتكم الإيقاع لا جدول زمني ثابت.",
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
        title: "سفاري مشي في حديقة أروشا الوطنية",
        location: "أروشا",
        description: "بعد الإفطار، تنطلق الرحلة إلى حديقة أروشا الوطنية لسفاري مشي بمرشد — طريقة مختلفة حقًا لاختبار الحياة البرية، بتتبّع الآثار وقراءة التضاريس سيرًا على الأقدام برفقة مرشد خبير. تعودون إلى أروشا لتناول وجبة ساخنة وقضاء أمسية هادئة؛ ويسهل إضافة نزهة قهوة أو جولة سياحية محلية إذا رغبتم في مواصلة النشاط.",
        accommodation: "فندق في أروشا",
        meals: "جميع الوجبات",
        insiderFact: "وجود حارس مسلّح هو تطبيق للوائح الحديقة في جميع رحلات المشي هنا، وليس مؤشرًا على خطر غير معتاد — إنه ممارسة معتمدة في جميع حدائق تنزانيا.",
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
        title: "نزهة قرية بحيرة مانيارا",
        location: "بحيرة مانيارا / تارانجيري",
        description: "ينقلكم انتقال صباحي إلى منطقة بحيرة مانيارا، حيث تتضمن نزهة عبر قرية مطو وا مبو النابضة بالحياة غداءً محليًا في مزرعة موز، تليها جولة سفاري بعد الظهر داخل حديقة مانيارا الوطنية نفسها.",
        accommodation: "Ngorongoro Farm House",
        meals: "جميع الوجبات",
        insiderFact: "يعني اسم مطو وا مبو بالسواحيلية «جدول البعوض» — تذكير مفيد بضرورة إحضار طارد للحشرات أثناء نزهة القرية.",
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
        title: "حديقة تارانجيري الوطنية",
        location: "بحيرة مانيارا / تارانجيري",
        description: "يصطحبكم مرشدكم بعد الإفطار في رحلة إلى حديقة تارانجيري الوطنية — التي تحمل اسم النهر الذي يجذب عائلات الفيلة بأعداد كبيرة إلى ضفافه، إلى جانب الزرافات وظباء البوشباك والحيوانات الحرتبيست، فيما تتبعها الأسود والفهود عن كثب.",
        accommodation: "Ngorongoro Farm House",
        meals: "جميع الوجبات",
        insiderFact: "تتجمع قطعان فيلة تارانجيري بكثافة أكبر على طول النهر في موسم الجفاف، حين يكون من مصادر المياه الموثوقة القليلة على امتداد أميال.",
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
        title: "قرية الزعيم لوبولو ونزهة قهوة كاراتو",
        location: "نجورونجورو",
        description: "يفتتح اليوم السابع بزيارة صباحية إلى قرية الزعيم لوبولو للماساي، تليها محطة في بلدة كاراتو لنزهة قهوة عبر مزرعة عاملة وأسواق محلية وغداء، قبل مواصلة الصعود إلى مرتفعات نجورونجورو لقضاء ظهيرة هادئة.",
        accommodation: "Ngorongoro Serena Safari Lodge",
        meals: "جميع الوجبات",
        insiderFact: "تقع مزارع قهوة كاراتو على ارتفاع يمنح بنّ الأرابيكا جودة استثنائية حقًا — وهي حقيقة يسعد مرشدو النزهة بالتوسع في شرحها.",
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
        title: "يوم كامل على أرض فوهة نجورونجورو",
        location: "نجورونجورو",
        description: "اليوم الثامن هو الفوهة نفسها: نزول مبكر من الحافة مع سلة غداء معدّة مسبقًا، ليوم كامل من مشاهدة الحياة البرية على أرض الفوهة، إحدى أكثر بيئات الحياة البرية كثافة في القارة، قبل العودة إلى النُّزل في وقت متأخر من بعد الظهر.",
        accommodation: "Ngorongoro Serena Safari Lodge",
        meals: "جميع الوجبات",
        insiderFact: "تبقى أرض الفوهة أكثر برودة بعدة درجات من حافتها — يُستحسن إحضار سترة حتى لو بدا الصباح صافيًا.",
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
        title: "نحو سيرينغيتي",
        location: "سيرينغيتي",
        description: "تعبر الرحلة نحو سيرينغيتي مرتفعات نجورونجورو، وتمر بوادي أولدوفاي، الموقع الأثري الذي اكتشفت فيه عائلة ليكي رفات إنسان الأسترالوبيثكس والإنسان الماهر والإنسان المنتصب — اسألوا مرشدكم عن إمكانية إضافة توقف عند الرمال المتحركة القريبة. ومن مدخل الحديقة، تنقلكم جولة سفاري بعد الظهر إلى المخيم.",
        accommodation: "Kubu Kubu Tented Lodge",
        meals: "جميع الوجبات",
        insiderFact: "يستحق وادي أولدوفاي توقفًا قصيرًا حتى دون زيارة المتحف الإضافية — إذ تمنح نقطة المشاهدة على الطريق وحدها إحساسًا بحجم الموقع.",
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
        title: "يوم كامل في سيرينغيتي",
        location: "سيرينغيتي",
        description: "تليه ثلاثة أيام كاملة في واحد من أكثر مشاهد الحياة البرية شهرة في العالم — سهول مفتوحة، وقطط كبيرة مقيمة، وربما قطعان الهجرة نفسها بحسب التوقيت.",
        accommodation: "Kubu Kubu Tented Lodge",
        meals: "جميع الوجبات",
        insiderFact: "تُعد تلال الكوبيي الصخرية في وسط سيرينغيتي نقطة موثوقة للتفقّد أول الصباح — إذ كثيرًا ما تستخدمها الأسود نقطة مراقبة عند الفجر.",
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
        title: "يوم كامل في سيرينغيتي",
        location: "سيرينغيتي",
        description: "تليه ثلاثة أيام كاملة في واحد من أكثر مشاهد الحياة البرية شهرة في العالم — سهول مفتوحة، وقطط كبيرة مقيمة، وربما قطعان الهجرة نفسها بحسب التوقيت.",
        accommodation: "Kubu Kubu Tented Lodge",
        meals: "جميع الوجبات",
        insiderFact: "اسألوا مرشدكم عن الموقع الحالي للهجرة — فالحياة البرية المقيمة هنا قوية على مدار العام، لكن التوقيت يغيّر ما هو ممكن رؤيته إضافة إلى ذلك.",
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
        title: "المغادرة",
        location: "المغادرة",
        description: "جولة سفاري أخيرة في الطريق إلى المدرج لرحلتكم المستأجرة المجدولة عودة إلى أروشا. عند الوصول، يستقبلكم فريقنا وينقلكم إلى فندقكم، حيث تُحجز غرفة نهارية حتى موعد انتقالكم المسائي إلى المطار — مع غداء مشمول قبل التوجه إلى وطنكم.",
        accommodation: "لا ينطبق",
        meals: "الغداء"
      }
    ]
  },
  {
    slug: "8-days-great-northern-migration",
    name: "8 أيام: الهجرة الكبرى الشمالية",
    duration: 8,
    destinations: [
      "tarangire",
      "manyara",
      "ngorongoro",
      "serengeti"
    ],
    type: "migration",
    bestMonths: ['Jul', 'Aug', 'Sep', 'Oct'],
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
    metaDescription: "سفاري تنزانية مدتها 8 أيام محورها عبور نهر مارا خلال الهجرة الكبرى — يومان كاملان عند النهر، إضافة إلى تارانجيري ونجورونجورو وسيرينغيتي. تبدأ الأسعار من 4,977 دولارًا للشخص الواحد.",
    overview: [
      "على مدى أربعة إلى خمسة أشهر من العام، يتنقل أكثر من مليون رأس من النو والحمر الوحشي عبر النظام البيئي لسيرينغيتي-مارا في هجرة متواصلة لا تهدأ — ولأسابيع قليلة غير مؤكدة بين يوليو وأكتوبر، تتّجه هذه الحركة نحو نهر مارا، حيث تترصّد التماسيح وتصبح عمليات العبور نفسها من أكثر مشاهد الحياة البرية إثارة على وجه الأرض. صُمّم هذا البرنامج الممتد على ثمانية أيام كليًا لمنحكم أفضل فرصة ممكنة لمشاهدة هذا الحدث، دون تفويت الحدائق التي تستحق زيارتها بحد ذاتها.",
      "يتحرك المسار من الغرب إلى الشرق عبر شمال تنزانيا: قطعان فيلة تارانجيري وأشجار الباوباب العتيقة، وتوقف عند بحيرة مانيارا وقرية مطو وا مبو الثقافية، ويوم كامل داخل وعاء نجورونجورو المغلق الغني بالحياة البرية، ثم ثلاثة أيام كاملة في عمق سيرينغيتي — تبدأ بالحيوانات المفترسة المقيمة في السهول الوسطى، تليها يومان كاملان في موقع ثابت عند نهر مارا نفسه، جاهزين ومتأهبين حين تقرر القطعان العبور."
    ],
    highlights: [
      "يومان كاملان في موقع ثابت عند نهر مارا — وقت حقيقي لتكونوا هناك لحظة العبور، لا صباح واحد متسرّع",
      "قطعان فيلة تارانجيري ومناظر أشجار الباوباب، فصل افتتاحي لا يحظى بتقدير كافٍ وتتخطاه معظم البرامج الأقصر",
      "يوم كامل داخل فوهة نجورونجورو، يشمل بعضًا من أكثر مشاهدات وحيد القرن موثوقية في المنطقة",
      "بحيرة مانيارا وقرية مطو وا مبو الثقافية — تغيير حقيقي في الوتيرة بين الحدائق",
      "رحلة طيران خفيفة من مدرج كوغاتيندي، تختتم الرحلة بنظرة من الأعلى على السهول التي عبرتموها للتو برًا",
      "كل مستويات الراحة ممثَّلة، من الأسلوب البسيط والمباشر إلى الراقي حقًا، دون تغيير يوم واحد من المسار"
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
      "جميع رسوم دخول الحدائق ومناطق الحفظ",
      "جميع جولات السفاري بمركبة لاند كروزر خاصة رباعية الدفع",
      "مرشد محترف طوال الرحلة",
      "جميع الوجبات المدرجة",
      "الإقامة وفق البرنامج",
      "التنقلات من وإلى المطار",
      "رحلة طيران ذهابًا وإيابًا من كوغاتيندي إلى أروشا"
    ],
    includedCategorized: {
      transfers: [
        "التنقلات من وإلى المطار",
        "رحلة طيران ذهابًا وإيابًا من كوغاتيندي إلى أروشا"
      ],
      accommodationMeals: [
        "جميع الوجبات المدرجة",
        "الإقامة وفق البرنامج"
      ],
      guidingGameDrives: [
        "جميع رسوم دخول الحدائق ومناطق الحفظ",
        "جميع جولات السفاري بمركبة لاند كروزر خاصة رباعية الدفع",
        "مرشد محترف طوال الرحلة"
      ]
    },
    excluded: [
      "الرحلات الجوية الدولية",
      "رسوم التأشيرة",
      "التأمين على السفر",
      "الإكراميات"
    ],
    excludedCategorized: [
      "الرحلات الجوية الدولية",
      "رسوم التأشيرة",
      "التأمين على السفر",
      "الإكراميات"
    ],
    notes: [
      "الأسعار المعروضة للشخص الواحد بنظام تقاسم غرفة مزدوجة؛ وتُطبَّق رسوم إضافية عند الإقامة الفردية بناءً على الطلب.",
      "تكون عمليات عبور نهر مارا أكثر ترجّحًا بين يوليو وأكتوبر، ولا يمكن ضمانها في تاريخ محدد.",
      "تخضع الإقامة والأسعار للتوافر وقد تتفاوت وفق تاريخ السفر الدقيق ضمن الموسم.",
      "تحدد الحكومة رسوم الحدائق الوطنية ومناطق الحفظ في تنزانيا، وهي عرضة للتغيير دون إشعار مسبق."
    ],
    faq: [
      {
        q: "ما الفرق بين الفئات الثلاث؟",
        a: "المسار والخطة اليومية متطابقان في الفئات الثلاث — الحدائق ذاتها، والأيام ذاتها عند نهر مارا، ورحلة العودة الجوية ذاتها. ما يتغير هو المخيمات والنُّزل: تحافظ فئة Wilderness Trail على الراحة والبساطة، وتضيف فئة Wilderness Reserve مساحة أكبر وخدمة أكثر عناية، بينما تضعكم فئة Wilderness Sovereign في أرقى المنشآت على هذا المسار."
      },
      {
        q: "متى يكون أفضل وقت لمشاهدة عمليات عبور نهر مارا؟",
        a: "تكون العمليات أكثر ترجّحًا بين يوليو وأكتوبر، وإن كان التوقيت الدقيق يتفاوت من عام إلى آخر تبعًا لأنماط الأمطار، ولا يمكن ضمانه في تاريخ محدد — لذا يخصص هذا البرنامج يومين كاملين عند النهر تحديدًا لتعظيم فرصكم."
      },
      {
        q: "هل عملية العبور مضمونة؟",
        a: "لا يمكن لأي جهة منظِّمة تتحلى بالمسؤولية أن تضمن حدثًا بريًا محددًا في يوم بعينه. ما يضمنه هذا البرنامج هو التموضع — يومان كاملان عند النهر نفسه، مع مرشدين يراقبون نشاط العبور فعليًا، بدلًا من زيارة عابرة واحدة."
      },
      {
        q: "كيف يتغير السعر بحسب حجم المجموعة؟",
        a: "تُقسَّم تكاليف المركبة والمرشد وبعض التنقلات على المجموعة، لذا ينخفض السعر للشخص الواحد عمومًا مع انضمام مزيد من المسافرين، وإن لم يكن الانخفاض خطيًا تمامًا — إذ قد يؤدي توافر الغرف في كل مخيم إلى تغيير طفيف في الإجمالي بحسب حجم المجموعة. راجعوا جدول الأسعار أعلاه للاطلاع على الأرقام الدقيقة."
      },
      {
        q: "ما الذي يشمله السعر، وما الذي لا يشمله؟",
        a: "يشمل: جميع رسوم دخول الحدائق ومناطق الحفظ، وجميع جولات السفاري بمركبة لاند كروزر خاصة رباعية الدفع، ومرشد محترف، وجميع الوجبات المدرجة، والإقامة وفق البرنامج، والتنقلات من وإلى المطار، ورحلة العودة الجوية من كوغاتيندي إلى أروشا. لا يشمل: الرحلات الجوية الدولية، ورسوم التأشيرة، والتأمين على السفر، والإكراميات."
      },
      {
        q: "هل يمكن تمديد هذا البرنامج أو دمجه مع زنجبار؟",
        a: "نعم — يُمدَّد هذا البرنامج عادة بإضافة شاطئية في زنجبار. اسألوا مستشاركم عن إمكانية تمديد هذا البرنامج."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول إلى أروشا",
        description: "الوصول إلى مطار كليمنجارو الدولي والانتقال بسيارة خاصة إلى أروشا للراحة وجلسة إحاطة عن السفاري.",
        accommodation: "أروشا، حسب الفئة",
        meals: "العشاء",
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
        title: "حديقة تارانجيري الوطنية",
        description: "رحلة إلى حديقة تارانجيري الوطنية لمشاهدة قطعان الفيلة وأشجار الباوباب العتيقة، مع جولة سفاري كاملة بمرشد.",
        accommodation: "تارانجيري، حسب الفئة",
        meals: "جميع الوجبات",
        insiderFact: "تحتضن تارانجيري واحدة من أعلى كثافات الفيلة في أفريقيا خارج الموسم الممطر، حين تتجمع القطعان على طول النهر.",
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
        title: "بحيرة مانيارا ومطو وا مبو",
        description: "تتابع الرحلة نحو حديقة بحيرة مانيارا الوطنية وقرية مطو وا مبو الثقافية — تغيير في الوتيرة بين الحدائق، ولمحة عن الحياة التنزانية خارج مركبة السفاري.",
        accommodation: "كاراتو، حسب الفئة",
        meals: "جميع الوجبات",
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
        title: "من فوهة نجورونجورو إلى وسط سيرينغيتي",
        description: "جولة سفاري كاملة بمرشد داخل فوهة نجورونجورو، أكثر مسرح موثوقية لمشاهدة الخمسة الكبار في أفريقيا، ثم مواصلة الرحلة إلى وسط سيرينغيتي للمبيت.",
        accommodation: "وسط سيرينغيتي، حسب الفئة",
        meals: "جميع الوجبات",
        insiderFact: "فوهة نجورونجورو نظام بيئي مغلق تبلغ مساحته نحو 260 كيلومترًا مربعًا — لا تغادرها معظم الحيوانات المقيمة أبدًا، بما في ذلك بعض أكثر مشاهدات وحيد القرن الأسود موثوقية في المنطقة.",
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
        title: "شمال سيرينغيتي — نهر مارا",
        description: "رحلة شمالًا نحو شمال سيرينغيتي، باتجاه نهر مارا، لوضعكم في موقع مناسب لمشاهدة عمليات العبور في الأيام المقبلة.",
        accommodation: "شمال سيرينغيتي، حسب الفئة",
        meals: "جميع الوجبات",
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
        title: "يوم كامل عند نهر مارا",
        description: "يوم كامل عند نهر مارا — عمليات عبور، وحيوانات مفترسة، وصبر. إنه القلب غير المتوقَّع لهذا البرنامج.",
        accommodation: "شمال سيرينغيتي، حسب الفئة",
        meals: "جميع الوجبات",
        insiderFact: "قد تحدث عمليات العبور في أي ساعة ولا تستغرق سوى دقائق — يضع المرشدون المركبات عند نقاط العبور المعروفة وينتظرون، أحيانًا لساعات، حتى تقدم القطعان على الخطوة.",
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
        title: "شمال سيرينغيتي — الجولات الأخيرة",
        description: "جولات سفاري أخيرة في شمال سيرينغيتي، مع فرصة إضافية لمشاهدة عمليات العبور وأعداد الحيوانات المفترسة المقيمة الكثيفة التي تشتهر بها المنطقة.",
        accommodation: "شمال سيرينغيتي، حسب الفئة",
        meals: "جميع الوجبات",
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
        title: "طيران من كوغاتيندي إلى أروشا، المغادرة",
        description: "الصعود إلى طائرة خفيفة من مدرج كوغاتيندي والعودة جوًا إلى أروشا لمتابعة رحلتكم نحو وطنكم — بنظرة من الأعلى على السهول التي أمضيتم ثلاثة أيام في عبورها برًا.",
        accommodation: "لا ينطبق",
        meals: "الإفطار"
      }
    ]
  },
  {
    slug: "ultimate-tanzania-safari",
    name: "السفاري التنزانية المتكاملة وتتبع شمبانزي غومبي",
    duration: 11,
    destinations: [
      "arusha",
      "tarangire",
      "ngorongoro",
      "gombe"
    ],
    type: "big_five_game_drives",
    bestMonths: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
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
    tagline: "مُحدَّث لموسم 2027.",
    metaTitle: "السفاري التنزانية المتكاملة وتتبع شمبانزي غومبي | EWA Safari Outfitters",
    metaDescription: "حياة برية في الدائرة الشمالية وتتبع الشمبانزي في غومبي، ضمن برنامج واحد متواصل ومتكامل — وهو مزيج نادر في سوق سفاري تنزانيا. 11 يومًا، تبدأ الأسعار من 5,908.96 دولارًا للشخص الواحد.",
    overview: [
      "يجمع هذا البرنامج بين جزأين من تنزانيا يبقيهما معظم المشغّلين منفصلين: الدائرة الشمالية وغومبي ستريم. يبدأ بمسار الحياة البرية الراسخ للبلاد — حديقة أروشا الوطنية كمقدمة، وقطعان فيلة تارانجيري تحت أشجار الباوباب العتيقة، ويوم كامل داخل فوهة نجورونجورو — ثم يتابع غربًا، عبر دار السلام وصولًا إلى كيغوما، نحو حديقة غومبي ستريم الوطنية على ضفاف بحيرة تنجانيقا، حيث بدأت جين غودال أبحاثها الأصلية على الشمبانزي.",
      "يُخصَّص يومان كاملان في غومبي لتتبع الشمبانزي، على الدروب ذاتها التي بُنيت عليها أبحاثها. ويتطلب الوصول إلى غومبي مرحلة طيران محلي ثانية وعبورًا بحيرًا، وهي لوجستيات تخرج عن نطاق العمل اليومي لمعظم المشغّلين المركّزين على الدائرة الشمالية، وهو جزء من سبب ندرة هذا المزيج. يقدّم معظم مشغّلي تنزانيا إما سفاري في الدائرة الشمالية أو تمديدًا شاطئيًا في زنجبار — أما نحن فندير شقّي هذه الرحلة كحجز واحد متواصل، تحت إشراف مرشد واحد طوال الرحلة، فلا يحتاج المسافرون إلى التنسيق مع جهتين منفصلتين. وقد صُمِّم هذا البرنامج خصيصًا للعملاء الذين خاضوا بالفعل سفاري تنزانية تقليدية ويبحثون عمّا يلي ذلك."
    ],
    highlights: [
      "مزيج نادر — حياة برية في الدائرة الشمالية وتتبع شمبانزي في غومبي ضمن برنامج واحد متواصل",
      "حديقة أروشا الوطنية لافتتاح الرحلة، مع نزهة سير نصف نهارية بمرشد",
      "قطعان فيلة تارانجيري وزيارة إلى مجتمع من الماساي",
      "يوم كامل داخل فوهة نجورونجورو، أحد أكثر المواقع موثوقية في المنطقة لمشاهدة الخمسة الكبار",
      "يومان كاملان لتتبع الشمبانزي في غومبي ستريم، على الدروب ذاتها التي بدأت فيها أبحاث جين غودال",
      "عبور بحيرة تنجانيقا، بوصفه جزءًا أصيلًا من المسار لا حدثًا عرضيًا"
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
      "جميع رسوم الحدائق ومناطق الحفظ",
      "جميع جولات السفاري",
      "تصاريح تتبع الشمبانزي",
      "جميع الرحلات الجوية المحلية (أروشا–دار السلام–كيغوما ذهابًا وإيابًا)",
      "الإقامة وفق المُدرَج",
      "جميع الوجبات أثناء السفاري",
      "التنقلات من وإلى المطار"
    ],
    excluded: [
      "الرحلات الجوية الدولية",
      "رسوم التأشيرة",
      "التأمين على السفر",
      "الإكراميات"
    ],
    notes: [
      "الأسعار المعروضة للشخص الواحد بنظام تقاسم غرفة مزدوجة؛ وتُطبَّق رسوم إضافية عند الإقامة الفردية بناءً على الطلب.",
      "تصدر غومبي عددًا محدودًا من تصاريح التتبع يوميًا — يُنصح بالحجز قبل ثلاثة أشهر على الأقل خلال فترة يونيو–أكتوبر.",
      "تحمل الطائرات الصغيرة على مراحل كيغوما وزن أمتعة مسموح أقل من الرحلات المحلية المعتادة؛ يُستحسن حزم أمتعة مرحلة غومبي في حقيبة قماشية طرية بدلًا من حقيبة صلبة.",
      "تخضع الإقامة والأسعار للتوافر وقد تتفاوت وفق تاريخ السفر الدقيق ضمن الموسم."
    ],
    faq: [
      {
        q: "لماذا يُعد هذا المزيج نادرًا في صناعة السفاري؟",
        a: "لأن سفاري الدائرة الشمالية التقليدي ورحلة غومبي ستريم يتبعان مسارين مختلفين. تقع غومبي على بحيرة تنجانيقا غرب تنزانيا، ويصل إليها المسافرون عبر الطيران مرورًا بدار السلام وصولًا إلى كيغوما — وهي سلسلة لوجستية منفصلة عن دائرة جولات السفاري في الشمال. تدير معظم الشركات إحدى الرحلتين فقط؛ وقليل منها يجمع الاثنتين ضمن برنامج واحد متواصل."
      },
      {
        q: "ما مدى الجهد البدني الذي تتطلبه رحلة تتبع شمبانزي غومبي؟",
        a: "يجري التتبع على دروب غابات قد تكون شديدة الانحدار وغير مستوية، وقد يستغرق المشي للعثور على الشمبانزي ما بين ثلاثين دقيقة وبضع ساعات بحسب المكان الذي انتقلت إليه المجموعة ليلًا. يساعد المستوى المعقول من اللياقة، لكن هذه ليست رحلة تسلق تقنية أو متطرفة."
      },
      {
        q: "هل تناسب هذه الرحلة زائر تنزانيا لأول مرة، أم أنها أنسب للمسافرين المتكررين؟",
        a: "تناسب الفئتين كلتيهما، لكنها ملائمة بشكل خاص للمسافرين الذين خاضوا بالفعل سفاري تقليديًا ويبحثون عمّا هو أبعد من الدائرة المعتادة — إذ يقدّم شق الدائرة الشمالية تجربة الحياة البرية الكلاسيكية، فيما تضيف غومبي نوعًا مختلفًا حقًا من اللقاء لا يدرك معظم الزوار الجدد حتى إمكانية وجوده."
      },
      {
        q: "ما أفضل وقت في السنة لهذا البرنامج؟",
        a: "يوفر موسم الجفاف (من يونيو حتى أكتوبر تقريبًا) أفضل الظروف لشقّي الرحلة كليهما — مشاهدة أسهل للحياة البرية في الدائرة الشمالية، وظروف تتبع أوضح في غومبي."
      },
      {
        q: "ما الذي يشمله السعر، وما الذي لا يشمله؟",
        a: "يشمل: جميع رسوم الحدائق ومناطق الحفظ، وجميع جولات السفاري، وتصاريح تتبع الشمبانزي، وجميع الرحلات الجوية المحلية (أروشا–دار السلام–كيغوما ذهابًا وإيابًا)، والإقامة وفق المُدرَج، وجميع الوجبات أثناء السفاري، والتنقلات من وإلى المطار. لا يشمل: الرحلات الجوية الدولية، ورسوم التأشيرة، والتأمين على السفر، والإكراميات."
      },
      {
        q: "هل يمكن تمديد هذه الرحلة أو دمجها مع زنجبار؟",
        a: "نعم — يمكن إضافة تمديد شاطئي في زنجبار بعد اليوم الحادي عشر للمسافرين الراغبين في اختتام الرحلة ببضعة أيام مريحة على الساحل. اسألوا مستشاركم عن إمكانية إدراج ذلك."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول إلى أروشا",
        description: "الهبوط في مطار كليمنجارو الدولي والانتقال إلى أروشا عبر أراضٍ زراعية ومزارع قهوة عند سفح جبل ميرو. وبعد الاستقرار، ينضم إليكم مرشدكم على العشاء لتقديم إحاطة كاملة عن الأيام الأحد عشر المقبلة.",
        accommodation: "Kahawa House",
        meals: "العشاء",
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
        title: "حديقة أروشا الوطنية، جولة سير نصف نهارية",
        description: "نزهة سير بمرشد، برفقة حارس مسلّح، عبر واحدة من الحدائق القليلة في تنزانيا التي تتيح سفاري المشي على مدار العام. يمر المسار عادةً ببحيرات موميلا، حيث تظهر الزرافات والجاموس غالبًا عن قرب، وتتنقل قردة الكولوبس عبر مظلة الغابة في الأعلى.",
        accommodation: "Kahawa House",
        meals: "جميع الوجبات",
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
        title: "من أروشا إلى حديقة تارانجيري الوطنية",
        description: "تمر الرحلة جنوبًا بمدينة ماكويوني قبل الدخول إلى سهول تارانجيري المرصّعة بأشجار الباوباب، موطن بعض أكبر قطعان الفيلة في تنزانيا. تشمل جولة سفاري بعد الظهر عند الوصول نهر تارانجيري، شريان الحياة للحديقة في موسم الجفاف.",
        accommodation: "Tarangire Katikati Camp",
        meals: "جميع الوجبات",
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
        title: "تارانجيري وزيارة مجتمع الماساي",
        description: "نصف يوم أخير لمشاهدة الحياة البرية في تارانجيري قبل الرحلة غربًا، صعودًا على منحدر الصدع الأفريقي العظيم نحو مرتفعات نجورونجورو. وفي الطريق، تتضمن زيارة إلى مجتمع من الماساي وقتًا داخل «بوما» (مضارب تقليدية) وحوارًا عن حياة الرعاة في منطقة الحفظ.",
        accommodation: "Ngorongoro Farm House",
        meals: "جميع الوجبات",
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
        title: "جولة يوم في فوهة نجورونجورو",
        description: "يوم كامل داخل الفوهة — نظام بيئي قائم بذاته تبلغ مساحته نحو 260 كيلومترًا مربعًا، تحيط به جدران ترتفع بين 400 و600 متر فوق أرضها. يجتمع الكثافة العالية للحياة البرية مع صغر المساحة ليجعلا من هذا الموقع أحد أكثر الأماكن ثباتًا في شرق أفريقيا لمشاهدة الخمسة الكبار، بما في ذلك وحيد القرن الأسود.",
        accommodation: "Ngorongoro Farm House",
        meals: "جميع الوجبات",
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
        title: "من كاراتو إلى دار السلام",
        description: "تعود الرحلة الصباحية إلى مطار أروشا، تليها رحلة جوية مجدولة شرقًا نحو دار السلام — لتشكّل نقطة الانتقال من الدائرة الشمالية إلى الرحلة نحو غومبي.",
        accommodation: "Dar es Salaam Serena Hotel",
        meals: "جميع الوجبات",
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
        title: "من دار السلام إلى غومبي ستريم",
        description: "رحلة جوية عبر عرض البلاد إلى كيغوما، على ضفاف بحيرة تنجانيقا، يليها انتقال بالقارب على طول شاطئ البحيرة إلى حديقة غومبي ستريم الوطنية — الطريقة ذاتها التي سلكها كل زائر لهذه الحديقة منذ افتتاحها، إذ لا يصلها أي طريق بري.",
        accommodation: "Mbali Mbali Gombe",
        meals: "جميع الوجبات",
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
        title: "تتبع الشمبانزي، حديقة غومبي الوطنية",
        description: "يوم كامل من التتبع برفقة حارس حديقة مسلّح بحثًا عن مجتمع الشمبانزي المروَّض في غومبي، أحد أكثر مجموعات الشمبانزي البرية دراسة في أفريقيا. تصعد الدروب تدريجيًا من شاطئ البحيرة إلى التلال المشجّرة؛ وحين يُعثر على المجموعة، يُحدَّد الوقت معها بساعة واحدة تحت إشراف.",
        accommodation: "Mbali Mbali Gombe",
        meals: "جميع الوجبات",
        insiderFact: "مجتمع الشمبانزي في غومبي هو أحد أكثر مجموعات الرئيسيات البرية دراسة على وجه الأرض — إذ تتواصل الأبحاث هنا منذ دراسة جين غودال الأصلية عام 1960.",
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
        title: "من غومبي إلى مدينة كيغوما",
        description: "انتقال العودة إلى كيغوما، بالمسار ذاته على طول شاطئ البحيرة.",
        accommodation: "Kigoma Hilltop Hotel",
        meals: "جميع الوجبات",
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
        title: "من كيغوما إلى دار السلام",
        description: "رحلة جوية عودة عبر البلاد إلى دار السلام، مع وقت عند الوصول لجولة قصيرة في المدينة قبل الاستقرار مساءً.",
        accommodation: "Dar es Salaam Serena Hotel",
        meals: "جميع الوجبات",
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
        title: "المغادرة",
        description: "الانتقال إلى المطار لمتابعة رحلتكم الدولية.",
        accommodation: "لا ينطبق",
        meals: "الإفطار"
      }
    ]
  },
  {
    slug: "7-days-gems-of-north",
    name: "7 أيام: جواهر الشمال",
    duration: 7,
    destinations: [
      "tarangire",
      "manyara",
      "serengeti",
      "ngorongoro"
    ],
    type: "big_five_game_drives",
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
    metaDescription: "سفاري خاصة لمدة 7 أيام في الدائرة الشمالية عبر قطعان الفيلة في تارانجيري وأسود بحيرة مانيارا المتسلقة للأشجار وسيرينغيتي والحيوانات الخمسة الكبرى في فوهة نجورونجورو. تبدأ الأسعار من 3,300 دولار للشخص الواحد.",
    overview: [
      "سبعة أيام، وأربع حدائق، ودون أي اختصارات: هذه هي النسخة المكثفة من الدائرة الشمالية في تنزانيا، للمسافرين الراغبين في اختبارها كاملة دون تمديد الرحلة إلى أكثر من أسبوع. تبدأ في تارانجيري وسط قطعان الفيلة المتجمعة عند النهر وأشجار الباوباب التي تبدو شبه بدائية، وتتابع نحو بحيرة مانيارا الشهيرة بأسودها المتسلقة للأشجار ومياهها الضحلة المخطّطة بالنحام، ثم تعبر إلى سيرينغيتي ليومين كاملين وسط القطط الكبيرة ومشاهدة الحياة البرية في السهول المفتوحة.",
      "تختتم فوهة نجورونجورو الجزء البري من الرحلة، بوصفها جوهرة تاج الدائرة الشمالية، والحديقة الوحيدة التي تقترب فيها مشاهدة الخمسة الكبار من كونها مضمونة في يوم واحد، قبل أن يعيدكم المسار إلى مطار كليمنجارو الدولي وقد اختبرتم أسبوعًا كاملًا من شمال تنزانيا."
    ],
    highlights: [
      "قطعان فيلة تارانجيري وغابة الباوباب",
      "الأسود المتسلقة للأشجار في بحيرة مانيارا",
      "القطط الكبيرة والسهول المفتوحة في سيرينغيتي",
      "الخمسة الكبار في فوهة نجورونجورو",
      "شمال تنزانيا كاملًا في سبعة أيام"
    ],
    heroImage: "/images/gallery/germs.jpg",
    heroImageAlt: "Zebras lined up drinking together at a watering hole",
    gallery: [],
    included: [
      "جميع رسوم دخول الحدائق",
      "جميع جولات السفاري بمركبة لاند كروزر رباعية الدفع",
      "مرشد محترف",
      "جميع الوجبات",
      "الإقامة وفق البرنامج",
      "التنقلات من وإلى المطار"
    ],
    excluded: [
      "الرحلات الجوية الدولية",
      "رسوم التأشيرة",
      "التأمين على السفر",
      "الإكراميات"
    ],
    notes: [
      "الأسعار المعروضة للشخص الواحد بنظام تقاسم غرفة مزدوجة؛ وتُطبَّق رسوم إضافية عند الإقامة الفردية بناءً على الطلب.",
      "تُقضى ليلة نجورونجورو في بلدة كاراتو الجبلية، لا مباشرة على حافة الفوهة.",
      "تخضع الإقامة والأسعار للتوافر وقد تتفاوت وفق تاريخ السفر الدقيق ضمن الموسم.",
      "تحدد الحكومة رسوم الحدائق الوطنية ومناطق الحفظ في تنزانيا، وهي عرضة للتغيير دون إشعار مسبق."
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول إلى أروشا",
        description: "الوصول إلى مطار كليمنجارو الدولي والانتقال إلى فندقكم في أروشا للراحة وجلسة إحاطة عن السفاري.",
        accommodation: "فندق في أروشا",
        meals: "العشاء",
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
        title: "حديقة تارانجيري الوطنية",
        description: "رحلة إلى حديقة تارانجيري الوطنية. يدعم نهر تارانجيري تجمعات استثنائية من الحياة البرية — مئات الفيلة، وحمر وحشية، ونو، وزرافات، وظباء الإمبالا تتشارك المياه مع التماسيح وأفراس النهر. وتضفي أشجار الباوباب العتيقة على المشهد أجواءً شبه بدائية.",
        accommodation: "مخيم مفروش في تارانجيري",
        meals: "جميع الوجبات",
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
        title: "حديقة بحيرة مانيارا الوطنية",
        description: "رحلة إلى بحيرة مانيارا، الشهيرة بأسودها المتسلقة للأشجار — وهو سلوك فريد لهذه المجموعة. تؤوي غابة المياه الجوفية قطعان القرود البابون وقردة الكولوبس، فيما تتحول البحيرة الضحلة القلوية إلى اللون الوردي بفعل أسراب النحام. وتتصاعد أبخرة الينابيع الحارة عند حافة الماء.",
        accommodation: "فندق في بحيرة مانيارا",
        meals: "جميع الوجبات",
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
        title: "سيرينغيتي — الوصول وجولة بعد الظهر",
        description: "رحلة عبر مرتفعات نجورونجورو ونزول إلى سهول سيرينغيتي. الوصول إلى منطقة سيرونيرا لجولة سفاري بعد الظهر. تتردد الفهود على بساتين «أشجار السجق» حول ملتقى الأنهار — أحد أكثر موائل الفهود موثوقية في تنزانيا.",
        accommodation: "مخيم مفروش في سيرينغيتي",
        meals: "جميع الوجبات",
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
        title: "سيرينغيتي — يوم كامل",
        description: "يوم كامل في سيرينغيتي بجولتين، صباحية ومسائية. تراقب الفهود الصيادة فرائسها من فوق تلال النمل الأبيض. وتجوب الأسود حدود أراضيها. وتمتد قطعان النو عبر السهول في طوابير تختفي عند الأفق.",
        accommodation: "مخيم مفروش في سيرينغيتي",
        meals: "جميع الوجبات",
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
        title: "فوهة نجورونجورو",
        description: "مغادرة سيرينغيتي والنزول إلى فوهة نجورونجورو — جوهرة تاج الدائرة الشمالية في تنزانيا. يقيم الخمسة الكبار جميعًا داخل هذه الفوهة العتيقة. وتُشاهد الأسود غالبًا وهي تصطاد في العراء، فيما ترعى وحيدات القرن السوداء في البعيد. المبيت في بلدة كاراتو الجبلية.",
        accommodation: "نُزل في كاراتو",
        meals: "جميع الوجبات",
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
        title: "المغادرة",
        description: "رحلة إلى مطار كليمنجارو الدولي لرحلتكم نحو وطنكم، حاملين معكم سبعة أيام من تجارب استثنائية للحياة البرية في شمال تنزانيا.",
        accommodation: "لا ينطبق",
        meals: "الإفطار"
      }
    ]
  },
  {
    slug: "7-days-flight-ndutu",
    name: "7 أيام: طيران فوق هجرة ندوتو",
    duration: 7,
    destinations: [
      "serengeti",
      "ngorongoro"
    ],
    type: "migration",
    bestMonths: ['Jan', 'Feb', 'Mar'],
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
    metaDescription: "طيران فوق فوهة نجورونجورو إلى أراضي ولادة ندوتو، في سفاري خاصة مدتها 7 أيام بسيرينغيتي، تتزامن مع ذروة نشاط الحيوانات المفترسة وولادة صغار النو. تبدأ الأسعار من 4,000 دولار للشخص الواحد.",
    overview: [
      "صُمِّم هذا البرنامج لحدث واحد محدد: موسم ولادة ندوتو، حين يُولد هنا يوميًا ما يصل إلى 8000 عجل من النو بين يناير ومارس، فيما تتقاطر جميع الحيوانات المفترسة في النظام البيئي — الأسود والفهود الصيادة والضباع والكلاب البرية — نحو سهول العشب القصير للاستفادة من هذا الحدث. تُرسي رحلة الطيران أجواء الرحلة قبل حتى أن تهبطوا، إذ تمر مباشرة فوق حافة فوهة نجورونجورو لتشاهدوا من الجو الحجم الدائري الكامل للفوهة، قبل قضاء يومين كاملين على الأرض في أراضي القطط الكبيرة الدائمة في وسط سيرينغيتي.",
      "يضعكم يوم كامل في ندوتو نفسها في قلب الحدث، وتختتم الرحلة بنزول بمرشد إلى فوهة نجورونجورو، لتستبدلوا دراما أراضي الولادة بمشاهدات شبه مضمونة للخمسة الكبار في أكثر أوعية الحياة البرية كثافة في أفريقيا."
    ],
    highlights: [
      "الطيران فوق فوهة نجورونجورو — إطلالات من عين الطائر",
      "موسم ولادة ندوتو — ولادة 8000 من النو يوميًا",
      "نشاط الحيوانات المفترسة في أوج كثافته",
      "القطط الكبيرة الدائمة في وسط سيرينغيتي",
      "نزول إلى فوهة نجورونجورو لمشاهدة الخمسة الكبار"
    ],
    heroImage: "/images/gallery/ndutu-wildebeest-watering-hole.jpg",
    heroImageAlt: "Wildebeest herds gathered around a watering hole in the Ndutu area of southern Serengeti",
    gallery: [],
    included: [
      "جميع رسوم الحدائق",
      "رحلة طيران محلية مستأجرة",
      "جميع جولات السفاري",
      "مرشد محترف",
      "جميع الوجبات",
      "الإقامة",
      "التنقلات من وإلى المطار"
    ],
    excluded: [
      "الرحلات الجوية الدولية",
      "رسوم التأشيرة",
      "التأمين على السفر",
      "الإكراميات"
    ],
    notes: [
      "الأسعار المعروضة للشخص الواحد بنظام تقاسم غرفة مزدوجة؛ وتُطبَّق رسوم إضافية عند الإقامة الفردية بناءً على الطلب.",
      "الحد الأدنى لحجم المجموعة شخصان لتكون الرحلة الجوية المحلية المستأجرة قابلة للتنفيذ.",
      "صُمِّم هذا البرنامج لموسم ولادة ندوتو (يناير–مارس)؛ وتخضع مشاهدات الحياة البرية الدقيقة لتفاوت طبيعي.",
      "تخضع الإقامة والأسعار للتوافر وقد تتفاوت وفق تاريخ السفر الدقيق ضمن الموسم.",
      "تحدد الحكومة رسوم الحدائق الوطنية ومناطق الحفظ في تنزانيا، وهي عرضة للتغيير دون إشعار مسبق."
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول إلى أروشا",
        description: "الوصول إلى مطار كليمنجارو الدولي والانتقال إلى فندقكم في أروشا. جلسة إحاطة عن السفاري أثناء العشاء.",
        accommodation: "فندق في أروشا",
        meals: "العشاء",
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
        title: "طيران إلى سيرينغيتي",
        description: "الصعود إلى طائرتكم الخفيفة في أروشا. يمر مسار الطيران مباشرة فوق فوهة نجورونجورو — إذ يكشف الوعاء الدائري المثالي من الجو حجمه الكامل، عالمًا مصغرًا من الأعشاب والبحيرات محاطًا بحافة من الحمم البركانية العتيقة. الهبوط في مدرج سيرونيرا وبدء أولى جولات السفاري بعد الظهر.",
        accommodation: "مخيم مفروش في سيرينغيتي",
        meals: "الغداء والعشاء",
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
        title: "وسط سيرينغيتي — جولات سفاري",
        description: "يوم كامل لاستكشاف سهول وسط سيرينغيتي حول سيرونيرا. هذه واحدة من أكثر مناطق الحياة البرية غنى في أفريقيا على مدار العام، بزمر أسود وفهود صيادة وفهود مقيمة، إلى جانب قطعان هائلة من الحمر الوحشية والنو.",
        accommodation: "مخيم مفروش في سيرينغيتي",
        meals: "جميع الوجبات",
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
        title: "جنوب سيرينغيتي — أراضي ولادة ندوتو",
        description: "رحلة جنوبًا إلى منطقة ندوتو عند حدود سيرينغيتي ومنطقة حفظ نجورونجورو. خلال موسم الولادة (يناير حتى مارس)، يُولد هنا يوميًا ما يصل إلى 8000 عجل من النو. وتتقاطر الفهود الصيادة والأسود والضباع والكلاب البرية نحو المواليد الضعيفة بتجمعات استثنائية من الحيوانات المفترسة.",
        accommodation: "نُزل سفاري في ندوتو",
        meals: "جميع الوجبات",
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
        title: "ندوتو — يوم كامل من موسم الولادة",
        description: "يوم كامل آخر لتتبع قطعان الولادة والحيوانات المفترسة المرافقة لها عبر سهول العشب القصير. توفر غابة ندوتو موئلًا للفهود والقطط البرية الأفريقية بين فصول دراما الأرض المفتوحة. وتزدهر الحياة الطيرية بشكل لافت خلال هذا الموسم.",
        accommodation: "نُزل سفاري في ندوتو",
        meals: "جميع الوجبات",
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
        title: "فوهة نجورونجورو",
        description: "رحلة إلى نجورونجورو ونزول إلى الفوهة ليوم كامل مع الخمسة الكبار. تُعد زمر الأسود المقيمة من بين الأكثر دراسة في العالم. وتُشاهَد وحيدات القرن السوداء، النادرة في أماكن أخرى، هنا بانتظام. المبيت في بلدة كاراتو الساحرة.",
        accommodation: "نُزل في كاراتو",
        meals: "جميع الوجبات",
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
        title: "المغادرة",
        description: "رحلة إلى مطار كليمنجارو الدولي لرحلتكم نحو وطنكم.",
        accommodation: "لا ينطبق",
        meals: "الإفطار"
      }
    ]
  },
  {
    slug: "8-days-flight-migration",
    name: "سفاري 8 أيام: عبور النو للنهر",
    duration: 8,
    destinations: [
      "serengeti",
      "ngorongoro"
    ],
    type: "migration",
    bestMonths: ['Jul', 'Aug', 'Sep', 'Oct'],
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
    tagline: "مُحدَّث لموسم 2027.",
    metaTitle: "سفاري 8 أيام: عبور النو للنهر | EWA Safari Outfitters",
    metaDescription: "سفاري خاصة مدتها 8 أيام، طيران مباشر إلى نقاط عبور نهر مارا في الهجرة الكبرى، ثم التحرك جنوبًا عبر سيرينغيتي وفوهة نجورونجورو. ثلاث فئات، تبدأ الأسعار من 3,852.29 دولارًا للشخص الواحد.",
    overview: [
      "بين يوليو وأكتوبر، يستضيف شمال سيرينغيتي أكثر فصول الهجرة الكبرى دراميةً على الإطلاق: مئات الآلاف من رؤوس النو تتجمع على ضفاف نهر مارا قبل الاندفاع إلى مياه تترصّد فيها تماسيح النيل. ينقلكم هذا البرنامج جوًا مباشرة إلى مدرج كوغاتيندي، على بُعد 45 دقيقة فقط من نقاط العبور، بدلًا من قضاء يوم ونصف اليوم في التنقل برًا، ويُبقيكم في هذه المنطقة يومين كاملين ليتمكن مرشدكم من متابعة حركة القطعان بدلًا من ملاحقة مشاهدة واحدة.",
      "ومن هناك يتجه المسار جنوبًا عبر الحياة البرية المقيمة في سيرينغيتي — زمر الأسود، والفهود بين أشجار الأودية، والفهود الصيادة برفقة صغارها على العشب المفتوح — قبل ليلتين كاملتين في فوهة نجورونجورو، لتُختتم الرحلة بزيارة حقيقية إلى مجتمع من الماساي وتوقف في مطو وا مبو في طريق العودة إلى أروشا. متاح بثلاث فئات — Wilderness Trail وWilderness Reserve وWilderness Sovereign — تتبع جميعها المسار ذاته على مدى ثمانية أيام، فيما يتغير مستوى المخيم والنُّزل من تحتكم."
    ],
    highlights: [
      "الطيران مباشرة إلى شمال سيرينغيتي — على بُعد 45 دقيقة من نقاط عبور نهر مارا، بدلًا من يوم ونصف اليوم برًا",
      "يومان كاملان عند نقاط العبور، يمنحان مرشدكم الوقت لمتابعة حركة القطعان بدلًا من ملاحقة مشاهدة واحدة",
      "تماسيح وقطط كبيرة تترصد عند نقاط العبور — إذ يصطف كلاهما على ضفاف نهر مارا طوال موسم الهجرة",
      "الحيوانات المفترسة المقيمة الدائمة في وسط سيرينغيتي في الطريق جنوبًا",
      "ليلتان كاملتان في فوهة نجورونجورو، مع مشاهدات موثوقة لوحيد القرن الأسود وبعض أكثف تجمعات الأسود في تنزانيا",
      "زيارة حقيقية إلى مجتمع من الماساي وتوقف في مطو وا مبو في المرحلة الأخيرة نحو أروشا"
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
      "جميع رسوم الحدائق والامتيازات",
      "رحلة الطيران بين أروشا وكوغاتيندي",
      "جميع جولات السفاري",
      "مرشد محترف طوال الرحلة",
      "جميع الوجبات",
      "الإقامة وفق المُدرَج",
      "التنقلات من وإلى المطار"
    ],
    excluded: [
      "الرحلات الجوية الدولية",
      "رسوم التأشيرة",
      "التأمين على السفر",
      "الإكراميات"
    ],
    notes: [
      "الأسعار المعروضة للشخص الواحد بنظام تقاسم غرفة مزدوجة؛ وتُطبَّق رسوم إضافية عند الإقامة الفردية بناءً على الطلب.",
      "تكون عمليات عبور نهر مارا أكثر ترجّحًا بين يوليو وأكتوبر، ولا يمكن ضمانها في تاريخ محدد.",
      "تخضع الإقامة والأسعار للتوافر وقد تتفاوت وفق تاريخ السفر الدقيق ضمن الموسم.",
      "تحدد الحكومة رسوم الحدائق الوطنية ومناطق الحفظ في تنزانيا، وهي عرضة للتغيير دون إشعار مسبق."
    ],
    faq: [
      {
        q: "كم تكلفة هذه السفاري؟",
        a: "تبدأ فئة Wilderness Trail من 3,852.29 دولار للشخص الواحد (6 مسافرين بنظام تقاسم غرفة مزدوجة)، لترتفع إلى 4,829.38 دولار لزوجين مسافرين بمفردهما. وتبدأ فئة Wilderness Reserve من 5,151.04 دولار، لترتفع إلى 6,128.13 دولار. وتبدأ فئة Wilderness Sovereign من 9,164.79 دولار، لترتفع إلى 10,141.88 دولار. كل سفاري مصممة خصيصًا، لذا يُرجى طلب عرض سعر شخصي للحصول على الأسعار الدقيقة وفق تواريخكم."
      },
      {
        q: "ما الفرق بين الفئات الثلاث؟",
        a: "المسار والأنشطة وتوقيت الوصول إلى نقاط العبور متطابقة في الفئات الثلاث. ما يتغير هو المخيمات والنُّزل: فئة Wilderness Trail مباشرة ومريحة، وتضيف فئة Wilderness Reserve مساحة وخدمة أكثر عناية، بينما تضعكم فئة Wilderness Sovereign في أرقى المنشآت على هذا المسار."
      },
      {
        q: "هل عملية عبور النهر مضمونة؟",
        a: "لا يمكن لأي جهة منظِّمة تتحلى بالمسؤولية أن تضمن حدثًا بريًا محددًا في يوم بعينه — إذ تكون عمليات العبور أكثر ترجّحًا بين يوليو وأكتوبر، لكن التوقيت يعتمد على أنماط الأمطار وحركة القطعان المتغيرة من عام إلى آخر. لذا يخصص هذا البرنامج يومين كاملين عند نقاط العبور تحديدًا لتعظيم فرصكم."
      },
      {
        q: "لماذا الطيران بدلًا من التنقل برًا إلى نهر مارا؟",
        a: "تستغرق الرحلة البرية من أروشا إلى شمال سيرينغيتي يومًا ونصف اليوم في كل اتجاه. أما الطيران إلى كوغاتيندي فينقلكم إلى الميدان في بعد ظهر اليوم نفسه الذي تغادرون فيه أروشا، ويضعكم على بُعد 45 دقيقة فقط من نقاط العبور بدلًا من ساعات."
      },
      {
        q: "ما أفضل وقت في السنة لهذه السفاري؟",
        a: "تمتد فترة عبور نهر مارا ضمن الهجرة من يوليو حتى أكتوبر، وقد صُمِّم هذا البرنامج خصيصًا حول هذه الفترة."
      },
      {
        q: "هل سنشاهد الخمسة الكبار؟",
        a: "توفر فوهة نجورونجورو أفضل فرصكم في المنطقة لمشاهدة الخمسة الكبار كاملة، بما في ذلك وحيد القرن الأسود المهدد بالانقراض، إلى جانب مجموعات الأسود والفهود والفهود الصيادة المقيمة الدائمة في وسط سيرينغيتي."
      },
      {
        q: "ما الذي يشمله السعر، وما الذي لا يشمله؟",
        a: "يشمل: جميع رسوم الحدائق والامتيازات، ورحلة الطيران بين أروشا وكوغاتيندي، وجميع جولات السفاري، ومرشدًا محترفًا طوال الرحلة، وجميع الوجبات، والإقامة وفق المُدرَج، والتنقلات من وإلى المطار. لا يشمل: الرحلات الجوية الدولية، ورسوم التأشيرة، والتأمين على السفر، والإكراميات."
      },
      {
        q: "هل يمكن دمج هذه الرحلة مع وجهات أخرى؟",
        a: "نعم — يتناسب هذا البرنامج بشكل طبيعي مع تمديد شاطئي في زنجبار، أو يمكن دمجه مع سفاري في الدائرة الجنوبية للمسافرين الراغبين في اختبار شقّي تنزانيا في رحلة واحدة."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول إلى أروشا",
        description: "الهبوط في مطار كليمنجارو الدولي والانتقال إلى أروشا. جلسة إحاطة عن السفاري أثناء العشاء.",
        accommodation: "أروشا، حسب الفئة",
        meals: "العشاء",
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
        title: "طيران إلى شمال سيرينغيتي — كوغاتيندي",
        description: "الصعود إلى طائرة خفيفة في أروشا؛ يمر مسار الطيران مباشرة فوق حافة فوهة نجورونجورو، حيث تظهر الفوهة العتيقة بحجم مصغر في الأسفل. الهبوط في مدرج كوغاتيندي، على بُعد 45 دقيقة فقط من نقاط عبور نهر مارا. تمهد جولة سفاري بعد الظهر للمشهد.",
        accommodation: "شمال سيرينغيتي، حسب الفئة",
        meals: "جميع الوجبات",
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
        title: "يوم كامل، شمال سيرينغيتي",
        description: "يوم كامل لمتابعة عمليات عبور نهر مارا — مئات الآلاف من رؤوس النو تتجمع على الضفة قبل الاندفاع إلى مياه تترصّد فيها تماسيح النيل. يضعكم مرشدكم في الموقع المناسب بحسب حركة القطعان طوال اليوم، لا وفق جدول ثابت.",
        accommodation: "شمال سيرينغيتي، حسب الفئة",
        meals: "جميع الوجبات",
        insiderFact: "قد تحدث عمليات العبور في أي ساعة ولا تستغرق سوى دقائق — يضع المرشدون المركبات عند نقاط العبور المعروفة وينتظرون، أحيانًا لساعات، حتى تقدم القطعان على الخطوة.",
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
        title: "من شمال سيرينغيتي إلى وسطها",
        description: "نصف يوم أخير عند نقاط العبور قبل الرحلة جنوبًا. تكثر الفيلة والزرافات على طول هذا الامتداد، ما يبقي يوم التنقل نشطًا بدلًا من كونه انتقالًا محضًا.",
        accommodation: "وسط سيرينغيتي، حسب الفئة",
        meals: "جميع الوجبات",
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
        title: "من وسط سيرينغيتي إلى نجورونجورو",
        description: "نصف يوم لاستكشاف القطط الكبيرة المقيمة الدائمة في سيرونيرا — إذ تُعد مشاهدة الأسود والفهود والفهود الصيادة هنا واقعية بصرف النظر عن الموسم — قبل الرحلة صعودًا إلى مرتفعات نجورونجورو.",
        accommodation: "مرتفعات نجورونجورو، حسب الفئة",
        meals: "جميع الوجبات",
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
        title: "جولة يوم في فوهة نجورونجورو",
        description: "يوم كامل من النزول إلى أرض الفوهة — حياة برية كثيفة داخل نظام بيئي مغلق واحد، ومشاهدات موثوقة لوحيد القرن الأسود، وبعض أكثف زمر الأسود في تنزانيا.",
        accommodation: "مرتفعات نجورونجورو، حسب الفئة",
        meals: "جميع الوجبات",
        insiderFact: "فوهة نجورونجورو نظام بيئي مغلق تبلغ مساحته نحو 260 كيلومترًا مربعًا — لا تغادرها معظم الحيوانات المقيمة أبدًا، بما في ذلك بعض أكثر مشاهدات وحيد القرن الأسود موثوقية في المنطقة.",
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
        title: "مجتمع الماساي ومطو وا مبو",
        description: "زيارة حقيقية إلى مجتمع من الماساي، تليها محطة في بلدة مطو وا مبو التجارية في طريق العودة إلى أروشا — وقت ثقافي حقيقي، لا محطة معدّة سلفًا بين جولات السفاري.",
        accommodation: "أروشا، حسب الفئة",
        meals: "جميع الوجبات",
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
        title: "جولة في مدينة أروشا والمغادرة",
        description: "صباح أخير في أروشا قبل الانتقال إلى مطار كليمنجارو الدولي لرحلتكم نحو وطنكم.",
        accommodation: "لا ينطبق",
        meals: "الإفطار"
      }
    ]
  },
  {
    slug: "11-days-rwanda-tanzania",
    name: "11 يومًا: سفاري رواندا وتنزانيا",
    duration: 11,
    destinations: [
      "volcanoes",
      "kigali",
      "serengeti",
      "ngorongoro"
    ],
    type: "gorilla_trekking",
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
    metaDescription: "رحلة مدتها 11 يومًا تجمع بين تتبع الغوريلا والقرد الذهبي في حديقة البراكين الوطنية برواندا وسفاري في سيرينغيتي وفوهة نجورونجورو. تبدأ الأسعار من 6,500 دولار للشخص الواحد.",
    overview: [
      "أحد عشر يومًا تربط بين تجربتين من أكثر تجارب الحياة البرية تميّزًا في أفريقيا: رحلة تتبع الغوريلا الجبلية وتتبع القرد الذهبي في حديقة البراكين الوطنية في رواندا، تليها سهول سيرينغيتي المفتوحة ونزول كامل إلى فوهة نجورونجورو. يمنحكم نصب كيغالي التذكاري للإبادة الجماعية، الذي تزورونه في أول يوم كامل من رحلتكم، سياقًا أساسيًا لفهم رواندا الحديثة قبل أن تنتقل الرحلة إلى غابة الخيزران في جبال فيرونغا، حيث تنتظركم عائلة غوريلا مروَّضة وقطيع من القردة الذهبية التي لا توجد إلا في هذه الجبال.",
      "تشكّل رحلة طيران فوق التلال الألف وصولًا إلى سافانا تنزانيا نقطة منتصف الرحلة، فيما تضيف المرحلة الأخيرة ما لا تستطيع حدائق أي من البلدين تقديمه: يوم مع الهادزابي عند بحيرة إياسي، أحد آخر مجتمعات الصيد وجمع القوت الحقيقية في أفريقيا، بالمشاركة في رحلة صيد صباحية وتعلّم تقنيات إشعال النار التي لم تتغير منذ آلاف السنين، قبل أن تختتم الرحلة عند كليمنجارو."
    ],
    highlights: [
      "تتبع الغوريلا الجبلية في حديقة البراكين الوطنية",
      "تتبع القرد الذهبي في جبال فيرونغا",
      "نصب كيغالي التذكاري للإبادة الجماعية — تجربة مؤثرة ومهمة",
      "القطط الكبيرة والنو في سيرينغيتي",
      "الخمسة الكبار في نجورونجورو"
    ],
    heroImage: "/images/gallery/gorilla-mother-and-baby-rwanda.jpg",
    heroImageAlt: "Mountain gorilla mother and her baby together in Rwanda's forest",
    gallery: [],
    included: [
      "جميع رسوم الحدائق وتصاريح الغوريلا",
      "جميع جولات السفاري",
      "مرشد محترف",
      "جميع الوجبات",
      "الإقامة",
      "التنقلات من وإلى المطار",
      "الرحلات الجوية المحلية في تنزانيا"
    ],
    excluded: [
      "الرحلات الجوية الدولية",
      "رسوم التأشيرة",
      "التأمين على السفر",
      "الإكراميات"
    ],
    notes: [
      "الأسعار المعروضة للشخص الواحد بنظام تقاسم غرفة مزدوجة؛ وتُطبَّق رسوم إضافية عند الإقامة الفردية بناءً على الطلب.",
      "تتبع الغوريلا لقاء ثابت مدته ساعة واحدة مع العائلة، وتتبع القرد الذهبي نشاط منفصل — وتُخصَّص التصاريح لكليهما مسبقًا من هيئة تنمية رواندا.",
      "تخضع الإقامة والأسعار للتوافر وقد تتفاوت وفق تاريخ السفر الدقيق ضمن الموسم.",
      "تحدد حكومتا رواندا وتنزانيا رسوم الحدائق ومناطق الحفظ في بلديهما، وهي عرضة للتغيير دون إشعار مسبق."
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول إلى كيغالي",
        description: "الوصول إلى مطار كيغالي الدولي والانتقال إلى فندقكم. تُعد كيغالي واحدة من أنظف عواصم أفريقيا وأكثرها تنظيمًا — مقدمة مثالية لرواندا.",
        accommodation: "فندق في كيغالي",
        meals: "العشاء",
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
        title: "نصب كيغالي التذكاري للإبادة الجماعية",
        description: "زيارة نصب كيغالي التذكاري للإبادة الجماعية، الذي يكرّم ذكرى 250,000 ضحية مدفونين في أرضه، ويروي تاريخ إبادة عام 1994 من خلال شهادات الناجين والصور والأفلام الوثائقية. النصب مؤثر بعمق ويشكّل سياقًا أساسيًا لفهم رواندا الحديثة. بعد الظهر متاح لاستكشاف حي كيغالي الفني النابض بالحياة.",
        accommodation: "فندق في كيغالي",
        meals: "الإفطار والعشاء",
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
        title: "رحلة إلى روهينجيري — إطلالات فيرونغا",
        description: "رحلة برية مدتها أربع ساعات شمال غربًا إلى روهينجيري (موسانزي) عبر تلال رواندا الألف الشهيرة. ترتفع سلسلة براكين فيرونغا بشكل مهيب فوق الأراضي الزراعية المحيطة. توقف لتناول الغداء في مطعم محلي في المرتفعات، والوصول إلى روهينجيري في وقت مبكر من المساء.",
        accommodation: "فندق في روهينجيري",
        meals: "جميع الوجبات",
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
        title: "تتبع الغوريلا الجبلية — حديقة البراكين الوطنية",
        description: "واحدة من أكثر تجارب الحياة البرية استثنائية في العالم. تنطلق الرحلة من محطة حراس كينيغي برفقة مرشدكم المحترف وحراس مسلحين للعثور على عائلة غوريلا مروَّضة في غابات الخيزران في جبال فيرونغا. وعند اللقاء، تقضون ساعة كاملة مع هذه الرئيسيات اللافتة — تشاهدون الذكور الفضية الظهر تقود عائلاتها، والأمهات ترضع صغارها، والصغار تلهو في الأعلى. زيارة مشروع بيطري لرعاية الغوريلا للتعرف على جهود الحفظ.",
        accommodation: "فندق في روهينجيري",
        meals: "جميع الوجبات",
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
        title: "تتبع القرد الذهبي",
        description: "العودة إلى حديقة البراكين الوطنية لتتبع القرد الذهبي المهدد بالانقراض — رئيسيات بلون أزرق ذهبي لافت لا توجد إلا في جبال فيرونغا. يختلف درب الغابة عن درب تتبع الغوريلا، ويمنح منظورًا جديدًا لموئل الخيزران. ترعى الغزلان والظباء عند أطراف الغابة بعد الظهر.",
        accommodation: "فندق في روهينجيري",
        meals: "جميع الوجبات",
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
        title: "طيران إلى سيرينغيتي",
        description: "انتقال صباحي إلى مطار كيغالي وطيران إلى سيرينغيتي. يمر مسار الطيران فوق تلال رواندا الألف وعبر الحدود إلى سافانا تنزانيا الشاسعة — تحوّل مشهدي مهيب. الهبوط في سيرونيرا وبدء أولى جولات السفاري بعد الظهر في السهول.",
        accommodation: "مخيم مفروش في سيرينغيتي",
        meals: "الغداء والعشاء",
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
        title: "سيرينغيتي — يوم كامل",
        description: "يوم كامل في وسط سيرينغيتي. توفر القطط الكبيرة وقطعان النو ومشهد أشجار الأكاسيا الأيقوني مشاهدة غنية للحياة البرية من الصباح حتى المساء. مشروبات الغروب فوق تل صخري بينما تتلوّن سماء سيرينغيتي بالذهبي.",
        accommodation: "مخيم مفروش في سيرينغيتي",
        meals: "جميع الوجبات",
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
        title: "سيرينغيتي — استكشاف إضافي",
        description: "يوم كامل آخر لتتبع الحياة البرية عبر سهول سيرينغيتي. يتّبع مرشدكم أحدث المعلومات لوضعكم حيث تصطاد الأسود أو حيث تربّي فهود صيادة صغارها بين الأعشاب.",
        accommodation: "مخيم مفروش في سيرينغيتي",
        meals: "جميع الوجبات",
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
        title: "فوهة نجورونجورو",
        description: "رحلة إلى نجورونجورو ونزول إلى الفوهة ليوم كامل مع الخمسة الكبار. تضمن الفوهة المغلقة مشاهدات حياة برية لافتة ضمن محيط بركاني مذهل.",
        accommodation: "Ngorongoro Serena Lodge",
        meals: "جميع الوجبات",
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
        title: "بحيرة إياسي — الهادزابي صيادون وجامعو قوت",
        description: "رحلة إلى بحيرة إياسي لقضاء اليوم مع شعب الهادزابي، أحد آخر مجتمعات الصيد وجمع القوت الحقيقية في أفريقيا. المشاركة في رحلة صيد صباحية بالأقواس والسهام التقليدية، ومشاهدة تقنيات إشعال النار التي لم تتغير منذ آلاف السنين، واكتساب فهم عميق لأسلوب حياة يقف على أعتاب الحداثة تمامًا.",
        accommodation: "مخيم مفروش عند بحيرة إياسي",
        meals: "جميع الوجبات",
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
        title: "المغادرة — مطار كليمنجارو الدولي",
        description: "الانتقال من بحيرة إياسي إلى مطار كليمنجارو الدولي لرحلتكم نحو وطنكم. أحد عشر يومًا ربطت بين اثنين من أكثر بلدان أفريقيا استثنائية.",
        accommodation: "لا ينطبق",
        meals: "الإفطار"
      }
    ]
  },
  {
    slug: "12-days-rwanda-tanzania-zanzibar",
    name: "12 يومًا: رواندا وتنزانيا وزنجبار",
    duration: 12,
    destinations: [
      "volcanoes",
      "tarangire",
      "ngorongoro",
      "serengeti",
      "zanzibar"
    ],
    type: "big_five_game_drives",
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
    metaDescription: "اثنا عشر يومًا تجمع بين تتبع الغوريلا في رواندا وسفاري تنزانية عبر تارانجيري ونجورونجورو وسيرينغيتي، وأربع ليالٍ على شواطئ زنجبار. تبدأ الأسعار من 9,375 دولارًا للشخص الواحد.",
    overview: [
      "اثنا عشر يومًا لا تطلب منكم اختيار أي شيء: لقاء مع الغوريلا الجبلية وتتبع للقرد الذهبي في حديقة البراكين الوطنية في رواندا، وسفاري تنزانية كاملة عبر تارانجيري وفوهة نجورونجورو ويومين كاملين في وسط سيرينغيتي، وأربع ليالٍ تختتم الرحلة على شواطئ زنجبار. قلة من البرامج تجمع عائلة غوريلا مروَّضة والخمسة الكبار والرمال البيضاء في حجز واحد، ناهيك عن مسار مرتّب بهذا الإتقان.",
      "يرسّخ نصب كيغالي التذكاري للإبادة الجماعية مرحلة رواندا بالسياق الذي تستحقه، ويضيف سفاري مشي بمرشد في تارانجيري وتيرة مختلفة إلى الجزء البري من الرحلة، فيما تمتد الرحلة كاملة عبر ثلاث فئات إقامة، تريل وريزيرف وسوفرين، بحيث يبقى المسار ذاته أيًّا كانت الفئة التي تحجزونها."
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
      "لقاء مدته ساعة مع عائلة غوريلا جبلية مروَّضة في حديقة البراكين الوطنية في رواندا",
      "تتبع القرد الذهبي في غابة الخيزران ذاتها في فيرونغا",
      "نصب كيغالي التذكاري للإبادة الجماعية — فصل مؤثر وأساسي من قصة رواندا",
      "قطعان فيلة تارانجيري وسفاري مشي بمرشد",
      "الخمسة الكبار في فوهة نجورونجورو ضمن أكبر فوهة بركانية سليمة في العالم",
      "يومان كاملان في أراضي الحيوانات المفترسة الأولى في وسط سيرينغيتي",
      "أربع ليالٍ تختتم الرحلة على شواطئ زنجبار"
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
      "رسوم تصاريح تتبع الغوريلا والقرد الذهبي",
      "جميع رسوم دخول الحدائق",
      "جميع جولات السفاري بمركبة خاصة رباعية الدفع",
      "مرشد محترف طوال الرحلة",
      "الرحلات الجوية المحلية (كيغالي–أروشا، سيرينغيتي–زنجبار)",
      "جميع الوجبات المحددة",
      "الإقامة وفق البرنامج",
      "التنقلات من وإلى المطار وبين المنشآت"
    ],
    includedCategorized: {
      transfers: [
        "الرحلات الجوية المحلية (كيغالي–أروشا، سيرينغيتي–زنجبار)",
        "التنقلات من وإلى المطار وبين المنشآت"
      ],
      accommodationMeals: [
        "جميع الوجبات المحددة",
        "الإقامة وفق البرنامج"
      ],
      guidingGameDrives: [
        "رسوم تصاريح تتبع الغوريلا والقرد الذهبي",
        "جميع رسوم دخول الحدائق",
        "جميع جولات السفاري بمركبة خاصة رباعية الدفع",
        "مرشد محترف طوال الرحلة"
      ]
    },
    excluded: [
      "الرحلات الجوية الدولية",
      "رسوم التأشيرة",
      "التأمين على السفر",
      "الإكراميات",
      "الأنشطة الاختيارية في زنجبار"
    ],
    excludedCategorized: [
      "الرحلات الجوية الدولية",
      "رسوم التأشيرة",
      "التأمين على السفر",
      "الإكراميات",
      "الأنشطة الاختيارية في زنجبار (الغوص، رحلة الداو الشراعية، جولة ستون تاون)"
    ],
    notes: [
      "الأسعار المعروضة للشخص الواحد بنظام تقاسم غرفة مزدوجة؛ وتُطبَّق رسوم إضافية عند الإقامة الفردية بناءً على الطلب.",
      "الحد الأقصى لحجم المجموعة 6 أشخاص؛ وتتوفر مجموعات أكبر بناءً على الطلب.",
      "تخضع الإقامة والأسعار للتوافر وقد تتفاوت وفق تاريخ السفر الدقيق ضمن الموسم.",
      "تحدد حكومتا رواندا وتنزانيا رسوم الحدائق ومناطق الحفظ في بلديهما، وهي عرضة للتغيير دون إشعار مسبق."
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول إلى كيغالي",
        description: "الوصول إلى مطار كيغالي الدولي والانتقال إلى فندقكم للمبيت.",
        accommodation: "فندق في كيغالي",
        meals: "الإقامة والإفطار",
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
        title: "جولة في مدينة كيغالي والانتقال إلى حديقة البراكين الوطنية",
        description: "زيارة نصب كيغالي التذكاري للإبادة الجماعية، الذي يكرّم ضحايا إبادة عام 1994 من خلال شهادات الناجين والسجل التاريخي — مقدمة مؤثرة وأساسية لفهم رواندا الحديثة. متابعة الرحلة نحو سفوح براكين فيرونغا للمبيت.",
        accommodation: "فندق في روهينجيري",
        meals: "الإقامة الكاملة",
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
        title: "تتبع الغوريلا الجبلية",
        description: "الانطلاق برفقة مرشد خبير وحراس حديقة مسلحين إلى غابات الخيزران في فيرونغا للعثور على عائلة غوريلا مروَّضة. وعند العثور عليها، تقضون ساعة كاملة في حضرتها — تشاهدون الذكور الفضية الظهر تقود عائلاتها والصغار تلهو تحت أقدامها، في لقاء بري نادر حقًا.",
        accommodation: "فندق في روهينجيري",
        meals: "الإقامة الكاملة",
        insiderFact: "تحدّ رواندا عدد تصاريح تتبع الغوريلا لتقييد عدد الزوار اليوميين لكل مجموعة عائلية — لذا يُعد الحجز المبكر أمرًا أساسيًا في أشهر الذروة.",
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
        title: "تتبع القرد الذهبي والعودة إلى كيغالي",
        description: "تتبع القرد الذهبي المهدد بالانقراض عبر امتداد مختلف من غابة فيرونغا، ثم العودة إلى كيغالي للمبيت.",
        accommodation: "فندق في كيغالي",
        meals: "الإقامة الكاملة",
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
        title: "طيران إلى أروشا",
        description: "رحلة طيران قصيرة فوق تلال رواندا الألف وصولًا إلى سافانا تنزانيا، والوصول إلى أروشا للمبيت قبل بدء السفاري.",
        accommodation: "فندق في أروشا",
        meals: "الإقامة والإفطار",
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
        title: "من أروشا إلى حديقة تارانجيري الوطنية",
        description: "رحلة إلى تارانجيري لجولة سفاري بمرشد وسفاري مشي وسط أكبر قطعان الفيلة في تنزانيا وأشجار الباوباب العتيقة.",
        accommodation: "نُزل في تارانجيري",
        meals: "الإقامة الكاملة",
        insiderFact: "تحتضن تارانجيري واحدة من أعلى كثافات الفيلة في أفريقيا خارج الموسم الممطر، حين تتجمع القطعان على طول النهر.",
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
        title: "من فوهة نجورونجورو إلى كاراتو",
        description: "نزول يوم كامل بمرشد إلى فوهة نجورونجورو، لتتبع الخمسة الكبار ضمن أكبر فوهة بركانية سليمة في العالم، قبل العودة إلى كاراتو للمبيت.",
        accommodation: "نُزل في كاراتو",
        meals: "الإقامة الكاملة",
        insiderFact: "فوهة نجورونجورو نظام بيئي مغلق تبلغ مساحته نحو 260 كيلومترًا مربعًا — لا تغادرها معظم الحيوانات المقيمة أبدًا.",
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
        title: "من كاراتو إلى وسط سيرينغيتي",
        description: "رحلة إلى وسط سيرينغيتي، دخولًا إلى واحدة من أكثر المناطق ثباتًا في تنزانيا لمشاهدة الأسود والفهود والفهود الصيادة.",
        accommodation: "مخيم مفروش في سيرينغيتي",
        meals: "الإقامة الكاملة",
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
        title: "وسط سيرينغيتي، يوم كامل",
        description: "يوم كامل من جولات السفاري بمرشد عبر سهول سيرينغيتي المفتوحة، لتتبع الحيوانات المفترسة في أوج نشاطها.",
        accommodation: "مخيم مفروش في سيرينغيتي",
        meals: "الإقامة الكاملة",
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
        title: "طيران إلى زنجبار",
        description: "طيران من سيرينغيتي عبر أروشا إلى زنجبار، والانتقال إلى إقامتكم المطلة على الشاطئ للمرحلة الأخيرة من الرحلة.",
        accommodation: "Royal Zanzibar",
        meals: "الإفطار والغداء",
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
        title: "يوم كامل في زنجبار",
        description: "يوم حر على شواطئ زنجبار — الغوص في الشعاب المرجانية، أو الإبحار في رحلة داو عند الغروب، أو ببساطة الراحة بعد أحد عشر يومًا من التنقل.",
        accommodation: "Royal Zanzibar",
        meals: "شامل كليًا",
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
        title: "المغادرة",
        description: "الانتقال إلى مطار زنجبار لرحلتكم نحو وطنكم.",
        accommodation: "لا ينطبق",
        meals: "الإفطار والغداء"
      }
    ]
  },
  {
    slug: "12-days-rwanda-primates",
    name: "سفاري رواندا للرئيسيات وملاذ زنجبار الشاطئي",
    duration: 12,
    destinations: [
      "kigali",
      "nyungwe",
      "volcanoes",
      "zanzibar"
    ],
    type: "gorilla_trekking",
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
    tagline: "مُحدَّث لموسم 2027.",
    metaTitle: "سفاري رواندا للرئيسيات وملاذ زنجبار الشاطئي | EWA Safari Outfitters",
    metaDescription: "تتبع الشمبانزي والغوريلا الجبلية والقرد الذهبي في رواندا، تليها أربع ليالٍ على شواطئ زنجبار الساحرة. رحلة واحدة متكاملة لمدة 12 يومًا، تبدأ الأسعار من 7,742.08 دولارًا للشخص.",
    overview: [
      "تحتضن رواندا ثلاثة أنواع من الرئيسيات لا يشاهد معظم المسافرين إلا واحدًا منها. يتتبع هذا البرنامج الأنواع الثلاثة كلها — الشمبانزي المتنقل عبر مظلة غابة نيونجوي، والغوريلا الجبلية على السفوح الضبابية فوق موسانزي، والقرود الذهبية المتوثبة بين خيزران حديقة البراكين الوطنية — قبل أن يختتم بأربع ليالٍ لا تفعلون خلالها شيئًا سوى الاستمتاع بشواطئ زنجبار.",
      "شقّا الرحلة مختلفان حقًا في إيقاعهما، وقد صُمِّم البرنامج ليحترم هذا الفارق بدلًا من مزجهما معًا. تطلب رواندا منكم شيئًا: مشيًا حقيقيًا في الغابات، أحيانًا على ارتفاع، وأيامًا للتتبع مرتبطة بتصاريح لا يمكن تسريعها أو إعادة جدولتها بعد الحجز. أما زنجبار فلا تطلب منكم شيئًا على الإطلاق. يقع عبور بحيرة كيفو بالقارب بين منطقتي التتبع كوقفة متعمدة، ويفتتح صباح في ستون تاون الشق الشاطئي قبل أن يفرغ الجدول تمامًا. تتبع الشمبانزي والغوريلا نشاطان يتطلبان جهدًا بدنيًا حقيقيًا، لا جولة سفاري يُقضى فيها الوقت جالسين — ويمكن استئجار حمّالين لدعم إضافي، وقد صُمِّمت إقامات رواندا الحقيقية لليلتين في كل محطة لتقليل الإرهاق حيث لا يمكن تسهيل التتبع نفسه."
    ],
    highlights: [
      "أنواع الرئيسيات الثلاثة كلها في رواندا — الشمبانزي والغوريلا الجبلية والقرد الذهبي — تجربة تتبع مختلفة حقًا لكل منها",
      "رحلة بالقارب في بحيرة كيفو بين منطقتي التتبع، مُدمجة كيوم راحة لا كمجرد انتقال",
      "تفاعل ثقافي إلى جانب يوم تتبع الغوريلا، يضيف سياقًا حقيقيًا لا إضافة متسرّعة",
      "أربع ليالٍ كاملة في زنجبار، تشمل صباحًا في ستون تاون وثلاثة أيام شاطئية دون جدول",
      "إقامات حقيقية لليلتين في كل محطة عبر رواندا — دون توقفات ليلة واحدة، ما يمنح وقتًا حقيقيًا للاستقرار قبل الانتقال"
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
      "جميع رسوم الحدائق وتصاريح التتبع",
      "المركبة والمرشد والوقود طوال الرحلة",
      "جميع الأنشطة المدرجة",
      "الإقامة وفق المُدرَج",
      "رحلتا الطيران كيغالي–كاميمبي وكيغالي–زنجبار",
      "التنقلات من وإلى المطار"
    ],
    excluded: [
      "الرحلات الجوية الدولية",
      "رسوم التأشيرة",
      "التأمين على السفر",
      "الإكراميات",
      "المصروفات الشخصية"
    ],
    notes: [
      "الأسعار المعروضة للشخص الواحد بنظام تقاسم غرفة مزدوجة؛ وتُطبَّق رسوم إضافية عند الإقامة الفردية بناءً على الطلب.",
      "تتبع الغوريلا والشمبانزي والقرد الذهبي أنشطة محدودة مرتبطة بتصاريح تُخصَّص مسبقًا من هيئة تنمية رواندا.",
      "يوجد حد أدنى للعمر لتتبع الغوريلا والشمبانزي، تحدده سلطات الحدائق الرواندية وهو عرضة للتغيير — يُرجى تأكيد الحد المعمول به حاليًا مع مستشاركم عند الحجز.",
      "تخضع الإقامة والأسعار للتوافر وقد تتفاوت وفق تاريخ السفر الدقيق ضمن الموسم."
    ],
    faq: [
      {
        q: "هل هذا البرنامج مرهق بدنيًا؟",
        a: "شق رواندا مرهق حقًا — إذ يتضمن تتبع الشمبانزي والغوريلا مشيًا حقيقيًا في الغابات، أحيانًا على تضاريس شديدة الانحدار أو غير مستوية، وأحيانًا على ارتفاع. أما شق زنجبار فلا يتطلب أي مجهود على الإطلاق. ويمكن استئجار حمّالين لدعم إضافي في رحلات تتبع رواندا."
      },
      {
        q: "ما الفرق بين رحلات التتبع الثلاث للرئيسيات؟",
        a: "يغطي تتبع الشمبانزي في نيونجوي غابة أكثف بحثًا عن رئيسيات أسرع حركة وأعلى صوتًا. أما تتبع الغوريلا فوق موسانزي فهو لقاء منظّم بدقة مدته ساعة مع عائلة مروَّضة. وتتبع القرد الذهبي هو الأكثر حيوية وسرعة من بين الثلاثة، عبر غابة الخيزران."
      },
      {
        q: "لماذا يتضمن البرنامج رحلة بالقارب في بحيرة كيفو؟",
        a: "إنها وقفة متعمدة بين منطقتي التتبع — يوم راحة حقيقي بدلًا من انتقال مباشر، وذو مناظر خلابة، إذ يعبر إحدى بحيرات أفريقيا الكبرى."
      },
      {
        q: "ما الذي يشمله السعر، وما الذي لا يشمله؟",
        a: "يشمل: جميع رسوم الحدائق وتصاريح التتبع، والمركبة والمرشد والوقود طوال الرحلة، وجميع الأنشطة المدرجة، والإقامة وفق المُدرَج، ورحلتي الطيران كيغالي–كاميمبي وكيغالي–زنجبار، والتنقلات من وإلى المطار. لا يشمل: الرحلات الجوية الدولية، ورسوم التأشيرة، والتأمين على السفر، والإكراميات، والمصروفات الشخصية."
      },
      {
        q: "هل يمكن تقصير هذا البرنامج، أم أن الأيام الاثني عشر كاملة ضرورية؟",
        a: "يمنح البرنامج الكامل وقتًا مناسبًا للشقّين كليهما — فتسريع مرحلة رواندا يحمل خطر تفويت التصاريح أو إرهاق المجموعة قبل الوصول إلى الشاطئ، وتقصير زنجبار ينتقص من الراحة التي صُمِّمت الرحلة لتختتم بها. اسألوا مستشاركم إن كانت لديكم قيود زمنية محددة."
      },
      {
        q: "كيف يتغير السعر بحسب حجم المجموعة؟",
        a: "تُقسَّم تكاليف المركبة والمرشد والوقود على المجموعة، لذا ينخفض السعر للشخص الواحد مع انضمام مزيد من المسافرين — راجعوا جدول الأسعار أعلاه."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول إلى كيغالي",
        description: "الهبوط في كيغالي، وترك الأمسية الأولى تمرّ بهدوء — عاصمة نظيفة ومنظمة تفاجئ معظم الزائرين لأول مرة.",
        accommodation: "Kigali Serena Hotel",
        meals: "العشاء",
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
        title: "من كيغالي إلى حديقة نيونجوي الوطنية",
        description: "رحلة طيران إلى كاميمبي تستبدل انتقالًا بريًا طويلًا بظهيرة قريبة من الغابة فعليًا، مع وقت كافٍ للاستقرار قبل رحلة تتبع الغد.",
        accommodation: "Munazi Eco Lodge",
        meals: "جميع الوجبات",
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
        title: "تتبع الشمبانزي في نيونجوي",
        description: "رحلة تتبع بمرشد عبر واحدة من أقدم الغابات المطيرة في أفريقيا بحثًا عن مجتمع شمبانزي نيونجوي — أسرع حركة وأعلى صوتًا من الغوريلا الجبلية، وبإيقاع تتبع مختلف حقًا نتيجة لذلك.",
        accommodation: "Munazi Eco Lodge",
        meals: "جميع الوجبات",
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
        title: "رحلة بالقارب في نيونجوي والانتقال إلى موسانزي",
        description: "يوم هادئ عن قصد — رحلة بالقارب عبر بحيرة كيفو قبل الرحلة شمالًا إلى موسانزي، في ظل براكين فيرونغا.",
        accommodation: "Ingagi Lodge",
        meals: "جميع الوجبات",
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
        title: "تتبع الغوريلا وتفاعل ثقافي",
        description: "يقود المتتبعون الطريق إلى الغابة للعثور على عائلة غوريلا جبلية مروَّضة. وحين يُعثر عليها، ساعة منظّمة بدقة في حضرتها — الذكور الفضية الظهر، والأمهات برفقة صغارهن، والصغار في أثناء اللعب. يتبع ذلك تفاعل ثقافي مع المجتمع المحلي بعد الظهر.",
        accommodation: "Ingagi Lodge",
        meals: "جميع الوجبات",
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
        title: "تتبع القرد الذهبي والانتقال إلى كيغالي",
        description: "صباح أسرع وتيرة وأكثر حيوية من تتبع الغوريلا — إذ تتحرك القردة الذهبية بسرعة عبر مظلة الخيزران، ما يجعل التتبع مسألة مواكبة سرعتها بقدر ما هو مسألة صبر.",
        accommodation: "Kigali Serena",
        meals: "جميع الوجبات",
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
        title: "من كيغالي إلى زنجبار",
        description: "رحلة طيران من كيغالي إلى زنجبار تختتم شق المغامرة من الرحلة وتفتتح شق الراحة.",
        accommodation: "Zanzibar Serena",
        meals: "الإفطار",
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
        title: "جولة في ستون تاون",
        description: "صباح لاستكشاف أزقة ستون تاون المتعرجة وأسواق التوابل والعمارة السواحلية العربية، قبل الرحلة شمالًا إلى الشاطئ.",
        accommodation: "Nungwi Dreams By Mantis",
        meals: "الإفطار",
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
        title: "استرخاء على الشاطئ",
        description: "ثلاثة أيام كاملة لا شيء في جدولها سوى الشاطئ نفسه.",
        accommodation: "Nungwi Dreams By Mantis",
        meals: "الإفطار",
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
        title: "استرخاء على الشاطئ",
        description: "يوم كامل ثانٍ من الاسترخاء على ساحل زنجبار ذي الرمال البيضاء.",
        accommodation: "Nungwi Dreams By Mantis",
        meals: "الإفطار",
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
        title: "استرخاء على الشاطئ",
        description: "يوم شاطئي كامل أخير — الغوص في الشعاب المرجانية، أو الإبحار في رحلة داو عند الغروب، أو ببساطة عدم فعل أي شيء على الإطلاق.",
        accommodation: "Nungwi Dreams By Mantis",
        meals: "الإفطار",
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
        title: "المغادرة",
        description: "الانتقال إلى مطار زنجبار لرحلتكم الدولية المتابعة.",
        accommodation: "لا ينطبق",
        meals: "الإفطار"
      }
    ]
  },
  {
    slug: "4-day-rwanda-gorilla-trekking",
    name: "4 أيام: تتبع الغوريلا في رواندا",
    duration: 4,
    destinations: [
      "volcanoes",
      "kigali"
    ],
    type: "gorilla_trekking",
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
    metaDescription: "رحلة خاصة إلى رواندا لمدة 4 أيام — تتبع الغوريلا الجبلية في حديقة البراكين الوطنية، والقرد الذهبي، ونصب كيغالي التذكاري للإبادة الجماعية. تبدأ الأسعار من 3,415 دولارًا للشخص الواحد.",
    overview: [
      "يسمّونها أرض التلال الألف، وبحلول اللحظة التي تصعد فيها مركبتكم إلى الضباب فوق موسانزي، ستدركون أن الاسم لا ينصفها. تنطوي رواندا على نفسها في سلسلة تلو أخرى من التلال الخضراء المدرَّجة يدويًا، والمزروعة منذ أجيال، صاعدة باطراد نحو سلسلة براكين تحتضن واحدًا من أندر اللقاءات وأكثرها استثناءً على كوكبنا: عائلة من الغوريلا الجبلية، تقضي صباحًا عاديًا، غير عابئة إطلاقًا بالبشر الصغار المندهشين الذين قطعوا كل هذه المسافة ليجلسوا معها.",
      "هذه رحلة من شقّين، ولكلٍّ منهما أهميته. في كيغالي، ستمشون عبر نصب تذكاري للإبادة الجماعية وستخرجون متأثرين بما اختارت هذه الدولة الصغيرة أن تصبح عليه منذ ذلك الحين — واحدة من أروع قصص الصمود والمصالحة في أي مكان في العالم. ثم يتجه الطريق شمالًا، نحو غابة الخيزران والقمم البركانية، لساعة واحدة مع عائلة غوريلا لن تُعدّكم لها أي صورة فوتوغرافية مهما كانت، وصباح أكثر حيوية بعدها مع القردة الذهبية التي تشارك الغوريلا جبلها. أربعة أيام، وقصتان لا تُنسيان، ودولة صغيرة واحدة تحمل أكثر بكثير مما يوحي به حجمها.",
      "تتناسب هذه الرحلة بشكل رائع كتمديد قبل أو بعد سفاري أوسع في كينيا أو تنزانيا — يضيفها كثير من مسافرينا إلى بداية أو نهاية رحلة أطول في شرق أفريقيا."
    ],
    highlights: [
      "ساعة واحدة تبقى معكم مدى الحياة — يقودكم متتبعون تابعوا العائلة منذ الفجر إليها، ويُحدَّد اللقاء نفسه بستين دقيقة، نافذة صغيرة تبدو رغم ذلك كافية",
      "نصب كيغالي التذكاري للإبادة الجماعية — ليس صباحًا سهلًا، لكنه ضروري، وقصة الصمود التي تليه ستغيّر نظرتكم إلى بقية الرحلة",
      "تتبع القرد الذهبي — قريب أسرع وأكثر حيوية لتتبع الغوريلا، لا يوجد تقريبًا في أي مكان آخر على الأرض سوى هذا الامتداد من فيرونغا",
      "حديقة البراكين الوطنية نفسها — غابة خيزران وقمم بركانية لا تشبه أي مكان آخر على خريطة السفاري",
      "تصريح دخول واحد للغوريلا، مؤمَّن ومؤكَّد مسبقًا — إذ تحدّ رواندا عدد التصاريح اليومية بصرامة، وقد صُمِّم هذا البرنامج حول تأمين واحد منها",
      "يسهل دمجها مع كينيا أو تنزانيا — أضيفوها كتمديد قبل أو بعد سفاري أطول في شرق أفريقيا"
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
      "جميع التنقلات",
      "رسوم دخول نصب كيغالي التذكاري للإبادة الجماعية",
      "تصريح تتبع الغوريلا لدخول واحد",
      "تصريح تتبع القرد الذهبي",
      "الإقامة وفق المُدرَج",
      "الوجبات المحددة"
    ],
    excluded: [
      "الرحلات الجوية الدولية إلى كيغالي",
      "التأشيرات",
      "التأمين على السفر",
      "الإكراميات",
      "المصروفات الشخصية"
    ],
    notes: [
      "الأسعار المعروضة للشخص الواحد بنظام تقاسم غرفة مزدوجة؛ وتُطبَّق رسوم إضافية عند الإقامة الفردية بناءً على الطلب.",
      "تصاريح تتبع الغوريلا والقرد الذهبي أنشطة محدودة مرتبطة بتصاريح تُخصَّص مسبقًا من هيئة تنمية رواندا.",
      "تخضع الإقامة والأسعار للتوافر وقد تتفاوت وفق تاريخ السفر الدقيق.",
      "تحدد الحكومة رسوم الحدائق الوطنية ومناطق الحفظ في رواندا، وهي عرضة للتغيير دون إشعار مسبق."
    ],
    faq: [
      {
        q: "ما مدى الجهد البدني الذي يتطلبه تتبع الغوريلا؟",
        a: "يتفاوت الأمر يومًا بيوم — إذ يحدد المتتبعون أولًا موقع مبيت الغوريلا ليلًا، لذا قد يكون المشي قصيرًا بثلاثين دقيقة فقط أو يمتد لساعات عدة عبر تضاريس غابات شديدة الانحدار وموحلة أحيانًا. يساعد المستوى المعقول من اللياقة، ويمكن استئجار حمّالين محليًا لمن يرغب بدعم إضافي أثناء التسلق."
      },
      {
        q: "لماذا يُعد تصريح الغوريلا مكلفًا؟",
        a: "تسعّر رواندا التصاريح وتحدّها عمدًا لتقييد أعداد الزوار اليومية وتمويل جهود الحفظ ومكافحة الصيد الجائر مباشرة — ويُنسب إلى هذا النموذج فضل كبير في مساعدة الغوريلا الجبلية على أن تصبح واحدة من قلة نادرة من مجموعات القردة العليا التي تشهد نموًا في أعدادها."
      },
      {
        q: "ما مدى قربنا من الغوريلا، وإلى متى؟",
        a: "حين يعثر المتتبعون على العائلة، تقضي المجموعات ساعة واحدة منظّمة بصرامة في حضرتها، مع الحفاظ على مسافة دنيا محترمة، إلا حين تختار الغوريلا نفسها الاقتراب."
      },
      {
        q: "هل تتبع القرد الذهبي مشمول أم اختياري؟",
        a: "مشمول — فهو مُدمج في اليوم الرابع من هذا البرنامج كنشاط مواز أخف وأسرع وتيرة من تتبع الغوريلا."
      },
      {
        q: "ما الذي يشمله السعر، وما الذي لا يشمله؟",
        a: "يشمل: جميع التنقلات، ورسوم دخول نصب كيغالي التذكاري للإبادة الجماعية، وتصريح تتبع الغوريلا لدخول واحد، وتصريح تتبع القرد الذهبي، والإقامة وفق المُدرَج، والوجبات المحددة. لا يشمل: الرحلات الجوية الدولية إلى كيغالي، والتأشيرات، والتأمين على السفر، والإكراميات، والمصروفات الشخصية."
      },
      {
        q: "هل يمكن تمديد هذه الرحلة أو دمجها مع وجهات أخرى؟",
        a: "نعم — تعمل هذه الرحلة بشكل رائع كتمديد قبل أو بعد سفاري أطول في كينيا أو تنزانيا، للمسافرين الراغبين في الجمع بين الغوريلا ورحلة أوسع في شرق أفريقيا. اسألوا مستشاركم عن إمكانية تمديد هذا البرنامج."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول إلى كيغالي",
        description: "الهبوط في كيغالي والانتقال إلى فندقكم. المبيت في كيغالي سيرينا، قاعدة مريحة ومركزية لليلة قبل أن تتجه الرحلة شمالًا.",
        accommodation: "Kigali Serena",
        meals: "العشاء",
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
        title: "من نصب كيغالي التذكاري للإبادة الجماعية إلى حديقة البراكين الوطنية",
        description: "زيارة صباحية إلى نصب كيغالي التذكاري للإبادة الجماعية — ليست محطة سهلة، لكنها ضرورية لفهم رواندا التي تسافرون عبرها. غداء ساخن في كيغالي، ثم رحلة شمالًا نحو سفوح براكين فيرونغا. المبيت في إنغاغي لودج، على مقربة من بوابات الحديقة لبداية مبكرة غدًا.",
        accommodation: "Ingagi Lodge",
        meals: "جميع الوجبات",
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
        title: "تتبع الغوريلا، حديقة البراكين الوطنية",
        description: "اليوم الذي بُنيت الرحلة حوله. ينطلق المتتبعون إلى الغابة عند الفجر للعثور على عائلة غوريلا، وتتبعهم مجموعتكم — بين ثلاثين دقيقة وعدة ساعات من المشي عبر غابات الخيزران والجبال، بحسب المكان الذي انتقلت إليه المجموعة. وحين يُعثر عليها، تقضون ساعة منظّمة بدقة في حضرتها: الذكور الفضية الظهر، والأمهات برفقة صغارهن، وحياة يومية غير متعجّلة لعائلة غوريلا برية تمضي في شؤونها، على مسافة قريبة تبدو غير معقولة تمامًا.",
        accommodation: "Ingagi Lodge",
        meals: "جميع الوجبات",
        insiderFact: "تحدّ رواندا عدد تصاريح تتبع الغوريلا لتقييد عدد الزوار اليوميين لكل مجموعة عائلية — لذا يُعد الحجز المبكر أمرًا أساسيًا في أشهر الذروة.",
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
        title: "تجربة القرد الذهبي والمغادرة",
        description: "غابة مختلفة، وإيقاع مختلف — تتحرك القردة الذهبية بسرعة وتبقى مرتفعة في مظلة الخيزران، ويشكّل تتبعها صباحًا أكثر حيوية ونشاطًا من تتبع الغوريلا. الانتقال عودة إلى كيغالي لرحلتكم المتابعة.",
        accommodation: "لا ينطبق",
        meals: "الإفطار"
      }
    ]
  },
  {
    slug: "5-day-gombe-chimpanzee-trekking",
    name: "5 أيام: تتبع خاص لشمبانزي غومبي",
    duration: 5,
    destinations: [
      "gombe"
    ],
    type: "gorilla_trekking",
    bestMonths: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
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
    metaTitle: "5 أيام: تتبع خاص لشمبانزي غومبي | مغامرة فاخرة في تنزانيا",
    metaDescription: "بعثة خاصة بإشراف دليل مرافق لتتبع الشمبانزي البري في غومبي ستريم — واحدة من أندر لقاءات الحياة البرية في أفريقيا بأكملها. خمسة أيام، تبدأ الأسعار من 4,206.25 دولارًا للشخص الواحد.",
    overview: [
      "توجد غابة على الشاطئ الشرقي لبحيرة تنجانيقا يكاد فيها الحد الفاصل بين الإنسان والحيوان أن يتلاشى تمامًا. هذه هي غومبي — أصغر حديقة وطنية في تنزانيا بمساحة تبلغ نحو 35 كيلومترًا مربعًا (13.5 ميلًا مربعًا)، والمكان الذي شاهدت فيه جين غودال الشابة للمرة الأولى شمبانزي ينزع الأوراق عن غصن ويستخدمه لاصطياد النمل الأبيض من كومته، لتعيد بذلك كتابة ما فهمه العلم عن أقرب أقربائنا الأحياء. بعد خمسة أيام من الآن، قد تقفون حيث وقفت هي.",
      "الوصول إلى هنا جزء من القصة، وجزء مما يجعل هذه التجربة حصرية حقًا. لا يصل إلى غومبي أي طريق بري — إذ يصل كل زائر بالقارب الخاص، كما جرت العادة منذ ستين عامًا، عابرًا مياهًا صافية لدرجة أنها تحمل نوعًا من الصمت الخاص بها. ترتفع تلال الحديقة المشجّرة من شاطئ البحيرة عند 773 مترًا (2536 قدمًا) فوق مستوى سطح البحر إلى نحو 1500 متر (4921 قدمًا) عند أعلى نقاطها — برّية شديدة الانحدار ومحدودة المساحة تُبقي أعداد الزوار منخفضة بشكل طبيعي ودائم. توجد نُزل واحد بالضبط داخل الحديقة. هذه ليست تجربة قابلة للتوسّع، بل تجربة فريدة.",
      "ينسج هذا البرنامج دار السلام وكيغوما وغومبي في خمسة أيام غير متعجّلة، مبنية كليًا حول تنقلات خاصة وصباحين كاملين لتتبع الشمبانزي عند الفجر. إنها، دون مبالغة، واحدة من أندر لقاءات الحياة البرية وأكثرها امتيازًا المتبقية على وجه الأرض — وواحدة من القلة النادرة التي لا يمكن للمال مهما زاد أن يجعلها أكثر ازدحامًا، لأن الحديقة نفسها لن تسمح بذلك."
    ],
    highlights: [
      "يومان كاملان لتتبع الشمبانزي عند الفجر — لا صباح متسرّع واحد، بل فرصتان حقيقيتان للقاء قوي، إذ تتنقل المجموعة ليلًا ونادرًا ما تبيت في المكان ذاته مرتين",
      "بعض أكثر مجموعات الشمبانزي البرية ترويضًا على وجه الأرض — إذ يعني وجود بحثي متواصل منذ ستة عقود لقاءات أقرب وأهدأ من أي مكان آخر تقريبًا يُتتبَّع فيه الشمبانزي في البرية",
      "الوقوف حيث وقفت جين غودال — غومبي هي مهد الأبحاث الميدانية للرئيسيات، ودروب الغابة التي ستمشون عليها هي ذاتها التي بُنيت عليها دراساتها الأصلية",
      "بعثة بطبيعتها، لا بالاسم فقط — لا يصل إلى غومبي أي طريق بري؛ ويجري كل عبور لبحيرة تنجانيقا بقارب خاص، مرتّب كليًا وفق جدولكم",
      "حصرية بطبيعتها، لا بالتسويق فقط — إذ تحدّ غومبي أعداد زوارها بحكم جغرافيتها لا بحكم السعر، بوجود نُزل واحد داخل الحديقة ووصول بالقارب حصرًا",
      "مركبة ومرشد وقارب خاصون طوال الرحلة — دون تنقلات مشتركة، أو مواعيد انطلاق ثابتة، أو انتظار لجداول مسافرين آخرين"
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
      "جميع التنقلات الخاصة",
      "رحلتا الطيران ذهابًا وإيابًا بين دار السلام وكيغوما",
      "رسوم دخول الحديقة وتتبع الشمبانزي",
      "الإقامة الكاملة في مخيم مبالي مبالي غومبي المفروش",
      "الإقامة طوال الرحلة وفق المُدرَج"
    ],
    excluded: [
      "الرحلات الجوية الدولية إلى دار السلام",
      "التأشيرات",
      "التأمين على السفر",
      "الإكراميات",
      "المصروفات الشخصية"
    ],
    notes: [
      "الأسعار المعروضة للشخص الواحد بنظام تقاسم غرفة مزدوجة؛ ويتحمل المسافر الفردي رسومًا إضافية — يُرجى سؤال مستشاركم عن سعر خاص بالمسافر المنفرد.",
      "تُقسَّم تكاليف المركبة والمرشد والقارب الخاصة على المجموعة، لذا ينخفض السعر للشخص الواحد مع انضمام مزيد من المسافرين.",
      "تخضع الإقامة والأسعار للتوافر وقد تتفاوت وفق تاريخ السفر الدقيق.",
      "تحدد الحكومة رسوم الحدائق الوطنية ومناطق الحفظ في تنزانيا، وهي عرضة للتغيير دون إشعار مسبق."
    ],
    faq: [
      {
        q: "ما مدى الجهد البدني الذي تتطلبه رحلة تتبع الشمبانزي؟",
        a: "يجري التتبع على دروب غابات قد تكون شديدة الانحدار وغير مستوية، صعودًا من مستوى البحيرة عند 773 مترًا (2536 قدمًا) نحو خطوط تلال قرب 1500 متر (4921 قدمًا). وقد يستغرق المشي للعثور على الشمبانزي ما بين ثلاثين دقيقة وبضع ساعات بحسب المكان الذي انتقلت إليه المجموعة ليلًا. يساعد المستوى المعقول من اللياقة، لكن هذه رحلة مغامرة لا رحلة تقنية أو متطرفة — ويتمكن معظم المسافرين ذوي الصحة العامة الجيدة من خوضها براحة."
      },
      {
        q: "هل يوجد حد أدنى للعمر للتتبع؟",
        a: "نعم. يُرجى تأكيد الحد العمري المعمول به حاليًا مع مستشار السفاري عند الحجز، إذ تحدده سلطات الحديقة وهو عرضة للتغيير."
      },
      {
        q: "ما مدى قربنا من الشمبانزي، وإلى متى؟",
        a: "حين يعثر مرشدكم على المجموعة، تقضون حتى ساعة واحدة برفقتها — الحد الزمني ذاته المستخدم في تتبع الغوريلا، وللسبب ذاته: تقليل الضغط على مجموعة برية. تتفاوت المسافة طبيعيًا بحسب حركة الشمبانزي، لكن المشاهدات في غومبي تميل إلى أن تكون أقرب من أي وجهة أخرى تقريبًا لتتبع الشمبانزي في أفريقيا."
      },
      {
        q: "هل توجد احتياطات صحية قبل التتبع؟",
        a: "نعم. يتشارك الشمبانزي نحو 99% من الحمض النووي البشري، وهو شديد التأثر بالأمراض التنفسية البشرية، لذا يُطلب من أي شخص تظهر عليه أعراض نزلة برد أو إنفلونزا الامتناع عن التتبع ذلك اليوم، ويُشترط ارتداء كمامة عند الاقتراب من المجموعة."
      },
      {
        q: "ما أفضل وقت في السنة لزيارة غومبي؟",
        a: "يوفر موسم الجفاف (من يونيو حتى أكتوبر تقريبًا) أسهل ظروف التتبع وأوضح رؤية في الغابة. يمكن التتبع على مدار العام، لكن دروب الموسم الممطر أكثر انحدارًا وصعوبة."
      },
      {
        q: "كيف نصل إلى غومبي — هل يوجد طريق؟",
        a: "لا. لا يمكن الوصول إلى غومبي عبر طريق بري. يجري كل زيارة بقارب خاص، ينطلق من كيغوما — وهو المسار المُدمج في هذا البرنامج منذ البداية."
      },
      {
        q: "هل تناسب هذه الرحلة المسافرين المنفردين؟",
        a: "نعم، وإن كانت الأسعار أعلاه محسوبة للشخص الواحد بنظام التقاسم؛ ويتحمل المسافر المنفرد رسومًا إضافية على الإقامة. يُرجى سؤال مستشاركم عن سعر خاص بالمسافر المنفرد."
      },
      {
        q: "ما الذي يشمله السعر، وما الذي لا يشمله؟",
        a: "يشمل: جميع التنقلات الخاصة، ورحلتي الطيران ذهابًا وإيابًا بين دار السلام وكيغوما، ورسوم دخول الحديقة وتتبع الشمبانزي، والإقامة الكاملة في مخيم مبالي مبالي غومبي المفروش، والإقامة طوال الرحلة. لا يشمل: الرحلات الجوية الدولية إلى دار السلام، والتأشيرات، والتأمين على السفر، والإكراميات، والمصروفات الشخصية."
      },
      {
        q: "هل يمكن دمج هذه الرحلة مع حدائق أخرى أو تمديدها؟",
        a: "نعم — تتناسب غومبي بشكل طبيعي مع جبال ماهالي للمسافرين الراغبين في تجربتي تتبع شمبانزي، أو يمكن إضافتها إلى برنامج في الدائرة الجنوبية. اسألوا مستشاركم عن إمكانية تمديد هذا البرنامج أو دمجه."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول إلى دار السلام",
        description: "الهبوط في دار السلام، وترك الساحل يحدد إيقاع ما هو آتٍ.",
        accommodation: "Dar es Salaam Serena Hotel",
        meals: "العشاء",
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
        title: "نحو الغرب: من كيغوما إلى غومبي ستريم",
        description: "تنقلكم رحلة طيران خاصة مستأجرة من دار السلام إلى كيغوما، بلدة لا تزال تحمل طابع ماضيها كمحطة سكة حديد ومركز تجاري على البحيرة. ومن هناك، تتحول الرحلة إلى المياه — انتقال بمركبة خاصة وقارب داو عبر بحيرة تنجانيقا إلى غومبي ستريم.",
        accommodation: "Mbalimbali Gombe Tented Camp",
        meals: "الإقامة الكاملة",
        insiderFact: "لا يصل إلى غومبي أي طريق بري — إذ يصل كل زائر بالقارب الخاص، كما جرت العادة منذ ستين عامًا.",
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
        title: "يوم كامل برفقة الشمبانزي",
        description: "هذا هو اليوم الذي بُنيت البعثة بأكملها حوله. يبدأ التتبع عند الفجر على دروب تصعد باطراد من شاطئ البحيرة إلى تلال الغابة في الأعلى، برفقة مرشد يعرف هذه التضاريس وهذه المجموعة بالاسم. وحين تجدونها — وشمبانزي غومبي، الأكثر ترويضًا من أي مجموعة برية أخرى تقريبًا على وجه الأرض، تُوجد في معظم الأحيان — تقضون ساعة نادرة وغير متعجّلة في رفقتها.",
        accommodation: "Mbalimbali Gombe Tented Camp",
        meals: "الإقامة الكاملة",
        insiderFact: "بدأت جين غودال الشابة أبحاثها الرائدة في هذه الغابة نفسها عام 1960 — والدروب التي تمشون عليها هي ذاتها التي بُنيت عليها دراساتها الأصلية.",
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
        title: "العودة إلى كيغوما",
        description: "عبورٌ آخر للمياه عودة إلى كيغوما، تاركين الغابة وشمبانزيها خلفكم دون أن تُنسى.",
        accommodation: "Kigoma Hilltop",
        meals: "الإقامة الكاملة",
        insiderFact: "يطل كيغوما هيلتوب بمناظر بانورامية على بحيرة تنجانيقا، إحدى أعمق بحيرات المياه العذبة على وجه الأرض.",
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
        title: "من كيغوما إلى دار السلام",
        description: "انتقال أخير إلى المطار ورحلة طيران عودة إلى مطار جوليوس نيريري الدولي في دار السلام.",
        accommodation: "لا ينطبق",
        meals: "الإفطار"
      }
    ]
  },
  {
    slug: "12-day-seniors-anniversary-groups-safari",
    name: "سفاري تنزانيا لمدة 12 يوماً لكبار السن والذكرى السنوية والمجموعات",
    duration: 12,
    destinations: [
      "arusha",
      "tarangire",
      "ngorongoro",
      "serengeti"
    ],
    type: "big_five_game_drives",
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
    metaTitle: "سفاري تنزانيا لمدة 12 يوماً لكبار السن والذكرى السنوية والمجموعات",
    metaDescription: "سفاري خاصة بوتيرة هادئة في تنزانيا لمدة 12 يوماً، مصممة خصيصاً لكبار السن وأزواج الذكرى السنوية والمجموعات — غرب كليمنجارو وتارانجيري ونجورونجورو وسيرينغيتي. ابتداءً من 6,036 دولاراً للشخص الواحد.",
    overview: [
      "ليس على كل سفاري أن تكون سريعة الوتيرة لتستحق خوضها. تقوم هذه الرحلة الممتدة على مدى اثني عشر يوماً على فرضية مختلفة: توقفات أقل لليلة واحدة، ووقت أطول في كل مكان، ومسار اختير بقدر ما يناسب إيقاعه بقدر ما تناسب حياته البرية. تبدأ الرحلة في مرتفعات غرب كليمنجارو — نزهات طبيعية ولقاءات ثقافية حقيقية مع الماساي بوتيرة هادئة على الأقدام، قبل أن تبدأ جولات السفاري الفعلية بوقت طويل — ثم تنتقل عبر حديقة أروشا الوطنية وتارانجيري وفوهة نجورونجورو، وثلاث ليالٍ هادئة في سيرينغيتي، لتختتم برحلة طيران قصيرة عودة إلى أروشا بدلاً من رحلة برية طويلة أخيرة.",
      "إنها رحلة تناسب بالقدر نفسه ثلاثة أنواع من المسافرين نادراً ما تخاطبهم صفحات السفاري التقليدية بشكل مباشر: المسافرون من كبار السن الراغبون في تجربة تنزانيا الكاملة دون أيام تنقل طويلة متتالية؛ الأزواج الذين يحتفلون بذكرى سنوية ويريدون وقتاً حقيقياً معاً في أجواء جميلة وهادئة بدلاً من قائمة متسرعة من الحدائق؛ والمجموعات — الأصدقاء، أو العائلة الممتدة، أو رحلة تضم أجيالاً متعددة — الذين يستفيدون من رحلة مبنية على وتيرة مريحة تناسب الجميع، أياً كانت أعمارهم أو لياقتهم البدنية. متوفرة بفئتين — Wilderness Reserve وWilderness Sovereign — تتبعان المسار ذاته على مدى اثني عشر يوماً، مع تغيّر مستوى المخيمات والنُّزل فقط."
    ],
    highlights: [
      "فصل افتتاحي أكثر هدوءاً — ليلتان في مرتفعات غرب كليمنجارو، مع نزهات طبيعية بمرافقة مرشد ولقاءات ثقافية حقيقية مع الماساي قبل أن تتسارع وتيرة جولات السفاري",
      "إقامات متعددة لليلتين وثلاث ليالٍ، وليست سلسلة من التوقفات لليلة واحدة — وقت حقيقي للاستقرار في كل مكان بدلاً من إعادة حزم الأمتعة كل صباح",
      "جولة سفاري سيراً على الأقدام بمرافقة مرشد في حديقة أروشا الوطنية — واحدة من الحدائق القليلة في تنزانيا التي تتيح ذلك، بوتيرة سهلة وغير متسرعة",
      "يوم كامل داخل فوهة نجورونجورو، وهي فوهة بركانية مغلقة تمتد على نحو 260 كم² (100 ميل مربع) وتزخر بالحياة البرية، يُصار إليها بالمركبة دون أي نزول شاق",
      "ثلاث ليالٍ كاملة في سيرينغيتي، تمنح الرحلة مساحة للتنفس بدلاً من ضغط السهول في يوم واحد",
      "رحلة طيران عودة إلى أروشا بدلاً من رحلة برية أخيرة طويلة — أقل من ساعة جواً، مقابل رحلة عودة قد تتجاوز ست ساعات براً",
      "كل مستوى من مستويات الراحة ممثَّل، من الفسيح المدروس إلى الاستثنائي حقاً، دون تغيير يوم واحد من المسار نفسه"
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
      "جميع رسوم الحدائق والامتيازات ومناطق الحفظ",
      "المركبة والمرشد والوقود لكل يوم",
      "جميع الوجبات",
      "الإقامة كما هو مذكور",
      "رحلة الطيران من سيرونيرا إلى أروشا",
      "التنقلات من وإلى المطار"
    ],
    excluded: [
      "الرحلات الجوية الدولية",
      "رسوم التأشيرة",
      "تأمين السفر",
      "الإكراميات",
      "المصاريف الشخصية"
    ],
    notes: [
      "الأسعار الموضحة هي للشخص الواحد بمشاركة غرفة مزدوجة/توأم؛ تُطبَّق رسوم إضافية عند طلب غرفة فردية.",
      "ملاحظة حول سعر فئة سوفرين لخمسة أشخاص: يأتي أعلى قليلاً من سعر أربعة أشخاص، ويعكس ذلك تغيّراً في تهيئة الغرف عند هذا الحجم من المجموعة وليس خطأً في التسعير.",
      "تشمل هذه الرحلة تغطية إجلاء طارئ من AMREF Flying Doctors كخدمة أساسية؛ ومع ذلك يُنصح بشدة بالحصول على بوليصة تأمين سفر شخصية شاملة، خصوصاً لكبار السن من المسافرين.",
      "تخضع الإقامة والأسعار لمدى التوافر، وقد تختلف بحسب تاريخ السفر الدقيق ضمن الموسم.",
      "تحدد الحكومة رسوم الحدائق الوطنية ومناطق الحفظ في تنزانيا، وهي قابلة للتغيير دون إشعار مسبق."
    ],
    faq: [
      {
        q: "هل هذه السفاري مُجهِدة بدنياً؟",
        a: "لا تتطلب أكثر من وتيرة مشي هادئة. تتم جولات السفاري وأنتم جالسون، ويُصار إلى الفوهة بالكامل بالمركبة، أما نشاطا المشي (غرب كليمنجارو وحديقة أروشا الوطنية) فيُرافقهما مرشد بوتيرة سهلة وغير متسرعة تناسب معظم مستويات اللياقة البدنية. أخبروا مستشاركم بأي اعتبارات خاصة بالحركة عند الحجز، ويمكن تعديل الرحلة أكثر عند الحاجة."
      },
      {
        q: "هل هذا خيار مناسب للاحتفال بذكرى سنوية أو مناسبة خاصة؟",
        a: "بالتأكيد — فالوتيرة نفسها جزء مما يجعلها مناسبة للاحتفال: وقت حقيقي معاً في كل مكان، بدلاً من جدول يترككم مرهقين جداً للاستمتاع بالمساء. أخبروا مستشاركم إن كنتم تحتفلون بمناسبة معينة؛ يمكن ترتيب لمسات خاصة صغيرة."
      },
      {
        q: "كيف يسير السفر الجماعي في هذه الرحلة؟",
        a: "يناسب المسار والوتيرة المجموعات بشكل خاص، إذ لا يوجد يوم واحد مُجهِد بشكل خاص لأي فرد في المجموعة. كما تُقسَّم تكاليف المركبة والمرشد على أفراد المجموعة، لذا ينخفض السعر للشخص الواحد كلما زاد عدد المسافرين — راجعوا جدول الأسعار أعلاه."
      },
      {
        q: "ما الذي يشمله السعر، وما الذي لا يشمله؟",
        a: "يشمل السعر: جميع رسوم الحدائق والامتيازات ومناطق الحفظ، والمركبة والمرشد والوقود لكل يوم، وجميع الوجبات، والإقامة كما هو مذكور، ورحلة الطيران من سيرونيرا إلى أروشا، والتنقلات من وإلى المطار. ولا يشمل: الرحلات الجوية الدولية، ورسوم التأشيرة، وتأمين السفر، والإكراميات، والمصاريف الشخصية."
      },
      {
        q: "هل نحتاج إلى تأمين سفر يشمل تغطية الإجلاء الطبي؟",
        a: "نعم، نوصي به بشدة لأي رحلة سفاري، وتشمل هذه الرحلة تغطية إجلاء طارئ من AMREF Flying Doctors كخدمة أساسية — إلا أنه يستحق الأمر ترتيب بوليصة تأمين سفر شخصية شاملة تغطي الحالات الصحية القائمة مسبقاً بشكل منفصل، خصوصاً لكبار السن من المسافرين."
      },
      {
        q: "هل يمكن دمج هذه الرحلة مع امتداد شاطئي؟",
        a: "نعم — يمدد كثير من المسافرين هذه السفاري بعدة أيام من الراحة في زنجبار لاحقاً. اسألوا مستشاركم عن إضافة امتداد شاطئي إلى أي من الفئتين."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول إلى أروشا",
        description: "الهبوط في مطار كليمنجارو الدولي، وقضاء الليلة الأولى دون أي تسرع.",
        accommodation: "أروشا، تختلف حسب الفئة",
        meals: "العشاء",
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
        title: "نحو غرب كليمنجارو",
        description: "رحلة برية خلابة إلى المرتفعات الواقعة غرب كليمنجارو، وهي منطقة لا تزال بمنأى حقاً عن المسار السياحي المعتاد.",
        accommodation: "غرب كليمنجارو، تختلف حسب الفئة",
        meals: "إقامة كاملة (جميع الوجبات)",
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
        title: "يوم كامل في غرب كليمنجارو",
        description: "نزهة طبيعية بمرافقة مرشد عبر منطقة إدارة الحياة البرية، ولقاء ثقافي حقيقي مع الماساي — دون تسرع، سيراً على الأقدام، بوتيرة تناسب كل فرد في المجموعة.",
        accommodation: "غرب كليمنجارو، تختلف حسب الفئة",
        meals: "إقامة كاملة (جميع الوجبات)",
        insiderFact: "تقع مرتفعات غرب كليمنجارو حقاً خارج المسار الشمالي المعتاد — قلة من الشركات المنظمة تمر بهذه المنطقة أصلاً.",
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
        title: "التوجه إلى حديقة أروشا الوطنية",
        description: "رحلة برية قصيرة إلى حديقة صُمِّمت بالضبط لهذا النوع من الصباحات الهادئة — الزراف وقردة الكولوبس، وواحدة من جولات السفاري القليلة سيراً على الأقدام بمرافقة مرشد في تنزانيا، كل ذلك بوتيرة سهلة.",
        accommodation: "أروشا، تختلف حسب الفئة",
        meals: "إقامة كاملة (جميع الوجبات)",
        insiderFact: "حديقة أروشا الوطنية واحدة من الحدائق القليلة في تنزانيا التي يُسمح فيها بجولات السفاري سيراً على الأقدام بمرافقة مرشد على مدار العام.",
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
        title: "تارانجيري، يوم كامل",
        description: "يوم كامل بين قطعان الفيلة في تارانجيري وأشجار الباوباب المعمّرة منذ ألف عام.",
        accommodation: "تارانجيري، تختلف حسب الفئة",
        meals: "إقامة كاملة (جميع الوجبات)",
        insiderFact: "تحتضن تارانجيري واحدة من أعلى كثافات الفيلة في أفريقيا خارج موسم الأمطار، حين تتجمع القطعان على ضفاف النهر.",
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
        title: "مبتو وا مبو والتوجه إلى كاراتو",
        description: "توقف ثقافي في بلدة مبتو وا مبو السوقية في الطريق إلى مرتفعات نجورونجورو — تواصل حقيقي وغير متسرع مع المجتمع المحلي هنا، لا مجرد توقف عابر لالتقاط الصور.",
        accommodation: "كاراتو، تختلف حسب الفئة",
        meals: "إقامة كاملة (جميع الوجبات)",
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
        title: "جولة في فوهة نجورونجورو",
        description: "يوم كامل داخل النظام البيئي المغلق لقاع الفوهة، يُصار إليه بالكامل بالمركبة — دون الحاجة إلى أي مشي شاق لمشاهدة واحد من أكثف تجمعات الحياة البرية في أفريقيا.",
        accommodation: "كاراتو، تختلف حسب الفئة",
        meals: "إقامة كاملة (جميع الوجبات)",
        insiderFact: "فوهة نجورونجورو نظام بيئي مغلق يمتد على نحو 260 كم² (100 ميل مربع) — ومعظم الحيوانات المقيمة فيها لا تغادرها أبداً.",
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
        title: "من كاراتو إلى وسط سيرينغيتي",
        description: "الطريق إلى سهول سيرينغيتي التي لا نهاية لها، وأولى الليالي الثلاث في مكان واحد.",
        accommodation: "وسط سيرينغيتي، تختلف حسب الفئة",
        meals: "إقامة كاملة (جميع الوجبات)",
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
        title: "وسط سيرينغيتي، يوم كامل",
        description: "يوم كامل من جولات السفاري بوتيرة لا تبدو أبداً متسرعة — يقرأ مرشدكم إيقاع اليوم لصالح المجموعة بأكملها، ليضمن ألا يشعر أحد بالاستعجال أمام مشاهدة جيدة.",
        accommodation: "وسط سيرينغيتي، تختلف حسب الفئة",
        meals: "إقامة كاملة (جميع الوجبات)",
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
        title: "وسط سيرينغيتي، يوم كامل",
        description: "يوم كامل ثانٍ من جولات السفاري عبر وادي سيرونيرا.",
        accommodation: "وسط سيرينغيتي، تختلف حسب الفئة",
        meals: "إقامة كاملة (جميع الوجبات)",
        insiderFact: "تجذب مياه سيرونيرا الدائمة على مدار العام تجمعات القطط الكبيرة المقيمة، بما فيها أسود تسلق الأشجار الشهيرة في تلال الكوبيي الصخرية.",
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
        title: "من سيرينغيتي إلى أروشا",
        description: "رحلة طيران قصيرة من مهبط سيرونيرا عودة إلى أروشا — أقل من ساعة جواً، مقابل رحلة برية تتجاوز ست ساعات على المسار نفسه.",
        accommodation: "أروشا، تختلف حسب الفئة",
        meals: "إقامة كاملة (جميع الوجبات)",
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
        title: "المغادرة",
        description: "التوجه إلى مطار كليمنجارو الدولي، لتعودوا إلى دياركم حاملين معكم ذكرى اثني عشر يوماً هادئة.",
        accommodation: "لا ينطبق",
        meals: "الإفطار"
      }
    ]
  },
  {
    slug: "7-day-photography-adventure-safari",
    name: "سفاري تنزانيا للتصوير والمغامرة لمدة 7 أيام",
    duration: 7,
    destinations: [
      "tarangire",
      "ngorongoro",
      "serengeti"
    ],
    type: "photographic",
    bestMonths: ['Jan', 'Feb', 'Mar'],
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
    metaTitle: "سفاري تنزانيا للتصوير والمغامرة لمدة 7 أيام | تارانجيري ونجورونجورو وندوتو",
    metaDescription: "سفاري خاصة للتصوير والمغامرة بمرافقة مرشد عبر تارانجيري وفوهة نجورونجورو وأراضي ولادة النو في ندوتو. للمصورين والباحثين عن سفاري أصيلة، ابتداءً من 4,597 دولاراً للشخص الواحد.",
    overview: [
      "هناك فرق بين مشاهدة الحياة البرية وبين أن تكون في الموضع المناسب لالتقاطها — وهذا الفرق هو صميم فكرة هذه الرحلة. سبعة أيام عبر ثلاثة أنظمة بيئية، اختير كل منها ليس فقط لما يعيش فيه، بل لما يتيحه لكم بالكاميرا أو بحس فضول حقيقي: قطعان الفيلة في تارانجيري وهي تتحرك تحت أشجار الباوباب المعمّرة منذ ألف عام، ولقاء ثقافي مع الماساي وبلدة مبتو وا مبو السوقية، ونزول كامل إلى عالم فوهة نجورونجورو المغلق الذي يضم نحو 30,000 حيوان، وثلاثة أيام على سهول ندوتو قصيرة العشب خلال موسم الولادة، حين يُولد ما يصل إلى 8,000 عجل من النو في يوم واحد، وكل مفترس في النظام البيئي يعرف ذلك.",
      "صُمِّمت هذه الرحلة لنوعين متداخلين من المسافرين: المصور الذي يريد مرشداً يقرأ الضوء وسلوك الحيوانات بالدقة نفسها التي يقرأ بها التضاريس، والمسافر ذا الروح المغامرة الذي يفضل قضاء وقت حقيقي في أماكن أقل بدلاً من التسرع بين قائمة من الحدائق. متوفرة بفئتين — Wilderness Reserve وWilderness Sovereign — تتبعان المسار ذاته على مدى سبعة أيام، مع تغيّر مستوى المخيم فقط."
    ],
    highlights: [
      "موقوتة مع موسم الولادة — يُولد ما يصل إلى 8,000 عجل من النو يومياً على سهول ندوتو، مع نشاط مفترسات يواكب ذلك",
      "يوم كامل بصحبة قطعان الفيلة في تارانجيري، على خلفية أشجار باوباب صامدة منذ أكثر من ألف عام",
      "لقاء ثقافي مع الماساي وبلدة مبتو وا مبو السوقية — سياق إنساني حقيقي بين أيام الحياة البرية، لا توقف معدّ سلفاً",
      "فوهة نجورونجورو بكامل اتساعها — فوهة بركانية مغلقة تمتد على نحو 260 كم² (100 ميل مربع)، وتضم واحداً من أعلى تجمعات الحياة البرية على وجه الأرض، وأفضل فرصكم في المنطقة لمشاهدة وحيد القرن الأسود",
      "ثلاثة أيام كاملة على سهول ندوتو — وقت كافٍ لتتكشف مشهدية كاملة، لا مجرد لمحة عابرة",
      "مرشد يحافظ على موضعه، لا يكتفي بالعثور على الحياة البرية — تبقى المركبات مع السلوك المتكشف بدلاً من الانتقال إلى المشاهدة التالية",
      "كل مستوى من مستويات الراحة ممثَّل، من الراسخ المدروس إلى الاستثنائي حقاً، دون تغيير يوم واحد من المسار نفسه"
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
        reserve: 7742.50,
        sovereign: 10160.00
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
      "جميع رسوم الحدائق والامتيازات ومناطق الحفظ",
      "المركبة والمرشد والوقود لكل يوم ميداني",
      "جميع الوجبات",
      "الإقامة كما هو مذكور",
      "التنقلات من وإلى المطار"
    ],
    excluded: [
      "الرحلات الجوية الدولية",
      "رسوم التأشيرة",
      "تأمين السفر",
      "الإكراميات",
      "تأجير الكاميرا/العدسات"
    ],
    notes: [
      "الأسعار الموضحة هي للشخص الواحد بمشاركة غرفة مزدوجة/توأم؛ سعر المسافر المنفرد موضح أعلاه ومتاح أيضاً عند الطلب.",
      "مصممة خصيصاً لتناسب تواريخكم، مع الحفاظ على حجم مجموعة صغير عمداً كي يحظى الجميع بمساحة عمل مناسبة.",
      "تخضع الإقامة والأسعار لمدى التوافر، وقد تختلف بحسب تاريخ السفر الدقيق.",
      "تحدد الحكومة رسوم الحدائق الوطنية ومناطق الحفظ في تنزانيا، وهي قابلة للتغيير دون إشعار مسبق."
    ],
    faq: [
      {
        q: "هل هذه الرحلة مناسبة للمصورين غير المحترفين؟",
        a: "نعم — صُمِّمت هذه الرحلة لتناسب كل مستوى من المهارة، من مالك كاميرا DSLR لأول مرة إلى المصور المحترف العامل. يقدم المرشدون توجيهاً ميدانياً عملياً حول التموضع والتوقيت طوال الرحلة، دون أن يجعلوها تبدو أبداً كدرس بدلاً من سفاري."
      },
      {
        q: "ما الذي يميز هذه الرحلة عن سفاري جولات المشاهدة التقليدية؟",
        a: "الوتيرة والنية. تتجه السفاري التقليدية نحو المشاهدة التالية؛ أما هذه فتحافظ على موضعها وتترك المشهد يتكشف — أم من النو مع مولود لا يزال يتعلم الوقوف على قدميه، أو فهد يقرأ القطيع من فوق تل نمل أبيض. هذا الصبر جزء أصيل من تصميم الرحلة، لا مجرد أمر متروك للصدفة."
      },
      {
        q: "متى بالضبط يكون موسم الولادة؟",
        a: "تمتد الفترة الرئيسية تقريباً من أواخر يناير حتى مارس، وعادة ما تبلغ ذروة الولادة في فبراير — حين يتزامن أعلى تركيز من مواليد النو الجدد مع أقوى نشاط للمفترسات."
      },
      {
        q: "ما معدات التصوير التي ينبغي إحضارها؟",
        a: "يوصى بجسم كاميرا DSLR أو بدون مرآة، وعدسة واسعة إلى متوسطة المدى للمناظر الطبيعية، وعدسة تليفوتو لا تقل عن 400 مم — إذ تكافئ عدسات 500-600 مم الأهداف البعيدة، بينما تفيد عدسة 70-200 مم في المشاهدات القريبة. يُشارَك دليل كامل للتعبئة والمعدات مع الضيوف المؤكَّدين قبل المغادرة."
      },
      {
        q: "هل هذه رحلة خاصة، أم سنُجمَّع مع غرباء؟",
        a: "مصممة خصيصاً لتناسب تواريخكم، مع الحفاظ على حجم مجموعة صغير عمداً كي يحظى الجميع بمساحة عمل مناسبة — الحد الأقصى الدقيق وخيارات المغادرة الخاصة متاحة عند الطلب."
      },
      {
        q: "كم يتغير السعر بحسب حجم المجموعة؟",
        a: "تُقسَّم تكاليف المركبة والمرشد والوقود على أفراد المجموعة، لذا ينخفض السعر للشخص الواحد بشكل ملحوظ كلما زاد عدد المسافرين — راجعوا جدول الأسعار أعلاه."
      },
      {
        q: "ما الذي يشمله السعر، وما الذي لا يشمله؟",
        a: "يشمل السعر: جميع رسوم الحدائق والامتيازات ومناطق الحفظ، والمركبة والمرشد والوقود لكل يوم ميداني، وجميع الوجبات، والإقامة كما هو مذكور، والتنقلات من وإلى المطار. ولا يشمل: الرحلات الجوية الدولية، ورسوم التأشيرة، وتأمين السفر، والإكراميات، وتأجير الكاميرا/العدسات."
      },
      {
        q: "هل يمكن دمج هذه الرحلة مع وجهات أخرى؟",
        a: "نعم — تتكامل هذه الرحلة بشكل طبيعي مع امتداد شاطئي في زنجبار، أو يمكن دمجها مع سفاري في المسار الشمالي للمسافرين الراغبين في الجمع بين موسم الولادة ودراما عبور النهر في ذروة موسم الهجرة الكبرى، ضمن رحلة واحدة."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول إلى أروشا",
        description: "الهبوط في مطار كليمنجارو الدولي، وقضاء ليلة أولى هادئة — إحاطة كاملة عن الأسبوع المقبل، وكيف سيكون الضوء في كل محطة، وكيف سيُنظّم مرشدكم إيقاع الأيام بمجرد وصولكم إلى الميدان.",
        accommodation: "أروشا، تختلف حسب الفئة",
        meals: "العشاء",
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
        title: "نحو تارانجيري",
        description: "تنفتح الرحلة البرية جنوباً على سهول تارانجيري المرصعة بأشجار الباوباب، حيث تتجمع أكبر قطعان الفيلة في تنزانيا حول آخر مصدر مياه دائم على امتداد أميال، ويضيف نشاط ثقافي مع الماساي بعد الظهر سياقاً حقيقياً للمشهد الذي تصورونه.",
        accommodation: "تارانجيري، تختلف حسب الفئة",
        meals: "إقامة كاملة (جميع الوجبات)",
        insiderFact: "تحتضن تارانجيري واحدة من أعلى كثافات الفيلة في أفريقيا خارج موسم الأمطار، حين تتجمع القطعان على ضفاف النهر.",
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
        title: "من تارانجيري إلى نجورونجورو، عبر مبتو وا مبو",
        description: "نصف يوم أخير في تارانجيري قبل أن يتسلق الطريق نحو المرتفعات، مع توقف في مبتو وا مبو — بلدة سوقية تضعكم فيها نزهة ثقافية قصيرة في تواصل حقيقي مع المجتمع المقيم على أطراف هذه الحدائق.",
        accommodation: "منطقة نجورونجورو، تختلف حسب الفئة",
        meals: "إقامة كاملة (جميع الوجبات)",
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
        title: "من فوهة نجورونجورو إلى ندوتو",
        description: "صباح كامل في النزول إلى قاع الفوهة — حياة برية كثيفة، وجدران مهيبة، وفرصة حقيقية لرؤية أنواع لن تتوفر بالتركيز نفسه في السهول المقبلة، بما فيها وحيد القرن الأسود — قبل أن تتابع الرحلة نحو نظام ندوتو البيئي.",
        accommodation: "ندوتو، تختلف حسب الفئة",
        meals: "إقامة كاملة (جميع الوجبات)",
        insiderFact: "فوهة نجورونجورو نظام بيئي مغلق يمتد على نحو 260 كم² (100 ميل مربع)، وتضم بعضاً من أكثر مشاهدات وحيد القرن الأسود موثوقية في المنطقة.",
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
        title: "ندوتو، يوم كامل",
        description: "السهول هنا هي من تحدد المسار، لا نص جاهز. عشب قصير، وآفاق مفتوحة، وإن ساعد التوقيت — تلك الرقة الخاصة لعجول النو الوليدة وهي تتعلم الوقوف على أقدامها في دقائق من ولادتها. يحافظ مرشدكم على موضعه بدلاً من التحرك سريعاً، لأن القصة غالباً ما تحتاج وقتاً لتتكشف.",
        accommodation: "ندوتو، تختلف حسب الفئة",
        meals: "إقامة كاملة (جميع الوجبات)",
        insiderFact: "يُولد ما يصل إلى 8,000 عجل من النو عبر سهول ندوتو في يوم واحد في ذروة موسم الولادة.",
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
        title: "ندوتو، يوم كامل",
        description: "حيث تتركز الحياة الجديدة بهذا الشكل، تتبعها المفترسات. الفهود والأسود والضباع وابن آوى، جميعها تعمل على أطراف القطعان في وضح النهار هنا — يوم مصمم لسلوك حقيقي، لا لمشاهدات بعيدة.",
        accommodation: "ندوتو، تختلف حسب الفئة",
        meals: "إقامة كاملة (جميع الوجبات)",
        insiderFact: "يشهد موسم الولادة بعضاً من أقوى نشاط للفهود خلال العام على سهول ندوتو، إذ تصطاد في وضح النهار فوق الأرض المفتوحة.",
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
        title: "من جنوب سيرينغيتي إلى أروشا",
        description: "صباح أخير قبل الرحلة البرية عودة إلى أروشا ثم إلى المطار — والغبار ما زال على أحذيتكم، وبطاقة ذاكرة تحمل نوعاً مختلفاً تماماً من قصة السفاري.",
        accommodation: "لا ينطبق",
        meals: "الإفطار"
      }
    ]
  },
  {
    slug: "11-days-kenya-undisputed",
    name: "11 يوماً: كينيا بلا منازع",
    duration: 11,
    destinations: [
      "masai-mara"
    ],
    type: "big_five_game_drives",
    bestMonths: ['Jul', 'Aug', 'Sep', 'Oct'],
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
    metaDescription: "سفاري خاصة في كينيا لمدة 11 يومًا عبر ماساي مارا وفيلة أمبوسيلي تحت جبل كليمنجارو والحياة البرية النادرة في محمية سامبورو. تبدأ الأسعار من 5,800 دولار للشخص الواحد.",
    overview: [
      "أحد عشر يوماً، بلد واحد، والحجة القاطعة على أن كينيا هي أكثر وجهات السفاري اكتمالاً في أفريقيا.",
      "تربط هذه الرحلة بين خمسة من الأنظمة البيئية المميزة في كينيا: عائلات الفيلة العابرة للسهول تحت جبل كليمنجارو في أمبوسيلي، و\"الخمسة الخاصة لسامبورو\" — حمار وحشي غريفي، والزراف الشبكي، والغزال الرشيق (جيرينوك)، ومها بيسا، والنعامة الصومالية — وهي أنواع لا توجد في أي مكان آخر بالبلاد، ووحيد القرن الأسود وملاذ الشمبانزي الوحيد في شرق أفريقيا في أول بيجيتا، وأسراب فلامنغو قد يبلغ عددها مليوني طائر تصبغ بحيرة ناكورو باللون الوردي، ويومان كاملان في ماساي مارا، المصنفة إحدى عجائب أفريقيا الطبيعية السبع. تفتتح نيروبي وتختتم الرحلة بمتحف كارين بليكسن، ومركز الزراف، وملجأ شيلدريك للفيلة. يحظى كل توقف بوقت حقيقي بدلاً من مرور عابر، وهذا بالضبط ما يجعل الأيام الأحد عشر تبدو رحلة لا جدال فيها بدلاً من رحلة متسرعة."
    ],
    highlights: [
      "ماساي مارا — المصنفة إحدى عجائب أفريقيا الطبيعية السبع",
      "أمبوسيلي — قطعان الفيلة على خلفية جبل كليمنجارو",
      "محمية سامبورو — أنواع شمالية نادرة لا توجد في أي مكان آخر",
      "محمية أول بيجيتا — الشمبانزي ووحيد القرن الأسود",
      "متحف كارين بليكسن ومركز الزراف في نيروبي"
    ],
    heroImage: "/images/gallery/maned-lion-resting-savanna-grass.webp",
    heroImageAlt: "Maned lion resting alone in tall golden savanna grass",
    gallery: [],
    included: [
      "جميع رسوم الحدائق والمحميات",
      "جميع جولات السفاري",
      "مرشد محترف",
      "جميع الوجبات",
      "الإقامة",
      "التنقلات من وإلى المطار"
    ],
    excluded: [
      "الرحلات الجوية الدولية",
      "رسوم التأشيرة",
      "تأمين السفر",
      "الإكراميات",
      "الأنشطة الاختيارية"
    ],
    notes: [
      "الأسعار الموضحة هي للشخص الواحد بمشاركة غرفة مزدوجة/توأم؛ تُطبَّق رسوم إضافية عند طلب غرفة فردية.",
      "ركوب الخيل وزيارات قرية سامبورو الثقافية (مانياتا) المذكورة في الرحلة هي إضافات اختيارية بتكلفة إضافية، وتخضع لمدى التوافر.",
      "تخضع الإقامة والأسعار لمدى التوافر، وقد تختلف بحسب تاريخ السفر الدقيق ضمن الموسم.",
      "تحدد الحكومة رسوم الحدائق الوطنية والمحميات في كينيا، وهي قابلة للتغيير دون إشعار مسبق."
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول إلى نيروبي",
        description: "الوصول إلى مطار جومو كينياتا الدولي والتوجه إلى فندقكم في نيروبي. استمتعوا بمرافق المسبح والسبا واسترحياً استعداداً للمغامرة.",
        accommodation: "فندق فاخر في نيروبي",
        meals: "العشاء",
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
        title: "نيروبي — أبرز معالم المدينة",
        description: "زيارة صباحية لمتحف كارين بليكسن، المزرعة الاستعمارية التي ألهمت رواية \"خارج أفريقيا\"، على خلفية تلال نجونج. ثم إلى مركز الزراف، حيث يمكنكم إطعام زراف روتشيلد المهدد بالانقراض بأيديكم على مستوى العين من المنصة المرتفعة. بعد الظهر في ملجأ صندوق دافني شيلدريك للحياة البرية لحضور جلسة إطعام حمام الطين اليومية للفيلة.",
        accommodation: "فندق فاخر في نيروبي",
        meals: "جميع الوجبات",
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
        title: "حديقة أمبوسيلي الوطنية",
        description: "التوجه إلى أمبوسيلي، أكثر حدائق كينيا شهرة، حيث تجوب قطعان فيلة ضخمة على خلفية قمة كليمنجارو المكسوة بالثلوج. يظهر الجبل في الصباحات الصافية بتفاصيل استثنائية — إذ تنعكس أنهاره الجليدية فوق غبار السافانا أدناه. تضم أمبوسيلي أكثر من 600 نوع من الطيور وتجمعات موثوقة من الأسود والفهود.",
        accommodation: "مخيم سفاري أمبوسيلي",
        meals: "جميع الوجبات",
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
        title: "أمبوسيلي — يوم كامل",
        description: "يوم كامل في أمبوسيلي مع جولات سفاري صباحية ومسائية. تجعل مروج الحديقة المفتوحة ومستنقعاتها مشاهدة الحيوانات سهلة ومجزية للغاية. تتحرك عائلات الفيلة الكبيرة في مواكب بطيئة، حيث ترعى الأمهات صغارها عبر بساتين شجر السنط.",
        accommodation: "مخيم سفاري أمبوسيلي",
        meals: "جميع الوجبات",
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
        title: "محمية سامبورو الوطنية",
        description: "التوجه شمالاً إلى سامبورو — محمية وعرة شبه قاحلة على ضفاف نهر إواسو نجيرو. تشتهر سامبورو بـ\"الخمسة الخاصة لسامبورو\": حمار وحشي غريفي، والزراف الشبكي، والنعامة الصومالية، والغزال الرشيق (جيرينوك، ذو العنق الطويل)، ومها بيسا — جميعها أنواع شمالية لا توجد في أي مكان آخر بكينيا. ركوب الخيل على ضفاف النهر متاح كنشاط اختياري.",
        accommodation: "مخيم سفاري سامبورو",
        meals: "جميع الوجبات",
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
        title: "سامبورو — النهر والمفترسات",
        description: "جولة سفاري صباحية على ضفاف نهر إواسو نجيرو حيث ألفت الفهود الوجود البشري إلى حد لافت وتُشاهد غالباً عن قرب بين أشجار الغابة النهرية. تصطف التماسيح على الضفاف الرملية. تصطاد زمرة الأسود المقيمة عند الفجر. بعد الظهر وقت حر أو زيارة ثقافية اختيارية إلى قرية سامبورو (مانياتا).",
        accommodation: "مخيم سفاري سامبورو",
        meals: "جميع الوجبات",
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
        title: "محمية أول بيجيتا — سويت ووترز",
        description: "التوجه إلى محمية أول بيجيتا، موطن أكبر تجمع لوحيد القرن الأسود في شرق أفريقيا، وآخر اثنين من وحيد القرن الأبيض الشمالي على وجه الأرض. تضم المحمية أيضاً ملاذ الشمبانزي الوحيد في شرق أفريقيا، حيث تعيش الشمبانزي المنقذة في محمية حرجية واسعة مفتوحة للزيارات المصحوبة بمرشد. جولة سفاري عند الغروب عبر السهول المفتوحة.",
        accommodation: "نُزل أول بيجيتا",
        meals: "جميع الوجبات",
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
        title: "حديقة بحيرة ناكورو الوطنية",
        description: "التوجه إلى بحيرة ناكورو، الشهيرة بأسراب الفلامنغو الضخمة التي قد يبلغ عددها مليوني طائر، فتصبغ البحيرة القلوية الضحلة باللون الوردي بالكامل. الحديقة أيضاً ملاذ لوحيد القرن — الأسود والأبيض معاً — وتضم تجمعات صحية من الأسود والفهود وزراف روتشيلد.",
        accommodation: "نُزل بحيرة ناكورو",
        meals: "جميع الوجبات",
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
        title: "محمية ماساي مارا الوطنية",
        description: "التوجه جنوباً إلى ماساي مارا — أشهر محمية للحياة البرية في كينيا وواحدة من أعظم وجهات الحياة البرية على وجه الأرض. صُنِّفت مراراً ضمن عجائب أفريقيا الطبيعية السبع، وتضم مارا تجمعات دائمة من الأسود والفهود والنمور والفيلة والجاموس وفرس النهر على مدار العام، إضافة إلى استضافتها الهجرة الكبرى من يوليو إلى أكتوبر.",
        accommodation: "مخيم مارا ماساي المخيَّم",
        meals: "جميع الوجبات",
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
        title: "ماساي مارا — يوم كامل",
        description: "يوم كامل في ماساي مارا مع جولات سفاري صباحية ومسائية. ركوب الخيل عبر السافانا المفتوحة بمحاذاة الحمير الوحشية والزراف متاح كإضافة اختيارية لتجربة غامرة كاملة. تُعد مشاهدات القطط الكبيرة هنا من الأكثر موثوقية في أي مكان بأفريقيا.",
        accommodation: "مخيم مارا ماساي المخيَّم",
        meals: "جميع الوجبات",
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
        title: "المغادرة — نيروبي",
        description: "جولة سفاري صباحية في مارا، ثم التوجه براً أو جواً إلى نيروبي للحاق برحلتكم الدولية عودة إلى دياركم. أحد عشر يوماً من أجمل ما تقدمه كينيا.",
        accommodation: "لا ينطبق",
        meals: "الإفطار"
      }
    ]
  },
  {
    slug: "10-days-southern-secrets",
    name: "10 أيام: أسرار جنوب تنزانيا",
    duration: 10,
    destinations: [
      "nyerere",
      "ruaha"
    ],
    type: "big_five_game_drives",
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
    metaDescription: "رحلة خاصة مدتها 10 أيام إلى جنوب تنزانيا البري — جولات القوارب على نهر روفيجي في حديقة نييريري الوطنية وكثافة القطط الكبيرة في رواها. تبدأ الأسعار من 5,200 دولار للشخص الواحد.",
    overview: [
      "لا يروّج جنوب تنزانيا لنفسه، وهذا بالضبط هو المغزى — صُمِّمت هذه الرحلة العشرية لمن يريدون حياة سيرينغيتي البرية دون أي مركبة أخرى في الأفق.",
      "تفتتح الرحلة في حديقة نيريري الوطنية — التي تمتد على 50,000 كم²، مساحة أكبر من سويسرا — مع جولات سفاري عبر غاباتها النهرية وأحراش الميومبو، وجولة سفاري بالقارب على نهر روفيجي، على مستوى العين مع أفراس النهر والفيلة عند حافة الماء. من هناك تتجه الرحلة جنوباً عبر ميكومي وسيراً حتى شلال سانجي في جبال أودزونجوا للسباحة أسفله، قبل يومين كاملين في رواها، أكبر حديقة وطنية في تنزانيا وموطن أكبر تجمع فيها من الأسود والفهود والفهود الصياد وكلاب الصيد البرية. يشهد جنوب تنزانيا جزءاً يسيراً من حركة الزوار في المسار الشمالي، وصُمِّمت هذه الرحلة للاستفادة القصوى من ذلك — أيام طويلة وغير متسرعة في برية حقيقية، لا طوابير عند البوابة."
    ],
    highlights: [
      "حديقة نيريري الوطنية — أكبر من سويسرا",
      "جولات سفاري بالقارب على نهر روفيجي",
      "رواها — أكبر حديقة في تنزانيا وموطن أكبر تجمع من القطط الكبيرة",
      "جبال أودزونجوا وسباحة عند شلالات سانجي",
      "دون أي ازدحام — تجربة برية أصيلة"
    ],
    heroImage: "/images/gallery/serengeti-plains-sunset-panorama.jpg",
    heroImageAlt: "Panoramic sunset over the Serengeti plains with silhouetted acacia trees and distant hills",
    gallery: [],
    included: [
      "جميع رسوم دخول الحدائق",
      "جميع جولات السفاري بالمركبة والقارب",
      "مرشد محترف",
      "جميع الوجبات",
      "الإقامة",
      "التنقلات من وإلى المطار"
    ],
    excluded: [
      "الرحلات الجوية الدولية",
      "رسوم التأشيرة",
      "تأمين السفر",
      "الإكراميات"
    ],
    notes: [
      "الأسعار الموضحة هي للشخص الواحد بمشاركة غرفة مزدوجة/توأم؛ تُطبَّق رسوم إضافية عند طلب غرفة فردية.",
      "جولة القارب عند الغروب في اليوم الأول اختيارية، ويُحدَّد نقل العودة في اليوم العاشر (براً أو بطائرة خفيفة) عند الحجز.",
      "تخضع الإقامة والأسعار لمدى التوافر، وقد تختلف بحسب تاريخ السفر الدقيق ضمن الموسم.",
      "تحدد الحكومة رسوم الحدائق الوطنية ومناطق الحفظ في تنزانيا، وهي قابلة للتغيير دون إشعار مسبق."
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول إلى حديقة نيريري الوطنية",
        description: "الوصول إلى مطار جوليوس نيريري الدولي في دار السلام والتوجه مباشرة إلى نُزلكم على ضفاف نهر روفيجي داخل حديقة نيريري الوطنية. جولة اختيارية بالقارب عند الغروب تعرّفكم على أفراس النهر والتماسيح في أمسيتكم الأولى.",
        accommodation: "مخيم نهر روفيجي",
        meals: "العشاء",
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
        title: "حديقة نيريري الوطنية — جولات السفاري",
        description: "يوم كامل من جولات السفاري في نيريري — أكبر حديقة وطنية في تنزانيا، وتمتد على 50,000 كم² من الغابات النهرية والمروج المفتوحة وأحراش الميومبو. تُشاهَد بثقة زمر الأسود وقطعان الفيلة والجاموس وظباء الكودو والزراف عبر تضاريسها المتنوعة.",
        accommodation: "مخيم نهر روفيجي",
        meals: "جميع الوجبات",
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
        title: "نيريري — سفاري بالقارب على نهر روفيجي",
        description: "سفاري صباحية بالقارب على نهر روفيجي — أحد أعظم الممرات المائية في شرق أفريقيا. تصطف على ضفافه برك أفراس النهر وشواطئ التماسيح ومستعمرات كثيفة من الطيور المائية. تخوض قطعان الفيلة عبوره عند المعابر الضحلة. إنها أرض السفاري سيراً وبالقارب في أبهى صورها، دون أي قيود تفرضها المركبات على ما يمكن للمرشدين أن يصحبوكم إليه.",
        accommodation: "مخيم نهر روفيجي",
        meals: "جميع الوجبات",
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
        title: "جولة قصيرة في نيريري — التوجه إلى ميكومي",
        description: "جولة سفاري صباحية أخيرة في نيريري قبل التوجه شمالاً إلى حديقة ميكومي الوطنية. تمر الرحلة عبر ريف نائٍ في جنوب تنزانيا نادراً ما يراه الزوار.",
        accommodation: "نُزل ميكومي للحياة البرية",
        meals: "جميع الوجبات",
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
        title: "حديقة ميكومي الوطنية",
        description: "جولات سفاري عبر سهل مكاتا الفيضي — أكثر مواطن الحياة البرية إنتاجية في ميكومي. تقطن الحديقة الفيلة والإيلاند والأسود والفهود والفهود الصياد وكلاب الصيد البرية. غالباً ما تُلقَّب ميكومي بـ\"سيرينغيتي الجنوب\" لمروجها المفتوحة وسهولة مشاهدة القطط الكبيرة فيها.",
        accommodation: "نُزل ميكومي للحياة البرية",
        meals: "جميع الوجبات",
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
        title: "حديقة جبال أودزونجوا الوطنية",
        description: "التوجه إلى جبال أودزونجوا — واحدة من أكثر حدائق تنزانيا تنوعاً بيولوجياً وأولوية عالمية للحفظ. مسير عبر الغابات الجبلية وصولاً إلى شلال سانجي، حيث يمكنكم السباحة في البرك الطبيعية أسفل الشلال. تأوي الغابة نوعين متوطنين من الرئيسيات وأكثر من 400 نوع من الطيور، من بينها العديد من الأنواع المتوطنة في صدع ألبرتين.",
        accommodation: "مخيم غابة أودزونجوا",
        meals: "جميع الوجبات",
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
        title: "التوجه إلى حديقة رواها الوطنية",
        description: "التوجه غرباً إلى حديقة رواها الوطنية — رحلة طويلة لكنها خلابة عبر المرتفعات الجنوبية. رواها أكبر حديقة وطنية في تنزانيا، وواحدة من أكثر الوجهات إثارة في القارة لعشاق الحياة البرية الجادين.",
        accommodation: "نُزل نهر رواها",
        meals: "جميع الوجبات",
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
        title: "حديقة رواها الوطنية — يوم كامل",
        description: "تأوي رواها أكبر تجمعات تنزانيا من الأسود والفهود والفهود الصياد وكلاب الصيد البرية — إذ تتميز الحديقة بكثافة استثنائية من المفترسات. تُعد قطعان الفيلة بالآلاف. يشكل نهر رواها العظيم شريان الحياة في الحديقة، إذ يجذب الحيوانات من أنحاء المنطقة في موسم الجفاف. لا ازدحام، لا ضجيج — فقط البرية في أنقى صورها.",
        accommodation: "نُزل نهر رواها",
        meals: "جميع الوجبات",
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
        title: "رواها — جولات صباحية ومسائية",
        description: "يوم كامل آخر في رواها. تستهدف الجولات الصباحية مناطق النهر حيث تنشط المفترسات أكثر عند الفجر. تتوغل جولات ما بعد الظهر في الداخل النائي حيث تأوي مناطق نادراً ما تُزار ظباء السيبل وظباء الكودو الكبرى والمها إلى جانب الأنواع الأكثر شيوعاً.",
        accommodation: "نُزل نهر رواها",
        meals: "جميع الوجبات",
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
        title: "المغادرة — دار السلام",
        description: "جولة سفاري صباحية في رواها، ثم التوجه براً أو بطائرة خفيفة إلى دار السلام للحاق برحلتكم الدولية عودة إلى دياركم.",
        accommodation: "لا ينطبق",
        meals: "الإفطار"
      }
    ]
  },
  {
    slug: "11-days-southern-spice",
    name: "11 يوماً: الحياة البرية الجنوبية وجزر التوابل",
    duration: 11,
    destinations: [
      "nyerere",
      "ruaha",
      "zanzibar"
    ],
    type: "big_five_game_drives",
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
    metaDescription: "أحد عشر يومًا تجمع بين الدائرة الجنوبية البرية في تنزانيا — نهر روفيجي في نييريري وحياة رواها البرية — وثلاث ليالٍ في ستون تاون وشواطئ زنجبار. تبدأ الأسعار من 6,100 دولار للشخص الواحد.",
    overview: [
      "هذه إجابة المسار الجنوبي على المعادلة التنزانية الكلاسيكية: سفاري ثم شاطئ — استبدلوا الشمال المزدحم بنيريري ورواها، ثم اختتموا الرحلة على رمال زنجبار البيضاء.",
      "تفتتح الأيام الأولى في أعماق الجنوب بجولات سفاري وجولات بالقارب على نهر روفيجي في حديقة نيريري الوطنية، حيث تتحرك زمر الأسود عبر أحراش الميومبو التي تعادل مساحتها بلداً صغيراً، قبل الانتقال بطائرة خفيفة إلى رواها — أكثر حدائق تنزانيا برية وأقلها زيارة، بكثافة مفترسات تضاهي أي مكان في القارة. من هناك رحلة طيران قصيرة إلى زنجبار لثلاثة أيام في منتجع شاطئي فاخر من فئة الخمس نجوم، مع أبواب ستون تاون المنحوتة، وسلاحف جزيرة السجن العملاقة، والدلافين البرية قبالة كيزيمكازي، وجولة في مزرعة توابل تتخلل وقت الشاطئ. دون أي عبور حدودي بري، ودون مسارات مشاهدة حياة برية مشتركة — فقط برية جنوبية أصيلة تليها راحة حقيقية."
    ],
    highlights: [
      "حديقة نيريري الوطنية وجولات سفاري بالقارب على نهر روفيجي",
      "رواها — أكثر حدائق تنزانيا برية وأقلها زيارة",
      "ثلاثة أيام في زنجبار — منتجعات شاطئية من فئة الخمس نجوم",
      "ستون تاون وجزيرة السجن ومزارع التوابل",
      "حياة برية في المسار الجنوبي دون أي من ازدحام الشمال"
    ],
    heroImage: "/images/gallery/elephant-acacia-southern.webp",
    heroImageAlt: "Solitary elephant standing beneath a large acacia tree on the southern plains",
    gallery: [],
    included: [
      "جميع رسوم الحدائق",
      "جميع جولات السفاري بالمركبة والقارب",
      "فندق في زنجبار (على الشاطئ)",
      "جميع الوجبات خلال السفاري",
      "الإفطار في زنجبار",
      "الرحلات الجوية الداخلية وبين الجزر",
      "التنقلات من وإلى المطار"
    ],
    excluded: [
      "الرحلات الجوية الدولية",
      "رسوم التأشيرة",
      "تأمين السفر",
      "الإكراميات",
      "الغداء والعشاء في زنجبار"
    ],
    notes: [
      "الأسعار الموضحة هي للشخص الواحد بمشاركة غرفة مزدوجة/توأم؛ تُطبَّق رسوم إضافية عند طلب غرفة فردية.",
      "الإقامة في زنجبار تشمل الإفطار فقط؛ الغداء والعشاء هناك على نفقتكم الخاصة.",
      "تخضع الإقامة والأسعار لمدى التوافر، وقد تختلف بحسب تاريخ السفر الدقيق ضمن الموسم.",
      "تحدد الحكومة رسوم الحدائق الوطنية ومناطق الحفظ في تنزانيا، وهي قابلة للتغيير دون إشعار مسبق."
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول إلى حديقة نيريري الوطنية",
        description: "الوصول إلى مطار جوليوس نيريري الدولي في دار السلام والتوجه إلى نُزلكم داخل حديقة نيريري الوطنية على ضفاف نهر روفيجي. جولة اختيارية بالقارب عند الغروب تعرّفكم على أفراس النهر والتماسيح في أمسيتكم الأولى.",
        accommodation: "مخيم نهر روفيجي",
        meals: "العشاء",
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
        title: "نيريري — أرض الأسود",
        description: "يوم كامل من جولات السفاري في حديقة نيريري الوطنية. تتحرك زمر أسود كبيرة عبر أحراش الميومبو والمروج المفتوحة، وتتشارك المشهد مع قطعان الفيلة والجاموس والزراف. يمنح اتساع الحديقة — الأكبر من سويسرا — اللقاءات إحساساً برياً حقيقياً وغير متسرع.",
        accommodation: "مخيم نهر روفيجي",
        meals: "جميع الوجبات",
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
        title: "نيريري — مشروبات الغروب على نهر روفيجي",
        description: "جولة سفاري صباحية تركز على مناطق الأحراش حيث تصطاد الفهود وكلاب الصيد البرية. سفاري بالقارب بعد الظهر على نهر روفيجي — منظور فريد للحياة البرية الأفريقية نادراً ما يختبره الزوار. مشروبات الغروب عند الماء بينما تطفو أفراس النهر حول القارب.",
        accommodation: "مخيم نهر روفيجي",
        meals: "جميع الوجبات",
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
        title: "الطيران إلى حديقة رواها الوطنية",
        description: "استقلوا طائرتكم الخفيفة وطيروا غرباً فوق سهول جنوب تنزانيا نحو حديقة رواها الوطنية. تكشف الرؤية من الأعلى عن اتساع أحراش الميومبو الممتدة حتى الأفق. جولة سفاري بعد الظهر عند نهر رواها العظيم تحدد نغمة ما سيليها.",
        accommodation: "نُزل نهر رواها",
        meals: "الغداء والعشاء",
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
        title: "رواها — القطط الكبيرة والفيلة الضخمة",
        description: "يوم كامل في رواها — أكبر حديقة وطنية في تنزانيا وواحد من أعظم أسرار أفريقيا. كثافة المفترسات هنا استثنائية: الأسود والفهود والفهود الصياد وكلاب الصيد البرية تقطن جميعها المشهد ذاته. تُعد قطعان الفيلة بالآلاف. لا قوافل حافلات سياحية، لا ازدحام — فقط أنتم ومرشدكم والبرية.",
        accommodation: "نُزل نهر رواها",
        meals: "جميع الوجبات",
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
        title: "رواها — جولات في الداخل النائي",
        description: "توغلوا في المناطق الأكثر نأياً من رواها. تقطن ظباء السيبل وظباء الكودو الكبرى غابة الميومبو الجافة. يجذب نهر رواها العظيم الحيوانات من أنحاء المنطقة، وتشكل تفاعلات المفترس والفريسة عند حافة الماء مشهداً يومياً.",
        accommodation: "نُزل نهر رواها",
        meals: "جميع الوجبات",
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
        title: "الطيران إلى زنجبار",
        description: "جولة سفاري صباحية في رواها، ثم الطيران إلى زنجبار. الهبوط في هذه الجزيرة الأسطورية للتوابل والتوجه إلى منتجعكم الشاطئي الفاخر من فئة الخمس نجوم. اقضوا بعد الظهر على الرمال البيضاء وأنتم تعتادون على الجنة.",
        accommodation: "منتجع زنجبار الشاطئي الفاخر",
        meals: "الإفطار",
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
        title: "زنجبار — ستون تاون وجزيرة السجن",
        description: "جولة صباحية بمرافقة مرشد في ستون تاون — المدرجة في قائمة اليونسكو للتراث العالمي والزاخرة بالأبواب الخشبية المنحوتة والأقواس العربية والحياة الثقافية السواحيلية. رحلة بالقارب إلى جزيرة السجن، حيث تتجول سلاحف ألدابرا العملاقة التي يتجاوز عمرها 100 عام بحرية بين الحدائق. رحلة بحرية بمركب الداو عند الغروب بعد الظهر.",
        accommodation: "منتجع زنجبار الشاطئي الفاخر",
        meals: "الإفطار",
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
        title: "زنجبار — الدلافين ومزرعة التوابل",
        description: "رحلة بالقارب في الصباح الباكر إلى كيزيمكازي للسباحة مع الدلافين الدوارة البرية في عرض المحيط المفتوح. جولة بعد الظهر في مزرعة توابل عبر مزارع القرنفل والقرفة والفانيليا والفلفل الأسود والإيلانج-إيلانج. كوكتيلات مسائية في المنتجع بينما تغرب الشمس في المحيط الهندي.",
        accommodation: "منتجع زنجبار الشاطئي الفاخر",
        meals: "الإفطار",
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
        title: "زنجبار — يوم على الشاطئ",
        description: "يوم حر تماماً على شواطئ زنجبار الأسطورية. تشكل المياه الفيروزية والرمال المرجانية البيضاء وأشجار النخيل المتمايلة تبايناً مثالياً مع كثافة حدائق السفاري الجنوبية. الغطس بالأنبوب أو الإبحار أو التجديف متاحة كأنشطة اختيارية.",
        accommodation: "منتجع زنجبار الشاطئي الفاخر",
        meals: "الإفطار",
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
        title: "المغادرة",
        description: "صباح على الشاطئ، ثم التوجه إلى مطار زنجبار للحاق برحلتكم الدولية عودة إلى دياركم.",
        accommodation: "لا ينطبق",
        meals: "الإفطار"
      }
    ]
  },
  {
    slug: "12-days-tanzania-kenya",
    name: "12 يوماً: رحلة استكشافية بين تنزانيا وكينيا",
    duration: 12,
    destinations: [
      "serengeti",
      "ngorongoro",
      "manyara",
      "masai-mara"
    ],
    type: "big_five_game_drives",
    bestMonths: ['Jul', 'Aug', 'Sep', 'Oct'],
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
    metaDescription: "رحلة استكشافية مدتها 12 يومًا بين تنزانيا وكينيا عبر ماساي مارا وسيرينغيتي، وأمبوسيلي بخلفية جبل كليمنجارو، وطيور الفلامينغو ووحيد القرن في بحيرة ناكورو. تبدأ الأسعار من 7,200 دولار للشخص الواحد.",
    overview: [
      "اثنا عشر يوماً كافية للتوقف عن الاختيار بين كينيا وتنزانيا نهائياً — تأخذكم هذه الرحلة الاستكشافية إلى البلدين معاً، عابرة الحدود بطائرة خفيفة بدلاً من التنازل.",
      "يشمل الجزء الكيني قطعان الفيلة في أمبوسيلي تحت جبل كليمنجارو، وشواطئ بحيرة ناكورو الوردية بالفلامنغو وملاذ وحيد القرن، ويومين في ماساي مارا، إحدى عجائب أفريقيا الطبيعية السبع. تحطكم رحلة طيران عبر الحدود في سيرينغيتي لمزيد من الأيام الكاملة بين تجمعات الأسود والفهود الصياد فيها، قبل أن يمنحكم قاع فوهة نجورونجورو الخمسة الكبار في نزول واحد، وتختتم بحيرة مانيارا الرحلة بأسود تسلق الأشجار التي وصفها همنغواي بأنها دليل على \"أجمل مكان في أفريقيا\". بلدان، وأربعة أنظمة بيئية، ورحلة استكشافية متواصلة للحياة البرية — مع رحلة طيران خلابة تحل محل عبور الحدود البري المعتاد."
    ],
    highlights: [
      "ماساي مارا وسيرينغيتي — أعظم حديقتين للحياة البرية في أفريقيا",
      "أمبوسيلي — الفيلة تحت جبل كليمنجارو",
      "فلامنغو ووحيد القرن الأسود في بحيرة ناكورو",
      "بحيرة مانيارا — \"أجمل مكان في أفريقيا\" بوصف همنغواي",
      "رحلة استكشافية للحياة البرية عبر بلدين"
    ],
    heroImage: "/images/gallery/africa-lion.jpg",
    heroImageAlt: "Black-and-white portrait of a maned lion walking through tall savanna grass",
    gallery: [],
    included: [
      "جميع رسوم الحدائق",
      "جميع جولات السفاري",
      "مرشد محترف",
      "جميع الوجبات",
      "الإقامة",
      "التنقلات عبر الحدود",
      "التنقلات من وإلى المطار"
    ],
    excluded: [
      "الرحلات الجوية الدولية",
      "رسوم تأشيرة كينيا وتنزانيا",
      "تأمين السفر",
      "الإكراميات"
    ],
    notes: [
      "الأسعار الموضحة هي للشخص الواحد بمشاركة غرفة مزدوجة/توأم؛ تُطبَّق رسوم إضافية عند طلب غرفة فردية.",
      "يتم عبور الحدود بين كينيا وتنزانيا في هذه الرحلة بطائرة خفيفة بدلاً من الطريق البري.",
      "تخضع الإقامة والأسعار لمدى التوافر، وقد تختلف بحسب تاريخ السفر الدقيق ضمن الموسم.",
      "تحدد حكومتا تنزانيا وكينيا رسوم الحدائق كل في بلدها، وهي قابلة للتغيير دون إشعار مسبق."
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول إلى نيروبي",
        description: "الوصول إلى مطار جومو كينياتا الدولي والتوجه إلى فندقكم في نيروبي. استرخوا واستعدوا لاثني عشر يوماً عبر اثنتين من أعظم وجهات الحياة البرية في أفريقيا.",
        accommodation: "فندق في نيروبي",
        meals: "العشاء",
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
        title: "نيروبي — جولة في المدينة",
        description: "زيارة متحف كارين بليكسن، المُقام على المزرعة التي ألهمت رواية \"خارج أفريقيا\". ثم إلى مركز الزراف حيث تأكل زراف روتشيلد الحبيبات من راحة يدكم على مستوى العين من منصة المشاهدة المرتفعة. بعد الظهر في ملجأ دافني شيلدريك للفيلة لحضور جلسة إطعام حمام الطين.",
        accommodation: "فندق في نيروبي",
        meals: "جميع الوجبات",
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
        title: "حديقة أمبوسيلي الوطنية",
        description: "التوجه إلى أمبوسيلي تحت قمة كليمنجارو المكسوة بالجليد. يهيمن أعلى جبل في أفريقيا على المشهد في الصباحات الصافية، فيوفر خلفية أيقونية لأكبر قطعان الفيلة في كينيا. سُجِّل أكثر من 600 نوع من الطيور في هذه الحديقة المدمجة.",
        accommodation: "مخيم سفاري أمبوسيلي",
        meals: "جميع الوجبات",
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
        title: "أمبوسيلي — يوم كامل",
        description: "يوم كامل لاستكشاف مستنقعات أمبوسيلي وأحراشها ومروجها المفتوحة. تتحرك مجموعات عائلية كبيرة من الفيلة عبر القصب وبساتين السنط، وتصطاد زمر الأسود على أطراف السهل الفيضي، وتطارد الفهود الصياد الغزلان عبر الأرض المفتوحة.",
        accommodation: "مخيم سفاري أمبوسيلي",
        meals: "جميع الوجبات",
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
        title: "حديقة بحيرة ناكورو الوطنية",
        description: "التوجه إلى بحيرة ناكورو، حيث تحتضن البحيرة القلوية واحدة من أكبر تجمعات الفلامنغو في العالم. تتحول الكتلة الوردية الشهيرة على سطح الماء وتتماوج مع حركة الطيور. الحديقة أيضاً ملاذ لوحيد القرن — الأسود والأبيض معاً — وهي من أفضل الأماكن في كينيا لمشاهدته.",
        accommodation: "نُزل بحيرة ناكورو",
        meals: "جميع الوجبات",
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
        title: "ماساي مارا — الوصول",
        description: "التوجه جنوباً إلى محمية ماساي مارا الوطنية — جوهرة كينيا التاج. تمتد مروج مارا المتموجة عبر الأفق وتتصل بسلاسة بسيرينغيتي جنوباً. جولة سفاري بعد الظهر تعرّفكم على زمر الأسود المقيمة وعائلات الفهود الصياد.",
        accommodation: "مخيم ماساي مارا المخيَّم",
        meals: "جميع الوجبات",
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
        title: "ماساي مارا — يوم كامل",
        description: "يوم كامل في مارا، المصنفة إحدى عجائب أفريقيا الطبيعية السبع. من يوليو إلى أكتوبر، تملأ هجرة النو كل أفق. وعلى مدار العام، يجعل الخمسة الكبار وكامل حشد المفترسات الأفريقية مارا واحدة من أعظم وجهات مشاهدة الحياة البرية على وجه الأرض. ركوب الخيل بمحاذاة الحياة البرية متاح كنشاط اختياري.",
        accommodation: "مخيم ماساي مارا المخيَّم",
        meals: "جميع الوجبات",
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
        title: "الطيران إلى سيرينغيتي",
        description: "عبور الحدود إلى تنزانيا بطائرة خفيفة، مع الهبوط في مهبط سيرونيرا في قلب سيرينغيتي. جولة سفاري بعد الظهر في السهول الوسطى بينما تنبض تجمعات الأسود والفهود الصياد المقيمة في سيرينغيتي بالحياة تحت ضوء بعد الظهر الذهبي. تتوهج برك أفراس النهر عند الغروب.",
        accommodation: "مخيم سيرينغيتي المخيَّم",
        meals: "الغداء والعشاء",
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
        title: "سيرينغيتي — يوم كامل",
        description: "يوم كامل على سهول سيرينغيتي مع جولات سفاري صباحية ومسائية. تملأ القطط الكبيرة وقطعان النو والحمير الوحشية والزراف والفيلة المشهد في كل اتجاه. سيرينغيتي أكبر نظام بيئي متواصل للسافانا على وجه الأرض.",
        accommodation: "مخيم سيرينغيتي المخيَّم",
        meals: "جميع الوجبات",
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
        title: "فوهة نجورونجورو",
        description: "التوجه إلى نجورونجورو والنزول إلى الفوهة ليوم كامل بين الخمسة الكبار. تجعل الحياة البرية المتركزة داخل هذه الفوهة البركانية القديمة مشاهدة الحياة البرية هنا من الأكثر إنتاجية في أفريقيا. تُشاهَد وحيدات القرن السوداء هنا بثقة.",
        accommodation: "نُزل نجورونجورو سيرينا",
        meals: "جميع الوجبات",
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
        title: "حديقة بحيرة مانيارا الوطنية",
        description: "التوجه إلى بحيرة مانيارا — الحديقة التي وصفها همنغواي بأنها \"أجمل مكان في أفريقيا\". تتمدد أسود تسلق الأشجار على أغصان أشجار التين فوق أرضية الغابة. تحتضن البحيرة القلوية أسراباً ضخمة من الفلامنغو والبجع واللقالق. تتفجر ينابيع حارة على طول الشاطئ.",
        accommodation: "فندق بحيرة مانيارا",
        meals: "جميع الوجبات",
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
        title: "المغادرة — مطار كليمنجارو الدولي",
        description: "رحلة برية صباحية إلى مطار كليمنجارو الدولي للحاق برحلتكم الدولية عودة إلى دياركم، حاملين معكم ذكريات اثني عشر يوماً من اثنتين من أعظم وجهات الحياة البرية في أفريقيا.",
        accommodation: "لا ينطبق",
        meals: "الإفطار"
      }
    ]
  },
  {
    slug: "14-days-kilimanjaro-lemosho-safari",
    name: "تسلق كليمنجارو عبر مسار ليموشو وسفاري أبرز المعالم لمدة 5 أيام",
    duration: 14,
    destinations: [
      "arusha",
      "serengeti",
      "ngorongoro"
    ],
    type: "mountain_trekking",
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
    tagline: "محدَّثة لموسم 2027.",
    metaTitle: "تسلق كليمنجارو وسفاري | مسار ليموشو + سيرينغيتي ونجورونجورو | EWA Safari Outfitters",
    metaDescription: "تسلقوا قمة كليمنجارو عبر مسار ليموشو الخلاب، ثم طيروا مباشرة إلى سيرينغيتي وفوهة نجورونجورو. 14 يومًا في رحلة واحدة متكاملة، تبدأ الأسعار من 6,607.58 دولارًا للشخص الواحد.",
    overview: [
      "تجيب هذه الرحلة عن سؤال يطرحه المتسلقون أكثر من أي سؤال آخر تقريباً: ماذا يحدث بعد القمة؟ ثمانية أيام على مسار ليموشو في كليمنجارو — الذي يعتبره المرشدون على نطاق واسع أكثر مسارات الجبل اكتمالاً، وبأحد أعلى معدلات نجاح الوصول للقمة — تليها يوم راحة كامل في أروشا، ثم رحلة طيران مباشرة إلى سيرينغيتي ويوم كامل داخل فوهة نجورونجورو.",
      "رُتِّب النصفان عمداً بهذا الترتيب. ينهي المتسلقون مسار ليموشو وهم منهكون بدنياً، لذا تُدرج هذه الرحلة وقت تعافٍ حقيقياً قبل بدء السفاري، وتنقلهم إلى الأدغال جواً بدلاً من رحلة برية طويلة أخرى. أربعة عشر يوماً، حجز واحد متواصل، دون حاجة إلى التنسيق بين شركة تسلق وشركة سفاري منفصلة."
    ],
    highlights: [
      "برنامج التأقلم الكامل لمسار ليموشو على مدى 8 أيام — أحد أعلى معدلات نجاح الوصول للقمة في كليمنجارو (نحو 90-95%)",
      "يوم راحة حقيقي مُدرج، لا مُتجاوَز — تعافٍ حقيقي قبل بدء السفاري",
      "رحلة طيران من أروشا مباشرة إلى سيرينغيتي، تتجنب رحلة برية طويلة ثانية",
      "يوم كامل داخل فوهة نجورونجورو، أحد أكثر المواقع موثوقية في المنطقة لمشاهدة الخمسة الكبار",
      "حجز واحد متواصل، وعلاقة واحدة مع المرشد — دون تنسيق منفصل بين شركة تسلق وشركة سفاري"
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
      "جميع رسوم حديقة كليمنجارو الوطنية",
      "مرشد معتمد من KINAPA وطاقم جبلي كامل",
      "معدات التخييم والوجبات على الجبل",
      "رحلة الطيران من أروشا إلى سيرونيرا",
      "جميع رسوم حدائق السفاري ومناطق الحفظ",
      "جولات السفاري",
      "الإقامة كما هو مذكور لجميع الليالي الثلاث عشرة"
    ],
    excluded: [
      "الرحلات الجوية الدولية",
      "رسوم التأشيرة",
      "تأمين السفر",
      "الإكراميات"
    ],
    notes: [
      "الأسعار الموضحة هي للشخص الواحد بمشاركة غرفة مزدوجة/توأم؛ تُطبَّق رسوم إضافية عند طلب غرفة فردية.",
      "الأسعار الموضحة تغطي 2 إلى 4 مسافرين؛ أسعار 5 و6 مسافرين متاحة عند الطلب من مستشاركم.",
      "يتوفر خيار أكثر اقتصادية (يعادل مستوى إقامة Wilderness Trail) عند الطلب بدلاً من نشره كفئة قياسية — اطلبوا عرض سعر من مستشاركم.",
      "تخضع الإقامة والأسعار لمدى التوافر، وقد تختلف بحسب تاريخ السفر الدقيق ضمن الموسم."
    ],
    faq: [
      {
        q: "لماذا نجمع بين تسلق كليمنجارو والسفاري بدلاً من حجزهما منفصلين؟",
        a: "التنسيق بين شركة تسلق وشركة سفاري منفصلة يعني حجزين، ومجموعتين من الترتيبات اللوجستية، ودون ضمان أن يُدار الانتقال بينهما بشكل جيد. تُدير هذه الرحلة الاثنين كحجز واحد متواصل، مع يوم راحة مُدرج بينهما بدلاً من ترك ترتيبه لكم."
      },
      {
        q: "هل أحتاج إلى يوم راحة بين التسلق والسفاري؟",
        a: "نوصي به بشدة. ثمانية أيام على الجبل، بما فيها ليلة قمة مُجهِدة، تترك معظم المتسلقين متعبين حقاً — ويجعل يوم تعافٍ حقيقي قبل بدء السفاري النصف الثاني من الرحلة أكثر متعة بكثير من المضي مباشرة دون توقف."
      },
      {
        q: "لماذا الطيران إلى سيرينغيتي بدلاً من القيادة؟",
        a: "بعد ثمانية أيام من المسير، تُعد رحلة برية طويلة ثانية المتابعة الخاطئة. تضعكم رحلة طيران من أروشا في الميدان في اليوم نفسه، دون إضافة ساعات أخرى في مركبة فوق المتطلبات البدنية للتسلق."
      },
      {
        q: "ما معدل نجاح الوصول للقمة في هذه الرحلة؟",
        a: "تحمل رحلة مسار ليموشو ذات الثمانية أيام معدل نجاح يبلغ نحو 90-95%، من بين الأعلى لأي مسار قياسي على الجبل — نتيجة مباشرة لبرنامج التأقلم الممتد."
      },
      {
        q: "هل يمكنني اختيار مدة مختلفة لمسار ليموشو (6 أو 7 أيام) لهذا المزيج؟",
        a: "نعم — يمكن استبدال خياري ليموشو لمدة 6 أو 7 أيام، غير أن نسخة الثمانية أيام بمعدل نجاحها الأعلى تُعد عموماً الخيار الأفضل للاقتران بسفاري يليها."
      },
      {
        q: "ما الذي يشمله السعر، وما الذي لا يشمله؟",
        a: "يشمل السعر: جميع رسوم حديقة كليمنجارو الوطنية، ومرشداً معتمداً من KINAPA وطاقماً جبلياً كاملاً، ومعدات التخييم والوجبات على الجبل، ورحلة الطيران من أروشا إلى سيرونيرا، وجميع رسوم حدائق السفاري ومناطق الحفظ، وجولات السفاري، والإقامة كما هو مذكور لجميع الليالي الثلاث عشرة. ولا يشمل: الرحلات الجوية الدولية، ورسوم التأشيرة، وتأمين السفر، والإكراميات."
      },
      {
        q: "هل يمكن تمديد هذه الرحلة أكثر، بزنجبار أو رواندا؟",
        a: "نعم — امتداد شاطئي في زنجبار بعد اليوم الرابع عشر طريقة شائعة لاختتام الرحلة باسترخاء تام. اسألوا مستشاركم عن إضافة ذلك أو امتداد لرحلة تتبع الغوريلا في رواندا."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول إلى موشي",
        description: "التوجه إلى فندقكم في موشي. يلتقيكم مرشدكم الرئيسي لإحاطة كاملة قبل التسلق — فحص المعدات، ولمحة عامة عن المسار، وبروتوكول السلامة من الارتفاع، واستراتيجية القمة.",
        accommodation: "فندق في موشي",
        meals: "العشاء"
      },
      {
        day: 2,
        title: "موشي ← بوابة لوندوروسي ← مخيم متي مكوبوا",
        description: "رحلة برية إلى بوابة حديقة ليموشو، ثم سيراً على الأقدام عبر غابة جبلية كثيفة إلى موقع تخييم متي مكوبوا (\"الشجرة الكبيرة\") — يوم افتتاحي ثابت وهادئ.",
        accommodation: "مخيم متي مكوبوا",
        meals: "جميع الوجبات",
        location: "الارتفاع: 2,650 م (8,694 قدم)"
      },
      {
        day: 3,
        title: "مخيم متي مكوبوا ← مخيم شيرا 2",
        description: "يشتد انحدار المسار وسط أراضٍ عشبية بها شجيرات خلنجية عملاقة، ويعبر حافة شيرا قبل الوصول إلى مخيم شيرا 2 وسط مروج مفتوحة. تسلق متواصل بارتفاع كبير.",
        accommodation: "مخيم شيرا 2",
        meals: "جميع الوجبات",
        location: "الارتفاع: 3,850 م (12,631 قدم)"
      },
      {
        day: 4,
        title: "مخيم شيرا 2 ← مخيم بارانكو",
        description: "شرقاً عبر هضبة شيرا نحو برج لافا عند ارتفاع 4,650 م (15,256 قدم)، ثم نزولاً إلى مخيم بارانكو — يوم تأقلم كلاسيكي بمبدأ \"اصعد عالياً، نم منخفضاً\".",
        accommodation: "مخيم بارانكو",
        meals: "جميع الوجبات",
        location: "الارتفاع: 4,000 م (13,123 قدم)"
      },
      {
        day: 5,
        title: "مخيم بارانكو ← مخيم كارانجا",
        description: "يقود جدار بارانكو — وهو تسلق باستخدام الأيدي والقدمين لا تسلقاً تقنياً — صعوداً إلى وادي كارانجا، آخر مصدر مياه على الجبل.",
        accommodation: "مخيم كارانجا",
        meals: "جميع الوجبات",
        location: "الارتفاع: 4,050 م (13,287 قدم)"
      },
      {
        day: 6,
        title: "مخيم كارانجا ← مخيم بارافو",
        description: "مسير قصير إلى مخيم بارافو، بإطلالات بانورامية على القمة. راحة، وعشاء مبكر، والاستعدادات الأخيرة لليلة القمة.",
        accommodation: "مخيم بارافو",
        meals: "جميع الوجبات",
        location: "الارتفاع: 4,700 م (15,420 قدم)"
      },
      {
        day: 7,
        title: "ليلة القمة ← قمة أوهورو ← مخيم مويكا",
        description: "بالانطلاق بين منتصف الليل والساعة الثانية صباحاً، يمر التسلق بين نهري ريبمان وراتزل الجليديين وصولاً إلى نقطة ستيلا، ثم قمة أوهورو — القمة وأصعب مرحلة في الرحلة الاستكشافية. النزول إلى مخيم مويكا بعد ذلك.",
        accommodation: "مخيم مويكا",
        meals: "جميع الوجبات",
        insiderFact: "قمة أوهورو، على ارتفاع 5,895 م (19,341 قدم)، هي أعلى نقطة في أفريقيا.",
        location: "الارتفاع: 5,895 م (19,341 قدم) عند القمة، نزولاً إلى 3,090 م (10,138 قدم)"
      },
      {
        day: 8,
        title: "مخيم مويكا ← بوابة مويكا ← الفندق",
        description: "النزول إلى بوابة مويكا لاستلام شهادة القمة، ثم العودة إلى فندقكم في موشي.",
        accommodation: "فندق في موشي",
        meals: "جميع الوجبات"
      },
      {
        day: 9,
        title: "يوم راحة، من موشي إلى أروشا",
        description: "يوم كامل من التعافي الحقيقي — سرير مناسب، ودش حقيقي، ودون أي جدول. التوجه إلى أروشا بعد الظهر أو في المساء، تحسباً لرحلة الطيران غداً إلى سيرينغيتي. يختتم ضيوف فئة Wilderness Sovereign اليوم بنزهة مسائية في مزارع القهوة عند Arusha Coffee Lodge.",
        accommodation: "أروشا، تختلف حسب الفئة",
        meals: "جميع الوجبات",
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
        title: "الطيران إلى سيرينغيتي",
        description: "تنقلكم طائرة خفيفة من أروشا إلى مهبط سيرونيرا في سيرينغيتي — دون الحاجة إلى أي تنقل بري إضافي. تليها جولة سفاري بعد الظهر.",
        accommodation: "وسط سيرينغيتي، تختلف حسب الفئة",
        meals: "جميع الوجبات",
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
        title: "يوم كامل، سيرينغيتي",
        description: "يوم كامل لتتبع تجمعات الأسود والفهود المقيمة في سيرينغيتي، وبحسب الموسم، هجرة النو نفسها.",
        accommodation: "وسط سيرينغيتي، تختلف حسب الفئة",
        meals: "جميع الوجبات",
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
        title: "من سيرينغيتي إلى نجورونجورو",
        description: "الرحلة البرية إلى مرتفعات نجورونجورو، مع جولة سفاري في الطريق.",
        accommodation: "مرتفعات نجورونجورو، تختلف حسب الفئة",
        meals: "جميع الوجبات",
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
        title: "جولة يوم في فوهة نجورونجورو",
        description: "يوم كامل في النزول إلى الفوهة — واحد من أكثف تجمعات الحياة البرية في القارة، داخل نظام بيئي مغلق واحد.",
        accommodation: "مرتفعات نجورونجورو، تختلف حسب الفئة",
        meals: "جميع الوجبات",
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
        title: "المغادرة",
        description: "جولة سفاري صباحية أخيرة، ثم العودة إلى أروشا للحاق برحلتكم الدولية المتابعة.",
        accommodation: "لا ينطبق",
        meals: "الإفطار"
      }
    ]
  },
  {
    slug: "kilimanjaro-extension-safari",
    name: "سفاري امتداد كليمنجارو لمدة 5 أيام",
    duration: 5,
    destinations: [
      "arusha",
      "tarangire",
      "serengeti",
      "ngorongoro"
    ],
    type: "big_five_game_drives",
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
    tagline: "محدَّثة لموسم 2027.",
    metaTitle: "سفاري امتداد كليمنجارو | 5 أيام بعد تسلقكم | EWA Safari Outfitters",
    metaDescription: "نزلتم للتو من الجبل؟ امتدوا رحلتكم مباشرة إلى تارانجيري وسيرينغيتي وفوهة نجورونجورو — استلام من موشي، دون الحاجة إلى الطيران للديار أولاً. ابتداءً من 2,118.96 دولاراً للشخص الواحد.",
    overview: [
      "يقضي معظم المتسلقين أشهراً في التحضير للجبل ولا يفكرون تقريباً فيما يأتي بعده. صُمِّمت هذه الرحلة للنصف الثاني من تلك الرحلة — خمسة أيام تبدأ باستلام من بلدة موشي نفسها، لا برحلة عودة إلى مطار أولاً، وتنتقل مباشرة إلى قطعان الفيلة في تارانجيري، ويوم كامل في سيرينغيتي، ونزول إلى فوهة نجورونجورو، وصباح ثقافي ختامي في مبتو وا مبو قبل التوجه إلى مطار كليمنجارو الدولي.",
      "المنطق بسيط: أنتم بالفعل في تنزانيا، وقد تأقلمتم بالفعل مع البعد عن الديار، وتقع بلدات بوابة المسار الشمالي على مسافة قصيرة بالسيارة من حيث ينتهي معظم المسير. حجز هذا كرحلة واحدة متواصلة — بدلاً من الطيران للديار وترتيب زيارة عودة منفصلة — عادة ما يكون أرخص وأبسط من البديل. نوصي بيوم راحة واحد على الأقل في موشي قبل البدء، خصوصاً بعد مسار من 8 أيام بليلة قمة مُجهِدة."
    ],
    highlights: [
      "تبدأ في موشي، لا في أروشا أو مطار — مصممة خصيصاً للمتسلقين النازلين مباشرة من الجبل",
      "قطعان الفيلة وأشجار الباوباب المعمّرة في تارانجيري، الفصل الافتتاحي الكلاسيكي للمسار الشمالي",
      "يوم كامل في سيرينغيتي، لتتبع الأسود والفهود الصياد عبر السهول المفتوحة",
      "نزول كامل إلى فوهة نجورونجورو، أحد أكثر المواقع موثوقية في شرق أفريقيا لمشاهدة الخمسة الكبار",
      "صباح ثقافي في مبتو وا مبو لاختتام الرحلة، قبل التوجه إلى مطار كليمنجارو الدولي",
      "دون حاجة إلى الطيران للديار أولاً — رحلة واحدة متواصلة، عادة أبسط وأكثر فعالية من حيث التكلفة من ترتيب زيارة عودة منفصلة"
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
        trail: 2186.00
      },
      {
        pax: 6,
        trail: 2118.96
      }
    ],
    included: [
      "جميع رسوم الحدائق ومناطق الحفظ",
      "المركبة والمرشد والوقود طوال الرحلة",
      "إقامة كاملة (جميع الوجبات) في منشآت السفاري",
      "إقامة وإفطار في الليلة الأولى",
      "مياه الشرب",
      "تغطية الطوارئ من AMREF Flying Doctors"
    ],
    excluded: [
      "الرحلات الجوية الدولية",
      "رسوم التأشيرة",
      "تأمين السفر",
      "الإكراميات",
      "الأنشطة الاختيارية"
    ],
    notes: [
      "الأسعار الموضحة هي للشخص الواحد بمشاركة غرفة مزدوجة/توأم؛ تُطبَّق رسوم إضافية عند طلب غرفة فردية.",
      "تُقسَّم تكاليف المركبة والمرشد والوقود على أفراد المجموعة، لذا ينخفض السعر للشخص الواحد بشكل ملحوظ كلما زاد عدد المسافرين.",
      "صُمِّمت هذه الرحلة لتبدأ من موشي، حيث ينتهي معظم مسير كليمنجارو — يُرتَّب الاستلام مباشرة من فندقكم.",
      "تخضع الإقامة والأسعار لمدى التوافر، وقد تختلف بحسب تاريخ السفر الدقيق ضمن الموسم."
    ],
    faq: [
      {
        q: "هل أحتاج إلى الطيران للديار قبل بدء هذه السفاري؟",
        a: "لا — صُمِّمت هذه الرحلة خصيصاً لتبدأ من موشي، حيث ينتهي معظم مسير كليمنجارو. يُرتَّب الاستلام مباشرة من فندقكم؛ ودون حاجة إلى المرور عبر مطار كليمنجارو الدولي أولاً."
      },
      {
        q: "بعد كم من الوقت من الوصول للقمة يمكنني بدء السفاري؟",
        a: "نوصي بيوم راحة واحد على الأقل في موشي قبل البدء، خصوصاً بعد مسارات بليلة قمة مُجهِدة. بخلاف ذلك، يمكن أن تبدأ هذه الرحلة بمجرد استعدادكم — تحدثوا إلى مستشاركم بشأن التوقيت الدقيق الذي يناسب تواريخ تسلقكم."
      },
      {
        q: "هل 5 أيام كافية لسفاري حقيقية بعد تسلق كبير؟",
        a: "نعم — صُمِّمت هذه الرحلة للتحرك بكفاءة دون أن تبدو متسرعة: يوم كامل في كل من تارانجيري وسيرينغيتي، ويوم كامل في فوهة نجورونجورو، وتوقف ثقافي حقيقي، كل ذلك خلال خمسة أيام."
      },
      {
        q: "هل سأكون متعباً جداً من التسلق للاستمتاع بسفاري مباشرة بعده؟",
        a: "يجد معظم المتسلقين أن أيام السفاري أسهل بكثير من أيام المسير — فأنتم جالسون في مركبة بدلاً من المشي، والوتيرة مختلفة تماماً. مع ذلك، نوصي بيوم راحة قبل البدء إن كانت أرجلكم بحاجة إليه."
      },
      {
        q: "كم يتغير السعر بحسب حجم المجموعة؟",
        a: "تُقسَّم تكاليف المركبة والمرشد والوقود على أفراد المجموعة، لذا ينخفض السعر للشخص الواحد بشكل ملحوظ كلما زاد عدد المسافرين — راجعوا جدول الأسعار أعلاه."
      },
      {
        q: "ما الذي يشمله السعر، وما الذي لا يشمله؟",
        a: "يشمل السعر: جميع رسوم الحدائق ومناطق الحفظ، والمركبة والمرشد والوقود طوال الرحلة، وإقامة كاملة (جميع الوجبات) في منشآت السفاري، وإقامة وإفطار في الليلة الأولى، ومياه الشرب، وتغطية الطوارئ من AMREF Flying Doctors. ولا يشمل: الرحلات الجوية الدولية، ورسوم التأشيرة، وتأمين السفر، والإكراميات، والأنشطة الاختيارية."
      },
      {
        q: "هل يمكن دمج هذه الرحلة مع مسار معين لكليمنجارو؟",
        a: "نعم — يعمل هذا الامتداد مع أي من مسارات كليمنجارو الستة لدينا. إن لم تكونوا قد حجزتم تسلقكم بعد، اسألوا مستشاركم عن دمج هذه السفاري مباشرة مع مسار ليموشو أو ماتشامي أو أي مسار آخر."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "من موشي إلى أروشا",
        description: "استلام مباشرة من فندقكم في موشي — دون حاجة إلى ترتيب نقل مطار منفصل أو رحلة طيران أولاً. تأخذكم الرحلة البرية إلى أروشا عبر أراضٍ زراعية ومزارع قهوة عند سفح جبل ميرو، مع وقت للراحة قبل الانطلاقة المبكرة غداً نحو الحدائق.",
        accommodation: "Kahawa House",
        meals: "إقامة وإفطار",
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
        title: "من أروشا إلى حديقة تارانجيري الوطنية",
        description: "تقود الرحلة البرية جنوباً إلى سهول تارانجيري المرصعة بأشجار الباوباب، موطن بعض من أكبر قطعان الفيلة في تنزانيا — تباين لافت بعد أيام قضيتموها بالنظر إلى أعلى نحو جبل بدلاً من النظر عبر أدغال مفتوحة.",
        accommodation: "Lake Burunge Baobab Tented Lodge",
        meals: "إقامة كاملة (جميع الوجبات)",
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
        title: "من كاراتو إلى سيرينغيتي",
        description: "يوم عبور كامل غرباً، بدخول منطقة حفظ نجورونجورو قبل التوجه إلى سيرينغيتي نفسها — أشهر سهول أفريقيا، وبالنسبة لكثير من المتسلقين، السبب الذي جعل تخطيط امتداد السفاري يستحق العناء من الأساس.",
        accommodation: "Serengeti Katikati Camp",
        meals: "إقامة كاملة (جميع الوجبات)",
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
        title: "من سيرينغيتي إلى فوهة نجورونجورو",
        description: "الرحلة البرية عودة نحو نجورونجورو، بالنزول إلى قاع الفوهة ليوم كامل بين حياة الخمسة الكبار البرية داخل واحد من أكثف تجمعات الثدييات الكبيرة على وجه الأرض.",
        accommodation: "Ngorongoro Farm House",
        meals: "إقامة كاملة (جميع الوجبات)",
        insiderFact: "فوهة نجورونجورو نظام بيئي مغلق يمتد على نحو 260 كم² — ومعظم الحيوانات المقيمة فيها لا تغادرها أبداً.",
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
        title: "جولة ثقافية في مبتو وا مبو والتوجه إلى مطار كليمنجارو الدولي",
        description: "صباح ثقافي أخير في بلدة مبتو وا مبو السوقية — توقف حقيقي وغير متسرع لا مجرد فرصة عابرة لالتقاط الصور — قبل التوجه إلى مطار كليمنجارو الدولي للحاق برحلتكم المتابعة.",
        accommodation: "لا ينطبق",
        meals: "إقامة كاملة (جميع الوجبات)"
      }
    ]
  },
  {
    slug: "5-day-comfort-tanzania-safari",
    name: "سفاري تنزانيا المريحة لمدة 5 أيام",
    duration: 5,
    destinations: [
      "tarangire",
      "ngorongoro",
      "serengeti",
      "manyara"
    ],
    type: "big_five_game_drives",
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
    metaDescription: "الدائرة الشمالية الكاملة في 5 أيام فقط — تارانجيري ونجورونجورو وسيرينغيتي وبحيرة مانيارا — في سفاري تنزانية خاصة بإشراف دليل مرافق طوال الرحلة. تبدأ الأسعار من 1,909 دولارًا للشخص الواحد.",
    overview: [
      "خمسة أيام هي الحد الأدنى من الوقت اللازم لخوض المسار الشمالي بالشكل الصحيح، ولا تُهدر هذه الرحلة يوماً واحداً منها.",
      "تتحرك بسرعة لكنها لا تبدو أبداً متسرعة: يوم بين أشجار الباوباب المعمّرة في تارانجيري وبعض من أكبر قطعان الفيلة في أفريقيا، ونزول كامل إلى فوهة نجورونجورو لمشاهدة الخمسة الكبار ووحيد القرن الأسود، ويوم ونصف في سيرينغيتي لتتبع الأسود والفهود الصياد عبر السهول المفتوحة، وتوقف أخير عند بحيرة مانيارا لأسود تسلق الأشجار وشواطئها المصطفة بالفلامنغو. إنها الرحلة التي نوصي بها غالباً للمسافرين الذين يخوضون سفاري لأول مرة وللأزواج ذوي الجداول الأكثر ضيقاً — قصة المسار الشمالي كاملة، مضغوطة دون أن تُبتَر."
    ],
    highlights: [
      "المسار الشمالي الكامل في 5 أيام — تارانجيري ونجورونجورو وسيرينغيتي ومانيارا",
      "غابات باوباب معمّرة وأكبر قطعان الفيلة في أفريقيا",
      "نزول إلى فوهة نجورونجورو — الخمسة الكبار ووحيد القرن الأسود",
      "جولات سفاري في سيرينغيتي — الأسود والفهود الصياد والهجرة الكبرى",
      "أسود تسلق الأشجار والفلامنغو في بحيرة مانيارا"
    ],
    heroImage: "/images/gallery/lion-sleeping-tree-branch-serengeti.jpg",
    heroImageAlt: "Lion sleeping stretched out on a tree branch in the Serengeti",
    gallery: [],
    included: [
      "سيارة تويوتا لاند كروزر 4x4 خاصة بسقف قابل للفتح",
      "سائق-مرشد خاص محترف",
      "جميع الإقامة (4 ليالٍ)",
      "جميع رسوم الحدائق — تارانجيري ونجورونجورو وسيرينغيتي وبحيرة مانيارا",
      "وجبات إقامة كاملة (إقامة وإفطار في الليلة الأولى)",
      "مياه شرب غير محدودة في المركبة",
      "تأمين طوارئ من AMREF Flying Doctors",
      "نقل الوصول من المطار"
    ],
    excluded: [
      "الرحلات الجوية الدولية أو الداخلية",
      "تأشيرة دخول تنزانيا (~50 دولاراً أمريكياً)",
      "الإكراميات",
      "الأغراض الشخصية والغسيل",
      "الأنشطة الاختيارية",
      "تأمين السفر إضافة إلى تغطية AMREF"
    ],
    includedCategorized: {
      transfers: [
        "نقل الوصول من المطار في اليوم الأول",
        "جميع التنقلات بين الوجهات طوال السفاري"
      ],
      accommodationMeals: [
        "إقامة وإفطار في Kahawa House (الليلة الأولى)",
        "إقامة كاملة — جميع الوجبات في منشآت السفاري (الليالي 2-4)",
        "الإقامة وفق برنامج الرحلة"
      ],
      guidingGameDrives: [
        "جميع رسوم دخول الحدائق — تارانجيري، منطقة حفظ نجورونجورو (العبور + الفوهة)، سيرينغيتي، بحيرة مانيارا",
        "جميع جولات السفاري بسيارة تويوتا لاند كروزر 4x4 خاصة بسقف قابل للفتح",
        "سائق-مرشد خاص محترف طوال الرحلة",
        "تأمين طوارئ من AMREF Flying Doctors",
        "مياه شرب غير محدودة في المركبة",
        "مشروبات غازية وبيرة مختارة في المركبة"
      ]
    },
    excludedCategorized: [
      "الرحلات الجوية الدولية أو الداخلية",
      "تأشيرة دخول تنزانيا (~50 دولاراً أمريكياً لمعظم الجنسيات)",
      "الإكراميات للمرشد وطاقم المخيم",
      "الأغراض الشخصية والغسيل ورسوم الهاتف",
      "الأنشطة الاختيارية (سفاري المنطاد 550 دولاراً للشخص، زيارة قرية ماساي 25 دولاراً للشخص، تتبع وحيد القرن 120 دولاراً للشخص، سفاري المشي 59 دولاراً للشخص)",
      "تأمين السفر إضافة إلى تغطية AMREF Flying Doctors"
    ],
    notes: [
      "الأسعار الموضحة هي للشخص الواحد بمشاركة غرفة مزدوجة/توأم؛ تُطبَّق رسوم إضافية عند طلب غرفة فردية.",
      "تخضع الإقامة والأسعار لمدى التوافر، وقد تختلف بحسب تاريخ السفر الدقيق ضمن الموسم.",
      "تحدد الحكومة رسوم الحدائق الوطنية ومناطق الحفظ في تنزانيا، وهي قابلة للتغيير دون إشعار مسبق.",
      "يلزم دفع عربون 10% لتأكيد الحجز؛ ويُستحق باقي المبلغ قبل 28 يوماً على الأقل من المغادرة."
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
        title: "الوصول إلى أروشا",
        description: "الوصول إلى مطار أروشا (ARK) أو مطار كليمنجارو الدولي (JRO) ولقاء ممثل EWA Safari Outfitters. ترحيب حار وإحاطة قصيرة يسبقان نقلاً مريحاً إلى Kahawa House — منشأة ساحرة وذات موقع ممتاز في أروشا، ونقطة انطلاق مثالية للأيام المقبلة. استريحوا جيداً؛ فالأدغال تبدأ غداً.",
        accommodation: "Kahawa House",
        meals: "العشاء والإفطار",
        insiderFact: "تقع أروشا على ارتفاع 1,400 م — منطقة تأقلم مريحة قبل الحدائق. تصون معظم الشركات المنظمة مركباتها وتعيد تزويدها بالمؤن هنا بين الرحلات.",
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
        title: "حديقة تارانجيري الوطنية",
        description: "بعد الإفطار، يصطحبكم مرشدكم الخاص في رحلة برية جنوباً تستغرق ساعتين ونصف إلى تارانجيري. ترتفع أشجار الباوباب المعمّرة — التي يتجاوز عمر بعضها 1,000 عام — من الأرض الحمراء كأنها حراس، وتُعرِّف قطعان الفيلة المتحركة تحتها بأعداد تُذهلكم في منتصف الجملة المسار الشمالي. يجذب نهر تارانجيري تجمعات استثنائية من الحياة البرية في موسم الجفاف؛ تنتشر الأسود والفهود والحمير الوحشية والزراف والمها وأكثر من 500 نوع من الطيور عبر تضاريس الحديقة المتنوعة. غداء في موقع نزهة خلاب داخل الحديقة؛ خروج في وقت متأخر من بعد الظهر إلى النُّزل المخيَّم على ضفاف بحيرة بورونجي.",
        accommodation: "Lake Burunge Baobab Tented Lodge",
        meals: "إقامة كاملة (جميع الوجبات)",
        insiderFact: "تحتضن تارانجيري أعلى كثافة للفيلة بين حدائق المسار الشمالي كافة — وليس من غير المألوف رؤية قطعان من 200 فيل أو أكثر خلال موسم الجفاف حين يكون النهر مصدر المياه الوحيد على امتداد أميال.",
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
        title: "فوهة نجورونجورو وحديقة سيرينغيتي الوطنية",
        description: "انطلاقة مبكرة نحو حافة فوهة نجورونجورو — توقف عند نقطة المشاهدة: 20 كيلومتراً عرضاً، و600 متر عمقاً، و25,000 من الثدييات الكبيرة تقيم هناك بشكل دائم. يبدأ النزول على طريق ترابي متعرج. في الداخل: زمر أسود مسترخية حول المركبات، وقطعان ضخمة من الحمير الوحشية والنو، وبركة نجويتوكتوك لأفراس النهر كموقع توقف لغداء منتصف النهار، وفلامنغو على البحيرة القلوية، واحتمال مشاهدة وحيد القرن الأسود — أكثر التجمعات موثوقية للمشاهدة في شرق أفريقيا. بعد جولة السفاري الكاملة في الفوهة، تتابع الرحلة شرقاً نحو سيرينغيتي في وقت يسمح بمشروبات الغروب في مخيمكم المخيَّم.",
        accommodation: "Kubukubu Tented Lodge, Serengeti",
        meals: "إقامة كاملة (جميع الوجبات)",
        insiderFact: "نجورونجورو نظام بيئي مغلق — احتوت جدران الفوهة التي يبلغ ارتفاعها 600 م تجمعاً برياً مكتفياً ذاتياً لملايين السنين، ما يجعلها أكثف تجمع للثدييات الكبيرة على وجه الأرض.",
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
        title: "يوم كامل في حديقة سيرينغيتي الوطنية",
        description: "جولة سفاري في الصباح الباكر بينما تنبض الأدغال بالحياة — زمر أسود عائدة من صيد ليلي، وفهود صياد تستخدم تلال النمل الأبيض كنقاط مراقبة، وفيلة تعبر السهول في هواء الصباح البارد. تمتد سيرينغيتي على 14,763 كم² وتضم أكبر تجمع للمفترسات في أفريقيا. تمر دورة الهجرة الكبرى من هنا سنوياً؛ ويعرف مرشدكم الموقع الحالي للقطعان. غداء عند بوابة تلة نعبي، وتستمر جولات بعد الظهر حتى تحدد الحديقة الإيقاع، ثم الخروج نحو كاراتو والمبيت في Ngorongoro Farm House وسط الغابة الجبلية.",
        accommodation: "Ngorongoro Farm House, Karatu",
        meals: "إقامة كاملة (جميع الوجبات)",
        insiderFact: "تضم سيرينغيتي أكثر من 3,000 أسد — أكبر تجمع في أي منطقة محمية على وجه الأرض، والأكثر ظهوراً باستمرار أمام الزوار.",
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
        title: "بحيرة مانيارا والعودة إلى أروشا",
        description: "صباح أخير في الأدغال. بعد الإفطار، تأخذكم رحلة برية لمدة ساعة إلى بحيرة مانيارا عبر المرتفعات الزراعية — مزارع القهوة وبساتين الموز قبل النزول إلى قاع الوادي المتصدع. تشتهر مانيارا بأسود تسلق الأشجار، وهو سلوك موثَّق هنا منذ أكثر من ستين عاماً ولا يوجد في أي مكان آخر بشرق أفريقيا خارج منطقة إيشاشا في أوغندا. تضغط الحديقة نطاقاً استثنائياً من الموائل: غابة مياه جوفية كثيفة تضم الفيلة وقردة كولوبس الزرقاء، وسهول فيضية مفتوحة، وبحيرة قلوية مصطفة بالفلامنغو أمام جرف الوادي المتصدع الدرامي. جولة سفاري، وغداء نزهة داخل الحديقة، ثم شمالاً نحو أروشا لنقل الوداع.",
        accommodation: "المغادرة",
        meals: "الإفطار والغداء"
      }
    ]
  },
  {
    slug: "6-day-comfort-tanzania-safari",
    name: "سفاري تنزانيا المريحة لمدة 6 أيام",
    duration: 6,
    destinations: [
      "tarangire",
      "serengeti",
      "ngorongoro",
      "manyara"
    ],
    type: "big_five_game_drives",
    bestMonths: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
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
    metaDescription: "سفاري 6 أيام في الدائرة الشمالية مع يومين كاملين في سيرينغيتي، إضافة إلى قطعان الفيلة في تارانجيري ونزول كامل ليوم واحد إلى فوهة نجورونجورو. تبدأ الأسعار من 2,554 دولارًا للشخص الواحد.",
    overview: [
      "هذه الشقيقة الكبرى لسفاري الـ5 أيام المريحة — المسار الشمالي نفسه، ويوم إضافي واحد، يُخصَّص بالكامل لسيرينغيتي.",
      "تمنحكم الليلة الإضافية جولة سفاري حقيقية في الصباح الباكر في سيرينغيتي، حين تكون المفترسات في أوج نشاطها، إضافة إلى غابات الباوباب المعمّرة وقطعان الفيلة القياسية في تارانجيري، ونزول كامل إلى فوهة نجورونجورو لمشاهدة الخمسة الكبار ووحيد القرن الأسود، وأسود تسلق الأشجار في بحيرة مانيارا. إنه تغيير صغير على الورق — يوم إضافي واحد، وحديقة واحدة تُزار مرتين بدلاً من مرة — لكن في مشهد مبني على مشاهدات حياة برية لا يمكن التنبؤ بها، غالباً ما يشكل ذلك اليوم الإضافي في سيرينغيتي الفرق بين رؤية المسار وبين اختباره فعلاً."
    ],
    highlights: [
      "يومان كاملان في سيرينغيتي — اليوم الإضافي الذي يغيّر كل شيء",
      "قطعان الفيلة وغابات الباوباب المعمّرة في تارانجيري",
      "نزول كامل إلى فوهة نجورونجورو — الخمسة الكبار ووحيد القرن الأسود",
      "أسود تسلق الأشجار والفلامنغو في بحيرة مانيارا",
      "جولة سفاري في سيرينغيتي في الصباح الباكر حين تكون المفترسات في أوج نشاطها"
    ],
    heroImage: "/images/gallery/wildebeest-herd-migration-serengeti-plains.jpg",
    heroImageAlt: "Wildebeest herd migrating across the open Serengeti plains near a solitary tree",
    gallery: [],
    included: [
      "سيارة تويوتا لاند كروزر 4x4 خاصة بسقف قابل للفتح",
      "سائق-مرشد خاص محترف",
      "جميع الإقامة (5 ليالٍ)",
      "جميع رسوم الحدائق — تارانجيري وسيرينغيتي (يومان) ونجورونجورو وبحيرة مانيارا",
      "وجبات إقامة كاملة طوال الرحلة (العشاء والإفطار في الليلة الأولى)",
      "مياه شرب غير محدودة في المركبة",
      "تأمين طوارئ من AMREF Flying Doctors",
      "جميع التنقلات من وإلى المطار وبين الوجهات"
    ],
    excluded: [
      "الرحلات الجوية الدولية أو الداخلية",
      "تأشيرة دخول تنزانيا (~50 دولاراً أمريكياً)",
      "الإكراميات",
      "الأغراض الشخصية والغسيل",
      "الأنشطة الاختيارية",
      "تأمين السفر إضافة إلى تغطية AMREF"
    ],
    includedCategorized: {
      transfers: [
        "نقل الوصول من المطار في اليوم الأول",
        "جميع التنقلات بين الوجهات طوال السفاري"
      ],
      accommodationMeals: [
        "العشاء والإفطار في Kahawa House (الليلة الأولى)",
        "إقامة كاملة في جميع منشآت السفاري (الليالي 2-5)",
        "الإقامة وفق برنامج الرحلة"
      ],
      guidingGameDrives: [
        "جميع رسوم دخول الحدائق — تارانجيري، سيرينغيتي (يومان)، منطقة حفظ نجورونجورو (العبور + الفوهة)، بحيرة مانيارا",
        "جميع جولات السفاري بسيارة تويوتا لاند كروزر 4x4 خاصة بسقف قابل للفتح",
        "سائق-مرشد خاص محترف طوال الرحلة",
        "تأمين طوارئ من AMREF Flying Doctors",
        "مياه شرب غير محدودة في المركبة",
        "مشروبات غازية وبيرة مختارة في المركبة"
      ]
    },
    excludedCategorized: [
      "الرحلات الجوية الدولية أو الداخلية",
      "تأشيرة دخول تنزانيا (~50 دولاراً أمريكياً لمعظم الجنسيات)",
      "الإكراميات للمرشد وطاقم المخيم",
      "الأغراض الشخصية والغسيل ورسوم الهاتف",
      "الأنشطة الاختيارية (سفاري المنطاد 550 دولاراً للشخص، زيارة قرية ماساي 25 دولاراً للشخص، تتبع وحيد القرن 120 دولاراً للشخص، سفاري المشي 59 دولاراً للشخص)",
      "تأمين السفر إضافة إلى تغطية AMREF Flying Doctors"
    ],
    notes: [
      "الأسعار الموضحة هي للشخص الواحد بمشاركة غرفة مزدوجة/توأم؛ تُطبَّق رسوم إضافية عند طلب غرفة فردية.",
      "تخضع الإقامة والأسعار لمدى التوافر، وقد تختلف بحسب تاريخ السفر الدقيق ضمن الموسم.",
      "تحدد الحكومة رسوم الحدائق الوطنية ومناطق الحفظ في تنزانيا، وهي قابلة للتغيير دون إشعار مسبق.",
      "يلزم دفع عربون 10% لتأكيد الحجز؛ ويُستحق باقي المبلغ قبل 28 يوماً على الأقل من المغادرة."
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
        title: "الوصول إلى أروشا",
        description: "الوصول إلى مطار أروشا (ARK) أو مطار كليمنجارو الدولي (JRO) ولقاء ممثل EWA Safari Outfitters. التوجه إلى Kahawa House — منشأة مريحة ومميزة في أروشا تُعد الليلة الأولى المثالية في تنزانيا. استريحوا، واستقروا، واستعدوا لما تخبئه الأيام الخمسة القادمة.",
        accommodation: "Kahawa House",
        meals: "العشاء والإفطار",
        insiderFact: "تقع أروشا على ارتفاع 1,400 م — والأمسيات الباردة شائعة. عاصمة المغامرة في تنزانيا هي البوابة إلى كليمنجارو وسيرينغيتي والمسار الشمالي بأكمله.",
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
        title: "حديقة تارانجيري الوطنية",
        description: "بعد الإفطار، يصطحبكم مرشدكم الخاص في رحلة برية جنوباً تستغرق ساعتين إلى تارانجيري. تُحدِّد التجربة أشجار الباوباب المعمّرة في الحديقة — التي يتجاوز عمر بعضها 1,000 عام — وقطعان الفيلة المتحركة تحتها بأعداد استثنائية. تنزانيا موطن أكبر تجمع لأفيال السافانا الأفريقية في العالم، وتحتضن تارانجيري أعلى تركيز لها في المسار الشمالي. يصبح نهر تارانجيري مصدر المياه الوحيد على امتداد مئات الكيلومترات في موسم الجفاف، فيجذب الأسود والجاموس والحمير الوحشية والفهود وأكثر من 500 نوع من الطيور. غداء معبأ في موقع نزهة خلاب؛ خروج في وقت متأخر من بعد الظهر إلى النُّزل على ضفاف بحيرة بورونجي.",
        accommodation: "Lake Burunge Baobab Tented Lodge",
        meals: "إقامة كاملة (جميع الوجبات)",
        insiderFact: "خلال موسم الجفاف (يونيو-أكتوبر)، يكون نهر تارانجيري مصدر المياه الدائم الوحيد على امتداد مئات الكيلومترات — وتتجمع الحيوانات بكثافة تضاهي أي حديقة في القارة.",
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
        title: "حديقة سيرينغيتي الوطنية — الوصول وأول جولة سفاري",
        description: "تمر الرحلة البرية من تارانجيري إلى سيرينغيتي عبر منطقة حفظ نجورونجورو قبل النزول إلى السهول. تعني \"سيرينغيتي\" بلغة الماساي \"أرض السهول التي لا نهاية لها\" — وحين تروْن سيرينغيتي لأول مرة ممتدة حتى الأفق في كل اتجاه، يبدو الاسم حتمياً. تصلون في أواخر الصباح وتبدأون جولة سفاريكم الأولى فوراً. تُعد سهول جنوب سيرينغيتي قصيرة العشب أرضاً مثالية للفهود الصياد؛ وتأوي أنظمة الأنهار الفهود؛ وتمنح السهول المفتوحة مشاهدات للأسود بانتظام استثنائي. مشروبات الغروب على شرفة Kubukubu بينما تتحول السهول إلى اللون الكهرماني عند الغسق.",
        accommodation: "Kubukubu Tented Lodge, Serengeti",
        meals: "إقامة كاملة (جميع الوجبات)",
        insiderFact: "تضم سيرينغيتي أعلى كثافة من المفترسات الكبيرة في أي نظام بيئي على وجه الأرض — أكثر من 3,000 أسد، وأكثر من 1,000 فهد صياد، وأعداداً لا تحصى من الفهود في الغابات النهرية.",
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
        title: "يوم كامل في حديقة سيرينغيتي الوطنية",
        description: "انطلاقة مبكرة — لا يشبه شيء الأدغال عند أول ضوء. زمر الأسود تعود من صيد ليلي. الفهود الصياد تستخدم تلال النمل الأبيض كنقاط مراقبة. الفيلة تعبر السهول في هواء الصباح البارد. هذا اليوم الكامل ملك لكم بأكمله داخل الحديقة — يتتبع مرشدكم الحياة البرية، لا مساراً ثابتاً. غداء عند موقع نزهة بوابة تلة نعبي، بإطلالات عبر السهول. تستمر جولة سفاري بعد الظهر حتى تحدد الحديقة الإيقاع. هذا هو اليوم الذي تكتسب فيه سفاري الـ6 أيام تميزها عن رحلة الـ5 أيام — فالوقت في سيرينغيتي هو أثمن عملة يمكن إنفاقها هنا.",
        accommodation: "Kubukubu Tented Lodge, Serengeti",
        meals: "إقامة كاملة (جميع الوجبات)",
        insiderFact: "الهجرة الكبرى للنو حركة متواصلة — تكون القطعان في مكان ما من النظام البيئي لسيرينغيتي كل يوم من أيام السنة. يتتبع مرشدكم موقعها في الوقت الفعلي.",
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
        title: "فوهة نجورونجورو",
        description: "رحلة برية لمدة ساعة من سيرينغيتي تُوصلكم إلى حافة فوهة نجورونجورو. قفوا هنا: تنخفض الفوهة 600 متر تحتكم، بعرض 20 كيلومتراً، وقاعها عالم مكتفٍ ذاتياً من بحيرة ومستنقع ومروج وغابة. يبدأ النزول على طريق ترابي متعرج إلى داخل الفوهة البركانية. في الداخل: نحو 25,000 من الثدييات الكبيرة — من بينها الخمسة الكبار. يُعد تجمع وحيد القرن الأسود داخل نجورونجورو الأكثر موثوقية للمشاهدة في شرق أفريقيا. بركة نجويتوكتوك لأفراس النهر هي موقع توقف لغداء منتصف النهار. يصطف الفلامنغو على البحيرة القلوية. بعد جولة السفاري الكاملة في الفوهة، الصعود إلى Ngorongoro Farm House وسط الغابة الجبلية.",
        accommodation: "Ngorongoro Farm House, Karatu",
        meals: "إقامة كاملة (جميع الوجبات)",
        insiderFact: "تشكلت فوهة نجورونجورو منذ نحو 2.5 مليون عام حين انهار بركان ضخم إلى الداخل — وحافظت الجدران التي خلّفها منذ ذلك الحين على واحد من أكثر تجمعات الحياة البرية استثنائية على وجه الأرض.",
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
        title: "بحيرة مانيارا والعودة إلى أروشا",
        description: "بعد الإفطار في Ngorongoro Farm House، تأخذكم الرحلة البرية شمالاً عبر المرتفعات الزراعية في كاراتو ونزولاً إلى قاع الوادي المتصدع، حيث تقع حديقة بحيرة مانيارا الوطنية مضغوطة بين جرف الوادي المتصدع العظيم والبحيرة القلوية. أشهر سكان الحديقة هم أسود تسلق الأشجار — سلوك موثَّق هنا منذ أكثر من ستين عاماً. إلى جانب الأسود: الفيلة والجاموس والزراف وفرس النهر وأكثر من 400 نوع من الطيور. جولة سفاري، وغداء نزهة داخل الحديقة، ثم شمالاً نحو أروشا. يلتقيكم ممثل EWA لوداع شخصي.",
        accommodation: "المغادرة",
        meals: "إقامة نصفية (وجبتان)"
      }
    ]
  },
  {
    slug: "kenya-tanzania-highlights-safari",
    name: "أبرز معالم سفاري كينيا وتنزانيا",
    duration: 10,
    destinations: [
      "nairobi",
      "amboseli",
      "masai-mara",
      "serengeti",
      "ngorongoro",
      "manyara"
    ],
    type: "big_five_game_drives",
    bestMonths: ['Jul', 'Aug', 'Sep', 'Oct'],
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
    metaDescription: "سفاري لأبرز معالم كينيا وتنزانيا لمدة 10 أيام — ماساي مارا، وأمبوسيلي تحت جبل كليمنجارو، وسيرينغيتي، وفوهة نجورونجورو. تبدأ الأسعار من 4,600 دولار للشخص الواحد.",
    overview: [
      "اسألوا مرشد سفاري واسع الخبرة عن خمسة أماكن في شرق أفريقيا لا ينبغي تخطيها، وستحصلون تقريباً على هذه الرحلة العشرية.",
      "تفتتح الرحلة بقطعان الفيلة في أمبوسيلي وهي تجوب السهول تحت جبل كليمنجارو، ثم ليلة ويوم كامل في ماساي مارا — بما في ذلك أراضي عبور نهر مارا — قبل عبور حدودي بري عند إيسيبانيا ينقلكم بسلاسة من كينيا إلى سيرينغيتي في تنزانيا، وهما من الناحية البيئية مشهد واحد متواصل رغم الخط السياسي الفاصل بينهما. يومان كاملان في أراضي الفهود الصياد والأسود في سيرينغيتي يقودان إلى يوم كامل داخل فوهة نجورونجورو وتوقف عند بحيرة مانيارا، حيث يُعد تسلق الأسود للأشجار سلوكاً لا يوجد في أي مكان آخر بشرق أفريقيا. متوفرة بفئتي الراحة أو الفاخرة طوال الرحلة، هذه هي شريط أبرز المعالم المصمم للمسافرين، وخصوصاً المصورين، الراغبين في مناظر البلدين المميزة دون بتر أي منها."
    ],
    highlights: [
      "ماساي مارا — أشهر وجهة للحياة البرية في كينيا وأراضي عبور النهر",
      "حديقة أمبوسيلي الوطنية — قطعان الفيلة على خلفية كليمنجارو الأيقونية",
      "يومان كاملان في سيرينغيتي — أكبر تجمع للمفترسات في أفريقيا",
      "يوم كامل في فوهة نجورونجورو — الخمسة الكبار ووحيد القرن الأسود وأعظم فوهة بركانية في العالم",
      "تنقل عبر الحدود — رحلة برية سلسة من ماساي مارا إلى سيرينغيتي",
      "أسود تسلق الأشجار في بحيرة مانيارا — سلوك لا يوجد في أي مكان آخر بشرق أفريقيا"
    ],
    heroImage: "/images/gallery/zebras-grazing.webp",
    heroImageAlt: "Two zebras grazing in grassland with the Ngorongoro highlands in the distance",
    gallery: [],
    included: [
      "جميع الإقامة (9 ليالٍ) وفق الفئة المختارة",
      "سيارة تويوتا لاند كروزر 4x4 خاصة بسقف قابل للفتح (تنزانيا)",
      "مركبة سفاري كينية خاصة (كينيا)",
      "مرشد خاص خبير طوال الرحلة",
      "جميع رسوم الحدائق — أمبوسيلي وماساي مارا وسيرينغيتي ونجورونجورو (العبور + الفوهة) وبحيرة مانيارا",
      "وجبات إقامة كاملة طوال الرحلة",
      "تنقل عبر الحدود — من ماساي مارا إلى سيرينغيتي",
      "جميع التنقلات من وإلى المطار في كينيا وتنزانيا",
      "تأمين طوارئ من AMREF Flying Doctors",
      "الضرائب الحكومية — كينيا وتنزانيا"
    ],
    excluded: [
      "الرحلات الجوية الدولية",
      "تأشيرات دخول كينيا وتنزانيا (~50-100 دولار أمريكي لكل منهما)",
      "الإكراميات",
      "الأغراض الشخصية وتأمين السفر",
      "الأنشطة الاختيارية"
    ],
    includedCategorized: {
      transfers: [
        "نقل الوصول من المطار في نيروبي (اليوم الأول)",
        "تنقل بري عبر الحدود — من ماساي مارا إلى سيرينغيتي (اليوم الخامس)",
        "جميع التنقلات بين الوجهات في كلا البلدين",
        "نقل المغادرة من المطار في أروشا (اليوم العاشر)"
      ],
      accommodationMeals: [
        "العشاء في الليلة الأولى (نيروبي)",
        "إقامة كاملة في جميع منشآت السفاري (الليالي 2-9)",
        "الإقامة وفق فئة الراحة أو الفاخرة المختارة"
      ],
      guidingGameDrives: [
        "جميع رسوم دخول الحدائق — أمبوسيلي وماساي مارا وسيرينغيتي ونجورونجورو (عبور منطقة الحفظ + الفوهة) وبحيرة مانيارا",
        "جميع جولات السفاري بسيارة تويوتا لاند كروزر 4x4 خاصة (تنزانيا) ومركبة سفاري كينية خاصة",
        "سائق-مرشد خاص خبير طوال الرحلة — يتحدث الإنجليزية وذو خبرة في كلا البلدين",
        "تأمين طوارئ من AMREF Flying Doctors",
        "مياه شرب غير محدودة في المركبة",
        "الضرائب الحكومية — في كينيا وتنزانيا معاً"
      ]
    },
    excludedCategorized: [
      "الرحلات الجوية الدولية",
      "تأشيرة كينيا الإلكترونية (~30 دولاراً أمريكياً) وتأشيرة دخول تنزانيا (~50 دولاراً أمريكياً) — كلتاهما متاحتان عبر الإنترنت مسبقاً",
      "الإكراميات للمرشدين وطاقم المخيم",
      "الأغراض الشخصية وتأمين السفر",
      "الأنشطة الاختيارية (سفاري المنطاد 550 دولاراً للشخص، جولة مارا الليلية 85 دولاراً للشخص، زيارة قرية ماساي 25 دولاراً للشخص، أولدوفاي جورج 30 دولاراً للشخص، تتبع وحيد القرن 120 دولاراً للشخص)"
    ],
    notes: [
      "الأسعار الموضحة هي للشخص الواحد بمشاركة غرفة مزدوجة/توأم؛ تُطبَّق رسوم إضافية عند طلب غرفة فردية.",
      "منشآت فئة الراحة: Ol Tukai Lodge وGovernors Camp وKubukubu Tented Lodge وNgorongoro Farm House وKirurumu Manyara Lodge. فئة الفاخرة: Tawi Lodge وGovernors Camp و&Beyond Serengeti Under Canvas وThe Manor at Ngorongoro وandBeyond Lake Manyara Tree Lodge.",
      "تحدد الحكومة رسوم الحدائق الوطنية ومناطق الحفظ في تنزانيا، وهي قابلة للتغيير دون إشعار مسبق.",
      "يلزم دفع عربون 30% لتأكيد الحجز؛ ويُستحق باقي المبلغ قبل 60 يوماً من المغادرة."
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
        title: "الوصول إلى نيروبي، كينيا",
        description: "تبدأ رحلتكم الاستكشافية في شرق أفريقيا من نيروبي. الوصول إلى مطار جومو كينياتا الدولي (NBO) والتوجه إلى فندقكم. تغطي إحاطة ترحيبية مع مرشدكم الأيام العشرة المقبلة — خمس حدائق عبر بلدين، لكل منها طابعها وبصمتها البرية الخاصة. إن سمح الوقت: ملجأ صندوق ديفيد شيلدريك للحياة البرية للفيلة، ومركز الزراف، ومتحف كارين بليكسن، جميعها في متناول سهل.",
        accommodation: "Hemingways Nairobi",
        meals: "العشاء",
        insiderFact: "تتطلب كل من كينيا وتنزانيا تأشيرة دخول منفصلة — تأشيرة كينيا الإلكترونية متاحة عبر etakenya.go.ke؛ وتأشيرة تنزانيا الإلكترونية عبر eservices.immigration.go.tz. قدموا الطلب قبل أسبوعين على الأقل من السفر.",
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
        title: "من نيروبي إلى حديقة أمبوسيلي الوطنية",
        description: "رحلة برية صباحية جنوباً من نيروبي تُوصلكم إلى حديقة أمبوسيلي الوطنية — حيث تمتد السهول نحو القبة البيضاء التي لا تُخطئها العين لجبل كليمنجارو. يتحرك تجمع الفيلة الكبير في أمبوسيلي عبر السهول المفتوحة بلا مبالاة حقيقية — فقد جعلتها عقود من التعايش مع الزوار المحترمين من بين الأقرب مشاهدة في أفريقيا. في ضوء جيد، تُعد عائلة من عشرين فيلاً تعبر السهل المفتوح وكليمنجارو يملأ السماء خلفها واحدة من أقوى صور الحياة البرية في شرق أفريقيا. جولة سفاري بعد الظهر، ومشروبات الغروب مع ظل كليمنجارو، والمبيت في نُزلكم.",
        accommodation: "Ol Tukai Lodge / Tawi Lodge",
        meals: "إقامة كاملة (جميع الوجبات)",
        insiderFact: "تقع أمبوسيلي عند سفح أعلى قمة في أفريقيا — في الصباحات الصافية، يرتفع كليمنجارو (5,895 م) فوق السهول في مشهد شكّل الهوية البصرية لتصوير الحياة البرية في شرق أفريقيا لعقود.",
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
        title: "ماساي مارا — الوصول وأول جولة سفاري",
        description: "تعبر الرحلة البرية شمال غرباً من أمبوسيلي المرتفعات الكينية وتنزل إلى مارا — وفي اللحظة التي ينحسر فيها الجرف وتنفتح سهول مارا أسفلكم، يتغيّر شيء ما. محمية ماساي مارا الوطنية هي الامتداد الشمالي للنظام البيئي لسيرينغيتي وأشهر وجهة للحياة البرية في العالم. تضم مارا أعلى كثافة من المفترسات الكبيرة في شرق أفريقيا — الأسود والفهود وفهود الصيد وكلاب الصيد البرية والضباع، جميعها تنشط بوضوح ضمن أراضٍ يسهل الوصول إليها بجولات السفاري. تصلون إلى المخيم في أوائل بعد الظهر وتبدأون جولة سفاريكم الأولى بينما يتحول الضوء إلى الذهبي.",
        accommodation: "Governors Camp, Masai Mara",
        meals: "إقامة كاملة (جميع الوجبات)",
        insiderFact: "تشكل ماساي مارا وسيرينغيتي في تنزانيا معاً نظاماً بيئياً واحداً متصلاً — أعظم مشهد للحياة البرية على وجه الأرض. الحدود بينهما سياسية لا بيئية.",
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
        title: "يوم كامل في ماساي مارا",
        description: "يوم كامل مكرَّس بالكامل لنظام مارا البيئي — جولة سفاري في الصباح الباكر عند أول ضوء، وإفطار في المخيم، ويوم كامل من الاستكشاف عبر السهول والغابة النهرية وممر نهر مارا. هذا هو اليوم الذي تقدم فيه مارا أفضل ما لديها. نهر مارا، الذي يشكل الحدود الشمالية للحديقة، هو موقع عبور نهر الهجرة الكبرى من يوليو إلى أكتوبر — أحد أكثر المشاهد الطبيعية إثارة، إذ يقفز النو بالمئات في مياه تعج بالتماسيح. على مدار العام، تُعد مشاهدات القطط الكبيرة المقيمة عالمية المستوى.",
        accommodation: "Governors Camp, Masai Mara",
        meals: "إقامة كاملة (جميع الوجبات)",
        insiderFact: "تحدث عمليات العبور حين يتغلب اندفاع القطيع على التردد الفردي — يمكن أن تحدث في أي وقت من اليوم وتستمر من دقائق إلى ساعات. يراقب مرشدكم تجمع القطعان للتنبؤ بها.",
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
        title: "التنقل عبر الحدود إلى سيرينغيتي",
        description: "التنقل عبر الحدود من ماساي مارا الكينية إلى سيرينغيتي التنزانية واحدة من أعظم الرحلات البرية للسفاري — انتقال سلس بين بلدين يشكلان، من الناحية البيئية، برية واحدة متواصلة. عبور الحدود عند إيسيبانيا مُدار جيداً لحركة السفاري؛ ويتولى مرشدكم جميع الأوراق الرسمية. تبدأ جولة السفاري بعد الظهر فوراً عند الدخول إلى سيرينغيتي. تختلف السهول الوسطى في طابعها عن مارا — أوسع، وأكثر انفتاحاً، والأفق أبعد — وتستجيب الحياة البرية وفقاً لذلك. زمر الأسود هنا أكبر. وتجمع الفهود الصياد هو الأكثف بين أي منطقة محمية في أفريقيا.",
        accommodation: "Kubukubu Tented Lodge / &Beyond Serengeti Under Canvas",
        meals: "إقامة كاملة (جميع الوجبات)",
        insiderFact: "تشكل سيرينغيتي وماساي مارا نظاماً بيئياً هجرياً واحداً — يعبر النو هذه الحدود السياسية كل عام دون أي اكتراث بها، متبعاً دورة سنوية تمتد 3,000 كيلومتر مدفوعة بالأمطار والعشب.",
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
        title: "يوم كامل في حديقة سيرينغيتي الوطنية",
        description: "يوم كامل في أشهر حديقة وطنية في أفريقيا — يوم يرقى إلى كل التوقعات. تمتد سيرينغيتي على 14,763 كم² وتضم أكثر من 2 مليون من الثدييات. إلى جانب الهجرة، تضم الحديقة أعلى كثافة للمفترسات في أفريقيا وتوفر أكثر مشاهدات القطط الكبيرة موثوقية في القارة. يعرف مرشدكم سيرينغيتي عن كثب — أي المناطق تُنتج مشاهدات، وأين شوهد الفهد صباح أمس، وأي زمرة تُربي صغارها قرب المجرى الجاف. جولة سفاري عند شروق الشمس، ويوم كامل من الاستكشاف، وعودة إلى المخيم عند الغروب.",
        accommodation: "Kubukubu Tented Lodge / &Beyond Serengeti Under Canvas",
        meals: "إقامة كاملة (جميع الوجبات)",
        insiderFact: "\"&Beyond Serengeti Under Canvas\" مخيم متنقل — يعيد التموضع موسمياً لمتابعة الهجرة، ما يضمن بقاء الضيوف دائماً في الموقع الأمثل لمشاهدة الحياة البرية.",
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
        title: "من سيرينغيتي إلى نجورونجورو عبر أولدوفاي جورج",
        description: "تمر الرحلة البرية من سيرينغيتي إلى نجورونجورو عبر منطقة حفظ نجورونجورو — وهي بذاتها مشهد خلاب من الغابة الجبلية ورعي الماساي. يتوقف مرشدكم عند أولدوفاي جورج لتوجيه موجز: أحد أهم مواقع علم الحفريات البشرية في العالم، حيث اكتُشفت أدلة على أسلاف بشرية مبكرة يعود تاريخها إلى 1.8 مليون عام. استراحة آسرة حقاً في سفاري للحياة البرية. الاقتراب النهائي من حافة الفوهة ونُزلكم وسط الغابة الجبلية؛ عشاء برفقة أصوات الغابة، وإن كانت الليلة صافية، سماء استثنائية على ارتفاع شاهق.",
        accommodation: "Ngorongoro Farm House / The Manor at Ngorongoro",
        meals: "إقامة كاملة (جميع الوجبات)",
        insiderFact: "أولدوفاي جورج هو حيث اكتشفت عالمة الحفريات ماري ليكي جمجمة Paranthropus boisei التي يعود تاريخها إلى 1.8 مليون عام في عام 1959 — اكتشاف غيّر جذرياً فهم التطور البشري.",
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
        title: "يوم كامل في فوهة نجورونجورو",
        description: "يبدأ النزول إلى فوهة نجورونجورو عند الفجر. على بعد 600 متر تحت الحافة، يكشف قاع الفوهة البركانية عن واحد من أكثر تجمعات الحياة البرية استثنائية على وجه الأرض — نحو 25,000 من الثدييات الكبيرة في حوض يبلغ عرضه 20 كيلومتراً. يتعايش الخمسة الكبار بكثافة استثنائية. تجمع وحيد القرن الأسود هو الأكثر موثوقية للمشاهدة في شرق أفريقيا. بركة نجويتوكتوك لأفراس النهر هي موقع توقف لغداء منتصف النهار — تطفو أفراس النهر على بعد أمتار من نزهتكم، وتتجادل الإوز المصري عند حافة الماء، وترتفع جدران الفوهة من كل جانب. يوم كامل من النزول والاستكشاف والصعود في أشهر فوهة بركانية في أفريقيا.",
        accommodation: "Ngorongoro Farm House / The Manor at Ngorongoro",
        meals: "إقامة كاملة (جميع الوجبات)",
        insiderFact: "تُشكل جدران الفوهة حاجزاً طبيعياً أبقى تجمعات الحياة البرية المقيمة من المغادرة لأجيال — عاشت زمر الأسود في الفوهة نفسها لعقود، ووحيدات القرن السوداء من بين الأكثر دراسة عن قرب في العالم.",
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
        title: "حديقة بحيرة مانيارا الوطنية",
        description: "وصف إرنست همنغواي بحيرة مانيارا بأنها أجمل بحيرة في أفريقيا. مضغوطة بين جرف الوادي المتصدع العظيم والبحيرة القلوية التي تشغل معظم مساحتها البالغة 325 كم²، تضغط مانيارا نطاقاً استثنائياً من الموائل: غابة مياه جوفية كثيفة عند سفح الجرف، ومروج مفتوحة وأحراش سنط، وبحيرة قلوية مصطفة بالفلامنغو. أشهر سكان الحديقة هم أسود تسلق الأشجار — سلوك فريد بمانيارا في شرق أفريقيا، موثَّق منذ أكثر من ستين عاماً. إلى جانب الأسود: الفيلة والجاموس وفرس النهر والزراف وأكثر من 400 نوع من الطيور. يُعد ضوء بعد الظهر على البحيرة وجدار الجرف واحداً من أروع اللحظات التصويرية في تنزانيا.",
        accommodation: "Kirurumu Manyara Lodge / andBeyond Lake Manyara Tree Lodge",
        meals: "إقامة كاملة (جميع الوجبات)",
        insiderFact: "\"andBeyond Lake Manyara Tree Lodge\" واحد من أكثر المنشآت تفرداً في تنزانيا — عشرة بيوت شجرية مبنية داخل مظلة غابة الماهوجني القديمة، حيث يسير الضيوف على ممرات خشبية مرتفعة بين غرفهم ومنطقة تناول الطعام ليلاً.",
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
        title: "العودة إلى أروشا والمغادرة",
        description: "صباح أخير في تنزانيا — والرحلة البرية شمالاً نحو أروشا عبر المرتفعات الزراعية في الوادي المتصدع، وجبل ميرو في الأفق، وعشرة أيام استثنائية خلفكم. يلتقيكم ممثل EWA في أروشا لوداع شخصي. نقل إلى المطار للرحلات المتابعة إلى نيروبي أو زنجبار أو دياركم. ليالٍ إضافية في أروشا متاحة عند الطلب.",
        accommodation: "المغادرة",
        meals: "الإفطار"
      }
    ]
  },
{
    slug: "10-day-kenya-tanzania-safari",
    name: "سفاري كينيا وتنزانيا لمدة 10 أيام",
    duration: 10,
    destinations: [
      "masai-mara",
      "nairobi",
      "serengeti",
      "ngorongoro",
      "tarangire"
    ],
    type: "big_five_game_drives",
    bestMonths: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
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
    metaDescription: "سفاري عابرة للحدود مدتها 10 أيام — محمية وحيد القرن في بحيرة ناكورو، يومان في ماساي مارا، ثلاثة أيام كاملة في سيرينغيتي، وفوهة نجورونجورو. تبدأ الأسعار من 5,072 دولارًا للشخص الواحد.",
    overview: [
      "يسلك هذا المسار القوس الكلاسيكي نفسه من كينيا إلى تنزانيا الذي يتبعه برنامجنا العابر للحدود التقليدي، لكنه يستبدل يوماً من التنقل البري بيوم ثالث كامل في سيرينغيتي.",
      "تبدأ الرحلة عند بحيرة ناكورو، بين شواطئها المصطفة بطيور الفلامنغو ومحمية وحيد القرن التي تضم كلاً من وحيد القرن الأسود والأبيض، قبل يومين كاملين في أراضي الأسود والفهود الصيادة بماساي مارا. تتولى EWA تنسيق تسليم الدليل والمركبة عند معبر سيراري الحدودي، بحيث يكون الانتقال إلى سيرينغيتي الوسطى في تنزانيا سلساً بقدر سلاسة النظام البيئي نفسه — حيث ستقضون ثلاثة أيام كاملة، وهي مدة أطول في حديقة واحدة تقريباً من أي برنامج آخر نقدمه. ثم يمنحكم النزول المصحوب بدليل إلى فوهة نجورونجورو فرصة مشاهدة القائمة الخماسية الكبرى في يوم واحد، قبل أن تختتم قطعان الفيلة الأسطورية وأشجار الباوباب القديمة في تارانجيري الرحلة، تمهيداً للعودة إلى أروشا."
    ],
    highlights: [
      "شواطئ بحيرة ناكورو المكتظة بطيور الفلامنغو ووحيد القرن الأسود والأبيض المقيمَين",
      "يومان كاملان في ماساي مارا — أعظم مسرح للحياة البرية في كينيا",
      "عبور حدودي سلس بين كينيا وتنزانيا عند سيراري (تتولى EWA كافة الترتيبات اللوجستية)",
      "ثلاثة أيام كاملة في قلب أراضي الحيوانات المفترسة بسيرينغيتي الوسطى",
      "نزول مصحوب بدليل إلى فوهة نجورونجورو — مشاهدة القائمة الخماسية الكبرى في يوم واحد",
      "قطعان الفيلة الأسطورية وأشجار الباوباب القديمة في تارانجيري"
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
      "جميع رسوم دخول الحدائق ورسوم الحفاظ على البيئة (في كينيا وتنزانيا)",
      "جميع جولات السفاري بمركبة دفع رباعي خاصة",
      "دليل محترف طوال الرحلة",
      "المساعدة في عبور الحدود عند سيراري (كينيا/تنزانيا)",
      "جميع الوجبات المحددة",
      "الإقامة وفق برنامج الرحلة",
      "المواصلات من وإلى المطار وبين أماكن الإقامة"
    ],
    includedCategorized: {
      transfers: [
        "المساعدة في عبور الحدود عند سيراري (كينيا/تنزانيا)",
        "المواصلات من وإلى المطار وبين أماكن الإقامة"
      ],
      accommodationMeals: [
        "جميع الوجبات المحددة",
        "الإقامة وفق برنامج الرحلة"
      ],
      guidingGameDrives: [
        "جميع رسوم دخول الحدائق ورسوم الحفاظ على البيئة (في كينيا وتنزانيا)",
        "جميع جولات السفاري بمركبة دفع رباعي خاصة",
        "دليل محترف طوال الرحلة"
      ]
    },
    excluded: [
      "الرحلات الجوية الدولية",
      "تأشيرات الدخول إلى كينيا وتنزانيا",
      "التأمين على السفر",
      "الإكراميات والبقشيش",
      "الأنشطة الاختيارية (سفاري المنطاد، الزيارات الثقافية)"
    ],
    excludedCategorized: [
      "الرحلات الجوية الدولية",
      "تأشيرة دخول كينيا (حوالي 30 دولاراً أمريكياً لمعظم الجنسيات) وتأشيرة دخول تنزانيا (حوالي 50 دولاراً أمريكياً)",
      "التأمين على السفر",
      "الإكراميات للدليل وطاقم النُّزل",
      "الأنشطة الاختيارية (رحلة المنطاد بحوالي 550 دولاراً أمريكياً للشخص، زيارة قرية الماساي بحوالي 25 دولاراً أمريكياً للشخص)",
      "المستلزمات الشخصية وخدمة الغسيل ورسوم الهاتف"
    ],
    notes: [
      "الأسعار المعروضة للشخص الواحد بنظام مشاركة غرفة مزدوجة/توأم؛ وتُطبَّق رسوم إضافية عند طلب غرفة فردية.",
      "يتغيّر الدليل والمركبة عند الحدود الكينية التنزانية في سيراري؛ وتتولى EWA تنسيق عملية التسليم.",
      "تخضع الإقامة والأسعار لمدى التوافر، وقد تتغير بحسب تاريخ السفر المحدد.",
      "تحدد الحكومتان التنزانية والكينية رسوم الحدائق، وهي عرضة للتغيير دون إشعار مسبق.",
      "يلزم دفع عربون بنسبة 35% لتأكيد الحجز، ويُستحق باقي المبلغ قبل 60 يوماً من موعد المغادرة."
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول إلى نيروبي",
        description: "تصلون إلى مطار جومو كينياتا الدولي، ثم تُنقَلون إلى فندقكم في نيروبي لقضاء ليلة واحدة.",
        accommodation: "Eka Hotel, Nairobi",
        meals: "إقامة مع إفطار",
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
        title: "حديقة بحيرة ناكورو الوطنية",
        description: "تتجهون بالسيارة إلى بحيرة ناكورو، إحدى أكثر حدائق الوادي المتصدع العظيم إثارة للدهشة. تجتذب البحيرة القلوية أسراباً ضخمة من طيور الفلامنغو في موسمها — جدار وردي يمتد على طول كل شاطئ. والحديقة معلنة رسمياً محمية لوحيد القرن، وتضم كلاً من وحيد القرن الأسود والأبيض، إضافة إلى الأسود والفهود والجواميس والزرافات في غابة الأكاسيا المحيطة.",
        accommodation: "Lake Nakuru Sopa Lodge",
        meals: "إقامة كاملة (جميع الوجبات)",
        insiderFact: "أُعلنت بحيرة ناكورو محمية لوحيد القرن عام 1983 — وهي اليوم تضم واحدة من أعلى كثافات وحيد القرن الأسود والأبيض في شرق أفريقيا خارج محمية مُدارة.",
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
        title: "محمية ماساي مارا الوطنية — الوصول",
        description: "تتجهون جنوب غرباً من ناكورو نحو ماساي مارا — أشهر محمية للحياة البرية في كينيا. وتغطي جولة سفاري فور الوصول السهول المفتوحة والغابة النهرية على امتداد نهر مارا، بحثاً عن مشاهدات للقطط الكبيرة في وقت متأخر من بعد الظهر.",
        accommodation: "Masai Mara Sopa Lodge",
        meals: "إقامة كاملة (جميع الوجبات)",
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
        title: "يوم كامل في ماساي مارا",
        description: "يوم كامل من جولات السفاري في ماساي مارا. فالمحمية موطن لواحدة من أكبر تجمعات الأسود المقيمة في شرق أفريقيا، إضافة إلى الفهود الصيادة والنمور والفيلة، وعبورات النو الشهيرة عالمياً لنهر مارا (من يوليو إلى أكتوبر). يجول بكم دليلكم عبر مناطق متعددة من المحمية لتتبع أنشط الحيوانات المفترسة.",
        accommodation: "Masai Mara Sopa Lodge",
        meals: "إقامة كاملة (جميع الوجبات)",
        insiderFact: "خلال الهجرة الكبرى (من يوليو إلى أكتوبر)، يعبر أكثر من 1.5 مليون رأس من النو و200,000 حمار وحشي من سيرينغيتي في تنزانيا إلى مارا — في واحد من أكثر مشاهد الحياة البرية دراماتيكية على وجه الأرض.",
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
        title: "عبور الحدود بين كينيا وتنزانيا وسيرينغيتي الوسطى",
        description: "تعبرون الحدود بين كينيا وتنزانيا عند سيراري مع تسليم الدليل من قِبل EWA، ثم تدخلون سيرينغيتي من الشمال. وتبدأ جولة سفاري بعد الظهر مباشرة على الجانب التنزاني، حيث يمتد النظام البيئي لسيرينغيتي بسلاسة من مارا. وتصلون إلى المخيم في سيرينغيتي الوسطى قبل غروب الشمس.",
        accommodation: "Kubukubu Tented Lodge, Serengeti",
        meals: "إقامة كاملة (جميع الوجبات)",
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
        title: "يوم كامل — سيرينغيتي الوسطى",
        description: "يوم كامل في سيرينغيتي الوسطى، يغطي وادي سيرونيرا والسهول المحيطة به. وتضم سيرينغيتي الوسطى تجمعات مقيمة على مدار العام من الأسود والنمور والفهود الصيادة والفيلة والجواميس — واحدة من أكثر أراضي الحيوانات المفترسة إنتاجية في أفريقيا في جميع الفصول.",
        accommodation: "Kubukubu Tented Lodge, Serengeti",
        meals: "إقامة كاملة (جميع الوجبات)",
        insiderFact: "تصطف على ضفاف نهر سيرونيرا في سيرينغيتي الوسطى أشجار التين وأشجار النقانق حيث تستريح النمور بين رحلات الصيد — وهي من أفضل المناطق في أفريقيا لمشاهدة النمور من داخل المركبة.",
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
        title: "يوم كامل — سيرينغيتي الوسطى",
        description: "يوم ثالث كامل من جولات السفاري في سيرينغيتي الوسطى. يستكشف دليلكم أقساماً مختلفة من المحمية استناداً إلى معلومات تتبع حديثة وأنماط موسمية، بما يمنحكم أفضل فرصة لمشاهدات وسلوكيات جديدة.",
        accommodation: "Kubukubu Tented Lodge, Serengeti",
        meals: "إقامة كاملة (جميع الوجبات)",
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
        title: "فوهة نجورونجورو",
        description: "تتجهون جنوباً إلى منطقة نجورونجورو المحمية للنزول المصحوب بدليل إلى داخل الفوهة. تضم أرضية الفوهة — الممتدة على 260 كيلومتراً مربعاً من المروج والغابات والبحيرة الصودية — القائمة الخماسية الكبرى بأكملها كسكان دائمين، بما في ذلك نحو 25 من وحيد القرن الأسود، ما يجعل نجورونجورو أحد الأماكن القليلة الموثوقة في تنزانيا لمشاهدة وحيد القرن في البرية.",
        accommodation: "Ngorongoro Farm House, Karatu",
        meals: "إقامة كاملة (جميع الوجبات)",
        insiderFact: "تعمل جدران فوهة نجورونجورو كسياج طبيعي — إذ تقضي معظم الحيوانات حياتها بأكملها داخل أرضيتها البالغة 260 كيلومتراً مربعاً، ما يفسر الكثافة الاستثنائية للحياة البرية فيها.",
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
        title: "حديقة تارانجيري الوطنية وأروشا",
        description: "تتجهون إلى تارانجيري لجولة سفاري صباحية بين أروع قطعان الفيلة في تنزانيا. يجتذب نهر تارانجيري مئات الفيلة خلال الموسم الجاف، وتُعد أشجار الباوباب القديمة المتناثرة في المشهد الطبيعي من بين أقدم الكائنات الحية في أفريقيا. ثم تواصلون الطريق إلى أروشا لقضاء ليلتكم الأخيرة.",
        accommodation: "Kahawa House, Arusha",
        meals: "إقامة كاملة (جميع الوجبات)",
        insiderFact: "تضم تارانجيري واحدة من أعلى كثافات الفيلة في أفريقيا خارج موسم الأمطار — إذ يُعد مشهد قطعان تضم 50 إلى 200 فيل على امتداد النهر أمراً معتاداً.",
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
        title: "المغادرة من أروشا",
        description: "تُنقَلون إلى مطار أروشا أو مطار كليمنجارو الدولي لرحلتكم التالية عائدين إلى وطنكم.",
        accommodation: "لا ينطبق",
        meals: "الإفطار"
      }
    ]
  },
  {
    slug: "2-day-selous-safari-from-zanzibar",
    name: "سفاري نيريري لمدة يومين من زنجبار",
    duration: 2,
    destinations: [
      "nyerere",
      "zanzibar"
    ],
    type: "beach_extension",
    bestMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    priceFrom: 1957.50,
    groupSize: {
      min: 2,
      max: 6
    },
    badge: "popular",
    bestFor: [
      "couples",
      "short-break"
    ],
    metaTitle: "سفاري نيريري لمدة يومين من زنجبار | إضافة للحياة البرية في البر الرئيسي | EWA Safari Outfitters",
    metaDescription: "رحلة طيران ذهاباً وإياباً من زنجبار إلى حديقة نيريري الوطنية — رحلة سفاري بالقارب على نهر روفيجي، وسفاري سيراً على الأقدام وجولة سفاري بالمركبة، لتعودوا إلى الشاطئ بحلول فترة بعد الظهر. ثلاث فئات، ابتداءً من 1,957.50 دولار أمريكي للشخص.",
    overview: [
      "مُحدَّثة لموسم 2027. لست بحاجة للتخلي عن عطلتك في زنجبار لمشاهدة الحياة البرية في البر الرئيسي — فهذه الإضافة التي تمتد يومين تأخذك إلى حديقة نيريري الوطنية وتعيدك دون أن تخسر أكثر من ليلة واحدة على الشاطئ.",
      "تغطي رحلة طيران ذهاباً وإياباً التنقل في الاتجاهين، لتهبطوا في أكبر محمية للحياة البرية في أفريقيا من أجل رحلة سفاري بالقارب بعد الظهر على نهر روفيجي، عبر برك أفراس النهر ومعابر الفيلة، تليها سفاري سيراً على الأقدام وجولة سفاري في الصباح الباكر، قبل التحليق عائدين إلى زنجبار في الوقت المناسب لاستعادة فترة بعد ظهركم على الرمال."
    ],
    highlights: [
      "رحلة طيران ذهاباً وإياباً من زنجبار — دون الحاجة لأي تنقل بري",
      "رحلة سفاري بالقارب على نهر روفيجي عند الوصول بعد الظهر — كثيراً ما يصنفها الزوار لأول مرة أعلى من جولات السفاري بالمركبة نفسها",
      "سفاري سيراً على الأقدام وجولة سفاري في اليوم الثاني، بتوقيت يتزامن مع ذروة نشاط الحيوانات المفترسة",
      "العودة إلى الشاطئ بحلول فترة بعد الظهر — إذ تتسع رحلة السفاري بأكملها في البر الرئيسي ضمن ليلة واحدة فقط خارج زنجبار",
      "كل مستويات الراحة متاحة، من المريح والمباشر إلى الاستثنائي حقاً، دون تغيير ولو ساعة واحدة من برنامج الرحلة نفسه"
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
        trail: 1957.50,
        reserve: 2086.50,
        sovereign: 2860.50
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
        trail: 1572.00,
        reserve: 1679.50,
        sovereign: 2324.50
      },
      {
        pax: 6,
        trail: 1565.42,
        reserve: 1672.92,
        sovereign: 2317.92
      }
    ],
    included: [
      "رحلة طيران ذهاباً وإياباً زنجبار–نيريري–زنجبار",
      "جميع رسوم الحديقة والامتياز",
      "رحلة سفاري القارب على نهر روفيجي",
      "سفاري السير على الأقدام وجولة السفاري",
      "دليل محترف طوال الرحلة",
      "إقامة كاملة (جميع الوجبات) كما هو مذكور",
      "المواصلات من وإلى المطار"
    ],
    includedCategorized: {
      transfers: [
        "رحلة طيران ذهاباً وإياباً زنجبار–نيريري–زنجبار",
        "المواصلات من وإلى المطار"
      ],
      accommodationMeals: [
        "إقامة كاملة (جميع الوجبات) كما هو مذكور"
      ],
      guidingGameDrives: [
        "جميع رسوم الحديقة والامتياز",
        "رحلة سفاري القارب على نهر روفيجي",
        "سفاري السير على الأقدام وجولة السفاري",
        "دليل محترف طوال الرحلة"
      ]
    },
    excluded: [
      "الرحلات الجوية الدولية",
      "تأشيرة دخول تنزانيا (حوالي 50 دولاراً أمريكياً لمعظم الجنسيات)",
      "التأمين على السفر",
      "الإكراميات والبقشيش",
      "المستلزمات الشخصية والمشروبات خارج نطاق الإقامة الكاملة القياسية"
    ],
    excludedCategorized: [
      "الرحلات الجوية الدولية",
      "تأشيرة دخول تنزانيا (حوالي 50 دولاراً أمريكياً لمعظم الجنسيات)",
      "التأمين على السفر",
      "الإكراميات للدليل وطاقم المخيم",
      "المستلزمات الشخصية وخدمة الغسيل ورسوم الهاتف"
    ],
    notes: [
      "الأسعار المعروضة للشخص الواحد بنظام مشاركة غرفة مزدوجة/توأم؛ وتُطبَّق رسوم إضافية عند طلب غرفة فردية.",
      "الحد الأدنى لحجم المجموعة شخصان لضمان جدوى النقل الجوي.",
      "تخضع الإقامة والأسعار لمدى التوافر، وقد تتغير بحسب تاريخ السفر المحدد.",
      "تحدد الحكومة رسوم الحدائق الوطنية في تنزانيا، وهي عرضة للتغيير دون إشعار مسبق."
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول إلى نيريري",
        description: "تحلقون من زنجبار مباشرة إلى حديقة نيريري الوطنية — التي كانت تُعرف سابقاً بمحمية سيلوس، وهي أكبر منطقة محمية في أفريقيا بمساحة 54,600 كيلومتر مربع. وفي فترة بعد الظهر، رحلة سفاري بالقارب على نهر روفيجي، تتخلل برك أفراس النهر وتمر بضفاف تكتظ بالتماسيح، بينما تشرب الفيلة والجواميس عند حافة الماء.",
        accommodation: "Serena Mivumo River Lodge أو Rufiji River Camp أو Roho ya Selous (بحسب الفئة)",
        meals: "إقامة كاملة (جميع الوجبات)",
        insiderFact: "تُعد حديقة نيريري الوطنية (المعروفة سابقاً بمحمية سيلوس) أكبر مساحة من سويسرا — وهي واحدة من أعظم مناطق البرية في العالم، ولا تستقبل سوى جزء بسيط من أعداد الزوار الذين تستقبلهم حدائق شمال تنزانيا.",
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
        title: "سفاري السير على الأقدام، وجولة سفاري، والعودة إلى زنجبار",
        description: "سفاري سيراً على الأقدام في الصباح الباكر تليها جولة سفاري عبر المحمية، بتوقيت يتزامن مع ذروة نشاط الحيوانات المفترسة، قبل رحلة عودتكم الجوية إلى زنجبار في الوقت المناسب لاستعادة فترة بعد الظهر على الشاطئ.",
        accommodation: "لا ينطبق",
        meals: "الإفطار والغداء"
      }
    ],
    faq: [
      {
        q: "كيف يمكن أصلاً القيام بسفاري لمدة يومين انطلاقاً من زنجبار؟",
        a: "لأن التنقل يتم جواً لا براً. فرحلة طيران مباشرة تضعكم داخل حديقة نيريري الوطنية في غضون ساعتين من مغادرة فندقكم على الشاطئ، وتعيدكم الرحلة نفسها — دون أن يستهلك القيادة البرية أياً من وقتكم في أي من الاتجاهين."
      },
      {
        q: "هل سنشاهد فعلاً حياة برية في زيارة قصيرة كهذه؟",
        a: "نعم — كثيراً ما يصنف الزوار لأول مرة رحلة سفاري القارب على نهر روفيجي عند الوصول كأبرز لحظات الرحلة بأكملها، كما أن سفاري السير على الأقدام وجولة السفاري في الصباح الباكر من اليوم الثاني موقوتة تحديداً مع ذروة نشاط الحيوانات المفترسة."
      },
      {
        q: "ما الفرق بين الفئات الثلاث؟",
        a: "تتطابق الرحلات الجوية والأنشطة والمسار في الفئات الثلاث جميعها. أما ما يتغير فهو المخيم: تحافظ فئة Wilderness Trail على الراحة والبساطة، وتضيف فئة Wilderness Reserve مساحة أكبر وإطلالة على النهر، بينما تضعكم فئة Wilderness Sovereign في أبرز منشأة على هذا المسار."
      },
      {
        q: "كم يتغير السعر بحسب حجم المجموعة؟",
        a: "بشكل ملموس — إذ تُوزَّع التكاليف الثابتة (كالمواصلات والدليل) على أفراد المجموعة، فينخفض السعر للفرد الواحد بشكل خاص عند الانتقال من مسافرَين إلى ثلاثة."
      },
      {
        q: "ما الذي يشمله السعر، وما الذي لا يشمله؟",
        a: "يشمل: رحلات الطيران ذهاباً وإياباً بين زنجبار ونيريري، وجميع رسوم الحديقة والامتياز، ورحلة سفاري القارب، وسفاري السير على الأقدام وجولة السفاري، والإقامة الكاملة، ودليل محترف طوال الرحلة. ولا يشمل: الرحلات الجوية الدولية، ورسوم التأشيرة، والتأمين على السفر، والإكراميات، والمصروفات الشخصية."
      },
      {
        q: "هل ليلة واحدة كافية حقاً، أم ينبغي التفكير في إقامة أطول؟",
        a: "صُمم هذا البرنامج خصيصاً للمسافرين الذين لا يرغبون في التضحية بأكثر من ليلة واحدة من عطلتهم الشاطئية — وإذا كان لديكم وقت أطول، فإن برامجنا الأطول للدائرة الجنوبية تمنح نيريري المعالجة الأشمل متعددة الأيام التي تستحقها أيضاً."
      }
    ]
  },
  {
    slug: "4-day-tarangire-ngorongoro-lake-eyasi",
    name: "سفاري تارانجيري ونجورونجورو وبحيرة إياسي لمدة 4 أيام",
    duration: 4,
    destinations: [
      "tarangire",
      "ngorongoro"
    ],
    type: "big_five_game_drives",
    bestMonths: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
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
    metaDescription: "سفاري خاصة في تنزانيا لمدة 4 أيام — قطعان الفيلة في تارانجيري، ونزول كامل ليوم واحد إلى فوهة نجورونجورو، وبعد ظهر ثقافي مع شعب الهادزابي. تبدأ الأسعار من 1,250 دولارًا للشخص الواحد.",
    overview: [
      "تكفي أربعة أيام للجمع بين الحياة البرية في تنزانيا وتجربة لن تجدوها في أي برنامج آخر نقدمه: أمسية مع قبيلة الهادزابي، إحدى آخر مجتمعات الصيد وجمع الثمار في العالم.",
      "تبدأ الرحلة بجولة سفاري بعد الظهر عبر مشهد تارانجيري المرصع بأشجار الباوباب وقطعان الفيلة، ثم تتجه جنوباً إلى بحيرة إياسي، حيث تنضمون إلى فرقة صيد من الهادزابي عبر الأدغال وتزورون حدادي الداتوغا الذين ما زالوا يطرقون الأدوات يدوياً. ويمنحكم نزول يستغرق يوماً كاملاً إلى فوهة نجورونجورو مشاهدة القائمة الخماسية الكبرى، بما في ذلك واحدة من تجمعات وحيد القرن الأسود القليلة الموثوقة في البلاد، قبل العودة بالسيارة إلى أروشا. وستقضون ليلتين متتاليتين في النُّزل ذاته بكاراتو، ما يعني تعبئة أمتعة أقل ووقتاً أطول لمشاهدة ما أمامكم فعلياً — مقدمة مُحكمة ومتوازنة الإيقاع لكل من الحياة البرية في تنزانيا وثقافتها الحية."
    ],
    highlights: [
      "حديقة تارانجيري الوطنية — قطعان الفيلة تحت أشجار الباوباب القديمة",
      "نزول كامل مصحوب بدليل إلى فوهة نجورونجورو (القائمة الخماسية الكبرى)",
      "أمسية ثقافية مع الهادزابي — إحدى آخر مجتمعات الصيد وجمع الثمار الباقية في العالم",
      "زيارة حدادي الداتوغا عند بحيرة إياسي، وهي حرفة تقليدية لم تتغير منذ قرون",
      "ليلتان في النُّزل ذاته بكاراتو — لتقليل التعبئة والتنقل"
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
      "جميع رسوم دخول الحدائق ومناطق الحفاظ على البيئة",
      "التجربة الثقافية في بحيرة إياسي (مرشد من الهادزابي والداتوغا)",
      "جميع جولات السفاري بمركبة دفع رباعي خاصة",
      "دليل محترف طوال الرحلة",
      "جميع الوجبات المحددة",
      "الإقامة وفق برنامج الرحلة",
      "المواصلات من وإلى المطار وبين أماكن الإقامة"
    ],
    includedCategorized: {
      transfers: [
        "المواصلات من وإلى المطار وبين أماكن الإقامة"
      ],
      accommodationMeals: [
        "جميع الوجبات المحددة",
        "الإقامة وفق برنامج الرحلة"
      ],
      guidingGameDrives: [
        "جميع رسوم دخول الحدائق ومناطق الحفاظ على البيئة",
        "التجربة الثقافية في بحيرة إياسي (مرشد من الهادزابي والداتوغا)",
        "جميع جولات السفاري بمركبة دفع رباعي خاصة",
        "دليل محترف طوال الرحلة"
      ]
    },
    excluded: [
      "الرحلات الجوية الدولية",
      "تأشيرة دخول تنزانيا (حوالي 50 دولاراً أمريكياً لمعظم الجنسيات)",
      "التأمين على السفر",
      "الإكراميات والبقشيش",
      "الأنشطة الاختيارية (تتبع وحيد القرن، سفاري السير على الأقدام)"
    ],
    excludedCategorized: [
      "الرحلات الجوية الدولية",
      "تأشيرة دخول تنزانيا (حوالي 50 دولاراً أمريكياً لمعظم الجنسيات)",
      "التأمين على السفر",
      "الإكراميات للدليل وطاقم النُّزل",
      "الأنشطة الاختيارية (تتبع وحيد القرن بحوالي 120 دولاراً أمريكياً للشخص، سفاري السير على الأقدام بحوالي 59 دولاراً أمريكياً للشخص)",
      "المستلزمات الشخصية وخدمة الغسيل ورسوم الهاتف"
    ],
    notes: [
      "الأسعار المعروضة للشخص الواحد بنظام مشاركة غرفة مزدوجة/توأم؛ وتُطبَّق رسوم إضافية عند طلب غرفة فردية.",
      "تخضع الإقامة والأسعار لمدى التوافر، وقد تتغير بحسب تاريخ السفر المحدد.",
      "تحدد الحكومة رسوم الحدائق الوطنية ومناطق الحفاظ على البيئة في تنزانيا، وهي عرضة للتغيير دون إشعار مسبق.",
      "يلزم دفع عربون بنسبة 10% لتأكيد الحجز، ويُستحق باقي المبلغ قبل 28 يوماً من موعد المغادرة."
    ],
    itinerary: [
      {
        day: 1,
        title: "أروشا ← حديقة تارانجيري الوطنية",
        description: "تنطلقون بالسيارة من أروشا إلى حديقة تارانجيري الوطنية لجولة سفاري كاملة بعد الظهر. وتُعد تارانجيري من أكثر حدائق تنزانيا التي لا تُقدَّر حق قدرها — ففي الموسم الجاف، يصبح نهر تارانجيري المصدر الموثوق الوحيد للمياه على امتداد مئات الكيلومترات، فيجتذب أكبر تجمعات الفيلة في شرق أفريقيا. وتتناثر أشجار الباوباب القديمة عبر المشهد الطبيعي، وبعضها يفوق عمره الألف عام. ثم تعودون إلى أروشا في المساء.",
        accommodation: "Kahawa House, Arusha",
        meals: "العشاء والإفطار",
        insiderFact: "تُعد قطعان الفيلة في تارانجيري من بين الأكبر في أفريقيا، إذ تتجمع مواسمياً أعداد تتراوح بين 300 و500 فيل حول النهر خلال الأشهر الجافة.",
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
        title: "التجربة الثقافية في بحيرة إياسي وكاراتو",
        description: "تتجهون بالسيارة إلى بحيرة إياسي لقضاء أمسية مع الهادزابي — إحدى آخر مجتمعات الصيد وجمع الثمار الباقية في العالم، الذين ما زالوا يعيشون بالطريقة ذاتها التي عاش بها أسلافهم منذ عشرات آلاف السنين. ترافقون فرقة صيد من الهادزابي عبر الأدغال، ثم تزورون حدادي الداتوغا الذين يصنعون الحلي والأدوات التقليدية بتقنيات لم تتغير منذ قرون. ثم تواصلون الطريق إلى نُزلكم في كاراتو.",
        accommodation: "Ngorongoro Farm House, Karatu",
        meals: "إقامة كاملة (جميع الوجبات)",
        insiderFact: "يتحدث الهادزابي لغة تعتمد على أصوات النقر، وهم من بين حفنة قليلة من المجتمعات حول العالم التي ما زالت تعيش أساساً على الصيد وجمع الثمار.",
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
        title: "يوم كامل في فوهة نجورونجورو",
        description: "نزول كامل اليوم مصحوب بدليل إلى فوهة نجورونجورو — أكبر فوهة بركانية سليمة في العالم، وموقع مدرج في قائمة التراث العالمي لليونسكو. وتشكل أرضية الفوهة، الممتدة على 260 كيلومتراً مربعاً، نظاماً بيئياً قائماً بذاته يضم القائمة الخماسية الكبرى في تنزانيا بأكملها كسكان دائمين، بما في ذلك واحدة من آخر التجمعات القابلة للحياة من وحيد القرن الأسود في البلاد.",
        accommodation: "Ngorongoro Farm House, Karatu",
        meals: "إقامة كاملة (جميع الوجبات)",
        insiderFact: "يُعد تجمع وحيد القرن الأسود في نجورونجورو — نحو 25 فرداً — من أسهل التجمعات وصولاً في تنزانيا، إذ تجعل أرضية الفوهة المفتوحة المشاهدة هنا أكثر احتمالاً بكثير من الأدغال.",
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
        title: "العودة إلى أروشا والمغادرة",
        description: "تعودون بالسيارة إلى أروشا عبر المرتفعات الزراعية. ثم تُنقَلون إلى مطار أروشا أو مطار كليمنجارو الدولي لرحلتكم التالية.",
        accommodation: "لا ينطبق",
        meals: "الإفطار والغداء"
      }
    ]
  },
  {
    slug: "5-day-kenya-safari",
    name: "سفاري كينيا لمدة 5 أيام — بوابة الجحيم وبحيرة ناكورو وماساي مارا",
    duration: 5,
    destinations: [
      "masai-mara",
      "nairobi"
    ],
    type: "big_five_game_drives",
    bestMonths: ['Jul', 'Aug', 'Sep', 'Oct'],
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
    metaDescription: "سفاري كينية مدتها 5 أيام — ركوب الدراجات بين الحيوانات البرية في بوابة الجحيم، وطيور الفلامينغو ووحيد القرن في بحيرة ناكورو، ويومان كاملان في ماساي مارا. تبدأ الأسعار من 1,520 دولارًا للشخص الواحد.",
    overview: [
      "تضعكم معظم برامج كينيا داخل مركبة منذ اليوم الأول؛ أما هذا البرنامج فيبدأ بكم على دراجة هوائية، تجذّفون بين الحمير الوحشية والزرافات دون زجاج أمامي يفصلكم عنها.",
      "تفتتح الرحلة حديقة بوابة الجحيم الوطنية — إحدى الحدائق القليلة في كينيا التي يمكنكم فيها المشي أو ركوب الدراجة بحرية بين الحياة البرية — تليها طيور بحيرة نايفاشا ومناظر الوادي المتصدع الطبيعية، ثم بحيرة ناكورو، إحدى آخر معاقل البلاد لكل من وحيد القرن الأسود والأبيض إلى جانب أسراب الفلامنغو الشهيرة فيها. ويخصص النصف الثاني من الرحلة يومين كاملين في ماساي مارا، المسرح الأبرز للحياة البرية في كينيا، ومنصة عبورات الهجرة الكبرى من يوليو إلى أكتوبر. ومتاحة عبر ثلاث فئات للإقامة، من المخيمات المريحة إلى الفخامة المطلقة، فهذا مسار من خمسة أيام صُمم ليكون متنوعاً لا متسرعاً."
    ],
    highlights: [
      "حديقة بوابة الجحيم الوطنية — الحديقة الوحيدة في كينيا التي تسمح بركوب الدراجة والمشي بحرية بين الحمير الوحشية والزرافات والجواميس",
      "طيور بحيرة نايفاشا ومناظر الوادي المتصدع العظيم الطبيعية",
      "بحيرة ناكورو — شواطئ الفلامنغو وإحدى آخر محميات وحيد القرن الأسود والأبيض في كينيا",
      "يومان كاملان في ماساي مارا (الهجرة الكبرى من يوليو إلى أكتوبر)",
      "ثلاث فئات للإقامة، من المخيمات المريحة إلى الفخامة المطلقة"
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
      "جميع رسوم دخول الحدائق ورسوم الحفاظ على البيئة",
      "جميع جولات السفاري بمركبة دفع رباعي خاصة",
      "دليل محترف طوال الرحلة",
      "نشاط ركوب الدراجة/المشي في بوابة الجحيم",
      "جميع الوجبات المحددة",
      "الإقامة وفق برنامج الرحلة",
      "المواصلات من وإلى المطار وبين أماكن الإقامة"
    ],
    includedCategorized: {
      transfers: [
        "المواصلات من وإلى المطار وبين أماكن الإقامة"
      ],
      accommodationMeals: [
        "جميع الوجبات المحددة",
        "الإقامة وفق برنامج الرحلة"
      ],
      guidingGameDrives: [
        "جميع رسوم دخول الحدائق ورسوم الحفاظ على البيئة",
        "جميع جولات السفاري بمركبة دفع رباعي خاصة",
        "دليل محترف طوال الرحلة",
        "نشاط ركوب الدراجة/المشي في بوابة الجحيم"
      ]
    },
    excluded: [
      "الرحلات الجوية الدولية",
      "تأشيرة دخول كينيا (حوالي 30 دولاراً أمريكياً لمعظم الجنسيات)",
      "التأمين على السفر",
      "الإكراميات والبقشيش",
      "الأنشطة الاختيارية (رحلة المنطاد، الزيارة الثقافية لقبيلة الماساي)"
    ],
    excludedCategorized: [
      "الرحلات الجوية الدولية",
      "تأشيرة دخول كينيا (حوالي 30 دولاراً أمريكياً لمعظم الجنسيات)",
      "التأمين على السفر",
      "الإكراميات للدليل وطاقم النُّزل",
      "رحلة المنطاد فوق ماساي مارا (اختيارية، بحوالي 450 دولاراً أمريكياً للشخص)",
      "المستلزمات الشخصية وخدمة الغسيل ورسوم الهاتف"
    ],
    notes: [
      "الأسعار المعروضة للشخص الواحد بنظام مشاركة غرفة مزدوجة/توأم؛ وتُطبَّق رسوم إضافية عند طلب غرفة فردية.",
      "الأسعار مقدَّرة وفق السوق؛ واختيارات النُّزل مقترحة وتخضع لتأكيد التوافر.",
      "تخضع الإقامة والأسعار لمدى التوافر، وقد تتغير بحسب تاريخ السفر المحدد.",
      "تحدد الحكومة رسوم الحدائق الوطنية في كينيا، وهي عرضة للتغيير دون إشعار مسبق.",
      "يلزم دفع عربون بنسبة 10% لتأكيد الحجز، ويُستحق باقي المبلغ قبل 28 يوماً من موعد المغادرة."
    ],
    itinerary: [
      {
        day: 1,
        title: "نيروبي ← بوابة الجحيم وبحيرة نايفاشا",
        description: "تنطلقون بالسيارة من نيروبي إلى الوادي المتصدع العظيم وصولاً إلى حديقة بوابة الجحيم الوطنية — إحدى أكثر حدائق كينيا فرادة، حيث يمكن للزوار ركوب الدراجة أو المشي بحرية بين الحمير الوحشية والزرافات والجواميس دون مركبة. ويخلق واديها الصخري الأحمر المثير وفتحات البخار الحرارية الأرضية مشهداً طبيعياً لا مثيل له في أي مكان آخر في شرق أفريقيا. وتقضون فترة بعد الظهر عند بحيرة نايفاشا قبل تسجيل الوصول.",
        accommodation: "Lake Naivasha Lodge",
        meals: "إقامة كاملة (جميع الوجبات)",
        insiderFact: "سُميت بوابة الجحيم بهذا الاسم نسبة إلى فجوة في المنحدرات كانت تستخدمها قطعان الحيوانات البرية سابقاً كممر للهجرة — وهي، بشكل فريد في كينيا، إحدى الحدائق القليلة التي يمكن للزوار فيها المشي وركوب الدراجة بحرية بين الحيوانات البرية.",
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
        title: "حديقة بحيرة ناكورو الوطنية",
        description: "تتجهون بالسيارة إلى حديقة بحيرة ناكورو الوطنية. تجتذب البحيرة القلوية أسراباً هائلة من طيور الفلامنغو في موسمها، فتكسو الشواطئ باللون الوردي. والحديقة معلنة رسمياً محمية لوحيد القرن — أحد الأماكن القليلة الموثوقة في كينيا لمشاهدة وحيد القرن الأسود والأبيض في جولة واحدة. كما تقيم فيها الأسود والنمور وزرافات روتشيلد.",
        accommodation: "Lake Nakuru Lodge",
        meals: "إقامة كاملة (جميع الوجبات)",
        insiderFact: "كانت بحيرة ناكورو أول محمية لوحيد القرن تُعلن رسمياً في كينيا — إذ يحمي محيطها المسيّج نحو 25 من وحيد القرن الأسود وأكثر من 70 من وحيد القرن الأبيض من الصيد الجائر.",
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
        title: "محمية ماساي مارا الوطنية — الوصول",
        description: "تتجهون بالسيارة إلى محمية ماساي مارا الوطنية — أشهر منطقة للحياة البرية في كينيا وواحدة من أعظم وجهات السفاري في العالم. يشق نهر مارا المحمية إلى قسمين؛ وتضم غاباتها وسهولها المفتوحة تجمعات مقيمة على مدار العام من الأسود والفهود الصيادة والنمور والفيلة والجواميس. وتغطي جولة سفاري فور الوصول أنشط المناطق في وقت متأخر من بعد الظهر.",
        accommodation: "Masai Mara Lodge",
        meals: "إقامة كاملة (جميع الوجبات)",
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
        title: "يوم كامل في ماساي مارا",
        description: "يوم كامل من جولات السفاري عبر ماساي مارا. فالمحمية موطن لواحد من أكثر الأنظمة البيئية المفترسة إنتاجية في أفريقيا على مدار العام — ومن يوليو إلى أكتوبر، تجلب الهجرة الكبرى أكثر من 1.5 مليون رأس من النو تعبر نهر مارا في واحد من أكثر مشاهد الطبيعة دراماتيكية. ويتنقل بكم دليلكم عبر المحمية استناداً إلى تتبع لحظي وخبرة محلية تمتد لعقود.",
        accommodation: "Masai Mara Lodge",
        meals: "إقامة كاملة (جميع الوجبات)",
        insiderFact: "لا تُعد عبورات نهر مارا خلال الهجرة الكبرى أحداثاً مجدولة — إذ تتجمع قطعان النو عند الضفة لساعات قبل أن تقرر العبور. ويقرأ دليلكم سلوك القطيع ليضعكم في الموضع المناسب مسبقاً.",
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
        title: "العودة إلى نيروبي والمغادرة",
        description: "تعودون بالسيارة إلى نيروبي والوادي المتصدع العظيم يلوح في الأفق. ثم تُنقَلون إلى مطار جومو كينياتا الدولي لرحلتكم التالية.",
        accommodation: "لا ينطبق",
        meals: "الإفطار"
      }
    ]
  },
  {
    slug: "9-day-honeymoon-safari-zanzibar",
    name: "سفاري شهر العسل لمدة 9 أيام وهروب شاطئي إلى زنجبار",
    duration: 9,
    destinations: [
      "tarangire",
      "ngorongoro",
      "serengeti",
      "zanzibar"
    ],
    type: "beach_extension",
    bestMonths: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Dec', 'Jan', 'Feb'],
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
    metaDescription: "شهر عسل تنزاني مدته 9 أيام يجمع بين تارانجيري ونزول فوهة نجورونجورو ويومين في سيرينغيتي مع امتداد شاطئي في زنجبار. تبدأ الأسعار من 3,847 دولارًا للشخص الواحد.",
    overview: [
      "خمسة أيام من السفاري، وأربع ليالٍ على الشاطئ، ولا منبه صباحي واحد لم تختاراه بأنفسكما — هذا شهر عسل صُمم حول الإيقاع بقدر ما صُمم حول المناظر الطبيعية.",
      "يمر النصف الأول من الرحلة، المخصص للسفاري، عبر قطعان الفيلة وغابة الباوباب القديمة في تارانجيري، ويومين كاملين في أراضي الأسود والنمور بسيرينغيتي الوسطى، ونزولاً مصحوباً بدليل إلى فوهة نجورونجورو المدرجة في قائمة التراث العالمي لليونسكو، قبل أن تستبدل رحلة طيران قصيرة مركبة السفاري بشاطئ نونغوي في الطرف الشمالي من زنجبار. وتترك أربع ليالٍ هادئة هناك مجالاً للغوص، أو رحلة بقارب الداو عند الغروب، أو زيارة ستون تاون، أو لا شيء على الإطلاق. وتُختار فئتا الإقامة، Wilderness Trail وWilderness Sovereign، خصيصاً لتناسب إيقاع شهر العسل — دون تسرع ودون برنامج مثقل بالمواعيد."
    ],
    highlights: [
      "قطعان الفيلة وغابة الباوباب القديمة في تارانجيري",
      "يومان كاملان في قلب أراضي الحيوانات المفترسة بسيرينغيتي الوسطى",
      "نزول مصحوب بدليل إلى فوهة نجورونجورو، المدرجة في قائمة التراث العالمي لليونسكو",
      "أربع ليالٍ تختتم الرحلة على شاطئ نونغوي في زنجبار",
      "فئتا إقامة، كلتاهما مصممة لإيقاع شهر العسل — دون أي تسرع"
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
      "جميع رسوم دخول الحدائق ورسوم الحفاظ على البيئة",
      "جميع جولات السفاري بمركبة دفع رباعي خاصة",
      "دليل محترف طوال مرحلة السفاري",
      "رحلة طيران من أروشا إلى زنجبار",
      "جميع الوجبات المحددة",
      "الإقامة وفق برنامج الرحلة",
      "المواصلات من وإلى المطار وبين أماكن الإقامة"
    ],
    includedCategorized: {
      transfers: [
        "رحلة طيران من أروشا إلى زنجبار",
        "المواصلات من وإلى المطار وبين أماكن الإقامة"
      ],
      accommodationMeals: [
        "جميع الوجبات المحددة",
        "الإقامة وفق برنامج الرحلة"
      ],
      guidingGameDrives: [
        "جميع رسوم دخول الحدائق ورسوم الحفاظ على البيئة",
        "جميع جولات السفاري بمركبة دفع رباعي خاصة",
        "دليل محترف طوال مرحلة السفاري"
      ]
    },
    excluded: [
      "الرحلات الجوية الدولية",
      "رسوم التأشيرة",
      "التأمين على السفر",
      "الإكراميات",
      "الأنشطة الاختيارية (الغوص، جولات ستون تاون، جلسات السبا)"
    ],
    excludedCategorized: [
      "الرحلات الجوية الدولية",
      "رسوم التأشيرة",
      "التأمين على السفر",
      "الإكراميات",
      "الأنشطة الاختيارية (الغوص، جولات ستون تاون، جلسات السبا)",
      "المستلزمات الشخصية وخدمة الغسيل ورسوم الهاتف"
    ],
    notes: [
      "الأسعار المعروضة للشخص الواحد بنظام مشاركة غرفة مزدوجة/توأم؛ وتُطبَّق رسوم إضافية عند طلب غرفة فردية.",
      "تخضع الإقامة والأسعار لمدى التوافر، وقد تتغير بحسب تاريخ السفر المحدد.",
      "تحدد الحكومة رسوم الحدائق الوطنية ومناطق الحفاظ على البيئة في تنزانيا، وهي عرضة للتغيير دون إشعار مسبق.",
      "يلزم دفع عربون بنسبة 30% لتأكيد الحجز، ويُستحق باقي المبلغ قبل 60 يوماً من موعد المغادرة.",
      "تُؤكَّد أسعار الرحلات الداخلية والنُّزل وقت الحجز."
    ],
    faq: [
      {
        q: "هل هذا البرنامج مخصص للأزواج فقط فعلاً، أم يمكن للعائلة والأصدقاء الانضمام؟",
        a: "صُمم أساساً لشخصين، لكن كلتا الفئتين تناسبان أيضاً مجموعات صغيرة من العائلة أو الأصدقاء المحتفلين معاً — وتتدرج الأسعار أعلاه حتى 6 أشخاص."
      },
      {
        q: "ما الفرق بين فئتي الإقامة؟",
        a: "تجمع فئة Wilderness Trail بين نُزل مريحة وحسنة الموقع ونفس المسار والإرشاد المعتمدَين في فئتنا الفاخرة — انغماس كامل دون السعر الأعلى. أما فئة Wilderness Sovereign فترفع مستوى كل محطة إلى بعض أبرز المنشآت في تنزانيا وزنجبار، بما في ذلك Gibb's Farm وKilindi Zanzibar."
      },
      {
        q: "هل يمكنكم ترتيب لمسات خاصة بشهر العسل — كعكة، ورود، عشاء خاص؟",
        a: "نعم — تقدم معظم النُّزل الشريكة لنا باقات خاصة بشهر العسل (نبيذ فوّار، ورود، عشاءات خاصة) عند الطلب. أخبرونا عند الحجز وسنُدرجها ضمن برنامج رحلتكم."
      },
      {
        q: "هل يلزم أن نكون مسافرَين ذوَي خبرة لهذه الرحلة؟",
        a: "على الإطلاق. فكل مرحلة — جولات السفاري، والرحلة الداخلية إلى زنجبار، والإقامة الشاطئية — مُرشدة ومنظمة بالكامل. وهي غالباً أول رحلة كبرى لكثير من الأزواج."
      },
      {
        q: "ما أفضل وقت في السنة لشهر عسل على هذا المسار؟",
        a: "يوفر الموسم الجاف (من يونيو إلى أكتوبر) أكثر ظروف مشاهدة الحياة البرية موثوقية وأهدأ أجواء في زنجبار. ويُعد ديسمبر إلى فبراير بديلاً قوياً مع ازدحام أقل وظروف شاطئية ممتازة."
      },
      {
        q: "هل تكفي أربع ليالٍ في زنجبار؟",
        a: "إنها فترة راحة حقيقية وهادئة بعد خمسة أيام نشطة من السفاري — يجدها معظم الأزواج مثالية تماماً، وإن كان تمديدها ليلة أو ليلتين أمراً سهل الترتيب إذا رغبتما في مزيد من الوقت على الشاطئ."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "أروشا إلى حديقة تارانجيري الوطنية",
        description: "استلام من فندقكم في أروشا، ثم جولة سفاري كاملة اليوم مصحوبة بدليل عبر تارانجيري، لتتبع قطعان الفيلة تحت أشجار الباوباب القديمة، قبل مواصلة الطريق إلى كاراتو لقضاء الليلة.",
        accommodation: "Karatu Lodge",
        meals: "إقامة كاملة (جميع الوجبات)",
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
        title: "كاراتو إلى سيرينغيتي الوسطى",
        description: "تعبرون غابة نجورونجورو بالسيارة مع توقف عند نقطة إطلالة الفوهة، ثم تواصلون الطريق إلى سيرينغيتي الوسطى لجولات سفاري مصحوبة بدليل بعد الظهر.",
        accommodation: "Serengeti Tented Camp",
        meals: "إقامة كاملة (جميع الوجبات)",
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
        title: "يوم كامل في سيرينغيتي الوسطى",
        description: "يوم كامل من الانغماس في سهول سيرينغيتي الوسطى المفتوحة، إحدى أكثر أراضي تنزانيا ثباتاً لمشاهدة الأسود والنمور والفهود الصيادة.",
        accommodation: "Serengeti Tented Camp",
        meals: "إقامة كاملة (جميع الوجبات)",
        insiderFact: "تجعل زمر الأسود المقيمة في وادي سيرونيرا من سيرينغيتي الوسطى أحد أكثر الأماكن موثوقية في أفريقيا لمشاهدة الأسود في أي وقت من السنة — دون الحاجة لتوقيت الهجرة.",
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
        title: "من سيرينغيتي الوسطى إلى فوهة نجورونجورو",
        description: "نزول مصحوب بدليل إلى فوهة نجورونجورو — المدرجة في قائمة التراث العالمي لليونسكو وموطن القائمة الخماسية الكبرى — قبل العودة إلى كاراتو لقضاء الليلة.",
        accommodation: "Karatu Lodge",
        meals: "إقامة كاملة (جميع الوجبات)",
        insiderFact: "تُعد نجورونجورو أحد الأماكن القليلة في تنزانيا التي يمكن فيها مشاهدة وحيد القرن الأسود بشكل موثوق في جولة سفاري واحدة.",
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
        title: "من كاراتو إلى زنجبار",
        description: "صباح هادئ في النُّزل، مع وقت لجولة سير في مزرعة قهوة إن رغبتما، قبل غداء مبكر ونقلكما الخاص إلى زنجبار. ويستقبلكما دليلنا المحلي عند الوصول ويرافقكما إلى شاطئ نونغوي.",
        accommodation: "Nungwi Beach Resort",
        meals: "الإفطار والغداء",
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
        title: "شاطئ نونغوي، زنجبار",
        description: "أول ثلاثة أيام هادئة على رمال زنجبار البيضاء — مفتوحة للغوص، أو رحلة بقارب الداو عند الغروب، أو زيارة ستون تاون، أو الشاطئ ببساطة.",
        accommodation: "Nungwi Beach Resort",
        meals: "بحسب الفئة",
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
        title: "شاطئ نونغوي، زنجبار",
        description: "يوم حر كامل على الشاطئ — الغوص، أو الغطس بالأنبوب، أو عدم فعل أي شيء على الإطلاق.",
        accommodation: "Nungwi Beach Resort",
        meals: "بحسب الفئة",
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
        title: "شاطئ نونغوي، زنجبار",
        description: "يومكما الأخير الكامل في زنجبار — وتُعد رحلة بقارب الداو عند الغروب طريقة مفضلة لاختتام الرحلة.",
        accommodation: "Nungwi Beach Resort",
        meals: "بحسب الفئة",
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
        title: "المغادرة",
        description: "نقل خاص إلى مطار عبيد كرومي الدولي في زنجبار لرحلتكما التالية.",
        accommodation: "لا ينطبق",
        meals: "الإفطار"
      }
    ]
  },
  {
    slug: "10-day-ultimate-great-migration-mara-river-crossing",
    name: "سفاري الهجرة الكبرى المطلقة لمدة 10 أيام — عبور نهر مارا",
    duration: 10,
    destinations: [
      "tarangire",
      "manyara",
      "ngorongoro",
      "serengeti"
    ],
    type: "migration",
    bestMonths: ['Jul', 'Aug', 'Sep', 'Oct'],
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
    metaDescription: "سفاري تنزانية خاصة مدتها 10 أيام محورها عبور نهر مارا خلال الهجرة الكبرى، إضافة إلى تارانجيري ومانيارا ونجورونجورو وسيرينغيتي. تبدأ الأسعار من 4,775 دولارًا للشخص الواحد.",
    overview: [
      "عبورات الأنهار هي الصورة الأكثر طلباً في تصوير الحياة البرية الأفريقية، وهي أيضاً الأقل ضماناً — لذا يفعل هذا البرنامج الأمر الوحيد الذي يحسّن فرصكم فعلياً: يمنحكم ثلاثة أيام كاملة في منطقة العبور بدلاً من يوم واحد.",
      "والتمهيد له أهميته أيضاً. تبدأ الرحلة بقطعان الفيلة في تارانجيري وسفاري نادرة سيراً على الأقدام مصحوبة بدليل، ونزول كامل اليوم إلى فوهة نجورونجورو لمشاهدة القائمة الخماسية الكبرى، وتوقف عند وادي أولدوفاي، موقع بعض أهم أحافير الإنسان القديم التي اكتُشفت على الإطلاق. ومن هناك تتجهون شمالاً إلى أراضي نهر مارا في سيرينغيتي لثلاثة أيام متتالية موضوعة بعناية لالتقاط عبورات الهجرة الكبرى، بدلاً من رمية النرد الواحدة التي تقدمها معظم البرامج الأقصر. وتُبنى فئتا الإقامة، Wilderness Trail وWilderness Sovereign، حول الهدف ذاته: تعظيم فرصة تواجدكم في المكان المناسب حين تقرر القطعان أخيراً خوض النهر."
    ],
    highlights: [
      "قطعان الفيلة في تارانجيري وسفاري مصحوبة بدليل سيراً على الأقدام",
      "نزول كامل اليوم مصحوب بدليل إلى فوهة نجورونجورو",
      "توقف عند وادي أولدوفاي، مهد البشرية",
      "ثلاثة أيام كاملة في أراضي عبور نهر مارا بشمال سيرينغيتي",
      "فئتا إقامة، كلتاهما مصممتان لتعظيم فرصكم في مشاهدة عبور النهر"
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
      "جميع رسوم دخول الحدائق ورسوم الحفاظ على البيئة",
      "جميع جولات السفاري بمركبة دفع رباعي خاصة",
      "دليل محترف طوال الرحلة",
      "رسوم دخول وادي أولدوفاي",
      "جميع الوجبات المحددة",
      "الإقامة وفق برنامج الرحلة",
      "المواصلات من وإلى المطار وبين أماكن الإقامة"
    ],
    includedCategorized: {
      transfers: [
        "المواصلات من وإلى المطار وبين أماكن الإقامة"
      ],
      accommodationMeals: [
        "جميع الوجبات المحددة",
        "الإقامة وفق برنامج الرحلة"
      ],
      guidingGameDrives: [
        "جميع رسوم دخول الحدائق ورسوم الحفاظ على البيئة",
        "جميع جولات السفاري بمركبة دفع رباعي خاصة",
        "دليل محترف طوال الرحلة",
        "رسوم دخول وادي أولدوفاي"
      ]
    },
    excluded: [
      "الرحلات الجوية الدولية",
      "رسوم التأشيرة",
      "التأمين على السفر",
      "الإكراميات",
      "الأنشطة الاختيارية"
    ],
    excludedCategorized: [
      "الرحلات الجوية الدولية",
      "رسوم التأشيرة",
      "التأمين على السفر",
      "الإكراميات",
      "الأنشطة الاختيارية",
      "المستلزمات الشخصية وخدمة الغسيل ورسوم الهاتف"
    ],
    notes: [
      "الأسعار المعروضة للشخص الواحد بنظام مشاركة غرفة مزدوجة/توأم؛ وتُطبَّق رسوم إضافية عند طلب غرفة فردية.",
      "تخضع الإقامة والأسعار لمدى التوافر، وقد تتغير بحسب تاريخ السفر المحدد.",
      "تحدد الحكومة رسوم الحدائق الوطنية ومناطق الحفاظ على البيئة في تنزانيا، وهي عرضة للتغيير دون إشعار مسبق.",
      "يلزم دفع عربون بنسبة 30% لتأكيد الحجز، ويُستحق باقي المبلغ قبل 60 يوماً من موعد المغادرة.",
      "تُحسب أسعار المجموعات لفئة Wilderness Sovereign لعدد 3 إلى 4 ضيوف على أساس باقة مجمّعة، وتُؤكَّد وقت الحجز."
    ],
    faq: [
      {
        q: "ما أفضل وقت لمشاهدة عبورات نهر مارا؟",
        a: "تحدث العبورات عادة من يوليو إلى أكتوبر مع تحرك الهجرة عبر شمال سيرينغيتي، وإن كان التوقيت الدقيق يتفاوت من عام لآخر بحسب هطول الأمطار. ولا شيء مضمون في أي يوم بعينه — وهذا بالضبط سبب تضمين هذا البرنامج ثلاثة أيام كاملة في منطقة العبور بدلاً من يوم واحد."
      },
      {
        q: "لماذا ثلاثة أيام عند نهر مارا بدلاً من يوم واحد فقط؟",
        a: "عبورات الأنهار غير متوقعة — إذ قد تتجمع القطعان عند الضفة لساعات أو أيام قبل أن تقرر العبور. يمنحكم يوم واحد رمية نرد واحدة؛ بينما تحسّن ثلاثة أيام فرصكم بشكل ملموس لتكونوا في المكان المناسب حين يحدث ذلك."
      },
      {
        q: "هل هذا البرنامج مناسب لمن يخوضون سفاري لأول مرة؟",
        a: "نعم — يتصاعد المسار بشكل طبيعي من مشاهدة الحياة البرية الموثوقة والمكثفة في تارانجيري ونجورونجورو قبل الوصول إلى أراضي عبور مارا الأكثر تبايناً، بحيث تُضمن لكم مشاهدة قوية للحياة البرية طوال الرحلة حتى في الأيام دون عبور."
      },
      {
        q: "ما هو وادي أولدوفاي، ولماذا هو مُدرج في البرنامج؟",
        a: "يُعرف وادي أولدوفاي غالباً باسم \"مهد البشرية\"، وهو الموقع الذي اكتُشفت فيه بعض أهم أحافير الإنسان القديم. وهو توقف قصير لكنه آسر حقاً أثناء الطريق بين نجورونجورو وسيرينغيتي."
      },
      {
        q: "ما الفرق بين فئتي الإقامة؟",
        a: "تجمع فئة Wilderness Reserve بين منشآت مريحة وحسنة الموقع ونفس المسار والإرشاد المعتمدَين في فئتنا الفاخرة. أما فئة Wilderness Sovereign فترفع مستوى كل محطة إلى أبرز المخيمات والنُّزل في تنزانيا — وبعضها يقدم أسعار باقة سفاري تدمج جولات سفاري مشتركة مباشرة ضمن إقامتكم."
      },
      {
        q: "هل هذه سفاري خاصة أم مشتركة؟",
        a: "دليلكم ومركبتكم خاصان بمجموعتكم طوال الرحلة، باستثناء جولات السفاري المشتركة في بعض منشآت Wilderness Sovereign المختارة التي تعمل وفق سعر باقة السفاري."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "أروشا",
        description: "تصلون وتُنقَلون إلى أروشا لقضاء ليلة قبل بدء رحلة السفاري.",
        accommodation: "Arusha Lodge",
        meals: "إقامة مع إفطار",
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
        title: "يوم راحة في أروشا",
        description: "يوم حر في أروشا للاستقرار قبل التوجه إلى الحدائق.",
        accommodation: "Arusha Lodge",
        meals: "إقامة كاملة (جميع الوجبات)",
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
        title: "حديقة تارانجيري الوطنية",
        description: "جولة سفاري مصحوبة بدليل عبر تارانجيري، لتتبع أكبر قطعان الفيلة في تنزانيا تحت أشجار الباوباب القديمة.",
        accommodation: "Tarangire Lodge",
        meals: "إقامة كاملة (جميع الوجبات)",
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
        title: "سفاري السير على الأقدام في تارانجيري إلى بحيرة مانيارا ثم كاراتو",
        description: "سفاري صباحية سيراً على الأقدام في تارانجيري، ثم إلى بحيرة مانيارا قبل مواصلة الطريق إلى كاراتو لقضاء الليلة.",
        accommodation: "Karatu Lodge",
        meals: "إقامة كاملة (جميع الوجبات)",
        insiderFact: "تُعد تارانجيري إحدى الحدائق القليلة في تنزانيا التي يُسمح فيها بسفاري السير على الأقدام مصحوبة بدليل — فرصة نادرة لتتبع الحياة البرية سيراً برفقة حارس مسلح.",
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
        title: "فوهة نجورونجورو",
        description: "نزول كامل اليوم مصحوب بدليل إلى فوهة نجورونجورو، لتتبع القائمة الخماسية الكبرى داخل أكبر فوهة بركانية سليمة في العالم.",
        accommodation: "Karatu Lodge",
        meals: "إقامة كاملة (جميع الوجبات)",
        insiderFact: "تُعد نجورونجورو أحد الأماكن القليلة في تنزانيا التي يمكن فيها مشاهدة وحيد القرن الأسود بشكل موثوق في جولة سفاري واحدة.",
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
        title: "من نجورونجورو إلى سيرينغيتي الوسطى (عبر وادي أولدوفاي)",
        description: "عبور منطقة نجورونجورو المحمية مع توقف عند وادي أولدوفاي — الذي يُعرف غالباً بمهد البشرية — قبل مواصلة الطريق إلى سيرينغيتي الوسطى.",
        accommodation: "Serengeti Tented Camp",
        meals: "إقامة كاملة (جميع الوجبات)",
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
        title: "من سيرينغيتي الوسطى إلى شمال سيرينغيتي / نهر مارا",
        description: "تتجهون بالسيارة شمالاً نحو نهر مارا، لدخول أراضي عبور النهر الرئيسية في سيرينغيتي.",
        accommodation: "Mara River Camp",
        meals: "إقامة كاملة (جميع الوجبات)",
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
        title: "يوم كامل لعبور نهر مارا",
        description: "يوم كامل موضوع بعناية لتتبع عبورات الهجرة الكبرى للنهر.",
        accommodation: "Mara River Camp",
        meals: "إقامة كاملة (جميع الوجبات)",
        insiderFact: "لا تُعد عبورات الأنهار أحداثاً مجدولة — إذ قد تتجمع القطعان عند الضفة لساعات قبل أن تقرر العبور. ويقرأ دليلكم سلوك القطيع ليضعكم في الموضع المناسب مسبقاً.",
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
        title: "يوم كامل لعبور نهر مارا",
        description: "يوم كامل ثانٍ في المنطقة ذاتها — فعبورات الأنهار لا تسير وفق جدول، لذا يحسّن هذا اليوم الإضافي فرصكم بشكل ملموس لمشاهدة إحداها.",
        accommodation: "Mara River Camp",
        meals: "إقامة كاملة (جميع الوجبات)",
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
        title: "المغادرة",
        description: "نُقل إلى مهبط كوغاتيندي لرحلتكم التالية.",
        accommodation: "لا ينطبق",
        meals: "الإفطار"
      }
    ]
  },
  {
    slug: "tanzania-photographic-safari",
    name: "سفاري تنزانيا للتصوير الفوتوغرافي — تارانجيري وفوهة نجورونجورو وسيرينغيتي",
    duration: 10,
    destinations: [
      "tarangire",
      "ngorongoro",
      "serengeti"
    ],
    type: "photographic",
    bestMonths: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
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
    metaDescription: "سفاري تصوير تنزانية مدتها 10 أيام بمجموعات صغيرة ومساحة إضافية في المركبة ودليل ملمّ بالإضاءة ومواضع التصوير — تارانجيري ونجورونجورو وسيرينغيتي. تبدأ الأسعار من 4,597 دولارًا للشخص الواحد.",
    overview: [
      "تتحرك معظم رحلات السفاري بسرعة: مشاهدة، بضع لقطات من خلال النافذة، ثم الانتقال إلى المحطة التالية قبل أن يتاح لكم فعلياً وقت لرؤية ما أمامكم. أما هذا البرنامج فمصمم بالاتجاه المعاكس تماماً. بطيء بما يكفي، وبمساحة كافية داخل المركبة، لالتقاط الصورة فعلاً — لا مجرد ذكرى أنكم كدتم تلتقطونها.",
      "على مدى 10 أيام، تمر رحلة السفاري التصويرية هذه عبر أربع من أكثر مناطق شمال تنزانيا مكافأة للمصور. تبدأون بين قطعان الفيلة وأشجار الباوباب القديمة في تارانجيري، ثم تقضون يوماً كاملاً على أرضية فوهة نجورونجورو المكتظة بالحياة البرية، قبل التوجه إلى سيرينغيتي — أولاً السهول الوسطى، إحدى أكثر مناطق القطط الكبيرة موثوقية في القارة، ثم شمالاً إلى أراضي الهجرة، حيث يتحول الضوء إلى اللون الذهبي ولا يكاد الأفق ينتهي. يُبنى كل يوم حول الضوء والموضع والصبر، لا حول قائمة حدائق ينبغي إنجازها.",
      "تبقى المجموعات صغيرة بما يكفي ليحصل كل مصور على صفه الخاص ومساحة عمل حقيقية للعدسة الطويلة، ويرافقكم طوال الرحلة دليل محترف ومعتمد مُدرَّب تحديداً على تموضع التصوير — لا فقط على أماكن تواجد الحيوانات، بل على مكان الضوء عندما تصلون إليها. سواء كنتم تصورون الحياة البرية منذ عشرين عاماً أو تحملون كاميرا جديدة في أول رحلة كبرى لكم، فهذه سفاري تنزانية صُممت لمن يريد العودة بمجلد صور يفخر به فعلاً، لا مجرد هاتف مليء باللقطات العابرة."
    ],
    tagline: "مملوكة محلياً منذ عام 2022 · مرشدون محترفون معتمدون · رحلات مصممة خصيصاً، لا مواعيد مجموعات ثابتة",
    bestTimeToTravel: "من يونيو إلى أكتوبر للاستفادة من ضوء الموسم الجاف وتجمعات الفيلة في تارانجيري؛ ومن أواخر يونيو إلى سبتمبر لهجرة شمال سيرينغيتي واحتمالية عبور الأنهار",
    whyDifferent: {
      heading: "لماذا تختلف هذه التجربة عن السفاري العادية",
      paragraphs: [
        "تُبنى السفاري العامة حول مشاهدة الحياة البرية. أما هذه فتُبنى حول تصويرها — وهذا يغيّر تقريباً كل شيء في طريقة سير الأيام.",
        "تُوضع المركبات وفق الضوء والزاوية، لا القرب فحسب، بما يعني أنكم قد تقتربون من مشاهدة ما من اتجاه غير متوقع إذا كان ذلك يضمن سقوط الشمس بالشكل الصحيح. ويُقاس الوقت عند كل مشاهدة بمقدار الصبر الذي تحتاجه الصورة، لا بإيقاع جدول ثابت — فإذا بدت الزمرة على وشك التحرك، تنتظرون. ولا يكتفي دليلكم بالعثور على الحيوانات لكم؛ بل يقرأ أين سيسقط الضوء بعد عشرين دقيقة، وأين ستصفو الخلفية من الأدغال المشتتة، ومتى يستحق الأمر البقاء في موضعكم بدلاً من مطاردة نداء لاسلكي جديد.",
        "إذا لم تخوضوا سفاري تصويرية من قبل، فهذا هو الفرق الذي ستشعرون به على الفور تقريباً: تسرع أقل، وتأمل أكثر."
      ]
    },
    destinationHighlights: {
      heading: "أبرز محطات التصوير",
      items: [
        {
          title: "تارانجيري — الفيلة وأشجار الباوباب",
          text: "هنا تبدأ الرحلة، وهو مكان لطيف وسخي لبدء إيجاد إيقاعكم مع الكاميرا. تتحرك قطعان ضخمة من الفيلة بين أشجار باوباب قديمة تستحق ظلالها وحدها نصف بطاقة الذاكرة، ويغلف الموسم الجاف كل شيء بضوء دافئ ومغبر في أواخر بعد الظهر. وهو مكافئ تماماً للقطات البيئية الواسعة كما هو للبورتريهات القريبة للحياة البرية — تذكير جيد، في بداية الرحلة، بترك العدسة الطويلة أحياناً وتصوير المشهد الطبيعي الذي تعيش فيه الفيلة."
        },
        {
          title: "فوهة نجورونجورو — الكثافة والدراما",
          text: "يوم كامل من العمل على أرضية الفوهة، وخلافاً لأي مكان آخر تقريباً في تنزانيا، لن تحتاجوا للبحث الجاد عن مواضيع هنا — إذ يضع النظام البيئي المغلق للفوهة الأسود والفيلة والجواميس والضباع وطيور الفلامنغو، وبقليل من الحظ وحيد القرن الأسود المهدد بالانقراض، جميعها ضمن مشهد طبيعي مضغوط ودرامي. وبالنسبة للزوار لأول مرة، غالباً ما يكون هذا هو اليوم الذي تترسخ فيه الثقة. أما للمصورين ذوي الخبرة، فهو يوم الاختيار بين خيارات جيدة أكثر من اللازم."
        },
        {
          title: "سيرينغيتي الوسطى — الحيوانات المفترسة",
          text: "أكثر مناطق القطط الكبيرة موثوقية في تنزانيا على مدار العام، والمحطة في هذا البرنامج المصممة للصبر. تمنحكم التلال الصخرية والسهول المفتوحة وأطراف الغابات فرصاً متكررة لمشاهدة الأسود والنمور والفهود الصيادة — لا مجرد مشاهدة بعيدة عبر الأعشاب، بل سلوكاً حقيقياً: نمر ينزل من شجرة، أشبال تتصارع لعباً في الظل، فهد صياد يقرأ الأفق قبل الصيد."
        },
        {
          title: "شمال سيرينغيتي — أراضي الهجرة",
          text: "أكثر مراحل الرحلة توحشاً. وبحسب التوقيت، قد تجدون أنفسكم تصورون قطعان النو تتجمع عند حافة النهر، أو التوتر قبل العبور، أو حيوانات مفترسة تتعقب القطعان عبر المروج المفتوحة تحت سماء شاسعة مفتوحة. لا يمكن ضمان العبورات أبداً — فالطبيعة لا تسير وفق برنامج — لكن الضوء والمشهد الطبيعي هنا استثنائيان حتى في يوم هادئ."
        },
        {
          title: "ما ينبغي إحضاره",
          text: "يُنصح بإحضار جسم كاميرا DSLR أو بلا مرآة، وعدسة بمدى واسع إلى متوسط للمشاهد الطبيعية واللقطات البيئية، وعدسة تليفوتو لا تقل عن 400 مم — وتكافئ عدسة 500-600 مم المواضيع البعيدة والبورتريهات المضغوطة للحياة البرية بشكل خاص. وتُعد عدسة 70-200 مم مفيدة للمشاهدات القريبة ولقطات السرد من داخل المركبة. جديدون على تصوير الحياة البرية؟ لا داعي للقلق بشأن الوصول بعتاد احترافي كامل — سيُشارَك دليل تعبئة وعتاد كامل، مصمم خصيصاً لمعداتكم، مع الضيوف المؤكَّدين قبل المغادرة."
        }
      ]
    },
    highlights: [
      "التعامل مع كل مشاهدة بشكل صحيح، بمساحة ووقت داخل المركبة لتكوين اللقطة بدلاً من التقاطها والانتقال",
      "السفر ضمن مجموعة صغيرة مركزة على التصوير بدلاً من سفاري عامة متنوعة الاهتمامات",
      "تغطية أقوى مناطق التصوير في تنزانيا — الفيلة وأشجار الباوباب، وكثافة الفوهة، وحيوانات سيرينغيتي المفترسة، وأراضي الهجرة — في رحلة واحدة",
      "الحصول على إرشاد عملي ميداني حول التموضع والضوء والإعدادات، لا مجرد سائق يعرف أماكن الحيوانات"
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
      "جميع رسوم الحدائق والامتيازات ومناطق الحفاظ على البيئة",
      "المركبة والدليل والوقود لكل يوم من أيام السفاري",
      "المواصلات من وإلى المطار",
      "مياه الشرب",
      "إقامة الدليل",
      "تغطية الإخلاء الطبي الطارئ"
    ],
    excluded: [
      "الرحلات الجوية الدولية",
      "رسوم التأشيرة",
      "التأمين على السفر",
      "الإكراميات",
      "استئجار الكاميرا/العدسة"
    ],
    notes: [
      "الأسعار المعروضة للشخص الواحد بنظام مشاركة غرفة مزدوجة.",
      "يضمن عربون بنسبة 30% حجزكم، ويُستحق باقي المبلغ قبل 60 يوماً من موعد المغادرة.",
      "صُمم هذا البرنامج حول مخيمات الهجرة في شمال سيرينغيتي، المتاحة تقريباً من يونيو إلى أكتوبر؛ أما الرحلات في الموسم المنخفض فتعتمد مساراً مختلفاً قائماً على ندوتو.",
      "تخضع الإقامة والأسعار لمدى التوافر، وقد تتغير بحسب تاريخ السفر المحدد ضمن الموسم.",
      "تحدد الحكومة رسوم الحدائق الوطنية ومناطق الحفاظ على البيئة في تنزانيا، وهي عرضة للتغيير دون إشعار مسبق."
    ],
    faq: [
      {
        q: "هل يلزم أن أكون مصوراً ذا خبرة للانضمام؟",
        a: "لا — صُمم هذا البرنامج ليناسب جميع المستويات. فالإرشاد الميداني عملي ويتكيف مع نقطة انطلاقكم، سواء كانت أول رحلة جادة لكم للحياة البرية أو معدات متقدمة تتقنونها بالفعل."
      },
      {
        q: "كم تكلفة هذه السفاري التصويرية؟",
        a: "تبدأ فئة Wilderness Reserve من 4,597 دولاراً أمريكياً للشخص في الموسم المنخفض، لترتفع إلى 6,556 دولاراً في الموسم المرتفع. أما فئة Wilderness Sovereign، بنُزلها المرتقاة طوال الرحلة بما في ذلك Ngorongoro Lodge (مجموعة Meliá) ومخيمات Siringit الفاخرة، فتبدأ من 5,692 دولاراً للشخص في الموسم المنخفض و9,668 دولاراً في الموسم المرتفع. ويشمل السعر جميع رسوم الحدائق والحفاظ على البيئة وجولات السفاري والوجبات والدليل والمواصلات من وإلى المطار — اطلبوا عرض سعر مخصصاً لتواريخكم الدقيقة."
      },
      {
        q: "كيف تختلف هذه عن سفاري تنزانية عادية؟",
        a: "الإيقاع وتموضع المركبة والوقت المخصص لكل مشاهدة كلها مبنية على التصوير أولاً — توقفات أطول، وصبر أكبر، وإرشاد يركز على الضوء والتكوين لا على رصد الحياة البرية فقط."
      },
      {
        q: "هل هذه رحلة خاصة أم مجموعة؟",
        a: "مصممة خصيصاً وفق تواريخكم، مع الحفاظ على حجم مجموعة صغير عمداً ليحصل كل مصور على مساحة عمل مناسبة — والحد الأقصى الدقيق وخيارات الرحلة الخاصة متاحة عند الطلب."
      },
      {
        q: "ما أفضل وقت في السنة لهذا البرنامج؟",
        a: "يمنح الفترة من يونيو إلى أكتوبر أكثر ضوء جفافاً وأقوى تجمعات لفيلة تارانجيري؛ بينما تُعد الفترة من أواخر يونيو إلى سبتمبر أقوى نافذة لنشاط الهجرة وعبور الأنهار في شمال سيرينغيتي."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول إلى أروشا",
        location: "أروشا",
        description: "تهبطون في مطار كليمنجارو الدولي، وتتيحون لأروشا أن تُدخلكم بلطف في الأجواء قبل أن تبدأ السفاري فعلياً. وفي المساء، تجلسون مع دليلكم على عشاء لإحاطة كاملة — لا تقتصر على المسار المقبل، بل حوار حقيقي حول معداتكم ومستوى خبرتكم وما تأملون العودة به. للزوار لأول مرة، هذه هي اللحظة لطرح كل الأسئلة التي ادخرتموها؛ وللمصورين ذوي الخبرة، هنا يبدأ دليلكم بتصميم الرحلة وفق طريقة عملكم الفعلية.",
        accommodation: "Kahawa House, Arusha",
        meals: "العشاء",
        insiderFact: "هذه لحظة مناسبة لتسليم دليلكم أي قائمة تصوير محددة — نوعاً بعينه، سلوكاً، أو أسلوب تكوين — بحيث يُبنى المسار حولها منذ اليوم الأول.",
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
        title: "حديقة تارانجيري الوطنية",
        location: "حديقة تارانجيري الوطنية",
        description: "يومان كاملان لترسيخ قدمكم خلف الكاميرا بين قطعان الفيلة وسهول تارانجيري المرصعة بأشجار الباوباب. توقعوا غباراً معلقاً بلون ذهبي في ضوء أواخر بعد الظهر، وفيلة تتحرك دون استعجال بين الأشجار، ووقتاً وافراً للتجريب بين اللقطات الطبيعية الواسعة والبورتريهات القريبة للحياة البرية قبل أن يتسارع إيقاع السفاري.",
        accommodation: "Burunge Tented Lodge",
        meals: "جميع الوجبات",
        insiderFact: "الغبار المُضاء من الخلف هو إحدى السمات المميزة لتارانجيري — والتصوير باتجاه الشمس في أواخر بعد الظهر، بدلاً من الابتعاد عنها، غالباً ما يمنح أفضل اللقطات.",
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
        title: "حديقة تارانجيري الوطنية",
        location: "حديقة تارانجيري الوطنية",
        description: "يومان كاملان لترسيخ قدمكم خلف الكاميرا بين قطعان الفيلة وسهول تارانجيري المرصعة بأشجار الباوباب. توقعوا غباراً معلقاً بلون ذهبي في ضوء أواخر بعد الظهر، وفيلة تتحرك دون استعجال بين الأشجار، ووقتاً وافراً للتجريب بين اللقطات الطبيعية الواسعة والبورتريهات القريبة للحياة البرية قبل أن يتسارع إيقاع السفاري.",
        accommodation: "Burunge Tented Lodge",
        meals: "جميع الوجبات",
        insiderFact: "يفوق عمر بعض أشجار الباوباب في تارانجيري الألف عام بكثير — وتستحق لقطة بزاوية واسعة تضم ظل الشجرة كاملاً في مقابل السماء المفتوحة.",
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
        title: "الانتقال إلى نجورونجورو",
        location: "فوهة نجورونجورو",
        description: "يوم أقصر وأهدأ، إذ تتركون خلفكم أراضي تارانجيري المنخفضة وتصعدون نحو مرتفعات نجورونجورو. وفي المساء وقت لإحاطة مناسبة حول نزول الفوهة غداً — ماذا سيفعل الضوء، وكيف سيُوزَّع إيقاع اليوم، وما ينبغي تجهيزه قبل فتح البوابات عند الفجر.",
        accommodation: "Ngorongoro Serena Safari Lodge",
        meals: "جميع الوجبات",
        insiderFact: "تبقى أرضية الفوهة أبرد بعدة درجات من حافتها، حتى عند منتصف النهار — واليدان الباردتان تُبطئان تغيير العدسات، لذا احتفظوا بقفازات في متناول اليد للنزول المبكر.",
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
        title: "يوم كامل على أرضية فوهة نجورونجورو",
        location: "فوهة نجورونجورو",
        description: "انطلاقة مبكرة ويوم كامل من العمل في واحدة من أكثر بيئات الحياة البرية كثافة في القارة. إنه يوم خيارات لا بحث — أسود في المروج المفتوحة، فيلة أمام جدران الفوهة، طيور فلامنغو متجمعة بلون وردي على حافة بحيرة صودية — ومهمة دليلكم هنا أقل ما تكون عن العثور على الحيوانات وأكثر ما تكون عن مساعدتكم على اختيار وجهة العدسة التالية.",
        accommodation: "Ngorongoro Serena Safari Lodge",
        meals: "جميع الوجبات",
        insiderFact: "تعني جدران الفوهة المغلقة أن الضوء يتصرف بشكل مختلف عن السهول المفتوحة — إذ تلين الظلال في وقت أبعد من الصباح مما قد تتوقعونه في أماكن أخرى.",
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
        title: "سيرينغيتي الوسطى",
        location: "سيرينغيتي الوسطى",
        description: "يومان هادئان في أقوى أراضي الحيوانات المفترسة في تنزانيا على مدار العام. هنا يبدأ الصبر بتحقيق نتائج حقيقية: البقاء مع زمرة أسود حتى يحدث شيء ما، تتبع المسار المرجح لنمر عائد إلى فريسته، انتظار قراءة الفهد الصياد البطيئة للسهول قبل أن يقرر الانطلاق. وتمنحكم التلال الصخرية والمروج المفتوحة والغابات المتناثرة مجموعة متنوعة حقاً من الخلفيات للعمل معها.",
        accommodation: "Kubu Kubu Tented Lodge",
        meals: "جميع الوجبات",
        insiderFact: "تستحق التلال الصخرية تفقداً في أول الضوء تحديداً — إذ كثيراً ما تستخدم الأسود والنمور أسطح الصخور كنقطة مراقبة دافئة قبل أن تشتد حرارة اليوم.",
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
        title: "سيرينغيتي الوسطى",
        location: "سيرينغيتي الوسطى",
        description: "يومان هادئان في أقوى أراضي الحيوانات المفترسة في تنزانيا على مدار العام. هنا يبدأ الصبر بتحقيق نتائج حقيقية: البقاء مع زمرة أسود حتى يحدث شيء ما، تتبع المسار المرجح لنمر عائد إلى فريسته، انتظار قراءة الفهد الصياد البطيئة للسهول قبل أن يقرر الانطلاق. وتمنحكم التلال الصخرية والمروج المفتوحة والغابات المتناثرة مجموعة متنوعة حقاً من الخلفيات للعمل معها.",
        accommodation: "Kubu Kubu Tented Lodge",
        meals: "جميع الوجبات",
        insiderFact: "المركبة المتوقفة بمحرك مطفأ أقل احتمالاً بكثير لإخافة فهد صياد يطارد فريسته من مركبة تتحرك باستمرار — والصبر هنا يُثمر فعلاً في جودة الصورة.",
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
        title: "شمال سيرينغيتي",
        location: "شمال سيرينغيتي",
        description: "يومان كاملان في أكثر أجزاء البرنامج توحشاً واتساعاً. وبحسب حركة القطعان، قد تقضون بعد ظهر كامل في مشاهدة قطعان النو تتجمع بتوتر عند نقطة عبور، أو تستمتعون ببساطة باتساع السهول المفتوحة تحت سماء يبدو أنها لا تنتهي. لا شيء هنا مضمون، لكن كل شيء هنا درامي — حتى اللحظات الهادئة لها وزنها.",
        accommodation: "Mara Under Canvas",
        meals: "جميع الوجبات",
        insiderFact: "قطيع متوتر ومتجمع عند ضفة النهر هو عادة أفضل إشارة على قرب حدوث العبور — وسيقرأ دليلكم لغة جسد القطيع قبل تموضع المركبة.",
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
        title: "شمال سيرينغيتي",
        location: "شمال سيرينغيتي",
        description: "يومان كاملان في أكثر أجزاء البرنامج توحشاً واتساعاً. وبحسب حركة القطعان، قد تقضون بعد ظهر كامل في مشاهدة قطعان النو تتجمع بتوتر عند نقطة عبور، أو تستمتعون ببساطة باتساع السهول المفتوحة تحت سماء يبدو أنها لا تنتهي. لا شيء هنا مضمون، لكن كل شيء هنا درامي — حتى اللحظات الهادئة لها وزنها.",
        accommodation: "Mara Under Canvas",
        meals: "جميع الوجبات",
        insiderFact: "من السهل إغفال اللقطات البيئية الواسعة للسهول المفتوحة عند مطاردة الحدث — ويستحق الأمر تخصيص بضع لقطات عمداً لاتساع المشهد الطبيعي نفسه.",
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
        title: "المغادرة",
        location: "أروشا",
        description: "صباح أخير في الميدان، والكاميرات جاهزة حتى آخر دقيقة ممكنة، قبل النقل عائدين إلى أروشا ثم إلى مطار كليمنجارو الدولي لرحلتكم التالية عائدين إلى وطنكم — عشرة أيام، وأربعة مشاهد طبيعية، وبطاقة ذاكرة ستقضون أسابيع في فرزها.",
        accommodation: "لا ينطبق",
        meals: "الإفطار"
      }
    ]
  },
  {
    slug: "authentic-exclusive-kenya",
    name: "كينيا الأصيلة والحصرية — أمبوسيلي وسامبورو وماساي مارا",
    duration: 9,
    destinations: [
      "amboseli",
      "samburu",
      "masai-mara"
    ],
    type: "big_five_game_drives",
    bestMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
    metaTitle: "سفاري كينيا الأصيلة والحصرية | أمبوسيلي وسامبورو وماساي مارا | EWA Safari Outfitters",
    metaDescription: "سفاري كينية خاصة لمدة 9 أيام عبر أمبوسيلي وسامبورو والجنوب الغربي الهادئ من ماساي مارا — مخيمات للاستخدام الحصري، ودليلان مخصصان، وانغماس ثقافي حقيقي. مصممة خصيصاً من قِبل مشغل سفاري مملوك محلياً في شرق أفريقيا.",
    overview: [
      "تكافئ كينيا المسافرين الذين يختارون الهدوء والخصوصية — وهذا البرنامج مبني بالكامل حول هذه الفكرة. تسعة أيام، وثلاثة مشاهد طبيعية، ولا شيء يُشارَك مع أي أحد خارج مجموعتكم: مخيمات للاستخدام الحصري منصوبة في ظل كليمنجارو بأمبوسيلي، وإقامة غنية ثقافياً في أراضي سامبورو الجافة الشمالية، وزاوية خاصة من ماساي مارا لا يصلها معظم الزوار أبداً.",
      "هذه ليست سفاري قائمة إنجازات. إنها ثلاث كينيات مختلفة عمداً، تُمنح كل منها وقتاً كافياً للاستقرار فيها فعلياً: فيلة الأنياب الضخمة وخلفيات كليمنجارو في أمبوسيلي، والآبار المُغنَّاة والثقافة السامبورية الحية في الشمال، وكثافة الحياة البرية في الزاوية الجنوبية الغربية قليلة الزيارة من مارا. ويرافقكم فريق الإرشاد الموثوق ذاته طوال الرحلة، بحيث تتراكم التجربة — والثقة — عبر الرحلة بأكملها بدلاً من إعادة البدء في كل محطة.",
      "بصفتنا مشغلاً وُلد في تنزانيا ويتخذ من أروشا مقراً له، ونعمل الآن على توسيع مسارنا الكيني، نصمم هذا المسار بالطريقة ذاتها التي نصمم بها برامج شرق أفريقيا لدينا: مصمم خصيصاً وفق تواريخكم، وخاص بالكامل، ويقوده مرشدون محترفون معتمدون يعرفون الأرض جيداً."
    ],
    tagline: "مملوكة محلياً منذ عام 2022 · مرشدون محترفون معتمدون · رحلات مصممة خصيصاً، لا مواعيد مجموعات ثابتة",
    bestTimeToTravel: "على مدار العام؛ وترتفع رسوم محمية ماساي مارا من 1 يوليو إلى 31 ديسمبر (موسم ذروة هجرة النو)",
    whyDifferent: {
      heading: "لماذا يختلف هذا البرنامج",
      paragraphs: [
        "تنقلكم معظم المسارات الكينية بين نُزل مزدحمة ومعروفة داخل المحميات الرئيسية. أما هذا المسار فيميل نحو الأطراف الأكثر هدوءاً من كل وجهة — قطعان الفيلة في أمبوسيلي مقابل كليمنجارو، وإقامة في سامبورو مبنية على تبادل ثقافي حقيقي لا محطة مُعدة مسبقاً، ومحميات الجنوب الغربي في مارا بدلاً من ازدحام المركبات في المحمية الرئيسية خلال ذروة الهجرة.",
        "يرافقكم فريق الإرشاد ذاته طوال الأيام التسعة كاملة. وهذا الاستمرار له أهمية أكبر مما يبدو — فبحلول اليوم الرابع، يكون الفريق قد عرف بالفعل كيف تحبون السفر، وما الإيقاع الذي تفضلونه، وما تأملون رؤيته لاحقاً، بدلاً من البدء من جديد في كل محطة."
      ]
    },
    destinationHighlights: {
      heading: "أبرز الوجهات",
      items: [
        {
          title: "أمبوسيلي",
          text: "بعض أفضل خلفيات كليمنجارو في شرق أفريقيا، وتجمع مقيم من \"فيلة الأنياب الضخمة\" — فيلة بعاج كبير استثنائياً، وهي ندرة حقيقية في أي مكان آخر بالقارة. وتدعم مستنقعات أمبوسيلي وسهولها المفتوحة بعضاً من أكثر قطعان الفيلة وضوحاً للمشاهدة في أفريقيا، إلى جانب الأسود والفهود الصيادة والزرافات."
        },
        {
          title: "سامبورو",
          text: "إقامة مبنية حول تبادل ثقافي حقيقي لا عرض مُعد مسبقاً. يقود محاربو سامبورو التقليديون (المورانز) أنشطة تتراوح بين جولات ثقافية سيراً على الأقدام ومشاهدة الحياة البرية عبر النظام البيئي الجاف لسامبورو — الموطن لأنواع لا توجد تقريباً في أي مكان آخر بكينيا، بما في ذلك حمار وحشي غريفي والزرافة الشبكية وظبي الجيرينوك."
        },
        {
          title: "ماساي مارا — محميات الجنوب الغربي",
          text: "تُعد على نطاق واسع أعظم محمية في أفريقيا، وتُختبر هنا من طرفها الجنوبي الغربي الأهدأ بدلاً من مارا الوسطى المزدحمة. حياة برية مقيمة على مدار العام، وقطعان مهاجرة في موسمها، وعدد أقل بشكل ملحوظ من المركبات عند كل مشاهدة."
        }
      ]
    },
    highlights: [
      "السفر بخصوصية وحصرية — مخيمكم ومركبتكم الخاصان، لا مسار نُزل مشترك",
      "الجمع بين سفاري الصيد الكبير والانغماس الثقافي الحقيقي، لا زيارة قرية رمزية",
      "مشاهدة فيلة أمبوسيلي الكبيرة مقابل كليمنجارو وكثافة الحياة البرية في مارا دون ازدحام المحمية الرئيسية",
      "السفر برفقة فريق الإرشاد الموثوق ذاته طوال الأيام التسعة كاملة، لا سائق جديد في كل محطة"
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
      "إقامة كاملة (جميع الوجبات) طوال الرحلة",
      "دليل سفاري محترف مخصص لكامل البرنامج",
      "جميع رسوم دخول الحدائق والمحميات",
      "جولات سفاري نهارية وليلية",
      "جولات سير على الأقدام مصحوبة بدليل",
      "أنشطة ثقافية في سامبورو",
      "الاستقبال والمساعدة في مطار جومو كينياتا الدولي",
      "جميع المواصلات من وإلى المطارات والمهابط",
      "تغطية الإخلاء الطبي الطارئ"
    ],
    excluded: [
      "المشروبات الفاخرة",
      "الأنشطة غير المذكورة أعلاه",
      "الرحلات الجوية الدولية ورسوم التأشيرة",
      "الإكراميات"
    ],
    notes: [
      "الأسعار المعروضة للشخص الواحد بنظام مشاركة غرفة مزدوجة/توأم؛ وتُطبَّق رسوم إضافية عند طلب غرفة فردية.",
      "ترتفع رسوم حديقتَي ماساي مارا وأمبوسيلي خلال موسم الذروة (يوليو إلى ديسمبر)، وهو ما ينعكس في أسعار الموسم المرتفع.",
      "تخضع الإقامة والأسعار لمدى التوافر، وقد تتغير بحسب تاريخ السفر المحدد ضمن الموسم.",
      "تحدد الحكومة رسوم الحدائق الوطنية والمحميات في كينيا، وهي عرضة للتغيير دون إشعار مسبق."
    ],
    faq: [
      {
        q: "هل هذه سفاري خاصة أم جماعية؟",
        a: "خاصة بالكامل طوال الرحلة. مركبتكم ودليلكم مخصصان لمجموعتكم وحدها طوال الأيام التسعة كاملة — لا يُشاركان مع أي طرف آخر أبداً، ومصممان خصيصاً وفق تواريخ سفركم بدلاً من رحلة مجموعة بموعد ثابت."
      },
      {
        q: "هل هذه السفاري مناسبة لزوار كينيا لأول مرة؟",
        a: "نعم. فاستمرارية فريق الإرشاد ذاته عبر الوجهات الثلاث تجعل هذا البرنامج بنية مريحة للمسافرين لأول مرة، بينما يكافئ عمق وخصوصية كل محطة أيضاً محبي السفاري الأكثر خبرة."
      },
      {
        q: "كم تكلفة هذه السفاري الكينية؟",
        a: "تبدأ الأسعار من 1,926 دولاراً أمريكياً للشخص لمجموعة من ستة مسافرين في الموسم الأخضر (المنخفض)، وترتفع مع صغر حجم المجموعة وفي الموسم المرتفع (من 1 يوليو إلى 31 ديسمبر، حين ترتفع أيضاً رسوم محمية ماساي مارا). اطلبوا عرض سعر مخصصاً وفق تواريخ سفركم الدقيقة وحجم مجموعتكم."
      },
      {
        q: "ما أفضل وقت في السنة لهذا البرنامج؟",
        a: "يعمل هذا المسار بشكل جيد على مدار العام. يجلب الموسم المرتفع (يوليو إلى ديسمبر) ذروة نشاط هجرة النو في ماساي مارا إلى جانب رسوم محمية أعلى؛ بينما تقدم بقية العام مشاهدة قوية للحياة البرية المقيمة عبر الوجهات الثلاث بتكلفة أقل."
      },
      {
        q: "هل يمكن دمج هذا البرنامج مع سفاري تنزانية؟",
        a: "نعم — بصفتنا مشغلاً يعمل في كل من تنزانيا وكينيا، نصمم بانتظام برامج مشتركة لشرق أفريقيا. اسألونا عن دمج هذا المسار مع سفاري تنزانية أو امتداد شاطئي إلى زنجبار."
      },
      {
        q: "كيف ننتقل بين أمبوسيلي وسامبورو وماساي مارا؟",
        a: "عبر رحلات طيران داخلية — الطريقة الأكثر كفاءة لتغطية هذا المسار دون خسارة أيام في تنقلات برية طويلة بين الوجهات."
      },
      {
        q: "هل هذه سفاري خاصة أم جولة جماعية؟",
        a: "خاصة بالكامل — مركبتكم ودليلكم الخاصان طوال الأيام التسعة كاملة، مصممة وفق تواريخكم بدلاً من رحلة مجموعة بموعد ثابت."
      },
      {
        q: "هل يمكن تعديل هذا البرنامج؟",
        a: "نعم — هذه نقطة انطلاق لا باقة ثابتة. يمكن تخصيص الوجهات والإيقاع ونمط الإقامة جميعها وفق الطريقة التي ترغبون بالسفر بها فعلياً."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول إلى نيروبي",
        location: "نيروبي",
        description: "تهبطون في مطار جومو كينياتا الدولي، حيث سيكون فريق السفاري بانتظاركم لاستقبالكم ومساعدتكم عبر إجراءات الوصول قبل نقلكم إلى نيروبي لقضاء الليلة. أمسية أولى هادئة — إذ تبدأ السفاري نفسها جدياً غداً، بمجرد إقلاعكم نحو أمبوسيلي.",
        accommodation: "Nairobi Hotel",
        meals: "العشاء",
        insiderFact: "تقع نيروبي على ارتفاع يقارب 1,700 متر، لذا فإن أمسياتها أبرد مما قد تتوقعونه بهذا القرب من خط الاستواء — يستحق الأمر تعبئة سترة خفيفة لليلة الوصول.",
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
        title: "أمبوسيلي",
        location: "أمبوسيلي",
        description: "تأخذكم رحلة طيران قصيرة إلى أمبوسيلي، حيث تتحرك قطعان الفيلة عبر السهول المفتوحة وكليمنجارو يرتفع خلفها في يوم صافٍ. وعلى مدى يومين كاملين، توقعوا جولات سفاري نهارية وليلية وجولات سير على الأقدام مصحوبة بدليل، مع فرصة حقيقية لمشاهدة بعض \"فيلة الأنياب الضخمة\" التي يشتهر بها هذا النظام البيئي.",
        accommodation: "Amboseli Camp",
        meals: "جميع الوجبات",
        insiderFact: "تثير قاع البحيرة الجاف في أمبوسيلي غباراً ناعماً خلال النهار — ووضع وشاح أو غطاء خفيف على الأنف والفم يجعل جولات السفاري أكثر راحة.",
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
        title: "أمبوسيلي",
        location: "أمبوسيلي",
        description: "تأخذكم رحلة طيران قصيرة إلى أمبوسيلي، حيث تتحرك قطعان الفيلة عبر السهول المفتوحة وكليمنجارو يرتفع خلفها في يوم صافٍ. وعلى مدى يومين كاملين، توقعوا جولات سفاري نهارية وليلية وجولات سير على الأقدام مصحوبة بدليل، مع فرصة حقيقية لمشاهدة بعض \"فيلة الأنياب الضخمة\" التي يشتهر بها هذا النظام البيئي.",
        accommodation: "Amboseli Camp",
        meals: "جميع الوجبات",
        insiderFact: "عادة ما تكون رؤية كليمنجارو أوضح في الساعة الأولى بعد شروق الشمس، قبل أن تُكوّن حرارة النهار غيوماً حول القمة.",
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
        title: "سامبورو",
        location: "سامبورو",
        description: "شمالاً إلى سامبورو، وإيقاع مختلف تماماً. يميل اليومان هنا نحو تبادل ثقافي حقيقي إلى جانب مشاهدة الحياة البرية — جولات سير مصحوبة بدليل ووقت مع مجتمع سامبورو، الذي اتخذت عائلاته من هذا المشهد الطبيعي وطناً لأجيال، ضمن نظام بيئي جاف لا مثيل له في أي مكان آخر بكينيا.",
        accommodation: "Samburu Camp",
        meals: "جميع الوجبات",
        insiderFact: "تقع سامبورو في مكان أخفض وأكثر حرارة بشكل ملحوظ من أمبوسيلي — وكثيراً ما يكشف قاع نهر إواسو نجيرو الجاف عن نشاط للحياة البرية أكثر مما يكشفه الماء نفسه.",
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
        title: "سامبورو",
        location: "سامبورو",
        description: "شمالاً إلى سامبورو، وإيقاع مختلف تماماً. يميل اليومان هنا نحو تبادل ثقافي حقيقي إلى جانب مشاهدة الحياة البرية — جولات سير مصحوبة بدليل ووقت مع مجتمع سامبورو، الذي اتخذت عائلاته من هذا المشهد الطبيعي وطناً لأجيال، ضمن نظام بيئي جاف لا مثيل له في أي مكان آخر بكينيا.",
        accommodation: "Samburu Camp",
        meals: "جميع الوجبات",
        insiderFact: "لا توجد \"الخمسة المميزة\" في سامبورو — حمار وحشي غريفي والزرافة الشبكية وظبي الجيرينوك والمها البيسا والنعامة الصومالية — تقريباً في أي مكان آخر بكينيا، لذا احتفظوا بقائمة تدقيق للأنواع في متناول اليد.",
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
        title: "ماساي مارا (الجنوب الغربي)",
        location: "ماساي مارا (الجنوب الغربي)",
        description: "ثلاثة أيام كاملة في جزء من مارا لا يراه معظم الزوار أبداً. فبدلاً من المحمية الوسطى المزدحمة، تكونون في محميات الجنوب الغربي — حياة برية مقيمة على مدار العام، وقطعان مهاجرة في موسمها، وإيقاع أهدأ وأكثر شخصية بشكل ملحوظ لكل جولة سفاري.",
        accommodation: "Masai Mara Conservancy Camp",
        meals: "جميع الوجبات",
        insiderFact: "تعمل محميات الجنوب الغربي وفق حدودها الخاصة لكثافة المركبات، وهو جزء كبير من سبب شعور المشاهدات هنا بأنها أكثر خصوصية من المحمية الرئيسية.",
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
        title: "ماساي مارا (الجنوب الغربي)",
        location: "ماساي مارا (الجنوب الغربي)",
        description: "ثلاثة أيام كاملة في جزء من مارا لا يراه معظم الزوار أبداً. فبدلاً من المحمية الوسطى المزدحمة، تكونون في محميات الجنوب الغربي — حياة برية مقيمة على مدار العام، وقطعان مهاجرة في موسمها، وإيقاع أهدأ وأكثر شخصية بشكل ملحوظ لكل جولة سفاري.",
        accommodation: "Masai Mara Conservancy Camp",
        meals: "جميع الوجبات",
        insiderFact: "كثيراً ما تصادف الجولات الصباحية الباكرة في المحميات حيوانات مفترسة ما زالت نشطة من برودة الليل قبل أن تشتد الحرارة.",
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
        title: "ماساي مارا (الجنوب الغربي)",
        location: "ماساي مارا (الجنوب الغربي)",
        description: "ثلاثة أيام كاملة في جزء من مارا لا يراه معظم الزوار أبداً. فبدلاً من المحمية الوسطى المزدحمة، تكونون في محميات الجنوب الغربي — حياة برية مقيمة على مدار العام، وقطعان مهاجرة في موسمها، وإيقاع أهدأ وأكثر شخصية بشكل ملحوظ لكل جولة سفاري.",
        accommodation: "Masai Mara Conservancy Camp",
        meals: "جميع الوجبات",
        insiderFact: "اسألوا دليلكم عن إفطار في الأدغال أو توقف لمشروب عند الغروب في يومكم الكامل الأخير — إذ تسمح المحميات بتجارب خارج المركبة لا تسمح بها المحمية الرئيسية عادة.",
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
        title: "نيروبي / المغادرة",
        location: "نيروبي / المغادرة",
        description: "صباح أخير في مارا قبل رحلة طيرانكم عائدين إلى نيروبي، ثم إلى مطار جومو كينياتا الدولي لرحلتكم الدولية التالية — ثلاث كينيات مختلفة تماماً، وقصة واحدة متصلة.",
        accommodation: "لا ينطبق",
        meals: "الإفطار"
      }
    ]
  },
  {
    slug: "classic-kenya-safari",
    name: "سفاري كينيا الكلاسيكية — ماساي مارا والوادي المتصدع وأمبوسيلي",
    duration: 7,
    destinations: [
      "masai-mara",
      "lake-nakuru",
      "amboseli"
    ],
    type: "big_five_game_drives",
    bestMonths: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
    metaTitle: "سفاري كينيا الكلاسيكية | ماساي مارا والوادي المتصدع وأمبوسيلي | EWA Safari Outfitters",
    metaDescription: "سفاري كينية كلاسيكية لمدة 7 أيام عبر ماساي مارا وبحيرة صودية في الوادي المتصدع وخلفية كليمنجارو في أمبوسيلي — خاصة ومتوازنة الإيقاع، ومصممة خصيصاً من قِبل مشغل سفاري مملوك محلياً في شرق أفريقيا.",
    overview: [
      "ثمة سبب يجعل هذا المسار يُوصف دوماً بـ\"الكلاسيكي\" — فهو البرنامج الذي يستحق هذه الكلمة فعلاً. سبعة أيام، وثلاثة مشاهد طبيعية، وكل واحد منها وجه مختلف حقاً لكينيا: دراما السهول في ماساي مارا، والشاطئ الساكن الغني بالطيور لبحيرة صودية في الوادي المتصدع، ومشهد بطاقة بريدية من الفيلة وكليمنجارو في أمبوسيلي لاختتام الرحلة.",
      "هذا ليس مساراً متسرعاً لإنجاز قائمة. إنه مبني بوقت حقيقي في كل مكان — يومان كاملان في مارا للاستفادة من كثافة الحياة البرية التي تشتهر بها هذه المحمية، ووقفة هادئة عند بحيرة في الوادي المتصدع لإبطاء الإيقاع ومشاهدة طيور الفلامنغو على طول الشاطئ، ثم يومان إضافيان في أمبوسيلي حيث يبدو أن الفيلة تتخذ وضعياتها عمداً أمام أعلى جبل في أفريقيا. سواء كانت هذه سفاريكم الأولى في كينيا أو الخامسة، فهذا هو البرنامج المصمم ليذكركم لماذا يقع الناس في حب هذا البلد أساساً.",
      "بصفتنا مشغلاً وُلد في تنزانيا ويتخذ من أروشا مقراً له، ونعمل الآن على توسيع مسارنا الكيني، نصمم هذا المسار بالطريقة ذاتها التي نصمم بها برامج شرق أفريقيا لدينا: مصمم خصيصاً وفق تواريخكم، وخاص بالكامل، ويقوده مرشدون محترفون معتمدون."
    ],
    tagline: "مملوكة محلياً منذ عام 2022 · مرشدون محترفون معتمدون · رحلات مصممة خصيصاً، لا مواعيد مجموعات ثابتة",
    bestTimeToTravel: "على مدار العام، مع تقديم الفترة من يوليو إلى ديسمبر ذروة دراما الهجرة الكبرى في مارا (ورسوم محمية أعلى تبعاً لذلك)",
    destinationHighlights: {
      heading: "أبرز الوجهات",
      items: [
        {
          title: "محمية ماساي مارا الوطنية",
          text: "يومان كاملان في واحد من أكثر مشاهد السفاري شهرة في أفريقيا — سافانا متموجة، وتجمعات مقيمة صحية من الأسود والفيلة، وفرصة لدراما الهجرة إذا تزامنت تواريخكم مع القطعان. هذه هي كينيا التي يتخيلها معظم الناس حتى قبل أن يهبطوا فيها، وهي تفي بهذا التخيل واقعياً."
        },
        {
          title: "بحيرة في الوادي المتصدع",
          text: "تغيير متعمد في الإيقاع. تجتذب هذه المساحة من الوادي المتصدع، المحاطة بفوهات بركانية وتدفقات حمم قديمة، طيور الفلامنغو والبجع وقائمة طويلة من الطيور الأخرى إلى شاطئها القلوي. إنها أهدأ وأبطأ وجميلة بطريقة مختلفة حقاً عن سهول مارا المفتوحة — ما يعادل في عالم السفاري نفساً محبوساً قبل ختام أمبوسيلي."
        },
        {
          title: "حديقة أمبوسيلي الوطنية",
          text: "يهيمن كليمنجارو، حين تتعاون الغيوم، على الأفق هنا بطريقة لا تُعدّكم لها أي صورة فوتوغرافية تماماً. وتدعم مستنقعات أمبوسيلي وسهولها المفتوحة بعضاً من أكثر قطعان الفيلة وضوحاً للمشاهدة في شرق أفريقيا، إلى جانب الأسود والفهود الصيادة والزرافات — طريقة قوية وخلابة لاختتام الرحلة."
        }
      ]
    },
    highlights: [
      "مشاهدة ماساي مارا بالشكل المناسب، بيومين كاملين بدلاً من توقف متسرع لليلة واحدة",
      "اختبار جانب من كينيا يتجاوز الحدائق الشهيرة — إذ تشكل طيور بحيرة في الوادي المتصدع تغييراً حقيقياً للإيقاع",
      "تصوير الفيلة مقابل كليمنجارو في أمبوسيلي، أحد أكثر مشاهد السفاري تميزاً في شرق أفريقيا",
      "السفر بإيقاع مريح ومتوازن بدلاً من موقع جديد كل يوم"
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
      "إقامة كاملة (جميع الوجبات) طوال الرحلة",
      "دليل سفاري محترف مخصص لكامل البرنامج",
      "جميع رسوم دخول الحدائق والمحميات",
      "جولات سفاري نهارية",
      "لوجستيات المطار والمواصلات",
      "تغطية الإخلاء الطبي الطارئ"
    ],
    excluded: [
      "المشروبات الفاخرة",
      "الأنشطة غير المذكورة",
      "الرحلات الجوية الدولية ورسوم التأشيرة",
      "الإكراميات"
    ],
    notes: [
      "الأسعار المعروضة للشخص الواحد بنظام مشاركة غرفة مزدوجة/توأم؛ وتُطبَّق رسوم إضافية عند طلب غرفة فردية.",
      "تُختار محطة بحيرة الوادي المتصدع من بين شركاء النُّزل المتاحين المتماثلين، وقد تتغير بحسب التاريخ.",
      "تخضع الإقامة والأسعار لمدى التوافر، وقد تتغير بحسب تاريخ السفر المحدد ضمن الموسم.",
      "تحدد الحكومة رسوم الحدائق الوطنية والمحميات في كينيا، وهي عرضة للتغيير دون إشعار مسبق."
    ],
    faq: [
      {
        q: "هل تكفي 7 أيام لمشاهدة ماساي مارا وأمبوسيلي بالشكل المناسب؟",
        a: "نعم — صُمم هذا البرنامج خصيصاً لتجنب فخ التوقف لليلة واحدة فقط في كل حديقة. فيومان كاملان في مارا ويومان إضافيان في أمبوسيلي يمنحانكم وقتاً حقيقياً على الأرض في كليهما، مع بحيرة في الوادي المتصدع كتغيير متعمد للإيقاع بينهما بدلاً من عبور متسرع."
      },
      {
        q: "ما أفضل وقت لمشاهدة الهجرة الكبرى في ماساي مارا؟",
        a: "تتحرك الهجرة عادة إلى مارا من حوالي يوليو إلى ديسمبر، وإن كان التوقيت الدقيق يتغير من عام لآخر بحسب هطول الأمطار — وهو أيضاً الوقت الذي ترتفع فيه رسوم محمية ماساي مارا الوطنية. وتقدم مارا مشاهدة قوية للقائمة الخماسية الكبرى خارج موسم الهجرة أيضاً، بتكلفة أقل، لذا يعمل هذا البرنامج بشكل جيد عبر معظم أوقات السنة."
      },
      {
        q: "هل سنشاهد جبل كليمنجارو بالتأكيد من أمبوسيلي؟",
        a: "غالباً ما يكون كليمنجارو مرئياً، لا سيما في الصباح الباكر وخلال الأشهر الأكثر جفافاً، لكن كما هو الحال مع أي إطلالة جبلية، يعتمد الغطاء السحابي على الطقس ولا يمكن ضمانه في أي يوم بعينه."
      },
      {
        q: "كم تكلفة سفاري كينيا الكلاسيكية هذه؟",
        a: "تبدأ الأسعار من 1,295 دولاراً أمريكياً للشخص لمجموعة من ستة مسافرين في الموسم الأخضر (المنخفض)، وترتفع مع صغر حجم المجموعة وفي الموسم المرتفع (يوليو إلى ديسمبر). اطلبوا عرض سعر مخصصاً وفق تواريخ سفركم الدقيقة وحجم مجموعتكم."
      },
      {
        q: "هل هذه سفاري خاصة أم جولة جماعية؟",
        a: "خاصة بالكامل — مركبتكم ودليلكم الخاصان طوال الأيام السبعة كاملة، مصممة وفق تواريخكم بدلاً من رحلة مجموعة بموعد ثابت."
      },
      {
        q: "هل يمكن دمج هذا البرنامج مع سفاري تنزانية؟",
        a: "نعم — بصفتنا مشغلاً يعمل في كل من تنزانيا وكينيا، نصمم بانتظام برامج مشتركة لشرق أفريقيا، بما في ذلك دمج هذا المسار مع سفاري تنزانية أو امتداد شاطئي إلى زنجبار."
      },
      {
        q: "هل يمكن تعديل هذا البرنامج؟",
        a: "نعم — هذه نقطة انطلاق لا باقة ثابتة. يمكن تخصيص الوجهات والإيقاع ونمط الإقامة جميعها وفق الطريقة التي ترغبون بالسفر بها فعلياً، بما في ذلك محطة بحيرة الوادي المتصدع المحددة."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول إلى نيروبي",
        location: "نيروبي",
        description: "تهبطون في مطار جومو كينياتا الدولي، حيث سيكون دليلكم بانتظاركم للترحيب بكم قبل نقل قصير إلى المدينة. تحفل نيروبي بما هو أكثر مما تستحقه معظم محطات التوقف الأولى من تقدير — أسواق تحف نابضة بالحياة، ومشهد مطاعم جيد حقاً، وحديقة نيروبي الوطنية التي تقع على أعتاب العاصمة مباشرة إن رغبتم في تذوق مبكر للبرية قبل أن تبدأ السفاري فعلياً. لكن الليلة مخصصة للاستقرار وتحديد وجهتكم.",
        accommodation: "Nairobi Hotel",
        meals: "العشاء",
        insiderFact: "تُعد حديقة نيروبي الوطنية استثنائية كونها حديقة حياة برية كاملة داخل عاصمة — ومن السهل ترتيب إضافة لمدة ساعتين هنا إذا سمح توقيت وصولكم.",
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
        title: "يومان كاملان في ماساي مارا",
        location: "محمية ماساي مارا الوطنية",
        description: "يأخذكم نقل إلى ماساي مارا، ونادراً ما يستغرق الأمر وقتاً طويلاً لفهم سبب كل هذا الاهتمام. ويعني يومان كاملان هنا وقتاً حقيقياً لاستكشاف المحمية بالشكل المناسب — جولات سفاري صباحية وبعد ظهرية، ودليل يقرأ السهول ليعرف أين يُرجَّح تواجد القطط بدلاً من مكان مشاهدتها بالأمس فقط، وإذا تزامنت تواريخكم مع الهجرة، قطعان من النو والحمير الوحشية تتحرك عبر المروج بأعداد مذهلة حقاً. توقعوا مزيجاً مناسباً من القائمة الخماسية الكبرى، وضوءاً هادئاً في الساعة الذهبية للتصوير، وشرب مشروب واحد على الأقل عند الغروب لمشاهدة السهول تتحول إلى اللون البرتقالي.",
        accommodation: "Masai Mara Camp",
        meals: "جميع الوجبات",
        insiderFact: "ترتفع رسوم المحمية في 1 يوليو، لذا فإن إقامة في مارا في بداية الموسم أو نهايته قد تعني عدد مركبات أقل بشكل ملحوظ عند المشاهدات ذاتها مقابل تكلفة ليلية أقل.",
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
        title: "يومان كاملان في ماساي مارا",
        location: "محمية ماساي مارا الوطنية",
        description: "يأخذكم نقل إلى ماساي مارا، ونادراً ما يستغرق الأمر وقتاً طويلاً لفهم سبب كل هذا الاهتمام. ويعني يومان كاملان هنا وقتاً حقيقياً لاستكشاف المحمية بالشكل المناسب — جولات سفاري صباحية وبعد ظهرية، ودليل يقرأ السهول ليعرف أين يُرجَّح تواجد القطط بدلاً من مكان مشاهدتها بالأمس فقط، وإذا تزامنت تواريخكم مع الهجرة، قطعان من النو والحمير الوحشية تتحرك عبر المروج بأعداد مذهلة حقاً. توقعوا مزيجاً مناسباً من القائمة الخماسية الكبرى، وضوءاً هادئاً في الساعة الذهبية للتصوير، وشرب مشروب واحد على الأقل عند الغروب لمشاهدة السهول تتحول إلى اللون البرتقالي.",
        accommodation: "Masai Mara Camp",
        meals: "جميع الوجبات",
        insiderFact: "تحتفظ السهول بلونها الذهبي لأطول فترة في الساعة الأخيرة قبل الغروب — يستحق الأمر توقيت جولة سفاريكم الثانية حولها إذا كان التصوير أولوية.",
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
        title: "بحيرة في الوادي المتصدع",
        location: "بحيرة الوادي المتصدع",
        description: "تغيير كامل للمشهد، وهو، بصراحة، تغيير مُرحَّب به. تقع هذه المساحة من الوادي المتصدع بين فوهات بركانية وتدفقات حمم قديمة، وتجتذب مياهها القلوية الضحلة طيور الفلامنغو والبجع بأعداد تتغير بشكل ملحوظ مع الموسم ومستوى الماء — وسيعرف دليلكم بالضبط أين تتجمع الطيور فعلياً في ذلك اليوم. إنه يوم أبطأ وأهدأ بتصميم متعمد: جولات سير على طول الشاطئ، وتصوير قوي للطيور، وفرصة للتنفس ببساطة بين وجهتين أكثر كثافة للحياة البرية.",
        accommodation: "Rift Valley Lake Lodge",
        meals: "جميع الوجبات",
        insiderFact: "تتغير أعداد طيور الفلامنغو هنا مع مستوى الماء من عام لآخر — إذ تجلب بعض المواسم آلاف الطيور، وأخرى أقل بكثير، لذا تعاملوا مع أي عدد محدد كإرشاد لا كضمان.",
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
        title: "حديقة أمبوسيلي الوطنية",
        location: "حديقة أمبوسيلي الوطنية",
        description: "إلى أمبوسيلي، حيث تنبض بطاقة البريد بالحياة أخيراً: قطعان الفيلة تتحرك عبر السهول المفتوحة وجبل كليمنجارو يرتفع خلفها في يوم صافٍ. ويمنحكم يومان كاملان هنا وقتاً حقيقياً على الأرض — جولات سفاري عبر المستنقعات والمروج المفتوحة لتتبع الفيلة والأسود والفهود الصيادة والزرافات، إضافة إلى توقف عند تلة المراقبة لإطلالة بانورامية على الحديقة بأكملها. هذه حديقة تكافئ الصبر، ويعني يومان أنكم لن تتسرعوا في تجاوز قطيع فقط للالتزام بجدول زمني.",
        accommodation: "Amboseli Camp",
        meals: "جميع الوجبات",
        insiderFact: "تثير قاع البحيرة الجاف في أمبوسيلي غباراً ناعماً خلال النهار — ووضع وشاح أو غطاء خفيف على الأنف والفم يجعل جولات السفاري أكثر راحة.",
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
        title: "حديقة أمبوسيلي الوطنية",
        location: "حديقة أمبوسيلي الوطنية",
        description: "إلى أمبوسيلي، حيث تنبض بطاقة البريد بالحياة أخيراً: قطعان الفيلة تتحرك عبر السهول المفتوحة وجبل كليمنجارو يرتفع خلفها في يوم صافٍ. ويمنحكم يومان كاملان هنا وقتاً حقيقياً على الأرض — جولات سفاري عبر المستنقعات والمروج المفتوحة لتتبع الفيلة والأسود والفهود الصيادة والزرافات، إضافة إلى توقف عند تلة المراقبة لإطلالة بانورامية على الحديقة بأكملها. هذه حديقة تكافئ الصبر، ويعني يومان أنكم لن تتسرعوا في تجاوز قطيع فقط للالتزام بجدول زمني.",
        accommodation: "Amboseli Camp",
        meals: "جميع الوجبات",
        insiderFact: "عادة ما تكون رؤية كليمنجارو أوضح في الساعة الأولى بعد شروق الشمس، قبل أن تُكوّن حرارة النهار غيوماً حول القمة.",
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
        title: "نيروبي / المغادرة",
        location: "نيروبي / المغادرة",
        description: "قيادة أخيرة خلابة عائدين نحو نيروبي، مع وقت للنظر إلى الوراء على ستة أيام انتقلت من سهول مفتوحة إلى شاطئ بحيرة هادئ إلى أراضي فيلة تحت كليمنجارو. ومن هناك، نقل مباشر إلى مطار جومو كينياتا الدولي لرحلتكم التالية عائدين إلى وطنكم.",
        accommodation: "لا ينطبق",
        meals: "الإفطار"
      }
    ]
  },
  {
    slug: "off-the-beaten-track-photography-safari",
    name: "سفاري التصوير الفوتوغرافي بعيداً عن الطرق المألوفة لمدة 8 أيام",
    duration: 8,
    destinations: [
      "serengeti",
      "ngorongoro"
    ],
    type: "photographic",
    bestMonths: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
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
    metaTitle: "سفاري التصوير بعيداً عن الطرق المألوفة لمدة 8 أيام | الحيوانات المفترسة المقيمة في ندوتو",
    metaDescription: "سفاري تصويرية خاصة خارج الموسم، مبنية حول الحيوانات المفترسة المقيمة في ندوتو — مركبات أقل، وسلوك أعمق، وقصص حقيقية تُروى. للمصورين والكتّاب وصنّاع المحتوى. ابتداءً من 6,219 دولاراً أمريكياً للشخص.",
    overview: [
      "ثمة نسخة من ندوتو لا يراها معظم المسافرين أبداً — ليس لأنها مخفية، بل لأن معظم رحلات السفاري تُوقَّت في الموسم الخطأ لاكتشافها. ففي كل عام، تتدفق مئات آلاف رؤوس النو عبر هذه السهول ثم تمضي. أما الأسود والنمور والفهود الصيادة التي تعيش هنا فلا ترحل معها. تبقى، مرتبطة بشكل دائم بمستنقعات ندوتو — المصدر الوحيد الموثوق للمياه العذبة في مشهد طبيعي موسمي في كل ما عداه — تحمي أراضيها، وتربي صغارها في أوكارها، وتصطاد، وتنشئ نسلها، على مدار العام، بحضور جمهور أو دونه. صُمم هذا البرنامج للأشهر التي يكون فيها ذلك الجمهور في أدنى مستوياته: حين يكون العشب منخفضاً، والضوء صادقاً، والقصة أمام عدستكم هي القطط المقيمة نفسها، لا حشد من المركبات حولها.",
      "ثمانية أيام، وخيط واحد متصل: ثلاثة أيام كاملة على سهول ندوتو مع دليل يقرأ السلوك كما يفعل عالم الأحياء، ومرور عبر أراضي مجتمع الماساي يضيف سياقاً إنسانياً حقيقياً للمشهد الطبيعي، وختام من حافة فوهة نجورونجورو — واحدة من أكمل مسارح الحياة البرية على وجه الأرض، محفوظة عمداً للفصول الأخيرة من الرحلة بدلاً من الاندفاع خلالها في البداية. يُبنى كل يوم هنا مع شخص واحد في الذهن: من يريد من السفاري أكثر من قائمة مشاهدات — مصور يبني محفظة أعمال حقيقية، أو كاتب يجمع مادة لم تُروَ ألف مرة من قبل، أو ببساطة مسافر يفضل فهم مكان ما على مجرد المرور به."
    ],
    tagline: "مملوكة محلياً منذ عام 2022 · موقوتة مع موسم الحيوانات المفترسة المقيمة، لا ازدحام موسم الولادة · رحلات خاصة مصحوبة بدليل",
    bestTimeToTravel: "موسم الحيوانات المفترسة المقيمة الجاف، حين تكون القطعان المهاجرة قد رحلت وتنفرد قطط ندوتو المقيمة إلى حد كبير بالسهول لنفسها",
    whyDifferent: {
      heading: "لماذا \"بعيداً عن الطرق المألوفة\" رغم أن ندوتو ونجورونجورو اسمان معروفان",
      paragraphs: [
        "الوجهات معروفة — أما التوقيت والإيقاع فليسا كذلك. تُبنى معظم برامج ندوتو حول موسم الولادة من ديسمبر إلى مارس، حين تكون الهجرة حاضرة وتبلغ أعداد الزوار ذروتها.",
        "أما هذه السفاري فموقوتة بدلاً من ذلك مع موسم الحيوانات المفترسة المقيمة، حين تكون القطعان المهاجرة قد رحلت لكن القطط المقيمة التي تتخذ من ندوتو موطناً لها تبقى، وترحل معها الحشود التي تتبع الهجرة. وقد صُممت ثلاثة أيام كاملة في مكان واحد، ودليل يشرح البيئة والسياق إلى جانب المشاهدات، وزيارة حقيقية لمجتمع الماساي، لتوليد مادة حقيقية، لا مجرد صور."
      ]
    },
    highlights: [
      "ثلاثة أيام كاملة على سهول ندوتو — لا صباح متسرع واحد، بل وقت حقيقي لترك مشهد أو مطاردة أو موقع عرين يتكشف بإيقاعه الخاص",
      "موقوتة مع موسم الحيوانات المفترسة المقيمة، حين تكشف النباتات المنخفضة في الموسم الجاف سلوكاً يبقى مخفياً خلال أشهر الولادة المزدحمة، وعدد أقل بكثير من المركبات يتنافس على المشاهدة ذاتها",
      "مقطع عرضي حقيقي للحيوانات المفترسة يتجاوز القطط الكبيرة الشهيرة — الزباد وقط السرفال والقط البري والكركل، وثلاثة أنواع من ابن آوى، بما في ذلك ابن آوى المخطط الجانبي النادر التصوير",
      "مرور عبر مجتمع الماساي في طريقكم إلى نجورونجورو — سياق حقيقي وحوار حقيقي، لا توقف مُعد مسبقاً بين جولات السفاري",
      "فوهة نجورونجورو كفصل ختامي، لا افتتاحي — بما يتيح للرحلة أن تتصاعد نحو واحد من أكمل مسارح الحياة البرية في أفريقيا بدلاً من بلوغ ذروتها مبكراً جداً",
      "دليل يشرح البيئة، لا مجرد المشاهدة — ففهم سبب بقاء حيوان مفترس في مكانه يغيّر ما يمكنكم توقعه وتأطيره وكتابته أو تصويره لاحقاً",
      "مصممة لرواة القصص بقدر ما هي للمصورين — إذ يقدم كل يوم مادة سردية حقيقية، لا مجرد فرصة تصوير"
    ],
    heroImage: "/images/lodges/ndutu-safari-lodge.webp",
    heroImageAlt: "Lantern-lit lounge terrace at Ndutu Safari Lodge overlooking acacia-dotted Serengeti plains at dusk",
    gallery: [],
    pricingTiersProvisional: true,
    pricingTiers: [
      {
        pax: 2,
        reserve: 7135.00
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
        reserve: 6688.50
      },
      {
        pax: 6,
        reserve: 6518.96
      }
    ],
    included: [
      "جميع رسوم الحدائق والامتيازات ومناطق الحفاظ على البيئة",
      "المركبة والدليل والوقود لكل يوم ميداني",
      "جميع الوجبات",
      "الإقامة كما هو مذكور",
      "المواصلات من وإلى المطار"
    ],
    excluded: [
      "الرحلات الجوية الدولية",
      "رسوم التأشيرة",
      "التأمين على السفر",
      "الإكراميات",
      "استئجار الكاميرا/العدسة"
    ],
    notes: [
      "الأسعار المعروضة للشخص الواحد بنظام مشاركة غرفة مزدوجة.",
      "تُوزَّع تكاليف المركبة والدليل والديزل على أفراد المجموعة، لذا ينخفض السعر للفرد الواحد عموماً كلما انضم مسافرون أكثر. ويقع رقم 5 أشخاص أعلى قليلاً من سعر 4 أشخاص — وهي قفزة في تهيئة الغرف عند حجم المجموعة ذاك، وهو النمط ذاته الذي يظهر أحياناً عبر برامجنا الأخرى متعددة الفئات، وليس خطأً في التسعير."
    ],
    faq: [
      {
        q: "لماذا تُسمى هذه \"بعيداً عن الطرق المألوفة\" رغم أن ندوتو ونجورونجورو وجهتان معروفتان؟",
        a: "الوجهات معروفة — أما التوقيت والإيقاع فليسا كذلك. تُبنى معظم برامج ندوتو حول موسم الولادة من ديسمبر إلى مارس، حين تكون الهجرة حاضرة وتبلغ أعداد الزوار ذروتها. أما هذه السفاري فموقوتة بدلاً من ذلك مع موسم الحيوانات المفترسة المقيمة، حين تكون القطعان المهاجرة قد رحلت لكن القطط المقيمة التي تتخذ من ندوتو موطناً لها تبقى، وترحل معها الحشود التي تتبع الهجرة."
      },
      {
        q: "هل هذه الرحلة مناسبة لصنّاع المحتوى والكتّاب، لا للمصورين فقط؟",
        a: "بالتأكيد. فالإيقاع نفسه — ثلاثة أيام كاملة في مكان واحد، ودليل يشرح البيئة والسياق إلى جانب المشاهدات، وزيارة حقيقية لمجتمع الماساي — مصمم لتوليد مادة حقيقية، لا مجرد صور. وتُبنى عدة أيام في هذا البرنامج عمداً حول قوس سردي بدلاً من فرصة تصوير واحدة."
      },
      {
        q: "ما عتاد الكاميرا الذي ينبغي إحضاره؟",
        a: "جسم كاميرا DSLR أو بلا مرآة، وعدسة تليفوتو لا تقل عن 400 مم للعمل على الحيوانات المفترسة، وعدسة أوسع للمشاهد الطبيعية ولقطات السرد البيئي. ويُشارَك دليل تعبئة وعتاد كامل مع الضيوف المؤكَّدين قبل المغادرة."
      },
      {
        q: "هل سنشاهد أعداداً كبيرة من الحياة البرية إذا كانت الهجرة قد رحلت؟",
        a: "نعم — إذ يبقى تجمع الحيوانات المفترسة المقيمة في ندوتو وقائمة الحيوانات اللاحمة الأصغر الداعمة له، إضافة إلى أعداد صحية من الحيوانات العاشبة المقيمة، ضمن النظام البيئي على مدار العام. ما يتغير هو التركيبة، لا الوجود: عدد أقل من النو، لكن فرصة أفضل بكثير لسلوك مستمر وقريب للحيوانات المفترسة."
      },
      {
        q: "كم يتغير السعر بحسب حجم المجموعة؟",
        a: "تُوزَّع تكاليف المركبة والدليل والديزل على أفراد المجموعة، لذا ينخفض السعر للفرد الواحد عموماً كلما انضم مسافرون أكثر — راجعوا جدول الأسعار أعلاه للأرقام الدقيقة بحسب حجم المجموعة."
      },
      {
        q: "هل يمكن دمج هذه الرحلة مع وجهات أخرى؟",
        a: "نعم — يقترن هذا البرنامج بشكل طبيعي مع امتداد شاطئي إلى زنجبار للاسترخاء بعد الرحلة، أو يمكن دمجه مع سفاري الدائرة الشمالية للمسافرين الراغبين في الجمع بين تجربة الحيوانات المفترسة المقيمة ودراما عبور النهر في ذروة موسم الهجرة ضمن رحلة واحدة."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول إلى أروشا",
        location: "أروشا",
        description: "تهبطون في أروشا، وتتيحون للأمسية الأولى أن تحدد نغمة ما هو قادم — إحاطة مناسبة حول الأيام المقبلة، وما سيقدمه الضوء والموسم، وكيف يُبنى إيقاع البرنامج حول الصبر لا حول قائمة إنجازات.",
        accommodation: "Arusha Coffee Lodge",
        meals: "العشاء",
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
        title: "من أروشا إلى جنوب سيرينغيتي",
        location: "ندوتو، جنوب سيرينغيتي",
        description: "تستبدل رحلة طيران قصيرة من أروشا إلى مهبط ندوتو نقلاً برياً طويلاً بفترة بعد ظهر تكونون فيها بالفعل في الميدان. وبحلول وقت تسجيل وصولكم إلى المخيم، يكون الضوء قد بدأ يتحول إلى الذهبي وتكون السهول قد بدأت تفعل ما تُتقنه.",
        accommodation: "Ndutu Safari Lodge",
        meals: "جميع الوجبات",
        insiderFact: "هذه لحظة مناسبة لتسليم دليلكم أي قائمة تصوير محددة — نوعاً بعينه، سلوكاً، أو أسلوب تكوين — بحيث يُبنى المسار حولها منذ اليوم الأول.",
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
        title: "يوم كامل في سهول ندوتو",
        location: "ندوتو، جنوب سيرينغيتي",
        description: "اليوم الكامل الأول على السهول، وهو اليوم الذي يُعلن فيه إيقاع هذه الرحلة عن نفسه. فبدلاً من الانتقال بسرعة من مشاهدة إلى أخرى، يحافظ دليلكم على موضعه — يراقب موقع عرين، ويقرأ لغة جسد فهد صياد، وينتظر القصة بدلاً من مطاردة التالية. وهنا يصبح الفرق بين جولة سفاري عادية وسفاري موجهة نحو التصوير واضحاً.",
        accommodation: "Ndutu Safari Lodge",
        meals: "جميع الوجبات",
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
        title: "يوم كامل في سهول ندوتو",
        location: "ندوتو، جنوب سيرينغيتي",
        description: "يمنحكم اليوم الثاني شيئاً لا يمكن لزيارة واحدة أن تمنحه أبداً: مجموعة شخصيات متكررة. العرين ذاته، الأراضي ذاتها، زمرة أسود مألوفة تُشاهَد مجدداً من زاوية مختلفة وفي ضوء مختلف. ولمن يبني مجموعة أعمال بدلاً من جمع لقطات منفردة، فهذا هو اليوم الذي يبدأ بالأهمية الأكبر.",
        accommodation: "Ndutu Safari Lodge",
        meals: "جميع الوجبات",
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
        title: "يوم كامل في سهول ندوتو",
        location: "ندوتو، جنوب سيرينغيتي",
        description: "يوم ثالث وأخير على السهول، موقوت لختم أي خيط بدأ في اليوم الثالث — المطاردة التي لم تكتمل، الأشبال التي لُمحت فقط، الضوء الذي لم يكن مناسباً تماماً في المرة الأولى.",
        accommodation: "Ndutu Safari Lodge",
        meals: "جميع الوجبات",
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
        title: "من سهول ندوتو إلى حافة فوهة نجورونجورو، عبر مجتمع الماساي",
        location: "فوهة نجورونجورو",
        description: "تتغير نغمة الرحلة اليوم. يمر الطريق نحو نجورونجورو عبر أراضي مجتمع الماساي، مع وقت مخصص لزيارة حقيقية — تبادل، لا توقف تصوير، وغالباً ما يكون أغنى مادة في الرحلة بأكملها لمن يكتب لا لمن يصور فقط.",
        accommodation: "Ngorongoro Serena Safari Lodge",
        meals: "جميع الوجبات",
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
        title: "جولة يوم في فوهة نجورونجورو",
        location: "فوهة نجورونجورو",
        description: "يوم كامل من النزول إلى أرضية الفوهة — نحو 260 كيلومتراً مربعاً من الفوهة البركانية المغلقة، تضم واحدة من أكثف تجمعات الحياة البرية في القارة. وبعد ثلاثة أيام قضيتموها في تعلم قراءة نظام بيئي واحد ببطء، تقدم كثافة الفوهة المطلقة نوعاً مختلفاً من القصة: الوفرة، لا الصبر، كموضوع لليوم.",
        accommodation: "Ngorongoro Serena Safari Lodge",
        meals: "جميع الوجبات",
        insiderFact: "تبقى أرضية الفوهة أبرد بعدة درجات من حافتها، حتى عند منتصف النهار — واليدان الباردتان تُبطئان تغيير العدسات، لذا احتفظوا بقفازات في متناول اليد للنزول المبكر.",
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
        title: "من منطقة نجورونجورو المحمية إلى مدينة أروشا",
        location: "أروشا",
        description: "تُغلق القيادة الأخيرة عائدين إلى أروشا الحلقة — إذ تُفسح المرتفعات المجال أمام أراضٍ منخفضة مألوفة، مع وقت في الطريق لمراجعة أسبوع من الصور والملاحظات، قبل رحلة طيرانكم التالية صباح اليوم التالي.",
        accommodation: "لا ينطبق",
        meals: "الإفطار"
      }
    ]
  },
  {
    slug: "rwanda-primates-zanzibar-seniors-groups",
    name: "سفاري رواندا للقردة العليا لمدة 12 يوماً وهروب شاطئي إلى زنجبار",
    duration: 12,
    destinations: [
      "kigali",
      "nyungwe",
      "volcanoes",
      "zanzibar"
    ],
    type: "gorilla_trekking",
    bestMonths: ['Jun', 'Jul', 'Aug', 'Sep', 'Dec', 'Jan', 'Feb'],
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
    metaTitle: "سفاري رواندا للقردة العليا لمدة 12 يوماً وهروب شاطئي إلى زنجبار | لكبار السن ومناسبات الذكرى والمجموعات | EWA Safari Outfitters",
    metaDescription: "الشمبانزي والغوريلا والقردة الذهبية في رواندا، تليها أربع ليالٍ هادئة على شواطئ زنجبار — مصممة لكبار السن، والأزواج المحتفلين بذكرى، والمجموعات. ابتداءً من 7,742 دولاراً أمريكياً للشخص.",
    overview: [
      "مُحدَّثة لموسم 2027. اثنا عشر يوماً، ونوعان مختلفان تماماً من الروعة. النصف الأول هو رواندا في أكثر حالاتها حيوية — الشمبانزي يتحرك عبر مظلة الغابة في نيونغوي، وغوريلا الجبال في المنحدرات الضبابية فوق موسانزي، والقردة الذهبية تندفع عبر غابات الخيزران، ورحلة بالقارب عبر بحيرة كيفو بينها. أما النصف الثاني فلا يطلب منكم شيئاً على الإطلاق: أربع ليالٍ هادئة على رمال زنجبار البيضاء، مع صباح في ستون تاون مُدرَج لمن يرغب في قصة أخرى قبل أن يبدأ الاسترخاء فعلياً.",
      "هذا شكل يناسب بشكل خاص ثلاثة أنواع من المسافرين. فبالنسبة لكبار السن، يتولى البرنامج نفسه تنظيم الإيقاع — إقامات حقيقية لليلتين بدلاً من سلسلة قفزات لليلة واحدة، ونصف ثانٍ مريح وحقيقي مُدرَج ضمن البرنامج لا معالَج كفكرة لاحقة. وبالنسبة للأزواج المحتفلين بذكرى سنوية، يكمن جوهر الأمر في التباين: أيام تتطلب منكما شيئاً معاً في رواندا، تليها أيام لا تتطلب شيئاً على الإطلاق في زنجبار. أما بالنسبة للمجموعات — الأصدقاء والعائلة الممتدة والرحلات متعددة الأجيال — فتمنح البنية الجميع مساحة للانخراط في نصف المغامرة بإيقاعهم الخاص، قبل التجمع مجدداً بالكامل على الشاطئ.",
      "ملاحظة صريحة واحدة: رحلات تتبع الشمبانزي والغوريلا شاقة بدنياً حقاً — تسلق حقيقي في الغابة، أحياناً على ارتفاع، وليس جولة سفاري جالسين. وتقرن هذه الرحلة تلك المغامرة الحقيقية براحة حقيقية بعدها، بدلاً من التظاهر بأن التتبع نفسه سهل. ويتوفر حمّالون للاستئجار لمن يرغب في دعم إضافي على الجبل."
    ],
    bestTimeToTravel: "على مدار العام، مع تقديم موسمَي الجفاف من يونيو إلى سبتمبر ومن ديسمبر إلى فبراير أكثر ظروف التتبع راحة",
    highlights: [
      "ثلاثة أنواع من القردة العليا في رحلة واحدة — الشمبانزي في نيونغوي، وغوريلا الجبال فوق موسانزي، والقردة الذهبية في غابة الخيزران، وكل منها تجربة تتبع مختلفة حقاً",
      "رحلة بالقارب على بحيرة كيفو بين منطقتَي التتبع — يوم انتقالي مريح مُدرَج ضمن البرنامج، لا مجرد نقل",
      "تفاعل ثقافي حقيقي إلى جانب يوم تتبع الغوريلا، لا إضافة متسرعة",
      "أربع ليالٍ كاملة في زنجبار، تشمل صباحاً في ستون تاون وثلاثة أيام من وقت شاطئي خالص دون جدول",
      "إقامات حقيقية لليلتين في جميع أنحاء رواندا — دون توقفات خاطفة لليلة واحدة، ما يمنح كل فرد في المجموعة وقتاً للاستقرار قبل الانتقال",
      "برنامج مبني حول التباين — مغامرة حقيقية، تليها راحة حقيقية، بدلاً من أي منهما بمفرده"
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
        reserve: 7940.00,
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
      "جميع رسوم الحدائق وتصاريح التتبع",
      "المركبة والدليل والوقود طوال الرحلة",
      "جميع الأنشطة المذكورة",
      "الإقامة كما هو مذكور",
      "رحلتا الطيران كيغالي–كاميمبي وكيغالي–زنجبار",
      "المواصلات من وإلى المطار"
    ],
    includedCategorized: {
      transfers: [
        "رحلتا الطيران كيغالي–كاميمبي وكيغالي–زنجبار",
        "المواصلات من وإلى المطار"
      ],
      accommodationMeals: [
        "الإقامة كما هو مذكور"
      ],
      guidingGameDrives: [
        "جميع رسوم الحدائق وتصاريح التتبع",
        "المركبة والدليل والوقود طوال الرحلة",
        "جميع الأنشطة المذكورة"
      ]
    },
    excluded: [
      "الرحلات الجوية الدولية",
      "رسوم التأشيرة",
      "التأمين على السفر",
      "الإكراميات والبقشيش",
      "المصروفات الشخصية"
    ],
    excludedCategorized: [
      "الرحلات الجوية الدولية",
      "رسوم التأشيرة",
      "التأمين على السفر",
      "الإكراميات والبقشيش",
      "المصروفات الشخصية"
    ],
    notes: [
      "الأسعار المعروضة للشخص الواحد بنظام مشاركة غرفة مزدوجة/توأم؛ وتُطبَّق رسوم إضافية عند طلب غرفة فردية.",
      "تحدد سلطات الحدائق الرواندية رسوم تصاريح تتبع الغوريلا والشمبانزي، وهي عرضة للتغيير دون إشعار مسبق.",
      "يُطبَّق حد أدنى للعمر على تتبع الغوريلا والشمبانزي، تحدده سلطات الحدائق — تأكدوا من الحد الحالي مع مستشاركم وقت الحجز.",
      "تخضع الإقامة والأسعار لمدى التوافر، وقد تتغير بحسب تاريخ السفر المحدد."
    ],
    faq: [
      {
        q: "هل هذا البرنامج مناسب لكبار السن من المسافرين؟",
        a: "نصف زنجبار مسترخٍ بالكامل ويناسب أي عمر أو مستوى لياقة. أما نصف رواندا فأكثر مشقة حقاً — إذ يتضمن تتبع الشمبانزي والغوريلا تسلقاً حقيقياً في الغابة، أحياناً على تضاريس شديدة الانحدار أو غير مستوية. ويتوفر حمّالون للاستئجار لدعم إضافي، وإخباركم مستشاركم بأي مخاوف محددة عند الحجز يتيح تعديل الإيقاع حيثما أمكن."
      },
      {
        q: "هل يوجد حد أدنى للعمر لتتبع الغوريلا أو الشمبانزي؟",
        a: "نعم، تحدده سلطات الحدائق وهو عرضة للتغيير — تأكدوا من الحد الحالي مع مستشاركم وقت الحجز."
      },
      {
        q: "كيف يعمل هذا لمجموعة بمستويات لياقة متفاوتة؟",
        a: "بشكل جيد، وفق التصميم. فمن يرغب في التتبع يمكنه ذلك، ومن يفضل عدم ذلك يمكنه قضاء يوم مريح في النُّزل بدلاً منه — لا يتطلب البرنامج من كل فرد في المجموعة القيام بكل نشاط، ويعيد نصف زنجبار الجميع للاجتماع معاً على أي حال."
      },
      {
        q: "ما الفرق بين رحلات التتبع الثلاث للقردة العليا؟",
        a: "يغطي تتبع الشمبانزي في نيونغوي غابة أكثف وقرداً أسرع حركة؛ وتتبع الغوريلا فوق موسانزي هو لقاء منظم بدقة يستغرق ساعة مع عائلة مُروَّضة؛ أما تتبع القردة الذهبية فهو الأكثر حيوية وسرعة إيقاع من بين الثلاثة، عبر غابة الخيزران."
      },
      {
        q: "ما الذي يشمله السعر، وما الذي لا يشمله؟",
        a: "يشمل: جميع رسوم الحدائق وتصاريح التتبع، والمركبة والدليل والوقود طوال الرحلة، وجميع الأنشطة المذكورة، والإقامة كما هو مذكور، ورحلتَي الطيران كيغالي–كاميمبي وكيغالي–زنجبار، والمواصلات من وإلى المطار. ولا يشمل: الرحلات الجوية الدولية، ورسوم التأشيرة، والتأمين على السفر، والإكراميات، والمصروفات الشخصية."
      },
      {
        q: "كم يتغير السعر بحسب حجم المجموعة؟",
        a: "تُوزَّع تكاليف المركبة والدليل والديزل على أفراد المجموعة، لذا ينخفض السعر للفرد الواحد كلما انضم مسافرون أكثر."
      },
      {
        q: "هل يمكن اختصار هذه الرحلة، أم أن الأيام الـ12 كاملة ضرورية؟",
        a: "صُمم البرنامج الكامل لمنح وقت مناسب لكلا النصفين — إذ يخاطر التسرع في قسم رواندا بفوات التصاريح أو إرهاق المجموعة قبل الشاطئ، بينما يقوّض اختصار زنجبار الراحة التي صُممت هذه الرحلة لتنتهي بها. اسألوا مستشاركم إذا كانت لديكم قيود زمنية محددة؛ فالتعديلات ممكنة."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "الوصول إلى كيغالي",
        description: "تهبطون في كيغالي، وتتيحون للأمسية الأولى أن تكون هادئة.",
        accommodation: "Kigali Serena Hotel",
        meals: "العشاء",
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
        title: "من كيغالي إلى حديقة نيونغوي الوطنية",
        description: "تستبدل رحلة طيران قصيرة إلى كاميمبي نقلاً برياً طويلاً بفترة بعد ظهر تكونون فيها بالفعل قريبين من الغابة.",
        accommodation: "Munazi Eco Lodge",
        meals: "جميع الوجبات",
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
        title: "تتبع الشمبانزي في نيونغوي",
        description: "رحلة تتبع مصحوبة بدليل عبر واحدة من أقدم الغابات المطيرة في أفريقيا بحثاً عن مجتمع الشمبانزي في نيونغوي — تجربة تتبع مختلفة حقاً عن تتبع الغوريلا، إذ تتبعون قرداً أسرع حركة وأكثر صخباً عبر مظلة غابة كثيفة.",
        accommodation: "Munazi Eco Lodge",
        meals: "جميع الوجبات",
        insiderFact: "تُعد نيونغوي واحدة من أقدم الغابات المطيرة في أفريقيا وأحد أغنى مواقع القارة تنوعاً للقردة العليا، إذ سُجل فيها 13 نوعاً.",
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
        title: "رحلة بالقارب في نيونغوي والانتقال إلى موسانزي",
        description: "يوم هادئ عمداً: رحلة بالقارب عبر بحيرة كيفو قبل القيادة شمالاً إلى موسانزي، في ظل براكين فيرونغا.",
        accommodation: "Ingagi Lodge",
        meals: "جميع الوجبات",
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
        title: "تتبع الغوريلا وتفاعل ثقافي",
        description: "اليوم الذي بُني حوله هذا البرنامج. يقود المتتبعون الطريق إلى الغابة للعثور على عائلة من غوريلا الجبال، وتقضون ساعة منظمة بدقة في حضرتها — ذكور الظهر الفضي، وأمهات مع صغارهن، وشؤون عائلة غوريلا برية يومية دون استعجال. يتبع ذلك تفاعل ثقافي حقيقي مع المجتمع المحلي.",
        accommodation: "Ingagi Lodge",
        meals: "جميع الوجبات",
        insiderFact: "لا يُصدَر سوى عدد محدود من التصاريح لكل عائلة غوريلا يومياً — واللقاء منظم بدقة لحماية العائلات المُروَّضة.",
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
        title: "تتبع القردة الذهبية والانتقال إلى كيغالي",
        description: "صباح أسرع إيقاعاً وأكثر حيوية من رحلة تتبع الغوريلا — إذ تتحرك القردة الذهبية بسرعة عبر مظلة الخيزران، وتتبعها يتعلق بمواكبتها بقدر ما يتعلق بالصبر. وتعيدكم القيادة بعد الظهر إلى كيغالي.",
        accommodation: "Kigali Serena Hotel",
        meals: "جميع الوجبات",
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
        title: "من كيغالي إلى زنجبار",
        description: "تختتم رحلة طيران من كيغالي إلى زنجبار نصف المغامرة من الرحلة وتفتتح النصف المريح.",
        accommodation: "Zanzibar Serena",
        meals: "الإفطار",
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
        title: "جولة في ستون تاون",
        description: "صباح لاستكشاف شوارع ستون تاون المتعرجة، وأسواق التوابل، والعمارة السواحلية العربية — قصة أخرى قبل أن يسيطر الشاطئ بالكامل.",
        accommodation: "Nungwi Dreams By Mantis",
        meals: "الإفطار",
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
        title: "استرخاء على الشاطئ",
        description: "أول ثلاثة أيام كاملة لا شيء في جدولها سوى الشاطئ نفسه.",
        accommodation: "Nungwi Dreams By Mantis",
        meals: "الإفطار",
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
        title: "استرخاء على الشاطئ",
        description: "يوم كامل آخر من وقت شاطئي دون جدول.",
        accommodation: "Nungwi Dreams By Mantis",
        meals: "الإفطار",
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
        title: "استرخاء على الشاطئ",
        description: "يوم كامل أخير على الشاطئ قبل المغادرة.",
        accommodation: "Nungwi Dreams By Mantis",
        meals: "الإفطار",
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
        title: "المغادرة",
        description: "نُقل إلى مطار زنجبار، لتعود معكم إلى وطنكم اثنا عشر يوماً امتدت بين نوعين مختلفين تماماً من الروعة.",
        accommodation: "لا ينطبق",
        meals: "الإفطار"
      }
    ]
  },
]
