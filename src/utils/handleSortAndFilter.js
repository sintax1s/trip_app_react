export function handleSortAndFilter(sortOrder, data, filterValue) {
  let copy = [...data];

  if (filterValue) {
    copy = copy.filter(item => item.city.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()));
  }

  // Сортировка по начальной дате
  copy.sort((a, b) => {
    switch(sortOrder) {
      case 'asc':
        return a.startDate.localeCompare(b.startDate);
      case 'desc':
       return b.startDate.localeCompare(a.startDate);
      default: 
        return 1;
    }});

  return copy;
}