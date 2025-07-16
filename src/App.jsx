import { NavBar } from './components/NavBarComponent/NavBar'
import { FilterProvider } from './Context/FilterContext'
import { Store } from './pages/Store/Store'
import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import { CartProvider } from './Context/CartContext'
import { Cart } from './components/CartComponent/Cart'
import { Footer } from './components/FooterComponent/Footer'

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <FilterProvider>
          <div className="App">
            <NavBar />
            <div className="Home-container">
              <Routes >
                <Route path="/" element={<Store />} />
                <Route path="/store" element={<Store />} />
                <Route path="/about" element={<p>About to gamezone</p>} />
                <Route path="/faq" element={<p>FAQ to gamezone</p>} />
              </Routes>
            </div>
            <Footer />
          </div>
          <Cart />
        </FilterProvider>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
