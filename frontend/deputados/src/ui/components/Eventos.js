import React, { useEffect, useState } from 'react'
import ExcluirInscricao from './ExcluirInscricao';
import EditarInscricao from '../components/EditarInscricao';
import '../components/Eventos.css';
import { Link, useParams } from 'react-router-dom';
import imgWelcome from '../pages/imgs/news-ilustration.png';

const Eventos = ({eventos, listar}) => {

  const [eventosTag, setEventosTag] = useState([]);
  const { id } = useParams();

  useEffect(() => {

    setEventosTag([]);
    
    if (eventos) {
      eventos.forEach(e => {
        setEventosTag((oldEventosTag) => ([...oldEventosTag, 
                                          <section className='container-conteudo'>
                                            <div className='centered-items'>
                                              <div className='feed-items eventos'>
                                                <h3>{e.descricaoTipo}</h3>
                                                <EditarInscricao id={id} evento={e} listar={listar}/>
                                                <ExcluirInscricao id={id} evento={e} listar={listar}/>
                                              </div>
                                            </div>
                                          </section>
                                      ]))
      });
    }

  }, [eventos])

  return (
    <div>
      <div className= 'header-welcome'>
        <h1 className= 'title-welcome'>Dados Abertos</h1>
        <button className='button-nav'><Link to={"/deputados"}>Deputados</Link></button>
        <button className='button-nav'><Link to={"/"}>Home</Link></button>
        <img className='img-welcome' src={imgWelcome} alt='logo'/>
      </div>
      {eventosTag}
    </div>    
  )
}

export default Eventos