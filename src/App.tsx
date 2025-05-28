import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import TechStackPage from './pages/TechStackPage';
import IndustriesPage from './pages/IndustriesPage';
import LeadershipPage from './pages/LeadershipPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/tech-stack" element={<TechStackPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;