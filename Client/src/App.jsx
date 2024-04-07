import { Route,Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Explore from "./pages/Explore"
import Place from "./pages/Place"
import AddPlace from "./pages/AddPlace"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <div className="m-0 bg-gradient-to-b from-stone-200 to-stone-100">
     <Header/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/signup" element={<Signup/>}/>
       <Route path="/explore" element={<Explore/>}/>
       <Route path="/place/:id" element={<Place/>}/>
       <Route path="/addPlace" element={<AddPlace/>}/>
     </Routes>
     <ToastContainer/>
     <Footer/>
    </div>
  )
}

export default App