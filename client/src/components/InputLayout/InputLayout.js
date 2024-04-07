import React, { useState } from 'react';
import GuestInput from '../InputBox/GuestInput/guestInput';
import Hobbies from '../InputBox/HobbiesInput/HobbiesInput';
import InfoInput from '../InputBox/InfoInput/InfoInput';
import LikesInput from '../InputBox/LikesInput/likesInput';
import MainInfoInput from '../InputBox/MainInfoInput/maininfoInput';
import PhotoInput from '../InputBox/PhotoInput/PhotoInput';

const InputLayout = () => {
    require("./InputLayout.css");

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
            console.log("Profile submitted:", formData);
        };
    

    return (
        <div className='input-layout-container' style={{ marginLeft: "15vw"}}>
            <div className='input-semi-container'>
                <InfoInput title="hobbies" details={formData.thehobbies} onInputChange={handleInputChange}/>
                <GuestInput onInputChange={handleInputChange}/>
                <InfoInput title="substances" details={formData.thesubstances} onInputChange={handleInputChange}/>
            </div>

            <div className='input-semi-container' style={{alignItems:"center"}} >
                <PhotoInput onInputChange={handleInputChange}/>
                <MainInfoInput onInputChange={handleInputChange}/>
                <LikesInput onInputChange={handleInputChange}/>
            </div>

            <div className='input-semi-container'>
                <InfoInput title="traits" details={formData.thetraits} onInputChange={handleInputChange}/>
                <InfoInput title="sleep schedule" details={formData.thesleepschedule} onInputChange={handleInputChange}/>
                <InfoInput title="dealbreakers" details={formData.thedealbreakers} onInputChange={handleInputChange}/>
                <button className='buttonSave' onClick={handleSubmit}>Submit Profile</button>
            </div>
        </div>
        );
    }
export default InputLayout;