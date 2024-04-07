import React from 'react';
import Photo from '../Card/Photo/Photo';
import MainInfo from '../Card/MainInfo/MainInfo';
import Info from '../Card/Info/Info';
import Guest from '../Card/Guest/Guest';
import Likes from '../Card/Likes/Likes';

const Layout = () => {
    const data = {
        "first_name": "Aiden",
        "email": "aiden@example.com",
        "password": "aiden@123",
        "age": 22,
        "university": "Loyola University Chicago",
        "likes": ["volleyball", "coffee", "hiking"],
        "dislikes": ["crowded places", "loud noise", "early mornings"],
        "traits": "Friendly and outdoorsy",
        "coordinates": {
            "longitude": -87.6616,
            "latitude": 42.0012
        },
        "sleepTime": 10,
        "wakeUpTime": 6,
        "dealbreakers": "Dishonesty and arrogance",
        "hobbies": ["surfing", "reading", "exploring new neighborhoods"],
        "numberOfGuests": "1",
        "substances": "Non-smoker",
        "budget": 1400
    }
    
    require("./Layout.css");
    const hobbiesList = Object.values(data["hobbies"]); 
    const user = {
        name : data["first_name"],
        age : data["age"],
        university : data["university"],
        roomates :  Math.floor(Math.random() * 4)
    }

    const likes = {
        like1 : data["likes"][0],
        like2 : data["likes"][1],
        like3 : data["likes"][2],
        dislike1 : data["dislikes"][0],
        dislike2 : data["dislikes"][1],
        dislike3 : data["dislikes"][2]
    }

    const sleep = data["sleepTime"] + " PM " + data["wakeUpTime"] + " AM "

    return (
        <div className='layout-container'>
            <div>
            <a><img src={require('./ex.png')} class="pic" onClick="moveright()" /></a>
            </div>

            <div className='semi-container'>
                <Info title="hobbies" details={hobbiesList.join(", ")}/>
                <Guest value={data["numberOfGuests"]}/>
                <Info title="substances" details={data["substances"]}/>
            </div>

            <div className='semi-container' style={{alignItems:"center"}}>
                <Photo/>
                <MainInfo details={user}/>
                <Likes details={likes}/>
            </div>

            <div className='semi-container'>
                <Info title="traits" details={data["traits"]}/>
                <Info title="sleep schedule" details={sleep}/>
                <Info title="dealbreakers" details={data["dealbreakers"]}/>
                <Info title="budget" details={data["budget"]}/>
            </div>

            <div>
            <a ><img src={require('./heart.png')} class="pics" onClick="moveLeft()" /></a>
            </div>

        </div>
        );
    }
export default Layout;