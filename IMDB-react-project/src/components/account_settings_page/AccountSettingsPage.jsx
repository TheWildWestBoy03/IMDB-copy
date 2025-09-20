import AccountSettingsPageOptions from "./AccountSettingsPageOptions";
import LearnMoreSection from "./LearnMoreSection";

export default function AccountSettingsPage() {
    return (<>
        <div className="account-settings-introduction">
            <div style={{height: '30px', background: 'black'}}></div>
            <div className="row" style={{padding: '16px 24px 24px', background: '#1f1f1f'}}>
                <div className="col-lg-1"></div>
                <div className="col-lg-10">
                    <h1 style={{lineHeight: '1', fontSize: '2.75rem', color: 'white', fontWeight: 'normal', marginBottom: '0'}}>Account Settings</h1>
                </div>
                <div className="col-lg-1"></div>
            </div>
        </div>
        <div className="account-settings-body row" style={{backgroundColor: 'white', padding: '16px'}}>
            <div className="col-lg-1"></div>
            <div className="col-lg-10 d-flex flex-direction-row">
                <AccountSettingsPageOptions></AccountSettingsPageOptions>
                <LearnMoreSection></LearnMoreSection>
            </div>
            <div className="col-lg-1"></div>
        </div>
    </>)
}