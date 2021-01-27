import React from 'react';

import NavbarItem from '../NavbarItem';

export default function NavbarItems() {
    return (
        <ul className="list-unstyled d-flex">
            <NavbarItem href="/home" delay={1}>Home</NavbarItem>
            <NavbarItem href="/about" delay={1.05}>About</NavbarItem>
            <NavbarItem href="/login" delay={1.1}>Log in</NavbarItem>
        </ul>
    )
}