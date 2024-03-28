import { Route,Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import About from "./pages/About"
import Explore from "./pages/Explore"

function App() {

  return (
    <div className="m-0 bg-gradient-to-b from-stone-200 to-stone-100">
     <Header/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/signup" element={<Signup/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/explore" element={<Explore/>}/>
     </Routes>
     <Footer/>
    </div>
  )
}

export default App
