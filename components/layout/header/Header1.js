import Link from "next/link"
import Menu from "../Menu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>
            <header 
                id="header" 
                className={`header header-2 header-absolute d-none d-lg-block ${scroll ? "sticky" : ""} relative z-[9999]`}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="header-elements">
                                <div className="header_menu_area">
                                    <div className="logo">
                                        <Link href="/">
                                            <img 
                                                src="/assets/img/logo/metroguards logo 2.png" 
                                                alt="Metro Guards Logo" 
                                                style={{ maxWidth: "130px", height: "65px" }} 
                                            />
                                        </Link>
                                    </div>
                                    <div className="main-menu">
                                        <div className="menu-wrap">
                                            <Menu />
                                        </div>
                                    </div>
                                </div>
                                <div className="desktop-info">
                                    <div className="header-buttons" style={{ display: 'flex', gap: '10px' }}>
                                        <Link 
                                            href="/get-quotation" 
                                            className="btn" 
                                            style={{
                                                backgroundColor: '#FDC51A',
                                                color: '#000',
                                                padding: '10px 20px',
                                                borderRadius: '7px',
                                                fontWeight: '600',
                                                textDecoration: 'none',
                                                display: 'inline-block',
                                                transition: 'all 0.3s ease',
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.backgroundColor = '#E7EDEB';
                                                e.currentTarget.style.color = '#000';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.backgroundColor = '#FDC51A';
                                                e.currentTarget.style.color = '#000';
                                            }}
                                        >
                                            Get Quote
                                        </Link>
                                        <a 
                                            href="tel:1300731173" 
                                            className="btn" 
                                            style={{
                                                backgroundColor: '#1E2247',
                                                color: '#fff',
                                                padding: '10px 20px',
                                                borderRadius: '7px',
                                                fontWeight: '600',
                                                textDecoration: 'none',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px',
                                                transition: 'all 0.3s ease',
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.backgroundColor = '#E7EDEB';
                                                e.currentTarget.style.color = '#000';
                                                e.currentTarget.querySelector('i').style.color = '#000';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.backgroundColor = '#1E2247';
                                                e.currentTarget.style.color = '#fff';
                                                e.currentTarget.querySelector('i').style.color = '#fff';
                                            }}
                                        >
                                            <i className="fa fa-phone" />
                                            1300 731 173
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
