import React from 'react'
import './css/contCards.css'
import CardEleccion from './cardEleccion'

function ContCards() {
    return(
        <div id='seccion-eleccion' className='div-cont-cards'>
          <CardEleccion titulo='Creacion paso a paso'></CardEleccion>
          <CardEleccion titulo='Creacion Random'></CardEleccion>
        </div>
    )
}

export default ContCards

/*          <CardEleccion titulo='Creacion aleatoria'></CardEleccion>
 */