import { cva } from 'class-variance-authority'

export { default as Card } from './Card.vue'
export { default as CardContent } from './CardContent.vue'
export { default as CardDescription } from './CardDescription.vue'
export { default as CardFooter } from './CardFooter.vue'
export { default as CardHeader } from './CardHeader.vue'
export { default as CardTitle } from './CardTitle.vue'

export const cardVariants = cva('bg-card text-card-foreground rounded-[0.5rem] shadow-sm bg-white flex flex-col', {
  variants: {
    outline: { true: 'border' }
  }
})
