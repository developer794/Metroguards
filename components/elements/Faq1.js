'use client'
import { useState } from 'react'

const faqs = [
  {
    question: "What is Metropolitan Guards?",
    answer: "Metropolitan Guards is an Australian company that provides commercial security services. Our primary focus is to provide the best security services in Melbourne and Sydney. Rather than being global, we seek to raise awareness globally. Metropolitan Guards continues to provide efficient and productive services with each passing day. With a service footprint that can be 100% leveraged and scalable, we are present anywhere you need us. Our long-term business is backed by robust systems and procedures, making us relatively stable and sustainable."
  },
  {
    question: "Is Metropolitan Guards a Licensed security company?",
    answer: "Yes, we are. Our organization is committed to achieving and maintaining Australian and international accreditation. We have following licenses: Private Security Business Licence (VIC) Master Licence (NSW) Labour Hire License. Furthermore, we are certified in Quality Management [ISO 9001-2015], Environmental Management [ISO 14001-2015], and OH&S [ISO 45001-2015]."
  },
  {
    question: "Do Metropolitan Guards have registration?",
    answer: "Yes, we do have the following registrations: Certificate of Registration of a Company and Certificate of Registration of Business Name."
  },
  {
    question: "Do your employees have fully work insurance and are they fully insured?",
    answer: "Yes, our employees are fully insured and they do have public liability and work insurance."
  },
  {
    question: "Do Metropolitan Guards take special precaution in the pandemic situation?",
    answer: "Metropolitan Guards follows industry-specific practices and regulations to provide risk-free services. Our professionals use hygienic and effective supplies to ensure you are at ease."
  },
  {
    question: "Does Metropolitan Guards security officer use Uniform?",
    answer: "Yes, our team members must maintain their uniforms in perfect condition. In addition to their smart appearance and high presentation standards, our personnel receive training on presentation during induction. Supervisors regularly monitor standards."
  },
  {
    question: "Which cities do Metropolitan Guards cover?",
    answer: "Metropolitan Guards provides services throughout Melbourne and Sydney."
  },
  {
    question: "Which services do Metropolitan Guards provide?",
    answer: "We provide Static security, Corporate Concierge security, Retail and loss prevention security, Building and apartment security, Event and Crowd control, Construction site security, K9 security, Alarm response, and Mobile patrol security."
  },
  {
    question: "Is Metropolitan Guards an Australian based company?",
    answer: "Yes, the company was founded to provide high-quality, customer-centric services in a safe and fair environment. We follow a risk management approach to deliver client-focused services."
  },
  {
    question: "Is Metropolitan Guards a government or a private company?",
    answer: "Metropolitan Guards is a privately owned company."
  },
  {
    question: "What are integrated Facilities Services?",
    answer: "Our integrated services team helps you with security or customer service needs. By eliminating unnecessary overlap, we offer cost-effective service through an integrated model."
  },
  {
    question: "Does Metropolitan company work on a contract based?",
    answer: "Yes, we work on a contract basis. We’re known for long-term client relationships and safe environments for clients."
  },
  {
    question: "How to work with Metropolitan Guards?",
    answer: "To work with us, visit our website and look for current opportunities: https://metroguards.com.au/careers/"
  },
  {
    question: "Is Metropolitan Guards an excellent company so far?",
    answer: "Yes, we take pride in promoting diversity and inclusiveness, working together to make the world safer."
  },
  {
    question: "How are your security guards trained?",
    answer: "Our guards undergo site-specific and Covid-19 safety training modules before deployment to ensure competency and compliance."
  },
  {
    question: "Do you provide your security guard service in Melbourne?",
    answer: "Yes, we are available wherever you need us. Call us at 1300 73 11 73 or visit our contact page."
  },
  {
    question: "Do Metropolitan Guards security services keep daily reports?",
    answer: "Yes. Reports are sent monthly to supervisors and client delivery managers based on specific client requirements."
  },
  {
    question: "Do Metropolitan Guards have any rewards or memberships?",
    answer: "Yes. Awards include Australian Achiever Awards (2014–2016), ASIAL Corporate Membership, and ASIAL Bronze Membership."
  },
  {
    question: "What is the minimum requirement for a job applicant for a security guard at Metropolitan Guards?",
    answer: "Applicants must have a valid security license, excellent communication skills, and be physically fit. Other requirements may apply depending on the position."
  },
]

export default function Faq1() {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div id="faqs">
      {faqs.map((faq, index) => (
        <div className="single-faq" key={index}>
          <h2
            className={activeIndex === index ? "faq-heading" : "faq-heading collapsed"}
            onClick={() => handleClick(index)}
          >
            {faq.question}
          </h2>
          <div
            id={`collapse${index}`}
            className={`accordion-collapse collapse ${activeIndex === index ? "show" : ""}`}
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
