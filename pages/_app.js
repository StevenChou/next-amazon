import { useEffect } from 'react';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // refresh 後，
    console.log('===> Refresh!!');
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
