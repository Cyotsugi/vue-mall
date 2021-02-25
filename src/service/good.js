import axios from '../utils/axios'

export function getCategory() {
  return axios.get('/category')
}

export function gerDetail (id) {
  return axios.get(`/goods/detail/${id}`);
}