import type { Locale } from './channel'

type L<T = string> = Record<Locale, T>

/** Content of the /services page (offers for small businesses). Prices are "starting from". */

export const SV_META = {
  title: { ar: 'تصميم مواقع لعملك بالعربية والتركية والإنجليزية · يمان مندو', en: 'Websites for your business in English, Turkish and Arabic · Yaman Mando', tr: 'İşletmeniz için Türkçe, İngilizce ve Arapça web sitesi · Yaman Mando' } as L,
  desc: { ar: 'مواقع سريعة ومتوافقة مع الجوال، بلغة واحدة أو بعدة لغات، مع الدومين والاستضافة. أسعار واضحة وتسليم سريع.', en: 'Fast, mobile-friendly websites in one or several languages, with domain and hosting included. Clear prices and quick delivery.', tr: 'Tek dilde ya da çok dilde, telefonda düzgün görünen hızlı web siteleri. Domain ve hosting dahil, net fiyatlar ve hızlı teslim.' } as L,
}

export const SV_NAV = {
  packages: { ar: 'الباقات', en: 'Packages', tr: 'Paketler' } as L,
  work: { ar: 'أعمال سابقة', en: 'Work', tr: 'İşler' } as L,
  extra: { ar: 'خدمات إضافية', en: 'Extras', tr: 'Ek hizmetler' } as L,
  faq: { ar: 'أسئلة شائعة', en: 'FAQ', tr: 'SSS' } as L,
}

export const SV_HERO = {
  kicker: { ar: 'تصميم وتطوير المواقع', en: 'Web design & development', tr: 'Web tasarım ve geliştirme' } as L,
  title: { ar: 'موقع احترافي لعملك', en: 'A professional website for your business', tr: 'İşletmeniz için profesyonel bir web sitesi' } as L,
  text: {
    ar: 'أصمّم مواقع سريعة تظهر بشكل ممتاز على الجوال ويسهل الوصول إليها في Google. أتولى كل شيء من الدومين إلى النشر، فلا تحتاج إلى أي خبرة تقنية.',
    en: 'I build fast websites that look great on phones and are easy to find on Google. I handle everything from the domain to going live, so you don’t need any technical knowledge.',
    tr: 'Telefonda düzgün görünen, hızlı açılan ve Google’da kolay bulunan siteler hazırlıyorum. Domainden yayına kadar her şeyi ben hallediyorum; teknik bir şey bilmenize gerek yok.',
  } as L,
  cta: { ar: 'تواصل عبر واتساب', en: 'Message me on WhatsApp', tr: 'WhatsApp’tan yazın' } as L,
  cta2: { ar: 'شاهد الباقات', en: 'See packages', tr: 'Paketleri görün' } as L,
  note: { ar: 'أرد عادةً خلال ساعات', en: 'I usually reply within hours', tr: 'Genelde birkaç saat içinde dönüyorum' } as L,
}

export const SV_WHY: { icon: string, title: L, text: L }[] = [
  {
    icon: 'M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9S14.5 18.5 12 21c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3Zm0 0a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z',
    title: { ar: 'عدة لغات، والعربية بشكل صحيح', en: 'Several languages, Arabic done right', tr: 'Çok dil, Arapça dahil' },
    text: { ar: 'موقع واحد بالعربية والتركية والإنجليزية، مع اتجاه الكتابة الصحيح للعربية. مثالي إن كان عملاؤك من أكثر من بلد.', en: 'One site in Turkish, English and Arabic, with proper right-to-left layout for Arabic. Ideal if your customers come from more than one country.', tr: 'Tek sitede Türkçe, İngilizce ve Arapça; Arapça için doğru sağdan sola düzen. Müşterileriniz farklı ülkelerden geliyorsa ideal.' },
  },
  {
    icon: 'M12 14l4-4M4.9 19a9 9 0 1 1 14.2 0M12 5v2M5 12H3m18 0h-2M6.3 6.3l1.4 1.4',
    title: { ar: 'سريع ويظهر في Google', en: 'Fast and easy to find', tr: 'Hızlı ve bulunabilir' },
    text: { ar: 'صفحات تُفتح بسرعة على أي جوال، مع إعدادات SEO الأساسية لتظهر في نتائج البحث وعلى خرائط Google.', en: 'Pages that open quickly on any phone, with basic SEO set up so you show up in search results and on Google Maps.', tr: 'Her telefonda hızlı açılan sayfalar; arama sonuçlarında ve Google Haritalar’da görünmeniz için temel SEO ayarları.' },
  },
  {
    icon: 'M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6l-8-3Zm-3 9 2 2 4-4',
    title: { ar: 'كل شيء باسمك', en: 'Everything is yours', tr: 'Her şey sizin adınıza' },
    text: { ar: 'الدومين والموقع مسجّلان باسمك ومن حسابك. أنا أتولى الجانب التقني، وأنت تبقى المالك دائمًا.', en: 'The domain and site are registered in your name, in your own account. I take care of the technical side; you always stay the owner.', tr: 'Domain ve site kendi hesabınızda, sizin adınıza kayıtlı. Teknik tarafı ben yönetirim, sahibi her zaman sizsiniz.' },
  },
]

