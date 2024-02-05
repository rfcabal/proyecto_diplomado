import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage';
import PortafolioPage from './pages/PortafolioPage';
import ContactoPage from './pages/ContactoPage';


function App() {
  return (
    <div className="App">
      <div className="container">
      <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/blog' element={<BlogPage />} />
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
