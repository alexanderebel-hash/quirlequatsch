import { TabBar } from '@/components/layout/TabBar';
import { ChildHeader } from '@/components/layout/ChildHeader';

export default function LillyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ChildHeader basePath="/lilly" childName="Lilly" color="pink" emoji="🦄" />
      <main 
        className="min-h-screen bg-gradient-to-b from-pink-50 to-white"
        style={{
          paddingTop: 'calc(44px + env(safe-area-inset-top))',
          paddingBottom: 'calc(49px + env(safe-area-inset-bottom))'
        }}
      >
        {children}
      </main>
      <TabBar basePath="/lilly" childName="Lilly" color="pink" emoji="🦄" />
    </>
  );
}
