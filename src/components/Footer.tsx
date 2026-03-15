export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div style={{ maxWidth: 'var(--content-max-width)', margin: '0 auto', padding: '0 1.5rem' }}>
        <div className="yzy-footer-logo">DW</div>

        <div className="yzy-footer-divider"></div>

        <div className="yzy-footer-links">
          <a href="mailto:demarickwebb@demarickwebb.dev" className="yzy-footer-link">[EMAIL]</a>
          <a href="https://www.linkedin.com/in/demarick-webb1/" target="_blank" rel="noopener noreferrer" className="yzy-footer-link">[LINKEDIN]</a>
          <a href="https://github.com/WebbOfCode" target="_blank" rel="noopener noreferrer" className="yzy-footer-link">[GITHUB]</a>
        </div>

        <div className="yzy-footer-meta">BUILT IN NASHVILLE</div>
        <div className="yzy-footer-meta">READY TO BUILD WITH YOU</div>

        <div className="yzy-footer-copyright">© {currentYear} DEMARICK WEBB-RIVERA</div>
      </div>

      <a href="https://www.hitwebcounter.com/" target="_blank" rel="noopener noreferrer">
        <img
          src="https://hitwebcounter.com/counter/counter.php?page=21482940&style=0001&nbdigits=5&type=page&initCount=0"
          title="Free Tools"
          alt="Free Tools"
          style={{ border: 0 }}
        />
      </a>

    </footer>
  )
}