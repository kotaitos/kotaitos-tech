'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const pathname = usePathname();

  const isCurrentPage = (path: string) => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <div className='p-6 top-0 bg-dark-base-100'>
      <nav className='hstack justify-between'>
        <Link
          href='/'
          className={`text-dark-neautral ${isCurrentPage('/') ? 'underline' : ''}`}
        >
          Home
        </Link>
        <Link
          href='/posts'
          className={`ml-6 text-dark-neautral ${isCurrentPage('/posts') ? 'underline' : ''}`}
        >
          Blog
        </Link>
      </nav>
    </div>
  );
};

export default Header;
