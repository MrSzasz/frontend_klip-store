const Hero = (): React.ReactElement => {
  return (
    <section className="flex h-screen flex-col items-center bg-[url('/brand/bg.webp')] pt-[calc(10%+var(--navbar-height))]">
      <h1 className="pt-navbar text-4xl font-bold md:pt-0">
        Dreamed by yourself
      </h1>
      <h2 className="text-3xl font-semibold">Make it real with us</h2>
    </section>
  )
}

export default Hero
