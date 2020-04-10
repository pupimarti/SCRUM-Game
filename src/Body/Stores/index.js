import React from 'react';
import './css.css';
import AppStore from './AppStore';
import PlayStore from './PlayStore';
import img from './img.png';

export default function Stores() {
    return (
        <section className="content-width content-section"
            data-aos="fade-up" 
            data-aos-delay="500"
            data-aos-duration="1000" 
            >
            <div className="content-description">
                <h2>Tú decides cómo y cuándo aprender</h2>
                <p>¡Puedes jugar en cualquier lugar y cualquier momento! Descarga nuestra aplicación disponible tanto para Android como para IOS.</p>
                <AppStore />
                <PlayStore />
            </div>
            <img src={img} alt="IOS y ANDROID" className="phones"/>
        </section>
    )
}
