import React from 'react';
import Circle from './Circle';
import './css.css';
import img from './1.jpg';

export default function Us(props) {
    return (
        <div className="content-width content-section content-us"
        data-aos="fade-left" 
        data-aos-offset="300"
        data-aos-duration="1000" >
            <h2>Nuestro equipo</h2>
            <div className="content-members">
                <Circle 
                img={img} 
                name="Juan Agustín Martí" 
                position="Desarrollo web" 
                social={
                    {
                        "facebook":"https://www.facebook.com/pupimarti",
                        "instagram":"https://www.instagram.com/pupi_marti",
                        "linkedin":"https://www.linkedin.com/in/pupimarti"
                    }
                }
                edit={props.edit}
                />
                <Circle 
                img="https://www.webcampus.uade.edu.ar/Fotos/1/ID_993091.jpg" 
                name="Amietta, Octavio" 
                position="Desarrollo web" 
                social={
                    {
                        "mail":"pupi_marti@hotmail.com" ,
                        "github":"pupimarti" ,
                        "twitter":"pupi_marti"
                    }
                }
                edit={props.edit}
                />
                <Circle 
                img={img} 
                name="Pepito Juarez 1" 
                position="Sirve agua" 
                social={
                    {
                    "whatsapp":"5492245427854"
                    }
                }
                edit={props.edit}
                />
                <Circle 
                img="https://www.webcampus.uade.edu.ar/Fotos/1/ID_993091.jpg" 
                name="Pepito Juarez 2" 
                position="Carga el agua"
                social={
                    {
                        
                    }
                }
                edit={props.edit}
                />
            </div>
        </div>
    )
}
