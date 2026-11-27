export type Locale = 'ar' | 'en' | 'tr'
type L<T = string> = Record<Locale, T>

export const SOCIALS = [
  { id: 'instagram', label: 'Instagram', handle: '@promptji.code', url: 'https://www.instagram.com/promptji.code' },
  { id: 'tiktok', label: 'TikTok', handle: '@promptjicode', url: 'https://www.tiktok.com/@promptjicode' },
  { id: 'youtube', label: 'YouTube', handle: '@promptjicode', url: 'https://www.youtube.com/@promptjicode' },
  { id: 'facebook', label: 'Facebook', handle: 'PromptjiCode', url: 'https://www.facebook.com/promptjicode' },
  { id: 'github', label: 'GitHub', handle: 'promptjicode', url: 'https://github.com/promptjicode' },
] as const

export const REPO = 'https://github.com/promptjicode/promptjicode'
export const INTERVIEW_SITE = 'https://interview.promptjicode.com'
export const MENU_SITE = 'https://menu.promptjicode.com'

export const HERO = {
  slogan: { ar: 'اكتبها صح… بتطلع صح', en: 'Write it right… get it right', tr: 'Doğru yaz… doğru çıksın' } as L,
  desc: {
    ar: 'قناة عربية تجرّب البرومبتات بعين المبرمج: نفس الطلب مكتوبًا مرتين، برومبت ضعيف وآخر مدروس، ثم نفتح الكود الناتج ونشرح الفرق. نتعلّم معًا.',
    en: 'An Arabic channel that tests AI prompts through a developer’s eyes: the same request written twice, a weak prompt and a careful one, then we open the code it produced and explain the difference. We learn together.',
    tr: 'Yapay zekâ promptlarını bir geliştiricinin gözüyle deneyen Arapça bir kanal: aynı istek iki kez yazılır, zayıf bir prompt ve özenli bir prompt, sonra üretilen kodu açıp farkı açıklarız. Birlikte öğreniyoruz.',
  } as L,
}

export interface Series {
  id: string
  emoji: string
  title: L
  desc: L
  format: L
  url: string
}

export const SERIES: Series[] = [
  {
    id: 'reels',
    emoji: '⚡',
    title: { ar: 'برومبت ضعيف ضد برومبت مدروس', en: 'Weak prompt vs careful prompt', tr: 'Zayıf prompt ve özenli prompt' },
    desc: {
      ar: 'نفس الطلب مرتين، والفرق في التصميم وفي الكود. كل حلقة لها صفحة تجرّبها بنفسك، والبرومبت والكود على GitHub.',
      en: 'The same request twice, and the difference in the design and the code. Every episode has a page you can try yourself, with the prompt and code on GitHub.',
      tr: 'Aynı istek iki kez; fark hem tasarımda hem kodda. Her bölümün kendin deneyebileceğin bir sayfası var, prompt ve kod GitHub’da.',
    },
    format: { ar: 'ريلز', en: 'Reels', tr: 'Reels' },
    url: REPO,
  },
  {
    id: 'interview',
    emoji: '🎯',
    title: { ar: 'سؤال مقابلة', en: 'Interview question', tr: 'Mülakat sorusu' },
    desc: {
      ar: 'كود قصير وسؤال "ماذا يُطبع؟"، أوقف الفيديو وفكّر، ثم الجواب والشرح خطوة بخطوة، ونسخة أصعب في التعليقات.',
      en: 'A short snippet and "what gets logged?". Pause, think, then the answer explained step by step, plus a harder version in the comments.',
      tr: 'Kısa bir kod ve "konsola ne yazılır?". Videoyu durdur, düşün; sonra adım adım açıklamalı cevap ve yorumlarda daha zor bir sürüm.',
    },
    format: { ar: 'ريلز', en: 'Reels', tr: 'Reels' },
    url: `${REPO}/tree/main/interview`,
  },
  {
    id: 'dont-write',
    emoji: '🔖',
    title: { ar: 'لا تكتب هيك ← اكتب هيك', en: 'Don’t write this → write this', tr: 'Böyle yazma → böyle yaz' },
    desc: {
      ar: 'غلطة شائعة يكتبها الذكاء الاصطناعي كثيرًا، والحل، ولماذا، وكيف تطلبها منه صحيحة من أول مرة.',
      en: 'A common mistake AI often writes, the fix, why it matters, and how to ask for it correctly the first time.',
      tr: 'Yapay zekânın sık yazdığı yaygın bir hata, çözümü, nedeni ve ilk seferde doğru istemenin yolu.',
    },
    format: { ar: 'كاروسيل', en: 'Carousel', tr: 'Karusel' },
    url: 'https://www.instagram.com/promptji.code',
  },
  {
    id: 'git',
    emoji: '🛟',
    title: { ar: 'أنقذتك من كارثة', en: 'Saved you from disaster', tr: 'Seni felaketten kurtardım' },
    desc: {
      ar: 'مواقف Git المحرجة: commit على الفرع الخطأ، push بالغلط، ملف محذوف… والأوامر التي تنقذك منها.',
      en: 'Awkward Git moments: a commit on the wrong branch, an accidental push, a deleted file… and the commands that get you out.',
      tr: 'Can sıkıcı Git anları: yanlış dala commit, yanlışlıkla push, silinen dosya… ve seni kurtaran komutlar.',
    },
    format: { ar: 'ريلز', en: 'Reels', tr: 'Reels' },
    url: 'https://www.instagram.com/promptji.code',
  },
]

