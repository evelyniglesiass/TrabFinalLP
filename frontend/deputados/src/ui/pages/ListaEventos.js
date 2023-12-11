import React, { useEffect, useState } from 'react'
import {useListarEventos} from '../../hooks/eventos/listarEventos.hook'
import Eventos from '../components/Eventos';
import { useParams } from 'react-router-dom';

const ListaEventos = () =>{

    const [eventos, setEventos] = useState([])
    const { id } = useParams();

    const { listarEventos } = useListarEventos();

    async function listar() {
    
        const response = await listarEventos(id);
        
        setEventos(response) 
  
    }

    useEffect(() => {
        listar();
    }, [])

    return(
        <div>
            {/* <h1>Eventos</h1> */}

            <article>
                <Eventos eventos={eventos} listar={listar}/>
            </article>
        </div>
    )
}

export default ListaEventos