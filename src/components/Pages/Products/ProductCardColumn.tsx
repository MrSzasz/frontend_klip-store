import Image from 'next/image'
import Link from 'next/link'

const ProductCardColumn = ({
  product,
}: {
  product: Product
}): React.ReactElement => {
  return (
    <Link
      href={'/product?id=' + product.id}
      className="group/card flex cursor-pointer gap-4 border-4 border-white p-4 transition-colors hover:border-primary hover:shadow-lg"
    >
      <div className="relative aspect-square h-20">
        <Image
          src={product.image}
          className="h-full w-full object-contain"
          alt={`${product.title} image`}
          fill
        />
      </div>
      <div className="flex w-full items-center justify-between">
        <div>
          <p className="font-bold transition-colors group-hover/card:text-primary">
            {product.title}
          </p>
          <small className=" font-semibold text-gray-400 transition-colors group-hover/card:text-primary">
            {product.category}
          </small>
        </div>
        <p className="text-lg font-semibold text-primary ">${product.price}</p>
      </div>
    </Link>
  )
}

export default ProductCardColumn
