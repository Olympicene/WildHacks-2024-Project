import React from 'react';
import { Card, Radio } from 'antd';

const GuestFreq = ({value}) => {

  return (
    
    <Radio.Group disabled value={value} >
      <Radio value={1} className='radio-text'>Once a week </Radio>
      <Radio value={2} className='radio-text'>Twice a week</Radio>
      <Radio value={3} className='radio-text'>Thrice a week</Radio>
      <Radio value={4} className='radio-text'>More than three times a week</Radio>
    </Radio.Group>
  );
};

const GuestNumber = ({value}) => {

    return (
      <Radio.Group disabled value={value}>
        <Radio value={1} className='radio-text'>1</Radio>
        <Radio value={2} className='radio-text'>2</Radio>
        <Radio value={3} className='radio-text'>3</Radio>
        <Radio value={4} className='radio-text'>4+</Radio>
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
        bordered={false}
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

