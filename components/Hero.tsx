export function Hero() {
  return (
    <section className="hero">
      <div className="hero-badge">
        <span className="hero-badge-dot" />
        India only · Free · Android
      </div>

      <h1 className="hero-headline">
        Track your{' '}
        <em>Indian Railways</em>{' '}
        journey.
      </h1>

      <p className="hero-sub">
        PNR auto-detect, live train status, and your personal travel passport.
      </p>

      <a href="#" className="hero-cta">
        Download for Android
      </a>

      <div className="hero-phones">
        <div className="phone-mock" style={{ width: 68, height: 128 }} />
        <div className="phone-mock" style={{ width: 76, height: 152 }} />
        <div className="phone-mock" style={{ width: 68, height: 128 }} />
      </div>
    </section>
  )
}
