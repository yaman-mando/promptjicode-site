<script setup lang="ts">
/**
 * Hero demo for the services page: a sample bakery site that cycles TR → EN → AR.
 * When it reaches Arabic the whole layout flips right-to-left — the one motion on the page.
 * Auto-play pauses on hover/focus and is off for reduced motion; the chips switch it by hand.
 */
type Lang = 'tr' | 'en' | 'ar'
const props = defineProps<{ caption: string, start: Lang }>()

const COPY: Record<Lang, { name: string, links: string[], h: string, p: string, btn: string, items: [string, string][] }> = {
  tr: { name: 'Lavanta Fırını', links: ['Ürünler', 'Hakkımızda', 'İletişim'], h: 'Her sabah taze ekmek', p: 'Mersin’in kalbinde, 1998’den beri.', btn: 'Sipariş ver', items: [['Simit', '15 TL'], ['Ekşi mayalı', '60 TL'], ['Poğaça', '20 TL']] },
  en: { name: 'Lavanta Bakery', links: ['Products', 'About', 'Contact'], h: 'Fresh bread every morning', p: 'In the heart of Mersin since 1998.', btn: 'Order now', items: [['Simit', '15 TL'], ['Sourdough', '60 TL'], ['Pastry', '20 TL']] },
  ar: { name: 'مخبز لافانتا', links: ['منتجاتنا', 'من نحن', 'تواصل'], h: 'خبز طازج كل صباح', p: 'في قلب مرسين منذ 1998.', btn: 'اطلب الآن', items: [['سميت', '15 TL'], ['خبز بالخميرة', '60 TL'], ['معجنات', '20 TL']] },
}
const ORDER: Lang[] = ['tr', 'en', 'ar']
const LABEL: Record<Lang, string> = { tr: 'TR', en: 'EN', ar: 'عربي' }

const lang = ref<Lang>(props.start)
const c = computed(() => COPY[lang.value])
const dir = computed(() => (lang.value === 'ar' ? 'rtl' : 'ltr'))
const paused = ref(false)
let timer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  timer = setInterval(() => {
    if (paused.value || document.hidden) return
    lang.value = ORDER[(ORDER.indexOf(lang.value) + 1) % ORDER.length]!
  }, 3200)
})
onBeforeUnmount(() => clearInterval(timer))
</script>

<template>
  <figure class="demo" @mouseenter="paused = true" @mouseleave="paused = false" @focusin="paused = true" @focusout="paused = false">
    <div class="stage" aria-hidden="true">
      <!-- Desktop window -->
      <div class="browser">
        <div class="bar"><i /><i /><i /><span>lavanta.com.tr</span></div>
        <Transition name="swap" mode="out-in">
          <div :key="lang" class="site" :dir="dir" :lang="lang">
            <div class="nav">
              <b class="logo"><span class="dot" />{{ c.name }}</b>
              <span v-for="l in c.links" :key="l">{{ l }}</span>
            </div>
            <div class="hero">
              <div class="copy">
                <strong>{{ c.h }}</strong>
                <p>{{ c.p }}</p>
                <span class="btn"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>{{ c.btn }}</span>
              </div>
              <svg class="bread" viewBox="0 0 120 90">
                <ellipse cx="60" cy="74" rx="52" ry="9" fill="#efe2d1" />
                <path d="M14 58c0-22 20-36 46-36s46 14 46 36c0 8-6 12-14 12H28c-8 0-14-4-14-12Z" fill="#e2a15c" stroke="#1d1611" stroke-width="3" />
                <path d="M38 40c4 6 4 14 0 20M58 34c4 8 4 18 0 26M78 40c4 6 4 14 0 20" stroke="#1d1611" stroke-width="3" stroke-linecap="round" fill="none" />
              </svg>
            </div>
            <div class="items">
              <div v-for="[n, pr] in c.items" :key="n"><i /><b>{{ n }}</b><span dir="ltr">{{ pr }}</span></div>
            </div>
          </div>
        </Transition>
      </div>

      <!-- Phone -->
      <div class="phone" :class="dir === 'rtl' ? 'left' : 'right'">
        <Transition name="swap" mode="out-in">
          <div :key="lang" class="psite" :dir="dir" :lang="lang">
            <b class="logo"><span class="dot" />{{ c.name }}</b>
            <svg class="pbread" viewBox="0 0 120 90"><path d="M14 58c0-22 20-36 46-36s46 14 46 36c0 8-6 12-14 12H28c-8 0-14-4-14-12Z" fill="#e2a15c" stroke="#1d1611" stroke-width="4" /></svg>
            <strong>{{ c.h }}</strong>
            <span class="btn">{{ c.btn }}</span>
            <div v-for="[n, pr] in c.items.slice(0, 2)" :key="n" class="prow"><b>{{ n }}</b><span dir="ltr">{{ pr }}</span></div>
          </div>
        </Transition>
      </div>
    </div>

    <figcaption class="cap">
      <span>{{ caption }}</span>
      <span class="chips">
        <button v-for="l in ORDER" :key="l" type="button" :lang="l" :aria-pressed="lang === l" :class="{ on: lang === l }" @click="lang = l">{{ LABEL[l] }}</button>
      </span>
    </figcaption>
  </figure>
