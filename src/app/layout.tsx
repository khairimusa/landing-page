import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components-custom/Header';
import Footer from '@/components-custom/Footer';
export const metadata: Metadata = {
  title: 'Kai Next Template',
  description: 'kairi next js blank template',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} !scroll-smooth`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="block px-2 lg:px-0">
            <div className="relative mx-auto my-4 max-w-screen-md min-h-[96vh] rounded-md border shadow-2xl">
              <Header />
              <section className="mb-16">{children}</section>
              <Footer />
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
