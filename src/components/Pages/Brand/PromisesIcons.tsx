'use client'

import { motion } from 'framer-motion'
import { LuHeartHandshake, LuPackage, LuRecycle, LuTruck } from 'react-icons/lu'

const PromisesIcons = (): React.ReactElement => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: 'linear',
        delayChildren: 0.5,
        staggerChildren: 0.5,
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

  return (
    <div className="container py-8">
      <h3 className="pb-4 text-center text-3xl font-semibold">Our promises</h3>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="m-auto grid w-2/3 grid-cols-2 items-center justify-between gap-6 py-4 text-center md:flex md:text-start "
      >
        <motion.div
          variants={item}
          className="flex flex-col items-center justify-center"
        >
          <LuRecycle size="3em" color="black" />
          <small>Lorem, ipsum dolor.</small>
        </motion.div>
        <motion.div
          variants={item}
          className="flex flex-col items-center justify-center"
        >
          <LuPackage size="3em" color="black" />
          <small>Lorem, ipsum dolor.</small>
        </motion.div>
        <motion.div
          variants={item}
          className="flex flex-col items-center justify-center"
        >
          <LuTruck size="3em" color="black" />
          <small>Lorem, ipsum dolor.</small>
        </motion.div>
        <motion.div
          variants={item}
          className="flex flex-col items-center justify-center"
        >
          <LuHeartHandshake size="3em" color="black" />
          <small>Lorem, ipsum dolor.</small>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default PromisesIcons
