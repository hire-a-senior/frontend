import { ITechnology } from '@/interfaces/technology'
import Image from 'next/image'
import React from 'react'

interface IAppliedFilters {
  selectedTechnologies: ITechnology[]
}

const AppliedFilters = ({ selectedTechnologies }: IAppliedFilters) => {
  return (
    <div className="flex justify-center items-center mt-10">
      {selectedTechnologies.map((technology: ITechnology) => {
        return (
          <div
            key={technology.code}
            className="flex items-center p-2 border border-magnoliaDark rounded-md m-2"
          >
            <Image
              className="mr-2"
              src={technology.imageUrl}
              alt={technology.name}
              width={24}
              height={24}
            />
            <p className="text-sm text-purple-dark">{technology.name}</p>
          </div>
        )
      })}
    </div>
  )
}

export default AppliedFilters
