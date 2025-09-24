import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlay } from "@fortawesome/free-solid-svg-icons";
import axios from "axios"
import SignedInContext from "../../../../context/SignedInContext";
import { useState } from "react";
import { useContext, useEffect} from "react";
import './WatchlistButton.css';

export default function WatchlistButton(props) {
    const movieInfo = props.movieInfo;
    const [signedIn, setSignedIn, userData] = useContext(SignedInContext)
    const [watchlist, setWatchlist] = useState({})
    const [clicked, setClicked] = useState(0);

    useEffect(() => {

        async function retrieveWatchlist() {
            const result = await axios.post("http://localhost:3000/api/watchlist/get-watchlist", {email: userData.userData.email}, {withCredentials: true});
            setWatchlist(result.data);
            
            const filtered = result.data.movieList.filter((movie) => {
                return movie.name === movieInfo.information.original_title;
            })

            if (filtered != undefined) {
                if (filtered.length > 0) {
                    setClicked(1);
                }
            }
        }
    
        retrieveWatchlist()
    }, [userData])

    function handleSavingStatement() {
        if (clicked) {
            return (<span><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>Watchlist</span>)
        }
        return (<span>+ Watchlist</span>)
    }

    async function toggleWatchlistItem(e) {
        window.location.reload()
        e.preventDefault()

        if (clicked === 0) {
            setClicked((clicked) => clicked + 1)
        } else {
            setClicked((clicked) => clicked - 1)
        }

        try {
            const result = await axios.post("http://localhost:3000/api/watchlist/add-movie", movieInfo, {withCredentials: true});
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <button 
            onClick={(e) => toggleWatchlistItem(e)}
            className="btn rounded-pill fw-bold px-5 py-2 watchlist-button" 
        >{handleSavingStatement()}</button>
    )
}