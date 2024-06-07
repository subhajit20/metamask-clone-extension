import { useMemo } from 'react'

type Props = {
    components:JSX.Element[]
}

const useStepsComponents = (props: Props) => {
    const currentComponents = useMemo<JSX.Element[]>(()=>{
        return props.components;
    },[]);

  return {
    currentComponents:currentComponents,
  }
}

export default useStepsComponents