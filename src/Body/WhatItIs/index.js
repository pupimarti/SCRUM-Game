import React from 'react'
import './css.css';
import img from './scrumImage.png'

export default function WhatIsIt() {
    return (
        <section className="content-section">
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
        </section>
    )
}
