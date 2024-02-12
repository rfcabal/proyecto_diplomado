import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage';
import PortafolioPage from './pages/PortafolioPage';
import ContactoPage from './pages/ContactoPage';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BlogSinglePage from './pages/BlogSinglePage';


function App() {

  const [resp, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const respGlobal = await axios.get('http://localhost:3001/api/curriculum/');
      setData(respGlobal.data);
    };
    
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="container">
      <BrowserRouter>
          <Header profile={resp.imagen}  nombre={resp.nombre}  posicion={resp.posicion} />
          <Routes>
            <Route path='/' element={<HomePage introduccion={resp.introduccion}  telefono={resp.telefono} correo={resp.correo} linkedin={resp.linkedin} github={resp.github} reddit={resp.reddit}/>} />
            <Route path='/blog' element={<BlogPage />} />
            <Route path='/blog/:id' element={<BlogSinglePage />} />
            <Route path='/portafolio' element={<PortafolioPage />} />
            <Route path='/contacto' element={<ContactoPage />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
}

export default App;
