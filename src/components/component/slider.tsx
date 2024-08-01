import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import  Image  from 'next/image';
import { useTranslations } from 'next-intl'

export function Slider() {
  const t = useTranslations('Slider');
  return (
    
    <div className="w-full h-screen relative overflow-hidden">
      <Carousel
         opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          <CarouselItem>
            <Image
              src={t('ImageUrl')}
              alt="Design Work 1"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </CarouselItem>
        
          <CarouselItem>
            <Image
              src={t('ImageUrl2')}
              alt="Design Work 2"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </CarouselItem>
         
          <CarouselItem>
            <Image
              src={t('ImageUrl3')}
              alt="Design Work 3"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </CarouselItem>
        
        
        </CarouselContent>
      </Carousel>
    </div>
  )
}
