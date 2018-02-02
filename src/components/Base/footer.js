import React from 'react'
import { version } from '../../../package.json'

const Footer = props => {
  return (
    <footer style={{ backgroundColor: '#eee', textAlign: 'center', padding: '12px 0' }}>
      <h1>Source Code @ <a href='https://github.com/nickeloz/benedict-cumberbatch'>Github</a></h1>
      <h2>Written by Nicholas Whittaker</h2>
      <h3>v{version}</h3>
    </footer>
  )
}

export default Footer
