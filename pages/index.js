import Head from 'next/head';
import Link from 'next/link';

import { getSortedPostsData } from '../lib/posts';
import Layout, { siteTitle } from '../components/layout';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const MyLink = ({url, text, desc}) => {
  return (
    <Link href={url}>
      <a className="p-3 border border-gray-500 rounded hover:bg-gray-300 hover:no-underline">
        <h3>
          {text}
        </h3>
        <p className="text-gray-500 text-xs">
          {desc}
        </p>
      </a>
    </Link>
  );
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className="flex justify-center">
        <p>
          Bem vindo!
        </p>
      </section>

      <section className="grid grid-cols-2 gap-2 mt-2">
        <MyLink
          url="/posts"
          text="Blog"
          desc="Conteúdos diversos, sobre engenharia de software, programação, ferramentas, produtividade, etc."
         />

        <MyLink
          url="https://instagram.com/codeevolution"
          text="Instagram"
          desc="Principal canal de comunicação, junto com a lista de email (que ainda será criada)." />
     
        <MyLink
          url="https://youtube.com/channel/UCliE3zhsaWd-P0Sd3xVy3yA"
          text="YouTube"
          desc="🚧 Em construção! Assim que tivermos conteúdo no canal, anunciaremos no Instagram." />

        <MyLink
          url="#"
          text="Newsletter (lista de email)"
          desc="🚧 Em construção! Assim que a lista estiver pronta, anunciaremos no Instagram." />
      </section>
    </Layout>
  );
}
