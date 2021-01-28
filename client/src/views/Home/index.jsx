import React from 'react';

import WelcomeSlide from "../../components/Home/Slides/Welcome";
import PresentationSlide from "../../components/Home/Slides/Presentation";
import FooterSlide from "../../components/Home/Slides/Footer";

import DefaultLayout from "../../components/Layouts/Default";

export default function Home() {
    return (
        <DefaultLayout title="Welcome">
            <WelcomeSlide />
            <PresentationSlide />
            <FooterSlide />
        </DefaultLayout>
    )
}