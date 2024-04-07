import React, { useState } from 'react';
import { Card, Radio } from 'antd';

const GuestFreq = () => {

  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    
    <Radio.Group disabled onChange={onChange} value={value} className='info-text'>
      <Radio value={1} className='info-text'>Once a week </Radio>
      <Radio value={2} className='info-text'>Twice a week</Radio>
      <Radio value={3} className='info-text'>Thrice a week</Radio>
      <Radio value={4} className='info-text'>More than three times a week</Radio>
    </Radio.Group>
  );
};

const GuestNumber = () => {

    const [value, setValue] = useState(1);
    const onChange = (e) => {
      console.log('radio checked', e.target.value);
      setValue(e.target.value);
    };
    return (
      <Radio.Group disabled onChange={onChange} value={value} className='info-text'>
        <Radio value={1} className='info-text'>1</Radio>
        <Radio value={2} className='info-text'>2</Radio>
        <Radio value={3} className='info-text'>3</Radio>
        <Radio value={4} className='info-text'>4+</Radio>
      </Radio.Group>
    );
  };

const App = () => {
    require('./guest.css');
  
    return (
        <Card className="info-title"
        size="small"
        style={{
          width: 300,
        }}
        hoverable
      >

        <p>Guests</p>
        <p className="info-text-question">How often do you have guests?</p>
        <GuestFreq/> 
        <p className="info-text-question">How many guests do you have?</p>
        <GuestNumber/> 
      </Card>
    );
  };

export default App;

