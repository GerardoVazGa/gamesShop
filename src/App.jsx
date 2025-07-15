import { NavBar } from './components/NavBarComponent/NavBar'
import { FilterProvider } from './Context/FilterContext'
import { Store } from './pages/Store/Store'
import { BrowserRouter, Routes, Route } from 'react-router' 
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <FilterProvider>
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
      </FilterProvider>
    </BrowserRouter>
  )
}

export default App
