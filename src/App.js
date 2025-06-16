import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import Content from './components/Content/Content';
import Footer from './Footer/Footer';

import VarsityTeam from './pages/VarsityTeam/VarsityTeam';
import RecreationalTeam from './pages/RecreationalTeam/RecreationalTeam';
import Coaches from './pages/Coaches/Coaches';
import ExecutiveTeam from './pages/ExecutiveTeam/ExecutiveTeam';
import ClubPolicy from './pages/ClubPolicy/ClubPolicy';
import Sponsors from './pages/Sponsors/Sponsors';
import Outreach from './pages/Outreach/Outreach';
import FAQ from './pages/FAQ/FAQ';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<><Carousel /><Content /></>} />
        <Route path="/varsity-team" element={<VarsityTeam />} />
        <Route path="/recreational-team" element={<RecreationalTeam />} />
        <Route path="/coaches" element={<Coaches />} />
        <Route path="/executive-team" element={<ExecutiveTeam />} />
        <Route path="/club-policy" element={<ClubPolicy />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/outreach" element={<Outreach />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;