export default function SubcribeNew() {
    return (
        <>
            {/*===== Contact CTA Section =====*/}
            <div className="contact-cta-section section-padding" style={{backgroundColor: "rgb(14 19 61)"}}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="cta-content text-center text-white">
                                        <div className="subtitle mb-4">
                                            <span className="badge px-4 py-2" style={{backgroundColor: '#fdc51a', color: '#1e2247', fontWeight: '600', fontSize: '0.9rem'}}>
                                                <i className="bi bi-telephone me-2"></i>
                                                Get Covered Now!
                                            </span>
                                        </div>
                                        <h2 className="display-4 fw-bold mb-4">
                                        If You Need Cover Tonight, Call Us Now! 
                                        </h2>
                                        <p className="lead mb-5" style={{maxWidth: '800px', margin: '0 auto'}}>
                                            You don’t just need another provider. You need a team that shows up when it matters most. Metro Guards is here to cover the gaps, protect your people, and keep your site secure. 
                                        </p>
                                        
                                        <div className="cta-buttons mb-5">
                                            <a 
                                                href="/get-quotation" 
                                                className="btn btn-lg me-3 px-5 py-3"
                                                style={{
                                                    backgroundColor: '#fdc51a',
                                                    color: '#1e2247',
                                                    border: 'none',
                                                    borderRadius: '10px',
                                                    textDecoration: 'none',
                                                    fontWeight: '700',
                                                    textTransform: 'uppercase',
                                                    fontSize: '1rem',
                                                    transition: 'all 0.3s ease'
                                                }}
                                            >
                                                <i className="bi bi-file-earmark-text me-2"></i>GET A QUOTE
                                            </a>
                                            <a 
                                                href="tel:1300731173" 
                                                className="btn btn-outline-light btn-lg px-5 py-3"
                                                style={{
                                                    borderRadius: '10px',
                                                    textDecoration: 'none',
                                                    fontWeight: '700',
                                                    textTransform: 'uppercase',
                                                    fontSize: '1rem',
                                                    transition: 'all 0.3s ease'
                                                }}
                                            >
                                                <i className="fa fa-phone"> </i> 1300 73 11 73
                                            </a>
                                        </div>
                                        
                                        <div className="row">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </>
    );
}


