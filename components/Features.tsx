import { PhoneMock } from './PhoneMock'

const features = [
  {
    num: '01',
    title: 'PNR Auto-detect',
    body: 'Raily reads your IRCTC SMS from clipboard and extracts your PNR, train, and seat — no typing required. Open the app after booking and your journey is already there.',
    phoneRight: true,
  },
  {
    num: '02',
    title: 'Live Train Status',
    body: 'Track your train in real time. See the current station, running delay, and estimated arrival at your destination — updated every few minutes.',
    phoneRight: false,
  },
  {
    num: '03',
    title: 'Travel Passport',
    body: "Every journey saved. Distance stats, achievements, and a leaderboard of India's top travellers. Build your rail story over time.",
    phoneRight: true,
  },
]

export function Features() {
  return (
    <section id="features" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.14em] text-subtle">
            What Raily does
          </p>
          <h2 className="font-serif text-3xl italic text-ivory tracking-[-0.01em]">
            Everything your journey needs.
          </h2>
        </div>

        {/* Alternating rows */}
        <div className="flex flex-col gap-2">
          {features.map((f) => (
            <div
              key={f.num}
              className="grid grid-cols-1 md:grid-cols-2 border border-border rounded-xl overflow-hidden"
            >
              {/* Text block */}
              <div
                className={`flex flex-col justify-center px-10 py-12 bg-[#0d0f18] ${
                  !f.phoneRight ? 'md:order-2' : ''
                }`}
              >
                <p className="mb-3 text-[11px] font-medium tracking-[0.1em] text-[#2a2d3a]">
                  {f.num}
                </p>
                <h3 className="mb-3 font-serif text-xl italic text-[#c8c0b0]">
                  {f.title}
                </h3>
                <p className="text-sm font-light leading-[1.8] text-muted">
                  {f.body}
                </p>
              </div>

              {/* Phone visual */}
              <div
                className={`flex items-center justify-center bg-[#0b0d16] min-h-[180px] ${
                  !f.phoneRight ? 'md:order-1' : ''
                }`}
              >
                <PhoneMock width={72} height={136} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
