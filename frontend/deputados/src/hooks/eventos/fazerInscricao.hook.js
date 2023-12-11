import { useState } from "react";
import { toast } from "react-toastify";
import { fazerInscricaoApi } from "../../constants";

export function useFazerInscricao(){

    const [error] = useState();

    async function fazerInscricao(dep, eve){

        try{
            await fazerInscricaoApi(dep, eve);
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {fazerInscricao, error};

}