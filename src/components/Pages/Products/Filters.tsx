import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import Link from 'next/link'
import { LuFilterX } from 'react-icons/lu'

const Filters = (): React.ReactElement => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="w-full text-3xl font-bold">Filters</h2>
        <Button asChild variant="ghost" className="w-fit">
          <Link href="/products">
            <LuFilterX size="1.5em" />
          </Link>
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        <Collapsible open>
          <CollapsibleTrigger className="w-full border-b border-white px-2 py-2 text-start font-semibold transition-colors hover:bg-secondary hover:text-black">
            Categories
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="flex flex-col py-2">
              <Link
                className="h-full px-2 py-2 transition-all hover:bg-secondary hover:font-semibold hover:text-black"
                href="/products?category=electronics"
              >
                Electronics
              </Link>
              <Link
                className="h-full px-2 py-2 transition-all hover:bg-secondary hover:font-semibold hover:text-black"
                href="/products?category=jewelery"
              >
                Jewelry
              </Link>
              <Link
                className="h-full px-2 py-2 transition-all hover:bg-secondary hover:font-semibold hover:text-black"
                href="/products?category=men's clothing"
              >
                Men&apos;s Clothing
              </Link>
              <Link
                className="h-full px-2 py-2 transition-all hover:bg-secondary hover:font-semibold hover:text-black"
                href="/products?category=women's clothing"
              >
                Women&apos;s Clothing
              </Link>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </>
  )
}

export default Filters
