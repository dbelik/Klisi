import React, { Fragment } from 'react';

import PageTitle from '../../components/Misc/PageTitle';
import Navbar from "../../components/Misc/Navigation/Navbar";

import WelcomeSlide from "../../components/Home/Slides/Welcome";
import PresentationSlide from "../../components/Home/Slides/Presentation";
import FooterSlide from "../../components/Home/Slides/Footer";

export default function Home() {
    return (
        <Fragment>
            <PageTitle>Welcome</PageTitle>

            <Navbar />

            <WelcomeSlide />
            <PresentationSlide />
            <FooterSlide />
        </Fragment>
    )
}