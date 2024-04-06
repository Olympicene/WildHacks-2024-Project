import * as React from 'react'
import Layout from '../../components/Layout/Layout';
import Navbar from '../../components/NavBar/Navbar';

const Homepage = () => {
    require('./Homepage.css');
    return (
        <div style={{display: 'flex'}}>
            <Navbar/>
            <Layout/>
        </div>
    )
}

export default Homepage;