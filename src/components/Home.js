import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Create your very own Benedict Cumberbatch</h1>
      <p>Blah blah, context about app</p>
      <Link to='/random'><div>MAKE MY BENEDICT</div></Link>
    </div>
  )
}

export default Home
