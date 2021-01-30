import React from 'react';

import sizes from '../../../config/sizes';

import DefaultLayout from '../../../components/Layouts/Default';

export default function NotFound() {
    return (
        <DefaultLayout title="Sorry, nothing's here">
            <div className="h-100vh d-flex align-items-center justify-content-center klisi-container" style={{ marginTop: -sizes.navbar }}>
                <h2>Sorry, nothing's here</h2>
            </div>
        </DefaultLayout>
    )
}