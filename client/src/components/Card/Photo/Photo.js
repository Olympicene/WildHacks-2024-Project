import React from 'react';

import { Carousel } from "antd";
import contactImage from "../../../assets/contact.jpg";

const Photo = ({photo}) => {
    require("./Photo.css");

    return (
        <div className='carousel-wrapper'>
            <Carousel>
            <div>
                <img className="carousel-img"src={contactImage}></img>
            </div>
            <div>
                <img className="carousel-img"src={contactImage}></img>
            </div>
            <div>
                <img className="carousel-img"src={contactImage}></img>
            </div>
            </Carousel>
        </div>
        );
    }
export default Photo;

