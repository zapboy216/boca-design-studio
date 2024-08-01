
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, CarouselIndicators, CarouselIndicator } from "@/components/ui/carousel"
import Link from "next/link"
import  Image  from 'next/image';

export function Presentation() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Carousel className="h-full w-full">
        <CarouselContent>
          <CarouselItem>
            <div className="relative h-full w-full">
              <Image
                src="/placeholder.svg"
                width={1920}
                height={1080}
                alt="Slide 1"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-black/50 p-8 text-center text-white">
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Revolutionize Your Business
                </h2>
                <p className="max-w-xl text-lg md:text-xl">
                  Our cutting-edge software solutions empower your team to achieve more, faster.
                </p>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary/50"
                  prefetch={false}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative h-full w-full">
              <Image
                src="/placeholder.svg"
                width={1920}
                height={1080}
                alt="Slide 2"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-black/50 p-8 text-center text-white">
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Streamline Your Workflows</h2>
                <p className="max-w-xl text-lg md:text-xl">
                  Our intuitive tools and automation features help you work smarter, not harder.
                </p>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary/50"
                  prefetch={false}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative h-full w-full">
              <Image
                src="/placeholder.svg"
                width={1920}
                height={1080}
                alt="Slide 3"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-black/50 p-8 text-center text-white">
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Empower Your Team</h2>
                <p className="max-w-xl text-lg md:text-xl">
                  Our collaborative tools and real-time insights help your team work together seamlessly.
                </p>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary/50"
                  prefetch={false}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 space-x-2">
          <div />
          <div />
          <div />
        </div>
      </Carousel>
    </div>
  )
}






