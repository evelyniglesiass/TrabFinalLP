import React, { useEffect, useState } from 'react'
import Deputado from './Deputado';
import imgWelcome from '../pages/imgs/news-ilustration.png';
import { Link } from 'react-router-dom';

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
      <div className= 'header-welcome'>
        <h1 className= 'title-welcome'>Dados Abertos</h1>
        <button className='button-nav'><Link to={"/"}>Home</Link></button>
        <img className='img-welcome' src={imgWelcome} alt='logo'/>
      </div>
      {deputadosTag}
    </div>    
  )
}

export default Deputados