'use client'
import technologyApi from '@/api/technology'
import AppliedFilters from '@/components/AppliedFilters'
import TechnologyFilter from '@/components/TechnologyFilter'
import { ITechnology } from '@/interfaces/technology'
import withAuth from '@/lib/withAuth'
import { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [technologies, setTechnologies] = useState<ITechnology[]>([])
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    ITechnology[]
  >([])

  useEffect(() => {
    technologyApi.list().then((res: AxiosResponse) => {
      setTechnologies(res?.data?.data?.technologies)
    })
  }, [])

  return (
    <div>
      <TechnologyFilter
        technologies={technologies}
        selectedTechnologies={selectedTechnologies}
        setSelectedTechnologies={setSelectedTechnologies}
      />

      <AppliedFilters selectedTechnologies={selectedTechnologies} />
    </div>
  )
}

export default withAuth(Home)