export interface Pkg {
  id: string
  name: L
  for: L
  tl: L
  usd: string
  unit: L
  points: L<string[]>
  featured?: boolean
}

export const SV_PACKAGES: Pkg[] = [
  {
    id: 'one',
    name: { ar: 'صفحة واحدة', en: 'One page', tr: 'Tek sayfa' },
    for: { ar: 'لمحل أو خدمة تحتاج حضورًا بسيطًا وواضحًا', en: 'For a shop or service that needs a simple, clear presence', tr: 'Basit ve net bir tanıtım isteyen dükkân ve hizmetler için' },
    tl: { ar: '9,999 ليرة', en: '9,999 TL', tr: '9.999 TL' },
    usd: '$199',
    unit: { ar: 'تبدأ من', en: 'From', tr: 'Başlangıç' },
    points: {
      ar: ['صفحة تعريفية واحدة بلغة واحدة', 'زر واتساب، وخريطة، ونموذج تواصل', 'متوافق مع الجوال', 'دومين واستضافة لأول سنة', 'التسليم خلال 3 أيام'],
      en: ['One landing page in one language', 'WhatsApp button, map and contact form', 'Mobile-friendly', 'Domain and hosting for the first year', 'Delivered within 3 days'],
      tr: ['Tek dilde tek tanıtım sayfası', 'WhatsApp butonu, harita ve iletişim formu', 'Mobil uyumlu', 'İlk yıl domain ve hosting', '3 gün içinde teslim'],
    },
  },
  {
    id: 'site',
    name: { ar: 'موقع تعريفي', en: 'Business site', tr: 'Kurumsal site' },
    for: { ar: 'لشركة تريد عرض خدماتها وأعمالها بالتفصيل', en: 'For a business that wants to present its services and work in detail', tr: 'Hizmetlerini ve işlerini detaylı anlatmak isteyen işletmeler için' },
    tl: { ar: '17,999 ليرة', en: '17,999 TL', tr: '17.999 TL' },
    usd: '$359',
    unit: { ar: 'تبدأ من', en: 'From', tr: 'Başlangıç' },
    featured: true,
    points: {
      ar: ['حتى 6 صفحات بلغتين', 'لوحة تحكم لتعديل النصوص والصور بنفسك', 'معرض أعمال أو منتجات', 'إعدادات SEO وخرائط Google', 'دومين واستضافة لأول سنة', 'التسليم خلال أسبوع'],
      en: ['Up to 6 pages in two languages', 'Content panel to edit texts and photos yourself', 'Work or product gallery', 'SEO and Google Maps setup', 'Domain and hosting for the first year', 'Delivered within a week'],
      tr: ['İki dilde 6 sayfaya kadar', 'Metin ve fotoğrafları kendiniz düzenleyeceğiniz panel', 'İş veya ürün galerisi', 'SEO ve Google Haritalar ayarları', 'İlk yıl domain ve hosting', 'Bir hafta içinde teslim'],
    },
  },
  {
    id: 'multi',
    name: { ar: 'موقع بثلاث لغات', en: 'Three-language site', tr: 'Üç dilli site' },
    for: { ar: 'لمن يخدم عملاء أتراكًا وعربًا وأجانب', en: 'For businesses serving Turkish, Arab and international customers', tr: 'Türk, Arap ve yabancı müşterilere hitap edenler için' },
    tl: { ar: '24,999 ليرة', en: '24,999 TL', tr: '24.999 TL' },
    usd: '$499',
    unit: { ar: 'تبدأ من', en: 'From', tr: 'Başlangıç' },
    points: {
      ar: ['التركية والإنجليزية والعربية', 'تصميم عربي صحيح من اليمين لليسار', 'لوحة تحكم بالمحتوى', 'يُثبَّت على الجوال كتطبيق (PWA)', 'SEO لكل لغة', 'دومين واستضافة لأول سنة', 'التسليم خلال أسبوع'],
      en: ['Turkish, English and Arabic', 'Proper right-to-left Arabic design', 'Content management panel', 'Installs on phones like an app (PWA)', 'SEO for each language', 'Domain and hosting for the first year', 'Delivered within a week'],
      tr: ['Türkçe, İngilizce ve Arapça', 'Doğru sağdan sola Arapça tasarım', 'İçerik yönetim paneli', 'Telefona uygulama gibi kurulur (PWA)', 'Her dil için SEO', 'İlk yıl domain ve hosting', 'Bir hafta içinde teslim'],
    },
  },
]

