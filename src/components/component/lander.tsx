
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import Image from 'next/image'

export function Lander() {
  return (
    <div className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden">
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-50 backdrop-blur-lg" />
        <div className="relative z-10 max-w-4xl px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
            Elevate Your Software Development
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-secondary-foreground mb-8">
            Unleash your teams potential with our cutting-edge solutions.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg">Learn More</Button>
            <Button variant="secondary" size="lg">
              Get Started
            </Button>
          </div>
        </div>
      </div>
      <Carousel className="w-full h-full">
        <CarouselContent>
          <CarouselItem>
            <Image
              src="/placeholder.svg"
              alt="Carousel Image 1"
              className="w-full h-full object-cover opacity-80 transition-opacity duration-1000 ease-in-out"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/placeholder.svg"
              alt="Carousel Image 2"
              className="w-full h-full object-cover opacity-80 transition-opacity duration-1000 ease-in-out"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/placeholder.svg"
              alt="Carousel Image 3"
              className="w-full h-full object-cover opacity-80 transition-opacity duration-1000 ease-in-out"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 z-10 text-primary-foreground hover:text-primary transition-colors">
     
        </CarouselPrevious>
        <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 z-10 text-primary-foreground hover:text-primary transition-colors">
          
        </CarouselNext>
      </Carousel>
    </div>
  )
}


