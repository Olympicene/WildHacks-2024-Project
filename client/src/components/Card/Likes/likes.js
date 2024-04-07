import React from 'react';
import { Card } from 'antd';
import './likes.css';

const Likes = ({details}) => {
    const cardBodyStyles = {
        padding: '5px',
        margin: '0',
    };

  return (
    <Card className="info-title" size="small" style={{ width: 200 }} styles = {{body:cardBodyStyles}}hoverable>
      <div className="likes-container">
        <div className="like-container">
          <span className="like-text">Likes</span>
          <span className="like">{details.like1}</span>
          <span className="like">{details.like2}</span>
          <span className="like">{details.like3}</span>
        </div>
        <div className="vl"></div>
        <div className="dislike-container">
          <span className="dislike-text">Dislikes</span>
          <span className="like">{details.dislike1}</span>
          <span className="like">{details.dislike2}</span>
          <span className="like">{details.dislike3}</span>
        </div>
      </div>
    </Card>
  );
};

export default Likes;