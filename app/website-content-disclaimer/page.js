
import DisclaimerClient from "./DisclaimerClient"

export const metadata = {
    title: 'Website Content Disclaimer | Metro Guards',
    description: 'Legal Terms and Conditions for Metropolitan Security Services in Melbourne. Representation Content Disclaimer.',
    alternates: {
        canonical: 'https://metroguards.com.au/website-content-disclaimer',
    },
}

export default function WebsiteContentDisclaimerPage() {
    return <DisclaimerClient />
}