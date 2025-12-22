"use client";
import Layout from "@/components/layout/Layout"
import Subscribe from "@/components/homepages/home1/Subscribe"
import Image from "next/image"


export default function ConditionsOfHirePage() {
    return (
        <>
            <Layout 
                headerStyle={1} 
                footerStyle={1} 
                breadcrumbTitle="Conditions of Hire"
                mainTitle="Conditions of Agreement"
                backgroundImage="https://dqaghuhkouihcvqvcsco.supabase.co/storage/v1/object/public/MetroGuards-Images/Corporate%20Security%20Guards/81FC094D-5077-4246-9C7B-CF19E9EC602B_1_105_c.webp"
                subtitle="Metropolitan Guards / Manned Guarding Services Agreement"
            >
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden" style={{boxShadow: '0 15px 35px rgba(0,0,0,0.08)',padding: '20px'}}>
                        {/* Header */}
                        <div className="bg-gradient-to-r from-[#1e2247] to-[#2a3458] text-white py-10 px-10 border-b-8 border-[#fdc51a]">
                            <div className="flex items-center justify-between flex-wrap gap-4">
                                <div style={{padding: '10px'}}>
                                    <h2 className="text-4xl font-bold mb-2 tracking-tight">CONDITIONS OF AGREEMENT</h2>
                                    <p className="text-base text-gray-200 font-medium">Metropolitan Guards / Security Services Agreement</p>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="px-10 py-12 md:px-16 md:py-16" style={{lineHeight: '1.7'}}>
                            {/* Section 1 */}
                            <section className="mb-10">
                                <h2 className="text-2xl font-bold  mb-6 pb-2 border-b-2 border-[#fdc51a]" style={{padding: '10px 0',color: 'black',fontWeight:'700'}}>
                                    1 DEFINITIONS AND INTERPRETATION
                                </h2>

                                <h3 className="text-xl font-bold text-[#1e2247] mb-4 mt-6">1.1 Definitions</h3>
                                <p className="mb-4 text-gray-800 text-base">In this agreement:</p>

                                <div className="space-y-4 text-gray-800 text-base" style={{textAlign: 'justify'}}>
                                    <p><strong className="text-[#1e2247]">CCA</strong> means Schedule 2 to the Competition and Consumer Act 2010 (Cth) and the corresponding provisions of the applicable fair trading legislation in the State or Territory in which this agreement is entered into, as applicable.</p>

                                    <p><strong className="text-[#1e2247]">Additional Provisions</strong> means the additional provisions set out in item 9.</p>

                                    <p><strong className="text-[#1e2247]">Australian Consumer Law</strong> means the Australian Consumer Law as set out at Schedule 2 of the CCA.</p>

                                    <p><strong className="text-[#1e2247]">Business Day</strong> means:</p>
                                    <ul className="list-none ml-8 space-y-3 mt-3">
                                        <li className="pl-4">a) for the purposes of clause 11.4, a day on which banks are open for business in the city where the notice or other communication is received excluding a Saturday, Sunday or public holiday; and</li>
                                        <li className="pl-4">b) for all other purposes, a day on which banks are open for business in the State excluding a Saturday, Sunday or public holiday.</li>
                                    </ul>

                                    <p><strong className="text-[#1e2247]">Claim</strong> means any claim or cause of action in contract, tort, under any legislation or subordinate legislation, or otherwise.</p>

                                    <p><strong className="text-[#1e2247]">Client Group</strong> means the Client and each of its Related Bodies Corporate and Client Group Member means any member of the Client Group.</p>

                                    <p><strong className="text-[#1e2247]">Client's Obligations</strong> means all of the liabilities, obligations and requirements (whether express or implied) from time to time imposed on, or assumed by, the Client:</p>
                                    <ul className="list-none ml-8 space-y-3 mt-3">
                                        <li className="pl-4">c) under this deed, or arising from this deed; or</li>
                                        <li className="pl-4">d) under any law relating to;
                                            <ul className="list-none ml-8 space-y-2 mt-2">
                                                <li className="pl-4">(1) this deed; or</li>
                                                <li className="pl-4">(2) anything the Client must do under this deed.</li>
                                            </ul>
                                        </li>
                                    </ul>

                                    <p><strong className="text-[#1e2247]">Confidential Information</strong> means any information:</p>
                                    <ul className="list-none ml-8 space-y-3 mt-3">
                                        <li className="pl-4">e) relating to the products and services, business and affairs, or any customers, clients, employees, subcontractors or other persons doing business with or of that party;</li>
                                        <li className="pl-4">f) relating to the provisions of this agreement or the commercial arrangements between the parties;</li>
                                        <li className="pl-4">g) that is by its nature confidential, designated as confidential by that party, or which the other party knows, or ought to know, is confidential.</li>
                                    </ul>

                                    <p><strong className="text-[#1e2247]">Commencement Date</strong> means the date in item 3.</p>

                                    <p><strong className="text-[#1e2247]">Consumer</strong> has the same meaning as in section 3 of the Australian Consumer Law.</p>

                                    <p><strong className="text-[#1e2247]">Consumer Guarantee</strong> means a consumer guarantee (as defined in the CCA) applicable to any contract under the CCA. Corporations Act means the Corporations Act 2001 (Cth).</p>

                                    <p><strong className="text-[#1e2247]">Default</strong> means a breach by a party of, or failure by a party to comply with, that party's obligations under, any of the provisions of this agreement including a failure by the Client to comply with the Client's Obligations or by Metro Guards to comply with Metro Guards's Obligations.</p>

                                    <p><strong className="text-[#1e2247]">Excluded Services</strong> means the matters listed in item 4.</p>

                                    <p><strong className="text-[#1e2247]">Fair or Reasonable</strong> means 'fair or reasonable' for the purposes of section 64A of the CCA.</p>

                                    <p><strong className="text-[#1e2247]">Force Majeure Event</strong> means any storm, earthquake, strike, lock-out, labour dispute, act of God, war (whether declared or not), act (administrative or legislative) of any Government or Government Agency, riot or civil commotion, fire, explosion or mechanical break-down but does not include lack of funds for any reason.</p>

                                    <p><strong className="text-[#1e2247]">Government Agency</strong> means any government or governmental, administrative, monetary, fiscal or judicial body, department, commission, local government, authority, tribunal, agency or entity.</p>

                                    <p><strong className="text-[#1e2247]">Initial Period</strong> means the period specified in item 3.</p>

                                    <p><strong className="text-[#1e2247]">Insolvency Event</strong> in the context of a person means:</p>
                                    <ul className="list-none ml-8 space-y-3 mt-3">
                                        <li className="pl-4">(a) a receiver, receiver and manager, official manager, trustee, administrator, other controller (as defined in the Corporations Act) or similar official is appointed, or steps are taken for such appointment, in respect of that person or over any of the equipment or undertaking of the person;</li>
                                        <li className="pl-4">(b) the person is or becomes insolvent, is unable to pay its debts when they are due, or is or becomes unable to pay its debts or is presumed to be insolvent within the meaning of the Corporations Act;</li>
                                        <li className="pl-4">(c) the person ceases or threatens to cease to carry on business; or</li>
                                        <li className="pl-4">(d) an application or order is made for the liquidation of the person or a resolution is passed or any steps are taken to liquidate or pass a resolution for the liquidation of the person.</li>
                                    </ul>

                                    <p><strong className="text-[#1e2247]">Item</strong> means an Item set out in the Reference Table at the beginning of this agreement.</p>

                                    <p><strong className="text-[#1e2247]">Liability Limit</strong> means the amount specified in item 8.</p>

                                    <p><strong className="text-[#1e2247]">Loss</strong> means any liability, cost, expense, loss or damage.</p>

                                    <p><strong className="text-[#1e2247]">Money Payable</strong> means all and any money payable by the Client to Metro Guards from time to time under or relating to this agreement, including for any Losses.</p>

                                    <p><strong className="text-[#1e2247]">Option Period</strong> means the period specified in item 3.</p>

                                    <p><strong className="text-[#1e2247]">Related Body Corporate</strong> has the meaning given in section 9 of the Corporations Act.</p>

                                    <p><strong className="text-[#1e2247]">Service Fee</strong> means the amount specified in item 6 as it may be altered from time to time.</p>

                                    <p><strong className="text-[#1e2247]">Services</strong> means the services to be provided by Metro Guards to the Client listed in item 4, but do not include any Excluded Services.</p>

                                    <p><strong className="text-[#1e2247]">Site</strong> means the site/s specified in item 7.</p>

                                    <p><strong className="text-[#1e2247]">State</strong> means State or Territory of the Commonwealth of Australia specified in Item 10.</p>

                                    <p><strong className="text-[#1e2247]">Tax Invoice</strong> includes any document or record treated by the Commissioner of Taxation as a tax invoice or as a document entitling a recipient to an input tax credit.</p>

                                    <p><strong className="text-[#1e2247]">Term</strong> means the Initial Period, as extended in accordance with clause 3.</p>

                                    <p><strong className="text-[#1e2247]">Metro Guards Services</strong> means Metropolitan Guards and each of its Related Bodies Corporate and Metro Guards, Member means any member of the Metro Guards Group.</p>

                                    <p><strong className="text-[#1e2247]">Metro Guards's Obligations</strong> means the obligations of Metro Guards under this agreement, or imposed by law, in relation to the provision of the Services.</p>
                                </div>

                                <h3 className="text-xl font-bold text-[#1e2247] mb-4 mt-8">1.2 Interpretation</h3>
                                <p className="mb-4 text-gray-800 text-base">In this agreement:</p>
                                <div className="space-y-4 text-gray-800 text-base" style={{textAlign: 'justify'}}>
                                    <p>a. Headings and bold type are for convenience only and do not affect the interpretation of this agreement.</p>
                                    <p>b. Other parts of speech and grammatical forms of a word or phrase defined in this agreement have a corresponding meaning.</p>
                                    <p>c. An expression importing a person includes any company, partnership, joint venture, association, corporation or other body corporate and any Government Agency as well as an individual.</p>
                                    <p>d. A reference to a party to this agreement includes that party's successors and permitted assignees.</p>
                                    <p>e. A promise on the part of 2 or more persons binds them jointly and severally.</p>
                                    <p>f. A reference to liquidation or insolvency includes appointment of an administrator, compromise, arrangement, merger, amalgamation, reconstruction, winding up, dissolution, deregistration, assignment for the benefit of creditors, scheme, composition or arrangement with creditors, insolvency, bankruptcy, or any similar procedure or, where applicable, changes in the constitution of any partnership or person, or death.</p>
                                    <p>g. No provision of this agreement Metro Guards be construed adversely to a party because that party was responsible for the preparation of this agreement or that provision.</p>
                                </div>

                                <h3 className="text-xl font-bold text-[#1e2247] mb-4 mt-8">1.3 Interpretation of Inclusive Expressions</h3>
                                <p className="text-gray-800 text-base" style={{textAlign: 'justify'}}>
                                    Specifying anything in this agreement after the words 'include' or 'for example' or similar expressions does not limit what else is included.
                                </p>

                                <h3 className="text-xl font-bold text-[#1e2247] mb-4 mt-8">1.4 Business Day</h3>
                                <p className="text-gray-800 text-base" style={{textAlign: 'justify'}}>
                                    Where the day on or by which any thing is to be done is not a Business Day, that thing must be done on or by the next Business Day.
                                </p>
                            </section>

                            {/* Section 2 */}
                            <section className="mb-10">
                                <h2 className="text-2xl font-bold text-[#1e2247] mb-6 pb-2 border-b-2 border-[#fdc51a]" style={{padding: '10px 0',color:'black',fontWeight:'700'}}>
                                    2 APPOINTMENT OF METRO GUARDS
                                </h2>
                                <div className="space-y-4 text-gray-800 text-base" style={{textAlign: 'justify'}}>
                                    <p>a. The Client engages Metro Guards to provide the Services, and Metro Guards accepts that engagement and must perform the Services in accordance with this agreement.</p>
                                    <p>b. Metro Guards will provide the Services on an exclusive basis and the Client must not engage other parties to provide equivalent services instead of the Services.</p>
                                    <p>c. The Services to be provided by Metro Guards under this agreement do not include any Excluded Services.</p>
                                </div>
                            </section>

                            {/* Section 3 */}
                            <section className="mb-10">
                                <h2 className="text-2xl font-bold text-[#1e2247] mb-6 pb-2 border-b-2 border-[#fdc51a]" style={{padding: '10px 0',color:'black',fontWeight:'700'}}>
                                    3 PROVISION OF SERVICES
                                </h2>

                                <h3 className="text-xl font-bold text-[#1e2247] mb-4 mt-6">3.1 Supply of Services</h3>
                                <p className="text-gray-800 text-base mb-4" style={{textAlign: 'justify'}}>
                                    Metro Guards must provide the Services to the Client at the Site and, subject to clause 3.5, the services as listed in item 4 are the only Services that Metro Guards must provide.
                                </p>

                                <h3 className="text-xl font-bold text-[#1e2247] mb-4 mt-6">3.2 Acknowledgement of Services</h3>
                                <p className="mb-4 text-gray-800 text-base">The parties acknowledge and agree that:</p>
                                <div className="space-y-4 text-gray-800 text-base" style={{textAlign: 'justify'}}>
                                    <p>a. the Service Fee is based solely on the value of the Services provided by Metro Guards and is unrelated to the value of the Client's property located or held at the Site or the property of others located in the vicinity of the Site; and</p>
                                    <p>b. Metro Guards delivers and the Client accepts the Services on the basis that they are of a deterrent nature only and Metro Guards cannot guarantee that the provision of the Services Metro Guards prevent all or any security incidents.</p>
                                </div>

                                <h3 className="text-xl font-bold text-[#1e2247] mb-4 mt-6">3.3 Shared Services and Replacement Services - Security Service Services</h3>
                                <div className="space-y-4 text-gray-800 text-base" style={{textAlign: 'justify'}}>
                                    <p>(d) The Client acknowledges that:</p>
                                    <ul className="list-none ml-8 space-y-3 mt-3">
                                        <li className="pl-4">1) the Services may be shared with other clients of Metro Guards located in the vicinity of the Site; and</li>
                                        <li className="pl-4">2) any interruptions or delays (or both) caused by break-ins at any other client's premises, other emergencies including fire, flood, accident, police or emergency service activities, busy periods or other unforeseen circumstances, or any other similar causes, may alter the Services provided by Metro Guards (including delay in, or preventing a response or a reduction to, any of the agreed number of inspections) (missed services).</li>
                                    </ul>

                                    <p>(e) Where Metro Guards fails to complete the agreed number of inspections due to any reason referred to in clause 3.3(a), Metro Guards endeavour to provide a replacement inspection prior to the end of the succeeding billing period (Replacement Service).</p>

                                    <p>(f) Metro Guards does not guarantee that a Replacement Service Metro Guards be able to be provided for all missed services and Metro Guards provide a credit note in the subsequent billing period for the value of the missed services which are not replaced in accordance with clause 3.3(b).</p>

                                    <p>(g) Replacement Services are unable to be provided for the following types of services and a credit note Metro Guards be provided in the subsequent billing period where these types of services are missed:</p>
                                    <ul className="list-none ml-8 space-y-3 mt-3">
                                        <li className="pl-4">1) Locks ups / Unlock: Metro Guards holds Client keys and/or access cards, which are used to lock and open the premises.</li>
                                        <li className="pl-4">2) Escorts: provided in circumstances where the Client requires security during a specified period of time.</li>
                                        <li className="pl-4">3) Welfare Checks: security checks conducted on staff members.</li>
                                    </ul>

                                    <p>(h) Other than the provision of credit notes in accordance with clauses 3.3(c) and (d), Metro Guards not be liable to refund the Client for any alteration of the Services due to the reasons set out in clause [3.3(a)].</p>

                                    <p>(i) This clause does not purport to exclude, restrict or modify the Consumer Guarantees as outlined in Division 1, Part 3-2, Schedule 2 of the Australian Consumer Law which apply to our services. For major failures with the service, you are entitled:</p>
                                    <ul className="list-disc ml-12 space-y-2 mt-3">
                                        <li>to cancel your service contract with us; and</li>
                                        <li>to a refund for the unused portion, or to compensation for its reduced value</li>
                                    </ul>
                                    <p className="mt-3">You are also entitled to be compensated for any other reasonably foreseeable loss or damage.</p>
                                    <p className="mt-3">If the failure does not amount to a major failure, you are entitled to have problems with the service rectified in a reasonable time and, if this is not done, to cancel your contract and obtain a refund for the unused portion of the contract.</p>
                                </div>

                                <h3 className="text-xl font-bold text-[#1e2247] mb-4 mt-6">3.4 Additional Services</h3>
                                <div className="space-y-4 text-gray-800 text-base" style={{textAlign: 'justify'}}>
                                    <p>(a) The Client, by written notice, may request that:</p>
                                    <ul className="list-none ml-8 space-y-3 mt-3">
                                        <li className="pl-4">1) Metro Guards make reasonable changes to the Services (including additions, omissions or reductions); or</li>
                                        <li className="pl-4">2) the size, scope, nature or part of the Site in respect of which the Services are to be performed be changed, (Additional Services).</li>
                                    </ul>

                                    <p>(b) Where the Client requests Metro Guards to perform Additional Services not covered by the provisions of this agreement, and Metro Guards agrees to do so, then the provisions of this agreement Metro Guards apply to the Additional Services unless expressly otherwise provided and the Service Fee Metro Guards be increased by the amount quoted for such extra work, or if no fee is quoted, an amount calculated by Metro Guards at Metro Guards's standard rates.</p>

                                    <p>(c) For Adhoc or Casual Services (0 to 3 months), clients are required to provide a minimum of 48 hours' notice prior to the commencement of the service for any cancellations or changes. If the cancellation or change is made within 48 hours of the scheduled service start time, a cancellation fee may apply.</p>

                                    <p>For Permanent Shift Changes or Cancellations, clients must provide at least 30 days' notice prior to the intended cancellation or amendment. If the notice period is not adhered to, additional fees may be charged to cover the disruption.</p>
                                </div>

                                <h3 className="text-xl font-bold text-[#1e2247] mb-4 mt-6">3.5 Assignment and Subcontracting</h3>
                                <p className="text-gray-800 text-base" style={{textAlign: 'justify'}}>
                                    Metro Guards may assign its rights under this agreement and subcontract its obligations to other subcontractors as required. However, any assignment or subcontracting will not relieve Metro Guards of its obligations under this agreement. By signing this Agreement for Services, the Client authorises Metro Guards to engage subcontractors in the provision of security services.
                                </p>
                            </section>

                            {/* Section 4 */}
                            <section className="mb-10">
                                <h2 className="text-2xl font-bold text-[#1e2247] mb-6 pb-2 border-b-2 border-[#fdc51a]" style={{padding: '10px 0',color:'black',fontWeight:'700'}}>
                                    4 METRO GUARDS'S GENERAL OBLIGATIONS
                                </h2>
                                <div className="space-y-4 text-gray-800 text-base" style={{textAlign: 'justify'}}>
                                    <p>(a) Metro Guards will perform the Services to the Client's reasonable satisfaction and in conformity with the Client's reasonable directions.</p>
                                    <p>(b) In performing the Services, Metro Guards must:</p>
                                    <ul className="list-none ml-8 space-y-3 mt-3">
                                        <li className="pl-4">1) use its reasonable endeavours to not unreasonably interfere with the normal use of the Site by the Client or the tenants or other permitted occupiers or users of the Site;</li>
                                        <li className="pl-4">2) subject to clause 10, make good any damage to the Site caused by any negligence or wilful default of Metro Guards in carrying out the Services; and Metro Guards must comply with all laws and mandatory industry codes relevant to the supply of the Services and, when on the Site, comply with all the Client's reasonable policies relating to occupational health and safety and security that the Client first notifies Metro Guards in writing of.</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Section 5 */}
                            <section className="mb-10">
                                <h2 className="text-2xl font-bold text-[#1e2247] mb-6 pb-2 border-b-2 border-[#fdc51a]" style={{padding: '10px 0',color:'black',fontWeight:'700'}}>
                                    5 CLIENT'S GENERAL OBLIGATIONS
                                </h2>
                                <p className="text-gray-800 text-base" style={{textAlign: 'justify'}}>
                                    The Client must, at the Client's cost, duly and diligently provide Metro Guards with all necessary information, materials, and assistance to facilitate the provision of security services. This includes ensuring safe and sufficient access to all parts of the site, as well as access to and use of electricity, water, and other utilities as required by Metro Guards. The Client is also responsible for maintaining a safe working environment, including appropriate site supervision, compliance with Occupational Health and Safety (OH&S) regulations, and providing details of any previous incidents and the reasons for engaging security services. Additionally, the Client must supply a risk management plan, Job Safety Analysis , and Safe Work Method Statements to ensure the effective and safe execution of security operations.
                                </p>
                            </section>

                            {/* Section 6 */}
                            <section className="mb-10">
                                <h2 className="text-2xl font-bold text-[#1e2247] mb-6 pb-2 border-b-2 border-[#fdc51a]" style={{padding: '10px 0',color:'black',fontWeight:'700'}}>
                                    6 SERVICE FEES AND OTHER MONEY PAYABLE
                                </h2>

                                <h3 className="text-xl font-bold text-[#1e2247] mb-4 mt-6">6.1 Service Fees</h3>
                                <div className="space-y-4 text-gray-800 text-base" style={{textAlign: 'justify'}}>
                                    <p>a) The Client must pay the Service Fees and any other Money Payable to Metro Guards or a Metropolitan guard services Group Member. In the event that the Client requests Metro Guards to perform any Services for a third party and Metro Guards does not have a direct contractual relationship with that third party, the Client must pay the Service Fees incurred by Metro Guards in the performance of those Services for that third party as if the Services were performed for the Client under this agreement.</p>
                                    <p>b) The Service Fee may be varied by Metro Guards from time to time by the percentage equal to the percentage increase in the total of all wages, vehicle acquisition and maintenance costs and other costs whether direct or indirect involved in the performance of the Services by Metro Guards.</p>
                                    <p>c) Such variations will be determined by Metro Guards in its absolute discretion.</p>
                                    <p>d) Metro Guards will inform the Client of any variations to the Service Fees at least 30 days prior to such variations coming into effect.</p>
                                    <p>e) If, in that 30 day notice period, the Client objects to Metro Guards's variation, Metro Guards and the Client will meet and discuss the price increase and seek to resolve such objections.</p>
                                    <p>f) If the parties are unable to resolve this objection, the Client may terminate the Agreement prior to the variation taking effect by giving notice to Metro Guards.</p>
                                </div>

                                <h3 className="text-xl font-bold text-[#1e2247] mb-4 mt-6">6.2 Payment Invoice</h3>
                                <div className="space-y-4 text-gray-800 text-base" style={{textAlign: 'justify'}}>
                                    <p>a) Subject to clause 6.3, Metro Guards will provide the Client with an invoice for the Services Fee which the Client must pay within [07] days of the date of the invoice.</p>
                                    <p>b) The Client must pay to Metro Guards on demand all costs, charges and expenses, including legal costs on a full indemnity basis, incurred by Metro Guards in the collection of any overdue account, or incurred by Metro Guards due to any breach of this agreement by the Client.</p>
                                </div>

                                <h3 className="text-xl font-bold text-[#1e2247] mb-4 mt-6">6.3 Payment Terms</h3>
                                <div className="space-y-4 text-gray-800 text-base" style={{textAlign: 'justify'}}>
                                    <p>a) Time will be of the essence in respect of the payment of Money Payable.</p>
                                    <p>b) If the Client fails to pay to Metro Guards any Money Payable (including any Unpaid Amounts), Metro Guards may do all or any one or more of the following:</p>
                                    <ul className="list-none ml-8 space-y-3 mt-3">
                                        <li className="pl-4">1) suspend the Services;</li>
                                        <li className="pl-4">2) immediately terminate this agreement by providing written notice to the Client;</li>
                                        <li className="pl-4">3) terminate any credit facilities; and</li>
                                        <li className="pl-4">4) institute legal action for recovery of outstanding amounts and costs incurred.</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Section 7 */}
                            <section className="mb-10">
                                <h2 className="text-2xl font-bold text-[#1e2247] mb-6 pb-2 border-b-2 border-[#fdc51a]" style={{padding: '10px 0',color:'black',fontWeight:'700'}}>
                                    7 CONFIDENTIAL INFORMATION
                                </h2>

                                <h3 className="text-xl font-bold text-[#1e2247] mb-4 mt-6">7.1 Confidentiality</h3>
                                <div className="space-y-4 text-gray-800 text-base" style={{textAlign: 'justify'}}>
                                    <p>a) Each party (recipient) must keep confidential, and not to use or disclose, other than as permitted by this agreement, any Confidential Information of the other party (discloser), including Confidential Information provided to or obtained by the recipient prior to entry into this agreement.</p>
                                    <p>b) The obligations in clause 7.1(a) do not apply to Confidential Information that is:</p>
                                    <ul className="list-none ml-8 space-y-3 mt-3">
                                        <li className="pl-4">1) required to be disclosed by applicable law, in the public domain otherwise than as a result of a breach of this agreement or other obligation of confidence; or</li>
                                        <li className="pl-4">2) already known by, or rightfully received, or independently developed, by the recipient free of any obligation of confidence.</li>
                                    </ul>
                                </div>

                                <h3 className="text-xl font-bold text-[#1e2247] mb-4 mt-6">7.2 Usage and Disclosure</h3>
                                <div className="space-y-4 text-gray-800 text-base" style={{textAlign: 'justify'}}>
                                    <p>Each party may use and disclose Confidential Information of the other only on a 'need to know' basis:</p>
                                    <ul className="list-none ml-8 space-y-3 mt-3">
                                        <li className="pl-4">a) with the prior written consent of the other party;</li>
                                        <li className="pl-4">b) in the case of Metro Guards, to its directors, agents, professional advisers, employees, contractors and permitted subcontractors solely for the exercise of rights or the performance of obligations under this agreement; or</li>
                                        <li className="pl-4">c) in the case of the Client:
                                            <ul className="list-none ml-8 space-y-2 mt-2">
                                                <li className="pl-4">1) to Client Group Members and their directors, agents, professional advisers, employees and contractors; or</li>
                                                <li className="pl-4">2) any party who is a bona fide purchaser of the Site.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            {/* Section 8 */}
                            <section className="mb-10">
                                <h2 className="text-2xl font-bold text-[#1e2247] mb-6 pb-2 border-b-2 border-[#fdc51a]" style={{padding: '10px 0',color:'black',fontWeight:'700'}}>
                                    8 TERM AND TERMINATION
                                </h2>

                                <h3 className="text-xl font-bold text-[#1e2247] mb-4 mt-6">8.1 Term</h3>
                                <div className="space-y-4 text-gray-800 text-base" style={{textAlign: 'justify'}}>
                                    <p>a) This agreement starts on the Commencement Date and continues for the Initial Period and for any extended periods under clause 8.1(b) unless it is terminated in accordance with this clause 8.1(c), 8.2 or otherwise at law.</p>
                                    <p>b) At the end of the Initial Period this agreement shall be automatically extended unless and until it is terminated in accordance with clause 8.1(c) or 8.2.</p>
                                    <p>c) Either party may terminate the agreement at the conclusion of the Initial Period or at any time following the Initial Period by giving 30 days written notice or otherwise in accordance with clause 8.2.</p>
                                </div>

                                <h3 className="text-xl font-bold text-[#1e2247] mb-4 mt-6">8.2 Termination for Breach or Insolvency</h3>
                                <div className="space-y-4 text-gray-800 text-base" style={{textAlign: 'justify'}}>
                                    <p>(a) If a party:</p>
                                    <ul className="list-none ml-8 space-y-3 mt-3">
                                        <li className="pl-4">1) breaches any provision of this agreement and fails to remedy the failure after receiving [14] Business Days' notice from the other party to do so; or</li>
                                        <li className="pl-4">2) commits a material breach of this agreement which in the reasonable opinion of the other party is not capable of being remedied,</li>
                                        <li className="pl-4">3) Metro Guards may terminate this Agreement, or a Proposal, in full or in relation to specific Goods or Services, immediately if, in its absolute discretion, the provision of the Services at any of Your Sites poses a risk to any of Metro Guards personnel.</li>
                                    </ul>

                                    <p>(b) then the other party may terminate this agreement by giving 7 days' notice to the party in breach of this agreement of the termination which is effective immediately on receipt of that notice or such other date as is specified in the notice.</p>

                                    <p>(c) If an Insolvency Event occurs in relation to the Client, then Metro Guards may terminate this agreement by giving Notice to the Client of the termination which is effective immediately on receipt of that Notice by the Client or such other date as is specified in the Notice by Metro Guards.</p>
                                </div>
                            </section>

                            {/* Section 9 */}
                            <section className="mb-10">
                                <h2 className="text-2xl font-bold text-[#1e2247] mb-6 pb-2 border-b-2 border-[#fdc51a]" style={{padding: '10px 0',color:'black',fontWeight:'700'}}>
                                    9 INDEMNITY
                                </h2>
                                <p className="text-gray-800 text-base" style={{textAlign: 'justify'}}>
                                    Subject to the provisions of clauses 11 and 10.1, each party indemnifies the other for any Loss suffered or incurred by the other party, arising out of:
                                </p>
                                <div className="space-y-4 text-gray-800 text-base mt-4" style={{textAlign: 'justify'}}>
                                    <p>(a) any failure to perform that party's obligations under this agreement; and</p>
                                    <p>(b) any negligence, or Metro Guards ful default by that party.</p>
                                </div>
                            </section>

                            {/* Section 10 */}
                            <section className="mb-10">
                                <h2 className="text-2xl font-bold text-[#1e2247] mb-6 pb-2 border-b-2 border-[#fdc51a]" style={{padding: '10px 0',color:'black',fontWeight:'700'}}>
                                    10 LIMITS ON LIABILITY
                                </h2>

                                <h3 className="text-xl font-bold text-[#1e2247] mb-4 mt-6">10.1 Application of the CCA</h3>
                                <div className="space-y-4 text-gray-800 text-base" style={{textAlign: 'justify'}}>
                                    <p>(a) Nothing in this agreement is to be construed as excluding, restricting or modifying the application of any liability of Metro Guards to the extent that it cannot by operation of law (including the operation of the CCA) be excluded, restricted or modified.</p>
                                    <p>(b) If the Client is a Consumer:</p>
                                    <ul className="list-none ml-8 space-y-3 mt-3">
                                        <li className="pl-4">1) clause 10 does not apply to any liability of Metro Guards for failure to comply with a Consumer Guarantee;</li>
                                        <li className="pl-4">2) in respect of any goods supplied under this agreement, subject to clause (4), the liability of Metro Guards for Loss, however caused (including by the negligence of Metro Guards), suffered or incurred by the Client because of a failure to comply with a Consumer Guarantee is limited to Metro Guards (at its election):
                                            <ul className="list-disc ml-8 space-y-2 mt-2">
                                                <li>in the case of a minor failure, replacing the goods, supplying equivalent goods or repairing the goods;</li>
                                                <li>in the case of a major failure, paying the cost of replacing the goods or of acquiring equivalent goods, paying the cost of having the goods repaired; or</li>
                                                <li>in the case of a major failure where the Consumer chooses to keep the goods, providing a partial refund for the loss of value of the goods.</li>
                                            </ul>
                                        </li>
                                    </ul>

                                    <p>(3) in respect of the Services, subject to clause (4), unless the services are Excluded Services, the liability of Metro Guards for Loss, however caused (including by the negligence of Metro Guards), suffered or incurred by the Client because of a failure to comply with a Consumer Guarantee is limited to Metro Guards (at its election):</p>
                                    <ul className="list-disc ml-12 space-y-2 mt-3">
                                        <li>resupplying the Services; or</li>
                                        <li>paying the cost of having the services supplied again; and</li>
                                    </ul>

                                    <p>(4) clauses (2) and (3) do not apply if it is not Fair or Reasonable for Metro Guards to rely on them.</p>
                                </div>

                                <h3 className="text-xl font-bold text-[#1e2247] mb-4 mt-6">10.2 Damages and Consequential Loss</h3>
                                <div className="space-y-4 text-gray-800 text-base" style={{textAlign: 'justify'}}>
                                    <p>Subject to the other provisions of this clause 10, including clause 10.1:</p>
                                    <p>(a) if any Default gives a party a right to damages, those damages will be limited to damages for direct loss and damage attributable to such Default;</p>
                                    <p>(b) the rights of a party to damages for indirect and consequential loss or damage are excluded; and</p>
                                    <p>(c) neither party will be liable to any other for any failure to realise anticipated savings, loss of revenue or profits, loss of opportunity or goodwill, loss of or inability to use equipment, loss of use, economic loss, special losses or damages suffered by a party to this agreement or any other person.</p>
                                </div>

                                <h3 className="text-xl font-bold text-[#1e2247] mb-4 mt-6">10.3 Further Limitation on Claims</h3>
                                <div className="space-y-4 text-gray-800 text-base" style={{textAlign: 'justify'}}>
                                    <p>Subject to the other provisions of this clause, clause 10, including clause 10.1, Metro Guards is not liable to the Client for any Loss, caused by any reason beyond Metro Guards's reasonable control however caused, including:</p>
                                    <p>(a) a Force Majeure Event;</p>
                                    <p>(b) an act or omission of the Client, its employees or persons otherwise engaged by them; and</p>
                                    <p>(c) any Loss, damage or liability suffered or incurred by the Client except to the extent to which such Loss, damage or liability is caused by the negligence of Metro Guards or any of its employees acting within the scope of their employment.</p>
                                    <p>(d) failing to supply any of the Goods or Services as a consequence of strikes, labour disputes, fires, floods, other extreme weather conditions, accidents, invasions, riots, mobs, wars, national emergencies, significant or sustained disruption to power services, embargoes or restraints or any other circumstances beyond the reasonable control of Metro Guards such as unusually high occurrence of Alarm Responses;</p>
                                    <p>(e) Any indirect, consequential, special or economic loss, cost or liability; or</p>
                                    <p>(f) any loss of profit, loss of use, loss of income, loss of rental or other benefit, loss of production, loss of actual or potential business opportunity or loss to reputation; or</p>
                                    <p>(g) any loss or damage suffered by You except if such loss or damage is caused solely and exclusively by the Metro Guards employee</p>
                                    <p>(h) any loss, damage or destruction of keys, key cards or other access device provided by You to Metro Guards, including but not limited to replacement of locks or reprogramming of access devices. Notwithstanding Metro Guards agrees to pay for the replacement cost of key, key card, if such loss, damage or destruction is caused solely by Metro Guards employee.</p>
                                </div>

                                <h3 className="text-xl font-bold text-[#1e2247] mb-4 mt-6">10.4 Liability Limit</h3>
                                <div className="space-y-4 text-gray-800 text-base" style={{textAlign: 'justify'}}>
                                    <p>Subject to the other provisions of this clause 10, including clause 10.1, to the maximum extent permitted by law, Metro Guards's total liability and that of its directors, employees and agents, to the Client for all Claims, including interest on any Claim is limited in the aggregate to the Liability Limit.</p>
                                    <p>In any event, liability of Metro Guards whether in contract, tort (including negligence) or otherwise will be limited to a maximum amount equal to the Fees paid to Metro Guards on two times sale value per week, in respect of the aggregate of all claims arising out of or in relation to any one event or series of events.</p>
                                    <p>You shall notify Metro Guards in writing of any claim within 7 days of the day upon which you became aware of or ought to have become aware of the existence of such claim. If no such notice is given you will be deemed to have waived and abandoned completely any such claim which after the expiration of such period of 7 days shall not be allowable or admitted. Time shall be of the essence of this clause.</p>
                                    <p>You shall keep Metro Guards indemnified at all times against any loss arising from claims made against Metro Guards by any party with respect to any theft, loss, damage, destruction, death or injury occurring on the Site arising out of or in any way in relation to the provision or failure to provide the Services except in the case of negligence on the part of Metro Guards, its employee or agent</p>
                                    <p>Metro Guards shall to the maximum extent permitted by law have no liability whatsoever to You in respect of any act or omission on its part for any work required to be undertaken by Metro Guards pursuant to this Agreement if the circumstances or event which would otherwise give rise to liability occurs at a time when You is in breach of its payment obligations to Metro Guards.</p>
                                </div>

                                <h3 className="text-xl font-bold text-[#1e2247] mb-4 mt-6">10.5 Liability of Employees and Agents</h3>
                                <p className="text-gray-800 text-base" style={{textAlign: 'justify'}}>
                                    Every exemption from, and limitation of, liability, defence and immunity of whatever nature that applies to a party, or to which a party is entitled, including those set out in this agreement, will also be available and extend to protect every one of its employees or agents acting under this agreement or in any way connected with or relating to it, or making or giving statements, representations, information, or advice relating to this agreement, and the benefit of this clause is held by each party on its own behalf and as agent or trustee on behalf of or for the benefit of all persons who are its employees or agents from time to time as well as on its behalf, and all those persons are to this extent parties or deemed to be parties to this agreement.
                                </p>

                                <h3 className="text-xl font-bold text-[#1e2247] mb-4 mt-6">10.6 Notification of Claims</h3>
                                <p className="text-gray-800 text-base" style={{textAlign: 'justify'}}>
                                    (a) Claims against Metro Guards must be made by the Client to Metro Guards in writing within 07 days of the day that the existence of the claim came to the notice of the Client and must state the nature, grounds and amount of the claim.
                                </p>
                            </section>

                            {/* Section 11 */}
                            <section className="mb-10">
                                <h2 className="text-2xl font-bold text-[#1e2247] mb-6 pb-2 border-b-2 border-[#fdc51a]" style={{padding: '10px 0',color:'black',fontWeight:'700'}}>
                                    11 GENERAL
                                </h2>

                                <h3 className="text-xl font-bold text-[#1e2247] mb-4 mt-6">11.1 Additional Provisions</h3>
                                <p className="text-gray-800 text-base mb-4" style={{textAlign: 'justify'}}>
                                    The Additional Provisions are included in and form part of this agreement.
                                </p>

                                <h3 className="text-xl font-bold text-[#1e2247] mb-4 mt-6">11.2 Governing Law and Jurisdiction</h3>
                                <div className="space-y-4 text-gray-800 text-base" style={{textAlign: 'justify'}}>
                                    <p>(a) This agreement is governed by the law in force in the State or Territory in which it is entered into.</p>
                                    <p>(b) Each party irrevocably submits to the non-exclusive jurisdiction of courts exercising jurisdiction in that State or Territory and any courts of appeal from them in respect of any proceedings in connection with this agreement. Each party irrevocably waives any objection to the venue of any legal process in the courts on the basis that the process has been brought in an inconvenient forum.</p>
                                </div>

                                <h3 className="text-xl font-bold text-[#1e2247] mb-4 mt-6">11.3 Money Payable</h3>
                                <p className="text-gray-800 text-base" style={{textAlign: 'justify'}}>
                                    The Client must pay all Money Payable to Metro Guards on the due dates for payment in full, without any deduction, reduction, withholding, set-off, or counterclaim.
                                </p>

                                <h3 className="text-xl font-bold text-[#1e2247] mb-4 mt-6">11.4 Notice</h3>
                                <div className="space-y-4 text-gray-800 text-base" style={{textAlign: 'justify'}}>
                                    <p>(a) A notice or other communication to a party under this agreement (Notice) must be in writing and in English, signed by or on behalf of the sending party and addressed to that party in accordance with the details nominated in the Reference Table.</p>
                                    <p>(b) A Notice may be served by hand, registered post, by facsimile or by email and is regarded as given and received at the time set out in the table below.</p>
                                    
                                    <div className="overflow-x-auto mt-4">
                                        <table className="min-w-full border-collapse border-2 border-[#1e2247]">
                                            <thead>
                                                <tr className="bg-[#1e2247] text-white">
                                                    <th className="border border-[#fdc51a] px-4 py-3 text-left font-bold">Method of giving Notice</th>
                                                    <th className="border border-[#fdc51a] px-4 py-3 text-left font-bold">When Notice is regarded as given and received</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="bg-gray-50">
                                                    <td className="border border-gray-300 px-4 py-3">By hand to the nominated address</td>
                                                    <td className="border border-gray-300 px-4 py-3">When delivered to the nominated address</td>
                                                </tr>
                                                <tr className="bg-white">
                                                    <td className="border border-gray-300 px-4 py-3">By pre-paid post to the nominated address</td>
                                                    <td className="border border-gray-300 px-4 py-3">At 9.00am (addressee's time) on the second Business Day after the date of posting</td>
                                                </tr>
                                                <tr className="bg-gray-50">
                                                    <td className="border border-gray-300 px-4 py-3">By fax to the nominated fax number</td>
                                                    <td className="border border-gray-300 px-4 py-3">At the time indicated the sending party's transmission equipment produces a transmission report indicating that error free transmission has occurred.</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-[#1e2247] mb-4 mt-6">11.5 Waiver</h3>
                                <p className="text-gray-800 text-base" style={{textAlign: 'justify'}}>
                                    No waiver of any or all the provisions of this agreement, failure to enforce any provision of this agreement, or any time or indulgence granted, by Metro Guards prejudice any rights Metro Guards has in respect of any subsequent breach of this agreement.
                                </p>

                                <h3 className="text-xl font-bold text-[#1e2247] mb-4 mt-6">11.6 Variation</h3>
                                <p className="text-gray-800 text-base" style={{textAlign: 'justify'}}>
                                    Subject to clauses 3.5 and 6.1(b), this agreement may not be varied or modified except as agreed by the parties in writing.
                                </p>

                                <h3 className="text-xl font-bold text-[#1e2247] mb-4 mt-6">11.7 Entire Agreement</h3>
                                <p className="text-gray-800 text-base" style={{textAlign: 'justify'}}>
                                    This agreement states all the express provisions of the agreement between the parties in respect of its subject matter and any provisions which appear on any purchase order or other document produced by the Client Metro Guards be void and of no effect. This clause does not extinguish any potential claims that either Party may have under the Australian Consumer Law.
                                </p>
                            </section>

                            {/* Section 12 */}
                            <section className="mb-10">
                                <h2 className="text-2xl font-bold text-[#1e2247] mb-6 pb-2 border-b-2 border-[#fdc51a]" style={{padding: '10px 0',color:'black',fontWeight:'700'}}>
                                    12 FORCE MAJEURE EVENT
                                </h2>
                                <div className="space-y-4 text-gray-800 text-base" style={{textAlign: 'justify'}}>
                                    <p>(a) If as a result of a Force Majeure Event a party is rendered unable, wholly or in part, to carry out its obligations under this agreement then those obligations are suspended as long as the Force Majeure Event subsists.</p>
                                    <p>(b) If that Force Majeure Event lasts for more than 3 months, the party whose obligations are not suspended may (without affecting the accrued rights and obligations of the parties as at the termination date) terminate this agreement forthwith by Notice to the other party.</p>
                                </div>
                            </section>

                            {/* Section 13 */}
                            <section className="mb-10">
                                <h2 className="text-2xl font-bold text-[#1e2247] mb-6 pb-2 border-b-2 border-[#fdc51a]" style={{padding: '10px 0',color:'black',fontWeight:'700'}}>
                                    13 COSTS, STAMP DUTY AND GST
                                </h2>

                                <h3 className="text-xl font-bold text-[#1e2247] mb-4 mt-6">13.7 Taxes</h3>
                                <p className="text-gray-800 text-base mb-4" style={{textAlign: 'justify'}}>
                                    Subject to clause 13.2, Metro Guards must pay all taxes, duties and Government charges imposed or levied in Australia or overseas in connection with the performance of the Services.
                                </p>

                                <h3 className="text-xl font-bold text-[#1e2247] mb-4 mt-6">13.8 Goods and Services Tax (GST exclusive prices)</h3>
                                <div className="space-y-4 text-gray-800 text-base" style={{textAlign: 'justify'}}>
                                    <p>(a) Unless expressly included the consideration for any supply under or in connection with this agreement does not include GST.</p>
                                    <p>(b) To the extent that any supply made under or in connection with this agreement is a taxable supply, the consideration for that supply is increased by an amount determined by the supplier, not exceeding the amount of that consideration (or its market value) multiplied by the rate at which GST is imposed in respect of the supply.</p>
                                    <p>(c) Whenever an adjustment event occurs in relation to any taxable supply made in connection with this agreement, the supplier must determine the net GST in relation to the supply (taking into account any adjustment) and if the net GST differs from the amount previously paid in accordance with clause (b), the amount of the difference must be paid by, refunded to or credited to the recipient, as applicable.</p>
                                    <p>If a party is entitled under this agreement to be reimbursed or indemnified by another party for a cost or expense incurred in connection with this agreement, the reimbursement or indemnity payment must not include any GST component of the cost or expense for which an input tax credit may be claimed by the party entitled to be reimbursed or indemnified, or by its representative member, and then, if the amount of the payment is consideration or party consideration for a taxable supply, it must be increased on account of GST in accordance with clause (b).</p>
                                </div>
                            </section>

                            {/* Footer Note */}
                            <div className="mt-12 pt-6 border-t-2 border-gray-200">
                                <p className="text-sm text-gray-600 text-center italic">
                                    This document contains the complete terms and conditions of the agreement between Metropolitan Guards and the Client.
                                    Please read carefully and seek legal advice if required.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <Subscribe />
            </Layout>
        </>
    )
}

