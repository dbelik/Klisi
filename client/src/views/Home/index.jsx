import React, { Fragment } from 'react';

import PageTitle from '../../components/Common/PageTitle';
import Navbar from "../../components/Common/Navigation/Navbar";

export default function Home() {
    return (
        <Fragment>
            <PageTitle>Welcome</PageTitle>

            <Navbar />
        </Fragment>
    )
}