import React,{useState} from 'react'
import './style/style.css'
import { Select } from '@chakra-ui/react'

export default function formInput(props) {
  const {label, onChange, id , errorMessage, ...inputProps} = props
  const [focused, setFocused]= useState(false)

  const handeleFocused = (e)=>{
    setFocused(true)
  }
  return (
    <>
    <div className="  w-10/12 flex flex-col">
      <label className="  my-5 text-white  text-base font-medium " >{label}</label>
      <input 
      {...inputProps}
      onChange={onChange}
      className="w-full rounded  p-3 "
      focused={focused.toString()}
      onBlur={handeleFocused}
      />

      <span className='  text-base text-red-400'>{errorMessage}</span>
    </div>
      
  
    </>
  )
}
