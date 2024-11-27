import { Button } from "@/components/ui/button";
import { Phone, Search } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="container flex flex-col items-center justify-center gap-4 pb-8 pt-32 md:pt-40">
      <div className="flex items-center justify-center space-x-2 rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium">
        <span className="text-muted-foreground">New</span>
        <div className="h-4 w-[1px] bg-border" />
        <span>Global Phone Number Coverage</span>
      </div>
      <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
        Discover Everything About
        <br className="hidden sm:inline" />
        Phone Numbers Worldwide
      </h1>
      <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
        Validate phone numbers, identify carriers, and get location details
        instantly with our powerful phone number lookup tool.
      </p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button size="lg" asChild>
          <Link href="/lookup">
            <Search className="mr-2 h-5 w-5" />
            Try Phone Lookup
          </Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="/signup">
            <Phone className="mr-2 h-5 w-5" />
            Sign Up Free
          </Link>
        </Button>
      </div>
    </section>
  );
}