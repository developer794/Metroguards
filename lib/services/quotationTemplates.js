/**
 * Metro Guards Quotation Templates
 * 
 * Industry-specific content and legal clauses for quotations
 */

// ISO Certifications
export const ISO_CERTIFICATIONS = {
  quality: {
    code: 'ISO 9001',
    name: 'Quality Management System',
    description: 'Certified quality management ensuring consistent, high-quality security services.',
  },
  environmental: {
    code: 'ISO 14001',
    name: 'Environmental Management System',
    description: 'Committed to environmentally responsible operations and sustainability.',
  },
  safety: {
    code: 'ISO 45001',
    name: 'Occupational Health & Safety',
    description: 'Rigorous health and safety standards protecting our guards and your site.',
  },
};

// Legal Protection Clauses
export const LEGAL_CLAUSES = {
  placementFee: {
    title: 'Guard Placement Protection',
    amount: 25000,
    clause: `PLACEMENT FEE CLAUSE: Should the Client directly or indirectly employ, engage, or otherwise utilize the services of any security personnel introduced by Metro Guards within 12 months of the termination of this agreement, the Client agrees to pay Metro Guards a placement fee of $25,000 (AUD) per guard. This fee compensates Metro Guards for recruitment, training, and development investments made in the security personnel.`,
  },
  invoiceDispute: {
    title: 'Invoice Dispute Window',
    days: 7,
    clause: `INVOICE DISPUTE POLICY: All invoices are due within 14 days of issue date. Any disputes regarding invoices must be raised in writing within 7 business days of the invoice date. Disputes raised after this period will not be accepted, and the full invoice amount becomes immediately due and payable. Metro Guards reserves the right to suspend services for overdue accounts exceeding 30 days.`,
  },
  liabilityInsurance: {
    title: 'Insurance Coverage',
    publicLiability: 20000000,
    clause: `INSURANCE COVERAGE: Metro Guards maintains comprehensive insurance including $20,000,000 Public Liability insurance, Professional Indemnity insurance, and Workers Compensation coverage. Certificates of Currency are available upon request.`,
  },
  cancellation: {
    title: 'Cancellation Policy',
    notice: 24,
    clause: `CANCELLATION POLICY: Cancellations must be made at least 24 hours in advance. Cancellations made less than 24 hours before the scheduled shift will incur a 4-hour minimum charge at the applicable rate. No-shows without notification will be charged the full scheduled shift amount.`,
  },
};

