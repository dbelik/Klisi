import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function PageTitle({ children }) {
    return (
        <HelmetProvider>
            <Helmet>
                <title>{ children }</title>
            </Helmet>
        </HelmetProvider>
    );
}