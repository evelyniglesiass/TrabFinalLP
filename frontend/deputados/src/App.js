import './App.css';
import Home from '.././src/ui/pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ListaEventos from '.././src/ui/pages/ListaEventos';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/eventos/:id' element={<ListaEventos/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
