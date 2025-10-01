import MoreToExploreItem from "./MoreToExploreItem"

export default function WatchlistMoreToExploreColumn(props) {
    return (<div className={props.classes}>
        <h4 style={{borderLeft: '5px solid #f5c518', fontWeight: '700', fontSize: '1.25rem', marginBottom: '32px'}}><span className="mx-1">More to explore</span></h4>
        <MoreToExploreItem link={"#"} type={"Your check-ins"} description={"Titles you are watching or have watched"} image={"https://image.tmdb.org/t/p/w500" + "/A0KRoR842OgNByCfw9iFHbWoeR9.jpg"}></MoreToExploreItem>
        <MoreToExploreItem link={"/user/ratings"} type={"Your ratings"} description={"updated 8 minutes ago"} image={"https://image.tmdb.org/t/p/w500" + "/A0KRoR842OgNByCfw9iFHbWoeR9.jpg"}></MoreToExploreItem>
        <MoreToExploreItem link={"/user/watchlist"} type={"Your Watchlist"} description={"updated 2 minutes ago"} image={"https://image.tmdb.org/t/p/w500" + "/A0KRoR842OgNByCfw9iFHbWoeR9.jpg"}></MoreToExploreItem>
        <MoreToExploreItem link={"/user/watch-history"} type={"Your watch history"} description={"updated 2 days ago"} image={"https://image.tmdb.org/t/p/w500" + "/A0KRoR842OgNByCfw9iFHbWoeR9.jpg"}></MoreToExploreItem>
    </div>)
}