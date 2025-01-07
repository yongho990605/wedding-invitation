import type { HTMLAttributes } from 'vue'
import type { AvatarImageProps } from 'radix-vue'
import { avatarVariant, type AvatarVariants } from '.'

export interface AvatarProps extends AvatarImageProps {
  class?: HTMLAttributes['class']
  size?: AvatarVariants['size']
}
