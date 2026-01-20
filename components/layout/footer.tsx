import Link from "next/link";
import { MapPin, Mail, Instagram, Facebook, Github } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { Separator } from "@/components/ui/separator";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Join", href: "/join" },
  { label: "Activities", href: "/activities" },
  { label: "Newsletters", href: "/newsletters" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/ifriendstucson/",
    icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/groups/298210727017/",
    icon: Facebook,
  },
  {
    label: "GitHub",
    href: "https://github.com/tucson-international-friends/ifriends-next",
    icon: Github,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <svg
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7 text-primary-foreground"
                >
                  <circle cx="20" cy="12" r="5" fill="currentColor" />
                  <circle
                    cx="12"
                    cy="26"
                    r="4"
                    fill="currentColor"
                    opacity="0.8"
                  />
                  <circle
                    cx="28"
                    cy="26"
                    r="4"
                    fill="currentColor"
                    opacity="0.8"
                  />
                  <path
                    d="M20 18C16 18 13 21 12 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                  <path
                    d="M20 18C24 18 27 21 28 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">
                  International Friends
                </h3>
                <p className="text-background/60 text-sm">Since 1952</p>
              </div>
            </div>
            <p className="text-background/80 max-w-md leading-relaxed mb-8">
              International Friends is an all-volunteer organization that brings
              together international students attending the University of
              Arizona and Southern Arizona residents.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-highlight transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6">
              Contact Us
            </h4>
            <div className="space-y-4">
              <a
                href="https://goo.gl/maps/3PF4UE3ZkaModhdi8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 text-background/70 hover:text-highlight transition-colors"
              >
                <MapPin className="w-5 h-5 shrink-0 mt-1" />
                <span>
                  International Student Services
                  <br />
                  615 N Park Avenue
                  <br />
                  Tucson, AZ 85719
                  <br />
                  (520) 621-4627
                </span>
              </a>
              <a
                href="mailto:info@ifriendstucson.org"
                className="flex gap-3 text-background/70 hover:text-highlight transition-colors"
              >
                <Mail className="w-5 h-5 shrink-0" />
                <span>info@ifriendstucson.org</span>
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-background/20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
          <p>
            &copy; {currentYear} International Friends, Inc. All Rights
            Reserved.
          </p>
          <p>
            Web Design by{" "}
            <a
              href="https://webreview.octaviamedia.com/"
              className="hover:text-highlight transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Octavia Digital Media
            </a>
            {" & "}
            <span className="text-background/80">Youhao Wei</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
