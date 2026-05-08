interface PhoneMockProps {
  width?: number
  height?: number
  className?: string
}

export function PhoneMock({ width = 72, height = 136, className = '' }: PhoneMockProps) {
  return (
    <div
      className={`rounded-xl bg-[#131620] border border-[#1e2230] flex-shrink-0 ${className}`}
      style={{ width, height }}
      aria-hidden="true"
    />
  )
}
