import LearnMoreSection from "../../LearnMoreSection.jsx"
import AccountPageHeader from "../account_type_page_header/AccountPageHeader"
import DeleteAccountBody from "./DeleteAccountBody.jsx"

export default function DeleteAccountPage() {
    return (
        <>
            <AccountPageHeader title={"Delete account"}></AccountPageHeader>
            <div className="linked-account-page-body row" style={{backgroundColor: 'white', padding: '16px'}}>
                <div className="col-lg-1"></div>
                <div className="col-lg-10 preferences-page-inner-body">
                    <DeleteAccountBody></DeleteAccountBody>
                    <LearnMoreSection classes="learn-more-section learn-more-section-other-pages"></LearnMoreSection>
                </div>
                <div className="col-lg-1"></div>
            </div>
        </>
    )
}