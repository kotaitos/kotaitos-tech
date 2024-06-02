import Container from '@/app/_component/template/container';
import { HeroPost } from '@/app/_component/organism/hero-post';
import { Header } from '@/app/_component/organism/header';
import { Intro } from '@/app/_component/organism/intro';
import { MoreStories } from '@/app/_component/organism/more-stories';
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
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
