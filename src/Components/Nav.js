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

/*return(  
        <nav className="navbar navbar-expand-md navbar-dark bg-dark" >
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{title}</a>

                <div className="Botones" id="navbarsExample04">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item active">
                            <a className="nav-link" aria-current="page" href="#">{btn1}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{btn2}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{btn3}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    ) */
  