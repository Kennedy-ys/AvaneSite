import Home from "./routes/Home"
import About from "./routes/About"
import Services from "./routes/Services"
import Contact from "./routes/Contact"
import NavBar from "./components/NavBar"
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
    </>
  )
}

export default App
