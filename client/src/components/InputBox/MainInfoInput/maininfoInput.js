import React from 'react';
import { Card ,Input} from 'antd';

const MainInfoInput = ({details}) => {
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
       <Input placeholder="" value = {details?.name}/> 
       <p className="main-info-title"> age</p>
       <Input placeholder="" value = {details?.age}/>
       <p className="main-info-title"> university</p>
       <Input placeholder="" value = {details?.university}/>
       <p className="main-info-title"> roomates</p>
       <Input placeholder="" value = {details?.roommates}/>
    </Card>
  );
};

export default MainInfoInput;
