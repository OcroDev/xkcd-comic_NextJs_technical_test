import Head from 'next/head';
import fs from 'node:fs/promises';
import Link from 'next/link';
import Image from 'next/image';
import { Layout } from '@/components/Layout';

export default function Home({ latestComics }) {
  return (
    <>
      <Head>
        <title>xkcd - Comics for developers</title>
        <meta name='description' content='Comics for developers' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Layout>
        <h2 className='text-3xl font-bold text-center mb-2'>Latest Comics</h2>
        <section className='grid grid-cols-1 gap-2 max-w-md m-auto sm:grid-cols-2 md:grid-cols-3'>
          {latestComics.map((comic) => {
            return (
              <Link
                href={`/comic/${comic.id}`}
                key={comic.id}
                className='mb-4 pb-4 m-auto'
              >
                <h3 className='font-bold text-sm text-center'>{comic.title}</h3>
                <Image
                  width={comic.width}
                  height={comic.height}
                  src={comic.img}
                  alt={comic.alt}
                  objectFit='contain'
                />
              </Link>
            );
          })}
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const files = await fs.readdir('./comics');
  const latestComicsFiles = files.slice(-8, files.length);

  const promisesReadFiles = latestComicsFiles.map(async (file) => {
    const content = await fs.readFile(`./comics/${file}`, 'utf8');
    return JSON.parse(content);
  });
  const latestComics = await Promise.all(promisesReadFiles);

  return {
    props: {
      latestComics,
    },
  };
}
