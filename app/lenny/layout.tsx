import { TabBar } from '@/components/layout/TabBar';

export default function LennyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TabBar basePath="/lenny" childName="Lenny" color="blue" emoji="🚀" />
      <main className="pt-28 md:pt-32 lg:pt-36 min-h-screen bg-slate-50">
        {children}
      </main>
    </>
  );
}
