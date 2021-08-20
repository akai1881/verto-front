export const truncateString = (str, num) => {
  if (str.length < num) {
    return str;
  }

  return str.slice(0, num) + '...';
};

// export const deleteURLSearchParam = (query, value) => {
//   const newQuery = query.replace(new RegExp(`&?feature=${value}`, 'i'), '');
//   return newQuery.replace(/^&/, '');
// };

export const deleteURLSearchParam = (query, value) => {
  const newQuery = query.replace(new RegExp(`(%24)?${value}`, 'gi'), '');
  return newQuery.replace(/^%24/, '');
};

export const isCheckedFilter = (title, params) => {
  const pattern = new RegExp(`${title}`, 'gi');
  return pattern.test(params);
};

export const getQuerySearch = () => {
  return decodeURIComponent(window.location.search.slice(1)).replace('$', '');
};

export const isEmptyString = (data) => data === '';

export const getItemsFromLocalStorage = (key) => {
  if (!isString(key)) {
    return false;
  }
  return JSON.parse(localStorage.getItem(key));
};

export const setItemsToLocalStorage = (key, item) => {
  if (!isString(key)) return false;

  if (isString(item)) {
    localStorage.setItem(key, item);
  } else {
    localStorage.setItem(key, JSON.stringify(item));
  }
};

export const calcSubPrice = (count, price) => count * price;

export const calcTotalPrice = (products) => {
  return products.reduce((ac, cur) => {
    return (ac += cur.subPrice);
  }, 0);
};

const isString = (key) => typeof key === 'string';
