import { TabBar } from '@/components/layout/TabBar';
import { ChildHeader } from '@/components/layout/ChildHeader';

export default function MilanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ChildHeader basePath="/milan" childName="Milan" color="green" emoji="🦖" />
      <main 
        className="min-h-screen bg-gradient-to-b from-green-50 to-white"
        style={{
          paddingTop: 'calc(44px + env(safe-area-inset-top))',
          paddingBottom: 'calc(49px + env(safe-area-inset-bottom))'
        }}
      >
        {children}
      </main>
      <TabBar basePath="/milan" childName="Milan" color="green" emoji="🦖" />
    </>
  );
}
