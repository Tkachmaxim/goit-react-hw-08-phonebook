const getFilteredContacts = (items, filter) => {
  const normilizedSearch = filter.toLowerCase();
  const filtered = items.filter(({ name }) => {
    return name.toLowerCase().includes(normilizedSearch);
  });

  return filtered;
};

export { getFilteredContacts };
