import React from 'react';

import HomeEye from '../../HomeEye';

export default function Welcome() {
    return (
        <section 
            className="klisi-container d-flex align-items-center justify-content-center"
            style={{ height: "100vh" }}
        >
            <div className="col-6 pl-3 pr-5">
                <h1>Start conversation with your friends</h1>
                <p>Klisi will help to video chat with friends/collegues/grandma, just say the word.</p>
            </div>
            <div className="pl-5 pr-3">
                <HomeEye />
            </div>
        </section>
    )
}