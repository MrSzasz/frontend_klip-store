const Banner = (): React.ReactElement => {
  return (
    <section className="container flex h-fit min-h-56 flex-col items-center justify-center gap-8 bg-primary py-10 text-center md:flex-row md:justify-between md:py-0 md:text-start">
      <p className="text-center text-2xl font-bold text-white md:w-1/4 md:text-3xl">
        Free shipping on orders over $250
      </p>
      <p className="text-balance text-white md:w-1/2 md:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis molestias
        aspernatur sed nulla cupiditate, dolore laudantium ad totam animi nisi
        sapiente, laborum iusto sequi mollitia?
      </p>
    </section>
  )
}

export default Banner
