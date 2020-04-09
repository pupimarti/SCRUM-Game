import React from 'react'
import './css.css';
import img from './scrum3.png'

export default function Header() {
    return (
        <div className="header">
            <div className="background-svg">
                <div className="content-width content-header">
                    <img className="img-scrum" src={img} alt="Imagen SCRUM"/>
                    <div className="content-button-text">
                        <h2 className="sentence">¡Aprende SCRUM jugando!</h2>
                        <button className="button button-header">¿QUE ES SCRUM?</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
