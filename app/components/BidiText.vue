<script setup lang="ts">
/**
 * Renders text that mixes Arabic with code or English terms.
 * Every Latin run (like "res.ok" or "(#title)") is wrapped in <bdi> so it keeps its own
 * left-to-right order inside a right-to-left sentence. Code-looking runs also get a code style.
 */
const props = defineProps<{ text: string, plain?: boolean }>()

interface Part { text: string, kind: 'plain' | 'term' | 'code' }

const CODE_HINT = /[(){}[\]=<>#?|&$_+]|\w\.\w|^\.|^[a-z]+[A-Z]|^\d/

const parts = computed<Part[]>(() => {
  // No Arabic: keep the whole text left-to-right (e.g. a code option shown on an Arabic page)
  if (!/[\u0600-\u06FF]/.test(props.text)) return [{ text: props.text, kind: 'term' }]
  const out: Part[] = []
  let last = 0
  // A run of printable ASCII that starts and ends with a non-space character
  for (const m of props.text.matchAll(/[\x21-\x7E](?:[\x20-\x7E]*[\x21-\x7E])?/g)) {
    let run = m[0]
    let start = m.index!
    if (!/[A-Za-z0-9]/.test(run)) continue
    // Sentence punctuation at the edges belongs to the sentence, not to the term
    // e.g. ". div" after an Arabic sentence: the period ends the sentence, ".title" stays code
    let lead = run.match(/^(?:[.,:;!?]+\s+)?["'“]*/)?.[0] ?? ''
    let trail = run.match(/[.,:;!?"'”]+$/)?.[0] ?? ''
    // A bracket that is not closed inside the run belongs to the Arabic sentence, so it mirrors correctly
    if (run.startsWith('(') && !run.includes(')')) lead += '('
    const core = run.slice(lead.length, run.length - trail.length)
    if (core.endsWith(')') && !core.includes('(')) trail = ')' + trail
    run = run.slice(lead.length, run.length - trail.length)
    start += lead.length
    if (!run) continue
    if (start > last) out.push({ text: props.text.slice(last, start), kind: 'plain' })
    out.push({ text: run, kind: !props.plain && CODE_HINT.test(run) ? 'code' : 'term' })
    last = start + run.length
  }
  if (last < props.text.length) out.push({ text: props.text.slice(last), kind: 'plain' })
  return out
})
</script>

<template>
  <span><template v-for="(p, i) in parts" :key="i"><bdi
    v-if="p.kind !== 'plain'"
    dir="ltr"
    :class="p.kind === 'code' ? 'rounded bg-white/[0.07] px-1 font-mono text-[0.9em]' : ''"
  >{{ p.text }}</bdi><template v-else>{{ p.text }}</template></template></span>
</template>
