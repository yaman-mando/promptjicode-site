<script setup lang="ts">
import type { Locale } from '~/data/channel'
import { PERSON } from '~/data/portfolio'
import { SV_CARE, SV_CUR, SV_DEMO, SV_END, SV_EXTRA, SV_EXTRA_H, SV_FAQ, SV_FAQ_H, SV_HERO, SV_META, SV_NAV, SV_PACKAGES, SV_PKG_H, SV_STEPS, SV_STEPS_H, SV_WHY, SV_WORK, SV_WORK_H } from '~/data/services'

const { locale } = useI18n()
const localePath = useLocalePath()
const loc = computed(() => locale.value as Locale)

const wa = computed(() => `${PERSON.whatsapp}?text=${encodeURIComponent(SV_END.wa[loc.value])}`)
const mailto = computed(() => `mailto:${PERSON.email}?subject=${encodeURIComponent(SV_END.title[loc.value])}`)
const open = ref<number | null>(0)
const { currency, set: setCurrency } = useCurrency()
const waFor = (what: string) => `${PERSON.whatsapp}?text=${encodeURIComponent(`${SV_END.wa[loc.value]} (${what})`)}`

useSeoMeta({
  title: () => SV_META.title[loc.value],
  description: () => SV_META.desc[loc.value],
  ogTitle: () => SV_META.title[loc.value],
  ogDescription: () => SV_META.desc[loc.value],
  ogImage: () => `https://promptjicode.com${SV_WORK[2]!.image[loc.value]}`,
  themeColor: '#ffffff',
})
useHead({ link: [{ rel: 'icon', type: 'image/svg+xml', href: '/img/promptjiweb-mark.svg' }] })
</script>

