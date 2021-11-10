import Document, { Html, Main, Head, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="id">
        <Head>
          <title>Quran Web Application</title>
          <meta name="description" content="Quran Web Application" />
          <meta name="keywords" content="quran, quranweb, qurantafsir" />
          <meta name="author" content="Fahmi" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/quran.svg"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
