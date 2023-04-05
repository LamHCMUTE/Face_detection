import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Login from './login'

export default function App({ Component, pageProps }: AppProps) {
  // const loggedInUser = false
  // if (!loggedInUser) return <Login/>
  
  return <Component {...pageProps} />
}
