import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div>
      <h1>Ho Weary Traveller!</h1>
      <p>Thou seems lost, what say thee to returning <Link to='/'>home</Link>?</p>
    </div>
  )
}

export default PageNotFound
