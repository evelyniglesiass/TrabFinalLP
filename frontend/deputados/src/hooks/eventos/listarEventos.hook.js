import { useState } from "react";
import { listarEventosApi } from "../../constants";
import { toast } from "react-toastify";

export function useListarEventos(){

    const [error] = useState();

    async function listarEventos(id){

        try{
            const response = await listarEventosApi(id);

            return response
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {listarEventos, error};

}