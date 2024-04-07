import React from 'react';
import { Card , Input} from 'antd';
import './likesInput.css';

const LikesInput = ({onChange, details}) => {
    const cardBodyStyles = {
        padding: '5px',
        margin: '0',
    };

  return (
    <Card className="input-info-title" size="small" style={{ width: 300 }} styles = {{body:cardBodyStyles}}hoverable>
      <div className="input-likes-container">
        <div className="input-like-container">
        <span className="input-info-title">Likes</span>
        <Input className="input-info-text" placeholder="" value = {details?.like1} onChange={onChange}/>
        <Input className="input-info-text" placeholder="" value = {details?.like2} onChange={onChange}/>
        <Input className="input-info-text" placeholder="" value = {details?.like3} onChange={onChange}/>
        </div>
        <div className="vl"></div>
        <div className="input-dislike-container">
          <span className="input-info-title">Dislikes</span>
          <Input className="input-info-text" placeholder="" value = {details?.dislike1} onChange={onChange}/>
          <Input className="input-info-text" placeholder="" value = {details?.dislike2} onChange={onChange}/>
          <Input className="input-info-text" placeholder="" value = {details?.dislike3} onChange={onChange}/>
        </div>
      </div>
    </Card>
  );
};

export default LikesInput;