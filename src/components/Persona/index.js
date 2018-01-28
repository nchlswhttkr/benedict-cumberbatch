import React from 'react'

import Face from './Face'
import syllables from './syllables.json'

const Persona = ({ match }) => {
  const { params: { id } } = match
  return (
    <div style={{ textAlign: 'center', padding: '48px 0', boxSizing: 'border-box' }}>
      <h1 style={{ margin: '0' }}>{`${syllables.first[id[0]]}${syllables.second[id[1]]} ${syllables.third[id[2]]}${syllables.fourth[3]}`}</h1>
      <h2>{`Persona #${match.params.id}`}</h2>
      <Face />
      <h2>Share your Benedict with the world!</h2>
      <a
        class='twitter-share-button'
        href='https://twitter.com/intent/tweet'
      >
        Tweet
      </a>
    </div>
  )
}

export default Persona
