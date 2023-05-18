import { h } from "preact"

import { useCurrentPage } from "domain/application/hooks/useCurrentPage"
import { useContext } from "use-context-selector"
import { PageIteratorContext } from "domain/application/PageIteratorContext"

export const Router = () => {
  const { Component, Layout } = useCurrentPage()
  const { pageProps } = useContext(PageIteratorContext)

  if (!Layout) return <Component />

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
