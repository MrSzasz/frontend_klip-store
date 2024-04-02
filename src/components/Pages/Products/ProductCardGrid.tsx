import Image from 'next/image'
import Link from 'next/link'

const ProductCardGrid = ({
  product,
}: {
  product: Product
}): React.ReactElement => {
  return (
    <Link
      href={'/product?id=' + product.id}
      className="group/card flex cursor-pointer flex-col border-4 border-white p-8 transition-colors hover:border-primary hover:text-white hover:shadow-lg"
    >
      <div className="relative aspect-square">
        <Image
          src={product.image}
          className="h-full w-full object-contain"
          alt={`${product.title} image`}
          fill
        />
      </div>
      <div className="text-black transition-colors group-hover/card:text-primary">
        <p className="font-bold">{product.title}</p>
        <p className="text-sm font-semibold text-primary">${product.price}</p>
      </div>
    </Link>
  )
}

export default ProductCardGrid
