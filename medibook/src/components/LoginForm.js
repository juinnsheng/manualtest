import React, { useState } from 'react';
import  '/Users/juinnshengna/Desktop/website/medibook-qa/src/App.css';

export default function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'testuser' && password === 'password123') {
      onLogin();
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        className="input"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="button" type="submit">Login</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}
