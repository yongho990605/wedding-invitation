import { cva, type VariantProps } from 'class-variance-authority'

export { default as Badge } from './Badge.vue'

export const badgeVariants = cva('flex gap-2 items-center  focus:outline-none !w-fit', {
  variants: {
    rounded: { true: 'rounded-full', false: 'rounded' },
    size: { lg: 'px-3 py-1 text-lg', md: 'px-2.5 py-0.5', sm: 'px-2 py-0.5 text-sm' },
    color: {
      slate: 'bg-[#E4E4E4]',
      pink: 'bg-[#F9E6EC]'
    }
  }
})

export type BadgeVariants = VariantProps<typeof badgeVariants>
