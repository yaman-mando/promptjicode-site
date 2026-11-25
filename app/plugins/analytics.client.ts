/**
 * Visit tracking for promptjicode.com (channel page and /yaman).
 * Events go to the interview site's collector, tagged site: 'main', and show up in its admin
 * dashboard (Visitors → Main site / My page). No IPs or personal data are stored.
 * Off in local development.
 */
const ENDPOINT = 'https://interview.promptjicode.com/api/track'

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.dev) return { provide: { track: () => {} } }

  const IDLE = 30 * 60_000
  const id = () => (crypto.randomUUID?.() ?? `${Date.now()}-${Math.random()}`).replace(/[^\w-]/g, '')
  const get = (s: Storage, k: string) => { try { return s.getItem(k) } catch { return null } }
  const set = (s: Storage, k: string, v: string) => { try { s.setItem(k, v) } catch { /* private mode */ } }

  let isNew = false
  let vid = get(localStorage, 'pc_vid')
  if (!vid) { vid = id(); isNew = true; set(localStorage, 'pc_vid', vid) }
  let sid = get(sessionStorage, 'pc_sid')
  if (!sid || Date.now() - Number(get(sessionStorage, 'pc_last') ?? 0) > IDLE) { sid = id(); set(sessionStorage, 'pc_sid', sid) }

  const utm = new URLSearchParams(location.search).get('utm_source')
  const ref = document.referrer || null

  function track(type: string, data: Record<string, unknown> = {}) {
    set(sessionStorage, 'pc_last', String(Date.now()))
    const body = JSON.stringify({
      site: 'main', type, sid, vid, isNew, ref, utm,
      path: location.pathname,
      locale: (nuxtApp.$i18n as { locale: { value: string } }).locale.value,
      ...data,
    })
    // sendBeacon survives page unloads (e.g. a click that opens the mail app)
    if (navigator.sendBeacon?.(ENDPOINT, body)) return
    fetch(ENDPOINT, { method: 'POST', body, keepalive: true, mode: 'no-cors', credentials: 'include' }).catch(() => {})
  }

  nuxtApp.hook('page:finish', () => track('pageview'))
  setInterval(() => { if (document.visibilityState === 'visible') track('heartbeat') }, 30_000)

  // Clicks worth knowing about: contact, services, profiles, projects
  document.addEventListener('click', (e) => {
    const el = (e.target as HTMLElement | null)?.closest<HTMLElement>('[data-track], a[href]')
    if (!el) return
    let label = el.dataset.track ?? ''
    if (!label && el instanceof HTMLAnchorElement) {
      const href = el.href
      if (href.startsWith('mailto:')) label = 'email'
      else if (/wa\.me|whatsapp/.test(href)) label = 'whatsapp'
      else if (/linkedin\.com/.test(href)) label = 'linkedin'
      else if (/github\.com/.test(href)) label = 'github'
      else if (/interview\.promptjicode\.com/.test(href)) label = 'interview'
      else if (/menu\.promptjicode\.com/.test(href)) label = 'menu'
      else if (/instagram|tiktok|youtube|facebook/.test(href)) label = `social:${new URL(href).hostname.replace(/^www\./, '').split('.')[0]}`
      else if (el.host && el.host !== location.host) label = `project:${el.host.replace(/^www\./, '')}`
    }
    if (label) track('click', { label })
  }, { capture: true })

  return { provide: { track } }
})
