import { useState, useContext } from "react"
import SignedInContext from "../../../../context/SignedInContext"
import TopMoviesCarousel from './TopMoviesCarousel'

export default function TopMoviesSection() {
    return (
        <div className="row">
            <div class="col-lg-1"></div>
            <TopMoviesCarousel></TopMoviesCarousel>
            <div class="col-lg-1"></div>
        </div>
    )
}