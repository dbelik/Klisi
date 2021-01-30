import React, { Fragment, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import sizes from '../../../../config/sizes';

import NavbarToggle from '../NavbarToggle';
import NavbarItemsList from '../NavbarItemsList';
import NavbarItemsListOpen from '../NavbarItemsListOpen';
import theme from '../../../../config/theme';

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
        clipPath: "circle(20px at 270px 42px)",
        transition: {
            delay: 0.3,
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
                        <motion.div
                            initial={{...sidebar.closed, opacity: 0}}
                            animate={{ opacity: 1 }}
                            transition={{
                                delay: 1
                            }}
                            variants={sidebar}
                            className="position-absolute w-100 shadow"
                            style={{
                                background: theme.primary,
                                height: "100vh",
                                maxWidth: "320px",
                                top: "0",
                                right: "0",
                            }} 
                        >
                            <NavbarItemsListOpen />
                        </motion.div>

                        <NavbarToggle toggle={toggle} />
                    </Fragment>
                )
            }

            { width > sizes.screen.desktop && <NavbarItemsList /> }
        </Fragment>
    )
}