</template>

<style scoped>
.demo { position: relative; margin: 0; }
.stage { position: relative; padding: 0 0 38px 0; }
.browser { border-radius: 16px; background: #fff; overflow: hidden; box-shadow: 0 40px 80px -30px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(251, 241, 228, 0.12); }
.bar { height: 30px; display: flex; align-items: center; gap: 6px; padding: 0 12px; background: #f1ebe3; direction: ltr; }
.bar i { width: 9px; height: 9px; border-radius: 50%; background: #d9cfc3; }
.bar span { margin-inline-start: 10px; font: 500 11px/1 ui-monospace, monospace; color: #8a7d70; }
.site { padding: 18px 22px 22px; color: #1d1611; font-family: var(--font-sans); min-height: 290px; }
.nav { display: flex; align-items: center; gap: 16px; font-size: 12px; color: #6b5d50; }
.logo { display: inline-flex; align-items: center; gap: 7px; color: #1d1611; font-size: 14px; margin-inline-end: auto; }
.dot { width: 14px; height: 14px; border-radius: 50%; background: #e2a15c; border: 2px solid #1d1611; }
.hero { display: grid; grid-template-columns: 1.15fr 1fr; align-items: center; gap: 12px; margin-top: 18px; }
.copy strong { display: block; font-size: 26px; line-height: 1.15; font-weight: 800; }
.copy p { margin-top: 8px; font-size: 13px; color: #6b5d50; }
.btn { margin-top: 14px; display: inline-flex; align-items: center; gap: 6px; background: #25d366; color: #fff; font-weight: 700; font-size: 12.5px; border-radius: 9px; padding: 8px 13px; }
.btn svg { width: 10px; height: 10px; fill: #fff; opacity: 0.8; }
.bread { width: 100%; max-width: 190px; justify-self: center; }
.items { margin-top: 16px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
.items div { display: grid; grid-template-columns: auto 1fr; grid-template-rows: auto auto; column-gap: 8px; align-items: center; background: #f8f3ec; border-radius: 10px; padding: 9px 10px; font-size: 11.5px; }
.items i { grid-row: span 2; width: 22px; height: 22px; border-radius: 7px; background: #efe2d1; border: 1.5px solid #d8c4ab; }
.items b { font-weight: 700; }
.items span { color: #8a5a26; font-weight: 700; font-size: 11px; justify-self: start; }

.phone { position: absolute; bottom: 0; width: 132px; height: 250px; border-radius: 24px; background: #0b0807; padding: 7px; box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(251, 241, 228, 0.14); }
.phone.right { right: -18px; }
.phone.left { left: -18px; }
.psite { height: 100%; border-radius: 18px; background: #fff; padding: 14px 11px; color: #1d1611; font-family: var(--font-sans); display: flex; flex-direction: column; gap: 7px; overflow: hidden; }
.psite .logo { font-size: 10.5px; gap: 5px; margin: 0; }
.psite .dot { width: 10px; height: 10px; border-width: 1.5px; }
.pbread { width: 70%; align-self: center; margin-top: 4px; }
.psite strong { font-size: 13px; line-height: 1.2; font-weight: 800; }
.psite .btn { margin-top: 0; font-size: 10px; padding: 6px 9px; align-self: flex-start; }
.prow { display: flex; justify-content: space-between; gap: 4px; white-space: nowrap; font-size: 9.5px; background: #f8f3ec; border-radius: 7px; padding: 5px 7px; }
.prow span { color: #8a5a26; font-weight: 700; }

.cap { margin-top: 18px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 10px; color: rgba(251, 241, 228, 0.72); font-size: 14px; }
.chips { display: inline-flex; gap: 4px; padding: 4px; border-radius: 12px; background: rgba(251, 241, 228, 0.08); }
.chips button { border-radius: 9px; padding: 5px 12px; font-size: 13px; font-weight: 700; color: rgba(251, 241, 228, 0.7); font-family: var(--font-sans); }
.chips button.on { background: #e2a15c; color: #120c09; }
.chips button:focus-visible { outline: 2px solid #e2a15c; outline-offset: 2px; }

.swap-enter-active, .swap-leave-active { transition: opacity 0.28s ease, transform 0.28s ease; }
.swap-enter-from { opacity: 0; transform: translateY(6px); }
.swap-leave-to { opacity: 0; }

@media (max-width: 640px) {
  .site { padding: 14px 14px 16px; min-height: 0; }
  .nav span { display: none; }
  .copy strong { font-size: 19px; }
  .items { display: none; }
  .phone { width: 104px; height: 200px; border-radius: 20px; }
  .phone.right { right: -6px; }
  .phone.left { left: -6px; }
  .prow { font-size: 8.5px; }
  .psite { padding: 10px 8px; gap: 5px; }
}
@media (prefers-reduced-motion: reduce) {
  .swap-enter-active, .swap-leave-active { transition: none; }
}
</style>
