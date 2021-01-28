import React, { Fragment } from 'react';

import PageTitle from '../../Misc/PageTitle';
import Navbar from "../../Misc/Navigation/Navbar";

export default function DefaultLayout({ title, children }) {
    return (
        <Fragment>
            <PageTitle>{title}</PageTitle>

            <Navbar />

            <main>
                {children}
            </main>
        </Fragment>
    )
}