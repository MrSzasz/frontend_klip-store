import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { LuArrowRight } from 'react-icons/lu'

const NoItemsCart = (): React.ReactElement => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 text-white">
      <h1 className="text-center text-3xl font-bold">
        You have no items in your cart
      </h1>
      <Button
        asChild
        variant="secondary"
        className="flex w-fit items-center justify-center gap-2 rounded-full"
      >
        <Link href="/products">
          Go to shop
          <LuArrowRight size="1em" />
        </Link>
      </Button>
    </section>
  )
}

export default NoItemsCart
