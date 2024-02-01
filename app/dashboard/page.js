import { Suspense } from "react"
import TransactionList from "./components/transaction-list"
import TransactionListFallback from "./components/transaction-list-fallback"

export default function Page() {
  return (<>
    <Suspense fallback={<TransactionListFallback />}>
      <TransactionList />
    </Suspense>
  </>)
}