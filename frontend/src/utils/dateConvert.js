const formatDateToCustomFormat = (isoDate) => {
  const date = new Date(isoDate);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Añadir ceros iniciales si es necesario
  const day = String(date.getDate()).padStart(2, "0"); // Añadir ceros iniciales si es necesario
  return `${year}/${month}/${day}`;
};

export default formatDateToCustomFormat;
