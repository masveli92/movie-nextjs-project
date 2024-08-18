'use client'
import React from 'react';

const SearchMoviesComponent = () => {
    return (
        <div >
            <form action="/movies/bySearch" >
                <input
                    type="text"
                    name="query"
                    placeholder="Search Movies"
                />
                <button>Search</button>
            </form>
        </div>
    );
};

export default SearchMoviesComponent;