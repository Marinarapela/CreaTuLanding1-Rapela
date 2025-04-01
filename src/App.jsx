import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from "./components/ItemListContainer"
import { BrowserRouter, Routes, Route } from "react-router"
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
  return (
    <BrowserRouter>
      <NavBar/> 
      <Routes>
        <Route path='/' element={<ItemListContainer text="En Halaquitas nos apasiona la naturaleza y queremos compartir con vos todo lo que el mundo de las plantas tiene para ofrecer. Desde plantas ornamentales hasta árboles frutales, pasando por flores exóticas y hierbas aromáticas, en nuestro vivero encontrarás una amplia variedad de especies que harán florecer tu jardín, terraza o cualquier rincón de tu hogar."/>} />
        <Route path='/category/:id' element={<ItemListContainer/>}/>
        <Route path='/product/:id' element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
