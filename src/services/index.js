import axios from 'axios';

export async function query(params) {
  return axios('api/users', {
    params:params
  });
}
export async function create(params) {

  return axios({
    method: 'post',
    url: 'api/create',
    data: params
  });
}
