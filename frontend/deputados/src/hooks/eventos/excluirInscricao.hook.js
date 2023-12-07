import { useState } from "react";
import { toast } from "react-toastify";
import {excluirInscricaoApi } from "../../constants";

export function useExcluirInscricao(){

    const [error] = useState();

    async function excluirInscricao(inscricao){

        try{
            await excluirVagaApi(inscricao);
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {excluirInscricao, error};

}