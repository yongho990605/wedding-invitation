import { useClipboard } from '@vueuse/core'
import { toast } from 'vue-sonner'

export const useCopyToClipboard = (text: string) => {
  const { t } = useI18n({ useScope: 'global' })
  const clipboard = useClipboard({ source: text })

  const copy = () => {
    clipboard.copy()
    toast.success(t('copy-account'))
  }

  return {
    copy,
    isSupported: clipboard.isSupported,
    copied: clipboard.copied
  }
}
