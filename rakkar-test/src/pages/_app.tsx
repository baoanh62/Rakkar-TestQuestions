import type { AppProps } from 'next/app'
import { Fragment } from 'react'
import type { Page } from '../types/page'

// this should give a better typing
type Props = AppProps & {
  Component: Page
}
const MyApp = ({ Component, pageProps }: Props) => {
  // adjust accordingly if you disabled a layout rendering option
  const getLayout = Component.getLayout ?? (page => page)
  const Layout = Component.layout ?? Fragment

  return (
    <Layout>
      {getLayout(<Component {...pageProps} />)}
    </Layout>
  )
}

export default MyApp