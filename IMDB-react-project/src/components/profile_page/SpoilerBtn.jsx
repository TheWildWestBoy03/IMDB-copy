import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

export default function SpoilerBtn(props) {
    const [style, setStyle] = useState({marginTop: '8px', borderRadius: '16px', color: '#bd2404'});

    function handleClick(e) {
        props.callback(true);
    }

    return (
        <button
            onClick={(e) => handleClick(e)}
            onMouseLeave={(e) => setStyle({marginTop: '8px', borderRadius: '16px', color: '#bd2404'})}
            onMouseOver={(e) => setStyle({marginTop: '8px', borderRadius: '16px', color: '#bd2404', backgroundColor: '#faeeeb'})}
            className="btn fw-bold py-1 px-0"
            style={style}>Spoiler 
            <FontAwesomeIcon
                    icon={faChevronDown} 
                    style={{
                        color: '#bd2404',
                        marginLeft: '5px'}}></FontAwesomeIcon>
        </button>
    )
}