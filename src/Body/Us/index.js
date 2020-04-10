import React from 'react';
import Circle from './Circle';
import './css.css';
import img from './1.jpg';

export default function Us() {
    return (
        <div className="content-width content-section content-us">
            <h2>Nuestro equipo</h2>
            <div className="content-members">
                <Circle img={img} name="Juan Agustín Martí" position="Web frontend"/>
                <Circle img={img} name="Juan Agustín Martí" position="Hace el café"/>
                <Circle img={img} name="Juan Agustín Martí" position="Sirve agua"/>
                <Circle img={img} name="Juan Agustín Martí" position="Limpia"/>
                <Circle img={img} name="Juan Agustín Martí" position="Se manda cagadas"/>
                <Circle img={img} name="Juan Agustín Martí" position="Arregla las cagadas"/>
                <Circle img={img} name="Juan Agustín Martí" position="Duerme"/>
            </div>
        </div>
    )
}
