import { PhoneMock } from './PhoneMock'

export function Hero() {
  return (
    <section className="px-6 pt-20 pb-16 text-center">
      <div className="mx-auto max-w-3xl">
        {/* Badge */}
        <div className="mb-6 inline-block rounded-full border border-border px-3 py-1">
          <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-subtle">
            India only · Free · Android
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-5xl italic leading-[1.1] tracking-[-0.02em] text-ivory mb-5 md:text-[56px]">
          Track your{' '}
          <em className="text-saffron not-italic">Indian Railways</em>{' '}
          journey.
        </h1>

        {/* Subhead */}
        <p className="mx-auto mb-8 max-w-md text-[15px] font-light leading-[1.75] text-muted">
          PNR auto-detect, live train status, and your personal travel passport.
        </p>

        {/* CTA */}
        <a
          href="#"
          className="inline-block rounded-lg bg-saffron px-7 py-3 text-sm font-medium tracking-wide text-bg hover:opacity-90 transition-opacity"
          aria-label="Download Raily for Android (coming soon)"
        >
          Download for Android
        </a>

        {/* Phone strip */}
        <div className="mt-16 flex items-end justify-center gap-3">
          <PhoneMock width={68} height={128} />
          <PhoneMock width={72} height={148} />
          <PhoneMock width={68} height={128} />
        </div>
      </div>
    </section>
  )
}
