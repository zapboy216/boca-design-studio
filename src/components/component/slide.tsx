
import Link from "next/link"

export function Slide() {
  return (
    <section className="h-56 w-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Elevate Your Software with Our Expertise
          </h2>
          <p className="text-lg md:text-xl text-secondary-foreground">
            Unlock the full potential of your digital solutions with our cutting-edge software development services.
          </p>
        </div>
        <Link
          href="#"
          className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Get Started
        </Link>
      </div>
    </section>
  )
}
