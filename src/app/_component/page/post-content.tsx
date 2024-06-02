import 'highlight.js/styles/atom-one-dark.css';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/api';
import markdownToHtml from '@/lib/markdownToHtml';
import Container from '@/app/_component/template/container';
import Header from '@/app/_component/organism/header';
import { PostBody } from '@/app/_component/organism/post-body';
import { PostHeader } from '@/app/_component/organism/post-header';

type Props = {
  slug: string;
};

export default async function PostContentPage({ slug }: Props) {
  const post = getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || '');

  return (
    <main>
      <Container>
        <article className='mb-32'>
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
