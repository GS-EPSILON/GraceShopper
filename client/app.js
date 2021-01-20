import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
import {ToastContainer} from 'react-toastify'
import './css/app.css'

const App = () => {
  return (
    <>
      <Navbar />
      <div id="content">
        <ToastContainer />
        <Routes />
      </div>
    </>
  )
}

export default App
