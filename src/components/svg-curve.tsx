interface SvgCurveProps {
  position: "top" | "bottom"
  fill: string
  className?: string
}

export function SvgCurve({ position, fill, className = "" }: SvgCurveProps) {
  const isTop = position === "top"

  return (
    <div
      className={`absolute left-0 right-0 w-full overflow-hidden leading-[0] ${
        isTop ? "top-0 -translate-y-[1px]" : "bottom-0 translate-y-[1px]"
      } ${className}`}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className={`relative block w-full h-[40px] md:h-[60px] lg:h-[80px] ${
          isTop ? "rotate-180" : ""
        }`}
        fill={fill}
      >
        <path d="M0,0 C360,80 1080,0 1440,60 L1440,80 L0,80 Z" />
      </svg>
    </div>
  )
}
