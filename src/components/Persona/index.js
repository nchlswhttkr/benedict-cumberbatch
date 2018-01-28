import React from 'react'

import syllables from './syllables.json'

const Persona = ({ match }) => {
  const { params: { id } } = match
  return (
    <div>
      <h1>{`${syllables.first[id[0]]}${syllables.second[id[1]]} ${syllables.third[id[2]]}${syllables.fourth[3]}`}</h1>
      <h2>{`Persona #${match.params.id}`}</h2>
    </div>
  )
}

export default Persona
