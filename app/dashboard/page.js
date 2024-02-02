import { Suspense } from "react"
import TransactionList from "./components/transaction-list"
import TransactionListFallback from "./components/transaction-list-fallback"
import Trend from "./components/trend"

export default function Page() {
  return (<>
    <section className="mb-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
      <Suspense>
        <Trend type="Income" />
      </Suspense>
      <Suspense>
        <Trend type="Expense" />
      </Suspense>
      <Suspense>
        <Trend type="Saving" />
      </Suspense>
      <Suspense>
        <Trend type="Investment" />
      </Suspense>
    </section>

    <Suspense fallback={<TransactionListFallback />}>
      <TransactionList />
    </Suspense>
  </>)
}