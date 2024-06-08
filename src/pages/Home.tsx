// import React from 'react';
import MetaMask from '../assets/MetaMask_Fox.png';
// import { Wallet } from 'ethers';

// type Props = {}

const Home = () => {

  // React.useEffect(()=>{
  //   function account(){
  //     const account = Wallet.fromPhrase("pen sail network term grape melt debris obscure dwarf oppose acoustic unique");
  //     console.log(account);
  //     const acc = new Wallet(account.privateKey)
  //     console.log(acc)
  //   }

  //   account();
  // },[])
  return (
        <div className='flex flex-col items-center  justify-center gap-y-5 w-full h-full bg-white p-5'>
          <img src={MetaMask} alt="" height={200} width={200} />
          <div className='flex flex-col justify-center items-center gap-y-2'>
            <h1 className='text-4xl text-black font-extrabold'>Welcome back! </h1>
            <h1 className='text-lg text-gray-400 font-semibold'>The decentralized web awaits</h1>
          </div>
          <input type='password' className="input-block input p-2 bg-white text-black placeholder:text-black outline-none border-t-white border-l-white border-r-white rounded-none border-b-2 border-b-black" placeholder="Password" />
          <a href='#/importwallet' className='text-lg w-full p-2 btn btn-primary rounded-full'>
            <button >Register</button>
          </a>
          <a href="#/dashboard" className='text-blue-500 text-base'>
            <button>Forget Password</button>
          </a>
      </div>
  )
}

export default Home