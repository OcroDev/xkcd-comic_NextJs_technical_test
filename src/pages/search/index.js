import { Layout } from '@/components/Layout';
import Head from 'next/head';
import React from 'react';

import algoliasearch from 'algoliasearch/lite';

import Link from 'next/link';
import Image from 'next/image';
import { search } from '@/services/search';
import { useI18N } from '@/context/i18n';

export default function Component({ query, results }) {
  const { t } = useI18N();
  return (
    <>
      <Head>
        <title>xkcd - Results for {query}</title>
        <meta name='description' content={`Search results for ${query}`} />
      </Head>
      <Layout>
        <h1>{t('SEARCH_RESULTS', results.length, query)}</h1>
        {results.map((result) => {
          return (
            <>
              <Link
                key={result.id}
                href={`../comic/${result.id}`}
                className='flex flex-row content-center justify-start bg-slate-300 hover:bg-slate-50'
              >
                <Image
                  src={result.img}
                  alt={result.alt}
                  width={50}
                  height={50}
                  className='rounded-full'
                />
                <div key={result.id}>
                  <h2>{result.title}</h2>
                </div>
              </Link>
            </>
          );
        })}
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const { q = '' } = query;

  const { results } = await search({ query: q });

  return {
    props: {
      query: q,
      results,
    },
  };
}
