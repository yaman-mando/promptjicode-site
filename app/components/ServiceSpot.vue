<script setup lang="ts">
/** Small two-tone illustrations for the services page (ink + caramel on a cream tile). */
defineProps<{ id: string }>()
</script>

<template>
  <svg viewBox="0 0 64 64" class="spot" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <!-- Several languages: two speech bubbles, one LTR one RTL -->
    <template v-if="id === 'languages'">
      <rect x="6" y="10" width="34" height="22" rx="6" fill="#fff" stroke="#1d1611" stroke-width="2.5" />
      <path d="M14 32v7l8-7" fill="#fff" stroke="#1d1611" stroke-width="2.5" />
      <path d="M13 19h14m-4-4 4 4-4 4" stroke="#1d1611" stroke-width="2.5" />
      <rect x="24" y="28" width="34" height="22" rx="6" fill="#e2a15c" stroke="#1d1611" stroke-width="2.5" />
      <path d="M50 50v7l-8-7" fill="#e2a15c" stroke="#1d1611" stroke-width="2.5" />
      <path d="M51 39H37m4-4-4 4 4 4" stroke="#1d1611" stroke-width="2.5" />
    </template>

    <!-- Fast: gauge with the needle in the green -->
    <template v-else-if="id === 'speed'">
      <path d="M8 44a24 24 0 0 1 48 0" stroke="#1d1611" stroke-width="2.5" fill="#fff" />
      <path d="M8 44a24 24 0 0 1 7-17" stroke="#e8d9c6" stroke-width="7" />
      <path d="M40 22a24 24 0 0 1 16 22" stroke="#e2a15c" stroke-width="7" />
      <path d="M32 44 47 28" stroke="#1d1611" stroke-width="3" />
      <circle cx="32" cy="44" r="4.5" fill="#1d1611" />
      <path d="M14 52h36" stroke="#1d1611" stroke-width="2.5" />
    </template>

    <!-- Everything is yours: key with a tag -->
    <template v-else-if="id === 'owner'">
      <circle cx="22" cy="26" r="11" fill="#e2a15c" stroke="#1d1611" stroke-width="2.5" />
      <circle cx="22" cy="26" r="4" fill="#fff" stroke="#1d1611" stroke-width="2.5" />
      <path d="M30 33 50 53m-6-6 4-4m-9-1 4-4" stroke="#1d1611" stroke-width="3" />
      <rect x="38" y="8" width="20" height="13" rx="3" fill="#fff" stroke="#1d1611" stroke-width="2.5" />
      <path d="M43 14.5h10" stroke="#e2a15c" stroke-width="2.5" />
    </template>

    <!-- Google Business Profile: map with a pin -->
    <template v-else-if="id === 'google'">
      <path d="M6 18l16-6 20 6 16-6v34l-16 6-20-6-16 6V18Z" fill="#fff" stroke="#1d1611" stroke-width="2.5" />
      <path d="M22 12v34M42 18v34" stroke="#e8d9c6" stroke-width="2.5" />
      <path d="M32 44s-10-8-10-16a10 10 0 1 1 20 0c0 8-10 16-10 16Z" fill="#e2a15c" stroke="#1d1611" stroke-width="2.5" />
      <circle cx="32" cy="28" r="3.5" fill="#fff" stroke="#1d1611" stroke-width="2" />
    </template>

    <!-- Speed up + SEO: magnifier over rising bars -->
    <template v-else-if="id === 'seo'">
      <path d="M10 50V40m10 10V32m10 18V24" stroke="#1d1611" stroke-width="5" />
      <path d="M8 54h28" stroke="#1d1611" stroke-width="2.5" />
      <circle cx="42" cy="24" r="12" fill="#e2a15c" stroke="#1d1611" stroke-width="2.5" />
      <path d="M36 24l4 4 8-8" stroke="#1d1611" stroke-width="2.5" />
      <path d="M50.5 32.5 58 40" stroke="#1d1611" stroke-width="4" />
    </template>

    <!-- PWA: phone with an app icon on the home screen -->
    <template v-else-if="id === 'pwa'">
      <rect x="18" y="5" width="28" height="54" rx="6" fill="#fff" stroke="#1d1611" stroke-width="2.5" />
      <path d="M28 10h8" stroke="#1d1611" stroke-width="2.5" />
      <rect x="23" y="17" width="7" height="7" rx="2" fill="#e8d9c6" />
      <rect x="34" y="17" width="7" height="7" rx="2" fill="#e8d9c6" />
      <rect x="23" y="28" width="7" height="7" rx="2" fill="#e8d9c6" />
      <rect x="32" y="27" width="11" height="11" rx="3" fill="#e2a15c" stroke="#1d1611" stroke-width="2" />
      <path d="M37.5 31v4m-2-2h4" stroke="#1d1611" stroke-width="2" />
      <path d="M28 52h8" stroke="#1d1611" stroke-width="2.5" />
    </template>

    <!-- Admin panel: window with sliders -->
    <template v-else-if="id === 'admin'">
      <rect x="6" y="10" width="52" height="42" rx="6" fill="#fff" stroke="#1d1611" stroke-width="2.5" />
      <path d="M6 20h52" stroke="#1d1611" stroke-width="2.5" />
      <circle cx="12" cy="15" r="1.6" fill="#1d1611" /><circle cx="17" cy="15" r="1.6" fill="#1d1611" />
      <path d="M14 30h36M14 38h36M14 46h36" stroke="#e8d9c6" stroke-width="3" />
      <circle cx="38" cy="30" r="3.5" fill="#e2a15c" stroke="#1d1611" stroke-width="2" />
      <circle cx="22" cy="38" r="3.5" fill="#e2a15c" stroke="#1d1611" stroke-width="2" />
      <circle cx="44" cy="46" r="3.5" fill="#e2a15c" stroke="#1d1611" stroke-width="2" />
    </template>

    <!-- QR menu: QR code with a fork -->
    <template v-else-if="id === 'menu'">
      <rect x="6" y="6" width="38" height="38" rx="5" fill="#fff" stroke="#1d1611" stroke-width="2.5" />
      <rect x="11" y="11" width="10" height="10" rx="1.5" fill="#1d1611" />
      <rect x="29" y="11" width="10" height="10" rx="1.5" fill="#1d1611" />
      <rect x="11" y="29" width="10" height="10" rx="1.5" fill="#1d1611" />
      <path d="M29 29h4v4h-4zM35 35h4v4h-4zM29 37h2" fill="#e2a15c" stroke="#1d1611" stroke-width="1.5" />
      <path d="M50 22v36M45 22v8a5 5 0 0 0 10 0v-8" stroke="#1d1611" stroke-width="2.5" />
      <path d="M45 22v8a5 5 0 0 0 10 0v-8" fill="#e2a15c" />
    </template>

    <!-- Business email: envelope with @ -->
    <template v-else-if="id === 'email'">
      <rect x="6" y="14" width="52" height="36" rx="5" fill="#fff" stroke="#1d1611" stroke-width="2.5" />
      <path d="m8 17 24 18 24-18" stroke="#1d1611" stroke-width="2.5" />
      <circle cx="48" cy="44" r="11" fill="#e2a15c" stroke="#1d1611" stroke-width="2.5" />
      <circle cx="48" cy="44" r="3.5" stroke="#1d1611" stroke-width="2" />
      <path d="M51.5 44v1.5a2.5 2.5 0 0 0 5 0V44a8.5 8.5 0 1 0-3.5 6.9" stroke="#1d1611" stroke-width="2" />
    </template>

    <!-- Online shop: bag with a price tag -->
    <template v-else-if="id === 'shop'">
      <path d="M12 20h40l-3 36H15l-3-36Z" fill="#e2a15c" stroke="#1d1611" stroke-width="2.5" />
      <path d="M23 26v-8a9 9 0 0 1 18 0v8" stroke="#1d1611" stroke-width="2.5" />
      <path d="M36 36h14l4 4-4 4H36z" fill="#fff" stroke="#1d1611" stroke-width="2.5" />
      <circle cx="40" cy="40" r="1.4" fill="#1d1611" />
    </template>

    <!-- Packages -->
    <template v-else-if="id === 'one'">
      <rect x="16" y="6" width="32" height="52" rx="5" fill="#fff" stroke="#1d1611" stroke-width="2.5" />
      <rect x="21" y="12" width="22" height="14" rx="2.5" fill="#e2a15c" />
      <path d="M21 32h22M21 38h16" stroke="#e8d9c6" stroke-width="3" />
      <rect x="21" y="45" width="14" height="6" rx="3" fill="#1d1611" />
    </template>
    <template v-else-if="id === 'site'">
      <rect x="22" y="4" width="32" height="44" rx="5" fill="#e8d9c6" stroke="#1d1611" stroke-width="2" />
      <rect x="16" y="10" width="32" height="44" rx="5" fill="#f6efe6" stroke="#1d1611" stroke-width="2" />
      <rect x="10" y="16" width="32" height="44" rx="5" fill="#fff" stroke="#1d1611" stroke-width="2.5" />
      <rect x="15" y="22" width="22" height="12" rx="2.5" fill="#e2a15c" />
      <path d="M15 40h22M15 46h14M15 52h18" stroke="#e8d9c6" stroke-width="3" />
    </template>
    <template v-else-if="id === 'multi'">
      <rect x="8" y="8" width="48" height="40" rx="6" fill="#fff" stroke="#1d1611" stroke-width="2.5" />
      <path d="M8 18h48" stroke="#1d1611" stroke-width="2.5" />
      <rect x="13" y="24" width="18" height="10" rx="2.5" fill="#e2a15c" />
      <path d="M36 26h14M36 32h10" stroke="#e8d9c6" stroke-width="3" />
      <rect x="6" y="44" width="15" height="12" rx="4" fill="#1d1611" /><text x="13.5" y="53" text-anchor="middle" font-size="7.5" font-weight="800" fill="#fff" font-family="sans-serif">TR</text>
      <rect x="24.5" y="44" width="15" height="12" rx="4" fill="#e2a15c" stroke="#1d1611" stroke-width="1.5" /><text x="32" y="53" text-anchor="middle" font-size="7.5" font-weight="800" fill="#1d1611" font-family="sans-serif">EN</text>
      <rect x="43" y="44" width="15" height="12" rx="4" fill="#fff" stroke="#1d1611" stroke-width="1.5" /><text x="50.5" y="53.5" text-anchor="middle" font-size="9" font-weight="800" fill="#1d1611" font-family="sans-serif">ع</text>
    </template>
  </svg>
</template>

<style scoped>
.spot { width: 100%; height: 100%; display: block; }
</style>
