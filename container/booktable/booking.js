import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookTable from './components/BookTable';
import ThankYou from './components/ThankYou';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/book-table" element={<BookTable />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
};

export default App;
