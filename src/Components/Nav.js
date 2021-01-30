import React from 'react'
import './css/nav.css';

function Nav({title, btn1, btn2, btn3}){
    return(
        <div className='div-nav'>
            <nav className='Navegador'>
                <h1>{title}</h1>    
                <ol>
                    <li>{btn3}</li>
                    <li>{btn2}</li>
                    <li>{btn1}</li>
                </ol>
            </nav>
        </div>
    )    
}

export default Nav
