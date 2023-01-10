import React from 'react';
import Header from '../components/Header';
import Saveform from '../components/SaveForm';

import '../styles/App.css'
const Home = () => {
    return (
        <div>

            <Header />
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <Saveform />

        </div>

    );
};
export default Home;

