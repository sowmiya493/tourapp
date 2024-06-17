import React from 'react';
import './app.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Offers from './Components/Offers/Offers'
import Popular from './Components/Popular/Popular'
import Footer from './Components/Footer/Footer'
//import Blog from './Components/Blog/Blog'
import About from './Components/About/About'


const App = () => {
    return(
        <>
        <Navbar/>
        <Home/>
        <Popular/>
       <Offers/>
        <About/>
        
        <Footer/>
    </>
    )
}
export default App