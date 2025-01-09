import { cva, type VariantProps } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva('flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer', {
  variants: {
    size: {
      sm: 'h-6 px-2 py-0.5 text-sm',
      md: 'h-8 px-3 py-1',
      lg: 'h-10 px-4 py-1.5 text-lg'
    },
    color: {
      slate: 'bg-slate-400 text-slate-900',
      rose: 'bg-[#D89299] text-white'
    },
    rounded: { true: 'rounded-full', false: 'rounded' },
    variant: {
      ghost: 'bg-transparent',
      outline: 'bg-transparent border border-slate-400',
      solid: ''
    }
  },
  defaultVariants: {
    size: 'md',
    color: 'slate',
    rounded: false,
    variant: 'solid'
  }
})

export type ButtonVariants = VariantProps<typeof buttonVariants>
