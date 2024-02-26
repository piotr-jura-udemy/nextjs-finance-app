'use client'
import Button from "@/components/button"
import Separator from "@/components/separator"
import TransactionItem from "@/components/transaction-item"
import TransactionSummaryItem from "@/components/transaction-summary-item"
import { fetchTransactions } from "@/lib/actions"
// import LoadMoreTransactionsButton from './load-more-transactions-button'
import { useState } from "react"
import { Loader } from 'lucide-react';
import TransactionSummaryItemSkeleton from '@/components/transaction-summary-item-skeleton';
import TransactionItemSkeleton from '@/components/transaction-item-skeleton';

const groupAndSumTransactionsByDate = (transactions) => {
  const grouped = {}
  for (const transaction of transactions) {
    const date = transaction.created_at.split('T')[0]
    if (!grouped[date]) {
      grouped[date] = { transactions: [], amount: 0 }
    }
    grouped[date].transactions.push(transaction)
    const amount = transaction.type === 'Expense' ? -transaction.amount : transaction.amount
    grouped[date].amount += amount
  }
  return grouped
}

export default function TransactionList({ initialTransactions, range, limit }) {
  // const transactions = await fetchTransactions(range, 0, limit)
  const [transactions, setTransactions] = useState(initialTransactions)
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(initialTransactions.length === 0)
  const [offset, setOffset] = useState(initialTransactions.length)
  const handleClick = async (e) => {
    // const params = new URLSearchParams(searchParams)
    // params.set('limit', (Number(limit)) + 20)
    // router.push(`${pathname}?${params.toString()}`, { scroll: false })
    setLoading(true)
    const newTransactions = await fetchTransactions(range, offset, limit + 20)
    setOffset(offset + 20)
    setDisabled(newTransactions.length === 0)
    setTransactions((prevTransactions) => [...prevTransactions, ...newTransactions])
    setLoading(false)
  }
  const grouped = groupAndSumTransactionsByDate(transactions)

  return (
    <div className="space-y-8">
      {transactions.length > 0 && Object.entries(grouped)
        .map(([date, { transactions, amount }]) =>
          <div key={date}>
            <TransactionSummaryItem date={date} amount={amount} />
            <Separator />
            <section className="space-y-4">
              {transactions.map(transaction => <div key={transaction.id}>
                <TransactionItem {...transaction} />
              </div>)}
            </section>
          </div>
        )}
      {transactions.length === 0 && <div className="text-center text-gray-400 dark:text-gray-500">No transactions found</div>}
      {loading && <div className="space-y-4">
        <TransactionSummaryItemSkeleton />
        <TransactionItemSkeleton />
        <TransactionItemSkeleton />
        <TransactionItemSkeleton />
        <TransactionItemSkeleton />
      </div>}
      <div className="flex justify-center">
        {!disabled && <Button variant="ghost" onClick={handleClick} disabled={loading}>
          <div className="flex items-center space-x-1">
            {loading && <Loader className="animate-spin" />}
            <div>Load More</div>
          </div>
        </Button>}
      </div>
    </div>
  )
}