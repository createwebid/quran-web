import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="id">
        <Head>
          <title>Quran Application</title>
          <meta name="description" content="Quran Application" />
          <meta name="keywords" content="quran, quranweb, qurantafsir" />
          <meta name="author" content="Fahmi" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/quran.png"></link>
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
