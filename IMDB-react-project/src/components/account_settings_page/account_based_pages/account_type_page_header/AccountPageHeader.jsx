import "../AccountPageType.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function AccountPageHeader(props) {
    return (
        <div class="row account-page-type-header">
            <div className="col-lg-1"></div>
            <div className="col-lg-10" style={{padding: '25px 25px'}}>
                <p>
                    <a href="/user/account-settings" style={{fontWeight: '500', color: 'white', textDecoration: 'none'}}>
                    <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon> Back</a>
                </p>
                <p style={{fontSize: '1.25rem', marginTop: '12px', color: '#bcbcbc', fontWeight: '700'}}>Account Settings</p>
                <p style={{letterSpacing: '.4px', lineHeight: '.85', color: 'white', fontWeight: '500', fontSize: '2.70rem'}}>{props.title}</p>
            </div>
            <div className="col-lg-1"></div>
        </div>
    )
}