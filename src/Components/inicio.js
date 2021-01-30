import React from 'react'
import './css/inicio.css'

function Inicio(){
    return(
        <div className='div-inicio'>
          <div className= "div-texto">
              <h1>Crea con PJLizer</h1>
              <h2>Es hora de inspirarte con nuestras categorias para crear ese personaje 
                  soñado que será parte de de tus historias, videojuegos o roles. El único
                  límite es tu imaginación.
              </h2>              
          </div>

          <div className= "div-btn">
              <button type="button" className="btn-comienzo">COMIENZA YA</button>
          </div>
      </div>
    )
}

export default Inicio