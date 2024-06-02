type Props = {}
import InputsHolder from "../components/inputs/InputsHolder"

const ImportWallet = (_props: Props) => {
  return (
    <div  className='p-4 bg-white w-full h-full'>
      <InputsHolder />
      <a href='#/' className='w-full p-2 rounded-full'>
            <button >Register</button>
          </a>
    </div>
  )
}

export default ImportWallet