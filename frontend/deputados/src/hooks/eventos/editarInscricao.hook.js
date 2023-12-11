import { useState } from "react";
import { toast } from "react-toastify";
import { editarInscricaoApi, excluirInscricaoApi } from "../../constants";

export function useEditarInscricao(){

    const [error] = useState();

    async function editarInscricao(dep, eve, eveNovo){

        try{
            await editarInscricaoApi(dep, eve, eveNovo);
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {editarInscricao, error};

}