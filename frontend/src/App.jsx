import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home.jsx"
import Header from "./components/Header.jsx"
import About from "./components/About/About.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Contact from "./components/Contact/Contact.jsx"
import Login from "./components/Login/Login.jsx"

function App() {

  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
