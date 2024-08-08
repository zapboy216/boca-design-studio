import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function Portfolios() {
  return (
    <section id="portfolio" className="container mx-auto py-12 md:py-16 lg:py-20">
      <div className="mb-8 md:mb-10 lg:mb-12">
        <motion.h2
          className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.h2>

        <motion.p
          className="mt-2 text-muted-foreground md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Check out some of my previous web development projects.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="group relative overflow-hidden rounded-lg border transition-all duration-300 hover:shadow-lg">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View project</span>
          </Link>
          <Image
            src="/placeholder.svg"
            alt="Project 1"
            width={600}
            height={400}
            className="h-60 w-full object-cover transition-all duration-300 group-hover:scale-105"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Project 1</h3>
            <p className="mt-2 text-muted-foreground">Lorem ipsum</p>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-lg border transition-all duration-300 hover:shadow-lg">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View project</span>
          </Link>
          <Image
            src="/placeholder.svg"
            alt="Project 1"
            width={600}
            height={400}
            className="h-60 w-full object-cover transition-all duration-300 group-hover:scale-105"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Project 1</h3>
            <p className="mt-2 text-muted-foreground">Lorem ipsum</p>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-lg border transition-all duration-300 hover:shadow-lg">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View project</span>
          </Link>
          <Image
            src="/placeholder.svg"
            alt="Project 1"
            width={600}
            height={400}
            className="h-60 w-full object-cover transition-all duration-300 group-hover:scale-105"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Project 1</h3>
            <p className="mt-2 text-muted-foreground">Lorem ipsum</p>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-lg border transition-all duration-300 hover:shadow-lg">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View project</span>
          </Link>
          <Image
            src="/placeholder.svg"
            alt="Project 1"
            width={600}
            height={400}
            className="h-60 w-full object-cover transition-all duration-300 group-hover:scale-105"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Project 1</h3>
            <p className="mt-2 text-muted-foreground">Lorem ipsum</p>
          </div>
        </div>
        {/* Repeat similar blocks for other projects */}
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="link" className="mt-8 flex items-center gap-2">
            <PlusIcon className="h-4 w-4" />
            View more projects
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>More Projects</DialogTitle>
            <DialogDescription>
              Check out some additional web development projects I've worked on.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="group relative overflow-hidden rounded-lg border transition-all duration-300 hover:shadow-lg">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View project</span>
              </Link>
              <Image
                src="/placeholder.svg"
                alt="Project 5"
                width={600}
                height={400}
                className="h-48 w-full object-cover transition-all duration-300 group-hover:scale-105"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Project 5</h3>
                <p className="mt-2 text-muted-foreground">
                  A mobile-first web application for booking appointments.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border transition-all duration-300 hover:shadow-lg">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View project</span>
              </Link>
              <Image
                src="/placeholder.svg"
                alt="Project 6"
                width={600}
                height={400}
                className="h-48 w-full object-cover transition-all duration-300 group-hover:scale-105"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Project 6</h3>
                <p className="mt-2 text-muted-foreground">
                  A data visualization dashboard with interactive charts and
                  graphs.
                </p>
              </div>
            </div>
          </div>
          <DialogFooter>
            <div>
              <Button variant="ghost">Close</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}

function PlusIcon(props) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}




















  


