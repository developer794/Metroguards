import * as React from "react"
import { cn } from "@/lib/utils"

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  pauseOnHover?: boolean
  direction?: "left" | "right"
  speed?: number
}

export function Marquee({
  children,
  pauseOnHover = false,
  direction = "left",
  speed = 30,
  className,
  ...props
}: MarqueeProps) {
  return (
    <div 
      className={cn(
        "relative w-full overflow-hidden",
        className
      )} 
      {...props}
    >
      <div className="flex w-full overflow-hidden py-5">
        <div 
          className={cn(
            "flex animate-marquee",
            pauseOnHover && "hover:[animation-play-state:paused]",
            direction === "right" && "animate-marquee-reverse"
          )}
          style={{ 
            "--duration": `${speed}s`,
            animationDuration: `${speed}s`
          } as React.CSSProperties}
        >
          <div className="flex shrink-0 items-center">
            {children}
          </div>
          <div className="flex shrink-0 items-center">
            {children}
          </div>
          <div className="flex shrink-0 items-center">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
