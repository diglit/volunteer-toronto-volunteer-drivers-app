import React from 'react'
import { NextPage } from 'next'
import ApplicationReview from '../../../shared/components/driver-applications/ApplicationReview'
import { useRouter } from 'next/router'

const Applications: NextPage = () => {
  const router = useRouter()
  const { id } = router.query   
  
  return (
    <>
      <ApplicationReview id={parseInt(id)} />
    </>
  )
}

export default Applications