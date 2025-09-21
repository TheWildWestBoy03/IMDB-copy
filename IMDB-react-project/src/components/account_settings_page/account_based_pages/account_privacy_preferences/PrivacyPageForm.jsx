export default function PrivacyPreferencesPage() {
    function submitEmailPreferences(event) {

    }

    return (
        <div className="email-preferences-form">
            <form onSubmit={(e) => submitEmailPreferences(e)}>
                <h3 style={{fontWeight: '700'}}>Rating</h3>

                <div>
                    <div className='radio-wrapper'><input value="1" name="privacy" type="radio" defaultChecked /><label for="privacy">Public</label></div>
                    <p style={{fontWeight: '400', fontSize: '.8rem', color: 'gray'}}>Get the week's editor's picks directly in your inbox. Plus, get streaming guides to help build your Watchlist.</p>
                </div>
                <div>  
                    <div className='radio-wrapper'><input value="2" name="privacy" type="radio"/><label for="privacy">Private</label></div>
                    <p style={{fontWeight: '400', fontSize: '.8rem', color: 'gray'}}>From advance search tricks, to making lists, or leaving ratings and reviews, we’ll help you get the most out of IMDb.</p>
                </div>
                <div>  
                    <div className='radio-wrapper'><input value="3" name="privacy" type="radio"/><label for="privacy">Public only with reviews</label></div>
                    <p style={{fontWeight: '400', fontSize: '.8rem', color: 'gray'}}>From advance search tricks, to making lists, or leaving ratings and reviews, we’ll help you get the most out of IMDb.</p>
                </div>
                
                <hr></hr>
                <h3 style={{fontWeight: '700'}}>Watchlist</h3>
                <div>  
                    <div className='radio-wrapper'><input value="2" name="watchlist-privacy" type="radio"/><label for="watchlist-privacy">Public</label></div>
                    <p style={{fontWeight: '400', fontSize: '.8rem', color: 'gray'}}>From advance search tricks, to making lists, or leaving ratings and reviews, we’ll help you get the most out of IMDb.</p>
                </div>
                <div>  
                    <div className='radio-wrapper'><input value="3" name="watchlist-privacy" type="radio"/><label for="watchlist-privacy">Private</label></div>
                    <p style={{fontWeight: '400', fontSize: '.8rem', color: 'gray'}}>From advance search tricks, to making lists, or leaving ratings and reviews, we’ll help you get the most out of IMDb.</p>
                </div>
                <hr></hr>

                <h3 style={{fontWeight: '700'}}>Lists</h3>
                <p style={{margin: '16px 0', fontWeight: '400'}}>Edit the privacy settings for each of your lists individually.</p>
                <button id="privacy-settings-save-btn" className="btn" style={{
                                                                        borderRadius: '16px',
                                                                        display: 'block', 
                                                                        fontWeight: '700', 
                                                                        color: '#0e63be', 
                                                                        marginLeft: '-16px'}}>Go to lists</button>
                <button type="submit" className='btn' style={{
                                                        marginLeft: '-16px', 
                                                        padding: '5px 100px', 
                                                        borderRadius: '16px', 
                                                        background: '#f5c518', 
                                                        fontWeight: '700', 
                                                        marginTop: '12px'}}>Save</button>
            </form>
        </div>
    )
}