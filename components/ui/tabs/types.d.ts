import { TabsTriggerProps as baseTriggerProps } from 'radix-vue'
import { HTMLAttributes } from 'vue'

export interface TabsTriggerProps extends baseTriggerProps {
  active?: boolean
  class?: HTMLAttributes['class']
}
