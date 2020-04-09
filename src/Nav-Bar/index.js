import React, {useState, useEffect} from 'react'
import './css.css';
import logo from './logo2.png'

export default function Nav() {

    const [visible, setVisible] = useState(window.scrollY > (window.innerHeight/2));
        

    const handleScroll = () => 
    {
        setVisible(window.scrollY > (window.innerHeight/2));
}

    useEffect(()=> {
        window.addEventListener('scroll', handleScroll);
    });

    if(visible){
        return (
            <div className="content-nav">
                <div className="content-width nav">
                    <img className="logo" src={logo} alt="SCRUM Game" />
                    <div className="buttons">
                        <button className="button button-signup">REGISTRARSE</button>
                        <button className="button button-login">INICIAR SESIÓN</button>
                    </div>
                </div>
            </div>
        )
    }
    else return null;
}
