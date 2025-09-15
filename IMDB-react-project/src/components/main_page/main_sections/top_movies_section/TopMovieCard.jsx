import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import WatchlistButton from "./WatchlistButton";

export default function TopMovieCard(props) {
    const { index, baseUrl, information } = props;
    const poster_path = information?.poster_path;

    return (
        <li className="d-flex flex-column align-items-start"
            style={{
                rowGap: '0rem', 
                backgroundColor: '#1a1a1a',
                borderTopRightRadius: '1rem', 
                borderBottomRightRadius: '1rem',
                borderBottomLeftRadius: '1rem',
                maxWidth: '200px',
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
            <div className="px-1 py-4 d-flex flex-column align-items-start">
                <p className="fw-bold text-white mb-5">{index + 1}.{information?.original_title}</p>
                <WatchlistButton movieInfo={props}></WatchlistButton>
                <button className="btn rounded-pill fw-bold px-5 py-2"><FontAwesomeIcon className="fw-bold text-white" icon={faPlay}></FontAwesomeIcon>Trailer</button>
            </div>
        </li>
    )
}