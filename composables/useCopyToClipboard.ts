import { useClipboard } from '@vueuse/core'

export const useCopyToClipboard = (text: string, callbackOnCopy?: () => void) => {
  const clipboard = useClipboard({ source: text })

  const copy = () => {
    clipboard.copy()
    callbackOnCopy?.()
  }

  return {
    copy,
    isSupported: clipboard.isSupported,
    copied: clipboard.copied
  }
}
