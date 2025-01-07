import { cva, type VariantProps } from 'class-variance-authority'

export { default as Avatar } from './Avatar.vue'

export const avatarVariant = cva(
  'inline-flex items-center justify-center font-normal text-foreground select-none shrink-0 bg-secondary overflow-hidden rounded-full',
  {
    variants: {
      size: {
        md: 'h-[2.75rem] w-[2.75rem]',
        lg: 'h-20 w-20'
      }
    }
  }
)

export type AvatarVariants = VariantProps<typeof avatarVariant>
