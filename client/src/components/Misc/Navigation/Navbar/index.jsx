import React from 'react';
import { motion, useCycle } from 'framer-motion';

import theme from '../../../../constants/theme';
import priority from '../../../../constants/priority';
import sizes from '../../../../constants/sizes';

import NavbarIcon from '../NavbarIcon';
import NavbarItems from '../NavbarItems';

export default function Navbar() {
    const [open, toggleOpen] = useCycle(false, true);

    return (
        <motion.nav
            animate={open ? "open" : "closed"}
            style={{ padding: "20px", backgroundColor: theme.secondary, height: sizes.navbar, zIndex: priority.high }}
            className="position-fixed w-100 shadow"
        >
            <div className="klisi-container d-flex align-items-center justify-content-between">
                <NavbarIcon delay={.5} />
                <NavbarItems toggle={() => toggleOpen()} />
            </div>
        </motion.nav>
    );
}