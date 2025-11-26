import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LernBoost',
  description: 'Altersgerechte Lernwelten für jedes Kind',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.className} bg-[#F2F2F7]`}>
        {children}
      </body>
    </html>
  );
}
