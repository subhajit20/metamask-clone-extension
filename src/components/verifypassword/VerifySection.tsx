// import React from 'react';
import PasswordSection from './PasswordSection';

type Props = {
    func?: ()=> void;
}

const VerifySection = (props: Props) => {
  return (
    <div>
        <PasswordSection
            func={props.func}
        />
        <button onClick={()=> props.func!()} className='bg-black text-white'>Go Back</button>
    </div>
  )
}

export default VerifySection