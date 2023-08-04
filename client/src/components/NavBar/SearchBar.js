import React, { useState } from 'react';
import axios from 'axios';
import './NavBar.css'

const Search = () => {
    const [searchInput, setSearchInput] = useState("");
    const [data, setData] = useState([]);

    const handleSearch = () => {
        axios.get(`search=${searchInput}`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log('There was an error!', error);
            });
    };

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search"
                onChange={handleChange}
            />
            <button className='SearchButton' onClick={handleSearch}>Search</button>
            {data.map((item, index) => (
                <div key={index}>
                    <h1>{item.name}</h1>
                    <p>{item.image}</p>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Search;