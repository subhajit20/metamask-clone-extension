// import React from 'react'

type Props = {
    ethValue?: string
}

const AccountBalance = (_props: Props) => {
  return (
    <div className="self-center flex flex-col justify-center">
        <p className="text-black text-5xl font-medium text-center">0.0016 ETH</p>
        <p className="text-gray-500 text-2xl font-medium text-center">$3.19 USD</p>
    </div>
  )
}

export default AccountBalance