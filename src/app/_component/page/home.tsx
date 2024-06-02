import Container from '@/app/_component/template/container';
import { HeroPost } from '@/app/_component/organism/hero-post';
import { Intro } from '@/app/_component/organism/intro';
import { PostPreviews } from '@/app/_component/organism/post-previews';
import { getAllPosts } from '@/lib/api';
import { About } from '../organism/about';

export default function Home() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Intro />
        <About />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        <h2 className='mb-8 text-2xl md:text-4xl font-bold tracking-tighter leading-tight'>
          🏊 More Stories
        </h2>
        {morePosts.length > 0 && <PostPreviews posts={morePosts} />}
      </Container>
    </main>
  );
}
