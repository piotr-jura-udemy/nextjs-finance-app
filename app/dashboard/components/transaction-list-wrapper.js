import { fetchTransactions } from '@/lib/actions'
import TransactionList from './transaction-list'

export default async function TransactionListWrapper({range}) {
  const transactions = await fetchTransactions(range, 0, 20)
  return <TransactionList range={range} limit={20} initialTransactions={transactions} key={JSON.stringify(transactions)} />
}