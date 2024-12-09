import { useEffect, useState } from 'react';

export default function Home() {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    // Update the URL to match your back-end API's port
    fetch('http://localhost:8080/api/businesses') // Use PORT 5000 here
      .then((response) => response.json())
      .then((data) => setBusinesses(data))
      .catch((error) => console.error('Error fetching businesses:', error));
  }, []);

  return (
    <div>
      <h1>Local Businesses</h1>
      <ul>
        {businesses.map((business) => (
          <li key={business.id}>
            {business.name} - {business.location}
          </li>
        ))}
      </ul>
    </div>
  );
}
