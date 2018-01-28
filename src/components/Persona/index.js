import React from 'react'

const Persona = ({ match }) => {
  console.log('hello')
  return (
    <h1>{`Persona #${match.params.id}`}</h1>
  )
}

export default Persona
