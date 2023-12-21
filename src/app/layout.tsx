import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { UserNav } from "@/components/user-nav";
import { MainNav } from "@/components/main-nav";
import { ModeToggle } from "@/components/ui/toggle-mode";
import Header from "@/components/Header";
export const metadata: Metadata = {
  title: "Kai Next Template",
  description: "kairi next js blank template",
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
          <div className="flex-col md:flex border-black">
            <Header />
            <div className="container">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
