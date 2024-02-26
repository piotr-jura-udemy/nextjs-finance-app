import Skeleton from "@/components/skeleton"
import TransactionSummaryItemSkeleton from '@/components/transaction-summary-item-skeleton';
import TransactionItemSkeleton from '@/components/transaction-item-skeleton';

export default function TransactionListFallback() {
  return <div className="space-y-8">
    <div className="space-y-4">
      <TransactionSummaryItemSkeleton />
      <TransactionItemSkeleton />
      <TransactionItemSkeleton />
      <TransactionItemSkeleton />
      <TransactionItemSkeleton />
    </div>
    
    <div className="space-y-4">
      <TransactionSummaryItemSkeleton />
      <TransactionItemSkeleton />
      <TransactionItemSkeleton />
      <TransactionItemSkeleton />
      <TransactionItemSkeleton />
    </div>
  </div>
}



