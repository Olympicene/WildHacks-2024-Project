import React from 'react';
import { Card } from 'antd';
import './Likes.css';

const Likes = ({details}) => {
    const cardBodyStyles = {
        padding: '1px',
        margin: '0',
    };

  return (
    <Card className="info-title" size="small" style={{ width: 300 }} bordered={false} styles = {{body:cardBodyStyles}}hoverable>
      <div className="likes-container">
        <div className="like-container">
          <span className="like-info-title">likes</span>
          <span className="like-info-text">{details.like1}</span>
          <span className="like-info-text">{details.like2}</span>
          <span className="like-info-text">{details.like3}</span>
        </div>
        <div className="vl"></div>
        <div className="dislike-container">
          <span className="like-info-title">dislikes</span>
          <span className="like-info-text">{details.dislike1}</span>
          <span className="like-info-text">{details.dislike2}</span>
          <span className="like-info-text">{details.dislike3}</span>
        </div>
      </div>
    </Card>
  );
};

export default Likes;