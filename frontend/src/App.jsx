import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home.jsx"
import Header from "./components/Header.jsx"
import About from "./components/About/About.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Contact from "./components/Contact/Contact.jsx"
import Login from "./components/Login/Login.jsx"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { getProjects } from "./redux/actions/home.actions.js"

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjects());
  }, [])

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
