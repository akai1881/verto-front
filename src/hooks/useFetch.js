import React, {useEffect, useState} from 'react';
import axios from 'axios'

const useFetch = (url, config = {}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        const {data} = await axios(url, config);
        setData(data);
      } catch (e) {
        setError(e.response.message)
      } finally {
        setLoading(false)
      }
    })()
  })

 return {loading, error, data}
};

export default useFetch;