import React from 'react';
import Photo from '../Card/Photo/Photo';
import MainInfo from '../Card/MainInfo/MainInfo';
import Info from '../Card/Info/Info';
import Guest from '../Card/Guest/Guest';
import Likes from '../Card/Likes/Likes';

const Layout = () => {
    const dummy = {
        user : {
            name : "nandana",
            age : "20",
            university : "uic",
            roomates : "2",
        },
        hobbies : {
            hobby1: "reading", 
            hobby2: "crocheting", 
            hobby3: "lifting"
        },
        substances : "no smoking",
        guests : {
            freq : 3,
            num : 4
        },
        traits : "extroverted",
        dealbreakers : "no pets",
        sleep : "11PM to 7AM",
        allLikes : {
            like1 : "takeout",
            like2 : "clean room",
            like3 : "music",
            dislike1 : "dishes",
            dislike2 : "seafood",
            dislike3 : "soda"
        }
    }
    require("./Layout.css");
    const hobbiesList = Object.values(dummy.hobbies); 

    return (
        <div className='layout-container' style={{ marginLeft: "15vw"}}>
            <div className='semi-container'>
                <Info title="hobbies" details={hobbiesList.join(", ")}/>
                <Guest value={dummy.guests}/>
                <Info title="substances" details={dummy.substances}/>
            </div>

            <div className='semi-container' style={{alignItems:"center"}}>
                <Photo/>
                <MainInfo details={dummy.user}/>
                <Likes details={dummy.allLikes}/>
            </div>

            <div className='semi-container'>
                <Info title="traits" details={dummy.traits}/>
                <Info title="sleep schedule" details={dummy.sleep}/>
                <Info title="dealbreakers" details={dummy.dealbreakers}/>
            </div>

        </div>
        );
    }
export default Layout;