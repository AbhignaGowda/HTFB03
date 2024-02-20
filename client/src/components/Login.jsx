
import Navbar from './NavBar';
import Footer from './Footer';
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => { // Make the function async
    e.preventDefault();
    try {
      const response = await axios.post('/login', { email, password }); // Make POST request to your backend /login endpoint
      // If the login was successful, you can redirect the user or perform other actions
      console.log(response.data);
    } catch (error) {
      // If there was an error during login, handle it here
      console.error('Login error:', error.response.data);
      setError(error.response.data.message);
    }
  };

  return (<>
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center gradient-bg-welcome py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-md w-full space-y-8">
        <div className='blue-glassmorphism h-96 px-10 py-10'>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Sign in to your account</h2>
        <form className="mt-8 space-y-6 " onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
          </div>

          <div className="flex items-center justify-between ">
            <div className="flex items-center " >
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
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
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                {/* Heroicon name: lock-closed */}
                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 2c.553 0 1 .448 1 1v3h-2V3c0-.552.447-1 1-1zM4 7V5c0-1.103.897-2 2-2h8c1.103 0 2 .897 2 2v2c.553 0 1 .448 1 1v9c0 .552-.447 1-1 1H5c-.553 0-1-.448-1-1v-9c0-.552.447-1 1-1zm2-2h8v2H6V5c0 .552.447 1 1 1h1V8H7V5zm5 9a1 1 0 11-2 0 1 1 0 012 0zm-1-5c.553 0 1 .448 1 1v2a1 1 0 01-2 0V8c0-.552.447-1 1-1z" clipRule="evenodd" />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
                  </div>
      </div>
    </div>
    <Footer/>
                </>
  );
};

export default Login;
