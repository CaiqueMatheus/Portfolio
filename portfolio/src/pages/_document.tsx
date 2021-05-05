import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  rendeR() {
    <Html>
      <Head>
        <link href="/tailwind.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;800&family=Varela+Round&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>;
  }
}
