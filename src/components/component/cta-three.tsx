
export function CtaThree() {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4">
      <div className="flex-shrink-0 w-56 h-56 bg-card rounded-lg shadow-lg">
        <div className="flex flex-col items-center justify-center h-full p-4 text-center">
          <CodeIcon className="w-10 h-10 mb-2 text-primary" />
          <h3 className="text-lg font-semibold">Web Development</h3>
          <p className="text-sm text-muted-foreground">Crafting modern and responsive web applications.</p>
        </div>
      </div>
      <div className="flex-shrink-0 w-56 h-56 bg-card rounded-lg shadow-lg">
        <div className="flex flex-col items-center justify-center h-full p-4 text-center">
          <SmartphoneIcon className="w-10 h-10 mb-2 text-primary" />
          <h3 className="text-lg font-semibold">Mobile Apps</h3>
          <p className="text-sm text-muted-foreground">Building intuitive and performant mobile experiences.</p>
        </div>
      </div>
      <div className="flex-shrink-0 w-56 h-56 bg-card rounded-lg shadow-lg">
        <div className="flex flex-col items-center justify-center h-full p-4 text-center">
          <DatabaseIcon className="w-10 h-10 mb-2 text-primary" />
          <h3 className="text-lg font-semibold">Backend Services</h3>
          <p className="text-sm text-muted-foreground">Designing scalable and secure backend solutions.</p>
        </div>
      </div>
      <div className="flex-shrink-0 w-56 h-56 bg-card rounded-lg shadow-lg">
        <div className="flex flex-col items-center justify-center h-full p-4 text-center">
          <LayersIcon className="w-10 h-10 mb-2 text-primary" />
          <h3 className="text-lg font-semibold">DevOps</h3>
          <p className="text-sm text-muted-foreground">Automating and optimizing your software delivery.</p>
        </div>
      </div>
      <div className="flex-shrink-0 w-56 h-56 bg-card rounded-lg shadow-lg">
        <div className="flex flex-col items-center justify-center h-full p-4 text-center">
          <LayersIcon className="w-10 h-10 mb-2 text-primary" />
          <h3 className="text-lg font-semibold">DevOps</h3>
          <p className="text-sm text-muted-foreground">Automating and optimizing your software delivery.</p>
        </div>
      </div>
      <div className="flex-shrink-0 w-56 h-56 bg-card rounded-lg shadow-lg">
        <div className="flex flex-col items-center justify-center h-full p-4 text-center">
          <LayersIcon className="w-10 h-10 mb-2 text-primary" />
          <h3 className="text-lg font-semibold">DevOps</h3>
          <p className="text-sm text-muted-foreground">Automating and optimizing your software delivery.</p>
        </div>
      </div>
      <div className="flex-shrink-0 w-56 h-56 bg-card rounded-lg shadow-lg">
        <div className="flex flex-col items-center justify-center h-full p-4 text-center">
          <LayersIcon className="w-10 h-10 mb-2 text-primary" />
          <h3 className="text-lg font-semibold">DevOps</h3>
          <p className="text-sm text-muted-foreground">Automating and optimizing your software delivery.</p>
        </div>
      </div>
    </div>
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


function LayersIcon(props) {
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
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
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
