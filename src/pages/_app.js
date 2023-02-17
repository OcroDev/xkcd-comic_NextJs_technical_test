import { NextUIProvider } from '@nextui-org/react';
import Head from 'next/head';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
