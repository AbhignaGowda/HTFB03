import axios from 'axios';
import React, { useState } from 'react';
import Navbar from './NavBar';
import Footer from './Footer';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError(''); // Clear previous login error message

    try {
      const response = await axios.post('/login', { username, password });
      const userData = response.data.user;

      // Pass the user data to the onLogin function
      onLogin(userData);
    } catch (error) {
      console.error('Login failed:', error);
      setLoginError('Invalid username or password');
    }
  };

  return (
    <>
      <Navbar/>
      <div className="min-h-screen flex items-center justify-center gradient-bg-welcome py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-md w-full space-y-8">
          <div className='blue-glassmorphism h-96 px-10 py-10'>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Sign in to your account</h2>
            <form className="mt-8 space-y-6 " onSubmit={handleSubmit}>
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <input type="text" placeholder="Username" className="appearance-none bg-transparent rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" value={username} onChange={handleUsernameChange} />
                </div> <br />
                <div>
                  <input type="password" placeholder="Password" className="appearance-none bg-transparent rounded relative block w-full px-3 py-2 border border-gray-300 text-white placeholder-gray-500 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" value={password} onChange={handlePasswordChange} />
                </div>
              </div>

              <div className="flex items-center justify-between ">
                <div className="flex items-center" >
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-green-500">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
>Login</button>
              </div>
            </form> <br />
            {loginError && alert("Login Successful!")}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Login;

