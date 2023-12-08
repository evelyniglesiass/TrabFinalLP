import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ExcluirInscricao from './ExcluirInscricao';

const Eventos = ({eventos}) => {

  const [eventosTag, setEventosTag] = useState([]);

  useEffect(() => {

    setEventosTag([]);
    
    eventos.forEach(e => {
      setEventosTag((oldEventosTag) => ([...oldEventosTag, 
                                        <section>
                                          <h3>{e.descricaoTipo}</h3>
                                          <ExcluirInscricao/>
                                        </section>
                                    ]))
    });

  }, [eventos])

  return (
    <div>
      {eventosTag}
    </div>    
  )
}

export default Eventos