export const SV_PKG_H = { ar: 'باقة تناسب ميزانيتك', en: 'A package for every budget', tr: 'Bütçenize uygun paketler' } as L

export const SV_CUR = {
  label: { ar: 'العملة', en: 'Currency', tr: 'Para birimi' } as L,
}

export const SV_EXTRA_H = {
  kicker: { ar: 'خدمات إضافية', en: 'Extra services', tr: 'Ek hizmetler' } as L,
  title: { ar: 'كل ما يحتاجه عملك ليظهر على الإنترنت', en: 'Everything your business needs to be found online', tr: 'İşletmenizin internette görünmesi için gereken her şey' } as L,
  note: { ar: 'تُضاف إلى أي باقة أو تُطلب وحدها. اكتب لي وأرسل لك السعر.', en: 'Add them to any package or order them on their own. Message me for a price.', tr: 'Herhangi bir pakete eklenebilir ya da tek başına alınabilir. Fiyat için yazın.' } as L,
  ask: { ar: 'اسأل عن السعر', en: 'Ask for a price', tr: 'Fiyat sorun' } as L,
}

export const SV_EXTRA: { id: string, icon: string, title: L, text: L }[] = [
  { id: 'google', icon: 'M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
    title: { ar: 'الظهور على خرائط Google', en: 'Google Business Profile', tr: 'Google İşletme Profili' },
    text: { ar: 'إنشاء ملف نشاطك على Google وتحسينه: الصور، وساعات العمل، والتقييمات، ليظهر محلك عندما يبحث الناس بالقرب منك.', en: 'Set up and optimize your Google profile: photos, hours and reviews, so you show up when people search nearby.', tr: 'Google profilinizi kurar ve iyileştiririm: fotoğraflar, çalışma saatleri, yorumlar. Yakınınızda arayanlar sizi bulsun.' } },
  { id: 'speed', icon: 'M13 2 4 14h7l-1 8 9-12h-7l1-8Z',
    title: { ar: 'تسريع موقع حالي وتحسين SEO', en: 'Speed up an existing site + SEO', tr: 'Mevcut siteyi hızlandırma ve SEO' },
    text: { ar: 'عندك موقع بطيء أو لا يظهر في البحث؟ أفحصه وأصلح ما يؤخره، مع تحسين العناوين والوصف للبحث.', en: 'Slow site, or not showing up in search? I audit it, fix what slows it down, and improve titles and descriptions for search.', tr: 'Siteniz yavaş mı ya da aramada çıkmıyor mu? İnceler, yavaşlatan şeyleri düzeltir, başlık ve açıklamaları iyileştiririm.' } },
  { id: 'pwa', icon: 'M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm4 16h.01',
    title: { ar: 'تطبيق جوال من موقعك (PWA)', en: 'Turn your site into an app (PWA)', tr: 'Sitenizi uygulamaya çevirme (PWA)' },
    text: { ar: 'يثبّته زبونك على شاشة الجوال بأيقونتك، ويفتح بسرعة حتى مع إنترنت ضعيف، دون متاجر تطبيقات.', en: 'Customers install it on their home screen with your icon, and it opens fast even on a weak connection, no app store needed.', tr: 'Müşterileriniz ikonunuzla ana ekrana ekler; zayıf internette bile hızlı açılır, uygulama mağazasına gerek yok.' } },
  { id: 'admin', icon: 'M4 5h16M4 12h16M4 19h10',
    title: { ar: 'لوحة تحكم مخصصة', en: 'Custom admin dashboard', tr: 'Özel yönetim paneli' },
    text: { ar: 'لوحة لإدارة المحتوى أو الطلبات أو الحجوزات أو الزبائن، مصممة على طريقة عملك.', en: 'A dashboard to manage content, orders, bookings or customers, built around the way you work.', tr: 'İçerik, sipariş, rezervasyon ya da müşterileri yönetmek için, çalışma şeklinize göre bir panel.' } },
  { id: 'menu', icon: 'M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm10 3h6m-3-3v6',
    title: { ar: 'منيو رقمي للمطاعم (QR)', en: 'Digital QR menu for restaurants', tr: 'Restoranlar için QR menü' },
    text: { ar: 'منيو بعدة لغات يفتح من رمز QR على الطاولة، مع الأسعار ومسببات الحساسية، وتعدّله بنفسك.', en: 'A multilingual menu opened from a QR code on the table, with prices and allergens, which you can edit yourself.', tr: 'Masadaki QR kodla açılan çok dilli menü; fiyatlar ve alerjenlerle, kendiniz düzenleyebilirsiniz.' } },
  { id: 'email', icon: 'M4 6h16v12H4V6Zm0 1 8 6 8-6',
    title: { ar: 'بريد رسمي باسم عملك', en: 'Business email', tr: 'Kurumsal e-posta' },
    text: { ar: 'بريد مثل info@yourbusiness.com يمنح عملك ثقة أكبر من بريد مجاني.', en: 'An address like info@yourbusiness.com looks far more trustworthy than a free one.', tr: 'info@isletmeniz.com gibi bir adres, ücretsiz e-postadan çok daha güven verir.' } },
  { id: 'shop', icon: 'M5 8h14l-1 12H6L5 8Zm4 0V6a3 3 0 0 1 6 0v2',
    title: { ar: 'متجر إلكتروني', en: 'Online shop', tr: 'Online mağaza' },
    text: { ar: 'منتجات وسلة ودفع إلكتروني، بعرض خاص حسب حجم المتجر.', en: 'Products, cart and online payment, with a custom quote based on the size of the shop.', tr: 'Ürünler, sepet ve online ödeme; mağazanın büyüklüğüne göre özel teklif.' } },
]

