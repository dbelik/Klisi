import React from 'react';
import { motion, useCycle } from 'framer-motion';

import theme from '../../../../constants/theme';
import NavbarIcon from '../NavbarIcon';
import NavbarItems from '../NavbarItems';
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

export default function Navbar() {
    const [open, toggleOpen] = useCycle(false, true);

    return (
        <motion.nav
            animate={open ? "open" : "closed"}
            style={{ padding: "20px", backgroundColor: theme.secondary }}
        >
            <div className="klisi-container d-flex align-items-center justify-content-between">
                <NavbarIcon delay={.5} />
                <NavbarItems />

                {/* <motion.div variants={sidebar} />
                <NavbarToggle toggle={() => toggleOpen()} /> */}
            </div>
        </motion.nav>
    );
}