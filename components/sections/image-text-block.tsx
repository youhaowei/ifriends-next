import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ImageTextBlockProps {
  title: string;
  content: string;
  imageSrc: string;
  imageAlt?: string;
  invert?: boolean;
  variant?: "default" | "light";
  action?: {
    label: string;
    href: string;
  };
  className?: string;
}

export function ImageTextBlock({
  title,
  content,
  imageSrc,
  imageAlt,
  invert = false,
  variant = "default",
  action,
  className,
}: ImageTextBlockProps) {
  return (
    <section
      className={cn(
        "relative py-16 md:py-24 overflow-hidden",
        variant === "light" && "bg-muted/50",
        className,
      )}
    >
      <div className="container-wide">
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center",
            invert && "lg:grid-flow-dense",
          )}
        >
          <div
            className={cn(
              "relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl",
              invert && "lg:col-start-2",
            )}
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-highlight/20 rounded-3xl blur-2xl -z-10" />
            <Image
              src={imageSrc}
              alt={imageAlt || title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className={cn(invert && "lg:col-start-1 lg:row-start-1")}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-6 text-foreground">
              {title}
            </h2>
            <div className="prose prose-lg max-w-none text-foreground/80 mb-8">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
            {action && (
              <Button variant="outline" size="lg" className="group" asChild>
                <Link href={action.href}>
                  {action.label}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
