import axios from 'axios';

export function getJson() {
  return {
    type: 'GET_JSON',
    payload: axios.get('http://demo6292426.mockable.io/blickTest')
  };
}
