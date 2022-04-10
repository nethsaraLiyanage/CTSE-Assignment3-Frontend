import { API } from '../../config';

export const getCategories = () => {
  return fetch(`${API}/categories`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
}
export const getProducts = () => {
  return fetch(`https://817d6159-922f-499f-9932-72247870ab81.mock.pstmn.io/getProducts`, {
    method: 'GET',
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
}
export const getFilteredProducts = (skip, limit, filters = {}) => {
  const data = {
    limit,
    skip,
    filters,
  };
  return fetch(`${API}/products/by/search`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
}
export const read = (productId) => { 
  return fetch(`${API}/product/${productId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
}