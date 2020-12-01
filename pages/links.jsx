import Head from 'next/head';
import Link from 'next/link';

import { useState } from 'react';
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

const LinkContent = ({ post }) => (
  <>
    Link
    {' '}
    {post.linkNumber}
    {' '}
    {post.draft && <span className="italic text-xs text-gray-500">draft</span>}
  </>
);

export default function Links({ allPostsData }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className="mx-3 grid grid-cols-3 gap-1 items-center">
        <div className="col-span-2">
          <p>
            Links
            {' '}
            <span className="text-xs">(externos)</span>
          </p>
          <p className="text-xs">Clique no botão ao lado para ver os posts relacionados aos links.</p>
        </div>
        <div className="col-span-1 text-right">
          <button
            className="text-xs border rounded p-1 shadow"
            type="button"
            onClick={() => setShowDetails((old) => !old)}
          >
            {showDetails ? '- detalhes' : '+ detalhes'}
          </button>
        </div>
      </section>

      <section className={`grid m-3 grid-cols-${showDetails ? 2 : 4} gap-2 sm:grid-cols-3`}>
        {allPostsData
          .filter((post) => post.link)
          .sort((a, b) => b.linkNumber - a.linkNumber)
          .map((post) => (
            <React.Fragment key={post.link}>
              {showDetails ? (
                <div className="border rounded p-2 shadow">
                  <a href={post.link}>
                    <LinkContent post={post} />
                  </a>
                  <p className="text-xs">{post.title}</p>
                  <Link href="/post/[id]" as={`/post/${post.id}`}>
                    <a className="text-xs justify-end">(post)</a>
                  </Link>
                </div>
              ) : (
                <a href={post.link} className="border rounded p-2 shadow hover:bg-gray-300 hover:no-underline">
                  <LinkContent post={post} />
                </a>
              )}
            </React.Fragment>
          ))}
      </section>
    </Layout>
  );
}
