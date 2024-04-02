import Hero from '@/components/Pages/Brand/Hero'
import Promises from '@/components/Pages/Brand/Promises'
import Testimonials from '@/components/Pages/Brand/Testimonials'

const page = (): React.ReactElement => {
  return (
    <main>
      <Hero />
      <Promises />
      <Testimonials />
    </main>
  )
}

export default page
