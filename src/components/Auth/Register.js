// src/components/Auth/Register.js
<<<<<<< HEAD
import React, { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');

  const evaluatePasswordStrength = (password) => {
    if (password.length > 8 && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
      return 'Strong';
    } else if (password.length > 5) {
      return 'Medium';
    } else {
      return 'Weak';
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordStrength(evaluatePasswordStrength(newPassword));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement registration logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Password"
        required
      />
      <div>Password Strength: {passwordStrength}</div>
      <button type="submit">Register</button>
    </form>
=======
import React from 'react';

const Register = () => {
  return (
    <div>
      <h1>Register</h1>
      {/* Registration form goes here */}
    </div>
>>>>>>> a23812e (Normalize all line endings)
  );
};

export default Register;
