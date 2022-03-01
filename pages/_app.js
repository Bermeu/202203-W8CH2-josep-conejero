import "../styles/globals.css";
import Layout from "../pages/components/Layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
