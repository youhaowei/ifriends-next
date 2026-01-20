"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/logo";
import { SignupDialog } from "@/components/features/signup-dialog";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Join", href: "/join" },
  { label: "Activities", href: "/activities" },
  { label: "Guidelines", href: "/guidelines" },
  { label: "Newsletters", href: "/newsletters" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent",
      )}
    >
      <nav className="container-wide">
        <div className="flex h-20 items-center justify-between">
          <Logo size="md" />

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-lg font-body text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "text-primary bg-primary/10"
                    : isScrolled
                    ? "text-foreground hover:text-primary hover:bg-primary/5"
                    : "text-foreground/90 hover:text-foreground hover:bg-foreground/5",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://donorbox.org/ongoing-support-for-international-friends"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Heart className="w-4 h-4" />
                Donate
              </a>
            </Button>
            <SignupDialog>
              <Button variant="highlight" size="sm">
                Join Us
              </Button>
            </SignupDialog>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-foreground/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg shadow-lg transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-[80vh] border-b" : "max-h-0",
        )}
      >
        <div className="container-wide py-6 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block px-4 py-3 rounded-lg font-body text-base font-medium transition-colors",
                pathname === item.href
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:text-primary hover:bg-primary/5",
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <Button variant="outline" className="w-full" asChild>
              <a
                href="https://donorbox.org/ongoing-support-for-international-friends"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Heart className="w-4 h-4" />
                Donate
              </a>
            </Button>
            <SignupDialog>
              <Button variant="highlight" className="w-full">
                Join Us
              </Button>
            </SignupDialog>
          </div>
        </div>
      </div>
    </header>
  );
}
