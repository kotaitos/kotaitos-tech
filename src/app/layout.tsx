import type { Metadata } from 'next';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Script from 'next/script';
import * as gtag from '@/lib/gtag';
import Footer from '@/app/_component/organism/footer';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost'),
  title: 'Kotaitos Developer Blog',
  description: 'Kotaitos Developer Blog',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  useEffect(() => {
    gtag.pageview(pathname);
  }, [pathname]);

  return (
    <html lang='en'>
      <head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/favicon-16x16.png'
        />
        <link rel='manifest' href='/favicon/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/favicon/safari-pinned-tab.svg'
          color='#000000'
        />
        <link rel='shortcut icon' href='/favicon/favicon.ico' />
        <meta name='msapplication-TileColor' content='#000000' />
        <meta
          name='msapplication-config'
          content='/favicon/browserconfig.xml'
        />
        <meta name='theme-color' content='#000' />
        <link rel='alternate' type='application/rss+xml' href='/feed.xml' />
      </head>
      <body className={inter.className}>
        <Script
          strategy='afterInteractive'
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
        />
        <Script
          id='gtag-init'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtag.GA_MEASUREMENT_ID}');
            `,
          }}
        />
        <div className='min-h-screen'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
