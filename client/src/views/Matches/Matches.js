import * as React from 'react'
import SummaryCard from '../../components/Card/Summary/Summary';

const Homepage = () => {
    require('./Matches.css');
    const dummydata = {
        name : "naan",
        age : "20",
        email : "naansheri@xyz.com"
    }
    return (
        <div>
            <div className="match-container">
                <SummaryCard user={dummydata}/>
                <SummaryCard user={dummydata}/>
                <SummaryCard user={dummydata}/>
                <SummaryCard user={dummydata}/>
                <SummaryCard user={dummydata}/>
                <SummaryCard user={dummydata}/>
                <SummaryCard user={dummydata}/>
                <SummaryCard user={dummydata}/>
            </div>
        </div>
    )
}

export default Homepage;