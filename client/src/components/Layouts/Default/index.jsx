import React, { Fragment } from 'react';

import sizes from '../../../config/sizes';

import PageTitle from '../../Misc/PageTitle';
import Navbar from "../../Misc/Navigation/Navbar";

export default function DefaultLayout({ title, children }) {
    return (
        <Fragment>
            <PageTitle>{title}</PageTitle>

            <Navbar />

            <main className="h-100 w-100" style={{ paddingTop: sizes.navbar }}>
                {children}
            </main>
        </Fragment>
    )
}