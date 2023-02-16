import { Header } from "@/components/Header";
import Image from "next/image";
import Head from "next/head";
import React from "react";
import { readFile } from "fs/promises";

export default function Comic(img, alt, title, width, height) {
  return (
    <>
      <Head>
        <title>xkcd - Comics for developers</title>
        <meta name="description" content="Comics for developers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <h1>{title}</h1>
        <Image width={width} height={height} alt={alt} src={img} />
      </main>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "2650" } }],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const content = await readFile(`./comics/${id}.json`, "utf8");
  const comic = JSON.parse(content);
  console.log(comic);

  return { props: { ...comic } };
}
