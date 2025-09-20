import AccountSetting from "./AccountSetting"
import { faChevronRight, faCirclePlay, faE, faGlobeAmericas, faP, faPen, faPlay, faU } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope, faGlobe, faLock, faUser, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons"
import { faPaperclip, faBell, faExternalLinkSquare} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

export default function AccountSettingsPageOptions() {
    const optionsTitles = ["Email preferences", "Site settings", "Preferred services", "Privacy settings", 'Personal settings',
        "Linked accounts", "Login account", "View contributions", "Request my data", "Delete account"
    ]

    const optionsDescriptions = [
        "Customize how you'll hear from us.",
        "Edit your region, language and reference view.",
        "Edit your preferred streaming services.",
        "Edit the visibility of your Watchlist and ratings.",
        "Edit your age and country of residence.",
        "Link or unlink your IMDb account.",
        "Edit your IMDb login credentials.",
    ]

    const specificIcons = [faEnvelope, faGlobeAmericas, faCirclePlay, faLock, faUser, faPaperclip, faUser, faPencil, faBell, faTrash];
    const [linkHover, setLinkHover] = useState(false);

    return (
        <div style={{width: '65.66%'}}>
            {optionsTitles.map((option, index) => {
                if (index < optionsDescriptions.length) {
                    return <AccountSetting specificIcon={specificIcons[index]} rightIcon={faChevronRight} optionTitle={option} optionDescription={optionsDescriptions[index]}></AccountSetting>
                }

                return <AccountSetting specificIcon={specificIcons[index]} rightIcon={faChevronRight} optionTitle={option}></AccountSetting>
            })}

            <p style={{margin: '16px 0', fontWeight: 'normal'}}>
                <a 
                    onMouseEnter={(e) => {console.log("HOVERED"); setLinkHover(true)}}
                    onMouseLeave={(e) => {console.log("UNHOVERED"); setLinkHover(false)}}
                    href="#" 
                    style={{textDecoration: 'none', color: '#0e63c4', textDecoration: linkHover === true ? 'underline solid #0e63c4' : 'none',}}>
                        Create or update your IMDbPro.com account</a>
            <FontAwesomeIcon
                icon={faExternalLinkSquare} 
                style={{
                    color: '#0e63c4', 
                    marginLeft: '5px'
                }}></FontAwesomeIcon></p>
        </div>
    )
}