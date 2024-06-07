import InputsHolder from "../components/inputs/InputsHolder"
import Header from "../components/heading/Header";
import useStepsHook from "../hooks/useStepsHook";
import useStepsComponents from "../hooks/useStepsComponents";
import VerifySection from "../components/verifypassword/VerifySection";

type Props = {}

const ImportWallet = (_props: Props) => {
  const { currentStep,nevigateNext, nevigateBack } = useStepsHook({
    totalComponents:2,
  });

  const {currentComponents} = useStepsComponents({
    components: [
      <InputsHolder function={nevigateNext} />,
      <VerifySection func={nevigateBack} />
    ]
  })
  return (
    <div  className='p-4 bg-white w-full h-full flex flex-col justify-center items-center'> 
    <Header 
      header1={"Access your wallet with your"}
      header2={"Recovery phrase"}
    />
      {currentComponents[currentStep]}
      <button className='bg-black text-white' onClick={nevigateNext}>Next</button>
    </div>
  )
}

export default ImportWallet