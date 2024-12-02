import { useState } from 'react';
import axios from 'axios';
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (username && password) {
        try {
          const response = await axios.post('http://localhost:5000/api/login', {
            username,
            password,
          });
          const result = response.data;
          alert(`Login Status : ${result.status}`);
        } catch (error) {
          if (error.response) {
            alert(error.response.data.message || 'Login failed');
          } else {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
          }
        }
      } else {
        alert('Please enter both username and password');
      }
    
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Login
        </button>
      </div>
    </div>
  );
}
