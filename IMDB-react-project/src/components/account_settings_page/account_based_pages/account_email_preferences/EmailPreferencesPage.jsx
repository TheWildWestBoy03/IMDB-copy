import AccountPageHeader from "../account_type_page_header/AccountPageHeader"
import EmailPreferencesForm from "./EmailPreferencesForm"
import LearnMoreSection from "../../LearnMoreSection"
import AccountSettingsPageOptions from "../../AccountSettingsPageOptions"

export default function EmailPreferencesPage() {
    return (
        <>
            <AccountPageHeader title={"Email Preferences"}></AccountPageHeader>
            <div className="preferences-page-body row email-preferences-body">
                <div className="col-lg-1"></div>
                <div className="col-lg-10 d-flex flex-direction-row email-preferences-inner-body">
                    <EmailPreferencesForm></EmailPreferencesForm>
                    <LearnMoreSection classes="learn-more-section learn-more-section-other-pages"></LearnMoreSection>
                </div>
                <div className="col-lg-1"></div>
            </div>
        </>
    )
}