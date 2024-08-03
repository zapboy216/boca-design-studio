import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Carousel01 = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000 }),
  ]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <>
      <div className="bg-neutral-100 dark:bg-neutral-900 h-screen w-screen">
        <div className="embla h-full w-full" ref={emblaRef}>
          <div className="embla__container flex h-full w-full">
            <div className="text-black dark:text-white embla__slide flex items-center justify-center h-full w-full bg-red-500">
              Slide 1
            </div>
            <div className="text-black dark:text-white embla__slide flex items-center justify-center h-full w-full bg-green-500">
              Slide 2
            </div>
            <div className="text-black dark:text-white embla__slide flex items-center justify-center h-full w-full bg-blue-500">
              Slide 3
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel01;
