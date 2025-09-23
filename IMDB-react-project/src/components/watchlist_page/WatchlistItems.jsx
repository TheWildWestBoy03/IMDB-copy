import WatchlistItem from "./WatchlistItem"

export default function WatchlistItems(props) {
    function renderWatchlistItems() {
        if (props.watchlist === undefined) {
            return "This list is empty."
        }

        return (<div style={{border: '1px solid #e0e0e0', padding: '8px', borderRadius: '8px', marginTop: '16px'}}>{props.watchlist.map(
            (movie, index) => {
                return <WatchlistItem processingMovie={movie} processingMovieIndex={index}></WatchlistItem>
            }
        )}</div>)
    }
    return (
        <>
            {renderWatchlistItems()}
        </>
    )
}