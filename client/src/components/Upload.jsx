import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './NavBar'; // Corrected import statement
import Footer from './Footer'; // Corrected import statement

const pinataSecretApiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIxNjIwZjk4ZC05MjhkLTQ3Y2ItODk5Ni02N2E2YTRmYTNhMDkiLCJlbWFpbCI6ImRzcml0aHZpa0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiYWIzYTdlOGZkMGNhMGQwZjZkMTQiLCJzY29wZWRLZXlTZWNyZXQiOiJkZjJjYmQ5YmVhZDY0NGZjM2JlN2U1M2MxZGViY2U1MmNkMTkwYjM5Y2I4MWYwZGEzOTE2MzU0MTg2OGQ2ZDg1IiwiaWF0IjoxNzA4Mzg0ODk0fQ.7vPFxprmU6J-RoBH4MQbeohClnwPR1NsFzg30V0-e-c'; // Replace with your actual Pinata API key
let arr = new Array();
const UploadComponent = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Set the file state with the selected file
  };

  const handleUpload = async () => {
    if (!file) {
      console.error('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post(
        'https://api.pinata.cloud/pinning/pinFileToIPFS',
        formData,
        {
          headers: {
            'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
            Authorization: `Bearer ${pinataSecretApiKey}`,
          },
        }
      );
      const cid = response.data.IpfsHash;
        arr.push(`${cid}`)
    console.log(arr[0]);

      //console.log('IPFS Hash:', cid);
      alert('File uploaded Successfully');
    } catch (error) {
      console.error('Error uploading file to IPFS:', error);
    }
  };
  
  const handleDeleteFromPinata = async () => {

    const cid= arr[0];
    try {
      const deleteResponse = await axios.delete(
        `https://api.pinata.cloud/pinning/unpin/${cid}`,
        {
          headers: {
            Authorization: `Bearer ${pinataSecretApiKey}`,
          },
        }
      );

      console.log('Pinata API Delete Response:', deleteResponse.data);
      alert('File deleted Successfully');
    } catch (error) {
      console.error('Error deleting from Pinata:', error.message);
      if (error.response) {
        console.error('Delete API Response:', error.response.data);
      }
    }
  };

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome"></div>
      <Navbar />
      <div className="flex flex-col justify-center items-center h-full text-white">
        <div className="mf:flex flex-row items-start justify-between md:p-20 py-0 px-4">
          <div className="mt-44 ml-34 flex flex-col white-glassmorphism px-14 py-14">
            <input type="file" className="text-white bg-blue-800" onChange={handleFileChange} />
            <br /> <br />
            <button className="bg-green-600 rounded-full px-2 py-1 hover:bg-green-900" onClick={handleUpload}>
              Upload to IPFS
            </button>
            <br />
            <button className="bg-red-600 rounded-full px-2 py-1 hover:bg-red-900" onClick={async() =>await handleDeleteFromPinata()}>Delete</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UploadComponent;
