import Layout from "@/components/layout/Layout";
import BlogPageClient from "./BlogPageClient";
import { headers } from "next/headers";

export const dynamic = "force-dynamic"; // avoid static pre-render
const PAGE_SIZE = 12;

export const metadata = {
  title: 'Our Security Blog | Expert Insights & Industry News',
  description: 'Expert Insights & Industry News - Stay Informed with Latest Security Trends regarding Security Guards in Melbourne.',
  alternates: {
    canonical: 'https://metroguards.com.au/blogs',
  },
}

function absoluteUrl(path) {
  const h = headers();
  const proto = h.get("x-forwarded-proto") ?? "http";
  const host = h.get("host");
  return `${proto}://${host}${path}`;
}

export default async function Page() {
  const url = absoluteUrl(`/api/public-blogs?limit=${PAGE_SIZE}&page=1`);

  const res = await fetch(url, { cache: "no-store" });
  const data = await res.json();

  const items = data.items ?? [];
  const hasMore = data.hasMore ?? false;
  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="SECURITY BLOG"
      mainTitle="Our Security Blog"
      subtitle="Expert Insights & Industry News - Stay Informed with Latest Security Trends"
      backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Event%20Security%20Guards/03BC3547-5A49-4C7C-83F5-9771C8C59059_1_105_c.webp"
    >
      <BlogPageClient
        initialPosts={items}
        initialPage={1}
        pageSize={PAGE_SIZE}
        hasMoreInitial={hasMore}
      />
    </Layout>
  );
}
