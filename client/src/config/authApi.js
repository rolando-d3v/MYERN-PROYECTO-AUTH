import clienteAxios from "./clienteAxios";

export const registroUser = async (dataRegistro) => {
  const registro = await clienteAxios("/registro", dataRegistro);
  return registro;
};
