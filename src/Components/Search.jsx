import React, { useState } from 'react';
import "./Search.css"

const Search = ({ dispatch }) => {
    const [search, setSearch] = useState('');

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearch(value);
        dispatch({ type: "Search", payload: value });
    };

    return (
        <div className='search-container'>
            <input
                type="text"
                value={search}
                className='search-bar'
                placeholder="Search..."
                onChange={handleSearchChange}
            />
        </div>
    );
};

export default Search;
