import { useState, useContext, useEffect } from "react"
import SignedInContext from "../../../../context/SignedInContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlusCircle, faCheck} from "@fortawesome/free-solid-svg-icons"
import RenderedWatchlist from "./RenderedWatchlist"
import axios from "axios"

export default function WatchListSection() {
    const [signedIn, setSignedIn, userData] = useContext(SignedInContext)
    const [userWatchlist, setUserWatchlist] = useState({})

    useEffect(() => {
        async function fetchUserWatchlist() {
            try {
                const response = 
                    await axios.post("http://localhost:3000/api/watchlist/get-watchlist", {email: userData.userData.email}, {withCredentials: true});
                setUserWatchlist(response.data);
            } catch (error) {
                console.log("user not found by client");
            }
        }

        fetchUserWatchlist()
    }, [userData])

    function handleWatchlistLogic() {
        if (!userWatchlist?.movieList?.length) {
            if (userData.signedIn === true) {
                return (
                    <div className="text-center text-white">
                        <a href="#"><FontAwesomeIcon style={{color: 'gray'}}className="fs-3 mb-3" icon={faPlusCircle}></FontAwesomeIcon></a>
                        <p className="fw-bold">Your Watchlist is empty</p>
                        <p className="mb-5">Save shows and movies to keep track of what you want to watch.</p>
                        <button className="btn rounded-pill fw-bold px-4 py-2" style={{ backgroundColor: '#141414', color: '#5799ef' }}>Browse popular movies</button>
                    </div>
                )
            } else {
                return (
                    <div className="text-center text-white">
                        <a href="#"><FontAwesomeIcon style={{color: 'gray'}}className="fs-3 mb-3" icon={faPlusCircle}></FontAwesomeIcon></a>
                        <p className="fw-bold">Sign in to access your Watchlist</p>
                        <p className="mb-5">Save shows and movies to keep track of what you want to watch.</p>
                        <button 
                            onClick={(event) => window.location = '/signin'}
                            className="btn rounded-pill fw-bold px-4 py-2" style={{ backgroundColor: '#141414', color: '#5799ef' }}>Sign in to IMDb</button>
                    </div>
                )
            }
        }
        
        return <RenderedWatchlist watchlistMovies={userWatchlist.movieList}></RenderedWatchlist>;
    }

    return (
        <>
            <div className="row">
                <div className="col-lg-1" style={{ maxHeight: '300px' }}></div>
                <div className="col-lg-10 py-3 d-flex justify-content-between">
                    <div className="w-75">
                        <h3 className="text-warning fw-bold">What to watch</h3>
                        <h3 className="text-white" style={{ borderLeft: '3px solid #F5C518', padding: '0.3rem' }}>From your Watchlist</h3>
                        <p className="text-secondary">Movies and TV shows that you have watchlisted</p>
                    </div>
                    <a className="text-decoration-none text-primary recommendations_watchlist_link">Get more recommendations  {'>'}</a>
                </div>
                <div className="col-lg-1" style={{ maxHeight: '300px' }}></div>
            </div>
            <div className="row mb-5">
                <div className="col-lg-1"></div>
                <div className="col-lg-10">
                    {handleWatchlistLogic()}
                </div>
                <div className="col-lg-1"></div>
            </div>
        </>
    )
}