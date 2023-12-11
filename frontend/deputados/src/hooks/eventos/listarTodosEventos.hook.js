import { useState } from "react";
import { listarTodosEventosApi } from "../../constants";
import { toast } from "react-toastify";

export function useListarTodosEventos(){

    const [error] = useState();

    async function listarTodosEventos(){

        try{
            const response = await listarTodosEventosApi();

            return response
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {listarTodosEventos, error};

}