import React from 'react';

import { Carousel } from "antd";
import womanimage from "../../../assets/woman.svg";

const Photo = ({photo}) => {
    require("./Photo.css");

    return (
        <div className='carousel-wrapper'>
            <Carousel>
            <div>
                <img className="carousel-img"src={womanimage}></img>
            </div>
            <div>
                <img className="carousel-img"src={womanimage}></img>
            </div>
            <div>
                <img className="carousel-img"src={womanimage}></img>
            </div>
            </Carousel>
        </div>
        );
    }
export default Photo;

