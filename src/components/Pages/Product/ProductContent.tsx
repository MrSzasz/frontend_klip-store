'use client'

import { Button } from '@/components/ui/button'
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'
import { useFetch } from '@/hooks/useFetch'
import { useCartStore } from '@/store/cart'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { motion } from 'framer-motion'

const ProductContent = (): React.ReactElement => {
  const [quantity, setQuantity] = useState(1)
  const { toast } = useToast()
  const searchParams = useSearchParams()

  const { add } = useCartStore()
  const { data: product, isSuccess } = useFetch(
    `https://fakestoreapi.com/products/${searchParams.get('id')}`,
  )
  return (
    <main className="container flex h-fit min-h-screen flex-col items-center justify-center gap-4 bg-primary py-navbar">
      {isSuccess ? (
        <section className="grid min-h-screen items-center justify-center gap-4 md:grid-cols-2">
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            className="flex h-[50vh] w-full items-center justify-center bg-product-svg bg-contain bg-center bg-no-repeat md:h-[75vh]"
          >
            <div className="relative h-1/2 w-1/2">
              <Image
                src={(product as Product).image}
                fill
                alt="Product image"
                className="object-contain"
              />
            </div>
          </motion.div>
          <div className="flex flex-col gap-4 text-white">
            <div>
              <h1 className="text-4xl font-black md:text-6xl">
                {(product as Product).title}
              </h1>
              <h2 className="text-xl font-semibold">
                ${(product as Product).price}
              </h2>
            </div>
            <p className="w-3/4">{(product as Product).description}</p>
            <div className="flex gap-4">
              <Select
                defaultValue={'1'}
                onValueChange={e => {
                  setQuantity(Number(e))
                }}
              >
                <SelectTrigger className="w-24 border-none bg-white text-black">
                  <SelectValue placeholder="1" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="6">6</SelectItem>
                  <SelectItem value="7">7</SelectItem>
                  <SelectItem value="8">8</SelectItem>
                  <SelectItem value="9">9</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                </SelectContent>
              </Select>

              <Button
                onClick={() => {
                  try {
                    if (product === undefined) {
                      throw new Error('Product not found')
                    }

                    add({
                      quantity,
                      id: (product as Product).id,
                      title: (product as Product).title,
                      price: (product as Product).price,
                      description: (product as Product).description,
                      category: (product as Product).category,
                      image: (product as Product).image,
                      rating: (product as Product).rating,
                    })
                    toast({
                      title: 'Product added to cart',
                      description: 'Checkout your cart to complete your order',
                      duration: 3500,
                      action: (
                        <Button
                          variant="default"
                          asChild
                          className="w-fit rounded-full"
                        >
                          <ToastAction altText="View cart">
                            <Link href="/cart">View cart</Link>
                          </ToastAction>
                        </Button>
                      ),
                    })
                  } catch (error) {
                    toast({
                      title: 'Something went wrong',
                      variant: 'destructive',
                      duration: 3500,
                    })
                  }
                }}
                variant="secondary"
                className="w-fit rounded-full"
              >
                Add to cart
              </Button>
            </div>
            <small>Tip: if you need more than 10 units, contact us.</small>
          </div>
        </section>
      ) : (
        <div className="relative h-24 w-3/4 animate-pulse">
          <Image alt="Store logo" fill src="/logo.svg" />
        </div>
      )}
    </main>
  )
}

export default ProductContent
