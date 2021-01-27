import React from 'react';
import { motion } from 'framer-motion';

import theme from "../../../../constants/theme";

function NavbarPart(props) {
    return (
        <motion.div
            style={{
                width: "40px",
                height: "6px",
                backgroundColor: theme.primary,
                borderRadius: "20px",
                position: "absolute"
            }}
            {...props}
        />
    )
}

export default function NavbarToggle({ toggle }) {
    return (
        <button onClick={toggle} className="bg-transparent position-relative" style={{ border: "none", height: "36px", width: "40px" }}>
            <NavbarPart
                variants={{
                    closed: { transform: "rotate(0deg)", top: "10px" },
                    open: { transform: "rotate(45deg)", top: "15px" }
                }}
            />
            <NavbarPart
                variants={{
                    closed: { transform: "rotate(0deg)", top: "20px" },
                    open: { transform: "rotate(-45deg)", top: "15px" }
                }}
            />
        </button>
    )
}