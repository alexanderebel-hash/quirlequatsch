import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { TabBar } from '@/components/layout/TabBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Capitano's Lernwelt",
  description: 'Lerne spielerisch für deine Klassenarbeit!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.className} bg-[#F2F2F7]`}>
        <main className="pb-20 min-h-screen">
          {children}
        </main>
        <TabBar />
      </body>
    </html>
  );
}
