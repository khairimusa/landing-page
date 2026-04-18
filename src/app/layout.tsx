import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import Topbar from '@/components-custom/Topbar';

export const metadata: Metadata = {
  title: 'Khairi - Software Developer',
  description: 'Software Engineer based in Kuala Lumpur, Malaysia.',
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
