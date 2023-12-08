import React, { useEffect, useState } from 'react'

const Deputados = ({deputados}) => {

  const [deputadosTag, setDeputadosTag] = useState([]);

  useEffect(() => {

    setDeputadosTag([]);
    
    deputados.forEach(d => {
      setDeputadosTag((oldDeputadosTag) => ([...oldDeputadosTag, 
                                        <section>
                                          <h3>{d.nome}</h3>
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