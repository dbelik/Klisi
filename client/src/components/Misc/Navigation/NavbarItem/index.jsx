import React from 'react';
import { motion } from 'framer-motion';

export default function NavbarItem({ children, href, delay, style, linkStyle, className }) {
    return (
        <motion.li 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{
                delay: delay
            }}

            style={style}
            className={className}
        >
            <a href={href} style={linkStyle}>{ children }</a>
        </motion.li>
    )
}