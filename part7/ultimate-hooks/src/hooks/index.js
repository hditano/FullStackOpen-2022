import axios from 'axios';
import { useEffect, useState } from 'react';

export const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange
  }
}

export const useResource = (baseUrl) => {
  const [resources, setResources] = useState([])
  const [status, setStatus] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(baseUrl);
      setResources(response.data);
    }
    fetchData();
  }, [status])


  const create = async (resource) => {
    const response = await axios.post(baseUrl, resource)
    setStatus(!status)
    return response.data;
  }

  const service = {
    create
  }

  return [
    resources, service
  ]
}
