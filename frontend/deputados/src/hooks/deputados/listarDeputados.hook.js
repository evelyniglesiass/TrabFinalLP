import { useState } from "react";
import { listarDeputadosApi } from "../../constants";
import { toast } from "react-toastify";

export function useListarDeputados(){

    const [error] = useState();

    async function listarDeputados(){

        try{
            const response = await listarDeputadosApi();

            return response
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {listarDeputados, error};

}