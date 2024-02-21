import React from 'react';
import Navbar from './NavBar';
import Footer from './Footer';

const About = () => (
  <>
    <div className="min-h-screen">
      <Navbar />
      <div className=" flex justify-center items-center h-full">
        <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-0 px-4"> 
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1 text-center mt-20 ">
            Terms And Conditions
          </h1><br /><br />
          <div className='text-gray-200'>

          <p > <b>* Data Usage Policy:</b> <br />

         Clearly state how the data collected from users will be used.
         Specify what types of data will be collected, such as personal information, usage data, etc.
         Explain how this data will be processed, stored, and secured.</p>
          </div> <br />
          <div className='text-gray-200'>

          <p> <b>* User Consent:</b> <br />
          Outline the process by which users consent to their data being collected and used.
Explain that by using the app, users agree to abide by the terms and conditions outlined.</p>
          </div> <br />
          <div className='text-gray-200'>

          <p> <b>* Data Security Measures:</b> <br />
          Describe the security measures in place to protect users' data from unauthorized access, disclosure, alteration, or destruction.
Assure users that their data will be handled with the utmost care and in compliance with relevant data protection laws.</p>
          </div> <br />
          <div className='text-gray-200'>

          <p> <b>*Third-Party Services:</b> <br />
          Disclose any third-party services or partners involved in data processing or storage.
Clarify how these third parties adhere to data protection standards and regulations.</p>
          </div> <br />
          <div className='text-gray-200'>

          <p> <b>*Data Ownership:</b> <br />
          Clarify the ownership of the data collected through the app.
Specify that users retain ownership of their data but grant the app certain rights to use it as outlined in the terms and conditions.</p>
          </div>
          <div className="flex flex-1 flex-col mt-mf:mr-10"></div>
        </div>
      </div>
      <Footer />
    </div>
  </>
);

export default About;
