import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import ListEmployees from './pages/ListEmployees';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listEmployees" element={<ListEmployees />} />
        <Route path="*" element={<Error />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;