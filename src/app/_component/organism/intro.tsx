import Image from 'next/image';

export function Intro() {
  return (
    <section className='flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12'>
      <section className='flex-col flex justify-left'>
        <h1
          className='text-5xl md:text-7xl font-bold tracking-tighter leading-tight'
          style={{
            background: 'linear-gradient(135deg, #FFA07A, #FFD700)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Kotaitos
          <br />
          Developer Blog.
        </h1>
        <h2 className='text-1xl md:text-3xl mt'>Machine Learning engineer</h2>
      </section>
      <Image
        src='/assets/myavatar-removebg.png'
        alt='Avatar'
        width={320}
        height={320}
        className='inline-block'
      />
    </section>
  );
}
