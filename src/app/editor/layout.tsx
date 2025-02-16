import { Layout, Main, Sidebar } from '@/components/ui/Layout';
export default function EditorLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <Sidebar.Root>
        <Sidebar.Header>123</Sidebar.Header>
      </Sidebar.Root>
      <Main.Root>{children}</Main.Root>
    </Layout>
  );
}
