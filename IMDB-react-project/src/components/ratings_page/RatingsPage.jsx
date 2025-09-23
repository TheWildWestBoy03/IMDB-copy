import WatchlistPageHeader from "../watchlist_page/WatchlistPageHeader"
import WatchlistPageBody from "../watchlist_page/WatchlistPageBody"
import { useContext, useEffect, useState } from "react"
import SignedInContext from "../../context/SignedInContext"
import axios from "axios"

export default function RatingsPage() {
    const [signedIn, setSignedIn, userData] = useContext(SignedInContext);
    const [ratings, setRatings] = useState([]);

    useEffect(() => {
        async function fetchRatings() {
            const url = "http://localhost:3000/api/reviews/rating/find-all";

            if (userData != undefined) {
                const userEmail = userData.userData.email;
                const result = await axios.post(url, {userEmail: userEmail, }, {withCredentials: true})

                console.log(result.data);
                setRatings(result.data);
            }
        }

        fetchRatings()
    }, [userData])

    return (
        <>
            <WatchlistPageHeader></WatchlistPageHeader>
            <WatchlistPageBody watchlist={ratings}></WatchlistPageBody>
        </>
    )
}