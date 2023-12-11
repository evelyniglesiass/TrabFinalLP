import React, { useEffect, useState } from 'react'
import Deputado from './Deputado';

const Deputados = ({deputados}) => {

  const [deputadosTag, setDeputadosTag] = useState([]);

  useEffect(() => {

    setDeputadosTag([]);
    
    deputados.forEach(d => {
      setDeputadosTag((oldDeputadosTag) => ([...oldDeputadosTag, 
                                                <section className='container-conteudo'>
                                                <div className='centered-items'>
                                                  <Deputado deputado={d}/>
                                                </div>
                                              </section>
                                    ]))
    });

  }, [deputados])

  return (
    <div>
      <h1 className= 'header'>Deputados</h1>
      {deputadosTag}
    </div>    
  )
}

export default Deputados