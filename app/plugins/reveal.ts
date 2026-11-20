/**
 * v-reveal: fades a block in when it scrolls into view.
 * Blocks already on screen at load are left alone, so nothing flashes, and nothing hides without JavaScript.
 */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    getSSRProps: () => ({}),
    mounted(el: HTMLElement, binding) {
      if (typeof IntersectionObserver === 'undefined') return
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      if (el.getBoundingClientRect().top < window.innerHeight) return
      el.classList.add('reveal')
      if (binding.value) el.style.transitionDelay = `${binding.value}ms`
      const io = new IntersectionObserver((entries) => {
        if (entries.some(e => e.isIntersecting)) {
          el.classList.add('reveal-in')
          io.disconnect()
        }
      }, { rootMargin: '0px 0px -8% 0px' })
      io.observe(el)
    },
  })
})
