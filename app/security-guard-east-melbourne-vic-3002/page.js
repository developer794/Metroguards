import Layout from "@/components/layout/Layout"
import EastMelbourneClient from "./EastMelbourneClient"


export const metadata = {
    title: 'Security Guards East Melbourne - Professional Security Services',
    description: 'Licensed & Insured Security Services in East Melbourne. 24/7 Protection for Homes & Businesses. Professional Security Guards.',
    alternates: {
        canonical: 'https://metroguards.com.au/security-guard-east-melbourne-vic-3002',
    },
}

export default function Page() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}
                breadcrumbTitle="SECURITY GUARDS EAST MELBOURNE"
                mainTitle="Professional Security Guards in East Melbourne, VIC"
                subtitle="Licensed & Insured Security Services - 24/7 Protection for East Melbourne Homes & Businesses"
                backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Shopping%20Center%20Secuirty%20Guards/CA27AC6C-60CD-44D4-A422-3D5ECF81CF4B_1_105_c.webp"
            >
                <EastMelbourneClient />
            </Layout>
        </>
    )
}
