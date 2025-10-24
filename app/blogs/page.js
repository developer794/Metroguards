import Layout from "@/components/layout/Layout";
import BlogPageClient from "./BlogPageClient";
import { headers } from "next/headers";

export const dynamic = "force-dynamic"; // avoid static pre-render
const PAGE_SIZE = 12;

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
