import axios from 'axios';

export async function query(params) {
  return axios('api/users', {
    params:params
  });
}
