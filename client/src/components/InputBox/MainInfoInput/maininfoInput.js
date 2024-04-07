import React from 'react';
import { Card ,Input} from 'antd';

const MainInfoInput = ({details}) => {
  require('./maininfoInput.css');

  return (
    <Card
      className='info-title'
      size="small"
      bordered={false}
      style={{
        width: 300
      }}
      hoverable 
    >
      <p className="info-title"> name</p>
       <Input placeholder="" value = {details?.name}/> 
       <p className="info-title"> age</p>
       <Input placeholder="" value = {details?.age}/>
       <p className="info-title"> university</p>
       <Input placeholder="" value = {details?.university}/>
       <p className="info-title"> roomates</p>
       <Input placeholder="" value = {details?.roommates}/>
    </Card>
  );
};

export default MainInfoInput;
