// import React from 'react'

type Props = {
    header1:string,
    header2:string
}

const Header = (props: Props) => {
  return (
    <div className='flex flex-col justify-center items-center py-2'>
        <h1 className="text-xl font-extrabold text-black">{props.header1}</h1>
        <h2 className="text-lg font-bold text-black">{props.header2}</h2>
    </div>
  )
}

export default Header