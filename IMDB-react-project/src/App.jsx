import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import '../scss/custom.scss'

import Header from './components/main_page/header_section/Header';
import CelebritiesRankingSection from './components/main_page/celebrities_section/CelebritiesRankingSection';
import TrailerSection from './components/main_page/main_sections/trailer_section/TrailerSection';

function App() {
  return (
    <>
      <Header></Header>
      <TrailerSection></TrailerSection>
      <CelebritiesRankingSection></CelebritiesRankingSection>
    </>
  );
}

export default App;
