import { axiosInstance } from "../base/axiosInstance";

export async function cadastrarEventoApi(id, descricaoTipo){

    try{
        const response = await axiosInstance.post("/eventos", {
            id, descricaoTipo
        });

        return response.data;

    } catch(error){
        throw new Error(error.response.data.message)

    }
}