import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SignupDialog } from "@/components/features/signup-dialog";

interface CTASectionProps {
  title: string;
  description?: string;
  className?: string;
}

export function CTASection({ title, description, className }: CTASectionProps) {
  return (
    <section
      className={cn(
        "relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-primary/10 via-highlight/5 to-accent/10",
        className,
      )}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-highlight/10 blur-3xl" />
      </div>

      <div className="container-wide relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-foreground">
          {title}
        </h2>
        {description && (
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            {description}
          </p>
        )}
        <SignupDialog>
          <Button size="xl" variant="highlight">
            Join Us Today
          </Button>
        </SignupDialog>
      </div>
    </section>
  );
}
