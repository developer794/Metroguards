import Layout from "@/components/layout/Layout"
import EastMelbourneClient from "./EastMelbourneClient"

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
