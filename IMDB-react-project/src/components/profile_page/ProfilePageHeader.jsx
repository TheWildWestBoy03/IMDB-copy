import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./ProfilePageStylesheet.css"
import { faCalendar, faGear, faShareAlt, faUser, faUserCircle} from "@fortawesome/free-solid-svg-icons"

export default function ProfilePageHeader() {
    return (
        <div className="profile-page-header row">
            <div className="col-lg-1"></div>
            <div className="col-lg-10" style={{padding: '0 32px 32px 24px'}}>
                <div className="profile-page-header-upper-buttons">
                    <button className="btn rounded-0" style={{borderRight: '2px solid #e0e0e0'}}>
                        <FontAwesomeIcon style={{color: 'white', fontSize: '1.25rem'}} icon={faGear}></FontAwesomeIcon>
                    </button>
                    <button className="btn rounded-0">
                        <FontAwesomeIcon style={{color: 'white', fontSize: '1.25rem'}} icon={faShareAlt}></FontAwesomeIcon>
                    </button>
                </div>
                <div className="profile-page-header-body">
                    <div className="identification-section">
                        <FontAwesomeIcon icon={faUserCircle} style={{fontSize: '9rem', color: '#2a2a2a', marginRight: '15px', accentColor: 'gray'}}></FontAwesomeIcon>
                        <div className="identification-section-head">
                            <p style={{fontWeight: '400', fontSize: '3.10rem', color: 'white', lineHeight: '.75'}}>AlexP-2317</p>
                            <p style={{color: '#d0d0d0', marginTop: '16px', fontSize: '1.05rem'}}><FontAwesomeIcon icon={faCalendar} style={{marginRight: '10px', fontSize: '1.25rem'}}></FontAwesomeIcon>Joined Jul 2025</p>
                            <button className="btn fw-bold" style={{marginTop: '24px', fontSize: '.85rem', borderRadius: '16px', background: '#313131', color: '#4f89dd'}}>Edit profile</button>
                        </div>
                    </div>
                    <div className="text-white fw-bold status-section">
                        <div className="status"><p>Ratings</p></div>
                        <div className="status"><p>Watchlist</p></div>
                        <div className="status"><p>Lists</p></div>
                        <div className="status"><p>More</p></div>
                    </div>
                </div>
            </div>
            <div className="col-lg-1"></div>
        </div>
    )
}