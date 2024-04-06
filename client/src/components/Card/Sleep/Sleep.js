import React from 'react';

import { Card, Slider} from "antd";

const Sleep = (sleep) => {
    require('./Sleep.css');

    const marks = {
        0: '22',
        1: '23',
        2: '24',
        3: '0',
        4: '1',
        5: '2',
        6: '3',
        7: '4',
        8: '5',
        9: '6',
        10: '7',
      };

    const cardBodyStyles = {
        padding: '5px', 
        margin: '0', 
      };

    return (
        <div>
            <Card bordered={false} hoverable={true} style={{ width: 450 }} styles={{ body: cardBodyStyles }} className='sleep-text-card'>
            <p className='sleep-title'>sleep schedule</p>
            <Slider
                range marks = {marks}
                min={0}
                max={12}
                defaultValue={[2,9]}
                disabled={true}
            />
            </Card>
        </div>
        );
    }
export default Sleep;
