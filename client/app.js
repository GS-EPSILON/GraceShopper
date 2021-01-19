import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
import './css/app.css'

const App = () => {
  return (
    <>
      <Navbar />
      <div id="content">
        <Routes />
      </div>
    </>
  )
}

export default App
