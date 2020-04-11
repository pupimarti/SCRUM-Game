import React from 'react'
import './css.css';
import img from './scrumImage.png'
import { Element } from 'react-scroll';

export default function WhatIsIt() {
    return (
        <Element name="WhatItIs" className="content-section" 
        data-aos="fade-left" 
        data-aos-offset="300"
        data-aos-duration="1000" >
            <div className="content-width">
                <div className= "title">
                    <h2>¿Qué es Scrum Game?</h2>
                </div> 
                    <div className= "displayFlex">
                        <div className = "displayColumn" >
                            <h3>Aprende de forma inteligente</h3>
                            <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                                dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                                
                            </p>
                            <h3>Súper intuitivo y eficaz</h3>
                            <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                                dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.. 
                            </p>
                        </div>
                        <div className="displayColumn">
                            <img className="imgScrum" src={img} alt="Scrum"/>
                        </div>
                    </div>
            </div>
        </Element>
    )
}
