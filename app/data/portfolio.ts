import type { Locale } from './channel'

type L<T = string> = Record<Locale, T>

/** Screenshots of client projects (hosted on the previous portfolio until they are copied here). */

export const PERSON = {
  name: { ar: 'يمان مندو', en: 'Yaman Mando', tr: 'Yaman Mando' } as L,
  status: { ar: 'متاح للعمل عن بُعد · مرسين، تركيا', en: 'Open to remote work · Mersin, Türkiye', tr: 'Uzaktan çalışmaya açık · Mersin, Türkiye' } as L,
  roleStrong: { ar: 'مطوّر واجهات أمامية (Senior)', en: 'Senior Frontend Developer', tr: 'Kıdemli Frontend Geliştirici' } as L,
  role: {
    ar: 'متخصص في Vue.js وNuxt.js، أبني منصات ويب وتطبيقات جوّال سريعة تدعم العربية والإنجليزية بالكامل.',
    en: 'specializing in Vue.js and Nuxt.js. I build fast web platforms and mobile apps with full Arabic and English support.',
    tr: 'Vue.js ve Nuxt.js alanında uzman. Arapça ve İngilizceyi tam destekleyen hızlı web platformları ve mobil uygulamalar geliştiriyorum.',
  } as L,
  email: 'yaman.mando.88@gmail.com',
  phone: '+90 553 003 71 45',
  whatsapp: 'https://wa.me/905530037145',
  linkedin: 'https://www.linkedin.com/in/yaman-mando',
  github: 'https://github.com/yaman-mando',
}

export const STATS: { value: string, label: L }[] = [
  { value: '~90,000', label: { ar: 'مستخدم لمنصة «اختبارات»', en: 'users on Ekhtibarat', tr: 'Ekhtibarat kullanıcısı' } },
  { value: '5,000+', label: { ar: 'تنزيل لتطبيق «مكتمل»', en: 'Muktamel app installs', tr: 'Muktamel uygulama indirmesi' } },
  { value: '~70%', label: { ar: 'أسرع في تحميل الصفحات', en: 'faster page loads', tr: 'daha hızlı sayfa yükleme' } },
  { value: '8+', label: { ar: 'سنوات خبرة في تطوير الويب', en: 'years in web development', tr: 'yıllık web geliştirme deneyimi' } },
]

export const ABOUT = {
  heading: { ar: 'من الفكرة الأولى حتى الإطلاق على المتاجر.', en: 'From the first idea to the App Store release.', tr: 'İlk fikirden App Store yayınına kadar.' } as L,
  text: {
    ar: 'أعمل في تطوير الويب منذ أكثر من ثماني سنوات، وتخصصت في السنوات الخمس الأخيرة في Vue.js وNuxt.js. بنيت منصات ويب وتطبيقات جوّال من الصفر وأطلقتها لمستخدمين حقيقيين، مع دعم كامل للغتين العربية والإنجليزية واتجاهَي الكتابة. أهتم بالأداء والتصيير من جهة الخادم وأتمتة النشر، وأعمل بتنسيق وثيق مع فرق تطوير الخوادم والتصميم وإدارة المشاريع.',
    en: 'I’ve worked in web development for more than eight years, and for the last five I’ve specialized in Vue.js and Nuxt.js. I’ve built web platforms and mobile apps from scratch and shipped them to real users, with full Arabic and English support in both writing directions. I care about performance, server-side rendering and automated delivery, and I work closely with backend, design and project-management teams.',
    tr: 'Sekiz yılı aşkın süredir web geliştirme alanında çalışıyorum; son beş yıldır Vue.js ve Nuxt.js üzerine uzmanlaştım. Web platformlarını ve mobil uygulamaları sıfırdan geliştirip gerçek kullanıcılara sundum; Arapça ve İngilizceyi her iki yazı yönüyle tam olarak destekledim. Performansa, sunucu taraflı render’a ve otomatik dağıtıma önem veriyor; backend, tasarım ve proje yönetimi ekipleriyle yakın çalışıyorum.',
  } as L,
}

export interface Project {
  id: string
  name: L
  kind: L
  kpiValue: string
  kpiLabel: L
  tags: string[]
  url: string
  urlLabel: string
  image: string
  imageAlt: string
  points: L<string[]>
  extraLink?: { url: string, label: L }
}

