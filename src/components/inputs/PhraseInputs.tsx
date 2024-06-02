// import React from 'react'
// import { phraseType } from "./InputsHolder";

type Props = {
    name:string,
    number:number,
    onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const PhraseInputs = (props: Props) => {
    const { onChangePassword, name, number } = props;
  return (
    <div className="flex items-center gap-x-5">
        <span className="text-gray-500">{number}</span>
        <input name={name} type="password" onChange={onChangePassword} className="input input-primary bg-white text-black placeholder:text-black w-full" placeholder="" />
    </div>
  )
}

export default PhraseInputs