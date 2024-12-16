import { NavLink } from "react-router";
import { useState, useEffect } from 'react';

interface TestResponse {
  message: string;
}

function Data() {
    const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/test');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: TestResponse = await response.json();
        setMessage(data.message);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      }
    };

    fetchData();
  }, []);

  
  return (
    <div>
      <h1>Data Page</h1>
      <NavLink to="/">Home</NavLink>
      <div>
      {message && <p>Message from backend: {message}</p>}
      {error && <p>Error: {error}</p>}
    </div>
      
    </div>
  )
}

export default Data