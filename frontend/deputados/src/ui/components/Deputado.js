import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Deputado = ({deputado}) => {
    
    const [deputadoTag, setDeputadoTag]  = useState([]);

    useEffect(() => {

        setDeputadoTag([]);

        setDeputadoTag((oldDeputadoTag) => ([...oldDeputadoTag,

                                            <section>
                                                
                                                <h1>{deputado.nome}</h1>
                                                <p>{deputado.siglaPartido}</p>
                                                <p>{deputado.siglaUf}</p>

                                                <Link to={`/detalhes/vaga/${v.id}`}>Ver eventos</Link>
                                                <Link to={`/detalhes/vaga/${v.id}`}>Inscrever</Link>
                                        
                                            </section>
                                        ]))
    }, [deputado])
}