<script setup lang="ts">
import type { Locale } from '~/data/channel'
import { HERO, INTERVIEW_EPISODES, INTERVIEW_SITE, REELS, REPO, SERIES, SOCIALS } from '~/data/channel'

const { t, locale } = useI18n()
const localePath = useLocalePath()
const loc = computed(() => locale.value as Locale)

const tab = ref<'reels' | 'interview'>('reels')
const episodes = computed(() => (tab.value === 'reels' ? REELS : INTERVIEW_EPISODES))
const levelClass: Record<string, string> = {
  Junior: 'bg-emerald-400/15 text-emerald-300',
  Mid: 'bg-caramel/15 text-caramel',
  Senior: 'bg-rose-400/15 text-rose-300',
}

const interviewUrl = computed(() => (loc.value === 'ar' ? INTERVIEW_SITE : `${INTERVIEW_SITE}/${loc.value}`))

useSeoMeta({
  title: () => t('channel.title'),
  description: () => t('channel.metaDesc'),
  ogTitle: () => t('channel.title'),
  ogDescription: () => t('channel.metaDesc'),
  ogImage: 'https://promptjicode.com/avatar.webp',
  themeColor: '#120c09',
})
</script>

<template>
  <div class="min-h-dvh bg-ink text-cream" style="background-image: radial-gradient(ellipse 1000px 650px at 50% -5%, rgba(226,161,92,.16), transparent 70%)">
    <!-- Header -->
    <header class="sticky top-0 z-20 border-b border-white/5 bg-ink/80 backdrop-blur">
      <div class="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-5">
        <NuxtLink :to="localePath('/')" class="flex items-center gap-2.5" dir="ltr">
          <img src="/logo.png" alt="" width="34" height="34" class="size-8.5 rounded-full">
          <span class="text-lg font-extrabold">Promptji<span class="text-caramel">Code</span></span>
        </NuxtLink>
        <nav class="hidden gap-6 text-sm text-sand md:flex">
          <a href="#series" class="hover:text-cream">{{ t('channel.nav.series') }}</a>
          <a href="#episodes" class="hover:text-cream">{{ t('channel.nav.episodes') }}</a>
          <a href="#tools" class="hover:text-cream">{{ t('channel.nav.tools') }}</a>
          <a href="#about" class="hover:text-cream">{{ t('channel.nav.about') }}</a>
        </nav>
        <LangSwitch dark />
      </div>
    </header>

    <main class="mx-auto max-w-5xl px-5">
      <!-- Hero -->
      <section class="grid items-center gap-10 py-14 md:grid-cols-[1fr_auto] md:py-20">
        <div>
          <p class="mb-4 font-mono text-sm text-sand/70" dir="ltr">// weak prompt vs careful prompt</p>
          <h1 class="text-4xl leading-tight font-extrabold sm:text-6xl" dir="ltr">Promptji<span class="text-caramel">Code</span></h1>
          <p class="mt-4 text-2xl font-extrabold text-caramel sm:text-3xl">{{ HERO.slogan[loc] }}</p>
          <p class="mt-5 max-w-xl text-lg leading-relaxed text-cream/85"><BidiText :text="HERO.desc[loc]" /></p>

          <p class="mt-8 mb-3 text-sm font-semibold text-sand">{{ t('channel.follow') }}</p>
          <div class="flex flex-wrap gap-2">
            <a
              v-for="s in SOCIALS"
              :key="s.id"
              :href="s.url"
              target="_blank"
              rel="noopener"
              class="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm font-semibold transition hover:border-caramel/60 hover:bg-white/[0.07]"
              :aria-label="`${s.label} ${s.handle}`"
            >
              <SocialIcon :id="s.id" />
              <span dir="ltr">{{ s.label }}</span>
            </a>
          </div>
        </div>
        <img src="/avatar.webp" alt="PromptjiCode" width="320" height="320" class="mx-auto w-64 rounded-full shadow-[0_0_80px_-10px_rgba(226,161,92,.45)] sm:w-80">
      </section>

      <!-- Series -->
      <section id="series" class="py-12">
        <p class="text-sm font-semibold text-caramel">{{ t('channel.seriesKicker') }}</p>
        <h2 class="mt-1 mb-8 text-3xl font-extrabold">{{ t('channel.seriesTitle') }}</h2>
        <div class="grid gap-4 sm:grid-cols-2">
          <a
            v-for="s in SERIES"
            :key="s.id"
            :href="s.url"
            target="_blank"
            rel="noopener"
            class="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-0.5 hover:border-caramel/50"
          >
            <div class="mb-3 flex items-center justify-between gap-3">
              <span class="text-3xl" aria-hidden="true">{{ s.emoji }}</span>
              <span class="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-sand">{{ s.format[loc] }}</span>
            </div>
            <h3 class="text-xl font-bold">{{ s.title[loc] }}</h3>
            <p class="mt-2 flex-1 leading-relaxed text-cream/80"><BidiText :text="s.desc[loc]" /></p>
          </a>
        </div>
      </section>

      <!-- Episodes -->
      <section id="episodes" class="py-12">
        <p class="text-sm font-semibold text-caramel">{{ t('channel.episodesKicker') }}</p>
        <h2 class="mt-1 mb-6 text-3xl font-extrabold">{{ t('channel.episodesTitle') }}</h2>

        <div class="mb-5 flex w-fit gap-1 rounded-xl bg-white/5 p-1" role="tablist">
          <button
            v-for="k in (['reels', 'interview'] as const)"
            :key="k"
            type="button"
            role="tab"
            :aria-selected="tab === k"
            class="rounded-lg px-4 py-2 text-sm font-semibold transition"
            :class="tab === k ? 'bg-caramel text-ink' : 'text-sand hover:text-cream'"
            @click="tab = k"
          >{{ k === 'reels' ? t('channel.reelsTab') : t('channel.interviewTab') }}</button>
        </div>

        <ol class="grid gap-2">
          <li v-for="e in episodes" :key="tab + e.n">
            <a :href="e.url" target="_blank" rel="noopener" class="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 transition hover:border-caramel/50">
              <span class="font-mono text-sm text-sand">{{ e.n }}</span>
              <span class="min-w-0 flex-1 font-semibold"><BidiText :text="e.title[loc]" /></span>
              <span v-if="e.level" class="hidden shrink-0 rounded-full px-2.5 py-0.5 font-mono text-xs sm:inline" :class="levelClass[e.level]">{{ e.level }} · {{ e.topic }}</span>
              <span class="shrink-0 rounded-lg bg-caramel/15 px-3 py-1 text-sm font-bold text-caramel group-hover:bg-caramel group-hover:text-ink">▶ {{ t('channel.try') }}</span>
            </a>
          </li>
        </ol>
        <a :href="REPO" target="_blank" rel="noopener" class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sand hover:text-cream">
          <SocialIcon id="github" /> {{ t('channel.allOnGithub') }}
        </a>
      </section>

      <!-- Tools -->
      <section id="tools" class="py-12">
        <p class="text-sm font-semibold text-caramel">{{ t('channel.toolsKicker') }}</p>
        <div class="mt-3 grid gap-8 rounded-3xl border border-caramel/30 bg-gradient-to-br from-caramel/[0.12] to-transparent p-7 md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <div>
            <h2 class="text-3xl font-extrabold" dir="ltr" :class="loc === 'ar' ? 'text-end' : ''">{{ t('channel.toolsTitle') }}</h2>
            <p class="mt-3 max-w-xl text-lg leading-relaxed text-cream/85">{{ t('channel.toolsDesc') }}</p>
            <a :href="interviewUrl" target="_blank" rel="noopener" class="mt-6 inline-block rounded-xl bg-caramel px-6 py-3 font-bold text-ink transition hover:brightness-110">
              {{ t('channel.toolsCta') }} {{ loc === 'ar' ? '←' : '→' }}
            </a>
          </div>
          <dl class="grid grid-cols-3 gap-3 text-center md:grid-cols-1">
            <div v-for="st in [{ v: '3', l: t('channel.toolsStatTracks') }, { v: '19', l: t('channel.toolsStat1') }, { v: '3', l: t('channel.toolsStat3') }]" :key="st.l" class="rounded-2xl bg-ink/60 px-5 py-3">
              <dt class="sr-only">{{ st.l }}</dt>
              <dd><span class="block font-mono text-3xl font-bold text-caramel">{{ st.v }}</span><span class="text-sm text-sand">{{ st.l }}</span></dd>
            </div>
          </dl>
        </div>
      </section>

      <!-- About -->
      <section id="about" class="py-12">
        <div class="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:flex-row sm:items-center md:p-10">
          <img src="/avatar.webp" alt="" width="96" height="96" class="size-24 shrink-0 rounded-full">
          <div class="flex-1">
            <p class="text-sm font-semibold text-caramel">{{ t('channel.aboutKicker') }}</p>
            <h2 class="mt-1 text-2xl font-extrabold">{{ t('channel.aboutTitle') }}</h2>
            <p class="mt-2 max-w-2xl leading-relaxed text-cream/85"><BidiText :text="t('channel.aboutText')" /></p>
          </div>
          <div class="flex shrink-0 flex-wrap gap-2">
            <NuxtLink :to="localePath('/yaman')" class="rounded-xl bg-cream px-5 py-2.5 font-bold text-ink hover:bg-white">{{ t('channel.aboutCta') }}</NuxtLink>
            <a href="https://www.linkedin.com/in/yaman-mando" target="_blank" rel="noopener" class="flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2.5 font-semibold hover:border-caramel" aria-label="LinkedIn"><SocialIcon id="linkedin" /><span dir="ltr">LinkedIn</span></a>
          </div>
        </div>
      </section>
    </main>

    <footer class="border-t border-white/5 py-8">
      <div class="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-5 text-sm text-sand">
        <span class="font-bold text-caramel">{{ t('channel.footer') }}</span>
        <div class="flex gap-3">
          <a v-for="s in SOCIALS" :key="s.id" :href="s.url" target="_blank" rel="noopener" class="hover:text-cream" :aria-label="s.label"><SocialIcon :id="s.id" /></a>
        </div>
        <span dir="ltr">© 2026 PromptjiCode</span>
      </div>
    </footer>
  </div>
</template>
