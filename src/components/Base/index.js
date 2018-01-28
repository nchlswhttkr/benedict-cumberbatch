import React from 'react'
import { element } from 'prop-types'

import Header from './header'
import Footer from './footer'

const Base = ({ children }) => {
  return (
    <div>
      <Header />
      { children }
      <Footer />
    </div>
  )
}

Base.propTypes = {
  children: element.isRequired
}

export default Base
