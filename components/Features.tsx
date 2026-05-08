const features = [
  {
    num: '01',
    name: 'PNR Auto-detect',
    desc: 'Raily reads your IRCTC SMS from clipboard and extracts your PNR, train, and seat — no typing required. Open the app after booking and your journey is already there.',
    phoneRight: true,
  },
  {
    num: '02',
    name: 'Live Train Status',
    desc: 'Track your train in real time. See the current station, running delay, and estimated arrival at your destination — updated every few minutes.',
    phoneRight: false,
  },
  {
    num: '03',
    name: 'Travel Passport',
    desc: "Every journey saved. Distance stats, achievements, and a leaderboard of India's top travellers. Build your rail story over time.",
    phoneRight: true,
  },
]

export function Features() {
  return (
    <section className="features" id="features">
      <div className="features-header">
        <p className="section-eyebrow">What Raily does</p>
        <h2 className="features-title">Everything your journey needs.</h2>
      </div>

      {features.map((f) => (
        <div className="feature-row" key={f.num}>
          {f.phoneRight ? (
            <>
              <div className="feature-text">
                <p className="feature-num">{f.num}</p>
                <h3 className="feature-name">{f.name}</h3>
                <p className="feature-desc">{f.desc}</p>
              </div>
              <div className="feature-visual">
                <div className="phone-mock" style={{ width: 72, height: 140 }} />
              </div>
            </>
          ) : (
            <>
              <div className="feature-visual">
                <div className="phone-mock" style={{ width: 72, height: 140 }} />
              </div>
              <div className="feature-text">
                <p className="feature-num">{f.num}</p>
                <h3 className="feature-name">{f.name}</h3>
                <p className="feature-desc">{f.desc}</p>
              </div>
            </>
          )}
        </div>
      ))}
    </section>
  )
}
