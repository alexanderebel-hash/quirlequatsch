import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Capitano's Lernwelt - Biologie & Messen",
  description: 'Interaktive Lernplattform für Capitano zur Vorbereitung auf die Klassenarbeit',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
