import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home.jsx"
import Header from "./components/Header.jsx"
import About from "./components/About/About.jsx"

function App() {

  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
