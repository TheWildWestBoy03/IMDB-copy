import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faStar } from "@fortawesome/free-solid-svg-icons";
import './WatchlistPageStylesheet.css'
import axios from "axios";
import SignedInContext from "../../context/SignedInContext";
import RateBtn from "../main_page/main_sections/top_movies_section/RateBtn";

export default function WatchlistItem(props) {
    const [signedIn, setSignedIn, userData] = useContext(SignedInContext);
    const [meanRating, setMeanRating] = useState(0);
    const [userRating, setUserRating] = useState(0);

    const movie = props.processingMovie;
    const index = props.processingMovieIndex;
    const rootLink = "https://image.tmdb.org/t/p/w500";

    useEffect(() => {
        async function fetchMovieRating() {
            const url = "http://localhost:3000/api/reviews/rating/find";

            try {
                const result = await axios.post(url, {userEmail: userData.userData.email, 
                    title: movie.name}, {withCredentials: true});
    
                setUserRating(result.data.rating);
    
                console.log(result.data);
            } catch (error) {
                console.log(error);
            }
        }

        async function computeMeanRating() {

        }

        fetchMovieRating();
        computeMeanRating();
    }, [userData])
    return ( userRating !== null && 
        <div className="d-flex justify-content-start align-items-center"
            style={{borderBottom: '1px solid #e0e0e0', padding: '8px'}}>
            <img className="img-fluid" src={rootLink + movie.posterPath} 
                style={{
                    width: '80px', 
                    heigth: '150px', 
                    marginRight: '10px', 
                    borderRadius: '8px',
                    borderTopLeftRadius: 0}}></img>
            <div>
                <p>{index + 1}. {movie.name}</p>
                <p>2022– 27 epsTV Series</p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1rem" }}>
                    <span style={{ color: "gold", fontSize: "1.4rem" }}>★</span>
                    <span style={{ color: "#1a73e8", fontWeight: "600" }}>
                        8.3 <span style={{ color: "#1a73e8" }}>(118)</span>
                    </span>
                    { userRating !== 0 && 
                    <button className="btn p-2">
                        <span style={{ color: "#1a73e8", fontSize: "1rem", marginRight: '5px'}}><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                        <span style={{ color: "#555" }}>{userRating}</span>    
                    </button> }

                    {(userRating === undefined || userRating === 0) && 
                        <RateBtn starsContainerId={"stars-container-1"} movieInfo={{
                            original_title: movie.name,
                            poster_path: movie.posterPath
                        }}></RateBtn>
                    }
                    <button className="watched-item"><p style={{color: "#1a73e8"}}><FontAwesomeIcon icon={faEye}></FontAwesomeIcon> Watched</p></button>
                </div>
            </div>
        </div>)
}