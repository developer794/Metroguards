import Layout from "@/components/layout/Layout"
import WestMelbourneClient from "./WestMelbourneClient"


export const metadata = {
    title: 'Security Guards West Melbourne VIC 3003 | Metro Guards',
    description: 'Licensed & Insured Security Services - 24/7 Protection for West Melbourne Homes & Businesses. Professional Security Guards in West Melbourne, VIC.',
    alternates: {
        canonical: 'https://metroguards.com.au/security-guard-west-melbourne-vic-3003',
    },
}

export default function Page() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}
                breadcrumbTitle="SECURITY GUARDS WEST MELBOURNE"
                backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Shopping%20Center%20Secuirty%20Guards/CA27AC6C-60CD-44D4-A422-3D5ECF81CF4B_1_105_c.webp"

                mainTitle="Professional Security Guards in West Melbourne, VIC"
                subtitle="Licensed & Insured Security Services - 24/7 Protection for West Melbourne Homes & Businesses"
            >
                <WestMelbourneClient />
            </Layout>
        </>
    )
}