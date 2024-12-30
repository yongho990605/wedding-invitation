import type { HTMLAttributes } from 'vue'
import type { BadgeVariants } from '.'

export interface BadgeProps {
  rounded?: boolean
  size?: BadgeVariants['size']
  color?: BadgeVariants['color']
  class?: HTMLAttributes['class']
  prefix?: string
  suffix?: string
}
