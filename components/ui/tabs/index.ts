import { cva } from 'class-variance-authority'

export { default as Tabs } from './Tabs.vue'
export { default as TabsContent } from './TabsContent.vue'
export { default as TabsList } from './TabsList.vue'
export { default as TabsTrigger } from './TabsTrigger.vue'

export const tabsTriggerVariants = cva('h-full w-full rounded px-10 py-2 text-sm hover:bg-white', {
  variants: {
    active: { true: 'bg-white' }
  }
})
