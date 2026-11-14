import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import Topbar from '@/components-custom/Topbar';

const title = 'Khairi Musa - Software Engineer, Secure AI';
const description =
  'Software Engineer in Kuala Lumpur. I build secure internal AI assistants and fullstack integrations for ERP systems.';

export const metadata: Metadata = {
  metadataBase: new URL('https://khaairi.com'),
  title,
  description,
  alternates: { canonical: '/' },
  openGraph: {
    title,
    description,
    url: 'https://khaairi.com',
    siteName: 'khaairi.com',
    type: 'website',
    images: [{ url: '/profile-removed.webp', alt: 'Khairi Musa' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/profile-removed.webp'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <Topbar />
        {children}
      </body>
    </html>
  );
}
