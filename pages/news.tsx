import React from 'react';
import Link from 'next/link';
import { client} from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Layout from '@/components/Layout';

type Props = {
    posts: {
        _id: string;
        title: string;
        slug: {
            current: string;
        };
        mainImage: {
            asset: {
                _id: string;
            };
            alt: string;
        };
    }[];
};


const PostsPage = ({ posts }: Props) => {
  return (
    <>
    <Navbar />
    <Layout>
    <div className='container mt-40 grid grid-cols-1 md:grid-cols-3 gap-4'>
      {posts.map(post => (
        <Link href={`/posts/${post.slug.current}`} key={post._id}>
          <p>
            <h2>{post.title}</h2>
            <Image
              src={urlForImage(post.mainImage.asset)
                .width(500)
                .height(500)
                .url()}
              alt={post.mainImage.alt}
              width={500}
              height={500}
              />
          </p>
        </Link>
      ))}
    </div>
    </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const posts = await client.fetch(`
    *[_type == "post"] {
      _id,
      title,
      slug,
      mainImage {
        asset-> {
          _id,
          url
        },
        alt
      }
    }
  `);

  return {
    props: {
      posts,
    },
  };
}

export default PostsPage;