export interface Episode {
  n: string
  title: L
  url: string
  level?: 'Junior' | 'Mid' | 'Senior'
  topic?: string
}

export const REELS: Episode[] = [
  { n: '01', url: 'https://promptjicode.github.io/promptjicode/01-habba-cafe/', title: { ar: 'نفس الطلب… شوف الفرق (صفحة مقهى)', en: 'Same request… see the difference (café page)', tr: 'Aynı istek… farkı gör (kafe sayfası)' } },
  { n: '02', url: 'https://promptjicode.github.io/promptjicode/02-countdown-timer/', title: { ar: 'هالكود شغّال… بس بيكذب عليك (عداد تنازلي)', en: 'This code works… but it lies to you (countdown)', tr: 'Bu kod çalışıyor… ama sana yalan söylüyor (geri sayım)' } },
  { n: '03', url: 'https://promptjicode.github.io/promptjicode/03-like-button/', title: { ar: 'زر واحد… وفرق كبير بالإحساس (زر لايك)', en: 'One button… a big difference in feel (like button)', tr: 'Tek buton… hissiyatta büyük fark (beğen butonu)' } },
  { n: '04', url: 'https://promptjicode.github.io/promptjicode/04-signup-form/', title: { ar: 'هاد الفورم… بيخسرك نص المسجلين (فورم تسجيل)', en: 'This form… loses you half your sign-ups', tr: 'Bu form… kayıtların yarısını kaybettiriyor' } },
  { n: '05', url: 'https://promptjicode.github.io/promptjicode/05-dark-mode/', title: { ar: 'الوضع الليلي… بسطر واحد؟ (زر Dark mode)', en: 'Dark mode… in one line? (toggle)', tr: 'Karanlık mod… tek satırda mı?' } },
  { n: '06', url: 'https://promptjicode.github.io/promptjicode/06-rtl-store/', title: { ar: 'حطيتلو RTL… ومع ذلك في شي مقلوب', en: 'I added RTL… and something is still flipped', tr: 'RTL ekledim… ama yine de bir şey ters' } },
  { n: '07', url: 'https://promptjicode.github.io/promptjicode/07-image-speed/', title: { ar: 'موقعك حلو… بس بيفتح بـ 8 ثواني (معرض صور)', en: 'Nice site… but it takes 8 seconds (gallery)', tr: 'Güzel site… ama 8 saniyede açılıyor (galeri)' } },
  { n: '08', url: 'https://promptjicode.github.io/promptjicode/08-accessible-modal/', title: { ar: 'هالنافذة… حاول تسكّرها (نافذة اشتراك)', en: 'This popup… try closing it', tr: 'Bu pencere… kapatmayı dene' } },
  { n: '09', url: 'https://promptjicode.github.io/promptjicode/09-search-debounce/', title: { ar: 'مربع بحث… بيبعت 6 طلبات لكلمة وحدة', en: 'A search box… sends 6 requests for one word', tr: 'Bir arama kutusu… tek kelime için 6 istek' } },
  { n: '10', url: 'https://promptjicode.github.io/promptjicode/10-pay-button/', title: { ar: 'زر دفع… ضغطة زيادة، وانسحبت المصاري مرتين', en: 'A pay button… one extra tap, charged twice', tr: 'Ödeme butonu… bir fazla dokunuş, iki kez ödeme' } },
]

