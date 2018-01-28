import React from 'react'

import benedict from './base.jpg'
import leftEye from './Eyes/0.jpg'
import rightEye from './Eyes/1.jpg'
import mouth from './Mouth/3.jpg'

const Face = ({ faceID }) => {
  return (
    <div style={{ position: 'relative', backgroundImage: `url(${benedict})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '420px', width: '300px', margin: '0 auto' }}>
      <img src={leftEye} style={{ position: 'absolute', left: '70px', top: '160px', height: '45px', border: '2px solid rgba(127,127,127,0.5)' }} />
      <img src={rightEye} style={{ position: 'absolute', left: '160px', top: '160px', height: '45px', border: '2px solid rgba(127,127,127,0.5)' }} />
      <img src={mouth} style={{ position: 'absolute', left: '80px', top: '230px', height: '100px', border: '2px solid rgba(127,127,127,0.5)' }} />
    </div>
  )
}

export default Face
