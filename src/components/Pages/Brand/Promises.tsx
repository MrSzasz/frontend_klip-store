import Image from 'next/image'
import PromisesIcons from './PromisesIcons'

const Promises = (): React.ReactElement => {
  return (
    <section className="grid grid-rows-[fit-content_1fr]">
      <PromisesIcons />
      <div className="flex flex-col md:flex-row">
        <div className="relative h-80 md:h-auto md:flex-1">
          <Image
            src="/brand/bg2.webp"
            fill
            alt="image"
            className="object-cover object-bottom"
          />
        </div>
        <div className="flex flex-col gap-4 px-8 py-16 md:w-1/3">
          <h4 className="text-4xl font-semibold">Our values as a team</h4>
          <p className="text-balance">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
            totam laboriosam facere neque consequatur architecto officiis
            dignissimos mollitia, obcaecati et fugit libero amet rem, explicabo
            vitae illum recusandae magni, error quaerat itaque suscipit qui?
            Reprehenderit iusto omnis minus. Magnam, debitis?
          </p>
        </div>
      </div>
    </section>
  )
}

export default Promises
