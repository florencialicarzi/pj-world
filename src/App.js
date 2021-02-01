import './App.css';
import Nav from './Components/nav'
import Inicio from'./Components/inicio'
import ContCards from './Components/contCards'


function App() {
  return ( 
    <>
        <Nav 
            title='PJLizer' 
            btn1= 'Creación' 
            btn2= 'Mis personajes' 
            btn3= 'Info'
        />

        <Inicio 
            titulo='Crea con PJLizer' 
            descripcion='Es hora de inspirarte con nuestras categorias para crear ese personaje 
            soñado que será parte de de tus historias, videojuegos o roles. El único
            límite es tu imaginación.'
            txtBtn='COMIENZA YA'
        />

        <ContCards></ContCards>
        
    </>
  )
}
export default App
