import WatchlistSettings from "./WatchlistSettings"
import './WatchlistPageStylesheet.css'
export default function WatchlistPageHeader() {
    return (<>
        <div className="row">
            <div class="col-lg-1" style={{backgroundColor: "#1f1f1f"}}></div>
            <div class="col-lg-10 p-0">
                <div style={{backgroundColor: "#1f1f1f", padding: '16px'}}>
                    <WatchlistSettings></WatchlistSettings>
                    <div className="px-3 py-2 d-flex header-wrapper">
                        <div className="text-white left-side">
                            <h1>Your Watchlist</h1>
                            <p className="my-3">by <a className="text-decoration-none" href="#">AlexP-2317</a> • Created 2 months ago • Modified 4 hours ago</p>
                            <p style={{fontSize: '.875rem', fontWeight: '400'}}>Your Watchlist is the place to track the titles you want to watch. You can sort your Watchlist by the IMDb rating or popularity score and arrange your titles in the order you want to see them.</p>
                        </div>
                        <div className="right-side d-flex justify-content-center align-items-center">
                            <button style={{
                                backgroundColor: "#f5c518",
                                borderRadius: '24px',
                                gap: '5px',
                            }} 
                                onClick={(e) => window.location = '/user/new-list' }
                                className="btn p-2 py-1 d-flex align-items-center watchlist-main-button">
                                <span style={{fontWeight: '900', fontSize: '2rem'}}>+</span>
                                <div>
                                    <p style={{fontSize: '1rem', textAlign: "left"}}>Create a new list</p>
                                    <p style={{fontSize: '.875rem'}}>List your movie, TV & celebrity picks.</p></div>
                            </button>    
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-1" style={{backgroundColor: "#1f1f1f"}}></div>
        </div>
    </>)
}