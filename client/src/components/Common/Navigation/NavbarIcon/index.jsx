import React from 'react';
import { motion } from 'framer-motion';

function Path({ delay, d, animationProp }) {
    return (
        <motion.path 
            {...animationProp}
            transition={{
                delay: delay
            }}
            d={d} stroke="#17181F" strokeWidth="5.75176"
        />
    );
}

function Line({ delay, animationProp }) {
    return (
        <motion.line 
            {...animationProp}
            transition={{
                delay: delay
            }}
            x1="35.9485" y1="10.7845" x2="35.9485" y2="45.2951" stroke="#17181F" strokeWidth="5.75176"
        />
    );
}

export default function Navbar({ delay }) {
    const animationProp = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
    };

    return (
        <motion.svg 
            style={{ height: "40px" }} width="65" height="56" viewBox="0 0 86 56"
            {...animationProp}
            transition={{
                delay: delay
            }}
        >
            <path d="M84.9978 24.8169C80.3208 18.9944 63.6171 0 43 0C22.3829 0 5.67924 18.9944 1.00222 24.8169C-0.334073 26.4395 -0.334073 28.8257 1.00222 30.5438C5.67924 36.3663 22.3829 55.3607 43 55.3607C63.6171 55.3607 80.3208 36.3663 84.9978 30.5438C86.3341 28.9212 86.3341 26.535 84.9978 24.8169Z" fill="#E53E44"/>
            <Line delay={delay + .3} animationProp={animationProp} />
            <Path d="M53.0804 12.9415L35.1062 30.9157" delay={delay + .3} animationProp={animationProp} />
            <Path d="M35.2296 26.6019L52.1254 43.4977" delay={delay + .3} animationProp={animationProp} />
        </motion.svg>
    )
}