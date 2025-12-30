import Layout from "@/components/layout/Layout"
import SouthMelbourneClient from "./SouthMelbourneClient"


export const metadata = {
    title: 'Security Guards South Melbourne - Professional Security Services',
    description: 'Licensed & Insured Security Services in South Melbourne. 24/7 Protection for Homes & Businesses. Professional Security Guards.',
    alternates: {
        canonical: 'https://metroguards.com.au/security-guard-south-melbourne-vic-3205',
    },
}

export default function Page() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}
                breadcrumbTitle="SECURITY GUARDS SOUTH MELBOURNE"
                mainTitle="Professional Security Guards in South Melbourne, VIC"
                backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Corporate%20Security%20Guards/81FC094D-5077-4246-9C7B-CF19E9EC602B_1_105_c.webp"
                subtitle="Licensed & Insured Security Services - 24/7 Protection for South Melbourne Homes & Businesses"
            >
                <SouthMelbourneClient />
            </Layout>
        </>
    )
}