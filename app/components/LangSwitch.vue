<script setup lang="ts">
defineProps<{ dark?: boolean }>()
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <nav class="flex overflow-hidden rounded-lg border text-xs font-semibold" :class="dark ? 'border-white/15' : 'border-line'" aria-label="Language">
    <NuxtLink
      v-for="l in locales"
      :key="l.code"
      :to="switchLocalePath(l.code)"
      :lang="l.code"
      :aria-current="l.code === locale ? 'true' : undefined"
      class="px-3 py-1.5 transition"
      :class="l.code === locale
        ? (dark ? 'bg-caramel text-ink' : 'bg-text text-white')
        : (dark ? 'text-sand hover:text-cream' : 'text-muted hover:text-text')"
    >{{ l.name }}</NuxtLink>
  </nav>
</template>
