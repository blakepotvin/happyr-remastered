import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import SSRProvider from "react-bootstrap/SSRProvider";
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </>
  );
}

export default MyApp;
