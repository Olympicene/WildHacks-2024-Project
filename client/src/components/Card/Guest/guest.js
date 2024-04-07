import React from 'react';
import { Card, Radio } from 'antd';

const GuestFreq = ({value}) => {

  return (
    
    <Radio.Group disabled value={value} className='info-text'>
      <Radio value={1} className='info-text'>Once a week </Radio>
      <Radio value={2} className='info-text'>Twice a week</Radio>
      <Radio value={3} className='info-text'>Thrice a week</Radio>
      <Radio value={4} className='info-text'>More than three times a week</Radio>
    </Radio.Group>
  );
};

const GuestNumber = ({value}) => {

    return (
      <Radio.Group disabled value={value} className='info-text'>
        <Radio value={1} className='info-text'>1</Radio>
        <Radio value={2} className='info-text'>2</Radio>
        <Radio value={3} className='info-text'>3</Radio>
        <Radio value={4} className='info-text'>4+</Radio>
      </Radio.Group>
    );
  };

const Guest = ({value}) => {
    require('./Guest.css');
  
    const cardBodyStyles = {
      padding: '5px', 
      margin: '0', 
    };
    return (
        <Card className="info-title"
        style={{
          width: 300,
        }}
        styles={{ body: cardBodyStyles }} 
        hoverable
      >

        <p>guests</p>
        <p className="info-text-question">How often do you have guests?</p>
        <GuestFreq value={value.freq}/> 
        <p className="info-text-question">How many guests do you have?</p>
        <GuestNumber value={value.num}/> 
      </Card>
    );
  };

export default Guest;

