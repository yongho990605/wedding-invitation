import type { HTMLAttributes } from 'vue'
import type { BadgeVariants } from '.'

export interface BadgeProps {
  rounded?: boolean
  size?: BadgeVariants['size']
  color?: BadgeVariants['color']
  class?: HTMLAttributes['class']
  label?: string
  prefix?: string
  prefixClass?: HTMLAttributes['class']
  suffix?: string
  suffixClass?: HTMLAttributes['class']
}
