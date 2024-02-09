import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Catalog from './components/Catalog'
import Cart from './components/Cart'

function App() { 

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Catálogo</Link>
        <Link to="/cart">Carrinho</Link>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
