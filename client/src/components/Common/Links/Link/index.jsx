import React, { useState } from 'react';
import { motion } from 'framer-motion';

import theme from '../../../../constants/theme';

export default function Link({ children, href }) {
    const [hover, setHover] = useState(false);

    return (
        <motion.a
            className="position-relative"
            style={{ color: theme.primary }} 
            href={href}
        >
            <motion.div
                className="position-absolute w-100 h-100"
            />
            { children }
        </motion.a>
    );
}