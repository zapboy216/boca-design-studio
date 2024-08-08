
import Link from "next/link"

export function Foote() {
  return (
    <footer className="bg-muted py-12">
      <div className="container max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-start gap-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <BoldOddBInBigDiamondIcon className="w-10 h-10 text-primary" />
            <span className="text-2xl font-bold">Boca Software</span>
          </Link>
          <p className="text-muted-foreground max-w-md">
            Boca Software is a leading software development firm that specializes in creating innovative and
            user-friendly applications for businesses of all sizes.
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-6">
          <div className="grid gap-2">
            <h4 className="text-lg font-semibold">Company</h4>
            <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
              Services
            </Link>
            <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
              Portfolio
            </Link>
            <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
              Contact
            </Link>
          </div>
          <div className="grid gap-2">
            <h4 className="text-lg font-semibold">Resources</h4>
            <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
              Blog
            </Link>
            <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
              FAQ
            </Link>
            <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
              Documentation
            </Link>
            <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
              Support
            </Link>
          </div>
        </nav>
        <div className="flex flex-col items-start gap-4">
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
              <TwitterIcon className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
              <LinkedinIcon className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary" prefetch={false}>
              <GitlabIcon className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container max-w-7xl mt-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-muted-foreground text-sm">&copy; 2024 Boca Software. All rights reserved.</p>
        <div className="flex gap-4 text-sm">
          <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}




function BoldOddBInBigDiamondIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 2l14 14-14 14L2 16z" />
      <path d="M12 9h8a4 4 0 0 1 0 8h-8z" />
      <path d="M12 17h8a4 4 0 0 1 0 8h-8z" />
    </svg>
  );
}






function GitlabIcon(props) {
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
      <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
    </svg>
  )
}


function LinkedinIcon(props) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}








function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
