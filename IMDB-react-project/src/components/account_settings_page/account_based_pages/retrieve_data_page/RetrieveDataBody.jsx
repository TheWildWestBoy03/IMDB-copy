export default function RetrieveDataBody() {
    return (
        <div className="request-data-section">
            <div style={{
                padding: '20px 24px',
                border: '1px solid #e0e0e0',
                borderRadius: '4px'
            }}>
                <p style={{lineHeight: '1', fontWeight: '400', color: 'black', fontSize: '.9rem'}}>Don't forget you can access a lot of your data instantly, as well as update your personal information, from your Account settings.</p>
                <button type="submit" className='btn' style={{
                                                        padding: '7px 14px', 
                                                        borderRadius: '32px', 
                                                        background: '#f5c518', 
                                                        fontWeight: '700', 
                                                        fontSize: '.90rem',
                                                        marginTop: '12px',
                                                        marginBottom: '-6px'}}>Submit request</button>
                <hr></hr>
                <p style={{lineHeight: '1.1', fontWeight: '400', color: 'black', fontSize: '.9rem', marginBottom: '16px'}}>If you have a more specific request or for further support, please <a style={{fontWeight: '400', color: '#0e63be', textDecoration: 'none'}} href="#">Contact us</a>.</p>
                <p style={{lineHeight: '1.1', fontWeight: '400', color: 'black', fontSize: '.9rem'}}><a style={{fontWeight: '400', color: '#0e63be', textDecoration: 'none'}} href="#">Learn more</a> about how we collect and use data to provide and improve our services.</p>
            </div>

        </div>
    )
}