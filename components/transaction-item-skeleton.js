import Skeleton from './skeleton';

export default function TransactionItemSkeleton() {
  return <div className="w-full flex items-center space-x-4">
    <div className="flex items-center grow">
      <Skeleton />
    </div>
    <div className="min-w-[150px] items-center hidden md:flex">
      <Skeleton />
    </div>
    <div className="min-w-[70px] text-right"><Skeleton /></div>
    <div className="min-w-[50px] flex justify-end"><Skeleton /></div>
  </div>
}