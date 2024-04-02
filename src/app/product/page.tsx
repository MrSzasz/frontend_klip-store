'use client'

import ProductContent from '@/components/Pages/Product/ProductContent'
import Image from 'next/image'
import { Suspense } from 'react'

const page = (): React.ReactElement => {
  return (
    <Suspense
      fallback={
        <div className="relative h-24 w-3/4 animate-pulse">
          <Image alt="Store logo" fill src="/logo.svg" />
        </div>
      }
    >
      <ProductContent />
    </Suspense>
  )
}

export default page
