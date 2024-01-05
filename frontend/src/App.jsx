import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/Home.jsx"
import Header from "./components/Header.jsx"

function App() {

  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
