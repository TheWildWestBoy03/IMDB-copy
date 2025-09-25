import { useState } from "react";
import ReviewSlide from "../review_page/ReviewSlide";

export default function ReviewBtn(props) {
    const [clicked, setClick] = useState(false);

    function computeNextState(lastClicked) {
        setClick(lastClicked);
    }

    function displayReviewForm() {
        const reviewSlides = document.getElementsByClassName("review-slide");
        let reviewSlide = reviewSlides[0];

        for (let i = 0; i < reviewSlides.length; i++) {
            if (reviewSlides[i].id === props.movieInfo.original_title) {
                reviewSlide = reviewSlides[i]
            } 
        }

        setClick((lastclick) => {
            let newClick = !lastclick;

            if (newClick === true) {
                reviewSlide.style.right = 0;
                document.documentElement.style.overflow = 'hidden';
            } else {
                reviewSlide.style.right = '-400px';
                document.documentElement.style.overflow = 'auto';
            }
            return newClick;
        });
    }

    return (
        <>
            <button onClick={(e) => displayReviewForm(e)} className="btn rounded-pill fw-bold px-2 py-2 watchlist-button review-btn" 
                    >+ Review</button>
            <ReviewSlide starsContainerId={props.starsContainerId} movieInformation={props.movieInfo} computeClickedState={computeNextState}></ReviewSlide>
        </>
    )
}