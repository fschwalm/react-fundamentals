// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

function Box({children, size, style}) {
  let className = 'box'

  switch (size) {
    case 'small':
      className += ' box--small'
      break
    case 'medium':
      className += ' box--medium'
      break

    case 'large':
      className += ' box--large'
      break

    default:
      break
  }

  return (
    <div className={className} style={{fontStyle: 'italic', ...style}}>
      {children}
    </div>
  )
}

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
    </div>
  )
}

export default App
