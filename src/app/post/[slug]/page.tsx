import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PostContentPage from '@/app/_component/page/post-content';
import { getPostBySlug } from '@/lib/api';

export default async function Post({ params }: Params) {
  return <PostContentPage slug={params.slug} />;
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Next.js Blog Example with markdown`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}
