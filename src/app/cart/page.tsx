'use client'

import NoItemsCart from '@/components/Pages/Cart/NoItemsCart'
import CartItemsContent from '@/components/Pages/Cart/CartItemsContent'
import { useCartStore } from '@/store/cart'
import Image from 'next/image'

const page = (): React.ReactElement => {
  const { cart, loadingState } = useCartStore()

  return (
    <main className="container flex flex-col items-center justify-center bg-primary px-0 pt-navbar">
      <div className="container flex h-full flex-col items-center justify-center gap-4">
        {loadingState ? (
          <div className="relative h-24 w-3/4 animate-pulse">
            <Image alt="Store logo" fill src="/logo.svg" />
          </div>
        ) : cart.length === 0 ? (
          <NoItemsCart />
        ) : (
          <CartItemsContent />
        )}
      </div>
    </main>
  )
}

export default page
