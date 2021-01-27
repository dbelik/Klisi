import React, { Fragment } from 'react';

import theme from '../../constants/theme';

import PageTitle from '../../components/Misc/PageTitle';
import Navbar from "../../components/Misc/Navigation/Navbar";
import Video from "../../components/Videos/Video/index";

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
                    <svg style={{ maxWidth: "100%" }} width="440" height="257" viewBox="0 0 440 257" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M438.37 123.129C434.905 118.087 351.634 0 219.999 0C107.045 0 6.39363 117.409 2.15857 122.414C-0.719523 125.824 -0.719523 130.829 2.15857 134.257C6.39363 139.262 107.045 256.671 219.999 256.671C332.953 256.671 433.603 139.262 437.838 134.257C440.497 131.104 440.735 126.539 438.37 123.129ZM219.999 248.34C129.449 248.34 33.3514 151.986 11.48 128.336C33.3153 104.667 129.321 8.33 219.999 8.33C325.949 8.33 410.73 104.557 428.99 127.841C407.906 150.739 311.318 248.34 219.999 248.34Z" fill="#E53E44"/>
                        <path d="M219.999 55.0009C179.555 55.0009 146.665 87.8914 146.665 128.335C146.665 168.779 179.555 201.669 219.999 201.669C260.443 201.669 293.333 168.779 293.333 128.335C293.333 87.8914 260.443 55.0009 219.999 55.0009Z" fill="#E53E44"/>
                    </svg>
                </div>
            </section>

            <section
                style={{ height: "100vh", background: `${theme.primary}` }}
                className="d-flex flex-column justify-content-between align-items-center"
            >
                <div
                    className="w-100"
                    style={{ 
                        height: "100px", background: "url(/assets/imgs/home/wave-1.svg) top left repeat-x",
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
                        height: "100px", background: "url(/assets/imgs/home/wave-2.svg) bottom left repeat-x",
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