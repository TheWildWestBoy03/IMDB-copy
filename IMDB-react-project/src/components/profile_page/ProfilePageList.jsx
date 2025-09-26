import GridMovieCard from "../global_components/grid_movie_card/GridMovieCard"
import GridReviewCard from "../global_components/grid_review_card/GridReviewCard"
import ProfilePageReview from "./ProfilePageReview"
import './ProfilePageStylesheet.css'

export default function ProfilePageList(props) {
    function renderList() {
        if (props.type === "watchable") {
            return (props.list !== undefined && 
                props.list.map((entity, index) => {
                    return <GridMovieCard movieInfo={entity}></GridMovieCard>
                }))
        }

        console.log(props.list);
        return (props.list !== undefined && 
                props.list.map((entity, index) => {
                        return <ProfilePageReview reviewInfo={entity}></ProfilePageReview>
                })
        )
    }
    return (
        <div className="profile-page-list">
            {renderList()}
        </div>
    )
}