<template>
  <div class="min-h-dvh bg-paper text-text">
    <!-- Dark top: header + hero, same family as the channel page -->
    <div class="top relative overflow-hidden bg-ink text-cream">
      <header class="relative z-10 border-b border-white/5">
        <div class="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
          <a href="#top" class="flex shrink-0 items-center gap-2" dir="ltr" aria-label="PromptjiWeb">
            <img src="/img/promptjiweb-mark.svg" alt="" width="34" height="34" class="size-8.5">
            <b class="font-latin text-lg font-extrabold">Promptji<span class="text-caramel">Web</span></b>
          </a>
          <nav class="hidden gap-7 text-sm text-sand md:flex">
            <a href="#packages" class="hover:text-cream">{{ SV_NAV.packages[loc] }}</a>
            <a href="#extra" class="hover:text-cream">{{ SV_NAV.extra[loc] }}</a>
            <a href="#work" class="hover:text-cream">{{ SV_NAV.work[loc] }}</a>
            <a href="#faq" class="hover:text-cream">{{ SV_NAV.faq[loc] }}</a>
          </nav>
          <LangSwitch dark />
        </div>
      </header>

      <section id="top" class="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-5 pt-14 pb-20 md:pt-20 lg:grid-cols-[1fr_1.08fr] lg:gap-14 lg:pb-24">
        <div class="flex flex-col items-start gap-6">
          <h1 class="max-w-[16ch] text-4xl leading-[1.12] font-extrabold text-balance sm:text-5xl lg:text-[3.6rem]">{{ SV_HERO.title[loc] }}</h1>
          <p class="max-w-[46ch] text-lg leading-relaxed text-cream/75">{{ SV_HERO.text[loc] }}</p>
          <div class="flex flex-wrap items-center gap-2.5">
            <a :href="wa" target="_blank" rel="noopener" class="btn-wa" data-track="wa-hero">
              <SocialIcon id="whatsapp" />{{ SV_HERO.cta[loc] }}
            </a>
            <a href="#packages" class="btn-ghost">{{ SV_HERO.cta2[loc] }}</a>
          </div>
          <span class="flex items-center gap-2 text-sm text-cream/60"><i class="size-2 rounded-full bg-[#25d366]" />{{ SV_HERO.note[loc] }}</span>
        </div>
        <ServiceLangDemo :caption="SV_DEMO[loc]" :start="loc" />
      </section>
    </div>

    <main class="mx-auto max-w-6xl px-5">
      <!-- Why -->
      <section class="grid gap-x-10 gap-y-8 py-20 md:grid-cols-3">
        <article v-for="(w, i) in SV_WHY" :key="i" class="flex flex-col gap-3">
          <span class="spot-tile"><ServiceSpot :id="w.icon" /></span>
          <h2 class="text-xl font-bold">{{ w.title[loc] }}</h2>
          <p class="leading-relaxed text-[#4a3f36]"><BidiText plain :text="w.text[loc]" /></p>
        </article>
      </section>

      <!-- Packages -->
      <section id="packages" class="border-t border-line pt-20">
        <div class="flex flex-wrap items-end justify-between gap-4">
          <h2 class="h2">{{ SV_PKG_H[loc] }}</h2>
          <div class="mb-10 flex items-center gap-1 rounded-xl border border-line bg-white p-1 text-sm font-bold" role="group" :aria-label="SV_CUR.label[loc]">
            <button v-for="c in (['tl', 'usd'] as const)" :key="c" type="button" class="rounded-lg px-3.5 py-1.5 transition" :class="currency === c ? 'bg-text text-white' : 'text-muted hover:text-text'" :aria-pressed="currency === c" @click="setCurrency(c)">{{ c === 'tl' ? '₺ TL' : '$ USD' }}</button>
          </div>
        </div>
        <div class="grid gap-4 md:grid-cols-3">
          <article
            v-for="p in SV_PACKAGES" :key="p.id"
            class="relative flex flex-col gap-5 rounded-3xl border p-6 md:p-7"
            :class="p.featured ? 'border-ink bg-ink text-cream shadow-[0_34px_70px_-34px_rgba(18,12,9,.75)]' : 'border-line bg-white'"
          >
            <div class="flex items-start justify-between gap-4">
              <div>
                <h3 class="text-xl font-bold">{{ p.name[loc] }}</h3>
                <p class="mt-1.5 text-[15px] leading-relaxed" :class="p.featured ? 'text-cream/70' : 'text-muted'">{{ p.for[loc] }}</p>
              </div>
              <span class="size-16 shrink-0 rounded-2xl p-1.5" :class="p.featured ? 'bg-cream' : 'bg-paper-2'"><ServiceSpot :id="p.id" /></span>
            </div>
            <div>
              <span class="text-sm" :class="p.featured ? 'text-cream/60' : 'text-muted'">{{ p.unit[loc] }}</span>
              <strong class="block text-4xl font-extrabold tabular-nums" :class="[p.featured ? 'text-caramel' : 'text-text', loc === 'ar' && currency === 'tl' ? '' : 'ltr font-latin', loc === 'ar' && currency === 'usd' ? 'text-end' : '']">{{ currency === 'tl' ? p.tl[loc] : p.usd }}</strong>
            </div>
            <ul class="grid gap-2.5 text-[15px]">
              <li v-for="pt in p.points[loc]" :key="pt" class="flex gap-2.5">
                <svg viewBox="0 0 24 24" class="mt-1 size-4 shrink-0" :class="p.featured ? 'text-caramel' : 'text-caramel-dark'" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 4 4 10-10" /></svg>
                <BidiText plain :text="pt" />
              </li>
            </ul>
            <a
              :href="waFor(p.name[loc])" target="_blank" rel="noopener"
              class="mt-auto inline-flex h-11 items-center justify-center rounded-xl text-sm font-bold transition"
              :class="p.featured ? 'bg-caramel text-ink hover:brightness-110' : 'border border-line bg-paper-2 hover:border-[#d8cfc6]'"
              :data-track="`wa-${p.id}`"
            >{{ SV_HERO.cta[loc] }}</a>
          </article>
        </div>

        <div class="mt-4 flex flex-col gap-1 rounded-2xl border border-dashed border-[#d8cfc6] bg-paper-2 p-6">
          <b class="flex flex-wrap items-baseline gap-x-3">{{ SV_CARE.title[loc] }} <span class="font-bold text-caramel-dark" :class="loc === 'ar' ? '' : 'ltr font-latin'">{{ currency === 'tl' ? SV_CARE.tl[loc] : SV_CARE.usd[loc] }}</span></b>
          <p class="text-[15px] leading-relaxed text-[#4a3f36]">{{ SV_CARE.text[loc] }}</p>
        </div>
        <p class="mt-4 text-[15px] text-muted">{{ SV_CARE.custom[loc] }}</p>
      </section>

      <!-- Extra services -->
      <section id="extra" class="pt-24">
        <h2 class="h2 !mb-3">{{ SV_EXTRA_H.title[loc] }}</h2>
        <p class="mb-10 text-[15px] text-muted">{{ SV_EXTRA_H.note[loc] }}</p>
        <div class="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          <a v-for="x in SV_EXTRA" :key="x.id" :href="waFor(x.title[loc])" target="_blank" rel="noopener" class="group flex flex-col gap-3 rounded-2xl outline-offset-4" :data-track="`wa-extra-${x.id}`">
            <span class="spot-tile transition group-hover:-rotate-3"><ServiceSpot :id="x.icon" /></span>
            <h3 class="font-bold leading-snug"><BidiText plain :text="x.title[loc]" /></h3>
            <p class="text-[14.5px] leading-relaxed text-[#4a3f36]"><BidiText plain :text="x.text[loc]" /></p>
            <span class="mt-auto text-sm font-bold text-caramel-dark underline-offset-4 group-hover:underline">{{ SV_EXTRA_H.ask[loc] }}</span>
          </a>
        </div>
      </section>

      <!-- Work -->
      <section id="work" class="pt-24">
        <h2 class="h2">{{ SV_WORK_H.title[loc] }}</h2>
        <div class="grid gap-6 md:grid-cols-3">
          <a v-for="w in SV_WORK" :key="w.id" :href="w.url" target="_blank" rel="noopener" class="group flex flex-col gap-3">
            <div class="overflow-hidden rounded-xl border border-line bg-paper-2 shadow-[0_20px_40px_-24px_rgba(29,22,17,.3)] transition duration-300 group-hover:-translate-y-1">
              <div class="flex h-7 items-center gap-1 border-b border-line bg-white px-2.5" dir="ltr">
                <i class="size-2 rounded-full bg-[#e9e2da]" /><i class="size-2 rounded-full bg-[#e9e2da]" /><i class="size-2 rounded-full bg-[#e9e2da]" />
                <span class="ms-2 truncate font-mono text-[10.5px] text-muted">{{ w.label }}</span>
              </div>
              <img :src="w.image[loc]" :alt="w.name[loc]" width="1440" height="900" loading="lazy" class="block aspect-[16/10] w-full object-cover object-top">
            </div>
            <div>
              <h3 class="font-bold" :dir="w.id === 'interview' ? 'ltr' : undefined" :class="w.id === 'interview' && loc === 'ar' ? 'text-end' : ''">{{ w.name[loc] }}</h3>
              <p class="text-sm text-muted">{{ w.kind[loc] }} <span class="ltr font-semibold text-caramel-dark">({{ w.kpi[loc] }})</span></p>
            </div>
          </a>
        </div>
      </section>

      <!-- Steps -->
      <section class="pt-24">
        <h2 class="h2">{{ SV_STEPS_H.title[loc] }}</h2>
        <ol class="steps grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <li v-for="(s, i) in SV_STEPS" :key="i" class="relative flex flex-col gap-2">
            <span class="grid size-11 place-items-center rounded-full bg-ink font-latin text-lg font-extrabold text-caramel">{{ i + 1 }}</span>
            <h3 class="mt-2 font-bold">{{ s.title[loc] }}</h3>
            <p class="text-[15px] leading-relaxed text-[#4a3f36]">{{ s.text[loc] }}</p>
          </li>
        </ol>
      </section>

      <!-- FAQ -->
      <section id="faq" class="grid gap-6 pt-24 md:grid-cols-[1fr_2fr] md:gap-12">
        <h2 class="h2 !mb-0">{{ SV_FAQ_H.title[loc] }}</h2>
        <div class="flex flex-col">
          <div v-for="(f, i) in SV_FAQ" :key="i" class="border-b border-line">
            <button type="button" class="flex w-full items-center justify-between gap-4 py-4 text-start font-semibold" :aria-expanded="open === i" @click="open = open === i ? null : i">
              {{ f.q[loc] }}
              <span class="text-xl text-caramel-dark transition" :class="open === i ? 'rotate-45' : ''" aria-hidden="true">+</span>
            </button>
            <p v-show="open === i" class="pb-5 leading-relaxed text-[#4a3f36]">{{ f.a[loc] }}</p>
          </div>
        </div>
      </section>

      <!-- End CTA -->
      <section class="mt-24 mb-16 flex flex-col items-start gap-4 rounded-3xl bg-ink p-8 text-cream md:p-12">
        <h2 class="text-3xl font-bold">{{ SV_END.title[loc] }}</h2>
        <p class="max-w-[52ch] text-[17px] text-cream/80">{{ SV_END.text[loc] }}</p>
        <div class="mt-2 flex flex-wrap items-center gap-3">
          <a :href="wa" target="_blank" rel="noopener" class="btn-wa" data-track="wa-end"><SocialIcon id="whatsapp" />{{ SV_HERO.cta[loc] }}</a>
          <a :href="mailto" class="text-sm font-semibold text-sand underline-offset-4 hover:text-cream hover:underline">{{ SV_END.email[loc] }}</a>
        </div>
      </section>
    </main>

    <footer class="border-t border-line py-7">
      <div class="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 px-5 text-[13px] text-muted">
        <span><span dir="ltr">© 2026 PromptjiWeb</span> · {{ SV_END.by[loc] }}: <NuxtLink :to="localePath('/yaman')" class="font-semibold text-text hover:underline">{{ PERSON.name[loc] }}</NuxtLink></span>
        <NuxtLink :to="localePath('/')" class="hover:text-text" dir="ltr">promptjicode.com</NuxtLink>
      </div>
    </footer>

    <!-- Floating WhatsApp on phones -->
    <a :href="wa" target="_blank" rel="noopener" class="fixed end-4 bottom-4 z-30 grid size-14 place-items-center rounded-full bg-[#25d366] text-white shadow-lg md:hidden" :aria-label="SV_HERO.cta[loc]" data-track="wa-float">
      <SocialIcon id="whatsapp" />
    </a>
  </div>
