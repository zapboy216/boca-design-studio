/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3DSWYAvZtZu
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"

export default function Component() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full ${isDarkMode ? "bg-background text-foreground" : "bg-transparent"}`}
    >
      <nav className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link
          href="#"
          className={`text-lg font-bold ${isDarkMode ? "text-primary-foreground" : "text-primary-foreground"}`}
          prefetch={false}
        >
          Acme Inc.
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="#"
            className={`text-sm font-medium ${
              isDarkMode ? "text-primary-foreground hover:underline" : "text-primary-foreground hover:underline"
            }`}
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#"
            className={`text-sm font-medium ${
              isDarkMode ? "text-primary-foreground hover:underline" : "text-primary-foreground hover:underline"
            }`}
            prefetch={false}
          >
            Portfolio
          </Link>
          <Link
            href="#"
            className={`text-sm font-medium ${
              isDarkMode ? "text-primary-foreground hover:underline" : "text-primary-foreground hover:underline"
            }`}
            prefetch={false}
          >
            Templates
          </Link>
          <Link
            href="#"
            className={`text-sm font-medium ${
              isDarkMode ? "text-primary-foreground hover:underline" : "text-primary-foreground hover:underline"
            }`}
            prefetch={false}
          >
            Future Releases
          </Link>
          <Link
            href="#"
            className={`text-sm font-medium ${
              isDarkMode ? "text-primary-foreground hover:underline" : "text-primary-foreground hover:underline"
            }`}
            prefetch={false}
          >
            About Us
          </Link>
          <Link
            href="#"
            className={`text-sm font-medium ${
              isDarkMode ? "text-primary-foreground hover:underline" : "text-primary-foreground hover:underline"
            }`}
            prefetch={false}
          >
            Video Presentation
          </Link>
          <Link
            href="#"
            className={`text-sm font-medium ${
              isDarkMode ? "text-primary-foreground hover:underline" : "text-primary-foreground hover:underline"
            }`}
            prefetch={false}
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
            <span className="sr-only">Toggle dark mode</span>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="md:hidden">
              <div className="grid gap-4 py-6">
                <Link
                  href="#"
                  className={`flex w-full items-center py-2 text-lg font-semibold ${
                    isDarkMode ? "text-primary-foreground" : "text-primary-foreground"
                  }`}
                  prefetch={false}
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className={`flex w-full items-center py-2 text-lg font-semibold ${
                    isDarkMode ? "text-primary-foreground" : "text-primary-foreground"
                  }`}
                  prefetch={false}
                >
                  Portfolio
                </Link>
                <Link
                  href="#"
                  className={`flex w-full items-center py-2 text-lg font-semibold ${
                    isDarkMode ? "text-primary-foreground" : "text-primary-foreground"
                  }`}
                  prefetch={false}
                >
                  Templates
                </Link>
                <Link
                  href="#"
                  className={`flex w-full items-center py-2 text-lg font-semibold ${
                    isDarkMode ? "text-primary-foreground" : "text-primary-foreground"
                  }`}
                  prefetch={false}
                >
                  Future Releases
                </Link>
                <Link
                  href="#"
                  className={`flex w-full items-center py-2 text-lg font-semibold ${
                    isDarkMode ? "text-primary-foreground" : "text-primary-foreground"
                  }`}
                  prefetch={false}
                >
                  About Us
                </Link>
                <Link
                  href="#"
                  className={`flex w-full items-center py-2 text-lg font-semibold ${
                    isDarkMode ? "text-primary-foreground" : "text-primary-foreground"
                  }`}
                  prefetch={false}
                >
                  Video Presentation
                </Link>
                <Link
                  href="#"
                  className={`flex w-full items-center py-2 text-lg font-semibold ${
                    isDarkMode ? "text-primary-foreground" : "text-primary-foreground"
                  }`}
                  prefetch={false}
                >
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}

function MenuIcon(props) {
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


function MoonIcon(props) {
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
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}


function SunIcon(props) {
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
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
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