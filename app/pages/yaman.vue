<script setup lang="ts">
import type { Locale } from '~/data/channel'
import { ABOUT, EDUCATION, JOBS, LANGUAGES, PERSON, PROJECTS, SKILLS, STATS } from '~/data/portfolio'

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
    <header class="sticky top-0 z-20 border-b border-line bg-white/90 backdrop-blur">
      <div class="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-5">
        <a href="#top" class="flex items-center gap-2.5">
          <span class="grid size-8 place-items-center rounded-lg bg-text font-latin text-xs font-bold text-white" dir="ltr">YM</span>
          <b class="font-bold">{{ PERSON.name[loc] }}</b>
        </a>
        <nav class="hidden gap-7 text-sm text-muted md:flex">
          <a href="#work" class="hover:text-text">{{ t('portfolio.nav.work') }}</a>
          <a href="#skills" class="hover:text-text">{{ t('portfolio.nav.skills') }}</a>
          <a href="#experience" class="hover:text-text">{{ t('portfolio.nav.exp') }}</a>
          <a href="#contact" class="hover:text-text">{{ t('portfolio.nav.contact') }}</a>
        </nav>
        <LangSwitch />
      </div>
    </header>

    <main id="top" class="mx-auto max-w-5xl px-5">
      <!-- Hero -->
      <section class="flex max-w-3xl flex-col gap-6 pt-20 pb-14 md:pt-24">
        <span class="inline-flex w-fit items-center gap-2 text-sm text-muted">
          <span class="size-2 rounded-full bg-caramel shadow-[0_0_0_4px_rgba(226,161,92,.2)]" />
          {{ PERSON.status[loc] }}
        </span>
        <h1 class="text-5xl font-extrabold tracking-tight sm:text-6xl">{{ PERSON.name[loc] }}</h1>
        <p class="max-w-[40ch] text-xl leading-relaxed text-muted sm:text-[22px]">
          <b class="font-semibold text-text">{{ PERSON.roleStrong[loc] }}</b>
          {{ ' ' }}<BidiText plain :text="PERSON.role[loc]" />
        </p>
        <div class="flex flex-wrap gap-2.5">
          <a href="#contact" class="btn-dark">{{ t('portfolio.cta.contact') }}</a>
          <a href="#work" class="btn-light">{{ t('portfolio.cta.work') }}</a>
          <a :href="PERSON.linkedin" target="_blank" rel="noopener" class="btn-light"><SocialIcon id="linkedin" /><span dir="ltr">LinkedIn</span></a>
          <a :href="PERSON.github" target="_blank" rel="noopener" class="btn-light"><SocialIcon id="github" /><span dir="ltr">GitHub</span></a>
        </div>
      </section>

      <!-- Stats -->
      <div class="grid grid-cols-2 border-y border-line md:grid-cols-4">
        <div v-for="(s, i) in STATS" :key="s.value" class="flex flex-col gap-1 px-4 py-6 md:px-6" :class="[i % 2 ? 'border-s border-line' : '', i >= 2 ? 'border-t border-line md:border-t-0' : '', i === 2 ? 'md:border-s' : '']">
          <strong class="ltr font-latin text-3xl font-bold tracking-tight tabular-nums md:text-4xl" :class="loc === 'ar' ? 'text-end' : ''">{{ s.value }}</strong>
          <span class="text-sm text-muted">{{ s.label[loc] }}</span>
        </div>
      </div>

      <!-- About -->
      <section id="about" class="pt-20">
        <span class="kicker">{{ t('portfolio.aboutK') }}</span>
        <h2 class="h2">{{ ABOUT.heading[loc] }}</h2>
        <p class="max-w-[68ch] text-[17px] leading-relaxed text-[#4a3f36]"><BidiText plain :text="ABOUT.text[loc]" /></p>
      </section>

      <!-- Work -->
      <section id="work" class="pt-20">
        <span class="kicker">{{ t('portfolio.workK') }}</span>
        <h2 class="h2">{{ t('portfolio.workH') }}</h2>

        <article v-for="(p, i) in PROJECTS" :key="p.id" class="flex flex-col gap-7" :class="i ? 'mt-16 border-t border-line pt-16' : ''">
          <button type="button" class="block cursor-zoom-in overflow-hidden rounded-2xl border border-line bg-paper-2 text-start shadow-[0_12px_32px_-12px_rgba(29,22,17,.15)]" :aria-label="`${t('portfolio.zoom')}: ${p.imageAlt}`" @click="zoomed = p.image">
            <div class="flex h-9 items-center gap-1.5 border-b border-line bg-white px-3.5" dir="ltr">
              <i class="size-2.5 rounded-full bg-[#e9e2da]" /><i class="size-2.5 rounded-full bg-[#e9e2da]" /><i class="size-2.5 rounded-full bg-[#e9e2da]" />
              <span class="ms-3 font-mono text-xs text-muted">{{ p.urlLabel }}</span>
            </div>
            <img :src="p.image" :alt="p.imageAlt" width="1440" height="900" loading="lazy" class="block h-auto w-full">
          </button>

          <div class="grid gap-10 md:grid-cols-[5fr_7fr]">
            <div class="flex min-w-0 flex-col gap-3.5">
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
            <ul class="flex min-w-0 flex-col gap-3.5">
              <li v-for="(pt, j) in p.points[loc]" :key="j" class="relative ps-5 leading-relaxed text-[#4a3f36] before:absolute before:start-0.5 before:top-[.72em] before:size-1.5 before:rounded-full before:bg-caramel">
                <BidiText plain :text="pt" />
              </li>
            </ul>
          </div>
        </article>
      </section>

      <!-- Skills -->
      <section id="skills" class="pt-20">
        <span class="kicker">{{ t('portfolio.skillsK') }}</span>
        <h2 class="h2">{{ t('portfolio.skillsH') }}</h2>
        <div class="grid border-t border-line md:grid-cols-2">
          <div v-for="(s, i) in SKILLS" :key="i" class="grid gap-1.5 border-b border-line py-5 md:grid-cols-[170px_1fr] md:gap-5" :class="i % 2 ? 'md:border-s md:ps-8' : 'md:pe-8'">
            <h3 class="text-sm font-semibold">{{ s.title[loc] }}</h3>
            <p class="text-[14.5px] text-[#4a3f36]"><BidiText plain :text="s.text[loc]" /></p>
          </div>
        </div>
      </section>

      <!-- Experience -->
      <section id="experience" class="pt-20">
        <span class="kicker">{{ t('portfolio.expK') }}</span>
        <h2 class="h2">{{ t('portfolio.expH') }}</h2>
        <div class="flex flex-col">
          <div v-for="(j, i) in JOBS" :key="i" class="grid gap-1.5 border-t border-line py-7 last:border-b md:grid-cols-[180px_1fr] md:gap-6">
            <span class="ltr w-fit text-sm text-muted tabular-nums">{{ j.when[loc] }}</span>
            <div>
              <h3 class="mb-1.5 text-lg font-bold">{{ j.title[loc] }} <small v-if="j.org" class="font-medium text-muted">· <span dir="ltr">{{ j.org }}</span></small></h3>
              <p class="max-w-[68ch] text-[#4a3f36]"><BidiText plain :text="j.text[loc]" /></p>
            </div>
          </div>
        </div>
      </section>

      <!-- Education + languages -->
      <section class="grid gap-12 pt-16 md:grid-cols-2">
        <div>
          <h3 class="mb-2 text-sm font-semibold text-caramel-dark">{{ t('portfolio.eduK') }}</h3>
          <div v-for="e in EDUCATION" :key="e.year" class="flex justify-between gap-4 border-b border-line py-3.5">
            <span>{{ e.title[loc] }}<small class="block text-[13.5px] text-muted">{{ e.school[loc] }}</small></span>
            <span class="text-sm text-muted">{{ e.year }}</span>
          </div>
        </div>
        <div>
          <h3 class="mb-2 text-sm font-semibold text-caramel-dark">{{ t('portfolio.langK') }}</h3>
          <div v-for="l in LANGUAGES" :key="l.name.en" class="flex justify-between gap-4 border-b border-line py-3.5">
            <span>{{ l.name[loc] }}</span><span class="text-sm text-muted">{{ l.level[loc] }}</span>
          </div>
        </div>
      </section>

      <!-- Channel -->
      <section class="mt-16 flex flex-col items-start gap-4 rounded-2xl bg-ink p-7 text-cream sm:flex-row sm:items-center md:p-9">
        <img src="/avatar.webp" alt="" width="64" height="64" class="size-16 rounded-full">
        <div class="flex-1">
          <p class="font-bold text-caramel">{{ t('portfolio.channel') }}</p>
          <p class="text-cream/85">{{ t('portfolio.channelText') }}</p>
        </div>
        <NuxtLink :to="localePath('/')" class="rounded-xl bg-caramel px-5 py-2.5 font-bold text-ink hover:brightness-110" dir="ltr">promptjicode.com</NuxtLink>
      </section>

      <!-- Contact -->
      <section id="contact" class="mt-16 mb-16 flex flex-col gap-4 rounded-3xl border border-line bg-paper-2 p-7 md:p-12">
        <span class="kicker">{{ t('portfolio.cK') }}</span>
        <h2 class="text-3xl font-bold tracking-tight">{{ t('portfolio.cH') }}</h2>
        <p class="text-[17px] text-[#4a3f36]">{{ t('portfolio.cP') }}</p>
        <div class="mt-2 flex flex-wrap gap-2.5" dir="ltr" :class="loc === 'ar' ? 'justify-end' : ''">
          <button type="button" class="btn-dark" @click="copy(PERSON.email)">{{ PERSON.email }}</button>
          <button type="button" class="btn-light" @click="copy(PERSON.phone)">{{ PERSON.phone }}</button>
          <a :href="PERSON.whatsapp" target="_blank" rel="noopener" class="btn-light">WhatsApp</a>
        </div>
        <span class="min-h-5 text-sm text-caramel-dark" aria-live="polite">{{ toast || t('portfolio.tapToCopy') }}</span>
      </section>
    </main>

    <footer class="border-t border-line py-7">
      <div class="mx-auto flex max-w-5xl flex-wrap justify-between gap-4 px-5 text-[13px] text-muted">
        <span>© 2026 {{ PERSON.name[loc] }}</span>
        <span dir="ltr">Vue.js · Nuxt.js · TypeScript</span>
      </div>
    </footer>

    <!-- Lightbox -->
    <div v-if="zoomed" class="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-[#1d1611]/85 p-6" role="dialog" aria-modal="true" @click="zoomed = null">
      <img :src="zoomed" alt="" class="max-h-[92vh] max-w-full rounded-xl bg-white">
    </div>
  </div>
</template>

<style scoped>
@reference "~/assets/css/main.css";
.btn-dark { @apply inline-flex h-11 items-center gap-2 rounded-xl border border-text bg-text px-[18px] text-sm font-semibold text-white transition hover:bg-[#3a2e25]; }
.btn-light { @apply inline-flex h-11 items-center gap-2 rounded-xl border border-line bg-white px-[18px] text-sm font-semibold text-text transition hover:border-[#d8cfc6] hover:bg-paper-2; }
.btn-dark :deep(svg), .btn-light :deep(svg) { width: 16px; height: 16px; }
.kicker { @apply text-[13px] font-semibold text-caramel-dark; }
.h2 { @apply mt-2 mb-10 text-3xl font-bold tracking-tight sm:text-4xl; }
</style>
