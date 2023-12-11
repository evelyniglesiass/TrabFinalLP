import React, { useEffect, useState } from 'react'
import ExcluirInscricao from './ExcluirInscricao';
import EditarInscricao from '../components/EditarInscricao';
import '../components/Eventos.css';
import { useParams } from 'react-router-dom';

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
      <h1 className= 'header'>Eventos</h1>
      {eventosTag}
    </div>    
  )
}

export default Eventos