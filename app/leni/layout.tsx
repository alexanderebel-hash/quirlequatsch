import { TabBar } from '@/components/layout/TabBar';
import { ChildHeader } from '@/components/layout/ChildHeader';

export default function LeniLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ChildHeader basePath="/leni" childName="Leni" color="purple" emoji="🦋" />
      <main 
        className="min-h-screen bg-gradient-to-b from-purple-50/50 to-white"
        style={{
          paddingTop: 'calc(44px + env(safe-area-inset-top))',
          paddingBottom: 'calc(49px + env(safe-area-inset-bottom))'
        }}
      >
        {children}
      </main>
      <TabBar basePath="/leni" childName="Leni" color="purple" emoji="🦋" />
    </>
  );
}
