<script setup lang="ts">
import type { Locale } from '~/data/channel'
import { ABOUT, EDUCATION, JOBS, LANGUAGES, PERSON, PROJECTS, SERVICES, SKILLS, STATS } from '~/data/portfolio'

const { t, locale } = useI18n()
const localePath = useLocalePath()
const loc = computed(() => locale.value as Locale)

const toast = ref('')
async function copy(value: string) {
  try {
    await navigator.clipboard.writeText(value)
    toast.value = `${t('portfolio.copied')}: ${value}`
  }
  catch {
    toast.value = value
  }
  setTimeout(() => (toast.value = ''), 2200)
}

const zoomed = ref<string | null>(null)
function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') zoomed.value = null
}
onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))

const mailto = (subject: string) => `mailto:${PERSON.email}?subject=${encodeURIComponent(subject)}`

// Skills as chips: the text is a comma list (Arabic or Latin commas)
const chips = (text: string) => text.split(/\s*[,،]\s*/).filter(Boolean)

// Stats count up the first time they are seen
const statsEl = ref<HTMLElement | null>(null)
const shown = ref(STATS.map(s => s.value))
onMounted(() => {
  if (!statsEl.value || typeof IntersectionObserver === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const parts = STATS.map(s => s.value.match(/^(\D*)([\d,]+)(.*)$/))
  const io = new IntersectionObserver((entries) => {
    if (!entries.some(e => e.isIntersecting)) return
    io.disconnect()
    const t0 = performance.now()
    const tick = (now: number) => {
      const k = Math.min(1, (now - t0) / 1200)
      const ease = 1 - (1 - k) ** 3
      shown.value = STATS.map((s, i) => {
        const m = parts[i]
        if (!m) return s.value
        const target = Number(m[2]!.replace(/,/g, ''))
        return `${m[1]}${Math.round(target * ease).toLocaleString('en-US')}${m[3]}`
      })
      if (k < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, { threshold: 0.4 })
  io.observe(statsEl.value)
})

const SERVICE_ICONS: Record<string, string> = {
  build: 'M4 5h16v11H4zM8 20h8M12 16v4M8 9l-2 2 2 2m8-4 2 2-2 2m-5 1 2-6',
  rescue: 'M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6l-8-3Zm-3 9 2 2 4-4',
  speed: 'M12 14l4-4M4.9 19a9 9 0 1 1 14.2 0M12 5v2M5 12H3m18 0h-2M6.3 6.3l1.4 1.4',
}

useSeoMeta({
  title: () => t('portfolio.title'),
  description: () => t('portfolio.metaDesc'),
  ogTitle: () => t('portfolio.title'),
  ogDescription: () => t('portfolio.metaDesc'),
  ogImage: 'https://promptjicode.com/img/interview-desktop.webp',
  themeColor: '#ffffff',
})
</script>

<template>
  <div class="min-h-dvh bg-paper text-text">
    <!-- Nav -->
    <header class="sticky top-0 z-20 border-b border-line/80 bg-white/85 backdrop-blur-md">
      <div class="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-5">
        <a href="#top" class="flex items-center gap-2.5">
          <span class="grid size-8 place-items-center rounded-lg bg-text font-latin text-xs font-bold text-white" dir="ltr">YM</span>
          <b class="font-bold">{{ PERSON.name[loc] }}</b>
        </a>
        <nav class="hidden gap-7 text-sm text-muted md:flex">
          <a href="#expertise" class="hover:text-text">{{ t('portfolio.nav.services') }}</a>
          <a href="#work" class="hover:text-text">{{ t('portfolio.nav.work') }}</a>
          <a href="#skills" class="hover:text-text">{{ t('portfolio.nav.skills') }}</a>
          <a href="#experience" class="hover:text-text">{{ t('portfolio.nav.exp') }}</a>
          <a href="#contact" class="hover:text-text">{{ t('portfolio.nav.contact') }}</a>
        </nav>
        <LangSwitch />
      </div>
    </header>

    <!-- Hero -->
    <div class="hero-bg relative overflow-hidden">
      <section id="top" class="mx-auto grid max-w-5xl items-center gap-12 px-5 pt-16 pb-16 md:grid-cols-[1.25fr_1fr] md:pt-24 md:pb-20">
        <div class="hero-in flex flex-col gap-6">
          <div class="flex items-center gap-5">
            <img src="/img/yaman.webp" :alt="PERSON.name[loc]" width="256" height="256" class="size-20 shrink-0 rounded-full object-cover shadow-[0_10px_30px_-10px_rgba(29,22,17,.45)] ring-4 ring-white sm:size-24">
            <h1 class="text-5xl font-extrabold tracking-tight sm:text-6xl">{{ PERSON.name[loc] }}</h1>
          </div>
          <p class="max-w-[40ch] text-xl leading-relaxed text-muted sm:text-[22px]">
            <b class="font-semibold text-text">{{ PERSON.roleStrong[loc] }}.</b>
            {{ ' ' }}<BidiText plain :text="PERSON.role[loc]" />
          </p>
          <div class="flex flex-wrap gap-2.5">
            <a href="#work" class="btn-dark">{{ t('portfolio.cta.work') }}</a>
            <a href="#contact" class="btn-light">{{ t('portfolio.nav.contact') }}</a>
            <a :href="PERSON.linkedin" target="_blank" rel="noopener" class="btn-light" aria-label="LinkedIn"><SocialIcon id="linkedin" /><span dir="ltr" class="hidden sm:inline">LinkedIn</span></a>
            <a :href="PERSON.github" target="_blank" rel="noopener" class="btn-light" aria-label="GitHub"><SocialIcon id="github" /><span dir="ltr" class="hidden sm:inline">GitHub</span></a>
          </div>
        </div>

        <!-- Code card -->
        <div class="hero-in-late relative hidden md:block" dir="ltr" aria-hidden="true">
          <div class="absolute -inset-4 -z-10 rounded-[2rem] bg-caramel/20 blur-2xl" />
          <div class="rotate-[1.5deg] overflow-hidden rounded-2xl bg-ink font-mono text-[13px] leading-relaxed text-cream shadow-[0_30px_60px_-20px_rgba(29,22,17,.45)] transition duration-500 hover:rotate-0">
            <div class="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
              <i class="size-2.5 rounded-full bg-[#ff5f57]" /><i class="size-2.5 rounded-full bg-[#febc2e]" /><i class="size-2.5 rounded-full bg-[#28c840]" />
              <span class="ms-3 text-xs text-sand">yaman.ts</span>
            </div>
            <pre class="px-5 py-4 whitespace-pre"><span class="text-[#c792ea]">const</span> yaman = {
  role: <span class="text-caramel">'Senior Frontend'</span>,
  years: <span class="text-[#f78c6c]">8</span>,
  shipped: [
    <span class="text-caramel">'Ekhtibarat'</span>,
    <span class="text-caramel">'Muktamel'</span>,
  ],
  speaks: [<span class="text-caramel">'ar'</span>, <span class="text-caramel">'en'</span>, <span class="text-caramel">'tr'</span>],
  cares: <span class="text-caramel">'speed &amp; details'</span>,
}<span class="caret">▍</span></pre>
          </div>
        </div>
      </section>
    </div>

    <main class="mx-auto max-w-5xl px-5">
      <!-- Stats -->
      <div ref="statsEl" class="-mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
        <div v-for="(s, i) in STATS" :key="s.value" v-reveal="i * 70" class="card flex flex-col gap-1 px-5 py-5">
          <strong class="ltr font-latin text-3xl font-bold tracking-tight tabular-nums md:text-4xl" :class="loc === 'ar' ? 'text-end' : ''">{{ shown[i] }}</strong>
          <span class="text-sm text-muted">{{ s.label[loc] }}</span>
        </div>
      </div>

      <!-- Services -->
      <section id="expertise" class="pt-24">
        <div v-reveal class="max-w-2xl">
          <span class="kicker">{{ t('portfolio.servicesK') }}</span>
          <h2 class="h2 !mb-3">{{ t('portfolio.servicesH') }}</h2>
          <p class="mb-10 text-[17px] leading-relaxed text-[#4a3f36]">{{ t('portfolio.servicesP') }}</p>
        </div>
        <div class="grid gap-4 md:grid-cols-3">
          <article
            v-for="(sv, i) in SERVICES" :key="sv.id" v-reveal="i * 80"
            class="card group flex flex-col gap-4 p-6 transition hover:-translate-y-1 hover:border-caramel/50 hover:shadow-[0_20px_40px_-20px_rgba(184,118,47,.35)] md:p-7"
          >
            <span class="grid size-12 place-items-center rounded-xl bg-caramel/15 text-caramel-dark transition group-hover:bg-caramel group-hover:text-white">
              <svg viewBox="0 0 24 24" class="size-6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path :d="SERVICE_ICONS[sv.id]" /></svg>
            </span>
            <h3 class="text-xl leading-snug font-bold">{{ sv.title[loc] }}</h3>
            <p class="leading-relaxed text-[#4a3f36]">{{ sv.text[loc] }}</p>
            <ul class="grid gap-2 text-[15px]">
              <li v-for="pt in sv.points[loc]" :key="pt" class="flex gap-2.5">
                <svg viewBox="0 0 24 24" class="mt-1 size-4 shrink-0 text-caramel-dark" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 4 4 10-10" /></svg>
                <BidiText plain :text="pt" />
              </li>
            </ul>
          </article>
        </div>

      </section>

      <!-- About -->
      <section id="about" class="grid gap-6 pt-24 md:grid-cols-[1fr_2fr] md:gap-12">
        <div v-reveal>
          <span class="kicker">{{ t('portfolio.aboutK') }}</span>
          <h2 class="h2 !mb-0">{{ ABOUT.heading[loc] }}</h2>
        </div>
        <p v-reveal="80" class="self-end text-[17px] leading-loose text-[#4a3f36]"><BidiText plain :text="ABOUT.text[loc]" /></p>
      </section>

      <!-- Work -->
      <section id="work" class="pt-24">
        <div v-reveal>
          <span class="kicker">{{ t('portfolio.workK') }}</span>
          <h2 class="h2">{{ t('portfolio.workH') }}</h2>
        </div>

        <article v-for="(p, i) in PROJECTS" :key="p.id" class="flex flex-col gap-8" :class="i ? 'mt-20' : ''">
          <button
            v-reveal type="button"
            class="group block cursor-zoom-in overflow-hidden rounded-2xl border border-line bg-paper-2 text-start shadow-[0_24px_50px_-24px_rgba(29,22,17,.3)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_32px_60px_-24px_rgba(29,22,17,.38)]"
            :aria-label="`${t('portfolio.zoom')}: ${p.imageAlt}`" @click="zoomed = p.image"
          >
            <div class="flex h-9 items-center gap-1.5 border-b border-line bg-white px-3.5" dir="ltr">
              <i class="size-2.5 rounded-full bg-[#e9e2da]" /><i class="size-2.5 rounded-full bg-[#e9e2da]" /><i class="size-2.5 rounded-full bg-[#e9e2da]" />
              <span class="ms-3 rounded-md bg-paper-2 px-2.5 py-0.5 font-mono text-xs text-muted">{{ p.urlLabel }}</span>
            </div>
            <img :src="p.image" :alt="p.imageAlt" width="1440" height="900" loading="lazy" class="block h-auto w-full transition duration-500 group-hover:scale-[1.015]">
          </button>

          <div class="grid gap-10 md:grid-cols-[5fr_7fr]">
            <div v-reveal class="flex min-w-0 flex-col gap-3.5">
              <span class="font-mono text-sm text-caramel-dark" dir="ltr" :class="loc === 'ar' ? 'text-end' : ''">0{{ i + 1 }}</span>
              <h3 class="text-3xl font-bold" :dir="p.id === 'promptjicode' ? 'ltr' : undefined" :class="p.id === 'promptjicode' && loc === 'ar' ? 'text-end' : ''">{{ p.name[loc] }}</h3>
              <p class="text-muted">{{ p.kind[loc] }}</p>
              <div class="flex items-baseline gap-2">
                <strong class="ltr font-latin text-3xl font-bold text-caramel-dark tabular-nums">{{ p.kpiValue }}</strong>
                <span class="text-sm text-muted">{{ p.kpiLabel[loc] }}</span>
              </div>
              <div class="flex flex-wrap gap-1.5" dir="ltr" :class="loc === 'ar' ? 'justify-end' : ''">
                <span v-for="tag in p.tags" :key="tag" class="rounded-md border border-line bg-paper-2 px-2.5 py-1 font-latin text-xs font-medium text-[#4a3f36]">{{ tag }}</span>
              </div>
              <div class="flex flex-wrap gap-4">
                <a :href="p.url" target="_blank" rel="noopener" class="w-fit text-sm font-semibold text-caramel-dark hover:underline">{{ t('portfolio.visit') }} ↗</a>
                <a v-if="p.extraLink" :href="p.extraLink.url" target="_blank" rel="noopener" class="w-fit text-sm font-semibold text-caramel-dark hover:underline">{{ p.extraLink.label[loc] }} ↗</a>
              </div>
            </div>
            <ul v-reveal="80" class="flex min-w-0 flex-col gap-3.5">
              <li v-for="(pt, j) in p.points[loc]" :key="j" class="relative ps-5 leading-relaxed text-[#4a3f36] before:absolute before:start-0.5 before:top-[.72em] before:size-1.5 before:rounded-full before:bg-caramel">
                <BidiText plain :text="pt" />
              </li>
            </ul>
          </div>
        </article>
      </section>

      <!-- Skills -->
      <section id="skills" class="pt-24">
        <div v-reveal>
          <span class="kicker">{{ t('portfolio.skillsK') }}</span>
          <h2 class="h2">{{ t('portfolio.skillsH') }}</h2>
        </div>
        <div class="grid gap-4 sm:grid-cols-2">
          <div v-for="(s, i) in SKILLS" :key="i" v-reveal="(i % 2) * 70" class="card p-5">
            <h3 class="mb-3 text-sm font-bold">{{ s.title[loc] }}</h3>
            <div v-if="chips(s.text[loc]).length > 2" class="flex flex-wrap gap-1.5">
              <span v-for="c in chips(s.text[loc])" :key="c" class="rounded-lg bg-paper-2 px-2.5 py-1 text-[13.5px] text-[#4a3f36] ring-1 ring-line"><BidiText plain :text="c" /></span>
            </div>
            <p v-else class="text-[14.5px] leading-relaxed text-[#4a3f36]"><BidiText plain :text="s.text[loc]" /></p>
          </div>
        </div>
      </section>

      <!-- Experience: timeline -->
      <section id="experience" class="pt-24">
        <div v-reveal>
          <span class="kicker">{{ t('portfolio.expK') }}</span>
          <h2 class="h2">{{ t('portfolio.expH') }}</h2>
        </div>
        <ol class="relative ms-2 border-s-2 border-line">
          <li v-for="(j, i) in JOBS" :key="i" v-reveal="i * 60" class="relative ps-8 pb-10 last:pb-0">
            <span class="absolute -start-[9px] top-1.5 size-4 rounded-full border-4 border-white ring-2" :class="i === 0 ? 'bg-caramel ring-caramel' : 'bg-line ring-line'" />
            <span class="ltr inline-block rounded-full bg-paper-2 px-3 py-0.5 text-sm text-muted tabular-nums ring-1 ring-line">{{ j.when[loc] }}</span>
            <h3 class="mt-2.5 mb-1.5 text-lg font-bold">{{ j.title[loc] }} <small v-if="j.org" class="font-medium text-muted">· <span dir="ltr">{{ j.org }}</span></small></h3>
            <p class="max-w-[68ch] leading-relaxed text-[#4a3f36]"><BidiText plain :text="j.text[loc]" /></p>
          </li>
        </ol>
      </section>

      <!-- Education + languages -->
      <section class="grid gap-4 pt-20 md:grid-cols-2">
        <div v-reveal class="card p-6">
          <h3 class="mb-3 flex items-center gap-2 text-sm font-bold text-caramel-dark">
            <svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8l9-4 9 4-9 4-9-4Zm4 2v5c0 1.7 2.2 3 5 3s5-1.3 5-3v-5" /></svg>
            {{ t('portfolio.eduK') }}
          </h3>
          <div v-for="e in EDUCATION" :key="e.year" class="flex justify-between gap-4 border-b border-line py-3.5 last:border-0">
            <span class="font-semibold"><BidiText plain :text="e.title[loc]" /><small class="block text-[13.5px] font-normal text-muted">{{ e.school[loc] }}</small></span>
            <span class="text-sm text-muted tabular-nums">{{ e.year }}</span>
          </div>
        </div>
        <div v-reveal="80" class="card p-6">
          <h3 class="mb-3 flex items-center gap-2 text-sm font-bold text-caramel-dark">
            <svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9S14.5 18.5 12 21c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3Z" /></svg>
            {{ t('portfolio.langK') }}
          </h3>
          <div v-for="l in LANGUAGES" :key="l.name.en" class="flex items-center justify-between gap-4 border-b border-line py-3.5 last:border-0">
            <span class="font-semibold">{{ l.name[loc] }}</span>
            <span class="rounded-full bg-paper-2 px-3 py-0.5 text-sm text-muted ring-1 ring-line">{{ l.level[loc] }}</span>
          </div>
        </div>
      </section>

      <!-- Channel -->
      <section v-reveal class="mt-16 flex flex-col items-start gap-4 rounded-2xl bg-ink p-7 text-cream sm:flex-row sm:items-center md:p-9">
        <img src="/avatar.webp" alt="" width="64" height="64" class="size-16 rounded-full">
        <div class="flex-1">
          <p class="font-bold text-caramel">{{ t('portfolio.channel') }}</p>
          <p class="text-cream/85">{{ t('portfolio.channelText') }}</p>
        </div>
        <NuxtLink :to="localePath('/')" class="rounded-xl bg-caramel px-5 py-2.5 font-bold text-ink hover:brightness-110" dir="ltr">promptjicode.com</NuxtLink>
      </section>

      <!-- Contact -->
      <section id="contact" v-reveal class="mt-16 mb-16 flex flex-col gap-4 rounded-3xl border border-line bg-paper-2 p-7 md:p-12">
        <span class="kicker">{{ t('portfolio.cK') }}</span>
        <h2 class="text-3xl font-bold tracking-tight">{{ t('portfolio.cH') }}</h2>
        <p class="text-[17px] text-[#4a3f36]">{{ t('portfolio.cP') }}</p>
        <div class="mt-2 flex flex-wrap gap-2.5" dir="ltr" :class="loc === 'ar' ? 'justify-end' : ''">
          <a :href="mailto(t('portfolio.cH'))" class="btn-dark">
            <svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
            {{ PERSON.email }}
          </a>
          <button type="button" class="btn-light" data-track="copyEmail" @click="copy(PERSON.email)">{{ t('portfolio.copyEmail') }}</button>
          <button type="button" class="btn-light" data-track="phone" @click="copy(PERSON.phone)">{{ PERSON.phone }}</button>
          <a :href="PERSON.whatsapp" target="_blank" rel="noopener" class="btn-light">WhatsApp</a>
        </div>
        <span class="min-h-5 text-sm text-caramel-dark" aria-live="polite">{{ toast }}</span>
      </section>
    </main>

    <footer class="border-t border-line py-7">
      <div class="mx-auto flex max-w-5xl flex-wrap justify-between gap-4 px-5 text-[13px] text-muted">
        <span>© 2026 {{ PERSON.name[loc] }}</span>
        <NuxtLink :to="localePath('/')" class="hover:text-text" dir="ltr">promptjicode.com</NuxtLink>
      </div>
    </footer>

    <!-- Lightbox -->
    <Transition name="fade">
      <div v-if="zoomed" class="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-[#1d1611]/85 p-6 backdrop-blur-sm" role="dialog" aria-modal="true" @click="zoomed = null">
        <img :src="zoomed" alt="" class="max-h-[92vh] max-w-full rounded-xl bg-white shadow-2xl">
      </div>
    </Transition>
  </div>
</template>

<style scoped>
@reference "~/assets/css/main.css";
.btn-dark { @apply inline-flex h-11 items-center gap-2 rounded-xl border border-text bg-text px-[18px] text-sm font-semibold text-white transition hover:bg-[#3a2e25]; }
.btn-light { @apply inline-flex h-11 items-center gap-2 rounded-xl border border-line bg-white px-[18px] text-sm font-semibold text-text transition hover:border-[#d8cfc6] hover:bg-paper-2; }
.btn-dark :deep(svg), .btn-light :deep(svg) { width: 16px; height: 16px; }
.kicker { @apply inline-flex items-center gap-2 text-[13px] font-bold tracking-wide text-caramel-dark before:h-px before:w-6 before:bg-caramel; }
.h2 { @apply mt-2 mb-10 text-3xl font-bold leading-snug tracking-tight text-balance sm:text-4xl; }
.card { @apply rounded-2xl border border-line bg-white; }

.hero-bg {
  background:
    radial-gradient(600px 320px at 85% 10%, rgba(226, 161, 92, 0.16), transparent 70%),
    radial-gradient(500px 300px at 0% 100%, rgba(226, 161, 92, 0.08), transparent 70%),
    radial-gradient(circle at 1px 1px, rgba(29, 22, 17, 0.07) 1px, transparent 0) 0 0 / 22px 22px;
}
.hero-bg::after {
  content: '';
  position: absolute;
  inset: auto 0 0 0;
  height: 140px;
  background: linear-gradient(to bottom, transparent, #fff);
  pointer-events: none;
}
.hero-in { animation: rise 0.6s cubic-bezier(0.2, 0.7, 0.2, 1) both; }
.hero-in-late { animation: rise 0.7s 0.15s cubic-bezier(0.2, 0.7, 0.2, 1) both; }
.caret { color: var(--color-caramel); animation: blink 1.1s steps(2) infinite; }
@keyframes rise { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
@keyframes blink { 50% { opacity: 0; } }
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
