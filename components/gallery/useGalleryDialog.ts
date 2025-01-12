import type { GalleryDialogStore } from './types'

export const useGalleryDialog = () => {
  const dialog = useState<GalleryDialogStore>('gallery-dialog', () => ({
    open: false,
    initialIndex: 0
  }))

  const open = (initialIndex: number) => {
    dialog.value = { open: true, initialIndex }
  }

  const close = () => {
    dialog.value.open = false
  }

  return { open, close, dialog }
}
