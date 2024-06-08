import _React from 'react';
import Nevigation from '../components/nav/Nevigation';
import AccountDetailsHolder from '../components/account-details/AccountDetailsHolder';

type Props = {}

const Dashboard = (_props: Props) => {
  return (
    <div className='flex flex-col gap-y-5 w-full h-full bg-white'>
        <Nevigation />
        <AccountDetailsHolder />
    </div>
  )
}

export default Dashboard