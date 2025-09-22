import LearnMoreSection from "../../LearnMoreSection.jsx"
import AccountPageHeader from "../account_type_page_header/AccountPageHeader"
import RetrieveDataBody from "./RetrieveDataBody.jsx"

export default function RetrieveDataPage() {
    return (
        <>
            <AccountPageHeader title={"Request my data"}></AccountPageHeader>
            <div className="linked-account-page-body row" style={{backgroundColor: 'white', padding: '16px'}}>
                <div className="col-lg-1"></div>
                <div className="col-lg-10 preferences-page-inner-body">
                    <RetrieveDataBody></RetrieveDataBody>
                    <LearnMoreSection classes="learn-more-section learn-more-section-other-pages"></LearnMoreSection>
                </div>
                <div className="col-lg-1"></div>
            </div>
        </>
    )
}