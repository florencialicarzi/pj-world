import React from 'react'
import './css/inicio.css'

function Inicio(){
    return(
        <div>
          <div className= "texto-inicio">
              <h1>Crea con PJLizer</h1>
              <h2>Es hora de inspirarte con nuestras categorias para crear ese personaje <br/>
                  soñado que será parte de de tus historias, videojuegos o roles. El único<br/>
                  límite es tu imaginación.
              </h2> 
                     
          </div>
          <div className= "boton-inicio">
              <button type="button" className="btn btn-light">COMIENZA YA</button>
          </div>
      </div>
    )
}

export default Inicio