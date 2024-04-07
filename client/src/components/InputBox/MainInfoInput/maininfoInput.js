import React, { useState } from 'react';
import { Card ,Input} from 'antd';

const MainInfoInput = ({onChange, name, age, uni, roomates}) => {
  require('./maininfoInput.css');
  return (
    <Card
      className='main-info-title'
      size="small"
      bordered={false}
      style={{
        width: 300,
        backgroundColor:"#e9e9e9"

      }}
      hoverable 
    >
      <p className="main-info-title"> name</p>
       <Input placeholder="" value = {name} onChange={onChange}/> 
       <p className="main-info-title"> age</p>
       <Input placeholder="" value = {age} onChange={onChange}/>
       <p className="main-info-title"> university</p>
       <Input placeholder="" value = {uni} onChange={onChange}/>
       <p className="main-info-title"> roomates</p>
       <Input placeholder="" value = {roomates} onChange={onChange}/>
    </Card>
  );
};

export default MainInfoInput;
