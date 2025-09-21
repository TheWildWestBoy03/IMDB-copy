import ComplexDropdownDesign from "../../../global_components/complexDropdownDesign/ComplexDropdownDesign";
import ToggleBtn from "../../../global_components/toggleButton/ToggleBtn";
import { useState, useEffect } from "react";
import axios from "axios";

export default function GeneralUserInfoForm() {
    const [sortedCountries, setSortedCountries] = useState([]);

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
        <div className="general-preferences-form">
            <form>
                <h3>Title Display</h3>
                {sortedCountries.length !== 0 && <ComplexDropdownDesign data={sortedCountries} styleClass={"personal-preferences-location-input-2"} name={"dropdown-countries-list-1"} buttonSummary={"Country/region"}></ComplexDropdownDesign>}
                {sortedCountries.length !== 0 && <ComplexDropdownDesign data={sortedCountries} styleClass={"personal-preferences-location-input-2"} name={"dropdown-countries-list-2"} buttonSummary={"Display language"}></ComplexDropdownDesign>}
                <h3 style={{
                    marginTop: '20px',
                    fontFamily: 'sans-serif',
                    fontWeight: '600'}}>Contributors</h3>
                <div className="d-flex flex-row align-items-start mt-4" style={{marginLeft: '20px'}}>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked />
                    </div>
                    <p style={{marginTop: '4px'}}>Turn on title reference view to display full cast & crew for credit auditing [advanced view which removes features and is not recommended for general use]</p>
                </div>
                <button type="submit" style={{
                    padding: '6px 90px',
                    fontWeight: '700',
                    fontFamily: 'sans-serif',
                    fontSize: '.9rem',
                    letterSpacing: '-.5px',
                    borderRadius: '24px',
                    background: '#f5c518',
                    marginTop: '24px',
                    marginLeft: '-16px'
                }} className='btn'>Save</button>
            </form>
        </div>
    )
}