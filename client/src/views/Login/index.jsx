import React from 'react';

import sizes from '../../constants/sizes';

import DefaultLayout from "../../components/Layouts/Default";

export default function Login() {
    return (
        <DefaultLayout title="Log in">
            <div className="klisi-container d-flex flex-column align-items-center justify-content-center h-100vh" style={{ marginTop: -sizes.navbar }}>
                <h2>You can "Log in" using:</h2>

                <ul className="list-unstyled m-0">
                    <li><h3><a href="#">Gmail</a></h3></li>
                </ul>
            </div>
        </DefaultLayout>
    );
}