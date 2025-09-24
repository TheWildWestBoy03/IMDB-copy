import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar as regularStar} from "@fortawesome/free-regular-svg-icons"
import { faStar as solidStar} from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"

import './WatchlistButton.css'
import RatingModal from "./RatingModal"

export default function RateBtn(props) {
    const [hovered, setHovered] = useState(false);
    const [clicked, setClicked] = useState(false);
  
    function rateBtnClick(event) {
        setClicked(true);
        document.documentElement.style.overflow = "hidden";
    }

    function removeModal(state) {
        setClicked(state);
    }

    return (
        <>
            <button
                onClick={(e) => rateBtnClick(e)}
                onMouseLeave={(e) => setHovered(false)} 
                onMouseOver={(e) => setHovered(true)} 
                className="btn rounded-pill fw-bold p-2 watchlist-button review-btn watchlist-button">
                <FontAwesomeIcon icon={hovered === true ? solidStar : regularStar} style={{color: '#5799ef', marginRight: '5px'}}></FontAwesomeIcon>Rate
            </button>
            {clicked === true && <RatingModal starsContainerId={props.starsContainerId} movieInfo={props.movieInfo} sendDataToRateBtn={removeModal}></RatingModal>}
        </>
    )
}