import '@/styles/globals.css'
import '@/styles/style.css'
import type { AppProps } from 'next/app'
import { Amplify } from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import awsconfig from '../src/aws-exports';

Amplify.configure(awsconfig);

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default App