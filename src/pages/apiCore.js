import { API } from '../config';

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
export const getProducts = (sortBy) => {
  return fetch(`${API}/products?sortBy=${sortBy}&order=desc&limit=6`, {
    method: 'GET',
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
}