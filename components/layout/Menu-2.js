'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { useEffect } from "react"

export default function Menu() {
    const routerPath = usePathname()
    useEffect(() => {
        if (routerPath == "/index-rtl-1") {
            document.documentElement.lang = "ar"
            document.documentElement.dir = "rtl"
            document.body.classList.add("rtl-version")
        } else {
            document.documentElement.lang = "en"
            document.documentElement.dir = ""
            document.body.classList.remove("rtl-version")
        }
    }, [routerPath])

    return (
        <ul className="menu_list scroll mt-8 relative">
            <li className="dropdown-parrent">
                <Link href="/">Home</Link>
            </li>
            <li className="dropdown-parrent">
                <Link href="">About Us</Link>
                <ul className="theme-dropdown">
                    <li><Link href="/our-values">Our Values</Link></li>
                    <li><Link href="/mission-statement">Our Mission</Link></li>
                    <li><Link href="/how-we-thrive">How we Thrive</Link></li>
                    <li><Link href="/corporate-social-responsibility">Corporate Social Responsibilities</Link></li>
                </ul>
            </li>
            <li className="mega-menu-parrent">
                <Link href="#">Services</Link>
                <ul className="theme-mega-menu">
                    <li className="mega-menu">
                        <div className="single-mega-menu">
                            <h3 className="font-f-1">Security Guard Services</h3>
                            <ul>
                                <li><Link href="/adhoc-security-services">Building Security Guards</Link></li>
                                <li><Link href="/asset-protection">Construction Security Guards</Link></li>
                                <li><Link href="/private-security-guards">Shopping Centre Security Guards</Link></li>
                                <li><Link href="/staff-escort-security">Hospital Security Guards</Link></li>
                                <li><Link href="/mobile-patrol-security">Gatehouse Security Guards</Link></li>
                                <li><Link href="/rapid-alarm-response-security">Educational Institution Security Guards</Link></li>
                                <li><Link href="/hire-unarmed-security-guard">Corporate Security Guards</Link></li>
                                <li><Link href="/hire-unarmed-security-guard">Retail Security Guards</Link></li>
                            </ul>
                        </div>
                        <div className="single-mega-menu">
                            <h3 className="font-f-1" style={{visibility: 'hidden', height: '0', margin: '0', padding: '0'}}>Security Guard Services</h3>
                            <ul>
                                <li><Link href="/hire-unarmed-security-guard">Loss Prevention Security Guards</Link></li>
                                <li><Link href="/hire-unarmed-security-guard">Concierge Security Guards</Link></li>
                                <li><Link href="/lock-up-security-services">Lock-Up and Open-Up Security Guards</Link></li>
                                <li><Link href="/hire-unarmed-security-guard">Industrial Warehouse Security Guards</Link></li>
                                <li><Link href="/hire-unarmed-security-guard">Static Security Guards</Link></li>
                                <li><Link href="/hire-unarmed-security-guard">Uniform and Convert Security Guards</Link></li>
                                <li><Link href="/adhoc-security-services">Adhoc Security Services</Link></li>
                                <li><Link href="/asset-protection">Asset Protection Security Guards</Link></li>
                            </ul>
                        </div>
                        <div className="single-mega-menu">
                            <h3 className="font-f-1">Crowd Controller Services</h3>
                            <ul>
                                <li><Link href="/party-security-guards">Party Security Guards</Link></li>
                                <li><Link href="/event-security-guards">Event Security Guards</Link></li>
                                <li><Link href="/corporate-event-security-guards">Corporate Event Security Guards</Link></li>
                                
                            </ul>
                        </div>
                        <div className="single-mega-menu">
                            <h3 className="font-f-1">Mobile Patrol Security</h3>
                            <ul>
                                <li><Link href="/lock-up-security-services">Lock-Up Security Guards</Link></li>
                                <li><Link href="/security-escort-services">Security Escort Services</Link></li>
                                <li><Link href="/alarm-response-security-guards">Alarm Response Unit</Link></li>
                                <li><Link href="/mobile-patrol-security">Mobile Security Patrols</Link></li>
                                <li><Link href="/construction-patrol-security-guards">Construction Security Patrols</Link></li>
                            </ul>
                            
                        </div>
                        <div className="single-mega-menu">
                            
                            <h3 className="font-f-1 mt-4">Canine (K9) Security</h3>
                            <ul>
                                <li><Link href="/k9-security-guards-in-melbourne">Canine (K9) Security With Handler</Link></li>
                            </ul>
                        </div>
                        
                        
                    </li>
                </ul>
            </li>
            <li className="dropdown-parrent">
                <Link href="/blogs">Blog</Link>
            </li>
            <li className="dropdown-parrent">
                <Link href="/contacts">Contact</Link>
            </li>
        </ul>
    );
}
