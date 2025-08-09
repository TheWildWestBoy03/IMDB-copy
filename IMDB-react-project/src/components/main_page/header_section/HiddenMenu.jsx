import HiddenHeaderList from "./HiddenHeaderList"
import './HiddenMenu.css'
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HiddenMenu() {
    const listStructure = [
        ['Release calendar', 'Top 250 movies', 'Most popular movies', 'Browse movies by genre', 'Top box office', 'Showtimes & tickets', 'Movie news', 'India movie spotlight'],
        ['Born today', 'Most popular celebs', 'Celebrity news'],
        ['What is on TV & streaming', 'Top 250 TV shows', 'Most popular TV shows', 'Browse TV shows by genre', 'TV news'],
        ['What to watch', 'Latest trailers', 'IMDb Originals', 'IMDb Picks', 'IMDb Spotlight', 'Family entertainment guide', 'IMDb Podcasts'],
        ['Oscars', 'Emmys', 'San Diego Comic-Con', 'Summer Watch Guide', 'Toronto Int\'\I Film Festival', 'STARmeter  Awards', 'Awards Central', 'Festival Central', 'All events'],
        ['Help center', 'Contributor zone', 'Polls']
    ]

    const hideMenu = (event) => {
        const hiddenMenu = document.getElementById('hidden');
        hiddenMenu.classList.remove('show');
    }
    return (
        <div id="hidden" className="hidden-menu row d-none d-lg-block">
            <div className="hidden-menu-container">
                <div class="buttons-container">
                    <a href="#" className="btn btn-warning fw-bold rounded"
                            style={{maxWidth: 'fit-content', fontSize: '1.8rem', fontWeight: '900'}}
                        >IMDb</a>
                    <button onClick={(event) => hideMenu(event)} className="btn btn-warning text-block">
                            <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                    </button>
                </div>
                <div className="d-flex justify-content-between align-items-start">
                    <div className="column">
                        <HiddenHeaderList listTitle="Movies" subjects={listStructure[0]}></HiddenHeaderList>
                    </div>
                    <div className="column">
                        <HiddenHeaderList listTitle="TV Shows" subjects={listStructure[2]}></HiddenHeaderList>
                        <HiddenHeaderList listTitle="Watch" subjects={listStructure[3]}></HiddenHeaderList>
                    </div>
                    <div className="column">
                        <HiddenHeaderList listTitle="Awards & events" subjects={listStructure[4]}></HiddenHeaderList>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-start">
                    <div className="column">
                        <HiddenHeaderList listTitle="Celebs" subjects={listStructure[1]}></HiddenHeaderList>
                    </div>
                    <div className="column" style={{opacity: '0'}}>
                        <HiddenHeaderList listTitle="Watch" subjects={listStructure[5]}></HiddenHeaderList>
                    </div>
                    <div className="column">
                        <HiddenHeaderList listTitle="Community" subjects={listStructure[5]}></HiddenHeaderList>
                    </div>
                </div>
            </div>
        </div>
    )
}