import Head from "next/head";
import Script from "next/script";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* bootstarp */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossorigin="anonymous"
        />
        {/* fontawesome */}
        <link
          rel="stylesheet"
          href="path/to/font-awesome/css/font-awesome.min.css"
        />
     
      </Head>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossorigin="anonymous"
      ></script>
      <Script
        src="https://kit.fontawesome.com/b0fc5c0ae8.js"
        crossorigin="anonymous"
      ></Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
