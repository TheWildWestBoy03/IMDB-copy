import { useState, useContext } from "react"
import SignedInContext from "../../../../context/SignedInContext"
import TopMoviesCarousel from './TopMoviesCarousel'

export default function TopMoviesSection() {
    return (
        <div className="row">
            <div className="col-lg-1"></div>
            <TopMoviesCarousel></TopMoviesCarousel>
            <div className="col-lg-1"></div>
        </div>
    )
}