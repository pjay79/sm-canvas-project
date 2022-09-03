import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path="*">Page not found</Route>
    </Routes>
  );
};

export default App;
