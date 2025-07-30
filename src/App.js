import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import FAQ from './pages/FAQ';
import Sponsors from './pages/Sponsors';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Navbar />
                <Routes>
                    <Route path="/" element={
                        <>
                            <Carousel />
                            <Content />
                        </>
                    } />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/sponsors" element={<Sponsors />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;