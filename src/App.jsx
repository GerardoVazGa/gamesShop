import './App.css'
import { NavBar } from './components/NavBarComponent/NavBar'
import { Store } from './pages/Store/Store'
import { BrowserRouter, Routes, Route } from 'react-router' 

function App() {

  return (
  <BrowserRouter>
          <div className="App">
            <NavBar />
            <div className="Home-container">
              <Routes >
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/store" element={<Store />} />
                <Route path="/about" element={<p>About to gamezone</p>} />
                <Route path="/faq" element={<p>FAQ to gamezone</p>} />
              </Routes>
            </div>
          </div>
    </BrowserRouter>
  )
}

export default App
