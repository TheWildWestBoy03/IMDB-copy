import LearnMoreSection from "../../LearnMoreSection.jsx"
import AccountPageHeader from "../account_type_page_header/AccountPageHeader"
import LinkedAccountForm from "./LinkedAccountForm.jsx"

export default function LinkedAccountPage() {
    return (
        <>
            <AccountPageHeader title={"Linked Accounts"}></AccountPageHeader>
            <div className="linked-account-page-body row" style={{backgroundColor: 'white', padding: '16px'}}>
                <div className="col-lg-1"></div>
                <div className="col-lg-10 preferences-page-inner-body">
                    <LinkedAccountForm></LinkedAccountForm>
                    <LearnMoreSection classes="learn-more-section-other-pages learn-more-section"></LearnMoreSection>
                </div>
                <div className="col-lg-1"></div>
            </div>
        </>
    )
}