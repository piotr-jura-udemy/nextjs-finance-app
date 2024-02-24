import PageHeader from "@/components/page-header";

export default function Layout({ children }) {
  return (
    <>
      <PageHeader className="my-8" />
      <main>{children}</main>
      <footer className="mt-auto py-8 text-center">
        Footer
      </footer>
    </>
  );
}
