import React from 'react';

import theme from '../../../../constants/theme';

import NavbarItem from '../NavbarItem';

export default function NavbarItemsListOpen() {
    const linkStyle = {
        color: theme.secondary,
        display: "block",
        padding: "10px"
    };

    return (
        <ul className="list-unstyled text-center" style={{ paddingTop: "100px" }}>
            <NavbarItem href="/" delay={1} linkStyle={linkStyle}>Home</NavbarItem>
            <NavbarItem href="/about" delay={1.05} linkStyle={linkStyle}>About</NavbarItem>
            <NavbarItem href="/login" delay={1.1} linkStyle={linkStyle}>Log in</NavbarItem>
        </ul>
    )
}