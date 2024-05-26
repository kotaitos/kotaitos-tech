import Link from 'next/link';

const Header = () => {
  return (
    <h2
      className='text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8'
      style={{
        background: 'linear-gradient(135deg, #FFA07A, #FFD700)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      <Link href='/' className='hover:underline'>
        Kotaitos developer Blog
      </Link>
      .
    </h2>
  );
};

export default Header;
