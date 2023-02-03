import "../styles/globals.css";
import ThemeProvider from "../components/ThemeContext";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
