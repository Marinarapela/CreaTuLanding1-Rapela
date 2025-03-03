import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from "./components/ItemListContainer"
import CartWidget from "./components/CartWidget"

function App() {
  return (
    <>
    <NavBar/> 
    <ItemListContainer text="En Halaquitas nos apasiona la naturaleza y queremos compartir con vos todo lo que el mundo de las plantas tiene para ofrecer. Desde plantas ornamentales hasta árboles frutales, pasando por flores exóticas y hierbas aromáticas, en nuestro vivero encontrarás una amplia variedad de especies que harán florecer tu jardín, terraza o cualquier rincón de tu hogar."/>
    </>
  )
}

export default App