</template>

<style scoped>
@reference "~/assets/css/main.css";
.btn-wa { @apply inline-flex h-12 items-center gap-2 rounded-xl bg-[#25d366] px-5 text-[15px] font-bold text-white shadow-[0_10px_24px_-10px_rgba(37,211,102,.7)] transition hover:brightness-105; }
.btn-ghost { @apply inline-flex h-12 items-center gap-2 rounded-xl border border-white/15 px-5 text-[15px] font-semibold text-cream transition hover:border-caramel; }
.btn-wa :deep(svg) { width: 20px; height: 20px; }
.h2 { @apply mb-10 text-3xl font-bold leading-snug tracking-tight text-balance sm:text-4xl; }
.spot-tile { @apply block size-20 rounded-2xl bg-paper-2 p-2.5; }
.top::before { content: ''; position: absolute; inset: 0; background: radial-gradient(700px 420px at 78% 40%, rgba(226, 161, 92, 0.16), transparent 70%), radial-gradient(circle at 1px 1px, rgba(251, 241, 228, 0.06) 1px, transparent 0) 0 0 / 24px 24px; pointer-events: none; }
@media (min-width: 768px) {
  .steps li:not(:last-child)::after { content: ''; position: absolute; top: 22px; inset-inline-start: 56px; inset-inline-end: -20px; border-top: 2px dashed #e0d3c3; }
}
a:focus-visible, button:focus-visible { outline: 2px solid #e2a15c; outline-offset: 3px; }
</style>
