export const withDomain = (image: string) => {
  const config = useRuntimeConfig()
  return import.meta.env.DEV ? image : config.app.baseURL + image
}
