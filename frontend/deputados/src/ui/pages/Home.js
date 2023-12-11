import React, { useEffect, useState } from 'react'
import {useListarDeputados} from '../../hooks/deputados/listarDeputados.hook'
import Deputados from '../components/Deputados';

const Home = () =>{

    const [deputados, setDeputados] = useState([])

    const { listarDeputados } = useListarDeputados();

    useEffect(() => {
        async function listar() {
    
          const response = await listarDeputados();
          setDeputados(response) 
    
        }
    
        listar();
    }, [])

    return(
        <div>
            {/* <h1>Deputados</h1> */}

            <article>
                <Deputados deputados={deputados}/>
            </article>
        </div>
    )
}

export default Home