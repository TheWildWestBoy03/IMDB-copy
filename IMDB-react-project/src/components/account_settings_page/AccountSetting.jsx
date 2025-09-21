import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";

export default function AccountSetting(props) {
    const [hovered, setHovered] = useState(false);

    function displaySettingMainPage(event) {
        window.location = props.pageLink;
    }

    function toggleTitleStyle(event) {
        setHovered(true);
    }

    function removeTitleStyle(event) {
        setHovered(false);
    }

    return (
        <div
            onMouseLeave={(e) => removeTitleStyle(e)} 
            onMouseEnter={(e) => toggleTitleStyle(e)}
            onClick={(e) => displaySettingMainPage(e)}
            style={{border: '1px solid #e0e0e0', borderRadius: '8px', marginTop: '8px', gap: '10px', padding: '12px',
                cursor: hovered === true ? "pointer" : 'default'
            }}
            className="d-flex align-items-center">
            <span>
                <FontAwesomeIcon style={{color: '#757575', fontSize: '1.25rem'}}icon={props.specificIcon}></FontAwesomeIcon>
            </span>
            <div>
                <p style={{fontWeight: 'bold', color: hovered === true && '#757575'}}>{props.optionTitle}</p>
                <p style={{fontSize: '.85rem', color: 'gray', fontWeight: '400'}}>{props.optionDescription !== undefined && props.optionDescription}</p>
            </div>
            <span style={{display: 'block', width: '30px', marginLeft: 'auto'}}>
                <FontAwesomeIcon style={{color: hovered === true ? "black" : '#757575'}} icon={props.rightIcon}></FontAwesomeIcon>
            </span>
        </div>
    )
}