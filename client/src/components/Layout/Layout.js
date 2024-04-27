import Photo from '../Card/Photo/Photo';
import MainInfo from '../Card/MainInfo/MainInfo';
import Info from '../Card/Info/Info';
import Guest from '../Card/Guest/Guest';
import Likes from '../Card/Likes/Likes';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';

const Layout = () => {
    const navigate = useNavigate();

    const [datainfo, setinfoData] = useState(null);
    const [hobbiesList, setHobbiesList] = useState([]);
    const [user, setUser] = useState({});
    const [likes, setLikes] = useState({});
    const [sleep, setSleep] = useState("");


    const getInfo = async () => {
        try {
            const response = await fetch("localhost:3000/v1/random", {
                method: 'GET',
                credentials: 'include',
            });

            if (!response.ok) {
                throw new Error('Auth failed');
            }

            const res = await response.json();
            console.log(res);
            const updatedinfoData = res.data[0];

            setinfoData(updatedinfoData);

        } catch (error) {
            console.error(error);
            // navigate('/login');
        }
    };

    useEffect (() => {
        getInfo();
    }, []);

    useEffect(() => {
        if (datainfo) {
            setHobbiesList(Object.values(datainfo["hobbies"]));
            setUser({
                name: datainfo["first_name"],
                age: datainfo["age"],
                university: datainfo["university"],
                roomates: Math.floor(Math.random() * 4)
            });
            setLikes({
                like1: datainfo["likes"][0],
                like2: datainfo["likes"][1],
                like3: datainfo["likes"][2],
                dislike1: datainfo["dislikes"][0],
                dislike2: datainfo["dislikes"][1],
                dislike3: datainfo["dislikes"][2]
            });
            setSleep(datainfo["sleepTime"] + " PM " + datainfo["wakeUpTime"] + " AM ");
        }
    }, [datainfo]);
    
    require("./Layout.css");

    if(datainfo)
    return (
        <div className='layout-container'>
            <div>
            <a><img src={require('./ex.png')} className="pic" onClick="moveright()" /></a>
            </div>
            <div className='semi-container'>
                <Info title="hobbies" details={hobbiesList.join(", ")}/>
               { <Guest value={datainfo["numberOfGuests"]}/>}
                <Info title="substances" details={datainfo["substances"]}/>
            </div>

            <div className='semi-container' style={{alignItems:"center"}}>
                <Photo/>
                <MainInfo details={user}/>
                <Likes details={likes}/>
            </div>

            <div className='semi-container'>
                <Info title="traits" details={datainfo["traits"]}/>
                <Info title="sleep schedule" details={sleep}/>
                <Info title="dealbreakers" details={datainfo["dealbreakers"] || {}}/>
                <Info title="budget" details={datainfo["budget"] || {}}/>
            </div>

            <div>
            <a ><img src={require('./heart.png')} className="pics" onClick="moveLeft()" /></a>
            </div>

        </div>
        );
    }
export default Layout;