// Industry-Specific Templates
export const INDUSTRY_TEMPLATES = {
  construction: {
    name: 'Construction & Infrastructure',
    clientExamples: ['Qanstruct', 'Ertech', 'John Holland', 'CPB Contractors'],
    features: [
      'After-hours site security and patrol',
      'Equipment and materials protection',
      'Access control and visitor management',
      'Incident reporting and documentation',
      'Emergency response coordination',
      'Traffic control support',
    ],
    specialRequirements: [
      'White Card (Construction Induction) certified guards',
      'PPE compliance (hard hat, hi-vis, steel-cap boots)',
      'Toolbox talk participation',
      'Site-specific induction completion',
    ],
    benefits: [
      'Reduced theft and vandalism by up to 90%',
      'OH&S compliance support',
      '24/7 rapid response capability',
      'Detailed shift reports with photo evidence',
    ],
    introduction: `Metro Guards specializes in construction site security across Victoria. Our guards are White Card certified and trained in the unique challenges of securing active construction sites, from small residential developments to major infrastructure projects.`,
    valueProposition: `With extensive experience protecting sites for industry leaders like Qanstruct and Ertech, we understand that construction security requires more than just a guard presence. Our team provides proactive patrols, detailed reporting, and rapid incident response to protect your valuable equipment, materials, and work-in-progress.`,
  },
  retail: {
    name: 'Retail & Hospitality',
    clientExamples: ['Costco', 'Aldi', 'Coles', 'Westfield'],
    features: [
      'Loss prevention and theft deterrence',
      'Customer service and assistance',
      'Crowd control and queue management',
      'CCTV monitoring and response',
      'Emergency evacuation support',
      'VIP and celebrity protection',
    ],
    specialRequirements: [
      'Customer service training',
      'De-escalation techniques',
      'Retail industry experience',
      'Professional presentation standards',
    ],
    benefits: [
      'Reduced shrinkage and retail theft',
      'Enhanced customer shopping experience',
      'Professional brand representation',
      'Flexible staffing for peak periods',
    ],
    introduction: `Metro Guards provides premium retail security services to shopping centres, standalone stores, and hospitality venues. Our guards are trained to balance security vigilance with exceptional customer service.`,
    valueProposition: `Trusted by major retailers like Costco and Aldi, our retail security specialists understand that visible security creates a safe shopping environment that encourages customer spending. We focus on loss prevention while maintaining a welcoming atmosphere for your customers.`,
  },
  healthcare: {
    name: 'Healthcare & Aged Care',
    clientExamples: ['Alfred Health', 'St Vincent\'s Hospital', 'Epworth', 'Ramsay Health'],
    features: [
      'Patient and visitor access control',
      'Emergency department security',
      'Mental health patient support',
      'Aggression management',
      'Secure zone monitoring',
      'Pharmacy and drug storage security',
    ],
    specialRequirements: [
      'Healthcare security certification',
      'First Aid and CPR certification',
      'Mental health awareness training',
      'NDIS worker screening (if applicable)',
    ],
    benefits: [
      'Safer environment for patients and staff',
      'Reduced workplace aggression incidents',
      'Compliance with healthcare regulations',
      'Specialized mental health response',
    ],
    introduction: `Metro Guards provides specialized healthcare security services with guards trained in the unique challenges of hospital and aged care environments. We understand the sensitive nature of healthcare settings and the need for compassionate, professional security.`,
    valueProposition: `Healthcare security requires guards who can handle high-stress situations with empathy and professionalism. Our team is trained in de-escalation, mental health awareness, and emergency response protocols specific to healthcare facilities.`,
  },
  corporate: {
    name: 'Corporate & Commercial',
    clientExamples: ['NAB', 'Telstra', 'BHP', 'Rio Tinto'],
    features: [
      'Reception and concierge services',
      'Access control and visitor management',
      'Executive protection',
      'CCTV monitoring and control room',
      'After-hours building security',
      'Event and conference security',
    ],
    specialRequirements: [
      'Professional corporate presentation',
      'Confidentiality and discretion',
      'Technical security systems knowledge',
      'VIP handling protocols',
    ],
    benefits: [
      'Enhanced corporate image',
      'Seamless visitor experience',
      'Asset and intellectual property protection',
      'Executive peace of mind',
    ],
    introduction: `Metro Guards delivers premium corporate security services for Melbourne\'s leading businesses. Our guards combine impeccable presentation with professional security expertise to represent your brand while protecting your assets.`,
    valueProposition: `Corporate security is about more than protection—it\'s about presenting a professional first impression while maintaining the highest security standards. Our concierge-trained guards excel at balancing warm welcomes with vigilant security protocols.`,
  },
  events: {
    name: 'Events & Entertainment',
    clientExamples: ['Melbourne Cricket Ground', 'Rod Laver Arena', 'Melbourne Convention Centre'],
    features: [
      'Crowd management and control',
      'VIP and celebrity protection',
      'Access point security',
      'Emergency response coordination',
      'Alcohol management',
      'Patron welfare checks',
    ],
    specialRequirements: [
      'Crowd control certification',
      'First Aid certification',
      'RSA (Responsible Service of Alcohol)',
      'Large event experience',
    ],
    benefits: [
      'Safe and enjoyable event experience',
      'Regulatory compliance',
      'Rapid incident response',
      'Scalable security solutions',
    ],
    introduction: `Metro Guards provides comprehensive event security services from intimate corporate functions to major public events. Our crowd control specialists are trained to maintain safety while ensuring guests enjoy themselves.`,
    valueProposition: `Successful events require security that blends into the background while remaining ready for any situation. Our event specialists understand crowd dynamics, alcohol management, and emergency protocols to keep your event running smoothly.`,
  },
  education: {
    name: 'Education & Government',
    clientExamples: ['University of Melbourne', 'RMIT', 'Monash University', 'Victorian Government'],
    features: [
      'Campus patrol and monitoring',
      'Student and staff safety',
      'After-hours building security',
      'Exam and event security',
      'Emergency lockdown support',
      'Parking and traffic management',
    ],
    specialRequirements: [
      'Working with Children Check',
      'Education sector experience',
      'Student welfare awareness',
      'Emergency procedures training',
    ],
    benefits: [
      'Safe learning environment',
      'Reduced campus incidents',
      'Regulatory compliance',
      'Community trust and confidence',
    ],
    introduction: `Metro Guards provides trusted security services to educational institutions and government facilities. Our guards are screened to the highest standards and trained in the unique requirements of educational environments.`,
    valueProposition: `Security in educational settings requires guards who can relate to students while maintaining authority. Our team creates a welcoming yet secure environment that supports learning and community well-being.`,
  },
};