export const PROJECTS: Project[] = [
  {
    id: 'ekhtibarat',
    name: { ar: 'اختبارات', en: 'Ekhtibarat', tr: 'Ekhtibarat' },
    kind: { ar: 'منصة تعليمية للتحضير للاختبارات · المملكة العربية السعودية', en: 'Education and exam-preparation platform · Saudi Arabia', tr: 'Eğitim ve sınav hazırlık platformu · Suudi Arabistan' },
    kpiValue: '~90,000',
    kpiLabel: { ar: 'مستخدم', en: 'users', tr: 'kullanıcı' },
    tags: ['Vue.js', 'Nuxt.js', 'TypeScript', 'Firebase', 'Azure', 'GitHub Actions'],
    url: 'https://ekhtibarat.com',
    urlLabel: 'ekhtibarat.com',
    image: '/img/ekhtibarat.webp',
    imageAlt: 'Ekhtibarat',
    points: {
      ar: [
        'طوّرت الواجهة الأمامية بالكامل من الصفر دون الاعتماد على أي قالب جاهز.',
        'واجهة ثنائية اللغة تدعم الكتابة من اليمين إلى اليسار وبالعكس، باستخدام @nuxtjs/i18n.',
        'نفّذت مسارات التدريب والاختبار بأنماط تدريب متعددة، مع صفحات لمتابعة تقدّم كل مستخدم وإحصاءاته.',
        'ربطت المنصة بخدمات Firebase (التحليلات، الاستضافة، Firestore، التخزين، الإشعارات) وبمنصة Azure.',
        'أنشأت مسارات النشر الآلي عبر GitHub Actions، وتولّيت إصدارات بيئة الإنتاج.',
      ],
      en: [
        'Built the entire frontend from scratch, without any template.',
        'A fully bilingual Arabic/English interface with RTL and LTR support using @nuxtjs/i18n.',
        'Training and exam flows with several training modes, plus progress and analytics views for each user.',
        'Integrated Firebase (Analytics, Hosting, Firestore, Storage, Notifications) and Azure.',
        'Set up CI/CD with GitHub Actions and owned production releases.',
      ],
      tr: [
        'Tüm frontend’i hiçbir hazır şablon kullanmadan sıfırdan geliştirdim.',
        '@nuxtjs/i18n ile RTL ve LTR destekli, tamamen iki dilli Arapça/İngilizce arayüz.',
        'Farklı eğitim modlarıyla eğitim ve sınav akışları; her kullanıcı için ilerleme ve analiz ekranları.',
        'Firebase (Analytics, Hosting, Firestore, Storage, Bildirimler) ve Azure entegrasyonu.',
        'GitHub Actions ile CI/CD kurdum ve canlı ortam yayınlarını yönettim.',
      ],
    },
  },
  {
    id: 'muktamel',
    name: { ar: 'مكتمل', en: 'Muktamel', tr: 'Muktamel' },
    kind: { ar: 'منصة عقارية على الويب وتطبيق للجوّال', en: 'Real-estate web platform and mobile app', tr: 'Emlak web platformu ve mobil uygulama' },
    kpiValue: '~70%',
    kpiLabel: { ar: 'أسرع في تحميل الصفحات', en: 'faster page loads', tr: 'daha hızlı sayfa yükleme' },
    tags: ['Vue.js', 'Nuxt.js', 'TypeScript', 'Ionic', 'REST APIs'],
    url: 'https://www.muktamel.com',
    urlLabel: 'muktamel.com',
    image: '/img/muktamel.webp',
    imageAlt: 'Muktamel',
    points: {
      ar: [
        'شاركت في بناء منصة الويب وتطبيق Android وiOS من الصفر، ضمن فريق من مطوّرَين اثنين للواجهات (أكثر من 5,000 تنزيل).',
        'خفّضت زمن تحميل الصفحات بنحو 70% عبر ضغط الصور على الخادم (Nuxt Image وIPX) وتأجيل تحميل المحتوى.',
        'طوّرت البحث عن العقارات، والخرائط وتحديد المواقع، وحاسبة تفاعلية لمساحات الأراضي باللغتين.',
        'أدرت إصدارات التطبيق على App Store وGoogle Play.',
        'تولّيت في السنة الأخيرة تطوير الواجهة الأمامية وصيانتها بشكل مستقل.',
      ],
      en: [
        'Built the web platform and the Android/iOS app from scratch as one of two senior frontend developers (5,000+ installs).',
        'Cut page-load time by about 70% with server-side image compression (Nuxt Image + IPX) and lazy loading.',
        'Property search, maps and location features, and an interactive land-area calculator in Arabic and English.',
        'Managed releases to the App Store and Google Play.',
        'In the final year, owned frontend development and maintenance on my own.',
      ],
      tr: [
        'Web platformunu ve Android/iOS uygulamasını, iki kıdemli frontend geliştiriciden biri olarak sıfırdan geliştirdim (5.000+ indirme).',
        'Sunucu taraflı görsel sıkıştırma (Nuxt Image + IPX) ve lazy loading ile sayfa yükleme süresini yaklaşık %70 azalttım.',
        'Arapça ve İngilizce mülk arama, harita ve konum özellikleri ile interaktif arsa alanı hesaplayıcısı.',
        'App Store ve Google Play yayınlarını yönettim.',
        'Son yılda frontend geliştirmesini ve bakımını tek başıma üstlendim.',
      ],
    },
  },
  {
    id: 'promptjicode',
    name: { ar: 'PromptjiCode Interview', en: 'PromptjiCode Interview', tr: 'PromptjiCode Interview' },
    kind: {
      ar: 'منصة تدريب على مقابلات الواجهات الأمامية · مشروعي الخاص',
      en: 'Frontend interview practice platform · my own product',
      tr: 'Frontend mülakat pratik platformu · kendi ürünüm',
    },
    kpiValue: '150',
    kpiLabel: { ar: 'سؤال بثلاث لغات', en: 'questions in 3 languages', tr: 'soru, 3 dilde' },
    tags: ['Nuxt 4', 'TypeScript', 'Tailwind CSS', 'Cloudflare Workers', 'Cloudflare D1', 'i18n / RTL'],
    url: 'https://interview.promptjicode.com',
    urlLabel: 'interview.promptjicode.com',
    image: '/img/interview-desktop.webp',
    imageAlt: 'PromptjiCode Interview',
    extraLink: { url: 'https://github.com/yaman-mando/promptjicode-interview', label: { ar: 'الكود على GitHub', en: 'Code on GitHub', tr: 'Kod GitHub’da' } },
    points: {
      ar: [
        'منصة اختبارات لمقابلات الواجهات الأمامية بثلاث لغات: العربية (RTL) والإنجليزية والتركية، بثلاثة مستويات Junior وMid وSenior.',
        'التصحيح يتم على الخادم برمز موقّع، فلا تصل الإجابات إلى المتصفح، وتُحفظ النتائج والنِّسب المئوية في Cloudflare D1.',
        'أداة فحص تشغّل كل كود JavaScript في بنك الأسئلة وتتأكد أن الإجابة المعتمدة هي الناتج الحقيقي.',
        'لوحة تحكم للمشرف فيها إحصاءات الاستخدام وصعوبة كل سؤال.',
        'تعمل على Cloudflare Workers مع نشر تلقائي من GitHub، ومبنية على محتوى قناتي التعليمية PromptjiCode.',
      ],
      en: [
        'A frontend interview practice platform in Arabic (RTL), English and Turkish, with Junior, Mid and Senior tests.',
        'Grading runs on the server with signed tokens, so answers never reach the browser; results and percentiles are stored in Cloudflare D1.',
        'A verifier runs every JavaScript snippet in the question bank and checks that the marked answer is the real output.',
        'An admin dashboard with usage stats and per-question difficulty.',
        'Runs on Cloudflare Workers with automatic deploys from GitHub, and grows out of my educational channel PromptjiCode.',
      ],
      tr: [
        'Arapça (RTL), İngilizce ve Türkçe; Junior, Mid ve Senior seviyelerinde frontend mülakat pratik platformu.',
        'Değerlendirme imzalı token’larla sunucuda yapılır, cevaplar tarayıcıya hiç ulaşmaz; sonuçlar ve yüzdelikler Cloudflare D1’de saklanır.',
        'Soru bankasındaki her JavaScript kodunu çalıştırıp işaretli cevabın gerçek çıktı olduğunu doğrulayan bir araç.',
        'Kullanım istatistikleri ve soru başına zorluk gösteren bir yönetim paneli.',
        'GitHub’dan otomatik dağıtımla Cloudflare Workers üzerinde çalışır; eğitim kanalım PromptjiCode’dan doğdu.',
      ],
    },
  },
]

