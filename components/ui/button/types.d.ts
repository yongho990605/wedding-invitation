import type { PrimitiveProps } from 'radix-vue'
import type { ButtonVariants } from './index'

export interface ButtonProps extends PrimitiveProps {
  size?: ButtonVariants['size']
  color?: ButtonVariants['color']
  rounded?: boolean
  label?: string
  type?: HTMLButtonElement['type']
  class?: HTMLAttributes['class']
  icon?: string
}
