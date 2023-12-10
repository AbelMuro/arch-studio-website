import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact'
import NavigationBar from './Components/NavigationBar';
import FooterBar from './Components/FooterBar';
import './styles.css';

function App() {
    return (
        <BrowserRouter>
            <NavigationBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/portfolio' element={<Portfolio/>}/>
                <Route path='/AboutUs' element={<AboutUs/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
            <FooterBar/>
        </BrowserRouter>
    )
}

export default App;