export const SKILLS: { title: L, text: L }[] = [
  { title: { ar: 'الواجهات الأمامية', en: 'Frontend', tr: 'Frontend' }, text: { ar: 'Vue.js 2 & 3, Nuxt.js 2 & 3, TypeScript, JavaScript (ES6+), HTML5, CSS/SASS', en: 'Vue.js 2 & 3, Nuxt.js 2 & 3, TypeScript, JavaScript (ES6+), HTML5, CSS/SASS', tr: 'Vue.js 2 & 3, Nuxt.js 2 & 3, TypeScript, JavaScript (ES6+), HTML5, CSS/SASS' } },
  { title: { ar: 'إدارة الحالة والبنية', en: 'State & architecture', tr: 'State ve mimari' }, text: { ar: 'Pinia, Vuex, Composables, SSR/SSG, Lazy loading, Nuxt Image (IPX)', en: 'Pinia, Vuex, Composables, SSR/SSG, Lazy loading, Nuxt Image (IPX)', tr: 'Pinia, Vuex, Composables, SSR/SSG, Lazy loading, Nuxt Image (IPX)' } },
  { title: { ar: 'تعدد اللغات وRTL', en: 'i18n & RTL', tr: 'i18n ve RTL' }, text: { ar: 'واجهات عربية وإنجليزية، ‎@nuxtjs/i18n، تخطيطات RTL/LTR، منتجات موجّهة لأسواق الخليج والشرق الأوسط', en: 'Arabic/English interfaces, @nuxtjs/i18n, RTL/LTR layouts, products for Gulf and MENA markets', tr: 'Arapça/İngilizce arayüzler, @nuxtjs/i18n, RTL/LTR düzenler, Körfez ve MENA pazarı ürünleri' } },
  { title: { ar: 'تطبيقات الجوّال', en: 'Mobile', tr: 'Mobil' }, text: { ar: 'Ionic، إصدارات Android وiOS، النشر على App Store وGoogle Play', en: 'Ionic, Android and iOS builds, App Store and Google Play releases', tr: 'Ionic, Android ve iOS derlemeleri, App Store ve Google Play yayınları' } },
  { title: { ar: 'الواجهات البرمجية والسحابة', en: 'APIs & cloud', tr: 'API ve bulut' }, text: { ar: 'REST APIs, Authentication, Firebase, Azure, Cloudflare Workers & D1', en: 'REST APIs, Authentication, Firebase, Azure, Cloudflare Workers & D1', tr: 'REST APIs, Authentication, Firebase, Azure, Cloudflare Workers & D1' } },
  { title: { ar: 'النشر والتسليم', en: 'Delivery', tr: 'Teslimat' }, text: { ar: 'Git, GitHub, GitHub Actions, CI/CD', en: 'Git, GitHub, GitHub Actions, CI/CD', tr: 'Git, GitHub, GitHub Actions, CI/CD' } },
  { title: { ar: 'مهارات أخرى', en: 'Also', tr: 'Diğer' }, text: { ar: 'Angular (سنتان)، WordPress وPHP، تحسين الظهور في محركات البحث، Bootstrap', en: 'Angular (2 years), WordPress & PHP, SEO, Bootstrap', tr: 'Angular (2 yıl), WordPress ve PHP, SEO, Bootstrap' } },
  { title: { ar: 'أدوات الذكاء الاصطناعي', en: 'AI tools', tr: 'Yapay zekâ araçları' }, text: { ar: 'أستخدم Claude وChatGPT وGitHub Copilot وGemini في البحث وتتبّع الأخطاء وكتابة الاختبارات، مع مراجعة دقيقة لكل النتائج', en: 'Claude, ChatGPT, GitHub Copilot and Gemini for research, debugging and tests, always with careful review', tr: 'Araştırma, hata ayıklama ve test için Claude, ChatGPT, GitHub Copilot ve Gemini; her zaman dikkatli kontrolle' } },
]

