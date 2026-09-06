"use client"

import { trackEvent } from "@/lib/track"

type Props = React.ComponentPropsWithoutRef<"a"> & {
  event: string
  label?: string
}

/** 带转化埋点的 <a>，用于服务端组件里需要统计点击的下载/外链 */
export default function TrackedLink({ event, label, onClick, ...rest }: Props) {
  return (
    <a
      {...rest}
      onClick={(e) => {
        trackEvent(event, label)
        onClick?.(e)
      }}
    />
  )
}
