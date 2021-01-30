import React from 'react'
import './css/cardEleccion.css'

function CardEleccion(props) {
    return(
        <div className="Card-eleccion">
            <h3>
                {props.texto}
            </h3>
            <button>
                 →
            </button>
        </div>

    );
}

export default CardEleccion