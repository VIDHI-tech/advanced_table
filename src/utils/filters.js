// Example custom filter function
export const fuzzySearch = (rows, id, filterValue) => {
    // Implement fuzzy search logic
    return rows.filter(row => row.values[id].toLowerCase().includes(filterValue.toLowerCase()));
  };
  