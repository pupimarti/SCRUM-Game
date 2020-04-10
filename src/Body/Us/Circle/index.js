import React, {useState} from 'react';
import './css.css';

export default function Circle(props) {

    const [see, setSee] = useState(false);


    const onClick = () => setSee(!see);

    if(see)
        return (
            <div className="circle show" onClick={onClick}>
                <img className="img-member" src={props.img} alt="Imágen del integrante"/>
                <div className="info-member"
                    data-aos="fade-down" 
                    data-aos-duration="500">
                    <p className="name">{props.name}</p>
                    <p className="position">{props.position}</p>
                    
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
