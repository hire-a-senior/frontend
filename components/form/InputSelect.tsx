import { Field } from 'formik'
import React from 'react'

interface IInputSelect {
  id: string
  options: string[] | number[]
}

const InputSelect = ({ id, options }: IInputSelect) => {
  return (
    <div className="w-full flex flex-col">
      <label htmlFor={id} className="text-purple-dark">
        {id.toLowerCase()}
      </label>
      <Field
        name={id}
        as="select"
        className="text-sm border border-purple-dark rounded-sm outline-purple-dark text-purple-dark p-1"
      >
        {options.map((option: string | number) => {
          return (
            <option key={option} value={option} className="text-purple-dark">
              {option}
            </option>
          )
        })}
      </Field>
    </div>
  )
}

export default InputSelect
