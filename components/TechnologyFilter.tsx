import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ITechnology } from '@/interfaces/technology'
import useClickOutside from '@/hooks/useClickOutsite'

interface ITechnologyFilter {
  technologies: ITechnology[]
  selectedTechnologies: ITechnology[]
  setSelectedTechnologies: (technologies: ITechnology[]) => void
}

const TechnologyFilter = ({
  technologies,
  selectedTechnologies,
  setSelectedTechnologies,
}: ITechnologyFilter) => {
  const [search, setSearch] = useState<string>('')
  const [filteredTechnologies, setFilteredTechnologies] = useState<
    ITechnology[]
  >([])
  const [showTechnologyList, setShowTechnologyList] = useState<boolean>(false)
  const wrapperRef = useRef<any>()

  const handleChange = (event: any) => {
    setSearch(event.target.value)
  }

  const handleSelectTechnology = (technology: ITechnology) => {
    if (selectedTechnologies.find((t) => t.id === technology.id)) {
      setSelectedTechnologies(
        selectedTechnologies.filter((t) => t.id !== technology.id)
      )
    } else {
      setSelectedTechnologies([...selectedTechnologies, technology])
    }
    setSearch('')
    setShowTechnologyList(false)
  }

  useEffect(() => {
    setFilteredTechnologies(
      technologies.filter((technology: ITechnology) =>
        technology.name.toLowerCase().includes(search.toLowerCase())
      )
    )
  }, [search, technologies])

  useClickOutside(wrapperRef, () => {
    setShowTechnologyList(false)
  })

  return (
    <div>
      <div className="flex justify-center items-center">
        <div
          className="flex justify-center items-center bg-magnolia mt-10 relative"
          ref={wrapperRef}
        >
          <div className="flex justify-center items-center bg-magnolia cursor-pointer border border-magnoliaDark rounded-sm">
            <Image
              src="/icons/search.svg"
              className="ml-2"
              alt="search"
              width={20}
              height={20}
            />
            <input
              className="bg-magnolia h-full placeholder:text-purple-dark placeholder:opacity-50 p-2 outline-none text-purple-dark"
              onChange={handleChange}
              type="text"
              placeholder="Search Technology"
              name="search"
              onFocus={() => {
                setShowTechnologyList(true)
              }}
            />
          </div>
          {showTechnologyList && (
            <div className="absolute top-full left-0 max-h-48 overflow-y-auto w-full mt-2 bg-white z-10">
              {filteredTechnologies?.map((technology: ITechnology) => (
                <div
                  key={technology.id}
                  className="flex justify-start items-center p-2 cursor-pointer hover:bg-magnoliaDark"
                  onClick={() => handleSelectTechnology(technology)}
                  style={
                    selectedTechnologies.find((t) => t.id === technology.id)
                      ? { backgroundColor: '#4A2367' }
                      : {}
                  }
                >
                  <Image
                    src={technology.imageUrl}
                    alt={technology.name}
                    className="mr-2"
                    width={20}
                    height={20}
                  />
                  <p
                    className="text-sm"
                    style={
                      selectedTechnologies.find((t) => t.id === technology.id)
                        ? { color: '#efefef' }
                        : { color: '#4A2367' }
                    }
                  >
                    {technology.name}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TechnologyFilter
