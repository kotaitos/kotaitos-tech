import Container from '@/app/_component/template/container';
import { FaTwitter, FaGithub } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className='border-t'>
      <Container>
        <div className='py-14 flex flex-row justify-center'>
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
        <div className='mb-14 flex flex-row justify-center'>
          <span className='text-sm'>All rights reserved © 2024 Kotaitos</span>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