/**
 * Generate a complete quotation document
 * @param {Object} params
 * @param {string} params.clientName - Client name
 * @param {string} params.companyName - Company name
 * @param {string} params.industry - Industry key
 * @param {string} params.service - Service type
 * @param {Object} params.costBreakdown - Cost breakdown from rateCalculator
 * @param {Date} params.startDate - Service start date
 * @param {Date} params.endDate - Service end date
 * @returns {Object} Complete quotation document
 */
export function generateQuotationDocument({
  clientName,
  companyName,
  industry,
  service,
  costBreakdown,
  startDate,
  endDate,
  quoteNumber,
}) {
  const template = INDUSTRY_TEMPLATES[industry] || INDUSTRY_TEMPLATES.corporate;
  const validUntil = new Date();
  validUntil.setDate(validUntil.getDate() + 30); // Quote valid for 30 days
  
  return {
    header: {
      company: 'Metro Guards Security Services',
      abn: 'ABN: XX XXX XXX XXX', // Replace with actual ABN
      phone: '1300 731 173',
      email: 'admin@metroguards.com.au',
      website: 'www.metroguards.com.au',
      address: 'Melbourne, Victoria, Australia',
    },
    quoteDetails: {
      quoteNumber: quoteNumber || `MG-${Date.now()}`,
      issueDate: new Date().toISOString().split('T')[0],
      validUntil: validUntil.toISOString().split('T')[0],
      clientName,
      companyName,
      industry: template.name,
      service,
    },
    servicePeriod: {
      startDate: startDate ? new Date(startDate).toISOString().split('T')[0] : null,
      endDate: endDate ? new Date(endDate).toISOString().split('T')[0] : null,
    },
    industryContent: {
      introduction: template.introduction,
      valueProposition: template.valueProposition,
      features: template.features,
      specialRequirements: template.specialRequirements,
      benefits: template.benefits,
    },
    pricing: {
      ...costBreakdown,
      rateCard: [
        { type: 'Weekday Day (6am-6pm)', rate: '$40.70/hr' },
        { type: 'Weekday Night (6pm-6am)', rate: '$46.00/hr' },
        { type: 'Saturday', rate: '$59.50/hr' },
        { type: 'Sunday', rate: '$79.50/hr' },
        { type: 'Public Holiday', rate: '$95.00/hr' },
        { type: "New Year's Eve", rate: '$110.00/hr' },
      ],
      overtimeRules: [
        { description: 'First 2 hours overtime', multiplier: '1.5x base rate' },
        { description: 'After 2 hours overtime', multiplier: '2.0x base rate' },
      ],
      gstNote: 'All prices are exclusive of GST. 10% GST will be added to the final invoice.',
    },
    certifications: Object.values(ISO_CERTIFICATIONS),
    legalTerms: Object.values(LEGAL_CLAUSES).map(clause => ({
      title: clause.title,
      content: clause.clause,
    })),
    callToAction: {
      title: 'Ready to Secure Your Site?',
      message: 'Contact us today to confirm your booking or discuss your specific requirements.',
      phone: '1300 731 173',
      email: 'admin@metroguards.com.au',
      acceptanceNote: 'To accept this quotation, please reply to this email or call our office. Acceptance indicates agreement to all terms and conditions outlined above.',
    },
    footer: {
      certifications: 'ISO 9001 | ISO 14001 | ISO 45001 Certified',
      license: 'Victorian Security License No: XXX-XXX-XXX', // Replace with actual
      copyright: `© ${new Date().getFullYear()} Metro Guards Security Services. All rights reserved.`,
    },
  };
}

/**
 * Generate HTML email template for quotation
 * @param {Object} quotation - Quotation document from generateQuotationDocument
 * @returns {string} HTML email content
 */
