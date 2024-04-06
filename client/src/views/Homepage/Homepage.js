import * as React from 'react'
import Info from '../../components/Card/Info/Info';
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
            <Info/>
        </div>
    )
}

export default Homepage;