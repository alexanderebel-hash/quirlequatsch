import { TabBar } from '@/components/layout/TabBar';

export default function LillyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TabBar basePath="/lilly" childName="Lilly" color="pink" emoji="🦄" />
      <main className="pt-28 md:pt-32 lg:pt-36 min-h-screen bg-gradient-to-b from-pink-50 to-white">
        {children}
      </main>
    </>
  );
}
