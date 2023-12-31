import './App.css';
import Home from '.././src/ui/pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ListaEventos from '.././src/ui/pages/ListaEventos';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Welcome from './ui/pages/Welcome';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path='/deputados' element={<Home/>}/>
          <Route path='/eventos/:id' element={<ListaEventos/>}/>
        </Routes>
      </BrowserRouter>

      <ToastContainer />
    </div>
  );
}

export default App;
