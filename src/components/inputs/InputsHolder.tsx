import { useCallback, useState } from "react"
import PhraseInputs from "./PhraseInputs"
import { Button } from "@nextui-org/react"
import { Wallet } from "ethers"
import { Alert, Spin } from "antd";
import { useDispatch } from "react-redux";
import { setAccount } from "../../store/slice";
// import React from 'react'
type Props = {
    function?: ()=> void
}

export interface phraseType {
        pharse1:string,
        pharse2:string,
        pharse3:string,
        pharse4:string,
        pharse5:string,
        pharse6:string,
        pharse7:string,
        pharse8:string,
        pharse9:string,
        pharse10:string,
        pharse11:string,
        pharse12:string,
}


const InputsHolder = (props: Props) => {
    const [phrases,setPhrase] = useState<phraseType>({
        pharse1:'',
        pharse2:'',
        pharse3:'',
        pharse4:'',
        pharse5:'',
        pharse6:'',
        pharse7:'',
        pharse8:'',
        pharse9:'',
        pharse10:'',
        pharse11:'',
        pharse12:'',
    })
    const [error, setError] = useState<string | null | boolean>(null);
    const [loader,setLoading] = useState<boolean>(false)
    const dispatch = useDispatch();

    const onPhraseChnage = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setPhrase((prev)=> {
            return { ...prev, [e.target.name]:e.target.value }
        })
    }

    const verifyPhrase = useCallback(() =>{
        try{
            setLoading(true)
            let phrase:string = ''
            Object.entries(phrases).map((p,i)=>{
                // console.log(p)
                if(p[1] === ''){
                    throw new Error("Invalid field");
                }else{
                    if(i >= Object.entries(phrases).length - 1){
                        console.log('Hello')
                        phrase += `${p[1]}`
                    }else{
                        phrase += `${p[1]} `
                    }
                }
            })
            console.log(phrase)
            const account = Wallet.fromPhrase(phrase);
            
            dispatch(setAccount({
                acc: account
            }))
            localStorage.setItem('acc',JSON.stringify(account))
            console.log(account);
            setLoading(false);
            setError(false);
            props.function!();
        }catch(e){
            if(e instanceof TypeError){
                console.log("TypeError",e.message)
                setError('invalid mnemonic length')
            }else if(e instanceof Error){
                console.log(e.message)
                setError(e.message)
            }
            // setError(true)
            setLoading(false);
        }finally{
            setTimeout(()=>{
                setError(null);
            },3000);
            setLoading(false);
        }
    },[phrases]);

    // useEffect(()=>{
    //     console.log(phrases);
    // },[phrases])
  return (
      <div className="flex flex-col justify-center gap-y-4">
        <div className="h-14 w-full">
        {
            error !== null && <Alert message={error === false ? "Wallet is verified" : error} type={error === false ? "success" : "error"} showIcon  />
        }
        </div>
        <div className="grid grid-cols-3 justify-center gap-3">
            {/* {phrases.pharse1} */}
            {
                Object.entries(phrases).map((p,i)=>{
                    // console.log(p)
                    return <PhraseInputs number={i+1} key={i} name={p[0]} onChangePassword={(e)=> onPhraseChnage(e)} />
                })
            }
        </div>  
           {
            loader === false ?  <Button onClick={verifyPhrase} color="primary" className="rounded-full" variant="ghost">
            Verify
        </Button>  : <Spin size="small" >Loading</Spin>
           }
      </div>
  )
}

export default InputsHolder