import React from 'react'
import { SearchIcon } from "@heroicons/react/solid"
import "./style.css"

function SearchBar() {
    return (
        <div className="search-cont">
            <SearchIcon className="icon" />
            <input type="text" placeholder="Search" />
        </div>
    )
}

export default SearchBar
