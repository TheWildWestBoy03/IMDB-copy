import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faPencil, faDownload, faShareAlt} from "@fortawesome/free-solid-svg-icons"
import ToggleBtn from "../global_components/toggleButton/ToggleBtn"
import { useEffect, useState } from "react"

export default function WatchlistSettings() {
    const [publicTruthFromChild, setPublicTruth] = useState("Off");
    function modifyPublicTruth(publicTruth) {
        console.log(publicTruth);
        if (publicTruth === true) {
            setPublicTruth("On");
        } else {
            setPublicTruth("Off");
        }

        const circle = document.getElementsByClassName("circle")[0];

        if (publicTruthFromChild === "Off") {
            circle.style.left = "50%";
        } else {
            circle.style.left = "0";
        }
    }

    return (
        <div className="settings-group pt-3 d-flex align-items-center" style={{width: '430px', marginLeft: 'auto'}}>
            <button className="btn text-white fw-bold p-2"
                    style={{
                        border: 0,
                        borderRight: '1px solid gray',
                        borderRadius: 0
                    }}>
                <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>Edit
            </button>
            <span className="mx-3 text-white fw-bold">Public</span>
            <ToggleBtn sendDataToParent={modifyPublicTruth}></ToggleBtn>
            <span className="mx-3 text-white fw-bold public-type">{publicTruthFromChild}</span>

            <button className="btn text-white fw-bold p-2"
                    style={{
                        border: 0,
                        borderRight: '1px solid gray',
                        borderLeft: '1px solid gray',
                        borderRadius: 0
                    }}>
                <FontAwesomeIcon className="mx-1" icon={faDownload}></FontAwesomeIcon>Export
            </button>
            <button className="btn text-white fw-bold p-2">
                <FontAwesomeIcon className="mx-3" icon={faShareAlt}></FontAwesomeIcon>
            </button>
        </div>
    )
}