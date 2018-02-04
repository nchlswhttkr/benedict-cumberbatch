import React from 'react'

import Face from './face'
import Name from './name'

const Persona = ({ match }) => {
  const { params: { id } } = match
  return (
    <div style={{ textAlign: 'center', padding: '48px 0', boxSizing: 'border-box' }}>
      <h2>{`Persona #${match.params.id}`}</h2>
      <Name id={id.slice(0, 4)} />
      <Face id={id.slice(4)} />
      <h2>Share your Benedict with the world!</h2>
      {/* <a
        className='twitter-share-button'
        href='https://twitter.com/intent/tweet'
      >
        Tweet
      </a> */}
    </div>
  )
}

export default Persona
