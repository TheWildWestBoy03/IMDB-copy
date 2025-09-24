import ProfilePageBodyFirstColumn from './ProfilePageBodyFirstColumn.jsx'
import ProfilePageBodySecondColumn from './ProfilePageBodySecondColumn.jsx'
import './ProfilePageStylesheet.css'
import LearnMoreSection from '../account_settings_page/LearnMoreSection.jsx'

export default function ProfilePageBody() {
    return (
        <div className="profile-page-body row">
            <div className="col-lg-1"></div>
            <div className="col-lg-10 profile-page-body-wrapper">
                <ProfilePageBodyFirstColumn></ProfilePageBodyFirstColumn>
                <ProfilePageBodySecondColumn></ProfilePageBodySecondColumn>
                {/* <LearnMoreSection classes="learn-more-section"></LearnMoreSection> */}
            </div>
            <div className="col-lg-1"></div>
        </div>
    )
}