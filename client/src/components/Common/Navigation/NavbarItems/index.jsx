import React, { Fragment, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import sizes from '../../../../constants/sizes';

import NavbarItem from '../NavbarItem';
import NavbarToggle from '../NavbarToggle';

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

export default function NavbarItems({ toggle }) {
    const [width, setWidth] = useState();

    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, [width]);

    return (
        <Fragment>
            {
                width <= sizes.screen.desktop && (
                    <Fragment>
                        <motion.div variants={sidebar} />
                        <NavbarToggle toggle={toggle} />
                    </Fragment>
                )
            }

            {
                width > sizes.screen.desktop && (
                    <ul className="list-unstyled d-flex m-0">
                        <NavbarItem href="/home" delay={1}>Home</NavbarItem>
                        <NavbarItem href="/about" delay={1.05}>About</NavbarItem>
                        <NavbarItem href="/login" delay={1.1}>Log in</NavbarItem>
                    </ul>
                )
            }
        </Fragment>
    )
}