export function generateQuotationEmailHTML(quotation) {
  const { header, quoteDetails, industryContent, pricing, certifications, legalTerms, callToAction, footer } = quotation;
  
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quote ${quoteDetails.quoteNumber} - Metro Guards</title>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #1e2247; margin: 0; padding: 0; background: #f5f5f5; }
    .container { max-width: 700px; margin: 0 auto; background: #ffffff; }
    .header { background: linear-gradient(135deg, #1e2247 0%, #2a3458 100%); color: #fdc51a; padding: 40px 30px; text-align: center; }
    .header h1 { margin: 0 0 10px 0; font-size: 28px; }
    .header p { margin: 0; opacity: 0.9; }
    .content { padding: 40px 30px; }
    .quote-box { background: #f8f9fa; border-left: 4px solid #fdc51a; padding: 20px; margin: 20px 0; }
    .price-highlight { background: linear-gradient(135deg, #1e2247 0%, #2a3458 100%); color: white; padding: 30px; border-radius: 12px; text-align: center; margin: 30px 0; }
    .price-highlight .total { font-size: 42px; color: #fdc51a; font-weight: 700; }
    .price-highlight .label { font-size: 14px; opacity: 0.8; text-transform: uppercase; }
    .rate-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
    .rate-table th, .rate-table td { padding: 12px; text-align: left; border-bottom: 1px solid #e5e7eb; }
    .rate-table th { background: #1e2247; color: #fdc51a; }
    .feature-list { list-style: none; padding: 0; }
    .feature-list li { padding: 8px 0; padding-left: 25px; position: relative; }
    .feature-list li::before { content: "✓"; position: absolute; left: 0; color: #10b981; font-weight: bold; }
    .cert-badge { display: inline-block; background: #f0fdf4; color: #166534; padding: 8px 16px; border-radius: 20px; margin: 5px; font-size: 14px; }
    .legal-section { background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0; }
    .legal-section h4 { color: #92400e; margin-top: 0; }
    .cta-box { background: #fdc51a; padding: 30px; text-align: center; border-radius: 12px; margin: 30px 0; }
    .cta-box h3 { color: #1e2247; margin-top: 0; }
    .cta-box a { display: inline-block; background: #1e2247; color: #fdc51a; padding: 12px 30px; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 10px; }
    .footer { background: #1e2247; color: white; padding: 30px; text-align: center; }
    .footer p { margin: 5px 0; opacity: 0.8; font-size: 14px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>METRO GUARDS</h1>
      <p>Security Services Quote</p>
    </div>
    
    <div class="content">
      <div class="quote-box">
        <p><strong>Quote Number:</strong> ${quoteDetails.quoteNumber}</p>
        <p><strong>Prepared For:</strong> ${quoteDetails.clientName}${quoteDetails.companyName ? ` - ${quoteDetails.companyName}` : ''}</p>
        <p><strong>Industry:</strong> ${quoteDetails.industry}</p>
        <p><strong>Issue Date:</strong> ${quoteDetails.issueDate}</p>
        <p><strong>Valid Until:</strong> ${quoteDetails.validUntil}</p>
      </div>
      
      <h2>About Our Service</h2>
      <p>${industryContent.introduction}</p>
      <p>${industryContent.valueProposition}</p>
      
      <h3>What's Included</h3>
      <ul class="feature-list">
        ${industryContent.features.map(f => `<li>${f}</li>`).join('')}
      </ul>
      
      <div class="price-highlight">
        <div class="label">Total Investment (inc. GST)</div>
        <div class="total">${pricing.costs?.total || 'Quote on request'}</div>
        <div class="label" style="margin-top: 10px;">Based on ${pricing.overview?.totalHours || 'estimated'} hours</div>
      </div>
      
      <h3>Rate Card</h3>
      <table class="rate-table">
        <thead>
          <tr>
            <th>Shift Type</th>
            <th>Hourly Rate</th>
          </tr>
        </thead>
        <tbody>
          ${pricing.rateCard.map(r => `
            <tr>
              <td>${r.type}</td>
              <td><strong>${r.rate}</strong></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      
      <h3>Our Certifications</h3>
      <div>
        ${certifications.map(c => `<span class="cert-badge">${c.code}: ${c.name}</span>`).join('')}
      </div>
      
      <div class="legal-section">
        <h4>⚠️ Important Terms</h4>
        ${legalTerms.map(t => `<p><strong>${t.title}:</strong> ${t.content}</p>`).join('')}
      </div>
      
      <div class="cta-box">
        <h3>${callToAction.title}</h3>
        <p>${callToAction.message}</p>
        <a href="tel:${callToAction.phone}">📞 ${callToAction.phone}</a>
        <a href="mailto:${callToAction.email}">✉️ Email Us</a>
      </div>
    </div>
    
    <div class="footer">
      <p><strong>${footer.certifications}</strong></p>
      <p>${footer.license}</p>
      <p>${footer.copyright}</p>
    </div>
  </div>
</body>
</html>
  `;
}

export default {
  ISO_CERTIFICATIONS,
  LEGAL_CLAUSES,
  INDUSTRY_TEMPLATES,
  generateQuotationDocument,
  generateQuotationEmailHTML,
};


