import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import '@fortawesome/fontawesome-svg-core/styles.css' // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core'
import ThemeContextWrapper from '../context/ThemeContextWrapper'
config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextWrapper>
      <Component {...pageProps} />
    </ThemeContextWrapper>
  )
}

export default MyApp