export const SV_CARE = {
  title: { ar: 'الاشتراك السنوي', en: 'Yearly care plan', tr: 'Yıllık bakım' } as L,
  tl: { ar: '2,999 ليرة سنويًا', en: '2,999 TL / year', tr: '2.999 TL / yıl' } as L,
  usd: { ar: '59 دولارًا سنويًا', en: '$59 / year', tr: '$59 / yıl' } as L,
  text: {
    ar: 'من السنة الثانية: تجديد الدومين والاستضافة، ومتابعة عمل الموقع، وتعديلات بسيطة على النصوص والصور.',
    en: 'From the second year: domain and hosting renewal, keeping the site running, and small text and photo updates.',
    tr: 'İkinci yıldan itibaren: domain ve hosting yenileme, sitenin sorunsuz çalışması ve küçük metin/fotoğraf güncellemeleri.',
  } as L,
  custom: { ar: 'تحتاج شيئًا مختلفًا، مثل متجر أو نظام حجز؟ اكتب لي وأرسل لك عرضًا خاصًا.', en: 'Need something different, like an online shop or a booking system? Message me for a custom quote.', tr: 'Online mağaza ya da rezervasyon sistemi gibi farklı bir şey mi lazım? Yazın, size özel teklif hazırlayayım.' } as L,
}

