import WatchlistSortOptions from "./WatchlistSortOptions"
import SignedInContext from "../../context/SignedInContext"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import WatchlistListColumn from "./WatchlistListColumn"
import WatchlistMoreToExploreColumn from "./WatchlistMoreToExploreColumn"
import "./WatchlistPageStylesheet.css"

export default function WatchlistPageBody() {
    const [signedIn, setSignedIn, userData] = useContext(SignedInContext)
    const [watchlist, setWatchlist] = useState({})

    useEffect(() => {
        async function fetchWatchlist() {
            const url = "http://localhost:3000/api/watchlist/get-watchlist";

            if (userData != undefined) {
                const userEmail = userData.userData.email;
                const result = await axios.post(url, {email: userEmail}, {withCredentials: true})
                setWatchlist(result.data);
            }
        }

        fetchWatchlist()
    }, [userData])
    return (
        <div className="d-flex" style={{padding: '24px'}}>
            <div className="col-lg-1"></div>
            <div className="col-lg-10 d-flex justify-content-between flex-toggler">
                <WatchlistListColumn watchlist={watchlist}></WatchlistListColumn>
                <WatchlistMoreToExploreColumn></WatchlistMoreToExploreColumn>
            </div>
            <div className="col-lg-1"></div>
        </div>
    )
}