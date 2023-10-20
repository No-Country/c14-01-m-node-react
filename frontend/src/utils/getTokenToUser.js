const getTokenToUser = {
  save: (decodedToken) => {
    if (decodedToken) localStorage.setItem("user", decodedToken.name);
  },
  get: () => {
    const userLogged = localStorage.getItem("user");
    if (userLogged) return userLogged;
  },
  drop: () => {
    localStorage.removeItem("user");
  },
};

export default getTokenToUser;
