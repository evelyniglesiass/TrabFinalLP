import React, { useEffect, useState } from 'react'
import ExcluirInscricao from './ExcluirInscricao';
import EditarInscricao from '../components/EditarInscricao';
import '../components/Eventos.css';

const Eventos = ({eventos}) => {

  const [eventosTag, setEventosTag] = useState([]);

  useEffect(() => {

    setEventosTag([]);
    
    eventos.forEach(e => {
      setEventosTag((oldEventosTag) => ([...oldEventosTag, 
                                        <section className='container-conteudo'>
                                          <div className='centered-items'>
                                            <div className='feed-items eventos'>
                                              <h3>{e.descricaoTipo}</h3>
                                              <EditarInscricao/>
                                              <ExcluirInscricao/>
                                            </div>
                                          </div>
                                        </section>
                                    ]))
    });

  }, [eventos])

  return (
    <div>
      <h1 className= 'header'>Eventos</h1>
      {eventosTag}
    </div>    
  )
}

export default Eventos