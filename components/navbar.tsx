"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { toast } from "sonner";

export function Navbar() {
  const { user, loading } = useAuth();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error("Failed to log out");
    }
  };
  
  return (
    <nav className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Phone className="h-6 w-6" />
            <span className="font-bold">Phonebook</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("lookup")}
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Phone Lookup
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              FAQ
            </button>
          </nav>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          {!loading && (
            <>
              {user ? (
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">
                    {user.email || 'User'}
                  </span>
                  <Button variant="ghost" onClick={handleSignOut}>
                    Logout
                  </Button>
                </div>
              ) : (
                <>
                  <Button variant="ghost" asChild>
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/signup">Sign Up</Link>
                  </Button>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
}