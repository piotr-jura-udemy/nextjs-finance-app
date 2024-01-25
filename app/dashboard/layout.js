import PageHeader from "@/components/page-header";

export default function Layout({children}) {
  return (
  <>
    <PageHeader className="mt-8" />
    <main>{children}</main>
    <footer>Footer</footer>
  </>
  )
}