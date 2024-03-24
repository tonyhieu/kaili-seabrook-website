import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage.js';
import ContactPage from './pages/ContactPage.js';
import Navbar from './fragments/Navbar.jsx';
import { motion } from 'framer-motion';

import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
      <>
        <Navbar />

        <AnimatePresence>
          <motion.main 
              className="main__container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
          >
            <Routes location={location} key={location.pathname}>
              <Route index element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes> 
          </motion.main> 
        </AnimatePresence>
      </>
  );
}

export default App;
