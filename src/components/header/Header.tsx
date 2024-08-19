import React from 'react';
import css from './Header.module.css'
import Link from "next/link";
import MovieSearchForm from '../movieSearchForm/MovieSearchForm';


const Header = () => {
    return (
        <div className={css.header}>

            <div>
                <Link href={'/movies'}>Movies</Link>
            </div>
            <div>
                <MovieSearchForm/>
            </div>

        </div>
    );
};

export default Header;