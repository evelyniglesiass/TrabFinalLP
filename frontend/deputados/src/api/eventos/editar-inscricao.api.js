import { toast } from "react-toastify";
import { axiosInstance } from "../base/axiosInstance";

export async function editarInscricaoApi(dep, eve, eveNovo){

    try{
        const response = await axiosInstance.put(`/deputados/editar/inscricao/${dep}/${eve}/${eveNovo}`);

        toast.success(response.data.mensagem)
        return response.data;

    } catch(error){
        toast.error(error.response.data.message);
        throw new Error(error.response.data.message)

    }
}