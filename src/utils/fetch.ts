const API_KEY = '737FcCyuO8AERzpFYA8hMo6fmpKPog0XBwY0ZZIj';
const API_URL = 'https://api.nasa.gov/planetary/apod';

export default async (urlParams: string = '') => {
  const parametro = urlParams?.length > 0 ? urlParams : '';

  try {
    const res = await fetch(`${API_URL}?api_key=${API_KEY}${parametro}`);
    const data = await res.json();

    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};
