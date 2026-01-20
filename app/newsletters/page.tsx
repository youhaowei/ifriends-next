import type { Metadata } from "next";
import Link from "next/link";
import { getNewsletters } from "@/lib/notion";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Newsletters",
  description:
    "Read the latest International Friends newsletters and browse our archive of past editions.",
};

export const dynamic = "force-dynamic";
export const revalidate = 60;

export default async function NewslettersPage() {
  const newsletters = await getNewsletters();
  const latest = newsletters[0];
  const past = newsletters.slice(1);

  return (
    <div className="pt-32 pb-20">
      <div className="container-wide">
        <h1 className="text-4xl font-display font-bold mb-8">Newsletters</h1>

        {latest && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-display font-semibold">
                Latest Newsletter - {latest.title}
              </h2>
              <Button asChild>
                <a href={latest.path} target="_blank" rel="noopener noreferrer">
                  <FileText className="w-4 h-4" />
                  View PDF
                </a>
              </Button>
            </div>
            <iframe
              title="Latest newsletter"
              className="w-full rounded-xl border shadow-sm"
              style={{ height: "75vh" }}
              src={latest.path}
            />
          </div>
        )}

        {past.length > 0 && (
          <div>
            <h2 className="text-2xl font-display font-semibold mb-6">
              Archive
            </h2>
            <ul className="space-y-3">
              {past.map((newsletter) => (
                <li
                  key={newsletter.path}
                  className="flex items-center gap-3 p-4 rounded-lg bg-card border hover:bg-muted/50 transition-colors"
                >
                  <FileText className="w-5 h-5 text-primary" />
                  <span className="flex-1 font-medium">{newsletter.title}</span>
                  <a
                    href={newsletter.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 flex items-center gap-1"
                  >
                    View
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
