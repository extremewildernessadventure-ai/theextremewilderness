import type { SafariPackage } from './packages'

export const packages: SafariPackage[] = [
  {
    slug: "7-day-serengeti-ngorongoro",
    name: "ספארי 7 ימים בסרנגטי ונגורונגורו",
    duration: 7,
    destinations: [
      "serengeti",
      "ngorongoro",
      "tarangire"
    ],
    type: "big_five_game_drives",
    bestMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    wildlifeTargets: [{ name: 'Lion', chance: 'High' }, { name: 'African Elephant', chance: 'High' }, { name: 'Cape Buffalo', chance: 'High' }, { name: 'Black Rhino', chance: 'High' }, { name: 'Wildebeest', chance: 'Seasonal', note: 'Great Migration, timing varies by month' }, { name: 'Maasai Giraffe', chance: 'High' }],
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
    metaTitle: "7-Day Northern Circuit Safari: Serengeti, Ngorongoro & Tarangire",
    metaDescription: "ספארי פרטי ומודרך במלואו למשך 7 ימים במעגל הצפוני — טרנגירה, סרנגטי ומכתש נגורונגורו. שלוש רמות, מ-Wilderness Trail ועד Wilderness Sovereign. החל מ-2,485$ לאדם.",
    overview: [
      "שבעה ימים הם משך הזמן שאליו מגיעים רוב הנוסעים המבקרים בטנזניה לראשונה, לאחר שהבינו כראוי את הגיאוגרפיה של המדינה — מספיק זמן כדי לעבור בין שלוש מערכות אקולוגיות מנוגדות ללא חיפזון, וקצר מספיק כדי להשתלב במסגרת הרגילה של שבועיים, עם הארכה לחוף הים או לטרק גורילות בכל אחד מקצוות המסע. מסלול זה הוא הגרסה השלמה ביותר של המעגל הצפוני: עדרי הפילים והבאובאבים העתיקים של טרנגירה, יומיים מלאים בעומק הסרנגטי, ויום שלם של ירידה אל מכתש נגורונגורו — הריכוז הצפוף ביותר של חיות בר באפריקה במערכת אקולוגית סגורה אחת — ולבסוף עצירה תרבותית בכפר מטו וה מבו בדרך חזרה לארושה.",
      "זמין בשלוש רמות — Wilderness Trail, Wilderness Reserve ו-Wilderness Sovereign — כשכולן עוקבות אחר אותו מסלול בן שבעה ימים, כאשר מה שמשתנה הוא רמת הקמפים והלודג'ים שבהם תתארחו.",
      "ספארי זה משתלב באופן טבעי במסע רחב יותר במזרח אפריקה — ניתן להאריך אותו לקניה או לרואנדה, או להוסיף הארכת חופשת חוף לאחר סיור הספארי האחרון."
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
      "שלושה פארקים, מסע רציף אחד — טרנגירה, הסרנגטי ומכתש נגורונגורו, מחוברים בדרכי עפר כך שהנוף עצמו הופך לחלק מהסיפור",
      "יומיים מלאים בסרנגטי — די זמן כדי לעקוב בפועל אחר תנועת הטורפים, ובהתאם לעונה, אחר ההנדידה הגדולה עצמה",
      "יום שלם בתוך מכתש נגורונגורו — הריכוז הצפוף ביותר של חיות בר ביבשת כולה, עם חלק מהסיכויים הגבוהים ביותר באזור לצפייה בקרנפים",
      "עדרי הפילים והבאובאבים העתיקים של טרנגירה — פרק פתיחה שמוערך בחסר, שרוב המסלולים הקצרים יותר מדלגים עליו לחלוטין",
      "הכפר התרבותי מטו וה מבו — עצירה אותנטית וללא חיפזון בדרך חזרה לארושה, לא הזדמנות צילום חפוזה בצד הדרך",
      "ניתן לשלב בקלות עם קניה או רואנדה, או להאריך לכיוון החוף — מסלול זה עומד בפני עצמו או משמש כקטע אחד ממסע ארוך יותר במזרח אפריקה",
      "כל רמות הנוחות מיוצגות — מאווירה מוקפדת וצנועה ועד לתחכום אמיתי, מבלי לשנות ולו יום אחד מהמסלול עצמו"
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
      "כל דמי הכניסה לפארקים",
      "כל סיורי הספארי ברכב 4x4",
      "מדריך מקומי מקצועי לאורך כל הנסיעה",
      "ארוחות כמפורט בכל יום",
      "לינה בהתאם למסלול",
      "העברות פרטיות משדה התעופה ובין הקמפים"
    ],
    includedCategorized: {
      transfers: [
        "העברות פרטיות משדה התעופה ובין הקמפים"
      ],
      accommodationMeals: [
        "ארוחות כמפורט בכל יום",
        "לינה בהתאם למסלול"
      ],
      guidingGameDrives: [
        "כל דמי הכניסה לפארקים",
        "כל סיורי הספארי ברכב 4x4",
        "מדריך מקומי מקצועי לאורך כל הנסיעה"
      ]
    },
    excluded: [
      "טיסות בינלאומיות",
      "אגרות ויזה",
      "ביטוח נסיעות",
      "טיפים",
      "פעילויות אופציונליות"
    ],
    excludedCategorized: [
      "טיסות בינלאומיות",
      "אגרות ויזה",
      "ביטוח נסיעות",
      "טיפים",
      "פעילויות אופציונליות"
    ],
    notes: [
      "המחירים המוצגים הם לאדם בחדר זוגי/טווין משותף; תוספת עבור חדר יחיד זמינה לפי בקשה.",
      "הלינה והמחירים כפופים לזמינות ועשויים להשתנות בהתאם למועד הנסיעה המדויק בתוך העונה.",
      "דמי הפארקים הלאומיים ואזורי השימור בטנזניה נקבעים על ידי הממשלה וכפופים לשינוי ללא הודעה מוקדמת."
    ],
    faq: [
      {
        q: "מה ההבדל בין שלוש הרמות?",
        a: "בכל מקרה תגיעו לאותם המקומות ותצפו באותה חיית הבר. מה שמשתנה הוא רמת הטיפול בין הסיורים: Wilderness Trail שומרת על נוחות ומחשבה, Wilderness Reserve מעניקה לכם יותר מרחב להירגע, ו-Wilderness Sovereign מאכסנת אתכם במקום מיוחד באמת בכל לילה. בחרו את הרמה שמתאימה לאופן שבו אתם אוהבים לטייל."
      },
      {
        q: "האם נראה את ההנדידה הגדולה?",
        a: "זה תלוי בתזמון ובמקום שאליו נדדו העדרים, ואיננו יכולים להבטיח צפייה ספציפית ביום מסוים. מה שמסלול זה כן מבטיח הוא יומיים מלאים בטריטוריה של אריות ונמרים תושבי קבע, שבה ניתן לצפות בהם לאורך כל השנה — אם תזמון ההנדידה עצמה חשוב לכם במיוחד, שוחחו עם היועץ שלכם לפני ההזמנה כדי שנוכל לעזור לבחור את התאריכים הנכונים."
      },
      {
        q: "כמה משתנה המחיר בהתאם לגודל הקבוצה?",
        a: "עלויות הרכב, המדריך וחלק מההעברות מתחלקות בין חברי הקבוצה, כך שהמחיר לאדם יורד בדרך כלל ככל שמצטרפים נוסעים נוספים — עיינו בטבלת המחירים תחת כל רמה למעלה, בהתאם לגודל הקבוצה שלכם."
      },
      {
        q: "מה כלול, ועל מה כדאי לתכנן בנפרד?",
        a: "כלול: כל דמי הכניסה לפארקים ולאזורי השימור, כל סיורי הספארי ברכב Land Cruiser 4x4 פרטי, המדריך, הארוחות, הלינה, מים בבקבוקים במהלך סיורי הספארי, והעברות משדה התעופה. באחריותכם: טיסות בינלאומיות, אגרות ויזה, ביטוח נסיעות, טיפים והוצאות אישיות כגון משקאות אלכוהוליים."
      },
      {
        q: "האם ניתן להפוך את זה למסע גדול יותר — קניה, רואנדה, או כמה ימים בחוף?",
        a: "בהחלט, ורבים מהנוסעים שלנו עושים בדיוק זאת. ספארי זה משתלב היטב לצד ספארי בקניה או טרק גורילות ברואנדה, וניתן לתאם הארכת חוף מיד לאחר סיור הספארי האחרון. פשוט ציינו זאת בעת התכנון, ואנו נעזור לבנות סביב כך את כל המסע."
      },
      {
        q: "האם מסלול זה מתאים למבקרים בטנזניה בפעם הראשונה?",
        a: "בהחלט כן — זהו המסלול שרוב הנוסעים המגיעים לראשונה בוחרים לאחר שמבינים את הגיאוגרפיה, שכן הוא מכסה את שלושת הפארקים שעליהם מבוסס כמעט כל ספארי במעגל הצפוני, מבלי לדחוס אותם למסלול קצר וחפוז יותר."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "ארושה",
        description: "הגעה לארושה. העברה למלון.",
        accommodation: "ארושה, משתנה לפי רמה",
        meals: "לינה וארוחת בוקר",
        insiderFact: "ארושה נמצאת בגובה של כ-1,400 מטר — לילה נוח כמעין חיץ לפני הפארקים, והמקום שבו רוב המפעילים מתחזקים ומצטיידים מחדש ברכביהם בין הנסיעות.",
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
        title: "פארק לאומי טרנגירה",
        description: "נסיעה לפארק הלאומי טרנגירה. סיורי ספארי בין עדרי פילים ועצי באובב.",
        accommodation: "אזור טרנגירה, משתנה לפי רמה",
        meals: "פנסיון מלא",
        insiderFact: "טרנגירה מחזיקה באחת מהצפיפויות הגבוהות ביותר של פילים באפריקה מחוץ לעונת הגשמים, כאשר העדרים מתרכזים לאורך הנהר.",
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
        title: "המשך לסרנגטי",
        description: "המשך הנסיעה לסרנגטי דרך קראטו. סיור ספארי אחר הצהריים.",
        accommodation: "מרכז הסרנגטי, משתנה לפי רמה",
        meals: "פנסיון מלא",
        insiderFact: "קראטו נמצאת ממש מחוץ לגבול אזור השימור נגורונגורו — קטע החקלאות האחרון לפני רמות המכתש.",
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
        title: "מרכז הסרנגטי",
        description: "יום מלא של סיורי ספארי בסרנגטי.",
        accommodation: "מרכז הסרנגטי, משתנה לפי רמה",
        meals: "פנסיון מלא",
        insiderFact: "מקורות המים הקבועים של סרונרה מושכים אליהם אוכלוסיות תושבות של חתולי בר גדולים, כולל האריות המפורסמים המטפסים על עצים באזור הקופיות.",
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
        title: "מכתש נגורונגורו",
        description: "ירידה אל מכתש נגורונגורו ליום מלא של סיור ספארי.",
        accommodation: "אזור נגורונגורו, משתנה לפי רמה",
        meals: "פנסיון מלא",
        insiderFact: "מכתש נגורונגורו הוא מערכת אקולוגית סגורה בשטח של כ-260 קמ״ר — רוב בעלי החיים התושבים בו לעולם אינם עוזבים אותו.",
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
        title: "מטו וה מבו לארושה",
        description: "ביקור בכפר התרבותי מטו וה מבו, ולאחר מכן נסיעה לארושה.",
        accommodation: "ארושה, משתנה לפי רמה",
        meals: "לינה וארוחת בוקר",
        insiderFact: "רוב הטיסות הבינלאומיות מקילימנג'רו יוצאות בשעות הערב המאוחרות, כך שלילה זה כחיץ שומר על היום האחרון של הספארי ללא חיפזון.",
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
        title: "עזיבה",
        description: "העברה לשדה התעופה. עזיבה.",
        accommodation: "N/A",
        meals: "ארוחת בוקר",
        insiderFact: "נמל התעופה הבינלאומי קילימנג'רו נמצא כ-45 עד 60 דקות מארושה בכביש."
      }
    ]
  },
  {
    slug: "10-day-northern-circuit",
    name: "10 ימים במעגל הצפוני האולטימטיבי",
    duration: 10,
    destinations: [
      "serengeti",
      "ngorongoro",
      "tarangire",
      "manyara"
    ],
    type: "big_five_game_drives",
    wildlifeTargets: [{ name: 'Wildebeest', chance: 'Seasonal', note: 'Great Migration' }, { name: 'Lion', chance: 'High' }, { name: 'African Elephant', chance: 'High' }, { name: 'Cape Buffalo', chance: 'High' }, { name: 'Black Rhino', chance: 'Rare' }, { name: 'Flamingo', chance: 'Seasonal', note: 'Lake Manyara' }],
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
    metaDescription: "ספארי פרטי ומודרך במלואו למשך 10 ימים במעגל הצפוני של טנזניה — טרנגירה, מניארה, סרנגטי ומכתש נגורונגורו, ארבעת הפארקים המובילים של המדינה. החל מ-4,800$ לאדם.",
    overview: [
      "עשרה ימים הם פרק הזמן הדרוש בפועל כדי לכסות את ארבעת הפארקים הצפוניים המובילים של טנזניה מבלי למהר באף אחד מהם — זהו המעגל השלם, לא הגרסה המקוצרת. תעקבו אחר ההנדידה הגדולה בשיא עוצמתה על פני מישורי הסרנגטי, תרדו אל מכתש נגורונגורו שבו ריכוז חיות הבר הצפוף ביותר באפריקה, תצפו בעדרי הפילים של טרנגירה נעים מתחת לבאובאבים העתיקים, ותפגשו את המים הרדודים בגון הפלמינגו הוורוד ואת האריות המטפסים על עצים באגם מניארה, הכול באותו מסלול.",
      "עצירה בערוץ אולדובאי, האתר שפליאונטולוגים מכנים 'עריסת האנושות', שוברת את רצף סיורי הספארי בהצצה אל המקום שבו החל סיפור המין האנושי עצמו, וכל יום מתנהל ברכב 4x4 פרטי עם מדריך דובר אנגלית משלכם, כך שהקצב נקבע לפי מה שאתם מוצאים, ולא לפי לוח זמנים קבוצתי משותף."
    ],
    highlights: [
      "מעגל צפון טנזניה השלם",
      "כל ארבעת הפארקים המובילים",
      "ההנדידה הגדולה בשיא עוצמתה",
      "פלמינגואים ואריות מטפסי עצים באגם מניארה",
      "ערוץ אולדובאי — עריסת האנושות"
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
      "כל דמי הכניסה לפארקים",
      "כל סיורי הספארי ברכב Land Cruiser 4x4",
      "מדריך מקצועי דובר אנגלית",
      "כל הארוחות כמפורט",
      "לינה בהתאם למסלול",
      "העברות משדה התעופה"
    ],
    excluded: [
      "טיסות בינלאומיות",
      "אגרות ויזה",
      "ביטוח נסיעות",
      "טיפים"
    ],
    notes: [
      "המחירים המוצגים הם לאדם בחדר זוגי/טווין משותף; תוספת עבור חדר יחיד זמינה לפי בקשה.",
      "הלינה והמחירים כפופים לזמינות ועשויים להשתנות בהתאם למועד הנסיעה המדויק בתוך העונה.",
      "דמי הפארקים הלאומיים ואזורי השימור בטנזניה נקבעים על ידי הממשלה וכפופים לשינוי ללא הודעה מוקדמת."
    ],
    itinerary: []
  },
  {
    slug: "10-day-safari-zanzibar",
    name: "10 ימים ספארי בטנזניה וחוף זנזיבר",
    duration: 10,
    destinations: [
      "tarangire",
      "ngorongoro",
      "serengeti",
      "zanzibar"
    ],
    type: "big_five_game_drives",
    wildlifeTargets: [{ name: 'African Elephant', chance: 'High' }, { name: 'Lion', chance: 'High' }, { name: 'Leopard', chance: 'Rare' }, { name: 'Cheetah', chance: 'Rare' }, { name: 'Black Rhino', chance: 'High' }, { name: 'Cape Buffalo', chance: 'High' }],
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
    tagline: "מעודכן לעונת 2027.",
    metaTitle: "10-Day Tanzania Safari & Zanzibar Beach | EWA Safari Outfitters",
    metaDescription: "שישה ימים של ספארי פרטי בין טרנגירה, נגורונגורו והסרנגטי, ולאחריהם שלושה לילות רגועים בחוף נונגווי שבזנזיבר — 10 ימים, 9 לילות בסך הכול. החל מ-4,413.96$ לאדם.",
    overview: [
      "עשרת הימים מתחלקים באופן ברור לשני סוגי חוויה שונים, וכל אחד מהם מקבל מספיק זמן כדי להשתקע בו באמת, ולא רק לטעום ממנו במעבר. ששת הימים הראשונים עוברים צפונה דרך המעגל הקלאסי של טנזניה — טרנגירה, רמות נגורונגורו והסרנגטי — כל פארק שונה דיו מקודמו כך ש'ספארי' מפסיק להיות רעיון כללי אחד והופך לשלושה מקומות ספציפיים ומובחנים היטב. שלושת הלילות האחרונים לא דורשים מכם דבר: חוף נונגווי בזנזיבר, המושג בטיסה קצרה במקום ביום נוסף על הכביש.",
      "טרנגירה פותחת את המסע בחצי יום אמיתי משלה, בתוספת עצירה במטו וה מבו וביקור בקהילת מסאי המשולבים במסלול עצמו ולא מוצעים כתוספת נלווית — ביתה של אחת מאוכלוסיות הפילים הגדולות במזרח אפריקה, המתרכזת לאורך הנהר בעונת היובש. מכתש נגורונגורו מקבל יום שלם ולא עצירת בוקר חפוזה: קלדרה געשית שקרסה בשטח של כ-260 קמ״ר, עם דפנות תלולות מספיק כך שרוב מה שחי בפנים לעולם לא עוזב, ואחד הימים הצפופים ביותר בצפייה בחיות בר לאורך כל המעגל. לאחר מכן יומיים מלאים בטריטוריית הטורפים תושבי הקבע של הסרנגטי, ולפני כן טיסה נופית — הדרך דרך ארושה — המחליפה את הרכב במים פתוחים ובשלושה לילות ללא לוח זמנים על החול הלבן של נונגווי."
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
      "עדרי הפילים של טרנגירה מתחת לבאובאבים העתיקים, עם חצי יום ייעודי ולא רק נסיעת מעבר",
      "ביקור אותנטי בקהילת מסאי ועצירה תרבותית במטו וה מבו בדרך אל רמות נגורונגורו",
      "יום שלם בתוך מכתש נגורונגורו, אחד מריכוזי חיות הבר הצפופים ביותר בעולם",
      "יומיים מלאים בטריטוריית הטורפים המובחרת של הסרנגטי, שאליה מגיעים תוך המשך קדימה במעגל ולא בחזרה לאחור",
      "טיסה נופית מהסרנגטי לזנזיבר, המחליפה קטע יבשתי ארוך ואחרון בזמן אוויר ובנוף ים",
      "שלושה לילות בחוף נונגווי שבזנזיבר, הכול כלול, לסיום המסע בהרפיה מוחלטת"
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
      "כל דמי הכניסה לפארקים ולאזורי השימור",
      "כל סיורי הספארי ברכב 4x4 פרטי",
      "מדריך מקצועי לאורך כל הספארי",
      "הטיסה סרנגטי–ארושה–זנזיבר",
      "כל הארוחות כמפורט",
      "לינה בהתאם למסלול",
      "העברות משדה התעופה ובין בתי המלון"
    ],
    includedCategorized: {
      transfers: [
        "הטיסה סרנגטי–ארושה–זנזיבר",
        "העברות משדה התעופה ובין בתי המלון"
      ],
      accommodationMeals: [
        "כל הארוחות כמפורט",
        "לינה בהתאם למסלול"
      ],
      guidingGameDrives: [
        "כל דמי הכניסה לפארקים ולאזורי השימור",
        "כל סיורי הספארי ברכב 4x4 פרטי",
        "מדריך מקצועי לאורך כל הספארי"
      ]
    },
    excluded: [
      "טיסות בינלאומיות",
      "אגרות ויזה",
      "ביטוח נסיעות",
      "טיפים",
      "תוספות אופציונליות בזנזיבר"
    ],
    excludedCategorized: [
      "טיסות בינלאומיות",
      "אגרות ויזה",
      "ביטוח נסיעות",
      "טיפים",
      "תוספות אופציונליות בזנזיבר"
    ],
    notes: [
      "המחירים המוצגים הם לאדם בחדר זוגי/טווין משותף; תוספת עבור חדר יחיד זמינה לפי בקשה.",
      "זהו ספארי פרטי לחלוטין בכל אחד מגדלי הקבוצה המוצגים — הרכב והמדריך שלכם לאורך כל הדרך. מה שמשתנה עם גודל הקבוצה הוא בין כמה אנשים מתחלקת אותה עלות פרטית.",
      "תוספות אופציונליות בזנזיבר (במחיר נפרד, זמינות בימים 8–9): צלילה או שנורקלינג בשונית, שיט דאו בשקיעה, סיור הליכה היסטורי בסטון טאון, סיור בחוות תבלינים, שיט דיג בים הפתוח.",
      "הלינה והמחירים כפופים לזמינות ועשויים להשתנות בהתאם למועד הנסיעה המדויק בתוך העונה."
    ],
    faq: [
      {
        q: "האם כל שלוש הרמות עוקבות אחר אותו מסלול ולוח זמנים?",
        a: "כן — המסלול, הקצב והפעילויות זהים בכל שלוש הרמות: Wilderness Trail, Wilderness Reserve ו-Wilderness Sovereign. מה שמשתנה הוא הקמפים, הלודג'ים ורמת הנוחות, לא המסע עצמו."
      },
      {
        q: "איך נראה בפועל ביקור קהילת המסאי?",
        a: "מדובר בעצירה אמיתית ביום 3, בדרך מטרנגירה אל רמות נגורונגורו, בשילוב עם זמן בעיר השוק מטו וה מבו — משולבת במסלול עצמו ולא מוצעת כתוספת בתשלום."
      },
      {
        q: "מדוע לטוס מהסרנגטי לזנזיבר במקום לנסוע חזרה לארושה?",
        a: "נסיעה כל הדרך חזרה משמעה לחזור על יום וחצי של כביש שכבר עברתם. טיסה, עם עצירת מעבר בארושה, מביאה אתכם לחוף באותו יום מבלי לחזור על המעגל."
      },
      {
        q: "האם ניתן להאריך או לקצר את המסלול?",
        a: "המבנה הבסיסי מעניק לכל קטע זמן ראוי — הסרנגטי והמכתש מאבדים ערך אמיתי אם ממהרים בהם. הארכות (לילה נוסף בזנזיבר, תוספת של סטון טאון) קל להוסיף; שאלו את היועץ שלכם לגבי קיצור אם יש לכם מגבלות זמן קשיחות."
      },
      {
        q: "מה כלול במחיר, ומה לא?",
        a: "כלול: כל דמי הפארקים ואזורי השימור, רכב/מדריך/דלק לאורך כל הספארי, הטיסה סרנגטי–ארושה–זנזיבר, כל הפעילויות המפורטות, ולינה כמפורט לכל תשעת הלילות. לא כלול: טיסות בינלאומיות, אגרות ויזה, ביטוח נסיעות, טיפים ותוספות אופציונליות בזנזיבר."
      },
      {
        q: "כמה משתנה המחיר בהתאם לגודל הקבוצה?",
        a: "עלויות הרכב, המדריך והדלק מתחלקות בין חברי הקבוצה, כך שהמחיר לאדם יורד ככל שמצטרפים נוסעים נוספים — ראו את טבלת המחירים למעלה."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "הגעה לארושה",
        description: "נחיתה בנמל התעופה הבינלאומי קילימנג'רו והעברה פרטית לארושה ללינת לילה, לקראת היציאה מחר אל השטח הפתוח.",
        accommodation: "ארושה, משתנה לפי רמה",
        meals: "לינה וארוחת בוקר",
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
        title: "מארושה לפארק הלאומי טרנגירה",
        description: "הנסיעה דרומה לטרנגירה, שבה חלק מעדרי הפילים הגדולים ביותר בטנזניה מתאספים מתחת לבאובאבים העתיקים — אחת הצפיפויות הגבוהות ביותר של פילים באפריקה מחוץ לעונת הגשמים, כאשר העדרים מתרכזים לאורך הנהר.",
        accommodation: "טרנגירה, משתנה לפי רמה",
        meals: "הכול כלול",
        insiderFact: "טרנגירה מחזיקה באחת מהצפיפויות הגבוהות ביותר של פילים באפריקה מחוץ לעונת הגשמים, כאשר העדרים מתרכזים לאורך הנהר.",
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
        title: "חצי יום בטרנגירה, קהילת מסאי ומטו וה מבו",
        description: "חצי יום אחרון בטרנגירה לפני הנסיעה אל הרמות, המלווה בביקור אותנטי בקהילת מסאי ועצירה בעיר השוק מטו וה מבו — זמן תרבותי אמיתי המשולב במסלול, לא נדחס בדיעבד.",
        accommodation: "רמות נגורונגורו, משתנה לפי רמה",
        meals: "הכול כלול",
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
        title: "סיור יום מלא במכתש נגורונגורו",
        description: "יום שלם של ירידה אל מכתש נגורונגורו — מערכת אקולוגית סגורה בשטח של כ-260 קמ״ר, שבה רוב בעלי החיים התושבים לעולם אינם עוזבים, ואחד המקומות האמינים ביותר בעולם ליום אמיתי של החמישייה הגדולה.",
        accommodation: "רמות נגורונגורו, משתנה לפי רמה",
        meals: "הכול כלול",
        insiderFact: "מכתש נגורונגורו הוא מערכת אקולוגית סגורה בשטח של כ-260 קמ״ר — רוב בעלי החיים התושבים בו לעולם אינם עוזבים אותו, וביניהם חלק מהסיכויים האמינים ביותר באזור לצפייה בקרנף שחור.",
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
        title: "מקראטו לסרנגטי",
        description: "הנסיעה אל תוככי הסרנגטי עצמו, עם עצירה בערוץ אולדובאי — אחד האתרים הפליאואנתרופולוגיים החשובים ביותר בעולם — לפני ההמשך אל הקמפ.",
        accommodation: "מרכז הסרנגטי, משתנה לפי רמה",
        meals: "הכול כלול",
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
        title: "יום מלא בפארק הלאומי סרנגטי",
        description: "יום מלא של סיורי ספארי מודרכים בטריטוריית הטורפים המובחרת של הסרנגטי — אריות, נמרים וברדלסים הם צפיות ריאליות כאן לאורך כל השנה.",
        accommodation: "מרכז הסרנגטי, משתנה לפי רמה",
        meals: "הכול כלול",
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
        title: "טיסה לזנזיבר, דרך ארושה",
        description: "טיסת בוקר נופית חוזרת דרך ארושה לפני ההמשך לזנזיבר — ללא העברה יבשתית ארוכה נוספת בנוסף לספארי. עם הנחיתה, העברה לנונגווי שבחוף הצפוני של האי.",
        accommodation: "נונגווי, זנזיבר, משתנה לפי רמה",
        meals: "הכול כלול",
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
        title: "נונגווי, זנזיבר",
        description: "יום פנוי למילוי כרצונכם: צלילה או שנורקלינג בשונית, שיט דאו בשקיעה, סיור היסטורי בסטון טאון, סיור בחוות תבלינים, או פשוט החוף. נונגווי נמצאת בקצה הצפוני של זנזיבר, כמעט ולא מושפעת מהגאות והשפל שתוקעים שחיינים בחוף המזרחי בזמן שפל.",
        accommodation: "נונגווי, זנזיבר, משתנה לפי רמה",
        meals: "הכול כלול",
        insiderFact: "נונגווי נמצאת בקצה הצפוני של זנזיבר, כמעט ולא מושפעת מהגאות והשפל שתוקעים שחיינים בחוף המזרחי בזמן שפל.",
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
        title: "נונגווי, זנזיבר",
        description: "יום פנוי אחרון ומלא על החוף החולי הלבן של זנזיבר — לצלול בשונית, לשוט בדאו בשקיעה, או פשוט לא לעשות דבר.",
        accommodation: "נונגווי, זנזיבר, משתנה לפי רמה",
        meals: "הכול כלול",
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
        title: "עזיבה",
        description: "העברה פרטית מנונגווי לשדה התעופה של זנזיבר להמשך המסע או לעזיבה.",
        accommodation: "N/A",
        meals: "ארוחת בוקר"
      }
    ]
  },
  {
    slug: "5-day-serengeti-fly-in",
    name: "ספארי 5 ימים בסרנגטי בטיסה פנימית",
    duration: 5,
    destinations: [
      "serengeti",
      "ngorongoro",
      "manyara"
    ],
    type: "big_five_game_drives",
    bestMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    wildlifeTargets: [{ name: 'Lion', chance: 'High' }, { name: 'Leopard', chance: 'Rare' }, { name: 'Cheetah', chance: 'Rare' }, { name: 'Black Rhino', chance: 'High', note: '~25 resident individuals in the crater' }, { name: 'Cape Buffalo', chance: 'High' }, { name: 'Flamingo', chance: 'Seasonal' }],
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
    metaDescription: "דלגו על נסיעת היבשה הארוכה של יומיים — טוסו ישירות אל מרכז הסרנגטי לספארי פרטי בן 5 ימים, עם יומיים מלאים בטריטוריית אריות, נמרים וברדלסים. החל מ-2,475$ לאדם.",
    overview: [
      "רוב ספארי הסרנגטי מבזבזים נסיעה יבשתית של יומיים רק כדי להגיע אל הפארק. מסלול זה מדלג על כך: טיסת שכר מרימה אתכם מארושה ישירות אל מרכז הסרנגטי, כך שסיור הספארי הראשון שלכם מתקיים כבר אחר הצהריים של יום הנחיתה. לאחר מכן יומיים מלאים בטריטוריית הטורפים המובחרת הזו — אריות, נמרים וברדלסים הם תושבי קבע כאן לאורך כל השנה, לא מבקרים עונתיים — לפני ירידה מודרכת אל מכתש נגורונגורו, הקלדרה השלמה הגדולה בעולם, החותמת את חלק חיות הבר של המסע.",
      "סיור ספארי אחרון בבוקר דרך אגם מניארה, הלחוץ בין מצוק בקע השבר לאגם הבסיסי שלו, משלים את המסע לפני הטיסה חזרה הביתה. חמישה ימים, שתי רמות לינה מקמפי Reserve ועד יוקרת Sovereign, וכמעט ואין זמן המבוזבז ברכב רק כדי להגיע למקום."
    ],
    highlights: [
      "טיסה ישירה מארושה אל לב מרכז הסרנגטי — ללא נסיעה יבשתית של יומיים",
      "יומיים מלאים בטריטוריית טורפים מובחרת: אריות, נמרים וברדלסים לאורך כל השנה",
      "ירידה מודרכת אל מכתש נגורונגורו — הקלדרה השלמה הגדולה בעולם",
      "סיור ספארי באגם מניארה בבוקר האחרון לפני העזיבה",
      "שתי רמות לינה מקמפי Reserve ועד יוקרת Sovereign"
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
      "טיסת שכר ארושה–סרנגטי (בשני הכיוונים)",
      "כל דמי הכניסה לפארקים ולאזורי השימור",
      "כל סיורי הספארי ברכב 4x4 פרטי",
      "מדריך מקצועי לאורך כל הדרך",
      "כל הארוחות כמפורט",
      "לינה בהתאם למסלול",
      "העברות משדה התעופה ובין הקמפים"
    ],
    includedCategorized: {
      transfers: [
        "טיסת שכר ארושה–סרנגטי (בשני הכיוונים)",
        "העברות משדה התעופה ובין הקמפים"
      ],
      accommodationMeals: [
        "כל הארוחות כמפורט",
        "לינה בהתאם למסלול"
      ],
      guidingGameDrives: [
        "כל דמי הכניסה לפארקים ולאזורי השימור",
        "כל סיורי הספארי ברכב 4x4 פרטי",
        "מדריך מקצועי לאורך כל הדרך"
      ]
    },
    excluded: [
      "טיסות בינלאומיות",
      "ויזת כניסה לטנזניה (כ-50$ עבור רוב האזרחויות)",
      "ביטוח נסיעות",
      "טיפים ותשרים",
      "ספארי בכדור פורח (תוספת אופציונלית, כ-550$ לאדם)"
    ],
    excludedCategorized: [
      "טיסות בינלאומיות",
      "ויזת כניסה לטנזניה (כ-50$ עבור רוב האזרחויות)",
      "ביטוח נסיעות",
      "טיפים ותשרים",
      "ספארי בכדור פורח (תוספת אופציונלית, כ-550$ לאדם)",
      "פריטים אישיים, כביסה וחיובי טלפון"
    ],
    notes: [
      "המחירים המוצגים הם לאדם בחדר זוגי/טווין משותף; תוספת עבור חדר יחיד זמינה לפי בקשה.",
      "הלינה והמחירים כפופים לזמינות ועשויים להשתנות בהתאם למועד הנסיעה המדויק.",
      "דמי הפארקים הלאומיים ואזורי השימור בטנזניה נקבעים על ידי הממשלה וכפופים לשינוי ללא הודעה מוקדמת.",
      "נדרש מקדמה של 30% לאישור ההזמנה; היתרה לתשלום 60 יום לפני היציאה."
    ],
    itinerary: [
      {
        day: 1,
        title: "הגעה לארושה",
        description: "הגעה לארושה והעברה ללודג' ללינת לילה, לפני הטיסה המוקדמת אל הסרנגטי.",
        accommodation: "לודג' בארושה",
        meals: "ארוחת ערב ובוקר",
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
        title: "טיסה למרכז הסרנגטי",
        description: "טיסת שכר מוקדמת מרימה אתכם ישירות מארושה אל מרכז הסרנגטי — שעתיים של נסיעה יבשתית מכווצות ל-45 דקות אוויר. סיור הספארי הראשון מתחיל עם הנחיתה, כאשר מישורי הסרנגטי נמתחים לכל אופק ואור אחר הצהריים הופך הכול לזהוב.",
        accommodation: "קמפ אוהלים בסרנגטי",
        meals: "פנסיון מלא",
        insiderFact: "טיסה אל הסרנגטי משמעה שאתם מגיעים עם אנרגיה ולא עם אבק דרכים — סיור הספארי הראשון אחר הצהריים מניב לעיתים קרובות את הצפיות הטובות ביותר של המסע.",
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
        title: "יום מלא בסרנגטי",
        description: "יום מלא של סיורי ספארי על פני המישורים הפתוחים של הסרנגטי. מרכז הסרנגטי מחזיק באוכלוסיות תושבות של אריות, נמרים, ברדלסים, פילים ותאו לאורך כל השנה — זוהי אחת מטריטוריות הטורפים האמינות ביותר באפריקה ללא קשר לתזמון ההנדידה. המדריך שלכם מתכנן את סיורי הספארי סביב חלונות הפעילות השיא בבוקר ובשעות אחר הצהריים המאוחרות.",
        accommodation: "קמפ אוהלים בסרנגטי",
        meals: "פנסיון מלא",
        insiderFact: "עמק סרונרה שבמרכז הסרנגטי מכונה לעיתים 'בירת הטורפים' של אפריקה — גאוות האריות התושבות כאן הן מבין הנחקרות ביותר בעולם.",
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
        title: "מכתש נגורונגורו וקראטו",
        description: "נסיעה דרומה מהסרנגטי וירידה אל מכתש נגורונגורו — מערכת אקולוגית סגורה בשטח של 260 קמ״ר והקלדרה השלמה הגדולה בעולם. יום מלא של סיורי ספארי בין ריכוזי חיות הבר הצפופים ביותר באפריקה: כל החמישייה הגדולה נמצאת שם דרך קבע, כולל אוכלוסייה בריאה של קרנף שחור ההופכת את נגורונגורו לאחד המקומות האמינים האחרונים בטנזניה לצפייה בו. סיום היום בלודג' שלכם בקראטו, ממש מעל שפת המכתש.",
        accommodation: "לודג' בקראטו",
        meals: "פנסיון מלא",
        insiderFact: "נגורונגורו הוא אחד המקומות המעטים באפריקה שבהם ניתן לצפות בקרנף שחור באופן אמין בסיור ספארי של יום אחד — כ-25 פרטים חיים על קרקעית המכתש.",
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
        title: "אגם מניארה וחזרה לארושה",
        description: "סיור ספארי בוקר בפארק הלאומי אגם מניארה — הלחוץ בין מצוק בקע השבר הגדול לאגם הבסיסי שלו, הפארק מכווץ יער, חורש ומים פתוחים למעגל יוצא דופן אחד. ידוע באריות המטפסים על עצים וביותר מ-400 מיני ציפורים. המשך לארושה לטיסה חזרה הביתה.",
        accommodation: "N/A",
        meals: "ארוחת בוקר וצהריים"
      }
    ]
  },
  {
    slug: "kilimanjaro-machame-7day",
    name: "מסלול מצ'אמה בקילימנג'רו — 7 ימים",
    duration: 7,
    destinations: [
      "arusha"
    ],
    type: "mountain_trekking",
    wildlifeTargets: [{ name: 'Blue Monkey', chance: 'High', note: 'montane rainforest zone, Day 1' }, { name: 'Black-and-White Colobus Monkey', chance: 'Rare' }, { name: 'Hartlaub\'s Turaco', chance: 'High', note: 'rainforest belt birdlife' }, { name: 'Bushbuck', chance: 'Rare', note: 'forest-edge sighting' }],
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
    metaDescription: "טפסו לקילימנג'רו במסלול מצ'אמה הנופי בן 7 ימים — שיעור ההצלחה הגבוה ביותר מבין כל מסלולי ההר, עם מדריכי הרים מנוסים, סבלים וציוד מלא. החל מ-2,100$ לאדם.",
    overview: [
      "מסלול מצ'אמה מכונה לעיתים קרובות 'מסלול הוויסקי' בשל שבילו המפותל דרך יער גשם, אדמת ביצות אלפינית ומדבר אלפיני. הוא נחשב באופן נרחב לדרך הנופית ביותר לעלות בה על קילימנג'רו, וזו אחת הסיבות שמסלול זה מציג את אחד משיעורי ההצלחה הגבוהים ביותר בהגעה לפסגה בהר. שבעה ימים מעניקים לגוף את הזמן הדרוש לו, כשהמסלול עובר דרך מגדל הלבה ליום התאקלמות בשיטת 'טיפוס גבוה, שינה נמוך', המחולל הבדל מדיד בלילה של עליית הפסגה.",
      "אתם מלווים לאורך כל הדרך על ידי מדריכי הרים מנוסים, סבל ייעודי לכל מטייל, טבח וצוות קמפ, וציוד הצלה מלא הנישא כדבר שבשגרה. זוהי עלייה עם קמפינג מהלילה הראשון ועד האחרון, כשכל היבט לוגיסטי מטופל עבורכם, מלבד ההליכה בפועל."
    ],
    highlights: [
      "המסלול הנופי ביותר בקילימנג'רו",
      "שיעור ההצלחה הגבוה ביותר מבין כל המסלולים",
      "הגעה לפסגה דרך התאקלמות במגדל הלבה",
      "מדריכי הרים וסבלים מנוסים",
      "ציוד מלא וגיבוי בטיחותי"
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
      "דמי כניסה לפארק ודמי קמפינג",
      "מדריך הרים מנוסה",
      "סבלים (אחד לכל מטייל + סבלי קבוצה)",
      "טבח וצוות קמפ",
      "כל הארוחות בהר",
      "אוהל שינה, אוהל אוכל",
      "ציוד הצלה"
    ],
    excluded: [
      "טיסות בינלאומיות",
      "ציוד טרקינג אישי",
      "ביטוח נסיעות",
      "טיפים",
      "מלון לפני/אחרי הטיול"
    ],
    notes: [
      "המחירים הם לכל מטייל על בסיס קמפינג; אין תוספת עבור יחיד.",
      "ציוד טרקינג אישי (נעליים, שכבות חמות, שק שינה) אינו כלול — רשימת ציוד לאריזה זמינה לפי בקשה.",
      "המחירים והזמינות עשויים להשתנות בהתאם למועד הטיפוס המדויק בתוך עונת הטיפוס.",
      "דמי הפארק הלאומי קילימנג'רו נקבעים על ידי רשות הפארקים הלאומיים של טנזניה (TANAPA) וכפופים לשינוי ללא הודעה מוקדמת."
    ],
    itinerary: []
  },
  {
    slug: "7-day-southern-circuit",
    name: "7 ימים במעגל הדרומי — רואהה וניירה",
    duration: 7,
    destinations: [
      "nyerere",
      "ruaha"
    ],
    type: "big_five_game_drives",
    bestMonths: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    wildlifeTargets: [{ name: 'Lion', chance: 'High', note: 'Ruaha holds an estimated 10% of the world\'s remaining lion population' }, { name: 'African Wild Dog', chance: 'Rare' }, { name: 'Hippopotamus', chance: 'High', note: 'Rufiji River boat safaris' }, { name: 'African Elephant', chance: 'High' }, { name: 'Cape Buffalo', chance: 'High' }, { name: 'Sable Antelope', chance: 'Rare' }],
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
    metaTitle: "7-Day Southern Circuit Safari: Nyerere & Ruaha",
    metaDescription: "ספארי פרטי במעגל הדרומי של טנזניה דרך ניירה ורואהה — אחד משטחי הטבע הפראי הפחות צפופים באפריקה. זמין בשתי רמות, בנסיעה בכביש או בטיסה פנימית, החל מ-4,320$ לאדם.",
    overview: [
      "המעגל הדרומי של טנזניה קולט חלק קטן בלבד מהתנועה שמקבל הצפון — ניירה ורואהה יחד משתרעים על פני 74,826 קמ״ר (28,891 מייל רבוע) של שטח פרא מוגן, יותר שטח ממה שיש לרוב המדינות בעולם בסך הכול, וכמעט ואין בו צפיפות. תוכנית זו מחברת בין שני הפארקים עם לילה בדאר א-סלאם כדי להקל על ההתאקלמות עם ההגעה, ולאחר מכן מעניקה לכם בחירה כיצד לנוע בהמשך המסע.",
      "7 ימים / 6 לילות — לילה אחד בדאר א-סלאם · שני לילות בפארק הלאומי ניירה · שלושה לילות בפארק הלאומי רואהה.",
      "זמין בשתי רמות, שלכל אחת מהן אופי משלה לא פחות ממחיר משלה: Wilderness Reserve היא המשלחת היבשתית — רכב ומדריך פרטיים החוצים בפועל את השטח שבין הפארקים. Wilderness Sovereign היא גרסת הטיסה הפנימית — כל קטע באוויר, המחליף זמן מעבר בשעות נוספות בקמפ וברמת נוחות גבוהה יותר באופן ניכר לכל אורך הדרך."
    ],
    highlights: [
      "ניירה ורואהה יחד — 74,826 קמ״ר (28,891 מייל רבוע) של שטח פרא מוגן, יותר שטח ממה שיש לרוב המדינות בעולם בסך הכול",
      "אחת מאוכלוסיות כלבי הבר האפריקאיים הגדולות שנותרו ביבשת, בניירה",
      "רואהה מחזיקה בכ-10% משוער מאוכלוסיית האריות שנותרה בעולם",
      "ספארי בסירה על נהר רופיג'י — התמחות ייחודית לניירה שאינה קיימת בשום מקום אחר במעגל הדרומי",
      "ספארי הליכה ברגל בניירה, בהנחיית שומר חמוש",
      "שתי דרכי מסע: משלחת יבשתית ב-Wilderness Reserve, או טיסה פנימית מלאה ב-Wilderness Sovereign",
      "חלק משטחי הפרא המוגנים הכי פחות צפופים שנותרו במזרח אפריקה"
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
      "כל דמי הפארקים והזיכיונות",
      "פנסיון מלא לאורך כל הדרך",
      "כל סיורי הספארי והפעילויות המפורטים",
      "הטיסה/ות הפנימיות המפורטות בכל רמה",
      "העברות משדה התעופה"
    ],
    includedCategorized: {
      transfers: [
        "העברות משדה התעופה",
        "הטיסה/ות הפנימיות המפורטות בכל רמה"
      ],
      accommodationMeals: [
        "פנסיון מלא לאורך כל הדרך",
        "לינה בהתאם למסלול"
      ],
      guidingGameDrives: [
        "כל דמי הפארקים והזיכיונות",
        "כל סיורי הספארי והפעילויות המפורטים",
        "מדריך מקצועי לאורך כל הדרך"
      ]
    },
    excluded: [
      "טיסות בינלאומיות לדאר א-סלאם",
      "ויזות",
      "ביטוח נסיעות",
      "תשרים",
      "הוצאות אישיות"
    ],
    excludedCategorized: [
      "טיסות בינלאומיות לדאר א-סלאם",
      "ויזות",
      "ביטוח נסיעות",
      "תשרים",
      "הוצאות אישיות"
    ],
    notes: [
      "המחירים המוצגים הם לאדם בחדר זוגי/טווין משותף; תוספת עבור חדר יחיד זמינה לפי בקשה.",
      "אין מסלול כביש מעשי בין ניירה לרואהה, כך ששתי הרמות טסות בקטע הפנימי הזה.",
      "הלינה והמחירים כפופים לזמינות ועשויים להשתנות בהתאם למועד הנסיעה המדויק בתוך העונה.",
      "דמי הפארקים הלאומיים ואזורי השימור בטנזניה נקבעים על ידי הממשלה וכפופים לשינוי ללא הודעה מוקדמת."
    ],
    faq: [
      {
        q: "מה ההבדל בין שתי הרמות?",
        a: "בעיקר איך אתם נעים והיכן אתם ישנים. Wilderness Reserve נוסעת בקטע דאר–ניירה ומתארחת בקמפים פשוטים וממוקמים היטב; Wilderness Sovereign טסה בכל קטע, כולל ההעברה הראשונה, ומאכסנת אתכם במתחמים מתוחכמים יותר לכל אורך הדרך. שתי הרמות מבקרות באותם שני פארקים, למספר לילות זהה, עם אותם סיורי ספארי ופעילויות כלולים."
      },
      {
        q: "מדוע הקטע ניירה–רואהה מתבצע בטיסה בשתי הרמות, גם בספארי הכביש?",
        a: "אין מסלול כביש מעשי בין שני הפארקים — הגיאוגרפיה פשוט לא מאפשרת זאת בלוח זמנים של שבעה ימים. Wilderness Reserve נוסעת בכל מקום שבו ניתן ועפה רק היכן שחייבים; Wilderness Sovereign טסה לכל אורך הדרך לצורך עקביות ונוחות."
      },
      {
        q: "עד כמה מסלול זה תובעני מבחינה גופנית?",
        a: "סיורי הספארי מתקיימים בישיבה ואינם דורשים כושר גופני מיוחד. ספארי ההליכה האופציונלי בניירה מתבצע בשבילים מבוססים בקצב מדוד, בהנחיית שומר חמוש — מבוגרים בכושר סביר מתמודדים עמו בנוחות, אך אלה אינם מסלולי הליכה טכניים."
      },
      {
        q: "מהי העונה הטובה ביותר בשנה לספארי זה?",
        a: "עונת היובש (בערך יוני עד אוקטובר) מציעה את תנאי הצפייה הברורים ביותר בשני הפארקים, עם צמחייה דלילה יותר וחיות בר המתרכזות סביב מקורות מים קבועים. שני הפארקים נגישים גם מחוץ לחלון זה, אם כי גשמי אחר הצהריים הופכים סבירים יותר."
      },
      {
        q: "האם נראה את החמישייה הגדולה?",
        a: "בשני הפארקים אוכלוסיות בריאות של אריות, נמרים, פילים ותאו; צפיות בקרנפים נדירות באזור זה בהשוואה לאזור נגורונגורו, כך שעדיף לתפוס מסלול זה סביב אוכלוסיות כלבי הבר וההיפופוטמים של ניירה וצפיפות האריות היוצאת דופן של רואהה, ולא כרשימת סימון של החמישייה הגדולה."
      },
      {
        q: "כמה משתנה המחיר בהתאם לגודל הקבוצה?",
        a: "עלויות הרכב, המדריך והדלק מתחלקות בין חברי הקבוצה ב-Wilderness Reserve, וכמה עלויות קבועות מתחלקות באופן דומה ב-Wilderness Sovereign, כך שהמחיר לאדם יורד ככל שמצטרפים נוסעים נוספים — ראו את טבלת המחירים למעלה למספרים המדויקים."
      },
      {
        q: "מה כלול במחיר, ומה לא?",
        a: "כלול: כל דמי הפארקים והזיכיונות, פנסיון מלא לאורך כל הדרך, כל סיורי הספארי והפעילויות המפורטים, הטיסה/ות הפנימיות המפורטות בכל רמה, והעברות משדה התעופה. לא כלול: טיסות בינלאומיות לדאר א-סלאם, ויזות, ביטוח נסיעות, תשרים והוצאות אישיות."
      },
      {
        q: "האם מסע זה מתאים לנוסעים יחידים?",
        a: "כן, אם כי המחירים המוצגים למעלה הם לאדם בחדר משותף; נוסע יחיד ישלם תוספת יחיד על הלינה בכל אחת מהרמות. שאלו את היועץ שלכם לגבי תעריף ליחיד."
      },
      {
        q: "האם ניתן לשלב זאת עם פארקים נוספים או להאריך את המסע?",
        a: "כן — המעגל הדרומי משתלב באופן טבעי עם הארכת חוף בזנזיבר, או ניתן לשלב אותו עם ספארי במעגל הצפוני עבור נוסעים המעוניינים לראות את שני חלקי טנזניה במסע אחד. שאלו את היועץ שלכם לגבי הארכה או שילוב של התוכנית הזו."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "הגעה לדאר א-סלאם",
        description: "הגעה לדאר א-סלאם. העברה פרטית משדה התעופה.",
        accommodation: "דאר א-סלאם, משתנה לפי רמה",
        meals: "ארוחת ערב",
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
        title: "אל הפארק הלאומי ניירה",
        description: "Reserve: נסיעה דאר ← הפארק הלאומי ניירה (כארבע שעות בכביש). Sovereign: טיסה דאר ← ניירה. ספארי בסירה עם ההגעה בשתי הרמות.",
        accommodation: "ניירה, משתנה לפי רמה",
        meals: "פנסיון מלא",
        insiderFact: "ניירה (לשעבר שמורת הטבע סלוס) הוא שטח הפרא המוגן הגדול ביותר באפריקה, בשטח של 54,600 קמ״ר (21,081 מייל רבוע) — בערך בגודלה של שווייץ.",
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
        title: "יום מלא בניירה",
        description: "יום מלא בניירה — סיור ספארי וספארי הליכה.",
        accommodation: "ניירה, משתנה לפי רמה",
        meals: "פנסיון מלא",
        insiderFact: "ניירה מחזיקה באחת מאוכלוסיות כלבי הבר האפריקאיים הגדולות שנותרו באפריקה, לצד מספרים גבוהים של היפופוטמים לאורך נהר רופיג'י.",
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
        title: "טיסה לפארק הלאומי רואהה",
        description: "טיסה מניירה אל הפארק הלאומי רואהה.",
        accommodation: "רואהה, משתנה לפי רמה",
        meals: "פנסיון מלא",
        insiderFact: "רואהה הוא הפארק הלאומי הגדול ביותר בטנזניה, בשטח של 20,226 קמ״ר (7,809 מייל רבוע), ומחזיק בכ-10% משוער מאוכלוסיית האריות שנותרה בעולם.",
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
        title: "רואהה, יום מלא",
        description: "יום מלא ברואהה — סיורי ספארי.",
        accommodation: "רואהה, משתנה לפי רמה",
        meals: "פנסיון מלא",
        insiderFact: "נהר רואהה הגדול מהווה עוגן לצפייה בחיות בר לאורך הקצה הדרום-מזרחי של הפארק — פילים ותאו נעים כאן בעדרים גדולים.",
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
        title: "רואהה, יום מלא",
        description: "יום מלא ברואהה — סיורי ספארי.",
        accommodation: "רואהה, משתנה לפי רמה",
        meals: "פנסיון מלא",
        insiderFact: "רואהה גם מציעה חלק מהסיכויים הטובים ביותר בטנזניה לצפייה באנטילופת סייבל ואנטילופת רואן.",
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
        title: "עזיבה",
        description: "טיסה מרואהה לדאר א-סלאם. עזיבה.",
        accommodation: "N/A",
        meals: "ארוחת בוקר"
      }
    ]
  },
  {
    slug: "5-days-highlights-safari",
    name: "ספארי 5 ימים – המבחר",
    duration: 5,
    destinations: [
      "serengeti",
      "ngorongoro"
    ],
    type: "big_five_game_drives",
    bestMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    wildlifeTargets: [{ name: 'Lion', chance: 'High' }, { name: 'African Elephant', chance: 'High' }, { name: 'Cape Buffalo', chance: 'High' }, { name: 'Black Rhino', chance: 'High' }, { name: 'Leopard', chance: 'Rare' }, { name: 'Wildebeest', chance: 'Seasonal', note: 'Great Migration' }],
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
    metaTitle: "5-Day Private Serengeti & Ngorongoro Fly-In Safari | From $3,337pp",
    metaDescription: "ספארי פרטי ומודרך במלואו למשך 5 ימים בטיסה פנימית — מהסרנגטי למכתש נגורונגורו, שלוש רמות לינה מ-Wilderness Trail ועד Wilderness Sovereign. החל מ-3,337$ לאדם.",
    overview: [
      "חמישה ימים הם די והותר זמן כדי להבין מדוע הסרנגטי ומכתש נגורונגורו מהווים עוגן ליותר מסלולי ספארי מכל צמד אחר באפריקה — בתנאי שמדלגים לחלוטין על הכביש וטסים ישירות אל המישורים. תוכנית זו עושה בדיוק זאת: מטוס קל נושא אתכם מארושה למסלול ההמראה סרונרה ביום 1, ומשם מדובר בסיורי ספארי, לא במעבר, לשארית המסע. יומיים מלאים במעקב אחר גאוות האריות התושבות של הסרנגטי, ובהתאם לעונה, אחר ההנדידה של הווילדביסט עצמה, ולאחר מכן יום שלם בתוך מכתש נגורונגורו — הריכוז הצפוף ביותר של חיות בר ביבשת כולה — לפני ירידה אחרונה דרך הכפר מטו וה מבו בדרך חזרה לארושה.",
      "זמין בשלוש רמות — Wilderness Trail, Wilderness Reserve ו-Wilderness Sovereign — כל אחת בנויה סביב רמה שונה של קמפים ולודג'ים, כך שהמסלול עצמו נשאר זהה בעוד שהחוויה של המעבר בו משתנה באופן ניכר.",
      "ספארי זה משתלב באופן טבעי במסע רחב יותר במזרח אפריקה — ניתן להאריך אותו לקניה או לרואנדה, או להוסיף הארכת חופשת חוף לאחר סיור הספארי האחרון."
    ],
    highlights: [
      "טיסה ישירה אל הסרנגטי — דלגו על ההעברה היבשתית של שעות ארוכות והשקיעו את אחר הצהריים הראשון בסיור ספארי במקום",
      "יומיים מלאים בסרנגטי — די זמן כדי לעקוב בפועל אחר תנועת הטורפים, לא רק להבחין בהם לרגע",
      "טריטוריית החמישייה הגדולה, מתחילת המסלול ועד סופו — אריות, נמרים, פילים, תאו וקרנפים הם כולם צפיות ריאליות לאורך מסלול זה",
      "מכתש נגורונגורו, קערת חיות הבר של אפריקה — יום שלם בתוך מערכת אקולוגית סגורה המחזיקה באחד הריכוזים הגבוהים ביותר של חיות בר בעולם",
      "הכפר התרבותי מטו וה מבו — עצירה אותנטית וללא חיפזון בדרך חזרה לארושה, לא הזדמנות צילום חפוזה בצד הדרך",
      "ניתן לשלב בקלות עם קניה או רואנדה, או להאריך לכיוון החוף — מסלול זה עומד כמסע בפני עצמו או משמש כקטע אחד ממסע ארוך יותר במזרח אפריקה",
      "כל רמות הנוחות מיוצגות — מאווירה מוקפדת וצנועה ועד לתחכום אמיתי, מבלי לשנות ולו יום אחד מהמסלול עצמו"
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
      "כל דמי הכניסה לפארקים",
      "כל סיורי הספארי ברכב Land Cruiser 4x4",
      "מדריך מקצועי דובר אנגלית",
      "כל הארוחות",
      "לינה בהתאם למסלול",
      "העברות משדה התעופה"
    ],
    excluded: [
      "טיסות בינלאומיות",
      "אגרות ויזה",
      "ביטוח נסיעות",
      "טיפים",
      "הוצאות אישיות"
    ],
    notes: [
      "המחירים המוצגים הם לאדם בחדר זוגי/טווין משותף; תוספת עבור חדר יחיד זמינה לפי בקשה.",
      "גודל קבוצה מינימלי של 2 אנשים כדי שטיסת השכר לסרונרה תהיה כדאית.",
      "הלינה והמחירים כפופים לזמינות ועשויים להשתנות בהתאם למועד הנסיעה המדויק בתוך העונה.",
      "דמי הפארקים הלאומיים ואזורי השימור בטנזניה נקבעים על ידי הממשלה וכפופים לשינוי ללא הודעה מוקדמת."
    ],
    faq: [
      {
        q: "מה ההבדל בין שלוש הרמות?",
        a: "בכל מקרה תגיעו לאותם המקומות ותצפו באותה חיית הבר — זה החלק שלעולם לא משתנה. מה שכן משתנה הוא רמת הטיפול בין הסיורים: Wilderness Trail שומרת על נוחות וצניעות, Wilderness Reserve מעניקה לכם קצת יותר מרחב להירגע, ו-Wilderness Sovereign מאכסנת אתכם במקום מיוחד באמת בכל לילה ולילה. בחרו את הרמה שמתאימה לאופן שבו אתם אוהבים לטייל."
      },
      {
        q: "האם כל הרמות טסות אל הסרנגטי באותו האופן?",
        a: "כן — כל מסע מתחיל באותו אופן, המראה מארושה ונחיתה על מישורי הסרנגטי הפתוחים תוך פחות משעה. מרגע הנחיתה, ההבדל היחיד הוא היכן תניחו את הראש בכל ערב."
      },
      {
        q: "האם נראה את ההנדידה הגדולה?",
        a: "זו השאלה שכולם שואלים, ואנו מאחלים שיכולנו להבטיח תאריך ומקום. מה שאנו כן יכולים להבטיח הוא חמישה ימים בטריטוריית אריות ונמרים תושבי קבע, שבה ניתן לצפות בהם לאורך כל השנה ללא קשר למקום שאליו נדדו העדרים. אם תזמון ההנדידה עצמה חשוב לכם במיוחד, שוחחו עם היועץ שלכם לפני ההזמנה — נעזור לכם לבחור תאריכים שיעניקו לכם את הסיכוי הטוב ביותר."
      },
      {
        q: "האם המחיר משתנה אם אנו נוסעים כקבוצה?",
        a: "לרוב כן, במידה מסוימת — חלק מהעלויות כמו הרכב והמדריך מתחלקות, כך שקבוצה גדולה יותר יכולה להקל על הסכום הכולל לאדם. עיינו בטבלת המחירים תחת כל רמה למעלה כדי לראות כיצד זה מתבטא עבור גודל הקבוצה שלכם."
      },
      {
        q: "מה כלול, ועל מה כדאי לתכנן בנפרד?",
        a: "בנינו את המחיר סביב כל מה שחשוב ברגע שאתם כאן: דמי פארקים ואזורי שימור, כל סיור ספארי ברכב פרטי, המדריך, הארוחות, הלינה, וההעברות מהשדה תעופה ואליו. מה שנותר לתכנן בעצמכם הוא ההגעה לטנזניה — טיסות בינלאומיות, ויזות, ביטוח נסיעות, והטיפים שתרצו להשאיר לאנשים שהופכים את המסע לבלתי נשכח."
      },
      {
        q: "האם ניתן להפוך את זה למסע גדול יותר — קניה, רואנדה, או כמה ימים בחוף?",
        a: "בהחלט, ורבים מהנוסעים שלנו עושים בדיוק זאת. ספארי זה משתלב להפליא לצד ספארי בקניה או טרק גורילות ברואנדה, ואם כמה ימים שקטים על החול נשמעים כמו הדרך הנכונה לסיים את המסע, נוכל לתאם גם את זה, מיד לאחר סיור הספארי האחרון שלכם. פשוט ציינו זאת בעת התכנון, ואנו נעזור לכם לבנות סביב כך את כל המסע."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "טיסה אל הסרנגטי",
        description: "טיסה מארושה למסלול ההמראה סרונרה, מרכז הסרנגטי. סיור ספארי אחר הצהריים.",
        accommodation: "מרכז הסרנגטי, משתנה לפי רמה",
        meals: "ארוחת צהריים וערב",
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
        title: "סיורי ספארי בסרנגטי",
        description: "יום מלא של סיורי ספארי בסרנגטי.",
        accommodation: "מרכז הסרנגטי, משתנה לפי רמה",
        meals: "כל הארוחות",
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
        title: "ממרכז הסרנגטי לאזור השימור נגורונגורו",
        description: "נסיעה ממרכז הסרנגטי אל אזור השימור נגורונגורו.",
        accommodation: "אזור נגורונגורו, משתנה לפי רמה",
        meals: "כל הארוחות",
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
        title: "מכתש נגורונגורו",
        description: "יום מלא, ירידה אל מכתש נגורונגורו.",
        accommodation: "אזור נגורונגורו, משתנה לפי רמה",
        meals: "כל הארוחות",
        insiderFact: "מכתש נגורונגורו הוא מערכת אקולוגית סגורה בשטח של כ-260 קמ״ר — רוב בעלי החיים התושבים בו לעולם אינם עוזבים אותו.",
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
        title: "עזיבה דרך מטו וה מבו",
        description: "נסיעה חזרה לארושה דרך הכפר מטו וה מבו. העברה לשדה התעופה, טיסה הביתה.",
        accommodation: "N/A",
        meals: "ארוחת בוקר"
      }
    ]
  },
  {
    slug: "8-days-honeymoon-safari",
    name: "ספארי ירח דבש 8 ימים — אוהבי הספארי",
    duration: 8,
    destinations: [
      "tarangire",
      "manyara",
      "ngorongoro",
      "serengeti"
    ],
    type: "big_five_game_drives",
    bestMonths: ['Jul', 'Aug', 'Sep', 'Oct'],
    wildlifeTargets: [{ name: 'African Elephant', chance: 'High' }, { name: 'Lion', chance: 'High' }, { name: 'Leopard', chance: 'Rare' }, { name: 'Black Rhino', chance: 'High' }, { name: 'Cape Buffalo', chance: 'High' }, { name: 'Wildebeest', chance: 'Seasonal', note: 'Jul-Oct migration' }],
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
    tagline: "רק שניכם והמדריך שלכם",
    metaDescription: "ספארי ירח דבש פרטי בן 8 ימים בטנזניה לשני אוהבים — טרנגירה, רמות נגורונגורו והסרנגטי, כאשר כל סיור ספארי וכל קמפ שמורים רק בשבילכם. החל מ-3,824$ לאדם.",
    overview: [
      "אתם רוצים שירח הדבש שלכם ירגיש הרפתקני ויוצא דופן — לא עוד כיסא חוף עם נוף. ספארי ירח הדבש הזה בן 8 הימים בטנזניה נבנה בדיוק לשם כך: שבעה לילות של מעבר בין טרנגירה, רמות נגורונגורו והסרנגטי, כאשר כל סיור ספארי פרטי וכל קמפ נבחר בשל סוג השקט שמגיע רק מלהיות רחוקים מכל אדם אחר. שלבו זאת עם כמה ימים במורדות התחתונים של קילימנג'רו או קטע חול בזנזיבר, לפני או אחרי, ותקבלו ירח דבש שמתחיל בפילים ומסתיים כרצונכם.",
      "המסלול, הקצב וחיות הבר זהים בכל מקרה — מה שמשתנה הוא היכן תישנו. בנינו מסלול זה בשתי רמות, כדי שתוכלו לבחור בהתאם לכמה מהתקציב שלכם תרצו להשקיע בלינה לעומת, למשל, אותה הארכת חופשה בזנזיבר."
    ],
    whyDifferent: {
      heading: "למה זוגות בוחרים במסלול הזה",
      paragraphs: [
        "רכב פרטי, מתחילת המסע ועד סופו. ללא סיורי ספארי משותפים, ללא המתנה לעצירות צילום של נוסעים אחרים. רק המדריך שלכם, הקצב שלכם, וכמה זמן שתרצו לשבת עם גאוות אריות לפני שממשיכים הלאה.",
        "שלושה נופים, ללא חזרתיות. המישורים המנוקדים בבאובאבים של טרנגירה עוברים לרמות המכתש, ואז לעשב האינסופי של הסרנגטי — לכל אחד מהם קצב ואור שונים לחלוטין.",
        "קבלת פנים עם שמפניה שאינה תוספת בדיעבד. הלילה הראשון שלכם בארושה נפתח בשמפניה קרה, שמורה במיוחד עבור שניכם, עוד לפני שהספארי בכלל מתחיל.",
        "פנסיון מלא, בכל קמפ. ארוחות בוקר, צהריים וערב מטופלות בכל עצירת לינה, כך שההחלטה היחידה שנותרת בכל יום היא לאיזה כיוון להפנות את הרכב."
      ]
    },
    destinationHighlights: {
      heading: "שתי דרכים לחוות את המסע הזה",
      items: [
        {
          title: "Wilderness Reserve",
          text: "המסע בגרסתו הצנועה ביותר: קמפי אוהלים ולודג'ים מנוהלים היטב — Kahawa House, Zuri Kilima Siri בטרנגירה, Tloma Lodge ברמות קראטו, וקמפ הסרנגטי של Conserve Safari — כולם פנסיון מלא, כולם נוחים, ואף אחד מהם לא מנסה להיות ריזורט. כאן נוחתים רוב זוגות ירח הדבש שלנו."
        },
        {
          title: "Wilderness Sovereign",
          text: "לוקח את אותם הימים ואת אותו המסלול ומאכסן אתכם בכל לילה במקום מוקפד יותר: הווילה הפרטית של Siringiti בארושה, הקמפ שלהם בטרנגירה, Gibb's Farm ברמות קראטו (חוות קפה פעילה, אחד הנופים הטובים באמת באזור), וקמפ הסרנגטי של Siringiti. זוהי הרמה עבור זוגות שרוצים שירח הדבש עצמו — לא רק הספארי — ירגיש כמו האירוע המרכזי."
        }
      ]
    },
    highlights: [
      "רכב פרטי, מתחילת המסע ועד סופו",
      "שלושה נופים, ללא חזרתיות",
      "קבלת פנים עם שמפניה שאינה תוספת בדיעבד",
      "פנסיון מלא, בכל קמפ"
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
      "כל דמי הכניסה לפארקים",
      "רכב 4x4 פרטי ומדריך לכל סיור ספארי",
      "קבלת פנים פרטית עם שמפניה עם ההגעה",
      "כל הארוחות לאורך המסע (בוקר, צהריים וערב בכל קמפ)",
      "לינה כמתואר למעלה, ברמה שבחרתם",
      "העברה משדה התעופה עם ההגעה וטיסה פנימית עם העזיבה (מהסרנגטי לקילימנג'רו)"
    ],
    excluded: [
      "טיסות בינלאומיות",
      "אגרות ויזה",
      "ביטוח נסיעות",
      "תשרים למדריך ולצוות",
      "טיפולי ספא ותוספות אישיות אחרות",
      "ארוחת ערב בליל ההגעה (יום 1 כולל לינה וארוחת בוקר בלבד — קבלת הפנים עם השמפניה היא במתנה מאיתנו; ארוחת ערב בארושה ניתנת לתיאום בקלות לפי בקשה)"
    ],
    notes: [
      "מחיר לשני אנשים משותפים; מסלול זה מיועד באופן בלעדי לזוגות.",
      "ניתן להוסיף כמה ימים בזנזיבר או במורדות התחתונים של קילימנג'רו לפני או אחרי הספארי — שאלו על אפשרויות הארכה בעת הפנייה.",
      "מקדמה של 30% מבטיחה את התאריכים שלכם, כאשר היתרה לתשלום 60 יום לפני הטיסה.",
      "הלינה והמחירים כפופים לזמינות ועשויים להשתנות בהתאם למועד הנסיעה המדויק בתוך העונה.",
      "דמי הפארקים הלאומיים ואזורי השימור בטנזניה נקבעים על ידי הממשלה וכפופים לשינוי ללא הודעה מוקדמת."
    ],
    faq: [
      {
        q: "האם זהו ספארי פרטי, או שנשתף סיורי ספארי עם אורחים אחרים?",
        a: "פרטי לחלוטין, בכל יום. זה לא ניתן למשא ומתן במסלול הזה — זה הרכב שלכם, המדריך שלכם, ואין לוח זמנים של אף אחד אחר להתחשב בו. אם תרצו להישאר בצפייה במשך ארבעים דקות או לדלג על עצירה לגמרי, זו ההחלטה שלכם, לא הצבעה קבוצתית."
      },
      {
        q: "מה בעצם ההבדל בין Wilderness Reserve ל-Wilderness Sovereign?",
        a: "המסלול וחיות הבר לא משתנים — אתם רואים את אותם הפארקים, אותה הנדידה, אותו המכתש. מה שמשתנה הוא הלינה בכל לילה. Reserve מאכסנת אתכם בקמפים מנוהלים היטב ונוחים שלא מנסים להיות יותר ממה שהם. Sovereign מאכסנת אתכם במקום מעט מיוחד יותר — וילות פרטיות, חוות קפה פעילות, קמפים עם יחס צוות-אורחים גבוה יותר ועיצוב מוקפד יותר. אם אתם מחליטים היכן להשקיע יותר במסע הזה, זה המנוף."
      },
      {
        q: "האם 8 ימים מספיקים לירח דבש בטנזניה?",
        a: "זהו אורך טוב — מספיק ארוך כדי להשתקע בכל פארק ולא רק לסמן אותו, קצר מספיק כדי שלא יבלע את כל ימי החופשה שלכם. אם תוכלו להוסיף 3–4 ימים בסוף עבור זנזיבר או כמה לילות ליד קילימנג'רו, אנו ממליצים על כך, אך מסלול זה עומד גם היטב בפני עצמו."
      },
      {
        q: "האם נראה את הנדידת הווילדביסט?",
        a: "תלוי בתאריכי הנסיעה שלכם. ההנדידה נעה במעגל שנתי גס דרך המערכת האקולוגית של הסרנגטי, כך שמיקום העדרים משתנה מחודש לחודש — לעיתים זו עונת ההמלטה במישורים הדרומיים, ולעיתים אלו חציות נהר בצפון. ספרו לנו את תאריכי הנסיעה שלכם בעת הפנייה, ונתאים את מסלול ימים 6–7 כדי להעניק לכם את הסיכוי הטוב ביותר לכל מה שההנדידה עושה באותה נקודה בשנה."
      },
      {
        q: "האם נוכל להוסיף את זנזיבר או קילימנג'רו?",
        a: "כן — זו אחת הבקשות הנפוצות ביותר שאנו מקבלים, וזה עובד היטב מבחינה לוגיסטית מכיוון שהטיסה שלכם ביום 8 כבר עוברת דרך המרכז המרכזי. כמה ימים בחוף לאחר אבק הסרנגטי הם שילוב טוב באמת. שאלו אותנו על אפשרויות הארכה בעת הפנייה."
      },
      {
        q: "על מה כדאי לתקצב מעבר למחיר החבילה?",
        a: "תשרים למדריך ולצוות הקמפ אינם כלולים (הערכה גסה היא 15–20$ ליום לזוג עבור המדריך, בתוספת מעטפת טיפ משותפת לצוות בכל קמפ), וכך גם לא משקאות מעבר למשקאות הבית ברוב הקמפים, טיפולי ספא, או כל דבר שנחשב מזכרת אישית. ביטוח נסיעות הוא גם באחריותכם לתאם — היינו ממליצים לא לוותר עליו."
      },
      {
        q: "האם עלינו לדאוג לביטחון או להכנה בריאותית?",
        a: "טנזניה היא יעד ספארי מבוסס ומודע לבטיחות, וזהו מסע פרטי עם מדריך מנוסה לאורך כל הדרך, כך שאתם לא מתמודדים עם דבר לבד. תרצו לוודא תרופה נגד מלריה לפני הנסיעה (זהו אזור מלריה) ולסדר את החיסונים הסטנדרטיים לנסיעות — הרופא שלכם או מרפאת נסיעות יכולים לייעץ לגבי הפרטים המתאימים לנסיבות שלכם."
      },
      {
        q: "כמה זמן מראש כדאי להזמין?",
        a: "בעונת השיא (בערך יולי–אוקטובר, בתוספת חגי דצמבר), 6–12 חודשים מראש מעניקים לכם בחירה ראשונה מבין הקמפים והחדרים הטובים יותר — תאריכי ירח דבש במיוחד מוזמנים מוקדם. עונות הביניים והשפל סלחניות יותר, אך ככל שנקבע תאריכים מוקדם יותר, כך תהיה לנו יותר גמישות בפרטים."
      },
      {
        q: "האם 4x4 עם גג נפתח באמת הכרחי, או שזו רק מכירה נוספת?",
        a: "זו לא מכירה נוספת — זהו ההבדל בין תמונה טובה לתמונה מעולה, וחשוב מכך, בין שבעה ימים נוחים לימים צפופים. כל רכב במסלול זה הוא רכב ספארי 4x4 אמיתי עם גג נפתח לצפייה בחיות בר, פרטי לשניכם בלבד."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "ארושה",
        description: "הטיסה שלכם נוחתת בקילימנג'רו הבינלאומי, והמדריך שלכם מחכה. הנסיעה לארושה קצרה, ועד שתתמקמו, תמצא לכם בקבוק שמפניה קרה עם שמכם עליו. אין סיורי ספארי היום — רק הערב השקט הראשון של להיות נשואים.",
        accommodation: "Kahawa House",
        meals: "ארוחת בוקר",
        insiderFact: "ארושה נמצאת בגובה נוח עם אקלים קריר יותר מהמישורים שלפניכם — ארזו שכבה קלה לערב הראשון שלכם.",
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
        title: "אל טרנגירה",
        description: "הכביש הדרומי מביא אתכם לטרנגירה עד אמצע היום, בזמן לארוחת צהריים לפני תחילת סיור הספארי אחר הצהריים. זוהי טריטוריית פילים — עדרים של שלושים ומעלה אינם דבר יוצא דופן, נעים לאורך הנהר ששומר על הפארק ירוק גם בעונת היובש. עם ירידת האור, המדריך שלכם מוצא מקום לשתיית שקיעה פרטית בין הבאובאבים, שחלקם עומדים כבר למעלה מאלף שנה.",
        accommodation: "Zuri Kilima Siri",
        meals: "כל הארוחות",
        insiderFact: "הבאובאבים של טרנגירה יכולים לחיות הרבה למעלה מאלף שנה ולאגור מספיק מים בגזעם כדי לשרוד חודשים של בצורת — בקשו מהמדריך שלכם להצביע על העתיקים ביותר.",
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
        title: "טרנגירה, ללא חיפזון",
        description: "יום מלא ללא כל מקום אחר להיות בו. טרנגירה מתגמלת סבלנות — זהו הזמן שבו סביר שתראו את העדרים בשולי המים, לצד ג'ירפות, זברות, ומדי פעם פיתון שנח על עץ בשולי הנהר. הקמפ שלכם ללילה נמצא בתוך הפארק עצמו, כך שקולות הבוש הם הדבר האחרון שתשמעו לפני השינה.",
        accommodation: "Zuri Kilima Siri",
        meals: "כל הארוחות",
        insiderFact: "עונת היובש מרכזת את חיות הבר בצפיפות לאורך נהר טרנגירה — ככל שהנסיעה קרובה יותר לאוקטובר, כך העדרים נוטים להיות גדולים יותר.",
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
        title: "אל רמות קראטו",
        description: "נסיעת הבוקר לוקחת אתכם דרך הפארק הלאומי אגם מניארה — פלמינגואים מציפים את המים הרדודים, ואם יתמזל מזלכם, אחד מהאריות המפורסמים המטפסים על עצים של הפארק שוכב על ענף שיטה. משם, הכביש עולה אל הרמות הקרירות והירוקות סביב קראטו, שם תבלו את הלילה לפני הירידה מחר אל המכתש.",
        accommodation: "Tloma Lodge",
        meals: "כל הארוחות",
        insiderFact: "קראטו נמצאת בגובה של מעל 1,500 מטר, קרירה באופן ניכר מהמישורים שלמטה — כדאי להחזיק שכבה נוספת לערב.",
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
        title: "מכתש נגורונגורו, ולאחר מכן הסרנגטי",
        description: "יציאה מוקדמת מביאה אתכם אל המכתש בעוד האור עדיין רך — 260 קילומטרים רבועים של עשב, יער ואגם בסיסי, המחזיקים באחד הריכוזים הצפופים ביותר של חיות בר ביבשת כולה. אריות, פילים והקרנף השחור המפורסם של המכתש הם כולם אפשרויות ממשיות בבוקר אחד. עד אחר הצהריים, אתם בדרך מערבה לכיוון הסרנגטי, מגיעים לקמפ כשהשמיים הופכים כתומים.",
        accommodation: "Conserve Safari Serengeti Camp",
        meals: "כל הארוחות",
        insiderFact: "קרקעית המכתש נשארת קרירה במספר מעלות משפת המכתש, אפילו בצהריים — הביאו מעיל קל לירידה.",
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
        title: "בעומק הסרנגטי",
        description: "זהו היום שבו הסרנגטי מוכיח את שמו — 'המישורים האינסופיים', ותרגישו בכך. ברדלסים סורקים אחר תנועה מראש גבעות טרמיטים, גאוות אריות משתרעות בכל צל שהן מוצאות, והמדריך שלכם קורא את הנוף כמו שפה שאתם רק מתחילים ללמוד. ארוחת הערב הלילה היא לאור נרות, מוגשת בחוץ תחת יותר כוכבים ממה שכל אחד מכם ראה כנראה אי פעם בבת אחת.",
        accommodation: "Conserve Safari Serengeti Camp",
        meals: "כל הארוחות",
        insiderFact: "שאלו את המדריך שלכם על המיקום הנוכחי של ההנדידה — חיות הבר התושבות של הסרנגטי מצוינות לאורך כל השנה, אך תזמון הביקור סביב העדרים מוסיף שכבה שונה לגמרי.",
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
        title: "בעקבות ההנדידה",
        description: "אם תאריכי הנסיעה שלכם מתואמים איתה, היום בנוי סביב הנדידת הווילדביסט — מאות אלפי בעלי חיים נעים בגוש חסר מנוחה אחד על פני המישורים. בין אם העדרים נמצאים בקטע שלכם בסרנגטי ובין אם לא, היום מסתיים באותו האופן: שתיית שקיעה על בליטת סלע, משקאות ביד, צופים בשמיים עושים משהו שלא תוכלו לצלם כראוי.",
        accommodation: "Conserve Safari Serengeti Camp",
        meals: "כל הארוחות",
        insiderFact: "עצירות שתיית שקיעה מתוכננות בדרך כלל על קופיה סלעית עם אופק ברור — רגע טוב להכין את המצלמה לפני שהאור נעלם.",
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
        title: "עזיבה",
        description: "סיור בוקר מוקדם אחרון, כי האור תמיד הכי טוב לפני ארוחת הבוקר. לאחר מכן, טיסה קצרה מוציאה אתכם מהסרנגטי בחזרה לקילימנג'רו הבינלאומי, ומחברת אתכם להמשך המסע — הביתה, או לכל מקום שבו ירח הדבש ממשיך הלאה.",
        accommodation: "N/A",
        meals: "ארוחת בוקר"
      }
    ]
  },
  {
    slug: "7-days-crown-jewels",
    name: "ספארי אבני הכתר – 7 ימים",
    duration: 7,
    destinations: [
      "tarangire",
      "manyara",
      "ngorongoro",
      "serengeti"
    ],
    type: "big_five_game_drives",
    bestMonths: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Dec', 'Jan', 'Feb'],
    wildlifeTargets: [{ name: 'African Elephant', chance: 'High' }, { name: 'Lion', chance: 'High' }, { name: 'Black Rhino', chance: 'High' }, { name: 'Leopard', chance: 'Rare' }, { name: 'Genet', chance: 'Rare', note: 'Tarangire night game drive' }, { name: 'Hippopotamus', chance: 'High', note: 'Lake Manyara mokoro safari' }],
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
    metaTitle: "7 Days Crown Jewels Safari | Tarangire, Ngorongoro & Serengeti | EWA Safari Outfitters",
    metaDescription: "המעגל היבשתי החתום של EWA Safari Outfitters — סיורי לילה בטרנגירה, ירידה מלאה למכתש נגורונגורו וספארי בכדור פורח מעל הסרנגטי. זמין בשתי רמות, החל מ-5,334.38$ לאדם.",
    overview: [
      "מעודכן לעונת 2027. אם יש לכם ספארי אחד בלבד בטנזניה, זהו המסלול שמצדיק את השם 'אבני הכתר'. שבעה ימים, ארבע מערכות אקולוגיות, ושתי חוויות חתומות שרוב המסלולים באורך זה כלל לא מנסים: סיור ספארי לילי בטרנגירה, כאשר הציידים הליליים של הפארק תופסים את מקומם של עדרי הפילים המפורסמים שלו, וספארי בכדור פורח בזריחה מעל המישורים האינסופיים של הסרנגטי, הנצפים מלמעלה ולא דרך שמשת רכב.",
      "המסלול עצמו הוא התשובה של EWA Safari Outfitters לשאלה פשוטה: איך היה נראה המעגל היבשתי אם כל עצירה הייתה חייבת להצדיק את מקומה? טרנגירה עבור הפילים והבאובאבים. ביקור בקהילת מסאי וספארי מוקורו באגם מניארה, שינוי קצב אמיתי בין הפארקים הגדולים יותר. ירידה מלאה אל מכתש נגורונגורו, הבמה האמינה ביותר באפריקה לחמישייה הגדולה. ויומיים מלאים בסרנגטי, החותמים את המסע מהאוויר.",
      "אנו נולדנו בטנזניה ומבוססים בארושה, ומסלול זה נבנה משנים רבות על אותן הדרכים ומסלולי ההמראה בדיוק. כל ספארי אבני הכתר נתפר במיוחד סביב התאריכים והקצב שלכם, מלווה מתחילתו ועד סופו על ידי אותו מדריך מקצועי ומוסמך, עם תמיכה 24/7 המשולבת ולא מוצמדת בדיעבד."
    ],
    tagline: "בבעלות מקומית מאז 2022 · דירוג 4.9/5 מ-200+ אורחים מ-40+ מדינות · שיא צפייה של 100% בחמישייה הגדולה",
    bestTimeToTravel: "לאורך כל השנה, מאחר שמכתש נגורונגורו מחזיק בחיות בר תושבות בכל עונה ועדרי הפילים של טרנגירה נוכחים לאורך כל השנה — יוני–אוקטובר ודצמבר המאוחר–פברואר מציעים את תנאי הצפייה היבשים ביותר",
    highlights: [
      "סיור ספארי לילי בטרנגירה — אחת ההזדמנויות הבודדות לצפות בטורפים הליליים של הפארק ובמינים קטנים ונדירים לצפייה שנשארים מוסתרים במהלך סיורי היום הרגילים",
      "ספארי בכדור פורח בזריחה מעל הסרנגטי — המישורים מלמעלה, ולאחריו ארוחת בוקר עם שמפניה בנחיתה",
      "יום שלם בתוך מכתש נגורונגורו — הבמה האמינה ביותר באפריקה לחמישייה הגדולה, כולל הסיכויים הטובים ביותר בטנזניה לצפייה בקרנף השחור המוגן בסכנת הכחדה",
      "ביקור בקהילת מסאי וספארי מוקורו באגם מניארה — צפייה תרבותית ואמיתית בחיות בר מתוך קאנו, המשולבת ביום המעבר בין הפארקים ולא מטופלת כמילוי זמן",
      "יומיים מלאים בסרנגטי, המעניקים גם לספארי הכדור הפורח וגם לסיורי הספארי הרגילים מרחב לנשום, במקום לדחוס הכול ליום אחד חפוז"
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
      "כל דמי הכניסה לפארקים ולזיכיונות",
      "כל סיורי הספארי כולל סיור הלילה בטרנגירה",
      "ספארי הכדור הפורח",
      "המדריך הפרטי שלכם לאורך כל הדרך",
      "כל הארוחות במהלך הספארי",
      "מי שתייה וקופסאות ארוחת צהריים",
      "הטיסה מסרונרה לארושה",
      "כיסוי פינוי רפואי חירום (AMREF Flying Doctors)"
    ],
    excluded: [
      "טיסות בינלאומיות",
      "אגרות ויזה",
      "ביטוח נסיעות",
      "טיפים"
    ],
    includedCategorized: {
      transfers: [
        "הטיסה מסרונרה לארושה",
        "העברות משדה התעופה"
      ],
      accommodationMeals: [
        "כל הארוחות במהלך הספארי",
        "מי שתייה וקופסאות ארוחת צהריים"
      ],
      guidingGameDrives: [
        "כל דמי הכניסה לפארקים ולזיכיונות",
        "כל סיורי הספארי כולל סיור הלילה בטרנגירה",
        "ספארי הכדור הפורח",
        "המדריך הפרטי שלכם לאורך כל הדרך",
        "כיסוי פינוי רפואי חירום (AMREF Flying Doctors)"
      ]
    },
    excludedCategorized: [
      "טיסות בינלאומיות",
      "אגרות ויזה",
      "ביטוח נסיעות",
      "טיפים"
    ],
    notes: [
      "המחירים המוצגים הם לאדם, בחדר זוגי משותף.",
      "בחירת הלודג'ים ברמת Wilderness Sovereign כפופה לזמינות ואישור בעת ההזמנה.",
      "הלינה והמחירים כפופים לזמינות ועשויים להשתנות בהתאם למועד הנסיעה המדויק.",
      "דמי הפארקים הלאומיים ואזורי השימור בטנזניה נקבעים על ידי הממשלה וכפופים לשינוי ללא הודעה מוקדמת."
    ],
    faq: [
      {
        q: "כמה עולה ספארי אבני הכתר בן 7 הימים?",
        a: "ספארי אבני הכתר מתחיל ב-4,523.96$ לאדם ברמת Wilderness Reserve (6 נוסעים, חדר זוגי משותף), ועולה ל-5,334.38$ לאדם עבור זוג הנוסע לבד. Wilderness Sovereign, עם לודג'ים משודרגים לאורך כל הדרך, מתחילה ב-8,848.96$ לאדם ועולה ל-9,659.38$ עבור שני נוסעים. המחיר כולל את כל דמי הפארקים והזיכיונות, סיורי הספארי, סיור הלילה, ספארי הכדור הפורח, ארוחות במהלך הספארי, והטיסה מסרונרה לארושה. מכיוון שכל ספארי נתפר במיוחד ולא מהווה חבילה קבוצתית קבועה, בקשו הצעת מחיר אישית עבור התאריכים שלכם."
      },
      {
        q: "מדוע להזמין את ספארי אבני הכתר עם EWA Safari Outfitters?",
        a: "EWA Safari Outfitters נולדה בטנזניה ומבוססת בארושה, ואינה סוכנות מעבר לים המוכרת מחדש מסלול שמעולם לא נסעה בו. כל ספארי נתפר במיוחד סביב התאריכים והתחומי העניין שלכם, מלווה לאורך כל הדרך על ידי מדריך מקצועי ומוסמך, עם תמיכה מקצה לקצה, מאיסוף בשדה התעופה ועד ההורדה הסופית."
      },
      {
        q: "מה מייחד מסלול זה מספארי סטנדרטי בנגורונגורו-סרנגטי?",
        a: "שתי תוספות חתומות שרוב המסלולים באורך זה כלל לא מנסים: סיור ספארי לילי בטרנגירה, החושף חיות בר ליליות שאינן נראות בסיורי היום הרגילים, וספארי בכדור פורח בזריחה מעל הסרנגטי. שניהם משולבים במסלול הסטנדרטי, ואינם מוצעים כתוספות יקרות."
      },
      {
        q: "האם ספארי הכדור הפורח בטוח, ומה הוא כולל?",
        a: "ספארי כדורים פורחים מופעל על ידי מפעילים מורשים ומנוסים לפי פרוטוקולי בטיחות בינלאומיים סטנדרטיים. הטיסות נמשכות בדרך כלל כשעה בזריחה, כאשר הרוחות רגועות ביותר, ולאחריהן ארוחת בוקר בבוש עם שמפניה בנחיתה."
      },
      {
        q: "מהי העונה הטובה ביותר בשנה למסלול זה?",
        a: "ספארי זה פועל היטב לאורך כל השנה, מאחר שמכתש נגורונגורו מחזיק בחיות בר תושבות בכל עונה ועדרי הפילים של טרנגירה נוכחים לאורך כל השנה. יוני עד אוקטובר ודצמבר המאוחר עד פברואר מציעים את תנאי הצפייה היבשים ביותר."
      },
      {
        q: "האם אראה את החמישייה הגדולה בספארי הזה?",
        a: "מכתש נגורונגורו מציע את הסיכויים הטובים ביותר בכל טנזניה לצפות בכל בני החמישייה הגדולה — אריה, נמר, פיל, תאו והקרנף השחור המוגן בסכנת הכחדה — לעיתים קרובות בתוך יום אחד, הודות למערכת האקולוגית הסגורה של המכתש ולצפיפות הגבוהה של בעלי החיים."
      },
      {
        q: "מה כלול בחבילת ספארי אבני הכתר?",
        a: "כל דמי הכניסה לפארקים ולזיכיונות, כל סיורי הספארי כולל סיור הלילה בטרנגירה, ספארי הכדור הפורח, המדריך הפרטי שלכם לאורך כל הדרך, כל הארוחות במהלך הספארי, מי שתייה וקופסאות ארוחת צהריים, הטיסה מסרונרה לארושה, וכיסוי פינוי רפואי חירום (AMREF Flying Doctors). טיסות בינלאומיות, אגרות ויזה, ביטוח נסיעות וטיפים אינם כלולים."
      },
      {
        q: "האם אני זקוק לויזה כדי לבקר בטנזניה?",
        a: "רוב הנוסעים, כולל אלה מארה״ב, בריטניה, קנדה וחלק גדול מאירופה, זקוקים לויזה כדי להיכנס לטנזניה. הן ויזה אלקטרונית המוגשת מראש והן ויזה בהגעה זמינות; מומלץ להגיש בקשה מקוונת לפני הנסיעה כדי למנוע עיכובים."
      },
      {
        q: "כמה לילות נשהה בכל מיקום?",
        a: "לילה אחד בארושה, לילה אחד בטרנגירה, שני לילות בקראטו (מכסים גם את יום המעבר באגם מניארה וגם את יום מכתש נגורונגורו), ושני לילות בסרנגטי."
      },
      {
        q: "האם ספארי זה מתאים לירח דבש או לביקור ראשון בטנזניה?",
        a: "כן — השילוב של צפייה מובחרת בחיות בר ושתי חוויות חתומות ונדירות באמת הופך אותו למתאים היטב הן לנוסעי ספארי בפעם הראשונה והן לזוגות המחפשים מסלול שלם וחד-פעמי. מכיוון שהוא נתפר במיוחד ולא מהווה יציאה קבועה, ניתן לשלב נגיעות אישיות קטנות לפי בקשה."
      },
      {
        q: "אילו גדלי קבוצות יכולים להצטרף לספארי זה?",
        a: "ספארי אבני הכתר הוא ספארי פרטי ותפור אישית לקבוצות קטנות, עם רכב משלכם ומדריך מקצועי ומוסמך — לעולם לא אוטובוס טיולים משותף עם יציאות קבוצתיות קבועות."
      },
      {
        q: "מה כדאי לארוז למסלול הזה?",
        a: "התלבשו בשכבות לתנודות הטמפרטורה — סיור הלילה בטרנגירה ובוקרי המכתש קרירים, בעוד שחום הצהריים בספארי משמעותי. הביאו בגדים בגוונים ניטרליים לסיורי הספארי, הגנה מהשמש, דוחה חרקים, ושכבה חמה ליציאת ספארי הכדור הפורח לפני עלות השחר."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "הגעה לארושה",
        description: "נחיתה בנמל התעופה הבינלאומי קילימנג'רו, שם ימתין המדריך שלכם מ-EWA Safari Outfitters — אותו מדריך שנשאר איתכם לכל אורך המסע. התמקמו, הכירו את המדריך שלכם, וקבלו תדריך ספארי מלא לפני לילה מוקדם.",
        accommodation: "Kahawa House או Arusha Coffee Lodge בהתאם לרמה",
        meals: "ארוחת ערב",
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
        insiderFact: "ארושה נמצאת בגובה של כ-1,400 מטר — אקלים קריר יותר מהמישורים שלפניכם; ארזו שכבה קלה לערב."
      },
      {
        day: 2,
        title: "מארושה לפארק הלאומי טרנגירה",
        description: "נסיעה נופית דרומה אל המישורים המנוקדים בבאובאבים של טרנגירה, ביתם של עדרי הפילים הגדולים ביותר בטנזניה. עם שקיעת השמש, סיור ספארי לילי חושף פארק שונה לחלוטין — גנטות, זבדים, גלגילנים, והציידים הליליים שנשארים מוסתרים במהלך היום.",
        accommodation: "Tarangire Katikati Camp או Lemala Mpingo Ridge בהתאם לרמה",
        meals: "כל הארוחות",
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
        insiderFact: "סיור הלילה בטרנגירה הוא אחת ההזדמנויות הבודדות בספארי סטנדרטי לצפות במינים הליליים הקטנים והנדירים לצפייה של הפארק."
      },
      {
        day: 3,
        title: "מטרנגירה לקראטו, דרך קהילת מסאי ואגם מניארה",
        description: "הנסיעה לכיוון קראטו כוללת ביקור אותנטי בקהילת מסאי — שיחה אמיתית, לא עצירה מבוימת — ולאחריה ספארי מוקורו (קאנו) באגם מניארה, דרך שקטה ברמת המים לצפות בפלמינגואים, בהיפופוטמים ובאריות המפורסמים המטפסים על עצים של הפארק.",
        accommodation: "Ngorongoro Farm House או Gibb's Farm בהתאם לרמה",
        meals: "כל הארוחות",
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
        insiderFact: "האריות המטפסים על עצים באגם מניארה הם אחת מאוכלוסיות מעטות בלבד באפריקה הידועות בכך שהן נחות באופן קבוע על ענפי שיטה."
      },
      {
        day: 4,
        title: "מכתש נגורונגורו",
        description: "יום שלם של ירידה אל קרקעית המכתש, ביתם המשוער של 20,000–30,000 בעלי חיים במערכת אקולוגית סגורה אחת — גאוות אריות על עשב פתוח, להקות צבועים הפועלות בשולי המכתש, והסיכויים הטובים ביותר בכל טנזניה לצפייה בקרנף השחור המוגן בסכנת הכחדה.",
        accommodation: "Ngorongoro Farm House או Gibb's Farm בהתאם לרמה",
        meals: "כל הארוחות",
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
        insiderFact: "קרקעית המכתש נשארת קרירה במספר מעלות משפת המכתש; הביאו מעיל גם אם היום נראה בהיר."
      },
      {
        day: 5,
        title: "מקראטו לסרנגטי",
        description: "הנסיעה אל המישורים האינסופיים של הסרנגטי, עם סיור ספארי אחר הצהריים המציג את קנה המידה העצום של הפארק — חתולי בר גדולים משתרעים בצל, עדרי זברות נמתחים עד האופק.",
        accommodation: "Kubukubu Tented Lodge או Lemala Nanyukie בהתאם לרמה",
        meals: "כל הארוחות",
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
        insiderFact: "הנסיעה בין קראטו לסרנגטי היא בעצמה מעין סיור ספארי; החזיקו את המצלמה בהישג יד."
      },
      {
        day: 6,
        title: "יום מלא בסרנגטי וספארי בכדור פורח",
        description: "התעוררו לפני עלות השחר לספארי בכדור פורח בזריחה מעל המישורים, מרחפים בשקט מעל חיות בר שלעולם לא שומעות אתכם מגיעים, ולאחריו ארוחת בוקר בבוש עם שמפניה בנחיתה. שאר היום ממשיך בסיורי ספארי המתוכננים סביב האור והפעילות הטובים ביותר של בעלי החיים.",
        accommodation: "Kubukubu Tented Lodge או Lemala Nanyukie בהתאם לרמה",
        meals: "כל הארוחות",
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
        insiderFact: "ספארי הכדורים הפורחים יוצא סביב הזריחה כאשר הרוחות הכי רגועות; כדאי לארוז שכבה חמה גם בעונת היובש."
      },
      {
        day: 7,
        title: "טיסה נופית לארושה",
        description: "סיור ספארי בוקר אחרון, ולאחר מכן טיסה קצרה ממסלול ההמראה סרונרה בחזרה לארושה להמשך המסע שלכם.",
        accommodation: "N/A",
        meals: "ארוחת בוקר"
      }
    ]
  },
  {
    slug: "7-days-migration-southern",
    name: "המהדורה הדרומית: ספארי עונת ההמלטה של הנדידה בטנזניה — נדוטו ומכתש נגורונגורו",
    duration: 9,
    destinations: [
      "ngorongoro",
      "serengeti"
    ],
    type: "migration",
    bestMonths: ['Jan', 'Feb', 'Mar'],
    wildlifeTargets: [{ name: 'Wildebeest', chance: 'Seasonal', note: 'newborn calves, up to 8,000/day, Jan-Mar' }, { name: 'Cheetah', chance: 'High' }, { name: 'Lion', chance: 'High' }, { name: 'Spotted Hyena', chance: 'High' }, { name: 'Black Rhino', chance: 'High' }, { name: 'Golden Jackal', chance: 'Rare' }],
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
    metaTitle: "Southern Edition: Tanzania Calving Season Migration Safari | Ndutu & Ngorongoro Crater | EWA Safari Outfitters",
    metaDescription: "9 ימים, 8 לילות — מרכז הסרנגטי, שדות ההמלטה של נדוטו, ערוץ אולדובאי ומכתש נגורונגורו. חוו את אחד החלונות האינטנסיביים ביותר של ההנדידה הגדולה. החל מ-4,730$ לאדם.",
    overview: [
      "יש גרסה של ההנדידה הגדולה שרוב המבקרים לעולם לא רואים. לא חציות הנהר, לא המישורים הצפוניים האינסופיים — אלא הפרק השקט והגולמי יותר שמתרחש חודשים קודם לכן, כאשר מאות אלפי ווילדביסטים מתאספים על העשב הקצר של נדוטו כדי להמליט. עד 8,000 עגלים ביום, נולדים אל קרקע פתוחה ללא מקום להסתתר, וכל טורף במערכת האקולוגית הדרומית יודע זאת.",
      "זוהי המהדורה הדרומית של סדרת ספארי הצילום שלנו — תשעה ימים של מעבר מחיות הבר התושבות של מרכז הסרנגטי, אל דרמת עונת ההמלטה של נדוטו, לצד אתר מקורות המין האנושי עצמו בערוץ אולדובאי, ואל יום שלם על קרקעית מכתש נגורונגורו, לפני הסיום בזמן תרבותי אמיתי במטו וה מבו. במקום שבו המהדורה הצפונית שלנו רודפת אחר דרמת חציות הנהר ביולי עד אוקטובר, זו יוצאת דרומה לחודש פברואר, כאשר חיים חדשים ולחץ טורפים מתנגשים על חלק מהמישורים הפתוחים הפוטוגניים ביותר באפריקה.",
      "זה לא ספארי עדין. חלק מהבקרים יעניקו לכם עגל שזה עתה נולד ומגלה את רגליו בפעם הראשונה; אחרים יעניקו לכם ברדלס באמצע ציד, או להקת צבועים עובדת על טרף באבק. שניהם אמיתיים למה שהעונה הזו באמת מייצגת, ושניהם הסיבה שצלמים ממשיכים לחזור אליה."
    ],
    tagline: "בבעלות מקומית מאז 2022 · מדריכים מקצועיים ומוסמכים · יציאות בהתאמה אישית, לא תאריכים קבוצתיים קבועים",
    bestTimeToTravel: "מסוף ינואר עד מרץ, כאשר העדרים ממליטים על מישורי נדוטו — מסלול זה קבוע לחלון זמן זה",
    whyDifferent: {
      heading: "מדוע עונה זו שונה",
      paragraphs: [
        "רוב מסלולי הספארי בנויים סביב שאלה אחת: היכן נמצאות החיות? עונת ההמלטה מוסיפה שאלה שנייה וחדה יותר: מה עומד לקרות להן?",
        "למשך כמה שבועות קצרים, המישורים סביב נדוטו מחזיקים באחד הריכוזים הגבוהים ביותר של חיות בר צעירות ופגיעות בעולם — וכל טורף בקרבת מקום יודע בדיוק היכן להימצא. מתח זה מעצב את כל אופן צילום הימים הללו. הרכבים שומרים על מיקומם ולא ממהרים להמשיך הלאה, כי הסיפור כאן לרוב לוקח זמן להתפתח: אם ווילדביסט מקיפה עגל שזה עתה נולד ועדיין לא מצא את רגליו, ברדלס קורא את העדר מגבעת טרמיטים, תן זהב ממתין בשוליים לרגע שלו. המדריך שלכם לא רק מוצא חיות בר — הוא קורא את המתח ההולך ונבנה על פני המישורים ועוזר לכם להיות במיקום עוד לפני שהוא מתפרץ.",
        "זהו סוג שונה מבחינה רגשית של ספארי לעומת חציית נהר בהנדידה. שקט יותר במקומות מסוימים, חד יותר באחרים, ושונה כמעט מכל דבר אחר שניתן לצלם במזרח אפריקה."
      ]
    },
    destinationHighlights: {
      heading: "נקודות שיא לצילום",
      items: [
        {
          title: "מרכז הסרנגטי — התפתחות טבעית",
          text: "יומיים בין אוכלוסיות האריות והנמרים התושבות של עמק סרונרה לאורך כל השנה, לפני שדות ההמלטה — חימום חזק, והזדמנות לראות התנהגות טורפים בסביבה שהעדרים עדיין לא שינו."
        },
        {
          title: "נדוטו — חיים חדשים על המישורים",
          text: "עשב קצר, אופקים פתוחים, ואלפי עגלי ווילדביסט המוצאים את רגליהם בתוך דקות מלידתם. זהו רגע רך, פגיע ומרשים ויזואלית — רקעים נקיים, אור פברואר רך, וחלק מהתמונות המהדהדות ביותר רגשית שההנדידה מציעה במהלך כל השנה."
        },
        {
          title: "נדוטו — טורפים בתנועה",
          text: "היכן שיש חיים חדשים בריכוז כה גבוה, הטורפים הולכים בעקבותיהם. הברדלסים חזקים במיוחד כאן, מנצלים את המישורים הפתוחים לצוד לעין כול; אריות, צבועים ותנים כולם פועלים בשולי העדרים. צפו להתנהגות אמיתית, לא רק לצפיות מרחוק — זו עונה שנבנתה עבור צלמים שרוצים לספר סיפור, לא רק לאסוף רשימת מינים."
        },
        {
          title: "ערוץ אולדובאי — שינוי מרשם",
          text: "עצירה מכוונת בין המישורים למכתש באחד האתרים הפליאואנתרופולוגיים החשובים ביותר בעולם — תגליות מאובנים כאן עיצבו מחדש את הבנתנו את מקורות המין האנושי."
        },
        {
          title: "מכתש נגורונגורו — שינוי טונציה",
          text: "יום שלם בתוך המערכת האקולוגית הסגורה של המכתש הוא מעבר מכוון מהמישורים הפתוחים — חיות בר צפופות, דפנות דרמטיות, וסיכוי אמיתי למינים שנדוטו אינה מציעה באותו ריכוז, כולל הקרנף השחור המוגן בסכנת הכחדה."
        }
      ]
    },
    highlights: [
      "חוו וצלמו את אחד החלונות האינטנסיביים ביותר, המונעים על ידי התנהגות, של ההנדידה הגדולה",
      "פתחו במרכז הסרנגטי עם חיות הבר התושבות לפני שדות ההמלטה, המעניק למסע התפתחות טבעית במקום התחלה בשיא העוצמה",
      "זמן אמיתי בנדוטו עצמה — יומיים מלאים בלב עונת ההמלטה, לא מעבר חפוז אחד",
      "ביקור בערוץ אולדובאי, אחד האתרים הפליאואנתרופולוגיים החשובים ביותר בעולם, בדרך לנגורונגורו",
      "זמן תרבותי אמיתי במטו וה מבו ביום 8 — חיי עיר השוק, לא עצירה מתוסרטת",
      "סיימו את המסע ביום שלם על קרקעית מכתש נגורונגורו, שינוי קצב ונוף מוחלט"
    ],
    heroImage: "/images/gallery/Migration-southern-serengeti1.jpg",
    heroImageAlt: "Wildebeest herd migrating across dirt tracks on the southern Serengeti plains",
    gallery: [],
    included: [
      "כל דמי הפארקים, הזיכיונות ואזורי השימור",
      "רכב, מדריך ודלק לכל יום של סיורי ספארי",
      "הטיסה הפנימית ארושה–סרונרה",
      "העברות משדה התעופה",
      "מי שתייה",
      "לינת המדריך",
      "כל הארוחות במהלך הספארי",
      "לינה בהתאם למסלול",
      "כיסוי פינוי רפואי חירום"
    ],
    excluded: [
      "טיסות בינלאומיות",
      "אגרות ויזה",
      "ביטוח נסיעות",
      "טיפים",
      "השכרת מצלמה/עדשה"
    ],
    includedCategorized: {
      transfers: [
        "הטיסה הפנימית ארושה–סרונרה",
        "העברות משדה התעופה"
      ],
      accommodationMeals: [
        "כל הארוחות במהלך הספארי",
        "לינה בהתאם למסלול"
      ],
      guidingGameDrives: [
        "כל דמי הפארקים, הזיכיונות ואזורי השימור",
        "רכב, מדריך ודלק לכל יום של סיורי ספארי",
        "מי שתייה",
        "לינת המדריך",
        "כיסוי פינוי רפואי חירום"
      ]
    },
    excludedCategorized: [
      "טיסות בינלאומיות",
      "אגרות ויזה",
      "ביטוח נסיעות",
      "טיפים",
      "השכרת מצלמה/עדשה"
    ],
    notes: [
      "מסלול זה קבוע לעונת ההמלטה (סוף ינואר–מרץ, למשל יציאה בפברואר) — אין תעריף נפרד לעונה נמוכה, מאחר שהספארי עצמו פועל רק בחלון זמן זה.",
      "מקדמה של 30% מבטיחה את ההזמנה שלכם, כאשר היתרה לתשלום 60 יום לפני היציאה.",
      "הלינה והמחירים כפופים לזמינות ועשויים להשתנות בהתאם למועד הנסיעה המדויק בתוך העונה.",
      "דמי הפארקים הלאומיים ואזורי השימור בטנזניה נקבעים על ידי הממשלה וכפופים לשינוי ללא הודעה מוקדמת."
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
        q: "מה מייחד את עונת ההמלטה מספארי רגיל?",
        a: "היא בנויה סביב התנהגות ותזמון ולא רק סביב מציאת חיות בר. חיים חדשים של ווילדביסט ופעילות טורפים אינטנסיבית מתרחשים בקרבה זה לזה על המישורים הפתוחים של נדוטו, ומעניקים לצלמים הזדמנויות אמיתיות לספר סיפור שסיור ספארי רגיל אינו מציע באותו ריכוז."
      },
      {
        q: "כמה עולה ספארי זה?",
        a: "Wilderness Reserve מתחילה ב-4,730.21$ לאדם (6 נוסעים, חדר זוגי משותף), ועולה ל-5,790.63$ עבור זוג הנוסע לבד. Wilderness Sovereign מתחילה ב-6,808.96$ לאדם, ועולה ל-7,869.38$ עבור שני נוסעים. מכיוון שכל ספארי נתפר במיוחד, בקשו הצעת מחיר אישית עבור התאריכים שלכם."
      },
      {
        q: "מתי בדיוק עונת ההמלטה?",
        a: "החלון העיקרי נמשך בערך מסוף ינואר עד מרץ, כאשר שיא ההמלטה חל בדרך כלל בפברואר."
      },
      {
        q: "מדוע מסלול זה מתחיל במרכז הסרנגטי במקום לטוס ישירות לנדוטו?",
        a: "זה מעניק למסע התפתחות טבעית — יום וחצי בין הטורפים התושבים של הסרנגטי לאורך כל השנה, לפני שדות ההמלטה, במקום להתחיל את המסע בשיא העוצמה. זה גם אומר פחות זמן המבוזבז אך ורק במעבר בהמשך המסלול."
      },
      {
        q: "מהו ערוץ אולדובאי, ומדוע הוא נכלל בספארי חיות בר?",
        a: "ערוץ אולדובאי הוא אחד האתרים הפליאואנתרופולוגיים החשובים ביותר בעולם — תגליות מאובנים כאן על ידי משפחת ליקי עיצבו מחדש את ההבנה המדעית של האבולוציה האנושית הקדומה. זהו שינוי מרשם מכוון בין המישורים למכתש, ובאופן עקבי אחת העצירות הנדונות ביותר במסלול זה לאחר מכן."
      },
      {
        q: "האם ספארי זה מתאים לצלמים בפעם הראשונה?",
        a: "כן — כמו ספארי הצילום האחרים שלנו, מסלול זה נבנה כך שיתאים לכל רמות המיומנות, עם הדרכה מעשית בשטח לגבי מיקום, אור והגדרות לאורך כל הדרך."
      },
      {
        q: "האם זו יציאה פרטית או קבוצתית?",
        a: "בהתאמה אישית לתאריכים שלכם, כאשר גודל הקבוצה נשמר קטן במכוון כדי שלכל צלם יהיה מרחב עבודה ראוי."
      },
      {
        q: "אילו ציוד כדאי להביא?",
        a: "מומלץ גוף DSLR או מירורלס, עדשה רחבה עד בינונית לנופים, וטלה של לפחות 400 מ״מ — 500–600 מ״מ מתגמל נבדקים מרוחקים, בעוד עדשת 70–200 מ״מ שימושית לצפיות קרובות יותר."
      },
      {
        q: "האם ניתן לשלב זאת עם המהדורה הצפונית או עם הארכת חוף?",
        a: "כן — שאלו את היועץ שלכם על שילוב זה עם הארכת חוף בזנזיבר, או על ההבדלים בין המהדורה הדרומית הזו למהדורה הצפונית שלנו (חציות נהר ביולי–אוקטובר) אם אתם מתלבטים בין השתיים."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "הגעה לארושה",
        location: "ארושה",
        description: "נחיתה בנמל התעופה הבינלאומי קילימנג'רו ותנו ללילה הראשון להיות קליל — התמקמו בארושה, הכירו את המדריך שלכם על ארוחת ערב, ושוחחו על העונה שלפניכם. עונת ההמלטה שונה מכל חלון ספארי אחר, כך שתדריך זה חשוב: למה לצפות מבחינה רגשית לא פחות מאשר מבחינה צילומית, כיצד ייקבע קצב הימים, ולמה המדריך שלכם יהיה קשוב ברגע שתהיו על המישורים.",
        accommodation: "ארושה, משתנה לפי רמה",
        meals: "ארוחת ערב",
        insiderFact: "תדריך זה קובע את הקצב לכל המסע — המדריך שלכם יסביר כיצד הרכבים שומרים על מיקומם עבור סצנות מתפתחות במקום למהר להמשיך הלאה, וזהו מרכיב מרכזי באופן שבו מצלמים את עונת ההמלטה.",
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
        title: "מארושה למרכז הסרנגטי",
        location: "טיסה למרכז הסרנגטי",
        description: "טיסה נופית מארושה למסלול ההמראה סרונרה מחליפה העברה יבשתית ארוכה באחר צהריים שכבר מתקיים בשטח, בין אוכלוסיות האריות והנמרים התושבות של הסרנגטי.",
        accommodation: "מרכז הסרנגטי, משתנה לפי רמה",
        meals: "כל הארוחות",
        insiderFact: "גאוות האריות התושבות של סרונרה לא עוקבות אחר ההנדידה כלל — טריטוריה קבועה, מים לאורך כל השנה, וחלק מהצפיות האמינות ביותר בטורפים בכל המערכת האקולוגית.",
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
        title: "יום מלא, מרכז הסרנגטי",
        location: "מרכז הסרנגטי",
        description: "יום מלא של חקר חיות הבר התושבות של עמק סרונרה לאורך כל השנה — חימום חזק לפני שדות ההמלטה, והזדמנות לראות התנהגות טורפים בסביבה שהעדרים עדיין לא שינו.",
        accommodation: "מרכז הסרנגטי, משתנה לפי רמה",
        meals: "כל הארוחות",
        insiderFact: "כיסוי עצי התאנה והנקניקיה הצפוף של עמק סרונרה הוא טריטוריית נמרים מובחרת — זהו לרוב היום הבודד הטוב ביותר לצפיות בנמרים בכל המסלול.",
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
        title: "ממרכז הסרנגטי לאזור נדוטו",
        location: "מעבר לנדוטו",
        description: "הנסיעה דרומה אל המערכת האקולוגית של נדוטו, והטעימה הראשונה שלכם ממה שהופך את המקום הזה לשונה כל כך — מישורי עשב קצר פתוחים לרווחה ואיכות האור המיוחדת ההופכת את נדוטו למועדפת בקרב צלמים שנה אחר שנה.",
        accommodation: "אזור נדוטו, משתנה לפי רמה",
        meals: "כל הארוחות",
        insiderFact: "נדוטו נמצאת ממש מחוץ לגבול הפארק הרשמי של הסרנגטי, בתוך אזור השימור נגורונגורו — היתר שונה, אך אותה ההנדידה.",
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
        title: "יום מלא, אזור נדוטו",
        location: "נדוטו",
        description: "יום מלא בלב עונת ההמלטה — ווילדביסטים שזה עתה נולדו מוצאים את רגליהם בתוך דקות מהלידה, והטורפים העוקבים מיד אחריהם. המדריך שלכם שומר על מיקומו ולא ממהר להמשיך הלאה, כי הסיפור כאן לרוב לוקח זמן להתפתח.",
        accommodation: "אזור נדוטו, משתנה לפי רמה",
        meals: "כל הארוחות",
        insiderFact: "עד 8,000 עגלים נולדים על פני מישורי נדוטו ביום אחד בשיא העונה — רובם מוצאים את רגליהם תוך דקות.",
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
        title: "חצי יום בנדוטו וערוץ אולדובאי",
        location: "מנדוטו לקראטו, דרך ערוץ אולדובאי",
        description: "בוקר אחרון על מישורי נדוטו לפני הנסיעה לכיוון קראטו, עם עצירה בערוץ אולדובאי — אחד האתרים הפליאואנתרופולוגיים החשובים ביותר בעולם, שבו תגליות מאובנים עיצבו מחדש את הבנתנו את מקורות המין האנושי.",
        accommodation: "אזור קראטו / נגורונגורו, משתנה לפי רמה",
        meals: "כל הארוחות",
        insiderFact: "תגליות מאובנים בערוץ אולדובאי על ידי משפחת ליקי דחפו אחורה את ציר הזמן הידוע של האבולוציה האנושית ביותר ממיליון שנה.",
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
        title: "סיור יום במכתש נגורונגורו",
        location: "מכתש נגורונגורו",
        description: "יום שלם של ירידה אל המערכת האקולוגית הסגורה של קרקעית המכתש — חיות בר צפופות, דפנות דרמטיות, וסיכוי אמיתי למינים שהמישורים אינם מציעים באותו ריכוז, כולל הקרנף השחור המוגן בסכנת הכחדה.",
        accommodation: "אזור קראטו / נגורונגורו, משתנה לפי רמה",
        meals: "כל הארוחות",
        insiderFact: "קרקעית המכתש מחזיקה בחלק מהסיכויים הטובים ביותר במערכת האקולוגית לצפייה בקרנף שחור — הקערה הסגורה שלה, בשטח של כ-260 קמ״ר, שומרת על ריכוז חיות הבר התושבות לאורך כל השנה.",
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
        title: "פעילויות תרבותיות במטו וה מבו",
        location: "מטו וה מבו, מעבר לארושה",
        description: "שינוי מרשם אמיתי — סיור תרבותי בעיר השוק מטו וה מבו, עם אינטראקציה קהילתית אמיתית במקום עצירה מתוסרטת בין סיורי ספארי.",
        accommodation: "ארושה, משתנה לפי רמה",
        meals: "כל הארוחות",
        insiderFact: "מטו וה מבו פירושו 'נהר היתושים' — אך היא ידועה יותר כיום כאחת הערים המגוונות ביותר אתנית בטנזניה, עם למעלה מ-120 שבטים המיוצגים בשוק אחד.",
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
        title: "סיור עיר בארושה ועזיבה",
        location: "ארושה / עזיבה",
        description: "בוקר אחרון של חקר ארושה לפני ההעברה לנמל התעופה הבינלאומי קילימנג'רו לטיסה חזרה הביתה — אבק המישורים עדיין על המגפיים שלכם, וכרטיס זיכרון הנושא אחד הסיפורים היוצאי דופן ביותר שיש למזרח אפריקה לספר.",
        accommodation: "N/A",
        meals: "ארוחת בוקר"
      }
    ]
  },
  {
    slug: "10-days-luxury-family",
    name: "ספארי משפחתי יוקרתי 10 ימים בטנזניה",
    duration: 10,
    destinations: [
      "arusha",
      "tarangire",
      "ngorongoro",
      "serengeti"
    ],
    type: "big_five_game_drives",
    wildlifeTargets: [{ name: 'Giraffe', chance: 'Guaranteed', note: 'Arusha National Park' }, { name: 'Black-and-White Colobus Monkey', chance: 'High' }, { name: 'African Elephant', chance: 'High' }, { name: 'Black Rhino', chance: 'Rare' }, { name: 'Lion', chance: 'High' }, { name: 'Leopard', chance: 'Rare' }],
    priceFrom: 6025.21,
    groupSize: {
      min: 3,
      max: 8
    },
    badge: "popular",
    bestFor: [
      "families"
    ],
    metaDescription: "ספארי פרטי בקצב נינוח ומותאם למשפחה בטנזניה, המיועד לשני דורות יחד — ארושה, טרנגירה, נגורונגורו והסרנגטי. זמין בשתי רמות לינה, החל מ-6,025$ לאדם.",
    overview: [
      "עשרה ימים הם די והותר זמן להעניק למשפחה את הקשת המלאה של צפון טנזניה מבלי למהר באף חלק ממנה — עצירה ראשונה קלה שבה ג'ירפות וקופי קולובוס כמעט מובטחים בתוך שעה משדה התעופה, יום שלם עם עדרי הפילים של טרנגירה מתחת לבאובאבים בני אלף שנה, ירידה אל עולמו הסגור של מכתש נגורונגורו עם כמעט 30,000 בעלי חיים, ושלושה ימים ללא חיפזון בסרנגטי לסיום. ארושה נמצאת בגובה של כ-1,400 מטר (4,593 רגל), המעניק למגיעים חדשים חיץ גובה עדין לפני שהפארקים מתחילים ברצינות — אחד מכמה פרטים קטנים המבדילים בין מסלול שנבנה עבור משפחות לבין מסלול שרק מתואר כידידותי למשפחות.",
      "זמין בשתי רמות — Wilderness Reserve ו-Wilderness Sovereign — העוקבות אחר אותו מסלול בן עשרה ימים בדיוק, עם אותן פעילויות, אותם פארקים, ואותו מספר סיורי ספארי. מה שמשתנה ביניהן קשור לחלוטין לאופן שבו המשפחה מטופלת בשעות שבין סיורי הספארי: Wilderness Reserve שומרת על נוחות, מרחב ומחשבה; Wilderness Sovereign מאכסנת אתכם בכל לילה במתחמים המשפחתיים היוצאי הדופן ביותר שיש למעגל הצפוני להציע."
    ],
    highlights: [
      "הפארק הלאומי ארושה ביום 2 — ג'ירפות, קופי קולובוס, וספארי ההליכה המודרך היחיד בטנזניה הפועל לאורך כל השנה, המקל על כניסת המשפחה לעולם חיות הבר לפני הפארקים הגדולים יותר",
      "יום שלם עם עדרי הפילים של טרנגירה, מתחת לבאובאבים העומדים כבר למעלה מאלף שנה",
      "בוקר תרבותי בקראטו בין טרנגירה למכתש — הפסקה אמיתית וללא חיפזון מסיורי הספארי, שגם ילדים וגם מבוגרים נוטים לזכור הכי הרבה זמן",
      "מכתש נגורונגורו במלואו — כמעט 30,000 בעלי חיים בתוך קלדרה סגורה אחת, עם כל בני החמישייה הגדולה נוכחים",
      "ביקור בבומה של מסאי וערוץ אולדובאי, שם תגליות מאובנים בנות 1.8 מיליון שנה קורמות עור וגידים עבור הנוסעים הצעירים יותר בזכות מוזיאון באתר",
      "שלושה ימים מלאים בסרנגטי, מודרכים במיוחד מתוך מחשבה על משפחות — עקבות, התנהגות בעלי חיים וחיי ציפורים מוסברים בקצב ששומר על מעורבות בכל גיל",
      "כל רמות הנוחות המשפחתית מיוצגות, ממרחב ומחשבה ועד תחכום אמיתי, מבלי לשנות ולו יום אחד מהמסלול עצמו"
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
      "כל דמי הכניסה לפארקים",
      "כל סיורי הספארי ברכב 4x4 פרטי ומרווח",
      "מדריך מקצועי וידידותי למשפחות",
      "כל הארוחות",
      "לינה בהתאם למסלול",
      "העברות משדה התעופה"
    ],
    excluded: [
      "טיסות בינלאומיות",
      "אגרות ויזה",
      "ביטוח נסיעות",
      "טיפים",
      "פעילויות אופציונליות (למשל ספארי בכדור פורח)"
    ],
    includedCategorized: {
      transfers: [
        "העברות משדה התעופה",
        "טיסה סרונרה–ארושה (יום 9)"
      ],
      accommodationMeals: [
        "כל הארוחות",
        "לינה בהתאם למסלול"
      ],
      guidingGameDrives: [
        "כל דמי הכניסה לפארקים",
        "כל סיורי הספארי ברכב 4x4 פרטי ומרווח",
        "מדריך מקצועי וידידותי למשפחות"
      ]
    },
    excludedCategorized: [
      "טיסות בינלאומיות",
      "אגרות ויזה",
      "ביטוח נסיעות",
      "טיפים",
      "פעילויות אופציונליות (למשל ספארי בכדור פורח)"
    ],
    notes: [
      "המחירים המוצגים הם לאדם בשיתוף; תצורות משפחתיות וחדרים מחוברים משתנים בהתאם ללודג' ומאושרים בעת ההזמנה.",
      "הלינה והמחירים כפופים לזמינות ועשויים להשתנות בהתאם למועד הנסיעה המדויק בתוך העונה.",
      "דמי הפארקים הלאומיים ואזורי השימור בטנזניה נקבעים על ידי הממשלה וכפופים לשינוי ללא הודעה מוקדמת."
    ],
    faq: [
      {
        q: "מה ההבדל בין שתי הרמות?",
        a: "המסלול, הפארקים ומספר סיורי הספארי זהים בכל מקרה. מה שמשתנה הוא רמת המתחם: Wilderness Reserve נוחה, מרווחת ומוקפדת; Wilderness Sovereign מאכסנת את משפחתכם בחלק מהלודג'ים היוצאי הדופן ביותר במעגל הצפוני, לילה אחר לילה."
      },
      {
        q: "האם יש גיל מינימלי לספארי זה?",
        a: "אין גיל מינימלי קשיח בכל הפארקים לסיורי ספארי, אם כי ילדים צעירים מאוד עלולים למצוא ימים ארוכים ברכב מעייפים, ולחלק מהפעילויות האופציונליות (כמו ספארי ההליכה המודרך בפארק הלאומי ארושה) יש הנחיות גיל משלהן. ספרו ליועץ שלכם את גילאי הילדים בעת ההזמנה, והמסלול והקצב יכולים להיות מותאמים בהתאם."
      },
      {
        q: "האם עלינו לדאוג למלריה עבור הילדים שלנו?",
        a: "רוב המסלול הזה נמצא באזור סיכון למלריה, כך שכדאי לדון באפשרויות נגד מלריה עבור הילדים שלכם עם רופא המשפחה הרבה לפני הנסיעה. שרוולים ארוכים, דוחה חרקים, ורשתות מיטה מטופלות (סטנדרטיות בכל לודג' במסלול זה) מפחיתים את הסיכון באופן ניכר."
      },
      {
        q: "האם למשפחה שלנו יהיו חדרים מחוברים או צמודים?",
        a: "רוב המתחמים במסלול זה יכולים להתאים חדרים משפחתיים מחוברים או צמודים, אם כי התצורות המדויקות משתנות בהתאם ללודג' ומאושרות בעת ההזמנה ולא מובטחות מראש — ציינו את גודל המשפחה שלכם והעדפות השינה שלכם מוקדם, והיועץ שלכם יתאים אתכם ללודג'ים המתאימים."
      },
      {
        q: "האם זהו מסלול טוב לחופשות בית ספר?",
        a: "כן — מסלול זה מוזמן בדרך כלל סביב חופשות בית הספר של יולי/אוגוסט ודצמבר, ומתאים באותה מידה גם מחוץ לתקופות אלו עבור משפחות עם גמישות רבה יותר, כאשר הפארקים שקטים יותר."
      },
      {
        q: "כמה משתנה המחיר בהתאם לגודל המשפחה?",
        a: "עלויות הרכב, המדריך וחלק מהלינה מתחלקות בין חברי הקבוצה, כך שהמחיר לאדם יורד בדרך כלל ככל שנוסעים יחד יותר בני משפחה — ראו את טבלת המחירים למעלה."
      },
      {
        q: "מה כלול במחיר, ומה לא?",
        a: "כלול: כל דמי הכניסה לפארקים, כל סיורי הספארי ברכב 4x4 פרטי ומרווח, מדריך מקצועי וידידותי למשפחות, כל הארוחות, והעברות משדה התעופה. לא כלול: טיסות בינלאומיות, אגרות ויזה, ביטוח נסיעות, טיפים ופעילויות אופציונליות כמו ספארי בכדור פורח."
      },
      {
        q: "האם ניתן לשלב זאת עם הארכת חוף?",
        a: "כן — משפחות רבות מאריכות ספארי זה בכמה ימים בזנזיבר לאחר מכן. שאלו את היועץ שלכם לגבי הוספת הארכת חוף לכל אחת מהרמות."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "הגעה לארושה",
        description: "נחיתה בנמל התעופה הבינלאומי קילימנג'רו והעברה למלון — קבלת פנים חמה, סקירה ברורה של עשרת הימים הבאים, ולילה ראשון נוח כדי להתאושש מהמסע.",
        accommodation: "ארושה, משתנה לפי רמה",
        meals: "ארוחת ערב",
        insiderFact: "ארושה נמצאת בגובה של כ-1,400 מטר (4,593 רגל), המעניק למגיעים חדשים חיץ גובה עדין לפני שהפארקים מתחילים ברצינות.",
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
        title: "הפארק הלאומי ארושה",
        description: "נסיעה קצרה מהעיר אל פארק שנבנה בדיוק לבוקר ראשון מסוג זה — ג'ירפות, זברות וקופי קולובוס קרובים באופן אמין, אגם מומלה משקף את הר מרו בבוקר רגוע, ואחד מספארי ההליכה המודרכים היחידים בטנזניה הפתוחים למשפחות לאורך כל השנה.",
        accommodation: "ארושה, משתנה לפי רמה",
        meals: "כל הארוחות",
        insiderFact: "הפארק הלאומי ארושה הוא אחד הפארקים היחידים בטנזניה שבהם מותר ספארי הליכה מודרך לאורך כל השנה.",
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
        title: "המשך לטרנגירה",
        description: "הנסיעה דרומה נפתחת אל המישורים המנוקדים בבאובאבים של טרנגירה, שם עדרי הפילים הגדולים ביותר בטנזניה מתאספים סביב מקור המים הקבוע האחרון לקילומטרים רבים.",
        accommodation: "אזור טרנגירה / קראטו, משתנה לפי רמה",
        meals: "כל הארוחות",
        insiderFact: "טרנגירה מחזיקה באוכלוסיית הפילים הגדולה ביותר בטנזניה מחוץ לעונת הגשמים, הנמשכת אל מקור המים הקבוע האחרון לקילומטרים רבים.",
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
        title: "בוקר בקראטו",
        description: "שינוי קצב, שנבנה במכוון באמצע המסע: חוויה תרבותית מקומית סביב קראטו, הרחק מהרכב ואל תוך שיחה אמיתית עם הקהילה הקוראת לקטע הרמות הזה בית. זהו היום שנוטה להפתיע משפחות הכי הרבה — לא חיות הבר, אלא האנשים.",
        accommodation: "אזור טרנגירה / קראטו, משתנה לפי רמה",
        meals: "כל הארוחות",
        insiderFact: "קראטו נמצאת ממש מחוץ לגבול אזור השימור נגורונגורו — קטע החקלאות האחרון לפני רמות המכתש.",
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
        title: "אל מכתש נגורונגורו",
        description: "יום שלם של ירידה אל קרקעית המכתש, ביתם של קרוב ל-30,000 בעלי חיים וכל בני החמישייה הגדולה.",
        accommodation: "אזור נגורונגורו, משתנה לפי רמה",
        meals: "כל הארוחות",
        insiderFact: "מכתש נגורונגורו הוא מערכת אקולוגית סגורה בשטח של כ-260 קמ״ר (100 מייל רבוע) — רוב בעלי החיים התושבים בו לעולם אינם עוזבים אותו.",
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
        title: "בומה של מסאי וערוץ אולדובאי",
        description: "ביקור בבומה של מסאי — קבלת פנים אמיתית אל תוך משק בית ואורח חיים, לא הופעה מבוימת — ולאחריו ערוץ אולדובאי, שם תגליות בנות 1.8 מיליון שנה של משפחת ליקי מוסברות באופן שבאמת שובה את תשומת הלב של הנוסעים הצעירים יותר. אחר הצהריים ממשיך אל הסרנגטי.",
        accommodation: "מרכז הסרנגטי, משתנה לפי רמה",
        meals: "כל הארוחות",
        insiderFact: "המוזיאון שבאתר ערוץ אולדובאי הופך תגליות מאובנים בנות 1.8 מיליון שנה למשהו שאפילו הנוסעים הצעירים ביותר מוצאים מרתק באמת.",
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
        title: "סרנגטי, יום מלא",
        description: "יום מלא של סיורי ספארי על פני עמק סרונרה, שם שלושה בתי גידול נפגשים וחתולי הבר הגדולים התושבים נשארים במקום לאורך כל השנה במקום לעקוב אחר ההנדידה. המדריך שלכם קורא את קצב היום עבור כל המשפחה — עקבות, הסבר התנהגות, וידיעה מתי גור אריה או משפחת חזירי יבשה שווים עצירה כפולה.",
        accommodation: "מרכז הסרנגטי, משתנה לפי רמה",
        meals: "כל הארוחות",
        insiderFact: "עמק סרונרה נמצא בצומת של שלושה בתי גידול, ולכן הוא מחזיק בחתולי בר גדולים תושבים לאורך כל השנה ולא רק בעונת ההנדידה.",
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
        title: "סרנגטי, יום מלא",
        description: "יום מלא שני של סיורי ספארי, בקצב שלעולם לא מרגיש חפוז — המדריך שלכם קורא את היום עבור כל המשפחה, ומוודא שאף אחד לא מרגיש שממהרים אותו מעבר לצפייה טובה.",
        accommodation: "מרכז הסרנגטי, משתנה לפי רמה",
        meals: "כל הארוחות",
        insiderFact: "המדריכים קוראים עקבות טריים ועדכוני קשר מרכבים אחרים כדי למקם מחדש את עצמם לאורך היום, במקום לעקוב אחר מסלול קבוע.",
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
        title: "מהסרנגטי לארושה",
        description: "טיסה קצרה ממסלול ההמראה סרונרה בחזרה לארושה חותמת את ימי חיות הבר — פחות משעה באוויר, לעומת נסיעה של למעלה משש שעות באותו המסלול.",
        accommodation: "ארושה, משתנה לפי רמה",
        meals: "כל הארוחות",
        insiderFact: "טיסת הבוש מהסרנגטי לארושה נמשכת פחות משעה, לעומת נסיעה של 6+ שעות באותו המסלול.",
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
        title: "עזיבה",
        description: "העברה לשדה התעופה, ועשרה ימים של זיכרונות משפחתיים חוזרים איתכם הביתה.",
        accommodation: "N/A",
        meals: "ארוחת בוקר"
      }
    ]
  },
{
  slug: "12-days-wild-wilderness",
  name: "ספארי טבע פראי בן 12 ימים, מפגשים תרבותיים וטיול יום בקילימנג'רו",
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
    wildlifeTargets: [{ name: 'Elephant', chance: 'High' }, { name: 'Lion', chance: 'High' }, { name: 'Black Rhino', chance: 'Rare' }, { name: 'Cape Buffalo', chance: 'High' }, { name: 'Giraffe', chance: 'High' }, { name: 'Wildebeest', chance: 'Seasonal' }],
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
  metaDescription: "מסע בן 12 ימים בטנזניה המשלב טיול יום בקילימנג'רו ומפגשים תרבותיים עם מסאים לצד מעגל חיות הבר המלא — מניארה, טרנגירה, נגורונגורו והסרנגטי. החל מ-5,857$ לאדם.",
  overview: [
    "רוב מסלולי הטיול בני 12 הימים בטנזניה מציבים בפניכם בחירה בין ההר למישורים. המסלול הזה מסרב לבחור. הוא נפתח בצדו המערבי השקט יותר של קילימנג'רו, שם תבלו זמן אמיתי עם קהילה מסאית ולאחר מכן תנעלו נעלי הליכה ליום שלם של טיול רגלי אל רמת שירה — אחת ממכתשי הגעש המרשימים ביותר של ההר, וחוויית הליכה של ממש ולא עצירה חטופה לצילום. משם, המסלול מתמקם בתוך מעגל חיות הבר שבו טנזניה נודעת: אגם מניארה, טרנגירה, מכתש נגורונגורו, ושלושה ימים מלאים בסרנגטי, כשמפגשים תרבותיים — ביקור בכפר מסאי בהובלת המנהיג לובולו, וטיול קפה בקראטו — משולבים בטבעיות ולא מודבקים כתוספת.",
    "זהו טיול שנבנה עבור מטיילים המחפשים עומק ולא רשימת סימונים חטופה: הליכה אמיתית על מדרונות קילימנג'רו, שיחה אמיתית בקהילות מסאיות, וזמן אמיתי בכל אחד מפארקי הדגל של טנזניה, במקום לילה בודד וממהר בכל תחנה. בין אם אתם רודפים אחר חמשת הגדולים, אתגר גופני על ההר, או חילופי תרבות אמיתיים — המסלול הזה מקצה לכל אחד מהם פרק משלו, במקום לדחוס אותם בשוליים זה של זה."
  ],
  tagline: "בבעלות מקומית מאז 2022 · מדריכים מוסמכים מקצועית · יציאות בהתאמה אישית, לא תאריכי קבוצה קבועים",
  bestTimeToTravel: "כל השנה; טיול רמת שירה נוח ביותר בעונות היבשות (יוני–אוקטובר וינואר–פברואר)",
  whyDifferent: {
    heading: "למה המסלול הזה שונה",
    paragraphs: [
      "מסלולים רבים בסגנון טבע פראי ותרבות מתייחסים לשני המרכיבים בצורה רופפת — עצירה בודדת בכפר, יום הליכה בודד, תחובים בין ימי נסיעה ארוכים. המסלול הזה מעניק לכל מרכיב מרחב אמיתי משלו: יומיים מלאים במדרונות המערביים של קילימנג'רו, כולל טיול רגלי אמיתי עד גובה 3,600 מטר ברמת שירה, בליווי רינג'ר חמוש ומדריך הרים מקומי; בוקר תרבותי מסאי אמיתי עם קהילת המנהיג לובולו, לא רק הופעת ריקוד; ומעגל צפוני מלא — מניארה, טרנגירה, נגורונגורו, סרנגטי — בקצב הכולל מספר לילות בכל תחנה, ולא לינה בודדת וממהרת.",
      "כל לילה בטיול מוצע בשתי דרגות — Wilderness Reserve ו-Wilderness Sovereign — כך שמבנה המסלול נשאר זהה בכל דרך שבה תבחרו לטייל, כאשר ההבדל בא לידי ביטוי בלודג'ים עצמם ולא בקצב או בתוכן הימים."
    ]
  },
  destinationHighlights: {
    heading: "השיאים",
    items: [
      {
        title: "קילימנג'רו המערבי ורמת שירה",
        text: "צד ירוק ופראי בהרבה של ההר מכפי שרוב המבקרים אי פעם רואים, הגובל במסדרונות הפילים של אמבוסלי. טיול היום ברמת שירה מטפס מכ-2,000 מטר ועד 3,600 מטר דרך מכתש געשי המוכר כיום כאתר מורשת עולמית, כאשר פסגתו המושלגת של קיבו נראית מהשביל בימים בהירים."
      },
      {
        title: "טבילה בתרבות המסאית",
        text: "שני מפגשים תרבותיים נבדלים — בוקר רגוע עם קהילה מסאית במדרונות המערביים של קילימנג'רו, לצד ריקוד מסורתי בערב, וביקור נוסף בכפרו של המנהיג לובולו ליד קראטו. זהו זמן המוקדש לשיחה ולחיי היומיום, לא עצירה מתוזמנת בת חמש דקות."
      },
      {
        title: "המעגל הצפוני המלא",
        text: "טיול הכפר וסיור הספארי באגם מניארה, עדרי הפילים ומישורי הבאובב של טרנגירה, יום מלא בתחתית מכתש נגורונגורו, ושלושה ימים מלאים בסרנגטי — יעדי חיות הבר המובילים של טנזניה, כשלכל אחד מהם ניתן זמן אמיתי, לא מעבר חטוף."
      }
    ]
  },
  highlights: [
    "שילוב של יום טיפוס אמיתי בקילימנג'רו עם ספארי חיות בר מלא, במקום לבחור בין השניים",
    "זמן אמיתי ורגוע בקהילות מסאיות — לא ביקור תרבותי חטוף של עשר דקות בעצירת אוטובוס",
    "כיסוי המעגל הצפוני המלא של טנזניה — מניארה, טרנגירה, נגורונגורו וסרנגטי — בקצב נוח",
    "טיול פרטי ומותאם אישית, עם דרגת לינה המתאימה לסגנונכם, מנוחות ועד מרומם"
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
    "כל דמי הכניסה לפארקים ולשמורות",
    "כל סיורי הספארי וטיול היום ברמת שירה (כולל רינג'ר חמוש ומדריך הרים)",
    "דמי החוויות התרבותיות",
    "מדריך מקצועי לאורך כל הטיול",
    "כל הארוחות כמצוין לכל יום",
    "לינה בדרגה שבחרתם",
    "כל ההעברות משדה התעופה ובין היעדים"
  ],
  excluded: [
    "טיסות בינלאומיות",
    "אגרות ויזה",
    "ביטוח נסיעות",
    "טיפים",
    "הוצאות אישיות"
  ],
  notes: [
    "התעריפים המוצגים הם לאדם, בחדר זוגי משותף.",
    "שתי הדרגות כוללות את דמי טיול היום ברמת שירה, דמי הכניסה לפארק הלאומי ארושה, דמי ההליכה והרינג'ר, ואת דמי הפארקים המאושרים בכל תחנה (נגורונגורו, אגם מניארה, טרנגירה וסרנגטי) — לא רק לינה.",
    "בחירת הלודג'ים בדרגת Wilderness Sovereign כפופה לזמינות ולאישור בעת ההזמנה.",
    "הלינה והתעריפים כפופים לזמינות ועשויים להשתנות בהתאם למועד הנסיעה המדויק בתוך העונה.",
    "דמי הפארקים הלאומיים ואזורי השימור בטנזניה נקבעים על ידי הממשלה וכפופים לשינוי ללא הודעה מוקדמת."
  ],
  faq: [
    {
      q: "האם דרוש ניסיון טיפוס לטיול היום ברמת שירה?",
      a: "אין צורך בניסיון טיפוס טכני — מדובר בטיול יום מודרך, לא בניסיון הגעה לפסגה, ומתבצע בקצב האישי שלכם בליווי רינג'ר חמוש ומדריך הרים מקומי. רמת כושר סבירה הופכת את היום לנעים יותר, אך הוא נגיש לרוב המטיילים שנוח להם עם מספר שעות הליכה בגובה."
    },
    {
      q: "האם המסלול הזה מתאים למבקרים בטנזניה בפעם הראשונה?",
      a: "כן — הוא מכסה את המעגל הצפוני המלא (מניארה, טרנגירה, נגורונגורו, סרנגטי) לצד מפגשים תרבותיים אמיתיים ויום טיפוס הרים, מה שהופך אותו להיכרות מקיפה עם טנזניה עבור מטיילים המעוניינים ביותר מסיור ספארי סטנדרטי."
    },
    {
      q: "מה ההבדל בין Wilderness Reserve ל-Wilderness Sovereign?",
      a: "שתי הדרגות עוקבות אחר אותו מסלול, אותה מסלולית ואותן פעילויות בדיוק לאורך 12 הימים — ההבדל טמון כולו בלינה, מלודג'ים וקמפים נוחים וממוקמים היטב (Wilderness Reserve) ועד נכסים מרוממים יותר בכל תחנה (Wilderness Sovereign)."
    },
    {
      q: "כמה הליכה כרוכה מעבר לטיול ברמת שירה?",
      a: "ספארי ההליכה בפארק הלאומי ארושה ביום הרביעי הוא הליכה קצרה ורגועה יותר, המתמקדת באיתור ובצפייה בחיות בר ברגל, ותובענית בהרבה פחות מיום רמת שירה. שתי הפעילויות גמישות במובן שניתן להתאים את הקצב יחד עם המדריך."
    },
    {
      q: "מה בדיוק כולל טיול היום בקילימנג'רו?",
      a: "טיול היום ברמת שירה מתומחר ב-200 דולר לאדם וכולל את הרינג'ר החמוש ומדריך ההרים המקומי לאורך כל היום, בטיפוס מכ-2,000 מטר ועד לרמה עצמה בגובה 3,600 מטר. זהו יום הליכה אמיתי ולא עצירה חטופה — צפו למספר שעות על השביל, כשהקצב נקבע על פי הכושר האישי שלכם והמרחק שתרצו לחצות אל תוך הרמה (לכיוון Shira 1 Camp, Lion Gorge, או Shira Pinnacles)."
    },
    {
      q: "איך נראה ספארי ההליכה בפארק הלאומי ארושה?",
      a: "זהו ספארי הליכה מודרך בתוך הפארק הלאומי ארושה — איתור חיות בר ברגל במקום מרכב, כאשר תקנות הפארק מחייבות ליווי רינג'ר חמוש לצד מדריך הספארי שלכם. הפארק ידוע בג'ירפות, תאואים ופרימטים החיים ביער, לצד נופים מרהיבים של הר מרו. זוהי הליכה קצרה ועדינה יותר מיום רמת שירה, ודרך שונה לחלוטין לחוות חיות בר לעומת סיור ספארי רגיל."
    },
    {
      q: "האם ניתן לקצר או להאריך את המסלול הזה?",
      a: "כן — זהו מסלול בהתאמה אישית ולא חבילה קבועה. ניתן להוסיף או לקצר ימים בכל תחנה, והוא משתלב באופן טבעי עם הרחבת חוף בזנזיבר בסיום הטיול."
    },
    {
      q: "האם זהו ספארי פרטי או סיור קבוצתי?",
      a: "פרטי לאורך כל הדרך — רכב ומדריך משלכם לאורך כל 12 הימים, בהתאמה לתאריכים שלכם ולא ליציאת קבוצה קבועה."
    }
  ],
  itinerary: [
    {
      day: 1,
      title: "הגעה לארושה",
      location: "ארושה",
      description: "נחיתה בשדה התעופה הבינלאומי קילימנג'רו והעברה פרטית לארושה ללינה, עם תדריך ספארי מלא שיתקיים בבוקר שלמחרת.",
      accommodation: "מלון בארושה",
      meals: "ארוחת בוקר",
      insiderFact: "ארושה נמצאת בגובה נוח ובעלת אקלים קריר יותר מהמישורים שלפניכם — כדאי לארוז שכבה קלה לערב.",
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
      title: "קילימנג'רו המערבי: תרבות",
      location: "קילימנג'רו המערבי",
      description: "לאחר ארוחת בוקר מוקדמת, נסיעה לצדו המערבי של קילימנג'רו — ירוק וצפוף פחות ממסלולי הטיפוס הרגילים, גובל באמבוסלי וביתם של עדרי פילים גדולים באמת הנעים לאורך מסדרונות עונתיים. היום השני בנוי סביב בוקר תרבותי מסאי רגוע: זמן אמיתי עם הקהילה בקצב שלה, ולאחריו אחר צהריים רגוע בלודג' והופעת ריקוד מסורתי בערב.",
      accommodation: "לודג' בקילימנג'רו המערבי",
      meals: "כל הארוחות",
      insiderFact: "בצד זה של קילימנג'רו יש רק שבריר מתנועת המבקרים במסלולי הטיפוס הרגילים בצדו הדרומי של ההר.",
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
      title: "טיול היום ברמת שירה",
      location: "קילימנג'רו המערבי",
      description: "היום השלישי הוא יום ההליכה המרכזי של המסלול. נסיעה אל שער לונדורוסי ויציאה לטיול רמת שירה, בטיפוס מכ-2,000 מטר ועד לרמה עצמה בגובה 3,600 מטר — מכתש געשי ואתר מורשת עולמית, בקצב האישי שלכם לצד רינג'ר חמוש ומדריך הרים מקומי. אם הכוחות מאפשרים, ניתן להמשיך לכיוון Shira 1 Camp, Lion Gorge ורגלי Shira Pinnacles, כאשר פסגתו המושלגת של קיבו נראית מהשביל בימים בהירים, ולאחר מכן ירידה בחזרה ללודג'.",
      accommodation: "לודג' בקילימנג'רו המערבי",
      meals: "כל הארוחות",
      insiderFact: "הגובה משפיע על כל אחד אחרת — הטיול מתבצע בקצב האישי שלכם בדיוק כדי שהכושר הגופני, ולא לוח זמנים קבוע, יקבע את הקצב.",
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
      title: "ספארי הליכה בפארק הלאומי ארושה",
      location: "ארושה",
      description: "לאחר ארוחת הבוקר, נסיעה לפארק הלאומי ארושה לספארי הליכה מודרך — דרך שונה לחלוטין לחוות חיות בר, באיתור עקבות ובקריאת הנוף ברגל לצד מדריך מומחה. חזרה לארושה לארוחה חמה ולערב רגוע; ניתן להוסיף בקלות טיול קפה או סיור אתרים מקומי למי שמעוניין להישאר פעיל.",
      accommodation: "מלון בארושה",
      meals: "כל הארוחות",
      insiderFact: "ליווי רינג'ר חמוש הוא תקנת פארק לכל ספארי הליכה כאן, לא סימן לסיכון חריג — זוהי נורמה מקובלת בכל פארקי טנזניה.",
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
      title: "טיול כפר באגם מניארה",
      location: "אגם מניארה / טרנגירה",
      description: "העברה בבוקר מביאה אתכם לאזור אגם מניארה, שם טיול כפר תוסס דרך מטו וה אמבו כולל ארוחת צהריים מקומית במטע בננות, לפני סיור ספארי אחר הצהריים אל תוככי הפארק הלאומי מניארה עצמו.",
      accommodation: "Ngorongoro Farm House",
      meals: "כל הארוחות",
      insiderFact: "השם מטו וה אמבו פירושו „נחל היתושים” בסוואהילית — תזכורת להצטייד בתרסיס נגד יתושים לקראת טיול הכפר.",
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
      title: "הפארק הלאומי טרנגירה",
      location: "אגם מניארה / טרנגירה",
      description: "המדריך שלכם יאסוף אתכם לאחר ארוחת הבוקר לנסיעה אל הפארק הלאומי טרנגירה — הקרוי על שם הנהר המושך משפחות פילים רבות אל גדותיו, לצד ג'ירפות, בושבאק וחרטיסטים, כשאריות ונמרים אינם רחוקים מאחור.",
      accommodation: "Ngorongoro Farm House",
      meals: "כל הארוחות",
      insiderFact: "עדרי הפילים בטרנגירה מתרכזים בצפיפות הרבה ביותר לאורך הנהר בעונה היבשה, כאשר הוא אחד ממקורות המים האמינים היחידים לאורך קילומטרים רבים.",
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
      title: "כפרו של המנהיג לובולו וטיול קפה בקראטו",
      location: "נגורונגורו",
      description: "היום השביעי נפתח בביקור בוקר בכפרו המסאי של המנהיג לובולו, ולאחריו עצירה בעיירת קראטו לטיול קפה במטע פעיל, בשווקים מקומיים ובארוחת צהריים, לפני המשך הדרך אל רמות נגורונגורו לאחר צהריים רגוע.",
      accommodation: "Ngorongoro Serena Safari Lodge",
      meals: "כל הארוחות",
      insiderFact: "מטעי הקפה של קראטו ממוקמים בגובה המאפשר גידול קפה ערביקה מעולה באמת — עובדה שמדריכי הטיול ישמחו להרחיב עליה בהרחבה.",
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
      title: "יום מלא בתחתית מכתש נגורונגורו",
      location: "נגורונגורו",
      description: "היום השמיני מוקדש למכתש עצמו: ירידה מוקדמת מהשפה עם ארוחת פיקניק ארוזה, ליום מלא של צפייה בחיות בר בתחתית המכתש — אחת מסביבות חיות הבר הצפופות ביותר ביבשת — לפני החזרה ללודג' בשעות אחר הצהריים המאוחרות.",
      accommodation: "Ngorongoro Serena Safari Lodge",
      meals: "כל הארוחות",
      insiderFact: "תחתית המכתש נשארת קרירה במספר מעלות מהשפה — כדאי להביא מעיל גם אם הבוקר נראה בהיר.",
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
      title: "אל תוככי הסרנגטי",
      location: "סרנגטי",
      description: "הנסיעה אל הסרנגטי חוצה את רמות נגורונגורו ועוברת דרך גיא אולדובאי, האתר הארכיאולוגי שבו חשפו בני הזוג ליקי שרידים של אוסטרלופיתקוס, הומו הביליס והומו ארקטוס — שאלו את המדריך שלכם על הוספת עצירה בחולות הנודדים (Shifting Sands) הסמוכים. משער הפארק, סיור ספארי אחר הצהריים ילווה אתכם אל הקמפ.",
      accommodation: "Kubu Kubu Tented Lodge",
      meals: "כל הארוחות",
      insiderFact: "גיא אולדובאי הוא עצירה קצרה ששווה לעשות גם ללא ביקור נוסף במוזיאון — נקודת התצפית שלצד הכביש לבדה מעניקה תחושה של קנה המידה של האתר.",
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
      title: "יום מלא בסרנגטי",
      location: "סרנגטי",
      description: "שלושה ימים מלאים באחד מנופי חיות הבר המהוללים בעולם — מישורים פתוחים, חתולי בר מתגוררים, ובהתאם לתזמון, עדרי הנדידה עצמם.",
      accommodation: "Kubu Kubu Tented Lodge",
      meals: "כל הארוחות",
      insiderFact: "הקופיות (גבשושיות הסלע) של מרכז הסרנגטי הן מקום אמין לבדיקה מיד בבוקר — אריות משתמשים בהן לעיתים קרובות כנקודת תצפית בשחר.",
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
      title: "יום מלא בסרנגטי",
      location: "סרנגטי",
      description: "שלושה ימים מלאים באחד מנופי חיות הבר המהוללים בעולם — מישורים פתוחים, חתולי בר מתגוררים, ובהתאם לתזמון, עדרי הנדידה עצמם.",
      accommodation: "Kubu Kubu Tented Lodge",
      meals: "כל הארוחות",
      insiderFact: "שאלו את המדריך שלכם על מיקומה הנוכחי של הנדידה — חיות הבר המתגוררות כאן חזקות לאורך כל השנה, אך התזמון משנה את שאר האפשרויות.",
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
      title: "יציאה",
      location: "יציאה",
      description: "סיור ספארי אחרון בדרך למסלול ההמראה לטיסת השכר המתוזמנת שלכם בחזרה לארושה. עם ההגעה תיפגשו ותועברו למלון, שם חדר יום שמור עד להעברתכם לשדה התעופה בערב — כולל ארוחת צהריים לפני שתפנו הביתה.",
      accommodation: "לא רלוונטי",
      meals: "ארוחת צהריים"
    }
  ]
},
{
  slug: "8-days-great-northern-migration",
  name: "8 ימים: ההגירה הצפונית הגדולה",
  duration: 8,
  destinations: [
    "tarangire",
    "manyara",
    "ngorongoro",
    "serengeti"
  ],
  type: "migration",
    bestMonths: ['Jul', 'Aug', 'Sep', 'Oct'],
    wildlifeTargets: [{ name: 'Wildebeest', chance: 'Seasonal', note: 'Mara River crossings, Jul-Oct' }, { name: 'Nile Crocodile', chance: 'Seasonal' }, { name: 'Zebra', chance: 'High' }, { name: 'Lion', chance: 'High' }, { name: 'Elephant', chance: 'High' }, { name: 'Black Rhino', chance: 'Rare' }],
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
  metaDescription: "ספארי טנזניה בן 8 ימים הבנוי סביב מעברי נהר מארה הדרמטיים של ההנדידה הגדולה — יומיים מלאים בנהר, בנוסף לטרנגירה, נגורונגורו וסרנגטי. החל מ-4,977$ לאדם.",
  overview: [
    "במשך ארבעה עד חמישה חודשים בשנה, יותר ממיליון ווילדביסטים וזברות נעים על פני מערכת האקולוגית סרנגטי-מארה בהגירה רצופה וחסרת מנוחה — ובמשך מספר שבועות בלתי צפויים בין יולי לאוקטובר, התנועה הזו מצטמצמת אל נהר מארה, שם תנינים אורבים והמעברים עצמם הופכים לאחד ממחזות חיות הבר הדרמטיים ביותר שנותרו עלי אדמות. המסלול הזה בן שמונת הימים נבנה כולו סביב מתן הסיכוי הטוב ביותר לחזות בכך, מבלי לדלג על הפארקים ההופכים את המסע לשווה בפני עצמם.",
    "המסלול נע ממערב למזרח לרוחב צפון טנזניה: עדרי הפילים והבאובבים העתיקים של טרנגירה, עצירה באגם מניארה ובכפר התרבותי מטו וה אמבו, יום מלא בתוככי קערת חיות הבר הסגורה של מכתש נגורונגורו, ולאחריהם שלושה ימים מלאים בעומק הסרנגטי — תחילה עם הטורפים המתגוררים של המישורים המרכזיים, ולאחר מכן יומיים מלאים במעמד קבוע לצד נהר מארה עצמו, ממוקמים ומוכנים לרגע שבו העדרים יחליטו לחצות."
  ],
  highlights: [
    "יומיים מלאים במעמד קבוע לצד נהר מארה — זמן אמיתי להיות שם כאשר מתרחש מעבר, לא בוקר בודד וממהר",
    "עדרי הפילים ונופי הבאובב של טרנגירה, פרק פתיחה שאינו מוערך דיו ורוב המסלולים הקצרים יותר מדלגים עליו",
    "יום מלא בתוככי מכתש נגורונגורו, כולל חלק מהצפיות האמינות ביותר בקרנפים באזור",
    "אגם מניארה והכפר התרבותי מטו וה אמבו — שינוי קצב אמיתי בין הפארקים",
    "טיסה במטוס קל ממסלול ההמראה קוגטנדה, המסיימת את הטיול במבט מלמעלה על המישורים שזה עתה חציתם בכביש",
    "כל רמות הנוחות מיוצגות, מפשוטה וישירה ועד מרוממת באמת, מבלי לשנות ולו יום אחד במסלול"
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
    "כל דמי הכניסה לפארקים ולשמורות",
    "כל סיורי הספארי ברכב 4x4 פרטי מסוג לנד קרוזר",
    "מדריך מקצועי לאורך כל הטיול",
    "כל הארוחות כמפורט",
    "לינה בהתאם למסלול",
    "העברות משדה התעופה",
    "טיסת חזור מקוגטנדה לארושה"
  ],
  includedCategorized: {
    transfers: [
      "העברות משדה התעופה",
      "טיסת חזור מקוגטנדה לארושה"
    ],
    accommodationMeals: [
      "כל הארוחות כמפורט",
      "לינה בהתאם למסלול"
    ],
    guidingGameDrives: [
      "כל דמי הכניסה לפארקים ולשמורות",
      "כל סיורי הספארי ברכב 4x4 פרטי מסוג לנד קרוזר",
      "מדריך מקצועי לאורך כל הטיול"
    ]
  },
  excluded: [
    "טיסות בינלאומיות",
    "אגרות ויזה",
    "ביטוח נסיעות",
    "טיפים"
  ],
  excludedCategorized: [
    "טיסות בינלאומיות",
    "אגרות ויזה",
    "ביטוח נסיעות",
    "טיפים"
  ],
  notes: [
    "התעריפים המוצגים הם לאדם בחדר זוגי/טווין משותף; תוספת תשלום לחדר יחיד זמינה לפי בקשה.",
    "מעברי נהר מארה אמינים ביותר בין יולי לאוקטובר, ולא ניתן להבטיח אותם בתאריך ספציפי כלשהו.",
    "הלינה והתעריפים כפופים לזמינות ועשויים להשתנות בהתאם למועד הנסיעה המדויק בתוך העונה.",
    "דמי הפארקים הלאומיים ואזורי השימור בטנזניה נקבעים על ידי הממשלה וכפופים לשינוי ללא הודעה מוקדמת."
  ],
  faq: [
    {
      q: "מה ההבדל בין שלוש הדרגות?",
      a: "המסלול והתוכנית היומית זהים בשלושת הדרגות — אותם פארקים, אותם ימים לצד נהר מארה, אותה טיסת חזור. מה שמשתנה הם הקמפים והלודג'ים: Wilderness Trail שומרת על נוחות ופשטות, Wilderness Reserve מוסיפה מרחב ושירות מוקפד, ו-Wilderness Sovereign מציבה אתכם בנכסים הבלעדיים ביותר במסלול זה."
    },
    {
      q: "מהו הזמן הטוב ביותר לצפות במעברי נהר מארה?",
      a: "המעברים אמינים ביותר בין יולי לאוקטובר, אם כי התזמון המדויק משתנה משנה לשנה בהתאם לדפוסי הגשמים ולא ניתן להבטיחו לתאריך ספציפי — מסלול זה מקצה יומיים מלאים לצד הנהר במיוחד כדי למקסם את הסיכויים שלכם."
    },
    {
      q: "האם מעבר מובטח?",
      a: "שום מפעיל אחראי אינו יכול להבטיח אירוע חיות בר ספציפי ביום מסוים. מה שמסלול זה כן מבטיח הוא מיקום — יומיים מלאים לצד הנהר עצמו, כשהמדריכים עוקבים באופן פעיל אחר פעילות המעברים, במקום ביקור חולף בודד."
    },
    {
      q: "כמה משתנה המחיר בהתאם לגודל הקבוצה?",
      a: "עלויות הרכב, המדריך וחלק מההעברות מתחלקות בין חברי הקבוצה, כך שהמחיר לאדם יורד ככלל ככל שמצטרפים יותר מטיילים, אם כי לא בצורה ליניארית לחלוטין — זמינות החדרים בכל קמפ עשויה לשנות מעט את הסכום הכולל בגדלי קבוצה שונים. ראו את טבלת התמחור למעלה למספרים המדויקים."
    },
    {
      q: "מה כלול במחיר ומה לא?",
      a: "כלול: כל דמי הכניסה לפארקים ולשמורות, כל סיורי הספארי ברכב 4x4 פרטי מסוג לנד קרוזר, מדריך מקצועי, כל הארוחות כמפורט, לינה בהתאם למסלול, העברות משדה התעופה, וטיסת החזור מקוגטנדה לארושה. לא כלול: טיסות בינלאומיות, אגרות ויזה, ביטוח נסיעות וטיפים."
    },
    {
      q: "האם ניתן להאריך את הטיול או לשלב אותו עם זנזיבר?",
      a: "כן — מסלול זה מורחב לעיתים קרובות בתוספת חופשת חוף בזנזיבר. שאלו את היועץ שלכם על הרחבת התוכנית."
    }
  ],
  itinerary: [
    {
      day: 1,
      title: "הגעה לארושה",
      description: "הגעה לשדה התעופה הבינלאומי קילימנג'רו והעברה פרטית לארושה למנוחה ולתדריך ספארי.",
      accommodation: "ארושה, משתנה לפי דרגה",
      meals: "ארוחת ערב",
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
      title: "הפארק הלאומי טרנגירה",
      description: "נסיעה אל הפארק הלאומי טרנגירה לעדרי פילים, באובבים עתיקים וסיור ספארי מודרך מלא.",
      accommodation: "טרנגירה, משתנה לפי דרגה",
      meals: "כל הארוחות",
      insiderFact: "בטרנגירה יש אחת מצפיפויות הפילים הגבוהות ביותר באפריקה מחוץ לעונת הגשמים, אז העדרים מתרכזים לאורך הנהר.",
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
      title: "אגם מניארה ומטו וה אמבו",
      description: "המשך הדרך אל הפארק הלאומי אגם מניארה ואל הכפר התרבותי מטו וה אמבו — שינוי קצב בין הפארקים, והצצה אל החיים הטנזניים מעבר לרכב הספארי.",
      accommodation: "קראטו, משתנה לפי דרגה",
      meals: "כל הארוחות",
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
      title: "ממכתש נגורונגורו למרכז הסרנגטי",
      description: "סיור ספארי מודרך ומלא אל תוככי מכתש נגורונגורו, הבמה האמינה ביותר באפריקה לחמשת הגדולים, ולאחר מכן המשך הנסיעה למרכז הסרנגטי ללינה.",
      accommodation: "מרכז הסרנגטי, משתנה לפי דרגה",
      meals: "כל הארוחות",
      insiderFact: "מכתש נגורונגורו הוא מערכת אקולוגית סגורה בשטח של כ-260 קמ״ר — רוב בעלי החיים המתגוררים בו אינם עוזבים אותו לעולם, כולל חלק מהצפיות האמינות ביותר באזור בקרנף השחור.",
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
      title: "צפון הסרנגטי — נהר מארה",
      description: "נסיעה צפונה אל צפון הסרנגטי, לכיוון נהר מארה, הממקמת אתכם לקראת המעברים בימים הבאים.",
      accommodation: "צפון הסרנגטי, משתנה לפי דרגה",
      meals: "כל הארוחות",
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
      title: "יום מלא לצד נהר מארה",
      description: "יום מלא לצד נהר מארה — מעברים, טורפים וסבלנות. הלב הבלתי צפוי של המסלול הזה.",
      accommodation: "צפון הסרנגטי, משתנה לפי דרגה",
      meals: "כל הארוחות",
      insiderFact: "מעברים יכולים להתרחש בכל שעה ולהימשך רק דקות ספורות — המדריכים ממקמים את הרכבים בנקודות מעבר ידועות וממתינים, לעיתים שעות, עד שהעדרים מחליטים לחצות.",
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
      title: "צפון הסרנגטי — הסיורים האחרונים",
      description: "סיורי ספארי אחרונים בצפון הסרנגטי, עם הזדמנות נוספת למעברים ולאוכלוסיית הטורפים המתגוררים והצפופה שהאזור ידוע בה.",
      accommodation: "צפון הסרנגטי, משתנה לפי דרגה",
      meals: "כל הארוחות",
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
      title: "טיסה מקוגטנדה לארושה, יציאה",
      description: "עלייה למטוס קל ממסלול ההמראה קוגטנדה וטיסה בחזרה לארושה להמשך מסעכם הביתה — במבט מלמעלה על המישורים שבהם בילית שלושה ימים בחציית הדרך.",
      accommodation: "לא רלוונטי",
      meals: "ארוחת בוקר"
    }
  ]
},
{
  slug: "ultimate-tanzania-safari",
  name: "ספארי טנזניה האולטימטיבי וטרק שימפנזים בגומבה",
  duration: 11,
  destinations: [
    "arusha",
    "tarangire",
    "ngorongoro",
    "gombe"
  ],
  type: "big_five_game_drives",
    bestMonths: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    wildlifeTargets: [{ name: 'Chimpanzee', chance: 'High' }, { name: 'Black Rhino', chance: 'Rare' }, { name: 'Lion', chance: 'High' }, { name: 'Elephant', chance: 'High' }, { name: 'Giraffe', chance: 'High' }, { name: 'Colobus Monkey', chance: 'High' }],
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
  tagline: "עודכן לעונת 2027.",
  metaTitle: "ספארי טנזניה האולטימטיבי וטרק שימפנזים בגומבה | EWA Safari Outfitters",
  metaDescription: "חיות הבר של המעגל הצפוני וטרק שימפנזים בגומבה, המתנהלים כמסלול אחד רציף — שילוב נדיר בשוק הספארי הטנזני. 11 ימים בסך הכול, החל מ-5,908.96 דולר לאדם.",
  overview: [
    "מסלול זה משלב שני חלקים בטנזניה שרוב המפעילים משאירים נפרדים: המעגל הצפוני ונחל גומבה. הוא נפתח במסלול חיות הבר המבוסס של המדינה — הפארק הלאומי ארושה כפתיחה, עדרי הפילים של טרנגירה מתחת לבאובבים עתיקים, יום מלא בתוככי מכתש נגורונגורו — ולאחר מכן ממשיך מערבה, דרך דאר א-סלאם לקיגומה, אל הפארק הלאומי נחל גומבה על גדות אגם טנגניקה, שם החל מחקר השימפנזים המקורי של ג'יין גודול.",
    "יומיים מלאים בגומבה מוקדשים לטרק שימפנזים, על אותם שבילים שעליהם נבנה מחקרה. ההגעה לגומבה דורשת קטע טיסה פנימי שני וחציית אגם, לוגיסטיקה החורגת ממה שרוב המפעילים המתמקדים במעגל הצפוני מפעילים באופן שוטף, וזהו חלק מהסיבה לכך שהצירוף הזה נדיר. רוב מפעילי הטנזניה מריצים ספארי מעגל צפוני או הרחבת חוף בזנזיבר — אנחנו מריצים את שני החצאים של הטיול הזה כהזמנה רציפה אחת, תחת קשר עם מדריך יחיד, כך שהמטיילים אינם צריכים לתאם בין שני מפעילים נפרדים. עבור לקוחות שכבר עשו ספארי טנזני סטנדרטי ומחפשים את הצעד הבא, מסלול זה נבנה במיוחד כדי לענות על כך."
  ],
  highlights: [
    "צירוף נדיר — חיות בר במעגל הצפוני וטרק שימפנזים בגומבה המתנהלים כמסלול רצוף אחד",
    "הפארק הלאומי ארושה לפתיחת הטיול, עם הליכה מודרכת של חצי יום ברגל",
    "עדרי הפילים של טרנגירה וביקור בקהילה מסאית",
    "יום מלא בתוככי מכתש נגורונגורו, אחד המקומות האמינים יותר באזור לצפייה בחמשת הגדולים",
    "יומיים מלאים של טרק שימפנזים בנחל גומבה, על השבילים שבהם החל מחקרה של ג'יין גודול",
    "חציית אגם טנגניקה, חלק אינטגרלי מהמסלול ולא תוספת אגבית"
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
    "כל דמי הפארקים והשמורות",
    "כל סיורי הספארי",
    "היתרי טרק שימפנזים",
    "כל הטיסות הפנימיות (ארושה–דאר א-סלאם–קיגומה והלוך חזור)",
    "לינה כמפורט",
    "כל הארוחות בספארי",
    "העברות משדה התעופה"
  ],
  excluded: [
    "טיסות בינלאומיות",
    "אגרות ויזה",
    "ביטוח נסיעות",
    "טיפים"
  ],
  notes: [
    "התעריפים המוצגים הם לאדם בחדר זוגי/טווין משותף; תוספת תשלום לחדר יחיד זמינה לפי בקשה.",
    "גומבה מנפיקה מספר מוגבל של היתרי טרק ליום — מומלץ להזמין לפחות שלושה חודשים מראש בחלון הזמן יוני–אוקטובר.",
    "המטוסים הקטנים בקטעי קיגומה נושאים מכסת מזוודות נמוכה יותר מטיסות פנים סטנדרטיות; מומלץ לארוז לקטע גומבה בתיק רך ולא במזוודה קשיחה.",
    "הלינה והתעריפים כפופים לזמינות ועשויים להשתנות בהתאם למועד הנסיעה המדויק בתוך העונה."
  ],
  faq: [
    {
      q: "מדוע הצירוף הזה נדיר בענף הספארי?",
      a: "משום שספארי מעגל צפוני סטנדרטי וטיול לנחל גומבה משתמשים במסלולי נסיעה שונים. גומבה יושבת על אגם טנגניקה במערב טנזניה, ומגיעים אליה בטיסה דרך דאר א-סלאם לקיגומה — שרשרת לוגיסטית נפרדת ממעגל סיורי הספארי בצפון. רוב החברות מפעילות אחד מהשניים; מעטות בונות את שניהם למסלול רצוף אחד."
    },
    {
      q: "עד כמה תובעני פיזית טרק השימפנזים בגומבה?",
      a: "הטרק מתבצע על שבילי יער שיכולים להיות תלולים ולא אחידים, וההליכה למציאת השימפנזים יכולה להימשך בין שלושים דקות למספר שעות, בהתאם למקום שאליו נדדה הקהילה במהלך הלילה. רמת כושר סבירה עוזרת, אך זהו אינו טיפוס טכני או קיצוני."
    },
    {
      q: "האם הטיול הזה מתאים למבקר בטנזניה בפעם הראשונה, או מתאים יותר למטיילים חוזרים?",
      a: "שניהם מתאימים, אך הוא מתאים במיוחד למטיילים שכבר עשו ספארי סטנדרטי ומחפשים משהו מעבר למעגל הרגיל — החצי של המעגל הצפוני עדיין מספק את חוויית חיות הבר הקלאסית, בעוד שגומבה מוסיפה סוג מפגש שונה לחלוטין שרוב המבקרים בפעם הראשונה אפילו לא יודעים שהוא אפשרי."
    },
    {
      q: "מהי העונה הטובה ביותר בשנה למסלול הזה?",
      a: "העונה היבשה (בערך יוני עד אוקטובר) מציעה את התנאים הטובים ביותר לשני חלקי הטיול — צפייה קלה יותר בחיות בר במעגל הצפוני ותנאי טרק ברורים יותר בגומבה."
    },
    {
      q: "מה כלול במחיר ומה לא?",
      a: "כלול: כל דמי הפארקים והשמורות, כל סיורי הספארי, היתרי טרק שימפנזים, כל הטיסות הפנימיות (ארושה–דאר א-סלאם–קיגומה והלוך חזור), לינה כמפורט, כל הארוחות בספארי, והעברות משדה התעופה. לא כלול: טיסות בינלאומיות, אגרות ויזה, ביטוח נסיעות וטיפים."
    },
    {
      q: "האם ניתן להאריך את הטיול או לשלב אותו עם זנזיבר?",
      a: "כן — ניתן להוסיף הרחבת חוף בזנזיבר לאחר היום ה-11 עבור מטיילים המעוניינים לסיים את הטיול במספר ימי מנוחה על החוף. שאלו את היועץ שלכם על שילוב זה."
    }
  ],
  itinerary: [
    {
      day: 1,
      title: "הגעה לארושה",
      description: "נחיתה בשדה התעופה הבינלאומי קילימנג'רו והעברה לארושה דרך שטחי חקלאות ומטעי קפה למרגלות הר מרו. לאחר ההתמקמות, המדריך שלכם יצטרף אליכם לארוחת ערב ותדריך מלא על 11 הימים שלפניכם.",
      accommodation: "Kahawa House",
      meals: "ארוחת ערב",
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
      title: "הפארק הלאומי ארושה, סיור הליכה של חצי יום",
      description: "הליכה מודרכת ברגל, בליווי רינג'ר חמוש, דרך אחד הפארקים המעטים בטנזניה המציעים ספארי הליכה לאורך כל השנה. המסלול עובר בדרך כלל ליד אגמי מומלה, כאשר ג'ירפות ותאואים נראים לעיתים קרובות מקרוב, וקופי קולובוס נעים בין צמרות היער מעל.",
      accommodation: "Kahawa House",
      meals: "כל הארוחות",
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
      title: "מארושה לפארק הלאומי טרנגירה",
      description: "הנסיעה דרומה עוברת דרך מקויוני לפני הכניסה למישורי טרנגירה המנוקדים בבאובבים, ביתם של חלק מעדרי הפילים הגדולים ביותר בטנזניה. סיור ספארי אחר הצהריים עם ההגעה כולל את נהר טרנגירה, קו החיים של הפארק בעונה היבשה.",
      accommodation: "Tarangire Katikati Camp",
      meals: "כל הארוחות",
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
      title: "טרנגירה וביקור בקהילה מסאית",
      description: "חצי יום אחרון של צפייה בחיות בר בטרנגירה לפני הנסיעה מערבה, בטיפוס במצוק בקע השבר הגדול לכיוון רמות נגורונגורו. בדרך, ביקור בקהילה מסאית כולל זמן בבומה (חצר מסורתית) ושיחה על חיי הרועים באזור השימור.",
      accommodation: "Ngorongoro Farm House",
      meals: "כל הארוחות",
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
      title: "סיור יום במכתש נגורונגורו",
      description: "יום מלא בתוככי המכתש — מערכת אקולוגית עצמאית בשטח של כ-260 קמ״ר, המוקפת בקירות המתנשאים 400–600 מטר מעל התחתית. אוכלוסיות חיות בר צפופות ושטח קומפקטי הופכים אותו לאחד המקומות העקביים יותר במזרח אפריקה לצפייה בחמשת הגדולים, כולל הקרנף השחור.",
      accommodation: "Ngorongoro Farm House",
      meals: "כל הארוחות",
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
      title: "מקראטו לדאר א-סלאם",
      description: "נסיעת הבוקר חוזרת לשדה התעופה ארושה, ולאחריה טיסה מתוזמנת מזרחה לדאר א-סלאם — המסמנת את המעבר מהמעגל הצפוני אל המסע לכיוון גומבה.",
      accommodation: "Dar es Salaam Serena Hotel",
      meals: "כל הארוחות",
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
      title: "מדאר א-סלאם לנחל גומבה",
      description: "טיסה לרוחב המדינה אל קיגומה, על גדות אגם טנגניקה, ולאחריה העברה בסירה לאורך חוף האגם אל תוככי הפארק הלאומי נחל גומבה — אותה גישה שבה השתמש כל מבקר בפארק זה מאז פתיחתו, שכן שום כביש אינו מגיע אליו.",
      accommodation: "Mbali Mbali Gombe",
      meals: "כל הארוחות",
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
      title: "טרק שימפנזים, הפארק הלאומי גומבה",
      description: "יום מלא של טרק בליווי רינג'ר פארק חמוש בחיפוש אחר קהילת השימפנזים המורגלת של גומבה, אחת מאוכלוסיות השימפנזים הפראיים הנחקרות ביותר באפריקה. השבילים מטפסים בהדרגה מחוף האגם אל רכסי יער; לאחר איתור הקבוצה, הזמן עמם מוגבל לשעה מפוקחת.",
      accommodation: "Mbali Mbali Gombe",
      meals: "כל הארוחות",
      insiderFact: "קהילת השימפנזים של גומבה היא אחת מאוכלוסיות הפרימטים הפראיים הנחקרות ביותר עלי אדמות — מחקר רציף מתנהל כאן מאז מחקרה המקורי של ג'יין גודול ב-1960.",
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
      title: "מגומבה לעיירת קיגומה",
      description: "העברת החזרה לקיגומה, בחזרה על מסלול חוף האגם.",
      accommodation: "Kigoma Hilltop Hotel",
      meals: "כל הארוחות",
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
      title: "מקיגומה לדאר א-סלאם",
      description: "טיסה חזרה לרוחב המדינה אל דאר א-סלאם, עם זמן עם ההגעה לסיור עיר קצר לפני ההתמקמות לערב.",
      accommodation: "Dar es Salaam Serena Hotel",
      meals: "כל הארוחות",
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
      title: "יציאה",
      description: "העברה לשדה התעופה להמשך הטיסה הבינלאומית שלכם.",
      accommodation: "לא רלוונטי",
      meals: "ארוחת בוקר"
    }
  ]
},
{
  slug: "7-days-gems-of-north",
  name: "7 ימים: אוצרות הצפון",
  duration: 7,
  destinations: [
    "tarangire",
    "manyara",
    "serengeti",
    "ngorongoro"
  ],
  type: "big_five_game_drives",
    wildlifeTargets: [{ name: 'Lion', chance: 'High' }, { name: 'Elephant', chance: 'High' }, { name: 'Leopard', chance: 'Rare' }, { name: 'Black Rhino', chance: 'Rare' }, { name: 'Cheetah', chance: 'Rare' }, { name: 'Wildebeest', chance: 'Seasonal' }],
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
  metaDescription: "ספארי פרטי בן 7 ימים במעגל הצפוני — עדרי הפילים של טרנגירה, אריות מטפסי העצים של אגם מניארה, הסרנגטי והחמישייה הגדולה של מכתש נגורונגורו. החל מ-3,300$ לאדם.",
  overview: [
    "שבעה ימים, ארבעה פארקים, אפס קיצורי דרך: זוהי הגרסה הקומפקטית של המעגל הצפוני של טנזניה עבור מטיילים הרוצים את הכול מבלי למתוח את הטיול מעבר לשבוע. הוא נפתח בטרנגירה בין עדרי פילים המתקבצים לצד הנהר ובאובבים שנראים כמעט פרהיסטוריים, ממשיך לאגם מניארה לאריות המפורסמים המטפסים על עצים ולשוליים הרדודים המנוקדים בפלמינגו, ולאחר מכן חוצה אל הסרנגטי ליומיים מלאים בין חתולי בר וצפייה בחיות בר במישורים הפתוחים.",
    "מכתש נגורונגורו מסיים את חלק חיות הבר בטיול, אבן החן שבכתר המעגל הצפוני, והפארק היחיד שבו צפייה בחמשת הגדולים כמעט מובטחת ביום בודד, לפני שהמסלול מחזיר אתכם לשדה התעופה הבינלאומי קילימנג'רו עם שבוע שלם של צפון טנזניה מאחוריכם."
  ],
  highlights: [
    "עדרי הפילים ויער הבאובב של טרנגירה",
    "אריות מטפסי עצים באגם מניארה",
    "חתולי הבר והמישורים הפתוחים של הסרנגטי",
    "חמשת הגדולים במכתש נגורונגורו",
    "צפון טנזניה במלואו בשבעה ימים"
  ],
  heroImage: "/images/gallery/germs.jpg",
  heroImageAlt: "Zebras lined up drinking together at a watering hole",
  gallery: [],
  included: [
    "כל דמי הכניסה לפארקים",
    "כל סיורי הספארי ברכב 4x4 מסוג לנד קרוזר",
    "מדריך מקצועי",
    "כל הארוחות",
    "לינה בהתאם למסלול",
    "העברות משדה התעופה"
  ],
  excluded: [
    "טיסות בינלאומיות",
    "אגרות ויזה",
    "ביטוח נסיעות",
    "טיפים"
  ],
  notes: [
    "התעריפים המוצגים הם לאדם בחדר זוגי/טווין משותף; תוספת תשלום לחדר יחיד זמינה לפי בקשה.",
    "הלינה בנגורונגורו היא בעיירת ההרים קראטו, ולא ישירות על שפת המכתש.",
    "הלינה והתעריפים כפופים לזמינות ועשויים להשתנות בהתאם למועד הנסיעה המדויק בתוך העונה.",
    "דמי הפארקים הלאומיים ואזורי השימור בטנזניה נקבעים על ידי הממשלה וכפופים לשינוי ללא הודעה מוקדמת."
  ],
  itinerary: [
    {
      day: 1,
      title: "הגעה לארושה",
      description: "הגעה לשדה התעופה הבינלאומי קילימנג'רו והעברה למלון שלכם בארושה למנוחה ולתדריך ספארי.",
      accommodation: "מלון בארושה",
      meals: "ארוחת ערב",
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
      title: "הפארק הלאומי טרנגירה",
      description: "נסיעה אל הפארק הלאומי טרנגירה. נהר טרנגירה תומך בריכוזי חיות בר יוצאי דופן — מאות פילים, זברות, ווילדביסטים, ג'ירפות ואימפלות חולקים את המים עם תנינים והיפופוטמים. עצי הבאובב העתיקים מעניקים לנוף אווירה כמעט פרהיסטורית.",
      accommodation: "קמפ אוהלים בטרנגירה",
      meals: "כל הארוחות",
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
      title: "הפארק הלאומי אגם מניארה",
      description: "נסיעה לאגם מניארה, המפורסם באריותיו מטפסי העצים — התנהגות ייחודית לאוכלוסייה זו. יער המים התת-קרקעיים מאכלס להקות בבונים וקופי קולובוס, בעוד האגם האלקליני הרדוד צובע את עצמו בוורוד מלהקות פלמינגו. גייזרים חמים מעלים אדים בשולי המים.",
      accommodation: "מלון באגם מניארה",
      meals: "כל הארוחות",
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
      title: "סרנגטי — הגעה וסיור אחר צהריים",
      description: "נסיעה על פני רמות נגורונגורו וירידה אל מישורי הסרנגטי. הגעה לאזור סרונרה לסיור ספארי אחר הצהריים. נמרים משוטטים בין חורשות עצי הנקניקיות סביב מפגש הנהרות — אחד מבתי הגידול האמינים ביותר לנמרים בטנזניה.",
      accommodation: "קמפ אוהלים בסרנגטי",
      meals: "כל הארוחות",
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
      title: "סרנגטי — יום מלא",
      description: "יום שלם בסרנגטי עם סיורים בבוקר ואחר הצהריים. ברדלסים סורקים טרף מגבשושיות טרמיטים. אריות סורקים את גבולות הטריטוריה. עדרי הווילדביסט משתרעים על פני המישורים בטורים הנעלמים באופק.",
      accommodation: "קמפ אוהלים בסרנגטי",
      meals: "כל הארוחות",
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
      title: "מכתש נגורונגורו",
      description: "עזיבת הסרנגטי וירידה אל מכתש נגורונגורו — אבן החן שבכתר המעגל הצפוני של טנזניה. חמשת הגדולים כולם מתגוררים בתוך המכתש הקדום הזה. אריות נראים לעיתים קרובות צדים בשטח הפתוח, בעוד קרנפים שחורים רועים במרחק. לינה בעיירת ההרים קראטו.",
      accommodation: "לודג' בקראטו",
      meals: "כל הארוחות",
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
      title: "יציאה",
      description: "נסיעה לשדה התעופה הבינלאומי קילימנג'רו לטיסתכם הביתה, כשאתם נושאים עמכם שבעה ימים של חוויות חיות בר יוצאות דופן בצפון טנזניה.",
      accommodation: "לא רלוונטי",
      meals: "ארוחת בוקר"
    }
  ]
},
{
  slug: "7-days-flight-ndutu",
  name: "7 ימים: טיסה מעל הגירת נדוטו",
  duration: 7,
  destinations: [
    "serengeti",
    "ngorongoro"
  ],
  type: "migration",
    bestMonths: ['Jan', 'Feb', 'Mar'],
    wildlifeTargets: [{ name: 'Wildebeest', chance: 'Seasonal', note: 'newborn calves, Jan-Mar calving season' }, { name: 'Cheetah', chance: 'Seasonal' }, { name: 'Spotted Hyena', chance: 'Seasonal' }, { name: 'Lion', chance: 'High' }, { name: 'Black Rhino', chance: 'Rare' }, { name: 'Leopard', chance: 'Rare' }],
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
  metaDescription: "טוסו מעל מכתש נגורונגורו אל שדות ההמלטה של נדוטו, לספארי סרנגטי פרטי בן 7 ימים המתוזמן בדיוק לשיא פעילות הטורפים ולעגלי ווילדביסט טריים. החל מ-4,000$ לאדם.",
  overview: [
    "מסלול זה מתוזמן לאירוע ספציפי אחד: עונת ההמלטה בנדוטו, שבה עד 8,000 עגלי ווילדביסט נולדים כאן מדי יום בין ינואר למרץ, וכל טורף במערכת האקולוגית — אריה, ברדלס, צבוע, כלב בר — מתכנס אל מישורי העשב הקצר כדי לנצל זאת. הטיסה פנימה קובעת את הטון עוד לפני שנחתתם, כשהיא עוברת ישירות מעל שפת מכתש נגורונגורו כדי שתוכלו לראות מהאוויר את קנה המידה המעגלי המלא של המכתש, לפני שתבלו יומיים מלאים על הקרקע בטריטוריית חתולי הבר של מרכז הסרנגטי, הפעילה לאורך כל השנה.",
    "יום מלא בנדוטו עצמה מציב אתכם בלב הפעילות, והטיול מסתיים בירידה מודרכת אל מכתש נגורונגורו, כשהוא מחליף את הדרמה של שדות ההמלטה בצפייה כמעט מובטחת בחמשת הגדולים בקערת חיות הבר הצפופה ביותר באפריקה."
  ],
  highlights: [
    "טיסה מעל מכתש נגורונגורו — נוף מעוף הציפור",
    "עונת ההמלטה בנדוטו — 8,000 ווילדביסטים נולדים מדי יום",
    "פעילות טורפים בשיא עוצמתה",
    "חתולי הבר של מרכז הסרנגטי לאורך כל השנה",
    "ירידה לחמשת הגדולים במכתש נגורונגורו"
  ],
  heroImage: "/images/gallery/ndutu-wildebeest-watering-hole.jpg",
  heroImageAlt: "Wildebeest herds gathered around a watering hole in the Ndutu area of southern Serengeti",
  gallery: [],
  included: [
    "כל דמי הפארקים",
    "טיסת שכר פנימית",
    "כל סיורי הספארי",
    "מדריך מקצועי",
    "כל הארוחות",
    "לינה",
    "העברות משדה התעופה"
  ],
  excluded: [
    "טיסות בינלאומיות",
    "אגרות ויזה",
    "ביטוח נסיעות",
    "טיפים"
  ],
  notes: [
    "התעריפים המוצגים הם לאדם בחדר זוגי/טווין משותף; תוספת תשלום לחדר יחיד זמינה לפי בקשה.",
    "גודל קבוצה מינימלי של 2 אנשים כדי שטיסת השכר הפנימית תהיה כדאית.",
    "מסלול זה מתוזמן לעונת ההמלטה בנדוטו (ינואר–מרץ); צפיות חיות הבר המדויקות כפופות לשונות טבעית.",
    "הלינה והתעריפים כפופים לזמינות ועשויים להשתנות בהתאם למועד הנסיעה המדויק בתוך העונה.",
    "דמי הפארקים הלאומיים ואזורי השימור בטנזניה נקבעים על ידי הממשלה וכפופים לשינוי ללא הודעה מוקדמת."
  ],
  itinerary: [
    {
      day: 1,
      title: "הגעה לארושה",
      description: "הגעה לשדה התעופה הבינלאומי קילימנג'רו והעברה למלון שלכם בארושה. תדריך ספארי לצד ארוחת ערב.",
      accommodation: "מלון בארושה",
      meals: "ארוחת ערב",
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
      title: "טיסה אל תוככי הסרנגטי",
      description: "עלייה למטוס הקל שלכם בארושה. מסלול הטיסה עובר ישירות מעל מכתש נגורונגורו — מהאוויר, הקערה המעגלית המושלמת חושפת את קנה המידה המלא שלה, עולם זעיר של דשא ואגמים בתוך שפה של לבה עתיקה. נחיתה במסלול ההמראה סרונרה ותחילת סיור הספארי הראשון שלכם אחר הצהריים.",
      accommodation: "קמפ אוהלים בסרנגטי",
      meals: "ארוחת צהריים וערב",
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
      title: "מרכז הסרנגטי — סיורי ספארי",
      description: "יום מלא לחקר מישורי מרכז הסרנגטי סביב סרונרה. זהו אחד האזורים הפוריים ביותר לחיות בר באפריקה לאורך כל השנה, עם להקות אריות, ברדלסים ונמרים מתגוררים, לצד עדרים עצומים של זברות וווילדביסטים.",
      accommodation: "קמפ אוהלים בסרנגטי",
      meals: "כל הארוחות",
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
      title: "דרום הסרנגטי — שדות ההמלטה של נדוטו",
      description: "נסיעה דרומה אל אזור נדוטו על הגבול שבין הסרנגטי לאזור השימור נגורונגורו. במהלך עונת ההמלטה (ינואר עד מרץ), עד 8,000 עגלי ווילדביסט נולדים כאן מדי יום. ברדלסים, אריות, צבועים וכלבי בר מתכנסים אל הוולדות הפגיעים בריכוזי טורפים יוצאי דופן.",
      accommodation: "לודג' ספארי בנדוטו",
      meals: "כל הארוחות",
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
      title: "נדוטו — יום מלא בעונת ההמלטה",
      description: "יום מלא נוסף באיתור עדרי ההמלטה והטורפים שלהם על פני מישורי העשב הקצר. חורשות נדוטו מספקות בית גידול לנמרים ולחתולי בר אפריקאים בין דרמת השטח הפתוח. חיי הציפורים פורחים בעונה זו.",
      accommodation: "לודג' ספארי בנדוטו",
      meals: "כל הארוחות",
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
      title: "מכתש נגורונגורו",
      description: "נסיעה לנגורונגורו וירידה אל תוככי המכתש ליום מלא עם חמשת הגדולים. להקות האריות המתגוררות שם הן בין הנחקרות ביותר בעולם. קרנפים שחורים, הנדירים כמעט בכל מקום אחר, נצפים כאן באופן קבוע. לינה בעיירה הקסומה קראטו.",
      accommodation: "לודג' בקראטו",
      meals: "כל הארוחות",
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
      title: "יציאה",
      description: "נסיעה לשדה התעופה הבינלאומי קילימנג'רו לטיסתכם הביתה.",
      accommodation: "לא רלוונטי",
      meals: "ארוחת בוקר"
    }
  ]
},
{
  slug: "8-days-flight-migration",
  name: "ספארי מעבר נהר הווילדביסט בן 8 ימים",
  duration: 8,
  destinations: [
    "serengeti",
    "ngorongoro"
  ],
  type: "migration",
    bestMonths: ['Jul', 'Aug', 'Sep', 'Oct'],
    wildlifeTargets: [{ name: 'Wildebeest', chance: 'Seasonal', note: 'Mara River crossings, Jul-Oct' }, { name: 'Nile Crocodile', chance: 'Seasonal' }, { name: 'Lion', chance: 'High' }, { name: 'Leopard', chance: 'Rare' }, { name: 'Cheetah', chance: 'Rare' }, { name: 'Black Rhino', chance: 'Rare' }],
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
  tagline: "עודכן לעונת 2027.",
  metaTitle: "ספארי מעבר נהר הווילדביסט בן 8 ימים | EWA Safari Outfitters",
  metaDescription: "טיסה ישירה אל מעברי נהר מארה של ההנדידה הגדולה, ולאחריה תנועה דרומה דרך הסרנגטי ואל מכתש נגורונגורו. זמין בשלוש דרגות, החל מ-3,852.29 דולר לאדם.",
  overview: [
    "בין יולי לאוקטובר, צפון הסרנגטי מארח את הפרק הבודד הדרמטי ביותר של ההגירה הגדולה: מאות אלפי ווילדביסטים מתגודדים על גדות נהר מארה לפני שהם פורצים אל מים שבהם תנינים אפריקאים כבר ממתינים. מסלול זה מטיס אתכם ישירות למסלול ההמראה קוגטנדה, במרחק 45 דקות בלבד ממוקדי המעבר, במקום לבזבז יום וחצי בנסיעה לשם, ומחזיק אתכם בטריטוריה הזו במשך יומיים מלאים כדי שהמדריך שלכם יוכל לעבוד עם תנועות העדר במקום לרדוף אחר צפייה בודדת.",
    "משם המסלול פועל דרומה דרך חיות הבר המתגוררות של הסרנגטי — להקות אריות, נמרים בעצי גדות הנהר, ברדלסים עם גורים על העשב הפתוח — לפני שני לילות מלאים במכתש נגורונגורו, ומסתיים בביקור אמיתי בקהילה מסאית ועצירה במטו וה אמבו בדרך חזרה לארושה. זמין בשלוש דרגות — Wilderness Trail, Wilderness Reserve ו-Wilderness Sovereign — העוקבות אחר אותו מסלול בן שמונת הימים בדיוק, כשרמת הקמפים והלודג'ים משתנה מתחתיכם."
  ],
  highlights: [
    "טיסה ישירה לצפון הסרנגטי — 45 דקות ממוקדי המעבר בנהר מארה, במקום יום וחצי בכביש",
    "יומיים מלאים במוקדי המעבר, המעניקים למדריך שלכם זמן לעבוד עם תנועות העדר במקום לרדוף אחר צפייה בודדת",
    "תנינים וחתולי בר פועלים בסביבת המעברים — נהר מארה מלא בשניהם לאורך כל עונת ההגירה",
    "הטורפים המתגוררים לאורך כל השנה במרכז הסרנגטי, בדרך דרומה",
    "שני לילות מלאים במכתש נגורונגורו, עם צפיות אמינות בקרנף השחור וחלק מאוכלוסיות האריות הצפופות ביותר בטנזניה",
    "ביקור אמיתי בקהילה מסאית ועצירה במטו וה אמבו בגישה האחרונה לארושה"
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
    "כל דמי הפארקים והזיכיונות",
    "טיסת ארושה–קוגטנדה",
    "כל סיורי הספארי",
    "מדריך מקצועי לאורך כל הטיול",
    "כל הארוחות",
    "לינה כמפורט",
    "העברות משדה התעופה"
  ],
  excluded: [
    "טיסות בינלאומיות",
    "אגרות ויזה",
    "ביטוח נסיעות",
    "טיפים"
  ],
  notes: [
    "התעריפים המוצגים הם לאדם בחדר זוגי/טווין משותף; תוספת תשלום לחדר יחיד זמינה לפי בקשה.",
    "מעברי נהר מארה אמינים ביותר בין יולי לאוקטובר, ולא ניתן להבטיח אותם בתאריך ספציפי כלשהו.",
    "הלינה והתעריפים כפופים לזמינות ועשויים להשתנות בהתאם למועד הנסיעה המדויק בתוך העונה.",
    "דמי הפארקים הלאומיים ואזורי השימור בטנזניה נקבעים על ידי הממשלה וכפופים לשינוי ללא הודעה מוקדמת."
  ],
  faq: [
    {
      q: "כמה עולה הספארי הזה?",
      a: "Wilderness Trail מתחילה ב-3,852.29 דולר לאדם (6 מטיילים, חדר טווין משותף), ועולה עד 4,829.38 דולר לזוג המטייל לבדו. Wilderness Reserve מתחילה ב-5,151.04 דולר, ועולה עד 6,128.13 דולר. Wilderness Sovereign מתחילה ב-9,164.79 דולר, ועולה עד 10,141.88 דולר. כל ספארי הוא בהתאמה אישית, כך שמומלץ לבקש הצעת מחיר מותאמת אישית לתעריפים המדויקים בתאריכים שלכם."
    },
    {
      q: "מה ההבדל בין שלוש הדרגות?",
      a: "המסלול, הפעילויות והתזמון במוקדי המעבר זהים בשלושת הדרגות. מה שמשתנה הם הקמפים והלודג'ים: Wilderness Trail ישירה ונוחה, Wilderness Reserve מוסיפה מרחב ושירות מוקפד, ו-Wilderness Sovereign מציבה אתכם בנכסים היוצאי דופן ביותר במסלול זה."
    },
    {
      q: "האם מעבר נהר מובטח?",
      a: "שום מפעיל אחראי אינו יכול להבטיח אירוע חיות בר ספציפי ביום מסוים — המעברים אמינים ביותר בין יולי לאוקטובר, אך התזמון תלוי בדפוסי גשמים ובתנועת העדר המשתנים משנה לשנה. מסלול זה מקצה יומיים מלאים במוקדי המעבר במיוחד כדי למקסם את הסיכויים שלכם."
    },
    {
      q: "מדוע לטוס במקום לנסוע לנהר מארה?",
      a: "הנסיעה מארושה לצפון הסרנגטי אורכת יום וחצי בכל כיוון. טיסה לקוגטנדה מכניסה אתכם לשטח באותו אחר הצהריים שבו עזבתם את ארושה, וממקמת אתכם במרחק 45 דקות ממוקדי המעבר במקום שעות."
    },
    {
      q: "מהי העונה הטובה ביותר בשנה לספארי הזה?",
      a: "יולי עד אוקטובר היא עונת מעברי נהר מארה של ההגירה, ומסלול זה נבנה במיוחד סביב חלון זמן זה."
    },
    {
      q: "האם נצפה בחמשת הגדולים?",
      a: "מכתש נגורונגורו מציע את הסיכויים הטובים ביותר באזור לחמשת הגדולים במלואם, כולל הקרנף השחור המצוי בסכנת הכחדה, לצד אוכלוסיות האריות, הנמרים והברדלסים המתגוררות לאורך כל השנה במרכז הסרנגטי."
    },
    {
      q: "מה כלול במחיר ומה לא?",
      a: "כלול: כל דמי הפארקים והזיכיונות, טיסת ארושה–קוגטנדה, כל סיורי הספארי, מדריך מקצועי לאורך כל הטיול, כל הארוחות, לינה כמפורט, והעברות משדה התעופה. לא כלול: טיסות בינלאומיות, אגרות ויזה, ביטוח נסיעות וטיפים."
    },
    {
      q: "האם ניתן לשלב את הטיול הזה עם יעדים נוספים?",
      a: "כן — מסלול זה משתלב באופן טבעי עם הרחבת חוף בזנזיבר, או ניתן לשלבו עם ספארי מעגל דרומי עבור מטיילים המעוניינים לראות את שני חצאי טנזניה בטיול אחד."
    }
  ],
  itinerary: [
    {
      day: 1,
      title: "הגעה לארושה",
      description: "נחיתה בשדה התעופה הבינלאומי קילימנג'רו והעברה לארושה. תדריך ספארי לצד ארוחת ערב.",
      accommodation: "ארושה, משתנה לפי דרגה",
      meals: "ארוחת ערב",
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
      title: "טיסה לצפון הסרנגטי — קוגטנדה",
      description: "עלייה למטוס קל בארושה; הטיסה עוברת ישירות מעל שפת מכתש נגורונגורו, כאשר המכתש הקדום נראה כזעיר למטה. נחיתה במסלול ההמראה קוגטנדה, במרחק 45 דקות בלבד ממוקדי המעבר בנהר מארה. סיור ספארי אחר הצהריים קובע את הטון.",
      accommodation: "צפון הסרנגטי, משתנה לפי דרגה",
      meals: "כל הארוחות",
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
      title: "יום מלא, צפון הסרנגטי",
      description: "יום מלא של עבודה על מעברי נהר מארה — מאות אלפי ווילדביסטים מתגודדים על הגדה לפני שהם פורצים אל מים שבהם תנינים אפריקאים כבר ממתינים. המדריך שלכם ממקם אתכם בהתאם לתנועת העדר לאורך היום, ולא לפי לוח זמנים קבוע.",
      accommodation: "צפון הסרנגטי, משתנה לפי דרגה",
      meals: "כל הארוחות",
      insiderFact: "מעברים יכולים להתרחש בכל שעה ולהימשך רק דקות ספורות — המדריכים ממקמים את הרכבים בנקודות מעבר ידועות וממתינים, לעיתים שעות, עד שהעדרים מחליטים לחצות.",
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
      title: "מצפון הסרנגטי למרכז הסרנגטי",
      description: "חצי יום אחרון במעברים לפני הנסיעה דרומה. פילים וג'ירפות שכיחים לאורך קטע זה, מה שהופך את יום המעבר לפעיל ולא להעברה גרידא.",
      accommodation: "מרכז הסרנגטי, משתנה לפי דרגה",
      meals: "כל הארוחות",
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
      title: "ממרכז הסרנגטי לנגורונגורו",
      description: "חצי יום לחקר חתולי הבר המתגוררים לאורך כל השנה בסרונרה — אריה, נמר וברדלס הם כולם צפיות ריאליות כאן ללא תלות בעונה — לפני הנסיעה אל רמות נגורונגורו.",
      accommodation: "רמות נגורונגורו, משתנה לפי דרגה",
      meals: "כל הארוחות",
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
      title: "סיור יום במכתש נגורונגורו",
      description: "יום מלא של ירידה אל תחתית המכתש — חיות בר צפופות בתוך מערכת אקולוגית סגורה אחת, צפיות אמינות בקרנף השחור, וחלק מלהקות האריות הצפופות ביותר בטנזניה.",
      accommodation: "רמות נגורונגורו, משתנה לפי דרגה",
      meals: "כל הארוחות",
      insiderFact: "מכתש נגורונגורו הוא מערכת אקולוגית סגורה בשטח של כ-260 קמ״ר — רוב בעלי החיים המתגוררים בו אינם עוזבים אותו לעולם, כולל חלק מהצפיות האמינות ביותר באזור בקרנף השחור.",
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
      title: "קהילה מסאית ומטו וה אמבו",
      description: "ביקור אמיתי בקהילה מסאית, ולאחריו עצירה בעיירת השוק מטו וה אמבו בדרך חזרה לארושה — זמן תרבותי אמיתי, לא עצירה מתוזמנת בין סיורי ספארי.",
      accommodation: "ארושה, משתנה לפי דרגה",
      meals: "כל הארוחות",
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
      title: "סיור עיר בארושה ויציאה",
      description: "בוקר אחרון בארושה לפני ההעברה לשדה התעופה הבינלאומי קילימנג'רו לטיסתכם הביתה.",
      accommodation: "לא רלוונטי",
      meals: "ארוחת בוקר"
    }
  ]
},
{
  slug: "11-days-rwanda-tanzania",
  name: "ספארי רואנדה טנזניה בן 11 ימים",
  duration: 11,
  destinations: [
    "volcanoes",
    "kigali",
    "serengeti",
    "ngorongoro"
  ],
  type: "gorilla_trekking",
    wildlifeTargets: [{ name: 'Mountain Gorilla', chance: 'Guaranteed' }, { name: 'Golden Monkey', chance: 'High' }, { name: 'Lion', chance: 'High' }, { name: 'Black Rhino', chance: 'Rare' }, { name: 'Giraffe', chance: 'High' }, { name: 'Wildebeest', chance: 'Seasonal' }],
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
  metaDescription: "מסע בן 11 ימים המשלב טרק גורילות הרים וקופי זהב בפארק הלאומי הרי הגעש שברואנדה עם ספארי חיות בר בסרנגטי ובמכתש נגורונגורו. החל מ-6,500$ לאדם.",
  overview: [
    "אחד עשר ימים המחברים בין שתיים מחוויות חיות הבר הייחודיות ביותר באפריקה: טרק גורילות הרים ומעקב אחר קופי זהב בפארק הלאומי הרי הגעש של רואנדה, ולאחריהם המישורים הפתוחים של הסרנגטי וירידה מלאה אל מכתש נגורונגורו. אנדרטת רצח העם בקיגלי, המבוקרת ביום המלא הראשון שלכם, מעניקה הקשר חיוני לרואנדה המודרנית, לפני שהטיול עובר אל יער הבמבוק של הוירונגה, שם מחכה לכם גם מפגש עם משפחת גורילות מורגלת וגם עם להקת קופי זהב הנמצאים רק בהרים הללו.",
    "טיסה מעל אלף הגבעות ואל תוככי הסוואנה הטנזנית מסמנת את מחצית הדרך, והקטע האחרון מוסיף משהו שאף אחד מפארקי שתי המדינות אינו יכול להציע: יום עם בני ההדזבה באגם איאסי, אחת מקהילות הציידים-לקטים האמיתיות האחרונות באפריקה, כשאתם מצטרפים לציד בוקר ולומדים טכניקות הבערת אש שלא השתנו במשך אלפי שנים, לפני שהטיול מסתיים בקילימנג'רו."
  ],
  highlights: [
    "טרק גורילות הרים בפארק הלאומי הרי הגעש",
    "מעקב אחר קופי זהב בהרי הוירונגה",
    "אנדרטת רצח העם בקיגלי — חוויה עוצמתית וחשובה",
    "חתולי הבר והווילדביסטים של הסרנגטי",
    "חמשת הגדולים בנגורונגורו"
  ],
  heroImage: "/images/gallery/gorilla-mother-and-baby-rwanda.jpg",
  heroImageAlt: "Mountain gorilla mother and her baby together in Rwanda's forest",
  gallery: [],
  included: [
    "כל דמי הפארקים והיתרי הגורילות",
    "כל סיורי הספארי",
    "מדריך מקצועי",
    "כל הארוחות",
    "לינה",
    "העברות משדה התעופה",
    "טיסות פנימיות בטנזניה"
  ],
  excluded: [
    "טיסות בינלאומיות",
    "אגרות ויזה",
    "ביטוח נסיעות",
    "טיפים"
  ],
  notes: [
    "התעריפים המוצגים הם לאדם בחדר זוגי/טווין משותף; תוספת תשלום לחדר יחיד זמינה לפי בקשה.",
    "טרק הגורילות הוא מפגש קבוע בן שעה עם המשפחה, ומעקב קופי הזהב הוא פעילות נפרדת — שני ההיתרים מוקצים מראש על ידי מועצת הפיתוח של רואנדה.",
    "הלינה והתעריפים כפופים לזמינות ועשויים להשתנות בהתאם למועד הנסיעה המדויק בתוך העונה.",
    "דמי הפארקים והשימור ברואנדה ובטנזניה נקבעים על ידי הממשלות המתאימות וכפופים לשינוי ללא הודעה מוקדמת."
  ],
  itinerary: [
    {
      day: 1,
      title: "הגעה לקיגלי",
      description: "הגעה לשדה התעופה הבינלאומי קיגלי והעברה למלון שלכם. קיגלי היא אחת מבירות אפריקה הנקיות והמאורגנות ביותר — היכרות אידיאלית עם רואנדה.",
      accommodation: "מלון בקיגלי",
      meals: "ארוחת ערב",
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
      title: "אנדרטת רצח העם בקיגלי",
      description: "ביקור באנדרטת רצח העם בקיגלי, המנציחה את 250,000 הקורבנות הקבורים בשטח ומתעדת את היסטוריית רצח העם של 1994 באמצעות עדויות ניצולים, תצלומים וסרט תיעודי. האנדרטה היא הן חוויה מרגשת עמוקות והן הקשר חיוני להבנת רואנדה המודרנית. אחר הצהריים פנוי לחקר רובע האמנויות התוסס של קיגלי.",
      accommodation: "מלון בקיגלי",
      meals: "ארוחת בוקר וערב",
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
      title: "נסיעה לרוהנגרי — נופי הוירונגה",
      description: "נסיעה בת ארבע שעות צפון-מערבה אל רוהנגרי (מוסנזה) דרך אלף הגבעות המפורסמות של רואנדה. שרשרת הרי הגעש של הוירונגה מתנשאת בדרמטיות מעל שטחי החקלאות שמסביב. עצירה לארוחת צהריים במסעדה מקומית ברמות, והגעה לרוהנגרי בשעות הערב המוקדמות.",
      accommodation: "מלון ברוהנגרי",
      meals: "כל הארוחות",
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
      title: "טרק גורילות הרים — הפארק הלאומי הרי הגעש",
      description: "אחת מחוויות חיות הבר יוצאות הדופן ביותר בעולם. יציאה מתחנת הרינג'רים קיניגי לצד המדריך המקצועי שלכם ורינג'רים חמושים לאיתור משפחת גורילות מורגלת ביערות הבמבוק של הוירונגה. עם המפגש, תבלו שעה עם הפרימטים המרשימים הללו — צפייה בזכרי הגב הכסוף המנהיגים את משפחותיהם, אמהות המניקות תינוקות, וצעירים המשחקים מעל. ביקור בפרויקט הווטרינרי לגורילות במוהזה ללמוד על מאמצי השימור.",
      accommodation: "מלון ברוהנגרי",
      meals: "כל הארוחות",
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
      title: "מעקב אחר קופי זהב",
      description: "חזרה לפארק הלאומי הרי הגעש למעקב אחר קוף הזהב בסכנת ההכחדה — פרימט בגון כחול-זהוב חשמלי הנמצא רק בהרי הוירונגה. שביל היער שונה מטרק הגורילות, ומציע נקודות מבט חדשות על בית הגידול בבמבוק. צבאים ואנטילופות רועים בשולי היער בשעות אחר הצהריים.",
      accommodation: "מלון ברוהנגרי",
      meals: "כל הארוחות",
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
      title: "טיסה אל הסרנגטי",
      description: "העברת בוקר לשדה התעופה קיגלי וטיסה אל הסרנגטי. מסלול הטיסה עובר מעל אלף הגבעות של רואנדה וחוצה את הגבול אל הסוואנה העצומה של טנזניה — שינוי דרמטי בנוף. נחיתה בסרונרה ותחילת סיור הספארי הראשון שלכם אחר הצהריים על המישורים.",
      accommodation: "קמפ אוהלים בסרנגטי",
      meals: "ארוחת צהריים וערב",
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
      title: "סרנגטי — יום מלא",
      description: "יום שלם במרכז הסרנגטי. חתולי בר, עדרי ווילדביסט ונוף השיטה האייקוני מספקים צפייה עשירה בחיות בר מהבוקר ועד הערב. משקאות שקיעה על קופיה כשמי הסרנגטי צובעים עצמם בזהב.",
      accommodation: "קמפ אוהלים בסרנגטי",
      meals: "כל הארוחות",
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
      title: "סרנגטי — המשך חקירה",
      description: "יום מלא נוסף באיתור חיות בר על פני מישורי הסרנגטי. המדריך שלכם עוקב אחר מידע עדכני כדי למקם אתכם היכן שאריות בציד או ברדלס עם גורים בעשב.",
      accommodation: "קמפ אוהלים בסרנגטי",
      meals: "כל הארוחות",
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
      title: "מכתש נגורונגורו",
      description: "נסיעה לנגורונגורו וירידה אל תוככי המכתש ליום מלא עם חמשת הגדולים. המכתש הסגור מבטיח צפיות מרשימות בחיות בר בתפאורה געשית מרהיבה.",
      accommodation: "Ngorongoro Serena Lodge",
      meals: "כל הארוחות",
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
      title: "אגם איאסי — ציידים-לקטים מבני ההדזבה",
      description: "נסיעה לאגם איאסי לבילוי היום עם בני ההדזבה, אחת מקהילות הציידים-לקטים האמיתיות האחרונות באפריקה. הצטרפות לציד בוקר עם קשתות וחצים מסורתיים, צפייה בטכניקות הבערת אש שלא השתנו במשך אלפי שנים, והשגת הבנה עמוקה של אורח חיים הנמצא ממש בשולי המודרניות.",
      accommodation: "קמפ אוהלים באגם איאסי",
      meals: "כל הארוחות",
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
      title: "יציאה — שדה התעופה הבינלאומי קילימנג'רו",
      description: "העברה מאגם איאסי לשדה התעופה הבינלאומי קילימנג'רו לטיסתכם הביתה. אחד עשר ימים המחברים בין שתיים ממדינות אפריקה יוצאות הדופן ביותר.",
      accommodation: "לא רלוונטי",
      meals: "ארוחת בוקר"
    }
  ]
},
{
  slug: "12-days-rwanda-tanzania-zanzibar",
  name: "12 ימים: רואנדה, טנזניה וזנזיבר",
  duration: 12,
  destinations: [
    "volcanoes",
    "tarangire",
    "ngorongoro",
    "serengeti",
    "zanzibar"
  ],
  type: "big_five_game_drives",
    wildlifeTargets: [{ name: 'Mountain Gorilla', chance: 'Guaranteed' }, { name: 'Golden Monkey', chance: 'High' }, { name: 'Elephant', chance: 'High' }, { name: 'Black Rhino', chance: 'Rare' }, { name: 'Lion', chance: 'High' }, { name: 'Leopard', chance: 'Rare' }],
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
  metaDescription: "12 ימים המשלבים טרק גורילות ברואנדה, ספארי חיות בר בטנזניה דרך טרנגירה, נגורונגורו והסרנגטי, וארבעה לילות נופש על חופי זנזיבר. החל מ-9,375$ לאדם.",
  overview: [
    "שנים עשר ימים שאינם מבקשים מכם לוותר על דבר: מפגש עם גורילות הרים ומעקב אחר קופי זהב בפארק הלאומי הרי הגעש של רואנדה, ספארי טנזני מלא דרך טרנגירה, מכתש נגורונגורו ויומיים מלאים במרכז הסרנגטי, וארבעה לילות המסיימים את הטיול על חופי זנזיבר. מעטים המסלולים המשלבים משפחת גורילות מורגלת, חמשת הגדולים וחול לבן באותה הזמנה, שלא לדבר על מסלול בנוי היטב כל כך.",
    "אנדרטת רצח העם בקיגלי מעגנת את קטע רואנדה בהקשר הראוי לו, ספארי הליכה מודרך בטרנגירה מוסיף קצב שונה לחלק חיות הבר, והטיול כולו פועל בשלוש דרגות לינה — Trail, Reserve ו-Sovereign — כך שהמסלול נשאר זהה ללא תלות בדרגה שתזמינו."
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
    "מפגש בן שעה עם משפחת גורילות הרים מורגלת בפארק הלאומי הרי הגעש של רואנדה",
    "מעקב אחר קופי זהב באותו יער במבוק בהרי הוירונגה",
    "אנדרטת רצח העם בקיגלי — פרק עוצמתי וחיוני בסיפורה של רואנדה",
    "עדרי הפילים של טרנגירה וספארי הליכה מודרך",
    "חמשת הגדולים במכתש נגורונגורו, בתוך המכתש השלם הגדול בעולם",
    "יומיים מלאים בטריטוריית הטורפים המובילה של מרכז הסרנגטי",
    "ארבעה לילות המסיימים את הטיול על חופי זנזיבר"
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
    "דמי היתרי טרק הגורילות וקופי הזהב",
    "כל דמי הכניסה לפארקים",
    "כל סיורי הספארי ברכב 4x4 פרטי",
    "מדריך מקצועי לאורך כל הטיול",
    "טיסות פנימיות (קיגלי–ארושה, סרנגטי–זנזיבר)",
    "כל הארוחות כמפורט",
    "לינה בהתאם למסלול",
    "העברות משדה התעופה ובין הנכסים"
  ],
  includedCategorized: {
    transfers: [
      "טיסות פנימיות (קיגלי–ארושה, סרנגטי–זנזיבר)",
      "העברות משדה התעופה ובין הנכסים"
    ],
    accommodationMeals: [
      "כל הארוחות כמפורט",
      "לינה בהתאם למסלול"
    ],
    guidingGameDrives: [
      "דמי היתרי טרק הגורילות וקופי הזהב",
      "כל דמי הכניסה לפארקים",
      "כל סיורי הספארי ברכב 4x4 פרטי",
      "מדריך מקצועי לאורך כל הטיול"
    ]
  },
  excluded: [
    "טיסות בינלאומיות",
    "אגרות ויזה",
    "ביטוח נסיעות",
    "טיפים",
    "פעילויות אופציונליות בזנזיבר"
  ],
  excludedCategorized: [
    "טיסות בינלאומיות",
    "אגרות ויזה",
    "ביטוח נסיעות",
    "טיפים",
    "פעילויות אופציונליות בזנזיבר (צלילה, שיט דאו, סיור בסטון טאון)"
  ],
  notes: [
    "התעריפים המוצגים הם לאדם בחדר זוגי/טווין משותף; תוספת תשלום לחדר יחיד זמינה לפי בקשה.",
    "גודל הקבוצה מוגבל ל-6 אנשים; קבוצות גדולות יותר זמינות לפי בקשה.",
    "הלינה והתעריפים כפופים לזמינות ועשויים להשתנות בהתאם למועד הנסיעה המדויק בתוך העונה.",
    "דמי הפארקים והשימור ברואנדה ובטנזניה נקבעים על ידי הממשלות המתאימות וכפופים לשינוי ללא הודעה מוקדמת."
  ],
  itinerary: [
    {
      day: 1,
      title: "הגעה לקיגלי",
      description: "הגעה לשדה התעופה הבינלאומי קיגלי והעברה למלון שלכם ללינה.",
      accommodation: "מלון בקיגלי",
      meals: "לינה וארוחת בוקר",
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
      title: "סיור עיר בקיגלי והעברה לפארק הלאומי הרי הגעש",
      description: "ביקור באנדרטת רצח העם בקיגלי, המנציחה את קורבנות רצח העם של 1994 באמצעות עדויות ניצולים ותיעוד היסטורי — היכרות מפוכחת וחיונית עם רואנדה המודרנית. המשך הדרך אל רגלי הרי הגעש של הוירונגה ללינה.",
      accommodation: "מלון ברוהנגרי",
      meals: "פנסיון מלא",
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
      title: "טרק גורילות הרים",
      description: "יציאה עם מדריך מומחה ורינג'רים חמושים אל יערות הבמבוק של הוירונגה לאיתור משפחת גורילות מורגלת. לאחר האיתור, תבלו שעה שלמה בנוכחותם — צפייה בזכרי הגב הכסוף המנהיגים את משפחותיהם ותינוקות המשחקים לרגליהם, מפגש חיות בר נדיר באמת.",
      accommodation: "מלון ברוהנגרי",
      meals: "פנסיון מלא",
      insiderFact: "רואנדה מגבילה את היתרי טרק הגורילות כדי להגביל את מספר המבקרים היומי לכל קבוצת משפחה — הזמנה מוקדמת חיונית בחודשי השיא.",
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
      title: "מעקב אחר קופי זהב וחזרה לקיגלי",
      description: "מעקב אחר קוף הזהב בסכנת ההכחדה דרך קטע שונה של יער הוירונגה, ולאחר מכן חזרה לקיגלי ללינה.",
      accommodation: "מלון בקיגלי",
      meals: "פנסיון מלא",
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
      title: "טיסה לארושה",
      description: "טיסה קצרה מעל אלף הגבעות של רואנדה ואל תוככי הסוואנה הטנזנית, עם הגעה לארושה ללינה לקראת הספארי שלכם.",
      accommodation: "מלון בארושה",
      meals: "לינה וארוחת בוקר",
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
      title: "מארושה לפארק הלאומי טרנגירה",
      description: "נסיעה לטרנגירה לסיור ספארי מודרך וספארי הליכה בין עדרי הפילים הגדולים ביותר בטנזניה ובאובבים עתיקים.",
      accommodation: "לודג' בטרנגירה",
      meals: "פנסיון מלא",
      insiderFact: "טרנגירה מחזיקה באחת מצפיפויות הפילים הגבוהות ביותר באפריקה מחוץ לעונת הגשמים, אז העדרים מתרכזים לאורך הנהר.",
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
      title: "ממכתש נגורונגורו לקראטו",
      description: "ירידה מודרכת ומלאה ליום שלם אל תוככי מכתש נגורונגורו, איתור חמשת הגדולים בתוך המכתש השלם הגדול בעולם, ולפני החזרה לקראטו ללילה.",
      accommodation: "לודג' בקראטו",
      meals: "פנסיון מלא",
      insiderFact: "מכתש נגורונגורו הוא מערכת אקולוגית סגורה בשטח של כ-260 קמ״ר — רוב בעלי החיים המתגוררים בו אינם עוזבים אותו לעולם.",
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
      title: "מקראטו למרכז הסרנגטי",
      description: "נסיעה אל מרכז הסרנגטי, כניסה לאחד מהאזורים העקביים ביותר בטנזניה לצפייה באריות, נמרים וברדלסים.",
      accommodation: "קמפ אוהלים בסרנגטי",
      meals: "פנסיון מלא",
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
      title: "מרכז הסרנגטי, יום מלא",
      description: "יום מלא של סיורי ספארי מודרכים על פני מישורי הסרנגטי הפתוחים, איתור טורפים בשיא פעילותם.",
      accommodation: "קמפ אוהלים בסרנגטי",
      meals: "פנסיון מלא",
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
      title: "טיסה לזנזיבר",
      description: "טיסה מהסרנגטי דרך ארושה לזנזיבר, עם העברה ללינת החוף שלכם לקטע האחרון של המסע.",
      accommodation: "Royal Zanzibar",
      meals: "ארוחת בוקר וצהריים",
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
      title: "יום מלא בזנזיבר",
      description: "יום חופשי על חופי זנזיבר — צלילה בשונית, שיט דאו בשקיעה, או פשוט מנוחה לאחר אחד עשר ימים בתנועה.",
      accommodation: "Royal Zanzibar",
      meals: "הכול כלול",
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
      title: "יציאה",
      description: "העברה לשדה התעופה של זנזיבר להמשך טיסתכם הביתה.",
      accommodation: "לא רלוונטי",
      meals: "ארוחת בוקר וצהריים"
    }
  ]
},
{
  slug: "12-days-rwanda-primates",
  name: "ספארי פרימטים ברואנדה ובריחה לחוף זנזיבר",
  duration: 12,
  destinations: [
    "kigali",
    "nyungwe",
    "volcanoes",
    "zanzibar"
  ],
  type: "gorilla_trekking",
    wildlifeTargets: [{ name: 'Chimpanzee', chance: 'High' }, { name: 'Mountain Gorilla', chance: 'Guaranteed' }, { name: 'Golden Monkey', chance: 'High' }, { name: 'Angolan Colobus', chance: 'Rare' }],
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
  tagline: "עודכן לעונת 2027.",
  metaTitle: "ספארי פרימטים ברואנדה ובריחה לחוף זנזיבר | EWA Safari Outfitters",
  metaDescription: "טרק שימפנזים, גורילות הרים וקופי זהב ברואנדה, ולאחריהם ארבעה לילות רגועים ונטולי לחץ על חופי זנזיבר. הזמנה רציפה אחת, החל מ-7,742.08 דולר לאדם.",
  overview: [
    "רואנדה מחזיקה בשלושה מיני פרימטים שרוב המטיילים רואים לכל היותר אחד מהם. מסלול זה עוקב אחר שלושתם — שימפנזים הנעים בין צמרות היער של ניונגווה, גורילות הרים על המדרונות המעורפלים מעל מוסנזה, וקופי זהב הדוהרים בין עצי הבמבוק של הפארק הלאומי הרי הגעש — ולאחר מכן מסתיים בארבעה לילות שבהם אינכם עושים דבר על חופי זנזיבר.",
    "שני החצאים הם באמת שני מקצבים שונים, והמסלול נבנה כדי לכבד זאת ולא לטשטש ביניהם. רואנדה מבקשת מכם משהו: הליכת יער אמיתית, לעיתים בגובה רב, ימי טרק מבוססי היתר שאי אפשר למהר בהם או לתזמן מחדש לאחר ההזמנה. זנזיבר לא מבקשת דבר. חציית סירה באגם קיוו יושבת בין שני אזורי הטרק כהפסקה מכוונת, ובוקר בסטון טאון פותח את חצי החוף לפני שהלוח מתרוקן לחלוטין. טרק שימפנזים וגורילות הן פעילויות תובעניות פיזית, לא סיור ספארי בישיבה — סבלים זמינים להזמנה לתמיכה נוספת, ולינות בנות שני לילות אמיתיות לאורך כל רואנדה נבנו כדי להפחית עייפות במקום שבו הטרק עצמו לא יכול להיעשות קל יותר."
  ],
  highlights: [
    "כל שלושת מיני הפרימטים של רואנדה — שימפנזה, גורילת הרים וקוף זהב — כל אחד מהם חוויית טרק שונה לחלוטין",
    "שיט סירה באגם קיוו בין שני אזורי הטרק, המשולב כיום מנוחה ולא כהעברה גרידא",
    "מפגש תרבותי לצד יום טרק הגורילות, המוסיף הקשר אמיתי ולא תוספת חטופה",
    "ארבעה לילות מלאים בזנזיבר, כולל בוקר בסטון טאון ושלושה ימי חוף ללא לוח זמנים",
    "לינות בנות שני לילות אמיתיות לאורך כל רואנדה — ללא עצירות של לילה בודד, המעניקות זמן אמיתי להתמקם לפני ההמשך"
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
    "כל דמי הפארקים והיתרי הטרק",
    "רכב, מדריך ודלק לאורך כל הטיול",
    "כל הפעילויות המפורטות",
    "לינה כמפורט",
    "הטיסות קיגלי–קמבה וקיגלי–זנזיבר",
    "העברות משדה התעופה"
  ],
  excluded: [
    "טיסות בינלאומיות",
    "אגרות ויזה",
    "ביטוח נסיעות",
    "טיפים",
    "הוצאות אישיות"
  ],
  notes: [
    "התעריפים המוצגים הם לאדם בחדר זוגי/טווין משותף; תוספת תשלום לחדר יחיד זמינה לפי בקשה.",
    "טרק הגורילות, השימפנזים וקופי הזהב הן כולן פעילויות מוגבלות מבוססות היתר, המוקצות מראש על ידי מועצת הפיתוח של רואנדה.",
    "קיים גיל מינימום לטרק גורילות ושימפנזים, הנקבע על ידי רשויות הפארקים ברואנדה וכפוף לשינוי — יש לוודא את הסף הנוכחי מול היועץ שלכם בעת ההזמנה.",
    "הלינה והתעריפים כפופים לזמינות ועשויים להשתנות בהתאם למועד הנסיעה המדויק בתוך העונה."
  ],
  faq: [
    {
      q: "האם מסלול זה תובעני פיזית?",
      a: "החצי הרואנדי כן, ובאמת — טרק שימפנזים וגורילות כרוך בהליכת יער אמיתית, לעיתים על שטח תלול או לא אחיד, לעיתים בגובה רב. החצי הזנזיברי לא מבקש מכם דבר. סבלים זמינים להזמנה לתמיכה נוספת בטרקים ברואנדה."
    },
    {
      q: "מה ההבדל בין שלושת טרקי הפרימטים?",
      a: "טרק השימפנזים בניונגווה עובר ביער צפוף יותר בחיפוש אחר פרימט הנע מהר יותר וקולני יותר. טרק הגורילות מעל מוסנזה הוא מפגש מוסדר בקפדנות ובן שעה עם משפחה מורגלת. טרק קופי הזהב הוא התוסס והמהיר מבין השלושה, דרך יער במבוק."
    },
    {
      q: "מדוע המסלול כולל שיט סירה באגם קיוו?",
      a: "זוהי הפסקה מכוונת בין שני אזורי הטרק — יום מרגיע באמת ולא העברה ישירה, ואף נופי, בחציית אחד מהאגמים הגדולים של אפריקה."
    },
    {
      q: "מה כלול במחיר ומה לא?",
      a: "כלול: כל דמי הפארקים והיתרי הטרק, רכב/מדריך/דלק לאורך כל הטיול, כל הפעילויות המפורטות, לינה כמפורט, הטיסות קיגלי–קמבה וקיגלי–זנזיבר, והעברות משדה התעופה. לא כלול: טיסות בינלאומיות, אגרות ויזה, ביטוח נסיעות, טיפים והוצאות אישיות."
    },
    {
      q: "האם ניתן לקצר את הטיול, או שנדרשים כל 12 הימים?",
      a: "המסלול המלא מעניק זמן ראוי לשני החצאים — מיהור קטע רואנדה מסכן פספוס היתרים או עייפות יתר של הקבוצה לפני החוף, וקיצור זנזיבר פוגע במנוחה שהטיול הזה נועד להסתיים בה. שאלו את היועץ שלכם אם יש לכם אילוצי זמן ספציפיים."
    },
    {
      q: "כמה משתנה המחיר בהתאם לגודל הקבוצה?",
      a: "עלויות הרכב, המדריך והדלק מתחלקות בין חברי הקבוצה, כך שהמחיר לאדם יורד ככל שמצטרפים יותר מטיילים — ראו את טבלת התמחור למעלה."
    }
  ],
  itinerary: [
    {
      day: 1,
      title: "הגעה לקיגלי",
      description: "נחיתה בקיגלי, והערב הראשון יהיה קליל — עיר בירה נקייה ומסודרת המפתיעה את רוב המבקרים בפעם הראשונה.",
      accommodation: "Kigali Serena Hotel",
      meals: "ארוחת ערב",
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
      title: "מקיגלי לפארק הלאומי ניונגווה",
      description: "טיסה לקמבה מחליפה העברת כביש ארוכה באחר צהריים שכבר קרוב ליער, עם הגעה ובה זמן להתמקם לפני טרק המחר.",
      accommodation: "Munazi Eco Lodge",
      meals: "כל הארוחות",
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
      title: "טרק שימפנזים בניונגווה",
      description: "טרק מודרך דרך אחד מיערות הגשם העתיקים ביותר באפריקה בחיפוש אחר קהילת השימפנזים של ניונגווה — נעים מהר וקולניים יותר מגורילות הרים, ולכן קצב טרק שונה לחלוטין.",
      accommodation: "Munazi Eco Lodge",
      meals: "כל הארוחות",
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
      title: "שיט סירה בניונגווה והעברה למוסנזה",
      description: "יום עדין במכוון — שיט סירה על פני אגם קיוו לפני הנסיעה צפונה למוסנזה, בצל הרי הגעש של הוירונגה.",
      accommodation: "Ingagi Lodge",
      meals: "כל הארוחות",
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
      title: "טרק גורילות ומפגש תרבותי",
      description: "עוקבים מובילים את הדרך אל היער למציאת משפחת גורילות הרים מורגלת. לאחר האיתור, שעה מוסדרת בקפדנות בנוכחותם — זכרי גב כסוף, אמהות עם תינוקות, צעירים משחקים. מפגש תרבותי עם הקהילה המקומית מתקיים אחר הצהריים.",
      accommodation: "Ingagi Lodge",
      meals: "כל הארוחות",
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
      title: "טרק קופי זהב והעברה לקיגלי",
      description: "בוקר מהיר ותוסס יותר מטרק הגורילות — קופי הזהב נעים במהירות בין צמרות הבמבוק, מה שהופך את הטרק לעניין של קצב לא פחות מסבלנות.",
      accommodation: "Kigali Serena",
      meals: "כל הארוחות",
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
      title: "מקיגלי לזנזיבר",
      description: "טיסה מקיגלי לזנזיבר מסיימת את חצי ההרפתקה של הטיול ופותחת את חצי המנוחה.",
      accommodation: "Zanzibar Serena",
      meals: "ארוחת בוקר",
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
      title: "סיור בסטון טאון",
      description: "בוקר לחקר הרחובות המתפתלים, שוקי התבלינים והאדריכלות הסווהילית-ערבית של סטון טאון, לפני הנסיעה צפונה אל החוף.",
      accommodation: "Nungwi Dreams By Mantis",
      meals: "ארוחת בוקר",
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
      title: "הרפיה בחוף",
      description: "שלושה ימים מלאים ללא כל תוכנית מלבד החוף עצמו.",
      accommodation: "Nungwi Dreams By Mantis",
      meals: "ארוחת בוקר",
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
      title: "הרפיה בחוף",
      description: "יום מלא שני של פנאי על חוף החול הלבן של זנזיבר.",
      accommodation: "Nungwi Dreams By Mantis",
      meals: "ארוחת בוקר",
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
      title: "הרפיה בחוף",
      description: "יום חוף מלא ואחרון — צלילה בשונית, שיט דאו בשקיעה, או פשוט לא לעשות דבר.",
      accommodation: "Nungwi Dreams By Mantis",
      meals: "ארוחת בוקר",
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
      title: "יציאה",
      description: "העברה לשדה התעופה של זנזיבר להמשך הטיסה הבינלאומית שלכם.",
      accommodation: "לא רלוונטי",
      meals: "ארוחת בוקר"
    }
  ]
},
{
  slug: "4-day-rwanda-gorilla-trekking",
  name: "4 ימים: טרק גורילות ברואנדה",
  duration: 4,
  destinations: [
    "volcanoes",
    "kigali"
  ],
  type: "gorilla_trekking",
    wildlifeTargets: [{ name: 'Mountain Gorilla', chance: 'Guaranteed' }, { name: 'Golden Monkey', chance: 'High' }, { name: 'Forest Buffalo', chance: 'Rare' }, { name: 'Forest Elephant', chance: 'Rare' }],
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
  metaDescription: "בריחה פרטית בת 4 ימים לרואנדה — טרק גורילות הרים בפארק הלאומי הרי הגעש, מפגש עם קופי זהב, וביקור מרגש באנדרטת רצח העם בקיגלי. החל מ-3,415$ לאדם.",
  overview: [
    "קוראים לה ארץ אלף הגבעות, ועד שהרכב שלכם יטפס אל תוך הערפל מעל מוסנזה, תבינו מדוע השם עוד ממעיט בערכה. רואנדה מקפלת את עצמה לרכס ירוק אחר רכס ירוק, מדורגים ביד, מעובדים במשך דורות, ומתרוממים בהתמדה לכיוון שרשרת הרי געש המחביאה את אחד המפגשים הנדירים והבלתי סבירים ביותר שנותרו על פני כדור הארץ: משפחת גורילות הרים, המבלה בוקר רגיל, ללא כל טרדה מהאנשים הקטנים והמשתאים שהגיעו מרחק כה רב כדי לשבת איתם.",
    "זהו מסע של שני חצאים, ושניהם חשובים. בקיגלי, תעברו דרך אנדרטה לרצח עם ותצאו ממנה שונים בזכות מה שהמדינה הקטנה הזו בחרה להפוך אליו מאז — אחד מסיפורי החוסן והפיוס המרשימים ביותר בכל העולם. לאחר מכן הכביש פונה צפונה, אל יער במבוק ופסגות געש, לשעה בודדת עם משפחת גורילות שאף תצלום לא יכול היה להכין אתכם אליה באמת, ובוקר תוסס יותר לאחר מכן עם קופי הזהב החולקים איתן את ההר. ארבעה ימים, שני סיפורים בלתי נשכחים, מדינה קטנה אחת המכילה הרבה יותר ממה שגודלה מרמז.",
    "הטיול הזה משתלב באופן נפלא כהרחבה שלפני או אחרי ספארי רחב יותר בקניה או בטנזניה — רבים מהמטיילים שלנו מוסיפים אותו בתחילת או בסוף מסע ארוך יותר במזרח אפריקה."
  ],
  highlights: [
    "שעה אחת שנשארת איתכם לכל החיים — עוקבים שעקבו אחר המשפחה מאז שחר מובילים אתכם אליה, והמפגש עצמו מוגבל לשישים דקות, חלון זמן קטן שאיכשהו מרגיש מספיק",
    "אנדרטת רצח העם בקיגלי — לא בוקר קל, אך הכרחי, וסיפור החוסן שבא אחריו ישנה את האופן שבו תראו את שאר הטיול",
    "טרק קופי זהב — בן דוד מהיר ותוסס יותר לטרק הגורילות, הנמצא כמעט בשום מקום אחר עלי אדמות מלבד קטע זה של הוירונגה",
    "הפארק הלאומי הרי הגעש עצמו — יער במבוק ופסגות געש שמרגישים כמו שום מקום אחר על מפת הספארי",
    "היתר גורילות לכניסה בודדת, מובטח ומאושר מראש — רואנדה מגבילה בקפדנות את ההיתרים היומיים, ומסלול זה נבנה סביב החזקת היתר כזה",
    "משתלב בקלות עם קניה או טנזניה — ניתן להוסיף אותו כהרחבה שלפני או אחרי ספארי מזרח אפריקה ארוך יותר"
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
    "כל ההעברות",
    "דמי כניסה לאנדרטת רצח העם בקיגלי",
    "היתר טרק גורילות לכניסה בודדת",
    "היתר טרק קופי זהב",
    "לינה כמפורט",
    "ארוחות כמצוין"
  ],
  excluded: [
    "טיסות בינלאומיות לקיגלי",
    "ויזות",
    "ביטוח נסיעות",
    "דמי שירות",
    "הוצאות אישיות"
  ],
  notes: [
    "התעריפים המוצגים הם לאדם בחדר זוגי/טווין משותף; תוספת תשלום לחדר יחיד זמינה לפי בקשה.",
    "היתרי טרק הגורילות וקופי הזהב הם פעילויות מוגבלות מבוססות היתר, המוקצות מראש על ידי מועצת הפיתוח של רואנדה.",
    "הלינה והתעריפים כפופים לזמינות ועשויים להשתנות בהתאם למועד הנסיעה המדויק.",
    "דמי הפארקים הלאומיים והשימור ברואנדה נקבעים על ידי הממשלה וכפופים לשינוי ללא הודעה מוקדמת."
  ],
  faq: [
    {
      q: "עד כמה תובעני פיזית טרק הגורילות?",
      a: "זה משתנה מיום ליום — העוקבים מאתרים תחילה את מיקום הלינה הלילית של הגורילות, כך שהטיול עצמו יכול להיות קצר כמו שלושים דקות או להימשך מספר שעות דרך שטח יער תלול ולעיתים בוצי. רמת כושר סבירה עוזרת, וסבלים זמינים להשכרה מקומית עבור כל מי שרוצה תמיכה נוספת בטיפוס."
    },
    {
      q: "מדוע היתר הגורילות כה יקר?",
      a: "רואנדה מתמחרת ומגבילה את ההיתרים במכוון כדי להגביל את מספר המבקרים היומי ולממן ישירות מאמצי שימור ומניעת ציד — המודל מוכר בהרחבה כתורם לכך שגורילת ההרים הפכה לאחת מאוכלוסיות קופי האדם היחידות הגדלות במספרן."
    },
    {
      q: "עד כמה נתקרב לגורילות, ולכמה זמן?",
      a: "לאחר שהעוקבים מאתרים את המשפחה, קבוצות מבלות שעה אחת מוסדרת בקפדנות בנוכחותם, תוך שמירה על מרחק מינימלי מכבד, אלא אם הגורילות עצמן בוחרות להתקרב."
    },
    {
      q: "האם טרק קופי הזהב כלול, או אופציונלי?",
      a: "כלול — הוא משולב ביום הרביעי של מסלול זה כמקבילה קלה ומהירה יותר לטרק הגורילות."
    },
    {
      q: "מה כלול במחיר ומה לא?",
      a: "כלול: כל ההעברות, דמי הכניסה לאנדרטת רצח העם בקיגלי, היתר טרק גורילות לכניסה בודדת, היתר טרק קופי זהב, לינה כמפורט, וארוחות כמצוין. לא כלול: טיסות בינלאומיות לקיגלי, ויזות, ביטוח נסיעות, דמי שירות והוצאות אישיות."
    },
    {
      q: "האם ניתן להאריך את הטיול או לשלב אותו עם יעדים נוספים?",
      a: "כן — הטיול הזה עובד באופן נפלא כהרחבה שלפני או אחרי ספארי ארוך יותר בקניה או בטנזניה, עבור מטיילים המעוניינים לשלב את הגורילות עם מסע רחב יותר במזרח אפריקה. שאלו את היועץ שלכם על הרחבת התוכנית."
    }
  ],
  itinerary: [
    {
      day: 1,
      title: "הגעה לקיגלי",
      description: "נחיתה בקיגלי והעברה למלון שלכם. לינה בקיגלי סרנה, בסיס נוח ומרכזי ללילה לפני שהטיול פונה צפונה.",
      accommodation: "Kigali Serena",
      meals: "ארוחת ערב",
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
      title: "מאנדרטת רצח העם בקיגלי לפארק הלאומי הרי הגעש",
      description: "ביקור בוקר באנדרטת רצח העם בקיגלי — לא עצירה קלה, אך הכרחית להבנת רואנדה שאתם חוצים. ארוחת צהריים חמה בקיגלי, ולאחריה הנסיעה צפונה אל רגלי הרי הגעש של הוירונגה. לינה באינגגי לודג', בהישג יד משערי הפארק להתחלה מוקדמת מחר.",
      accommodation: "Ingagi Lodge",
      meals: "כל הארוחות",
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
      title: "טרק גורילות, הפארק הלאומי הרי הגעש",
      description: "היום שסביבו נבנה הטיול. עוקבים יוצאים אל היער עם שחר לאיתור משפחת גורילות, והקבוצה שלכם עוקבת אחריהם — בין שלושים דקות למספר שעות הליכה דרך יער במבוק והררי, בהתאם למקום שאליו נדדה הקבוצה. לאחר האיתור, תבלו שעה מוסדרת בקפדנות בנוכחותם: זכרי גב כסוף, אמהות עם תינוקות, שגרת חייה הבלתי ממהרת של משפחת גורילות פראית ביומה, קרובים מספיק כדי להרגיש בלתי סבירים לחלוטין.",
      accommodation: "Ingagi Lodge",
      meals: "כל הארוחות",
      insiderFact: "רואנדה מגבילה את היתרי טרק הגורילות כדי להגביל את מספר המבקרים היומי לכל קבוצת משפחה — הזמנה מוקדמת חיונית בחודשי השיא.",
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
      title: "חוויית קופי זהב ויציאה",
      description: "יער שונה, קצב שונה — קופי הזהב נעים במהירות ונשארים גבוה בצמרות הבמבוק, ומעקב אחריהם הוא בוקר תוסס ואנרגטי יותר מטרק הגורילות. העברה חזרה לקיגלי להמשך טיסתכם.",
      accommodation: "לא רלוונטי",
      meals: "ארוחת בוקר"
    }
  ]
},
{
  slug: "5-day-gombe-chimpanzee-trekking",
  name: "5 ימים: טרק שימפנזים פרטי בגומבה",
  duration: 5,
  destinations: [
    "gombe"
  ],
  type: "gorilla_trekking",
    bestMonths: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    wildlifeTargets: [{ name: 'Chimpanzee', chance: 'High' }, { name: 'Olive Baboon', chance: 'High' }, { name: 'Red Colobus Monkey', chance: 'Rare' }, { name: 'Blue Monkey', chance: 'Rare' }],
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
  metaTitle: "5 ימים: טרק שימפנזים פרטי בגומבה | הרפתקת יוקרה בטנזניה",
  metaDescription: "משלחת פרטית ומודרכת למעקב אחר שימפנזים פראיים בפארק הלאומי נחל גומבה — אחד ממפגשי חיות הבר הנדירים ביותר באפריקה. חמישה ימים בסך הכול, החל מ-4,206.25 דולר לאדם.",
  overview: [
    "יש יער על החוף המזרחי של אגם טנגניקה שבו הגבול בין אדם לחיה מיטשטש כמעט לחלוטין. זוהי גומבה — הפארק הלאומי הקטן ביותר בטנזניה בשטח של כ-35 קמ״ר (13.5 מייל רבוע), והמקום שבו ג'יין גודול הצעירה צפתה לראשונה בשימפנזה מקלף עלים מזרד ומשתמש בו כדי לדוג טרמיטים מגבשושית, ובכך שינתה מחדש את מה שהמדע הבין על קרובינו החיים הקרובים ביותר. בעוד חמישה ימים, אתם עשויים לעמוד במקום שבו עמדה היא.",
    "ההגעה לכאן היא חלק מהסיפור, וחלק ממה ששומר על החוויה הזו בלעדית באמת. שום כביש אינו מגיע לגומבה — כל ביקור מגיע בסירה פרטית, כפי שהיה במשך שישים שנה, בחציית מים צלולים כל כך שהם מחזיקים בשקט משלהם. רכסי היער של הפארק מתרוממים מחוף האגם בגובה 773 מטר (2,536 רגל) מעל פני הים ועד לכ-1,500 מטר (4,921 רגל) בנקודותיהם הגבוהות ביותר — טבע פראי קומפקטי ותלול השומר על מספרי המבקרים נמוכים באופן טבעי ותמידי. יש בדיוק לודג' אחד בתוך הפארק. זו אינה חוויה ניתנת להרחבה; זוהי חוויה ייחודית וחד-פעמית.",
    "מסלול זה שוזר את דאר א-סלאם, קיגומה וגומבה לחמישה ימים רגועים, הבנויים כולם סביב תחבורה פרטית ושני בקרים מלאים של מעקב אחר שימפנזים עם שחר. זהו, ללא הגזמה, אחד ממפגשי חיות הבר הנדירים והמיוחסים ביותר שנותרו עלי אדמות — ואחד המעטים שבאמת אין כסף שיכול להפוך לצפוף יותר, משום שהפארק עצמו לא יאפשר זאת."
  ],
  highlights: [
    "יומיים מלאים של מעקב אחר שימפנזים עם שחר — לא בוקר בודד וממהר, אלא שתי הזדמנויות אמיתיות למפגש חזק, שכן הקהילה נעה במהלך הלילה ולעיתים רחוקות מקננת באותו מקום פעמיים",
    "חלק מהשימפנזים הפראיים המורגלים ביותר עלי אדמות — שישה עשורים של נוכחות מחקר רציפה משמעם מפגשים קרובים ורגועים יותר מכמעט בכל מקום אחר שבו עוקבים אחר שימפנזים בטבע",
    "לעמוד במקום שבו עמדה ג'יין גודול — גומבה היא ערש מחקר השדה של הפרימטים, ושבילי היער שתצעדו בהם הם אותם שבילים שעליהם נבנה מחקרה המקורי",
    "משלחת מטבעה, לא רק בשם — שום כביש אינו מגיע לגומבה; כל חציית אגם טנגניקה מתבצעת בסירה פרטית, המאורגנת כולה סביב לוח הזמנים שלכם",
    "בלעדית מבחינה מבנית, לא רק משווקת ככזו — עם לודג' יחיד בתוך הפארק וגישה בסירה בלבד, גומבה מגבילה את מספרי המבקרים שלה באמצעות הגאוגרפיה, לא באמצעות המחיר",
    "רכב, מדריך וסירה פרטיים לאורך כל הדרך — ללא העברות משותפות, ללא זמני יציאה קבועים, ללא המתנה ללוחות הזמנים של מטיילים אחרים"
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
    "כל ההעברות הפרטיות",
    "טיסות הלוך חזור דאר–קיגומה",
    "דמי כניסה לפארק ולטרק השימפנזים",
    "פנסיון מלא במבאלימבאלי גומבה טנטד קמפ",
    "לינה לאורך כל הטיול כמפורט"
  ],
  excluded: [
    "טיסות בינלאומיות לדאר א-סלאם",
    "ויזות",
    "ביטוח נסיעות",
    "דמי שירות",
    "הוצאות אישיות"
  ],
  notes: [
    "התעריפים המוצגים הם לאדם בחדר זוגי/טווין משותף; מטייל בודד יישא בתוספת תשלום לחדר יחיד — בקשו מהיועץ שלכם תעריף למטייל יחיד.",
    "עלויות הרכב הפרטי, המדריך והעברת הסירה מתחלקות בין חברי הקבוצה, כך שהמחיר לאדם יורד ככל שמצטרפים יותר מטיילים.",
    "הלינה והתעריפים כפופים לזמינות ועשויים להשתנות בהתאם למועד הנסיעה המדויק.",
    "דמי הפארקים הלאומיים ואזורי השימור בטנזניה נקבעים על ידי הממשלה וכפופים לשינוי ללא הודעה מוקדמת."
  ],
  faq: [
    {
      q: "עד כמה תובעני פיזית טרק השימפנזים?",
      a: "הטרק מתבצע על שבילי יער שיכולים להיות תלולים ולא אחידים, בטיפוס מגובה האגם ב-773 מטר (2,536 רגל) לכיוון קווי הרכס בקרבת 1,500 מטר (4,921 רגל). ההליכה למציאת השימפנזים יכולה להימשך בין שלושים דקות למספר שעות, בהתאם למקום שאליו נדדה הקהילה במהלך הלילה. רמת כושר סבירה עוזרת, אך זהו טרק הרפתקני ולא טכני או קיצוני — רוב המטיילים במצב בריאותי כללי טוב מתמודדים איתו בנוחות."
    },
    {
      q: "האם קיים גיל מינימום לטרק?",
      a: "כן. יש לוודא את סף הגיל הנוכחי מול יועץ הספארי שלכם בעת ההזמנה, שכן הוא נקבע על ידי רשויות הפארק ועשוי להשתנות."
    },
    {
      q: "עד כמה נתקרב לשימפנזים, ולכמה זמן?",
      a: "לאחר שהמדריך שלכם מאתר את הקבוצה, תבלו עד שעה בחברתם — אותה מגבלת זמן המשמשת לטרק גורילות, ומאותה הסיבה: צמצום הלחץ על אוכלוסייה פראית. המרחק משתנה באופן טבעי בהתאם לתנועת השימפנזים, אך צפיות בגומבה נוטות להיות קרובות יותר מכמעט בכל יעד טרק שימפנזים אחר באפריקה."
    },
    {
      q: "האם קיימים אמצעי זהירות בריאותיים לפני הטרק?",
      a: "כן. שימפנזים חולקים כמעט 99% מה-DNA האנושי ורגישים מאוד למחלות נשימה אנושיות, כך שכל מי שמראה תסמיני הצטננות או שפעת יתבקש לא לצאת לטרק באותו יום, ומסכת פנים נדרשת בטווח קרוב לקבוצה."
    },
    {
      q: "מהי העונה הטובה ביותר בשנה לביקור בגומבה?",
      a: "העונה היבשה (בערך יוני עד אוקטובר) מציעה את תנאי הטרק הקלים ביותר ואת הראות הברורה ביותר ביער. הטרק אפשרי לאורך כל השנה, אך השבילים בעונת הגשמים תלולים יותר להליכה."
    },
    {
      q: "איך מגיעים לגומבה — האם יש כביש?",
      a: "לא. לגומבה אין גישת כביש. כל ביקור מתבצע בסירה פרטית, היוצאת מקיגומה — מסלול הנסיעה הזה בנוי לתוך המסלול הזה מלכתחילה."
    },
    {
      q: "האם הטיול הזה מתאים למטיילים יחידים?",
      a: "כן, אם כי התמחור למעלה מצוין לאדם בחדר משותף; מטייל יחיד יישא בתוספת תשלום ללינה. בקשו מהיועץ שלכם תעריף למטייל יחיד."
    },
    {
      q: "מה כלול במחיר ומה לא?",
      a: "כלול: כל ההעברות הפרטיות, טיסות הלוך חזור דאר–קיגומה, דמי כניסה לפארק ולטרק השימפנזים, פנסיון מלא במבאלימבאלי גומבה טנטד קמפ, ולינה לאורך כל הטיול. לא כלול: טיסות בינלאומיות לדאר א-סלאם, ויזות, ביטוח נסיעות, דמי שירות והוצאות אישיות."
    },
    {
      q: "האם ניתן לשלב את הטיול הזה עם פארקים נוספים או להאריך אותו?",
      a: "כן — גומבה משתלבת באופן טבעי עם הרי מהלה עבור מטיילים המעוניינים בשתי חוויות טרק שימפנזים, או ניתן להוסיפה למסלול מעגל דרומי. שאלו את היועץ שלכם על הרחבה או שילוב של התוכנית."
    }
  ],
  itinerary: [
    {
      day: 1,
      title: "הגעה לדאר א-סלאם",
      description: "נחיתה בדאר א-סלאם, והחוף קובע את הקצב למה שמצפה לכם.",
      accommodation: "Dar es Salaam Serena Hotel",
      meals: "ארוחת ערב",
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
      title: "אל תוככי המערב: מקיגומה לנחל גומבה",
      description: "טיסת שכר פרטית לוקחת אתכם מדאר לקיגומה, עיירה הנושאת עדיין את אופי עברה כתחנת מסחר רכבתית וחוף אגם. משם, המסע פונה למים — העברה ברכב פרטי ובסירת דאו על פני אגם טנגניקה אל נחל גומבה.",
      accommodation: "Mbalimbali Gombe Tented Camp",
      meals: "פנסיון מלא",
      insiderFact: "שום כביש אינו מגיע לגומבה — כל ביקור מגיע בסירה פרטית, כפי שהיה במשך שישים שנה.",
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
      title: "יום מלא עם השימפנזים",
      description: "זהו היום שסביבו נבנתה המשלחת כולה. הטרק מתחיל עם שחר על שבילים המטפסים בהדרגה מחוף האגם אל רכסי היער שמעל, לצד מדריך המכיר את השטח הזה ואת הקהילה הזו בשמה. כשתמצאו אותם — ושימפנזי גומבה, המורגלים יותר מכמעט כל אוכלוסייה פראית אחרת עלי אדמות, נמצאים לרוב — תבלו שעה נדירה ובלתי ממהרת בחברתם.",
      accommodation: "Mbalimbali Gombe Tented Camp",
      meals: "פנסיון מלא",
      insiderFact: "ג'יין גודול הצעירה החלה את מחקרה פורץ הדרך באותו יער בדיוק ב-1960 — השבילים שתצעדו בהם הם אלה שעליהם נבנה מחקרה המקורי.",
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
      title: "חזרה לקיגומה",
      description: "בחזרה על פני המים אל קיגומה, כשהיער ושימפנזיו כבר מאחוריכם אך לא נשכחים.",
      accommodation: "Kigoma Hilltop",
      meals: "פנסיון מלא",
      insiderFact: "קיגומה היל-טופ יושב עם נופים מרהיבים המשקיפים על אגם טנגניקה, אחד מאגמי המים המתוקים העמוקים ביותר עלי אדמות.",
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
      title: "מקיגומה לדאר א-סלאם",
      description: "העברה אחרונה לשדה התעופה וטיסה בחזרה לשדה התעופה הבינלאומי ג'וליוס ניירר, דאר א-סלאם.",
      accommodation: "לא רלוונטי",
      meals: "ארוחת בוקר"
    }
  ]
},
  {
    slug: "12-day-seniors-anniversary-groups-safari",
    name: "ספארי טנזניה בן 12 ימים לגמלאים, לחגיגות יום נישואין ולקבוצות",
    duration: 12,
    destinations: ["arusha", "tarangire", "ngorongoro", "serengeti"],
    type: "big_five_game_drives",
    wildlifeTargets: [{ name: 'African Elephant', chance: 'High' }, { name: 'Lion', chance: 'High' }, { name: 'Black Rhino', chance: 'Rare' }, { name: 'Giraffe', chance: 'High' }, { name: 'Black-and-White Colobus Monkey', chance: 'High' }, { name: 'Cape Buffalo', chance: 'High' }],
    priceFrom: 6036.46,
    groupSize: { min: 2, max: 6 },
    bestFor: ["couples", "families", "wildlife-enthusiasts"],
    metaTitle: "ספארי טנזניה בן 12 ימים לגמלאים, לחגיגות יום נישואין ולקבוצות",
    metaDescription: "ספארי פרטי בן 12 ימים בטנזניה בקצב נינוח, המיועד לגמלאים, לזוגות בחגיגת יום נישואין ולקבוצות — קילימנג'רו המערבי, טרנגירה, נגורונגורו וסרנגטי. החל מ-$6,036 לאדם.",
    overview: [
      "לא כל ספארי חייב לנוע במהירות כדי להיות שווה את המסע. מסלול בן שנים עשר הימים הזה נבנה על הנחת יסוד שונה: פחות עצירות של לילה אחד, יותר זמן בכל מקום, ומסלול שנבחר לא פחות בזכות הקצב שלו מאשר בזכות חיות הבר. הוא נפתח ברמות המערביות של קילימנג'רו — טיולי טבע ומפגשי תרבות מאסאיים אותנטיים בקצב הליכה, עוד לפני שסיורי הספארי מתחילים ברצינות — וממשיך דרך הפארק הלאומי ארושה, טרנגירה, מכתש נגורונגורו ושלושה לילות רגועים בסרנגטי, ומסתיים בטיסה קצרה בחזרה לארושה במקום נסיעת סיום ארוכה.",
      "זהו מסלול שמתאים באותה מידה לשלושה סוגי מטיילים שדפי ספארי רגילים לרוב אינם פונים אליהם ישירות: מטיילים בגיל השלישי המעוניינים בחוויית טנזניה המלאה בלי ימי נסיעה ארוכים ורצופים; זוגות החוגגים יום נישואין ומחפשים זמן איכות אמיתי יחד בסביבות יפות ושקטות במקום רשימת פארקים דחוסה; וקבוצות — חברים, משפחה מורחבת או טיול רב-דורי — שנהנות ממסלול הבנוי סביב קצב נוח לכל המצטרפים, ללא קשר לגיל או לכושר הגופני. זמין בשתי רמות — Wilderness Reserve ו-Wilderness Sovereign — הנעות באותו מסלול בן שנים עשר הימים בדיוק, כאשר רמת הקמפים והלודג'ים היא שמשתנה.",
    ],
    highlights: [
      "פרק פתיחה נינוח יותר — שני לילות ברמות המערביות של קילימנג'רו, עם טיולי טבע מודרכים ומפגשי תרבות מאסאיים אותנטיים לפני שקצב סיורי הספארי מתגבר",
      "מספר שהיות בנות שני וגם שלושה לילות, לא רצף של עצירות ליליות בודדות — זמן אמיתי להתמקם בכל מקום במקום לארוז מחדש כל בוקר",
      "סיור ספארי מודרך ברגל בפארק הלאומי ארושה — אחד הפארקים היחידים בטנזניה המציעים חוויה כזו ברגל, בקצב קל ורגוע",
      "יום שלם בתוך מכתש נגורונגורו, קלדרה סגורה ועשירה בחיות בר בשטח של כ-260 קמ״ר, המגיע אליה ברכב ולא בירידה מאומצת כלשהי",
      "שלושה לילות מלאים בסרנגטי, המעניקים למסע מרחב נשימה במקום לדחוס את המישורים ליום אחד",
      "טיסה בחזרה לארושה במקום נסיעת סיום ארוכה — פחות משעה באוויר, לעומת מסע חזרה שהיה אורך מעל שש שעות בכביש",
      "כל רמות הנוחות מיוצגות, מרווחות ומתחשבות ועד יוצאות דופן באמת, מבלי לשנות אף יום אחד במסלול עצמו",
    ],
    heroImage: "/images/gallery/maasai-warriors-jumping-dance-boma.jpg",
    heroImageAlt: "Maasai warriors in traditional red shuka performing the adumu jumping dance beside a boma",
    gallery: [
      { src: "/images/gallery/giraffe-walking-savanna-dusk.webp", alt: "Lone giraffe walking across the savanna grassland at dusk" },
      { src: "/images/gallery/tarangire-elephants-baobab.webp", alt: "Two elephants with tusks foraging together in tall grass in Tarangire National Park" },
    ],
    pricingTiersProvisional: false,
    pricingTiers: [
      { pax: 2, reserve: 7399.38, sovereign: 11080.63 },
      { pax: 3, reserve: 6717.92, sovereign: 10399.17 },
      { pax: 4, reserve: 6377.19, sovereign: 10004.69 },
      { pax: 5, reserve: 6172.75, sovereign: 10067.75 },
      { pax: 6, reserve: 6036.46, sovereign: 9717.71 },
    ],
    included: [
      "כל דמי הכניסה לפארקים, לקונצסיות ולאזורי השימור",
      "רכב, מדריך ודלק לכל יום",
      "כל הארוחות",
      "לינה כמפורט",
      "טיסה מסרוֹנֶרה לארושה",
      "העברות משדה התעופה",
    ],
    excluded: ["טיסות בינלאומיות", "אגרות ויזה", "ביטוח נסיעות", "טיפים", "הוצאות אישיות"],
    notes: [
      "המחירים המוצגים הם לאדם בחדר זוגי/טווין משותף; תוספת תשלום לחדר יחיד זמינה לפי בקשה.",
      "הערה לגבי תעריף Sovereign ל-5 משתתפים: הוא גבוה במעט מהתעריף ל-4 משתתפים, דבר המשקף מדרגת תצורת חדרים בגודל קבוצה זה ולא טעות בתמחור.",
      "מסלול זה כולל כיסוי פינוי חירום סטנדרטי של AMREF Flying Doctors; עם זאת מומלץ עדיין לרכוש פוליסת ביטוח נסיעות אישית מקיפה, במיוחד עבור מטיילים מבוגרים יותר.",
      "הלינה והתעריפים כפופים לזמינות ועשויים להשתנות בהתאם לתאריך הנסיעה המדויק בתוך העונה.",
      "דמי הכניסה לפארקים הלאומיים ולאזורי השימור בטנזניה נקבעים על ידי הממשלה וכפופים לשינויים ללא הודעה מוקדמת.",
    ],
    faq: [
      {
        q: "האם הספארי הזה מאתגר מבחינה גופנית?",
        a: "לא יותר ממה שנדרש לקצב הליכה נינוח. סיורי הספארי מתבצעים בישיבה, ההגעה למכתש היא כולה ברכב, ושתי פעילויות ההליכה (קילימנג'רו המערבי והפארק הלאומי ארושה) מודרכות בקצב קל ורגוע המתאים לרוב רמות הכושר. עדכנו את היועץ שלכם בכל שיקול ניידות ספציפי בעת ההזמנה, וניתן להתאים את המסלול בהתאם.",
      },
      {
        q: "האם זו בחירה טובה לחגיגת יום נישואין או אירוע מיוחד?",
        a: "בהחלט — הקצב עצמו הוא חלק ממה שהופך אותו למתאים לחגיגה: זמן אמיתי ביחד בכל מקום, במקום לוח זמנים שמשאיר אתכם עייפים מכדי ליהנות מהערב. עדכנו את היועץ שלכם אם אתם חוגגים משהו מסוים; ניתן לתאם מגעים קטנים ומיוחדים.",
      },
      {
        q: "כיצד פועל נסיעה קבוצתית במסלול הזה?",
        a: "המסלול והקצב מתאימים לקבוצות במיוחד, מכיוון שאין אף יום אחד שתובעני במיוחד עבור מי מחברי הקבוצה. עלויות הרכב והמדריך גם מתחלקות בין חברי הקבוצה, כך שהמחיר לאדם יורד ככל שמצטרפים יותר מטיילים — ראו את טבלת התמחור לעיל.",
      },
      {
        q: "מה כלול במחיר ומה לא?",
        a: "כלול: כל דמי הכניסה לפארקים, לקונצסיות ולאזורי השימור, רכב/מדריך/דלק לכל יום, כל הארוחות, לינה כמפורט, הטיסה מסרוֹנֶרה לארושה, והעברות משדה התעופה. לא כלול: טיסות בינלאומיות, אגרות ויזה, ביטוח נסיעות, טיפים והוצאות אישיות.",
      },
      {
        q: "האם אנחנו זקוקים לביטוח נסיעות עם כיסוי פינוי רפואי?",
        a: "כן, אנו ממליצים בחום על כך לכל ספארי, ומסלול זה כולל כיסוי פינוי חירום סטנדרטי של AMREF Flying Doctors — עם זאת עדיין כדאי לתאם בנפרד פוליסת ביטוח נסיעות אישית מקיפה המכסה מצבים רפואיים קיימים, במיוחד עבור מטיילים מבוגרים יותר.",
      },
      {
        q: "האם ניתן לשלב זאת עם הארכת חופשת חוף?",
        a: "כן — מטיילים רבים מאריכים את הספארי הזה במספר ימי מנוחה בזנזיבר לאחר מכן. שאלו את היועץ שלכם על הוספת הארכת חופשת חוף לכל אחת מהרמות.",
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "הגעה לארושה",
        description: "נחיתה בשדה התעופה הבינלאומי קילימנג'רו, והלילה הראשון עובר בקצב רגוע.",
        accommodation: "ארושה, משתנה לפי רמה",
        meals: "ארוחת ערב",
        accommodationByTier: {
          reserve: { name: "Kahawa House", image: "/images/lodges/kahawa-house.webp", amenities: ["wifi", "restaurant", "garden"] },
          sovereign: { name: "Arusha Coffee Lodge", image: "/images/lodges/arusha-coffee-lodge-garden-path.webp", amenities: ["wifi", "pool", "view"] },
        },
      },
      {
        day: 2,
        title: "אל קילימנג'רו המערבי",
        description: "נסיעה נופית אל הרמות שממערב לקילימנג'רו, אזור שעדיין נמצא באמת מחוץ למסלול הרגיל.",
        accommodation: "קילימנג'רו המערבי, משתנה לפי רמה",
        meals: "פנסיון מלא",
        accommodationByTier: {
          reserve: { name: "Original Maasai Lodge", image: "/images/lodges/original-maasai-lodge.webp", amenities: ["restaurant", "garden"] },
          sovereign: { name: "Original Maasai Lodge (Kisiwa Boma)", image: "/images/lodges/original-maasai-lodge.webp", amenities: ["restaurant", "garden", "view"] },
        },
      },
      {
        day: 3,
        title: "יום שלם בקילימנג'רו המערבי",
        description: "טיול טבע מודרך דרך אזור ניהול חיות הבר, ומפגש תרבות מאסאי אמיתי — ללא חיפזון, ברגל, בקצב שמתאים לכל אחד מחברי הקבוצה.",
        accommodation: "קילימנג'רו המערבי, משתנה לפי רמה",
        meals: "פנסיון מלא",
        insiderFact: "הרמות של קילימנג'רו המערבי נמצאות באמת מחוץ למסלול הצפוני הרגיל — מעט מפעילי ספארי בכלל עוברים כאן.",
        accommodationByTier: {
          reserve: { name: "Original Maasai Lodge", image: "/images/lodges/original-maasai-lodge.webp", amenities: ["restaurant", "garden"] },
          sovereign: { name: "Original Maasai Lodge (Kisiwa Boma)", image: "/images/lodges/original-maasai-lodge.webp", amenities: ["restaurant", "garden", "view"] },
        },
      },
      {
        day: 4,
        title: "המשך אל הפארק הלאומי ארושה",
        description: "נסיעה קצרה אל פארק שנבנה בדיוק לסוג הזה של בוקר נינוח — ג'ירפות, קופי קולובוס, ואחד מסיורי הספארי הרגליים המודרכים היחידים בטנזניה, הכול בקצב קל.",
        accommodation: "ארושה, משתנה לפי רמה",
        meals: "פנסיון מלא",
        insiderFact: "הפארק הלאומי ארושה הוא אחד הפארקים היחידים בטנזניה שבהם מותר סיור ספארי רגלי מודרך כל השנה.",
        accommodationByTier: {
          reserve: { name: "Kahawa House", image: "/images/lodges/kahawa-house.webp", amenities: ["wifi", "restaurant", "garden"] },
          sovereign: { name: "Arusha Coffee Lodge", image: "/images/lodges/arusha-coffee-lodge-garden-path.webp", amenities: ["wifi", "pool", "view"] },
        },
      },
      {
        day: 5,
        title: "טרנגירה, יום שלם",
        description: "יום שלם בין עדרי הפילים של טרנגירה ועצי הבאובב בני אלף השנים.",
        accommodation: "טרנגירה, משתנה לפי רמה",
        meals: "פנסיון מלא",
        insiderFact: "לטרנגירה יש אחת מצפיפויות הפילים הגבוהות באפריקה מחוץ לעונת הגשמים, כאשר העדרים מתרכזים לאורך הנהר.",
        accommodationByTier: {
          reserve: { name: "Lake Burunge Baobab Tented Lodge", image: "/images/lodges/lake-burunge-baobab-tented-lodge.webp", amenities: ["restaurant", "garden"] },
          sovereign: { name: "Siringit Serengeti Camp", image: "/images/lodges/siringiti-serengeti-camp.webp", amenities: ["wifi", "view", "restaurant"] },
        },
      },
      {
        day: 6,
        title: "מטו וה מבו והמשך לקאראטו",
        description: "עצירה תרבותית בעיירת השוק מטו וה מבו בדרך אל הרמות של נגורונגורו — מגע אמיתי וללא חיפזון עם הקהילה המקומית, לא עצירת צילום חטופה.",
        accommodation: "קאראטו, משתנה לפי רמה",
        meals: "פנסיון מלא",
        accommodationByTier: {
          reserve: { name: "Ngorongoro Farm House", image: "/images/lodges/ngorongoro-farm-house.webp", amenities: ["restaurant", "garden"] },
          sovereign: { name: "Gibb's Farm", image: "/images/lodges/gibbs-farm-cottage-exterior.webp", amenities: ["spa", "view", "organic-farm"] },
        },
      },
      {
        day: 7,
        title: "סיור במכתש נגורונגורו",
        description: "יום שלם בתוך המערכת האקולוגית הסגורה של רצפת המכתש, המגיע אליה כולו ברכב — ללא צורך בהליכה מאומצת כדי לחוות את אחת מריכוזי חיות הבר הצפופים ביותר באפריקה.",
        accommodation: "קאראטו, משתנה לפי רמה",
        meals: "פנסיון מלא",
        insiderFact: "מכתש נגורונגורו הוא מערכת אקולוגית סגורה בשטח של כ-260 קמ״ר — רוב החיות המתגוררות בו לעולם אינן עוזבות אותו.",
        accommodationByTier: {
          reserve: { name: "Ngorongoro Farm House", image: "/images/lodges/ngorongoro-farm-house.webp", amenities: ["restaurant", "garden"] },
          sovereign: { name: "Gibb's Farm", image: "/images/lodges/gibbs-farm-cottage-exterior.webp", amenities: ["spa", "view", "organic-farm"] },
        },
      },
      {
        day: 8,
        title: "מקאראטו למרכז סרנגטי",
        description: "הנסיעה אל המישורים האינסופיים של סרנגטי, והלילה הראשון מתוך שלושה במקום אחד.",
        accommodation: "מרכז סרנגטי, משתנה לפי רמה",
        meals: "פנסיון מלא",
        accommodationByTier: {
          reserve: { name: "Kubukubu Tented Lodge", image: "/images/lodges/kubukubu-tented-lodge.webp", amenities: ["pool", "view", "restaurant"] },
          sovereign: { name: "Siringit Serengeti Camp", image: "/images/lodges/siringiti-serengeti-camp.webp", amenities: ["wifi", "view", "restaurant"] },
        },
      },
      {
        day: 9,
        title: "מרכז סרנגטי, יום שלם",
        description: "יום שלם של סיורי ספארי, בקצב שלעולם אינו מרגיש נחפז — המדריך שלכם קורא את היום עבור כל הקבוצה, ומוודא שאיש לא ירגיש נחפז לעבור על פני תצפית טובה.",
        accommodation: "מרכז סרנגטי, משתנה לפי רמה",
        meals: "פנסיון מלא",
        accommodationByTier: {
          reserve: { name: "Kubukubu Tented Lodge", image: "/images/lodges/kubukubu-tented-lodge.webp", amenities: ["pool", "view", "restaurant"] },
          sovereign: { name: "Siringit Serengeti Camp", image: "/images/lodges/siringiti-serengeti-camp.webp", amenities: ["wifi", "view", "restaurant"] },
        },
      },
      {
        day: 10,
        title: "מרכז סרנגטי, יום שלם",
        description: "יום שני שלם של סיורי ספארי ברחבי עמק סרוֹנֶרה.",
        accommodation: "מרכז סרנגטי, משתנה לפי רמה",
        meals: "פנסיון מלא",
        insiderFact: "המים הזמינים בסרוֹנֶרה לאורך כל השנה מושכים אוכלוסיות קבועות של חתולי בר גדולים, כולל האריות המפורסמים המטפסים על עצים בקופיות (גבעות הסלע).",
        accommodationByTier: {
          reserve: { name: "Kubukubu Tented Lodge", image: "/images/lodges/kubukubu-tented-lodge.webp", amenities: ["pool", "view", "restaurant"] },
          sovereign: { name: "Siringit Serengeti Camp", image: "/images/lodges/siringiti-serengeti-camp.webp", amenities: ["wifi", "view", "restaurant"] },
        },
      },
      {
        day: 11,
        title: "מסרנגטי לארושה",
        description: "טיסה קצרה ממסלול הנחיתה של סרוֹנֶרה בחזרה לארושה — פחות משעה באוויר, לעומת נסיעה של למעלה משש שעות באותו מסלול.",
        accommodation: "ארושה, משתנה לפי רמה",
        meals: "פנסיון מלא",
        accommodationByTier: {
          reserve: { name: "Kahawa House", image: "/images/lodges/kahawa-house.webp", amenities: ["wifi", "restaurant", "garden"] },
          sovereign: { name: "Arusha Coffee Lodge", image: "/images/lodges/arusha-coffee-lodge-garden-path.webp", amenities: ["wifi", "pool", "view"] },
        },
      },
      {
        day: 12,
        title: "יציאה",
        description: "העברה אל שדה התעופה הבינלאומי קילימנג'רו, ושנים עשר ימים רגועים חוזרים איתכם הביתה.",
        accommodation: "לא רלוונטי",
        meals: "ארוחת בוקר",
      },
    ],
  },
  {
    slug: "7-day-photography-adventure-safari",
    name: "ספארי צילום והרפתקאות בטנזניה בן 7 ימים",
    duration: 7,
    destinations: ["tarangire", "ngorongoro", "serengeti"],
    type: "photographic",
    bestMonths: ['Jan', 'Feb', 'Mar'],
    wildlifeTargets: [{ name: 'Wildebeest', chance: 'Seasonal', note: 'Ndutu calving, Jan-Mar' }, { name: 'African Elephant', chance: 'High' }, { name: 'Black Rhino', chance: 'Rare' }, { name: 'Cheetah', chance: 'High' }, { name: 'Lion', chance: 'High' }, { name: 'Spotted Hyena', chance: 'High' }],
    priceFrom: 4597.29,
    groupSize: { min: 1, max: 6 },
    bestFor: ["solo", "couples", "wildlife-enthusiasts"],
    metaTitle: "ספארי צילום והרפתקאות בטנזניה בן 7 ימים | טרנגירה, נגורונגורו ונדוטו",
    metaDescription: "ספארי צילום והרפתקאות פרטי ומודרך דרך טרנגירה, מכתש נגורונגורו ושדות ההמלטה של נדוטו בסרנגטי. מתאים לצלמים ולמחפשי ספארי אותנטי, החל מ-$4,597 לאדם.",
    overview: [
      "יש הבדל בין לראות חיות בר לבין להיות ממוקמים נכון כדי לצלם או לחוות אותן — וההבדל הזה הוא כל התפיסה שמאחורי המסלול הזה. שבעה ימים בשלוש מערכות אקולוגיות, שכל אחת מהן נבחרה לא רק בזכות מה שחי בה אלא גם בזכות מה שהיא מאפשרת לעשות עם מצלמה או עם סקרנות אמיתית: עדרי הפילים של טרנגירה נעים מתחת לעצי באובב בני אלף שנה, מפגש תרבות מאסאי ועיירת השוק מטו וה מבו, ירידה מלאה אל עולמו הסגור של מכתש נגורונגורו עם כמעט 30,000 בעלי חיים, ושלושה ימים במישורי העשב הקצר של נדוטו בעונת ההמלטה, כאשר עד 8,000 גורי ווילדביסט נולדים ביום אחד וכל טורף במערכת האקולוגית יודע זאת.",
      "מסלול זה נבנה עבור שני סוגי מטיילים חופפים: הצלם המחפש מדריך שקורא אור והתנהגות של בעלי חיים באותה קפדנות שבה הוא קורא את השטח, והמטייל בעל הרוח ההרפתקנית שמעדיף לבלות זמן אמיתי בפחות מקומות במקום למהר בין רשימת פארקים. זמין בשתי רמות — Wilderness Reserve ו-Wilderness Sovereign — הנעות באותו מסלול בן שבעה הימים בדיוק, כאשר רמת הקמפים היא שמשתנה.",
    ],
    highlights: [
      "מתוזמן לעונת ההמלטה — עד 8,000 גורי ווילדביסט נולדים מדי יום במישורי נדוטו, עם פעילות טורפים בהתאם",
      "יום שלם עם עדרי הפילים של טרנגירה, על רקע עצי באובב העומדים כבר למעלה מאלף שנה",
      "מפגש תרבות מאסאי ועיירת השוק מטו וה מבו — הקשר אנושי אמיתי בין ימי חיות הבר, לא עצירה מתוסרטת",
      "מכתש נגורונגורו במלואו — קלדרה סגורה בשטח של כ-260 קמ״ר, המכילה אחת מריכוזי חיות הבר הגבוהים ביותר בעולם ואת הסיכוי הטוב ביותר באזור לצפות בקרנף שחור",
      "שלושה ימים מלאים במישורי נדוטו — מספיק זמן כדי שסצנה תתפתח לעומקה, ולא רק תיצפה לרגע",
      "מדריך ששומר על עמדה, לא רק מוצא חיות בר — הרכבים נשארים עם ההתנהגות המתפתחת במקום לעבור לתצפית הבאה",
      "כל רמות הנוחות מיוצגות, מהמוקרקעת והמתחשבת ועד ליוצאת הדופן באמת, מבלי לשנות אף יום אחד במסלול עצמו",
    ],
    heroImage: "/images/gallery/ndutu-wildebeest-watering-hole.webp",
    heroImageAlt: "Wildebeest herds gathered around a watering hole in the Ndutu area of southern Serengeti",
    gallery: [
      { src: "/images/gallery/tarangire-elephants-baobab.webp", alt: "Two elephants with tusks foraging together in tall grass in Tarangire National Park" },
      { src: "/images/gallery/ngorongoro-crater-landscape.webp", alt: "Panoramic view of the Ngorongoro Crater floor with its soda lake and winding safari road, framed by the crater rim" },
    ],
    pricingTiersProvisional: false,
    pricingTiers: [
      { pax: 1, reserve: 7742.50, sovereign: 10160.00 },
      { pax: 2, reserve: 5386.88, sovereign: 7249.38 },
      { pax: 3, reserve: 4992.08, sovereign: 6854.58 },
      { pax: 4, reserve: 4794.69, sovereign: 6657.19 },
      { pax: 5, reserve: 4676.25, sovereign: 6538.75 },
      { pax: 6, reserve: 4597.29, sovereign: 6459.79 },
    ],
    included: [
      "כל דמי הכניסה לפארקים, לקונצסיות ולאזורי השימור",
      "רכב/מדריך/דלק לכל יום שטח",
      "כל הארוחות",
      "לינה כמפורט",
      "העברות משדה התעופה",
    ],
    excluded: ["טיסות בינלאומיות", "אגרות ויזה", "ביטוח נסיעות", "טיפים", "השכרת מצלמה/עדשות"],
    notes: [
      "המחירים המוצגים הם לאדם בחדר זוגי/טווין משותף; תעריף למטייל יחיד מוצג לעיל וזמין גם לפי בקשה.",
      "מותאם אישית לתאריכים שלכם, כאשר גודל הקבוצה נשמר קטן במכוון כדי שלכולם יהיה מרחב עבודה ראוי.",
      "הלינה והתעריפים כפופים לזמינות ועשויים להשתנות בהתאם לתאריך הנסיעה המדויק.",
      "דמי הכניסה לפארקים הלאומיים ולאזורי השימור בטנזניה נקבעים על ידי הממשלה וכפופים לשינויים ללא הודעה מוקדמת.",
    ],
    faq: [
      {
        q: "האם המסע הזה מתאים לצלמים לא מקצועיים?",
        a: "כן — המסלול הזה נבנה כך שיתאים לכל רמת מיומנות, מבעל מצלמת DSLR בפעם הראשונה ועד לצלם מקצועי. המדריכים מספקים הכוונה מעשית בשטח לגבי מיקום ותזמון לאורך כל הדרך, מבלי שזה ירגיש אף פעם כמו שיעור במקום ספארי.",
      },
      {
        q: "מה הופך את זה לשונה מספארי סיורים רגיל?",
        a: "קצב וכוונה. ספארי רגיל נע לעבר התצפית הבאה; זה שומר על עמדה ומאפשר לסצנה להתפתח — אם ווילדביסט עם גור שזה עתה מוצא את רגליו, ברדלס הקורא את העדר מגבעת טרמיטים. הסבלנות הזו בנויה בתוך המסלול עצמו, לא מושארת למקרה.",
      },
      {
        q: "מתי בדיוק עונת ההמלטה?",
        a: "החלון העיקרי נמשך בערך מסוף ינואר עד מרץ, כאשר שיא ההמלטה חל בדרך כלל בפברואר — אז מצטלבים הריכוז הגבוה ביותר של ווילדביסט שזה עתה נולדו עם הפעילות החזקה ביותר של הטורפים.",
      },
      {
        q: "אילו ציוד צילום כדאי להביא?",
        a: "מומלץ להביא גוף מצלמת DSLR או mirrorless, עדשה רחבה עד בינונית לנופים, וטלה של לפחות 400 מ״מ — עדשת 500-600 מ״מ משתלמת עבור נושאים רחוקים, בעוד עדשת 70-200 מ״מ שימושית לתצפיות קרובות יותר. מדריך אריזה וציוד מלא נשלח למטיילים מאושרים לפני היציאה.",
      },
      {
        q: "האם זו יציאה פרטית, או שנשובץ עם זרים?",
        a: "מותאם אישית לתאריכים שלכם, כאשר גודל הקבוצה נשמר קטן במכוון כדי שלכולם יהיה מרחב עבודה ראוי — התקרה המדויקת ואפשרויות ליציאה פרטית זמינות לפי בקשה.",
      },
      {
        q: "כמה משתנה המחיר בהתאם לגודל הקבוצה?",
        a: "עלויות הרכב, המדריך והדיזל מתחלקות בין חברי הקבוצה, כך שהמחיר לאדם יורד באופן משמעותי ככל שמצטרפים יותר מטיילים — ראו את טבלת התמחור לעיל.",
      },
      {
        q: "מה כלול במחיר ומה לא?",
        a: "כלול: כל דמי הכניסה לפארקים, לקונצסיות ולאזורי השימור, רכב/מדריך/דלק לכל יום שטח, כל הארוחות, לינה כמפורט, והעברות משדה התעופה. לא כלול: טיסות בינלאומיות, אגרות ויזה, ביטוח נסיעות, טיפים והשכרת מצלמה/עדשות.",
      },
      {
        q: "האם ניתן לשלב זאת עם יעדים נוספים?",
        a: "כן — המסלול הזה משתלב באופן טבעי עם הארכת חופשת חוף בזנזיבר, או ניתן לשלבו עם ספארי במעגל הצפוני עבור מטיילים המעוניינים גם בעונת ההמלטה וגם בדרמה של חציית הנהר בשיא עונת ההגירה, בטיול אחד.",
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "הגעה לארושה",
        description: "נחיתה בשדה התעופה הבינלאומי קילימנג'רו, והלילה הראשון עובר בקלילות — תדריך מסודר על השבוע שלפניכם, איך יתנהג האור בכל עצירה, וכיצד המדריך שלכם ינהל את הקצב לאחר שתהיו בשטח.",
        accommodation: "ארושה, משתנה לפי רמה",
        meals: "ארוחת ערב",
        accommodationByTier: {
          reserve: { name: "Gran Meliá, Arusha", image: "/images/lodges/gran-melia-arusha.webp", amenities: ["wifi", "pool", "spa"] },
          sovereign: { name: "Arusha Coffee Lodge", image: "/images/lodges/arusha-coffee-lodge-garden-path.webp", amenities: ["wifi", "pool", "view"] },
        },
      },
      {
        day: 2,
        title: "אל טרנגירה",
        description: "הנסיעה דרומה נפתחת אל מישורי טרנגירה המנוקדים בעצי באובב, שם מתכנסים עדרי הפילים הגדולים ביותר בטנזניה סביב מקור המים הקבוע האחרון לאורך קילומטרים רבים, ופעילות תרבות מאסאי אחר הצהריים מוסיפה הקשר אמיתי לנוף שאתם מצלמים.",
        accommodation: "טרנגירה, משתנה לפי רמה",
        meals: "פנסיון מלא",
        insiderFact: "טרנגירה מחזיקה באחת מצפיפויות הפילים הגבוהות באפריקה מחוץ לעונת הגשמים, כאשר העדרים מתרכזים לאורך הנהר.",
        accommodationByTier: {
          reserve: { name: "Elephant Springs", image: "/images/lodges/elephant-springs-exterior-view.webp", amenities: ["pool", "view", "restaurant"] },
          sovereign: { name: "Siringit Tarangire Camp", image: "/images/lodges/siringit-tarangire-camp-pool-aerial.webp", amenities: ["view", "wildlife-view", "restaurant"] },
        },
      },
      {
        day: 3,
        title: "מטרנגירה לנגורונגורו, דרך מטו וה מבו",
        description: "חצי יום אחרון בטרנגירה לפני שהדרך מטפסת לעבר הרמות, עם עצירה במטו וה מבו — עיירת שוק שבה טיול תרבותי קצר מביא אתכם למגע אמיתי עם הקהילה החיה בשולי הפארקים הללו.",
        accommodation: "אזור נגורונגורו, משתנה לפי רמה",
        meals: "פנסיון מלא",
        accommodationByTier: {
          reserve: { name: "Ngorongoro Lion's Paw", image: "/images/lodges/ngorongoro-lion-s-paw.webp", amenities: ["view", "restaurant", "ensuite"] },
          sovereign: { name: "Ngorongoro Melia Lodge", image: "/images/lodges/ngorongoro-lodge-the-rim-room-melia-collection.webp", amenities: ["view", "restaurant", "ensuite"] },
        },
      },
      {
        day: 4,
        title: "ממכתש נגורונגורו לנדוטו",
        description: "בוקר שלם של ירידה אל רצפת המכתש — חיות בר צפופות, קירות דרמטיים, וסיכוי אמיתי למינים שהמישורים שלפניכם לא יציעו באותו ריכוז, כולל קרנף שחור — לפני שהנסיעה ממשיכה אל המערכת האקולוגית של נדוטו.",
        accommodation: "נדוטו, משתנה לפי רמה",
        meals: "פנסיון מלא",
        insiderFact: "מכתש נגורונגורו הוא מערכת אקולוגית סגורה בשטח של כ-260 קמ״ר, המכילה חלק מתצפיות הקרנף השחור האמינות ביותר באזור.",
        accommodationByTier: {
          reserve: { name: "Masek Tented Lodge", image: "/images/lodges/masek-tented-lodge.webp", amenities: ["ensuite", "wildlife-view"] },
          sovereign: { name: "Taasa Migration Camp", image: "/images/lodges/siringit-migration-camp-ndutu-site.webp", amenities: ["ensuite", "view", "wildlife-view"] },
        },
      },
      {
        day: 5,
        title: "נדוטו, יום שלם",
        description: "כאן המישורים קובעים את סדר היום, לא תסריט קבוע. עשב קצר, אופקים פתוחים, ואם התזמון מסתדר — הרוך המיוחד של גורי ווילדביסט שזה עתה נולדו ומוצאים את רגליהם תוך דקות מהלידה. המדריך שלכם שומר על עמדה במקום לזוז הלאה במהירות, כי הסיפור לרוב לוקח זמן להתפתח.",
        accommodation: "נדוטו, משתנה לפי רמה",
        meals: "פנסיון מלא",
        insiderFact: "עד 8,000 גורי ווילדביסט נולדים ברחבי מישורי נדוטו ביום אחד בשיא עונת ההמלטה.",
        accommodationByTier: {
          reserve: { name: "Masek Tented Lodge", image: "/images/lodges/masek-tented-lodge.webp", amenities: ["ensuite", "wildlife-view"] },
          sovereign: { name: "Taasa Migration Camp", image: "/images/lodges/siringit-migration-camp-ndutu-site.webp", amenities: ["ensuite", "view", "wildlife-view"] },
        },
      },
      {
        day: 6,
        title: "נדוטו, יום שלם",
        description: "היכן שיש חיים חדשים בריכוז כזה, הטורפים עוקבים. ברדלס, אריה, צבוע ותן פועלים כולם בשולי העדרים באור יום מלא כאן — יום שנבנה לצפייה בהתנהגות אמיתית, לא בתצפיות מרוחקות.",
        accommodation: "נדוטו, משתנה לפי רמה",
        meals: "פנסיון מלא",
        insiderFact: "עונת ההמלטה מביאה עמה חלק מהפעילות החזקה ביותר של ברדלסים בשנה במישורי נדוטו, כשהם צדים באור יום מלא על שטח פתוח.",
        accommodationByTier: {
          reserve: { name: "Masek Tented Lodge", image: "/images/lodges/masek-tented-lodge.webp", amenities: ["ensuite", "wildlife-view"] },
          sovereign: { name: "Taasa Migration Camp", image: "/images/lodges/siringit-migration-camp-ndutu-site.webp", amenities: ["ensuite", "view", "wildlife-view"] },
        },
      },
      {
        day: 7,
        title: "מדרום סרנגטי לארושה",
        description: "בוקר אחרון לפני הנסיעה בחזרה לארושה ומשם לשדה התעופה — האבק עדיין על המגפיים שלכם, וכרטיס זיכרון הנושא סיפור ספארי שונה מאוד.",
        accommodation: "לא רלוונטי",
        meals: "ארוחת בוקר",
      },
    ],
  },
  {
    slug: "11-days-kenya-undisputed",
    name: "11 ימים בקניה ללא עוררין",
    duration: 11,
    destinations: ["masai-mara"],
    type: "big_five_game_drives",
    bestMonths: ['Jul', 'Aug', 'Sep', 'Oct'],
    wildlifeTargets: [{ name: 'African Elephant', chance: 'High' }, { name: 'Lion', chance: 'High' }, { name: 'Grevy\'s Zebra', chance: 'High' }, { name: 'Black Rhino', chance: 'High' }, { name: 'Reticulated Giraffe', chance: 'High' }, { name: 'Chimpanzee', chance: 'High', note: 'Ol Pejeta sanctuary' }],
    priceFrom: 5800,
    groupSize: { min: 1, max: 8 },
    badge: "popular",
    bestFor: ["couples", "families", "solo", "wildlife-enthusiasts"],
    metaDescription: "ספארי פרטי בן 11 ימים בקניה — מסאי מארה, עדרי הפילים של אמבוסלי לרגלי קילימנג'רו, וחיות הבר הנדירות של שמורת סמבורו הצפונית. החל מ-5,800$ לאדם.",
    overview: [
      "אחת עשרה ימים, מדינה אחת — והטענה שקניה היא יעד הספארי השלם ביותר באפריקה, מוכחת סופית.",
      "מסלול זה משלב חמש מהמערכות האקולוגיות המגדירות את קניה: משפחות פילים החוצות את המישורים מתחת לקילימנג'רו באמבוסלי, \"חמשת המיוחדים של סמבורו\" — זברת גרֵווי, ג'ירפה רשתית, גרנוק, אוריקס ביסה ובת יענה סומלית — שאינם נמצאים בשום מקום אחר במדינה, קרנף שחור ומקלט השימפנזים היחיד במזרח אפריקה באול פג'טה, להקות פלמינגו שיכולות להגיע לשני מיליון ציפורים והופכות את אגם נקורו לוורוד, ושני ימים מלאים במסאי מארה, שנבחרה כאחד משבעת פלאי הטבע של אפריקה. ניירובי פותחת וסוגרת את המסע עם מוזיאון קארן בליקסן, מרכז הג'ירפות ומקלט הפילים של שלדריק. כל עצירה מקבלת זמן אמיתי במקום נסיעה חטופה, וזה בדיוק מה שהופך את אחת עשרה הימים להרגיש ללא עוררין ולא ממהרים.",
    ],
    highlights: [
      "מסאי מארה — נבחרה כאחד משבעת פלאי הטבע של אפריקה",
      "אמבוסלי — עדרי פילים על רקע קילימנג'רו",
      "שמורת סמבורו — מינים צפוניים נדירים שאינם נמצאים בשום מקום אחר",
      "שמורת אול פג'טה — שימפנזים וקרנף שחור",
      "מוזיאון קארן בליקסן ומרכז הג'ירפות בניירובי",
    ],
    heroImage: "/images/gallery/maned-lion-resting-savanna-grass.webp",
    heroImageAlt: "Maned lion resting alone in tall golden savanna grass",
    gallery: [],
    included: ["כל דמי הכניסה לפארקים ולשמורות", "כל סיורי הספארי", "מדריך מקצועי", "כל הארוחות", "לינה", "העברות משדה התעופה"],
    excluded: ["טיסות בינלאומיות", "אגרות ויזה", "ביטוח נסיעות", "טיפים", "פעילויות אופציונליות"],
    notes: [
      "המחירים המוצגים הם לאדם בחדר זוגי/טווין משותף; תוספת תשלום לחדר יחיד זמינה לפי בקשה.",
      "רכיבה על סוסים וביקורי תרבות במניאטה בסמבורו המוזכרים במסלול הם תוספות אופציונליות בתשלום נוסף, בכפוף לזמינות.",
      "הלינה והתעריפים כפופים לזמינות ועשויים להשתנות בהתאם לתאריך הנסיעה המדויק בתוך העונה.",
      "דמי הכניסה לפארקים הלאומיים ולשמורות בקניה נקבעים על ידי הממשלה וכפופים לשינויים ללא הודעה מוקדמת.",
    ],
    itinerary: [
      {
        day: 1,
        title: "הגעה לניירובי",
        description: "הגעה לשדה התעופה הבינלאומי ג'ומו קניאטה והעברה למלון בניירובי. ליהנות ממתקני הבריכה והספא ולנוח לקראת ההרפתקה.",
        accommodation: "מלון יוקרה בניירובי",
        meals: "ארוחת ערב",
        accommodationByTier: { reserve: { name: "Hemingways Nairobi", image: "/images/lodges/hemingways-nairobi.webp", amenities: ["pool", "spa", "restaurant"] } },
      },
      {
        day: 2,
        title: "ניירובי — עיקרי העיר",
        description: "ביקור בוקר במוזיאון קארן בליקסן, חוות המושבה שהשראתה את הסרט \"מתוך אפריקה\", על רקע גבעות נגונג. לאחר מכן למרכז הג'ירפות, שם ניתן להאכיל ביד ג'ירפות רות'שילד בסכנת הכחדה בגובה העיניים מהמסלול המוגבה. אחר הצהריים במקלט הפילים של קרן דפני שלדריק לצפייה בהאכלה היומית ובאמבטיית הבוץ.",
        accommodation: "מלון יוקרה בניירובי",
        meals: "כל הארוחות",
        accommodationByTier: { reserve: { name: "Hemingways Nairobi", image: "/images/lodges/hemingways-nairobi.webp", amenities: ["pool", "spa", "restaurant"] } },
      },
      {
        day: 3,
        title: "הפארק הלאומי אמבוסלי",
        description: "נסיעה לאמבוסלי, הפארק האייקוני ביותר של קניה, שם משוטטים עדרי פילים עצומים על רקע קילימנג'רו המכוסה שלג. ההר נראה בבקרים בהירים בפירוט יוצא דופן — הקרחונים שלו מבהיקים מעל אבק הסוואנה שלמטה. אמבוסלי מארח למעלה מ-600 מיני ציפורים ואוכלוסיות אמינות של אריות ונמרים.",
        accommodation: "קמפ ספארי באמבוסלי",
        meals: "כל הארוחות",
        accommodationByTier: { reserve: { name: "Ol Tukai Lodge", image: "/images/lodges/ol-tukai-lodge.webp", amenities: ["view", "wildlife-view", "pool"] } },
      },
      {
        day: 4,
        title: "אמבוסלי — יום שלם",
        description: "יום שלם באמבוסלי עם סיורי ספארי בבוקר ובאחר הצהריים. שדות העשב הפתוחים והביצות של הפארק הופכים את צפייה בבעלי החיים לפשוטה ומתגמלת מאוד. משפחות פילים גדולות נעות בתהלוכות איטיות, אימהות מובילות גורים בין חורשות השיטה.",
        accommodation: "קמפ ספארי באמבוסלי",
        meals: "כל הארוחות",
        accommodationByTier: { reserve: { name: "Ol Tukai Lodge", image: "/images/lodges/ol-tukai-lodge.webp", amenities: ["view", "wildlife-view", "pool"] } },
      },
      {
        day: 5,
        title: "שמורת סמבורו הלאומית",
        description: "נסיעה צפונה לסמבורו — שמורה מחוספסת וחצי-צחיחה לאורך נהר אוואסו נגירו. סמבורו מפורסמת ב\"חמשת המיוחדים של סמבורו\": זברת גרֵווי, ג'ירפה רשתית, בת יענה סומלית, גרנוק (האנטילופה ארוכת הצוואר) ואוריקס ביסה — כולם מינים צפוניים שאינם נמצאים בשום מקום אחר בקניה. רכיבה על סוסים לאורך הנהר זמינה כאופציה.",
        accommodation: "קמפ ספארי בסמבורו",
        meals: "כל הארוחות",
        accommodationByTier: { reserve: { name: "Samburu Intrepids", image: "/images/lodges/samburu-intrepids.webp", amenities: ["view", "wildlife-view"] } },
      },
      {
        day: 6,
        title: "סמבורו — הנהר והטורפים",
        description: "סיור ספארי בוקר לאורך נהר אוואסו נגירו, שם הנמרים מורגלים באופן יוצא דופן ולעיתים קרובות נצפים מקרוב בעצי גדת הנהר. תנינים משתרעים לאורך הגדות החוליות. גאוות האריות המקומית צדה עם שחר. אחר הצהריים פנוי או ביקור תרבותי אופציונלי במניאטה של הסמבורו.",
        accommodation: "קמפ ספארי בסמבורו",
        meals: "כל הארוחות",
        accommodationByTier: { reserve: { name: "Samburu Intrepids", image: "/images/lodges/samburu-intrepids.webp", amenities: ["view", "wildlife-view"] } },
      },
      {
        day: 7,
        title: "שמורת אול פג'טה — סוויט ווטרס",
        description: "נסיעה לשמורת אול פג'טה, ביתה של אוכלוסיית הקרנף השחור הגדולה ביותר במזרח אפריקה ושני הקרנפים הלבנים הצפוניים האחרונים עלי אדמות. השמורה מארחת גם את מקלט השימפנזים היחיד במזרח אפריקה, שם חיים שימפנזים שניצלו בתוך גדר יער גדולה הפתוחה לביקורים מודרכים. סיור ספארי בשעת השקיעה במישורים הפתוחים.",
        accommodation: "לודג' באול פג'טה",
        meals: "כל הארוחות",
        accommodationByTier: { reserve: { name: "Sweetwaters Serena Camp", image: "/images/lodges/sweetwaters-serena-camp.webp", amenities: ["wildlife-view", "pool"] } },
      },
      {
        day: 8,
        title: "הפארק הלאומי אגם נקורו",
        description: "נסיעה לאגם נקורו, המפורסם בלהקות הפלמינגו העצומות שלו שיכולות להגיע לשני מיליון ציפורים, והופכות את האגם הרדוד והבסיסי לוורוד כולו. הפארק הוא גם מקלט לקרנפים — שחורים ולבנים כאחד — ומארח אוכלוסיות בריאות של אריות, נמרים וג'ירפות רות'שילד.",
        accommodation: "לודג' באגם נקורו",
        meals: "כל הארוחות",
        accommodationByTier: { reserve: { name: "Lake Nakuru Lodge", image: "/images/lodges/lake-nakuru-lodge.webp", amenities: ["view", "restaurant"] } },
      },
      {
        day: 9,
        title: "שמורת מסאי מארה הלאומית",
        description: "נסיעה דרומה למסאי מארה — שמורת חיות הבר המפורסמת ביותר בקניה ואחת מיעדי חיות הבר הגדולים בעולם. שנבחרה שוב ושוב כאחד משבעת פלאי הטבע של אפריקה, המארה מארחת לאורך כל השנה אוכלוסיות של אריות, ברדלסים, נמרים, פילים, תאואים והיפופוטמים, בנוסף לאירוח ההגירה הגדולה בין יולי לאוקטובר.",
        accommodation: "קמפ אוהלים במסאי מארה",
        meals: "כל הארוחות",
        accommodationByTier: { reserve: { name: "Kichwa Tembo Camp", image: "/images/lodges/kichwa-tembo-camp.webp", amenities: ["wildlife-view", "view"] } },
      },
      {
        day: 10,
        title: "מסאי מארה — יום שלם",
        description: "יום שלם במסאי מארה עם סיורי ספארי בבוקר ובאחר הצהריים. רכיבה על סוסים על פני הסוואנה הפתוחה לצד זברות וג'ירפות זמינה כתוספת אופציונלית לחוויה הסוחפת ביותר. תצפיות בחתולי בר גדולים נמנות עם האמינות ביותר בכל אפריקה.",
        accommodation: "קמפ אוהלים במסאי מארה",
        meals: "כל הארוחות",
        accommodationByTier: { reserve: { name: "Kichwa Tembo Camp", image: "/images/lodges/kichwa-tembo-camp.webp", amenities: ["wildlife-view", "view"] } },
      },
      {
        day: 11,
        title: "יציאה — ניירובי",
        description: "סיור ספארי בוקר במארה, ולאחר מכן נסיעה או טיסה לניירובי לטיסה הבינלאומית הביתה. אחת עשרה ימים של קניה במיטבה.",
        accommodation: "לא רלוונטי",
        meals: "ארוחת בוקר",
      },
    ],
  },
  {
    slug: "10-days-southern-secrets",
    name: "10 ימים בסודות דרום טנזניה",
    duration: 10,
    destinations: ["nyerere", "ruaha"],
    type: "big_five_game_drives",
    wildlifeTargets: [{ name: 'Lion', chance: 'High' }, { name: 'African Elephant', chance: 'High' }, { name: 'African Wild Dog', chance: 'Rare' }, { name: 'Hippopotamus', chance: 'High' }, { name: 'Cheetah', chance: 'High' }, { name: 'Nile Crocodile', chance: 'High' }],
    priceFrom: 5200,
    groupSize: { min: 1, max: 6 },
    bestFor: ["solo", "couples", "wildlife-enthusiasts"],
    metaDescription: "מסע פרטי בן 10 ימים אל דרום טנזניה הפראי — ספארי בסירה על נהר רופיג'י בפארק הלאומי ניירה, ואוכלוסיית חתולי הבר הצפופה והמרשימה של רואהה. החל מ-5,200$ לאדם.",
    overview: [
      "דרום טנזניה אינו מפרסם את עצמו, וזו בדיוק הנקודה — המעגל בן עשרת הימים הזה נבנה עבור מטיילים המעוניינים בחיות הבר של סרנגטי בלי רכב נוסף בטווח הראייה.",
      "המסלול נפתח בפארק הלאומי ניירירה — בשטח של 50,000 קמ״ר, גדול משוויץ — עם סיורי ספארי ביער הגדות ויערות המיומבו שלו, וספארי סירה בנהר רופיג'י, בגובה עיניים עם היפופוטמים ופילים על גדת המים. משם הוא נמשך דרומה דרך מיקומי וטיפוס להתרחצות מתחת למפל סאנג'ה בהרי אודזונגווה, לפני יומיים שלמים ברואהה, הפארק הלאומי הגדול ביותר בטנזניה וביתה של אוכלוסיית האריות, הנמרים, הברדלסים וכלבי הבר הגדולה ביותר. דרום טנזניה זוכה לשבריר מתנועת המבקרים של המעגל הצפוני, והמסלול הזה נבנה כדי לנצל זאת במלואו — ימים ארוכים ורגועים בטבע פראי אמיתי, לא תורים בשער.",
    ],
    highlights: [
      "הפארק הלאומי ניירירה — גדול משוויץ",
      "ספארי סירה בנהר רופיג'י",
      "רואהה — הפארק הגדול ביותר בטנזניה עם אוכלוסיית חתולי הבר הגדולה ביותר",
      "הרי אודזונגווה ורחצה במפלי סאנג'ה",
      "אפס קהל — חוויית טבע פראי אמיתית",
    ],
    heroImage: "/images/gallery/serengeti-plains-sunset-panorama.jpg",
    heroImageAlt: "Panoramic sunset over the Serengeti plains with silhouetted acacia trees and distant hills",
    gallery: [],
    included: ["כל דמי הכניסה לפארקים", "כל סיורי הספארי וספארי הסירה", "מדריך מקצועי", "כל הארוחות", "לינה", "העברות משדה התעופה"],
    excluded: ["טיסות בינלאומיות", "אגרות ויזה", "ביטוח נסיעות", "טיפים"],
    notes: [
      "המחירים המוצגים הם לאדם בחדר זוגי/טווין משותף; תוספת תשלום לחדר יחיד זמינה לפי בקשה.",
      "טיול הסירה בשקיעה ביום 1 הוא אופציונלי, והעברת החזרה ביום 10 (בכביש או במטוס קל) מאושרת בעת ההזמנה.",
      "הלינה והתעריפים כפופים לזמינות ועשויים להשתנות בהתאם לתאריך הנסיעה המדויק בתוך העונה.",
      "דמי הכניסה לפארקים הלאומיים ולאזורי השימור בטנזניה נקבעים על ידי הממשלה וכפופים לשינויים ללא הודעה מוקדמת.",
    ],
    itinerary: [
      {
        day: 1,
        title: "הגעה לפארק הלאומי ניירירה",
        description: "הגעה לשדה התעופה הבינלאומי ג'וליוס ניירירה בדאר א-סלאם, והעברה ישירה ללודג' על גדות נהר רופיג'י בתוך הפארק הלאומי ניירירה. טיול סירה אופציונלי בשקיעה מציג בפניכם את ההיפופוטמים והתנינים של הנהר בערב הראשון.",
        accommodation: "Rufiji River Camp",
        meals: "ארוחת ערב",
        accommodationByTier: { reserve: { name: "Rufiji River Camp", image: "/images/lodges/rufiji-river-camp.webp", amenities: ["view", "wildlife-view"] } },
      },
      {
        day: 2,
        title: "הפארק הלאומי ניירירה — סיורי ספארי",
        description: "יום שלם של סיורי ספארי בניירירה — הפארק הלאומי הגדול ביותר בטנזניה, המשתרע על פני 50,000 קמ״ר של יער גדות, שדות עשב פתוחים ויערות מיומבו. גאוות אריות, עדרי פילים, תאואים, קודו וג'ירפות — כולם נצפים באופן אמין על פני השטח המגוון.",
        accommodation: "Rufiji River Camp",
        meals: "כל הארוחות",
        accommodationByTier: { reserve: { name: "Rufiji River Camp", image: "/images/lodges/rufiji-river-camp.webp", amenities: ["view", "wildlife-view"] } },
      },
      {
        day: 3,
        title: "ניירירה — ספארי סירה בנהר רופיג'י",
        description: "ספארי סירה בבוקר בנהר רופיג'י — אחד ממקווי המים הגדולים ביותר במזרח אפריקה. בריכות היפופוטמים, גדות תנינים ומושבות עופות מים צפופות משתרעות לאורך הגדות. עדרי פילים חוצים את המעברים הרדודים. זהו שטח ספארי הליכה וסירה במיטבו, ללא הגבלות רכב על היכן שהמדריכים יכולים לקחת אתכם.",
        accommodation: "Rufiji River Camp",
        meals: "כל הארוחות",
        accommodationByTier: { reserve: { name: "Rufiji River Camp", image: "/images/lodges/rufiji-river-camp.webp", amenities: ["view", "wildlife-view"] } },
      },
      {
        day: 4,
        title: "סיור קצר בניירירה — העברה למיקומי",
        description: "סיור ספארי בוקר אחרון בניירירה לפני העברה צפונה לפארק הלאומי מיקומי. הנסיעה עוברת דרך שטחי כפר מרוחקים בדרום טנזניה שמעטים המבקרים שרואים אותם.",
        accommodation: "Mikumi Wildlife Lodge",
        meals: "כל הארוחות",
        accommodationByTier: { reserve: { name: "Mikumi Wildlife Lodge", image: "/images/lodges/mikumi-wildlife-lodge.webp", amenities: ["pool", "view", "restaurant"] } },
      },
      {
        day: 5,
        title: "הפארק הלאומי מיקומי",
        description: "סיורי ספארי על פני מישור ההצפה של מקאטה — בית הגידול הפורה ביותר של מיקומי. פילים, אלנד, אריות, נמרים, ברדלסים וכלבי בר — כולם מאכלסים את הפארק. מיקומי מכונה לעיתים קרובות \"סרנגטי של הדרום\" בזכות נוף שדות העשב הפתוחים והנגישות לצפייה בחתולי בר גדולים.",
        accommodation: "Mikumi Wildlife Lodge",
        meals: "כל הארוחות",
        accommodationByTier: { reserve: { name: "Mikumi Wildlife Lodge", image: "/images/lodges/mikumi-wildlife-lodge.webp", amenities: ["pool", "view", "restaurant"] } },
      },
      {
        day: 6,
        title: "הפארק הלאומי הרי אודזונגווה",
        description: "נסיעה להרי אודזונגווה — אחד הפארקים עתירי המגוון הביולוגי ביותר בטנזניה ויעד שימור בעל חשיבות עולמית. טיול רגלי דרך יער ההרים אל מפל סאנג'ה, שם ניתן להתרחץ בבריכות הטבעיות מתחת למפל. היער מכיל שני מיני קופי אדם אנדמיים ומעל 400 מיני ציפורים, כולל מינים אנדמיים רבים של שבר האלברטין.",
        accommodation: "Udzungwa Forest Camp",
        meals: "כל הארוחות",
        accommodationByTier: { reserve: { name: "Hondo Hondo Udzungwa Forest Camp", image: "/images/lodges/hondo-hondo-udzungwa-forest-camp.webp", amenities: ["garden", "view"] } },
      },
      {
        day: 7,
        title: "העברה לפארק הלאומי רואהה",
        description: "נסיעה מערבה לפארק הלאומי רואהה — מסע ארוך אך נופי דרך הרמות הדרומיות. רואהה הוא הפארק הלאומי הגדול ביותר בטנזניה ואחד היעדים המרגשים ביותר ביבשת עבור חובבי חיות בר רציניים.",
        accommodation: "Ruaha River Lodge",
        meals: "כל הארוחות",
        accommodationByTier: { reserve: { name: "Ruaha River Lodge", image: "/images/lodges/ruaha-river-lodge-dining-pavilion.webp", amenities: ["view", "wildlife-view"] } },
      },
      {
        day: 8,
        title: "הפארק הלאומי רואהה — יום שלם",
        description: "רואהה מכיל את אוכלוסיות האריות, הנמרים, הברדלסים וכלבי הבר הגדולות ביותר בטנזניה — צפיפות הטורפים בפארק יוצאת דופן. עדרי הפילים מונים אלפים. נהר רואהה הגדול הוא עורק החיים של הפארק, ומושך בעלי חיים מרחבי האזור בעונת היובש. ללא קהל, ללא רעש — רק הטבע הפראי בצורתו הטהורה ביותר.",
        accommodation: "Ruaha River Lodge",
        meals: "כל הארוחות",
        accommodationByTier: { reserve: { name: "Ruaha River Lodge", image: "/images/lodges/ruaha-river-lodge-dining-pavilion.webp", amenities: ["view", "wildlife-view"] } },
      },
      {
        day: 9,
        title: "רואהה — סיורי בוקר ואחר צהריים",
        description: "עוד יום שלם ברואהה. סיורי הבוקר מכוונים לאזורי הנהר, שם הטורפים פעילים ביותר עם שחר. סיורי אחר הצהריים חודרים אל הפנים המרוחקים, שם אזורים שמעטים מבקרים בהם מכילים אנטילופת סייבל, קודו גדול ואוריקס לצד המינים הנפוצים יותר.",
        accommodation: "Ruaha River Lodge",
        meals: "כל הארוחות",
        accommodationByTier: { reserve: { name: "Ruaha River Lodge", image: "/images/lodges/ruaha-river-lodge-dining-pavilion.webp", amenities: ["view", "wildlife-view"] } },
      },
      {
        day: 10,
        title: "יציאה — דאר א-סלאם",
        description: "סיור ספארי בוקר ברואהה, ולאחר מכן העברה בכביש או במטוס קל לדאר א-סלאם לטיסה הבינלאומית הביתה.",
        accommodation: "לא רלוונטי",
        meals: "ארוחת בוקר",
      },
    ],
  },
  {
    slug: "11-days-southern-spice",
    name: "11 ימים חיות בר בדרום ואיי התבלינים",
    duration: 11,
    destinations: ["nyerere", "ruaha", "zanzibar"],
    type: "big_five_game_drives",
    wildlifeTargets: [{ name: 'Lion', chance: 'High' }, { name: 'African Elephant', chance: 'High' }, { name: 'African Wild Dog', chance: 'Rare' }, { name: 'Hippopotamus', chance: 'High' }, { name: 'Spinner Dolphin', chance: 'High', note: 'Kizimkazi, Zanzibar' }, { name: 'Aldabra Giant Tortoise', chance: 'Guaranteed', note: 'Prison Island' }],
    priceFrom: 6100,
    groupSize: { min: 1, max: 8 },
    badge: "new",
    bestFor: ["couples", "honeymoon", "wildlife-enthusiasts"],
    metaDescription: "11 ימים המשלבים את המעגל הדרומי הפראי של טנזניה — נהר רופיג'י בניירה וחיות הבר של רואהה — עם שלושה לילות בסטון טאון ובחופי זנזיבר. החל מ-6,100$ לאדם.",
    overview: [
      "זוהי תשובת המעגל הדרומי לנוסחת ספארי-ואז-חוף הקלאסית של טנזניה — להחליף את הצפון ההומה בניירירה וברואהה, ולסיים בחול הלבן של זנזיבר.",
      "ימים עמוקים בדרום נפתחים בסיורי ספארי וספארי סירה בנהר רופיג'י בפארק הלאומי ניירירה, שם גאוות אריות נעות ביערות מיומבו בגודל של מדינה קטנה, לפני העברה במטוס קל לרואהה — הפארק הפראי והכי פחות מבוקר בטנזניה, עם צפיפות טורפים המתחרה בכל מקום ביבשת. משם זו טיסה קצרה לזנזיבר לשלושה ימים באתר נופש חמישה כוכבים על קו החוף, עם דלתות מגולפות של סטון טאון, צבי הענק של אי הכלא, דולפינים פראיים מול חופי קיזימקזי, וסיור בחוות תבלינים השזור סביב זמן החוף. ללא חציות גבול יבשתיות, ללא מעגלי צפייה בחיות בר משותפים — רק טבע פראי דרומי אמיתי, ולאחריו מנוחה אמיתית.",
    ],
    highlights: [
      "הפארק הלאומי ניירירה וספארי סירה בנהר רופיג'י",
      "רואהה — הפארק הפראי והכי פחות מבוקר בטנזניה",
      "שלושה ימים בזנזיבר — אתרי נופש חוף חמישה כוכבים",
      "סטון טאון, אי הכלא וחוות תבלינים",
      "חיות הבר של המעגל הדרומי ללא הקהל של הצפון",
    ],
    heroImage: "/images/gallery/elephant-acacia-southern.webp",
    heroImageAlt: "Solitary elephant standing beneath a large acacia tree on the southern plains",
    gallery: [],
    included: ["כל דמי הכניסה לפארקים", "כל סיורי הספארי וספארי הסירה", "מלון בזנזיבר (חזית חוף)", "כל הארוחות בזמן הספארי", "ארוחת בוקר בזנזיבר", "טיסות פנים ובין-איים", "העברות משדה התעופה"],
    excluded: ["טיסות בינלאומיות", "אגרות ויזה", "ביטוח נסיעות", "טיפים", "ארוחות צהריים וערב בזנזיבר"],
    notes: [
      "המחירים המוצגים הם לאדם בחדר זוגי/טווין משותף; תוספת תשלום לחדר יחיד זמינה לפי בקשה.",
      "הלינה בזנזיבר כוללת ארוחת בוקר בלבד; ארוחות הצהריים והערב שם הן על חשבונכם.",
      "הלינה והתעריפים כפופים לזמינות ועשויים להשתנות בהתאם לתאריך הנסיעה המדויק בתוך העונה.",
      "דמי הכניסה לפארקים הלאומיים ולאזורי השימור בטנזניה נקבעים על ידי הממשלה וכפופים לשינויים ללא הודעה מוקדמת.",
    ],
    itinerary: [
      {
        day: 1,
        title: "הגעה לפארק הלאומי ניירירה",
        description: "הגעה לשדה התעופה הבינלאומי ג'וליוס ניירירה בדאר א-סלאם, והעברה ללודג' בתוך הפארק הלאומי ניירירה על גדות נהר רופיג'י. טיול סירה אופציונלי בשקיעה מציג בפניכם את ההיפופוטמים והתנינים של הנהר בערב הראשון.",
        accommodation: "Rufiji River Camp",
        meals: "ארוחת ערב",
        accommodationByTier: { reserve: { name: "Rufiji River Camp", image: "/images/lodges/rufiji-river-camp.webp", amenities: ["view", "wildlife-view"] } },
      },
      {
        day: 2,
        title: "ניירירה — ארץ האריות",
        description: "יום שלם של סיורי ספארי בפארק הלאומי ניירירה. גאוות אריות גדולות נעות ביערות המיומבו ובשדות העשב הפתוחים, וחולקות את הנוף עם עדרי פילים, תאואים וג'ירפות. גודלו של הפארק — גדול משוויץ — הופך כל מפגש להרגיש פראי ורגוע באמת.",
        accommodation: "Rufiji River Camp",
        meals: "כל הארוחות",
        accommodationByTier: { reserve: { name: "Rufiji River Camp", image: "/images/lodges/rufiji-river-camp.webp", amenities: ["view", "wildlife-view"] } },
      },
      {
        day: 3,
        title: "ניירירה — קוקטיילי שקיעה בנהר רופיג'י",
        description: "סיור ספארי בוקר המתמקד באזורי היער שבהם צדים נמרים וכלבי בר. אחר הצהריים ספארי סירה בנהר רופיג'י — נקודת מבט ייחודית על חיות הבר האפריקאיות שמעטים המבקרים חווים אי פעם. קוקטיילי שקיעה ליד המים כשהיפופוטמים עולים לפני השטח סביב הסירה.",
        accommodation: "Rufiji River Camp",
        meals: "כל הארוחות",
        accommodationByTier: { reserve: { name: "Rufiji River Camp", image: "/images/lodges/rufiji-river-camp.webp", amenities: ["view", "wildlife-view"] } },
      },
      {
        day: 4,
        title: "טיסה לפארק הלאומי רואהה",
        description: "עלייה למטוס הקל וטיסה מערבה מעל מישורי דרום טנזניה אל הפארק הלאומי רואהה. המבט מגובה הציפור חושף את היקפם של יערות המיומבו המשתרעים עד האופק. סיור ספארי אחר צהריים בנהר רואהה הגדול קובע את הטון להמשך.",
        accommodation: "Ruaha River Lodge",
        meals: "ארוחת צהריים, ארוחת ערב",
        accommodationByTier: { reserve: { name: "Ruaha River Lodge", image: "/images/lodges/ruaha-river-lodge-dining-pavilion.webp", amenities: ["view", "wildlife-view"] } },
      },
      {
        day: 5,
        title: "רואהה — חתולי בר גדולים ופילים גדולים",
        description: "יום שלם ברואהה — הפארק הלאומי הגדול ביותר בטנזניה ואחד הסודות הגדולים ביותר של אפריקה. צפיפות הטורפים יוצאת דופן: אריות, נמרים, ברדלסים וכלבי בר — כולם חולקים את אותו הנוף. עדרי הפילים מונים אלפים. ללא שיירות אוטובוסי תיירים, ללא קהל — רק אתם, המדריך שלכם והטבע הפראי.",
        accommodation: "Ruaha River Lodge",
        meals: "כל הארוחות",
        accommodationByTier: { reserve: { name: "Ruaha River Lodge", image: "/images/lodges/ruaha-river-lodge-dining-pavilion.webp", amenities: ["view", "wildlife-view"] } },
      },
      {
        day: 6,
        title: "רואהה — סיורים בפנים המרוחקים",
        description: "חדירה אל האזורים המרוחקים יותר של רואהה. אנטילופת סייבל וקודו גדול מאכלסים את יער המיומבו היבש. נהר רואהה הגדול מושך בעלי חיים מרחבי האזור, ואינטראקציות טורף-נטרף על גדת המים הן מחזה יומיומי.",
        accommodation: "Ruaha River Lodge",
        meals: "כל הארוחות",
        accommodationByTier: { reserve: { name: "Ruaha River Lodge", image: "/images/lodges/ruaha-river-lodge-dining-pavilion.webp", amenities: ["view", "wildlife-view"] } },
      },
      {
        day: 7,
        title: "טיסה לזנזיבר",
        description: "סיור ספארי בוקר ברואהה, ולאחר מכן טיסה לזנזיבר. נחיתה באי התבלינים האגדי הזה והעברה לאתר הנופש שלכם, חמישה כוכבים, על קו החוף. בילוי אחר הצהריים על החול הלבן, תוך היכרות עם גן העדן.",
        accommodation: "אתר נופש חוף יוקרתי בזנזיבר",
        meals: "ארוחת בוקר",
        accommodationByTier: { reserve: { name: "Kilindi Zanzibar", image: "/images/lodges/kilindi-zanzibar.webp", amenities: ["pool", "spa", "all-inclusive"] } },
      },
      {
        day: 8,
        title: "זנזיבר — סטון טאון ואי הכלא",
        description: "סיור בוקר מודרך בסטון טאון — הרשומה כאתר מורשת עולמית של אונסק\"ו ומלאה בדלתות עץ מגולפות, קשתות ערביות וחיי תרבות סווהילית. שיט אל אי הכלא, שם צבי אלדבּרה ענקיים בני למעלה מ-100 שנה משוטטים בחופשיות בגנים. שיט שקיעה בסירת דאו אחר הצהריים.",
        accommodation: "אתר נופש חוף יוקרתי בזנזיבר",
        meals: "ארוחת בוקר",
        accommodationByTier: { reserve: { name: "Kilindi Zanzibar", image: "/images/lodges/kilindi-zanzibar.webp", amenities: ["pool", "spa", "all-inclusive"] } },
      },
      {
        day: 9,
        title: "זנזיבר — דולפינים וחוות תבלינים",
        description: "שיט בשעות הבוקר המוקדמות לקיזימקזי לשחייה עם דולפיני ספינר פראיים באוקיינוס הפתוח. סיור אחר צהריים בחוות תבלינים דרך מטעי ציפורן, קינמון, וניל, פלפל שחור ואילנג-אילנג. קוקטיילי ערב באתר הנופש כשהשמש שוקעת באוקיינוס ההודי.",
        accommodation: "אתר נופש חוף יוקרתי בזנזיבר",
        meals: "ארוחת בוקר",
        accommodationByTier: { reserve: { name: "Kilindi Zanzibar", image: "/images/lodges/kilindi-zanzibar.webp", amenities: ["pool", "spa", "all-inclusive"] } },
      },
      {
        day: 10,
        title: "זנזיבר — יום חוף",
        description: "יום חופשי לחלוטין על חופי זנזיבר האגדיים. המים הטורקיז, חול האלמוגים הלבן ועצי הדקל המתנדנדים הם הניגוד המושלם לעוצמת פארקי הספארי הדרומיים. שנירקול, שיט או קיאקים זמינים כאופציה.",
        accommodation: "אתר נופש חוף יוקרתי בזנזיבר",
        meals: "ארוחת בוקר",
        accommodationByTier: { reserve: { name: "Kilindi Zanzibar", image: "/images/lodges/kilindi-zanzibar.webp", amenities: ["pool", "spa", "all-inclusive"] } },
      },
      {
        day: 11,
        title: "יציאה",
        description: "בוקר בחוף, ולאחר מכן העברה לשדה התעופה של זנזיבר לטיסת ההמשך הבינלאומית הביתה.",
        accommodation: "לא רלוונטי",
        meals: "ארוחת בוקר",
      },
    ],
  },
  {
    slug: "12-days-tanzania-kenya",
    name: "12 ימים מסע טנזניה-קניה",
    duration: 12,
    destinations: ["serengeti", "ngorongoro", "manyara", "masai-mara"],
    type: "big_five_game_drives",
    bestMonths: ['Jul', 'Aug', 'Sep', 'Oct'],
    wildlifeTargets: [{ name: 'Wildebeest', chance: 'Seasonal', note: 'Jul-Oct migration' }, { name: 'Lion', chance: 'High' }, { name: 'Black Rhino', chance: 'Rare' }, { name: 'Flamingo', chance: 'Seasonal' }, { name: 'African Elephant', chance: 'High' }, { name: 'Cheetah', chance: 'High' }],
    priceFrom: 7200,
    groupSize: { min: 1, max: 8 },
    bestFor: ["couples", "solo", "wildlife-enthusiasts"],
    metaDescription: "משלחת טנזניה-קניה בת 12 ימים החוצה את מסאי מארה והסרנגטי, את אמבוסלי לרגלי קילימנג'רו, ואת פלמינגו והקרנפים של אגם נקורו. החל מ-7,200$ לאדם.",
    overview: [
      "שנים עשר ימים מספיקים כדי להפסיק לבחור בין קניה לטנזניה לגמרי — המסע הזה לוקח את שתיהן, וחוצה את הגבול במטוס קל במקום בפשרה.",
      "הקטע הקנייתי כולל את עדרי הפילים של אמבוסלי מתחת לקילימנג'רו, את חופי הפלמינגו הוורודים ומקלט הקרנפים של אגם נקורו, ויומיים במסאי מארה, אחד משבעת פלאי הטבע של אפריקה. טיסה מעל הגבול נוחתת אתכם בסרנגטי לימים שלמים נוספים בין אוכלוסיות האריות והברדלסים שלה, לפני שרצפת המכתש של נגורונגורו מספקת את החמישייה הגדולה בירידה אחת, ואגם מניארה מסיים את המסע עם האריות המטפסים על עצים שהמינגווי כינה הוכחה ל\"המקום היפה ביותר באפריקה\". שתי מדינות, ארבע מערכות אקולוגיות, מסע חיות בר אחד רציף — עם טיסה נופית במקום חציית הגבול היבשתית הרגילה.",
    ],
    highlights: [
      "מסאי מארה וסרנגטי — שני פארקי חיות הבר הגדולים ביותר באפריקה",
      "אמבוסלי — פילים מתחת לקילימנג'רו",
      "פלמינגו וקרנפים שחורים באגם נקורו",
      "אגם מניארה — \"המקום היפה ביותר באפריקה\" של המינגווי",
      "מסע חיות בר חוצה-גבולות דרך שתי מדינות",
    ],
    heroImage: "/images/gallery/africa-lion.jpg",
    heroImageAlt: "Black-and-white portrait of a maned lion walking through tall savanna grass",
    gallery: [],
    included: ["כל דמי הכניסה לפארקים", "כל סיורי הספארי", "מדריך מקצועי", "כל הארוחות", "לינה", "העברות חוצות גבול", "העברות משדה התעופה"],
    excluded: ["טיסות בינלאומיות", "אגרות ויזה לקניה ולטנזניה", "ביטוח נסיעות", "טיפים"],
    notes: [
      "המחירים המוצגים הם לאדם בחדר זוגי/טווין משותף; תוספת תשלום לחדר יחיד זמינה לפי בקשה.",
      "חציית הגבול בין קניה לטנזניה במסלול זה מתבצעת במטוס קל ולא בכביש.",
      "הלינה והתעריפים כפופים לזמינות ועשויים להשתנות בהתאם לתאריך הנסיעה המדויק בתוך העונה.",
      "דמי הכניסה לפארקים בטנזניה ובקניה נקבעים על ידי הממשלות המתאימות וכפופים לשינויים ללא הודעה מוקדמת.",
    ],
    itinerary: [
      {
        day: 1,
        title: "הגעה לניירובי",
        description: "הגעה לשדה התעופה הבינלאומי ג'ומו קניאטה והעברה למלון בניירובי. להירגע ולהתכונן לשנים עשר ימים בשני יעדי חיות הבר הגדולים ביותר של אפריקה.",
        accommodation: "מלון בניירובי",
        meals: "ארוחת ערב",
        accommodationByTier: { reserve: { name: "Hemingways Nairobi", image: "/images/lodges/hemingways-nairobi.webp", amenities: ["pool", "spa", "restaurant"] } },
      },
      {
        day: 2,
        title: "ניירובי — סיור בעיר",
        description: "ביקור במוזיאון קארן בליקסן, הממוקם בחווה שהשראתה את הסרט \"מתוך אפריקה\". לאחר מכן למרכז הג'ירפות, שם ג'ירפות רות'שילד אוכלות גרגירים מכף היד שלכם בגובה העיניים מהמסלול המוגבה. אחר הצהריים במקלט הפילים של דפני שלדריק לצפייה בהאכלה ובאמבטיית הבוץ.",
        accommodation: "מלון בניירובי",
        meals: "כל הארוחות",
        accommodationByTier: { reserve: { name: "Hemingways Nairobi", image: "/images/lodges/hemingways-nairobi.webp", amenities: ["pool", "spa", "restaurant"] } },
      },
      {
        day: 3,
        title: "הפארק הלאומי אמבוסלי",
        description: "נסיעה לאמבוסלי מתחת לפסגה המכוסה קרח של קילימנג'רו. ההר הגבוה ביותר באפריקה שולט בנוף בבקרים בהירים, ומספק רקע אייקוני לעדרי הפילים הגדולים ביותר בקניה. למעלה מ-600 מיני ציפורים תועדו בפארק הקומפקטי הזה.",
        accommodation: "קמפ ספארי באמבוסלי",
        meals: "כל הארוחות",
        accommodationByTier: { reserve: { name: "Ol Tukai Lodge", image: "/images/lodges/ol-tukai-lodge.webp", amenities: ["view", "wildlife-view", "pool"] } },
      },
      {
        day: 4,
        title: "אמבוסלי — יום שלם",
        description: "יום שלם של חקירת הביצות, היערות ושדות העשב הפתוחים של אמבוסלי. קבוצות משפחתיות גדולות של פילים נעות בין הקנים לחורשות השיטה, גאוות אריות צדות בשולי מישור ההצפה, וברדלסים רודפים אחר צבאים על פני השטח הפתוח.",
        accommodation: "קמפ ספארי באמבוסלי",
        meals: "כל הארוחות",
        accommodationByTier: { reserve: { name: "Ol Tukai Lodge", image: "/images/lodges/ol-tukai-lodge.webp", amenities: ["view", "wildlife-view", "pool"] } },
      },
      {
        day: 5,
        title: "הפארק הלאומי אגם נקורו",
        description: "נסיעה לאגם נקורו, שם האגם הבסיסי מארח את אחת מאוכלוסיות הפלמינגו הגדולות בעולם. המסה הוורודה המפורסמת על המים משתנה ומתפתלת עם תנועות הציפורים. הפארק הוא גם מקלט לקרנפים — שחורים ולבנים כאחד — אחד המקומות הטובים ביותר בקניה לצפייה בהם.",
        accommodation: "לודג' באגם נקורו",
        meals: "כל הארוחות",
        accommodationByTier: { reserve: { name: "Lake Nakuru Lodge", image: "/images/lodges/lake-nakuru-lodge.webp", amenities: ["view", "restaurant"] } },
      },
      {
        day: 6,
        title: "מסאי מארה — הגעה",
        description: "נסיעה דרומה לשמורת מסאי מארה הלאומית — אבן החן של קניה. שדות העשב הגליים של המארה משתרעים עד האופק ומתחברים בצורה חלקה לסרנגטי שבדרום. סיור ספארי אחר צהריים מציג בפניכם את גאוות האריות ומשפחות הברדלסים המקומיות.",
        accommodation: "קמפ אוהלים במסאי מארה",
        meals: "כל הארוחות",
        accommodationByTier: { reserve: { name: "Kichwa Tembo Camp", image: "/images/lodges/kichwa-tembo-camp.webp", amenities: ["wildlife-view", "view"] } },
      },
      {
        day: 7,
        title: "מסאי מארה — יום שלם",
        description: "יום שלם במארה, שנבחרה כאחד משבעת פלאי הטבע של אפריקה. בין יולי לאוקטובר, הגירת הווילדביסט ממלאת כל אופק. לאורך כל השנה, החמישייה הגדולה ומכלול הטורפים האפריקאיים הופכים את המארה לאחד מיעדי צפיית חיות הבר הגדולים בעולם. רכיבה על סוסים לצד חיות הבר זמינה כאופציה.",
        accommodation: "קמפ אוהלים במסאי מארה",
        meals: "כל הארוחות",
        accommodationByTier: { reserve: { name: "Kichwa Tembo Camp", image: "/images/lodges/kichwa-tembo-camp.webp", amenities: ["wildlife-view", "view"] } },
      },
      {
        day: 8,
        title: "טיסה לסרנגטי",
        description: "חציית הגבול לטנזניה במטוס קל, ונחיתה במסלול הנחיתה של סרוֹנֶרה בלב סרנגטי. סיור ספארי אחר צהריים במישורים המרכזיים כאשר אוכלוסיות האריות והברדלסים הקבועות של סרנגטי מתעוררות לחיים באור אחר הצהריים הזהוב. בריכות ההיפופוטמים זוהרות בשקיעה.",
        accommodation: "קמפ אוהלים בסרנגטי",
        meals: "ארוחת צהריים, ארוחת ערב",
        accommodationByTier: { reserve: { name: "Siringiti Serengeti Camp", image: "/images/lodges/siringiti-serengeti-camp.webp", amenities: ["wifi", "view", "restaurant"] } },
      },
      {
        day: 9,
        title: "סרנגטי — יום שלם",
        description: "יום שלם במישורי סרנגטי עם סיורי ספארי בבוקר ובאחר הצהריים. חתולי בר גדולים, עדרי ווילדביסט, זברות, ג'ירפות ופילים ממלאים את הנוף בכל כיוון. סרנגטי היא המערכת האקולוגית הסוואנית הרציפה הגדולה ביותר בעולם.",
        accommodation: "קמפ אוהלים בסרנגטי",
        meals: "כל הארוחות",
        accommodationByTier: { reserve: { name: "Siringiti Serengeti Camp", image: "/images/lodges/siringiti-serengeti-camp.webp", amenities: ["wifi", "view", "restaurant"] } },
      },
      {
        day: 10,
        title: "מכתש נגורונגורו",
        description: "נסיעה לנגורונגורו וירידה למכתש ליום שלם בין החמישייה הגדולה. חיות הבר המרוכזות בתוך הקלדרה העתיקה הזו הופכות את הצפייה בהן לאחת הפוריות ביותר באפריקה. קרנפים שחורים נצפים כאן באופן אמין.",
        accommodation: "Ngorongoro Serena Lodge",
        meals: "כל הארוחות",
        accommodationByTier: { reserve: { name: "Kitela Lodge", image: "/images/lodges/kitela-lodge.webp", amenities: ["pool", "view", "garden"] } },
      },
      {
        day: 11,
        title: "הפארק הלאומי אגם מניארה",
        description: "נסיעה לאגם מניארה — הפארק שהמינגווי כינה \"המקום היפה ביותר באפריקה\". אריות המטפסים על עצים משתרעים על ענפי עצי תאנה מעל רצפת היער. האגם הבסיסי מארח להקות עצומות של פלמינגו, שקנאים וחסידות. מעיינות גיאותרמיים חמים בוקעים לאורך קו החוף.",
        accommodation: "מלון באגם מניארה",
        meals: "כל הארוחות",
        accommodationByTier: { reserve: { name: "andBeyond Lake Manyara Tree Lodge", image: "/images/lodges/andbeyond-lake-manyara-tree-lodge-living-room.webp", amenities: ["view", "wildlife-view"] } },
      },
      {
        day: 12,
        title: "יציאה — שדה התעופה הבינלאומי קילימנג'רו",
        description: "נסיעת בוקר לשדה התעופה הבינלאומי קילימנג'רו לטיסה הבינלאומית הביתה, כשאתם נושאים איתכם שנים עשר ימים של זיכרונות משני יעדי חיות הבר הגדולים ביותר של אפריקה.",
        accommodation: "לא רלוונטי",
        meals: "ארוחת בוקר",
      },
    ],
  },
  {
    slug: "14-days-kilimanjaro-lemosho-safari",
    name: "טיפוס קילימנג'רו במסלול למושו וספארי מבחר בן 5 ימים",
    duration: 14,
    destinations: ["arusha", "serengeti", "ngorongoro"],
    type: "mountain_trekking",
    wildlifeTargets: [{ name: 'Lion', chance: 'High' }, { name: 'Leopard', chance: 'Rare' }, { name: 'Black Rhino', chance: 'Rare' }, { name: 'African Elephant', chance: 'High' }, { name: 'Cape Buffalo', chance: 'High' }, { name: 'Wildebeest', chance: 'Seasonal' }],
    priceFrom: 6607.58,
    groupSize: { min: 2, max: 4 },
    badge: "new",
    bestFor: ["couples", "solo", "wildlife-enthusiasts"],
    tagline: "מעודכן לעונת 2027.",
    metaTitle: "טיפוס קילימנג'רו וספארי | מסלול למושו + סרנגטי ונגורונגורו | EWA Safari Outfitters",
    metaDescription: "טפסו לפסגת קילימנג'רו במסלול למושו הנופי, ולאחר מכן טוסו ישירות אל הסרנגטי ומכתש נגורונגורו. 14 ימים, הזמנה רציפה אחת. החל מ-$6,607.58 לאדם.",
    overview: [
      "המסלול הזה עונה על שאלה שמטפסים שואלים יותר כמעט מכל שאלה אחרת: מה קורה אחרי הפסגה? שמונה ימים במסלול למושו של קילימנג'רו — הנחשב בקרב מדריכים למסלול המקיף ביותר של ההר, עם אחד משיעורי ההצלחה הגבוהים ביותר בהגעה לפסגה — ולאחריהם יום מנוחה מלא בארושה, ולאחר מכן טיסה ישירה אל סרנגטי ויום שלם בתוך מכתש נגורונגורו.",
      "שני החלקים סודרו בכוונה תחילה. מטפסים מסיימים את למושו מותשים פיזית, ולכן המסלול הזה כולל זמן החלמה אמיתי לפני תחילת הספארי, ומעביר אותם אל השטח הפראי באוויר במקום בנסיעה ארוכה נוספת. ארבעה עשר ימים, הזמנה אחת רציפה, ללא צורך לתאם בין מפעיל טיפוסים למפעיל ספארי נפרד.",
    ],
    highlights: [
      "פרופיל ההסתגלות המלא בן 8 הימים של מסלול למושו — אחד משיעורי ההצלחה הגבוהים ביותר בהגעה לפסגה בקילימנג'רו (כ-90-95%)",
      "יום מנוחה אמיתי המשולב במסלול ולא מדולג — החלמה אמיתית לפני תחילת הספארי",
      "טיסה מארושה ישירות אל סרנגטי, המונעת נסיעה יבשתית ארוכה שנייה",
      "יום שלם בתוך מכתש נגורונגורו, אחד המקומות האמינים ביותר באזור לצפייה בחמישייה הגדולה",
      "הזמנה אחת רציפה, קשר עם מדריך אחד — ללא צורך לתאם בין מפעיל טיפוסים למפעיל ספארי בנפרד",
    ],
    heroImage: "/images/gallery/Grand-Tanzania-Safari-lion.jpg",
    heroImageAlt: "Lioness resting alertly on a fallen tree trunk in Tarangire's savanna",
    gallery: [],
    pricingTiersProvisional: true,
    pricingTiers: [
      { pax: 2, reserve: 6607.58, sovereign: 8290.98 },
      { pax: 3, reserve: 6607.58, sovereign: 8290.98 },
      { pax: 4, reserve: 6607.58, sovereign: 8290.98 },
    ],
    included: [
      "כל דמי הכניסה לפארק הלאומי קילימנג'רו",
      "מדריך מוסמך KINAPA וצוות הר מלא",
      "ציוד קמפינג וארוחות בהר",
      "הטיסה מארושה לסרוֹנֶרה",
      "כל דמי הכניסה לפארקי הספארי ואזורי השימור",
      "סיורי ספארי",
      "לינה כמפורט לכל 13 הלילות",
    ],
    excluded: ["טיסות בינלאומיות", "אגרות ויזה", "ביטוח נסיעות", "טיפים"],
    notes: [
      "המחירים המוצגים הם לאדם בחדר זוגי/טווין משותף; תוספת תשלום לחדר יחיד זמינה לפי בקשה.",
      "התמחור המוצג מכסה 2-4 מטיילים; תעריפים ל-5-6 מטיילים זמינים לפי בקשה מהיועץ שלכם.",
      "אפשרות משתלמת יותר (השווה ברמתה ללינה מסוג Wilderness Trail) זמינה לפי בקשה ואינה מפורסמת כרמה סטנדרטית — בקשו הצעת מחיר מהיועץ שלכם.",
      "הלינה והתעריפים כפופים לזמינות ועשויים להשתנות בהתאם לתאריך הנסיעה המדויק בתוך העונה.",
    ],
    faq: [
      {
        q: "מדוע לשלב את קילימנג'רו עם ספארי במקום להזמין אותם בנפרד?",
        a: "תיאום בין מפעיל טיפוסים למפעיל ספארי נפרד משמעו שתי הזמנות, שני מערכי לוגיסטיקה, וללא ערובה שהמעבר ביניהם יטופל היטב. המסלול הזה מריץ את שניהם כהזמנה אחת רציפה, עם יום מנוחה משולב ביניהם במקום להשאיר אתכם לתאם אותו בעצמכם.",
      },
      {
        q: "האם אני זקוק ליום מנוחה בין הטיפוס לספארי?",
        a: "אנו ממליצים על כך בחום. שמונה ימים בהר, כולל ליל פסגה תובעני, משאירים את רוב המטפסים עייפים באמת — יום של החלמה אמיתית לפני תחילת הספארי הופך את המחצית השנייה של המסע למהנה הרבה יותר מאשר המשך ישיר ללא הפסקה.",
      },
      {
        q: "מדוע לטוס לסרנגטי במקום לנסוע?",
        a: "אחרי שמונה ימי טרק, נסיעה יבשתית ארוכה שנייה היא ההמשך הלא נכון. טיסה מארושה מכניסה אתכם לשטח באותו היום, מבלי להוסיף עוד שעות ברכב על גבי הדרישות הפיזיות של הטיפוס.",
      },
      {
        q: "מה שיעור ההצלחה בהגעה לפסגה במסלול הזה?",
        a: "המסלול בן 8 הימים של למושו נושא שיעור הצלחה של כ-90-95%, מהגבוהים ביותר מבין כל המסלולים הסטנדרטיים בהר — תוצאה ישירה של פרופיל ההסתגלות המורחב שלו.",
      },
      {
        q: "האם אוכל לבחור באורך מסלול למושו שונה (6 או 7 ימים) לשילוב הזה?",
        a: "כן — ניתן להחליף באפשרויות למושו בנות 6 או 7 ימים, אם כי שיעור ההצלחה הגבוה יותר של הגרסה בת 8 הימים מהווה בדרך כלל שילוב טוב יותר עם ספארי שבא בהמשך.",
      },
      {
        q: "מה כלול במחיר ומה לא?",
        a: "כלול: כל דמי הכניסה לפארק הלאומי קילימנג'רו, מדריך מוסמך KINAPA וצוות הר מלא, ציוד קמפינג וארוחות בהר, הטיסה מארושה לסרוֹנֶרה, כל דמי הכניסה לפארקי הספארי ואזורי השימור, סיורי ספארי, ולינה כמפורט לכל 13 הלילות. לא כלול: טיסות בינלאומיות, אגרות ויזה, ביטוח נסיעות וטיפים.",
      },
      {
        q: "האם ניתן להאריך את המסלול עוד, עם זנזיבר או רואנדה?",
        a: "כן — הארכת חופשת חוף בזנזיבר אחרי יום 14 היא דרך פופולרית לסיים את המסע רגועים לגמרי. שאלו את היועץ שלכם על הוספת הארכה זו או הארכת טרק גורילות ברואנדה.",
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "הגעה למושי",
        description: "העברה למלון שלכם במושי. המדריך הראשי שלכם פוגש אתכם לתדריך מקדים מלא לפני הטיפוס — בדיקת ציוד, סקירת המסלול, פרוטוקול בטיחות גובה ואסטרטגיית פסגה.",
        accommodation: "מלון במושי",
        meals: "ארוחת ערב",
      },
      {
        day: 2,
        title: "מושי → שער לונדורוסי → קמפ מטי מקובווה",
        description: "נסיעה אל שער הפארק של למושו, ולאחר מכן ברגל דרך יער הרים ירוק אל אתר המחנה מטי מקובווה (\"העץ הגדול\") — יום פתיחה יציב ונינוח.",
        accommodation: "Mti Mkubwa Camp",
        meals: "כל הארוחות",
        location: "גובה: 2,650 מ' (8,694 רגל)",
      },
      {
        day: 3,
        title: "קמפ מטי מקובווה → קמפ שירה 2",
        description: "השביל מתלול אל תוך שדות אברש ענקיים, וחוצה את רכס שירה לפני ההגעה לקמפ שירה 2 על אחו פתוח. טיפוס מתמשך עם עלייה משמעותית בגובה.",
        accommodation: "Shira 2 Camp",
        meals: "כל הארוחות",
        location: "גובה: 3,850 מ' (12,631 רגל)",
      },
      {
        day: 4,
        title: "קמפ שירה 2 → קמפ באררנקו",
        description: "מזרחה לאורך רמת שירה אל מגדל הלבה בגובה 4,650 מ' (15,256 רגל), ולאחר מכן ירידה לקמפ באררנקו — יום הסתגלות קלאסי של \"לטפס גבוה, לישון נמוך\".",
        accommodation: "Barranco Camp",
        meals: "כל הארוחות",
        location: "גובה: 4,000 מ' (13,123 רגל)",
      },
      {
        day: 5,
        title: "קמפ באררנקו → קמפ קרנגה",
        description: "קיר באררנקו — טיפוס בעזרת ידיים ורגליים, לא טיפוס טכני — מוביל אל עמק קרנגה, מקור המים האחרון בהר.",
        accommodation: "Karanga Camp",
        meals: "כל הארוחות",
        location: "גובה: 4,050 מ' (13,287 רגל)",
      },
      {
        day: 6,
        title: "קמפ קרנגה → קמפ בראפו",
        description: "טיול קצר לקמפ בראפו, עם נופים פנורמיים של הפסגה. מנוחה, ארוחת ערב מוקדמת, והכנה אחרונה לליל הפסגה.",
        accommodation: "Barafu Camp",
        meals: "כל הארוחות",
        location: "גובה: 4,700 מ' (15,420 רגל)",
      },
      {
        day: 7,
        title: "ליל הפסגה → פסגת אוהורו → קמפ מוואקה",
        description: "היציאה בין חצות ל-2 לפנות בוקר, והטיפוס עובר בין קרחוני רבמן ורצל אל נקודת סטלה, ולאחר מכן פסגת אוהורו — הפסגה והקטע הקשה ביותר במסע. ירידה לקמפ מוואקה לאחר מכן.",
        accommodation: "Mweka Camp",
        meals: "כל הארוחות",
        insiderFact: "פסגת אוהורו, בגובה 5,895 מ' (19,341 רגל), היא הנקודה הגבוהה ביותר באפריקה.",
        location: "גובה: פסגה ב-5,895 מ' (19,341 רגל), ירידה אל 3,090 מ' (10,138 רגל)",
      },
      {
        day: 8,
        title: "קמפ מוואקה → שער מוואקה → מלון",
        description: "ירידה לשער מוואקה לקבלת תעודת הפסגה, ולאחר מכן העברה בחזרה למלון שלכם במושי.",
        accommodation: "מלון במושי",
        meals: "כל הארוחות",
      },
      {
        day: 9,
        title: "יום מנוחה, ממושי לארושה",
        description: "יום שלם של החלמה אמיתית — מיטה ראויה, מקלחת אמיתית, וללא לוח זמנים. העברה לארושה בשעות אחר הצהריים או הערב, לקראת הטיסה של מחר אל סרנגטי. אורחי Wilderness Sovereign מסיימים את היום בטיול קפה בערב ב-Arusha Coffee Lodge.",
        accommodation: "ארושה, משתנה לפי רמה",
        meals: "כל הארוחות",
        accommodationByTier: {
          reserve: { name: "Kahawa House", image: "/images/lodges/kahawa-house.webp", amenities: ["wifi", "restaurant", "garden"] },
          sovereign: { name: "Arusha Coffee Lodge", image: "/images/lodges/arusha-coffee-lodge-garden-path.webp", amenities: ["wifi", "pool", "view"] },
        },
      },
      {
        day: 10,
        title: "טיסה לסרנגטי",
        description: "מטוס קל לוקח אתכם מארושה אל מסלול הנחיתה של סרוֹנֶרה בסרנגטי — ללא צורך בהעברה יבשתית נוספת. סיור ספארי אחר צהריים בהמשך.",
        accommodation: "מרכז סרנגטי, משתנה לפי רמה",
        meals: "כל הארוחות",
        accommodationByTier: {
          reserve: { name: "Lahia Tented Lodge", image: "/images/lodges/lahia-tented-lodge.webp", amenities: ["view", "restaurant"] },
          sovereign: { name: "Siringiti Serengeti Camp", image: "/images/lodges/siringiti-serengeti-camp.webp", amenities: ["wifi", "view", "restaurant"] },
        },
      },
      {
        day: 11,
        title: "יום שלם, סרנגטי",
        description: "יום שלם של מעקב אחר אוכלוסיות האריות והנמרים הקבועות של סרנגטי, ובהתאם לעונה, אחר הגירת הווילדביסט עצמה.",
        accommodation: "מרכז סרנגטי, משתנה לפי רמה",
        meals: "כל הארוחות",
        accommodationByTier: {
          reserve: { name: "Lahia Tented Lodge", image: "/images/lodges/lahia-tented-lodge.webp", amenities: ["view", "restaurant"] },
          sovereign: { name: "Siringiti Serengeti Camp", image: "/images/lodges/siringiti-serengeti-camp.webp", amenities: ["wifi", "view", "restaurant"] },
        },
      },
      {
        day: 12,
        title: "מסרנגטי לנגורונגורו",
        description: "נסיעה אל הרמות של נגורונגורו, עם סיור ספארי בדרך.",
        accommodation: "רמות נגורונגורו, משתנה לפי רמה",
        meals: "כל הארוחות",
        accommodationByTier: {
          reserve: { name: "Ngorongoro Serena Lodge", image: "/images/lodges/ngorongoro-serena-safari-lodge.webp", amenities: ["view", "restaurant"] },
          sovereign: { name: "Melia Ngorongoro Lodge", image: "/images/lodges/ngorongoro-lodge-the-rim-room-melia-collection.webp", amenities: ["view", "restaurant", "spa"] },
        },
      },
      {
        day: 13,
        title: "סיור יום במכתש נגורונגורו",
        description: "יום שלם של ירידה אל המכתש — אחד מריכוזי חיות הבר הצפופים ביותר ביבשת, בתוך מערכת אקולוגית סגורה אחת.",
        accommodation: "רמות נגורונגורו, משתנה לפי רמה",
        meals: "כל הארוחות",
        accommodationByTier: {
          reserve: { name: "Kitela Lodge", image: "/images/lodges/kitela-lodge.webp", amenities: ["pool", "view", "restaurant"] },
          sovereign: { name: "Melia Ngorongoro Lodge", image: "/images/lodges/ngorongoro-lodge-the-rim-room-melia-collection.webp", amenities: ["view", "restaurant", "spa"] },
        },
      },
      {
        day: 14,
        title: "יציאה",
        description: "סיור ספארי בוקר אחרון, ולאחר מכן העברה בחזרה לארושה לטיסה הבינלאומית הממשיכה שלכם.",
        accommodation: "לא רלוונטי",
        meals: "ארוחת בוקר",
      },
    ],
  },

  // ─── 5-Day Kilimanjaro Extension Safari ──────────────────────────────────────
  {
    slug: "kilimanjaro-extension-safari",
    name: "ספארי הארכה בן 5 ימים אחרי קילימנג'רו",
    duration: 5,
    destinations: ["arusha", "tarangire", "serengeti", "ngorongoro"],
    type: "big_five_game_drives",
    wildlifeTargets: [{ name: 'African Elephant', chance: 'High' }, { name: 'Lion', chance: 'High' }, { name: 'Cheetah', chance: 'High' }, { name: 'Black Rhino', chance: 'Rare' }, { name: 'Cape Buffalo', chance: 'High' }, { name: 'Maasai Giraffe', chance: 'High' }],
    priceFrom: 2118.96,
    groupSize: { min: 2, max: 6 },
    badge: "new",
    bestFor: ["solo", "couples", "wildlife-enthusiasts"],
    tagline: "מעודכן לעונת 2027.",
    metaTitle: "ספארי הארכה אחרי קילימנג'רו | 5 ימים אחרי הטיפוס | EWA Safari Outfitters",
    metaDescription: "רק ירדתם מההר? המשיכו ישירות אל עדרי הפילים של טרנגירה, הסרנגטי ומכתש נגורונגורו — איסוף ממושי, ללא צורך לטוס הביתה קודם. החל מ-$2,118.96 לאדם.",
    overview: [
      "רוב המטפסים מבלים חודשים בהכנה להר ובקושי חושבים על מה שקורה אחריו. המסלול הזה נבנה עבור המחצית השנייה של אותו מסע — חמישה ימים שמתחילים באיסוף מעיירת מושי עצמה, לא בטיסה חזרה לשדה תעופה קודם, וממשיכים ישירות אל עדרי הפילים של טרנגירה, יום שלם בסרנגטי, ירידה למכתש נגורונגורו, ובוקר תרבותי מסיים במטו וה מבו לפני ההעברה לשדה התעופה הבינלאומי קילימנג'רו.",
      "ההיגיון פשוט: אתם כבר בטנזניה, כבר מסתגלים לשהות הרחק מהבית, ועיירות השער של המעגל הצפוני נמצאות נסיעה קצרה ממקום שבו רוב הטרקים מסתיימים. הזמנת זה כמסע רציף אחד — במקום לטוס הביתה ולתכנן ביקור חזרה נפרד — היא בדרך כלל גם זולה יותר וגם פשוטה יותר מהחלופה. אנו ממליצים על לפחות יום מנוחה אחד במושי לפני ההתחלה, במיוחד לאחר מסלול בן 8 ימים עם ליל פסגה תובעני.",
    ],
    highlights: [
      "מתחיל במושי, לא בארושה או בשדה תעופה — נבנה במיוחד עבור מטפסים היורדים ישירות מההר",
      "עדרי הפילים ועצי הבאובב העתיקים של טרנגירה, פרק הפתיחה הקלאסי של המעגל הצפוני",
      "יום שלם בסרנגטי, במעקב אחר אריות וברדלסים על פני המישורים הפתוחים",
      "ירידה מלאה אל מכתש נגורונגורו, אחד המקומות האמינים ביותר במזרח אפריקה לצפייה בחמישייה הגדולה",
      "בוקר תרבותי במטו וה מבו לסיום המסע, לפני ההעברה לשדה התעופה הבינלאומי קילימנג'רו",
      "ללא צורך לטוס הביתה קודם — מסע רציף אחד, בדרך כלל פשוט וחסכוני יותר מתכנון ביקור חזרה נפרד",
    ],
    heroImage: "/images/gallery/tarangire-elephants-baobab.webp",
    heroImageAlt: "Two elephants with tusks foraging together in tall grass in Tarangire National Park",
    gallery: [
      { src: "/images/gallery/serengeti-lion-pride.webp", alt: "Lion pride with a maned male leading lionesses through golden grass on the Serengeti plains" },
    ],
    pricingTiersProvisional: false,
    pricingTiers: [
      { pax: 2, trail: 2789.38 },
      { pax: 3, trail: 2454.17 },
      { pax: 4, trail: 2286.56 },
      { pax: 5, trail: 2186.00 },
      { pax: 6, trail: 2118.96 },
    ],
    included: [
      "כל דמי הכניסה לפארקים ולאזורי השימור",
      "רכב, מדריך ודלק לאורך כל המסע",
      "פנסיון מלא במתחמי הספארי",
      "לינה וארוחת בוקר בלילה הראשון",
      "מי שתייה",
      "כיסוי חירום של AMREF Flying Doctors",
    ],
    excluded: ["טיסות בינלאומיות", "אגרות ויזה", "ביטוח נסיעות", "טיפים", "פעילויות אופציונליות"],
    notes: [
      "המחירים המוצגים הם לאדם בחדר זוגי/טווין משותף; תוספת תשלום לחדר יחיד זמינה לפי בקשה.",
      "עלויות הרכב, המדריך והדיזל מתחלקות בין חברי הקבוצה, כך שהמחיר לאדם יורד באופן משמעותי ככל שמצטרפים יותר מטיילים.",
      "המסלול הזה נבנה כדי להתחיל ממושי, שם מסתיימים רוב טרקי קילימנג'רו — האיסוף מתואם ישירות מהמלון שלכם.",
      "הלינה והתעריפים כפופים לזמינות ועשויים להשתנות בהתאם לתאריך הנסיעה המדויק בתוך העונה.",
    ],
    faq: [
      {
        q: "האם עליי לטוס הביתה לפני תחילת הספארי הזה?",
        a: "לא — המסלול הזה נבנה במיוחד כדי להתחיל ממושי, שם מסתיימים רוב טרקי קילימנג'רו. האיסוף מתואם ישירות מהמלון שלכם; אין צורך לעבור דרך שדה התעופה הבינלאומי קילימנג'רו קודם.",
      },
      {
        q: "כמה זמן אחרי הגעה לפסגה אפשר להתחיל את הספארי?",
        a: "אנו ממליצים על לפחות יום מנוחה אחד במושי לפני ההתחלה, במיוחד לאחר מסלולים עם ליל פסגה תובעני. מעבר לכך, המסלול הזה יכול להתחיל ברגע שאתם מוכנים — שוחחו עם היועץ שלכם על התזמון המדויק שמתאים לתאריכי הטיפוס שלכם.",
      },
      {
        q: "האם 5 ימים מספיקים לספארי ראוי אחרי טיפוס גדול?",
        a: "כן — המסלול הזה נבנה כדי לנוע ביעילות מבלי להרגיש נחפז: יום שלם כל אחד בטרנגירה ובסרנגטי, יום מכתש מלא בנגורונגורו, ועצירה תרבותית אמיתית — הכול בתוך חמישה ימים.",
      },
      {
        q: "האם אהיה עייף מדי מהטיפוס כדי ליהנות מספארי מיד לאחריו?",
        a: "רוב המטפסים מוצאים שימי ספארי קלים משמעותית מימי טרק — אתם יושבים ברכב במקום ללכת, והקצב שונה לחלוטין. עם זאת, אנו ממליצים על יום מנוחה לפני ההתחלה אם הרגליים שלכם זקוקות לכך.",
      },
      {
        q: "כמה משתנה המחיר בהתאם לגודל הקבוצה?",
        a: "עלויות הרכב, המדריך והדיזל מתחלקות בין חברי הקבוצה, כך שהמחיר לאדם יורד באופן משמעותי ככל שמצטרפים יותר מטיילים — ראו את טבלת התמחור לעיל.",
      },
      {
        q: "מה כלול במחיר ומה לא?",
        a: "כלול: כל דמי הכניסה לפארקים ולאזורי השימור, רכב/מדריך/דלק לאורך כל המסע, פנסיון מלא במתחמי הספארי, לינה וארוחת בוקר בלילה הראשון, מי שתייה, וכיסוי חירום של AMREF Flying Doctors. לא כלול: טיסות בינלאומיות, אגרות ויזה, ביטוח נסיעות, טיפים ופעילויות אופציונליות.",
      },
      {
        q: "האם ניתן לשלב זאת עם מסלול קילימנג'רו ספציפי?",
        a: "כן — הארכה זו מתאימה לכל אחד משישה מסלולי קילימנג'רו שלנו. אם עדיין לא הזמנתם את הטיפוס, שאלו את היועץ שלכם על שילוב הספארי הזה ישירות עם מסלול למושו, מאצ'אמה או מסלול אחר.",
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "ממושי לארושה",
        description: "איסוף ישירות מהמלון שלכם במושי — ללא צורך לתאם העברת שדה תעופה נפרדת או טיסה קודם. הנסיעה לארושה עוברת דרך שדות חקלאיים ומטעי קפה למרגלות הר מרו, עם זמן לנוח לפני היציאה המוקדמת מחר אל הפארקים.",
        accommodation: "Kahawa House",
        meals: "לינה וארוחת בוקר",
        accommodationByTier: { trail: { name: "Kahawa House", image: "/images/lodges/kahawa-house.webp", amenities: ["wifi", "restaurant", "garden"] } },
      },
      {
        day: 2,
        title: "מארושה לפארק הלאומי טרנגירה",
        description: "הנסיעה דרומה מובילה אל מישורי טרנגירה המנוקדים בעצי באובב, ביתם של חלק מעדרי הפילים הגדולים ביותר בטנזניה — ניגוד בולט אחרי ימים שבהם הבטתם למעלה אל ההר במקום החוצה אל השיח הפתוח.",
        accommodation: "Lake Burunge Baobab Tented Lodge",
        meals: "פנסיון מלא",
        accommodationByTier: { trail: { name: "Lake Burunge Baobab Tented Lodge", image: "/images/lodges/lake-burunge-baobab-tented-lodge.webp", amenities: ["restaurant", "wildlife-view"] } },
      },
      {
        day: 3,
        title: "מקאראטו לסרנגטי",
        description: "יום מעבר שלם מערבה, כניסה לאזור השימור של נגורונגורו לפני ההמשך אל סרנגטי עצמה — המישורים המפורסמים ביותר באפריקה, ועבור מטפסים רבים, הסיבה שבגללה היה שווה לתכנן הארכת ספארי מלכתחילה.",
        accommodation: "Serengeti Katikati Camp",
        meals: "פנסיון מלא",
        accommodationByTier: { trail: { name: "Serengeti Katikati Camp", image: "/images/lodges/serengeti-katikati-camp.webp", amenities: ["ensuite", "restaurant", "wildlife-view"] } },
      },
      {
        day: 4,
        title: "מסרנגטי למכתש נגורונגורו",
        description: "הנסיעה בחזרה לעבר נגורונגורו, וירידה אל רצפת המכתש ליום שלם בין חיות החמישייה הגדולה בתוך אחד מריכוזי היונקים הגדולים הצפופים ביותר בעולם.",
        accommodation: "Ngorongoro Farm House",
        meals: "פנסיון מלא",
        insiderFact: "מכתש נגורונגורו הוא מערכת אקולוגית סגורה בשטח של כ-260 קמ״ר — רוב החיות המתגוררות בו לעולם אינן עוזבות אותו.",
        accommodationByTier: { trail: { name: "Ngorongoro Farm House", image: "/images/lodges/ngorongoro-farm-house.webp", amenities: ["restaurant", "garden"] } },
      },
      {
        day: 5,
        title: "טיול תרבותי במטו וה מבו והעברה לשדה התעופה JRO",
        description: "בוקר תרבותי אחרון בעיירת השוק מטו וה מבו — עצירה אמיתית וללא חיפזון ולא הזדמנות צילום נחפזת — לפני הנסיעה לשדה התעופה הבינלאומי קילימנג'רו לטיסת ההמשך שלכם.",
        accommodation: "לא רלוונטי",
        meals: "פנסיון מלא",
      },
    ],
  },

  // ─── 5-Day Comfort Tanzania Safari ───────────────────────────────────────────
  {
    slug: "5-day-comfort-tanzania-safari",
    name: "ספארי נוחות בטנזניה בן 5 ימים",
    duration: 5,
    destinations: ["tarangire", "ngorongoro", "serengeti", "manyara"],
    type: "big_five_game_drives",
    wildlifeTargets: [{ name: 'African Elephant', chance: 'High' }, { name: 'Lion', chance: 'High' }, { name: 'Black Rhino', chance: 'High' }, { name: 'Cheetah', chance: 'High' }, { name: 'Flamingo', chance: 'Seasonal' }, { name: 'Blue Monkey', chance: 'Rare' }],
    priceFrom: 1909,
    groupSize: { min: 1, max: 8 },
    badge: "popular",
    bestFor: ["couples", "first-time", "families"],
    metaDescription: "המעגל הצפוני המלא של טנזניה ב-5 ימים בלבד — טרנגירה, נגורונגורו, סרנגטי ואגם מניארה — בספארי פרטי ומודרך במלואו, בקצב נוח. החל מ-1,909$ לאדם.",
    overview: [
      "חמישה ימים הם מסלול ההמראה המינימלי הדרוש כדי לחוות את המעגל הצפוני כראוי, והמסלול הזה לא מבזבז אף אחד מהם.",
      "הוא נע מהר אך לעולם לא מרגיש נחפז: יום בין עצי הבאובב העתיקים של טרנגירה וחלק מעדרי הפילים הגדולים ביותר באפריקה, ירידה מלאה אל מכתש נגורונגורו לחמישייה הגדולה ולקרנף שחור, יום וחצי בסרנגטי במעקב אחר אריות וברדלסים על פני המישורים הפתוחים, ועצירה אחרונה באגם מניארה לאריות המטפסים על עצים ולחופים המלאים בפלמינגו. זהו המסלול שאנו ממליצים עליו לרוב למטיילי ספארי בפעם הראשונה ולזוגות בלוח זמנים צפוף יותר — כל סיפור המעגל הצפוני, דחוס מבלי להיקטע.",
    ],
    highlights: [
      "המעגל הצפוני המלא ב-5 ימים — טרנגירה, נגורונגורו, סרנגטי ומניארה",
      "יערות באובב עתיקים ועדרי הפילים הגדולים ביותר באפריקה",
      "ירידה אל מכתש נגורונגורו — חמישייה גדולה וקרנף שחור",
      "סיורי ספארי בסרנגטי — אריות, ברדלסים וההגירה הגדולה",
      "אריות מטפסי עצים ופלמינגו באגם מניארה",
    ],
    heroImage: "/images/gallery/lion-sleeping-tree-branch-serengeti.jpg",
    heroImageAlt: "Lion sleeping stretched out on a tree branch in the Serengeti",
    gallery: [],
    included: [
      "טויוטה לנד קרוזר פרטית 4x4 עם גג נפתח",
      "נהג-מדריך פרטי מקצועי",
      "כל הלינה (4 לילות)",
      "כל דמי הכניסה לפארקים — טרנגירה, נגורונגורו, סרנגטי, אגם מניארה",
      "ארוחות פנסיון מלא (לינה וארוחת בוקר בלילה הראשון)",
      "מי שתייה ללא הגבלה ברכב",
      "ביטוח חירום של AMREF Flying Doctors",
      "העברת הגעה משדה התעופה",
    ],
    excluded: [
      "טיסות בינלאומיות או פנימיות",
      "ויזת כניסה לטנזניה (כ-50$)",
      "טיפים ותשרים",
      "פריטים אישיים וכביסה",
      "פעילויות אופציונליות",
      "ביטוח נסיעות מעבר לכיסוי AMREF",
    ],
    includedCategorized: {
      transfers: ["העברת הגעה משדה התעופה ביום 1", "כל ההעברות בין היעדים לאורך הספארי"],
      accommodationMeals: [
        "לינה וארוחת בוקר ב-Kahawa House (לילה 1)",
        "פנסיון מלא — כל הארוחות במתחמי הספארי (לילות 2-4)",
        "לינה בהתאם למסלול",
      ],
      guidingGameDrives: [
        "כל דמי הכניסה לפארקים — טרנגירה, אזור השימור נגורונגורו (מעבר + מכתש), סרנגטי, אגם מניארה",
        "כל סיורי הספארי בטויוטה לנד קרוזר פרטית 4x4 עם גג נפתח",
        "נהג-מדריך פרטי מקצועי לאורך כל המסע",
        "ביטוח חירום של AMREF Flying Doctors",
        "מי שתייה ללא הגבלה ברכב",
        "משקאות קלים ובירות נבחרים ברכב",
      ],
    },
    excludedCategorized: [
      "טיסות בינלאומיות או פנימיות",
      "ויזת כניסה לטנזניה (כ-50$ לרוב האזרחויות)",
      "טיפים ותשרים למדריך ולצוות הקמפ",
      "פריטים אישיים, כביסה וחיובי טלפון",
      "פעילויות אופציונליות (ספארי בלון $550 לאדם, ביקור בכפר מאסאי $25 לאדם, מעקב קרנפים $120 לאדם, ספארי הליכה $59 לאדם)",
      "ביטוח נסיעות מעבר לכיסוי AMREF Flying Doctors",
    ],
    notes: [
      "המחירים המוצגים הם לאדם בחדר זוגי/טווין משותף; תוספת תשלום לחדר יחיד זמינה לפי בקשה.",
      "הלינה והתעריפים כפופים לזמינות ועשויים להשתנות בהתאם לתאריך הנסיעה המדויק בתוך העונה.",
      "דמי הכניסה לפארקים הלאומיים ולאזורי השימור בטנזניה נקבעים על ידי הממשלה וכפופים לשינויים ללא הודעה מוקדמת.",
      "נדרש מקדמה של 10% לאישור ההזמנה; היתרה לתשלום לפחות 28 יום לפני היציאה.",
    ],
    pricingTiers: [
      { pax: 2, trail: 2486 },
      { pax: 3, trail: 2200 },
      { pax: 4, trail: 2061 },
      { pax: 5, trail: 1982 },
      { pax: 6, trail: 1909 },
    ],
    itinerary: [
      {
        day: 1,
        title: "הגעה לארושה",
        description: "הגעה לשדה התעופה של ארושה (ARK) או לשדה התעופה הבינלאומי קילימנג'רו (JRO) ומפגש עם נציג EWA Safari Outfitters שלכם. קבלת פנים חמה ותדריך קצר לפני העברה נוחה ל-Kahawa House — מתחם מקסים וממוקם היטב בארושה, ונקודת זינוק אידיאלית לימים הבאים. מנוחה טובה; השיח מתחיל מחר.",
        accommodation: "Kahawa House",
        meals: "ארוחת ערב וארוחת בוקר",
        insiderFact: "ארושה נמצאת בגובה 1,400 מ' — חיץ הסתגלות נוח לפני הפארקים. רוב מפעילי הספארי מטפלים ומחדשים ציוד ברכביהם כאן בין המסעות.",
        accommodationByTier: {
          // TEMP: hotlinked placeholder photos pending real EWA/licensed images.
          trail: { name: "Kahawa House", image: "/images/lodges/kahawa-house.webp", amenities: ["wifi", "restaurant", "garden"] },
        },
      },
      {
        day: 2,
        title: "הפארק הלאומי טרנגירה",
        description: "אחרי ארוחת הבוקר, המדריך הפרטי שלכם אוסף אתכם לנסיעה בת 2.5 שעות דרומה לטרנגירה. עצי הבאובב העתיקים — חלקם בני למעלה מ-1,000 שנה — מתנשאים מהאדמה האדומה כמו זקיפים, ועדרי הפילים הנעים מתחתם במספרים שעוצרים אתכם באמצע משפט מגדירים את המעגל הצפוני. נהר טרנגירה מושך ריכוזים יוצאי דופן של חיות בר בעונת היובש; אריות, נמרים, זברות, ג'ירפות, אוריקס ומעל 500 מיני ציפורים מתפזרים על פני השטח המגוון של הפארק. ארוחת צהריים באתר פיקניק נופי בתוך הפארק; יציאה בשעות אחר הצהריים המאוחרות אל הלודג' באוהלים על גדות אגם בורונגה.",
        accommodation: "Lake Burunge Baobab Tented Lodge",
        meals: "פנסיון מלא",
        insiderFact: "לטרנגירה יש את צפיפות הפילים הגבוהה ביותר מבין פארקי המעגל הצפוני — עדרים של 200 פילים ומעלה אינם נדירים בעונת היובש, כאשר הנהר הוא מקור המים היחיד לאורך קילומטרים רבים.",
        accommodationByTier: {
          trail: { name: "Lake Burunge Baobab Tented Lodge", image: "/images/lodges/lake-burunge-baobab-tented-lodge.webp", amenities: ["pool", "wifi", "restaurant", "lake-view"] },
        },
      },
      {
        day: 3,
        title: "מכתש נגורונגורו והפארק הלאומי סרנגטי",
        description: "יציאה מוקדמת אל שפת מכתש נגורונגורו — עצירה בנקודת התצפית: 20 קילומטרים ברוחב, 600 מטר בעומק, 25,000 יונקים גדולים המתגוררים בו דרך קבע. הירידה מתחילה בדרך עפר מתפתלת. בפנים: גאוות אריות רגועות סביב הרכבים, עדרי זברות וווילדביסט עצומים, בריכת ההיפופוטמים נגוֹיטוֹקְטוֹק כעצירת ארוחת הצהריים, פלמינגו על אגם הסודה, וסיכוי לצפייה בקרנף שחור — האוכלוסייה האמינה ביותר לצפייה במזרח אפריקה. אחרי סיור המכתש המלא, הנסיעה ממשיכה מזרחה אל סרנגטי בזמן לקוקטיילי שקיעה בקמפ האוהלים שלכם.",
        accommodation: "Kubukubu Tented Lodge, סרנגטי",
        meals: "פנסיון מלא",
        insiderFact: "נגורונגורו היא מערכת אקולוגית סגורה — קירות המכתש בגובה 600 מ' הכילו אוכלוסיית חיות בר עצמאית במשך מיליוני שנים, מה שהופך אותה לריכוז היונקים הגדולים הצפוף ביותר בעולם.",
        accommodationByTier: {
          trail: { name: "Kubukubu Tented Lodge", image: "/images/lodges/kubukubu-tented-lodge.webp", amenities: ["ensuite", "restaurant", "wildlife-view"] },
        },
      },
      {
        day: 4,
        title: "יום שלם בפארק הלאומי סרנגטי",
        description: "סיור ספארי מוקדם בבוקר כשהשיח מתעורר לחיים — גאוות אריות חוזרות מציד לילי, ברדלסים המשתמשים בגבעות טרמיטים כעמדות תצפית, פילים חוצים את המישורים באוויר הבוקר הקריר. סרנגטי משתרעת על פני 14,763 קמ״ר ומארחת את ריכוז הטורפים הגדול ביותר באפריקה. מעגל ההגירה הגדולה עובר כאן מדי שנה; המדריך שלכם יודע את מיקום העדרים הנוכחי. ארוחת צהריים בשער נאבי היל, סיורי אחר הצהריים נמשכים עד שהפארק קובע את הקצב, ולאחר מכן יציאה לעבר קאראטו ולינה ב-Ngorongoro Farm House ביער הרמות.",
        accommodation: "Ngorongoro Farm House, קאראטו",
        meals: "פנסיון מלא",
        insiderFact: "סרנגטי מארחת למעלה מ-3,000 אריות — האוכלוסייה הגדולה ביותר מבין כל שטח מוגן בעולם, והנראית ביותר באופן עקבי למבקרים.",
        accommodationByTier: {
          trail: { name: "Ngorongoro Farm House", image: "/images/lodges/ngorongoro-farm-house.webp", amenities: ["wifi", "restaurant", "highland-garden", "farm"] },
        },
      },
      {
        day: 5,
        title: "אגם מניארה וחזרה לארושה",
        description: "בוקר אחרון בשיח. אחרי ארוחת הבוקר, הנסיעה בת השעה לאגם מניארה עוברת דרך הרמות החקלאיות — מטעי קפה וחורשות בננה לפני הירידה אל רצפת בקע השבר. מניארה מפורסמת באריות המטפסים על עצים שלה, התנהגות המתועדת כאן למעלה משישים שנה ואינה נמצאת בשום מקום אחר במזרח אפריקה מחוץ לאישאשה שבאוגנדה. הפארק מכיל טווח יוצא דופן של בתי גידול: יער מי תהום צפוף עם פילים וקופי כחול, מישורי הצפה פתוחים, ואגם הסודה המלא בפלמינגו על רקע מצוק בקע השבר הדרמטי. סיור ספארי, ארוחת צהריים פיקניק בתוך הפארק, ולאחר מכן צפונה לארושה להעברת הפרידה שלכם.",
        accommodation: "יציאה",
        meals: "ארוחת בוקר וארוחת צהריים",
      },
    ],
  },

  // ─── 6-Day Comfort Tanzania Safari ───────────────────────────────────────────
  {
    slug: "6-day-comfort-tanzania-safari",
    name: "ספארי נוחות בטנזניה בן 6 ימים",
    duration: 6,
    destinations: ["tarangire", "serengeti", "ngorongoro", "manyara"],
    type: "big_five_game_drives",
    bestMonths: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    wildlifeTargets: [{ name: 'African Elephant', chance: 'High' }, { name: 'Lion', chance: 'High' }, { name: 'Cheetah', chance: 'High' }, { name: 'Black Rhino', chance: 'High' }, { name: 'Cape Buffalo', chance: 'High' }, { name: 'Hippopotamus', chance: 'High' }],
    priceFrom: 2554,
    groupSize: { min: 1, max: 8 },
    bestFor: ["couples", "first-time", "families", "wildlife-enthusiasts"],
    metaDescription: "ספארי מעגל צפוני בן 6 ימים עם יומיים מלאים בסרנגטי, בנוסף לעדרי הפילים המרשימים של טרנגירה ולירידה מלאה אל מכתש נגורונגורו. החל מ-2,554$ לאדם.",
    overview: [
      "זהו האח הגדול של ספארי הנוחות בן 5 הימים — אותו מעגל צפוני, יום אחד נוסף, והיום הזה מוקדש כולו לסרנגטי.",
      "הלילה הנוסף מקנה לכם סיור ספארי אמיתי בשעות הבוקר המוקדמות בסרנגטי, כאשר הטורפים הכי פעילים, בנוסף ליערות הבאובב העתיקים ולעדרי הפילים השיאיים של טרנגירה, ירידה מלאה אל מכתש נגורונגורו לחמישייה הגדולה ולקרנף שחור, ואריות מטפסי העצים של אגם מניארה. זהו שינוי קטן על הנייר — יום אחד נוסף, פארק אחד המבוקר פעמיים במקום פעם אחת — אך בנוף הבנוי סביב תצפיות בלתי צפויות בחיות בר, היום הנוסף הזה בסרנגטי הוא לרוב ההבדל בין לראות את המעגל לבין לחוות אותו באמת.",
    ],
    highlights: [
      "יומיים שלמים בסרנגטי — היום הנוסף שמשנה הכול",
      "עדרי הפילים ויערות הבאובב העתיקים של טרנגירה",
      "ירידה מלאה למכתש נגורונגורו — חמישייה גדולה וקרנף שחור",
      "אריות מטפסי עצים ופלמינגו באגם מניארה",
      "סיור ספארי בבוקר מוקדם בסרנגטי כאשר הטורפים הכי פעילים",
    ],
    heroImage: "/images/gallery/wildebeest-herd-migration-serengeti-plains.jpg",
    heroImageAlt: "Wildebeest herd migrating across the open Serengeti plains near a solitary tree",
    gallery: [],
    included: [
      "טויוטה לנד קרוזר פרטית 4x4 עם גג נפתח",
      "נהג-מדריך פרטי מקצועי",
      "כל הלינה (5 לילות)",
      "כל דמי הכניסה לפארקים — טרנגירה, סרנגטי (יומיים), נגורונגורו, אגם מניארה",
      "ארוחות פנסיון מלא לאורך כל המסע (ארוחת ערב וארוחת בוקר בלילה הראשון)",
      "מי שתייה ללא הגבלה ברכב",
      "ביטוח חירום של AMREF Flying Doctors",
      "כל ההעברות משדה התעופה ובין היעדים",
    ],
    excluded: [
      "טיסות בינלאומיות או פנימיות",
      "ויזת כניסה לטנזניה (כ-50$)",
      "טיפים ותשרים",
      "פריטים אישיים וכביסה",
      "פעילויות אופציונליות",
      "ביטוח נסיעות מעבר לכיסוי AMREF",
    ],
    includedCategorized: {
      transfers: ["העברת הגעה משדה התעופה ביום 1", "כל ההעברות בין היעדים לאורך הספארי"],
      accommodationMeals: [
        "ארוחת ערב וארוחת בוקר ב-Kahawa House (לילה 1)",
        "פנסיון מלא בכל מתחמי הספארי (לילות 2-5)",
        "לינה בהתאם למסלול",
      ],
      guidingGameDrives: [
        "כל דמי הכניסה לפארקים — טרנגירה, סרנגטי (יומיים), אזור השימור נגורונגורו (מעבר + מכתש), אגם מניארה",
        "כל סיורי הספארי בטויוטה לנד קרוזר פרטית 4x4 עם גג נפתח",
        "נהג-מדריך פרטי מקצועי לאורך כל המסע",
        "ביטוח חירום של AMREF Flying Doctors",
        "מי שתייה ללא הגבלה ברכב",
        "משקאות קלים ובירות נבחרים ברכב",
      ],
    },
    excludedCategorized: [
      "טיסות בינלאומיות או פנימיות",
      "ויזת כניסה לטנזניה (כ-50$ לרוב האזרחויות)",
      "טיפים ותשרים למדריך ולצוות הקמפ",
      "פריטים אישיים, כביסה וחיובי טלפון",
      "פעילויות אופציונליות (ספארי בלון $550 לאדם, ביקור בכפר מאסאי $25 לאדם, מעקב קרנפים $120 לאדם, ספארי הליכה $59 לאדם)",
      "ביטוח נסיעות מעבר לכיסוי AMREF Flying Doctors",
    ],
    notes: [
      "המחירים המוצגים הם לאדם בחדר זוגי/טווין משותף; תוספת תשלום לחדר יחיד זמינה לפי בקשה.",
      "הלינה והתעריפים כפופים לזמינות ועשויים להשתנות בהתאם לתאריך הנסיעה המדויק בתוך העונה.",
      "דמי הכניסה לפארקים הלאומיים ולאזורי השימור בטנזניה נקבעים על ידי הממשלה וכפופים לשינויים ללא הודעה מוקדמת.",
      "נדרש מקדמה של 10% לאישור ההזמנה; היתרה לתשלום לפחות 28 יום לפני היציאה.",
    ],
    pricingTiers: [
      { pax: 2, trail: 3226 },
      { pax: 3, trail: 2825 },
      { pax: 4, trail: 2729 },
      { pax: 5, trail: 2642 },
      { pax: 6, trail: 2554 },
    ],
    itinerary: [
      {
        day: 1,
        title: "הגעה לארושה",
        description: "הגעה לשדה התעופה של ארושה (ARK) או לשדה התעופה הבינלאומי קילימנג'רו (JRO) ומפגש עם נציג EWA Safari Outfitters שלכם. העברה ל-Kahawa House — מתחם נוח ובעל אופי בארושה המשמש כלילה הראשון האידיאלי בטנזניה. לנוח, להתמקם ולהתכונן למה שחמשת הימים הבאים צופנים.",
        accommodation: "Kahawa House",
        meals: "ארוחת ערב וארוחת בוקר",
        insiderFact: "ארושה נמצאת בגובה 1,400 מ' — ערבים קרירים הם דבר שכיח. בירת ההרפתקאות של טנזניה היא שער הכניסה לקילימנג'רו, לסרנגטי ולכל המעגל הצפוני.",
        accommodationByTier: {
          // TEMP: hotlinked placeholder photos pending real EWA/licensed images.
          trail: { name: "Kahawa House", image: "/images/lodges/kahawa-house.webp", amenities: ["wifi", "restaurant", "garden"] },
        },
      },
      {
        day: 2,
        title: "הפארק הלאומי טרנגירה",
        description: "אחרי ארוחת הבוקר, המדריך הפרטי שלכם אוסף אתכם לנסיעה בת שעתיים דרומה לטרנגירה. עצי הבאובב העתיקים של הפארק — חלקם בני למעלה מ-1,000 שנה — ועדרי הפילים הנעים מתחתם במספרים יוצאי דופן מגדירים את החוויה. טנזניה היא ביתה של אוכלוסיית הפילים האפריקאים הגדולה בעולם, וטרנגירה מחזיקה בריכוז הגבוה ביותר במעגל הצפוני. נהר טרנגירה הופך למקור המים היחיד למאות קילומטרים בעונת היובש, ומושך אריות, תאואים, זברות, נמרים ומעל 500 מיני ציפורים. ארוחת צהריים ארוזה באתר פיקניק נופי; יציאה בשעות אחר הצהריים המאוחרות אל הלודג' על גדות אגם בורונגה.",
        accommodation: "Lake Burunge Baobab Tented Lodge",
        meals: "פנסיון מלא",
        insiderFact: "בעונת היובש (יוני-אוקטובר), נהר טרנגירה הוא מקור המים הקבוע היחיד למאות קילומטרים — בעלי חיים מתכנסים בריכוזים המתחרים בכל פארק ביבשת.",
        accommodationByTier: {
          trail: { name: "Lake Burunge Baobab Tented Lodge", image: "/images/lodges/lake-burunge-baobab-tented-lodge.webp", amenities: ["pool", "wifi", "restaurant", "lake-view"] },
        },
      },
      {
        day: 3,
        title: "הפארק הלאומי סרנגטי — הגעה וסיור ספארי ראשון",
        description: "הנסיעה מטרנגירה לסרנגטי עוברת דרך אזור השימור נגורונגורו לפני הירידה אל המישורים. \"סירינגיטי\" במאסאית פירושה \"ארץ המישורים האינסופיים\" — וכשאתם רואים לראשונה את סרנגטי משתרעת עד האופק בכל כיוון, השם מרגיש בלתי נמנע. אתם מגיעים בשעות הבוקר המאוחרות ומתחילים את סיור הספארי הראשון שלכם מיד. מישורי העשב הקצר של דרום סרנגטי הם שטח ברדלסים מובהק; מערכות הנהרות מכילות נמרים; המישורים הפתוחים מספקים תצפיות אריות בסדירות יוצאת דופן. קוקטיילי שקיעה על מרפסת קובוקובו כשהמישורים הופכים לענבר בדמדומים.",
        accommodation: "Kubukubu Tented Lodge, סרנגטי",
        meals: "פנסיון מלא",
        insiderFact: "סרנגטי מארחת את צפיפות הטורפים הגדולים הגבוהה ביותר מבין כל המערכות האקולוגיות בעולם — למעלה מ-3,000 אריות, למעלה מ-1,000 ברדלסים, ואינספור נמרים ביערות הגדה.",
        accommodationByTier: {
          trail: { name: "Kubukubu Tented Lodge", image: "/images/lodges/kubukubu-tented-lodge.webp", amenities: ["ensuite", "restaurant", "wildlife-view"] },
        },
      },
      {
        day: 4,
        title: "יום שלם בפארק הלאומי סרנגטי",
        description: "התחלה מוקדמת — השיח באור הראשון אינו דומה לשום דבר אחר. גאוות אריות חוזרות מציד לילי. ברדלסים משתמשים בגבעות טרמיטים כעמדות תצפית. פילים חוצים את המישורים באוויר הבוקר הקריר. היום השלם הזה כולו שלכם בתוך הפארק — המדריך שלכם עוקב אחר חיות הבר, לא אחר מסלול קבוע. ארוחת צהריים באתר הפיקניק בשער נאבי היל, עם נופים על פני המישורים. סיור אחר הצהריים נמשך עד שהפארק קובע את הקצב. זהו היום שבו הספארי בן 6 הימים זוכה לייחוד שלו לעומת המסלול בן 5 הימים — זמן בסרנגטי הוא המטבע היקר ביותר שאתם יכולים להוציא כאן.",
        accommodation: "Kubukubu Tented Lodge, סרנגטי",
        meals: "פנסיון מלא",
        insiderFact: "ההגירה הגדולה של הווילדביסט היא תנועה מתמשכת — העדרים נמצאים אי שם במערכת האקולוגית של סרנגטי בכל יום בשנה. המדריך שלכם עוקב אחר מיקומם בזמן אמת.",
        accommodationByTier: {
          trail: { name: "Kubukubu Tented Lodge", image: "/images/lodges/kubukubu-tented-lodge.webp", amenities: ["ensuite", "restaurant", "wildlife-view"] },
        },
      },
      {
        day: 5,
        title: "מכתש נגורונגורו",
        description: "נסיעה בת שעה מסרנגטי מביאה אתכם אל שפת מכתש נגורונגורו. עמדו כאן: המכתש צונח 600 מטרים מתחתיכם, 20 קילומטרים ברוחב, ורצפתו עולם עצמאי של אגם, ביצה, שדות עשב ויער. הירידה מתחילה בדרך עפר מתפתלת אל תוך הקלדרה. בפנים: כ-25,000 יונקים גדולים — כולל החמישייה הגדולה. אוכלוסיית הקרנפים השחורים בתוך נגורונגורו היא האמינה ביותר לצפייה במזרח אפריקה. בריכת ההיפופוטמים נגוֹיטוֹקְטוֹק היא עצירת ארוחת הצהריים. פלמינגו מקיפים את אגם הסודה. אחרי סיור המכתש המלא, עלייה בחזרה אל Ngorongoro Farm House ביער הרמות.",
        accommodation: "Ngorongoro Farm House, קאראטו",
        meals: "פנסיון מלא",
        insiderFact: "מכתש נגורונגורו נוצר לפני כ-2.5 מיליון שנה כאשר הר געש עצום קרס פנימה — הקירות שיצר שימרו מאז אחד מריכוזי חיות הבר יוצאי הדופן ביותר בעולם.",
        accommodationByTier: {
          trail: { name: "Ngorongoro Farm House", image: "/images/lodges/ngorongoro-farm-house.webp", amenities: ["wifi", "restaurant", "highland-garden", "farm"] },
        },
      },
      {
        day: 6,
        title: "אגם מניארה וחזרה לארושה",
        description: "אחרי ארוחת הבוקר ב-Ngorongoro Farm House, הנסיעה צפונה עוברת דרך הרמות החקלאיות של קאראטו ויורדת אל רצפת בקע השבר, שם הפארק הלאומי אגם מניארה יושב לחוץ בין מצוק בקע השבר הגדול לבין האגם הבסיסי. תושביו המפורסמים ביותר של הפארק הם אריותיו המטפסות על עצים — התנהגות המתועדת כאן למעלה משישים שנה. מעבר לאריות: פילים, תאואים, ג'ירפות, היפופוטמים ומעל 400 מיני ציפורים. סיור ספארי, ארוחת צהריים פיקניק בתוך הפארק, ולאחר מכן צפונה לארושה. נציג EWA שלכם פוגש אתכם לפרידה אישית.",
        accommodation: "יציאה",
        meals: "חצי פנסיון",
      },
    ],
  },

  // ─── Kenya & Tanzania Highlights Safari ──────────────────────────────────────
  {
    slug: "kenya-tanzania-highlights-safari",
    name: "מבחר ספארי קניה וטנזניה",
    duration: 10,
    destinations: ["nairobi", "amboseli", "masai-mara", "serengeti", "ngorongoro", "manyara"],
    type: "big_five_game_drives",
    bestMonths: ['Jul', 'Aug', 'Sep', 'Oct'],
    wildlifeTargets: [{ name: 'African Elephant', chance: 'High' }, { name: 'Lion', chance: 'High' }, { name: 'Black Rhino', chance: 'High' }, { name: 'Wildebeest', chance: 'Seasonal', note: 'Mara River crossing, Jul-Oct' }, { name: 'Cheetah', chance: 'High' }, { name: 'Cape Buffalo', chance: 'High' }],
    priceFrom: 4600,
    groupSize: { min: 2, max: 8 },
    bestFor: ["luxury", "couples", "wildlife-enthusiasts", "photography"],
    metaDescription: "ספארי מבחר פרטי בן 10 ימים בין קניה לטנזניה — מסאי מארה, אמבוסלי לרגלי קילימנג'רו, מרכז הסרנגטי ומכתש נגורונגורו הענק והמלא בחיות בר. החל מ-4,600$ לאדם.",
    overview: [
      "בקשו ממדריך ספארי מנוסה למנות את חמשת המקומות במזרח אפריקה שאסור לדלג עליהם, והמסלול בן עשרת הימים הזה הוא בערך מה שתקבלו בתשובה.",
      "הוא נפתח עם עדרי הפילים של אמבוסלי הפועלים במישורים מתחת לקילימנג'רו, ואז לילה ויום שלם במסאי מארה — כולל שטח חציית נהר מארה שלה — לפני שחציית גבול יבשתית באיסיביניה מעבירה אתכם בצורה חלקה מקניה אל סרנגטי שבטנזניה, נוף אחד רציף מבחינה אקולוגית למרות הקו הפוליטי ביניהם. יומיים שלמים בשטח הברדלסים והאריות של סרנגטי מובילים ליום שלם בתוך מכתש נגורונגורו ולעצירה באגם מניארה, שם אריות מטפסות עצים הן התנהגות שאינה נמצאת בשום מקום אחר במזרח אפריקה. זמין ברמות נוחות או פרימיום לאורך כל המסע, זהו מבחר המקומות הבנוי עבור מטיילים, ובמיוחד צלמים, המעוניינים בנופים האופייניים של שתי המדינות מבלי לקצר אף אחד מהם.",
    ],
    highlights: [
      "מסאי מארה — יעד חיות הבר המפורסם ביותר בקניה ושטח חציית הנהר",
      "הפארק הלאומי אמבוסלי — עדרי פילים על רקע קילימנג'רו האייקוני",
      "יומיים שלמים בסרנגטי — ריכוז הטורפים הגדול ביותר באפריקה",
      "יום שלם במכתש נגורונגורו — חמישייה גדולה, קרנף שחור והקלדרה הגדולה בעולם",
      "העברה חוצת גבול — מסע יבשתי חלק ממסאי מארה לסרנגטי",
      "אריות מטפסות עצים באגם מניארה — התנהגות שאינה נמצאת בשום מקום אחר במזרח אפריקה",
    ],
    heroImage: "/images/gallery/zebras-grazing.webp",
    heroImageAlt: "Two zebras grazing in grassland with the Ngorongoro highlands in the distance",
    gallery: [],
    included: [
      "כל הלינה (9 לילות) בהתאם לרמה שנבחרה",
      "טויוטה לנד קרוזר פרטית 4x4 עם גג נפתח (טנזניה)",
      "רכב ספארי קנייתי פרטי (קניה)",
      "מדריך פרטי מומחה לאורך כל המסע",
      "כל דמי הכניסה לפארקים — אמבוסלי, מסאי מארה, סרנגטי, נגורונגורו (מעבר + מכתש), אגם מניארה",
      "ארוחות פנסיון מלא לאורך כל המסע",
      "העברה חוצת גבול — ממסאי מארה לסרנגטי",
      "כל ההעברות משדה התעופה בקניה ובטנזניה",
      "ביטוח חירום של AMREF Flying Doctors",
      "מסי ממשלה — קניה וטנזניה",
    ],
    excluded: [
      "טיסות בינלאומיות",
      "ויזות כניסה לקניה ולטנזניה (כ-50-100$ כל אחת)",
      "טיפים ותשרים",
      "פריטים אישיים וביטוח נסיעות",
      "פעילויות אופציונליות",
    ],
    includedCategorized: {
      transfers: [
        "העברת הגעה משדה התעופה בניירובי (יום 1)",
        "העברה יבשתית חוצת גבול — ממסאי מארה לסרנגטי (יום 5)",
        "כל ההעברות בין היעדים בשתי המדינות",
        "העברת יציאה משדה התעופה בארושה (יום 10)",
      ],
      accommodationMeals: [
        "ארוחת ערב בלילה 1 (ניירובי)",
        "פנסיון מלא בכל מתחמי הספארי (לילות 2-9)",
        "לינה בהתאם לרמת הנוחות או הפרימיום שנבחרה",
      ],
      guidingGameDrives: [
        "כל דמי הכניסה לפארקים — אמבוסלי, מסאי מארה, סרנגטי, נגורונגורו (מעבר NCA + מכתש), אגם מניארה",
        "כל סיורי הספארי בטויוטה לנד קרוזר פרטית 4x4 (טנזניה) וברכב ספארי קנייתי פרטי",
        "נהג-מדריך פרטי מומחה לאורך כל המסע — דובר אנגלית, מנוסה בשתי המדינות",
        "ביטוח חירום של AMREF Flying Doctors",
        "מי שתייה ללא הגבלה ברכב",
        "מסי ממשלה — קניה וטנזניה כאחד",
      ],
    },
    excludedCategorized: [
      "טיסות בינלאומיות",
      "eTA לקניה (כ-30$) וויזת כניסה לטנזניה (כ-50$) — שתיהן זמינות מקוון מראש",
      "טיפים ותשרים למדריכים ולצוות הקמפ",
      "פריטים אישיים וביטוח נסיעות",
      "פעילויות אופציונליות (ספארי בלון $550 לאדם, סיור לילה במארה $85 לאדם, ביקור בכפר מאסאי $25 לאדם, גיא אולדובאי $30 לאדם, מעקב קרנפים $120 לאדם)",
    ],
    notes: [
      "המחירים המוצגים הם לאדם בחדר זוגי/טווין משותף; תוספת תשלום לחדר יחיד זמינה לפי בקשה.",
      "מתחמי רמת הנוחות: Ol Tukai Lodge, Governors Camp, Kubukubu Tented Lodge, Ngorongoro Farm House, Kirurumu Manyara Lodge. רמת הפרימיום: Tawi Lodge, Governors Camp, &Beyond Serengeti Under Canvas, The Manor at Ngorongoro, andBeyond Lake Manyara Tree Lodge.",
      "דמי הכניסה לפארקים הלאומיים ולאזורי השימור בטנזניה נקבעים על ידי הממשלה וכפופים לשינויים ללא הודעה מוקדמת.",
      "נדרשת מקדמה של 30% לאישור ההזמנה; היתרה לתשלום 60 יום לפני היציאה.",
    ],
    pricingTiers: [
      { pax: 2, trail: 6600, reserve: 9700 },
      { pax: 3, trail: 5700, reserve: 8400 },
      { pax: 4, trail: 5100, reserve: 7500 },
      { pax: 6, trail: 4600, reserve: 6700 },
    ],
    itinerary: [
      {
        day: 1,
        title: "הגעה לניירובי, קניה",
        description: "מסע מזרח אפריקה שלכם מתחיל בניירובי. הגעה לשדה התעופה הבינלאומי ג'ומו קניאטה (NBO) והעברה למלון שלכם. תדריך קבלת פנים עם המדריך שלכם סוקר את עשרת הימים שלפניכם — חמישה פארקים בשתי מדינות, כל אחד עם אופי משלו וחתימת חיות בר משלו. אם הזמן מאפשר: מקלט הפילים של קרן דיוויד שלדריק, מרכז הג'ירפות ומוזיאון קארן בליקסן — כולם בהישג יד קל.",
        accommodation: "Hemingways Nairobi",
        meals: "ארוחת ערב",
        insiderFact: "קניה וטנזניה דורשות שתיהן ויזות כניסה נפרדות — eTA של קניה זמין באתר etakenya.go.ke; האשרה האלקטרונית של טנזניה באתר eservices.immigration.go.tz. הגישו בקשה לפחות שבועיים לפני הנסיעה.",
        accommodationByTier: {
          // TEMP: hotlinked placeholder photos pending real EWA/licensed images.
          trail: { name: "Hemingways Nairobi", image: "/images/lodges/hemingways-nairobi.webp", amenities: ["wifi", "pool", "spa", "restaurant"] },
          reserve: { name: "Hemingways Nairobi", image: "/images/lodges/hemingways-nairobi.webp", amenities: ["wifi", "pool", "spa", "restaurant"] },
        },
      },
      {
        day: 2,
        title: "מניירובי לפארק הלאומי אמבוסלי",
        description: "נסיעת בוקר דרומה מניירובי מביאה אתכם אל הפארק הלאומי אמבוסלי — שם המישורים משתרעים לעבר הכיפה הלבנה חד-משמעית של הר קילימנג'רו. אוכלוסיית הפילים הגדולה של אמבוסלי נעה על פני המישורים הפתוחים באדישות אמיתית — עשרות שנים של דו-קיום עם מבקרים מכבדים הפכו אותם לאחד מהניתנים לצפייה מקרוב ביותר באפריקה. באור טוב, משפחה של עשרים פילים החוצה את המישור הפתוח כאשר קילימנג'רו ממלא את השמיים מאחוריהם היא אחת מתמונות חיות הבר החזקות ביותר במזרח אפריקה. סיור ספארי אחר צהריים, קוקטיילי שקיעה עם צללית קילימנג'רו, ולינה בלודג' שלכם.",
        accommodation: "Ol Tukai Lodge / Tawi Lodge",
        meals: "פנסיון מלא",
        insiderFact: "אמבוסלי יושבת למרגלות הפסגה הגבוהה ביותר באפריקה — בבקרים בהירים, קילימנג'רו (5,895 מ') מתנשא מעל המישורים במחזה שהגדיר את הזהות החזותית של צילום חיות הבר במזרח אפריקה במשך עשורים.",
        accommodationByTier: {
          trail: { name: "Ol Tukai Lodge", image: "/images/lodges/ol-tukai-lodge.webp", amenities: ["wifi", "pool", "restaurant", "kilimanjaro-view"] },
          reserve: { name: "Tawi Lodge", image: "/images/lodges/tawi-lodge.webp", amenities: ["pool", "spa", "kilimanjaro-view", "conservation"] },
        },
      },
      {
        day: 3,
        title: "מסאי מארה — הגעה וסיור ספארי ראשון",
        description: "הנסיעה צפון-מערבה מאמבוסלי חוצה את הרמות הקנייתיות ויורדת אל המארה — וברגע שהמצוק נסוג ומישורי המארה נפתחים מתחתיכם, משהו משתנה. שמורת מסאי מארה הלאומית היא ההמשך הצפוני של המערכת האקולוגית של סרנגטי ויעד חיות הבר המפורסם ביותר בעולם. המארה מארחת את צפיפות הטורפים הגדולים הגבוהה ביותר במזרח אפריקה — אריות, נמרים, ברדלסים, כלבי בר וצבועים פועלים כולם באופן גלוי בתוך שטח סיור ספארי נגיש. אתם מגיעים לקמפ בשעות הצהריים המוקדמות ומתחילים את סיור הספארי הראשון שלכם כשהאור הופך לזהוב.",
        accommodation: "Governors Camp, מסאי מארה",
        meals: "פנסיון מלא",
        insiderFact: "מסאי מארה וסרנגטי שבטנזניה יוצרים יחד מערכת אקולוגית אחת רציפה — נוף חיות הבר הגדול ביותר בעולם. הגבול ביניהם הוא פוליטי, לא אקולוגי.",
        accommodationByTier: {
          trail: { name: "Governors Camp", image: "/images/lodges/governors-camp.webp", amenities: ["wifi", "pool", "restaurant", "mara-river-view"] },
          reserve: { name: "Kichwa Tembo Camp", image: "/images/lodges/kichwa-tembo-camp.webp", amenities: ["pool", "spa", "migration-corridor", "restaurant"] },
        },
      },
      {
        day: 4,
        title: "יום שלם במסאי מארה",
        description: "יום שלם המוקדש כולו למערכת האקולוגית של המארה — סיור ספארי בשעות הבוקר המוקדמות עם האור הראשון, ארוחת בוקר בחזרה בקמפ, יום שלם של חקירה על פני המישורים, יער הגדה ומסדרון נהר מארה. זהו היום שבו המארה נותנת את המיטב שלה. נהר מארה, המהווה את הגבול הצפוני של הפארק, הוא זירת חציות הנהר של ההגירה הגדולה בין יולי לאוקטובר — אחד המחזות המרגשים ביותר בטבע, כאשר ווילדביסט צוללים למים המלאים בתנינים במאות. לאורך כל השנה, תצפיות בחתולי בר גדולים קבועים הן ברמה עולמית.",
        accommodation: "Governors Camp, מסאי מארה",
        meals: "פנסיון מלא",
        insiderFact: "חציות הנהר מתרחשות כאשר התנע הקבוצתי של הווילדביסט מתגבר על ההיסוס האישי — הן יכולות להתרחש בכל שעה ביום ולהימשך מדקות עד שעות. המדריך שלכם עוקב אחר התכנסות העדרים כדי לצפות אותן מראש.",
        accommodationByTier: {
          trail: { name: "Governors Camp", image: "/images/lodges/governors-camp.webp", amenities: ["wifi", "pool", "restaurant", "mara-river-view"] },
          reserve: { name: "Kichwa Tembo Camp", image: "/images/lodges/kichwa-tembo-camp.webp", amenities: ["pool", "spa", "migration-corridor", "restaurant"] },
        },
      },
      {
        day: 5,
        title: "העברה חוצת גבול לסרנגטי",
        description: "ההעברה חוצת הגבול ממסאי מארה שבקניה לסרנגטי שבטנזניה היא אחד ממסעות הדרך הגדולים בספארי — מעבר חלק בין שתי מדינות שהן, מבחינה אקולוגית, טבע פראי רציף אחד. חציית הגבול באיסיביניה מנוהלת היטב עבור תנועת ספארי; המדריך שלכם מטפל בכל התיעוד. סיור הספארי של אחר הצהריים מתחיל מיד עם הכניסה לסרנגטי. למישורים המרכזיים יש אופי שונה מהמארה — רחבים יותר, פתוחים יותר, האופק רחוק יותר — וחיות הבר מגיבות בהתאם. גאוות האריות גדולות יותר כאן. אוכלוסיית הברדלסים היא הצפופה ביותר מבין כל שטח מוגן באפריקה.",
        accommodation: "Kubukubu Tented Lodge / &Beyond Serengeti Under Canvas",
        meals: "פנסיון מלא",
        insiderFact: "סרנגטי ומסאי מארה יוצרים מערכת אקולוגית הגירתית אחת — ווילדביסט חוצים את הגבול הפוליטי הזה מדי שנה באדישות מוחלטת אליו, בעקבות מעגל שנתי בן 3,000 קילומטרים המונע על ידי גשם ועשב.",
        accommodationByTier: {
          trail: { name: "Kubukubu Tented Lodge", image: "/images/lodges/kubukubu-tented-lodge.webp", amenities: ["ensuite", "restaurant", "wildlife-view"] },
          reserve: { name: "&Beyond Serengeti Under Canvas", image: "/images/lodges/andbeyond-serengeti-under-canvas.webp", amenities: ["luxury-tent", "ensuite", "migration-position", "restaurant"] },
        },
      },
      {
        day: 6,
        title: "יום שלם בפארק הלאומי סרנגטי",
        description: "יום שלם בפארק הלאומי האייקוני ביותר של אפריקה — ויום שעומד בכל ציפייה. סרנגטי משתרעת על פני 14,763 קמ״ר ומארחת למעלה מ-2 מיליון יונקים. מעבר להגירה, הפארק מארח את צפיפות הטורפים הגבוהה ביותר באפריקה ומספק את התצפיות האמינות ביותר בחתולי בר גדולים ביבשת. המדריך שלכם מכיר את סרנגטי לעומק — אילו אזורים מניבים תצפיות, היכן הנמר נצפה אתמול בבוקר, איזו גאווה מגדלת גורים ליד הלוגה. סיור ספארי בזריחה, יום שלם של חקירה, חזרה לקמפ בשקיעה.",
        accommodation: "Kubukubu Tented Lodge / &Beyond Serengeti Under Canvas",
        meals: "פנסיון מלא",
        insiderFact: "&Beyond Serengeti Under Canvas הוא קמפ נייד — הוא מתמקם מחדש עונתית כדי לעקוב אחר ההגירה, ומבטיח שהאורחים תמיד נמצאים במיקום האופטימלי לצפייה בחיות בר.",
        accommodationByTier: {
          trail: { name: "Kubukubu Tented Lodge", image: "/images/lodges/kubukubu-tented-lodge.webp", amenities: ["ensuite", "restaurant", "wildlife-view"] },
          reserve: { name: "&Beyond Serengeti Under Canvas", image: "/images/lodges/andbeyond-serengeti-under-canvas.webp", amenities: ["luxury-tent", "ensuite", "migration-position", "restaurant"] },
        },
      },
      {
        day: 7,
        title: "מסרנגטי לנגורונגורו דרך גיא אולדובאי",
        description: "הנסיעה מסרנגטי לנגורונגורו עוברת דרך אזור השימור נגורונגורו — נוף מרהיב בפני עצמו של יער רמות ורעיית מאסאי. המדריך שלכם עוצר בגיא אולדובאי לתדריך קצר: אחד מאתרי הפליאונטולוגיה המשמעותיים ביותר בעולם, שם התגלו עדויות לאבות קדמונים אנושיים המתוארכות ל-1.8 מיליון שנה. הפוגה מרתקת באמת בתוך ספארי חיות בר. הגישה האחרונה לשפת המכתש וללודג' שלכם ביער הרמות; ארוחת ערב בליווי קול היער, ואם הלילה בהיר, שמיים גבוהי-גובה יוצאי דופן.",
        accommodation: "Ngorongoro Farm House / The Manor at Ngorongoro",
        meals: "פנסיון מלא",
        insiderFact: "בגיא אולדובאי גילתה הפליאונטולוגית מרי ליקי בשנת 1959 את גולגולתו בת 1.8 מיליון השנה של פראנתרופוס בויסיי — תגלית ששינתה באופן יסודי את ההבנה של האבולוציה האנושית.",
        accommodationByTier: {
          trail: { name: "Ngorongoro Farm House", image: "/images/lodges/ngorongoro-farm-house.webp", amenities: ["wifi", "restaurant", "highland-garden", "farm"] },
          reserve: { name: "The Manor at Ngorongoro", image: "/images/lodges/the-manor-at-ngorongoro.webp", amenities: ["pool", "spa", "colonial-manor", "coffee-farm"] },
        },
      },
      {
        day: 8,
        title: "יום שלם במכתש נגורונגורו",
        description: "הירידה אל מכתש נגורונגורו מתחילה עם שחר. 600 מטרים מתחת לשפה, רצפת הקלדרה חושפת אחד מריכוזי חיות הבר יוצאי הדופן ביותר בעולם — כ-25,000 יונקים גדולים בקערה ברוחב 20 קילומטרים. החמישייה הגדולה מתקיימת יחד בצפיפות יוצאת דופן. אוכלוסיית הקרנפים השחורים היא האמינה ביותר לצפייה במזרח אפריקה. בריכת ההיפופוטמים נגוֹיטוֹקְטוֹק היא עצירת ארוחת הצהריים — היפופוטמים עולים לפני השטח במרחק מטרים מהפיקניק שלכם, אווזי הנילוס מתווכחים בשולי המים, וקירות המכתש מתנשאים מכל צד. יום שלם של ירידה, חקירה ועלייה בקלדרה הוולקנית המפורסמת ביותר באפריקה.",
        accommodation: "Ngorongoro Farm House / The Manor at Ngorongoro",
        meals: "פנסיון מלא",
        insiderFact: "קירות המכתש יוצרים מחסום טבעי ששמר על אוכלוסיות חיות הבר המקומיות מלעזוב במשך דורות — גאוות אריות חיות באותה קלדרה כבר עשרות שנים, והקרנפים השחורים נמנים עם המחקרים ביותר בעולם.",
        accommodationByTier: {
          trail: { name: "Ngorongoro Farm House", image: "/images/lodges/ngorongoro-farm-house.webp", amenities: ["wifi", "restaurant", "highland-garden", "farm"] },
          reserve: { name: "The Manor at Ngorongoro", image: "/images/lodges/the-manor-at-ngorongoro.webp", amenities: ["pool", "spa", "colonial-manor", "coffee-farm"] },
        },
      },
      {
        day: 9,
        title: "הפארק הלאומי אגם מניארה",
        description: "ארנסט המינגווי כינה את אגם מניארה האגם היפה ביותר באפריקה. לחוץ בין מצוק בקע השבר הגדול לבין האגם הבסיסי התופס את רוב שטחו של 325 קמ״ר, מניארה מכיל טווח יוצא דופן של בתי גידול: יער מי תהום צפוף למרגלות המצוק, שדות עשב פתוחים ויער שיטה, ואגם הסודה המלא בפלמינגו. תושביו המהוללים ביותר של הפארק הם אריותיו המטפסות על עצים — התנהגות הייחודית למניארה במזרח אפריקה, המתועדת למעלה משישים שנה. מעבר לאריות: פילים, תאואים, היפופוטמים, ג'ירפות ומעל 400 מיני ציפורים. אור אחר הצהריים על האגם ועל קיר המצוק הוא אחד מרגעי הצילום המשובחים ביותר בטנזניה.",
        accommodation: "Kirurumu Manyara Lodge / andBeyond Lake Manyara Tree Lodge",
        meals: "פנסיון מלא",
        insiderFact: "andBeyond Lake Manyara Tree Lodge הוא אחד המתחמים הייחודיים ביותר בטנזניה — עשרה בתי עץ הבנויים בתוך חופת יער המהגוני העתיק, שבהם האורחים הולכים על מדרכות עץ מוגבהות בין החדרים לאזור הסעודה בלילה.",
        accommodationByTier: {
          trail: { name: "Kirurumu Manyara Lodge", image: "/images/lodges/kirurumu-manyara-lodge.webp", amenities: ["wifi", "restaurant", "rift-valley-view", "pool"] },
          reserve: { name: "andBeyond Lake Manyara Tree Lodge", image: "/images/lodges/andbeyond-lake-manyara-tree-lodge-living-room.webp", amenities: ["treehouse", "forest-canopy", "ensuite", "restaurant"] },
        },
      },
      {
        day: 10,
        title: "חזרה לארושה ויציאה",
        description: "בוקר אחרון בטנזניה — והנסיעה צפונה לארושה דרך הרמות החקלאיות של בקע השבר, כאשר הר מרו באופק ועשרה ימים יוצאי דופן מאחוריכם. נציג EWA שלכם פוגש אתכם בארושה לפרידה אישית. העברת שדה תעופה לטיסות המשך לניירובי, לזנזיבר או הביתה. לילות נוספים בארושה זמינים לפי בקשה.",
        accommodation: "יציאה",
        meals: "ארוחת בוקר",
      },
    ],
  },
  {
    slug: "10-day-kenya-tanzania-safari",
    name: "ספארי בן 10 ימים בקניה וטנזניה",
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
    wildlifeTargets: [{ name: 'Lion', chance: 'Guaranteed' }, { name: 'African Elephant', chance: 'High' }, { name: 'Black Rhino', chance: 'High' }, { name: 'Leopard', chance: 'High' }, { name: 'Cheetah', chance: 'High' }, { name: 'Wildebeest', chance: 'Seasonal' }],
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
    metaDescription: "ספארי חוצה-גבולות בן 10 ימים — מקלט הקרנפים של אגם נקורו, יומיים במסאי מארה, ושלושה ימים מלאים בסרנגטי ובמכתש נגורונגורו. החל מ-5,072$ לאדם.",
    overview: [
      "מסלול זה עוקב אחר אותה קשת מעבר מקניה לטנזניה כמו הספארי הקלאסי שלנו החוצה גבולות, אך מחליף יום נהיגה ביום שלישי מלא בסרנגטי.",
      "הוא נפתח באגם נקורו, במעבר בין חופים מלאי פלמינגו ומקלט קרנפים המאכלס גם קרנפים שחורים וגם לבנים, לפני יומיים מלאים בטריטוריית האריות והברדלסים של מסאי מארה. EWA דואגת להחלפת הגיידים והרכב במעבר הגבול סיררי, כך שהמעבר לתוך מרכז סרנגטי בטנזניה חלק כמו המערכת האקולוגית עצמה — שם תבלו שלושה ימים מלאים, יותר זמן בפארק אחד מכמעט כל מסלול אחר שאנו מציעים. ירידה מודרכת אל תוך מכתש נגורונגורו מספקת את חמשת הגדולים ביום אחד, ועדרי הפילים האגדיים והבאובבים העתיקים של טרנגירה חותמים את הטיול לפני החזרה לארושה."
    ],
    highlights: [
      "חופי הפלמינגו של אגם נקורו והקרנפים השחורים והלבנים המתגוררים בו",
      "יומיים מלאים במסאי מארה — זירת חיות הבר הגדולה בקניה",
      "חצייה חלקה של הגבול קניה–טנזניה בסיררי (EWA דואגת ללוגיסטיקה)",
      "שלושה ימים מלאים בטריטוריית הטורפים המובחרת של מרכז סרנגטי",
      "ירידה מודרכת אל מכתש נגורונגורו — חמשת הגדולים ביום אחד",
      "עדרי הפילים האגדיים והבאובבים העתיקים של טרנגירה"
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
      "כל דמי הכניסה לפארקים הלאומיים ולשמורות (קניה וטנזניה)",
      "כל סיורי הספארי ברכב 4X4 פרטי",
      "מדריך מקצועי לאורך כל הדרך",
      "סיוע בחצייה בגבול בסיררי (קניה/טנזניה)",
      "כל הארוחות כמפורט",
      "לינה בהתאם למסלול",
      "העברות משדה התעופה ובין המתחמים"
    ],
    includedCategorized: {
      transfers: [
        "סיוע בחצייה בגבול בסיררי (קניה/טנזניה)",
        "העברות משדה התעופה ובין המתחמים"
      ],
      accommodationMeals: [
        "כל הארוחות כמפורט",
        "לינה בהתאם למסלול"
      ],
      guidingGameDrives: [
        "כל דמי הכניסה לפארקים הלאומיים ולשמורות (קניה וטנזניה)",
        "כל סיורי הספארי ברכב 4X4 פרטי",
        "מדריך מקצועי לאורך כל הדרך"
      ]
    },
    excluded: [
      "טיסות בינלאומיות",
      "אשרות כניסה לקניה ולטנזניה",
      "ביטוח נסיעות",
      "טיפים ותשרים",
      "פעילויות אופציונליות (ספארי בכדור פורח, סיורים תרבותיים)"
    ],
    excludedCategorized: [
      "טיסות בינלאומיות",
      "אשרת כניסה לקניה (כ-30 דולר לרוב האזרחויות) ואשרת כניסה לטנזניה (כ-50 דולר)",
      "ביטוח נסיעות",
      "טיפים לצוות ולעובדי הלודג'ים",
      "פעילויות אופציונליות (ספארי בכדור פורח כ-550 דולר לאדם, ביקור בכפר מסאי כ-25 דולר לאדם)",
      "חפצים אישיים, כביסה ושיחות טלפון"
    ],
    notes: [
      "התעריפים המוצגים הם לאדם בחדר זוגי/טווין משותף; תוספת ליחיד זמינה לפי בקשה.",
      "הגיידים והרכבים מתחלפים בגבול קניה–טנזניה בסיררי; EWA מתאמת את ההחלפה.",
      "הלינה והתעריפים כפופים לזמינות ועשויים להשתנות בהתאם לתאריך הנסיעה המדויק.",
      "דמי הכניסה לפארקים בטנזניה ובקניה נקבעים על ידי הממשלות הרלוונטיות וכפופים לשינויים ללא הודעה מוקדמת.",
      "נדרש מקדמה של 35% לאישור ההזמנה; היתרה לתשלום 60 יום לפני היציאה."
    ],
    itinerary: [
      {
        day: 1,
        title: "הגעה לניירובי",
        description: "הגעה לנמל התעופה הבינלאומי ג'ומו קניאטה והעברה למלון בניירובי ללינה.",
        accommodation: "Eka Hotel, Nairobi",
        meals: "כולל ארוחת בוקר",
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
        title: "פארק לאומי אגם נקורו",
        description: "נסיעה לאגם נקורו, אחד מהפארקים הדרמטיים ביותר בבקעת השבר הגדולה. האגם הבסיסי מושך להקות פלמינגו עצומות בעונה — קיר ורוד לאורך כל קו החוף. הפארק מוכרז מקלט קרנפים ומאכלס גם קרנפים שחורים וגם לבנים, לצד אריות, ברדלסים, תאואים וג'ירפות ביער השיטה שמסביב.",
        accommodation: "Lake Nakuru Sopa Lodge",
        meals: "פנסיון מלא",
        insiderFact: "אגם נקורו הוכרז מקלט קרנפים ב-1983 — כיום הוא מאכלס אחד מהריכוזים הגבוהים ביותר במזרח אפריקה של קרנפים שחורים ולבנים מחוץ לשמורה מנוהלת.",
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
        title: "שמורת הטבע הלאומית מסאי מארה — הגעה",
        description: "נסיעה דרום-מערבה מנקורו אל תוך מסאי מארה — שמורת חיות הבר המהוללת ביותר בקניה. סיור ספארי עם ההגעה חוצה את המישורים הפתוחים ואת יער הגדות לאורך נהר מארה, בחיפוש אחר חתולי בר גדולים בשעות אחר הצהריים המאוחרות.",
        accommodation: "Masai Mara Sopa Lodge",
        meals: "פנסיון מלא",
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
        title: "יום מלא במסאי מארה",
        description: "יום מלא של סיורי ספארי במסאי מארה. השמורה מהווה בית לאחת מאוכלוסיות האריות המתגוררות הגדולות במזרח אפריקה, לצד ברדלסי ציד, ברדלסים, פילים וחציות נהר מארה המפורסמות בעולם של הווילדביסט (יולי–אוקטובר). הגיידה שלכם סוקרת מספר אזורים ברחבי השמורה כדי לעקוב אחר הטורפים הפעילים ביותר.",
        accommodation: "Masai Mara Sopa Lodge",
        meals: "פנסיון מלא",
        insiderFact: "במהלך הנדידה הגדולה (יולי–אוקטובר), למעלה מ-1.5 מיליון ווילדביסט ו-200,000 זברות חוצים מהסרנגטי הטנזני אל תוך המארה — אחד ממחזות חיות הבר הדרמטיים ביותר עלי אדמות.",
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
        title: "חציית הגבול קניה–טנזניה ומרכז סרנגטי",
        description: "חציית הגבול קניה–טנזניה בסיררי עם החלפת גיידים מטעם EWA, וכניסה לסרנגטי מהצפון. סיור ספארי אחר-צהריים מתחיל מיד בצד הטנזני, שם המערכת האקולוגית של הסרנגטי ממשיכה בצורה חלקה מהמארה. הגעה למחנה במרכז סרנגטי לפני השקיעה.",
        accommodation: "Kubukubu Tented Lodge, Serengeti",
        meals: "פנסיון מלא",
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
        title: "יום מלא — מרכז סרנגטי",
        description: "יום מלא במרכז סרנגטי, החולש על עמק סרונרה והמישורים שמסביב. מרכז סרנגטי מאכלס אוכלוסיות מתגוררות לאורך כל השנה של אריות, ברדלסים, ברדלסי ציד, פילים ותאואים — אחת מטריטוריות הטורפים הפוריות ביותר באפריקה בכל העונות.",
        accommodation: "Kubukubu Tented Lodge, Serengeti",
        meals: "פנסיון מלא",
        insiderFact: "נהר סרונרה במרכז סרנגטי מוקף עצי תאנה ועצי נקניקיה שבהם נחים הברדלסים בין ציד לציד — אחד האזורים הטובים ביותר באפריקה לאיתור ברדלס מהרכב.",
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
        title: "יום מלא — מרכז סרנגטי",
        description: "יום שלישי מלא של סיורי ספארי במרכז סרנגטי. הגיידה שלכם חוקרת אזורים שונים בשמורה בהתאם למידע עדכני על עקבות ולדפוסים עונתיים, ומעניקה לכם את הסיכוי הטוב ביותר לתצפיות והתנהגויות חדשות.",
        accommodation: "Kubukubu Tented Lodge, Serengeti",
        meals: "פנסיון מלא",
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
        title: "מכתש נגורונגורו",
        description: "נסיעה דרומה אל אזור השימור נגורונגורו וירידה מודרכת אל תוך המכתש. רצפת המכתש — 260 קמ״ר של דשא, יער ואגם סודה — מאכלסת את כל חמשת הגדולים במגורי קבע, כולל כ-25 קרנפים שחורים בקירוב, מה שהופך את נגורונגורו לאחד המקומות האמינים היחידים בטנזניה לצפייה בקרנפים בטבע.",
        accommodation: "Ngorongoro Farm House, Karatu",
        meals: "פנסיון מלא",
        insiderFact: "קירות מכתש נגורונגורו פועלים כמעין גדר טבעית — רוב בעלי החיים חיים את כל חייהם בתוך רצפתו בשטח של 260 קמ״ר, מה שמסביר את צפיפות חיות הבר יוצאת הדופן.",
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
        title: "פארק לאומי טרנגירה וארושה",
        description: "נסיעה לטרנגירה לסיור ספארי בוקר בין עדרי הפילים המרהיבים ביותר בטנזניה. נהר טרנגירה מושך מאות פילים בעונת היובש, ועצי הבאובב העתיקים המפוזרים בנוף הם בין היצורים החיים העתיקים ביותר באפריקה. המשך הנסיעה לארושה ללינת הלילה האחרונה.",
        accommodation: "Kahawa House, Arusha",
        meals: "פנסיון מלא",
        insiderFact: "טרנגירה מאכלסת אחת מצפיפויות הפילים הגבוהות באפריקה מחוץ לעונת הגשמים — עדרים של 50–200 פרטים הם מראה נפוץ לאורך הנהר.",
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
        title: "יציאה מארושה",
        description: "העברה לשדה התעופה של ארושה או לנמל התעופה הבינלאומי קילימנג'רו לטיסת ההמשך הביתה.",
        accommodation: "N/A",
        meals: "ארוחת בוקר"
      }
    ]
  },
  {
    slug: "2-day-selous-safari-from-zanzibar",
    name: "ספארי בן יומיים בנייררה מזנזיבר",
    duration: 2,
    destinations: [
      "nyerere",
      "zanzibar"
    ],
    type: "beach_extension",
    bestMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    wildlifeTargets: [{ name: 'Hippopotamus', chance: 'Guaranteed' }, { name: 'Nile Crocodile', chance: 'High' }, { name: 'African Elephant', chance: 'High' }, { name: 'African Buffalo', chance: 'High' }, { name: 'African Wild Dog', chance: 'Rare' }],
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
    metaTitle: "ספארי בן יומיים בנייררה מזנזיבר | הרחבת חיות בר ביבשת | EWA Safari Outfitters",
    metaDescription: "טיסת הלוך ושוב מזנזיבר אל תוך הפארק הלאומי נייררה — ספארי בסירה על נהר רופיג'י, ספארי הליכה וסיור ספארי, ואתם חוזרים לחוף עד אחר הצהריים. שלוש רמות, החל מ-1,957.50 דולר לאדם.",
    overview: [
      "עודכן לעונת 2027. אינכם צריכים לוותר על חופשת זנזיבר שלכם כדי לראות את חיות הבר ביבשת — הרחבה זו בת היומיים מכניסה אתכם לפארק הלאומי נייררה ובחזרה מבלי לאבד יותר מלילה אחד על החוף.",
      "טיסת הלוך ושוב מכסה את ההעברה בשני הכיוונים, ומנחיתה אתכם בשמורת הטבע הגדולה באפריקה לספארי בסירה על נהר רופיג'י אחר-הצהריים, לצד בריכות היפופוטמים ומעברות פילים, ולאחריו ספארי הליכה מוקדם בבוקר וסיור ספארי לפני הטיסה חזרה לזנזיבר בזמן להשיב לעצמכם את אחר הצהריים על החול."
    ],
    highlights: [
      "טיסת הלוך ושוב מזנזיבר — ללא צורך בהעברות יבשתיות",
      "ספארי בסירה על נהר רופיג'י אחר-הצהריים עם ההגעה — לעיתים קרובות מדורג על ידי מבקרים בפעם הראשונה גבוה יותר מסיורי הספארי עצמם",
      "ספארי הליכה וסיור ספארי מוקדמים בבוקר ביום השני, מתוזמנים לשעה שבה הטורפים הכי פעילים",
      "חזרה לחוף עד אחר הצהריים — כל הספארי ביבשת נכנס בתוך לילה אחד הרחק מהחוף",
      "כל רמת נוחות מיוצגת, מנוחה ופשוטה ועד יוצאת דופן באמת, מבלי לשנות אפילו שעה אחת מהמסלול עצמו"
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
      "טיסת הלוך ושוב זנזיבר–נייררה–זנזיבר",
      "כל דמי הפארק והקונצסיה",
      "ספארי הסירה על נהר רופיג'י",
      "ספארי ההליכה וסיור הספארי",
      "מדריך מקצועי לאורך כל הדרך",
      "לינה בפנסיון מלא כמפורט",
      "העברות משדה התעופה"
    ],
    includedCategorized: {
      transfers: [
        "טיסת הלוך ושוב זנזיבר–נייררה–זנזיבר",
        "העברות משדה התעופה"
      ],
      accommodationMeals: [
        "לינה בפנסיון מלא כמפורט"
      ],
      guidingGameDrives: [
        "כל דמי הפארק והקונצסיה",
        "ספארי הסירה על נהר רופיג'י",
        "ספארי ההליכה וסיור הספארי",
        "מדריך מקצועי לאורך כל הדרך"
      ]
    },
    excluded: [
      "טיסות בינלאומיות",
      "אשרת כניסה לטנזניה (כ-50 דולר לרוב האזרחויות)",
      "ביטוח נסיעות",
      "טיפים ותשרים",
      "חפצים אישיים ומשקאות מעבר לפנסיון המלא הרגיל"
    ],
    excludedCategorized: [
      "טיסות בינלאומיות",
      "אשרת כניסה לטנזניה (כ-50 דולר לרוב האזרחויות)",
      "ביטוח נסיעות",
      "טיפים לצוות הגיידים והמחנה",
      "חפצים אישיים, כביסה ושיחות טלפון"
    ],
    notes: [
      "התעריפים המוצגים הם לאדם בחדר זוגי/טווין משותף; תוספת ליחיד זמינה לפי בקשה.",
      "גודל קבוצה מינימלי של 2 אנשים כדי שהעברת הטיסה תהיה כדאית.",
      "הלינה והתעריפים כפופים לזמינות ועשויים להשתנות בהתאם לתאריך הנסיעה המדויק.",
      "דמי הפארק הלאומי בטנזניה נקבעים על ידי הממשלה וכפופים לשינויים ללא הודעה מוקדמת."
    ],
    itinerary: [
      {
        day: 1,
        title: "הגעה לנייררה",
        description: "טיסה מזנזיבר ישירות לפארק הלאומי נייררה — לשעבר שמורת הטבע סלוס, השטח המוגן הגדול באפריקה בשטח של 54,600 קמ״ר. ספארי בסירה אחר הצהריים על נהר רופיג'י, בין בריכות היפופוטמים וגדות מלאות תנינים, עם פילים ותאואים השותים בקצה המים.",
        accommodation: "בהתאם לרמה: Serena Mivumo River Lodge, Rufiji River Camp או Roho ya Selous",
        meals: "פנסיון מלא",
        insiderFact: "הפארק הלאומי נייררה (לשעבר שמורת סלוס) גדול משוויץ — אחד מאזורי הטבע הגדולים בעולם, המקבל שבריר קטן ממספר המבקרים בפארקים בצפון טנזניה.",
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
        title: "ספארי הליכה, סיור ספארי וחזרה לזנזיבר",
        description: "ספארי הליכה מוקדם בבוקר ולאחריו סיור ספארי ברחבי השמורה, מתוזמן לשעה שבה הטורפים הכי פעילים, לפני טיסת החזרה שלכם לזנזיבר בזמן להשיב לעצמכם את אחר הצהריים על החוף.",
        accommodation: "N/A",
        meals: "ארוחת בוקר וארוחת צהריים"
      }
    ],
    faq: [
      {
        q: "כיצד בכלל אפשרי ספארי בן יומיים מזנזיבר?",
        a: "כי ההעברה היא באוויר, לא בכביש. טיסה ישירה מכניסה אתכם אל תוך הפארק הלאומי נייררה תוך כשעתיים מרגע היציאה ממלון החוף שלכם, ואותה טיסה מחזירה אתכם — ללא נהיגה יבשתית שאוכלת מהזמן שלכם בכל אחד מהכיוונים."
      },
      {
        q: "האם באמת נראה חיות בר בביקור כה קצר?",
        a: "כן — ספארי הסירה על נהר רופיג'י עם ההגעה מדורג לעיתים קרובות על ידי מבקרים בפעם הראשונה כשיא הטיול כולו, וספארי ההליכה וסיור הספארי המוקדמים בבוקר ביום השני מתוזמנים במיוחד לשעה שבה הטורפים הכי פעילים."
      },
      {
        q: "מה ההבדל בין שלוש הרמות?",
        a: "הטיסות, הפעילויות והמסלול זהים בשלושתן. מה שמשתנה הוא המחנה: Wilderness Trail שומר על נוחות ופשטות, Wilderness Reserve מוסיף יותר מרחב וחזית נהר, ו-Wilderness Sovereign ממקם אתכם במתחם היוצא דופן ביותר במסלול הזה."
      },
      {
        q: "כמה משתנה המחיר עם גודל הקבוצה?",
        a: "באופן משמעותי — העלויות הקבועות (העברות, גיידה) מתחלקות בין הקבוצה, כך שהמחיר לאדם יורד במיוחד מ-2 ל-3 מטיילים."
      },
      {
        q: "מה כלול במחיר, ומה לא?",
        a: "כלול: טיסות הלוך ושוב בין זנזיבר לנייררה, כל דמי הפארק והקונצסיה, ספארי הסירה, ספארי ההליכה וסיור הספארי, לינה בפנסיון מלא, ומדריך מקצועי לאורך כל הדרך. לא כלול: טיסות בינלאומיות, דמי אשרה, ביטוח נסיעות, טיפים והוצאות אישיות."
      },
      {
        q: "האם לילה אחד באמת מספיק, או שכדאי לשקול שהות ארוכה יותר?",
        a: "מסלול זה נבנה במיוחד עבור מטיילים שלא רוצים לוותר על יותר מלילה אחד מחופשת החוף שלהם — אם יש לכם יותר זמן פנוי, מסלולי המעגל הדרומי הארוכים יותר שלנו מעניקים לנייררה את הטיפול המלא רב-הימים שהיא מתגמלת גם אותו."
      }
    ]
  },
  {
    slug: "4-day-tarangire-ngorongoro-lake-eyasi",
    name: "ספארי בן 4 ימים בטרנגירה, נגורונגורו ואגם איאסי",
    duration: 4,
    destinations: [
      "tarangire",
      "ngorongoro"
    ],
    type: "big_five_game_drives",
    bestMonths: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    wildlifeTargets: [{ name: 'African Elephant', chance: 'High' }, { name: 'Lion', chance: 'Guaranteed' }, { name: 'Black Rhino', chance: 'High' }, { name: 'African Buffalo', chance: 'High' }, { name: 'Leopard', chance: 'Rare' }],
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
    metaDescription: "ספארי פרטי בן 4 ימים בטנזניה — עדרי הפילים המרשימים של טרנגירה, ירידה מלאה אל מכתש נגורונגורו, ואחר צהריים תרבותי עם בני שבט ההדזבה. החל מ-1,250$ לאדם.",
    overview: [
      "ארבעה ימים מספיקים כדי לשלב את חיות הבר של טנזניה עם משהו שלא תמצאו בשום מסלול אחר שאנו מציעים: אחר צהריים עם ההדזאבה, אחת מקהילות הציידים-הלקטים האחרונות בעולם.",
      "המסלול נפתח בסיור ספארי אחר-צהריים דרך נופה של טרנגירה המנוקד בבאובבים ועדרי הפילים שלה, ולאחר מכן פונה דרומה לאגם איאסי, שם תצטרפו לקבוצת ציד של ההדזאבה בשיחים ותבקרו נפחים בני שבט הדאטוגה המחשלים כלים עד היום ביד. ירידה של יום מלא אל מכתש נגורונגורו מספקת את חמשת הגדולים, כולל אחת מאוכלוסיות הקרנף השחור המעטות והאמינות במדינה, לפני הנסיעה חזרה לארושה. תבלו שני לילות רצופים באותו לודג' בקאראטו, כך שתצטרכו לארוז פחות ויהיה לכם יותר זמן להתבונן במה שלפניכם — היכרות קומפקטית וקצובה היטב עם חיות הבר והתרבות החיה של טנזניה כאחד."
    ],
    highlights: [
      "פארק לאומי טרנגירה — עדרי פילים מתחת לעצי באובב עתיקים",
      "ירידה מודרכת מלאה אל מכתש נגורונגורו (חמשת הגדולים)",
      "אחר צהריים תרבותי עם ההדזאבה — אחת מקהילות הציידים-הלקטים האחרונות ששרדו בעולם",
      "ביקור אצל נפחי הדאטוגה באגם איאסי, מסורת מלאכה שלא השתנתה במשך מאות שנים",
      "שני לילות באותו לודג' בקאראטו — ממזער אריזה ותזוזה"
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
      "כל דמי הכניסה לפארק הלאומי ולאזור השימור",
      "חוויה תרבותית באגם איאסי (מדריך הדזאבה ודאטוגה)",
      "כל סיורי הספארי ברכב 4X4 פרטי",
      "מדריך מקצועי לאורך כל הדרך",
      "כל הארוחות כמפורט",
      "לינה בהתאם למסלול",
      "העברות משדה התעופה ובין המתחמים"
    ],
    includedCategorized: {
      transfers: [
        "העברות משדה התעופה ובין המתחמים"
      ],
      accommodationMeals: [
        "כל הארוחות כמפורט",
        "לינה בהתאם למסלול"
      ],
      guidingGameDrives: [
        "כל דמי הכניסה לפארק הלאומי ולאזור השימור",
        "חוויה תרבותית באגם איאסי (מדריך הדזאבה ודאטוגה)",
        "כל סיורי הספארי ברכב 4X4 פרטי",
        "מדריך מקצועי לאורך כל הדרך"
      ]
    },
    excluded: [
      "טיסות בינלאומיות",
      "אשרת כניסה לטנזניה (כ-50 דולר לרוב האזרחויות)",
      "ביטוח נסיעות",
      "טיפים ותשרים",
      "פעילויות אופציונליות (מעקב קרנפים, ספארי הליכה)"
    ],
    excludedCategorized: [
      "טיסות בינלאומיות",
      "אשרת כניסה לטנזניה (כ-50 דולר לרוב האזרחויות)",
      "ביטוח נסיעות",
      "טיפים לצוות הגיידים והלודג'ים",
      "פעילויות אופציונליות (מעקב קרנפים כ-120 דולר לאדם, ספארי הליכה כ-59 דולר לאדם)",
      "חפצים אישיים, כביסה ושיחות טלפון"
    ],
    notes: [
      "התעריפים המוצגים הם לאדם בחדר זוגי/טווין משותף; תוספת ליחיד זמינה לפי בקשה.",
      "הלינה והתעריפים כפופים לזמינות ועשויים להשתנות בהתאם לתאריך הנסיעה המדויק.",
      "דמי הפארק הלאומי ואזור השימור בטנזניה נקבעים על ידי הממשלה וכפופים לשינויים ללא הודעה מוקדמת.",
      "נדרש מקדמה של 10% לאישור ההזמנה; היתרה לתשלום 28 יום לפני היציאה."
    ],
    itinerary: [
      {
        day: 1,
        title: "ארושה ← פארק לאומי טרנגירה",
        description: "נסיעה מארושה לפארק הלאומי טרנגירה לסיור ספארי אחר-צהריים מלא. טרנגירה הוא אחד הפארקים המוערכים פחות מדי בטנזניה — בעונת היובש, נהר טרנגירה הופך למקור המים האמין היחיד במרחק מאות קילומטרים, ומושך את ריכוזי הפילים הגדולים ביותר במזרח אפריקה. עצי באובב עתיקים מפוזרים בנוף, חלקם בני יותר מאלף שנה. חזרה לארושה לערב.",
        accommodation: "Kahawa House, Arusha",
        meals: "ארוחת ערב וארוחת בוקר",
        insiderFact: "עדרי הפילים של טרנגירה הם מבין הגדולים באפריקה, עם התקבצויות עונתיות של 300–500 פרטים סביב הנהר בחודשי היובש.",
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
        title: "חוויה תרבותית באגם איאסי וקאראטו",
        description: "נסיעה לאגם איאסי לאחר צהריים עם ההדזאבה — אחת מקהילות הציידים-הלקטים האחרונות ששרדו בעולם, החיה באותו האופן שבו חיו אבותיה במשך עשרות אלפי שנים. הצטרפו לקבוצת ציד של ההדזאבה בשיחים, ולאחר מכן בקרו אצל נפחי הדאטוגה המחשלים תכשיטים וכלים מסורתיים בטכניקות שלא השתנו במשך מאות שנים. המשך הנסיעה ללודג' שלכם בקאראטו.",
        accommodation: "Ngorongoro Farm House, Karatu",
        meals: "פנסיון מלא",
        insiderFact: "ההדזאבה מדברים בשפה עם עיצורי נקישה והם אחת מהאוכלוסיות הבודדות בעולם שעדיין מתפרנסות בעיקר מציד ולקט.",
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
        title: "יום מלא במכתש נגורונגורו",
        description: "ירידה מודרכת של יום מלא אל מכתש נגורונגורו — הקלדרה הוולקנית השלמה הגדולה בעולם ואתר מורשת עולמית של אונסק״ו. רצפת המכתש בשטח של 260 קמ״ר היא מערכת אקולוגית עצמאית המאכלסת את כל חמשת הגדולים של טנזניה במגורי קבע, כולל אחת מאוכלוסיות הקרנף השחור הברות-קיימא האחרונות במדינה.",
        accommodation: "Ngorongoro Farm House, Karatu",
        meals: "פנסיון מלא",
        insiderFact: "אוכלוסיית הקרנף השחור בנגורונגורו — כ-25 פרטים — היא מהנגישות ביותר בטנזניה, ורצפת המכתש הפתוחה הופכת את הצפייה לסבירה הרבה יותר כאן מאשר בשיח.",
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
        title: "חזרה לארושה ויציאה",
        description: "נסיעה חזרה לארושה דרך הרמות החקלאיות. העברה לשדה התעופה של ארושה או לנמל התעופה הבינלאומי קילימנג'רו לטיסת ההמשך.",
        accommodation: "N/A",
        meals: "ארוחת בוקר וארוחת צהריים"
      }
    ]
  },
  {
    slug: "5-day-kenya-safari",
    name: "ספארי בן 5 ימים בקניה — הל'ס גייט, אגם נקורו ומסאי מארה",
    duration: 5,
    destinations: [
      "masai-mara",
      "nairobi"
    ],
    type: "big_five_game_drives",
    bestMonths: ['Jul', 'Aug', 'Sep', 'Oct'],
    wildlifeTargets: [{ name: 'Black Rhino', chance: 'High' }, { name: 'White Rhino', chance: 'High' }, { name: 'Lion', chance: 'High' }, { name: 'Wildebeest', chance: 'Seasonal' }, { name: 'Rothschild\'s Giraffe', chance: 'High' }, { name: 'Cheetah', chance: 'Rare' }],
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
    metaDescription: "ספארי פרטי בן 5 ימים בקניה — רכיבת אופניים בין חיות בר בפארק הל'ס גייט, פלמינגו וקרנפים באגם נקורו, ולסיום יומיים מלאים במסאי מארה. החל מ-1,520$ לאדם.",
    overview: [
      "רוב מסלולי הספארי בקניה מכניסים אתכם לרכב מהיום הראשון; זה מתחיל עם רכיבה על אופניים, בין זברות וג'ירפות ללא שמשה בינכם לבינן.",
      "פארק לאומי הל'ס גייט — אחד הפארקים היחידים בקניה שבו ניתן להלך או לרכוב על אופניים בחופשיות בין חיות הבר — פותח את הטיול, ואחריו חיי הציפורים של אגם נאיווישה ונופי בקעת השבר הגדולה, ולאחר מכן אגם נקורו, אחד ממעוזי הקרנף השחור והלבן האחרונים במדינה לצד להקות הפלמינגו המפורסמות שלו. המחצית השנייה של הטיול היא יומיים מלאים במסאי מארה, זירת חיות הבר המובהקת של קניה, ומיולי עד אוקטובר גם הבמה לחציות הנהר של הנדידה הגדולה. זמין בשלוש רמות לינה, ממחנות נוחים ועד יוקרה על-על, זהו מסלול בן חמישה ימים שנבנה כדי להרגיש מגוון ולא ממהר."
    ],
    highlights: [
      "פארק לאומי הל'ס גייט — הפארק היחיד בקניה המאפשר רכיבת אופניים והליכה חופשית בין זברות, ג'ירפות ותאואים",
      "חיי הציפורים של אגם נאיווישה ונופי בקעת השבר הגדולה",
      "אגם נקורו — חופי פלמינגו ואחד ממקלטי הקרנף השחור והלבן האחרונים בקניה",
      "יומיים מלאים במסאי מארה (הנדידה הגדולה יולי–אוקטובר)",
      "שלוש רמות לינה, ממחנות נוחים ועד יוקרה על-על"
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
      "כל דמי הכניסה לפארקים ולשמורות",
      "כל סיורי הספארי ברכב 4X4 פרטי",
      "מדריך מקצועי לאורך כל הדרך",
      "פעילות רכיבת אופניים/הליכה בהל'ס גייט",
      "כל הארוחות כמפורט",
      "לינה בהתאם למסלול",
      "העברות משדה התעופה ובין המתחמים"
    ],
    includedCategorized: {
      transfers: [
        "העברות משדה התעופה ובין המתחמים"
      ],
      accommodationMeals: [
        "כל הארוחות כמפורט",
        "לינה בהתאם למסלול"
      ],
      guidingGameDrives: [
        "כל דמי הכניסה לפארקים ולשמורות",
        "כל סיורי הספארי ברכב 4X4 פרטי",
        "מדריך מקצועי לאורך כל הדרך",
        "פעילות רכיבת אופניים/הליכה בהל'ס גייט"
      ]
    },
    excluded: [
      "טיסות בינלאומיות",
      "אשרת כניסה לקניה (כ-30 דולר לרוב האזרחויות)",
      "ביטוח נסיעות",
      "טיפים ותשרים",
      "פעילויות אופציונליות (ספארי בכדור פורח, ביקור תרבותי אצל המסאי)"
    ],
    excludedCategorized: [
      "טיסות בינלאומיות",
      "אשרת כניסה לקניה (כ-30 דולר לרוב האזרחויות)",
      "ביטוח נסיעות",
      "טיפים לצוות הגיידים והלודג'ים",
      "ספארי בכדור פורח מעל מסאי מארה (אופציונלי, כ-450 דולר לאדם)",
      "חפצים אישיים, כביסה ושיחות טלפון"
    ],
    notes: [
      "התעריפים המוצגים הם לאדם בחדר זוגי/טווין משותף; תוספת ליחיד זמינה לפי בקשה.",
      "התמחור מוערך על בסיס השוק; בחירת הלודג'ים היא הצעה הכפופה לאישור זמינות.",
      "הלינה והתעריפים כפופים לזמינות ועשויים להשתנות בהתאם לתאריך הנסיעה המדויק.",
      "דמי הפארק הלאומי בקניה נקבעים על ידי הממשלה וכפופים לשינויים ללא הודעה מוקדמת.",
      "נדרש מקדמה של 10% לאישור ההזמנה; היתרה לתשלום 28 יום לפני היציאה."
    ],
    itinerary: [
      {
        day: 1,
        title: "ניירובי ← הל'ס גייט ואגם נאיווישה",
        description: "נסיעה מניירובי אל תוך בקעת השבר הגדולה לפארק הלאומי הל'ס גייט — אחד הפארקים הבלתי-שגרתיים ביותר בקניה, שבו מבקרים יכולים לרכוב על אופניים או להלך בחופשיות בין זברות, ג'ירפות ותאואים ללא רכב. הקניון האדום הדרמטי של הפארק ופתחי האדים הגיאותרמיים יוצרים נוף שאין כמותו בשום מקום אחר במזרח אפריקה. אחר צהריים באגם נאיווישה לפני ההתארחות.",
        accommodation: "Lake Naivasha Lodge",
        meals: "פנסיון מלא",
        insiderFact: "הל'ס גייט נקרא על שם פרצה בצוקים ששימשה בעבר עדרי חיות בר כפרוזדור נדידה — וייחודי לקניה, זהו אחד הפארקים היחידים שבהם מבקרים יכולים להלך ולרכוב על אופניים בחופשיות בין חיות בר.",
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
        title: "פארק לאומי אגם נקורו",
        description: "נסיעה לפארק הלאומי אגם נקורו. האגם הבסיסי מושך להקות פלמינגו עצומות בעונה, וצובע את קווי החוף בוורוד. הפארק מוכרז מקלט קרנפים — אחד המקומות הבודדים והאמינים בקניה לצפייה בקרנף שחור ולבן באותו סיור. אריות, ברדלסים וג'ירפות רוטשילד גם הם מתגוררים שם.",
        accommodation: "Lake Nakuru Lodge",
        meals: "פנסיון מלא",
        insiderFact: "אגם נקורו היה מקלט הקרנפים הראשון שהוכרז בקניה — ההיקף הגדור מגן על כ-25 קרנפים שחורים ומעל 70 קרנפים לבנים מפני ציד לא חוקי.",
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
        title: "שמורת הטבע הלאומית מסאי מארה — הגעה",
        description: "נסיעה אל תוך שמורת הטבע הלאומית מסאי מארה — האזור המהולל ביותר בקניה לחיות בר ואחד מיעדי הספארי הגדולים בעולם. נהר מארה חוצה את השמורה; היערות והמישורים הפתוחים מאכלסים אוכלוסיות קבועות של אריות, ברדלסי ציד, ברדלסים, פילים ותאואים. סיור ספארי עם ההגעה סוקר את האזורים הפעילים ביותר בשעות אחר הצהריים המאוחרות.",
        accommodation: "Masai Mara Lodge",
        meals: "פנסיון מלא",
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
        title: "יום מלא במסאי מארה",
        description: "יום מלא של סיורי ספארי ברחבי מסאי מארה. השמורה מהווה בית לאחת ממערכות הטורפים הפוריות ביותר באפריקה לאורך כל השנה — ומיולי עד אוקטובר, הנדידה הגדולה מביאה למעלה מ-1.5 מיליון ווילדביסט החוצים את נהר מארה באחד ממחזות הטבע הדרמטיים ביותר. הגיידה שלכם מנווטת בשמורה בהתבסס על מעקב בזמן אמת ועשרות שנות ניסיון מקומי.",
        accommodation: "Masai Mara Lodge",
        meals: "פנסיון מלא",
        insiderFact: "חציות נהר מארה במהלך הנדידה הגדולה אינן אירועים מתוזמנים — הווילדביסט מתקבצים על הגדה במשך שעות לפני שהם מתחייבים לחצייה. הגיידה שלכם קוראת את התנהגות העדר כדי למקם אתכם מראש.",
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
        title: "חזרה לניירובי ויציאה",
        description: "נסיעה חזרה לניירובי כאשר בקעת השבר הגדולה באופק. העברה לנמל התעופה הבינלאומי ג'ומו קניאטה לטיסת ההמשך שלכם.",
        accommodation: "N/A",
        meals: "ארוחת בוקר"
      }
    ]
  },
  {
    slug: "9-day-honeymoon-safari-zanzibar",
    name: "ספארי ירח דבש בן 9 ימים ובריחה לחוף זנזיבר",
    duration: 9,
    destinations: [
      "tarangire",
      "ngorongoro",
      "serengeti",
      "zanzibar"
    ],
    type: "beach_extension",
    bestMonths: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Dec', 'Jan', 'Feb'],
    wildlifeTargets: [{ name: 'African Elephant', chance: 'High' }, { name: 'Lion', chance: 'Guaranteed' }, { name: 'Black Rhino', chance: 'High' }, { name: 'Leopard', chance: 'Rare' }, { name: 'African Buffalo', chance: 'High' }],
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
    metaDescription: "ירח דבש בן 9 ימים בטנזניה המשלב את עדרי הפילים של טרנגירה, ירידה אל מכתש נגורונגורו ויומיים בסרנגטי עם בריחה רגועה לחוף זנזיבר. החל מ-3,847$ לאדם.",
    overview: [
      "חמישה ימי ספארי, ארבעה לילות חוף, ואף לא בוקר אחד עם שעון מעורר שלא בחרתם בעצמכם — זהו ירח דבש שנבנה סביב הקצב לא פחות מסביב הנוף.",
      "מחצית הספארי נעה בין עדרי הפילים של טרנגירה ויער הבאובב העתיק, יומיים מלאים בטריטוריית האריות והברדלסים של מרכז סרנגטי, וירידה מודרכת אל מכתש נגורונגורו, אתר מורשת עולמית של אונסק״ו, לפני שטיסה קצרה מחליפה את רכב הספארי בחוף נונגווי בקצה הצפוני של זנזיבר. ארבעה לילות שלווים שם משאירים מקום לצלילה, שיט דאו בשקיעה, ביקור בסטון טאון, או שום דבר בכלל. שתי רמות הלינה, Wilderness Trail ו-Wilderness Sovereign, נבחרו במיוחד עבור קצב של ירח דבש — לעולם לא ממהר, לעולם לא עמוס מדי."
    ],
    highlights: [
      "עדרי הפילים ויער הבאובב העתיק של טרנגירה",
      "יומיים מלאים בטריטוריית הטורפים המובחרת של מרכז סרנגטי",
      "ירידה מודרכת אל מכתש נגורונגורו, אתר מורשת עולמית של אונסק״ו",
      "ארבעה לילות המסיימים את הטיול על חוף נונגווי בזנזיבר",
      "שתי רמות לינה, שתיהן נבנו לקצב של ירח דבש — לעולם לא ממהר"
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
      "כל דמי הכניסה לפארקים ולשמורות",
      "כל סיורי הספארי ברכב 4X4 פרטי",
      "מדריך מקצועי לאורך כל הספארי",
      "טיסה מארושה לזנזיבר",
      "כל הארוחות כמפורט",
      "לינה בהתאם למסלול",
      "העברות משדה התעופה ובין המתחמים"
    ],
    includedCategorized: {
      transfers: [
        "טיסה מארושה לזנזיבר",
        "העברות משדה התעופה ובין המתחמים"
      ],
      accommodationMeals: [
        "כל הארוחות כמפורט",
        "לינה בהתאם למסלול"
      ],
      guidingGameDrives: [
        "כל דמי הכניסה לפארקים ולשמורות",
        "כל סיורי הספארי ברכב 4X4 פרטי",
        "מדריך מקצועי לאורך כל הספארי"
      ]
    },
    excluded: [
      "טיסות בינלאומיות",
      "דמי אשרה",
      "ביטוח נסיעות",
      "טיפים",
      "פעילויות אופציונליות (צלילה, סיורי סטון טאון, טיפולי ספא)"
    ],
    excludedCategorized: [
      "טיסות בינלאומיות",
      "דמי אשרה",
      "ביטוח נסיעות",
      "טיפים",
      "פעילויות אופציונליות (צלילה, סיורי סטון טאון, טיפולי ספא)",
      "חפצים אישיים, כביסה ושיחות טלפון"
    ],
    notes: [
      "התעריפים המוצגים הם לאדם בחדר זוגי/טווין משותף; תוספת ליחיד זמינה לפי בקשה.",
      "הלינה והתעריפים כפופים לזמינות ועשויים להשתנות בהתאם לתאריך הנסיעה המדויק.",
      "דמי הפארק הלאומי ואזור השימור בטנזניה נקבעים על ידי הממשלה וכפופים לשינויים ללא הודעה מוקדמת.",
      "נדרש מקדמה של 30% לאישור ההזמנה; היתרה לתשלום 60 יום לפני היציאה.",
      "תעריפי הטיסה הפנימית והלודג' מאושרים בעת ההזמנה."
    ],
    faq: [
      {
        q: "האם המסלול הזה מיועד רק לזוגות, או שגם משפחה וחברים יכולים להצטרף?",
        a: "הוא מתוכנן סביב שניים, אך שתי הרמות מתאימות היטב גם לקבוצות קטנות של משפחה או חברים החוגגים יחד — התמחור לעיל מתאים לעד 6 אנשים."
      },
      {
        q: "מה ההבדל בין שתי רמות הלינה?",
        a: "Wilderness Trail משלב לודג'ים נוחים וממוקמים היטב עם אותו מסלול והדרכה כמו הרמה הפרימיום שלנו — התמסרות מלאה ללא המחיר הגבוה ביותר. Wilderness Sovereign משדרג כל תחנה לחלק מהמתחמים המהוללים ביותר בטנזניה ובזנזיבר, כולל Gibb's Farm ו-Kilindi Zanzibar."
      },
      {
        q: "האם ניתן לארגן מגעים מיוחדים לירח דבש — עוגה, פרחים, ארוחת ערב פרטית?",
        a: "כן — רוב לודג'י השותפים שלנו מציעים חבילות ירח דבש (יין תוסס, פרחים, ארוחות ערב פרטיות) לפי בקשה. הודיעו לנו בעת ההזמנה ונשלב זאת במסלול שלכם."
      },
      {
        q: "האם עלינו להיות מטיילים מנוסים לטיול הזה?",
        a: "כלל לא. כל שלב — סיורי הספארי, הטיסה הפנימית לזנזיבר ושהות החוף — מלווה ומאורגן במלואו. זהו לעיתים קרובות הטיול הגדול הראשון עבור זוגות רבים."
      },
      {
        q: "מהי העונה הטובה ביותר לירח דבש במסלול הזה?",
        a: "עונת היובש (יוני–אוקטובר) מציעה את הצפייה האמינה ביותר בחיות בר ואת מזג האוויר הרגוע ביותר בזנזיבר. דצמבר–פברואר הוא חלופה חזקה עם פחות קהל ותנאי חוף מצוינים."
      },
      {
        q: "האם ארבעה לילות בזנזיבר מספיקים?",
        a: "זהו קטע אמיתי ולא ממהר של זמן פנוי לאחר חמישה ימי ספארי פעילים — רוב הזוגות מוצאים זאת בדיוק במידה, אם כי הארכה בלילה או שניים ניתנת לארגון בקלות אם תרצו יותר זמן חוף."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "ארושה לפארק לאומי טרנגירה",
        description: "איסוף מהמלון שלכם בארושה, ולאחריו סיור ספארי מודרך ליום מלא דרך טרנגירה, במעקב אחר עדרי פילים מתחת לבאובבים עתיקים, לפני שממשיכים לקאראטו ללינת הלילה.",
        accommodation: "Karatu Lodge",
        meals: "פנסיון מלא",
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
        title: "קאראטו למרכז סרנגטי",
        description: "נסיעה דרך יער נגורונגורו עם עצירה בנקודת התצפית של המכתש, ולאחר מכן המשך למרכז סרנגטי לאחר-צהריים של סיורי ספארי מודרכים.",
        accommodation: "Serengeti Tented Camp",
        meals: "פנסיון מלא",
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
        title: "מרכז סרנגטי, יום מלא",
        description: "יום מלא הטבול במישורים הפתוחים של מרכז סרנגטי, אחד מהטריטוריות העקביות ביותר בטנזניה לאריות, ברדלסים וברדלסי ציד.",
        accommodation: "Serengeti Tented Camp",
        meals: "פנסיון מלא",
        insiderFact: "הפרידות המתגוררות בעמק סרונרה הופכות את מרכז סרנגטי לאחד מהמקומות האמינים ביותר באפריקה לצפייה באריות בכל עת בשנה — ללא צורך בתזמון נדידה.",
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
        title: "ממרכז סרנגטי למכתש נגורונגורו",
        description: "ירידה מודרכת אל מכתש נגורונגורו — אתר מורשת עולמית של אונסק״ו ובית לחמשת הגדולים — לפני החזרה לקאראטו ללינת הלילה.",
        accommodation: "Karatu Lodge",
        meals: "פנסיון מלא",
        insiderFact: "נגורונגורו הוא אחד המקומות הבודדים בטנזניה שבו ניתן לצפות בקרנף שחור בצורה אמינה בסיור ספארי אחד.",
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
        title: "מקאראטו לזנזיבר",
        description: "בוקר רגוע בלודג', עם זמן להליכה במטע קפה אם תרצו, לפני ארוחת צהריים מוקדמת וההעברה הפרטית שלכם לזנזיבר. הגיידה המקומית שלנו מקבלת את פניכם עם ההגעה ומלווה אתכם לחוף נונגווי.",
        accommodation: "Nungwi Beach Resort",
        meals: "ארוחת בוקר, ארוחת צהריים",
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
        title: "חוף נונגווי, זנזיבר",
        description: "היום הראשון מתוך שלושה ימים שלווים על החול הלבן של זנזיבר — פתוח לצלילה, שיט דאו בשקיעה, ביקור בסטון טאון, או פשוט החוף.",
        accommodation: "Nungwi Beach Resort",
        meals: "לפי הרמה",
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
        title: "חוף נונגווי, זנזיבר",
        description: "יום חופשי מלא על החוף — צלילה, שנורקלינג, או פשוט לא לעשות דבר.",
        accommodation: "Nungwi Beach Resort",
        meals: "לפי הרמה",
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
        title: "חוף נונגווי, זנזיבר",
        description: "היום המלא האחרון שלכם בזנזיבר — שיט דאו בשקיעה הוא דרך אהובה לסיים את הטיול.",
        accommodation: "Nungwi Beach Resort",
        meals: "לפי הרמה",
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
        title: "יציאה",
        description: "העברה פרטית לנמל התעופה הבינלאומי עאבייד כרומה בזנזיבר לטיסת ההמשך שלכם.",
        accommodation: "N/A",
        meals: "ארוחת בוקר"
      }
    ]
  },
  {
    slug: "10-day-ultimate-great-migration-mara-river-crossing",
    name: "ספארי בן 10 ימים — הנדידה הגדולה האולטימטיבית וחציית נהר מארה",
    duration: 10,
    destinations: [
      "tarangire",
      "manyara",
      "ngorongoro",
      "serengeti"
    ],
    type: "migration",
    bestMonths: ['Jul', 'Aug', 'Sep', 'Oct'],
    wildlifeTargets: [{ name: 'Wildebeest', chance: 'Seasonal', note: 'Mara River crossing' }, { name: 'Plains Zebra', chance: 'Seasonal' }, { name: 'African Elephant', chance: 'High' }, { name: 'Lion', chance: 'Guaranteed' }, { name: 'Black Rhino', chance: 'High' }, { name: 'Nile Crocodile', chance: 'Seasonal' }],
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
    metaDescription: "ספארי פרטי בן 10 ימים בטנזניה הבנוי סביב מעברי נהר מארה הדרמטיים של ההנדידה הגדולה, בנוסף לטרנגירה, מניארה, נגורונגורו וסרנגטי. החל מ-4,775$ לאדם.",
    overview: [
      "חציות נהר הן התמונה המבוקשת ביותר בצילום חיות בר אפריקאיות, וגם הפחות מובטחת — כך שמסלול זה עושה את הדבר האחד שבאמת משפר את הסיכויים שלכם: הוא מעניק לכם שלושה ימים מלאים באזור החצייה במקום יום אחד.",
      "גם ההכנה חשובה. הטיול נפתח בעדרי הפילים של טרנגירה וספארי הליכה מודרך נדיר, ירידה של יום מלא אל מכתש נגורונגורו לחמשת הגדולים, ועצירה בערוץ אולדובאי, אתר כמה מהממצאים המאובנים החשובים ביותר של האדם הקדמון שאי פעם נמצאו. משם, הדרך פונה צפונה אל טריטוריית נהר מארה בסרנגטי לשלושה ימים רצופים הממוקמים כדי לתפוס את חציות הנדידה הגדולה, במקום ההימור היחיד שרוב המסלולים הקצרים יותר מציעים. שתי רמות הלינה, Wilderness Trail ו-Wilderness Sovereign, נבנו שתיהן סביב אותה מטרה: מקסום הסיכוי שתהיו במקום הנכון כאשר העדרים סוף-סוף מתחייבים לנהר."
    ],
    highlights: [
      "עדרי הפילים וספארי הליכה מודרך של טרנגירה",
      "ירידה מודרכת של יום מלא אל מכתש נגורונגורו",
      "עצירה בערוץ אולדובאי, ערש האנושות",
      "שלושה ימים מלאים בטריטוריית חציית נהר מארה בצפון הסרנגטי",
      "שתי רמות לינה, שתיהן נבנו למקסום סיכויי חציית הנהר שלכם"
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
      "כל דמי הכניסה לפארקים ולשמורות",
      "כל סיורי הספארי ברכב 4X4 פרטי",
      "מדריך מקצועי לאורך כל הדרך",
      "כניסה לערוץ אולדובאי",
      "כל הארוחות כמפורט",
      "לינה בהתאם למסלול",
      "העברות משדה התעופה ובין המתחמים"
    ],
    includedCategorized: {
      transfers: [
        "העברות משדה התעופה ובין המתחמים"
      ],
      accommodationMeals: [
        "כל הארוחות כמפורט",
        "לינה בהתאם למסלול"
      ],
      guidingGameDrives: [
        "כל דמי הכניסה לפארקים ולשמורות",
        "כל סיורי הספארי ברכב 4X4 פרטי",
        "מדריך מקצועי לאורך כל הדרך",
        "כניסה לערוץ אולדובאי"
      ]
    },
    excluded: [
      "טיסות בינלאומיות",
      "דמי אשרה",
      "ביטוח נסיעות",
      "טיפים",
      "פעילויות אופציונליות"
    ],
    excludedCategorized: [
      "טיסות בינלאומיות",
      "דמי אשרה",
      "ביטוח נסיעות",
      "טיפים",
      "פעילויות אופציונליות",
      "חפצים אישיים, כביסה ושיחות טלפון"
    ],
    notes: [
      "התעריפים המוצגים הם לאדם בחדר זוגי/טווין משותף; תוספת ליחיד זמינה לפי בקשה.",
      "הלינה והתעריפים כפופים לזמינות ועשויים להשתנות בהתאם לתאריך הנסיעה המדויק.",
      "דמי הפארק הלאומי ואזור השימור בטנזניה נקבעים על ידי הממשלה וכפופים לשינויים ללא הודעה מוקדמת.",
      "נדרש מקדמה של 30% לאישור ההזמנה; היתרה לתשלום 60 יום לפני היציאה.",
      "תעריפי הקבוצה של Wilderness Sovereign עבור 3–4 אורחים מחושבים על בסיס חבילה מאוגדת ומאושרים בעת ההזמנה."
    ],
    faq: [
      {
        q: "מתי הזמן הטוב ביותר לראות את חציות נהר מארה?",
        a: "החציות בדרך כלל מתרחשות מיולי עד אוקטובר כאשר הנדידה עוברת בצפון הסרנגטי, אם כי התזמון המדויק משתנה משנה לשנה בהתאם לכמות הגשמים. שום דבר אינו מובטח ביום ספציפי כלשהו — וזו בדיוק הסיבה שהמסלול הזה בונה שלושה ימים מלאים באזור החצייה במקום יום אחד."
      },
      {
        q: "למה שלושה ימים בנהר מארה במקום יום אחד בלבד?",
        a: "חציות נהר בלתי צפויות — עדרים יכולים להתקבץ על הגדה שעות או ימים לפני שהם מתחייבים. יום אחד מעניק לכם הימור אחד; שלושה ימים משפרים באופן משמעותי את הסיכויים שלכם להיות במקום הנכון כשזה קורה."
      },
      {
        q: "האם המסלול הזה מתאים למטיילי ספארי בפעם הראשונה?",
        a: "כן — המסלול נבנה באופן טבעי מטרנגירה ונגורונגורו עם צפייה מרוכזת ואמינה יותר בחיות בר, לפני הגעה לטריטוריית חציית הנהר של המארה שהיא בעלת שונות גבוהה יותר, כך שמובטחת לכם צפייה חזקה בחיות בר לאורך כל הדרך גם בימים ללא חצייה."
      },
      {
        q: "מהו ערוץ אולדובאי, ולמה הוא כלול?",
        a: "ערוץ אולדובאי, המכונה לעיתים קרובות 'ערש האנושות', הוא המקום שבו התגלו כמה מהממצאים המאובנים החשובים ביותר של האדם הקדמון. זוהי עצירה קצרה אך מרתקת באמת בנסיעה בין נגורונגורו לסרנגטי."
      },
      {
        q: "מה ההבדל בין שתי רמות הלינה?",
        a: "Wilderness Reserve משלב מתחמים נוחים וממוקמים היטב עם אותו מסלול והדרכה כמו הרמה הפרימיום שלנו. Wilderness Sovereign משדרג כל תחנה למחנות ולודג'ים המהוללים ביותר בטנזניה — כמה מהם עם תעריפי חבילת ספארי המשלבים ישירות סיורי ספארי משותפים בשהות שלכם."
      },
      {
        q: "האם זהו ספארי פרטי או משותף?",
        a: "הגיידה והרכב פרטיים לקבוצה שלכם לאורך כל הדרך, מלבד סיורי ספארי משותפים במתחמי Wilderness Sovereign נבחרים הפועלים בתעריף חבילת ספארי."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "ארושה",
        description: "הגעה והעברה לארושה ללינת לילה לפני תחילת הספארי שלכם.",
        accommodation: "Arusha Lodge",
        meals: "כולל ארוחת בוקר",
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
        title: "יום פנוי, ארושה",
        description: "יום חופשי בארושה כדי להתמקם לפני היציאה לפארקים.",
        accommodation: "Arusha Lodge",
        meals: "פנסיון מלא",
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
        title: "פארק לאומי טרנגירה",
        description: "סיור ספארי מודרך דרך טרנגירה, במעקב אחר עדרי הפילים הגדולים בטנזניה מתחת לבאובבים עתיקים.",
        accommodation: "Tarangire Lodge",
        meals: "פנסיון מלא",
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
        title: "ספארי הליכה בטרנגירה לאגם מניארה לקאראטו",
        description: "ספארי הליכה בבוקר בטרנגירה, ולאחר מכן לאגם מניארה לפני שממשיכים לקאראטו ללינת הלילה.",
        accommodation: "Karatu Lodge",
        meals: "פנסיון מלא",
        insiderFact: "טרנגירה הוא אחד הפארקים הבודדים בטנזניה שבהם מותרים ספארי הליכה מודרכים — הזדמנות נדירה לעקוב אחר חיות בר ברגל עם שומר חמוש.",
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
        title: "מכתש נגורונגורו",
        description: "ירידה מודרכת של יום מלא אל מכתש נגורונגורו, במעקב אחר חמשת הגדולים בתוך הקלדרה הוולקנית השלמה הגדולה בעולם.",
        accommodation: "Karatu Lodge",
        meals: "פנסיון מלא",
        insiderFact: "נגורונגורו הוא אחד המקומות הבודדים בטנזניה שבו ניתן לצפות בקרנף שחור בצורה אמינה בסיור ספארי אחד.",
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
        title: "מנגורונגורו למרכז סרנגטי (דרך ערוץ אולדובאי)",
        description: "מעבר דרך אזור השימור נגורונגורו עם עצירה בערוץ אולדובאי — המכונה לעיתים קרובות ערש האנושות — לפני המשך אל תוך מרכז סרנגטי.",
        accommodation: "Serengeti Tented Camp",
        meals: "פנסיון מלא",
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
        title: "ממרכז סרנגטי לצפון הסרנגטי / נהר מארה",
        description: "נסיעה צפונה לעבר נהר מארה, כניסה לטריטוריית חציית הנהר המובחרת של הסרנגטי.",
        accommodation: "Mara River Camp",
        meals: "פנסיון מלא",
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
        title: "חציית נהר מארה, יום מלא",
        description: "יום מלא הממוקם כדי לעקוב אחר חציות הנהר של הנדידה הגדולה.",
        accommodation: "Mara River Camp",
        meals: "פנסיון מלא",
        insiderFact: "חציות נהר אינן אירועים מתוזמנים — עדרים יכולים להתקבץ על הגדה שעות לפני שהם מתחייבים. הגיידה שלכם קוראת את התנהגות העדר כדי למקם אתכם מראש.",
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
        title: "חציית נהר מארה, יום מלא",
        description: "יום שני מלא באותה טריטוריה — חציות נהר לא פועלות לפי לוח זמנים, כך שהיום הנוסף הזה משפר משמעותית את הסיכויים שלכם לחזות באחת.",
        accommodation: "Mara River Camp",
        meals: "פנסיון מלא",
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
        title: "יציאה",
        description: "העברה למסלול הנחיתה קוגטנדה לטיסת ההמשך שלכם.",
        accommodation: "N/A",
        meals: "ארוחת בוקר"
      }
    ]
  },
  {
    slug: "tanzania-photographic-safari",
    name: "ספארי צילום בטנזניה — טרנגירה, מכתש נגורונגורו וסרנגטי",
    duration: 10,
    destinations: [
      "tarangire",
      "ngorongoro",
      "serengeti"
    ],
    type: "photographic",
    bestMonths: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    wildlifeTargets: [{ name: 'African Elephant', chance: 'High' }, { name: 'Lion', chance: 'Guaranteed' }, { name: 'Leopard', chance: 'High' }, { name: 'Cheetah', chance: 'High' }, { name: 'Black Rhino', chance: 'Rare' }, { name: 'Wildebeest', chance: 'Seasonal' }],
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
    metaDescription: "ספארי צילום בן 10 ימים בטנזניה עם קבוצות קטנות, מקום נוסף ברכב לציוד, ומדריך המתמצא באור ובמיקום — טרנגירה, נגורונגורו וסרנגטי. החל מ-4,597$ לאדם.",
    overview: [
      "רוב הספארים נעים מהר: תצפית, כמה פריימים דרך החלון, והלאה לתחנה הבאה לפני שהייתה לכם באמת הזדמנות לראות מה לפניכם. זה נבנה בכיוון ההפוך. איטי דיו, ועם מספיק מקום ברכב, כדי באמת לתפוס את הצילום — לא רק את הזיכרון של כמעט לתפוס אותו.",
      "במהלך 10 ימים, ספארי הצילום הזה נע בין ארבעה מהאזורים המתגמלים ביותר בצפון טנזניה. תתחילו בין עדרי הפילים והבאובבים העתיקים של טרנגירה, תבלו יום מלא ברצפת המכתש הצפופה בחיות בר של נגורונגורו, ואז תפנו לתוך הסרנגטי — תחילה למישורי המרכז, אחד מאזורי חתולי הבר האמינים ביותר ביבשת, ולאחר מכן צפונה לתוך טריטוריית הנדידה, שם האור הופך לזהוב והאופק כמעט ולא נגמר. כל יום נבנה סביב אור, מיקום וסבלנות, לא רשימת פארקים לסמן וי לצידם.",
      "הקבוצות נשארות קטנות מספיק כך שלכל צלם יש שורה משלו ומרחב עבודה אמיתי לעדשה ארוכה, ואתם מלווים לאורך כל הדרך על ידי גיידה בעל הסמכה מקצועית שתודרך במיוחד על מיקום צילומי — לא רק היכן החיות נמצאות, אלא היכן יהיה האור כשתגיעו לשם. בין אם אתם מצלמים חיות בר כבר עשרים שנה או מביאים מצלמה חדשה לטיול הגדול הראשון שלכם, זהו ספארי בטנזניה שנבנה עבור אנשים שרוצים לחזור הביתה עם תיקייה של תמונות שהם באמת גאים בהן, לא רק טלפון מלא בתמונות מזדמנות."
    ],
    tagline: "בבעלות מקומית מאז 2022 · גיידים מוסמכים מקצועית · יציאות בהתאמה אישית, לא תאריכי קבוצה קבועים",
    bestTimeToTravel: "יוני–אוקטובר לאור עונת היובש ולריכוזי הפילים בטרנגירה; סוף יוני–ספטמבר לפוטנציאל הנדידה וחציית הנהר בצפון הסרנגטי",
    whyDifferent: {
      heading: "מדוע החוויה הזו שונה מספארי רגיל",
      paragraphs: [
        "ספארי כללי נבנה סביב ראיית חיות בר. זה נבנה סביב צילומן — וזה משנה כמעט הכול באופן שבו הימים מתגלגלים.",
        "הרכבים ממוקמים לפי אור וזווית, לא רק קרבה, מה שאומר שאתם עשויים לגשת לתצפית מכיוון לא צפוי אם זה אומר שהשמש תיפול נכון. הזמן בתצפית נמדד לפי הסבלנות שתמונה דורשת, לא קצב לוח זמנים קבוע — אם נראה שגאווה עומדת לזוז, אתם מחכים. והגיידה שלכם לא רק מוצא לכם חיות; הוא קורא היכן ייפול האור בעוד עשרים דקות, היכן הרקע יתפנה משיח מסיח דעת, ומתי כדאי להישאר במקומכם במקום לרדוף אחר קריאת הרדיו הבאה.",
        "אם מעולם לא עשיתם ספארי מונחה-צילום, זה ההבדל שתרגישו כמעט מיד: פחות מיהרה, יותר הסתכלות."
      ]
    },
    destinationHighlights: {
      heading: "שיאי הצילום",
      items: [
        {
          title: "טרנגירה — פילים ובאובבים",
          text: "כאן הספארי נפתח, ומדובר במקום עדין ונדיב למצוא בו את הקצב עם המצלמה. עדרי פילים גדולים נעים בין באובבים עתיקים שהצללים שלהם לבדם שווים חצי מכרטיס הזיכרון, ועונת היובש עוטפת הכול באור חם, מאובק ומאוחר אחר-הצהריים. זה מתגמל באותה מידה עבור צילומי נוף רחבים כמו עבור דיוקנאות חיות בר קרובים — תזכורת טובה, מוקדם בטיול, להניח לעיתים את העדשה הארוכה ולצלם את הנוף שבו חיים הפילים."
        },
        {
          title: "מכתש נגורונגורו — צפיפות ודרמה",
          text: "יום מלא של עבודה ברצפת המכתש, ובניגוד לכמעט כל מקום אחר בטנזניה, אינכם צריכים לחפש קשה נושאים כאן — המערכת האקולוגית הסגורה של המכתש מכניסה אריות, פילים, תאואים, צבועים, פלמינגו, ובמעט מזל, את הקרנף השחור בסכנת הכחדה, כולם בתוך נוף קומפקטי ודרמטי. למי שמגיע לראשונה, זה לעיתים קרובות היום שבו הביטחון מתמקם. לצלמים מנוסים, זה יום של בחירה בין יותר מדי אפשרויות טובות."
        },
        {
          title: "מרכז סרנגטי — טורפים",
          text: "אזור חתולי הבר האמין ביותר לאורך כל השנה בטנזניה, והמקום במסלול הזה שנבנה לסבלנות. קופיות סלע, מישורים פתוחים וקצוות יער מעניקים לכם הזדמנויות חוזרות לאריות, ברדלסים וברדלסי ציד — לא רק תצפית מרוחקת דרך הדשא, אלא התנהגות אמיתית: ברדלס יורד מעץ, גורים משחקים-נלחמים בצל, ברדלס ציד קורא את האופק לפני ציד."
        },
        {
          title: "צפון הסרנגטי — טריטוריית הנדידה",
          text: "הקטע הפראי ביותר בטיול. בהתאם לתזמון, אתם עשויים למצוא את עצמכם מצלמים עדרי ווילדביסט המתקבצים בקצה הנהר, את המתח שלפני חצייה, או טורפים העוקבים אחר העדרים על פני מישורים פתוחים תחת שמיים פתוחים עצומים. חציות אף פעם לא ניתן להבטיח — הטבע לא פועל לפי מסלול — אך האור והנוף כאן יוצאי דופן גם ביום שקט."
        },
        {
          title: "מה להביא",
          text: "מומלץ גוף DSLR או מירורלס, עדשה בטווח רחב-בינוני לנוף ולצילומי סביבה, ועדשת טלה של 400 מ״מ לפחות — עדשת 500–600 מ״מ מתגמלת במיוחד נושאים מרוחקים ודיוקנאות חיות בר דחוסים. עדשת 70–200 מ״מ שימושית לתצפיות קרובות יותר ולצילומי סיפור מהרכב. חדשים בצילום חיות בר? אל תדאגו להגיע עם ציוד מקצועי מלא — מדריך אריזה וציוד מלא, מותאם לציוד שלכם, יישלח לאורחים מאושרים לפני היציאה."
        }
      ]
    },
    highlights: [
      "עבדו כל תצפית כראוי, עם מרחב הרכב והזמן להרכיב את הצילום ולא רק לצלם ולהמשיך הלאה",
      "טיילו בקבוצה קטנה וממוקדת צילום ולא בספארי כללי מעורב תחומי עניין",
      "כסו את האזורים הצילומיים החזקים ביותר של טנזניה — פילים ובאובבים, צפיפות המכתש, טורפי הסרנגטי וטריטוריית הנדידה — בטיול אחד",
      "קבלו הדרכה מעשית בשטח על מיקום, אור והגדרות, לא רק נהג שמזדמן לדעת היכן החיות נמצאות"
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
      "כל דמי הפארקים, הקונצסיות ואזורי השימור",
      "רכב, גיידה ודלק עבור כל יום סיור ספארי",
      "העברות משדה התעופה",
      "מי שתייה",
      "לינת הגיידה",
      "ביטוח פינוי רפואי חירום"
    ],
    excluded: [
      "טיסות בינלאומיות",
      "דמי אשרה",
      "ביטוח נסיעות",
      "טיפים",
      "השכרת מצלמה/עדשה"
    ],
    notes: [
      "התעריפים המוצגים הם לאדם, בחדר זוגי משותף.",
      "מקדמה של 30% מבטיחה את ההזמנה, עם יתרה לתשלום 60 יום לפני היציאה.",
      "מסלול זה נבנה סביב מחנות הנדידה של צפון הסרנגטי, הזמינים בערך מיוני עד אוקטובר; יציאה בעונה נמוכה תשתמש במסלול אחר המבוסס על נדוטו.",
      "הלינה והתעריפים כפופים לזמינות ועשויים להשתנות בהתאם לתאריך הנסיעה המדויק בתוך העונה.",
      "דמי הפארק הלאומי ואזור השימור בטנזניה נקבעים על ידי הממשלה וכפופים לשינויים ללא הודעה מוקדמת."
    ],
    faq: [
      {
        q: "האם עליי להיות צלם מנוסה כדי להצטרף?",
        a: "לא — מסלול זה נבנה כדי להתאים לכל רמות המיומנות. ההדרכה בשטח מעשית ומתאימה עצמה לנקודת ההתחלה שלכם, בין אם זהו הטיול הרציני הראשון שלכם עם חיות בר או ציוד מתקדם יותר שאתם כבר מכירים לעומק."
      },
      {
        q: "כמה עולה ספארי הצילום הזה?",
        a: "רמת Wilderness Reserve מתחילה מ-4,597 דולר לאדם בעונה נמוכה, ועולה ל-6,556 דולר בעונה גבוהה. רמת Wilderness Sovereign, עם שדרוג לודג'ים בכל התחנות כולל Ngorongoro Lodge (אוסף Meliá) ומחנות היוקרה הטנטיים של Siringit, מתחילה מ-5,692 דולר לאדם בעונה נמוכה ו-9,668 דולר בעונה גבוהה. התמחור כולל את כל דמי הפארקים ואזורי השימור, סיורי ספארי, ארוחות, גיידה והעברות משדה התעופה — בקשו הצעת מחיר אישית לתאריכים מדויקים."
      },
      {
        q: "במה זה שונה מספארי רגיל בטנזניה?",
        a: "הקצב, מיקום הרכב והזמן שמושקע בכל תצפית — כולם נבנים סביב צילום קודם כל — עצירות ארוכות יותר, יותר סבלנות, והדרכה שמתמקדת באור ובקומפוזיציה ולא רק באיתור חיות בר."
      },
      {
        q: "האם זו יציאה פרטית או קבוצתית?",
        a: "מותאם אישית לתאריכים שלכם, עם גודל קבוצה שנשמר קטן במכוון כדי שלכל צלם יהיה מרחב עבודה ראוי — תקרה מדויקת ואפשרויות יציאה פרטית זמינות לפי בקשה."
      },
      {
        q: "מהי העונה הטובה ביותר בשנה למסלול הזה?",
        a: "יוני עד אוקטובר מעניק את האור היבש ביותר ואת ריכוזי הפילים החזקים ביותר בטרנגירה; סוף יוני עד ספטמבר הוא החלון החזק ביותר לנדידה ולפעילות חציית נהר בצפון הסרנגטי."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "הגעה לארושה",
        location: "ארושה",
        description: "נחיתה בנמל התעופה הבינלאומי קילימנג'רו ותנו לארושה להרגיע אתכם בעדינות לפני שהספארי מתחיל כהלכה. בערב, תשבו עם הגיידה שלכם לארוחת ערב לתדריך מלא — לא רק המסלול שלפניכם, אלא שיחה אמיתית על הציוד שלכם, רמת הניסיון שלכם ומה אתם מקווים לחזור הביתה איתו. מגיעים בפעם הראשונה, זהו הרגע לשאול כל שאלה ששמרתם; צלמים מנוסים, כאן הגיידה שלכם מתחיל להתאים את הטיול לדרך שבה אתם באמת עובדים.",
        accommodation: "Kahawa House, Arusha",
        meals: "ארוחת ערב",
        insiderFact: "זהו רגע טוב למסור לגיידה שלכם רשימת צילום ספציפית — מין מסוים, התנהגות, סגנון קומפוזיציה — כדי שהמסלול ייבנה סביבה מהיום הראשון.",
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
        title: "פארק לאומי טרנגירה",
        location: "פארק לאומי טרנגירה",
        description: "יומיים מלאים למציאת הקצב שלכם מאחורי המצלמה בין עדרי הפילים והמישורים המנוקדים בבאובבים של טרנגירה. צפו לאבק תלוי בזהב באור אחר-הצהריים המאוחר, פילים נעים בלא חיפזון בין העצים, ומספיק זמן להתנסות גם בצילומי נוף רחבים וגם בדיוקנאות חיות בר קרובים לפני שקצב הספארי מתעצם.",
        accommodation: "Burunge Tented Lodge",
        meals: "כל הארוחות",
        insiderFact: "אבק מואר מאחור הוא אחד המראות המסמלים את טרנגירה — צילום לכיוון השמש באחר-הצהריים המאוחר, ולא בגבה אליה, הוא לרוב המקור לפריימים הטובים ביותר.",
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
        title: "פארק לאומי טרנגירה",
        location: "פארק לאומי טרנגירה",
        description: "יומיים מלאים למציאת הקצב שלכם מאחורי המצלמה בין עדרי הפילים והמישורים המנוקדים בבאובבים של טרנגירה. צפו לאבק תלוי בזהב באור אחר-הצהריים המאוחר, פילים נעים בלא חיפזון בין העצים, ומספיק זמן להתנסות גם בצילומי נוף רחבים וגם בדיוקנאות חיות בר קרובים לפני שקצב הספארי מתעצם.",
        accommodation: "Burunge Tented Lodge",
        meals: "כל הארוחות",
        insiderFact: "חלק מעצי הבאובב בטרנגירה עתיקים בהרבה מאלף שנה — שווה צילום רחב-זווית הכולל את הצללית המלאה של העץ על רקע השמיים הפתוחים.",
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
        title: "מעבר לנגורונגורו",
        location: "מכתש נגורונגורו",
        description: "יום קצר יותר ושקט יותר כשאתם משאירים מאחור את השטח הנמוך של טרנגירה ומטפסים לעבר רמות נגורונגורו. יש זמן הערב לתדריך מסודר על ירידת המכתש של מחר — מה יעשה האור, כיצד היום יתקצב, ומה צריך להיות מוכן לפני שהשערים נפתחים עם שחר.",
        accommodation: "Ngorongoro Serena Safari Lodge",
        meals: "כל הארוחות",
        insiderFact: "רצפת המכתש נשארת כמה מעלות קרירה יותר מהשפה, אפילו בצהריים — ידיים קרות מאטות את החלפת העדשות, אז שמרו כפפות בהישג יד לירידה המוקדמת.",
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
        title: "יום מלא ברצפת מכתש נגורונגורו",
        location: "מכתש נגורונגורו",
        description: "יציאה מוקדמת ויום מלא של עבודה באחת מהסביבות הצפופות ביותר בחיות בר ביבשת. זהו יום של אפשרויות ולא של חיפוש — אריות במישור פתוח, פילים על רקע קירות המכתש, פלמינגו מתקבצים בוורוד לאורך שולי אגם הסודה — ותפקיד הגיידה שלכם פחות למצוא חיות ויותר לעזור לכם לבחור לאן לכוון את העדשה הבאה.",
        accommodation: "Ngorongoro Serena Safari Lodge",
        meals: "כל הארוחות",
        insiderFact: "הקירות הסגורים של המכתש גורמים לאור להתנהג אחרת מאשר במישורים פתוחים — הצללים מתרככים מאוחר יותר בבוקר ממה שהייתם מצפים במקומות אחרים.",
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
        title: "מרכז סרנגטי",
        location: "מרכז סרנגטי",
        description: "יומיים שלווים בטריטוריית הטורפים החזקה ביותר לאורך כל השנה בטנזניה. כאן הסבלנות מתחילה לשלם דיבידנדים אמיתיים: לשבת עם גאווה עד שמשהו קורה, לעקוב אחר המסלול הסביר של ברדלס בחזרה לטרפו, לחכות לקריאה האיטית של ברדלס ציד את המישורים לפני שהוא מתחייב לריצה. קופיות סלע, מישורים פתוחים ויער מפוזר מעניקים לכם מגוון רקעים אמיתי לעבוד איתו.",
        accommodation: "Kubu Kubu Tented Lodge",
        meals: "כל הארוחות",
        insiderFact: "שווה לבדוק קופיות במיוחד באור הראשון — אריות וברדלסים משתמשים לעיתים קרובות במשטחי הסלע כנקודת תצפית חמה לפני שחום היום מתחיל.",
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
        title: "מרכז סרנגטי",
        location: "מרכז סרנגטי",
        description: "יומיים שלווים בטריטוריית הטורפים החזקה ביותר לאורך כל השנה בטנזניה. כאן הסבלנות מתחילה לשלם דיבידנדים אמיתיים: לשבת עם גאווה עד שמשהו קורה, לעקוב אחר המסלול הסביר של ברדלס בחזרה לטרפו, לחכות לקריאה האיטית של ברדלס ציד את המישורים לפני שהוא מתחייב לריצה. קופיות סלע, מישורים פתוחים ויער מפוזר מעניקים לכם מגוון רקעים אמיתי לעבוד איתו.",
        accommodation: "Kubu Kubu Tented Lodge",
        meals: "כל הארוחות",
        insiderFact: "רכב חונה עם המנוע כבוי נוטה הרבה פחות להבריח ברדלס ציד לעומת רכב שממשיך למקם את עצמו מחדש — הסבלנות באמת משתלמת כאן באיכות התמונה.",
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
        title: "צפון הסרנגטי",
        location: "צפון הסרנגטי",
        description: "יומיים מלאים בחלק הפראי והרחב ביותר במסלול. בהתאם לאופן שבו העדרים נעים, אתם עשויים לבלות אחר צהריים בצפייה בווילדביסט המתקבצים בעצבנות בנקודת חצייה, או פשוט ליהנות מהיקף המישורים הפתוחים תחת שמיים שנראים כאילו הם נמשכים לנצח. שום דבר כאן לא מובטח, אבל הכול כאן דרמטי — אפילו הרגעים השקטים נושאים משקל.",
        accommodation: "Mara Under Canvas",
        meals: "כל הארוחות",
        insiderFact: "עדר מתוח ומצטופף בגדת הנהר הוא בדרך כלל הסימן הטוב ביותר לכך שחצייה עשויה להיות קרובה — הגיידה שלכם יקרא את שפת הגוף של העדר לפני שהוא ימקם את הרכב.",
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
        title: "צפון הסרנגטי",
        location: "צפון הסרנגטי",
        description: "יומיים מלאים בחלק הפראי והרחב ביותר במסלול. בהתאם לאופן שבו העדרים נעים, אתם עשויים לבלות אחר צהריים בצפייה בווילדביסט המתקבצים בעצבנות בנקודת חצייה, או פשוט ליהנות מהיקף המישורים הפתוחים תחת שמיים שנראים כאילו הם נמשכים לנצח. שום דבר כאן לא מובטח, אבל הכול כאן דרמטי — אפילו הרגעים השקטים נושאים משקל.",
        accommodation: "Mara Under Canvas",
        meals: "כל הארוחות",
        insiderFact: "קל לפספס צילומי סביבה רחבים של המישורים הפתוחים כשרודפים אחרי פעולה — שווה להקדיש בכוונה כמה פריימים להיקף הנוף עצמו.",
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
        title: "יציאה",
        location: "ארושה",
        description: "בוקר אחרון בשטח, מצלמות בחוץ עד הרגע האחרון האפשרי, לפני ההעברה חזרה לארושה והלאה לנמל התעופה הבינלאומי קילימנג'רו לטיסת ההמשך שלכם הביתה — עשרה ימים, ארבעה נופים, וכרטיס זיכרון שתמיינו במשך שבועות.",
        accommodation: "N/A",
        meals: "ארוחת בוקר"
      }
    ]
  },
  {
    slug: "authentic-exclusive-kenya",
    name: "קניה אותנטית ובלעדית — אמבוסלי, סמבורו ומסאי מארה",
    duration: 9,
    destinations: [
      "amboseli",
      "samburu",
      "masai-mara"
    ],
    type: "big_five_game_drives",
    bestMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    wildlifeTargets: [{ name: 'African Elephant', chance: 'High' }, { name: 'Grevy\'s Zebra', chance: 'Rare' }, { name: 'Reticulated Giraffe', chance: 'High' }, { name: 'Lion', chance: 'High' }, { name: 'Cheetah', chance: 'Rare' }, { name: 'Wildebeest', chance: 'Seasonal' }],
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
    metaTitle: "ספארי קניה אותנטי ובלעדי | אמבוסלי, סמבורו ומסאי מארה | EWA Safari Outfitters",
    metaDescription: "ספארי פרטי בן 9 ימים בקניה דרך אמבוסלי, סמבורו והדרום-מערב השקט של מסאי מארה — מחנות לשימוש בלעדי, שני גיידים ייעודיים והתערות תרבותית אמיתית. בהתאמה אישית מאת מפעיל ספארי מזרח-אפריקאי בבעלות מקומית.",
    overview: [
      "קניה מתגמלת מטיילים שנוסעים בשקט ובפרטיות — ומסלול זה נבנה כולו סביב הרעיון הזה. תשעה ימים, שלושה נופים, ושום דבר משותף עם איש מחוץ לקבוצה שלכם: מחנות לשימוש בלעדי הפרושים בצלו של קילימנג'רו באמבוסלי, שהות עשירה תרבותית בארץ הצפון היבשה של סמבורו, ופינה פרטית במסאי מארה שרוב המבקרים אף פעם לא מגיעים אליה.",
      "זהו לא ספארי של רשימת סימונים. אלה שלוש קניות שונות בכוונה, כל אחת מקבלת מספיק זמן כדי באמת להשתקע: הפילים הגדולי-חטים ורקעי הקילימנג'רו של אמבוסלי, הבארות השרות והתרבות הסמבורית החיה של הצפון, וצפיפות חיות הבר של הפינה הדרום-מערבית של המארה שמעט מבקרים מגיעים אליה. אותו צוות הדרכה מהימן מלווה אתכם לאורך כל הדרך, כך שהחוויה — והאמון — נבנים לאורך כל הטיול במקום להתאפס בכל תחנה.",
      "כמפעיל שנולד בטנזניה ומבוסס בארושה, הבונה כעת את מסלול קניה שלנו, אנו מעצבים את המסלול הזה באותו האופן שבו אנו מעצבים את מסלולי מזרח אפריקה שלנו: בהתאמה אישית לתאריכים שלכם, פרטי לאורך כל הדרך, ומודרך על ידי גיידים מקצועיים ומוסמכים המכירים את השטח."
    ],
    tagline: "בבעלות מקומית מאז 2022 · גיידים מוסמכים מקצועית · יציאות בהתאמה אישית, לא תאריכי קבוצה קבועים",
    bestTimeToTravel: "לאורך כל השנה; דמי השמורה של מסאי מארה עולים בין 1 ביולי ל-31 בדצמבר (שיא עונת נדידת הווילדביסט)",
    whyDifferent: {
      heading: "מדוע המסלול הזה שונה",
      paragraphs: [
        "רוב מסלולי קניה מעבירים אתכם בין לודג'ים עמוסים וידועים בתוך השמורות המרכזיות. זה נוטה לעבר הקצוות השקטים יותר של כל יעד — עדרי הפילים של אמבוסלי על רקע קילימנג'רו, שהות בסמבורו הבנויה על חילופי תרבות אמיתיים ולא עצירה מבוימת, ושמורות הטבע הדרום-מערביות של המארה במקום צפיפות הרכבים של השמורה המרכזית בשיא הנדידה.",
        "אותו צוות הדרכה מלווה אתכם לאורך כל תשעת הימים. ההמשכיות הזו חשובה יותר ממה שנשמע — עד היום הרביעי, הם כבר יודעים איך אתם אוהבים לטייל, איזה קצב אתם מעדיפים ומה אתם מקווים לראות הלאה, במקום להתחיל מחדש בכל תחנה חדשה."
      ]
    },
    destinationHighlights: {
      heading: "שיאי היעדים",
      items: [
        {
          title: "אמבוסלי",
          text: "חלק מרקעי הקילימנג'רו הטובים ביותר במזרח אפריקה, ואוכלוסייה מתגוררת של 'חטי-ענק' — פילים עם שנהב גדול במיוחד, נדירות אמיתית בכל מקום אחר ביבשת. הביצות והמישורים הפתוחים של אמבוסלי תומכים בכמה מעדרי הפילים הנראים באמינות הרבה ביותר באפריקה, לצד אריות, ברדלסי ציד וג'ירפות."
        },
        {
          title: "סמבורו",
          text: "שהות הבנויה סביב חילופי תרבות אמיתיים ולא הצגה מבוימת. מוראנים סמבוריים מסורתיים מדריכים פעילויות הנעות מהליכות תרבותיות ועד צפייה בחיות בר ברחבי המערכת האקולוגית היבשה של סמבורו — בית למינים שאינם נמצאים כמעט בשום מקום אחר בקניה, כולל זברת גרווי, ג'ירפה רשתית וגרנוק."
        },
        {
          title: "מסאי מארה — שמורות הטבע הדרום-מערביות",
          text: "נחשבת בעיני רבים לשמורה הגדולה באפריקה, חוו אותה כאן מקצה הדרום-מערב השקט שלה במקום ממרכז המארה הצפוף. חיות בר מתגוררות לאורך כל השנה, עדרים נודדים בעונה, ופחות רכבים בכל תצפית באופן ניכר."
        }
      ]
    },
    highlights: [
      "טיילו באופן פרטי ובלעדי — המחנה והרכב שלכם, לא מסלול לודג'ים משותף",
      "שלבו ספארי חיות בר גדולות עם התערות תרבותית אמיתית, לא ביקור כפר סמלי",
      "ראו את חטי אמבוסלי על רקע קילימנג'רו ואת צפיפות חיות הבר של המארה ללא הקהל של השמורה המרכזית",
      "טיילו עם אותו צוות הדרכה מהימן לאורך כל תשעת הימים, לא נהג חדש בכל תחנה"
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
      "לינה בפנסיון מלא לאורך כל הדרך",
      "גיידה ייעודית מקצועית לספארי לאורך כל המסלול",
      "כל דמי הכניסה לפארקים ולשמורות",
      "סיורי ספארי ביום ובלילה",
      "הליכות שיח מודרכות",
      "פעילויות תרבותיות בסמבורו",
      "קבלת פנים וסיוע בנמל התעופה הבינלאומי ג'ומו קניאטה",
      "כל ההעברות משדות תעופה ומסלולי נחיתה",
      "ביטוח פינוי רפואי חירום"
    ],
    excluded: [
      "משקאות פרימיום",
      "פעילויות מעבר לאלה המפורטות לעיל",
      "טיסות בינלאומיות ודמי אשרה",
      "תשרים"
    ],
    notes: [
      "התעריפים המוצגים הם לאדם בחדר זוגי/טווין משותף; תוספת ליחיד זמינה לפי בקשה.",
      "דמי הפארק במסאי מארה ובאמבוסלי עולים בעונת השיא (יולי–דצמבר), מה שבא לידי ביטוי בתמחור עונת השיא.",
      "הלינה והתעריפים כפופים לזמינות ועשויים להשתנות בהתאם לתאריך הנסיעה המדויק בתוך העונה.",
      "דמי הפארק הלאומי ושמורות הטבע בקניה נקבעים על ידי הממשלה וכפופים לשינויים ללא הודעה מוקדמת."
    ],
    faq: [
      {
        q: "האם זהו ספארי פרטי או קבוצתי?",
        a: "פרטי לחלוטין לאורך כל הדרך. הרכב והגיידה שלכם ייעודיים לקבוצה שלכם בלבד לאורך תשעת הימים כולם — לעולם לא משותפים עם קבוצה אחרת, ובהתאמה אישית לתאריכי הנסיעה שלכם ולא יציאת קבוצה קבועה."
      },
      {
        q: "האם הספארי הזה מתאים למבקרים בקניה בפעם הראשונה?",
        a: "כן. ההמשכיות של אותו צוות הדרכה בשלושת היעדים הופכת אותו למבנה נוח למטיילים בפעם הראשונה, בעוד העומק והפרטיות של כל תחנה מתגמלים גם מטיילי ספארי מנוסים יותר."
      },
      {
        q: "כמה עולה ספארי הקניה הזה?",
        a: "התמחור מתחיל מ-1,926 דולר לאדם עבור קבוצה של שישה מטיילים בעונה הירוקה (הנמוכה), ועולה עם גדלי קבוצה קטנים יותר ובעונת השיא (1 ביולי–31 בדצמבר, כאשר גם דמי השמורה של מסאי מארה עולים). בקשו הצעת מחיר אישית לתאריכי הנסיעה וגודל הקבוצה המדויקים שלכם."
      },
      {
        q: "מהי העונה הטובה ביותר בשנה למסלול הזה?",
        a: "מסלול זה עובד היטב לאורך כל השנה. עונת השיא (יולי–דצמבר) מביאה את פעילות שיא נדידת הווילדביסט של מסאי מארה לצד דמי שמורה גבוהים יותר; שאר השנה מציעה צפייה חזקה בחיות בר מתגוררות בשלושת היעדים במחיר נמוך יותר."
      },
      {
        q: "האם ניתן לשלב את המסלול הזה עם ספארי בטנזניה?",
        a: "כן — כמפעיל הפועל גם בטנזניה וגם בקניה, אנו בונים באופן קבוע מסלולי מזרח אפריקה משולבים. שאלו אותנו על שילוב המסלול הזה עם ספארי בטנזניה או הרחבת חוף בזנזיבר."
      },
      {
        q: "כיצד אנו נעים בין אמבוסלי, סמבורו ומסאי מארה?",
        a: "בטיסה פנימית — הדרך היעילה ביותר לכסות את המסלול הזה מבלי לאבד ימים בהעברות יבשתיות ארוכות בין היעדים."
      },
      {
        q: "האם זהו ספארי פרטי או סיור קבוצתי?",
        a: "פרטי לאורך כל הדרך — הרכב והגיידה שלכם עבור תשעת הימים כולם, מותאמים לתאריכים שלכם ולא יציאת קבוצה קבועה."
      },
      {
        q: "האם ניתן להתאים את המסלול הזה?",
        a: "כן — זוהי נקודת התחלה ולא חבילה קבועה. היעדים, הקצב וסגנון הלינה כולם ניתנים להתאמה לאופן שבו אתם באמת רוצים לטייל."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "הגעה לניירובי",
        location: "ניירובי",
        description: "נחיתה בנמל התעופה הבינלאומי ג'ומו קניאטה, שם צוות הספארי שלכם יחכה לקבל את פניכם ולסייע לכם דרך הגעה לפני ההעברה לניירובי ללינת הלילה. ערב ראשון רגוע — הספארי עצמו מתחיל ברצינות מחר, ברגע שתעופו לעבר אמבוסלי.",
        accommodation: "Nairobi Hotel",
        meals: "ארוחת ערב",
        insiderFact: "ניירובי נמצאת בגובה של כמעט 1,700 מטר, כך שהערבים קרירים יותר ממה שהייתם מצפים קרוב כל כך לקו המשווה — כדאי לארוז מעיל קל ללילה ההגעה.",
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
        title: "אמבוסלי",
        location: "אמבוסלי",
        description: "טיסה קצרה מכניסה אתכם לאמבוסלי, שם עדרי פילים נעים על פני מישורים פתוחים כאשר קילימנג'רו מתרומם מאחוריהם ביום בהיר. במהלך יומיים מלאים, צפו לסיורי ספארי ביום ובלילה ולהליכות שיח מודרכות, עם סיכוי אמיתי לאתר כמה מ'חטי-הענק' שהמערכת האקולוגית הזו ידועה בהם.",
        accommodation: "Amboseli Camp",
        meals: "כל הארוחות",
        insiderFact: "אגם היובש היבש של אמבוסלי מעלה אבק דק במהלך היום — צעיף בד או צעיף קל על האף והפה הופך את סיורי הספארי לנוחים יותר.",
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
        title: "אמבוסלי",
        location: "אמבוסלי",
        description: "טיסה קצרה מכניסה אתכם לאמבוסלי, שם עדרי פילים נעים על פני מישורים פתוחים כאשר קילימנג'רו מתרומם מאחוריהם ביום בהיר. במהלך יומיים מלאים, צפו לסיורי ספארי ביום ובלילה ולהליכות שיח מודרכות, עם סיכוי אמיתי לאתר כמה מ'חטי-הענק' שהמערכת האקולוגית הזו ידועה בהם.",
        accommodation: "Amboseli Camp",
        meals: "כל הארוחות",
        insiderFact: "קילימנג'רו בדרך כלל הכי ברור בשעה הראשונה אחרי הזריחה, לפני שחום היום בונה עננות סביב הפסגה.",
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
        title: "סמבורו",
        location: "סמבורו",
        description: "צפונה לסמבורו, וקצב שונה לחלוטין. יומיים כאן נוטים לעבר חילופי תרבות אמיתיים לצד צפייה בחיות בר — הליכות מודרכות וזמן עם קהילת הסמבורו, שמשפחותיה קוראות לנוף הזה בית כבר דורות, כנגד רקע של מערכת אקולוגית יבשה שאין כמותה בשום מקום אחר בקניה.",
        accommodation: "Samburu Camp",
        meals: "כל הארוחות",
        insiderFact: "סמבורו נמצאת נמוכה וחמה יותר באופן ניכר מאמבוסלי — אפיק הנהר היבש של אווסו נג'ירו חושף לעיתים קרובות יותר פעילות חיות בר מאשר המים עצמם.",
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
        title: "סמבורו",
        location: "סמבורו",
        description: "צפונה לסמבורו, וקצב שונה לחלוטין. יומיים כאן נוטים לעבר חילופי תרבות אמיתיים לצד צפייה בחיות בר — הליכות מודרכות וזמן עם קהילת הסמבורו, שמשפחותיה קוראות לנוף הזה בית כבר דורות, כנגד רקע של מערכת אקולוגית יבשה שאין כמותה בשום מקום אחר בקניה.",
        accommodation: "Samburu Camp",
        meals: "כל הארוחות",
        insiderFact: "החמישייה המיוחדת של סמבורו — זברת גרווי, ג'ירפה רשתית, גרנוק, אוריקס ביסה ויען סומלי — נמצאים כמעט בשום מקום אחר בקניה, אז שמרו רשימת מינים בהישג יד.",
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
        title: "מסאי מארה (דרום-מערב)",
        location: "מסאי מארה (דרום-מערב)",
        description: "שלושה ימים מלאים בחלק של המארה שרוב המבקרים אף פעם לא רואים. במקום השמורה המרכזית הצפופה, אתם בשמורות הטבע הדרום-מערביות — חיות בר מתגוררות לאורך כל השנה, עדרים נודדים בעונה, וקצב שקט ואישי יותר באופן ניכר בכל סיור ספארי.",
        accommodation: "Masai Mara Conservancy Camp",
        meals: "כל הארוחות",
        insiderFact: "שמורות הטבע הדרום-מערביות פועלות תחת מגבלות צפיפות רכבים משלהן, שזו סיבה גדולה לכך שהתצפיות כאן מרגישות פרטיות יותר מאשר בשמורה המרכזית.",
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
        title: "מסאי מארה (דרום-מערב)",
        location: "מסאי מארה (דרום-מערב)",
        description: "שלושה ימים מלאים בחלק של המארה שרוב המבקרים אף פעם לא רואים. במקום השמורה המרכזית הצפופה, אתם בשמורות הטבע הדרום-מערביות — חיות בר מתגוררות לאורך כל השנה, עדרים נודדים בעונה, וקצב שקט ואישי יותר באופן ניכר בכל סיור ספארי.",
        accommodation: "Masai Mara Conservancy Camp",
        meals: "כל הארוחות",
        insiderFact: "סיורי בוקר מוקדמים בשמורות הטבע לעיתים קרובות תופסים טורפים שעדיין פעילים מקרירות הלילה שלפני, לפני שהחום מתחיל.",
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
        title: "מסאי מארה (דרום-מערב)",
        location: "מסאי מארה (דרום-מערב)",
        description: "שלושה ימים מלאים בחלק של המארה שרוב המבקרים אף פעם לא רואים. במקום השמורה המרכזית הצפופה, אתם בשמורות הטבע הדרום-מערביות — חיות בר מתגוררות לאורך כל השנה, עדרים נודדים בעונה, וקצב שקט ואישי יותר באופן ניכר בכל סיור ספארי.",
        accommodation: "Masai Mara Conservancy Camp",
        meals: "כל הארוחות",
        insiderFact: "שאלו את הגיידה שלכם על עצירת ארוחת בוקר בשיח או סאנדאונר ביום המלא האחרון שלכם — שמורות הטבע מאפשרות חוויות מחוץ לרכב שהשמורה המרכזית בדרך כלל לא מאפשרת.",
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
        title: "ניירובי / יציאה",
        location: "ניירובי / יציאה",
        description: "בוקר אחרון במארה לפני הטיסה חזרה לניירובי והלאה לנמל התעופה הבינלאומי ג'ומו קניאטה לחיבור הבינלאומי הבא שלכם — שלוש קניות שונות מאוד, סיפור אחד רציף.",
        accommodation: "N/A",
        meals: "ארוחת בוקר"
      }
    ]
  },
  {
    slug: "classic-kenya-safari",
    name: "ספארי קלאסי בקניה — מסאי מארה, בקעת השבר ואמבוסלי",
    duration: 7,
    destinations: [
      "masai-mara",
      "lake-nakuru",
      "amboseli"
    ],
    type: "big_five_game_drives",
    bestMonths: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    wildlifeTargets: [{ name: 'Lion', chance: 'High' }, { name: 'African Elephant', chance: 'High' }, { name: 'Flamingo', chance: 'Seasonal' }, { name: 'Black Rhino', chance: 'High' }, { name: 'Wildebeest', chance: 'Seasonal' }, { name: 'Cheetah', chance: 'Rare' }],
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
    metaTitle: "ספארי קלאסי בקניה | מסאי מארה, בקעת השבר ואמבוסלי | EWA Safari Outfitters",
    metaDescription: "ספארי קלאסי בן 7 ימים בקניה דרך מסאי מארה, אגם סודה בבקעת השבר ורקע הקילימנג'רו של אמבוסלי — פרטי, בקצב טוב ובהתאמה אישית מאת מפעיל ספארי מזרח-אפריקאי בבעלות מקומית.",
    overview: [
      "יש סיבה שהמסלול הזה ממשיך להיקרא 'קלאסי' — זהו המסלול שבאמת מרוויח את המילה הזו. שבעה ימים, שלושה נופים, וכל אחד מהם פנים שונות באמת של קניה: דרמת המישורים של מסאי מארה, קו החוף השקט והעשיר בחיי ציפורים של אגם סודה בבקעת השבר, ונוף הגלויה של פילים וקילימנג'רו של אמבוסלי לסיום.",
      "זהו לא מסלול ממהר של סימון תיבות. הוא נבנה עם זמן אמיתי בכל מקום — יומיים מלאים במארה עבור צפיפות חיות הבר שהשמורה הזו מפורסמת בה, עצירה שקטה באגם בבקעת השבר להאיט את הקצב ולצפות בפלמינגו עובדים את קו החוף, ואז עוד יומיים באמבוסלי שבהם הפילים נראים כאילו הם מציבים את עצמם בכוונה מול ההר הגבוה באפריקה. בין אם זהו ספארי הקניה הראשון שלכם או החמישי, זהו המסלול שנבנה כדי להזכיר לכם למה אנשים מתאהבים במדינה הזו מלכתחילה.",
      "כמפעיל שנולד בטנזניה ומבוסס בארושה, הבונה כעת את מסלול קניה שלנו, אנו מעצבים את המסלול הזה באותו האופן שבו אנו מעצבים את מסלולי מזרח אפריקה שלנו: בהתאמה אישית לתאריכים שלכם, פרטי לאורך כל הדרך, ומודרך על ידי גיידים מקצועיים ומוסמכים."
    ],
    tagline: "בבעלות מקומית מאז 2022 · גיידים מוסמכים מקצועית · יציאות בהתאמה אישית, לא תאריכי קבוצה קבועים",
    bestTimeToTravel: "לאורך כל השנה, כאשר יולי–דצמבר מציעים את דרמת שיא הנדידה הגדולה במארה (ודמי שמורה גבוהים יותר בהתאם)",
    destinationHighlights: {
      heading: "שיאי היעדים",
      items: [
        {
          title: "שמורת הטבע הלאומית מסאי מארה",
          text: "יומיים מלאים באחד מנופי הספארי המהוללים ביותר באפריקה — סוואנה מתגלגלת, אוכלוסיות מתגוררות בריאות של אריות ופילים, וסיכוי לדרמת נדידה אם התאריכים שלכם מתואמים עם העדרים. זו הקניה שרוב האנשים מדמיינים עוד לפני שנחתו, והיא עומדת בציפייה הזו במציאות."
        },
        {
          title: "אגם בבקעת השבר",
          text: "שינוי כיוון מכוון. הממוקם בין מכתשי געש עתיקים וזרימות לבה ישנות, קטע זה בבקעת השבר מושך פלמינגו, שקנאים ורשימה ארוכה של חיי ציפורים נוספים לקו החוף הבסיסי שלו. הוא שקט יותר, איטי יותר, ויפה בצורה שונה באמת ממישורי המארה הפתוחים — המקבילה בספארי לנשימה עצורה לפני הפינאלה של אמבוסלי."
        },
        {
          title: "פארק לאומי אמבוסלי",
          text: "קילימנג'רו, כשהעננים משתפים פעולה, שולט באופק כאן בדרך שאף תמונה לא באמת מכינה אתכם אליה. הביצות והמישורים הפתוחים של אמבוסלי תומכים בכמה מעדרי הפילים הנראים באמינות הרבה ביותר במזרח אפריקה, לצד אריות, ברדלסי ציד וג'ירפות — דרך חזקה וציורית לסיים את הטיול."
        }
      ]
    },
    highlights: [
      "ראו את מסאי מארה כראוי, עם יומיים מלאים ולא עצירת לילה ממהרת",
      "חוו צד של קניה מעבר לפארקים המובילים — חיי הציפורים של אגם בבקעת השבר הם שינוי קצב אמיתי",
      "צלמו פילים על רקע קילימנג'רו באמבוסלי, אחת מסצנות הספארי המוכרות ביותר במזרח אפריקה",
      "טיילו בקצב נוח ומדוד ולא במיקום חדש בכל יום"
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
      "לינה בפנסיון מלא לאורך כל הדרך",
      "גיידה ייעודית מקצועית לספארי לאורך כל המסלול",
      "כל דמי הכניסה לפארקים ולשמורות",
      "סיורי ספארי ביום",
      "לוגיסטיקת שדה תעופה והעברות",
      "ביטוח פינוי רפואי חירום"
    ],
    excluded: [
      "משקאות פרימיום",
      "פעילויות מעבר לאלה המפורטות",
      "טיסות בינלאומיות ודמי אשרה",
      "תשרים"
    ],
    notes: [
      "התעריפים המוצגים הם לאדם בחדר זוגי/טווין משותף; תוספת ליחיד זמינה לפי בקשה.",
      "עצירת האגם בבקעת השבר נבחרת מבין שותפי לודג' זמינים ודומים ועשויה להשתנות בהתאם לתאריך.",
      "הלינה והתעריפים כפופים לזמינות ועשויים להשתנות בהתאם לתאריך הנסיעה המדויק בתוך העונה.",
      "דמי הפארק הלאומי ושמורות הטבע בקניה נקבעים על ידי הממשלה וכפופים לשינויים ללא הודעה מוקדמת."
    ],
    faq: [
      {
        q: "האם 7 ימים מספיקים כדי לראות את מסאי מארה ואמבוסלי כראוי?",
        a: "כן — מסלול זה נבנה במיוחד כדי להימנע ממלכודת של עצירת לילה אחד בכל פארק. יומיים מלאים במארה ועוד יומיים באמבוסלי מעניקים לכם זמן אמיתי בשטח בשניהם, עם אגם בבקעת השבר כשינוי קצב מכוון ביניהם ולא נסיעה ממהרת."
      },
      {
        q: "מתי הזמן הטוב ביותר לראות את הנדידה הגדולה במסאי מארה?",
        a: "הנדידה בדרך כלל עוברת למארה בערך מיולי עד דצמבר, אם כי התזמון המדויק משתנה משנה לשנה בהתאם לגשם — זהו גם הזמן שבו דמי השמורה הלאומית מסאי מארה עולים. המארה מציעה צפייה חזקה בחמשת הגדולים גם מחוץ לעונת הנדידה, במחיר נמוך יותר, כך שמסלול זה עובד היטב לאורך רוב השנה."
      },
      {
        q: "האם נראה בוודאות את הר קילימנג'רו מאמבוסלי?",
        a: "קילימנג'רו לרוב נראה, במיוחד בבוקר המוקדם ובחודשים היבשים יותר, אך כמו בכל תצפית הר, כיסוי העננים תלוי במזג האוויר ולא ניתן להבטיח אותו ביום ספציפי כלשהו."
      },
      {
        q: "כמה עולה ספארי הקניה הקלאסי הזה?",
        a: "התמחור מתחיל מ-1,295 דולר לאדם עבור קבוצה של שישה מטיילים בעונה הירוקה (הנמוכה), ועולה עם גדלי קבוצה קטנים יותר ובעונת השיא (יולי–דצמבר). בקשו הצעת מחיר אישית לתאריכי הנסיעה וגודל הקבוצה המדויקים שלכם."
      },
      {
        q: "האם זהו ספארי פרטי או סיור קבוצתי?",
        a: "פרטי לאורך כל הדרך — הרכב והגיידה שלכם עבור שבעת הימים כולם, מותאמים לתאריכים שלכם ולא יציאת קבוצה קבועה."
      },
      {
        q: "האם ניתן לשלב את המסלול הזה עם ספארי בטנזניה?",
        a: "כן — כמפעיל הפועל גם בטנזניה וגם בקניה, אנו בונים באופן קבוע מסלולי מזרח אפריקה משולבים, כולל שילוב המסלול הזה עם ספארי בטנזניה או הרחבת חוף בזנזיבר."
      },
      {
        q: "האם ניתן להתאים את המסלול הזה?",
        a: "כן — זוהי נקודת התחלה ולא חבילה קבועה. היעדים, הקצב וסגנון הלינה כולם ניתנים להתאמה לאופן שבו אתם באמת רוצים לטייל, כולל עצירת האגם הספציפית בבקעת השבר."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "הגעה לניירובי",
        location: "ניירובי",
        description: "נחיתה בנמל התעופה הבינלאומי ג'ומו קניאטה, שם הגיידה שלכם יחכה לקבל את פניכם לפני ההעברה הקצרה אל תוך העיר. בניירובי קורה יותר ממה שרוב עצירות הלילה הראשון נותנות לה קרדיט — שווקי מזכרות תוססים, סצנת מסעדות טובה באמת, ופארק לאומי ניירובי היושב ממש על סף הבירה אם תרצו טעימה מוקדמת מהטבע לפני שהספארי האמיתי מתחיל. הערב, לעומת זאת, מיועד להתמקמות ולהתמצאות.",
        accommodation: "Nairobi Hotel",
        meals: "ארוחת ערב",
        insiderFact: "פארק לאומי ניירובי יוצא דופן בהיותו פארק חיות בר מלא בתוך בירה — קל לארגן תוספת של שעתיים כאן אם תזמון ההגעה שלכם מאפשר.",
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
        title: "יומיים מלאים במסאי מארה",
        location: "שמורת הטבע הלאומית מסאי מארה",
        description: "העברה מכניסה אתכם למסאי מארה, ולעיתים רחוקות לוקח זמן רב להבין במה כל המהומה. יומיים מלאים כאן פירושם זמן אמיתי לעבוד את השמורה כראוי — סיורי ספארי בבוקר ואחר הצהריים, גיידה שקורא את המישורים לזהות היכן החתולים כנראה נמצאים ולא רק היכן הם נצפו אתמול, ואם התאריכים שלכם מתואמים עם הנדידה, עדרי ווילדביסט וזברות נעים על פני הדשא במספרים מדהימים באמת. צפו לתמהיל אמיתי של חמשת הגדולים, אור שעת הזהב השקטה יותר לצילום, ולפחות סאנדאונר אחד בצפייה במישורים הופכים לכתומים.",
        accommodation: "Masai Mara Camp",
        meals: "כל הארוחות",
        insiderFact: "דמי השמורה עולים ב-1 ביולי, כך ששהות מוקדמת או מאוחרת במארה יכולה להביא לפחות רכבים באופן ניכר באותן תצפיות במחיר לילה נמוך יותר.",
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
        title: "יומיים מלאים במסאי מארה",
        location: "שמורת הטבע הלאומית מסאי מארה",
        description: "העברה מכניסה אתכם למסאי מארה, ולעיתים רחוקות לוקח זמן רב להבין במה כל המהומה. יומיים מלאים כאן פירושם זמן אמיתי לעבוד את השמורה כראוי — סיורי ספארי בבוקר ואחר הצהריים, גיידה שקורא את המישורים לזהות היכן החתולים כנראה נמצאים ולא רק היכן הם נצפו אתמול, ואם התאריכים שלכם מתואמים עם הנדידה, עדרי ווילדביסט וזברות נעים על פני הדשא במספרים מדהימים באמת. צפו לתמהיל אמיתי של חמשת הגדולים, אור שעת הזהב השקטה יותר לצילום, ולפחות סאנדאונר אחד בצפייה במישורים הופכים לכתומים.",
        accommodation: "Masai Mara Camp",
        meals: "כל הארוחות",
        insiderFact: "המישורים שומרים על הצבע הזהוב שלהם הכי הרבה זמן בשעה האחרונה לפני השקיעה — שווה לתזמן את סיור הספארי השני שלכם סביב זה אם צילום הוא בעדיפות.",
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
        title: "אגם בבקעת השבר",
        location: "אגם בבקעת השבר",
        description: "שינוי נוף מוחלט, וכנה, מבורך. קטע זה בבקעת השבר יושב בין מכתשי געש עתיקים וזרימות לבה, כאשר המים הבסיסיים הרדודים שלו מושכים פלמינגו ושקנאים במספרים המשתנים בצורה ניכרת עם העונה ומפלס המים — הגיידה שלכם ידע בדיוק היכן הציפורים אכן מתקבצות באותו היום. זהו יום איטי ושקט בכוונה: הליכות לאורך החוף, צילום חיות ציפורים חזק, והזדמנות פשוט לנשום בין שני יעדי חיות בר אינטנסיביים יותר.",
        accommodation: "Rift Valley Lake Lodge",
        meals: "כל הארוחות",
        insiderFact: "מספרי הפלמינגו כאן משתנים עם מפלס המים משנה לשנה — עונות מסוימות מביאות אלפי ציפורים, אחרות הרבה פחות, כך שכל מספר ספציפי כדאי להתייחס אליו כהנחיה ולא כהבטחה.",
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
        title: "פארק לאומי אמבוסלי",
        location: "פארק לאומי אמבוסלי",
        description: "הלאה לאמבוסלי, והגלויה סוף-סוף קמה לתחייה: עדרי פילים נעים על פני מישורים פתוחים כאשר הר קילימנג'רו מתרומם מאחוריהם ביום בהיר. יומיים מלאים כאן מעניקים לכם זמן אמיתי בשטח — סיורי ספארי דרך ביצות ומישורי דשא פתוחים במעקב אחר פילים, אריות, ברדלסי ציד וג'ירפות, בתוספת עצירה בהר התצפית לתצפית פנורמית על פני כל הפארק. זהו פארק שמתגמל סבלנות, ויומיים פירושם שאתם לא ממהרים לעבור עדר רק כדי לשמור על לוח זמנים.",
        accommodation: "Amboseli Camp",
        meals: "כל הארוחות",
        insiderFact: "אגם היובש היבש של אמבוסלי מעלה אבק דק במהלך היום — צעיף בד או צעיף קל על האף והפה הופך את סיורי הספארי לנוחים יותר.",
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
        title: "פארק לאומי אמבוסלי",
        location: "פארק לאומי אמבוסלי",
        description: "הלאה לאמבוסלי, והגלויה סוף-סוף קמה לתחייה: עדרי פילים נעים על פני מישורים פתוחים כאשר הר קילימנג'רו מתרומם מאחוריהם ביום בהיר. יומיים מלאים כאן מעניקים לכם זמן אמיתי בשטח — סיורי ספארי דרך ביצות ומישורי דשא פתוחים במעקב אחר פילים, אריות, ברדלסי ציד וג'ירפות, בתוספת עצירה בהר התצפית לתצפית פנורמית על פני כל הפארק. זהו פארק שמתגמל סבלנות, ויומיים פירושם שאתם לא ממהרים לעבור עדר רק כדי לשמור על לוח זמנים.",
        accommodation: "Amboseli Camp",
        meals: "כל הארוחות",
        insiderFact: "קילימנג'רו בדרך כלל הכי ברור בשעה הראשונה אחרי הזריחה, לפני שחום היום בונה עננות סביב הפסגה.",
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
        title: "ניירובי / יציאה",
        location: "ניירובי / יציאה",
        description: "נסיעה ציורית אחרונה בחזרה לעבר ניירובי, עם זמן להביט אחורה על ששה ימים שעברו ממישורים פתוחים לחוף אגם שקט לארץ פילים מתחת לקילימנג'רו. משם, זוהי העברה פשוטה לנמל התעופה הבינלאומי ג'ומו קניאטה לטיסת ההמשך שלכם הביתה.",
        accommodation: "N/A",
        meals: "ארוחת בוקר"
      }
    ]
  },
  {
    slug: "off-the-beaten-track-photography-safari",
    name: "ספארי צילום בן 8 ימים מחוץ למסלול הסלול",
    duration: 8,
    destinations: [
      "serengeti",
      "ngorongoro"
    ],
    type: "photographic",
    bestMonths: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    wildlifeTargets: [{ name: 'Lion', chance: 'High' }, { name: 'Cheetah', chance: 'High' }, { name: 'Leopard', chance: 'Rare' }, { name: 'Side-striped Jackal', chance: 'Rare' }, { name: 'Serval', chance: 'Rare' }, { name: 'Black Rhino', chance: 'High' }],
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
    metaTitle: "ספארי צילום בן 8 ימים מחוץ למסלול הסלול | טורפים מתגוררים בנדוטו",
    metaDescription: "ספארי צילום פרטי מחוץ לעונה, בנוי סביב הטורפים המתגוררים של נדוטו — פחות רכבים, התנהגות עמוקה יותר, סיפורים אמיתיים לספר. לצלמים, סופרים ויוצרי תוכן. החל מ-6,219 דולר לאדם.",
    overview: [
      "יש גרסה של נדוטו שרוב המטיילים לעולם לא רואים — לא כי היא מוסתרת, אלא כי רוב הספארים מתוזמנים לעונה הלא נכונה כדי למצוא אותה. מדי שנה, מאות אלפי ווילדביסט זורמים דרך המישורים האלה וממשיכים הלאה. האריות, הברדלסים וברדלסי הציד החיים כאן לא זזים איתם. הם נשארים, קשורים לצמיתות לביצות נדוטו — מקור המים המתוקים האמין היחיד בנוף שאחרת הוא עונתי — טריטוריאליים, יולדים, צדים, מגדלים צאצאים, כל השנה, עם או בלי קהל. מסלול זה נבנה עבור החודשים שבהם הקהל הזה הקטן ביותר: כאשר הדשא נמוך, האור כן, והסיפור מול העדשה שלכם הוא החתולים המתגוררים עצמם, לא קהל של רכבים סביבם.",
      "שמונה ימים, חוט אחד רציף: שלושה ימים מלאים במישורי נדוטו עם גיידה שקורא התנהגות כמו ביולוג, מעבר דרך אדמת קהילת המסאי שמוסיפה הקשר אנושי אמיתי לנוף, וסיום משפת מכתש נגורונגורו — אחד ממחזות חיות הבר השלמים ביותר עלי אדמות, נשמר בכוונה לפרקים האחרונים של הטיול במקום להימהר בתחילתו. כל יום כאן נבנה עם אותו אדם בראש: מישהו שרוצה יותר מספארי מאשר רשימת תצפיות — צלם הבונה תיק עבודות אמיתי, סופר האוסף חומר שלא סופר כבר אלף פעם, או פשוט מטייל שמעדיף להבין מקום מאשר לעבור דרכו."
    ],
    tagline: "בבעלות מקומית מאז 2022 · מתוזמן לעונת הטורפים המתגוררים, לא לקהל עונת ההמלטה · יציאות מודרכות פרטיות",
    bestTimeToTravel: "עונת היובש של הטורפים המתגוררים, כאשר עדרי הנדידה כבר עברו הלאה והחתולים הטריטוריאליים של נדוטו נהנים כמעט לבדם מהמישורים",
    whyDifferent: {
      heading: "מדוע 'מחוץ למסלול הסלול' כאשר נדוטו ונגורונגורו הם שמות ידועים היטב",
      paragraphs: [
        "היעדים ידועים היטב — התזמון והקצב לא. רוב מסלולי נדוטו נבנים סביב עונת ההמלטה של דצמבר–מרץ, כאשר הנדידה נוכחת ומספר המבקרים בשיאו.",
        "ספארי זה מתוזמן במקום זאת לעונת הטורפים המתגוררים, כאשר עדרי הנדידה כבר עברו הלאה אך החתולים הטריטוריאליים שקוראים לנדוטו בית נשארים, וההמון שעוקב אחר הנדידה עוזב איתו. שלושה ימים מלאים במקום אחד, גיידה שמסביר אקולוגיה והקשר לצד תצפיות, וביקור אמיתי בקהילת מסאי נבנו כדי לייצר חומר אמיתי, לא רק תמונות."
      ]
    },
    highlights: [
      "שלושה ימים מלאים במישורי נדוטו — לא בוקר אחד ממהר, אלא זמן אמיתי לתת לתמונה, לציד, או לאתר גורים להתפתח בקצב שלו",
      "מתוזמן לעונת הטורפים המתגוררים, כאשר צמחייה נמוכה ויבשה חושפת התנהגות שנשארת מוסתרת במהלך חודשי ההמלטה הצפופים, ופחות רכבים בהרבה מתחרים על אותה תצפית",
      "חתך אמיתי של טורפים מעבר לחתולי הכותרת — נמייה, שרשור, חתול בר, קרקל ושלושה מיני תן, כולל התן פסי-הצד הנדיר לצילום",
      "מעבר דרך קהילת מסאי בדרך לנגורונגורו — הקשר אמיתי ושיחה אמיתית, לא עצירה כתובה מראש בין סיורי ספארי",
      "מכתש נגורונגורו כפרק הסיום, לא הפתיחה — מאפשר לטיול לבנות לעבר אחד ממחזות חיות הבר השלמים ביותר באפריקה במקום להגיע לשיא מוקדם מדי",
      "גיידה שמסביר את האקולוגיה, לא רק את התצפית — הבנה למה טורף נשאר היכן שהוא נשאר משנה את מה שאתם יכולים לצפות, לתכנן ובסופו של דבר לכתוב או לצלם",
      "בנוי לספרי סיפורים כמו גם לצלמים — כל יום מציע חומר נרטיבי אמיתי, לא רק הזדמנות צילום"
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
      "כל דמי הפארקים, הקונצסיות ואזורי השימור",
      "רכב, גיידה ודלק עבור כל יום בשטח",
      "כל הארוחות",
      "לינה כמפורט",
      "העברות משדה התעופה"
    ],
    excluded: [
      "טיסות בינלאומיות",
      "דמי אשרה",
      "ביטוח נסיעות",
      "טיפים",
      "השכרת מצלמה/עדשה"
    ],
    notes: [
      "התעריפים המוצגים הם לאדם, בחדר זוגי משותף.",
      "עלויות הרכב, הגיידה והדיזל מתחלקות בין הקבוצה, כך שהמחיר לאדם בדרך כלל יורד ככל שיותר מטיילים מצטרפים. הנתון עבור 5 אנשים גבוה מעט מהתעריף עבור 4 — מדרגת תצורת חדרים בגודל הקבוצה הזה, אותו דפוס שמופיע מדי פעם גם במסלולי רב-רמות אחרים שלנו, ולא טעות תמחור."
    ],
    faq: [
      {
        q: "למה זה נקרא 'מחוץ למסלול הסלול' כאשר נדוטו ונגורונגורו הם יעדים ידועים היטב?",
        a: "היעדים ידועים היטב — התזמון והקצב לא. רוב מסלולי נדוטו נבנים סביב עונת ההמלטה של דצמבר–מרץ, כאשר הנדידה נוכחת ומספר המבקרים בשיאו. ספארי זה מתוזמן במקום זאת לעונת הטורפים המתגוררים, כאשר עדרי הנדידה כבר עברו הלאה אך החתולים הטריטוריאליים שקוראים לנדוטו בית נשארים, וההמון שעוקב אחר הנדידה עוזב איתו."
      },
      {
        q: "האם הטיול הזה מתאים ליוצרי תוכן וסופרים, לא רק לצלמים?",
        a: "בהחלט. הקצב עצמו — שלושה ימים מלאים במקום אחד, גיידה שמסביר אקולוגיה והקשר לצד תצפיות, ביקור אמיתי בקהילת מסאי — נבנה כדי לייצר חומר אמיתי, לא רק תמונות. כמה ימים במסלול הזה בנויים בכוונה סביב קשת סיפור ולא הזדמנות צילום בודדת."
      },
      {
        q: "איזה ציוד צילום כדאי להביא?",
        a: "גוף DSLR או מירורלס, עדשת טלה של 400 מ״מ לפחות לעבודת טורפים, ועדשה רחבה יותר לצילומי נוף וסיפור סביבתי. מדריך אריזה וציוד מלא נשלח לאורחים מאושרים לפני היציאה."
      },
      {
        q: "האם עדיין נראה מספרים גדולים של חיות בר אם הנדידה כבר עברה הלאה?",
        a: "כן — אוכלוסיית הטורפים המתגוררים של נדוטו וצוות התמיכה שלה של טורפים קטנים יותר, בתוספת מספרים בריאים של צמחוני עדרים מתגוררים, נשארים במערכת האקולוגית לאורך כל השנה. מה שמשתנה הוא ההרכב, לא הנוכחות: פחות ווילדביסט, אבל סיכוי טוב בהרבה להתנהגות טורפים ממושכת וקרובה."
      },
      {
        q: "כמה משתנה המחיר עם גודל הקבוצה?",
        a: "עלויות הרכב, הגיידה והדיזל מתחלקות בין הקבוצה, כך שהמחיר לאדם בדרך כלל יורד ככל שיותר מטיילים מצטרפים — ראו את טבלת התמחור לעיל לנתונים מדויקים לפי גודל קבוצה."
      },
      {
        q: "האם ניתן לשלב את זה עם יעדים אחרים?",
        a: "כן — מסלול זה משתלב באופן טבעי עם הרחבת חוף בזנזיבר להירגעות לאחר מכן, או ניתן לשלב אותו עם ספארי במעגל הצפוני עבור מטיילים שרוצים גם את חוויית הטורפים המתגוררים וגם את דרמת חציית הנהר של עונת הנדידה הגבוהה בטיול אחד."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "הגעה לארושה",
        location: "ארושה",
        description: "נחיתה בארושה ותנו לערב הראשון לקבוע את הטון למה שלפניכם — תדריך מסודר על הימים הבאים, מה האור והעונה יציעו, וכיצד המסלול קצוב סביב סבלנות ולא רשימת סימונים.",
        accommodation: "Arusha Coffee Lodge",
        meals: "ארוחת ערב",
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
        title: "מארושה לדרום הסרנגטי",
        location: "נדוטו, דרום הסרנגטי",
        description: "טיסה קצרה מארושה למסלול הנחיתה של נדוטו מחליפה העברה כבישית ארוכה באחר-צהריים כבר בשטח. עד שתתמקמו במחנה, האור כבר הופך לזהוב והמישורים כבר עושים את מה שהם עושים הכי טוב.",
        accommodation: "Ndutu Safari Lodge",
        meals: "כל הארוחות",
        insiderFact: "זהו רגע טוב למסור לגיידה שלכם רשימת צילום ספציפית — מין מסוים, התנהגות, סגנון קומפוזיציה — כדי שהמסלול ייבנה סביבה מהיום הראשון.",
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
        title: "יום מלא במישורי נדוטו",
        location: "נדוטו, דרום הסרנגטי",
        description: "היום המלא הראשון על המישורים, וזה שבו הקצב של הטיול הזה מכריז על עצמו. במקום לנוע במהירות מתצפית לתצפית, הגיידה שלכם שומר על עמדה — צופה באתר גורים, קורא את שפת הגוף של ברדלס ציד, ממתין לסיפור במקום לרדוף אחר הבא. כאן ההבדל בין סיור ספארי רגיל לספארי מונחה-צילום הופך ברור.",
        accommodation: "Ndutu Safari Lodge",
        meals: "כל הארוחות",
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
        title: "מישורי נדוטו, יום מלא",
        location: "נדוטו, דרום הסרנגטי",
        description: "יום שני מעניק לכם משהו שביקור בודד לעולם לא יכול: קאסט חוזר של דמויות. אותו אתר גורים, אותה טריטוריה, גאווה מוכרת שנראית שוב מזווית שונה באור שונה. עבור מי שבונה גוף עבודה ולא אוסף פריימים בודדים, זהו היום שמתחיל להיות הכי חשוב.",
        accommodation: "Ndutu Safari Lodge",
        meals: "כל הארוחות",
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
        title: "מישורי נדוטו, יום מלא",
        location: "נדוטו, דרום הסרנגטי",
        description: "יום שלישי ואחרון על המישורים, מתוזמן לסגור כל חוט שהתחיל ביום 3 — הציד שלא הסתיים, הגורים שנצפו רק לרגע, האור שלא היה מדויק בפעם הראשונה.",
        accommodation: "Ndutu Safari Lodge",
        meals: "כל הארוחות",
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
        title: "ממישורי נדוטו לשפת מכתש נגורונגורו, דרך קהילת מסאי",
        location: "מכתש נגורונגורו",
        description: "הטיול משנה מקצב היום. הנסיעה לעבר נגורונגורו עוברת דרך אדמת קהילת מסאי, עם זמן בנוי לביקור אמיתי — חילופי דברים, לא עצירת צילום, ולעיתים קרובות החומר העשיר ביותר בכל הטיול עבור מי שכותב ולא רק מצלם.",
        accommodation: "Ngorongoro Serena Safari Lodge",
        meals: "כל הארוחות",
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
        title: "סיור יום במכתש נגורונגורו",
        location: "מכתש נגורונגורו",
        description: "יום מלא של ירידה אל רצפת המכתש — כ-260 קמ״ר (100 מייל רבוע) של קלדרה סגורה המאכלסת אחד מהריכוזים הצפופים ביותר של חיות בר ביבשת. אחרי שלושה ימים שהוקדשו ללמוד לקרוא מערכת אקולוגית אחת באיטיות, הצפיפות המוחלטת של המכתש מציעה סוג שונה של סיפור: שפע, ולא סבלנות, כנושא היום.",
        accommodation: "Ngorongoro Serena Safari Lodge",
        meals: "כל הארוחות",
        insiderFact: "רצפת המכתש נשארת כמה מעלות קרירה יותר מהשפה, אפילו בצהריים — ידיים קרות מאטות את החלפת העדשות, אז שמרו כפפות בהישג יד לירידה המוקדמת.",
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
        title: "מאזור השימור נגורונגורו לעיר ארושה",
        location: "ארושה",
        description: "הנסיעה האחרונה חזרה לארושה סוגרת את המעגל — רמות מפנות מקום לקרקע נמוכה ומוכרת, עם זמן בדרך להביט אחורה על שבוע שלם של תמונות ורשימות, לפני טיסת ההמשך שלכם בבוקר למחרת.",
        accommodation: "N/A",
        meals: "ארוחת בוקר"
      }
    ]
  },
  {
    slug: "rwanda-primates-zanzibar-seniors-groups",
    name: "ספארי פרימטים ברואנדה ובריחה לחוף זנזיבר בן 12 ימים",
    duration: 12,
    destinations: [
      "kigali",
      "nyungwe",
      "volcanoes",
      "zanzibar"
    ],
    type: "gorilla_trekking",
    bestMonths: ['Jun', 'Jul', 'Aug', 'Sep', 'Dec', 'Jan', 'Feb'],
    wildlifeTargets: [{ name: 'Mountain Gorilla', chance: 'Guaranteed' }, { name: 'Chimpanzee', chance: 'High' }, { name: 'Golden Monkey', chance: 'High' }, { name: 'Angola Colobus Monkey', chance: 'High' }, { name: 'L\'Hoest\'s Monkey', chance: 'Rare' }],
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
    metaTitle: "ספארי פרימטים ברואנדה ובריחה לחוף זנזיבר בן 12 ימים | לגמלאים, לזוגות יום נישואין ולקבוצות | EWA Safari Outfitters",
    metaDescription: "שימפנזים, גורילות הרים וקופי זהב ברואנדה, ולאחר מכן ארבעה לילות שלווים על חופי זנזיבר — מסלול לגמלאים, זוגות בחגיגת יום נישואין וקבוצות. החל מ-7,742 דולר לאדם.",
    overview: [
      "עודכן לעונת 2027. שנים עשר ימים, שני סוגים שונים לגמרי של יוצא דופן. המחצית הראשונה היא רואנדה במיטבה החי ביותר — שימפנזים נעים דרך חופת היער בניונגווה, גורילות הרים במדרונות המעורפלים מעל מוסנזה, קופי זהב דוהרים דרך הבמבוק, ושיט בסירה על פני אגם קיוו ביניהם. המחצית השנייה לא דורשת מכם דבר: ארבעה לילות שלווים על החול הלבן של זנזיבר, עם בוקר בסטון טאון בנוי בפנים למי שרוצה עוד סיפור אחד לפני שההרפיה מתחילה כהלכה.",
      "זוהי צורה שעובדת היטב במיוחד עבור שלושה סוגי מטיילים. עבור מטיילים בכירים, המסלול עצמו קובע את הקצב — שהויות אמיתיות של שני לילות במקום שרשרת של קפיצות של לילה אחד, ומחצית שנייה אמיתית ומרגיעה שנבנתה בתוך המסלול ולא נלקחת כמובן מאליו. עבור זוגות החוגגים יום נישואין, הניגוד הוא כל העניין: ימים שדורשים ממכם משהו יחד ברואנדה, ואחריהם ימים שלא דורשים דבר כלל בזנזיבר. ועבור קבוצות — חברים, משפחה מורחבת, טיולים רב-דוריים — המבנה מעניק לכל אחד מקום לעסוק במחצית ההרפתקה בקצב שלו, לפני שמתאחדים לגמרי על החוף.",
      "הערה כנה אחת: מעקב שימפנזים וגורילות דורש מאמץ פיזי אמיתי — הליכת יער אמיתית, לעיתים בגובה, ולא סיור ספארי בישיבה. הטיול הזה משלב את ההרפתקה האמיתית הזו עם מנוחה אמיתית לאחריה, במקום להעמיד פנים שהמעקב עצמו עדין. סבלים זמינים לשכירה עבור מי שרוצה תמיכה נוספת על ההר."
    ],
    bestTimeToTravel: "לאורך כל השנה, כאשר עונות היובש יוני–ספטמבר ודצמבר–פברואר מציעות את תנאי המעקב הנוחים ביותר",
    highlights: [
      "שלושה מיני פרימטים בטיול אחד — שימפנזים בניונגווה, גורילות הרים מעל מוסנזה, וקופי זהב ביער הבמבוק, כל אחד חוויית מעקב שונה באמת",
      "שיט בסירה על אגם קיוו בין שני אזורי המעקב — יום מעבר מרגיע הבנוי בתוך המסלול, לא סתם העברה",
      "אינטראקציה תרבותית אמיתית לצד יום מעקב הגורילות, לא תוספת ממהרת",
      "ארבעה לילות מלאים בזנזיבר, כולל בוקר בסטון טאון ושלושה ימים של זמן חוף טהור ולא מתוכנן",
      "שהויות אמיתיות של שני לילות לאורך כל רואנדה — ללא עצירות סחרחורת של לילה בודד, מעניק לכל חבר בקבוצה זמן להתמקם לפני שממשיכים הלאה",
      "מסלול הבנוי סביב ניגוד — הרפתקה אמיתית, ואחריה מנוחה אמיתית, ולא רק אחת מהן לבד"
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
      "כל דמי הפארקים והיתרי המעקב",
      "רכב, גיידה ודלק לאורך כל הדרך",
      "כל הפעילויות המפורטות",
      "לינה כמפורט",
      "הטיסות קיגלי–קממבה וקיגלי–זנזיבר",
      "העברות משדה התעופה"
    ],
    includedCategorized: {
      transfers: [
        "הטיסות קיגלי–קממבה וקיגלי–זנזיבר",
        "העברות משדה התעופה"
      ],
      accommodationMeals: [
        "לינה כמפורט"
      ],
      guidingGameDrives: [
        "כל דמי הפארקים והיתרי המעקב",
        "רכב, גיידה ודלק לאורך כל הדרך",
        "כל הפעילויות המפורטות"
      ]
    },
    excluded: [
      "טיסות בינלאומיות",
      "דמי אשרה",
      "ביטוח נסיעות",
      "טיפים ותשרים",
      "הוצאות אישיות"
    ],
    excludedCategorized: [
      "טיסות בינלאומיות",
      "דמי אשרה",
      "ביטוח נסיעות",
      "טיפים ותשרים",
      "הוצאות אישיות"
    ],
    notes: [
      "התעריפים המוצגים הם לאדם בחדר זוגי/טווין משותף; תוספת ליחיד זמינה לפי בקשה.",
      "דמי היתרי מעקב הגורילות והשימפנזים נקבעים על ידי רשויות הפארקים הרואנדיות וכפופים לשינויים ללא הודעה מוקדמת.",
      "גיל מינימלי חל על מעקב גורילות ושימפנזים, נקבע על ידי רשויות הפארקים — אשרו את הסף הנוכחי עם היועץ שלכם בעת ההזמנה.",
      "הלינה והתעריפים כפופים לזמינות ועשויים להשתנות בהתאם לתאריך הנסיעה המדויק."
    ],
    faq: [
      {
        q: "האם המסלול הזה מתאים למטיילים מבוגרים יותר?",
        a: "המחצית של זנזיבר רגועה לחלוטין ומתאימה לכל גיל או רמת כושר. המחצית של רואנדה תובענית יותר באמת — מעקב שימפנזים וגורילות כרוך בהליכת יער אמיתית, לעיתים על שטח תלול או לא אחיד. סבלים זמינים לשכירה לתמיכה נוספת, ושיתוף היועץ שלכם בכל דאגה ספציפית בעת ההזמנה מאפשר להתאים את הקצב היכן שניתן."
      },
      {
        q: "האם יש גיל מינימלי למעקב גורילות או שימפנזים?",
        a: "כן, נקבע על ידי רשויות הפארקים וכפוף לשינויים — אשרו את הסף הנוכחי עם היועץ שלכם בעת ההזמנה."
      },
      {
        q: "כיצד זה עובד עבור קבוצה עם רמות כושר מעורבות?",
        a: "היטב, בכוונה. מי שרוצה לעקוב יכול, ומי שמעדיף שלא יכול לבלות יום מרגיע בלודג' במקום — המסלול לא דורש שכל חבר בקבוצה יעשה כל פעילות, ומחצית זנזיבר מאחדת את כולם מחדש בכל מקרה."
      },
      {
        q: "מה ההבדל בין שלושת מעקבי הפרימטים?",
        a: "מעקב שימפנזים בניונגווה חוצה יער צפוף יותר ופרימט נע מהר יותר; מעקב גורילות מעל מוסנזה הוא מפגש בן שעה, מוסדר בקפידה, עם משפחה מורגלת; מעקב קופי זהב הוא החי והמהיר מבין השלושה, דרך יער במבוק."
      },
      {
        q: "מה כלול במחיר, ומה לא?",
        a: "כלול: כל דמי הפארקים והיתרי המעקב, רכב/גיידה/דלק לאורך כל הדרך, כל הפעילויות המפורטות, לינה כמפורט, הטיסות קיגלי–קממבה וקיגלי–זנזיבר, והעברות משדה התעופה. לא כלול: טיסות בינלאומיות, דמי אשרה, ביטוח נסיעות, טיפים והוצאות אישיות."
      },
      {
        q: "כמה משתנה המחיר עם גודל הקבוצה?",
        a: "עלויות הרכב, הגיידה והדיזל מתחלקות בין הקבוצה, כך שהמחיר לאדם יורד ככל שיותר מטיילים מצטרפים."
      },
      {
        q: "האם ניתן לקצר את זה, או ש-12 הימים המלאים הכרחיים?",
        a: "המסלול המלא נבנה כדי להעניק זמן ראוי לשתי המחציות — מיהור בקטע רואנדה מסכן החמצת היתרים או עייפות יתר של הקבוצה לפני החוף, וקיצור זנזיבר פוגע במנוחה שהטיול הזה נועד לסיים בה. שאלו את היועץ שלכם אם יש לכם מגבלות זמן ספציפיות; התאמות אפשריות."
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "הגעה לקיגלי",
        description: "נחיתה בקיגלי ותנו לערב הראשון להיות קל.",
        accommodation: "Kigali Serena Hotel",
        meals: "ארוחת ערב",
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
        title: "מקיגלי לפארק הלאומי ניונגווה",
        description: "טיסה קצרה לקממבה מחליפה העברה כבישית ארוכה באחר-צהריים כבר קרוב ליער.",
        accommodation: "Munazi Eco Lodge",
        meals: "כל הארוחות",
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
        title: "מעקב שימפנזים בניונגווה",
        description: "מעקב מודרך דרך אחד מיערות הגשם העתיקים ביותר באפריקה בחיפוש אחר קהילת השימפנזים של ניונגווה — חוויית מעקב שונה באמת ממעקב גורילות, בעקבות פרימט נע מהר יותר וקולני יותר דרך חופת יער צפופה.",
        accommodation: "Munazi Eco Lodge",
        meals: "כל הארוחות",
        insiderFact: "ניונגווה הוא אחד מיערות הגשם העתיקים ביותר באפריקה ואחד מהאתרים העשירים ביותר ביבשת למגוון פרימטים, עם 13 מינים שתועדו.",
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
        title: "שיט בסירה בניונגווה והעברה למוסנזה",
        description: "יום עדין בכוונה: שיט בסירה על פני אגם קיוו לפני הנסיעה צפונה למוסנזה, בצל הרי הגעש וירונגה.",
        accommodation: "Ingagi Lodge",
        meals: "כל הארוחות",
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
        title: "מעקב גורילות ואינטראקציה תרבותית",
        description: "היום שסביבו נבנה המסלול הזה. עוקבים מובילים את הדרך אל תוך היער כדי למצוא משפחת גורילות הרים, ותבלו שעה מוסדרת בקפידה בנוכחותם — זכרים כסופי-גב, אמהות עם תינוקות, העיסוק הלא ממהר של משפחת גורילות בר במהלך יומה. אינטראקציה תרבותית אמיתית עם הקהילה המקומית באה בהמשך.",
        accommodation: "Ingagi Lodge",
        meals: "כל הארוחות",
        insiderFact: "רק מספר מוגבל של היתרים מונפק לכל משפחת גורילות ביום — המפגש מוסדר בקפידה כדי להגן על המשפחות המורגלות.",
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
        title: "מעקב קופי זהב והעברה לקיגלי",
        description: "בוקר מהיר וחי יותר ממעקב הגורילות — קופי הזהב נעים במהירות דרך חופת הבמבוק, ומעקב אחריהם הוא עניין של להדביק את הקצב כמו גם סבלנות. נסיעת אחר-הצהריים מחזירה אתכם לקיגלי.",
        accommodation: "Kigali Serena Hotel",
        meals: "כל הארוחות",
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
        title: "מקיגלי לזנזיבר",
        description: "טיסה מקיגלי לזנזיבר סוגרת את מחצית ההרפתקה של הטיול ופותחת את המחצית המרגיעה.",
        accommodation: "Zanzibar Serena",
        meals: "ארוחת בוקר",
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
        title: "סיור בסטון טאון",
        description: "בוקר בחקירת הרחובות המתפתלים של סטון טאון, שווקי התבלינים והאדריכלות הסווהילית-ערבית — עוד סיפור אחד לפני שהחוף משתלט לגמרי.",
        accommodation: "Nungwi Dreams By Mantis",
        meals: "ארוחת בוקר",
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
        title: "הרפיה בחוף",
        description: "היום הראשון מתוך שלושה ימים מלאים ללא דבר על סדר היום מלבד החוף עצמו.",
        accommodation: "Nungwi Dreams By Mantis",
        meals: "ארוחת בוקר",
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
        title: "הרפיה בחוף",
        description: "עוד יום מלא של זמן חוף לא מתוכנן.",
        accommodation: "Nungwi Dreams By Mantis",
        meals: "ארוחת בוקר",
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
        title: "הרפיה בחוף",
        description: "יום מלא אחרון בחוף לפני היציאה.",
        accommodation: "Nungwi Dreams By Mantis",
        meals: "ארוחת בוקר",
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
        title: "יציאה",
        description: "העברה לשדה התעופה זנזיבר, ושנים עשר ימים המשתרעים על פני שני סוגים שונים מאוד של יוצא דופן חוזרים איתכם הביתה.",
        accommodation: "N/A",
        meals: "ארוחת בוקר"
      }
    ]
  },
]
