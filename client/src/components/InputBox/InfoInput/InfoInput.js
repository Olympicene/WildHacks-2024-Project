import React from 'react';

import { Card,Input } from "antd";

const InfoInput = ({title,details}) => {
    require("./InfoInput.css");

    const cardBodyStyles = {
        padding: '5px', 
        margin: '0', 
      };

    return (
        <div>
            <Card bordered={false} hoverable={true} style={{ width: 300 }} styles={{ body: cardBodyStyles }} className='info-text-card'>
            <p className='info-title'>{title}</p>
                <Input placeholder="" value = {details}/> 
            </Card>
        </div>
        );
    }
export default InfoInput;

