import React from 'react'
import './css.css';
import img from './scrum3.png'
import { scroller } from 'react-scroll';

const scrollType = {
    duration: 1000,
    smooth: true, // linear “easeInQuint” “easeOutCubic” 
    offset: -50,
 };

const onClickWhatItIs = () => {
    scroller.scrollTo("WhatItIs", scrollType);
}

export default function Header() {
    return (
        <div className="header">
            <div className="background-svg">
                <div className="content-width content-header">
                    <img 
                    className="img-scrum" 
                    src={img} 
                    alt="Imagen SCRUM" 
                    data-aos="fade-right" 
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    />
                    <div className="content-button-text"
                    data-aos="fade-up" 
                    data-aos-delay="1500"
                    data-aos-duration="1000" 
                    >
                        <h2 className="sentence" >¡El juego ideal para aprender SCRUM!</h2>
                        <div className="content-buttons-header">
                            <button className="button white button-header" onClick={onClickWhatItIs}>¿QUE ES SCRUM GAME?</button>
                            <button className="button transparent button-header-login">COMENZAR A JUGAR</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
