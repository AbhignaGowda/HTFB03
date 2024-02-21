import React from 'react'
import Navbar from './NavBar';
import Footer from './Footer';


const Contact = () => {
    
  return (
    <>
        <Navbar/>
        <div className="min-h-screen flex items-center justify-center gradient-bg-welcome py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-md w-full space-y-8">
            <h1 className="mt-6 text-center text-3xl font-extrabold text-white text-gradient">Contact-Us</h1>
          <div className='blue-glassmorphism h-96 px-10 py-10'>
            <form className="mt-8 space-y-6 ">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <input type="text" placeholder="@gmail.com" className="appearance-none bg-transparent rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
                </div> <br />
                <div>
                  <input type="Number" placeholder="Phone-Number" className="appearance-none bg-transparent rounded relative block w-full px-3 py-2 border border-gray-300 text-white placeholder-gray-500 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"  />
                </div>
              </div>

              <div className="flex items-center justify-between ">
                <div className="flex items-center" >
                 
                  
                </div>

                <div className="text-sm">
                  
                </div>
              </div>

              <div>
                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    <Footer/>
    
    </>
   
    

  )
}

export default Contact
