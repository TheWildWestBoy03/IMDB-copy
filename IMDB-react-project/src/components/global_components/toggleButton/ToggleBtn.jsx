import { useEffect, useState } from "react";
import "./ToggleBtn.css"

export default function ToggleBtn({sendDataToParent}) {
    const [publicTruth, setPublicTruth] = useState(false);

    function handleClick(event) {
    setPublicTruth(prevTruth => {
        const newTruth = !prevTruth;
        sendDataToParent !== undefined && sendDataToParent(newTruth);
        return newTruth;
    });
}


    return (
        <>
            <div onClick={(e) => handleClick(e)} className="button-base d-flex flex-direction-row align-items-center">
                <div className="circle">
                    
                </div>
            </div>
        </>
    )
}