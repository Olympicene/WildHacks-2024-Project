import * as React from 'react'
import Layout from '../../components/Layout/Layout';
import Navbar from '../../components/NavBar/Navbar';
import MainInfo2 from '../../components/Card/Summary/Summary';

const Homepage = () => {
    require('./Matches.css');
    return (
        <div>
            <p>This is matches page</p>
            <MainInfo2/>
        </div>
    )
}

export default Homepage;