import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {

  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
    const response = await yelp.get('/search', {  //params is === 'search?limit=50'
      params: {
        limit: 50,
        term: searchTerm, //As inconvinient Term is Part of API
        location: 'rimini'
      }
    });
    setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong')
    }
  };

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, results, errorMessage];
};