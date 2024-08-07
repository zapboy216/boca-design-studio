
import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Slide } from '@/components/component/slide'
import { SlideTwo } from '@/components/component/slide-two'
import { SlideThree } from '@/components/component/slide-three'

const Carousel02 = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);
  return (
    <>
     
      <div className="bg-neutral-100 dark:bg-neutral-900">
        <div className="embla">
          <div
            className="embla__viewport border max-wlg mt-0 mb-0 mx-auto h-56"
            ref={emblaRef}
          >
            <div className="embla__container h-full">
              <div className="dark:text-white embla__slide flex irems-center justify-center">
                <Slide />
              </div>
              <div className="dark:text-white embla__slide flex irems-center justify-center">
                <SlideTwo />
              </div>
              <div className="dark:text-white embla__slide flex irems-center justify-center">
                <SlideThree />
              </div>
            </div>
          </div>
          <div className=" ">
            <button
              className="dark:text-white bg-neutral-300 dark:bg-neutral-700 py-1 px-2"
              onClick={scrollPrev}
            >
              Prev
            </button>
            <button
              className="dark:text-white bg-neutral-300 dark:bg-neutral-700 py-1 px-2 my-2 mx-4"
              onClick={scrollNext}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel02;