export const INTERVIEW_EPISODES: Episode[] = [
  { n: '01', level: 'Mid', topic: 'Event Loop', url: 'https://promptjicode.github.io/promptjicode/interview/01-event-loop/', title: { ar: 'شو بيطبع هالكود؟', en: 'What does this code print?', tr: 'Bu kod ne yazdırır?' } },
  { n: '02', level: 'Senior', topic: 'Stacking Context', url: 'https://promptjicode.github.io/promptjicode/interview/02-stacking-context/', title: { ar: 'z-index: 9999… وطلعت تحت؟', en: 'z-index: 9999… and it’s still below?', tr: 'z-index: 9999… ve hâlâ altta mı?' } },
  { n: '03', level: 'Mid', topic: 'Closure', url: 'https://promptjicode.github.io/promptjicode/interview/03-closure-loop/', title: { ar: 'شو بيطبع هاللوب؟', en: 'What does this loop print?', tr: 'Bu döngü ne yazdırır?' } },
  { n: '04', level: 'Mid', topic: 'fetch', url: 'https://promptjicode.github.io/promptjicode/interview/04-fetch-404/', title: { ar: 'السيرفر رجّع 404… ووين الخطأ؟', en: 'The server returned 404… so where’s the error?', tr: 'Sunucu 404 döndü… hata nerede?' } },
  { n: '05', level: 'Junior', topic: '|| / ??', url: 'https://promptjicode.github.io/promptjicode/interview/05-nullish/', title: { ar: 'سكّر الصوت… ورجع لحاله؟', en: 'Muted the sound… and it came back?', tr: 'Sesi kapattım… kendiliğinden geri mi geldi?' } },
  { n: '06', level: 'Junior', topic: 'Reference', url: 'https://promptjicode.github.io/promptjicode/interview/06-reference/', title: { ar: 'عدّلت b… ليش تغيّر a؟', en: 'I changed b… why did a change?', tr: 'b’yi değiştirdim… a neden değişti?' } },
  { n: '07', level: 'Senior', topic: 'Rendering', url: 'https://promptjicode.github.io/promptjicode/interview/07-transform-vs-left/', title: { ar: 'نفس الحركة… وحدة بتتقطّع ووحدة لأ', en: 'Same animation… one stutters, one doesn’t', tr: 'Aynı animasyon… biri takılıyor, biri değil' } },
  { n: '08', level: 'Mid', topic: 'React key', url: 'https://promptjicode.github.io/promptjicode/interview/08-react-key/', title: { ar: 'حذفت سطر… والـ ✓ انتقل؟', en: 'I deleted a row… and the ✓ moved?', tr: 'Bir satır sildim… ✓ yer mi değiştirdi?' } },
  { n: '09', level: 'Mid', topic: 'React setState', url: 'https://promptjicode.github.io/promptjicode/interview/09-setstate-batching/', title: { ar: '3 مرات +1… والعداد طلع كم؟', en: '+1 three times… so what’s the count?', tr: '3 kez +1… sayaç kaç oldu?' } },
  { n: '10', level: 'Junior', topic: 'CSS specificity', url: 'https://promptjicode.github.io/promptjicode/interview/10-specificity/', title: { ar: 'تلات قواعد… مين بيربح؟', en: 'Three rules… which one wins?', tr: 'Üç kural… hangisi kazanır?' } },
]

export const GIT_EPISODES: Episode[] = [
  { n: '01', topic: 'switch -c · reset --hard', url: 'https://promptjicode.github.io/promptjicode/git/01-wrong-branch/', title: { ar: 'عملت commit على main بالغلط؟', en: 'Committed to main by mistake?', tr: 'Yanlışlıkla main’e mi commit attın?' } },
  { n: '02', topic: 'revert · push', url: 'https://promptjicode.github.io/promptjicode/git/02-revert-after-push/', title: { ar: 'عملت push… وبعدين انتبهت؟', en: 'Pushed… and then noticed?', tr: 'Push ettin… sonra mı fark ettin?' } },
  { n: '03', topic: 'reflog', url: 'https://promptjicode.github.io/promptjicode/git/03-reflog/', title: { ar: 'عملت reset --hard… وراح شغلك؟', en: 'Ran reset --hard… and lost your work?', tr: 'reset --hard yaptın… işin mi gitti?' } },
]
