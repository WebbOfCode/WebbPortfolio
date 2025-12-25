
'use client'

import { useEffect, useState } from 'react'

export default function SystemInfo() {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    setMounted(true)
    const t = setTimeout(() => setLoading(false), 600)
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setReducedMotion(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => {
      clearTimeout(t)
      mq.removeEventListener('change', apply)
    }
  }, [])

  if (!mounted) return null

  return (
    <section
      aria-label="System diagnostics"
      className="bg-bg-main border border-border-default rounded-xl overflow-hidden"
    >
      {/* Console header */}
      <div className="flex items-center justify-between px-4 py-3 bg-bg-elevated border-b border-border-default">
        <div className="flex items-center gap-3">
          <span className={`inline-block w-2 h-2 rounded-full bg-green-500 ${reducedMotion ? '' : 'animate-pulse'}`} aria-hidden="true"></span>
          <span className="font-mono text-sm text-text-secondary">SYSTEM / ABOUT</span>
        </div>
        <div className="font-mono text-xs text-text-muted">STATUS: {loading ? 'INITIALIZING' : 'ONLINE'}</div>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-bg-elevated">
        <div
          className={`h-1 bg-accent-gold ${reducedMotion ? '' : 'transition-all duration-500'} ${loading ? (reducedMotion ? 'w-1/2' : 'w-1/3 animate-pulse') : 'w-full'}`}
          aria-hidden="true"
        ></div>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-6 p-6">
        {/* Stack Overview */}
        <div className="border border-border-default rounded-lg p-4 bg-bg-elevated">
          <h3 className="font-mono text-sm text-accent-teal mb-2">STACK OVERVIEW</h3>
          <ul className="font-mono text-xs text-text-secondary space-y-1">
            <li>• React 18 (Client + Server Components)</li>
            <li>• Next.js 14 App Router</li>
            <li>• Tailwind CSS, utility-first design</li>
            <li>• TypeScript across components and hooks</li>
          </ul>
        </div>

        {/* Deployment Targets */}
        <div className="border border-border-default rounded-lg p-4 bg-bg-elevated">
          <h3 className="font-mono text-sm text-accent-teal mb-2">DEPLOYMENT TARGETS</h3>
          <ul className="font-mono text-xs text-text-secondary space-y-1">
            <li>• Vercel (primary)</li>
            <li>• AWS (S3 + CloudFront when needed)</li>
            <li>• GitHub Actions for CI</li>
          </ul>
        </div>

        {/* Design Philosophy */}
        <div className="border border-border-default rounded-lg p-4 bg-bg-elevated">
          <h3 className="font-mono text-sm text-accent-teal mb-2">DESIGN PHILOSOPHY</h3>
          <ul className="font-mono text-xs text-text-secondary space-y-1">
            <li>• Semantic HTML and accessible patterns</li>
            <li>• Motion with restraint; prefers-reduced-motion respected</li>
            <li>• Systems-first thinking: clarity, reliability, maintainability</li>
            <li>• Real project demos over mock content</li>
          </ul>
        </div>

        {/* Performance & Accessibility */}
        <div className="border border-border-default rounded-lg p-4 bg-bg-elevated">
          <h3 className="font-mono text-sm text-accent-teal mb-2">PERFORMANCE / ACCESSIBILITY</h3>
          <ul className="font-mono text-xs text-text-secondary space-y-1">
            <li>• Image optimization via Next/Image</li>
            <li>• ARIA roles for tabs, panels, dialogs</li>
            <li>• Keyboard navigation throughout</li>
            <li>• Lighthouse targets: Perf 90+, A11y 95+</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
