import React from 'react'
import {useState, useRef} from "react";
import { validateEmail, validatePassword } from '../utils/validation';

const InputFields = ({name}) => {
    const [isError, setIsError] = useState(null);
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef();

    function handleValidation(){
        let error = null;
        if(name==="email"){
            error = validateEmail(inputRef.current.value);
        }
        if(name==="password"){
            error = validatePassword(inputRef.current.value);
        }
        setIsError(error);
        
        if(inputRef.current.value===""){
            setIsFocused(false)
        }
    }

    function handleFocus(){
        
        if(inputRef.current.value!==" " ){
        setIsFocused(true)
        }
        setIsError(null);
    }
   
     const inputClasses = "p-4 my-4 w-full bg-gray-900 bg-opacity-80 border border-gray-500 rounded-md  duration-1000 transform -translate-y-0 focus:border-2";
     const inputErrorClasses = "p-4 my-4 w-full bg-gray-900 bg-opacity-80 border border-red-500 rounded-md focus:border-2";
    const focusedInpClasses = "absolute left-3 top-4 z-10 origin-[0] text-sm pb-0.5 pt-0.5 duration-100 transform -translate-y-0.5 scale-90";
  return (
    <div>
        <div className="relative">
    <input
    ref={inputRef}
    onBlur={handleValidation}
    onFocus={handleFocus}
      type={name}
      placeholder={isFocused? ' ': name.charAt(0).toUpperCase()+name.slice(1)}
      id={name}
      className={isError ? inputErrorClasses: inputClasses}
    />
    {isFocused && <label htmlFor={name}  className={focusedInpClasses} >{name.charAt(0).toUpperCase()+name.slice(1)}</label>}
    </div>
    {isError && <p className="text-red-600 transition-all">{isError}</p>}
    </div>
  )
}

export default InputFields