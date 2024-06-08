// import React from 'react'
import { MdOutlineCopyAll } from "react-icons/md";


type Props = {}

const AddressPlaceHolder = (_props: Props) => {
  return (
    <div className="self-center">
        <p className="text-blue-700 bg-blue-100 px-5 py-2 rounded-full flex items-center justify-center gap-x-2">
            <span className="text-base md:text-base">0x45A...8x77</span>
            <span className="cursor-pointer"><MdOutlineCopyAll className="text-base md:text-base" /></span>
        </p>
    </div>
  )
}

export default AddressPlaceHolder