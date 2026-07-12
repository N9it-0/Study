import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from './styles/globalstyles.js'
import { RouterProvider } from 'react-router-dom'
import router from './routes.jsx'

// import './index.css'
//import Home from './pages/Home'
//arquive that'll inicialize the app
createRoot(document.getElementById('root')).render(
  //REACT components AlWAYS start with an uppercase letter, 
  //So as to differenciate com a html tag.
  <StrictMode>
    <GlobalStyles />
    <RouterProvider router={router}/>
  </StrictMode>,
)
