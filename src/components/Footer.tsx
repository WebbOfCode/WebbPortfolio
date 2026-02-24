export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{ background: 'var(--yzy-concrete)', borderTop: '1px solid var(--yzy-ash)', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: 'var(--content-max-width)', margin: '0 auto' }}>
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ fontWeight: 900, letterSpacing: '0.18em', color: 'var(--yzy-void)' }}>DW</div>
          <div style={{ height: '2px', background: 'var(--yzy-ash)', marginTop: '1rem' }}></div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginBottom: '2rem' }}>
          <a href="mailto:demarickw104@live.com" style={{ color: 'var(--yzy-void)', textDecoration: 'none', fontWeight: 800 }}>[EMAIL]</a>
          <a href="https://www.linkedin.com/in/demarick-webb1/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--yzy-void)', textDecoration: 'none', fontWeight: 800 }}>[LINKEDIN]</a>
          <a href="https://github.com/WebbOfCode" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--yzy-void)', textDecoration: 'none', fontWeight: 800 }}>[GITHUB]</a>
        </div>

        <div className="text-small" style={{ color: 'var(--yzy-void)', marginBottom: '0.5rem' }}>NASHVILLE, TN</div>
        <div className="text-small" style={{ color: 'var(--yzy-void)', marginBottom: '2rem' }}>ACTIVE CLEARANCE</div>

        <div className="text-small" style={{ color: 'var(--yzy-void)' }}>© {currentYear}</div>
      </div>
    </footer>
  )
}