import { API } from '../../config';
import queryString from 'query-string';
import Axios from 'axios';
export const getCategories = async() => {
  try{
    const { data } = await Axios(`${API}/categories`, {
        headers: { Accept:  'application/json'}
      });
    return data;
  }catch(e){
    console.log(e.data);
  }
}

export const getProducts = async () => {
  try{
    const { data } = await Axios(`${API}/products`, {
        headers: { Accept:  'application/json'}
      });
    return data;
  }catch(e){
    console.log(e.data);
  }
}

export const getFilteredProducts = async (skip, limit, filters = {}) => {
  const data = {
    limit,
    skip,
    filters,
  };
  return await fetch(`${API}/products/by/search`, {
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
export const read = async(productId) => { 
  try{
    const { data } = await Axios(`${API}/products/${productId}`, {
        headers: 
        { 
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
    })
  }catch(e){
    console.log(e.data);
  }
}

export const list = async(params) => {
  const query = queryString.stringify(params);
  console.log('query',query)
  try{
    const { data } = await Axios(`${API}/products?${query}`, {
        headers: { Accept: 'application/json'}
    })
  }catch(e){
    console.log(e.data);
  }
}