export const JOBS: { when: L, title: L, org: string, text: L }[] = [
  {
    when: { ar: '2021 – الآن', en: '2021 – Present', tr: '2021 – Günümüz' },
    title: { ar: 'مطوّر واجهات أمامية', en: 'Frontend Developer', tr: 'Frontend Geliştirici' },
    org: 'ORBIT',
    text: {
      ar: 'المطوّر الرئيسي للواجهات الأمامية في منصتَي «اختبارات» و«مكتمل»، من تصميم البنية والتنفيذ إلى تحسين الأداء والإصدارات. أعمل على مشاريع Vue 2/Nuxt 2 وVue 3/Nuxt 3 باستخدام Vuex وPinia.',
      en: 'Lead frontend developer on Ekhtibarat and Muktamel, from architecture and implementation to performance and releases. I work on Vue 2/Nuxt 2 and Vue 3/Nuxt 3 codebases with Vuex and Pinia.',
      tr: 'Ekhtibarat ve Muktamel’in ana frontend geliştiricisiyim; mimari ve geliştirmeden performansa ve yayınlara kadar. Vuex ve Pinia ile Vue 2/Nuxt 2 ve Vue 3/Nuxt 3 projeleri üzerinde çalışıyorum.',
    },
  },
  {
    when: { ar: '2017 – 2021', en: '2017 – 2021', tr: '2017 – 2021' },
    title: { ar: 'مطوّر واجهات أمامية', en: 'Frontend Developer', tr: 'Frontend Geliştirici' },
    org: 'ADAM ICT',
    text: {
      ar: 'طوّرت ما بين 20 و50 موقعاً لعملاء الشركة وتولّيت صيانتها، معظمها على WordPress مع تخصيص القوالب وPHP وتصميم متجاوب وتحسين لمحركات البحث. كما طوّرت واجهة مشروع عقاري، وعملت بإطار Angular لمدة عامين.',
      en: 'Built and maintained 20–50 client websites, mostly on WordPress with custom themes and PHP, responsive design and SEO. I also built the frontend of a real-estate project and worked with Angular for two years.',
      tr: 'Çoğu WordPress tabanlı 20–50 müşteri sitesini özel tema, PHP, duyarlı tasarım ve SEO ile geliştirip bakımını yaptım. Ayrıca bir emlak projesinin frontend’ini geliştirdim ve iki yıl Angular ile çalıştım.',
    },
  },
  {
    when: { ar: '2009 – 2017', en: '2009 – 2017', tr: '2009 – 2017' },
    title: { ar: 'إدارة تقنية المعلومات', en: 'IT Management', tr: 'Bilgi Teknolojileri Yönetimi' },
    org: '',
    text: {
      ar: 'شغلت منصب مدير تقنية المعلومات في شركة باشا سراي، ومستشفى النور الخاص، وجمعية شباب الخير، وشركة أبو اللبن. طوّرت أنظمة داخلية للمحاسبة والمبيعات ومواقع إلكترونية للشركات، وأشرفت على العمليات التقنية اليومية.',
      en: 'IT Manager at Paşa Saray, Al-Noor Private Hospital, Shabab Al Kheer Charity and Aboullaban. Built internal accounting and sales systems and company websites, and ran daily IT operations.',
      tr: 'Paşa Saray, Al-Noor Özel Hastanesi, Shabab Al Kheer Derneği ve Aboullaban’da BT Müdürü. Dahili muhasebe ve satış sistemleri ile şirket web siteleri geliştirdim, günlük BT operasyonlarını yönettim.',
    },
  },
]

