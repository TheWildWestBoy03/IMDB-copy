import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import WatchlistButton from "./WatchlistButton";
import "./WatchlistButton.css"
import { useState } from "react";
import ReviewBtn from "./ReviewBtn";
import RateBtn from "./RateBtn";

export default function TopMovieCard(props) {
    const { index, baseUrl, information } = props;
    const [isHover, setIsHover] = useState(false);
    const poster_path = information?.poster_path;

    function displayReviewBtn(e) {
        setIsHover(true);
        
        let currentNode = e.target;

        while (!currentNode.innerHTML.includes("reper")) {
            currentNode = currentNode.parentNode;
        }

        currentNode.style.height = "580px";
        currentNode.style.transition = '.5s ease-in-out height';

        const ratingBtnSet = currentNode.children[1].children[1].children[2];
        ratingBtnSet.style.opacity = 1;
        ratingBtnSet.style.transition = '1s ease-in-out opacity';
    }

    function removeReviewBtn(e) {
        setIsHover(false);
        let currentNode = e.target;

        while (!currentNode.innerHTML.includes("reper")) {
            currentNode = currentNode.parentNode;
        }

        currentNode.style.height = "580px";
        currentNode.style.transition = '1s ease-in-out height';

        const ratingBtnSet = currentNode.children[1].children[1].children[2];
        ratingBtnSet.style.opacity = 1;
        ratingBtnSet.style.transition = '1s ease-in-out opacity';
    }

    function getReviewBtnSet() {
        return (
        <div className="rating-buttons-set d-flex align-items-center justify-content-center" style={{gap: '5px'}}>
            <ReviewBtn movieInfo={information}></ReviewBtn>
            <RateBtn starsContainerId={"stars-container-2"} movieInfo={information}></RateBtn>
        </div>)
    }

    return (
        <li className="d-flex flex-column align-items-start"
            onMouseOver={(e) => displayReviewBtn(e)}
            onMouseLeave={(e) => removeReviewBtn(e)}
            style={{
                rowGap: '0rem', 
                backgroundColor: '#1a1a1a',
                borderTopRightRadius: '1rem', 
                borderBottomRightRadius: '1rem',
                borderBottomLeftRadius: '1rem',
                maxWidth: '200px',
                height: '580px',
            }}>
            <img src={baseUrl + poster_path} className="img-fluid"
                style={{
                    scrollSnapAlign: 'center',
                    minWidth: '200px',
                    minHeight: '280px',
                    width: '100%',
                    aspectRatio: '3 / 2',
                    objectFit: 'cover',
                    objectPosition: 'center center',
                    borderTopRightRadius: '1rem', 
                }}
            />
            <div className="px-1 py-4 d-flex flex-column align-items-start reper">
                <div style={{minHeight: '120px'}}><p className="fw-bold text-white mb-5">{index + 1}.{information?.original_title}</p></div>
                <div className="w-100">
                    <WatchlistButton movieInfo={props}></WatchlistButton>
                    <button className="btn rounded-pill fw-bold px-4 py-2 trailer-btn"
                            style={{display: "block", margin: "0 auto", color: 'white'}}>
                        <FontAwesomeIcon className="fw-bold text-white" icon={faPlay}></FontAwesomeIcon>Trailer
                    </button>
                    {getReviewBtnSet()}
                </div>
            </div>
        </li>
    )
}