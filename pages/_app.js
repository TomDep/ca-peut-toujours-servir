import 'bootstrap/dist/css/bootstrap.css'

import { useEffect } from 'react'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>
    )
}

export default MyApp
