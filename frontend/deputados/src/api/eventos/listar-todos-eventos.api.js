import { toast } from "react-toastify";
import { axiosInstance } from "../base/axiosInstance";

export async function listarTodosEventosApi(){

    try{
        const response = await axiosInstance.get(`/eventos`);
        
        return response.data;
    } catch(error){
        toast.error(error.response.data.message);
        throw new Error(error.response.data.message)

    }
}