import React from 'react';

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    console.log('Login submitted:');
    console.log('Username:', username);
    console.log('Password:', password);
    // perform login action with username and password
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username"/>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password"/>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;