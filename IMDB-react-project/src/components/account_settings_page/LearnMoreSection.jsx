import './account_based_pages/AccountPageType.css'

export default function LearnMoreSection() {
    return (
        <div className="learn-more-section">
            <p style={{lineHeight: '.7', fontSize: '1.9rem', borderLeft: '5px solid #f6cf43', padding: '5px', marginBottom: '24px'}}>Learn more</p>

            <div>
                <h4 style={{marginTop: '16px', marginBottom: '0', fontSize: '1.4rem', fontWeight: '700'}}>Registration info</h4>
                <a href="#" style={{color: '#0e63c4', textDecoration: 'none'}}>Registration FAQ</a><br></br>
                <a href="#" style={{color: '#0e63c4', textDecoration: 'none'}}>IMDb FAQ</a><br></br>
                <a href="#" style={{color: '#0e63c4', textDecoration: 'none'}}>Privacy policy</a><br></br>
                <a href="#" style={{color: '#0e63c4', textDecoration: 'none'}}>Your account settings</a><br></br>
            </div>
            <div>
                <h4 style={{marginTop: '13px', marginBottom: '0', fontSize: '1.4rem', fontWeight: '700'}}>Registration help</h4>
                <a href="#" style={{color: '#0e63c4', textDecoration: 'none'}}>Get help completing registration</a><br></br>
            </div>
            <div>
                <h4 style={{marginTop: '25px', marginBottom: '0', fontSize: '1.4rem', fontWeight: '700'}}>Feedback</h4>
                <a href="#" style={{color: '#0e63c4', textDecoration: 'none'}}>Tell us what you think of this feature</a><br></br>
            </div>
        </div>
    )
}