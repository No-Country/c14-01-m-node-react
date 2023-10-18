const getFilterCategory = (category, listProperties) => {
  return listProperties.filter((property) => {
    return property.categories.includes(category);
  });
};

export { getFilterCategory };
