import '../AccountPageType.css'

export default function EmailPreferencesForm() {
    function submitEmailPreferences() {

    }

    return (
        <div className="email-preferences-form">
            <form onSubmit={(e) => submitEmailPreferences(e)}>
                <h3 style={{fontWeight: '700'}}>IMDb Informational Emails</h3>
                <p style={{fontWeight: '500', marginBottom: '26px', color: 'gray'}}>Note: Even if you select to not receive informational emails from IMDb, you will still receive transactional emails, such as critical account and security messages.

Send me emails from the following categories:</p>
                <div class="radio-wrapper">
                    <input className="informational-email-radio" type="radio" name="update-type" defaultChecked/><label for="update-type">Send me email from the following categories:</label>
                </div>
                <div style={{marginLeft: '32px'}}>
                    <div className='checkbox-wrapper'><input value="1" name="weekly-picks" type="checkbox" defaultChecked /><label for="weekly-picks">Weekly Picks</label></div>
                    <p style={{fontWeight: '400', fontSize: '.7rem', color: 'gray'}}>Get the week's editor's picks directly in your inbox. Plus, get streaming guides to help build your Watchlist.</p>
                </div>
                <div style={{marginLeft: '32px'}}>  
                    <div className='checkbox-wrapper'><input value="2" name="tips-tricks" type="checkbox" defaultChecked /><label for="tips-tricks">Tips & Tricks</label></div>
                    <p style={{fontWeight: '400', fontSize: '.7rem', color: 'gray'}}>From advance search tricks, to making lists, or leaving ratings and reviews, we’ll help you get the most out of IMDb.</p>
                </div>
                <div style={{marginLeft: '32px'}}>
                    <div className='checkbox-wrapper'><input value="3" name="weekly-trending" type="checkbox" defaultChecked /><label for="weekly-trending">Weekly Trending</label></div>
                    <p style={{fontWeight: '400', fontSize: '.7rem', color: 'gray'}}>Find the most popular trailers, films, TV shows, and people with this weekly email</p>
                </div>
                <div class="radio-wrapper">
                    <input className="informational-email-radio" type="radio" name="update-type" /><label for="update-type">Account updates only -- do not send me informational emails.</label>
                </div>
                <hr></hr>
                <h3 style={{fontWeight: '700'}}>IMDb Subscription Emails and Newsletters</h3>
                <p style={{fontWeight: '500', marginBottom: '26px', color: 'gray'}}>Subscription emails contain information that 
                    you have requested. You may sign up or opt-out from subscription emails at any time by visiting this page.</p>

                <div>
                    <div className='checkbox-wrapper'><input name="weekly-picks" type="checkbox" defaultChecked /><label for="weekly-picks">Watchlisted Movies in Wide Release</label></div>
                    <p style={{fontWeight: '400', fontSize: '.7rem', color: 'gray'}}>When a movie on your Watchlist is about to release, we will send you a short message.</p>
                </div>
                <div>  
                    <div className='checkbox-wrapper'><input name="tips-tricks" type="checkbox" defaultChecked /><label for="tips-tricks">Watchlisted Shows on Tonight</label></div>
                    <p style={{fontWeight: '400', fontSize: '.7rem', color: 'gray'}}>When a show from your Watchlist is airing, we will send you a short message.</p>
                </div>

                <button type="submit" className='btn' style={{
                                                    marginLeft: '-16px', 
                                                    padding: '5px 100px', 
                                                    borderRadius: '16px', 
                                                    background: '#f5c518', 
                                                    fontWeight: '700', 
                                                    marginTop: '24px'}}>Save</button>
            </form>
        </div>
    )
}