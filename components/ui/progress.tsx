"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  // Preserve indeterminate mode for null/undefined, handle NaN/Infinity, then clamp
  const processedValue = value == null 
    ? null // Keep indeterminate state
    : (() => {
        const numValue = Number(value)
        const finiteValue = Number.isFinite(numValue) ? numValue : 0
        return Math.min(100, Math.max(0, finiteValue))
      })()
  
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      value={processedValue}
      className={cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-primary h-full w-full flex-1 transition-all"
        style={{ transform: `translateX(-${100 - (processedValue ?? 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }
