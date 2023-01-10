import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Search = () => {
    const { employee } = useSelector;
    const [searchTerm, setSearchTerm] = useState()
    const handleSearchTerm = (e) => {
        let value = e.target.value;
        setSearchTerm(value);
    }
    console.log(searchTerm)
    return (
        <>
            <div className='searchBar'>
                <input
                    type='text'
                    name='searchBar'
                    id='searchBar'
                    placeholder=''
                    onChange={handleSearchTerm} />
            </div>
            <div className='search-results'>
                {employee
                    .filter[(val) => {
                        return val.toLowerCase().includes(searchTerm.toLowerCase());
                    }]
                    .map[(val) => {
                        return [
                            <div className='serach-result' key={val}>
                                {val}
                            </div>
                        ]
                    }]}
            </div>
        </>
    );
};

export default Search;