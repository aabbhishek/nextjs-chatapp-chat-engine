import '../styles/globals.css'
import '../styles/chats.css'
import '../styles/auth.css'
import { ContextProvider } from '../context'

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  )
}

export default MyApp
