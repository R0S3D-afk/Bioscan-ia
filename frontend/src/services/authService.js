import api from "../api/api";

export const registrarUsuario = async (datos) => {

    const response = await api.post(

        "/registro",

        datos
    );

    return response.data;
};

export const loginUsuario = async (datos) => {

    const response = await api.post(

        "/login",

        datos
    );

    return response.data;
};