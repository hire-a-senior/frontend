import React from 'react'

interface IPrimaryButton {
  text: string
  onClick?: () => void
}

const PrimaryButton = ({ text, onClick }: IPrimaryButton) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="text-center text-sm border-2 border-white bg-purple-dark rounded-md text-white py-2 px-4 hover:bg-purple-light transition-all"
    >
      {text}
    </button>
  )
}

export default PrimaryButton
