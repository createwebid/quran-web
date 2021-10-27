import "../styles/globals.css";
import { QueryQuranWrapper } from "../lib/queryQuran";

function MyApp({ Component, pageProps }) {
  return (
    <QueryQuranWrapper>
      <Component {...pageProps} />
    </QueryQuranWrapper>
  );
}

export default MyApp;
