import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cuadricula from './components/cuadricula/Cuadricula.jsx';
import Pagina404 from './components/404.jsx';
import "./main.css";
import App from './components/App.jsx';
import Home from './components/home/Home.jsx';
import CriptoPage from './components/cripto/CriptoPage.jsx';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
        </Route>

        <Route path='/criptomonedas' element={<App/> }>
          <Route index element={<Cuadricula />} />
          <Route path=':id' element={<CriptoPage /> } />
        </Route>

        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppRoutes />
);
