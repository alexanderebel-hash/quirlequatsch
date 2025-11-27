import { TabBar } from '@/components/layout/TabBar';
import { ChildHeader } from '@/components/layout/ChildHeader';

export default function LennyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ChildHeader basePath="/lenny" childName="Lenny" color="blue" emoji="🚀" />
      <main 
        className="min-h-screen bg-slate-50"
        style={{
          paddingTop: 'calc(44px + env(safe-area-inset-top))',
          paddingBottom: 'calc(49px + env(safe-area-inset-bottom))'
        }}
      >
        {children}
      </main>
      <TabBar basePath="/lenny" childName="Lenny" color="blue" emoji="🚀" />
    </>
  );
}
