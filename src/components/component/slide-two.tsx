
import Link from "next/link"

export function SlideTwo() {
  return (
    <section className="h-56 w-full bg-gradient-to-r from-[#0077b6] to-[#00a8e8] flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left max-w-md">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Elevate Your Software Development</h2>
          <p className="text-lg text-white/80 mb-8">
            Partner with our expert team and unlock the full potential of your software projects.
          </p>
        </div>
        <Link
          href="#"
          className="inline-flex items-center justify-center bg-white text-[#0077b6] font-medium text-lg rounded-md px-8 py-3 transition-colors hover:bg-[#00a8e8] hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0077b6]"
          prefetch={false}
        >
          Get Started
        </Link>
      </div>
    </section>
  )
}