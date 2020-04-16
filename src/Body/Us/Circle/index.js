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
                    data-aos-offset="-200"
                    data-aos-duration="500">
                    <p className="name">{props.name}</p>
                    <p className="position">{props.position}</p>
                    <div className="social">
                        {props.instagram &&
                            <a className="social-item" href={"https://www.instagram.com/"+props.instagram} rel="noopener noreferrer" target="_blank">
                                <span className="icon-instagram"></span>
                            </a>
                        }
                        {props.facebook &&
                            <a className="social-item" href={"https://www.facebook.com/" + props.facebook} rel="noopener noreferrer" target="_blank">
                                <span className="icon-facebook"></span>
                            </a>
                        }
                        {props.linkedin && 
                            <a className="social-item" href={"https://www.linkedin.com/in/"+props.linkedin} rel="noopener noreferrer" target="_blank">
                                <span className="icon-linkedin"></span>
                            </a>
                        }
                        {props.mail &&
                            <a className="social-item" href={"mailto:"+props.mail} rel="noopener noreferrer" target="_blank">
                            <span className="icon-mail"></span>
                            </a>
                        }
                        {props.twitter &&
                            <a className="social-item" href={"https://twitter.com/"+props.twitter} rel="noopener noreferrer" target="_blank">
                            <span className="icon-twitter"></span>
                            </a>
                        }
                        {props.github &&
                            <a className="social-item" href={"https://github.com/"+props.github} rel="noopener noreferrer" target="_blank">
                            <span className="icon-github"></span>
                            </a>
                        }
                        {props.whatsapp &&
                            <a className="social-item" href={"https://wa.me/"+props.whatsapp} rel="noopener noreferrer" target="_blank">
                            <span className="icon-whatsapp"></span>
                            </a>
                        }
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
