import Layout from "@/components/layout/Layout"
import SouthMelbourneClient from "./SouthMelbourneClient"

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