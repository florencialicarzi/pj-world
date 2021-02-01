import React from 'react'
import './css/cardEleccion.css'

function CardEleccion({titulo}) {
    return(
        <div className="card-eleccion">
            <h3>{titulo}</h3>
            <div className='desc-form'>
              cdfs
            </div>
            <button>
                 →
            </button>
        </div>

    );
}

export default CardEleccion