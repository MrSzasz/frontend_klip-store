'use client'

import ProductCardGrid from './ProductCardGrid'
import { useEffect, useState } from 'react'
import ProductCardColumn from './ProductCardColumn'
import ProductsOrder from './ProductsOrder'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useFetch } from '@/hooks/useFetch'
import { useSearchParams } from 'next/navigation'
import { Skeleton } from '@/components/ui/skeleton'

const ProductsShowcase = (): React.ReactElement => {
  const [gridStyle, setGridStyle] = useState(true)
  const [category, setCategory] = useState('')
  const [sort, setSort] = useState('desc')
  const searchParams = useSearchParams()
  console.log(searchParams.get('category'))
  const { data: products, isLoading } = useFetch(
    'https://fakestoreapi.com/products',
  )
  const [parent] = useAutoAnimate()

  const toggleGridStyle = (): void => {
    setGridStyle(!gridStyle)
  }

  const handleSort = (sortMode: string): void => {
    setSort(sortMode)
  }

  useEffect(() => {
    const paramsFromUrl = searchParams.get('category') ?? ''

    setCategory(paramsFromUrl)
  }, [searchParams])

  const gridStyleClass = gridStyle
    ? 'grid grid-cols-2 md:grid-cols-4 bg-white'
    : 'grid grid-cols-1 bg-white'

  return (
    <section className="min-h-screen w-full">
      <ProductsOrder toggleGridStyle={toggleGridStyle} sortFn={handleSort} />
      <div ref={parent} className={gridStyleClass}>
        {isLoading
          ? [...Array(5)].map((_, index) => (
              <div key={index} className="p-8">
                <div className="relative flex aspect-square items-center justify-center pb-2">
                  <Skeleton className="h-full w-full" />
                </div>
                <div className="space-y-4 text-black">
                  <Skeleton className="h-4 w-48" />
                  <Skeleton className="h-4 w-12" />
                </div>
              </div>
            ))
          : category === ''
            ? (products as Product[])
                .sort((a, b) => {
                  switch (sort) {
                    case 'asc':
                      return a.title < b.title ? -1 : 1
                    case 'des':
                      return b.title < a.title ? -1 : 1
                    case 'minPrice':
                      return a.price - b.price
                    case 'maxPrice':
                      return b.price - a.price
                    default:
                      return 0
                  }
                })
                .map((prod, index) =>
                  gridStyle ? (
                    <ProductCardGrid key={index} product={prod} />
                  ) : (
                    <ProductCardColumn key={index} product={prod} />
                  ),
                )
            : (products as Product[])
                .filter(prod => prod.category.includes(category))
                .sort((a, b) => {
                  switch (sort) {
                    case 'asc':
                      return a.title < b.title ? -1 : 1
                    case 'des':
                      return b.title < a.title ? -1 : 1
                    case 'minPrice':
                      return a.price - b.price
                    case 'maxPrice':
                      return b.price - a.price
                    default:
                      return 0
                  }
                })
                .map((prod, index) =>
                  gridStyle ? (
                    <ProductCardGrid key={index} product={prod} />
                  ) : (
                    <ProductCardColumn key={index} product={prod} />
                  ),
                )}
      </div>
    </section>
  )
}

export default ProductsShowcase
