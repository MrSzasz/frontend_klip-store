'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const BentoCategories = (): React.ReactElement => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: 'linear',
        delayChildren: 0.3,
        staggerChildren: 0.4,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  const categories = [
    {
      title: 'Electronics',
      image: '/bento/electronics.webp',
      url: '/products?category=electronics',
    },
    {
      title: 'Jewelry',
      image: '/bento/jewelry.webp',
      url: '/products?category=jewelry',
    },
    {
      title: 'Men Clothing',
      image: '/bento/men-clothing.webp',
      url: '/products?category=men-clothing',
    },
    {
      title: 'Women Clothing',
      image: '/bento/women-clothing.webp',
      url: '/products?category=women-clothing',
    },
    {
      title: 'All',
      image: '/bento/all.webp',
      url: '/products',
    },
  ]

  return (
    <section className="container h-fit py-4">
      <motion.div
        className="grid auto-rows-[192px] grid-cols-1 gap-4 md:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {categories.map((category, i) => (
          <motion.div
            variants={item}
            key={i}
            className={`group/link relative row-span-1 overflow-hidden rounded-xl p-4 transition-shadow hover:shadow-lg dark:bg-neutral-900 ${
              i === 3 || i === 6 ? 'md:col-span-2' : ''
            }`}
          >
            <Link href={category.url}>
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="rounded-xl object-cover transition-transform group-hover/link:scale-105"
              />
              <div className="font absolute inset-0 flex items-center justify-center transition-colors hover:bg-secondary/25 hover:backdrop-blur-md">
                <h3 className="text-3xl font-bold text-white drop-shadow-lg">
                  {category.title}
                </h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default BentoCategories
