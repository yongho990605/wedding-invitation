import { cva, type VariantProps } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva('flex items-center justify-center gap-2 whitespace-nowrap', {
  variants: {
    size: {
      sm: 'h-6 px-2 py-0.5 text-sm',
      md: 'h-8 px-3 py-1',
      lg: 'h-10 px-4 py-1.5 text-lg'
    },
    color: {
      slate: 'bg-slate-400 text-slate-900 active:bg-slate-500 hover:bg-slate-300',
      rose: 'bg-[#D89299] text-white'
    },
    rounded: { true: 'rounded-full', false: 'rounded' }
  },
  defaultVariants: {
    size: 'md',
    color: 'slate',
    rounded: false
  }
})

export const buttonIconVariants = cva('text-[#54514E]', {
  variants: {
    size: { sm: 'h-5 w-5', md: 'h-6 w-6', lg: 'h-7 w-7' }
  },
  defaultVariants: { size: 'lg' }
})

export type ButtonVariants = VariantProps<typeof buttonVariants>
