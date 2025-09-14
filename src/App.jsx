import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Navbar from "./Components/Navbar"
import ErrorPage from "./Components/ErrorPage"

function App() {


  return (
    <>
<Navbar></Navbar>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/contact" element={<Contact/>}/>
     <Route path="*" element={<ErrorPage/>}/>
    </Routes>
    </>
  )
}

export default App
