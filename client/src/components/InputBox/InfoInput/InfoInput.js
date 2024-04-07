import React, {useState} from 'react';
import { Card,Input } from "antd";

const InfoInput = ({onChange,title}) => {
    require("./InfoInput.css");

    const [infoInput, setInfoInput] = useState('');

    const setInput = (e) => {
        onChange(infoInput)
        setInfoInput(e.target.value)
    }

    const cardBodyStyles = {
        padding: '5px', 
        margin: '0', 
      };

    return (
        <div>
            <Card bordered={false} hoverable={true} style={{ width: 300 }} styles={{ body: cardBodyStyles }} className='info-text-card'>
            <p className='info-title'>{title}</p>
                <Input placeholder="" value = {infoInput} onChange={setInput}/> 
            </Card>
        </div>
        );
    }
export default InfoInput;

