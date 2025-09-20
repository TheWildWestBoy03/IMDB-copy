import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function AccountSetting(props) {
    return (
        <div style={{border: '1px solid #e0e0e0', borderRadius: '8px', marginTop: '8px', gap: '10px', padding: '12px'}}
            className="d-flex align-items-center">
            <span>
                <FontAwesomeIcon style={{color: '#757575', fontSize: '1.25rem'}}icon={props.specificIcon}></FontAwesomeIcon>
            </span>
            <div>
                <p style={{fontWeight: 'bold'}}>{props.optionTitle}</p>
                <p style={{fontSize: '.85rem', color: 'gray', fontWeight: '400'}}>{props.optionDescription !== undefined && props.optionDescription}</p>
            </div>
            <span style={{display: 'block', width: '30px', marginLeft: 'auto'}}>
                <FontAwesomeIcon icon={props.rightIcon}></FontAwesomeIcon>
            </span>
        </div>
    )
}