/**
 * Prices in TL for visitors in Türkiye, USD everywhere else.
 * The country comes from Cloudflare's /cdn-cgi/trace (works on any proxied hostname, no server code).
 * Until it answers (or if it fails, e.g. locally), Turkish pages assume TL and the others USD.
 * The visitor can also switch manually; the choice is kept for the session.
 */
export type Currency = 'tl' | 'usd'
const KEY = 'pc_currency'

export function useCurrency() {
  const { locale } = useI18n()
  const currency = useState<Currency>('currency', () => (locale.value === 'tr' ? 'tl' : 'usd'))
  const manual = useState('currency-manual', () => false)

  const set = (c: Currency) => {
    currency.value = c
    manual.value = true
    try { sessionStorage.setItem(KEY, c) } catch {}
  }

  onMounted(async () => {
    try {
      const saved = sessionStorage.getItem(KEY) as Currency | null
      if (saved === 'tl' || saved === 'usd') { currency.value = saved; manual.value = true; return }
    } catch {}
    try {
      const txt = await $fetch<string>('/cdn-cgi/trace', { responseType: 'text', timeout: 3000 })
      const loc = /^loc=([A-Z]{2})$/m.exec(txt)?.[1]
      if (loc && !manual.value) currency.value = loc === 'TR' ? 'tl' : 'usd'
    } catch {}
  })

  return { currency, set }
}
