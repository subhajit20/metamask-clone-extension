// import React from 'react'
import { IoAdd } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";


type Props = {
    functionalites:(() => void)[]
}

const AllFunctionalitiesHolder = (_props: Props) => {
  return (
    <div className='self-center'>
        <div className="flex justify-center gap-x-5">
            <IoAdd className="text-white rounded-full text-4xl bg-blue-700 cursor-pointer p-1" />
            <GoArrowUpRight className="text-white rounded-full text-4xl bg-blue-700 cursor-pointer p-1" />
        </div>
    </div>
  )
}

export default AllFunctionalitiesHolder