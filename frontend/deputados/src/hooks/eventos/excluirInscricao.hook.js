import { useState } from "react";
import { toast } from "react-toastify";
import { excluirInscricaoApi } from "../../constants";

export function useExcluirInscricao(){

    const [error] = useState();

    async function excluirInscricao(dep, eve){

        try{
            await excluirInscricaoApi(dep, eve);
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {excluirInscricao, error};

}