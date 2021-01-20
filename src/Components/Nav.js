import React from 'react'
import '../App.css';

function Nav(){
    return(  
        <nav className="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">PJLizer</a>

                <div className="Botones" id="navbarsExample04">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item active">
                            <a className="nav-link" aria-current="page" href="#">Creación</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Mis Personajes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Info</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
  