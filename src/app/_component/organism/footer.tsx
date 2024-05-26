import Container from '@/app/_component/template/container';
import { FaTwitter, FaGithub } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className='max-w-screen-lg mx-auto border-t'>
      <Container>
        <div className='py-28 flex flex-row justify-center'>
          <a
            href={'https://github.com/kotaitos'}
            className='text-xl sm:text-2xl md:text-3xl lg:text-4xl mx-3 font-bold hover:underline'
          >
            <FaGithub />
          </a>
          <a
            href='https://twitter.com/kotaitos'
            className='text-xl sm:text-2xl md:text-3xl lg:text-4xl mx-3 font-bold hover:underline'
          >
            <FaTwitter />
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
