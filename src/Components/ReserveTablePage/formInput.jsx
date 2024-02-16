import React,{useState} from 'react'
import './style/style.css'
import { Select } from '@chakra-ui/react'

export default function formInput(props) {
  const {label, onChange, id , errorMessage, ...inputProps} = props
  console.log(errorMessage)
  const [focused, setFocused]= useState(false)

  const handeleFocused = (e)=>{
    setFocused(true)
  }
  return (
    <>
    <div className="w-10/12 flex flex-col">
      <label className=" text-xl font-medium " >{label}</label>
      <input 
      {...inputProps}
      onChange={onChange}
      className="w-full rounded my-5 p-4"
      
      />

      <span className='  text-base text-red-400'>{errorMessage}</span>
    </div>
      
  
    </>
  )
}
