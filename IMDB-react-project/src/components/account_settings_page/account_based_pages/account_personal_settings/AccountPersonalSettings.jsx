import LearnMoreSection from "../../LearnMoreSection.jsx"
import AccountPageHeader from "../account_type_page_header/AccountPageHeader"
import PersonalSettingsForm from "./PersonalSettingsForm.jsx"

export default function AccountPersonalSettings() {
    return (
        <>
            <AccountPageHeader title={"Personal Settings"}></AccountPageHeader>
            <div className="preferences-page-body row">
                <div className="col-lg-1"></div>
                <div className="col-lg-10 d-flex flex-direction-row preferences-page-inner-body">
                    <PersonalSettingsForm></PersonalSettingsForm>
                    <LearnMoreSection></LearnMoreSection>
                </div>
                <div className="col-lg-1"></div>
            </div>
        </>
    )
}