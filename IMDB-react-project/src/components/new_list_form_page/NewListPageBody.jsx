import WatchlistMoreToExploreColumn from "../watchlist_page/WatchlistMoreToExploreColumn";
import NewListPageBodyForm from "./NewListPageForm";
import './NewListPageStylesheet.css'

export default function NewListPageBody() {
    return (
        <div className="row" style={{
            padding: '16px'
        }}>
            <div className="col-lg-1"></div>
            <div className="col-lg-10 new-list-page-inner-body">
                <NewListPageBodyForm></NewListPageBodyForm>
                <WatchlistMoreToExploreColumn classes={"second more-to-explore-big-padding"}></WatchlistMoreToExploreColumn>
            </div>
            <div className="col-lg-1"></div>
        </div>
    )
}