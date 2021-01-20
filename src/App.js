import './App.css';
import Nav from './Components/Nav.js'

function App() {
  return ( 
    <>
      <div>
          <Nav/>
      </div>
      <div>
          <div className= "texto-inicio">
              <h1>Crea con PJLizer</h1>
              <h2>La mejor herramienta para la creación de personajes con multiples<br/>
                  caracteristicas que te serviran de inspiracion para tu rol,<br/> 
                  historia o videojuego.
              </h2> 
              
              
          </div>
          <div className= "boton-inicio">
              <button type="button" className="btn btn-light">COMIENZA YA</button>
          </div>
      </div>
      
            

    </>
    
  );
}

export default App;
