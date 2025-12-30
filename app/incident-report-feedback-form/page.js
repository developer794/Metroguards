
import IncidentReportClient from "./IncidentReportClient"

export const metadata = {
    title: 'Incident Report & Feedback Form | Metro Guards',
    description: 'Security Incident Reporting System. Report security breaches, safety matters, and feedback.',
    alternates: {
        canonical: 'https://metroguards.com.au/incident-report-feedback-form',
    },
}

export default function IncidentReportPage() {
    return <IncidentReportClient />
}