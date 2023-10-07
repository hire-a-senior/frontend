import Image from 'next/image'
import React from 'react'

interface IValidationError {
  error: string
}

const ValidationError = ({ error }: IValidationError) => {
  return (
    <div className="p-2 my-2 flex justify-start items-center border border-error rounded-sm">
      <Image
        className="mr-2"
        src="/error.png"
        width={20}
        height={20}
        alt="warning sign"
      />
      <p className="text-xs text-error">{error}</p>
    </div>
  )
}

export default ValidationError
