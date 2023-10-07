import { Field } from 'formik'
import React from 'react'

interface IInputText {
  id: string
  type: string
}

const InputText = ({ id, type }: IInputText) => {
  return (
    <div className="w-full flex flex-col my-2">
      <label htmlFor={id} className="text-purple-dark text-sm">
        {id.toLowerCase()}
      </label>
      <Field
        name={id}
        className="text-sm border border-purple-dark rounded-sm outline-purple-dark text-purple-dark p-1"
        type={type}
      />
    </div>
  )
}

export default InputText
