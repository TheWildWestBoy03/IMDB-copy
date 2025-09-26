import "./WatchlistButton.css";
import StarsContainer from "../../../global_components/starsRatingContainer/StarsContainer";
import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faX } from "@fortawesome/free-solid-svg-icons";
import "../review_page/ReviewSlide.css"
import SignedInContext from '../../../../context/SignedInContext';
import axios from "axios";

export default function RatingModal(props) {
    const [rating, setRating] = useState("?");
    const [signedIn, setSignedIn, userData] = useContext(SignedInContext);
    const [retrieved, setRetrieved] = useState(false);

    useEffect(() => {
        async function getReviewByUserAndTitle() {
            const url = "http://localhost:3000/api/reviews/rating/find";
            const result = await axios.post(url, {userEmail: userData.userData.email, title: props.movieInfo.original_title})
            
            if (result.data !== null) {
                setRating(result.data.rating);
                setRetrieved(true);
            }
        }

        getReviewByUserAndTitle()
    }, [userData]);

    function handleModalClick(event) {
        document.documentElement.style.overflow = "auto";
        props.sendDataToRateBtn(false);
    }

    function removeRating(event) {
        const requestedRating = {
            title: props.movieInfo.original_title,
            userEmail: userData.userData.email
        }

        const url = "http://localhost:3000/api/reviews/rating/delete";
        const result = axios.post(url, requestedRating, {withCredentials: true});

        handleModalClick(event);
    }

    async function saveRating(event) {
        const productionRetrieveUrl = "http://localhost:3000/api/productions/production/find";
        const savedProduction = await axios.post(productionRetrieveUrl, {title: props.movieInfo.original_title}, {withCredentials: true});

        const newRating = {
            title: props.movieInfo.original_title,
            poster_path: props.movieInfo.poster_path,
            rating: rating,
            userEmail: userData.userData.email,
            id: savedProduction.data.id,
        }

        const url = "http://localhost:3000/api/reviews/rating/add";
        const result = await axios.post(url, newRating, {withCredentials: true});

        handleModalClick(event);
    }


    function getDataFromStarsContainer(childRating) {
        setRating(childRating);
    }

    function renderRateButton() {
        if (rating === "?" || retrieved === true) {
            return <button style={{color: '#939393', background: '#313131', cursor: 'default', marginTop: '32px'}} className="btn modal-rate-btn">Rate</button>
        } else {
            return <button onClick={(e) => {
                saveRating(e);
                // window.location.reload();
            }} style={{color: 'black', background: '#dab018', cursor: 'pointer', marginTop: '32px'}} className="btn modal-rate-btn">Rate</button>
        }
    }

    return (
        <>
            <div className="rating-modal">
                <div className="d-flex justify-content-end p-2 align-items-center" style={{width: '100%'}}>
                    <button className="d-flex justify-content-center align-items-center"
                        style={{
                                height: '20px',
                                background: 'inherit',
                                width: '20px',  
                                fontSize: '1.2rem', 
                                color: 'white', 
                                aspectRatio: '1 / 1',
                                overflow: "hidden"}} 
                        onClick={(e) => {handleModalClick(e)}}>
                        <FontAwesomeIcon style={{fontSize: '1rem'}} id="exit-icon" icon={faX}></FontAwesomeIcon>
                    </button>
                </div>
                <div style={{display: 'block', margin: '0 auto', padding: '32px', height: 'fit-content'}}>
                    <p style={{fontSize: '.8rem', color: "#dab018", letterSpacing: '1.5px', textAlign: 'center', margin: '8px 0'}}>RATE THIS</p>
                    <p style={{fontSize: '1.1rem', fontWeight: '500', color: 'white', textAlign: 'center', marginBottom: '16px'}}>{props.movieInfo.original_title}</p>
                    <StarsContainer starsContainerId={props.starsContainerId} knownRating={rating} sendDataToReviewSlide={getDataFromStarsContainer}></StarsContainer>
                    {renderRateButton()}
                    <button onClick={(e) => removeRating(e)} style={{color: '#5799ef', marginTop: '16px'}} className="btn modal-rate-btn">Remove Rating</button>
                </div>
                <FontAwesomeIcon 
                    style={{
                        fontSize: '10rem',
                        color: '#5799ef',
                        position: 'absolute',
                        left: '50%',
                        top: '-1%',
                        transform: 'translate(-50%, -50%)'}}
                    icon={faStar}></FontAwesomeIcon>
                {
                    rating !== '?' && 
                    <p style={{
                        color: 'white',
                        fontSize: '2rem',
                        position: 'absolute',
                        left: '49%',
                        top: '-6%',
                        zIndex: '10'}}
                        >{rating}</p>
                }
            </div>
        </>
    )
}