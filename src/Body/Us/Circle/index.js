import React, {useState} from 'react';
import './css.css';

export default function Circle(props) {    

    const [see, setSee] = useState(false);
    const onClick = () => setSee(!see);


        const redes = [];

        for(const red in props.social){
                redes.push(
                    <a key={props.social[red]} className="social-item" href={props.social[red]} rel="noopener noreferrer" target="_blank">
                        <span className={`icon-${red}`}></span>
                    </a>
                )
        }
    
    if(see)
        return (
            <div className="circle show" onClick={onClick}>
                <img className="img-member" src={props.img} alt="Imágen del integrante"/>
                <div className="info-member"
                    data-aos="fade-down" 
                    data-aos-offset="-200"
                    data-aos-duration="500">
                    <p className="name">{props.name}</p>
                    <p className="position">{props.position}</p>
                    <div className="social">
                        {redes}
                    </div>
                </div>
            </div>
        )
    else
        return(
            <div className="circle" onClick={onClick}>
                <img className="img-member" src={props.img} alt="Imágen del integrante"/>
            </div>
        )
}
