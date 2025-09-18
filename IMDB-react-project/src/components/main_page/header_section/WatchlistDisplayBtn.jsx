export default function WatchlistDisplayBtn() {
    function handleClick(event) {
        event.preventDefault()
        console.log("Watchlist btn clicked");
        window.location = "http://localhost:5173/user/watchlist";
    }

    return (
        <button onClick={(event) => handleClick(event)} className='d-flex justify-content-center align-items-center fw-bold btn text-white px-3 py-0 lh-1 rounded-pill button-hover-effect'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ height: '1.5rem', width: '1.5rem', fontWeight: 'bold' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
            Watchlist</button>
    )
}