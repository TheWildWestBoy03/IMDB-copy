import LearnMoreSection from "../../LearnMoreSection.jsx"
import AccountPageHeader from "../account_type_page_header/AccountPageHeader"
import GeneralUserInfoForm from "./GeneralUserInfoForm.jsx"

export default function GeneralPreferencesPage() {
    return (
        <>
            <AccountPageHeader title={"Site Settings"}></AccountPageHeader>
            <div className="preferences-page-body row" style={{backgroundColor: 'white', padding: '16px'}}>
                <div className="col-lg-1"></div>
                <div className="col-lg-10 preferences-page-inner-body">
                    <GeneralUserInfoForm></GeneralUserInfoForm>
                    <LearnMoreSection classes="learn-more-section learn-more-section-other-pages"></LearnMoreSection>
                </div>
                <div className="col-lg-1"></div>
            </div>
        </>
    )
}