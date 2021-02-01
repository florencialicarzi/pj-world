import React from 'react'
import './css/inicio.css'

function Inicio({titulo,descripcion,txtBtn}){
    return(
        <div className='div-inicio'>
          <div className= "div-texto">
              <h1>{titulo}</h1>
              <h2>{descripcion}</h2>              
          </div>

          <div className= "div-btn">
              <button href='#seccion-eleccion' className="btn-comienzo">{txtBtn}</button>
          </div>
      </div>
    )
}

export default Inicio