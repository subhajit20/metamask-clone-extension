import { useState } from 'react'

type Props = {
    totalComponents:number
}

const useStepsHook = (props: Props) => {
    const [currentStep, setCurrentStep] = useState<number>(0);

    const nevigateNext = () =>{
        if(currentStep >= props.totalComponents - 1){
            return;
        }else{
            setCurrentStep((prev)=> { return prev + 1 })
        }
    }

    const nevigateBack = () =>{
            setCurrentStep((prev)=> { return prev - 1 })
    }

  return {
    nevigateNext:nevigateNext,
    currentStep:currentStep,
    nevigateBack:nevigateBack,
    setCurrentStep:setCurrentStep
  }
}

export default useStepsHook