import React from 'react'

import { first, second, third, fourth } from './syllables.json'

const Name = ({ id }) => {
  return (
    <div>
      <h1 style={{ margin: '0' }}>{`${first[id[0]]}${second[id[1]]} ${third[id[2]]}${fourth[3]}`}</h1>
    </div>
  )
}

export default Name
