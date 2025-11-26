import { TabBar } from '@/components/layout/TabBar';

export default function LeniLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TabBar basePath="/leni" childName="Leni" color="purple" emoji="🦋" />
      <main className="pt-28 md:pt-32 lg:pt-36 min-h-screen bg-gradient-to-b from-purple-50/50 to-white">
        {children}
      </main>
    </>
  );
}
