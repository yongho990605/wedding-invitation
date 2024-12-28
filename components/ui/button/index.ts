import { cva, type VariantProps } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
  'twinline-flex twitems-center twjustify-center twgap-2 twwhitespace-nowrap twrounded-md twtext-sm twfont-medium twring-offset-background twtransition-colors focus-visible:twoutline-none focus-visible:twring-2 focus-visible:twring-ring focus-visible:twring-offset-2 disabled:twpointer-events-none disabled:twopacity-50 [&_svg]:twpointer-events-none [&_svg]:twsize-4 [&_svg]:twshrink-0',
  {
    variants: {
      variant: {
        default:
          'twbg-primary twtext-primary-foreground twshadow hover:twbg-primary/90',
        destructive:
          'twbg-destructive twtext-destructive-foreground twshadow-sm hover:twbg-destructive/90',
        outline:
          'twborder twborder-input twbg-background twshadow-sm hover:twbg-accent hover:twtext-accent-foreground',
        secondary:
          'twbg-secondary twtext-secondary-foreground twshadow-sm hover:twbg-secondary/80',
        ghost: 'hover:twbg-accent hover:twtext-accent-foreground',
        link: 'twtext-primary twunderline-offset-4 hover:twunderline',
      },
      size: {
        default: 'twh-9 twpx-4 twpy-2',
        sm: 'twh-8 twrounded-md twpx-3 twtext-xs',
        lg: 'twh-10 twrounded-md twpx-8',
        icon: 'twh-9 tww-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
