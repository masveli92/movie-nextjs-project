import React from 'react';
import css from './Header.module.css'
import Link from "next/link";

const Header = () => {
    return (
        <div className={css.header}>

                <div>
                    <Link href={'/'}>Home</Link>
                </div>
                <div>
                    <Link href={'/movies'}>Movies</Link>
                </div>

        </div>
    );
};

export default Header;