export const SV_WORK_H = {
  kicker: { ar: 'أعمال سابقة', en: 'Previous work', tr: 'Önceki işler' } as L,
  title: { ar: 'منصات يستخدمها عشرات الآلاف', en: 'Platforms used by tens of thousands', tr: 'On binlerce kişinin kullandığı platformlar' } as L,
}

export const SV_WORK: { id: string, name: L, kind: L, kpi: L, url: string, label: string, image: L }[] = [
  {
    id: 'ekhtibarat',
    name: { ar: 'اختبارات', en: 'Ekhtibarat', tr: 'Ekhtibarat' },
    kind: { ar: 'منصة تعليمية · السعودية', en: 'Education platform · Saudi Arabia', tr: 'Eğitim platformu · Suudi Arabistan' },
    kpi: { ar: '~90,000 مستخدم', en: '~90,000 users', tr: '~90.000 kullanıcı' },
    url: 'https://ekhtibarat.com', label: 'ekhtibarat.com',
    image: { ar: '/img/ekhtibarat.webp', en: '/img/ekhtibarat.webp', tr: '/img/ekhtibarat.webp' },
  },
  {
    id: 'muktamel',
    name: { ar: 'مكتمل', en: 'Muktamel', tr: 'Muktamel' },
    kind: { ar: 'منصة عقارات وتطبيق جوال', en: 'Real estate platform and mobile app', tr: 'Emlak platformu ve mobil uygulama' },
    kpi: { ar: '+5,000 تنزيل', en: '5,000+ installs', tr: '5.000+ indirme' },
    url: 'https://muktamel.com', label: 'muktamel.com',
    image: { ar: '/img/muktamel.webp', en: '/img/muktamel.webp', tr: '/img/muktamel.webp' },
  },
  {
    id: 'interview',
    name: { ar: 'PromptjiCode Interview', en: 'PromptjiCode Interview', tr: 'PromptjiCode Interview' },
    kind: { ar: 'موقع بثلاث لغات، من الفكرة حتى النشر', en: 'Three-language site, from idea to launch', tr: 'Üç dilli site, fikirden yayına' },
    kpi: { ar: 'AR · EN · TR', en: 'EN · TR · AR', tr: 'TR · EN · AR' },
    url: 'https://interview.promptjicode.com', label: 'interview.promptjicode.com',
    image: { ar: '/img/work/interview-ar.webp', en: '/img/work/interview-en.webp', tr: '/img/work/interview-tr.webp' },
  },
]

export const SV_STEPS_H = {
  kicker: { ar: 'طريقة العمل', en: 'How it works', tr: 'Nasıl çalışıyoruz' } as L,
  title: { ar: 'أربع خطوات بسيطة', en: 'Four simple steps', tr: 'Dört basit adım' } as L,
}

export const SV_STEPS: { title: L, text: L }[] = [
  { title: { ar: 'نتحدث عن عملك', en: 'We talk about your business', tr: 'İşinizi konuşuruz' }, text: { ar: 'تخبرني بما تحتاج إليه، وأرسل لك عرضًا واضحًا بالسعر والمدة.', en: 'You tell me what you need, and I send a clear offer with price and timeline.', tr: 'Neye ihtiyacınız olduğunu anlatırsınız, size fiyat ve süreyle net bir teklif gönderirim.' } },
  { title: { ar: 'التصميم', en: 'Design', tr: 'Tasarım' }, text: { ar: 'أجهّز التصميم الأول من محتواك وصورك، وتراه قبل أي شيء.', en: 'I prepare the first design with your content and photos, and you see it first.', tr: 'İçerik ve fotoğraflarınızla ilk tasarımı hazırlarım, önce siz görürsünüz.' } },
  { title: { ar: 'التعديلات', en: 'Revisions', tr: 'Revizyon' }, text: { ar: 'نعدّل معًا حتى يصبح كما تريد.', en: 'We adjust it together until it’s right.', tr: 'İstediğiniz gibi olana kadar birlikte düzenleriz.' } },
  { title: { ar: 'النشر', en: 'Going live', tr: 'Yayın' }, text: { ar: 'أنشر الموقع على الدومين الخاص بك، وأبقى متاحًا للدعم بعد التسليم.', en: 'I publish the site on your domain and stay available for support after delivery.', tr: 'Siteyi kendi domaininizde yayına alırım, teslimden sonra da destek veririm.' } },
]

