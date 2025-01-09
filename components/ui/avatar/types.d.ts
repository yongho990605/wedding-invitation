import type { HTMLAttributes } from 'vue'
import { avatarVariant, type AvatarVariants } from '.'

export interface AvatarProps {
  class?: HTMLAttributes['class']
  size?: AvatarVariants['size']
  src: string
}
