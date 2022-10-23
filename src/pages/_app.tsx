import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Store from '../app/Store.js'

import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={Store}>
      <Toaster position='top-center' reverseOrder={false} />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
