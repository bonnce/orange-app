import IconButton from 'components/Buttons/iconButton'
import Nav from 'components/Navigation/nav'
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AnimatedRoutes from './components/routes/animatedRoutes'

function App() {
      return <BrowserRouter>
            <AnimatedRoutes />
      </BrowserRouter> 
}

export default App
