import React from "react";
import { useState } from "react";
import { clearSearchResults, fetchSearchResults } from "../../store/search";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom"

export default function SearchBar(){
    const dispatch = useDispatch()
    const history = useHistory()
    const [searchText, setSearchText] = useState();
    const [timer, setTimer] = useState(0)
    const searchResults = useSelector(state => Object.values(state.search));

    function handleSearch(e){
        const query = e.target.value;
        setSearchText(query)
        clearTimeout(timer)

        if (query.trim() !== "") {

            setTimer(setTimeout(() => dispatch(fetchSearchResults(query)), 300))
        } else {
            dispatch(clearSearchResults) //if empty clear all search results
        }
    }

    function handleClick(id){
        return (e) => {
            e.preventDefault();
            history.push(`/songs/${id}`)
            dispatch(clearSearchResults)
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        if(searchText?.trim() !== ""){
            history.push(`/search?query=${searchText}`)
        }
    }

    function handleSearch(e) {
        const query = e.target.value
        setSearchText(query)
        clearTimeout(timer)

        if(query.trim() !== ""){
            setTimer(setTimeout(()=> dispatch(fetchSearchResults(query)),300))
        } else {
            dispatch(clearSearchResults)
        }
    }

    return (
        <div className="searchbar-container">
            <input
                type="text"
                id="search-input"
                placeholder="Search"
                value={searchText}
                onChange={handleSearch}
            />

            <button id="search-button">🔍</button>

            {searchText && searchResults && <ul id="search-dropdown">
                {searchResults.map(result => {
                    return <li 
                                className="search-dropdown-value"
                                onClick={handleClick(result.id)}
                                >{result.name}
                            </li>
                })}
            </ul>}
        </div>
    )
}