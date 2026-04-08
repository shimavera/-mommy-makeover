import { SpinningSeal } from "@/components/spinning-seal"

export function SectionBridge({
  align = "center",
  size = "md",
}: {
  align?: "left" | "center" | "right"
  size?: "sm" | "md" | "lg"
}) {
  const alignClass =
    align === "left"
      ? "left-6 md:left-16"
      : align === "right"
      ? "right-6 md:right-16"
      : "left-1/2 -translate-x-1/2"

  const sizeClass =
    size === "sm"
      ? "w-[70px] h-[70px] md:w-[100px] md:h-[100px]"
      : size === "lg"
      ? "w-[110px] h-[110px] md:w-[180px] md:h-[180px]"
      : "w-[80px] h-[80px] md:w-[140px] md:h-[140px]"

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute bottom-0 ${alignClass} ${sizeClass} translate-y-1/2 z-20 [&_svg]:w-full [&_svg]:h-full`}
    >
      <SpinningSeal size={150} />
    </div>
  )
}
