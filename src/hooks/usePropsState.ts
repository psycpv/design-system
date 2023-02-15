import { useEffect, useState } from 'react'

interface PropsState {
  hasError: boolean;
  hasSuccess: boolean;
  isDisabled: boolean;
  isFocused: boolean;
}
function usePropsState({hasError, hasSuccess, isDisabled, isFocused}:PropsState, ref: any) {
  const [hasErrorState, setHasErrorState] = useState(false)
  const [hasSuccessState, setHasSuccessState] = useState(false)
  const [isDisabledState, setIsDisabled] = useState(false)
  const [isFocusedState, setIsFocusedState] = useState(false)

  useEffect(() => {
    setHasErrorState(hasError)
  }, [hasError])

  return {hasErrorState, hasSuccessState, isDisabledState, isFocusedState}
}

export default usePropsState