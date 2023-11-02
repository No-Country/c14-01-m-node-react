import { decodeToken } from "react-jwt";

const getToken = async (token) => {
  await decodeToken(token);
};

export default getToken;
