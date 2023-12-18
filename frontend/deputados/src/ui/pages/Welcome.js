import '../pages/Welcome.css';
import imgWelcome from '../pages/imgs/news-ilustration.png';
import imgWelcome2 from '../pages/imgs/img-home-bottom.png';
import { Link } from 'react-router-dom';

const Welcome = () => {

    return (
      <div className='container'>
        <div className= 'header-welcome'>
            <h1 className= 'title-welcome'>Dados Abertos</h1>
            <img className='img-welcome' src={imgWelcome} alt='logo'/>
        </div>

        <div className='descricao'>
            <h1 className='title-descricao'>No Dados Abertos você</h1>
            <h1 className='title-descricao'>encontra todas as informações</h1>
            <h1 className='title-descricao'>que você precisa sobre os</h1>
            <h1 className='title-descricao'>trabalhos da Câmara</h1>
        </div>
        <button className='button-welcome'><Link to={"/deputados"}>Ir para a página inicial</Link></button>

        <img className='img-welcome-bottom' src={imgWelcome2} alt='img-home'/>
        
      </div>
    )
  }
   
  export default Welcome