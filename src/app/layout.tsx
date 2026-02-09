import type { Metadata } from 'next';
import { Google_Sans_Flex } from 'next/font/google';
import '@/styles/globals.css';

const googleSansFlex = Google_Sans_Flex({
  variable: '--font-google-sans-flex',
  subsets: ['latin'],
  weight: 'variable',
  style: ['normal']
});

export const metadata: Metadata = {
  title: 'GDGoC Bicol University',
  description:
    'Main website of Google Developers Group on Campus Bicol University'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${googleSansFlex.variable} light antialiased`}>
        <nav className='brand-border border-x-0! border-t-0! px-4 py-4'>
          navbar
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
