import Layout from "@/components/layout/Layout"
import NorthMelbourneClient from "./NorthMelbourneClient"


export const metadata = {
    title: 'Security Guards North Melbourne VIC 3051 | Metro Guards',
    description: 'Licensed & Insured Security Services - 24/7 Protection for North Melbourne Homes & Businesses. Professional Security Guards in North Melbourne, VIC.',
    alternates: {
        canonical: 'https://metroguards.com.au/security-guard-north-melbourne-vic-3051',
    },
}

export default function Page() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}
                breadcrumbTitle="SECURITY GUARDS NORTH MELBOURNE"
                mainTitle="Professional Security Guards in North Melbourne, VIC"
                backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Corporate%20Security%20Guards/81FC094D-5077-4246-9C7B-CF19E9EC602B_1_105_c.webp"
                subtitle="Licensed & Insured Security Services - 24/7 Protection for North Melbourne Homes & Businesses"
            >
                <NorthMelbourneClient />
            </Layout>
        </>
    )
}