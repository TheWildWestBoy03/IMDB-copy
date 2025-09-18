import MoreToExploreItem from "./MoreToExploreItem"

export default function WatchlistMoreToExploreColumn() {
    return (<div className="second">
        <h4 style={{borderLeft: '10px solid #f5c518', fontWeight: '700', fontSize: '1.75rem', marginBottom: '32px'}}><span className="mx-2">More to explore</span></h4>
        <MoreToExploreItem type={"Your check-ins"} description={"Titles you are watching or have watched"} image={"https://image.tmdb.org/t/p/w500" + "/A0KRoR842OgNByCfw9iFHbWoeR9.jpg"}></MoreToExploreItem>
        <MoreToExploreItem type={"Your ratings"} description={"updated 8 minutes ago"} image={"https://image.tmdb.org/t/p/w500" + "/A0KRoR842OgNByCfw9iFHbWoeR9.jpg"}></MoreToExploreItem>
        <MoreToExploreItem type={"Your Watchlist"} description={"updated 2 minutes ago"} image={"https://image.tmdb.org/t/p/w500" + "/A0KRoR842OgNByCfw9iFHbWoeR9.jpg"}></MoreToExploreItem>
        <MoreToExploreItem type={"Your watch history"} description={"updated 2 days ago"} image={"https://image.tmdb.org/t/p/w500" + "/A0KRoR842OgNByCfw9iFHbWoeR9.jpg"}></MoreToExploreItem>
    </div>)
}