
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoscroll from "embla-carousel-auto-scroll";
import { CtaOne } from '@/components/component/cta-one'
import { CtaTwo } from '@/components/component/cta-two'
import { CtaThree } from '@/components/component/cta-three'

const Carousel03 = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoscroll({ delay: 2000 }),
  ]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <>

      <div className="bg-neutral-100 dark:bg-neutral-900">
        <div
          className="embla border max-wlg mt-10 mb-10 h-56"
          ref={emblaRef}
        >
          <div className="embla__container h-full my-2 mx-3 py-2 px-3">
            <div className="text-black dark:text-white embla__slide flex items-center justify-center">
              <CtaOne />
            </div>
            <div className="text-black dark:text-white embla__slide flex items-center justify-center">
             <CtaTwo />
            </div>
            <div className="text-black dark:text-white embla__slide flex items-center justify-center">
              <CtaThree />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel03;
