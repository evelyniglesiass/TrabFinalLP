import { useState } from "react";
import { toast } from "react-toastify";
import { cadastrarEventoApi } from "../../constants";

export function useCadastrarEvento(){

    const [error] = useState();

    async function cadastrarEvento(id, descricaoTipo){

        try{
            await cadastrarEventoApi(id, descricaoTipo);
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {cadastrarEvento, error};

}