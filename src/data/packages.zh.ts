import type { SafariPackage } from './packages'

export const packages: SafariPackage[] = [
  {
    slug: '7-day-serengeti-ngorongoro',
    name: '7日塞伦盖蒂与恩戈罗恩戈罗游猎',
    duration: 7,
    destinations: ['serengeti', 'ngorongoro', 'tarangire'],
    type: 'wildlife',
    priceFrom: 3400.63,
    groupSize: { min: 1, max: 8 },
    badge: 'bestseller',
    bestFor: ['couples', 'honeymoon', 'families', 'solo'],
    metaTitle: '7日北方环线游猎：塞伦盖蒂、恩戈罗恩戈罗与塔兰吉雷',
    metaDescription: '一趟私人、全程陪同的7日北方环线游猎——塔兰吉雷、塞伦盖蒂与恩戈罗恩戈罗火山口。三个等级，从荒野小径到荒野至尊。每人2,485美元起。',
    overview: [
      '七天是大多数首次前往坦桑尼亚的旅行者在理清地理布局后最终选定的时长——足够长，可以从容穿越三个截然不同的生态系统而不显仓促；又足够短，可以嵌入标准的两周行程窗口，并在两端分别接上海滩或大猩猩徒步的延伸行程。这条行程是北方环线最完整的呈现：塔兰吉雷的象群与古老猴面包树，塞伦盖蒂深处两个完整的日子，以及一整天下降至恩戈罗恩戈罗火山口——非洲在单一封闭生态系统内密度最高的野生动物聚集地——最后在返回阿鲁沙的路上，于姆托瓦姆布村进行一次文化停留。',
      '提供三个等级——荒野小径、荒野保护区与荒野至尊——各等级遵循相同的七日路线，仅是您入住的营地与旅馆档次有所不同。',
      '这趟游猎可自然地融入更广泛的东非之旅——延伸至肯尼亚或卢旺达，或在最后一次游猎巡游后接上海滩延伸行程。',
    ],
    pricingTiersProvisional: false,
    pricingTiers: [
      { pax: 2, season: 'high', trail: 3400.63, reserve: 4281.88, sovereign: 5674.38 },
      { pax: 3, season: 'high', trail: 2795.83, reserve: 3744.58, sovereign: 5085.83 },
      { pax: 4, season: 'high', trail: 2742.81, reserve: 3736.56, sovereign: 5016.56 },
      { pax: 5, season: 'high', trail: 2485.00, reserve: 3276.25, sovereign: 4775.00 },
      { pax: 6, season: 'high', trail: 2548.54, reserve: 3429.79, sovereign: 4822.29 },
      { pax: 2, season: 'low', trail: 2374, reserve: 3053, sovereign: 4480 },
      { pax: 3, season: 'low', trail: 2332, reserve: 2911, sovereign: 4783 },
      { pax: 4, season: 'low', trail: 1959, reserve: 2527, sovereign: 3979 },
      { pax: 5, season: 'low', trail: 1969, reserve: 2547, sovereign: 4260 },
      { pax: 6, season: 'low', trail: 1791, reserve: 2383, sovereign: 3855 },
    ],
    highlights: [
      '三座公园，一段连续的旅程——塔兰吉雷、塞伦盖蒂与恩戈罗恩戈罗火山口，由公路串联，让景观本身也成为故事的一部分',
      '塞伦盖蒂两个完整的日子——足够的时间真正追随猎食动物的行踪，视季节而定，甚至追随大迁徙本身',
      '恩戈罗恩戈罗火山口内完整的一天——非洲大陆密度最高的野生动物聚集地，也是本地区犀牛目击率最可靠的地方之一',
      '塔兰吉雷的象群与古老猴面包树——大多数较短行程完全略过的、被低估的开篇章节',
      '姆托瓦姆布文化村——返回阿鲁沙途中一次真实、从容的停留，而非匆忙的路边拍照',
      '可轻松与肯尼亚或卢旺达行程结合，或延伸至海滩——这条行程既可独立成行，也可作为更长东非之旅的一段',
      '涵盖各个舒适档次——从踏实周到到真正的珍稀奢华，而路线本身的每一天都不会因此改变',
    ],
    heroImage: '/images/gallery/ngorongoro-crater-landscape.jpg',
    gallery: [
      '/images/gallery/serengeti-lion-pride.webp',
      '/images/gallery/tarangire-elephants-baobab.webp',
    ],
    included: [
      '所有公园门票',
      '所有四驱游猎车巡游',
      '全程专业当地向导',
      '按每日安排提供的餐食',
      '按行程安排的住宿',
      '私人机场及营地间转送',
    ],
    includedCategorized: {
      transfers: ['私人机场及营地间转送'],
      accommodationMeals: ['按每日安排提供的餐食', '按行程安排的住宿'],
      guidingGameDrives: [
        '所有公园门票',
        '所有四驱游猎车巡游',
        '全程专业当地向导',
      ],
    },
    excluded: ['国际航班', '签证费用', '旅行保险', '小费', '自选活动'],
    excludedCategorized: ['国际航班', '签证费用', '旅行保险', '小费', '自选活动'],
    notes: [
      '所示价格为每人双人间价格；单人入住需另付差价，可按需申请。',
      '住宿与价格视可订情况而定，同一季节内也可能因具体出行日期而有所不同。',
      '坦桑尼亚国家公园及保护区门票由政府制定，可能随时调整，恕不另行通知。',
    ],
    faq: [
      {
        q: '三个等级之间有什么区别？',
        a: '无论选择哪个等级，您都会前往相同的地点，看到相同的野生动物。改变的是活动之间对您的照顾方式：荒野小径让一切保持舒适周到，荒野保护区给您更多放松的空间，而荒野至尊则让您每晚都入住真正特别的地方。请选择最符合您旅行风格的那一款。',
      },
      {
        q: '我们会看到大迁徙吗？',
        a: '这取决于时机和兽群移动的位置，我们不会承诺在特定的一天看到特定的景象。这条行程能保证的是两个完整的日子置身于常驻狮子与豹子的领地，这里全年都会有目击记录——如果追寻迁徙本身对您最为重要，请在预订前与您的顾问沟通，我们会帮您选择合适的日期。',
      },
      {
        q: '价格会因团组规模而有多大变化？',
        a: '车辆、向导以及部分转送费用由团组共同分摊，因此人均价格通常会随旅行者人数增加而下降——请查看上方每个等级下针对您团组规模的价格表。',
      },
      {
        q: '包含哪些项目，哪些需要我们自行安排？',
        a: '包含项目：所有公园及保护区门票、每次私人四驱陆地巡洋舰游猎巡游、您的向导、餐食、住宿、巡游期间的瓶装水，以及机场转送。需自行安排：国际航班、签证费用、旅行保险、小费，以及酒精饮品等个人消费。',
      },
      {
        q: '我们能把这趟行程扩展成更大的旅程吗——肯尼亚、卢旺达，或几天海滩时光？',
        a: '可以，我们许多旅行者正是这样做的。这趟游猎与肯尼亚游猎或卢旺达大猩猩徒步能很好地衔接，海滩延伸行程也可以安排在您最后一次游猎巡游之后。只需在规划时告知我们，我们便会围绕它为您搭建整趟旅程。',
      },
      {
        q: '这条行程适合首次到访坦桑尼亚的游客吗？',
        a: '非常适合——这是大多数首次出行的旅行者在理清地理布局后所选择的路线，因为它涵盖了几乎每一趟北方环线游猎的三座核心公园，无需将其压缩进更短、更仓促的行程之中。',
      },
    ],
    itinerary: [
      {
        day: 1,
        title: '阿鲁沙',
        description: '抵达阿鲁沙。转送至酒店。',
        accommodation: '阿鲁沙，视等级而定',
        meals: '含早餐',
        insiderFact:
          '阿鲁沙海拔约1,400米——在进入各公园前，这是舒适的缓冲之夜，也是大多数运营商在行程之间保养和补给车辆的地方。',
        accommodationByTier: {
          trail: { name: 'Kahawa House', image: '/images/lodges/kahawa-house.webp', amenities: ['wifi', 'restaurant', 'garden'] },
          reserve: { name: 'Gran Melia, Arusha', image: '/images/lodges/gran-melia-arusha.webp', amenities: ['wifi', 'pool', 'spa'] },
          sovereign: { name: 'Arusha Coffee Lodge', image: '/images/lodges/arusha-coffee-lodge.webp', amenities: ['wifi', 'pool', 'view'] },
        },
      },
      {
        day: 2,
        title: '塔兰吉雷国家公园',
        description: '驱车前往塔兰吉雷国家公园。在象群与猴面包树之间进行游猎巡游。',
        accommodation: '塔兰吉雷地区，视等级而定',
        meals: '全食宿',
        insiderFact:
          '除雨季外，塔兰吉雷拥有非洲最高的大象密度之一，雨季时象群则沿河流集中。',
        accommodationByTier: {
          trail: { name: 'Ngorongoro Farm House', image: '/images/lodges/ngorongoro-farm-house.webp', amenities: ['restaurant', 'garden'] },
          reserve: { name: 'Kitela Lodge', image: '/images/lodges/kitela-lodge.webp', amenities: ['pool', 'view', 'restaurant'] },
          sovereign: { name: "Gibb's Farm", image: '/images/lodges/gibb-s-farm.webp', amenities: ['spa', 'view', 'organic-farm'] },
        },
      },
      {
        day: 3,
        title: '继续前往塞伦盖蒂',
        description: '经卡拉图继续前往塞伦盖蒂。下午进行游猎巡游。',
        accommodation: '塞伦盖蒂中部，视等级而定',
        meals: '全食宿',
        insiderFact:
          '卡拉图就位于恩戈罗恩戈罗保护区边界之外——是进入火山口高地前最后一段农田地带。',
        accommodationByTier: {
          trail: { name: 'Serengeti Katikati Camp', image: '/images/gallery/Central-Serengeti-1.jpg', amenities: ['ensuite', 'restaurant', 'wildlife-view'] },
          reserve: { name: 'Kubukubu Tented Lodge', image: '/images/lodges/kubukubu-tented-lodge.webp', amenities: ['pool', 'view', 'restaurant'] },
          sovereign: { name: 'Siringiti Serengeti Camp', image: '/images/lodges/siringiti-serengeti-camp.webp', amenities: ['wifi', 'view', 'restaurant'] },
        },
      },
      {
        day: 4,
        title: '塞伦盖蒂中部',
        description: '塞伦盖蒂全天游猎巡游。',
        accommodation: '塞伦盖蒂中部，视等级而定',
        meals: '全食宿',
        insiderFact:
          '塞罗内拉全年不断的水源吸引了常驻的大型猫科动物种群，包括著名的石岗树栖狮群。',
        accommodationByTier: {
          trail: { name: 'Serengeti Katikati Camp', image: '/images/gallery/Central-Serengeti-1.jpg', amenities: ['ensuite', 'restaurant', 'wildlife-view'] },
          reserve: { name: 'Kubukubu Tented Lodge', image: '/images/lodges/kubukubu-tented-lodge.webp', amenities: ['pool', 'view', 'restaurant'] },
          sovereign: { name: 'Siringiti Serengeti Camp', image: '/images/lodges/siringiti-serengeti-camp.webp', amenities: ['wifi', 'view', 'restaurant'] },
        },
      },
      {
        day: 5,
        title: '恩戈罗恩戈罗火山口',
        description: '下降至恩戈罗恩戈罗火山口，进行全天游猎巡游。',
        accommodation: '恩戈罗恩戈罗地区，视等级而定',
        meals: '全食宿',
        insiderFact: '恩戈罗恩戈罗火山口是一个约260平方公里的封闭生态系统——大多数常驻动物终生都不会离开这里。',
        accommodationByTier: {
          trail: { name: 'Ngorongoro Farm House', image: '/images/lodges/ngorongoro-farm-house.webp', amenities: ['restaurant', 'garden'] },
          reserve: { name: 'Kitela Lodge', image: '/images/lodges/kitela-lodge.webp', amenities: ['pool', 'view', 'restaurant'] },
          sovereign: { name: "Gibb's Farm", image: '/images/lodges/gibb-s-farm.webp', amenities: ['spa', 'view', 'organic-farm'] },
        },
      },
      {
        day: 6,
        title: '姆托瓦姆布至阿鲁沙',
        description: '探访姆托瓦姆布文化村，随后驱车前往阿鲁沙。',
        accommodation: '阿鲁沙，视等级而定',
        meals: '含早餐',
        insiderFact:
          '大多数从乞力马扎罗出发的国际航班在深夜起飞，因此这一缓冲之夜让最后的游猎行程不显仓促。',
        accommodationByTier: {
          trail: { name: 'Kahawa House', image: '/images/lodges/kahawa-house.webp', amenities: ['wifi', 'restaurant', 'garden'] },
          reserve: { name: 'Gran Melia, Arusha', image: '/images/lodges/gran-melia-arusha.webp', amenities: ['wifi', 'pool', 'spa'] },
          sovereign: { name: 'Arusha Coffee Lodge', image: '/images/lodges/arusha-coffee-lodge.webp', amenities: ['wifi', 'pool', 'view'] },
        },
      },
      {
        day: 7,
        title: '离程',
        description: '转送至机场。离境。',
        accommodation: '无',
        meals: '早餐',
        insiderFact: '乞力马扎罗国际机场距阿鲁沙约45至60分钟车程。',
      },
    ],
  },
]
