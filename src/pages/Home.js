import React from 'react';
import FormSave from '../components/Form';
import Header from '../components/Header';
import '../styles/App.css'
const Home = () => {
    return (
        <div >
            <body>
                <Header />
                <div className="title">
                    <h1>HRnet</h1>
                </div>
                <FormSave />
            </body>
        </div>
    );
};
export default Home;

