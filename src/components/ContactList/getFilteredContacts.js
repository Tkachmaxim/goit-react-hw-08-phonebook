const getFilteredContacts = (items, filter) => {
  const normilizedSearch = filter.toLowerCase();
  const filtered = items.filter(({ name }) => {
    return name.toLowerCase().includes(normilizedSearch);
  });
  console.log('filtered', filtered);

  return filtered;
};

export { getFilteredContacts };
