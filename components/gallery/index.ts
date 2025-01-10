import { cva, type VariantProps } from 'class-variance-authority'

export { default as Gallery } from './Gallery.vue'

export const galleryVariants = cva('flex w-full gap-2.5', {
  variants: {
    layout: {
      horizontal: 'grid grid-cols-2 [&>div]:h-full',
      vertical: 'flex-col'
    }
  }
})

export type GalleryVariants = VariantProps<typeof galleryVariants>
