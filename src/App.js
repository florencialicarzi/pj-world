import './App.css';
import Nav from './Components/nav'
import Inicio from'./Components/inicio'
import CardEleccion from './Components/cardEleccion'

function App() {
  return ( 
    <>
        <Nav title='PJLizer' btn1= 'Creación' btn2= 'Mis personajes' btn3= 'Info'/>
        <Inicio />
        
    </>
  )
}
export default App
