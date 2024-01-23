import React from 'react'
import {BrowserRouter,Routes , Route} from "react-router-dom";
import Home from "./pages/Home";
import Signin from './pages/Signin';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import About from './pages/About';
import Header from './components/Header';
import PrivateProfile from './components/PrivateProfile';
//import Navbar from './pages/Navbar';
const App = () => {

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/Home" element ={<Home/>} /> 
    <Route path="/sign-in" element ={<Signin/>} />  
    <Route path="/sign-up" element ={<Signup/>} />  
    <Route path="/about" element ={<About/>} />  

    <Route element={<PrivateProfile/>}>
    <Route path="/profile" element ={<Profile/>} />  
    </Route>
    </Routes>
    </BrowserRouter>

  )
}

export default App;




