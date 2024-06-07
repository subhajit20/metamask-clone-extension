// import React from 'react'
import { Button } from "@nextui-org/button"
import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNewPassword } from "../../store/slice";

type Props = {
    func?:()=> void
}

const PasswordSection = (props: Props) => {
    const [passwords, setPasswords] = useState<{password:string, confirmPassword:string}>({
        password:'',
        confirmPassword:''
    })
    const dispatch = useDispatch()

    const setPasswordsInputs = (e: ChangeEvent<HTMLInputElement>) =>{
        setPasswords((prev)=>{
            return {...prev,[e.target.name]:e.target.value}
        })
    }

    const verifyPassword = () =>{
        try{
            if(passwords.password === '' || passwords.confirmPassword === ''){
                throw new Error("Set password!");
            }else{
                dispatch(
                    setNewPassword({
                        password:passwords.password
                    })
                )
            }
        }catch(e){
            if(e instanceof Error){
                console.log(e.message);
            }
        }
    }
  return (
    <div className="flex flex-col gap-y-5 w-full flex-wrap md:flex-nowrap py-5">
      <input onChange={setPasswordsInputs} name={'password'} type="password" className="input input-primary bg-white text-black placeholder:text-black w-[15rem] md:w-[20rem]" placeholder="Enter Password" />
      <input onChange={setPasswordsInputs} name={'confirmPassword'} type="password" className="input input-primary bg-white text-black placeholder:text-black w-[15rem] md:w-[20rem]" placeholder="Enter confirmassword" />

      {/* <a href="#/dashboard"> */}
        <Button onClick={verifyPassword} color="primary" className="rounded-full" variant="ghost">
            Verify
        </Button> 
      {/* </a> */}
    </div>
  )
}

export default PasswordSection