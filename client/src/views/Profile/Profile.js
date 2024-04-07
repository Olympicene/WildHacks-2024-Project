import * as React from 'react'
import Layout from '../../components/Layout/Layout';
import Navbar from '../../components/NavBar/Navbar';
import InputLayout from '../../components/InputLayout/InputLayout';

const Profile = () => {
    require('./Profile.css');
    return (
        <div style={{display: 'flex'}}>
            <InputLayout/>
        </div>
    )
}

export default Profile;