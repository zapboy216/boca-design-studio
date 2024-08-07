
export function About() {
  return (
    <div id="about-us" className="flex flex-col">
      <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
        <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <img
            src="/placeholder.svg"
            width="800"
            height="600"
            alt="Hero Image"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl">Acme Florida</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Acme Florida is a leading provider of innovative solutions for businesses in the Sunshine State. With a
                focus on cutting-edge technology and exceptional customer service, we've become the trusted partner for
                companies of all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-6 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Awards &amp; Accomplishments
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Acme Florida has been recognized for its excellence in technology, innovation, and customer service.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            <div className="flex flex-col items-center justify-center space-y-2">
              <img
                src="/placeholder.svg"
                width="100"
                height="100"
                alt="Award Logo"
                className="aspect-square overflow-hidden rounded-lg object-contain"
              />
              <p className="text-sm text-muted-foreground">Best Tech Company</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <img
                src="/placeholder.svg"
                width="100"
                height="100"
                alt="Award Logo"
                className="aspect-square overflow-hidden rounded-lg object-contain"
              />
              <p className="text-sm text-muted-foreground">Innovation Award</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <img
                src="/placeholder.svg"
                width="100"
                height="100"
                alt="Award Logo"
                className="aspect-square overflow-hidden rounded-lg object-contain"
              />
              <p className="text-sm text-muted-foreground">Customer Service Excellence</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <img
                src="/placeholder.svg"
                width="100"
                height="100"
                alt="Award Logo"
                className="aspect-square overflow-hidden rounded-lg object-contain"
              />
              <p className="text-sm text-muted-foreground">Best Workplace</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <img
                src="/placeholder.svg"
                width="100"
                height="100"
                alt="Award Logo"
                className="aspect-square overflow-hidden rounded-lg object-contain"
              />
              <p className="text-sm text-muted-foreground">Sustainability Leader</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <img
                src="/placeholder.svg"
                width="100"
                height="100"
                alt="Award Logo"
                className="aspect-square overflow-hidden rounded-lg object-contain"
              />
              <p className="text-sm text-muted-foreground">Fastest Growing Company</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Located in Beautiful Florida
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Acme Florida is headquartered in the heart of the Sunshine State, surrounded by stunning natural beauty
              and a thriving business community.
            </p>
          </div>
          <div className="grid gap-6">
            <img
              src="/placeholder.svg"
              width="800"
              height="600"
              alt="Florida Landscape"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
            <div className="rounded-xl overflow-hidden">
              <div />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
