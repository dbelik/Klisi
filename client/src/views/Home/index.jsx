import React, { Fragment } from 'react';

import theme from '../../constants/theme';

import PageTitle from '../../components/Misc/PageTitle';
import Navbar from "../../components/Misc/Navigation/Navbar";
import Video from "../../components/Videos/Video/index";
import HomeEye from '../../components/Home/HomeEye';

export default function Home() {
    return (
        <Fragment>
            <PageTitle>Welcome</PageTitle>

            <Navbar />

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

            <section className="py-5 klisi-container text-center">
                <h2>
                    Let's start
                </h2>
            </section>
        </Fragment>
    )
}