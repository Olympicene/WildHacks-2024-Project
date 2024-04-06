import * as React from 'react'
import Info from '../../components/Card/Info/Info';
const Homepage = () => {
    require("./Homepage.css");

    let tosend = {
        title : "card title",
        text : "this is the text"
    }
    return (
        <div>
            <Info details={tosend} />
            <h1>This is Home Page</h1>
        </div>
    )
}

export default Homepage;