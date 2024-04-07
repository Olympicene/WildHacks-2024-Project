import React, { useState } from 'react';
import GuestInput from '../InputBox/GuestInput/guestInput';
import Hobbies from '../InputBox/HobbiesInput/HobbiesInput';
import InfoInput from '../InputBox/InfoInput/InfoInput';
import LikesInput from '../InputBox/LikesInput/likesInput';
import MainInfoInput from '../InputBox/MainInfoInput/maininfoInput';
import PhotoInput from '../InputBox/PhotoInput/PhotoInput';

const InputLayout = () => {
    
    require("./InputLayout.css");
    const [hobbies, setHobbies] = useState('');
    const [substances, setSubstances] = useState('');
    const [freqGuests, setFreqGuests] = useState('');
    const [numGuests, setNumGuests] = useState('');
    const [traits, setTraits] = useState('');
    const [dealbreakers, setDealbreakers] = useState('');
    const [sleep, setSleep] = useState('');
    const [likes, setLikes] = useState('');
    const [dislikes, setDislikes] = useState('');
    const [budget, setBudget] = useState('');
    const [photo, setPhoto] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [uni, setUni] = useState('');
    const [roomates, setRoomates] = useState('');

        const [formData, setFormData] = useState({
            thehobbies: '',
            theguest: '',
            thesubstances: '',
            thephoto: '',
            themain: '',
            thelikes: '',
            thetraits: '',
            thesleepschedule: '',
            thedealbreakers: ''
        });
    
        const handleInputChange = (title, value) => {
            setFormData(prevState => ({
                ...prevState,
                [title.toLowerCase()]: value
            }));
        };
    
        const handleSubmit = () => {
            console.log(hobbies);
            console.log(substances);
            console.log(traits);
            console.log(dealbreakers);
            console.log(sleep);
            console.log(likes);
            console.log(budget);
        };
    

    return (
        <div className='input-layout-container' style={{ marginLeft: "15vw"}}>
            <div className='input-semi-container'>
                <InfoInput title="hobbies" onChange={hobbies => setHobbies(hobbies)}/>
                <InfoInput title="frequency of guests" onChange={freqGuests => setFreqGuests(freqGuests)}/>
                <InfoInput title="how many guests" onChange={numGuests => setNumGuests(numGuests)}/>
                <InfoInput title="substances"onChange={substances => setSubstances(substances)}/>
            </div>

            <div className='input-semi-container' style={{alignItems:"center"}} >
                {/* <PhotoInput onChange={handlePhoto}/> */}
                <InfoInput title="name" onChange={name => setName(name)}/>
                <InfoInput title="age" onChange={age => setAge(age)}/>
                <InfoInput title="university" onChange={uni => setUni(uni)}/>
                <InfoInput title="roomates" onChange={roomates => setRoomates(roomates)}/>
                <InfoInput title="likes" onChange={likes => setLikes(likes)}/>
                <InfoInput title="dislikes" onChange={dislikes => setDislikes(dislikes)}/>
            </div>

            <div className='input-semi-container'>
                <InfoInput title="traits" onChange={traits => setTraits(traits)}/>
                <InfoInput title="sleep schedule" onChange={sleep => setSleep(sleep)}/>
                <InfoInput title="dealbreakers" onChange={dealbreakers => setDealbreakers(dealbreakers)}/>
                <button className='buttonSave' onClick={handleSubmit}>Submit Profile</button>
            </div>
        </div>
        );
    }
export default InputLayout;