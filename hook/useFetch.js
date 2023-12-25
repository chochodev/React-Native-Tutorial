import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    url: 'https://jsearch.p.rapidapi.com/search',
    params: {query: 'Python developer in Texas, USA', page: '1', num_pages: '1'},
    headers: {
      'X-RapidAPI-Key':
      'cd31a37c95mshc2d86b20eb73193p145d0ejsn3d7380d65048',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  }
};