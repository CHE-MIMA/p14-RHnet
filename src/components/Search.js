
import React from "react";

const Search = ({ onfilter, filterText }) => {
    return (
        <>
            <div className='searchBar'>
                <p className='search'>Search:</p>
                <input
                    type='text'
                    name='searchBar'
                    id='searchBar'
                    placeholder=''
                    value={filterText}
                    onChange={onfilter}
                />
            </div>
        </>

    );
};

export default Search;