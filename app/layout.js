// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ThemeContext } from "@/context";
import { AppHeader, AppFooter, AppMetadata } from "@/components";
import "@/styles/globals.css";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>

          <script
            src="https://beamanalytics.b-cdn.net/beam.min.js"
            data-token="cea78beb-0056-47f4-8382-00f1ed721ce1"
            async
          />
        </Head>
        <body>
          <ThemeContext>
            <AppHeader />
            <Main />
            <AppFooter />
          </ThemeContext>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
