import React from 'react';
import { Card , Input} from 'antd';
import './HobbiesInput.css';

const Hobbies = ({details}) => {
    const cardBodyStyles = {
        padding: '5px',
        margin: '0',
    };

  return (
    <Card className="info-title" size="small" style={{ width: 200 }} styles = {{body:cardBodyStyles}}hoverable>
      <div className="likes-container">
        <div className="like-container">
        <span className="like-text">Hobbies</span>
        <Input placeholder="" value = {details?.hobby1}/>
        <Input placeholder="" value = {details?.hobby2}/>
        <Input placeholder="" value = {details?.hobby3}/>
        </div>
      </div>
    </Card>
  );
};

export default Hobbies;