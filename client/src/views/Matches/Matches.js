import * as React from 'react'
import SummaryCard from '../../components/Card/Summary/Summary';
import Navbar from '../../components/NavBar/Navbar';

const Homepage = () => {
    require('./Matches.css');
    const dummydata = {
        name : "naan",
        age : "20",
        email : "naansheri@xyz.com"
    }
    return (
        <div style={{display: 'flex'}}>
            <Navbar/>
            <div style={{ marginLeft: "15vw"}}>
                <SummaryCard user={dummydata}/>
            </div>
        </div>
    )
}

export default Homepage;