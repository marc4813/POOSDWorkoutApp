import React from 'react';

const Register = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    // perform registration action with name, username, password, and confirm password
    console.log('Registration submitted:');
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name"/>
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username"/>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password"/>
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword"/>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;