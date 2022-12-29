import React from 'react';
import './style/App.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/index';
import Layout from './components/shared/layout';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
