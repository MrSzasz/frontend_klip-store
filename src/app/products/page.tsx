import Filters from '@/components/Pages/Products/Filters'
import ProductsShowcase from '@/components/Pages/Products/ProductsShowcase'
import { Skeleton } from '@/components/ui/skeleton'
import { Suspense } from 'react'

const page = (): React.ReactElement => {
  return (
    <main className="grid h-fit w-full bg-primary pt-navbar md:grid-cols-[20%_auto]">
      <aside className="hidden h-fit flex-col justify-center gap-4 bg-primary p-4 text-white md:flex">
        <Filters />
      </aside>
      <Suspense
        fallback={[...Array(5)].map((_, index) => (
          <div key={index} className="p-8">
            <div className="relative flex aspect-square items-center justify-center pb-2">
              <Skeleton className="h-full w-full" />
            </div>
            <div className="space-y-4 text-black">
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-4 w-12" />
            </div>
          </div>
        ))}
      >
        <ProductsShowcase />
      </Suspense>
    </main>
  )
}

export default page
