import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import './WatchlistPageStylesheet.css'

export default function WatchlistItem(props) {
    const movie = props.processingMovie;
    const index = props.processingMovieIndex;
    const rootLink = "https://image.tmdb.org/t/p/w500";

    useEffect(() => {
        function okk() {
            console.log(movie)
        }

        okk()
    }, [])
    return (
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

                    <span style={{ color: "steelblue", fontSize: "1rem" }}>★</span>
                    <span style={{ color: "#555" }}>8</span>
                    <button className="watched-item"><p style={{color: "#1a73e8"}}><FontAwesomeIcon icon={faEye}></FontAwesomeIcon> Watched</p></button>
                </div>
            </div>
        </div>)
}