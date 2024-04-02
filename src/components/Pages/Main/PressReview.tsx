'use client'

import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

const PressReview = (): React.ReactElement => {
  const pressReviewsArray = [
    {
      id: 1,
      review: 'The best quality in the industry',
      pressLogo: '/press/runway.webp',
      pressBrand: 'Runway',
      pressWriter: 'Emily Charlton',
    },
    {
      id: 2,
      review:
        "Fashionista Magazine highlights Klip Store's diverse range of clothing and accessories, noting its intuitive interface and trend-setting offerings",
      pressLogo: '/press/fashionista.svg',
      pressBrand: 'Fashionista',
      pressWriter: 'Diane Davis',
    },
    {
      id: 3,
      review:
        "In a nod to Klip Store's fashion-forward approach, Glamour Magazine commends its seamless integration of clothing and accessories, catering to style-savvy shoppers",
      pressLogo: '/press/glamour.svg',
      pressBrand: 'Glamour',
      pressWriter: 'Matthew Schilling',
    },
    {
      id: 4,
      review:
        'Vogue lauds Klip Store for its extensive collection of clothing and accessories, delivering a streamlined shopping experience for fashion enthusiasts.',
      pressLogo: '/press/vogue.svg',
      pressBrand: 'Vogue',
      pressWriter: 'Cecilia Puckett',
    },
    {
      id: 5,
      review:
        "We praise Klip Store's blend of clothing and accessories, celebrating its curated selection and user-friendly platform",
      pressLogo: '/press/nyt.svg',
      pressBrand: 'The New York Times',
      pressWriter: 'Andrea Sachs',
    },
  ]

  return (
    <section className="container grid w-[calc(100vw-6rem)] items-center justify-center pb-2 pt-8 md:h-[75vh] md:w-full md:py-12">
      <h3 className="pb-8 text-center text-xl font-bold md:pb-0">
        What the press says
      </h3>
      <div className="container">
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className="w-[calc(100vw-6rem)] md:w-full">
            {pressReviewsArray.map(pressReview => (
              <CarouselItem key={pressReview.id}>
                <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-8 md:w-3/4">
                  <h4 className="text-balance text-center text-lg md:text-3xl">
                    <span className="text-2xl italic md:text-4xl">&quot;</span>{' '}
                    {pressReview.review}
                    <span className="text-2xl italic md:text-4xl">&quot;</span>
                  </h4>
                  <div className="flex flex-col items-center justify-center">
                    <small>{pressReview.pressWriter}</small>
                    <div className="relative h-20 w-32 md:h-32 md:w-48">
                      <Image
                        className="object-contain"
                        src={pressReview.pressLogo}
                        fill
                        alt={pressReview.pressBrand}
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}

export default PressReview
