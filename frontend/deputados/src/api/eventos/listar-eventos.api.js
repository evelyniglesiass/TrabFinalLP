import { toast } from "react-toastify";
import { axiosInstance } from "../base/axiosInstance";

export async function listarEventosApi(){

    try{
        const response = await axiosInstance.get("/");
        
        return response.data;
    } catch(error){
        toast.error(error.response.data.message);
        throw new Error(error.response.data.message)

    }
}