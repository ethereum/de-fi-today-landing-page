import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto max-w-7xl flex h-16 md:h-24 items-center justify-between px-3 md:px-6 gap-2">
        <a href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity flex-shrink-0">
          <Image
            src="/defi-today-logo.svg"
            alt="DeFi Today"
            width={128}
            height={128}
            className="w-16 h-16 md:w-24 md:h-24"
            priority
          />
        </a>

        <nav className="flex items-center gap-1 md:gap-3">
          <Button variant="ghost" size="sm" className="md:size-default text-sm md:text-base px-2 md:px-4" asChild>
            <a href="#speakers">Speakers</a>
          </Button>
          <Button variant="ghost" size="sm" className="md:size-default text-sm md:text-base px-2 md:px-4" asChild>
            <a href="#schedule">Schedule</a>
          </Button>
          <Button variant="ghost" size="sm" className="md:size-default text-sm md:text-base px-2 md:px-4" asChild>
            <a href="#faq">FAQ</a>
          </Button>
          <Button
            size="sm"
            className="md:size-default bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 text-sm md:text-base px-3 md:px-4"
            asChild
          >
            <a href="https://luma.com/lklh3u0v" target="_blank" rel="noopener noreferrer">
              Register Now
            </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
