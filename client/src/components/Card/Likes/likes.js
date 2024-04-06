import React from 'react';
import { Card } from 'antd';
import './Likes.css';

const Likes = ({details}) => {
    const cardBodyStyles = {
        padding: '5px',
        margin: '0',
    };

  return (
    <Card className="info-title" size="small" style={{ width: 300 }} bordered={false} styles = {{body:cardBodyStyles}}hoverable>
      <div className="likes-container">
        <div className="like-container">
          <span className="like-text">likes</span>
          <span className="like">{details.like1}</span>
          <span className="like">{details.like2}</span>
          <span className="like">{details.like3}</span>
        </div>
        <div className="vl"></div>
        <div className="dislike-container">
          <span className="dislike-text">dislikes</span>
          <span className="like">{details.dislike1}</span>
          <span className="like">{details.dislike2}</span>
          <span className="like">{details.dislike3}</span>
        </div>
      </div>
    </Card>
  );
};

export default Likes;