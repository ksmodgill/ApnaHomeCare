import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import { BLOG_POSTS, SITE } from "@/lib/constants";
import { getBreadcrumbSchema } from "@/lib/seo";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Health Resources & Home Care Blog",
  description:
    "Expert articles on home nursing, elder care, and patient recovery in Muzaffarpur. Health resources from Apna Home Care Nursing Services.",
  alternates: { canonical: `${SITE.url}/blog` },
};

export default function BlogPage() {
  const schema = getBreadcrumbSchema([
    { name: "Home", url: SITE.url },
    { name: "Blog", url: `${SITE.url}/blog` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="gradient-hero pt-28 pb-12 md:pt-36">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            badge="Health Resources"
            title="Home Healthcare Blog"
            subtitle="Expert insights on home nursing, elder care, and patient recovery for families in Muzaffarpur and Bihar."
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="card-hover group flex flex-col rounded-2xl border border-border bg-surface overflow-hidden"
              >
                <div className="flex h-48 items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                  <BookOpen className="h-14 w-14 text-primary/30" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-3 text-xs text-muted">
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-semibold text-primary">
                      {post.category}
                    </span>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="font-display text-xl font-bold text-secondary group-hover:text-primary">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary"
                  >
                    Read Article
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
