import TrailerSection from "../main_page/main_sections/trailer_section/TrailerSection"
import CelebritiesRankingSection from "../main_page/main_sections/celebrities_section/CelebritiesRankingSection"
import TopMoviesSection from "./main_sections/top_movies_section/TopMoviesSection"
import WatchListSection from "./main_sections/watchlist_section/WatchlistSection"

export default function MainPage() {
    return (
        <div style={{backgroundColor: 'black'}}>
            <TrailerSection></TrailerSection>
            <CelebritiesRankingSection></CelebritiesRankingSection>
            <WatchListSection></WatchListSection>
            <TopMoviesSection></TopMoviesSection>
        </div>
    )
}