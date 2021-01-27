import React from 'react';
import { motion } from 'framer-motion';

export default function NavbarItem({ children, href, delay }) {
    return (
        <motion.li 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{
                delay: delay
            }}

            className="mr-4"
        >
            <a href={href}>{ children }</a>
        </motion.li>
    )
}