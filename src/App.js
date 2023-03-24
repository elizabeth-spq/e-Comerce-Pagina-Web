//import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './common/Footer';
import Mainbar from './common/Mainbar';
import Carrito from './components/Carrito';
import Productos from './components/Productos';
import Banner from './home/Banner';
import Inicio from './home/Inicio';
import Nosotros from './home/Nosotros';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Mainbar />

        <main id='main-content'>
          <Routes>
            <Route path='/' element={< Inicio />} />
            <Route path='/producto' element={<Productos />} />
            <Route path='/carrito' element={<Carrito />} />
          </Routes>


        </main>

        <Footer />
      </BrowserRouter>





    </div>
  );
}

export default App;
