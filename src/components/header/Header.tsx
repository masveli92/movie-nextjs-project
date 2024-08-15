import React from 'react';
import Link from "next/link";

const Header = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/movies'}>Movies</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;