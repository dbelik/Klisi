import React from 'react';

import HomeEye from '../../HomeEye';

export default function Welcome() {
    return (
        <section 
            className="klisi-container"
            style={{ height: "100vh" }}
        >
            <div className="d-flex flex-column flex-lg-row flex-wrap align-items-center justify-content-center w-100 h-100">
                <div className="col-lg-6 pl-3 pr-3 pr-lg-5 text-center text-lg-left">
                    <h1>Start conversation with your friends</h1>
                    <p>Klisi will help to video chat with friends/collegues/grandma, just say the word.</p>
                </div>
                <div className="d-flex align-items-center justify-content-center col-lg-6 pl-3 pl-lg-5 pr-3 order-first order-lg-last mb-5 mb-lg-0">
                    <HomeEye />
                </div>
            </div>
        </section>
    )
}