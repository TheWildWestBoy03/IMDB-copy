import '../AccountPageType.css'
import ComplexDropdownDesign from '../../../global_components/complexDropdownDesign/ComplexDropdownDesign';
import { useState, useEffect } from "react";
import axios from 'axios';

export default function PersonalSettingsForm() {
    const [sortedCountries, setSortedCountries] = useState([]);
    function submitData() {

    }

    useEffect(() => {
        async function retrieveCountriesData() {
            const url = "https://restcountries.com/v3.1/independent?status=true&fields=name";
            const data = await axios.get(url);
            
            const new_sorted_countries = data.data.map((country) => {return country.name.common}).toSorted();
            setSortedCountries(new_sorted_countries)
        }

        retrieveCountriesData();
    }, [])

    return (
        <div className="personal-preferences-form">
            <p style={{
                fontWeight: '700',
                fontSize: '1rem',
                color: 'black'
            }}>Date of birth</p>
            <form onSubmit={(e) => submitData()}>
                <input id="personal-preferences-data-input" type="date"/>
                {sortedCountries.length !== 0 && <ComplexDropdownDesign data={sortedCountries} styleClass={"personal-preferences-location-input"} name={"dropdown-countries-list-3"} buttonSummary={"Country/region of residence"}></ComplexDropdownDesign>}
                <button type="submit" style={{
                    padding: '6px 90px',
                    fontWeight: '700',
                    fontFamily: 'sans-serif',
                    fontSize: '.9rem',
                    letterSpacing: '-.5px',
                    borderRadius: '24px',
                    background: '#f5c518',
                    marginTop: '24px'
                }} className='btn'>Submit</button>
            </form>
        </div>
    )
}