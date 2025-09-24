import GridMovieCard from "../global_components/grid_movie_card/GridMovieCard"
import GridReviewCard from "../global_components/grid_review_card/GridReviewCard"
import './ProfilePageStylesheet.css'

export default function ProfilePageList(props) {
    function renderList() {
        if (props.type === "watchable") {
            return (props.list !== undefined && 
                props.list.map((entity, index) => {
                    if (index < 3) {
                        return <GridMovieCard movieInfo={entity}></GridMovieCard>
                    }
                }))
        }

        return (props.list !== undefined && 
                props.list.map((entity, index) => {
                    if (index < 1) {
                        return <GridReviewCard reviewInfo={entity}></GridReviewCard>
                    }
                })
        )
    }
    return (
        <div className="profile-page-list">
            {renderList()}
        </div>
    )
}