import type { GalleryVariants } from './index'

export interface GalleryProps {
  images: string[]
  layout?: GalleryVariants['layout']
}
