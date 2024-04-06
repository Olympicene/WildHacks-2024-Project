import React from 'react';

import { Card } from "antd";

const Info = ({details}) => {
    require("./Info.css");

    const cardBodyStyles = {
        padding: '5px', 
        margin: '0', 
      };

    return (
        <div>
            <Card bordered={false} hoverable={true} style={{ width: 300 }} styles={{ body: cardBodyStyles }} className='info-text-card'>
            <p className='info-title'>{details.title}</p>
            <p className='info-text'>{details.text}</p>
            </Card>
);
export default Info;

