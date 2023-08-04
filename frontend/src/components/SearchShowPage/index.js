import React, { useEffect } from "react";
import HomePage from "../Homepage";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchResults } from "../../store/search";

export default function SearchShowPage(){
    const location = useLocation()
    const dispatch = useDispatch()
    const searchParams = new URLSearchParams(location.search)
    const query = searchParams.get('query');
    const searchResults = useSelector(state => Object.values(state.search))

    useEffect(() => {
        if (query) {
            dispatch(fetchSearchResults(query))
        }
    },[])
    return(
        // <HomePage/>
        <div id ="search-page-container">
            {searchResults.map(result => {
                return (
                    <div>{result}</div>
                )
            })}

            {/* SongIndex searchResults={searchResults*/} uses homepage use later
        </div>
    )

}