import React from 'react';

import sizes from '../../config/sizes';
import api from '../../config/api';

import UrlJoin from '../../utilities/UrlJoin';

import DefaultLayout from "../../components/Layouts/Default";
import LinkButton from "../../components/Buttons/Link";

function authorizeVia(provider) {
    alert(new UrlJoin(api.base, ["login", provider]).join());
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