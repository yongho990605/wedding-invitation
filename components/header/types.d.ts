import type { NuxtLinkProps } from '#app'

interface HeaderHamburgerMenuItem extends NuxtLinkProps {
  label?: string
  slot?: string
  class?: HTMLAttributes['class']
}

export interface HeaderHamburgerMenuProps {
  items: HeaderHamburgerMenuItem[]
}
