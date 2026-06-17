import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";
import { BLOG_POSTS, SITE } from "@/lib/constants";
import { getBreadcrumbSchema, getWebPageSchema } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

const blogContent: Record<string, { content: string[] }> = {
  "benefits-of-home-nursing-care": {
    content: [
      "Home nursing care has become the preferred choice for families across Muzaffarpur who want professional healthcare without the stress and cost of extended hospital stays. With Apna Home Care, patients receive one-on-one attention from trained nurses in the comfort and familiarity of their own home.",
      "The first major benefit is infection control. Hospitals, while essential for acute care, expose patients to hospital-acquired infections. Recovering at home significantly reduces this risk, especially for elderly patients and those with compromised immune systems.",
      "Emotional well-being is equally important. Patients heal faster when surrounded by family, in familiar surroundings, with their own routines and comforts. Home nursing bridges the gap between hospital-level care and the warmth of home.",
      "Cost efficiency is another compelling factor. Daily hospital charges for room, nursing, and facilities add up quickly. Home nursing packages from Apna Home Care offer professional care at a fraction of the cost, with flexible hourly, daily, and long-term options.",
      "Finally, home nursing enables personalized care plans. Unlike shared hospital wards, your assigned nurse focuses entirely on your patient's needs — from medication schedules to mobility exercises to emotional support. This individualized attention often leads to better recovery outcomes.",
    ],
  },
  "elder-care-tips-at-home": {
    content: [
      "Caring for elderly family members at home is both rewarding and challenging. With India's aging population growing rapidly, more families in Muzaffarpur are choosing to keep their seniors at home rather than in care facilities.",
      "Start with home safety modifications. Remove tripping hazards, install grab bars in bathrooms, ensure adequate lighting in hallways, and keep frequently used items within easy reach. These simple changes prevent falls — the leading cause of injury among seniors.",
      "Establish a consistent daily routine. Regular meal times, medication schedules, and physical activity help seniors maintain cognitive function and emotional stability. Even short walks or gentle stretching exercises make a significant difference.",
      "Monitor for warning signs that indicate professional help is needed: sudden weight loss, confusion, difficulty with daily tasks, frequent falls, or untreated wounds. These signals mean it's time to consult a home nursing service.",
      "Don't neglect caregiver burnout. Family members providing elder care need rest and support too. Professional caregiver services from Apna Home Care can provide relief shifts, allowing families to recharge while ensuring continuous quality care for their loved ones.",
    ],
  },
  "post-surgery-recovery-guide": {
    content: [
      "Recovering from surgery at home requires careful planning and professional support. Whether it's orthopedic surgery, cardiac procedure, or general surgery, the post-operative period is critical for successful healing.",
      "Follow your surgeon's instructions precisely. This includes wound care protocols, medication schedules, activity restrictions, and follow-up appointment timelines. A home nurse can ensure these instructions are followed consistently.",
      "Wound care is paramount. Keep the surgical site clean and dry, watch for signs of infection (redness, swelling, warmth, discharge), and never skip dressing changes. Professional nurses are trained to identify complications early.",
      "Nutrition plays a vital role in recovery. Protein-rich foods, adequate hydration, and vitamin-rich fruits support tissue healing. Avoid foods that may interact with medications or cause digestive issues.",
      "Gradually increase activity as recommended by your doctor. Start with gentle movements and progress to prescribed exercises. A home nurse can assist with mobility, monitor vital signs, and report any concerns to your treating physician.",
      "Know when to seek emergency help: high fever, severe pain not relieved by medication, excessive bleeding, difficulty breathing, or signs of blood clots. Apna Home Care provides 24/7 emergency nursing support for such situations.",
    ],
  },
};

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${SITE.url}/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${SITE.url}/blog/${slug}`,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = blogContent[slug];
  const pageUrl = `${SITE.url}/blog/${slug}`;

  const schemas = [
    getBreadcrumbSchema([
      { name: "Home", url: SITE.url },
      { name: "Blog", url: `${SITE.url}/blog` },
      { name: post.title, url: pageUrl },
    ]),
    getWebPageSchema(post.title, post.excerpt, pageUrl),
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      author: { "@type": "Organization", name: SITE.name },
      publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
    },
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <article className="pt-28 pb-16 md:pt-36">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <div className="mb-6 flex items-center gap-3 text-sm text-muted">
            <span className="rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary">
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

          <h1 className="font-display text-3xl font-bold text-secondary md:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-muted">{post.excerpt}</p>

          <div className="prose-custom mt-10 space-y-6">
            {content?.content.map((paragraph, i) => (
              <p key={i} className="leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
            <h2 className="font-display text-xl font-bold text-secondary">
              Need Home Nursing Care in Muzaffarpur?
            </h2>
            <p className="mt-2 text-muted">
              Contact Apna Home Care for professional nursing services at home.
            </p>
            <a
              href={`tel:${SITE.phone}`}
              className="mt-4 inline-flex items-center gap-2 rounded-xl gradient-primary px-6 py-3 font-semibold text-white"
            >
              <Phone className="h-4 w-4" />
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
