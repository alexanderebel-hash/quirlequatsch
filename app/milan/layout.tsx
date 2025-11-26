import { TabBar } from '@/components/layout/TabBar';

export default function MilanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TabBar basePath="/milan" childName="Milan" color="green" emoji="🦖" />
      <main className="pt-28 md:pt-32 lg:pt-36 min-h-screen bg-gradient-to-b from-green-50 to-white">
        {children}
      </main>
    </>
  );
}
