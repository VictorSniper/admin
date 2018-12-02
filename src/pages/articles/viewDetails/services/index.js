
import axios from 'axios';

export async function getById(params) {
  return axios('/api/editor', {
    params:params
  });
}

