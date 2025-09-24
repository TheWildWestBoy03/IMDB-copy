import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

export default function GridMovieCard(props) {
    const baseUrl = "https://image.tmdb.org/t/p/w500";

    function getProperRatingStar() {
        if (props.movieInfo.rating === undefined) {
            return (
                <p>
                    <FontAwesomeIcon style={{color: '#0e63be'}} icon={regularStar}></FontAwesomeIcon>
                </p>
            )
        }

        return (
            <p>
                <FontAwesomeIcon style={{color: '#0e63be', marginRight: '5px'}} icon={solidStar}></FontAwesomeIcon>
                {props.movieInfo.rating}
            </p>
        )
    }
    return (
        <div className="grid-movie-card">
            <img    
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
                src={baseUrl + props.movieInfo.posterPath}></img>
            <div className="p-2 d-flex align-items-center justify-content-start gap-3 rating-line">
                <p>
                    <FontAwesomeIcon style={{color: "#f5c518", marginRight: '5px'}} icon={solidStar}></FontAwesomeIcon>
                    8.7
                </p>
                {getProperRatingStar()}
            </div>
            <p className="p-2 mb-3">{props.movieInfo.name}</p>
        </div>
    )
}