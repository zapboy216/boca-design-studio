
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Release() {
  return (
    <div id="future-software-release" className="bg-gradient-to-b from-[#0B0D21] to-[#1A1C36] text-white">
      <section className="container mx-auto py-20 px-4 md:px-6 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Unveiling the Future</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Get ready for our groundbreaking software release, packed with innovative features that will revolutionize
              your digital experience.
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary/50"
              prefetch={false}
            >
              Learn More
            </Link>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2B2E4A] to-[#3C3F5E] rounded-2xl blur-xl opacity-50" />
            <div className="relative z-10 bg-[#2B2E4A] rounded-2xl p-8 md:p-12 space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <CalendarIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Release Date</h3>
                  <p className="text-muted-foreground">September 15, 2024</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <RocketIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Key Features</h3>
                  <p className="text-muted-foreground">
                    AI-powered automation, cloud-native architecture, and seamless integrations.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <ZapIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Performance Boost</h3>
                  <p className="text-muted-foreground">Up to 50% faster processing and 30% improved response times.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-20 px-4 md:px-6 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Release Timeline</h2>
            <div className="relative pl-6 before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-muted-foreground/20 space-y-8">
              <div className="grid grid-cols-[auto_1fr] items-start gap-4 relative">
                <div>
                  <h3 className="text-xl font-bold">Beta Release</h3>
                  <p className="text-muted-foreground">July 1, 2024</p>
                </div>
                <div className="col-start-2 text-muted-foreground">
                  Gather feedback and refine the product based on user insights.
                </div>
              </div>
              <div className="grid grid-cols-[auto_1fr] items-start gap-4 relative">
                <div>
                  <h3 className="text-xl font-bold">Feature Freeze</h3>
                  <p className="text-muted-foreground">August 15, 2024</p>
                </div>
                <div className="col-start-2 text-muted-foreground">
                  Finalize the feature set and prepare for the final release.
                </div>
              </div>
              <div className="grid grid-cols-[auto_1fr] items-start gap-4 relative">
                <div>
                  <h3 className="text-xl font-bold">Final Release</h3>
                  <p className="text-muted-foreground">September 15, 2024</p>
                </div>
                <div className="col-start-2 text-muted-foreground">
                  Unveil the groundbreaking software to the world.
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#2B2E4A] rounded-2xl p-8 md:p-12 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Stay Updated</h2>
            <p className="text-muted-foreground">
              Sign up for our newsletter to receive the latest updates and exclusive information about the release.
            </p>
            <form className="space-y-4">
              <Input type="email" placeholder="Enter your email" className="w-full" />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function RocketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}


function ZapIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    </svg>
  )
}
