import Skeleton from './skeleton';

export default function TransactionSummaryItemSkeleton() {
  return <div className="flex space-x-4">
    <div className="grow">
      <Skeleton />
    </div>

    <div className="min-w-[70px]"><Skeleton /></div>
    <div className="min-w-[50px]"></div>
  </div>
}