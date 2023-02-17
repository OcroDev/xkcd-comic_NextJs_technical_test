import { Layout } from '@/components/Layout';
import Head from 'next/head';
import React from 'react';

export default function Component({ query }) {
  return (
    <>
      <Head>
        <title>xkcd - Results for {query}</title>
        <meta name='description' content={`Search results for ${query}`} />
      </Head>
      <Layout>
        <h1>Resultados para {query} </h1>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const { q = '' } = query;
  console.log(q);

  //llamar a la api de algolia para buscar resultados
  return {
    props: {
      query: q,
    },
  };
}
