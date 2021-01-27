import React from 'react';

import NavbarItem from '../NavbarItem';

export default function NavbarItemsList() {
    return (
        <ul className="list-unstyled d-flex m-0">
            <NavbarItem href="/home" className="mr-4" delay={1}>Home</NavbarItem>
            <NavbarItem href="/about" className="mr-4" delay={1.05}>About</NavbarItem>
            <NavbarItem href="/login" className="mr-4" delay={1.1}>Log in</NavbarItem>
        </ul>
    )
}