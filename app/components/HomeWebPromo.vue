<script setup lang="ts">
import type { Locale } from '~/data/channel'
import { SV_HOME, SV_PACKAGES } from '~/data/services'

const { locale } = useI18n()
const localePath = useLocalePath()
const loc = computed(() => locale.value as Locale)
const { currency } = useCurrency()
</script>

<template>
  <section id="web" class="py-12">
    <div class="grid gap-8 overflow-hidden rounded-3xl bg-cream p-7 text-ink md:p-10 lg:grid-cols-[1fr_1.15fr] lg:items-center">
      <div class="flex flex-col items-start gap-4">
        <span class="flex items-center gap-2" dir="ltr">
          <img src="/img/promptjiweb-mark.svg" alt="" width="34" height="34" class="size-8.5">
          <b class="font-latin text-lg font-extrabold">Promptji<span class="text-caramel-dark">Web</span></b>
        </span>
        <h2 class="text-3xl font-extrabold text-balance">{{ SV_HOME.title[loc] }}</h2>
        <p class="max-w-[46ch] text-[17px] leading-relaxed text-[#4a3f36]">{{ SV_HOME.text[loc] }}</p>
        <NuxtLink :to="localePath('/services')" class="mt-1 rounded-xl bg-ink px-6 py-3 font-bold text-cream transition hover:bg-[#2a1d15]">{{ SV_HOME.cta[loc] }}</NuxtLink>
      </div>
      <NuxtLink :to="localePath('/services')" class="grid gap-3 sm:grid-cols-3" :aria-label="SV_HOME.cta[loc]">
        <div v-for="p in SV_PACKAGES" :key="p.id" class="flex flex-col gap-3 rounded-2xl p-4 transition hover:-translate-y-0.5" :class="p.featured ? 'bg-ink text-cream' : 'bg-white'">
          <span class="size-14 rounded-xl p-1" :class="p.featured ? 'bg-cream' : 'bg-[#f6efe6]'"><ServiceSpot :id="p.id" /></span>
          <b class="leading-snug">{{ p.name[loc] }}</b>
          <span class="mt-auto">
            <small class="block text-xs" :class="p.featured ? 'text-cream/60' : 'text-[#7a6a5c]'">{{ p.unit[loc] }}</small>
            <strong class="block text-xl font-extrabold tabular-nums" :class="[p.featured ? 'text-caramel' : '', loc === 'ar' && currency === 'tl' ? '' : 'ltr font-latin', loc === 'ar' && currency === 'usd' ? 'text-end' : '']">{{ currency === 'tl' ? p.tl[loc] : p.usd }}</strong>
          </span>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>
