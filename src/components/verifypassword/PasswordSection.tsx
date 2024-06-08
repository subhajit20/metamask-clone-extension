// import React from 'react'
import { Button } from "@nextui-org/button"
import { ChangeEvent, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { setNewPassword } from "../../store/slice";
import { Alert } from "antd";

type Props = {
    func?:()=> void
}

const PasswordSection = (_props: Props) => {
    const [passwords, setPasswords] = useState<{password:string, confirmPassword:string}>({
        password:'',
        confirmPassword:''
    })
    const dispatch = useDispatch();
    const [error, setError] = useState<string | null>(null)

    const setPasswordsInputs = (e: ChangeEvent<HTMLInputElement>) =>{
        setPasswords((prev)=>{
            return {...prev,[e.target.name]:e.target.value}
        })
    }

    const verifyPassword = useCallback(() =>{
        try{
            if(passwords.password === '' || passwords.confirmPassword === ''){
                throw new Error("Set password and confirm password");
            }else{
                if(passwords.password === passwords.confirmPassword){
                    dispatch(
                        setNewPassword({
                            password:passwords.password
                        })
                    )
                }else{
                    throw new Error("Password and confirm password is not same!");
                }
            }
        }catch(e){
            if(e instanceof Error){
                setError(e.message);
                console.log(e.message);
            }
        }finally{
            setTimeout(()=>{
                setError(null);
            },4000);
        }
    },[passwords]);

  return (
    <div className="flex flex-col gap-y-5 w-full flex-wrap md:flex-nowrap py-5">
        {
            error !== null && <Alert message={error} type="error" />
        }
      <input onChange={setPasswordsInputs} name={'password'} type="password" className="input input-primary bg-white text-black placeholder:text-black w-[17rem] md:w-[20rem]" placeholder="Enter Password" />
      <input onChange={setPasswordsInputs} name={'confirmPassword'} type="password" className="input input-primary bg-white text-black placeholder:text-black w-[17rem] md:w-[20rem]" placeholder="Enter confirmassword" />

      {/* <a href="#/dashboard"> */}
        <Button onClick={verifyPassword} color="primary" className="rounded-full" variant="ghost">
            Verify
        </Button> 
      {/* </a> */}
    </div>
  )
}

export default PasswordSection