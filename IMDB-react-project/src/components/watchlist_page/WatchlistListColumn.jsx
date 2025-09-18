import WatchlistSortOptions from "./WatchlistSortOptions"
import WatchlistItems from "./WatchlistItems"

export default function WatchlistListColumn(props) {
    return (<div class="first">
        <WatchlistSortOptions watchlist={props.watchlist}></WatchlistSortOptions>
        <WatchlistItems watchlist={props.watchlist}></WatchlistItems>
    </div>)
}