import ProfilePageBodyFirstColumn from './ProfilePageBodyFirstColumn.jsx'
import ProfilePageBodySecondColumn from './ProfilePageBodySecondColumn.jsx'
import './ProfilePageStylesheet.css'

export default function ProfilePageBody() {
    return (
        <div className="profile-page-body row">
            <div className="col-lg-1"></div>
            <div className="col-lg-10 profile-page-body-wrapper">
                <ProfilePageBodyFirstColumn></ProfilePageBodyFirstColumn>
                <ProfilePageBodySecondColumn></ProfilePageBodySecondColumn>
            </div>
            <div className="col-lg-1"></div>
        </div>
    )
}