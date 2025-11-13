import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-accent/30 to-primary/10 py-12 md:py-16 flex items-center justify-center min-h-[500px]">
      <div className="container mx-auto px-4 md:px-6 flex justify-center">
        <div className="mx-auto max-w-4xl text-center flex flex-col items-center relative z-10">
          <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground md:text-7xl">
            <span className="text-primary">Decentralized Finance</span>
            <br />
            on Ethereum
          </h1>
          <p className="mt-6 text-pretty text-lg text-muted-foreground md:text-xl">
            The Ethereum Foundation's DeFi event at Devconnect. Covering Real-World Assets, DeFi Primitives, Institutional Adoption, and Innovation.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="font-medium">November 21, 2025</span>
            </div>
            <div className="hidden sm:block h-6 w-px bg-border" />
            <a
              href="https://maps.app.goo.gl/GzoiZpcb5H6GJFZW6"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-20 flex items-center gap-2 font-medium transition-colors cursor-pointer touch-manipulation
                         bg-primary/10 text-primary border border-primary/20 py-2.5 px-4 rounded-lg hover:bg-primary/20 active:bg-primary/30
                         md:bg-transparent md:text-muted-foreground md:border-0 md:py-2 md:px-3 md:-mx-3 md:rounded-md md:hover:bg-primary/5 md:hover:text-primary md:active:bg-primary/10"
            >
              <MapPin className="h-5 w-5 flex-shrink-0" />
              <span>Inside Devconnect</span>
            </a>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 px-8"
              asChild
            >
              <a href="https://luma.com/lklh3u0v" target="_blank" rel="noopener noreferrer">
                Get Your Ticket
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
    </section>
  )
}
