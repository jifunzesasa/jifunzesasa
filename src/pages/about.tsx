import React from 'react';
import Layout from '@theme/Layout';

export default function OurStory() {
    return (
        <Layout title="About" description="Our Story">
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '50vh',
                    fontSize: '20px',
                }}>
                <h1>
                    Our Story
                </h1>
            </div>
        </Layout>
    );
}