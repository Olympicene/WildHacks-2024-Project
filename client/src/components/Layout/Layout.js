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
        hobbies : "reading, crocheting",
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

    return (
        <div className='layout-container'>
            <div className='semi-container'>
                <Info title="hobbies" details={dummy.hobbies}/>
                <Guest value={dummy.guests}/>
                <Info title="substances" details={dummy.substances}/>
            </div>

            <div lassName='semi-container'>
                <Photo/>
                <MainInfo details={dummy.user}/>
                <Likes details={dummy.allLikes}/>
            </div>

            <div lassName='semi-container'>
                <Info title="traits" details={dummy.traits}/>
                <Info title="sleep schedule" details={dummy.sleep}/>
                <Info title="dealbreakers" details={dummy.dealbreakers}/>
            </div>

        </div>
        );
    }
export default Layout;