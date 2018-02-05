import React from 'react'
import { Redirect } from 'react-router-dom'

const Random = () => {
  return (
    <Redirect to={`/persona/${Math.floor(Math.random() * 10000000).toString().padStart(7, '0')}`} />
  )
}

export default Random
