import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faGripHorizontal } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

import './WatchlistPageStylesheet.css'
import { useState } from "react";
export default function WatchlistSortOptions(props) {
    const [ascendingOrder, setAscendingOrder] = useState(true)

    function getAscendingOrderIcon() {
        if (ascendingOrder === true) {
            return (<FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>);
        }
        
        return (<FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>);
    }
    
    function handleOrderClick(event) {
        event.preventDefault();
        setAscendingOrder(lastOrder => !lastOrder);
    }

    function handleCriteriaBtnClick(event) {
        const commandButtons = document.getElementsByTagName("button");

        for (let i = 1; i < commandButtons.length; i++) {
            if (commandButtons[i].classList.contains('highlight-btn')) {
                commandButtons[i].classList.remove('highlight-btn');
            }
        }

        let button = event.target;
    
        if (!button.innerHTML.includes("svg")) {
            button = event.target.parent;
        }

        button.classList.add("highlight-btn");
        console.log(button)
    }

    if (props.watchlist !== undefined) {
        return (
            <div className="d-flex justify-content-between align-items-center">
                <span style={{fontSize: '1.15rem'}}>{props.watchlist != undefined && props.watchlist.length + " titles"}</span>
                <div className="d-flex align-items-center sort-container justify-content-end">
                    <span>Sort by</span>
                    <div className="dropdown">
                        <button className="dropdown-toggle rounded-pill border-0 px-3 py-0" 
                        style={{color: '#0e63c2', background: 'white', letterSpacing: '.5px', borderRadius: '16px'}}
                        data-bs-toggle="dropdown">List order</button>
                        <ul className="dropdown-menu text-primary" style={{width: '100%', height: 'auto', padding: 0}}>
                            <li className="dropdown-item p-0">Alphabetical</li>
                            <li className="dropdown-item p-0">IMDb rating</li>
                            <li className="dropdown-item p-0">Popularity</li>
                            <li className="dropdown-item p-0">Number of ratings</li>
                            <li className="dropdown-item p-0">Release date</li>
                            <li className="dropdown-item p-0">Runtime</li>
                            <li className="dropdown-item p-0">Date added</li>
                            <li className="dropdown-item p-0">Your rating</li>
                        </ul>
                    </div>
                    <button style={{color: '#0e63c2'}} className="ascending-type-btn" onClick={(event) => handleOrderClick(event)}>{getAscendingOrderIcon()}</button>
                    <button onClick={(event) => handleCriteriaBtnClick(event)}><FontAwesomeIcon icon={faEllipsisVertical} className="mx-1"></FontAwesomeIcon><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></button>
                    <button onClick={(event) => handleCriteriaBtnClick(event)}><FontAwesomeIcon icon={faGripHorizontal}></FontAwesomeIcon></button>
                    <button onClick={(event) => handleCriteriaBtnClick(event)} className="highlight-btn"><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></button>
                </div>
            </div>
        )
    }

    return "Loading";
}