import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../main_page/main_sections/review_page/ReviewSlide.css";
import { faStar as solidStar} from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar} from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";

export default function StarsContainer(props) {
    const [renderedIconTypes, setIconTypes] = useState([]);
    const [rating, setRating] = useState("?");

    useEffect(() => {
        function handleIconTypes() {
            const iconTypes = Array(10).fill("regularStar");
            console.log(props);
            
            try {
                // const starsContainer = document.getElementById("stars-container");
                const starsContainer = document.getElementById(props.starsContainerId);
                const stars = starsContainer.children;
                console.log(stars);
                console.log(starsContainer);
                if (props.knownRating !== '?') {
                    for (let i = 0; i < 10; i++) {
                        if (i < props.knownRating) {
                            iconTypes[i] = "solidStar";
                        } else {
                            iconTypes[i] = "regularStar";
                        }
                    }
    
                    setRating(props.knownRating);
                } 

                setIconTypes(iconTypes);
                console.log(iconTypes);
            } catch (error) {
            }
        }

        handleIconTypes()
    }, [props.knownRating]);
    
    function createRatingPreview(event, index) {
        if (rating !== "?") {
            return;
        }

        try {
            const starsContainer = document.getElementById(props.starsContainerId);
            // const starsContainer = document.getElementById("stars-container");
            const stars = starsContainer.children;
            
    
            const iconTypes = Array(10).fill("regularStar");
            for (let i = 0; i < 10; i++) {
                if (i <= index) {
                    iconTypes[i] = "solidStar";
                } else {
                    iconTypes[i] = "regularStar";
                }
            }
    
            setIconTypes(iconTypes);
        } catch (error) {
            console.log(error);
        }
    }

    function handleClick(e, index) {
        if (rating === "?") {
            e.preventDefault()
            const rating = index + 1;
            setRating(rating);
            props.sendDataToReviewSlide !== undefined && props.sendDataToReviewSlide(rating);
        }
    }

    return (
        <div
            // id="stars-container" 
            id={props.starsContainerId}
            className="mt-2"
         >
            {renderedIconTypes.map((type, index) => {
                let classes = "star-bordered mx-1"
                if (index === 0) {
                    classes = "star-bordered mx-1"
                }

                if (type === "regularStar") {
                    return (<FontAwesomeIcon 
                        onMouseOver={(e) => createRatingPreview(e, index)}
                        onMouseLeave={(e) => {if (rating === "?") setIconTypes(Array(10).fill("regularStar"))}}
                        onClick={(e) => handleClick(e, index)}
                        className={classes}
                        icon={regularStar}></FontAwesomeIcon>)
                }

                classes = "star-filled mx-1"
                return (<FontAwesomeIcon 
                        onMouseOver={(e) => createRatingPreview(e, index)}
                        onMouseLeave={(e) => {if (rating === "?") setIconTypes(Array(10).fill("regularStar"))}}
                        onClick={(e) => handleClick(e, index)}
                        className={classes}
                        icon={solidStar}></FontAwesomeIcon>)
            })}
        </div>
    )
}