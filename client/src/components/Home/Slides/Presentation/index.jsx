import React from 'react';

import theme from '../../../../constants/theme';

import Video from "../../../Videos/Video";

export default function Presentation() {
    return (
        <section
            style={{ height: "100vh", background: `${theme.primary}` }}
            className="d-flex flex-column justify-content-between align-items-center"
        >
            <div
                className="w-100"
                style={{ 
                    height: "120px", background: "url(/assets/imgs/home/wave-1.svg) top left repeat-x",
                    filter: "drop-shadow(rgba(0, 0, 0, 0.3) 0px 8px 4px)"
                }}
            />

            <div className="klisi-container d-flex align-items-center justify-content-center flex-column">
                <h2>We will help you</h2>
                <Video src="" />
            </div>

            <div
                className="w-100"
                style={{ 
                    height: "120px", background: "url(/assets/imgs/home/wave-2.svg) bottom left repeat-x",
                    filter: "drop-shadow(rgba(0, 0, 0, 0.3) 0px -8px 4px)"
                }}
            />
        </section>
    )
}