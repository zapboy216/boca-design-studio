
import Link from "next/link"

export function Cta() {
  return (
    <section id="call-to-action" className="w-full py-20 md:py-32 bg-[url('/bg-pattern.svg')] bg-cover bg-center bg-no-repeat">
      <div className="container px-4 md:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Elevate Your Software Development with Our Expertise
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            From custom web applications to scalable cloud infrastructure, our team of seasoned developers delivers
            innovative solutions that drive your business forward.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Get a Quote
            </Link>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
