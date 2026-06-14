import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import Topbar from '@/components-custom/Topbar';

export const metadata: Metadata = {
  metadataBase: new URL('https://khaairi.com'),
  title: 'Khairi - Software Developer',
  description: 'Software Engineer based in Kuala Lumpur, Malaysia.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Khairi - Software Developer',
    description: 'Software Engineer based in Kuala Lumpur, Malaysia.',
    url: 'https://khaairi.com',
    siteName: 'khaairi.com',
    type: 'website',
    images: [{ url: '/profile-removed.webp', alt: 'Khairi Musa' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khairi - Software Developer',
    description: 'Software Engineer based in Kuala Lumpur, Malaysia.',
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
