import { useContext, useEffect, useState } from "react"
import WatchlistPageBody from "./WatchlistPageBody"
import WatchlistPageHeader from "./WatchlistPageHeader"
import SignedInContext from "../../context/SignedInContext"
import axios from "axios"

export default function WatchlistPage() {
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
        <>
            <WatchlistPageHeader></WatchlistPageHeader>
            <WatchlistPageBody watchlist={watchlist.movieList}></WatchlistPageBody>
        </>
    )
}