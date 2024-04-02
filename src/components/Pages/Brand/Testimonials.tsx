import Image from 'next/image'

const Testimonials = (): React.ReactElement => {
  return (
    <section className="container bg-primary py-8">
      <h5 className="pb-8 pt-4 text-3xl font-semibold text-white">
        Testimonials
      </h5>
      <div className="mx-auto flex flex-col items-center justify-center gap-8 md:flex-row">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="relative w-80">
            <div className="relative h-52 w-40">
              <Image
                src="https://100k-faces.glitch.me/random-image"
                className="object-cover grayscale"
                fill
                alt="image"
              />
              <div className="absolute left-3/4 top-1/2 max-h-40 w-48 -translate-y-1/2 bg-white p-4">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate aut officia itaque accusamus quam
                </p>
                <small className="text-gray-500">
                  <span className="text-lg italic">&quot;</span> Name Surname
                  <span className="text-lg italic">&quot;</span>
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
