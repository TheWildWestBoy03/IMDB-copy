import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ReviewSlide.css"
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { faStar as solidStar} from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar} from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import { useContext } from "react";
import SignedInContext from "../../../../context/SignedInContext";
import axios from "axios";
import StarsContainer from "../../../global_components/starsRatingContainer/StarsContainer";

export default function ReviewSlide(props) {
    const baseUrl = "https://image.tmdb.org/t/p/w500";
    const [renderedIconTypes, setIconTypes] = useState([]);
    const [rating, setRating] = useState("?");
    const [reviewTitle, setRatingTitle] = useState("");
    const [reviewBody, setRatingBody] = useState("");
    const [isSpoiler, setSpoiler] = useState(false);
    const [signedIn, setSignedIn, userData] = useContext(SignedInContext)
    const [submitted, setSubmitted] = useState(false);

    function removeItself(event) {
        const reviewSlides = document.getElementsByClassName("review-slide");
        let reviewSlide = reviewSlides[0];

        for (let i = 0; i < reviewSlides.length; i++) {
            if (reviewSlides[i].id === props.movieInformation.original_title) {
                reviewSlide = reviewSlides[i];
            } 
        }

        reviewSlide.style.right = '-400px';
        document.documentElement.style.overflow = 'auto';
        props.computeClickedState(false);
    }
    
    function getDataFromStarsContainer(childRating) {
        setRating(childRating);
    }

    function updateReviewTitle(e) {
        setRatingTitle(e.target.value);
    }

    function updateReviewBody(e) {
        setRatingBody(e.target.value);
    }

    async function submitReview(e) {
        e.preventDefault();

        const userTypedInformation = {
            title: reviewTitle,
            body: reviewBody,
            rating: rating,
            reviewSpoiler: isSpoiler,
            email: userData.userData.email
        }

        console.log(userTypedInformation);

        try {
            const reviewSaveUrl = "http://localhost:3000/api/reviews/review";
            const productionRetrieveUrl = "http://localhost:3000/api/productions/production/find";

            const detailedProduction = await axios.post(productionRetrieveUrl, {title: props.movieInformation.original_title});
            userTypedInformation.id = detailedProduction.data.id;
            const result = await axios.post(reviewSaveUrl, userTypedInformation, {withCredentials: true});

            removeItself()            
        } catch (error) {
            console.log(error);
        }
    }

    function renderBody() {
        if (submitted === false) {
            return (
                <div id="review-slide-body">
                    <div id="review-slide-information">
                        {props.movieInformation != undefined && <img src={baseUrl + props.movieInformation?.poster_path}></img>}
                        <div id="review-slide-description">
                            <p>{props.movieInformation?.original_title}</p>
                            <p>2022</p>
                            <p>User Review</p>
                        </div>
                    </div>
                    <div id="review-slide-form">
                        <p id="review-slide-form-title">
                            <span id="review-slide-form-title-label">Add User Review</span>
                            <span id="review-slide-form-icon">
                                <FontAwesomeIcon icon={faQuestionCircle}></FontAwesomeIcon>
                            </span>
                        </p>
                        <p id="review-slide-form-rating-container">
                            <span id="review-slide-form-rating-label">Your Rating</span>
                            <span id="review-slide-form-rating">
                                {rating}/10
                            </span>
                        </p>
                        
                        <StarsContainer knownRating={"?"} starsContainerId={props.starsContainerId} sendDataToReviewSlide={getDataFromStarsContainer}></StarsContainer>
                        <textarea onChange={(e) => {updateReviewTitle(e)}}  id="title-rating-textarea" placeholder="Title of your review" defaultValue={reviewTitle}></textarea>
                        <textarea onChange={(e) => {updateReviewBody(e)}} id="rating-textarea" placeholder="Your review" defaultValue={reviewBody}></textarea>
                        <p id="minimum-char-message">Minimum char required: <span>300</span></p>
                        <fieldset id="review-spoiler-fieldset">
                            <p>Does this User Review contain spoilers?</p>
                            <div><input onClick={() => setSpoiler(true)} className="spoiler-btn" type="radio" name="spoiler" /><label>Yes</label></div>
                            <div><input onClick={() => setSpoiler(false)} className="spoiler-btn" type="radio" name="spoiler" /><label>No</label></div>
                        </fieldset>
                        <p style={{marginTop: '16px'}}>I agree to the 
                            <a href="#" style={{textDecoration: 'none'}}> Conditions of Use</a>. 
                            The data I'm submitting is true and not copyrighted by a third party.</p>
                    </div>
                </div>
            )
        }

        return (
            <div className="p-2" id="review-slide-final-body">
                <p style={{color: 'black', fontSize: '1.25rem', margin: '24px 0'}}>Thank you for your contribution!</p>
                <p style={{color: 'gray', fontSize: '0.85rem', fontWeight: '300 !important'}} >The information you have supplied is now being processed by our team.</p>
                <p style={{color: 'gray', fontSize: '0.85rem', fontWeight: '300 !important'}} >
    We aim to process contributions as quickly as possible. 
    Our time to publication changes based on the type of data you are contributing. 
    You can find more details on our <a href="#" style={{color: '#0e63be', textDecoration: 'none'}}>processing times page</a>.
    A confirmation has also been sent to any registered email on your account.
    You'll shortly be able to track its status in your <a href="#" style={{color: '#0e63be', textDecoration: 'none'}}>Contribution History</a>.</p>
            </div>
        )
    }
    return (
        <div id={props.movieInformation.original_title} className="review-slide">
            <div id="review-slide-header">
                <button id="exit-icon-wrapper" onClick={(e) => {removeItself(e)}}>
                    <FontAwesomeIcon id="exit-icon" icon={faX}></FontAwesomeIcon>
                </button>
            </div>
            <form onSubmit={(e) => {setSubmitted(true); submitReview(e)}}>
                {renderBody()}
                <div className="review-slide-footer px-2 py-1" style={{background: 'white'}}>
                    {submitted === false && <button type="submit" 
                                                    className="btn w-100 mb-2 fw-bold" 
                                                    style={{background: '#0e63be', color: 'white', borderRadius: '16px'}}>Submit</button>}
                    <button onClick={(e) => removeItself(e)} className="btn w-100 fw-bold" style={{color: '#0e63be', background: 'white', borderRadius: '16px'}}>Cancel</button>
                </div>
            </form>
        </div>
    ) 
}