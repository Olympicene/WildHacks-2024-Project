import React, { useState } from 'react';
import { Card, Radio } from 'antd';

const GuestFreq = ({onChange1}) => {

  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    onChange1(value);
    setValue(e.target.value);
  };
  return (
    
    <Radio.Group onChange={onChange} value={value} className='guest-info-text'>
      <Radio value={1} className='guest-info-text'>Once a week </Radio>
      <Radio value={2} className='guest-info-text'>Twice a week</Radio>
      <Radio value={3} className='guest-info-text'>Thrice a week</Radio>
      <Radio value={4} className='guest-info-text'>More than three times a week</Radio>
    </Radio.Group>
  );
};

const GuestNumber = ({onChange2}) => {

    const [value, setValue] = useState(1);
    const onChange = (e) => {
      console.log('radio checked', e.target.value);
      onChange2(value);
      setValue(e.target.value);
    };
    return (
      <Radio.Group onChange={onChange} value={value} className='guest-info-text'>
        <Radio value={1} className='guest-info-text'>1</Radio>
        <Radio value={2} className='guest-info-text'>2</Radio>
        <Radio value={3} className='guest-info-text'>3</Radio>
        <Radio value={4} className='guest-info-text'>4+</Radio>
      </Radio.Group>
    );
  };

const GuestInput = ({onChange}) => {
    require('./guestInput.css');

    const [freq, setFreq] = useState(0);
    const [num, setNum] = useState(0);
    const [guest, setGuest] = useState({});

    const onChange1 = () => {
      onChange(freq);
      setGuest({
        freq: freq,
        num : num
      })
      console.log(guest)
    };

    const onChange2 = () => {
      onChange(guest);
      setGuest({
        freq: freq,
        num : num
      })
      console.log(guest)
    };
  
    return (
        <Card className="guest-info-title"
        size="small"
        style={{
          width: 300,
        }}
        hoverable
      >
        <p>guests</p>
        <p className="guest-info-text-question">How often do you have guests?</p>
        <GuestFreq onChange = {onChange1} onChange1={freq => setFreq(freq)}/> 
        <p className="guest-info-text-question">How many guests do you have?</p>
        <GuestNumber onChange = {onChange2} onChange2={num => setNum(num)}/> 
      </Card>
    );
  };

export default GuestInput;

