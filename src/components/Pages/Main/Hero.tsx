'use client'

import Image from 'next/image'
import { Button } from '../../ui/button'
import { LuArrowRight } from 'react-icons/lu'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Hero = (): React.ReactElement => {
  return (
    <section className="container grid h-screen items-center gap-6 bg-primary pb-8 pt-navbar md:py-10">
      <div className="relative grid h-3/4 items-center overflow-hidden rounded-3xl bg-white px-8 py-6 md:grid-cols-2 md:bg-none md:px-16 md:py-10">
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
          className="absolute -right-1/4 bottom-0 h-3/5 w-3/5 md:hidden"
        >
          <Image
            src="/hero/girl.png"
            alt="Hero image"
            fill
            className="object-contain"
          />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            translateX: -100,
          }}
          animate={{
            translateX: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: 0.25,
          }}
          className="flex flex-col gap-6"
        >
          <h1 className="text-6xl font-bold md:text-7xl">
            Welcome to Klip Store
          </h1>
          <p className="text-balance text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            nostrum nemo. Quidem eius officiis neque.
          </p>
          <Button
            asChild
            className="flex w-fit items-center justify-center gap-2 rounded-full"
          >
            <Link href="/products">
              Shop now
              <LuArrowRight size="1em" />
            </Link>
          </Button>
        </motion.div>
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
          className="relative hidden h-full w-auto md:block"
        >
          <Image
            src="/hero/girl.png"
            fill
            className="rounded-3xl bg-secondary object-contain pt-4"
            alt="Hero image"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
