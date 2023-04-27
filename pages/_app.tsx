import '@/styles/globals.css'
import '@/styles/style.css'
import type { AppProps } from 'next/app'
import "@aws-amplify/ui-react/styles.css";
import config from '../src/aws-exports';


import { Amplify, AuthModeStrategyType } from 'aws-amplify'
import { AmplifyProvider } from '@aws-amplify/ui-react'

import '@aws-amplify/ui-react/styles.css'
Amplify.configure({
  ...config,
  DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH
  }
})



function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default App
