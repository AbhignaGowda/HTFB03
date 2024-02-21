import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import Web3 from 'web3';

const Welcome = () => {

    const connectWallet = async () => {
        if (window.ethereum) {
          try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            
            // Instantiating Web3 with the provider from MetaMask
            const web3 = new Web3(window.ethereum);
            
            // Using web3 to get the user's accounts
            const accounts = await web3.eth.getAccounts();
            
            // Log the first account
            console.log('Connected with MetaMask:', accounts[0]);
            
            // using 'web3' and 'account' to interact with the blockchain
          } catch (error) {
            console.error(error);
          }
        } else {
          console.error('MetaMask extension not detected');
        }
      };
   
    
  return (
    
    <div className="flex w-full justify-center items-center h-dvh">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1 ">
          Empowering Access  <br /> Through Data Leasing
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base ">
          Unlock the potential of your data without the long-term commitment. Lease data, unleash insights.
          </p>
          
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
        
          

          

          
        
          </div>
        </div>
      </div>
    
  );
};
export default Welcome;