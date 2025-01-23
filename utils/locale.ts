type LocaleClass = {
  [key: string]: string
}

export const getLocaleClass = (locale: string, classMap: LocaleClass): string => {
  return classMap?.[locale] || classMap.ko
}
