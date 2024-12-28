import { cva, type VariantProps } from 'class-variance-authority'

export { default as Badge } from './Badge.vue'

export const badgeVariants = cva(
  'twinline-flex twitems-center twrounded-full twborder twpx-2.5 twpy-0.5 twtext-xs twfont-semibold twtransition-colors focus:twoutline-none focus:twring-2 focus:twring-ring focus:twring-offset-2',
  {
    variants: {
      variant: {
        default:
          'twborder-transparent twbg-primary twtext-primary-foreground hover:twbg-primary/80',
        secondary:
          'twborder-transparent twbg-secondary twtext-secondary-foreground hover:twbg-secondary/80',
        destructive:
          'twborder-transparent twbg-destructive twtext-destructive-foreground hover:twbg-destructive/80',
        outline: 'twtext-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export type BadgeVariants = VariantProps<typeof badgeVariants>
