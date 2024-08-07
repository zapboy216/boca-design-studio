
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function VideoSection() {
  return (
    <div>
      <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <video className="h-full w-full object-cover">
              <source
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <Button
                size="icon"
                variant="ghost"
                className="h-16 w-16 rounded-full bg-white/10 text-white hover:bg-white/20"
              >
                <PlayIcon className="h-8 w-8" />
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Elevate Your Software with Our Expertise
            </h1>
            <p className="text-muted-foreground md:text-xl/relaxed">
              At our software development firm, we specialize in crafting cutting-edge solutions that drive your
              business forward. From web development to cloud engineering, our team of experts delivers innovative and
              scalable software tailored to your unique needs.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid grid-cols-1 gap-6 px-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10">
          <div className="grid gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <CodeIcon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Web Development</h3>
              <p className="text-muted-foreground">
                Crafting responsive and user-friendly web applications that captivate your audience.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
              <SmartphoneIcon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Mobile Development</h3>
              <p className="text-muted-foreground">
                Developing cutting-edge mobile apps that seamlessly integrate with your business.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <CloudIcon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Cloud Engineering</h3>
              <p className="text-muted-foreground">
                Leveraging cloud technologies to build scalable and high-performing solutions.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
              <DatabaseIcon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Database Solutions</h3>
              <p className="text-muted-foreground">
                Designing and implementing robust database architectures to power your applications.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <XIcon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold">AI/ML Integration</h3>
              <p className="text-muted-foreground">
                Incorporating cutting-edge AI and machine learning capabilities to enhance your software.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
              <LockIcon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Cybersecurity</h3>
              <p className="text-muted-foreground">
                Ensuring the security and integrity of your software solutions with our robust security practices.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
        <div className="container flex flex-col items-center justify-center gap-6 px-4 md:px-6">
          <div className="space-y-3 text-center">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Ready to Elevate Your Software?
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Contact our team of experts to discuss how we can help you achieve your software development goals.
            </p>
          </div>
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}

function CloudIcon(props) {
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
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  )
}


function CodeIcon(props) {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function DatabaseIcon(props) {
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
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}


function LockIcon(props) {
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
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}


function PlayIcon(props) {
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
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  )
}


function SmartphoneIcon(props) {
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
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  )
}


function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
