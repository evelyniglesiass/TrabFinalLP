import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Deputados = ({deputados}) => {

  const [deputadosTag, setDeputadosTag] = useState([]);

  useEffect(() => {

    setVagasTag([]);
    
    deputados.forEach(d => {
      setDeputadosTag((oldDeputadosTag) => ([...oldDeputadosTag, 
                                        <section>
                                          <h3>{d.nome}</h3>
                                          
                                          <Link to={`/detalhes/vaga/${v.id}`}>Ver eventos</Link>
                                          <Link to={`/detalhes/vaga/${v.id}`}>Inscrever</Link>
                                        </section>
                                    ]))
    });

  }, [deputados])

  return (
    <div>
      {deputadosTag}
    </div>    
  )
}

export default Deputados