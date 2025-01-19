import type { SelectRootProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

export interface SelectItemProps {
  value: string
  label: string
  class?: HTMLAttributes['class']
}

export interface SelectProps extends SelectRootProps {
  items: SelectItemProps[]
  class?: HTMLAttributes['class']
}
