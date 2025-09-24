import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './ProfilePageStylesheet.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ProfilePageBodySecondColumn() {
    return (
        <div className='profile-page-body-second'>
            <div className="d-flex align-items-center" style={{fontWeight: '700', fontSize: '1.75rem'}}>
                <div style={{width: '5px',
                            display: 'inline-block',
                            height: '35px',
                            backgroundColor: '#f7d351', 
                            marginRight: '5px',
                            borderRadius: '4px'}}></div>
                Check-ins
                <FontAwesomeIcon className="hoverable-chevron" icon={faChevronRight} style={{marginLeft: "20px"}}></FontAwesomeIcon>
            </div>
            <p style={{marginTop: '5px', color: 'gray'}}>Your check-ins are private. <a href="#" style={{color: '#3c7ec9', textDecoration: 'none'}}>Edit</a>.</p>
            <div style={{
                textAlign: 'right',
                fontWeight: '700',
                fontSize: '1.30rem',
                margin: '32px 0'
            }}
                className='checkings-list'>
                <p>No check-ins yet</p>
            </div>
            <div className="d-flex align-items-center" style={{fontWeight: '700', fontSize: '1.75rem'}}>
                <div style={{width: '5px',
                            display: 'inline-block',
                            height: '35px',
                            backgroundColor: '#f7d351', 
                            marginRight: '5px',
                            borderRadius: '4px'}}></div>
                Recently taken polls
            </div>
            <p style={{marginTop: '5px', color: 'gray', fontWeight: '400'}}>0 total polls taken</p>
            <div 
            className='checkings-list'>
                <p>No recently taken polls</p>
                <button className='btn' style={{
                    borderRadius: '32px',
                    padding: '8px', 
                    color: '#0e63c4',
                    fontWeight: '500',
                    border: '2px solid #0e63c4',
                    marginTop: '16px'
                }}>Browse polls</button>
            </div>
        </div>
    )
}