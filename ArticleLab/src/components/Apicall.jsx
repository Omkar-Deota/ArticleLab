
import  { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); 

  const fetchUsers = () => {
    setLoading(true);  
    setError(null);  

    axios
      .get('https://jsonplaceholder.typicode.com/users') 
      .then((response) => {
        setUsers(response.data);  
        setLoading(false); 
      })
      .catch(() => {
        setError('Error fetching data');  
        setLoading(false); 
      });
  };

  return (
    <div>
      <button onClick={fetchUsers} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Info. '}
      </button>
      
      {error && <div>{error}</div>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
