import WatchlistSortOptions from "./WatchlistSortOptions"
import SignedInContext from "../../context/SignedInContext"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import WatchlistListColumn from "./WatchlistListColumn"
import WatchlistMoreToExploreColumn from "./WatchlistMoreToExploreColumn"
import "./WatchlistPageStylesheet.css"

export default function WatchlistPageBody(props) {
    return (
        <div className="d-flex" style={{padding: '24px'}}>
            <div className="col-lg-1"></div>
            <div className="col-lg-10 d-flex justify-content-between flex-toggler">
                <WatchlistListColumn watchlist={props.watchlist}></WatchlistListColumn>
                <WatchlistMoreToExploreColumn></WatchlistMoreToExploreColumn>
            </div>
            <div className="col-lg-1"></div>
        </div>
    )
}