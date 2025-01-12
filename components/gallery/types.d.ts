import type { GalleryVariants } from './index'

interface BaseGalleryProps {
  images?: string[]
}

export interface GalleryProps extends BaseGalleryProps {
  layout?: GalleryVariants['layout']
}

export interface GalleryDialogProps extends BaseGalleryProps {
  initialIndex?: number
}

export interface GalleryDialogStore {
  open: boolean
  initialIndex: number
}