export const SV_FAQ_H = {
  kicker: { ar: 'أسئلة شائعة', en: 'FAQ', tr: 'Sık sorulan sorular' } as L,
  title: { ar: 'قبل أن تبدأ', en: 'Before you start', tr: 'Başlamadan önce' } as L,
}

export const SV_FAQ: { q: L, a: L }[] = [
  { q: { ar: 'كم يستغرق تجهيز الموقع؟', en: 'How long does it take?', tr: 'Site ne kadar sürede hazır olur?' }, a: { ar: 'الصفحة الواحدة خلال 3 أيام، والموقع التعريفي أو متعدد اللغات خلال أسبوع، بعد وصول المحتوى.', en: 'A one-page site is ready within 3 days, and a business or multi-language site within a week, once the content is ready.', tr: 'İçerik hazır olduktan sonra tek sayfa 3 gün içinde, kurumsal ya da çok dilli site bir hafta içinde hazır olur.' } },
  { q: { ar: 'من يملك الدومين والموقع؟', en: 'Who owns the domain and the site?', tr: 'Domain ve site kimin olur?' }, a: { ar: 'أنت. يُسجَّل الدومين باسمك ومن حسابك، وأنا أعمل عليه بصلاحية منك فقط.', en: 'You do. The domain is registered in your name and account; I only work on it with your access.', tr: 'Sizin. Domain sizin adınıza, kendi hesabınızda kayıtlı olur; ben sadece verdiğiniz yetkiyle çalışırım.' } },
  { q: { ar: 'لا أملك نصوصًا أو صورًا جاهزة، هل هذه مشكلة؟', en: 'I don’t have texts or photos ready. Is that a problem?', tr: 'Hazır metin ya da fotoğrafım yok, sorun olur mu?' }, a: { ar: 'لا. أساعدك في كتابة النصوص، ونستخدم صورًا مناسبة حتى تجهز صورك.', en: 'No. I help you write the texts, and we use suitable photos until yours are ready.', tr: 'Hayır. Metinleri yazmanıza yardım ederim; fotoğraflarınız hazır olana kadar uygun görseller kullanırız.' } },
  { q: { ar: 'هل يمكنني تعديل الموقع لاحقًا؟', en: 'Can I change things later?', tr: 'Sonradan değişiklik yapabilir miyim?' }, a: { ar: 'نعم. التعديلات البسيطة مشمولة في الاشتراك السنوي، والإضافات الأكبر بعرض منفصل.', en: 'Yes. Small updates are included in the yearly care plan; bigger additions are quoted separately.', tr: 'Evet. Küçük güncellemeler yıllık bakıma dahil, büyük eklemeler ayrıca fiyatlandırılır.' } },
  { q: { ar: 'كيف يكون الدفع؟', en: 'How does payment work?', tr: 'Ödeme nasıl oluyor?' }, a: { ar: '30% عند البدء، والباقي عند التسليم.', en: '30% when we start, and the rest on delivery.', tr: 'Başlarken %30, kalanı teslimde.' } },
]

export const SV_END = {
  title: { ar: 'جاهز لموقعك؟', en: 'Ready for your website?', tr: 'Siteniz için hazır mısınız?' } as L,
  text: { ar: 'اكتب لي عن عملك في رسالة قصيرة، وأرسل لك عرضًا واضحًا خلال يوم.', en: 'Send me a short message about your business, and I’ll get back with a clear offer within a day.', tr: 'İşinizi kısa bir mesajla anlatın, bir gün içinde size net bir teklifle döneyim.' } as L,
  wa: { ar: 'مرحبًا يمان، أريد موقعًا لعملي.', en: 'Hi Yaman, I’d like a website for my business.', tr: 'Merhaba Yaman, işletmem için bir web sitesi istiyorum.' } as L,
  email: { ar: 'أو راسلني بالبريد', en: 'or email me', tr: 'ya da e-posta gönderin' } as L,
  about: { ar: 'من أنا؟', en: 'About me', tr: 'Ben kimim?' } as L,
}
