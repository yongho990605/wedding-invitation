import type { PrimitiveProps } from 'radix-vue'
import type { ButtonVariants } from './index'
import type { NuxtLinkProps } from '#app'
import type { RouteLocationRaw } from 'vue-router'
import type { HTMLAttributes } from 'vue'

export interface ButtonProps extends PrimitiveProps {
  size?: ButtonVariants['size']
  color?: ButtonVariants['color']
  variant?: ButtonVariants['variant']
  rounded?: boolean
  label?: string
  type?: HTMLButtonElement['type']
  class?: HTMLAttributes['class']
  to?: RouteLocationRaw
}
