export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div style={{ maxWidth: 'var(--content-max-width)', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Monumental Logo */}
        <div className="yzy-footer-logo">DW</div>
        
        {/* Divider */}
        <div className="yzy-footer-divider"></div>

        {/* Links */}
        <div className="yzy-footer-links">
          <a href="mailto:demarickwebb@demarickwebb.dev" className="yzy-footer-link">[EMAIL]</a>
          <a href="https://www.linkedin.com/in/demarick-webb1/" target="_blank" rel="noopener noreferrer" className="yzy-footer-link">[LINKEDIN]</a>
          <a href="https://github.com/WebbOfCode" target="_blank" rel="noopener noreferrer" className="yzy-footer-link">[GITHUB]</a>
        </div>

        {/* Location & Status */}
        <div className="yzy-footer-meta">BUILT IN NASHVILLE</div>
        <div className="yzy-footer-meta">READY TO BUILD WITH YOU</div>

        {/* Copyright */}
        <div className="yzy-footer-copyright">© {currentYear} DEMARICK WEBB-RIVERA</div>
      </div>
    </footer>
  )
}
