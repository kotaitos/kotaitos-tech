import Container from '@/app/_component/template/container';
import { PostPreviews } from '@/app/_component/organism/post-previews';
import { getAllPosts } from '@/lib/api';

export default function PostsPage() {
  const allPosts = getAllPosts();

  return (
    <main className='mt-16'>
      <Container>
        {allPosts.length > 0 && <PostPreviews posts={allPosts} />}
      </Container>
    </main>
  );
}
