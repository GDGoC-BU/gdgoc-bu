import type { Metadata } from 'next';
import { Google_Sans } from 'next/font/google';
import '@/styles/globals.css';

const googleSans = Google_Sans({
  variable: '--font-google-sans',
  subsets: ['latin'],
  weight: 'variable',
  style: ['normal', 'italic']
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
      <body className={`${googleSans.variable} light antialiased`}>
        {children}
      </body>
    </html>
  );
}
