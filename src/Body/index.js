import React from 'react'
import './css.css';
import img from './scrumImage.png'

export default function Body() {
    return (
        <section className="relleno content-width">
            <div class = "title">
                <h2>¿Qué es Scrum Game?</h2>
            </div> 
                <div class = "displayFlex">
                    <div class = "displayColumn" >
                        <h3>Aprende de forma inteligente</h3>
                        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                            dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
                            
                        </p>
                        <h3>Súper intuitivo y eficaz</h3>
                        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                            dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.. 
                        </p>
                    </div>
                    <div class = "displayColumn">
                        <img class = "imgScrum" src={img} alt="Scrum"/>
                    </div>
                </div>
        </section>
    )
}
