import React from 'react';
import { motion } from 'framer-motion';

import theme from "../../../../constants/theme";

function NavbarPart(props) {
    return (
        <motion.div
            style={{
                width: "40px",
                height: "5px",
                backgroundColor: theme.primary,
                borderRadius: "20px",
                position: "absolute",
                top: "15px"
            }}
            {...props}
        />
    )
}

export default function NavbarToggle({ toggle }) {
    return (
        <motion.button 
            onClick={toggle} 
            className="bg-transparent position-relative" 
            style={{ border: "none", height: "36px", width: "40px" }}

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
        >
            <NavbarPart
                variants={{
                    closed: { transform: "rotate(0deg)" },
                    open: { transform: "rotate(45deg)" }
                }}
            />
            <NavbarPart
                variants={{
                    closed: { transform: "rotate(0deg)" },
                    open: { transform: "rotate(-45deg)" }
                }}
            />
        </motion.button>
    )
}