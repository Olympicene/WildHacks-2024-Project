import React from 'react';
import Photo from '../Card/Photo/Photo';
import MainInfo from '../Card/MainInfo/MainInfo';
import Info from '../Card/Info/Info';
import Guest from '../Card/Guest/Guest';

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
        }
    }
    require("./Layout.css");

    return (
        <div className='layout-container'>
            <div>
                <Info title="hobbies" details={dummy.hobbies}/>
                <Guest value={dummy.guests}/>
                <Info title="substances" details={dummy.substances}/>
            </div>

            <div>
                <Photo/>
                <MainInfo details={dummy.user}/>
            </div>

            <div>
                
            </div>

        </div>
        );
    }
export default Layout;