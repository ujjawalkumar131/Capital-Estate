import React from 'react'
import {BrowserRouter,Routes , Route} from "react-router-dom";
import Home from "./pages/Home";
import Signin from './pages/Signin';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import About from './pages/About';
import Header from './components/Header';
import PrivateProfile from './components/PrivateProfile';
import CreateListing from './pages/CreateListing';
import UpdateListing from './pages/UpdateListing';
import Listing from './pages/Listing';
import Search from './pages/Search';
//import Navbar from './pages/Navbar';
const App = () => {

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element ={<Home/>} /> 
    <Route path="/sign-in" element ={<Signin/>} />  
    <Route path="/sign-up" element ={<Signup/>} />  
    <Route path="/about" element ={<About/>} />  
    <Route path="/listing/:listingId" element = {<Listing/>} />
    <Route path="/search" element={<Search/>} />
    <Route element={<PrivateProfile/>}>
    <Route path="/profile" element ={<Profile/>} />  
    <Route path="/create-listing" element = {<CreateListing/>} />
    <Route path="/update-listing/:listingId" element = {<UpdateListing/>} />

    </Route>
    </Routes>
    </BrowserRouter>

  )
}

export default App;




