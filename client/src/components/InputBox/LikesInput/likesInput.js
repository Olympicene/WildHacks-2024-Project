import React from 'react';
import { Card , Input} from 'antd';
import './likesInput.css';

const LikesInput = ({details}) => {
    const cardBodyStyles = {
        padding: '5px',
        margin: '0',
    };

  return (
    <Card className="info-title" size="small" style={{ width: 200 }} styles = {{body:cardBodyStyles}}hoverable>
      <div className="likes-container">
        <div className="like-container">
        <span className="like-text">Likes</span>
        <Input placeholder="" value = {details?.like1}/>
        <Input placeholder="" value = {details?.like2}/>
        <Input placeholder="" value = {details?.like3}/>
        </div>
        <div className="vl"></div>
        <div className="dislike-container">
          <span className="dislike-text">Dislikes</span>
          <Input placeholder="" value = {details?.dislike1}/>
          <Input placeholder="" value = {details?.dislike2}/>
          <Input placeholder="" value = {details?.dislike3}/>
        </div>
      </div>
    </Card>
  );
};

export default LikesInput;