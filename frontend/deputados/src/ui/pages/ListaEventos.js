import React, { useEffect, useState } from 'react'
import {useListarEventos} from '../../hooks/eventos/listarEventos.hook'
import Eventos from '../components/Eventos';

const ListaEventos = () =>{

    const [eventos, setEventos] = useState([])

    const { listarEventos } = useListarEventos();

    useEffect(() => {
        async function listar() {
    
          const response = await listarEventos();
          
          setEventos(response) 
    
        }
    
        listar();
    }, [])

    return(
        <div>
            <h1>Eventos</h1>

            <article>
                <Eventos eventos={eventos}/>
            </article>
        </div>
    )
}

export default ListaEventos