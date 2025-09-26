import WatchlistPageHeader from "../watchlist_page/WatchlistPageHeader"
import WatchlistPageBody from "../watchlist_page/WatchlistPageBody"
import { useContext, useEffect, useState } from "react"
import SignedInContext from "../../context/SignedInContext"
import axios from "axios"

export default function WatchHistoryPage() {
    const [signedIn, setSignedIn, userData] = useContext(SignedInContext);
    const [watchHistory, setWatchHistory] = useState([]);

    useEffect(() => {
        async function fetchWatchHistory() {
            const url = "http://localhost:3000/api/watch-history/find";

            if (userData != undefined) {
                const userEmail = userData.userData.email;
                const result = await axios.post(url, {email: userEmail}, {withCredentials: true})

                const watchHistoryProductions = result.data.productions;
                const results = await Promise.all(watchHistoryProductions.map(async (entity) => {
                    const id = entity.productionId;
                    const production = await axios.post("http://localhost:3000/api/productions/production/find-by-id", 
                                            {id}, {withCredentials: true});

                    return {
                        posterPath: production.data.poster_path,
                        name: production.data.original_title
                    }
                }))

                console.log(results);
                setWatchHistory(results);
            }
        }

        fetchWatchHistory()
    }, [userData])

    return (
        <>
            <WatchlistPageHeader></WatchlistPageHeader>
            <WatchlistPageBody watchlist={watchHistory}></WatchlistPageBody>
        </>
    )
}