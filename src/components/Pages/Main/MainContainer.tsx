import Hero from '@/components/Pages/Main/Hero'
import BentoCategories from './BentoCategories'
import PressReview from './PressReview'
import Banner from './Banner'

const Main = (): React.ReactElement => {
  return (
    <main>
      <Hero />
      <section className="flex h-56 items-center justify-center">
        <p className="text-3xl font-semibold">A shop for everyone</p>
      </section>
      <BentoCategories />
      <Banner />
      <PressReview />
    </main>
  )
}

export default Main
