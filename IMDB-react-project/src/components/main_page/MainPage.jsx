import TrailerSection from "../main_page/main_sections/trailer_section/TrailerSection"
import CelebritiesRankingSection from "../main_page/main_sections/celebrities_section/CelebritiesRankingSection"

export default function MainPage() {
    return (
        <div style={{backgroundColor: 'black'}}>
            <TrailerSection></TrailerSection>
            <CelebritiesRankingSection></CelebritiesRankingSection>
        </div>
    )
}