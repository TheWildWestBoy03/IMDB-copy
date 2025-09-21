import { useEffect, useState } from 'react';
import '../../account_settings_page/account_based_pages/AccountPageType.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default function ComplexDropdownDesign(props) {
    const [option, setOption] = useState("Romania");
    const [sortedCountries, setSortedCountries] = useState([]);
    const [openedDropdown, setOpenedDropdown] = useState(false);

    useEffect(() => {
        async function retrieveCountriesData() {
            setSortedCountries(props.data);
            console.log(props.data)
        }

        retrieveCountriesData();
    }, [])

    function removeDropdown(event) {
        setOpenedDropdown(false);
        document.getElementById(props.name).style.display = 'none';
    }

    function toggleDropdownOpening() {
        setOpenedDropdown(prev => !prev);
    }

    function removeDropdown() {
        setOpenedDropdown(false);
    }

    return (
        <div className='dropdown'>
            <button 
                onClick={toggleDropdownOpening} 
                id={props.styleClass} 
                className='btn' 
                type='button'
            >
                <div className='d-flex flex-column align-items-start'>
                    <p style={{fontWeight: '400', color: 'gray', fontSize: '.85rem'}}>
                        {props.buttonSummary}
                    </p>
                    <p style={{fontWeight: '400'}}>{option}</p>
                </div>
                <FontAwesomeIcon icon={faChevronDown} />
            </button>
            <ul 
                id={props.name} 
                className={`dropdown-menu location-list ${openedDropdown ? "show" : ""}`}
            >
                {sortedCountries.map((country) => (
                    <li 
                        key={country}
                        className="country-list-element"
                        onClick={() => {
                            setOption(country);
                            removeDropdown();
                        }}
                    >
                        {country}
                    </li>
                ))}
            </ul>
        </div>
    );
}