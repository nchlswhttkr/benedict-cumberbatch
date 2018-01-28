import React from 'react'
import { Link } from 'react-router-dom'

const Header = props => {
  return (
    <header style={{ backgroundColor: '#eee', textAlign: 'center', padding: '12px' }}>
      <Link to='/'><h1>Benedict Cumberbatch Persona Creator</h1></Link>
    </header>
  )
}

export default Header
