import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from 'next/image'

const Carousel01 = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }),
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
            <div className="embla__slide flex items-center justify-center h-full w-full relative">
              <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/path/to/your/video.mp4"
                autoPlay
                loop
                muted
              />
              <div className="relative z-10 text-center p-4">
                <h1 className="text-4xl font-bold mb-4 text-white">
                  Welcome to Boca Design Studio
                </h1>
                <p className="text-lg text-white">
                  Creating captivating and innovative designs that leave a lasting impression.
                </p>
              </div>
            </div>
            <div className="embla__slide flex items-center justify-center h-full w-full relative">
              <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/path/to/your/image1.jpg"
                alt="Slide 2 Background"
              />
              <div className="relative z-10 text-center p-4">
                <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">
                  Innovative Solutions
                </h1>
                <p className="text-lg text-black dark:text-white">
                  Transforming your ideas into stunning visual realities.
                </p>
              </div>
            </div>
            <div className="embla__slide flex items-center justify-center h-full w-full relative">
              <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/path/to/your/image2.jpg"
                alt="Slide 3 Background"
              />
              <div className="relative z-10 text-center p-4">
                <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">
                  Creative Excellence
                </h1>
                <p className="text-lg text-black dark:text-white">
                  Delivering exceptional design solutions for every project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel01;
