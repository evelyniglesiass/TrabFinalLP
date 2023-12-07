import { useState } from "react";
import { listarEventosApi } from "../../constants";
import { toast } from "react-toastify";

export function useListarEventosApi(){

    const [error] = useState();

    async function listarEventos(){

        try{
            const response = await listarEventosApi();

            return response
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {listarEventos, error};

}