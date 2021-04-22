import clienteAxios from "./clienteAxios";

export const registroUser = async (dataRegistro) => {
  return await clienteAxios.post("/registro", dataRegistro);
};
