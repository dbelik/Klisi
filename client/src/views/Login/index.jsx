import React from 'react';
import axios from 'axios';

import sizes from '../../config/sizes';
import api from '../../config/api';

import UrlJoin from '../../utilities/UrlJoin';
import ErrorCatcher from '../../utilities/ErrorCatcher';

import DefaultLayout from "../../components/Layouts/Default";
import LinkButton from "../../components/Buttons/Link";

async function authorize(url) {
    window.open(url, "_self");
}

function authorizeVia(provider) {
    const url = new UrlJoin(api.base, ["login", provider]).join();
    new ErrorCatcher().call(() => authorize(url), (error) => console.error(error));
}

export default function Login() {
    return (
        <DefaultLayout title="Log in">
            <div className="klisi-container d-flex flex-column align-items-center justify-content-center h-100vh" style={{ marginTop: -sizes.navbar }}>
                <h2>You can "Log in" using:</h2>

                <ul className="list-unstyled m-0">
                    <li><h3><LinkButton onClick={() => authorizeVia("google")}>Gmail</LinkButton></h3></li>
                </ul>
            </div>
        </DefaultLayout>
    );
}