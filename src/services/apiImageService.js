import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '28041992-97fcb2b6c34f200cd634916b7';

const getApiResult = async (searchQuery, page) => {
  const response = await axios.get(
    `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};

export default getApiResult;