export const EDUCATION: { title: L, school: L, year: string }[] = [
  { title: { ar: 'بكالوريوس في تقنية المعلومات', en: 'B.Sc. in Information Technology', tr: 'Bilgi Teknolojileri Lisansı' }, school: { ar: 'الجامعة الافتراضية السورية', en: 'Syrian Virtual University', tr: 'Suriye Sanal Üniversitesi' }, year: '2012' },
  { title: { ar: 'دبلوم تقني في هندسة الحاسوب', en: 'Technical Diploma in Computer Engineering', tr: 'Bilgisayar Mühendisliği Teknik Diploması' }, school: { ar: 'جامعة البعث', en: 'Al-Baath University', tr: 'Al-Baath Üniversitesi' }, year: '2009' },
]

export const LANGUAGES: { name: L, level: L }[] = [
  { name: { ar: 'العربية', en: 'Arabic', tr: 'Arapça' }, level: { ar: 'اللغة الأم', en: 'Native', tr: 'Ana dil' } },
  { name: { ar: 'الإنجليزية', en: 'English', tr: 'İngilizce' }, level: { ar: 'إتقان مهني', en: 'Professional working', tr: 'Profesyonel çalışma düzeyi' } },
  { name: { ar: 'التركية', en: 'Turkish', tr: 'Türkçe' }, level: { ar: 'إتقان مهني', en: 'Professional working', tr: 'Profesyonel çalışma düzeyi' } },
]
