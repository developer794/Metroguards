import QuotationClientPage from "./QuotationClientPage";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Your Security Quote | Metro Guards",
  description: "Review and accept your personalized security quotation from Metro Guards",
  robots: {
    index: false,
    follow: false,
  },
};

export default function QuotationPage({ params }) {
  return <QuotationClientPage token={params.token} />;
}


