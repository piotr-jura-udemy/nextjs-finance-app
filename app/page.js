import { sizes, variants } from "@/lib/variants";
import Link from "next/link"

export default function Home() {
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] py-40">
      <div className="flex flex-col space-y-8 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Welcome!
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Navigate to the dashboard!
        </p>
        <div className="w-full">
          <Link href="/login" className={`${variants['default']} ${sizes['sm']}`}>Go to dashboard</Link>
        </div>
      </div>
    </div>
  );
}
