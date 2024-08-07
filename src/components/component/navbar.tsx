import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SVGProps } from 'react';

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-neutral-100 dark:bg-neutral-900">
      <nav className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link href="#landing" className="text-lg font-bold  text-black dark:text-white" prefetch={false}>
          Boca Inc.
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link href="#landing" className="text-md  text-black dark:text-white hover:underline" prefetch={false}>
            Home
          </Link>
          <Link href="#portfolio" className="text-md  text-black dark:text-white hover:underline" prefetch={false}>
            Portfolio
          </Link>
          <Link href="#call-to-action" className="text-md text-black dark:text-white hover:underline" prefetch={false}>
            Call to Action
          </Link>
          <Link href="#future-software-release" className="text-md text-black dark:text-white hover:underline" prefetch={false}>
            Future Releases
          </Link>
          <Link href="#about-us" className="text-md  text-black dark:text-white hover:underline" prefetch={false}>
            About Us
          </Link>
          <Link href="#video-presentation" className="text-md  text-black dark:text-white hover:underline" prefetch={false}>
            Video Presentation
          </Link>
          <Link href="#contact" className="text-md  text-black dark:text-white hover:underline" prefetch={false}>
            Contact
          </Link>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="md:hidden">
            <div className="grid gap-4 py-6">
              <Link href="#landing" className="flex w-full items-center py-2 text-lg font-bold text-white hover:text-blue-600 transition-transform transform hover:scale-1.25" prefetch={false}>
                Home
              </Link>
              <Link href="#portfolio" className="flex w-full items-center py-2 text-lg font-bold text-white hover:text-blue-600 transition-transform transform hover:scale-1.25" prefetch={false}>
                Portfolio
              </Link>
              <Link href="#call-to-action" className="flex w-full items-center py-2 text-lg font-bold text-white hover:text-blue-600 transition-transform transform hover:scale-1.25" prefetch={false}>
                Call to Action
              </Link>
              <Link href="#future-software-release" className="flex w-full items-center py-2 text-lg font-bold text-white hover:text-blue-600 transition-transform transform hover:scale-1.25" prefetch={false}>
                Future Releases
              </Link>
              <Link href="#about-us" className="flex w-full items-center py-2 text-lg font-bold text-white hover:text-blue-600 transition-transform transform hover:scale-1.25" prefetch={false}>
                About Us
              </Link>
              <Link href="#video-presentation" className="flex w-full items-center py-2 text-lg font-bold text-white hover:text-blue-600 transition-transform transform hover:scale-1.25" prefetch={false}>
                Video Presentation
              </Link>
              <Link href="#contact" className="flex w-full items-center py-2 text-lg font-bold text-white hover:text-blue-600 transition-transform transform hover:scale-1.25" prefetch={false}>
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}

function MenuIcon(props: SVGProps<SVGSVGElement>) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

function XIcon(props: SVGProps<SVGSVGElement>) {
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
