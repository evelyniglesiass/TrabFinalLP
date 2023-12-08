import { toast } from "react-toastify";
import { axiosInstance } from "../base/axiosInstance";

export async function excluirInscricaoApi(inscricao){

    try{
        const response = await axiosInstance.delete(`/inscricao/${inscricao}`);

        toast.success(response.data.mensagem)
        return response.data;

    } catch(error){
        toast.error(error.response.data.message);
        throw new Error(error.response.data.message)

    }
}