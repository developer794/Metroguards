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
                <ul className="theme-dropdown" style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                    padding: '25px',
                    borderRadius: '8px',
                    boxShadow: '0 10px 40px rgba(30, 34, 71, 0.15)',
                    minWidth: '280px'
                }}>
                    <div style={{marginBottom: '0'}}>
                        <h3 style={{
                            background: 'linear-gradient(135deg, #1e2247, #2c3e50)',
                            color: '#fdc51a',
                            padding: '12px 18px',
                            borderRadius: '6px',
                            marginBottom: '15px',
                            fontSize: '14px',
                            fontWeight: '700',
                            letterSpacing: '0.5px',
                            boxShadow: '0 4px 15px rgba(30, 34, 71, 0.2)',
                            textTransform: 'uppercase',
                            textAlign: 'center'
                        }}>
                            About Metro Guards
                        </h3>
                        <div style={{
                            borderLeft: '3px solid #fdc51a',
                            paddingLeft: '15px',
                            marginLeft: '5px'
                        }}>
                            <li style={{marginBottom: '10px', listStyle: 'none'}}>
                                <Link href="/our-values" style={{
                                    color: '#1e2247',
                                    fontSize: '13px',
                                    fontWeight: '500',
                                    transition: 'all 0.3s ease',
                                    display: 'inline-block',
                                    position: 'relative',
                                    paddingLeft: '18px',
                                    textDecoration: 'none'
                                }}>
                                    <span style={{
                                        position: 'absolute',
                                        left: '0',
                                        color: '#fdc51a',
                                        fontWeight: 'bold'
                                    }}>›</span>
                                    Our Values
                                </Link>
                            </li>
                            <li style={{marginBottom: '10px', listStyle: 'none'}}>
                                <Link href="/mission-statement" style={{
                                    color: '#1e2247',
                                    fontSize: '13px',
                                    fontWeight: '500',
                                    transition: 'all 0.3s ease',
                                    display: 'inline-block',
                                    position: 'relative',
                                    paddingLeft: '18px',
                                    textDecoration: 'none'
                                }}>
                                    <span style={{
                                        position: 'absolute',
                                        left: '0',
                                        color: '#fdc51a',
                                        fontWeight: 'bold'
                                    }}>›</span>
                                    Our Mission
                                </Link>
                            </li>
                            <li style={{marginBottom: '10px', listStyle: 'none'}}>
                                <Link href="/how-we-thrive" style={{
                                    color: '#1e2247',
                                    fontSize: '13px',
                                    fontWeight: '500',
                                    transition: 'all 0.3s ease',
                                    display: 'inline-block',
                                    position: 'relative',
                                    paddingLeft: '18px',
                                    textDecoration: 'none'
                                }}>
                                    <span style={{
                                        position: 'absolute',
                                        left: '0',
                                        color: '#fdc51a',
                                        fontWeight: 'bold'
                                    }}>›</span>
                                    How We Thrive
                                </Link>
                            </li>
                            <li style={{marginBottom: '0', listStyle: 'none'}}>
                                <Link href="/corporate-social-responsibility" style={{
                                    color: '#1e2247',
                                    fontSize: '13px',
                                    fontWeight: '500',
                                    transition: 'all 0.3s ease',
                                    display: 'inline-block',
                                    position: 'relative',
                                    paddingLeft: '18px',
                                    textDecoration: 'none'
                                }}>
                                    <span style={{
                                        position: 'absolute',
                                        left: '0',
                                        color: '#fdc51a',
                                        fontWeight: 'bold'
                                    }}>›</span>
                                    Corporate Social Responsibility
                                </Link>
                            </li>
                        </div>
                    </div>
                </ul>
            </li>
            <li className="mega-menu-parrent">
                <Link href="#">Services</Link>
                <ul className="theme-mega-menu" style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                    padding: '30px',
                    borderRadius: '8px',
                    boxShadow: '0 10px 40px rgba(30, 34, 71, 0.15)'
                }}>
                    <li className="mega-menu">
                        {/* Security Guard Services Section */}
                        <div className="single-mega-menu" style={{marginRight: '20px'}}>
                            <h3 className="font-f-1" style={{
                                background: 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                color: '#fdc51a',
                                padding: '12px 9px',
                                borderRadius: '6px',
                                marginBottom: '15px',
                                fontSize: '14px',
                                fontWeight: '700',
                                letterSpacing: '0.5px',
                                boxShadow: '0 4px 15px rgba(30, 34, 71, 0.2)',
                                textTransform: 'uppercase',
                                whiteSpace: 'nowrap'
                            }}>
                                Static Guards 
                            </h3>
                            <ul style={{
                                borderLeft: '3px solid #fdc51a',
                                paddingLeft: '15px',
                                marginLeft: '5px'
                            }}>
                                <li style={{marginBottom: '8px'}}>
                                    <Link href="/building-security-guards" style={{
                                        color: '#1e2247',
                                        fontSize: '13px',
                                        fontWeight: '500',
                                        transition: 'all 0.3s ease',
                                        display: 'inline-block',
                                        position: 'relative',
                                        paddingLeft: '18px'
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: '0',
                                            color: '#fdc51a',
                                            fontWeight: 'bold'
                                        }}>›</span>
                                        Building Security Guards
                                    </Link>
                                </li>
                                <li style={{marginBottom: '8px'}}>
                                    <Link href="/construction-site-security-guards" style={{
                                        color: '#1e2247',
                                        fontSize: '13px',
                                        fontWeight: '500',
                                        transition: 'all 0.3s ease',
                                        display: 'inline-block',
                                        position: 'relative',
                                        paddingLeft: '18px'
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: '0',
                                            color: '#fdc51a',
                                            fontWeight: 'bold'
                                        }}>›</span>
                                        Construction Security Guards
                                    </Link>
                                </li>
                                <li style={{marginBottom: '8px'}}>
                                    <Link href="/shopping-centre-security-guards" style={{
                                        color: '#1e2247',
                                        fontSize: '13px',
                                        fontWeight: '500',
                                        transition: 'all 0.3s ease',
                                        display: 'inline-block',
                                        position: 'relative',
                                        paddingLeft: '18px'
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: '0',
                                            color: '#fdc51a',
                                            fontWeight: 'bold'
                                        }}>›</span>
                                        Shopping Centre Security Guards
                                    </Link>
                                </li>
                                <li style={{marginBottom: '8px'}}>
                                    <Link href="/hospital-security-guards" style={{
                                        color: '#1e2247',
                                        fontSize: '13px',
                                        fontWeight: '500',
                                        transition: 'all 0.3s ease',
                                        display: 'inline-block',
                                        position: 'relative',
                                        paddingLeft: '18px'
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: '0',
                                            color: '#fdc51a',
                                            fontWeight: 'bold'
                                        }}>›</span>
                                        Hospital Security Guards
                                    </Link>
                                </li>
                                <li style={{marginBottom: '8px'}}>
                                    <Link href="/gate-house-security-guard" style={{
                                        color: '#1e2247',
                                        fontSize: '13px',
                                        fontWeight: '500',
                                        transition: 'all 0.3s ease',
                                        display: 'inline-block',
                                        position: 'relative',
                                        paddingLeft: '18px'
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: '0',
                                            color: '#fdc51a',
                                            fontWeight: 'bold'
                                        }}>›</span>
                                        Gatehouse Security Guards
                                    </Link>
                                </li>
                                <li style={{marginBottom: '8px'}}>
                                    <Link href="/educational-institute-security-guards" style={{
                                        color: '#1e2247',
                                        fontSize: '13px',
                                        fontWeight: '500',
                                        transition: 'all 0.3s ease',
                                        display: 'inline-block',
                                        position: 'relative',
                                        paddingLeft: '18px'
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: '0',
                                            color: '#fdc51a',
                                            fontWeight: 'bold'
                                        }}>›</span>
                                        Educational Institution Security
                                    </Link>
                                </li>
                                <li style={{marginBottom: '8px'}}>
                                    <Link href="/corporate-security-guards" style={{
                                        color: '#1e2247',
                                        fontSize: '13px',
                                        fontWeight: '500',
                                        transition: 'all 0.3s ease',
                                        display: 'inline-block',
                                        position: 'relative',
                                        paddingLeft: '18px'
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: '0',
                                            color: '#fdc51a',
                                            fontWeight: 'bold'
                                        }}>›</span>
                                        Corporate Security Guards
                                    </Link>
                                </li>
                                <li style={{marginBottom: '8px'}}>
                                    <Link href="/retail-security-guard" style={{
                                        color: '#1e2247',
                                        fontSize: '13px',
                                        fontWeight: '500',
                                        transition: 'all 0.3s ease',
                                        display: 'inline-block',
                                        position: 'relative',
                                        paddingLeft: '18px'
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: '0',
                                            color: '#fdc51a',
                                            fontWeight: 'bold'
                                        }}>›</span>
                                        Retail Security Guards
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Security Guard Services - Column 2 */}
                        <div className="single-mega-menu" style={{marginRight: '20px'}}>
                            <h3 className="font-f-1" style={{
                                background: 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                color: '#fdc51a',
                                padding: '12px 18px',
                                borderRadius: '6px',
                                marginBottom: '15px',
                                fontSize: '14px',
                                fontWeight: '700',
                                letterSpacing: '0.5px',
                                boxShadow: '0 4px 15px rgba(30, 34, 71, 0.2)',
                                textTransform: 'uppercase',
                                whiteSpace: 'nowrap',
                                visibility: 'hidden',
                                height: '0',
                                margin: '0',
                                padding: '0',
                                overflow: 'hidden'
                            }}>
                                🛡️ Security Guards
                            </h3>
                            <ul style={{
                                borderLeft: '3px solid #fdc51a',
                                paddingLeft: '15px',
                                marginLeft: '5px',
                                marginTop: '54px'
                            }}>
                                <li style={{marginBottom: '8px'}}>
                                    <Link href="/loss-prevention-security-guards" style={{
                                        color: '#1e2247',
                                        fontSize: '13px',
                                        fontWeight: '500',
                                        transition: 'all 0.3s ease',
                                        display: 'inline-block',
                                        position: 'relative',
                                        paddingLeft: '18px'
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: '0',
                                            color: '#fdc51a',
                                            fontWeight: 'bold'
                                        }}>›</span>
                                        Loss Prevention Security Guards
                                    </Link>
                                </li>
                                <li style={{marginBottom: '8px'}}>
                                    <Link href="/concierge-guards" style={{
                                        color: '#1e2247',
                                        fontSize: '13px',
                                        fontWeight: '500',
                                        transition: 'all 0.3s ease',
                                        display: 'inline-block',
                                        position: 'relative',
                                        paddingLeft: '18px'
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: '0',
                                            color: '#fdc51a',
                                            fontWeight: 'bold'
                                        }}>›</span>
                                        Concierge Security Guards
                                    </Link>
                                </li>
                                <li style={{marginBottom: '8px'}}>
                                    <Link href="/lock-up-security-services" style={{
                                        color: '#1e2247',
                                        fontSize: '13px',
                                        fontWeight: '500',
                                        transition: 'all 0.3s ease',
                                        display: 'inline-block',
                                        position: 'relative',
                                        paddingLeft: '18px'
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: '0',
                                            color: '#fdc51a',
                                            fontWeight: 'bold'
                                        }}>›</span>
                                        Lock-Up and Open-Up Security
                                    </Link>
                                </li>
                                <li style={{marginBottom: '8px'}}>
                                    <Link href="/warehouse-security-system" style={{
                                        color: '#1e2247',
                                        fontSize: '13px',
                                        fontWeight: '500',
                                        transition: 'all 0.3s ease',
                                        display: 'inline-block',
                                        position: 'relative',
                                        paddingLeft: '18px'
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: '0',
                                            color: '#fdc51a',
                                            fontWeight: 'bold'
                                        }}>›</span>
                                        Industrial Warehouse Security
                                    </Link>
                                </li>
                                <li style={{marginBottom: '8px'}}>
                                    <Link href="/static-security-guards" style={{
                                        color: '#1e2247',
                                        fontSize: '13px',
                                        fontWeight: '500',
                                        transition: 'all 0.3s ease',
                                        display: 'inline-block',
                                        position: 'relative',
                                        paddingLeft: '18px'
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: '0',
                                            color: '#fdc51a',
                                            fontWeight: 'bold'
                                        }}>›</span>
                                        Static Security Guards
                                    </Link>
                                </li>
                                <li style={{marginBottom: '8px'}}>
                                    <Link href="/uniform-and-convert-security-guards" style={{
                                        color: '#1e2247',
                                        fontSize: '13px',
                                        fontWeight: '500',
                                        transition: 'all 0.3s ease',
                                        display: 'inline-block',
                                        position: 'relative',
                                        paddingLeft: '18px'
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: '0',
                                            color: '#fdc51a',
                                            fontWeight: 'bold'
                                        }}>›</span>
                                        Uniform and Covert Security
                                    </Link>
                                </li>
                                <li style={{marginBottom: '8px'}}>
                                    <Link href="/adhoc-security-services" style={{
                                        color: '#1e2247',
                                        fontSize: '13px',
                                        fontWeight: '500',
                                        transition: 'all 0.3s ease',
                                        display: 'inline-block',
                                        position: 'relative',
                                        paddingLeft: '18px'
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: '0',
                                            color: '#fdc51a',
                                            fontWeight: 'bold'
                                        }}>›</span>
                                        Adhoc Security Services
                                    </Link>
                                </li>
                                <li style={{marginBottom: '8px'}}>
                                    <Link href="/asset-protection" style={{
                                        color: '#1e2247',
                                        fontSize: '13px',
                                        fontWeight: '500',
                                        transition: 'all 0.3s ease',
                                        display: 'inline-block',
                                        position: 'relative',
                                        paddingLeft: '18px'
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: '0',
                                            color: '#fdc51a',
                                            fontWeight: 'bold'
                                        }}>›</span>
                                        Asset Protection Security
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Crowd Controller Services */}
                        <div className="single-mega-menu" style={{marginRight: '20px'}}>
                            <h3 className="font-f-1" style={{
                                background: 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                color: '#fdc51a',
                                padding: '12px 9px',
                                borderRadius: '6px',
                                marginBottom: '15px',
                                fontSize: '14px',
                                fontWeight: '700',
                                letterSpacing: '0.5px',
                                boxShadow: '0 4px 15px rgba(30, 34, 71, 0.2)',
                                textTransform: 'uppercase',
                                whiteSpace: 'nowrap'
                            }}>
                                Crowd Control
                            </h3>
                            <ul style={{
                                borderLeft: '3px solid #fdc51a',
                                paddingLeft: '15px',
                                marginLeft: '5px'
                            }}>
                                <li style={{marginBottom: '8px'}}>
                                    <Link href="/party-security-guards" style={{
                                        color: '#1e2247',
                                        fontSize: '13px',
                                        fontWeight: '500',
                                        transition: 'all 0.3s ease',
                                        display: 'inline-block',
                                        position: 'relative',
                                        paddingLeft: '18px'
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: '0',
                                            color: '#fdc51a',
                                            fontWeight: 'bold'
                                        }}>›</span>
                                        Party Security Guards
                                    </Link>
                                </li>
                                <li style={{marginBottom: '8px'}}>
                                    <Link href="/event-security-guards" style={{
                                        color: '#1e2247',
                                        fontSize: '13px',
                                        fontWeight: '500',
                                        transition: 'all 0.3s ease',
                                        display: 'inline-block',
                                        position: 'relative',
                                        paddingLeft: '18px'
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: '0',
                                            color: '#fdc51a',
                                            fontWeight: 'bold'
                                        }}>›</span>
                                        Event Security Guards
                                    </Link>
                                </li>
                                <li style={{marginBottom: '8px'}}>
                                    <Link href="/corporate-event-security-guards" style={{
                                        color: '#1e2247',
                                        fontSize: '13px',
                                        fontWeight: '500',
                                        transition: 'all 0.3s ease',
                                        display: 'inline-block',
                                        position: 'relative',
                                        paddingLeft: '18px'
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: '0',
                                            color: '#fdc51a',
                                            fontWeight: 'bold'
                                        }}>›</span>
                                        Corporate Event Security
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Mobile Patrol Security */}
                        <div className="single-mega-menu" style={{marginRight: '20px'}}>
                            <h3 className="font-f-1" style={{
                                background: 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                color: '#fdc51a',
                                padding: '12px 18px',
                                borderRadius: '6px',
                                marginBottom: '15px',
                                fontSize: '14px',
                                fontWeight: '700',
                                letterSpacing: '0.5px',
                                boxShadow: '0 4px 15px rgba(30, 34, 71, 0.2)',
                                textTransform: 'uppercase',
                                whiteSpace: 'nowrap'
                            }}>
                                Mobile Patrols
                            </h3>
                            <ul style={{
                                borderLeft: '3px solid #fdc51a',
                                paddingLeft: '15px',
                                marginLeft: '5px'
                            }}>
                                <li style={{marginBottom: '8px'}}>
                                    <Link href="/lock-up-security-services" style={{
                                        color: '#1e2247',
                                        fontSize: '13px',
                                        fontWeight: '500',
                                        transition: 'all 0.3s ease',
                                        display: 'inline-block',
                                        position: 'relative',
                                        paddingLeft: '18px'
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: '0',
                                            color: '#fdc51a',
                                            fontWeight: 'bold'
                                        }}>›</span>
                                        Lock-Up Security
                                    </Link>
                                </li>
                                <li style={{marginBottom: '8px'}}>
                                    <Link href="/security-escort-services" style={{
                                        color: '#1e2247',
                                        fontSize: '13px',
                                        fontWeight: '500',
                                        transition: 'all 0.3s ease',
                                        display: 'inline-block',
                                        position: 'relative',
                                        paddingLeft: '18px'
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: '0',
                                            color: '#fdc51a',
                                            fontWeight: 'bold'
                                        }}>›</span>
                                        Security Escort
                                    </Link>
                                </li>
                                <li style={{marginBottom: '8px'}}>
                                    <Link href="/alarm-response-security-guards" style={{
                                        color: '#1e2247',
                                        fontSize: '13px',
                                        fontWeight: '500',
                                        transition: 'all 0.3s ease',
                                        display: 'inline-block',
                                        position: 'relative',
                                        paddingLeft: '18px'
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: '0',
                                            color: '#fdc51a',
                                            fontWeight: 'bold'
                                        }}>›</span>
                                        Alarm Response
                                    </Link>
                                </li>
                                <li style={{marginBottom: '8px'}}>
                                    <Link href="/mobile-patrol-security" style={{
                                        color: '#1e2247',
                                        fontSize: '13px',
                                        fontWeight: '500',
                                        transition: 'all 0.3s ease',
                                        display: 'inline-block',
                                        position: 'relative',
                                        paddingLeft: '18px'
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: '0',
                                            color: '#fdc51a',
                                            fontWeight: 'bold'
                                        }}>›</span>
                                        Mobile Patrols
                                    </Link>
                                </li>
                                <li style={{marginBottom: '8px'}}>
                                    <Link href="/construction-patrol-security-guards" style={{
                                        color: '#1e2247',
                                        fontSize: '13px',
                                        fontWeight: '500',
                                        transition: 'all 0.3s ease',
                                        display: 'inline-block',
                                        position: 'relative',
                                        paddingLeft: '18px'
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: '0',
                                            color: '#fdc51a',
                                            fontWeight: 'bold'
                                        }}>›</span>
                                        Construction Patrol
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Canine (K9) Security */}
                        <div className="single-mega-menu">
                            <h3 className="font-f-1" style={{
                                background: 'linear-gradient(135deg, #1e2247, #2c3e50)',
                                color: '#fdc51a',
                                padding: '12px 12px',
                                borderRadius: '6px',
                                marginBottom: '15px',
                                fontSize: '14px',
                                fontWeight: '700',
                                letterSpacing: '0.5px',
                                boxShadow: '0 4px 15px rgba(30, 34, 71, 0.2)',
                                textTransform: 'uppercase',
                                whiteSpace: 'nowrap'
                            }}>
                                 K9 Security
                            </h3>
                            <ul style={{
                                borderLeft: '3px solid #fdc51a',
                                paddingLeft: '15px',
                                marginLeft: '5px'
                            }}>
                                <li style={{marginBottom: '8px'}}>
                                    <Link href="/k9-security-guards-in-melbourne" style={{
                                        color: '#1e2247',
                                        fontSize: '13px',
                                        fontWeight: '500',
                                        transition: 'all 0.3s ease',
                                        display: 'inline-block',
                                        position: 'relative',
                                        paddingLeft: '18px'
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: '0',
                                            color: '#fdc51a',
                                            fontWeight: 'bold'
                                        }}>›</span>
                                        K9 Security With Handler
                                    </Link>
                                </li>
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
