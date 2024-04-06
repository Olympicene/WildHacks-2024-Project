import React from 'react';
import MainInfo from '../../components/Card/MainInfo/maininfo';

const Homepage = () => {
    const userDetails = {
        name: "Sarvani",
        age: 21,
        university: "UCSD",
        roommates: 2
    };

    return (
        <div>
            <h1>This is Home Page</h1>
            <MainInfo details={userDetails} />
        </div>
    );
};

export default Homepage;