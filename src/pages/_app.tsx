import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Head from "next/head";

const font = Inter({ subsets: ["latin"] });
//const font = localFont({ src: "../fonts/GeneralSans-Variable.woff2" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Jan Santiago</title>
      </Head>
      <div className={font.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
