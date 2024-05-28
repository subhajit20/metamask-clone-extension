import MetaMask from '../assets/MetaMask_Fox.png'

// type Props = {}

const Home = () => {
  return (
        <div className='flex flex-col items-center  justify-center gap-y-5 w-full h-full bg-black p-5'>
          <img src={MetaMask} alt="" height={200} width={200} />
          <div className='flex flex-col justify-center items-center gap-y-2'>
            <h1 className='text-2xl text-white font-poppins font-bold'>Welcome back! </h1>
            <h1 className='text-lg text-white font-poppins'>The decentralized web awaits</h1>
          </div>
          <input className="input-block input p-2" placeholder="Password" />
          <a href='#/importwallet' className='text-lg w-full p-2 btn btn-primary rounded-full'>
            <button >Register</button>
          </a>
          <a href="/#importwallet" className='text-blue-500 text-base'>
            <button>Forget Password</button>
          </a>
      </div>
  )
}

export default Home
