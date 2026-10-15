import axios from 'axios';

const API_KEY = '58063966-b991f1971e5a26a9c607a1794';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  };

  return axios.get(BASE_URL, { params }).then(response => response.data);
}
