import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function Logo({ className, size = "md", showText = true }: LogoProps) {
  const sizes = {
    sm: "h-8",
    md: "h-10",
    lg: "h-14",
  };

  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-3 transition-opacity hover:opacity-80",
        className,
      )}
    >
      <div
        className={cn(
          "relative flex items-center justify-center rounded-full bg-primary text-primary-foreground",
          sizes[size],
          size === "sm" ? "w-8" : size === "md" ? "w-10" : "w-14",
        )}
      >
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn(
            size === "sm" ? "w-5 h-5" : size === "md" ? "w-6 h-6" : "w-8 h-8",
          )}
        >
          <circle cx="20" cy="12" r="5" fill="currentColor" />
          <circle cx="12" cy="26" r="4" fill="currentColor" opacity="0.8" />
          <circle cx="28" cy="26" r="4" fill="currentColor" opacity="0.8" />
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
      {showText && (
        <div className="flex flex-col">
          <span
            className={cn(
              "font-display font-bold leading-tight text-foreground",
              size === "sm"
                ? "text-sm"
                : size === "md"
                ? "text-base"
                : "text-lg",
            )}
          >
            International
          </span>
          <span
            className={cn(
              "font-display font-bold leading-tight text-primary",
              size === "sm"
                ? "text-sm"
                : size === "md"
                ? "text-base"
                : "text-lg",
            )}
          >
            Friends
          </span>
        </div>
      )}
    </Link>
  );
}
