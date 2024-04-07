import * as React from 'react'
import Layout from '../../components/Layout/Layout';

const Homepage = () => {
    require('./Homepage.css');
    return (
        <div className='home-container'>
            <Layout/>
        </div>
    )
}

export default Homepage;