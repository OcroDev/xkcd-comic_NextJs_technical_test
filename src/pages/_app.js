import { I18NProvider, useI18N } from '@/context/i18n';
import { NextUIProvider } from '@nextui-org/react';
import Head from 'next/head';
import '../styles/globals.css';

const DefaultHeadApp = () => {
  const { t } = useI18N();
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <title>{t('SEO_DEFAULT_TITLE')}</title>
      </Head>
    </>
  );
};

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <I18NProvider>
        <DefaultHeadApp />
        <Component {...pageProps} />
      </I18NProvider>
    </NextUIProvider>
  );
}
