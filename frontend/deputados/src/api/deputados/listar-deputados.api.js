import { toast } from "react-toastify";
import { axiosInstance } from "../base/axiosInstance";

export async function listarDeputadosApi(){

    try{
        const response = await axiosInstance.get("/deputados/listar");
        
        return response.data;
    } catch(error){
        toast.error(error.response.data.message);
        throw new Error(error.response.data.message)

    }
}