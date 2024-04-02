import Filters from '@/components/Pages/Products/Filters'
import ProductsShowcase from '@/components/Pages/Products/ProductsShowcase'

const page = (): React.ReactElement => {
  return (
    <main className="grid h-fit w-full bg-primary pt-navbar md:grid-cols-[20%_auto]">
      <aside className="hidden h-fit flex-col justify-center gap-4 bg-primary p-4 text-white md:flex">
        <Filters />
      </aside>
      <ProductsShowcase />
    </main>
  )
}

export default page
